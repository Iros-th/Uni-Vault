---
title: String Metoder i Python - Komplet Opslag
publish: true
type: reference
tags:
  - programmering
  - python
  - strings
---

# String Metoder i Python

Strenge (`str`) er **immutable** i Python. Enhver metode, der ændrer en streng, returnerer en **ny** streng uden at røre den oprindelige.

## 1. De vigtigste metoder

| Metode | Hvad den gør | Eksempel | Resultat |
|---|---|---|---|
| `.strip()` | Fjerner blanktegn (mellemrum, tabs, linjeskift) fra start og slut | `"  hej\n ".strip()` | `"hej"` |
| `.split(sep)` | Deler strengen op i en liste ved `sep` | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `sep.join(liste)` | Samler en liste af strenge med `sep` imellem | `"-".join(["2026", "09", "08"])`| `"2026-09-08"` |
| `.replace(gammel, ny)` | Udskifter alle forekomster af en delstreng | `"hej verden".replace("verden", "DTU")` | `"hej DTU"` |
| `.lower()` / `.upper()` | Gør alle bogstaver små / store | `"Matematik".lower()` | `"matematik"` |
| `.startswith(tekst)` | Returnerer `True` hvis strengen starter med `tekst` | `"rapport.pdf".startswith("rap")` | `True` |
| `.endswith(tekst)` | Returnerer `True` hvis strengen slutter med `tekst` | `"billede.png".endswith(".png")` | `True` |
| `.find(tekst)` | Returnerer første indeks hvor `tekst` findes (eller `-1`) | `"Python".find("th")` | `2` |
| `.count(tekst)` | Tæller hvor mange gange `tekst` optræder | `"banana".count("an")` | `2` |

## 2. Formatering (f-strings er standarden)

```python
navn = "Iros"
point = 94.5678

# Afrunding til 2 decimaler i f-string:
print(f"Elev {navn} opnåede {point:.2f} point.")
# Output: Elev Iros opnåede 94.57 point.

# Udfyldning med nuller (padding):
tal = 42
print(f"ID: {tal:05d}")
# Output: ID: 00042
```
