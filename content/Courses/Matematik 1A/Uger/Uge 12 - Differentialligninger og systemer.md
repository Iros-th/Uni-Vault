---
publish: true
title: "Matematik 1A uge 12: differentialligninger og systemer"
course: Matematik 1A
type: week
week: 12
tags:
  - matematik-1a
  - ugenote
---

# Uge 12: Differentialligninger og systemer

> Kilde: kursussiden mat1a.compute.dtu.dk, siderne Ugeprogram semesteruge 12, Opgaver Store Dag og Opgaver Lille Dag uge 12 (23/11 til 27/11). Python-opgaven (opgave 10, Store Dag) frigives kl. 15:30 på DTU Learn. Bogen er kursets lærebog (udgave 2026).

## Emner

- Lineære førsteordens differentialligninger og systemer af dem. Egenværdier og egenvektorer giver løsningerne; den komplekse eksponentialfunktion spiller en vigtig rolle.
- Nøglebegreber: differentialligninger, begyndelsesbetingelser, systemer af differentialligninger, partikulære og fuldstændige løsninger.
- Pensum: Kapitel 13 op til og med Afsnit 13.2. Store Dag: kapitel 13 til og med Eksempel 13.2.4. Lille Dag: resten af Afsnit 13.2.

## Begreber

### Differentialligning, løsning og begyndelsesbetingelse

En løsning er en funktion $f$, der opfylder ligningen for alle $t$. Man tjekker ved at indsætte.

*Eksempel.* For $f'(t)^2 - 4e^{2t} f(t) = 0$ er $f(t) = e^{2t}$ en løsning, for $f' = 2e^{2t}$ giver $4e^{4t} - 4e^{4t} = 0$, men $f(t) = t$ er det ikke. En begyndelsesbetingelse som $f(0) = 1$ fastlægger konstanterne i den fuldstændige løsning.

### Lineær førsteordens differentialligning

$f'(t) = a(t) f(t) + q(t)$. Er $q = 0$, kaldes den homogen. Løsningsformlen står i Sætning 13.1.1; Eksempel 13.1.2 behandler $a(t) = -1/t$. Den fuldstændige løsning er en partikulær løsning plus den fuldstændige løsning til den homogene ligning.

*Eksempel.* $f'(t) - 3f(t) = t$ har partikulær løsning $-t/3 - 1/9$ og homogen løsning $c\,e^{3t}$, så $f(t) = c\,e^{3t} - t/3 - 1/9$.

*Eksempel.* $f'(t) + f(t)/t = 3t$ for $t > 0$ har fuldstændig løsning $f(t) = t^2 + c/t$.

### Systemer af lineære differentialligninger

Et system skrives $\mathbf{f}'(t) = \mathbf{A}\,\mathbf{f}(t) + \mathbf{q}(t)$ og er homogent, hvis $\mathbf{q} = \mathbf{0}$ (Definition 13.2.1). Er $\mathbf{A}$ diagonaliserbar med egenværdier $\lambda_k$ og egenvektorer $\mathbf{v}_k$, er den fuldstændige løsning af det homogene system

$$\mathbf{f}(t) = c_1 \mathbf{v}_1 e^{\lambda_1 t} + \dots + c_n \mathbf{v}_n e^{\lambda_n t}$$

(Korollar 13.2.4).

*Eksempel.* $\mathbf{A} = \begin{pmatrix} 1 & 8 \\ 1 & -1 \end{pmatrix}$ har egenværdier $3$ og $-3$ med egenvektorer $(4,1)$ og $(-2,1)$. Løsningen er $c_1 (4,1) e^{3t} + c_2 (-2,1) e^{-3t}$.

### Inhomogene systemer

Den fuldstændige løsning er en partikulær løsning plus den fuldstændige homogene løsning (Definition 13.2.2). Er $\mathbf{q}$ konstant, kan en konstant partikulær løsning findes ved at løse $\mathbf{0} = \mathbf{A}\mathbf{x} + \mathbf{q}$.

### Komplekse egenværdier og reelle løsninger

Har $\mathbf{A}$ reelle koefficienter, er $\mathbf{v} \in E_i$ netop hvis $\overline{\mathbf{v}} \in E_{-i}$. Reelle løsninger fås ved at tage realdel og imaginærdel af den komplekse løsning, med Eulers formler (Ligning (4.7) og (4.8)) til at omskrive $e^{\pm it}$ til $\cos t$ og $\sin t$ (Korollar 13.2.6).

### Matrix der ikke kan diagonaliseres

Er den geometriske multiplicitet mindre end den algebraiske, virker den sædvanlige metode ikke. I Eksempel 13.2.7 vises, at også led som $t\,e^{\lambda t}$ og $t^2 e^{\lambda t}$ indgår. For $\mathbf{J} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ giver $g_1' = g_2$, $g_2' = 0$ løsningen $(c_1 t + c_2,\; c_1)$, og med $\mathbf{A} = \mathbf{Q}\mathbf{J}\mathbf{Q}^{-1}$ fås løsninger til $\mathbf{A}$ ved at gange med $\mathbf{Q}$.

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her.

**Store Dag**

- Opgave 1: En reel, ikke lineær differentialligning (spørgsmål a til b)
- Opgave 2: En reel, lineær differentialligning (spørgsmål a til c)
- Opgave 3: Begyndelsesbetingelser (spørgsmål a til b)
- Opgave 4: Et homogent, reelt system af lineære differentialligninger (spørgsmål a til b)
- Opgave 5: Et andet homogent, reelt system af lineære differentialligninger (spørgsmål a til b)
- Opgave 6: Et inhomogent, reelt system af lineære differentialligninger (spørgsmål a til c)
- Opgave 7: Begyndelsesbetingelser i et system af lineære differentialligninger
- Opgave 8: Panserformlen (spørgsmål a til b; Sætning 13.1.1, Eksempel 13.1.2)
- Opgave 9: En drilsk koefficientmatrix (Eksempel 13.2.7)
- Opgave 10: Tematisk Python opgave (Jupyter notebook, frigives kl. 15:30 på DTU Learn)

**Lille Dag**

- Opgave 1: Et homogent, komplekst system af lineære differentialligninger (spørgsmål a til c)
- Opgave 2: Fra komplekse til reelle løsninger (spørgsmål a til b; Korollar 13.2.6)
- Opgave 3: Begyndelsesbetingelser i et reelt system af lineære differentialligninger
- Opgave 4: Et inhomogent, reelt system af lineære differentialligninger (spørgsmål a til b)
- Opgave 5: En koefficientmatrix som ikke kan diagonaliseres (spørgsmål a til c)

## Tjek dig selv

- [ ] Hvordan tjekker jeg, om en given funktion er løsning til en differentialligning?
- [ ] Hvordan er den fuldstændige løsning til en inhomogen lineær differentialligning opbygget?
- [ ] Hvordan finder jeg den fuldstændige løsning til $\mathbf{f}' = \mathbf{A}\mathbf{f}$, når $\mathbf{A}$ er diagonaliserbar?
- [ ] Hvordan bruger jeg en begyndelsesbetingelse til at bestemme konstanterne?
- [ ] Hvordan går jeg fra komplekse til reelle løsninger?
- [ ] Hvad gør jeg, når $\mathbf{A}$ ikke kan diagonaliseres?

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
