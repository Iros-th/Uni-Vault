---
publish: true
title: "Matematik 1A uge 10: lineære afbildninger"
course: Matematik 1A
type: week
week: 10
tags:
  - matematik-1a
  - ugenote
---

# Uge 10: Lineære afbildninger

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 10 og Opgaver Store Dag/Lille Dag uge 10. Bogen er kursets lærebog (udgave 2026).

## Emner

- Lineære afbildninger, kerne og billedrum, afbildningsmatrix, basisskiftematrix, dimensionssætningen.
- Pensum: Afsnit 11.1 til og med 11.4 i kapitel 11. Store Dag: det meste af 11.1 til 11.3. Lille Dag: afsnit 11.4.

## Begreber

### Lineær afbildning

$T: V_1 \to V_2$ er lineær, hvis $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ og $T(c\mathbf{v}) = cT(\mathbf{v})$ (Definition 11.0.1).

*Eksempel.* $T(x,y) = (x+y, x-y, 2x)$ er lineær. $S(x) = x + 1$ er ikke, fordi $S(0) \ne 0$.

### Kerne og billedrum

$\ker T = \{\mathbf{v} \mid T(\mathbf{v}) = \mathbf{0}\}$ og $\mathrm{Im}\, T = \{T(\mathbf{v})\}$. Dimensionssætningen: $\dim V = \dim \ker T + \dim \mathrm{Im}\, T$. $T$ er injektiv præcis når $\ker T = \{\mathbf{0}\}$.

*Eksempel.* For $T(x,y) = (x+y, x-y, 2x)$ er $\ker T = \{\mathbf{0}\}$ og $\dim \mathrm{Im}\, T = 2$, i overensstemmelse med $2 = 0 + 2$.

### Afbildningsmatrix

Med ordnede baser $\beta$ og $\gamma$ er afbildningsmatricen ${}_\gamma[T]_\beta$ den matrix, hvis søjler er $\gamma$-koordinaterne til $T$ af $\beta$-vektorerne (Definition 11.3.1).

*Eksempel.* Med standardbaser for $T(x,y) = (x+y, x-y, 2x)$: $T(e_1) = (1,1,2)$ og $T(e_2) = (1,-1,0)$, så matricen har disse som søjler.

### Differentiation som lineær afbildning

Differentiation er lineær på rum af polynomier og glatte funktioner. Konstanterne er kernen.

*Eksempel.* $D: \{a + bZ + cZ^2\} \to \{a + bZ\}$, $D(p) = p'$, har med baserne $(1, Z, Z^2)$ og $(1, Z)$ matricen $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$.

### Løsning af $T(\mathbf{v}) = \mathbf{w}$

Ligningen har løsning, hvis og kun hvis $\mathbf{w} \in \mathrm{Im}\, T$. Løsningsmængden er en partikulær løsning plus $\ker T$ (Sætning 11.4.2).

*Eksempel.* Hvis $T(\mathbf{v}_0) = \mathbf{w}$, er alle løsninger $\mathbf{v}_0 + \mathbf{k}$ med $\mathbf{k} \in \ker T$.
### Transformationsmodel: Lineære afbildninger i 2D

Enhver lineær afbildning $T: \mathbb{R}^2 	o \mathbb{R}^2$ er fuldstændig bestemt af, hvor den sender standardbasisvektorerne $\mathbf{e}_1 = egin{bmatrix}1\0\end{bmatrix}$ og $\mathbf{e}_2 = egin{bmatrix}0\1\end{bmatrix}$ hen:

```text
  Rotation med vinkel θ:               Skævhed (Shear langs x-aksen):
  ┌                     ┐              ┌         ┐
  │ cos θ      -sin θ   │              │ 1     k │
  │ sin θ       cos θ   │              │ 0     1 │
  └                     ┘              └         ┘
           y ^                                  y ^
             │  T(e2)                             │    T(e2)
             │   ^                                │   ┌──>
             │   │                                │   │  /
             │   └───> T(e1)                      │   │ /
             └───────────> x                      └───┴─────> x
                                                     T(e1)=e1
```

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Linearitet
- Opgave 2: Lineære afbildninger defineret ved diagonalmatricer (spørgsmål a til c)
- Opgave 3: Lineære afbildninger og differentiation (spørgsmål a til b)
- Opgave 4: Basisskifte og afbildningsmatricer (spørgsmål a til c)
- Opgave 5: Kerne af en lineær afbildning
- Opgave 6: Lineær afbildning fra et polynomiumsrum (spørgsmål a til d)
- Opgave 7: Injektive lineære afbildninger (spørgsmål a til c)
- Opgave 8: Undersøgelse af en lineær afbildning fra $\mathbb{R}^4$ til $\mathbb{R}^3$ (spørgsmål a til d)

**Lille Dag**

- Opgave 1: I billedrummet eller ej? (ét spørgsmål, a)
- Opgave 2: Dimensionssætningen i et eksempel
- Opgave 3: Vektorligninger og billedrum (spørgsmål a til c)
- Opgave 4: Undersøgelse af en lineær afbildning (spørgsmål a til d)
- Opgave 5: Lineære afbildninger og differentiation (spørgsmål a til b)
- Opgave 6: Eksempler på lineære afbildninger

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
