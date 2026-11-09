---
title: Kørekort – fejl-log
publish: false
type: log
tags:
  - kørekort
  - teoriprøve
  - fejl
created: 2026-10-11
---

# Fejl-log – teoriprøve

Én række pr. forkert svar. Emne = afsnit fra [[Kørekort/Plan#6. Pensum-tjekliste (afsnit fra undervisningsplanen)|pensum-tjeklisten]]. Appen `Desktop\korekort\index.html` er den interaktive version (rangering + gentagelseskø). Denne fil er backup og det Claude skriver i, når du sender screenshots.

## Workflow

1. Forkert svar på en øveprøve → screenshot (helst med facit synligt).
2. Enten: indsæt i appen (Ctrl+V) og udfyld emne/facit/hvorfor.
   Eller: indsæt screenshot i chatten med Claude → Claude tilføjer en række her og giver en JSON-blok til appens **Importér**.
3. Hver aften: eksportér appen til JSON (knappen **Eksportér**) og læg filen i denne mappe som `fejl-backup-ÅÅÅÅ-MM-DD.json`.

## Svageste emner (opdateres ved review)

| # | Emne | Antal fejl | Sidst set |
|---|---|---|---|
| 1 | – | – | – |
| 2 | – | – | – |
| 3 | – | – | – |

## Log

| Dato | Kilde | Emne (afsnit) | Spørgsmål (kort) | Mit svar | Rigtigt svar | Hvorfor | Gentaget OK? |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## JSON-format til appen

Claude leverer importblokke i dette format (appens **Importér** fletter dem ind uden at overskrive):

```json
{"app":"korekort-fejl","version":1,"items":[
{"id":"c-2026-10-11-01","created":"2026-10-11T10:00:00Z","topic":"7.11","source":"dtp.fstyr.dk","question":"Kryds uden tavler, bil fra højre","myAnswer":"Jeg kører først","correct":"Holde tilbage – højre vigepligt","why":"Ingen hajtænder/tavler → højre vigepligt gælder","img":""}
]}
```

`topic` er afsnitskoden (fx `1`, `6.1`, `7.11`, `7.15`, `8`). Se emnelisten i appen.
