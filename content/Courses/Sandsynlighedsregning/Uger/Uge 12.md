---
publish: true
title: "Sandsynlighedsregning uge 12: Den bivariate normalfordeling"
course: Sandsynlighedsregning
type: week
week: 12
tags:
  - sandsynlighed
  - ugenote
---

# Uge 12: Den bivariate normalfordeling

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 27. november, afsnit 6.5) og ugebrevet til forelæsning 12. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "over middel", ca. 13 sider. Slides og videoer er ikke læst. Forelæsningen følger en lidt mere analytisk tilgang end bogens geometriske forklaring (side 449-450 og 452-453).

## Emner

- Afsnit 6.5: standardiseret og generel bivariat normalfordeling, linearkombinationer

## Begreber

**Standard bivariat normalfordeling med korrelation $\rho$.** Definition i boksen nederst side 451. Man kan konstruere den som $Y = \rho X + \sqrt{1 - \rho^2}\,Z$, hvor $X$ og $Z$ er uafhængige standardnormale. Så er både $X$ og $Y$ standardnormale og $\mathrm{Corr}(X,Y) = \rho$. (Konstruktionen er den almindelige; bogens geometriske forklaring er en anden vej til samme fordeling.)

**Generel bivariat normalfordeling.** Den generelle definition står i boksen nederst side 454: $X = \mu_1 + \sigma_1 U$ og $Y = \mu_2 + \sigma_2 V$, hvor $(U,V)$ er standard bivariat normal med korrelation $\rho$. Fem parametre: $\mu_1, \mu_2, \sigma_1, \sigma_2, \rho$.

**Betinget fordeling.** Givet $X = x$ er $Y$ normalfordelt med $E(Y \mid X = x) = \mu_2 + \rho\,\frac{\sigma_2}{\sigma_1}(x - \mu_1)$ og $\mathrm{Var}(Y \mid X = x) = \sigma_2^2(1 - \rho^2)$. Variansen afhænger ikke af $x$. Eksempel: standard med $\rho = 0{,}6$ og $X = 1$: $Y \mid X = 1 \sim N(0{,}6;\,0{,}64)$, spredning $0{,}8$, så $P(Y > 0 \mid X = 1) = \Phi(0{,}6/0{,}8) = \Phi(0{,}75) \approx 0{,}77$. Eksempel 2 side 457 er ifølge ugebrevet vigtigt til opgave 6.5.1 b) og 6.5.2.

**Linearkombinationer.** De to bokse side 460 og 461: en linearkombination $aX + bY$ af bivariat normalfordelte variable er normalfordelt, med middelværdi $a\mu_1 + b\mu_2$ og varians $a^2\sigma_1^2 + b^2\sigma_2^2 + 2ab\rho\sigma_1\sigma_2$.

**Uafhængighed og korrelation.** For bivariat normalfordelte variable er $X$ og $Y$ uafhængige netop når kovariansen (korrelationen) er 0. Det gælder ikke for vilkårlige fordelinger (se modeksemplet i uge 11).
### Flerdimensional model: Bivariat normalfordeling og niveau-ellipser

Tæthedsfunktionen for to normalfordelte variable med korrelation $ho$ har elliptiske niveaulinjer:

```text
           y ^
             │           .-''''-.
             │         .'  /     '.
             │        /   /        \
             │       │   /          │  <- Hovedakse orienteret i vinkel 45°
             │        \ /          /     når σ_X = σ_Y og ρ > 0
             │         '.        .'
             │           '-....-'
             └─────────────────────────> x
```
Tvær-snit parallelle med koordinatakserne er altid 1D-normalfordelinger:
$$X \mid (Y = y) \sim \mathcal{N}\left(\mu_X + ho rac{\sigma_X}{\sigma_Y}(y - \mu_Y), \; \sigma_X^2(1 - ho^2)ight).$$
Spredningen skrumper med faktoren $\sqrt{1 - ho^2}$, fordi kendskab til $Y$ reducerer usikkerheden på $X$.

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 4. december.

Øvelsesopgaver: 6.5.1, 6.5.2, 6.4.6, 6.5.4, 6.5.10. (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 6.4.7, 6.5.6, 6.5.9, R.6.8\*, (6.3.15\*).

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 13.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
