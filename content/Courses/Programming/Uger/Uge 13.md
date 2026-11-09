---
publish: true
title: "Programming uge 13: moduler"
course: Programming
type: week
week: 13
tags:
  - programming
  - ugenote
---

# Uge 13: Moduler

> Kilde: kursussiden programmering.compute.dtu.dk (linket som Material på DTU Learn for 02002), siderne Week 13: Preparation, In-Class og Closure. DTU Learn selv har intet indhold at læse for dette kursus. Pensum i bog: Kapitel 13, *Modules and Packages*, i *Whirlwind Tour of Python* (Jake VanderPlas). Tilsvarende indhold i Kaggle-tutorialen *Working with External Libraries*.

> Bemærk: Closure-siden for uge 13 viser en advarsel om, at den er sidste års version. Indholdet kan ændre sig lidt.

## Emner

- Import: standard, selektiv og alias
- Egne moduler
- `dir()` og `help()`
- Hvor moduler ligger, og installation af pakker

## Begreber

### Import

Der er tre almindelige former: `import m`, `from m import f` og `import m as alias`.

```python
import math
from math import sqrt
import numpy as np
print(math.pi, sqrt(9), np.arange(3))
```

### Egne moduler

En `.py`-fil kan importeres fra et andet script i samme mappe. Kode, der ikke skal køre ved import, lægges under `if __name__ == '__main__':`.

```python
# fil: raadyr.py
def opdater(r, f):
    return r * 1.1

if __name__ == '__main__':
    print(opdater(10, 5))

# i et andet script:
# import raadyr
# raadyr.opdater(10, 5)
```

### dir og help

`dir(modul)` lister navnene i et modul, og `help()` viser dokumentation.

```python
import math
print(dir(math)[:5])
help(math.sqrt)
```
### Arkitekturmodel: Modulopbygning og programstruktur

Større softwareprojekter opdeles i selvstændige moduler og pakker:

```text
  hovedprogram.py (Entry point: if __name__ == "__main__":)
       │
       ├── import databehandling.py (Funktioner til vask og parsning af data)
       ├── import model.py           (Klasser til beregning og optimering)
       └── import visualisering.py   (Matplotlib grafer og eksport)
```
Dette sikrer løs kobling (Loose Coupling) og høj genanvendelighed af koden.

## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 13.1: Importing a Module
- Prep 13.2: More About Importing
- Prep 13.3: The `dir` Function
- Prep 13.4: More on Modules
- Prep 13.5: Where Are Modules?
- Prep 13.6: Installing Packages
- Self Quiz: Question 13.1 til 13.10

**In-Class**

- Demo 13.1: Lines Containing
- Code 13.2: Predator-Prey Update
- Code 13.3: Predator-Prey Evolution
- Code 13.4: Predator-Prey Module
- Problem 13.5: Allee Effect Analysis

**Closure, checkpoints**

- Ingen checkpoints er listet endnu: kursussiden viser sidste års version af Closure-siden for uge 13.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[05 Løkker]]
