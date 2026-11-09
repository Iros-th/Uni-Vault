---
title: Aflevering 2
publish: true
course: Matematik 1A
date: 2026-10-25
type: aflevering
tags:
  - matematik-1a
  - aflevering
  - dtu
---

# Hjemmeopgave 2

## a)

Vi skriver højresiden på polær form. $|2+i| = \sqrt{2^2+1^2} = \sqrt5$ og da $2+i$ ligger i første kvadrant er $\arg(2+i) = \arctan\left(\tfrac12\right)$. Så

$$2+i = \sqrt5\, e^{i\arctan(1/2)}$$

Sæt $z = x+iy$. Så er $e^{2z} = e^{2x} e^{i2y}$, og to komplekse tal er ens når modulus er ens og argumenterne er ens op til $2\pi p$:

$$e^{2x} = \sqrt5 \iff x = \tfrac12 \ln\sqrt5 = \tfrac14 \ln 5$$

$$2y = \arctan\left(\tfrac12\right) + 2\pi p \iff y = \tfrac12\arctan\left(\tfrac12\right) + \pi p$$

Løsningerne er altså

$$z = \tfrac14\ln 5 + i\left(\tfrac12\arctan\left(\tfrac12\right) + p\pi\right), \quad p \in \mathbb{Z}$$

## b)

Vi bruger regnereglerne $\arg(z_1 z_2) = \arg z_1 + \arg z_2$ og $\arg(z_1/z_2) = \arg z_1 - \arg z_2$ (op til multipla af $2\pi$). Desuden er $\arg(-2) = \pi$.

$$\arg\left(\frac{-2z_1^4}{z_2^{10}}\right) = \pi + 4\cdot\frac{\pi}{4} - 10\cdot 3 = 2\pi - 30$$

Det skal ligge i $]-\pi, \pi]$. Vi har $2\pi - 30 \approx -23{,}7$, så vi lægger $4\cdot 2\pi = 8\pi$ til:

$$10\pi - 30 \approx 31{,}42 - 30 = 1{,}42$$

som ligger i intervallet. Altså

$$\operatorname{Arg}\left(\frac{-2z_1^4}{z_2^{10}}\right) = 10\pi - 30$$

## c)

Polynomiers division af $Z^5 - 3Z^4 + Z^3 + 4$ med $Z^2 - 3Z + 2$:

$$
\begin{aligned}
&Z^5 - 3Z^4 + Z^3 + 0Z^2 + 0Z + 4 \\
-\;&(Z^5 - 3Z^4 + 2Z^3) && \leftarrow Z^3 \cdot (Z^2-3Z+2) \\
&\quad -Z^3 + 0Z^2 + 0Z + 4 \\
-\;&(-Z^3 + 3Z^2 - 2Z) && \leftarrow -Z \cdot (Z^2-3Z+2) \\
&\quad -3Z^2 + 2Z + 4 \\
-\;&(-3Z^2 + 9Z - 6) && \leftarrow -3 \cdot (Z^2-3Z+2) \\
&\quad -7Z + 10
\end{aligned}
$$

Så

$$Z^5 - 3Z^4 + Z^3 + 4 = (Z^2-3Z+2)(Z^3 - Z - 3) + (-7Z + 10)$$

Resten er $-7Z + 10 \neq 0$, så $Z^2 - 3Z + 2$ går **ikke** op i $Z^5 - 3Z^4 + Z^3 + 4$.

(Tjek: i $Z = 1$ giver venstresiden $1 - 3 + 1 + 4 = 3$ og resten giver $-7 + 10 = 3$, passer.)

## d)

**1.** Sæt $P(Z) = Z^3 - Z^2 + 36$.

$$P(-3) = (-3)^3 - (-3)^2 + 36 = -27 - 9 + 36 = 0$$

så $-3$ er en rod. Vi dividerer med $Z + 3$ (Horners skema):

| | $1$ | $-1$ | $0$ | $36$ |
|:-:|:-:|:-:|:-:|:-:|
| $-3$ | $1$ | $-4$ | $12$ | $0$ |

Altså $P(Z) = (Z+3)(Z^2 - 4Z + 12)$. Indsætter vi $-3$ i kvotienten får vi $9 + 12 + 12 = 33 \neq 0$, så $Z + 3$ går kun op én gang. Roden $-3$ har multiplicitet $1$.

**2.** De resterende rødder er rødderne i $Z^2 - 4Z + 12$. Diskriminanten er $d = 16 - 48 = -32 < 0$, så

$$Z = \frac{4 \pm i\sqrt{32}}{2} = \frac{4 \pm 4\sqrt2\, i}{2} = 2 \pm 2\sqrt2\, i$$

Rødderne i $Z^3 - Z^2 + 36$ er derfor $-3$, $\;2 + 2\sqrt2\,i$ og $2 - 2\sqrt2\,i$.

## e)

Vi regner bare fremad med rekursionen:

$$
\begin{aligned}
f(1) &= 2 \\
f(2) &= f(1)^2 - 1^2 = 4 - 1 = 3 \\
f(3) &= f(2)^2 - 2^2 = 9 - 4 = 5 \\
f(4) &= f(3)^2 - 3^2 = 25 - 9 = 16 \\
f(5) &= f(4)^2 - 4^2 = 256 - 16 = 240
\end{aligned}
$$

## f)

Lad $S_n = r^n + r^{n-1}s + \dots + r s^{n-1} + s^n$. Vi viser $S_n = \dfrac{r^{n+1} - s^{n+1}}{r-s}$ for alle $n \in \mathbb{N}$. Bemærk at $r \neq s$ så vi aldrig deler med $0$.

**Basis, $n = 1$:** Venstresiden er $S_1 = r + s$. Højresiden er

$$\frac{r^2 - s^2}{r - s} = \frac{(r-s)(r+s)}{r-s} = r + s$$

så påstanden gælder for $n = 1$.

**Induktionsskridt:** Antag at påstanden gælder for et $n \in \mathbb{N}$, dvs. $S_n = \dfrac{r^{n+1} - s^{n+1}}{r-s}$. Vi skal vise den for $n+1$.

Hvis vi ganger $S_n$ med $r$ hæves alle eksponenter på $r$ med en, og vi mangler kun det sidste led $s^{n+1}$:

$$S_{n+1} = r^{n+1} + r^n s + \dots + r s^n + s^{n+1} = r\cdot S_n + s^{n+1}$$

Nu bruger vi induktionsantagelsen:

$$
\begin{aligned}
S_{n+1} &= r\cdot\frac{r^{n+1} - s^{n+1}}{r-s} + s^{n+1} \\
&= \frac{r^{n+2} - r s^{n+1} + s^{n+1}(r - s)}{r-s} \\
&= \frac{r^{n+2} - r s^{n+1} + r s^{n+1} - s^{n+2}}{r-s} \\
&= \frac{r^{(n+1)+1} - s^{(n+1)+1}}{r-s}
\end{aligned}
$$

hvilket er påstanden for $n+1$. Ved induktion gælder formlen for alle $n \in \mathbb{N}$. $\blacksquare$
