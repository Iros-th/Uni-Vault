---
publish: true
title: "Sandsynlighedsregning uge 6: Eksponential, gamma, hazard rate og variabelskift"
course: Sandsynlighedsregning
type: week
week: 6
tags:
  - sandsynlighed
  - ugenote
---

# Uge 6: Eksponential- og gammafordeling, hazard rate og variabelskift

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 9. oktober, afsnit 4.2, 4.3 og 4.4) og ugebrevet til forelæsning 6. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "middel", ca. 28 sider. Kursussiden advarer om, at lærebogens parametrisering (især af eksponentialfordelingen) altid bruges i kurset, også hvis fordelingsoversigten fra 02402 afviger. Slides er ikke læst.

## Emner

- Afsnit 4.2: eksponentialfordelingen, Poissonprocessen, gammafordelingen
- Afsnit 4.3: overlevelsesfunktion og hazard rate
- Afsnit 4.4: variabelskift (fordeling af $Y = h(X)$)

## Begreber

**Eksponentialfordelingen.** Med rate $\lambda$ er tætheden $\lambda e^{-\lambda x}$ for $x \ge 0$, og $E(X) = 1/\lambda$. Eksempel: $\lambda = 2$ per time, $P(T > 1) = e^{-2} \approx 0{,}135$.

**Overlevelsesfunktion og mangel på hukommelse.** $P(T > t) = e^{-\lambda t}$ (side 279). Eksponentialfordelingen har ingen hukommelse: $P(T > s + t \mid T > s) = P(T > t)$ (nederst side 279). Eksempel: har en komponent levet 2 timer, er sandsynligheden for at den overlever 1 time mere stadig $e^{-\lambda}$.

**Poissonprocessen.** Eksempel 2 side 281-282 leder til definitionen i boksen side 284: ankomsttider har uafhængige eksponentialfordelte mellemrum, og antallet af ankomster i et tidsrum $t$ er Poisson med middelværdi $\lambda t$. Ugebrevet kalder den en af de fundamentale byggeblokke i sandsynlighedsregning og statistik.

**Gammafordelingen.** Tiden til den $r$'te ankomst i en Poissonproces er gammafordelt med parametre $r$ og $\lambda$ (side 286); $E = r/\lambda$ og $\mathrm{Var} = r/\lambda^2$. Med $r = 1$ fås eksponentialfordelingen.

**Hazard rate.** $h(t) = f(t)/P(T > t)$ (side 296) måler hvor "farlig" øjeblikket $t$ er for en komponent, der har overlevet indtil $t$. For eksponentialfordelingen er den konstant lig $\lambda$. Boksen øverst side 297 viser sammenhængen mellem tæthed, overlevelsesfunktion og hazard rate, som er tre måder at beskrive samme fordeling på.

**Middelværdi fra overlevelsesfunktionen.** $E(T) = \int_0^\infty P(T > t)\,dt$ (side 299). Eksempel: eksponential giver $\int_0^\infty e^{-\lambda t}dt = 1/\lambda$.

**Variabelskift.** Lineært: $Y = aX + b$ har tæthed $f_Y(y) = \frac{1}{|a|}f_X\!\left(\frac{y-b}{a}\right)$ (nederst side 302). Generelt, når $h$ er monoton og differentiabel: $f_Y(y) = f_X(x)\,/\,|h'(x)|$ med $x = h^{-1}(y)$ (side 304). Variant for mange-til-en øverst side 307. Eksempel: $X$ ligefordelt på $(0,1)$ og $Y = -\ln(X)/\lambda$. Så er $P(Y > y) = P(X < e^{-\lambda y}) = e^{-\lambda y}$, altså er $Y$ eksponentialfordelt med rate $\lambda$.

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 23. oktober. (Ugebrev og kursusside afviger lidt, se nedenfor.)

Øvelsesopgaver, ugebrevet: 4.2.1, 4.3.1, 4.4.1, 3.5.10, 4.1.12 [a), c)], 4.2.9, 4.3.2, 4.4.2. Kursussiden har 4.1.12 uden delopgaver og tilføjer (R.3.24).

Opgaver til selvstudium: 4.1.5, 4.2.5, 4.3.3, 4.4.3.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 14, 17 og 22.

## Tjek dig selv

- [ ] Kan jeg forklare mangel på hukommelse og vise den med formler?
- [ ] Kan jeg gå fra Poissonproces til eksponential- og gammafordeling?
- [ ] Kan jeg udregne hazard rate ud fra tæthed og overlevelsesfunktion?
- [ ] Kan jeg beregne $E(T)$ fra overlevelsesfunktionen?
- [ ] Kan jeg finde tætheden af $Y = h(X)$ ved variabelskift?

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
