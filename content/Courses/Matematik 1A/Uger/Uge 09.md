---
publish: true
title: "Matematik 1A uge 9: generelle vektorrum"
course: Matematik 1A
type: week
week: 9
tags:
  - matematik-1a
  - ugenote
---

# Uge 9: Generelle vektorrum

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 9 og Opgaver Store Dag/Lille Dag uge 9. Python-delen er fra notebooken på DTU Learn. Bogen er kursets lærebog (udgave 2026).

## Emner

- Vektorrum, lineær uafhængighed i vektorrum, (ordnet) basis, koordinatvektor, basisskiftematricer, underrum.
- Pensum: Afsnit 10.1 til og med 10.4 i kapitel 10 (afsnit 10.5 er ikke pensum). Store Dag: det meste af 10.1, 10.2 og 10.4. Lille Dag: afsnit 10.3.

## Begreber

### Vektorrum

Et vektorrum er en mængde med addition og skalarmultiplikation, der opfylder reglerne i Definition 10.1.1, blandt andet at der findes en nulvektor. Eksempler er $\mathbb{R}^n$, matricer $\mathbb{R}^{3\times 3}$ og polynomier $\mathbb{C}[Z]$.

*Eksempel.* Polynomier af grad højst 2 med reelle koefficienter danner et vektorrum med ordnet basis $(1, Z, Z^2)$.

### Underrum

En delmængde er et underrum, hvis den indeholder nulvektoren og er lukket under addition og skalarmultiplikation.

*Eksempel.* $\{(x,y,z) \mid x + y + z = 0\}$ er et underrum af $\mathbb{R}^3$. $\{(x,y,z) \mid x + y + z = 1\}$ er det ikke, fordi $\mathbf{0}$ ikke ligger i den.

### Basis og koordinater

En ordnet basis $\beta$ er lineært uafhængig og udspænder rummet (Definition 10.2.4). Koordinatvektoren $[\mathbf{v}]_\beta$ er koefficienterne i linearkombinationen (Definition 10.2.5).

*Eksempel.* I basen $\beta = (1, Z, Z^2)$ er $[2 + 5Z + Z^2]_\beta = (2, 5, 1)$.

### Basisskiftematrix

Basisskiftematricen ${}_\gamma M_\beta$ (Sætning 10.3.1) omregner $\beta$-koordinater til $\gamma$-koordinater: $[\mathbf{v}]_\gamma = {}_\gamma M_\beta [\mathbf{v}]_\beta$. Dens søjler er $\gamma$-koordinaterne til $\beta$-vektorerne.

*Eksempel.* $\beta = (1, Z)$, $\gamma = (1+Z, Z)$. Så $1 = 1\cdot(1+Z) - 1\cdot Z$ og $Z = 0\cdot(1+Z) + 1\cdot Z$, altså ${}_\gamma M_\beta = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$. For $3 + 5Z$ med $[\cdot]_\beta = (3,5)$ fås $(3, -3+5) = (3, 2)$, og tjek: $3(1+Z) + 2Z = 3 + 5Z$.
### Rummodel: Fundamentalunderrum for en matrix

En $m 	imes n$ matrix $A$ forbinder fire fundamentale underrum i $\mathbb{R}^n$ og $\mathbb{R}^m$:

```text
      Domæne: R^n                                 Codomæne: R^m
  ┌───────────────────────┐                   ┌───────────────────────┐
  │  Rækkerum: Row(A)     │                   │  Søjlerum: Col(A)     │
  │  Dimension: r         │ ──── A · x ─────> │  Dimension: r         │
  ├───────────────────────┤ (Bijektiv afb.)   ├───────────────────────┤
  │  Nulrum: Null(A)      │                   │  Venstre-nulrum:      │
  │  Dimension: n - r     │ ──── A · x = 0 ──>│  Null(A^T)            │
  │  (Ortogonalt på Row)  │                   │  Dimension: m - r     │
  └───────────────────────┘                   └───────────────────────┘
```
Dimensionssætningen garanterer: $\dim(\operatorname{Col}(A)) + \dim(\operatorname{Null}(A)) = n$.

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Første eksempler på vektorrum (spørgsmål a til b)
- Opgave 2: Et vektorrum bestående af polynomier (spørgsmål a til c)
- Opgave 3: Flere eksempler på vektorrum (spørgsmål a til b)
- Opgave 4: Lineær afhængighed eller uafhængighed
- Opgave 5: Underrum af $\mathbb{R}^{3 \times 3}$ (spørgsmål a til b)
- Opgave 6: Underrum af $\mathbb{C}[Z]$.
- Opgave 7: Underrum og lineære ligningssystemer (spørgsmål a til b)
- Opgave 8: Underrum (spørgsmål a til b)
- Opgave 9: Tematisk Python opgave

**Lille Dag**

- Opgave 1: Eksempel på en basisskiftematrix (spørgsmål a til b)
- Opgave 2: Mere om basisskiftematricer (spørgsmål a til c)
- Opgave 3: Koordinatvektorer med hensyn til to ordnede baser (spørgsmål a til d)
- Opgave 4: Udspænding af vektorer (spørgsmål a til d)
- Opgave 5: Lineært uafhængighed

## Python (notebook på DTU Learn)

Kilde: `Uge9SDE26 - Copy.ipynb`. Notebooken (SymPy) gennemgår matrixalgebra og dækker emner fra uge 6 og 7. Kode fra notebooken:

```python
import sympy as sp
A = sp.Matrix([[1, 2, 1, 0], [2, 4, -1, 2], [3, 6, 0, 3]])
print(A.rref(pivots=False))   # reduceret trappeform
x, y, z = sp.symbols('x y z')
print(sp.linsolve([x + 2*y + z - 4, 2*x + y - z - 1], (x, y, z)))
M = sp.Matrix.hstack(sp.Matrix([1,2,3]), sp.Matrix([2,4,6]), sp.Matrix([1,0,-1]))
print(M.rank())   # rang mindre end antal vektorer: afhængige
B = sp.Matrix([[1, 2], [3, 4]])
print(B.inv())
```

Notebookens øvelser, som de står:

- Øvelse 1: opgave 2 og 4 fra StoreDag uge 6 samt opgave 2, 3 og 6 fra LilleDag uge 6, med `rref()`
- Øvelse 2: opgave 6 fra LilleDag uge 6, med `linsolve()` både som ligninger og på matrixform
- Øvelse 3: opgave 2a, 2c, 3a og 3b fra StoreDag uge 7, med `sp.rank()`
- Øvelse 4: opgave 4 fra StoreDag og opgave 1 fra LilleDag uge 7 (matrixalgebra)
- Øvelse 5: opgave 6 fra StoreDag uge 7, med `inv()`
- Øvelse 6: opgave 2 (direkte med determinantkommando), 3 og 4 fra LilleDag uge 7

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
