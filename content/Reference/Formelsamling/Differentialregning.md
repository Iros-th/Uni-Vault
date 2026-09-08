---
title: Differentialregning — Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - kalkulus
  - differentialregning
---

# Differentialregning

## 1. Definition og tretrinsreglen

Differentialkvotienten $f'(x_0)$ er grænseværdien af differenskvotienten:
$$f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

**Tretrinsreglen**:
1. Opskriv funktionstilvæksten: $\Delta y = f(x_0 + h) - f(x_0)$.
2. Dan differenskvotienten (sekanthældningen): $\frac{\Delta y}{h} = \frac{f(x_0 + h) - f(x_0)}{h}$. Reducer så meget som muligt.
3. Bestem grænseværdien for $h \to 0$: Hvis grænseværdien findes, er den $f'(x_0)$.

## 2. Tangentens ligning

Tangentligningen for $f$ i røringspunktet $(x_0, f(x_0))$:
$$y = f'(x_0)(x - x_0) + f(x_0)$$

## 3. Generelle regneregler

Lad $f$ og $g$ være differentiable, og $k$ en konstant:

- **Konstantregel**:
  $$(k \cdot f)'(x) = k \cdot f'(x)$$
- **Sum og differens**:
  $$(f \pm g)'(x) = f'(x) \pm g'(x)$$
- **Produktreglen (gange-reglen)**:
  $$(f \cdot g)'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$
- **Kvotientreglen (brøk-reglen)**:
  $$\left(\frac{f}{g}\right)'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{(g(x))^2}$$
- **Kædereglen (sammensat funktion $f(g(x))$)**:
  $$(f(g(x)))' = f'(g(x)) \cdot g'(x)$$
  (ydre differentieret med hensyn til den indre, ganget med den indre differentieret).

## 4. Standardfunktioners afledede

| Funktion $f(x)$ | Afledet $f'(x)$ | Forbehold |
|---|---|---|
| $k$ (konstant) | $0$ | |
| $x$ | $1$ | |
| $x^n$ | $n x^{n-1}$ | |
| $\frac{1}{x} = x^{-1}$ | $-\frac{1}{x^2}$ | $x \neq 0$ |
| $\sqrt{x} = x^{1/2}$ | $\frac{1}{2\sqrt{x}}$ | $x > 0$ |
| $e^x$ | $e^x$ | |
| $e^{kx}$ | $k e^{kx}$ | |
| $a^x$ | $\ln(a) \cdot a^x$ | $a > 0$ |
| $\ln(x)$ | $\frac{1}{x}$ | $x > 0$ |
| $\log_{10}(x)$ | $\frac{1}{\ln(10) \cdot x}$ | $x > 0$ |
| $\sin(x)$ | $\cos(x)$ | $x$ i radianer |
| $\cos(x)$ | $-\sin(x)$ | $x$ i radianer |
| $\tan(x)$ | $1 + \tan^2(x) = \frac{1}{\cos^2(x)}$ | $\cos(x) \neq 0$ |
