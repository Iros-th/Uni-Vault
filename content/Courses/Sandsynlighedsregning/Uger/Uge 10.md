---
publish: true
title: "Sandsynlighedsregning uge 10: Betingede fordelinger og betinget middelværdi"
course: Sandsynlighedsregning
type: week
week: 10
tags:
  - sandsynlighed
  - ugenote
---

# Uge 10: Betingede diskrete fordelinger og betinget middelværdi

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 13. november, afsnit 6.1 og 6.2) og ugebrevet til forelæsning 10. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "middel", ca. 11 sider. Slides er ikke læst.

## Emner

- Afsnit 6.1: betingede diskrete fordelinger
- Afsnit 6.2: betinget middelværdi

## Begreber

**Betinget fordeling.** $P(Y = y \mid X = x) = \dfrac{P(X = x, Y = y)}{P(X = x)}$ (definition i boksen nederst side 395). Hold $x$ fast: som funktion af $y$ er det en ægte fordeling med sum 1. Ugebrevet bemærker, at nogle udgaver af bogen har en trykfejl her, hvor knap en halv side pludselig gentages.

**Simultan fordeling fra betinget.** $P(X = x, Y = y) = P(X = x)\,P(Y = y \mid X = x)$. Ugebrevet foreslår at tænke på eksperimenter med flere variable som noget der sker sekventielt: først en deldel, hvis udfald afgør den næste.

**Marginal fordeling via betinget.** $P(Y = y) = \sum_x P(X = x)\,P(Y = y \mid X = x)$ (boks midt på side 396, udledt af reglen om gennemsnit af betingede sandsynligheder fra side 41). Eksempel: et kast med en terning giver $N$, derefter slås $N$ mønter. $P(\text{ingen kroner}) = \sum_{n=1}^{6}\frac{1}{6}\cdot 2^{-n} = \frac{1}{6}\cdot\frac{63}{64} \approx 0{,}164$.

**Betinget middelværdi.** $E(Y \mid X = x) = \sum_y y\,P(Y = y \mid X = x)$. For hvert $x$ er det et tal.

**Betinget middelværdi som stokastisk variabel.** $E(Y \mid X)$ er den stokastiske variabel, man får ved at indsætte $X$ i funktionen $x \mapsto E(Y \mid X = x)$ (indrammet resultat side 403). Før $X$ er observeret, er $E(Y \mid X)$ et endnu ikke udført eksperiment.

**Reglen om iterede middelværdier.** $E\big(E(Y \mid X)\big) = E(Y)$. Metode: find $E(Y \mid X)$ med simple overvejelser, og midl derefter over $X$ (eksemplerne 2, 3 og 4 i afsnittet). Eksempel (terning og mønter): givet $N = n$ er forventet antal kroner $n/2$, så $E(\text{kroner}) = E(N/2) = 3{,}5/2 = 1{,}75$.

**Udtynding af Poisson.** Hvis $N$ er Poisson($\mu$) og man beholder hver af de $N$ uafhængigt med sandsynlighed $p$, bliver antallet beholdt Poisson($p\mu$). Det følger af marginalformlen ovenfor og er den diskrete begrundelse for udtyndingen fra uge 5.

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 20. november. (Ugebrevet skriver 13/11/26, men det er forelæsningens egen dato; kursussiden lister opgaverne under 20. november.)

Øvelsesopgaver: 6.1.1, 6.2.1, 5.3.9, 6.2.4, (5.4.7, 6.1.3). (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 5.3.12, 5.4.3, 6.1.5. (Kursussiden har den som 6.1.5 med trinvis løsning.)

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 6 og 29.

## Tjek dig selv

- [ ] Kan jeg finde en betinget fordeling ud fra en simultan tabel?
- [ ] Kan jeg bygge en simultan fordeling op af $P(X = x)$ og $P(Y = y \mid X = x)$?
- [ ] Kan jeg finde den marginale fordeling af $Y$ ved at summere over $X$?
- [ ] Kan jeg forklare, hvorfor $E(Y \mid X)$ er en stokastisk variabel?
- [ ] Kan jeg bruge $E(E(Y \mid X)) = E(Y)$ i en to-trins opgave?

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
