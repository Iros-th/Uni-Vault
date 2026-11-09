---
publish: true
title: "Diskret matematik uge 10: Inklusion-eksklusion"
course: Diskret matematik
type: week
week: 10
tags:
  - diskret-matematik
  - ugenote
---

# Uge 10: Inklusion-eksklusion

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W10, 12. november). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave (8.5 "Inclusion-Exclusion", 8.6 "Applications of Inclusion-Exclusion").

## Emner

- Inklusion-eksklusion (Rosen afsnit 8.5)
- Anvendelser af inklusion-eksklusion (afsnit 8.6)

## Begreber

**Princippet.** For endelige mængder $A_1, \dots, A_n$ gælder
$$|A_1 \cup \dots \cup A_n| = \sum |A_i| - \sum_{i<j} |A_i \cap A_j| + \sum_{i<j<k} |A_i \cap A_j \cap A_k| - \dots + (-1)^{n+1} |A_1 \cap \dots \cap A_n|.$$
Fortegnene alternerer. For $n = 2$ er det $|A \cup B| = |A| + |B| - |A \cap B|$.

**Tre mængder.** $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$. Eksempel: i en gruppe på 50 taler 20 engelsk, 15 tysk og 10 fransk; 5 taler engelsk og tysk, 4 engelsk og fransk, 3 tysk og fransk, og 2 taler alle tre. Mindst ét sprog: $20 + 15 + 10 - 5 - 4 - 3 + 2 = 35$. Altså taler 15 af de 50 ingen af dem.

**Komplementformen.** Antal elementer uden nogen af egenskaberne: $N - |A_1 \cup \dots \cup A_n|$. Det er ofte den, man vil have.

**Surjektioner.** Antallet af surjektive funktioner fra en $m$-mængde på en $n$-mængde er $\sum_{k=0}^{n} (-1)^k \binom{n}{k} (n-k)^m$. Eksempel: surjektioner fra en 3-mængde på en 2-mængde: $2^3 - 2 \cdot 1^3 + 0 = 6$. Det passer, for der er $2^3 = 8$ funktioner, og 2 af dem er konstante.

**Afvigelser (derangements).** En permutation uden fikspunkter. Antal: $D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$. Eksempel: $D_3 = 6(1 - 1 + \tfrac12 - \tfrac16) = 2$. De to er de to cykliske forskydninger af $(1,2,3)$.

**Primtal op til $n$ (sien).** Antal tal $\le n$, der ikke er delelige med nogen af primtallene $p_1, \dots, p_k$, findes ved inklusion-eksklusion på "delelig med $p_i$". Eksempel: antal $\le 100$ uden faktor 2, 3 eller 5: $100 - 50 - 33 - 20 + 16 + 10 + 6 - 3 = 26$.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Planen angiver ingen afvigende numre for 8. udgave i denne uge.

- Afsnit 8.5: 1, **5**, 9, **11**, **15**, **23**, 27
- Afsnit 8.6: 3, **5**, **7**, 13, **21**, **25**

## Tjek dig selv

- [ ] Kan jeg skrive formlen for tre mængder fra hukommelsen?
- [ ] Kan jeg formulere en tekstopgave som "antal uden nogen egenskab"?
- [ ] Kan jeg tælle surjektioner med formlen?
- [ ] Kan jeg beregne $D_4$?
- [ ] Kan jeg bruge sien til at tælle tal op til 100 uden primfaktorerne 2, 3 og 5?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
