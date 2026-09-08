---
title: Integralregning — Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - kalkulus
  - integralregning
---

# Integralregning

## 1. Stamfunktion

En funktion $F$ kaldes en stamfunktion til $f$ på et interval, hvis:
$$F'(x) = f(x)$$
Samtlige stamfunktioner til $f$ skrives som det ubestemte integral:
$$\int f(x) \, dx = F(x) + k, \quad k \in \mathbb{R}$$

## 2. Standardintegraler

| Funktion $f(x)$ | Stamfunktion $\int f(x)\,dx$ |
|---|---|
| $k$ | $kx + c$ |
| $x^n$ ($n \neq -1$) | $\frac{1}{n+1} x^{n+1} + c$ |
| $\frac{1}{x}$ | $\ln|x| + c$ |
| $e^x$ | $e^x + c$ |
| $e^{kx}$ | $\frac{1}{k} e^{kx} + c$ |
| $a^x$ | $\frac{a^x}{\ln(a)} + c$ |
| $\cos(x)$ | $\sin(x) + c$ |
| $\sin(x)$ | $-\cos(x) + c$ |

## 3. Hovedsætningen for integralregning

Det bestemte integral fra $a$ til $b$:
$$\int_a^b f(x) \, dx = [F(x)]_a^b = F(b) - F(a)$$

## 4. Arealberegning

- **Areal under graf** for $f(x) \ge 0$:
  $$A = \int_a^b f(x) \, dx$$
- **Areal mellem to grafer** for $f(x) \ge g(x)$:
  $$A = \int_a^b (f(x) - g(x)) \, dx$$

## 5. Omdrejningslegemer (rotation om x-aksen)

Når grafen for $f(x)$ på intervallet $[a, b]$ roteres $360^\circ$ omkring x-aksen, er volumenet:
$$V_x = \pi \int_a^b (f(x))^2 \, dx$$
For volumen mellem to funktioner $f(x) \ge g(x) \ge 0$:
$$V_x = \pi \int_a^b \left( (f(x))^2 - (g(x))^2 \right) \, dx$$

## 6. Videregående integrationsteknikker

- **Partiel integration (delvis integration)**:
  $$\int f(x) \cdot g'(x) \, dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx$$
- **Integration ved substitution**:
  $$\int f(g(x)) \cdot g'(x) \, dx = \int f(u) \, du, \quad u = g(x), \, du = g'(x) \, dx$$
