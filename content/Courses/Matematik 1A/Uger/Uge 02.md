---
publish: true
title: "Matematik 1A uge 2: mængder og funktioner"
course: Matematik 1A
type: week
week: 2
tags:
  - matematik-1a
  - ugenote
---

# Uge 2: Mængder og funktioner

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 2 og Opgaver Store Dag/Lille Dag uge 2. Bogen er kursets lærebog (udgave 2026).

## Emner

- Mængder og mængderelationer. Fælles- og foreningsmængde og mængdedifferens. Funktionsforskrifter, dispositionsmængde, definitionsmængde og værdimængde. Sammensætning og invers funktion. Rekursive definitioner. Sumtegnet.
- Pensum: Kapitel 2 op til og med Eksempel 2.3.2, samt afsnit 3.1 og 3.2 i kapitel 3. Store Dag: det meste af kapitel 2 op til Eksempel 2.3.2. Lille Dag: resten, samt afsnit 3.1 og 3.2.

## Begreber

### Mængder og mængdeoperationer

$A \cap B$ er fællesmængden, $A \cup B$ foreningsmængden og $A \setminus B$ differensmængden. Identiteterne i Sætning 2.1.2 kan illustreres med cirkeldiagrammer og bevises med udsagnslogik.

*Eksempel.* $A = \{1,2,3\}$, $B = \{2,3,4\}$ giver $A \cap B = \{2,3\}$, $A \cup B = \{1,2,3,4\}$ og $A \setminus B = \{1\}$.

### Injektiv, surjektiv og bijektiv

En funktion $f: A \to B$ er injektiv, hvis forskellige elementer får forskellige værdier, surjektiv, hvis alle elementer i $B$ rammes, og bijektiv, hvis begge dele gælder.

*Eksempel.* $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ er hverken injektiv ($f(-1) = f(1)$) eller surjektiv ($-1$ rammes ikke). Som $f: [0,\infty) \to [0,\infty)$ er den bijektiv.

### Sammensætning og invers

$g \circ f$ er defineret, når værdimængden af $f$ ligger i definitionsmængden af $g$. Den inverse $f^{-1}$ findes for bijektive $f$ og opfylder $f^{-1}(f(x)) = x$ (Definition 2.2.1).

*Eksempel.* $f(x) = 2x + 3$ har den inverse $f^{-1}(y) = \tfrac{y-3}{2}$, fordi $f(f^{-1}(y)) = 2 \cdot \tfrac{y-3}{2} + 3 = y$.

### Exp og ln

$\exp: \mathbb{R} \to \mathbb{R}_{>0}$ er bijektiv, og $\ln$ er den inverse (Eksempel 2.3.2). Derfor $\ln(e^x) = x$ og $e^{\ln y} = y$ for $y > 0$.

*Eksempel.* $\ln(e^5) = 5$ og $e^{\ln 3} = 3$.

### Rekursion og sumtegn

En rekursiv definition angiver startværdier og en regel, der bruger de forrige led (Eksempel 3.1.2: Fibonacci). Sumtegnet $\sum_{k=1}^{n} a_k$ er en kort skrivemåde for $a_1 + \dots + a_n$.

*Eksempel.* $a_0 = 1$, $a_n = 2 a_{n-1}$ giver $a_n = 2^n$. Og $\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16 = 30$.
### Relations- og funktionsmodel: Injektiv, surjektiv og fiber-opdeling

En funktions opførsel $f: X 	o Y$ kan aflæses direkte af fibrene (urbillederne $f^{-1}(\{y\})$):

```text
       Domæne X                           Codomæne Y
    ┌────────────┐                      ┌────────────┐
    │  x1 ───────┼─────────────────────>│     y1     │
    │  x2 ───────┼──────────┐           │            │
    │            │          └──────────>│     y2     │
    │  x3 ───────┼─────────────────────>│            │
    │            │                      │     y3     │ (Ikke ramt -> Ikke surjektiv)
    └────────────┘                      └────────────┘
     x2 og x3 rammer samme y2
     -> Ikke injektiv (kollision)
```

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Mængder på listeform (spørgsmål a til c)
- Opgave 2: Mængder på listeform
- Opgave 3: Talmængder
- Opgave 4: Regneregler for mængdeoperationer (spørgsmål a til c)
- Opgave 5: Surjektiv, injektiv og bijektiv (spørgsmål a til d)
- Opgave 6: Sammensatte funktioner (spørgsmål a til d)
- Opgave 7: En inverse funktion (spørgsmål a til b)
- Opgave 8: En stykkevist defineret funktion (spørgsmål a til c)
- Opgave 9: Andengradspolynomiumsfunktioner (spørgsmål a til d)

**Lille Dag**

- Opgave 1: Omvendte funktioner: eksponentialfunktionen og den naturlige logaritme (spørgsmål a til c)
- Opgave 2: Rekursivt definerede funktioner (spørgsmål a til c)
- Opgave 3: Priknotationen og sumtegnet (spørgsmål a til c)
- Opgave 4: Graf af en invertibel funktion (ét spørgsmål, a)
- Opgave 5: Logaritmer (spørgsmål a til c)

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
