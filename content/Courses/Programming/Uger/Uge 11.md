---
publish: true
title: "Programming uge 11: klasser ii"
course: Programming
type: week
week: 11
tags:
  - programming
  - ugenote
---

# Uge 11: Klasser II

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 11: Preparation, In-Class og Closure og Advanced. Pensum i bog: TP kapitel 17, *Inheritance*, og afsnittet om operator overloading i kapitel 15.

## Emner

- Nedarvning og overskrivning af metoder
- `super()`
- Specialmetoden `__str__()`
- Operator overloading: `__add__()` og `__eq__()`

## Begreber

### Nedarvning

En underklasse arver attributter og metoder fra en overklasse. En metode kan overskrives i underklassen.

```python
class Konto:
    def __init__(self, saldo):
        self.saldo = saldo

class Opsparing(Konto):
    def tilskriv_rente(self, r):
        self.saldo *= 1 + r
```

### super()

`super()` kalder metoden i overklassen, typisk i `__init__`, så man ikke gentager kode.

```python
class Kreditkonto(Konto):
    def __init__(self, saldo, graense):
        super().__init__(saldo)
        self.graense = graense
```

### __str__ og operatorer

`__str__` bestemmer, hvad `print()` og `str()` viser. Med `__add__` og `__eq__` kan man definere `+` og `==` for egne klasser.

```python
class Broek:
    def __init__(self, t, n):
        self.t, self.n = t, n
    def __add__(self, o):
        return Broek(self.t * o.n + o.t * self.n, self.n * o.n)
    def __str__(self):
        return f'{self.t}/{self.n}'

print(Broek(1, 2) + Broek(1, 3))   # 5/6
```
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 11.1: Inheritance
- Prep 11.2: Function `super()`
- Prep 11.3: Special Methods
- Prep 11.4: Operator Overloading
- Self Quiz: Question 11.1 til 11.20

**In-Class**

- Demo 11.1: World Time
- Code 11.2: Score Tracker
- Code 11.3: Unique Score Tracker
- Code 11.4: Modular Arithmetic
- Problem 11.4: Fractions (nummereret 11.4 på kursussiden, ligesom Code 11.4)
- Problem 11.5: Authors
- Problem 11.6: Linear Spring
- Problem 11.7: Nonlinear Spring
- Problem 11.8: Multiple Choice
- Problem 11.9: Multiple Choice Restricted

**Closure, checkpoints**

- Checkpoint 11.1: Overdraft Account
- Checkpoint 11.2: Limited Event Manager

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 11 (siden vises som sidste års version, kan blive rettet). Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Mere operator-overloading (BaseMetricUnit, enheder).
- type(self)() opretter et nyt objekt af samme klasse som self, så __add__ kan nedarves.
- Nedarvning fra indbyggede klasser (str, dict, tuple, list), fx en dict-underklasse med addition.
- Opgaver: Cat-klassen, klasse-nedarvning og sammenligning af katte.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[11 Klasser og OOP]]
