# tools

Small helper scripts for the vault.

## anki_export.py

Turns the flashcard notes into a CSV you can import into Anki. Stdlib only, no installs.

Run from the repo root:

```
python tools/anki_export.py
```

That writes `anki_cards.csv` (front,back). In Anki: File > Import, pick the file, set the separator to comma, map column 1 to Front and column 2 to Back.

Options: `--src <folder>` to scan a different folder (default `content/Flashcards`), `--out <file>` to change the output name.
