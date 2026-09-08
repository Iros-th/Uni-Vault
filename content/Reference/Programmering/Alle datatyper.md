---
title: Alle Datatyper i Python & C++ - Komplet Reference
publish: true
type: reference
tags:
  - programmering
  - datatyper
  - python
  - cpp
---

# Alle Datatyper i Programmering

En komplet oversigt over datatyper, hvordan de opfører sig i hukommelsen, om de er mutable eller immutable, og hvordan du bruger dem i praksis.

---

## 1. Numeriske typer (Tal)

### `int` (Heltal)
- **Hvad er det**: Tal uden decimaler. I Python 3 har `int` vilkårlig præcision (kan blive uendeligt stort uden overflow). I C++ er `int` typisk 4 bytes ($-2^{31}$ til $2^{31}-1$).
- **Mutabilitet**: Immutable (kan ikke ændres på plads).
- **Eksempel**:
  ```python
  alder = 21
  stort_tal = 10**50  # Python håndterer dette automatisk
  ```

### `float` (Decimaltal / Flydende kommatal)
- **Hvad er det**: Tal med decimaler. Følger IEEE 754 standarden (dobbelt præcision, 64-bit float i Python, svarende til `double` i C++).
- **Vigtig detalje**: Decimaler er binære approksimationer. Derfor giver `0.1 + 0.2` værdien `0.30000000000000004`. Sammenlign altid floats med en tolerance (fx `abs(a - b) < 1e-9`), aldrig med `==`.
- **Eksempel**:
  ```python
  pi = 3.14159
  videnskabelig = 1.5e-4  # 0.00015
  ```

### `complex` (Komplekse tal)
- **Hvad er det**: Tal med en reel og en imaginær del ($a + bj$). Python bruger bogstavet `j` for den imaginære enhed.
- **Eksempel**:
  ```python
  z = 3 + 4j
  print(z.real)  # 3.0
  print(z.imag)  # 4.0
  ```

### `bool` (Boolske værdier)
- **Hvad er det**: Sandhedsværdi. Kun to mulige værdier: `True` eller `False` (med stort forbogstav). I Python er `bool` en underklasse af `int`, hvor `True == 1` og `False == 0`.
- **Eksempel**:
  ```python
  er_studerende = True
  er_faerdig = False
  ```

---

## 2. Tekst og Sekvenser (Sequences)

### `str` (Strenge / Tekst)
- **Hvad er det**: Tekst opbygget af Unicode-tegn, omgivet af simple eller dobbelte anførselstegn.
- **Mutabilitet**: **Immutable**. Du kan ikke overskrive et enkelt tegn i en streng (`s[0] = 'a'` kaster en TypeError).
- **Eksempel**:
  ```python
  navn = "Iros"
  besked = f"Hej {navn}, velkommen til DTU!"  # f-string
  ```

### `list` (Lister)
- **Hvad er det**: En ordnet, vilkårligt lang samling af elementer. Kan indeholde blandede datatyper.
- **Mutabilitet**: **Mutable** (kan tilføjes, slettes og ændres på plads).
- **Eksempel**:
  ```python
  tal = [1, 2, 3, 4]
  tal.append(5)      # [1, 2, 3, 4, 5]
  tal[0] = 99        # [99, 2, 3, 4, 5]
  ```

### `tuple` (Tupel)
- **Hvad er det**: En ordnet samling ligesom en liste, men **immutable**. Skrives med almindelige parenteser `()`.
- **Anvendelse**: Bruges til data der hører uløseligt sammen og ikke må ændres (fx koordinater `(x, y)` eller som nøgler i dictionaries).
- **Eksempel**:
  ```python
  punkt = (10.5, 20.0)
  x, y = punkt  # Unpacking
  ```

### `range` (Talrække)
- **Hvad er det**: En uforanderlig sekvens af tal, oftest brugt i for-løkker. Genererer tallene on-demand (lazy evaluation, bruger næsten ingen hukommelse).
- **Eksempel**:
  ```python
  r = range(1, 10, 2)  # 1, 3, 5, 7, 9
  ```

---

## 3. Mængder og Nøgle-Værdi Par (Mappings & Sets)

### `dict` (Dictionary / Ordbog)
- **Hvad er det**: En samling af nøgle-værdi par (`key: value`). Nøgler skal være hashable (dvs. immutable typer som `str`, `int`, `tuple`). Opslag tager $O(1)$ gennemsnitlig tid.
- **Mutabilitet**: **Mutable**.
- **Eksempel**:
  ```python
  kursus = {"kode": "01005", "navn": "Matematik 1A", "ects": 10}
  print(kursus.get("kode"))  # Sikker hentning, returnerer None hvis mangler
  ```

### `set` (Mængde)
- **Hvad er det**: En uordnet samling af unikke elementer (fjerner automatisk dubletter). Understøtter mængdeoperationer som forening (`|`), snit (`&`) og differens (`-`).
- **Mutabilitet**: **Mutable**.
- **Eksempel**:
  ```python
  fag = {"mat", "kemi", "fysik", "mat"}  # {"mat", "kemi", "fysik"}
  ```

### `frozenset` (Frossen mængde)
- **Hvad er det**: Samme som `set`, men **immutable**. Kan derfor bruges som nøgle i en dictionary eller element i et andet set.

---

## 4. Specialtyper

### `NoneType` (`None`)
- **Hvad er det**: Pythons version af `null` eller `nil`. Repræsenterer fraværet af en værdi. Funktioner uden eksplicit `return` returnerer `None`.
- **Sammenligning**: Sammenlignes altid med `is` eller `is not` (fx `if x is None:`), aldrig `==`.

---

## 5. Hurtig Oversigt: Mutabilitet & Tegn

| Datatype | Python type | Skrives med | Mutable? | Kan indeholde dubletter? |
|---|---|:---:|:---:|:---:|
| Heltal | `int` | `42` | Nej | - |
| Decimaltal | `float` | `3.14` | Nej | - |
| Sandhedsværdi | `bool` | `True` / `False` | Nej | - |
| Tekst | `str` | `"tekst"` | Nej | Ja |
| Liste | `list` | `[1, 2, 3]` | **Ja** | Ja |
| Tupel | `tuple` | `(1, 2, 3)` | Nej | Ja |
| Mængde | `set` | `{1, 2, 3}` | **Ja** | **Nej** |
| Dictionary | `dict` | `{"a": 1}` | **Ja** | Nøgler: Nej, Værdier: Ja |
| Ingenting | `NoneType` | `None` | Nej | - |
