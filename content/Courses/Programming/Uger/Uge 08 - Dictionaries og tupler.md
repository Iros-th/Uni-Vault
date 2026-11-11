---
publish: true
title: "Programming uge 8: dictionaries og tupler"
course: Programming
type: week
week: 8
tags:
  - programming
  - ugenote
---

# Uge 8: Dictionaries og tupler

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 8: Preparation, In-Class og Closure og Advanced. Pensum i bog: TP kapitel 10, *Dictionaries* (spring afsnittet om memos over), og de første fire afsnit af kapitel 11, *Tuples*.

## Emner

- Dictionaries: nøgler og værdier
- `in` virker på nøgler
- Gennemløb af dictionaries
- Tupler, tupel-tildeling og returnering af tupler

## Begreber

### Dictionary

En dictionary er en samling af par `nøgle: værdi`. Nøglerne er unikke og skal være immutable. Man kan tilføje, ændre og slette par.

```python
lager = {'æble': 5, 'pære': 2}
lager['banan'] = 7
lager['æble'] += 1
del lager['pære']
print(lager)      # {'æble': 6, 'banan': 7}
print('æble' in lager)   # True
```

### Gennemløb

Et gennemløb går som standard over nøglerne. `.items()` giver nøgle og værdi sammen.

```python
for navn, antal in lager.items():
    print(navn, antal)
```

### Tupler

En tupel er en immutable sekvens. Den kan oprettes med eller uden parenteser, og en tupel med ét element skal have et komma.

```python
t = (1, 2, 3)
enkelt = (5,)
print(t[0], t[1:])   # 1 (2, 3)
```

### Tupel-tildeling

Man kan pakke en tupel ud i flere variable. Det bruges ofte, når en funktion returnerer flere værdier.

```python
def min_maks(l):
    return min(l), max(l)

lav, hoej = min_maks([4, 9, 1])
print(lav, hoej)   # 1 9
```
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 8.1: Creating a Dictionary
- Prep 8.2: Data Types of Keys and Values
- Prep 8.3: Modifying Dictionaries
- Prep 8.4: Dictionaries Are Mutable
- Prep 8.5: Dictionary Items and Keyword `in`
- Prep 8.6: Iterating Over Dictionaries
- Prep 8.7: Creating Tuples
- Prep 8.8: Tuple Assignment
- Prep 8.9: Functions Returning Tuples
- Self Quiz: Question 8.1 til 8.20

**In-Class**

- Demo 8.1: Phonebook Merge
- Code 8.2: Inventory Management
- Code 8.3: Weather Station
- Code 8.4: Data Statistics
- Problem 8.5: Energy Expenditure
- Problem 8.6: Player Scores
- Problem 8.7: Social Network

**Closure, checkpoints**

- Checkpoint 8.1: Booklet Layout (mindste hæfte og antal blanke sider)
- Checkpoint 8.2: Name Frequency

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 8. Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Indlejrede dictionaries.
- Effektivitet: opslag i dictionary (hash) er meget hurtigere end i en liste.
- keys(), values() og items() giver view-objekter; items() kan pakkes ud i to løkkevariable.
- Konstruktøren dict.
- Udpakning med * og **, variabelt antal argumenter.
- Opgave: Python Haiku.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[08 Dictionaries tuples og sets]]
