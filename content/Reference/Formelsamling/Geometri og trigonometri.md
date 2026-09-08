---
title: Geometri og trigonometri — Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - trigonometri
  - geometri
---

# Geometri og Trigonometri

## 1. Retvinklet trekant

I en retvinklet trekant med kateter $a, b$, hypotenuse $c$ og ret vinkel $C = 90^\circ$:

- **Pythagoras' læresætning**:
  $$a^2 + b^2 = c^2$$
- **Definition af trigonometriske funktioner**:
  $$\sin(A) = \frac{\text{modstående katete}}{\text{hypotenuse}} = \frac{a}{c}$$
  $$\cos(A) = \frac{\text{hosliggende katete}}{\text{hypotenuse}} = \frac{b}{c}$$
  $$\tan(A) = \frac{\text{modstående katete}}{\text{hosliggende katete}} = \frac{a}{b} = \frac{\sin(A)}{\cos(A)}$$

## 2. Vilkårlig trekant

For en trekant med vinkler $A, B, C$ og modstående sider $a, b, c$:

- **Vinkelsum**:
  $$A + B + C = 180^\circ$$
- **Arealformler**:
  $$T = \frac{1}{2} h \cdot g = \frac{1}{2} a b \sin(C) = \frac{1}{2} a c \sin(B) = \frac{1}{2} b c \sin(A)$$
- **Sinusrelationerne**:
  $$\frac{a}{\sin(A)} = \frac{b}{\sin(B)} = \frac{c}{\sin(C)} = 2R$$
  hvor $R$ er radius i den omskrevne cirkel.
- **Cosinusrelationerne**:
  $$a^2 = b^2 + c^2 - 2bc \cos(A)$$
  $$b^2 = a^2 + c^2 - 2ac \cos(B)$$
  $$c^2 = a^2 + b^2 - 2ab \cos(C)$$
  Isolering af vinkel:
  $$\cos(A) = \frac{b^2 + c^2 - a^2}{2bc}$$

## 3. Enhedscirklen og grundlæggende identiteter

Enhedscirklen har centrum i $(0,0)$ og radius $r=1$. For retningspunktet $P(v) = (\cos(v), \sin(v))$:

- **Idiotformlen (trigonometrisk grundidentitet)**:
  $$\cos^2(v) + \sin^2(v) = 1$$
- **Symmetrier**:
  $$\cos(-v) = \cos(v) \quad (\text{lige funktion})$$
  $$\sin(-v) = -\sin(v) \quad (\text{ulige funktion})$$
  $$\sin(\pi - v) = \sin(v), \quad \cos(\pi - v) = -\cos(v)$$

## 4. Rumfang og overfladeareal af rumlige figurer

| Figur | Rumfang $V$ | Overflade $O$ |
|---|---|---|
| **Kasse** ($a, b, c$) | $V = a \cdot b \cdot c$ | $O = 2(ab + bc + ac)$ |
| **Prisme** (grundflade $G$, højde $h$) | $V = G \cdot h$ | - |
| **Cylinder** (radius $r$, højde $h$) | $V = \pi r^2 h$ | $O_{\text{krum}} = 2\pi r h$, $O_{\text{total}} = 2\pi r h + 2\pi r^2$ |
| **Kegle** (radius $r$, højde $h$, sidelinje $s$) | $V = \frac{1}{3} \pi r^2 h$ | $O_{\text{krum}} = \pi r s$, $s = \sqrt{r^2 + h^2}$ |
| **Kugle** (radius $r$) | $V = \frac{4}{3} \pi r^3$ | $O = 4\pi r^2$ |
