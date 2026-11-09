---
publish: true
title: "Programming uge 5: funktioner"
course: Programming
type: week
week: 5
tags:
  - programming
  - ugenote
---

# Uge 5: Funktioner

> Kilde: kursussiden programmering.compute.dtu.dk (linket som Material på DTU Learn for 02002), siderne Week 5: Preparation, In-Class og Closure. DTU Learn selv har intet indhold at læse for dette kursus. Pensum i bog: TP kapitel 3, *Functions* (spring stack diagrams over), og de fem første afsnit af kapitel 6, *Return Values*.

## Emner

- `def`, parametre og argumenter
- `return` mod void-funktioner og `None`
- Scope
- Tracebacks
- Test og dokumentation af funktioner
- Overgang til VS Code

## Begreber

### Definition og kald

En funktion defineres med `def`, har parametre i parentes og en indrykket krop. Parametre er navnene i definitionen, argumenter er værdierne ved kaldet.

```python
def areal(r):
    return 3.14159 * r ** 2

print(areal(2))
```

### return og None

En funktion med `return` giver en værdi tilbage. En funktion uden `return` kaldes void og giver `None`. At `print` en værdi er ikke det samme som at returnere den.

```python
def kvadrat(x):
    return x * x

def hils(navn):
    print('Hej', navn)

y = kvadrat(4)    # 16
z = hils('Ida')   # z er None
```

### Scope

Variable defineret inde i en funktion findes kun dér. Parametre og lokale variable forsvinder, når funktionen er færdig.

### Test og dokumentation

Skriv funktioner trin for trin, start gerne som et almindeligt script. Test med kendte svar, og beskriv funktionen med en docstring.

```python
def naeste_lige(n):
    """Returnerer det mindste lige tal, der er strengt større end n."""
    return n + 2 if n % 2 == 0 else n + 1

assert naeste_lige(4) == 6
assert naeste_lige(5) == 6
```

### Rekursivt tal

Lucas-tal (checkpointet) er som Fibonacci: $L_0 = 2$, $L_1 = 1$ og $L_i = L_{i-1} + L_{i-2}$. Det kan løses med en løkke og to variable.

```python
def lucas(i):
    a, b = 2, 1
    for _ in range(i):
        a, b = b, a + b
    return a

print(lucas(3))   # 4
```
### Scope-model: LEGB-reglen for variabelopslag

Når en variabel kaldes, leder Python efter navnet i fire lag fra inderst til yderst:

```text
  ┌────────────────────────────────────────────────────────┐
  │ Local (L): Inde i den aktuelle funktion               │
  │   ┌──────────────────────────────────────────────────┐ │
  │   │ Enclosing (E): Inde i omsluttende funktioner     │ │
  │   │   ┌────────────────────────────────────────────┐ │ │
  │   │   │ Global (G): Filens øverste niveau          │ │ │
  │   │   │   ┌──────────────────────────────────────┐ │ │ │
  │   │   │   │ Built-in (B): len, range, print osv. │ │ │ │
  │   │   │   └──────────────────────────────────────┘ │ │ │
  │   │   └────────────────────────────────────────────┘ │ │
  │   └──────────────────────────────────────────────────┘ │
  └────────────────────────────────────────────────────────┘
```
En funktion kan læse globale variable, men forsøg på at overskrive dem uden `global`-nøgleordet opretter blot en ny lokal variabel med samme navn.

## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 5.1: Basics of Functions
- Prep 5.2: Functions That Return Values
- Prep 5.3: Function Scope
- Prep 5.4: Functions That Call Other Functions
- Prep 5.5: Tracebacks
- Prep 5.6: Testing Functions
- Prep 5.7: Functions in Interactive Mode
- Prep 5.8: Function Requirements
- Prep 5.9: Debug Functions
- Prep 5.10: Predict the Output
- Self Quiz: Question 5.1 til 5.21

**In-Class**

- Demo 5.1: Fall Duration
- Demo 5.2: Customized Greeting
- Code 5.3: Function Testing (Buddy-Exercise)
- Code 5.4: Number Digits
- Code 5.5: Next Even
- Code 5.6: Cylinder Volume
- Problem 5.7: Parts to Ratio
- Problem 5.8: Dilute Solution
- Problem 5.9: Profit Margin
- Problem 5.10: Beam Deflection
- Problem 5.11: Wind Chill
- Problem 5.12: Bacterial Growth
- Problem 5.13: Which Fibonacci?

**Closure, checkpoints**

- Checkpoint 5.1: Normal Range (funktion `normal_range(height)` i `normal_range.py`, returnerer en streng; testscript `test_normal_range.py` ligger på kursussiden)
- Checkpoint 5.2: Lucas Number (funktion `lucas_number(i)` i `lucas_number.py`, testscript `test_lucas_number.py`). Fra uge 5 kan checkpoints afleveres under Assignments (frivilligt).

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[06 Funktioner]]
