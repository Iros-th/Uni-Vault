---
title: Vault Ideas Gauntlet (reconstructed)
tags:
  - meta
  - project
---

# Vault Ideas Gauntlet (reconstructed)

> [!warning] This is a reconstruction
> The original gauntlet document was not found anywhere in this repository or its git history. It most likely lives in a separate outputs folder that could not be reached from this session. The idea list below was reconstructed from what a Quartz v4 digital garden study vault would want, then each idea was audited against the actual files and config in this repo. Scores are a benefit estimate on a 1 to 10 scale, not the owner's original numbers.

This note has no `publish: true`, so it stays out of the built site (the ExplicitPublish filter drops it). It is an internal accounting of every idea and where it stands.

## Ranked accounting

Sorted by benefit, highest first. Status is one of: already there, newly built this pass, or skipped with a reason.

| Idea | Verdict / score (reconstructed) | Status |
| --- | --- | --- |
| Full-text search (Ctrl+K) | 10 essential | already there (Search in layout) |
| Explicit publish gate for privacy | 10 essential | already there (ExplicitPublish filter) |
| KaTeX math rendering | 10 essential | already there (Latex plugin) |
| Interactive graph view | 9 build | already there (Graph in layout) |
| Backlinks | 9 build | already there (Backlinks in layout) |
| Syntax highlighting for code | 9 build | already there (SyntaxHighlighting) |
| Dark and light mode | 9 build | already there (Darkmode) |
| Wikilinks with shortest resolution | 9 build | already there (CrawlLinks) |
| Formelsamling (formula sheets) | 9 build | already there (Formelsamling section) |
| Table of contents | 8 build | already there (TableOfContents) |
| Explorer folder tree | 8 build | already there (Explorer) |
| Tags and tag pages | 8 build | already there (TagList + TagPage) |
| Custom LaTeX macros | 8 build | already there (customMacros in config) |
| Warm academic theme | 8 build | already there (custom.scss + theme) |
| Sticky top nav bar | 8 build | already there (VaultNav) |
| Course dashboard grid on homepage | 8 build | already there (index.md + course-grid) |
| Flashcards (reveal on click) | 8 build | already there (Flashcards section) |
| Self-tests per course | 8 build | already there (Self-Tests section) |
| Reference: math symbols | 8 build | already there (Reference/Matematik) |
| Interactive periodic table | 8 build | already there (Reference/Kemi) |
| Mobile responsive layout | 8 build | already there (Quartz core + media queries) |
| Exam prep hub | 8 build | newly built this pass (Exam-Prep.md + nav link) |
| Code copy buttons | 7 build | already there (Quartz core + styling) |
| Breadcrumbs | 7 build | already there (Breadcrumbs) |
| Hover popovers | 7 build | already there (enablePopovers) |
| SPA navigation | 7 build | already there (enableSPA) |
| Callouts | 7 build | already there (OFM + callouts.scss) |
| Contact page with form | 7 build | already there (Contact.md + FormSubmit) |
| Homepage start-here guide | 7 build | already there (index.md tip callout) |
| Cheat sheets per course | 7 build | already there (Programming, Applied math) |
| Past exams pages | 7 build | already there (two courses) |
| Reference: trig identities | 7 build | already there |
| Study roadmap / learning path | 7 build | newly built this pass (Study-Roadmap.md) |
| Spaced repetition (real SRS) | 7 nice | skipped: needs an app or backend such as Anki; reveal-on-click flashcards are the static stand-in, already acknowledged on the Flashcards page |
| Reading time and dates | 6 build | already there (ContentMeta + CreatedModifiedDate) |
| Aliases and redirects | 6 build | already there (AliasRedirects) |
| Custom fonts | 6 build | already there (googleFonts typography) |
| How-to-use page | 6 build | already there (how-to-use-this-vault.md) |
| Glossary EN | 6 build | already there (Glossary.md) |
| Ordbog DA | 6 build | already there (Ordbog.md) |
| Reference: logic symbols | 6 build | already there |
| Reference: math constants | 6 build | already there |
| Reference: number sets | 6 build | already there |
| Reference: chem constants | 6 build | already there |
| Reference: chem symbols and notation | 6 build | already there |
| Reference: functional groups | 6 build | already there |
| Reference: all datatypes | 6 build | already there |
| Per-course Begreber (concepts) | 6 build | already there |
| RSS feed | 6 build | already there (ContentIndex enableRSS) |
| Sitemap | 6 build | already there (ContentIndex enableSiteMap) |
| Static OG social image and meta | 6 build | already there (og-image.png wired in Head) |
| Print stylesheet for cheat sheets | 6 build | already there (custom.scss print block) |
| Mermaid diagram support | 6 nice | already there (Obsidian Flavored Markdown) |
| Reference section hub index | 6 build | newly built this pass (Reference/index.md) |
| Recently updated list | 6 build | newly built this pass (RecentNotes in sidebar) |
| Floating contact button | 5 nice | already there (ContactButton) |
| Reference: all operators | 5 build | already there |
| Reference: control structures | 5 build | already there |
| Reference: string methods | 5 build | already there |
| Reference: error types | 5 build | already there |
| Per-course Pensum (syllabus) | 5 build | already there |
| Custom 404 page | 5 build | already there (NotFoundPage) |
| Twitter card meta | 5 build | already there (Head) |
| Reader mode | 5 nice | already there (ReaderMode) |
| Changelog / what is new | 5 nice | newly built this pass (Changelog.md) |
| Comments (Giscus) | 5 nice | skipped: needs GitHub Discussions enabled, the giscus app installed, and real repo and category IDs; the static assets are present but wiring placeholder IDs would break the page |
| Web analytics | 5 nice | skipped: needs an external account (Plausible, GoatCounter, etc.); analytics is null by design for privacy |
| Status badges on cards | 4 polish | already there (custom.scss) |
| Course template | 4 polish | already there (_Course-Template.md, intentionally unpublished) |
| Favicon | 4 polish | already there (Favicon emitter + icon.png) |
| Math overflow scroll protection | 4 polish | already there (katex-display) |
| Browse-all-tags link surfaced | 4 polish | newly built this pass (link on homepage) |
| Nav link to exam prep | 4 polish | newly built this pass (VaultNav) |
| SMS notification on contact | 4 nice | skipped: needs a paid backend such as Twilio; acknowledged on the Contact page |
| Per-page OG image generator (satori) | 4 nice | newly built this pass (CustomOgImages re-enabled; the online Actions build has network, and a font not on Google Fonts fails gracefully so it cannot break the build) |
| Table zebra and row hover | 3 polish | already there (custom.scss) |
| Newsletter / email subscribe | 3 nice | skipped: needs a backend or list service |
| Custom domain (CNAME) | 3 nice | skipped: no domain owned; owner decision |
| robots.txt | 3 nice | newly built this pass (courtesy copy with a sitemap pointer at /Uni-Vault/robots.txt; the authoritative robots.txt still lives at the user-site root this repo does not control) |
| Animated link underlines | 2 polish | already there (custom.scss) |
| Editorial blockquotes | 2 polish | already there (custom.scss) |
| Smooth anchor scrolling | 2 polish | already there (custom.scss) |

## Summary

Almost the entire beneficial set was already implemented in earlier passes. This pass closed the remaining doable gaps: an exam prep hub, a study roadmap, a reference hub index, a recently-updated sidebar list, a changelog, and small discovery links. Everything left in the skipped column needs a server, a paid service, an external account, or a domain, and cannot run on a static GitHub Pages subpath site.
