---
publish: true
title: "Matematik 1A uge 7: matrixalgebra og determinanter"
course: Matematik 1A
type: week
week: 7
tags:
  - matematik-1a
  - ugenote
---

# Uge 7: Matrixalgebra og determinanter

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 7 og Opgaver Store Dag/Lille Dag uge 7. Python-delen er fra notebooken på DTU Learn. Bogen er kursets lærebog (udgave 2026).

## Emner

- Vektorer, matrixmultiplikation, lineær uafhængighed, kvadratiske matricer, inverse matricer og determinanter. Tematisk Python-forløb.
- Pensum: Afsnit 7.1, 7.2 og 7.3 op til og med ligning (7.12) i kapitel 7 samt afsnit 8.1 og 8.2 i kapitel 8. Store Dag: afsnit 7.1, 7.2 og 7.3 til (7.12). Lille Dag: afsnit 8.1 og 8.2. Hjem2 skal afleveres 25/10.

## Begreber

### Lineær uafhængighed

Vektorer $\mathbf{v}_1, \dots, \mathbf{v}_k$ er lineært uafhængige, hvis kun $c_1 = \dots = c_k = 0$ giver $c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k = \mathbf{0}$ (Definition 7.1.1). Sætning 7.1.3 bruges i opgaverne, fx til at se, at fire vektorer i $\mathbb{R}^3$ altid er afhængige.

*Eksempel.* $(1,2)$ og $(2,4)$ er afhængige, fordi $2 \cdot (1,2) - (2,4) = \mathbf{0}$. $(1,0)$ og $(0,1)$ er uafhængige.

### Matrixprodukt

$\mathbf{AB}$ er kun defineret, hvis antallet af søjler i $\mathbf{A}$ er lig antallet af rækker i $\mathbf{B}$ (Definition 7.2.2). Produktet er generelt ikke kommutativt.

*Eksempel.* $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 4 & 4 \\ 10 & 8 \end{pmatrix}$.

### Invers matrix

En kvadratisk $\mathbf{A}$ har en invers $\mathbf{A}^{-1}$ med $\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$. Hvis den findes, har $\mathbf{A}\mathbf{x} = \mathbf{b}$ den entydige løsning $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$.

*Eksempel.* $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^{-1} = \dfrac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \tfrac{3}{2} & -\tfrac{1}{2} \end{pmatrix}$.

### Determinant

Determinanten defineres ved udvikling efter en række eller søjle (Definition 8.1.2, afsnit 8.2). For en kvadratisk matrix er søjlerne lineært uafhængige præcis når determinanten er forskellig fra nul.

*Eksempel.* $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$. Fx $\det\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = -2 \ne 0$.

### Transponering

$\mathbf{A}^T$ fås ved at bytte rækker og søjler. En matrix med $\mathbf{A}^T = \mathbf{A}$ er symmetrisk.

*Eksempel.* $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^T = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$.

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Linearkombinationer (spørgsmål a til c)
- Opgave 2: Lineært uafhængige vektorer i $\mathbb{R}^4$ (spørgsmål a til c)
- Opgave 3: Lineært uafhængighed og reduceret trappeform. (spørgsmål a til c)
- Opgave 4: Matrixprodukt (spørgsmål a til d)
- Opgave 5: Matrix-vektorprodukt og lineære ligningssystemer (spørgsmål a til b)
- Opgave 6: Beregning af inverse matricer (ét spørgsmål, a)
- Opgave 7: Inverse matricer og lineære ligningssystemer (spørgsmål a til b)
- Opgave 8: Ligningssystemer med variabel koefficient (spørgsmål a til c)
- Opgave 9: Tematisk Python opgave

**Lille Dag**

- Opgave 1: Transponerede matricer (spørgsmål a til b)
- Opgave 2: Determinanter (spørgsmål a til d)
- Opgave 3: Determinanter og lineært uafhængighed
- Opgave 4: Lineært afhængighed
- Opgave 5: Symmetriske matricer
- Opgave 6: Kvadratiske transponerede matricer (spørgsmål a til b)

## Python (notebook på DTU Learn)

Kilde: `Uge7SDE26 - Copy (1).ipynb`. Notebooken (SymPy) viser komplekse tal og polynomier og gentager emner fra uge 3 til 5. Eksempel på kode fra notebooken:

```python
import sympy as sp
i = sp.I
z1 = 2 + 3*i
z2 = -1 + 4*i
print(sp.simplify(z1 * z2))
print(sp.Abs(z1), sp.arg(z1))
x = sp.symbols('x')
print(sp.roots((x-1)*(x-2)*(x-3)**5, x))   # giver multipliciteter
q, r = sp.div(x**3 + 2*x + 1, x**2 - 1)
```

Notebookens øvelser, som de står:

- Øvelse 1: opgave 3a fra StoreDag uge 3 i SymPy
- Øvelse 2: opgave 1 og 3b fra StoreDag uge 3
- Øvelse 3: opgave 1, 2, 3a og 3b fra StoreDag uge 4
- Øvelse 4: opgave 2 fra StoreDag uge 3, med SymPy og Matplotlib (tegn i den komplekse talplan)
- Øvelse 5: opgave 2 fra StoreDag uge 5, med `sp.roots`
- Øvelse 6: opgave 2 fra LilleDag uge 4, med `sp.roots`, og tegn de tre løsninger
- Øvelse 7: opgave 1, 4, 6 og 7 fra StoreDag uge 5

## Tjek dig selv

- [ ] Hvad er definitionen på lineær afhængighed?
- [ ] Hvornår kan to matricer ganges?
- [ ] Er $\mathbf{AB} = \mathbf{BA}$ altid?
- [ ] Hvordan afgør jeg ved determinanten, om en kvadratisk matrix er invertibel?
- [ ] Hvordan løser jeg $\mathbf{Ax} = \mathbf{b}$ med den inverse?
- [ ] Hvad er en symmetrisk matrix?

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
