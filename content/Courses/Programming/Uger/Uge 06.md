---
publish: true
title: "Programming uge 6: lister"
course: Programming
type: week
week: 6
tags:
  - programming
  - ugenote
---

# Uge 6: Lister

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 6: Preparation, In-Class og Closure og Advanced. Pensum i bog: TP kapitel 9, *Lists*.

## Emner

- Oprettelse, indeksering og udsnit
- Lister er mutable
- Listemetoder og operatorer
- Reference mod kopi, `is` mod `==`
- Gennemløb af lister
- Rene funktioner og modificerende funktioner

## Begreber

### Indeksering og udsnit

Indeks starter ved 0, negative indeks tæller bagfra. Udsnit `l[a:b]` tager fra `a` til og med `b - 1`.

```python
l = [10, 20, 30, 40, 50]
print(l[0], l[-1])   # 10 50
print(l[1:4])        # [20, 30, 40]
print(l[::2])        # [10, 30, 50]
```

### Mutabilitet og metoder

Lister kan ændres på stedet. Metoder som `append()`, `extend()`, `pop()`, `sort()`, `count()`, `index()` og `copy()` er indbygget, og de fleste af dem ændrer selve listen.

```python
l = [3, 1, 2]
l.append(5)
l.sort()
print(l)        # [1, 2, 3, 5]
print(l.pop())  # 5
```

### Reference og kopi

`b = a` giver to navne til samme liste. Ændres den ene, ændres den anden. Brug `a.copy()` eller `list(a)` for en uafhængig kopi, og `is` for at tjekke, om det er det samme objekt.

```python
a = [1, 2]
b = a
c = a.copy()
b.append(3)
print(a)         # [1, 2, 3]
print(c)         # [1, 2]
print(a is b, a is c)   # True False
```

### Rene funktioner og modifier-funktioner

En ren funktion ændrer ikke sine argumenter og returnerer et nyt resultat. En modifier-funktion ændrer listen, den får som argument (fx med `append`) og returnerer typisk `None`.

```python
def tilfoej_ren(l, x):
    return l + [x]      # ny liste, l uændret

def tilfoej_modifier(l, x):
    l.append(x)         # l ændres, returnerer None
```

### Gennemløb

Man kan gå gennem en liste med `for x in l`. Ændrer man løkkevariablen, ændrer man ikke listen.

```python
l = [1, 2, 3]
for i in range(len(l)):
    l[i] = l[i] * 2
print(l)   # [2, 4, 6]
```

### Konstruktøren list()

`list('hej')` giver `['h', 'e', 'j']`, og `list(range(4))` giver `[0, 1, 2, 3]`. Funktionerne `min()`, `max()`, `sum()` og `len()` virker på lister.
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 6.1: Creating Lists
- Prep 6.2: List Indexing
- Prep 6.3: List Slicing
- Prep 6.4: Lists Are Mutable
- Prep 6.5: Functions for Lists
- Prep 6.6: List Operators
- Prep 6.7: List Methods
- Prep 6.8: Referencing Lists
- Prep 6.9: Iterating Over Lists
- Prep 6.10: List Constructors
- Prep 6.11: Functions Modifying Lists
- Prep 6.12: The `in` Operator
- Prep 6.13: Fix List Problems
- Prep 6.14: Fix List Errors
- Prep 6.15: Predict the Output
- Self Quiz: Question 6.1 til 6.21

**In-Class**

- Demo 6.1: Stable Measurements
- Demo 6.2: State Durations
- Code 6.3: Your Name
- Code 6.4: Powers of 2
- Code 6.5: Average of a List
- Code 6.6: Slicing the Months
- Code 6.7: Long Months
- Code 6.8: How Many Joshes?
- Code 6.9: Top `k` Elements
- Code 6.10: Is Available?
- Problem 6.11: Unique Values
- Problem 6.12: Best Buy
- Problem 6.13: Strategic Buy
- Problem 6.14: Duplicate Elements
- Problem 6.15: Water Height

**Closure, checkpoints**

- Checkpoint 6.1: Special Occurrence
- Checkpoint 6.2: First Double Peak

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 6. Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Mutable standardværdier i funktioner, og hvorfor None er en almindelig standardværdi.
- Hvorfor indeks starter ved 0 (offset fra start).
- enumerate og zip til løkker over flere lister.
- List comprehension.
- Opgaver: sum af kvadrater, sum af alt, primtal, lister af nuller, liste af funktioner, flere listemetoder, median og Pascals trekant.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[07 Lister]]
