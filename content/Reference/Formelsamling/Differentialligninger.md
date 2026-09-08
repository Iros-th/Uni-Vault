---
title: Differentialligninger - Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - differentialligninger
---

# Differentialligninger

## 1. Verifikation af løsning

For at bevise eller eftervise, at en given funktion $y = f(x)$ er løsning til en differentialligning:
1. Beregn venstresiden (VS) ved at differentiere $y$ og indsætte i ligningen.
2. Beregn højresiden (HS) ved at indsætte $y = f(x)$.
3. Hvis $\text{VS} = \text{HS}$ for alle relevante $x$, er funktionen en løsning.

## 2. Standardtyper og fuldstændige løsninger

- **Proportional vækst**:
  $$y' = k \cdot y \iff y = c \cdot e^{kx}, \quad c \in \mathbb{R}$$
- **Forskudt proportional vækst (Newtons afkølingslov)**:
  $$y' = a(M - y) \iff y = M + c \cdot e^{-ax}$$
- **Generel lineær førsteordens differentialligning med konstante koefficienter**:
  $$y' + ay = b \iff y = \frac{b}{a} + c \cdot e^{-ax}$$
- **Logistisk differentialligning**:
  $$y' = a \cdot y (M - y) \iff y = \frac{M}{1 + c \cdot e^{-a M x}}$$
  hvor $M$ er bæreevnen (kapaciteten), og maksimal væksthastighed opnås ved $y = \frac{M}{2}$.

## 3. Separation af variable

En differentialligning på formen:
$$\frac{dy}{dx} = g(x) \cdot h(y)$$
løses ved at separere de variable (for $h(y) \neq 0$):
$$\frac{1}{h(y)} \, dy = g(x) \, dx \implies \int \frac{1}{h(y)} \, dy = \int g(x) \, dx$$
Derefter isoleres $y$.
