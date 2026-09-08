---
publish: true
title: Formelsamling - Programmering
type: reference
tags:
  - formelsamling
  - programmering
  - reference
---

# Formelsamling: Programmering

Nyttige tal- og kompleksitetsformler til programmering. Selve syntaksen ligger i [[Courses/Programming/Cheat Sheet|Programming cheat sheet]].

## Big-O kompleksitet

| Notation | Navn | Eksempel |
|---|---|---|
| $O(1)$ | konstant | opslag i dictionary |
| $O(\log n)$ | logaritmisk | binaer soegning |
| $O(n)$ | lineaer | gennemloeb af en liste |
| $O(n \log n)$ | linearitmisk | effektiv sortering |
| $O(n^2)$ | kvadratisk | to indlejrede loekker |
| $O(2^n)$ | eksponentiel | naiv rekursion |

## Logaritmer og potenser

$$\log_b(xy) = \log_b x + \log_b y, \qquad \log_b(x^k) = k \log_b x$$

$$\log_b x = \frac{\log x}{\log b}, \qquad 2^{10} = 1024 \approx 10^3$$

## Nyttige summer

Antal skridt i en fuld dobbeltloekke:

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2} = O(n^2)$$

En balanceret binaer traestruktur med $n$ knuder har hoejde cirka $\log_2 n$.

## Tal og repraesentation

Et heltal med $b$ bit kan repraesentere $2^b$ forskellige vaerdier. Fx $2^{8} = 256$ og $2^{32} = 4\,294\,967\,296$.

Flydende tal foelger IEEE 754, derfor er $0{,}1 + 0{,}2 \neq 0{,}3$ praecist.

## Links

- [[Formelsamling/Formelsamling|Formelsamling]]
- [[Courses/Programming/Programming|Programmering]]
- [[Courses/Programming/Cheat Sheet|Programming cheat sheet]]
- [[Glossary]]
