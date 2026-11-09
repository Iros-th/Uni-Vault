---
publish: true
title: "Matematik 1A uge 11: egenværdier, egenvektorer og diagonalisering"
course: Matematik 1A
type: week
week: 11
tags:
  - matematik-1a
  - ugenote
---

# Uge 11: Egenværdier, egenvektorer og diagonalisering

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 11 og Opgaver Store Dag/Lille Dag uge 11. Bogen er kursets lærebog (udgave 2026).

## Emner

- Egenværdier, egenvektorer og diagonalisering af lineære afbildninger fra et rum til sig selv.
- Pensum: Afsnit 12.1, 12.2 og 12.3 i kapitel 12 (afsnit 12.4 og 12.5 er ikke pensum). Store Dag: afsnit 12.1 og 12.2. Lille Dag: afsnit 12.3. Hjem3 skal afleveres 22/11.

## Begreber

### Egenværdi og egenvektor

$\mathbf{v} \ne \mathbf{0}$ er en egenvektor for $T$ med egenværdi $\lambda$, hvis $T(\mathbf{v}) = \lambda \mathbf{v}$ (Definition 12.1.1). Egenrummet $E_\lambda$ er nulrummet til $\mathbf{A} - \lambda \mathbf{I}$ (se Eksempel 12.2.1).

*Eksempel.* $\mathbf{A} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ og $\mathbf{v} = (1,1)$: $\mathbf{A}\mathbf{v} = (3,3) = 3\mathbf{v}$.

### Karakteristisk polynomium

Egenværdierne er rødderne i $\det(\mathbf{A} - \lambda \mathbf{I})$. Over $\mathbb{C}$ er der altid rødder, men de behøver ikke være reelle.

*Eksempel.* $\det\begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3$, så $\lambda = 1$ eller $\lambda = 3$.

### Multipliciteter

Den geometriske multiplicitet $\mathrm{gm}(\lambda) = \dim E_\lambda$ (Definition 12.2.1) er højst lig den algebraiske multiplicitet, altså rodens multiplicitet i det karakteristiske polynomium (Sætning 12.2.4 bruges i opgaverne).

*Eksempel.* $\begin{pmatrix} 5 & 1 \\ 0 & 5 \end{pmatrix}$ har $\lambda = 5$ med algebraisk multiplicitet 2, men $E_5$ har dimension 1, så $\mathrm{gm}(5) = 1$.

### Diagonalisering

$\mathbf{A}$ er diagonaliserbar, hvis der findes en basis af egenvektorer. Så er $\mathbf{A} = \mathbf{P}\mathbf{D}\mathbf{P}^{-1}$ med egenvektorerne som søjler i $\mathbf{P}$ og egenværdierne i diagonalmatricen $\mathbf{D}$.

*Eksempel.* For $\mathbf{A}$ ovenfor: egenvektorer $(1,-1)$ (for $\lambda = 1$) og $(1,1)$ (for $\lambda = 3$), så $\mathbf{P} = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$ og $\mathbf{D} = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$.
### Dynamisk system-model: Egenværdier som ekspansionsakser

Egenvektorer $\mathbf{v}$ peger i retninger, hvor matricen $A$ blot virker som en skalar strækning eller sammentrækning ($A\mathbf{v} = \lambda \mathbf{v}$):

```text
                      λ > 1 (Ekspansion langs v)
                        ^
                        │
                        │   A · v = λ v
                        │  /
                        │ /
                        │/
  ──────────────────────┼──────────────────────>
                       /│
                      / │
                     v  │
          0 < λ < 1     │
      (Kontraktion)     │
```

**Diagonalisering og matrixpotenser ($A = V \Lambda V^{-1}$):**
Når $A$ diagonaliseres, kan potensen $A^k$ beregnes i et enkelt hug:
$$A^k = V \Lambda^k V^{-1} = V egin{bmatrix} \lambda_1^k & 0 \ 0 & \lambda_2^k \end{bmatrix} V^{-1}.$$
Hvis alle $|\lambda_i| < 1$, vil systemet konvergere mod nulpunktet ($A^k 	o 0$ for $k 	o \infty$).

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Egenværdier og egenvektorer
- Opgave 2: Reelle egenværdier og egenvektorer (spørgsmål a til c)
- Opgave 3: Egenværdier og egenvektorer i et uendeligdimensionelt tilfælde (ét spørgsmål, a)
- Opgave 4: Komplekse egenværdier og egenvektorer (spørgsmål a til c)
- Opgave 5: Et pænt basisskift (spørgsmål a til b)
- Opgave 6: Egenværdier og egenvektorer for en reel $3 \times 3$ matrix. (spørgsmål a til b)
- Opgave 7: Egenværdier og deres multipliciteter for en anden reel $3 \times 3$ matrix. (spørgsmål a til b)
- Opgave 8: Det karakteristiske polynomium for en $2 \times 2$ matrix (spørgsmål a til b)
- Opgave 9: Lineær uafhængighed af to egenvektorer

**Lille Dag**

- Opgave 1: Diagonalisering af en $2 \times 2$ matrix.
- Opgave 2: Diagonalisering af en lineær afbildning. (spørgsmål a til c)
- Opgave 3: Diagonalisering (spørgsmål a til b)
- Opgave 4: Diagonalisering over de komplekse tal (spørgsmål a til b)
- Opgave 5: Diagonaliserbar eller ej? (spørgsmål a til d)
- Opgave 6: Lineær afbildning mellem polynomiumsrum (spørgsmål a til b)

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
