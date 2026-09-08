---
title: Funktioner og modeller — Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - funktioner
  - modeller
---

# Funktioner og Modeller

## 1. Lineær funktion

$$f(x) = ax + b$$

- **Hældningskoefficient $a$** ud fra to punkter $(x_1, y_1)$ og $(x_2, y_2)$:
  $$a = \frac{y_2 - y_1}{x_2 - x_1}$$
- **Skæring med y-aksen**:
  $$b = y_1 - a x_1$$
- **Fortolkning**:
  Hver gang $x$ vokser med $1$, vokser $y$ med $a$.

## 2. Eksponentiel funktion

$$f(x) = b \cdot a^x = b \cdot (1 + r)^x = b \cdot e^{kx}$$

hvor $a > 0, a \neq 1$, $b > 0$, og $k = \ln(a)$.

- **Bestemmelse af $a$ og $b$ ud fra to punkter**:
  $$a = \sqrt[x_2 - x_1]{\frac{y_2}{y_1}} = \left(\frac{y_2}{y_1}\right)^{\frac{1}{x_2 - x_1}}$$
  $$b = \frac{y_1}{a^{x_1}}$$
- **Fordoblingskonstant $T_2$** ($a > 1$):
  $$T_2 = \frac{\ln(2)}{\ln(a)} = \frac{\log(2)}{\log(a)}$$
- **Halveringskonstant $T_{\frac{1}{2}}$** ($0 < a < 1$):
  $$T_{\frac{1}{2}} = \frac{\ln(0.5)}{\ln(a)} = \frac{-\ln(2)}{\ln(a)}$$

## 3. Potensfunktion

$$f(x) = b \cdot x^a, \quad x > 0$$

- **Bestemmelse af $a$ og $b$ ud fra to punkter**:
  $$a = \frac{\ln(y_2) - \ln(y_1)}{\ln(x_2) - \ln(x_1)} = \frac{\ln(y_2 / y_1)}{\ln(x_2 / x_1)}$$
  $$b = \frac{y_1}{x_1^a}$$
- **Procent-procent vækst**:
  Når $x$ ganges med faktoren $k_x$, ganges $y$ med faktoren:
  $$k_y = k_x^a \iff (1 + r_y) = (1 + r_x)^a$$

## 4. Andengradspolynomium

$$f(x) = ax^2 + bx + c, \quad a \neq 0$$

- **Diskriminant $d$**:
  $$d = b^2 - 4ac$$
- **Rødder / nulpunkter**:
  $$x = \frac{-b \pm \sqrt{d}}{2a}$$
  - $d > 0$: To reelle rødder.
  - $d = 0$: Én reel dobbeltrod $x = -\frac{b}{2a}$.
  - $d < 0$: Ingen reelle rødder (to komplekst konjugerede rødder).
- **Parablens toppunkt $T$**:
  $$T = \left(-\frac{b}{2a}, -\frac{d}{4a}\right)$$
- **Faktorisering**:
  Hvis rødderne er $r_1$ og $r_2$:
  $$ax^2 + bx + c = a(x - r_1)(x - r_2)$$
