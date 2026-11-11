---
publish: true
title: "Programming uge 3: betingelser"
course: Programming
type: week
week: 3
tags:
  - programming
  - ugenote
---

# Uge 3: Betingelser

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 3: Preparation, In-Class og Closure og Advanced. Pensum i bog: TP kapitel 5, *Conditionals and Recursion*, afsnittene om if, else, kædede og indlejrede betingelser.

## Emner

- `if`, `else`, `elif` og indlejrede betingelser
- Indrykning som scope
- Boolske variable som betingelse
- Strengsammenligning
- Fejlfinding med `print()`

## Begreber

### if og else

En `if`-sætning kører sin indrykkede blok, kun hvis betingelsen er `True`. `else` tager de øvrige tilfælde.

```python
temp = -2
if temp < 0:
    print('Frost')
else:
    print('Ingen frost')
```

### elif

Kædede betingelser med `elif` afprøves oppefra og ned, og kun den første sande gren køres. Rækkefølgen er derfor vigtig.

```python
karakter = 7
if karakter >= 10:
    print('Meget godt')
elif karakter >= 2:
    print('Bestået')
else:
    print('Ikke bestået')
```

### Indlejrede betingelser og boolske variable

En betingelse kan ligge inde i en anden, eller man kan gemme resultatet i en boolsk variabel og bruge den som betingelse. Det gør kode lettere at læse.

```python
alder = 25
studerende = True
rabat = alder < 30 and studerende
if rabat:
    print('Rabat')
```

### Fejlfinding

Logiske fejl giver kode, der kører, men giver forkert resultat. Sæt `print()` ind for at se, hvilken gren der faktisk køres, og hvilke værdier variablene har.

```python
x = 5
print('x er', x)   # spor
if x > 3:
    print('stor')
```
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 3.1: Basic If Statements
- Prep 3.2: The Anatomy of an If Statement
- Prep 3.3: Changing the Condition
- Prep 3.4: Using Boolean Variables as Conditions
- Prep 3.5: The If-Else Statement
- Prep 3.6: Nested If Statements
- Prep 3.7: The Elif Clause
- Prep 3.8: The Flow of Control
- Prep 3.9: Conditionals in Use
- Prep 3.10: Comparing Strings
- Prep 3.11: Debug Syntax Errors in Conditionals
- Prep 3.12: Debug Logical Errors in Conditionals
- Prep 3.13: Predict the Output
- Self Quiz: Question 3.1 til 3.20

**In-Class**

- Demo 3.1: Tank Safety
- Demo 3.2: Blood Pressure
- Code 3.3: Frost Warning
- Code 3.4: Fix Buggy Code
- Code 3.5: Ordinal for Digit
- Code 3.6: Special Case
- Problem 3.7: Body Temperature
- Problem 3.8: Valid Class
- Problem 3.9: Risk of Heart Attack
- Problem 3.10: Triangle Type
- Problem 3.11: Battery Status
- Problem 3.12: Water Quality

**Closure, checkpoints**

- Checkpoint 3.1: Astronomical Season (variablene `day`, `month`, resultat i `season`)
- Checkpoint 3.2: Flowering Period (variablene `start`, `end`, `current`, resultat `is_flowering`)

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 3. Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Ikke-booleske betingelser: Python caster tal og strenge til bool (0, 0.0 og tom streng er False).
- Betingede udtryk i tildeling på én linje.
- Nøgleordet pass som tom blok.
- Betingelser over flere linjer med parenteser.
- Opgave: gættespillet.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[04 Betingelser]]
