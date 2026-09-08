#!/usr/bin/env python3
"""Lightweight internal-link checker for the Quartz vault.

Scans every Markdown note under content/ and flags wikilinks ([[...]]) and
relative Markdown links ([text](path)) whose target does not match any note in
the vault. Resolution mirrors Quartz's "shortest" strategy loosely: a link is
considered valid if the final path segment matches some note's file name
(case-insensitive, with spaces and hyphens treated the same).

Exits 1 if any broken link is found, otherwise 0. Stdlib only.

    python tools/check_links.py
"""

import re
import sys
from pathlib import Path

CONTENT = Path("content")

WIKILINK_RE = re.compile(r"\[\[([^\]]+)\]\]")
MDLINK_RE = re.compile(r"(?<!\!)\[[^\]]*\]\(([^)]+)\)")

# Code spans and fenced code blocks hold syntax examples, not real links.
# Strip them before scanning so an illustrative `[[example]]` in a how-to note
# is not counted as a broken link.
FENCED_CODE_RE = re.compile(r"```.*?```", re.S)
INLINE_CODE_RE = re.compile(r"`[^`]*`")


def strip_code(text):
    text = FENCED_CODE_RE.sub("", text)
    text = INLINE_CODE_RE.sub("", text)
    return text


def norm(name):
    """Normalise a note name for loose matching."""
    name = name.strip().lower()
    name = name.replace("%20", " ")
    name = name.replace("-", " ").replace("_", " ")
    name = re.sub(r"\s+", " ", name)
    return name


def target_key(raw):
    """Reduce a link target to the final segment, without alias/anchor."""
    raw = raw.split("|", 1)[0]          # drop display alias
    raw = raw.split("#", 1)[0]          # drop heading anchor
    raw = raw.strip()
    if not raw:
        return None                     # pure same-page anchor, skip
    raw = raw.strip("/")
    segment = raw.split("/")[-1]
    return norm(segment)


def is_external(url):
    url = url.strip()
    return (
        url.startswith("http://")
        or url.startswith("https://")
        or url.startswith("mailto:")
        or url.startswith("#")
        or url.startswith("tel:")
        or url.startswith("data:")
    )


def main():
    if not CONTENT.exists():
        print("content/ folder not found; run from the repo root.", file=sys.stderr)
        return 1

    files = sorted(CONTENT.rglob("*.md"))
    known = set()
    for path in files:
        known.add(norm(path.stem))

    broken = []
    for path in files:
        text = strip_code(path.read_text(encoding="utf-8"))
        targets = []
        for m in WIKILINK_RE.finditer(text):
            targets.append(m.group(1))
        for m in MDLINK_RE.finditer(text):
            url = m.group(1)
            if is_external(url):
                continue
            targets.append(url)

        for raw in targets:
            key = target_key(raw)
            if key is None:
                continue
            if key not in known:
                broken.append((path, raw))

    if broken:
        print(f"Found {len(broken)} broken internal link(s):")
        for path, raw in broken:
            rel = path.relative_to(CONTENT)
            print(f"  {rel}: [[{raw}]]")
        return 1

    print(f"OK: checked {len(files)} note(s), no broken internal links.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
