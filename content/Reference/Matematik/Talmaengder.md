---
title: Talmængder (Number Sets) - Formelle Definitioner
publish: true
type: reference
tags:
  - matematik
  - talmængder
  - mængdelære
---

# Talmængder (Number Sets)

De grundlæggende talmængder i matematikken danner en hierarkisk kæde af delmængder:

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

---

## 1. Naturlige tal ($\mathbb{N}$)

- **Definition**: De positive heltal anvendt til tælling.
  $$\mathbb{N} = \{1, 2, 3, 4, 5, \dots\}$$
- **Med nul ($\mathbb{N}_0$)**:
  $$\mathbb{N}_0 = \{0, 1, 2, 3, 4, \dots\}$$
- **Egenskaber**:
  - Lukket under addition ($a + b \in \mathbb{N}$) og multiplikation ($a \cdot b \in \mathbb{N}$).
  - Ikke lukket under subtraktion ($2 - 5 = -3 \notin \mathbb{N}$).
  - Tællelig uendelig: $|\mathbb{N}| = \aleph_0$ (Alef-nul).

---

## 2. Hele tal ($\mathbb{Z}$)

- **Navn**: Fra tysk *Zahlen* (tal).
- **Definition**: Alle naturlige tal, deres negative modparter samt nul.
  $$\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$$
- **Egenskaber**:
  - Lukket under addition, subtraktion og multiplikation (danner en ring).
  - Tællelig uendelig: $|\mathbb{Z}| = \aleph_0$ (der findes en bijektion mellem $\mathbb{N}$ og $\mathbb{Z}$).

---

## 3. Rationelle tal ($\mathbb{Q}$)

- **Navn**: Fra *kvotient* (forhold).
- **Definition**: Mængden af alle tal, der kan skrives som en brøk af to heltal, hvor nævneren ikke er nul:
  $$\mathbb{Q} = \left\{ \frac{p}{q} \;\middle|\; p \in \mathbb{Z}, \, q \in \mathbb{Z} \setminus \{0\} \right\}$$
- **Egenskaber**:
  - Danner et legeme (field) under addition og multiplikation (lukket under alle fire grundregnearter undtagen division med 0).
  - Decimaltallet for et rationelt tal er enten endeligt (fx $1/4 = 0.25$) eller uendeligt periodisk (fx $1/3 = 0.333\dots$).
  - **Tæthed**: Mellem to vilkårlige rationelle tal findes der altid uendeligt mange andre rationelle tal.
  - **Kardinalitet**: Overraskende nok tællelig! $|\mathbb{Q}| = \aleph_0$ (bevist af Georg Cantor med diagonalgangen).

---

## 4. Reelle tal ($\mathbb{R}$)

- **Definition**: Alle punkter på tallinjen. Består af de rationelle tal forenet med de **irrationelle tal** ($\mathbb{R} \setminus \mathbb{Q}$):
  $$\mathbb{R} = \mathbb{Q} \cup (\mathbb{R} \setminus \mathbb{Q})$$
- **Irrationelle tal**: Tal, der ikke kan udtrykkes som en brøk af heltal. Deres decimaludvikling er uendelig og ikke-periodisk:
  - Algebraiske irrationelle tal: Rødder i polynomier med heltalstalfaktorer (fx $\sqrt{2}, \sqrt[3]{5}$).
  - Transcendente tal: Kan ikke være rod i noget polynomium med rationelle koefficienter (fx $\pi = 3.14159\dots$, $e = 2.71828\dots$).
- **Egenskaber**:
  - Kontinuert og fuldstændigt (indeholder ingen "huller" - Dedekind-snit).
  - **Ikke-tællelig uendelig**: $|\mathbb{R}| = 2^{\aleph_0} = \mathfrak{c}$ (kontinuum-kardinalitet, strengt større end $|\mathbb{N}|$).

---

## 5. Komplekse tal ($\mathbb{C}$)

- **Definition**: Udvidelsen af de reelle tal med den imaginære enhed $i$, defineret ved $i^2 = -1$:
  $$\mathbb{C} = \{a + bi \mid a, b \in \mathbb{R}\}$$
- **Komponenter**:
  - Realdel: $\text{Re}(z) = a$
  - Imaginærdel: $\text{Im}(z) = b$
  - Kompleks konjugeret: $\bar{z} = a - bi$
  - Modulus (længde): $|z| = \sqrt{a^2 + b^2}$
- **Polær form & Eulers formel**:
  $$z = r(\cos(\theta) + i \sin(\theta)) = r \cdot e^{i\theta}$$
  Eulers berømte identitet:
  $$e^{i\pi} + 1 = 0$$
- **Algebraens fundamentalsætning**:
  Ethvert polynomium af grad $n \ge 1$ med komplekse koefficienter har præcis $n$ rødder i $\mathbb{C}$ (talt med multiplicitet).
