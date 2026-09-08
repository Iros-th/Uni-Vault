---
title: Vektorer i 2D og 3D - Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - vektorer
  - lineaer-algebra
---

# Vektorer i 2D og 3D

## 1. Vektorer i 2D planen

En vektor $\vec{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$:

- **Længde**:
  $$|\vec{a}| = \sqrt{a_1^2 + a_2^2}$$
- **Hatvektor (tværvektor)**:
  $$\widehat{\vec{a}} = \begin{pmatrix} -a_2 \\ a_1 \end{pmatrix}$$
  $\widehat{\vec{a}}$ har samme længde som $\vec{a}$ og er drejet $90^\circ$ mod uret.
- **Skalarprodukt (prikprodukt)**:
  $$\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\theta)$$
- **Ortogonalitet (vinkelret)**:
  $$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$$
- **Vinkel mellem vektorer**:
  $$\cos(v) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}$$
- **Determinant i 2D**:
  $$\det(\vec{a}, \vec{b}) = \widehat{\vec{a}} \cdot \vec{b} = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1 = |\vec{a}| \cdot |\vec{b}| \cdot \sin(\theta)$$
- **Parallelitet**:
  $$\vec{a} \parallel \vec{b} \iff \det(\vec{a}, \vec{b}) = 0$$
- **Areal af parallelogram**:
  $$A = |\det(\vec{a}, \vec{b})|$$
- **Vektorprojektion af $\vec{a}$ på $\vec{b}$**:
  $$\vec{a}_{\vec{b}} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2} \vec{b}$$
  Længde af projektion:
  $$|\vec{a}_{\vec{b}}| = \frac{|\vec{a} \cdot \vec{b}|}{|\vec{b}|}$$

## 2. Linjens ligning i 2D

- **Normalvektorligning**:
  Med normalvektor $\vec{n} = \begin{pmatrix} a \\ b \end{pmatrix}$ og fast punkt $P_0(x_0, y_0)$:
  $$a(x - x_0) + b(y - y_0) = 0 \iff ax + by + c = 0$$
- **Afstand fra punkt $P_1(x_1, y_1)$ til linje $l: ax + by + c = 0$ (afstandsformel)**:
  $$\text{dist}(P_1, l) = \frac{|a x_1 + b y_1 + c|}{\sqrt{a^2 + b^2}}$$

## 3. Vektorer i 3D rummet

En vektor $\vec{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$:

- **Længde**:
  $$|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$
- **Skalarprodukt**:
  $$\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$
- **Krydsprodukt (vektorprodukt)**:
  $$\vec{a} \times \vec{b} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}$$
  Egenskaber:
  - $\vec{a} \times \vec{b} \perp \vec{a}$ og $\vec{a} \times \vec{b} \perp \vec{b}$.
  - $|\vec{a} \times \vec{b}| = |\vec{a}| \cdot |\vec{b}| \cdot \sin(\theta) = \text{Areal af udspændt parallelogram}$.
  - $\vec{a} \parallel \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}$.
- **Planens ligning i 3D**:
  Med normalvektor $\vec{n} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ gennem $P_0(x_0, y_0, z_0)$:
  $$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \iff ax + by + cz + d = 0$$
- **Afstand fra punkt $P_1(x_1, y_1, z_1)$ til plan $\alpha: ax + by + cz + d = 0$**:
  $$\text{dist}(P_1, \alpha) = \frac{|a x_1 + b y_1 + c z_1 + d|}{\sqrt{a^2 + b^2 + c^2}}$$
