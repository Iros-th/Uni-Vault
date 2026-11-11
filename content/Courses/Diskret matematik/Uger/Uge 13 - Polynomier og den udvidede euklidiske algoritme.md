---
publish: true
title: "Diskret matematik uge 13: Polynomier og udvidet Euklid"
course: Diskret matematik
type: week
week: 13
tags:
  - diskret-matematik
  - ugenote
---

# Uge 13: Polynomier og den udvidede euklidiske algoritme

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W13, 3. december) og kapitel 6 ("Polynomials") i Beelen et al., Discrete Mathematics, som er linket fra planen (https://www2.imm.dtu.dk/courses/01017/2026/book/discrete_math_book.pdf). Begreberne og eksemplerne nedenfor følger kapitlet.

## Emner

- Polynomier: koefficienter, grad, addition og multiplikation
- Division med rest for polynomier
- Største fælles divisor og udvidet Euklid for polynomier
- Fælles rødder

## Begreber

**Polynomium og grad.** $P(x) = a_n x^n + \dots + a_0$ med $a_n \ne 0$ har grad $n$. Nulpolynomiet har ifølge noterne grad $-1$. Koefficienten til $x^k$ skrives $[x^k]P(x)$. Eksempel: for $P(x) = x^2 + 2x + 3$ er $[x^0]P = 3$, $[x^1]P = 2$, $[x^2]P = 1$.

**Produkt.** $[x^n](P(x)Q(x)) = \sum_{k=0}^{n} [x^k]P(x)\,[x^{n-k}]Q(x)$. Hvis ingen af dem er nulpolynomiet, er $\deg(PQ) = \deg P + \deg Q$. Eksempel: $(x+3)(2x^2+2x+3) = 2x^3 + 8x^2 + 9x + 9$.

**Division med rest (Theorem 6.1).** For polynomier $n(x)$ og $m(x) \ne 0$ findes entydige $q(x)$ og $r(x)$ med $n(x) = q(x)m(x) + r(x)$ og $\deg r < \deg m$. Eksempel: $x^2 - x - 2$ divideret med $x + 1$ giver $q = x - 2$, $r = 0$. Divideret med $x - 1$ giver $q = x$, $r = -2$.

**Divisor og rod.** $m(x)$ er divisor i $n(x)$, hvis resten er 0. Specielt er $x - x_0$ en divisor i $n(x)$ netop når $x_0$ er rod, $n(x_0) = 0$. Eksempel: $x+1$ og $x-2$ går op i $x^2 - x - 2$, og $-1$ og $2$ er rødderne.

**Største fælles divisor.** Defineret op til en konstant faktor ≠ 0 og sammenlignet via grad. Findes med Euklids algoritme som for tal. Eksempel fra noterne: $\gcd(x^4 + x^3 - 2x^2 + 2x - 2,\; x^2 + 2x - 3) = -7x + 7$.

**Udvidet Euklid (Theorem 6.3).** Man holder styr på $(r_k, s_k, t_k)$ med $r_k = s_k N + t_k M$ og stopper, når $r_n = 0$; så er $\gcd(N,M) = r_{n-1} = s_{n-1}N + t_{n-1}M$. I eksemplet ovenfor: $-7x + 7 = 1 \cdot N + (-x^2 + x - 3) \cdot M$.

**Fælles rødder (Theorem 6.4).** $N$ og $M$ har en fælles rod $x_0$ netop når $\gcd(N,M)$ har roden $x_0$. Så kan man finde fælles rødder ved at finde rødderne i et polynomium af lavere grad. I eksemplet er roden 1 den eneste fælles rod.
### Algebraisk model: Polynomiers divisionsalgoritme og modulær invers

I polynomieringen $\mathbb{Z}_p[x]$ (hvor koefficienterne regnes modulo et primtal $p$) fungerer polynomiumsdivision præcis som for heltal:

```text
                 Q(x)    (kvotient)
             ┌─────────────────────────
      D(x)   │   A(x)    (dividend)
             │ - (Q(x) · D(x))
             ─────────────────────────
                 R(x)    (rest, med deg(R) < deg(D))
```

**Betydning for kryptografi og fejlkorrektion (AES / Reed-Solomon):**
Hvis polynomiet $M(x)$ er irreducibelt (svarer til et primtal), udgør restklasserne $\mathbb{Z}_p[x] / \langle M(x) 
angle$ et endeligt legeme (Galois Field, $\mathbb{F}_{p^k}$). Udvidet Euklid finder den modulære inverse $A(x)^{-1} \pmod{M(x)}$, som bruges direkte i S-boxen i AES-kryptering.

## Opgaver

Fra kursussiden: Beelen et al, kapitel 6: **6.16**, **6.17**, **6.18**, **6.19** (fed skrift = lav dem først). Der er ingen opgaver fra Rosen denne uge.

Om opgaverne i noterne (pdf-filen): 6.16 handler om rationale rødder i polynomier med heltalskoefficienter (og at $\sqrt{2}$ og $\sqrt{5}$ er irrationelle); 6.17 undersøger Euklids algoritmes køretid; 6.18 handler om at forkorte rationale funktioner fuldstændigt; 6.19 om opdeling i enhedsbrøker. Noterne markerer selv 6.17 som "Extra exercises, not in the curriculum", mens kursussiden har den med i fed skrift.

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
