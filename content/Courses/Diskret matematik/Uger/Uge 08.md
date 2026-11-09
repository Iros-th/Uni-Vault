---
publish: true
title: "Diskret matematik uge 8: Optælling"
course: Diskret matematik
type: week
week: 8
tags:
  - diskret-matematik
  - ugenote
---

# Uge 8: Optælling

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W8, 29. oktober). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave (6.1 "The Basics of Counting", 6.2 "The Pigeonhole Principle", 6.3 "Permutations and Combinations").

## Emner

- Grundlæggende optælling (Rosen afsnit 6.1)
- Skuffeprincippet (afsnit 6.2)
- Permutationer og kombinationer (afsnit 6.3)

## Begreber

**Produktreglen.** Hvis en opgave består af to trin med $n_1$ og $n_2$ valg, er der $n_1 n_2$ måder i alt. Eksempel: en kode med 2 bogstaver (26 muligheder hver) og 3 cifre (10 hver) giver $26^2 \cdot 10^3 = 676\,000$.

**Sumreglen.** Hvis to opgaver ikke kan ske samtidig, lægger man antallene sammen. Eksempel: vælg enten et af 5 emner eller et af 3 projekter: $5 + 3 = 8$ valg.

**Subtraktionsreglen.** Ved overlap trækker man de dobbelttalte fra: $|A \cup B| = |A| + |B| - |A \cap B|$. Eksempel: bitstrenge af længde 8, der starter med 1 eller slutter med 00: $2^7 + 2^6 - 2^5 = 128 + 64 - 32 = 160$.

**Skuffeprincippet.** Hvis $k + 1$ eller flere genstande lægges i $k$ skuffer, ligger mindst to i samme skuffe. Generaliseret: ved $N$ genstande i $k$ skuffer ligger mindst $\lceil N/k \rceil$ i en skuffe. Eksempel: blandt 13 personer har mindst to fødselsmåned til fælles, og blandt 25 personer har mindst $\lceil 25/12 \rceil = 3$ det.

**Permutationer.** En ordnet udvælgelse af $r$ elementer blandt $n$ uden gentagelse: $P(n,r) = \frac{n!}{(n-r)!}$. Eksempel: 3 af 10 personer til guld, sølv og bronze: $P(10,3) = 10 \cdot 9 \cdot 8 = 720$.

**Kombinationer.** En uordnet udvælgelse: $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$. Eksempel: et udvalg på 3 blandt 10: $\binom{10}{3} = 120$, altså $720 / 3!$. Man dividerer med $r!$ fordi rækkefølgen ikke tæller.

**Ordnet eller uordnet?** Det er det første, man skal afgøre. Spørg: giver det en ny mulighed, hvis jeg bytter om på to valgte? Hvis ja: ordnet (permutation eller produktregel). Hvis nej: kombination.
### Kombinatorisk model: Stars and Bars (Kugler i kasser)

Når man skal fordele $n$ identiske genstande i $k$ skelnelige kasser, placeres $n$ stjerner og $k-1$ adskillelsesstreger på en linje:

```text
  Eksempel: 7 stjerner fordeles i 3 kasser (k - 1 = 2 streger):
  
      ★ ★ ★ │ ★ ★ │ ★ ★
      Kasse 1   Kasse 2  Kasse 3
      (3 stk)   (2 stk)  (2 stk)

  Samlet antal pladser: n + (k - 1) = 7 + 2 = 9
  Vælg hvor stregerne skal stå: C(n + k - 1, k - 1) = C(9, 2) = 36 måder.
```

**Dueslagsprincippet (Pigeonhole):** Hvis $N$ genstande placeres i $k$ kasser, findes mindst én kasse med mindst $\lceil N/k ceil$ genstande.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Hvor 8. udgave har andre numre, står de i parentes.

- Afsnit 6.1: 1, **21**, **25**, **47**, 57, 69 (67 i 8. udgave)
- Afsnit 6.2: **7**, 13, **17**, 31, **37**
- Afsnit 6.3: **7**, **23**, 31, **43**, 47

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
