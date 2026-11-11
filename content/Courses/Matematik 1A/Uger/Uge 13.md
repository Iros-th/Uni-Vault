---
publish: true
title: "Matematik 1A uge 13: andenordens differentialligninger"
course: Matematik 1A
type: week
week: 13
tags:
  - matematik-1a
  - ugenote
---

# Uge 13: Andenordens differentialligninger

> Kilde: kursussiden mat1a.compute.dtu.dk, siderne Ugeprogram semesteruge 13 og Opgaver Store Dag uge 13 (30/11 til 4/12). Der er ingen opgaveside for Lille Dag. Bogen er kursets lærebog (udgave 2026).

## Emner

- Lineære differentialligninger med konstante koefficienter af højere orden, især orden to. De omskrives til systemer af førsteordens differentialligninger, så teorien fra uge 12 kan bruges. Det homogene tilfælde løses.
- Nøglebegreber: lineære andenordens differentialligninger med konstante koefficienter, begyndelsesbetingelser, partikulære og fuldstændige løsninger.
- Pensum: Afsnit 13.3 (gennemgås på Store Dag). Afsnit 13.4 er ikke pensum. Der gennemgås ikke nyt pensum på Lille Dag.
- Lille Dag: spørgetime kl. 8 til 9 i det sædvanlige auditorium, derefter regnes eksamenssættet fra maj 2026 kl. 9 til 12 i de sædvanlige lokaler.
- Store Dag: Möbius-test om forrige uges Python-opgave åbnes kl. 15:30.

## Begreber

### Homogen og inhomogen

$f''(t) + a_1 f'(t) + a_0 f(t) = q(t)$ er homogen, hvis $q = 0$ (Definition 13.3.1), ellers inhomogen. Systemer: homogent, hvis den konstante del er nul.

*Eksempel.* $f'(t) - t f(t) = e^{-3t}$ er inhomogen.

### Karakteristisk polynomium og homogene løsninger

For $f'' + a_1 f' + a_0 f = 0$ er det karakteristiske polynomium $Z^2 + a_1 Z + a_0$. Tre scenarier (side 262 og 263 i bogen):

- To forskellige reelle rødder $r_1, r_2$: $f(t) = c_1 e^{r_1 t} + c_2 e^{r_2 t}$.
- Dobbeltrod $r$: $f(t) = c_1 e^{rt} + c_2 t e^{rt}$.
- Ikke-reelle rødder $\alpha \pm \beta i$: $f(t) = c_1 e^{\alpha t}\cos(\beta t) + c_2 e^{\alpha t}\sin(\beta t)$.

*Eksempler.* $f'' + 3f' - 4f = 0$ har rødder $1$ og $-4$, så $f = c_1 e^{t} + c_2 e^{-4t}$. $f'' - 6f' + 9f = 0$ har dobbeltrod $3$. $f'' + 2f' + 5f = 0$ har rødder $-1 \pm 2i$.

### Omskrivning til system

Med $f_1 = f$ og $f_2 = f'$ bliver $f'' + a_1 f' + a_0 f = q$ til

$$\begin{pmatrix} f_1' \\ f_2' \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -a_0 & -a_1 \end{pmatrix}\begin{pmatrix} f_1 \\ f_2 \end{pmatrix} + \begin{pmatrix} 0 \\ q(t) \end{pmatrix}$$

(Ligning (13.13) i Sætning 13.3.1).

### Inhomogen ligning og partikulær løsning

Den fuldstændige løsning er en partikulær løsning plus den fuldstændige homogene løsning. For $f'' - 6f' + 9f = e^{2t}$ er $e^{2t}$ partikulær, så $f = e^{2t} + c_1 e^{3t} + c_2 t e^{3t}$.

Er højresiden allerede en løsning til den homogene ligning, virker gættet $a e^{t}$ ikke. For $f'' + 3f' - 4f = e^{t}$ giver $a e^{t}$ ligningen $0 = e^{t}$; gættet $a\,t\,e^{t}$ giver $5a = 1$, altså $f = \tfrac{1}{5} t e^{t} + c_1 e^{t} + c_2 e^{-4t}$.

### Begyndelsesbetingelser

Orden to kræver to betingelser, fx $f(0) = 1$ og $f'(0) = 2$: det giver to lineære ligninger i $c_1, c_2$.

### Fra løsning til ligning

Kender man rødderne i det karakteristiske polynomium, kan man gange $(Z - r_1)(Z - r_2)$ ud og aflæse $a_1, a_0$. Rødderne $-1 \pm 2i$ giver $Z^2 + 2Z + 5$.

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her.

**Store Dag**

- Opgave 1: Homogen eller inhomogen?
- Opgave 2: En homogen andenordens differentialligning
- Opgave 3: Flere homogene andenordens differentialligninger
- Opgave 4: En inhomogen andenordens differentialligning (spørgsmål a til b)
- Opgave 5: Omskrivning af en højere ordens differentialligning til et system (spørgsmål a til b)
- Opgave 6: Endnu en inhomogen andenordens differentialligning (spørgsmål a til c)
- Opgave 7: Fra løsning til differentialligning
- Opgave 8: Fra løsning til differentialligning, del 2
- Opgave 9: Begyndelsesbetingelser (spørgsmål a til c)

**Lille Dag**

- Spørgetime og eksamenssættet fra maj 2026 (se ovenfor). Ingen opgaveside.

## Tjek dig selv

- [ ] Hvordan afgør jeg, om en differentialligning er homogen eller inhomogen?
- [ ] Hvilke tre scenarier findes for rødderne i det karakteristiske polynomium?
- [ ] Hvordan omskriver jeg en andenordens ligning til et system?
- [ ] Hvordan finder jeg en partikulær løsning, og hvad gør jeg, hvis gættet allerede er en homogen løsning?
- [ ] Hvordan bestemmer jeg $c_1$ og $c_2$ ud fra $f(0)$ og $f'(0)$?
- [ ] Hvordan opskriver jeg en ligning, når jeg kender den fuldstændige løsning?

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
