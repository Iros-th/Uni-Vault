---
publish: true
title: "Programming uge 1: introduktion"
course: Programming
type: week
week: 1
tags:
  - programming
  - ugenote
---

# Uge 1: Introduktion

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 1: Preparation, In-Class og Closure og Advanced. Pensum i bog: Think Python (TP) kapitel 1, *Programming as a way of thinking*.

## Emner

- Hvad et program er, og hvordan Python køres (IDLE, terminal, notebook, browser)
- Interaktiv tilstand mod script-tilstand
- Variabler med `=`, `print()`, tal og tekststrenge
- Regneoperatorer og præcedens
- Kommentarer, syntaks og rækkefølge af udførelse

## Begreber

### Program og rækkefølge

Et program er en tekstfil med kommandoer, der køres linje for linje. Hver gang programmet kører, starter det forfra uden tidligere definitioner. Filer gemmes med endelsen `.py`.

```python
a = 3
b = 4
print(a + b)   # 7
print(a * b)   # 12
```

### Operatorer og parenteser

De almindelige operatorer er `+`, `-`, `*`, `**` (potens) og `/`. Præcedens er som i matematik, og parenteser styrer rækkefølgen. Funktionerne `abs()` og `round()` er indbyggede.

```python
print(2 + 3 * 4)     # 14
print((2 + 3) * 4)   # 20
print(2 ** 10)       # 1024
print(round(3.14159, 2))  # 3.14
```

### Måder at køre Python

I IDLE kan man bruge både interaktiv tilstand (linje for linje) og script-tilstand (en gemt `.py`-fil). Python kan også køres fra en terminal, i Jupyter notebooks (celler) og direkte i en browser. IDLE skal man kunne bruge, de øvrige skal man kende til.

### Tekst og kommentarer

Tekst skrives som strenge med enkelte eller dobbelte anførselstegn. Et `#` starter en kommentar, som Python ignorerer. Indrykning og store/små bogstaver har betydning i Python.

```python
navn = "Iros"
print("Hej", navn)   # Hej Iros
```
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Installer Python (se Python Support) og læs siden *Executing Python* under Additional material. Ingen Copy-and-Run eller quiz i uge 1.

**In-Class**

- Code 1.1: Create a Folder for This Course
- Code 1.2: Open IDLE
- Code 1.3: Use Interactive Python as a Calculator
- Code 1.4: Run Scripts from IDLE
- Code 1.5: Script with Computation
- Code 1.6: Order of Execution
- Code 1.7: Mathematics and Python
- Code 1.8: Checking Expressions (Buddy-Exercise)
- Code 1.9: Another Check (Buddy-Exercise)
- Code 1.10: Built-in Functions
- Code 1.11: Representing Text
- Code 1.12: Syntax in Python
- Code 1.13: Comments and Readability
- Problem 1.14: Cube Measurements
- Problem 1.15: Imperial to Metric
- Problem 1.16: Balloon Volume
- Problem 1.17: Event Probability
- Problem 1.18: Distance Traveled

**Closure, checkpoints**

- Checkpoint 1.1: Length of Hypotenuse (script `hypotenuse.py`, Pythagoras)
- Checkpoint 1.2: Atoms per Gram (script `atoms_per_gram.py`, $N = \frac{m}{M} N_A$ med $N_A \approx 6.022 \cdot 10^{23}$)

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 1. Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Køre et downloadet script (week01.zip, downloaded_python_script.py).
- Terminal: kommandolinjen til at køre Python og navigere i mapper (tutorials fra Django Girls og W3Schools).
- Interaktiv Python og scripts kørt fra terminalen.
- Flere detaljer om print() og input().
- Små opgaver: vejrrapport og tilfældighed.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[01 Variabler og datatyper]], [[03 Operatorer]]
