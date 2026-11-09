---
publish: true
title: "Programming uge 2: variabler og typer"
course: Programming
type: week
week: 2
tags:
  - programming
  - ugenote
---

# Uge 2: Variabler og typer

> Kilde: kursussiden programmering.compute.dtu.dk (linket som Material på DTU Learn for 02002), siderne Week 2: Preparation, In-Class og Closure. DTU Learn selv har intet indhold at læse for dette kursus. Pensum i bog: TP kapitel 2, *Variables and Statements* (spring state diagram over), plus de tre første afsnit af kapitel 5, *Conditionals and Recursion*.

## Emner

- Tildeling, udtryk og variabelnavne
- Typer: `int`, `float`, `str`, `bool`, og `type()`
- Omtildeling og sammensatte tildelinger (`+=` osv.)
- Strengoperatorer, `len()` og typekonvertering
- `%` og `//`, `max()`, `min()`, `math`-modulet
- Sammenligning og logiske operatorer
- Fejlmeddelelser

## Begreber

### Variabler og typer

En variabel er et navn, der peger på en værdi, og værdien har en type. `type()` viser typen. Variabelnavne må ikke starte med et tal og bør ikke overskrive indbyggede navne som `print`.

```python
x = 7
pris = 19.95
navn = 'Anna'
print(type(x), type(pris), type(navn))
# <class 'int'> <class 'float'> <class 'str'>
```

### Omtildeling og sammensat tildeling

En variabel kan få en ny værdi. `x += 1` er kort for `x = x + 1`, og tilsvarende for `-=`, `*=`, `/=`.

```python
x = 10
x += 5     # 15
x *= 2     # 30
print(x)
```

### Modulus og heltalsdivision

`//` runder ned til heltal, og `%` giver resten. Sammen bruges de til at omregne fx sekunder til timer og minutter.

```python
sekunder = 3725
timer = sekunder // 3600
rest = sekunder % 3600
minutter = rest // 60
print(timer, minutter, rest % 60)   # 1 2 5
```

### Typekonvertering og strenge

`int()`, `float()` og `str()` konverterer mellem typer. `+` sætter strenge sammen og `*` gentager dem.

```python
alder = 20
print('Jeg er ' + str(alder))
print('ha' * 3)        # hahaha
print(len('Python'))   # 6
```

### math-modulet

Med `import math` får man `math.sqrt()`, `math.sin()`, `math.exp()`, `math.log()`, `math.ceil()`, `math.floor()` og konstanten `math.pi`. Vinkler i `sin` og `cos` er i radianer.

```python
import math
print(math.sqrt(16))        # 4.0
print(math.degrees(math.atan(0.05)))
```

### Boolske udtryk

Sammenligninger (`==`, `!=`, `<`, `>`, `<=`, `>=`) giver `True` eller `False`. De kombineres med `and`, `or` og `not`.

```python
alder = 17
print(alder >= 18)                 # False
print(alder > 10 and alder < 20)   # True
```
### Hukommelsesmodel: Variabler som navnemærkater (Pointers til objekter)

I Python er en variabel ikke en "kasse" med data, men en navnemærkat (reference), der peger på et objekt i hukommelsen:

```text
       Navnerum (Stack/Namespace)             Objekt i Heap-hukommelsen
       ┌───────────┐                         ┌─────────────────────────┐
       │     a     │ ───────────────────────>│  Type: int              │
       ├───────────┤                         │  Værdi: 42              │
       │     b     │ ───────────────────────>│  Reference Count: 2     │
       └───────────┘                         └─────────────────────────┘
```
Hvis man skriver `b = a`, kopieres værdien 42 ikke. Begge navne peger blot på det samme int-objekt.

## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 2.1: Assignment Statement
- Prep 2.2: The Anatomy of an Assignment
- Prep 2.3: Revisiting Parentheses
- Prep 2.4: Variable Types
- Prep 2.5: Printing Multiple Things at Once
- Prep 2.6: Reassignments
- Prep 2.7: Augmented Assignment
- Prep 2.8: Operators on Strings
- Prep 2.9: Lists and Operators on Lists
- Prep 2.10: Boolean Variables
- Prep 2.11: Comparison Operators
- Prep 2.12: Logical Operators
- Prep 2.13: Useful Numeric Operators and Functions
- Prep 2.14: The Math Module
- Prep 2.15: Handling Errors
- Self Quiz: Question 2.1 til 2.21

**In-Class**

- Demo 2.1: Arrival Times
- Demo 2.2: Photo Grid
- Code 2.3: Triangle Side
- Code 2.4: Name and Age
- Code 2.5: Short Sentences
- Code 2.6: Adult
- Code 2.7: Are You a Student at DTU?
- Code 2.8: New Record
- Code 2.9: Full Rotations
- Code 2.10: Predict Execution
- Code 2.11: Swap Values
- Problem 2.12: Sphere Volume
- Problem 2.13: Bacterial Contamination
- Problem 2.14: Health Analysis
- Problem 2.15: Population Modeling
- Problem 2.16: Golf Stroke
- Problem 2.17: Normal Range
- Problem 2.18: Bed Fits

**Closure, checkpoints**

- Checkpoint 2.1: Road Angle (script `road_angle.py`, $\tan \alpha = g/100$)
- Checkpoint 2.2: Elapsed Time (script `elapsed_time.py`, sekunder til dage, timer, minutter og sekunder)

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[01 Variabler og datatyper]], [[03 Operatorer]]
