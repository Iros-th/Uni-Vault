#!/usr/bin/env python3
"""Export the vault's flashcards to a plain CSV you can import into Anki.

Reads the Obsidian "question" callouts in the Flashcards notes, for example:

    > [!question]- What does a variable do in Python?
    > It puts a name on a value so you can reuse it later.

and writes one row per card as front,back.

Stdlib only, no dependencies. Run it from the repo root:

    python tools/anki_export.py

Options:
    python tools/anki_export.py --src content/Flashcards --out anki_cards.csv

In Anki: File > Import, pick the CSV, set the separator to comma and map
column 1 to Front and column 2 to Back.
"""

import argparse
import csv
import re
import sys
from pathlib import Path

# Matches a callout title line like:  > [!question]- Front text here
# The type can be question/faq/etc; the +/- fold marker is optional.
TITLE_RE = re.compile(r"^\s*>\s*\[!(?P<type>[a-zA-Z-]+)\][+-]?\s*(?P<front>.*?)\s*$")
# Continuation body line:  > answer text
BODY_RE = re.compile(r"^\s*>\s?(?P<body>.*?)\s*$")

CARD_TYPES = {"question", "faq", "quiz"}


def parse_cards(text):
    """Yield (front, back) tuples from one note's text."""
    lines = text.splitlines()
    i = 0
    n = len(lines)
    while i < n:
        m = TITLE_RE.match(lines[i])
        if m and m.group("type").lower() in CARD_TYPES:
            front = m.group("front").strip()
            body_parts = []
            i += 1
            # collect following quoted lines as the answer body
            while i < n:
                bm = BODY_RE.match(lines[i])
                if not bm or not lines[i].lstrip().startswith(">"):
                    break
                piece = bm.group("body").strip()
                body_parts.append(piece)
                i += 1
            back = " ".join(p for p in body_parts if p).strip()
            if front and back:
                yield front, back
        else:
            i += 1


def main(argv=None):
    parser = argparse.ArgumentParser(description="Export flashcards to Anki CSV.")
    parser.add_argument(
        "--src",
        default="content/Flashcards",
        help="folder to scan for flashcard notes (default: content/Flashcards)",
    )
    parser.add_argument(
        "--out",
        default="anki_cards.csv",
        help="output CSV file (default: anki_cards.csv)",
    )
    args = parser.parse_args(argv)

    src = Path(args.src)
    if not src.exists():
        print(f"Source folder not found: {src}", file=sys.stderr)
        return 1

    cards = []
    files = sorted(src.rglob("*.md"))
    for path in files:
        try:
            text = path.read_text(encoding="utf-8")
        except OSError as exc:
            print(f"Skipping {path}: {exc}", file=sys.stderr)
            continue
        cards.extend(parse_cards(text))

    out = Path(args.out)
    with out.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        for front, back in cards:
            writer.writerow([front, back])

    print(f"Wrote {len(cards)} cards from {len(files)} file(s) to {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
