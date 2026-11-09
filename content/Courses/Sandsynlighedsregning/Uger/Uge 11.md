---
publish: true
title: "Sandsynlighedsregning uge 11: Betinget tæthed, kovarians og korrelation"
course: Sandsynlighedsregning
type: week
week: 11
tags:
  - sandsynlighed
  - ugenote
---

# Uge 11: Betinget tæthed, kovarians og korrelation

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 20. november, afsnit 6.3 og 6.4) og ugebrevet til forelæsning 11. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "middel", ca. 30 sider. Afsnit 6.4 er selvstudium ifølge ugebrevet og gennemgås næppe. Slides er ikke læst.

## Emner

- Afsnit 6.3: betinget tæthed og betinget middelværdi for kontinuerte variable
- Afsnit 6.4: kovarians og korrelation (selvstudium)

## Begreber

**Betinget tæthed.** $f(y \mid x) = \dfrac{f(x,y)}{f_X(x)}$ (indrammet resultat øverst side 411). Sandsynligheder fås ved at integrere: $P(Y \in B \mid X = x) = \int_B f(y \mid x)\,dy$. Ugebrevet siger, at forståelse af illustrationerne side 412 er vigtig. Som sædvanlig erstattes sandsynligheder af tætheder og summer af integraler.

**Total sandsynlighed, kontinuert udgave.** $P(Y \in B) = \int f_X(x)\,P(Y \in B \mid X = x)\,dx$ (indrammet nederst side 417), den kontinuerte version af reglen om gennemsnit af betingede sandsynligheder.

**Betinget middelværdi.** $E(Y \mid X = x) = \int y\,f(y \mid x)\,dy$. Eksempel: ligefordeling på trekanten $0 < x < y < 1$ (tæthed 2). Her er $f_X(x) = 2(1-x)$, så $f(y \mid x) = \frac{1}{1-x}$ for $x < y < 1$, altså ligefordeling på $(x, 1)$ og $E(Y \mid X = x) = (1 + x)/2$.

**Kovarians (selvstudium).** $\mathrm{Cov}(X,Y) = E\big[(X - \mu_X)(Y - \mu_Y)\big] = E(XY) - E(X)E(Y)$ (boksen side 430). Generelt er $\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) + 2\,\mathrm{Cov}(X,Y)$; flere variable i boksene side 441 og nederst side 444.

**Korrelation.** $\rho(X,Y) = \dfrac{\mathrm{Cov}(X,Y)}{\sigma_X\sigma_Y}$ (boks nederst side 432), altid mellem $-1$ og $1$ (egenskaber side 433). Uafhængige variable har korrelation 0, men ikke omvendt. Modeksempel: $X$ ligefordelt på $\{-1, 0, 1\}$ og $Y = X^2$ har $\mathrm{Cov}(X,Y) = E(X^3) - E(X)E(Y) = 0$, men $Y$ er helt bestemt af $X$.

**Indikatorer og samvariation.** Afsnittet om indikatorer side 431 viser, hvordan kovarians kvantificerer sammenhængen mellem ikke-uafhængige hændelser.
### Samvariationsmodel: Kovarians og korrelation $ho$

Korrelationskoefficienten $ho = rac{\operatorname{Cov}(X, Y)}{\sigma_X \sigma_Y} \in [-1, 1]$ måler graden af lineær samvariation:

```text
  ρ = +1 (Perfekt positiv)      ρ = 0 (Ukorreleret)          ρ = -1 (Perfekt negativ)
         y ^                           y ^                          y ^
           │      /                      │    .  :  .                 │             │    /                        │  :  ·  .                   │               │  /                          │    .  :  .                 │                 └──────────> x                └──────────> x               └──────────> x
```

**Husk:** Ukorrelerethed ($ho = 0$) er **ikke** det samme som uafhængighed! Hvis $Y = X^2$ og $X$ er symmetrisk omkring 0, er $ho = 0$, men $Y$ er 100 % afhængig af $X$.

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 27. november.

Øvelsesopgaver, ugebrevet: 6.3.1, 6.4.1, 6.3.8, 6.2.5, (6.4.2, 5.3.15\*). Kursussiden har samme opgaver i rækkefølgen 6.3.1, 6.4.1, 6.2.5, 6.3.8, (6.4.2, 5.3.15).

Opgaver til selvstudium: 6.1.6, 6.3.5, 6.3.13, 6.4.5.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 19.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
