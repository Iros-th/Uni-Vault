---
publish: true
title: "Sandsynlighedsregning uge 3: Stokastiske variable og middelværdi"
course: Sandsynlighedsregning
type: week
week: 3
tags:
  - sandsynlighed
  - ugenote
---

# Uge 3: Stokastiske variable, simultane fordelinger og middelværdi

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 18. september, afsnit 3.1 og 3.2, holdt af Nicolai Siim Larsen) og ugebrevet til forelæsning 3. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "middel", ca. 40 sider. Slides og videoer er ikke læst.

## Emner

- Afsnit 3.1: stokastiske variable, fordelinger, simultan og marginal fordeling, betingede fordelinger og uafhængighed
- Afsnit 3.2: middelværdi (indikatormetoden og Markovs ulighed gennemgås først i uge 4)

## Begreber

**Stokastisk variabel.** En stokastisk variabel $X$ er en afbildning fra udfaldsrummet til de reelle tal. Man kan se den som resultatet af et eksperiment, der endnu ikke er udført. Ugebrevet kalder den tekniske bemærkning nederst side 143 meget vigtig, fordi den binder kapitel 1 og 2 sammen med resten af bogen. Når den er forstået, træder udfaldsrummet typisk i baggrunden.

**Fordeling.** Fordelingen af en diskret $X$ er $P(X = x)$ for alle $x$. Eksempel: en terning, $P(X = x) = 1/6$ for $x = 1, \dots, 6$. Summen af sandsynlighederne er 1.

**Simultan og marginal fordeling.** Den simultane fordeling af $X$ og $Y$ er $P(X = x, Y = y)$ (side 144). De marginale fås ved at summere ud: $P(X = x) = \sum_y P(X = x, Y = y)$ (side 145). Eksempel: to terninger, $P(X = 1, Y = 2) = 1/36$, og marginalen $P(X = 1) = 6/36 = 1/6$.

**Betinget fordeling og uafhængighed.** $P(Y = y \mid X = x) = P(X = x, Y = y)/P(X = x)$. $X$ og $Y$ er uafhængige, hvis $P(X = x, Y = y) = P(X = x)P(Y = y)$ for alle $x, y$ (side 150-151). Ugebrevet siger, at tankegangen i eksempel 4 side 149 bruges mange gange de kommende uger.

**Middelværdi.** $E(X) = \sum_x x\,P(X = x)$ (definition side 163). Eksempel: terning, $E(X) = (1+2+\dots+6)/6 = 3{,}5$.

**Middelværdi af en funktion.** $E\,g(X) = \sum_x g(x)P(X = x)$ (boks øverst side 175). Eksempel: $E(X^2) = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6$. Bemærk $E(X^2) \ne (E X)^2$.

**Linearitet.** $E(aX + bY) = aE(X) + bE(Y)$, uden krav om uafhængighed (regneregler side 167 og 177). Eksempel: summen af to terninger har middelværdi $3{,}5 + 3{,}5 = 7$.
### Fysisk model: Tyngdepunktsfortolkning af middelværdi $E[X]$

Middelværdien $E[X] = \sum x_i P(X = x_i)$ svarer fysisk til det præcise balancepunkt (tyngdepunkt) på en vippe belastet med masserne $P(X = x_i)$:

```text
             Masser (sandsynligheder):
             0,1      0,4            0,3        0,2
              o        o              o          o
          ────┴────────┴──────────────┴──────────┴──── (Vippe)
                                ▲
                               E[X] (Balancepunkt)
```
Hvis vippen understøttes præcis ved $E[X]$, er det samlede drejningsmoment nul: $\sum (x_i - E[X]) P(X = x_i) = 0$.

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 25. september.

Øvelsesopgaver: 3.1.1, 3.2.1, 2.2.9, 3.2.2, 3.1.4, 2.5.4, 3.2.8, 3.1.12. (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 2.1.4, 2.5.5, 3.1.5, 3.2.3.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
