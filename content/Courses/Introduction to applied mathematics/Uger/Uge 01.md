---
publish: true
title: "Introduction to applied mathematics uge 1: Kursusintro og Mathematical proofs (del A)"
course: Introduction to applied mathematics
type: week
week: 1
tags:
  - applied-math
  - ugenote
---

# Uge 1: Kursusintro og Mathematical proofs (del A)

> Kilde: DTU Learn 02525 (orgUnitId 326329): General Info `02525_IntroAppMat2026v3 - Copy.pdf`, Project 1 `MathProofs1A.pdf` (David Brander, "Proofs in Mathematics, Part I"), `proofs_problems1 - Copy.pdf` og `sample_solutions1 - Copy.pdf`. Mandag 31/8 2026. Ældre lektionsnoter: [[Applied mathematics introduction lection 1]] og [[Lection 1 Introduction to applied mathematics]].

## Emner

- Kursets opbygning: 7 projekter, tilfældige grupper, bestået/ikke bestået
- Projekt 1 (del A): typer af argumenter i matematiske beviser
- Aksiomer og "praktisk bevismodel"
- Direkte bevis, modeksempel, indirekte bevis (modstrid)
- Legemsaksiomerne (appendix i noten)

## Kursusinfo (fra General Info)

- Kurset kører efterår 2026 (13-ugers perioden, mandage 13 til 17, uge 42 er fri) og 4.-22. januar 2027 (3-ugers perioden).
- Bestået/ikke bestået. Vægtning: projektarbejde 30 % og skriftlig eksamen i januar 70 %.
- Point: 4 små projekter (feedback only) á 2 point = 8, 2 tre-ugers projekter med posterpræsentation á 6 point = 12, ét stort projekt i januar = 10, skriftlig eksamen uden elektroniske hjælpemidler = 70.
- Projekter med mundtlig præsentation er ikke en del af den skriftlige eksamen.
- Planen for dette projekt: uge 1 og 2 (31/8 og 7/9), rapportdeadline 13/9. Forelæser: David Brander.
- Eksamen er 22/1 2027.

## Begreber

**Praktisk bevismodel.** Man antager nogle fakta, som enten er aksiomer eller allerede er bevist ud fra aksiomerne (Definition 1.2 i noten). Derefter bruger man et "gyldigt matematisk argument" til at vise andre, mindre oplagte fakta. Eksempel på aksiom: addition af naturlige tal er kommutativ, $a + b = b + a$.

**Direkte bevis.** Man viser direkte at noget følger af en definition eller kendte fakta, ofte med lidt algebra. To eksempler fra noten: $\int_0^{2\pi} \sin(x)\,dx = 0$ (en "udregning"), og at $0$ i et legeme $F$ er entydigt. Entydighedsbeviset følger mønstret: antag at der er et andet element $0_2$ med samme egenskab, og vis at $0_2 = 0$.

**Modeksempel.** Man viser at en påstand er falsk ved at give ét konkret eksempel. Fra noten: ligningssystemet $x + y = 1$, $x + y = 0$ har ingen løsning, og $f(x) = x^3$ har $f'(0) = 0$ uden at have lokalt ekstremum.

**Indirekte bevis (modstrid).** For at vise påstand $A$ antager man at $A$ er falsk og når til en modstrid. Eksempel: der er ikke noget største naturligt tal, for hvis $N$ var det, er $N + 1$ større. Det mere interessante eksempel er Sætning 4.1: hvis $x^2 = 2$, så er $x$ ikke rational. Beviset skriver $x = m/n$ uden fælles primfaktorer, får $2n^2 = m^2$, så $2 \mid m$, og derefter $2 \mid n$, hvilket strider mod valget af $m$ og $n$.

**Legemsaksiomerne.** Et legeme er en mængde $F$ med to operationer $+$ og $\ast$, hvor begge er associative og kommutative, der findes $0$ og $1$ med $0 + a = a$ og $1 \ast a = a$, hvert $a$ har additiv invers $-a$, hvert $a \neq 0$ har multiplikativ invers $a^{-1}$, og multiplikation er distributiv over addition. $\mathbb{R}$ og $\mathbb{C}$ er legemer.

I noten står distributivloven som $a st (b + c) = (a st b) + (b st c)$, formentlig en tastefejl for $(a st b) + (a st c)$.
## Opgaver

Fra `proofs_problems1` ("Proofs: Problem Set One"). Man må antage de sædvanlige regneregler for $\mathbb{Z}$ og $\mathbb{Q}$, at $\mathbb{Q} \subset \mathbb{R}$, at $\sqrt{2}$ eksisterer, og at $\sqrt{2}$ er irrational.

**1. In class problems**

- Problem 1: Vis ud fra legemsaksiomerne at det multiplikative identitetselement $1$ er entydigt (det eneste $a$ med $a \cdot x = x$ for alle $x$).
- Problem 2: Bevis eller modbevis: (1) Hvis $r$ er irrational, er $\frac{1}{r}$ irrational. (2) Hvis $q$ er rational og $r$ irrational, er $q + r$ irrational.
- Problem 3: Bevis eller modbevis: (1) For alle $n \in \mathbb{Z}$ er $n + \sqrt{2}$ irrational. (2) Der er et største irrationalt tal. (3) For ethvert positivt rationalt $q$ findes et irrationalt $r$ med $0 < r < q$. (4) Mellem to forskellige rationale tal ligger et irrationalt tal.
- Problem 4: Bevis eller modbevis: der er intet rationalt tal $x$ med $x^2 = \frac{3}{25}$.

**2. Assignment problem (del af aflevering i slutningen af uge 2)**

- Problem 5: Bevis eller modbevis: (1) Produktet af to rationale tal er rationalt. (2) Produktet af to irrationale tal er irrationalt. (3) Produktet af et rationalt og et irrationalt tal er irrationalt. (4) Produktet af et rationalt tal forskelligt fra $0$ og et irrationalt tal er irrationalt.

**3. Additional problem**

- Problem 6: Vis ud fra legemsaksiomerne at den additive og den multiplikative inverse til et givet element er entydige.

`sample_solutions1` har løsninger til udvalgte opgaver (Problem 1, 2 og 3). Hovedidéerne: Problem 1 viser $a = 1 \cdot a = a \cdot 1 = 1$. Problem 2 bruger modstrid (hvis $\frac{1}{r} = \frac{m}{n}$ er $r = \frac{n}{m}$ rational, og hvis $q + r = \frac{a}{b}$ er $r = \frac{mb - an}{nb}$ rational). Problem 3(1) er et specialtilfælde af 2(2), og 3(2) følger fordi $n + \sqrt{2}$ kan blive så stor man vil.

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
