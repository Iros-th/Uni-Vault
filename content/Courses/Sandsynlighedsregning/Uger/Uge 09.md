---
publish: true
title: "Sandsynlighedsregning uge 9: Normalfordelte variable, summer og forhold"
course: Sandsynlighedsregning
type: week
week: 9
tags:
  - sandsynlighed
  - ugenote
---

# Uge 9: Uafhængige normalfordelte variable, summer og forhold

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 6. november, afsnit 5.3 og 5.4; forelæsningen holdes af Nicolai Siim Larsen) og ugebrevet til forelæsning 9. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "over middel", ca. 23 sider. Slides er ikke anvendt.

## Emner

- Afsnit 5.3: simultan fordeling af uafhængige normalfordelte variable, rotationssymmetri
- Afsnit 5.4: fordeling af funktioner af flere variable, summer og forhold

## Begreber

**Uafhængige standardnormale i planen.** Simultan tæthed $\dfrac{1}{2\pi}e^{-(x^2+y^2)/2}$ (afsnit 5.3). Den afhænger kun af afstanden til origo, så fordelingen er rotationssymmetrisk, og det gør regningerne lette (polære koordinater).

**Rayleighfordelingen.** Afstanden $R = \sqrt{X^2 + Y^2}$ fra origo har overlevelsesfunktion $P(R > r) = e^{-r^2/2}$ og tæthed $r\,e^{-r^2/2}$ (formel (c2) side 359).

**Linearkombinationer af normalfordelte.** Hvis $X \sim N(\mu_1, \sigma_1^2)$ og $Y \sim N(\mu_2, \sigma_2^2)$ er uafhængige, er $aX + bY \sim N(a\mu_1 + b\mu_2,\, a^2\sigma_1^2 + b^2\sigma_2^2)$ (boksen side 363). Eksempel: $X \sim N(1, 4)$, $Y \sim N(2, 9)$ uafhængige giver $X + Y \sim N(3, 13)$.

**Chi i anden.** Summen af $n$ kvadrerede uafhængige standardnormale er gammafordelt med parametre $n/2$ og $1/2$ (formel (2) side 365); den har eget navn, $\chi^2$-fordelingen med $n$ frihedsgrader. Eksempel: $n = 2$ giver eksponentialfordeling med rate $1/2$, i tråd med Rayleigh ovenfor.

**Variabelskift i flere dimensioner.** Som i afsnit 4.4, men med koordinattransformationer (fx fra $(x,y)$ til polære koordinater).

**Summer af uafhængige variable.** Tætheden af $Z = X + Y$ er foldningen $f_Z(z) = \int f_X(x)f_Y(z - x)\,dx$ (boksen side 372). Eksempel: to uafhængige ligefordelte på $(0,1)$ giver en trekantstæthed på $(0,2)$ med top i 1.

**Forhold.** Formel (f) side 383 for $Y/X$ og formel (g) for uafhængige variable (side 383). Udledningen af F-fordelingen som forhold mellem to $\chi^2$-fordelte størrelser står på plancherne, men gennemgås ikke ved forelæsningen. Ugebrevet anbefaler den til interesserede, især dem der følger statistikkurser.
## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 13. november.

Øvelsesopgaver: 5.3.1 [a), b), e)], 5.4.1, (5.1.6, 5.2.6), 5.3.3, 5.4.2, (5.4.19\*). Ugebrevet siger, at 5.1.6 og 5.2.6 kan være lidt skrappe, og at man kan vente med dem, hvis tiden bliver knap. (Ugebrev og kursusside har samme liste; kursussiden gentager 5.2.6 som selvstændigt link.)

Opgaver til selvstudium: 4.4.9, 4.5.7, 5.3.6, 5.4.6.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 25 og 27.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
