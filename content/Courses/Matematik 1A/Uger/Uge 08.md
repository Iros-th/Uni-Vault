---
publish: true
title: "Matematik 1A uge 8: udspænding, ordnet basis og koordinater"
course: Matematik 1A
type: week
week: 8
tags:
  - matematik-1a
  - ugenote
---

# Uge 8: Udspænding, ordnet basis og koordinater

> Kilde: kursussiden mat1a.compute.dtu.dk, siderne Lektionsoversigt, Ugeprogram semesteruge 8 og Opgaver Store Dag/Lille Dag uge 8. Bogen er kursets lærebog (udgave 2026).

## Emner

- Udspænding af vektorer, ordnet basis for en udspænding, nulrum og søjlerum af en matrix, dimension, koordinater med hensyn til en ordnet basis.
- Pensum: Afsnit 9.1 til og med 9.5 i kapitel 9. Store Dag: det meste af afsnit 9.1 til 9.4. Lille Dag: afsnit 9.5.

## Begreber

### Udspænding

$\mathrm{Span}(\mathbf{w}_1, \dots, \mathbf{w}_k)$ er mængden af alle linearkombinationer. Hvis en vektor er en linearkombination af de andre, kan den fjernes uden at ændre udspændingen (Sætning 9.1.1).

*Eksempel.* $\mathbf{w}_3 = \mathbf{w}_1 + \mathbf{w}_2$ giver $\mathrm{Span}(\mathbf{w}_1, \mathbf{w}_2, \mathbf{w}_3) = \mathrm{Span}(\mathbf{w}_1, \mathbf{w}_2)$.

### Ordnet basis og dimension

En ordnet basis for en udspænding er en liste lineært uafhængige vektorer, der udspænder den (Sætning 9.2.1). Antallet af vektorer er dimensionen (Definition 9.4.1).

*Eksempel.* $(1,0,1), (0,1,1), (1,1,2)$ udspænder et rum med dimension 2, fordi den tredje er summen af de to første.

### Nulrum og søjlerum

$\mathrm{Null}(\mathbf{A})$ er løsningerne til $\mathbf{Ax} = \mathbf{0}$, og $\mathrm{Col}(\mathbf{A})$ er udspændingen af søjlerne. Dimensionssætningen forbinder dem: $\dim \mathrm{Null}(\mathbf{A}) + \dim \mathrm{Col}(\mathbf{A})$ er antallet af søjler i $\mathbf{A}$.

*Eksempel.* $\mathbf{A} = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ har rang 1, så $\dim \mathrm{Col} = 1$ og $\dim \mathrm{Null} = 2 - 1 = 1$.

### Koordinater

Hvis $\beta = (\mathbf{b}_1, \dots, \mathbf{b}_k)$ er en ordnet basis og $\mathbf{v} = c_1\mathbf{b}_1 + \dots + c_k\mathbf{b}_k$, så er $[\mathbf{v}]_\beta = (c_1, \dots, c_k)$ (Definition 9.5.1). Koordinaterne er løsningen til et lineært ligningssystem.

*Eksempel.* $\beta = ((1,1), (1,-1))$, $\mathbf{v} = (3,5)$: $c_1 + c_2 = 3$, $c_1 - c_2 = 5$, så $c_1 = 4$, $c_2 = -1$ og $[\mathbf{v}]_\beta = (4, -1)$.
## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Udspænding af vektorer i $\mathbb{R}^3$ (spørgsmål a til c)
- Opgave 2: En anden udspænding af vektorer i $\mathbb{R}^3$ (spørgsmål a til b)
- Opgave 3: Nulrum og søjlerum af en matrix (spørgsmål a til b)
- Opgave 4: Dimension af nulrum og søjlerum
- Opgave 5: Udspændinger og homogene lineære ligningssystemer
- Opgave 6: Udspænding af vektorer (spørgsmål a til b)
- Opgave 7: Ordnede baser (spørgsmål a til b)
- Opgave 8: Dimension og udspænding

**Lille Dag**

- Opgave 1: Ordnede baser i $\mathbb{C^2}$
- Opgave 2: Koordinater mht. den ordnede standardbasis
- Opgave 3: Udspænding, ordnet basis og koordinater (spørgsmål a til c)
- Opgave 4: Ordnede baser og koordinater i $\mathbb{R}^4$ (spørgsmål a til b)
- Opgave 5: Koordinater mht. en ordnet basis
- Opgave 6: Eksempler på udspændinger

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
