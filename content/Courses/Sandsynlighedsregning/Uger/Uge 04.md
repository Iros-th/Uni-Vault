---
publish: true
title: "Sandsynlighedsregning uge 4: Varians, uligheder og diskrete fordelinger"
course: Sandsynlighedsregning
type: week
week: 4
tags:
  - sandsynlighed
  - ugenote
---

# Uge 4: Varians, Markov og Chebyshev, geometrisk fordeling

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 25. september, afsnit 3.3 og 3.4) og ugebrevet til forelæsning 4. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "middel", ca. 39 sider. Indikatormetoden (side 168-173) og Markovs ulighed (side 174) blev ifølge ugebrev 3 udskudt til denne uge. Slides og videoer er ikke anvendt.

## Emner

- Afsnit 3.3: varians, standardafvigelse, skævhed, Markovs og Chebyshevs uligheder
- Afsnit 3.4: tællelige udfaldsrum, geometrisk og negativ binomialfordeling
- Indikatormetoden fra afsnit 3.2

## Begreber

**Varians og spredning.** $\mathrm{Var}(X) = E\big[(X - \mu)^2\big] = E(X^2) - \mu^2$, og spredningen er $\sigma = \sqrt{\mathrm{Var}(X)}$. Eksempel: terning, $\mathrm{Var}(X) = 91/6 - (7/2)^2 = 35/12 \approx 2{,}92$.

**Skalering og addition.** $\mathrm{Var}(aX + b) = a^2\,\mathrm{Var}(X)$ (boks øverst side 188). For uafhængige $X, Y$ gælder $\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$ (boks nederst side 193). Ugebrevet understreger, at additionsreglen kun gælder for uafhængige variable.

**Skævhed.** Bestemmes ud fra det tredje centrale moment og er et mål for asymmetri.

**Markovs ulighed.** For $X \ge 0$ og $a > 0$: $P(X \ge a) \le E(X)/a$. Eksempel: hvis gennemsnitlig ventetid er 2 minutter, er $P(\text{ventetid} \ge 10) \le 0{,}2$.

**Chebyshevs ulighed.** $P(|X - \mu| \ge k\sigma) \le 1/k^2$. Eksempel: højst $1/4$ af sandsynligheden ligger mere end to spredninger fra middelværdien, uanset fordelingen. Begge uligheder giver grove, men almene halegrænser.

**Skævhed og fordelingens form (side 224-226, kursorisk pensum).** Emnerne "How $\sigma$ affects the shape of the distribution" og "Skewness" er pensum, men kan læses kursorisk.

**Indikatormetoden.** $I_A = 1$ hvis $A$ indtræffer, ellers 0, og $E(I_A) = P(A)$. En tællevariabel skrives som sum af indikatorer, og linearitet giver middelværdien. Eksempel: antal fikspunkter i en tilfældig permutation af $n$ elementer: hver position har sandsynlighed $1/n$, så $E = n \cdot \frac{1}{n} = 1$.

**Geometrisk fordeling.** Antal forsøg indtil første succes: $P(X = k) = (1-p)^{k-1}p$ for $k = 1, 2, \dots$ med $E(X) = 1/p$. Eksempel: antal kast med en terning til første sekser: $P(X = 3) = (5/6)^2 \cdot (1/6) \approx 0{,}116$, $E(X) = 6$.

**Tællelig additivitet.** Resultaterne for endelige fordelinger gælder også for tællelige, så længe summerne konvergerer (øverst side 209).

**Negativ binomial og Bernoulliprocessen.** Antal forsøg for at opnå $n$ succeser (eksempel 4 side 213); den geometriske er $n = 1$. Tankegangen bygger på Bernoulliprocessen, en uendelig række uafhængige Bernoulli-forsøg. Eksempel 5 minder om fødselsdagseksemplet og bygger på afsnit 1.6.
## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 2. oktober.

Øvelsesopgaver: 3.3.1, 3.4.1, 3.2.14, 3.3.2, 3.4.9, 3.3.4. (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 2.5.9, 3.3.19, 3.4.2.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 9, 10 og 15.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
