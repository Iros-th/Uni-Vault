---
title: Alle Operatorer i Python - Komplet Opslag
publish: true
type: reference
tags:
  - programmering
  - operatorer
  - python
---

# Alle Operatorer i Python

## 1. Aritmetiske operatorer (Matematiske udregninger)

| Operator | Navn | Eksempel | Resultat | Forklaring |
|:---:|---|:---:|:---:|---|
| `+` | Addition | `5 + 2` | `7` | Lægger to tal sammen (eller konkatenerer strenge/lister) |
| `-` | Subtraktion | `5 - 2` | `3` | Trækker højre tal fra venstre |
| `*` | Multiplikation | `5 * 2` | `10` | Ganger to tal sammen (eller gentager strenge) |
| `/` | Division | `5 / 2` | `2.5` | Returnerer **altid** en `float` |
| `//` | Heltalsdivision (Floor) | `5 // 2` | `2` | Runder ned til nærmeste hele tal |
| `%` | Modulo (Rest) | `5 % 2` | `1` | Resten efter heltalsdivision ($5 = 2 \cdot 2 + 1$) |
| `**` | Potens | `5 ** 2` | `25` | 5 i anden potens ($5^2$) |

## 2. Sammenligningsoperatorer (Returnerer `bool`)

| Operator | Betydning | Eksempel | Sandt hvis: |
|:---:|---|:---:|---|
| `==` | Lig med | `a == b` | Værdierne af $a$ og $b$ er ens |
| `!=` | Forskellig fra | `a != b` | Værdierne af $a$ og $b$ er forskellige |
| `>` | Større end | `a > b` | $a$ er strengt større end $b$ |
| `<` | Mindre end | `a < b` | $a$ er strengt mindre end $b$ |
| `>=` | Større end eller lig med | `a >= b` | $a$ er større end eller lig med $b$ |
| `<=` | Mindre end eller lig med | `a <= b` | $a$ er mindre end eller lig med $b$ |

## 3. Logiske operatorer (Kombinerer betingelser)

| Operator | Eksempel | Betydning | Short-circuit adfærd |
|:---:|:---:|---|---|
| `and` | `x > 0 and x < 10` | Sand hvis BÅDE venstre og højre er sand | Evaluerer kun højre side, hvis venstre er sand |
| `or` | `x < 0 or x > 10` | Sand hvis MINDST ÉN af siderne er sand | Evaluerer kun højre side, hvis venstre er falsk |
| `not` | `not er_aktiv` | Vender sandhedsværdien om | `not True` er `False` |

## 4. Identitets- og Medlemskabsoperatorer

- **`is` / `is not` (Identitet)**:
  Tester om to variabler peger på det **præcist samme objekt i hukommelsen** (samme `id()`).
  Brug altid `is` ved `None`:
  ```python
  if resultat is None:
      print("Ingen værdi")
  ```
- **`in` / `not in` (Medlemskab)**:
  Tester om et element findes inde i en sekvens (streng, liste, tupel, set eller dictionary-nøgler).
  ```python
  if "DTU" in "Velkommen til DTU":
      print("Fundet!")
  ```

## 5. Bitwise operatorer (Arbejder på binære bits)

| Operator | Navn | Eksempel | Binær forklaring |
|:---:|---|:---:|---|
| `&` | Bitwise AND | `5 & 3` (`101 & 011 = 001 = 1`) | 1 hvis begge bits er 1 |
| `\|` | Bitwise OR | `5 \| 3` (`101 \| 011 = 111 = 7`) | 1 hvis mindst én bit er 1 |
| `^` | Bitwise XOR | `5 ^ 3` (`101 ^ 011 = 110 = 6`) | 1 hvis præcis én bit er 1 |
| `~` | Bitwise NOT | `~5` (`- (5 + 1) = -6`) | Inverterer alle bits |
| `<<` | Venstreskift | `5 << 1` (`1010 = 10`) | Ganger med $2^n$ |
| `>>` | Højreskift | `5 >> 1` (`0010 = 2`) | Heltalsdividerer med $2^n$ |
