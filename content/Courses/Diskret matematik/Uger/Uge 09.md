---
publish: true
title: "Diskret matematik uge 9: Binomialformlen"
course: Diskret matematik
type: week
week: 9
tags:
  - diskret-matematik
  - ugenote
---

# Uge 9: Binomialformlen

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W9, 5. november). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitel er tjekket mod en lokal tekst af Rosen, 8. udgave (afsnit 6.4, "Binomial Coefficients and Identities").

## Emner

- Binomialkoefficienter og binomialformlen (Rosen afsnit 6.4)

## Begreber

**Binomialformlen.** $(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k$. Koefficienten $\binom{n}{k}$ tæller, på hvor mange måder man kan vælge de $k$ faktorer, som bidrager med $y$. Eksempel: $(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$.

**Et bestemt led.** Koefficienten til $x^a y^b$ i $(x + y)^n$ med $a + b = n$ er $\binom{n}{b}$. Eksempel: koefficienten til $x^3 y^2$ i $(2x + y)^5$ er $\binom{5}{2} \cdot 2^3 = 10 \cdot 8 = 80$.

**Pascals identitet.** $\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}$. Kombinatorisk: ved at vælge $k$ blandt $n + 1$ personer enten med en bestemt person (så $k-1$ blandt de øvrige $n$) eller uden (så $k$ blandt $n$). Det giver Pascals trekant. Eksempel: $\binom{5}{2} = \binom{4}{1} + \binom{4}{2} = 4 + 6 = 10$.

**Symmetri.** $\binom{n}{k} = \binom{n}{n-k}$. At vælge dem, man tager med, svarer til at vælge dem, man lader blive.

**Sum af en række.** Sæt $x = y = 1$ i binomialformlen: $\sum_{k=0}^{n} \binom{n}{k} = 2^n$. Det tæller delmængder af en $n$-mængde (jf. potensmængden i uge 2). Med $x = 1, y = -1$ fås $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ for $n \ge 1$.

**Vandermondes identitet.** $\binom{m+n}{r} = \sum_{k=0}^{r} \binom{m}{r-k}\binom{n}{k}$. Tænk på $r$ udvalgte fra to grupper på $m$ og $n$; $k$ af dem kommer fra den ene gruppe.

**Kombinatorisk bevis.** Man viser en identitet ved at tælle det samme på to måder. Det er ofte hurtigere end algebra.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Planen angiver ingen afvigende numre for 8. udgave i denne uge.

- Afsnit 6.4: 7, **9**, **11**, 17, **21**, 23, **29**, **33**, **35**, **37**, **39**

Rettelse fra kurset: ifølge en meddelelse til kurset skal opgave 39 i afsnit 6.4 lyde, at man skal bevise Corollary 1, ikke Theorem 4. Det står ikke i selve ugeplanen på kursussiden, og meddelelsen er ikke læst direkte ved udarbejdelsen af dette notat (oplysningen er givet videre). Tjek meddelelsen på DTU Learn.

## Tjek dig selv

- [ ] Kan jeg udvide $(x + y)^5$ uden at kigge i bogen?
- [ ] Kan jeg finde koefficienten til et bestemt led i $(ax + by)^n$?
- [ ] Kan jeg bevise Pascals identitet kombinatorisk?
- [ ] Kan jeg forklare, hvorfor $\sum_k \binom{n}{k} = 2^n$?
- [ ] Kan jeg give et kombinatorisk bevis for $\binom{n}{k} = \binom{n}{n-k}$?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
