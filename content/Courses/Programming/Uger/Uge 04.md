---
publish: true
title: "Programming uge 4: løkker"
course: Programming
type: week
week: 4
tags:
  - programming
  - ugenote
---

# Uge 4: Løkker

> Kilde: kursussiden programmering.compute.dtu.dk (linket som Material på DTU Learn for 02002), siderne Week 4: Preparation, In-Class og Closure. DTU Learn selv har intet indhold at læse for dette kursus. Pensum i bog: TP kapitel 7, *Iteration and Search*. Kurset gennemgår både for- og while-løkker, så læs også kursussidens egen tekst.

## Emner

- `for`-løkker og `range()`
- `while`-løkker og risikoen for uendelige løkker
- `break`
- Indlejrede løkker
- Simuleringer og populationsmodeller
- Pseudokode

## Begreber

### for og range

`for` bruges, når antal gennemløb er kendt. `range(a, b, step)` giver tallene fra `a` til og med `b - 1`. Løkkevariablen får ny værdi i hver runde.

```python
for i in range(1, 6):
    print(i)          # 1 2 3 4 5
samlet = 0
for i in range(1, 101):
    samlet += i
print(samlet)         # 5050
```

### while

`while` kører, så længe betingelsen er sand. Variablene i betingelsen skal være defineret før løkken og ændres inde i løkken, ellers stopper den aldrig.

```python
bestand = 100.0
r = 0
while bestand > 50:
    bestand *= 0.9
    r += 1
print(r)   # antal runder, til bestanden er halveret
```

### break og indlejrede løkker

`break` afslutter løkken med det samme. En løkke kan stå inde i en anden, fx for at tegne en pyramide.

```python
for i in range(1, 5):
    for j in range(i):
        print('*', end='')
    print()
```

### Simulering

Mange modeller opdateres trin for trin: ny værdi udregnes af den gamle. Det passer til en `for`-løkke over dage eller år.

```python
S, I, R = 999, 1, 0
beta, gamma = 0.0003, 0.2
for dag in range(100):
    ny = beta * S * I
    heal = gamma * I
    S, I, R = S - ny, I + ny - heal, R + heal
```
### Iterationsmodel: Løkke-akkumulatoren

En typisk `for`-løkke arbejder ved hjælp af en akkumulator-variabel, der opdateres for hvert gennemløb:

```text
  Init: total = 0
  Elementer: [ 10,  20,  30 ]
                │    │    │
  Iteration 1:  total = 0 + 10  = 10
  Iteration 2:  total = 10 + 20 = 30
  Iteration 3:  total = 30 + 30 = 60
  Slut: return total (60)
```

## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 4.1: Basic For-Loop
- Prep 4.2: The `range` Function
- Prep 4.3: More `range` Examples
- Prep 4.4: Using the Iteration Variable
- Prep 4.5: Collecting Values
- Prep 4.6: Basic While-Loop
- Prep 4.7: Be Careful with While-Loops
- Prep 4.8: More While-Loops
- Prep 4.9: Breaking Loops
- Prep 4.10: Doing Something Once
- Prep 4.11: Nested Loops
- Prep 4.12: Bad For-Loop Practices
- Prep 4.13: Debug Loops
- Prep 4.14: Predict the Outcome
- Self Quiz: Question 4.1 til 4.20

**In-Class**

- Demo 4.1: Fish Population
- Demo 4.2: Candy Exchange
- Code 4.3: Printing Song Lyrics
- Code 4.4: Printing Numbers
- Code 4.5: Sum of Numbers
- Code 4.6: Factorial (Buddy-Exercise)
- Code 4.7: Equivalent `range(n)` For-Loops
- Code 4.8: Printing a Pyramid
- Problem 4.9: Radioactive Decay
- Problem 4.10: Half-Life
- Problem 4.11: Collatz Conjecture
- Problem 4.12: Rabbit Population
- Problem 4.13: Debt
- Problem 4.14: Number of Windows
- Problem 4.15: Pythagorean Triples

**Closure, checkpoints**

- Checkpoint 4.1: Disease Simulation (SIR-model over 100 dage, udskriv hver tiende dag)
- Checkpoint 4.2: Which Tetrahedral (find $n$ med $T_n = \frac{n(n+1)(n+2)}{6} = t$)

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[05 Løkker]]
