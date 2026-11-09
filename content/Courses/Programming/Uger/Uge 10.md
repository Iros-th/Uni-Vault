---
publish: true
title: "Programming uge 10: klasser i"
course: Programming
type: week
week: 10
tags:
  - programming
  - ugenote
---

# Uge 10: Klasser I

> Kilde: kursussiden programmering.compute.dtu.dk (linket som Material på DTU Learn for 02002), siderne Week 10: Preparation, In-Class og Closure. DTU Learn selv har intet indhold at læse for dette kursus. Pensum i bog: Sektionerne op til og med *Objects are mutable* i TP kapitel 14, *Classes and Functions*, samt sektion 1 til 3 og 6 i kapitel 15, *Classes and Methods* (metoder og `__init__`).

## Emner

- Objektorienteret programmering: klasser og instanser
- Attributter
- Metoder og `self`
- `__init__()`
- Objekter er mutable

## Begreber

### Klasse og instans

En klasse er en skabelon, og en instans er et konkret objekt lavet ud fra den. Klassenavne skrives med stort begyndelsesbogstav.

```python
class Tid:
    pass

t = Tid()
t.time = 14
t.minut = 30
```

### __init__ og metoder

`__init__` kører, når en instans oprettes, og sætter attributterne. Alle metoder har `self` som første parameter, og `self` er instansen selv.

```python
class Konto:
    def __init__(self, saldo=0):
        self.saldo = saldo

    def indsaet(self, beloeb):
        self.saldo += beloeb

k = Konto(100)
k.indsaet(50)
print(k.saldo)   # 150
```

### Mutabilitet

Objekter kan ændres, så hvis en funktion får et objekt som argument og ændrer en attribut, ændres det oprindelige objekt også.

```python
def nulstil(konto):
    konto.saldo = 0

nulstil(k)
print(k.saldo)   # 0
```
### Objektmodel: Klasse som skabelon for instanser

En klasse definerer datastrukturen (attributter) og handlingerne (metoder), mens instanser indeholder de konkrete værdier:

```text
                 Klasse Bil (Skabelon)
                 - model
                 - hastighed
                 + accelerer()
                       │
             ┌─────────┴─────────┐
             v                   v
     Instans bil1 (Objekt)   Instans bil2 (Objekt)
     - model: "Volvo"        - model: "Tesla"
     - hastighed: 50         - hastighed: 90
```
`self` er Python-referencen til det specifikke objekt, hvis metode kaldes.

## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 10.1: Built-in Classes
- Prep 10.2: Defining Classes
- Prep 10.3: Class Attributes
- Prep 10.4: More on Class Attributes
- Prep 10.5: Class Methods
- Prep 10.6: Mutability
- Prep 10.7: Class Naming
- Prep 10.8: More on Class Methods
- Self Quiz: Question 10.1 til 10.20

**In-Class**

- Demo 10.1: My Time
- Code 10.2: Weather Station Revisited
- Code 10.3: Health Analysis Revisited
- Problem 10.4: Simple Statistics
- Problem 10.5: Study Planner

**Closure, checkpoints**

- Checkpoint 10.1: Bank Account
- Checkpoint 10.2: Event Manager

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[11 Klasser og OOP]]
