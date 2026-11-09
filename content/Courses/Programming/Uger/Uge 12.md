---
publish: true
title: "Programming uge 12: numpy og matplotlib"
course: Programming
type: week
week: 12
tags:
  - programming
  - ugenote
---

# Uge 12: NumPy og Matplotlib

> Kilde: kursussiden programmering.compute.dtu.dk (linket som Material på DTU Learn for 02002), siderne Week 12: Preparation, In-Class og Closure. DTU Learn selv har intet indhold at læse for dette kursus. Pensum i bog: Ingen bogkapitel. Kursussiden henviser til NumPys *Absolute Beginners Tutorial*, W3Schools (NumPy og Matplotlib) og Matplotlibs *Quick Start*.

## Emner

- NumPy-arrays og vektoriserede operationer
- Funktioner som `numpy.sqrt()`, `numpy.exp()`, `numpy.mean()`, `numpy.std()`
- Indeksering, udsnit og boolsk indeksering
- Forallokering
- 2D-arrays
- Matplotlib: linjer, søjler, etiketter, forklaring og titel

## Begreber

### Arrays og element-vis regning

Et NumPy-array regner element for element, uden løkke.

```python
import numpy as np
x = np.array([1, 2, 3, 4])
print(x * 2)          # [2 4 6 8]
print(np.sqrt(x))
print(x.mean(), x.std())
```

### Boolsk indeksering

En betingelse på et array giver et boolsk array, som kan bruges til at udvælge elementer.

```python
d = np.array([31, 28, 31, 30])
print(d[d > 30])       # [31 31]
print(np.sum(d > 30))  # 2
```

### Forallokering

Hvis længden kendes, kan man oprette et array på forhånd og fylde det ud i en løkke.

```python
y = np.zeros(5)
for i in range(5):
    y[i] = i ** 2
```

### Matplotlib

`plt.plot()` tegner linjer og `plt.bar()` søjler. Tilføj akseetiketter, titel og forklaring.

```python
import matplotlib.pyplot as plt
x = np.linspace(0, 2 * np.pi, 100)
plt.plot(x, np.sin(x), label='sin')
plt.xlabel('x')
plt.legend()
plt.show()
```
### Beregningsmodel: NumPy vektorisering vs. Python lister

NumPy gemmer tal som tætpakkede C-arrays i sammenhængende hukommelse og udnytter CPU'ens SIMD-instruktioner:

```text
  Python liste af tal:
  [ pointer ] -> [ PyObject: int 1 ]
  [ pointer ] -> [ PyObject: int 2 ]   <- Fragmenteret heap-hukommelse, overhead!
  [ pointer ] -> [ PyObject: int 3 ]

  NumPy ndarray (Vektoriseret):
  ┌──────┬──────┬──────┐
  │  1   │  2   │  3   │  <- Tætpakket C-array: a + b beregnes i én hardwarecyklus!
  └──────┴──────┴──────┘
```

## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 12.1: NumPy Array
- Prep 12.2: Element-Wise Operations
- Prep 12.3: Mathematical Operations
- Prep 12.4: Boolean Operators
- Prep 12.5: Indexing
- Prep 12.6: Mutability and Preallocation
- Prep 12.7: 2D Arrays
- Prep 12.8: Matplotlib
- Self Quiz: Question 12.1 til 12.20

**In-Class**

- Demo 12.1: Smooth Curve
- Code 12.2: Powers of 2
- Code 12.3: Months with More than `d` Days
- Code 12.4: Math Functions
- Code 12.5: Counting Integers
- Problem 12.6: Is the CPR Number Valid?
- Problem 12.7: Node Divergence
- Problem 12.8: Growth Curve of Bacteria
- Problem 12.9: Flowering Plants

**Closure, checkpoints**

- Checkpoint 12.1: Checkerboard Sum
- Checkpoint 12.2: Robust Values

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[07 Lister]]
