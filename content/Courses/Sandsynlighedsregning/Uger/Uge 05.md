---
publish: true
title: "Sandsynlighedsregning uge 5: Poissonfordelingen og kontinuerte variable"
course: Sandsynlighedsregning
type: week
week: 5
tags:
  - sandsynlighed
  - ugenote
---

# Uge 5: Poissonfordelingen og kontinuerte stokastiske variable

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 2. oktober, afsnit 3.5, (3.6) og 4.1; 3.6 læses kursorisk; forelæsningen holdes af Nicolai Siim Larsen) og ugebrevet til forelæsning 5. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "middel", ca. 30 sider for afsnit 3.5 til 4.1. Slides er ikke læst.

## Emner

- Afsnit 3.5: Poissonfordelingen
- Afsnit 3.6: symmetri (skimmes, gennemgås ikke)
- Afsnit 4.1: kontinuerte stokastiske variable, tæthedsfunktion, ligefordeling, normalfordeling

## Begreber

**Poissonfordelingen.** $P(X = k) = e^{-\mu}\,\mu^k / k!$ for $k = 0, 1, 2, \dots$ med $E(X) = \mathrm{Var}(X) = \mu$. Den modellerer tælletal, fx antal henfald i en prøve per minut. Eksempel: $\mu = 3$ giver $P(X = 0) = e^{-3} \approx 0{,}050$.

**Poisson som grænse for binomial.** Når $n \to \infty$, $p \to 0$ og $np = \mu$ holdes fast, går binomialfordelingen mod Poissonfordelingen. Eksempel: $n = 1000$, $p = 0{,}002$ er tilnærmet Poisson med $\mu = 2$.

**Poisson Scatter Theorem og udtynding.** Under antagelse 1 og 2 side 229 (ugebrevet henviser dertil) fås Poisson-fordelte tællinger i områder; boksen øverst side 230 er sætningen. Udtynding af en Poisson-spredning (thinning, nederst side 232): beholder man hvert punkt med sandsynlighed $p$, bliver antallet Poisson med middelværdi $p\mu$.

**Kontinuert variabel og tæthed.** En tæthed $f$ er ikke-negativ og integrerer til 1. $P(a \le X \le b) = \int_a^b f(x)\,dx$. For en kontinuert variabel er $P(X = x) = 0$ for ethvert $x$, så man regner i stedet på intervaller (sammenligning side 262-263).

**Middelværdi og varians.** Summer erstattes af integraler: $E(X) = \int x f(x)\,dx$ (side 261, mere generelt side 263). Beregningsformlen $\mathrm{Var}(X) = E(X^2) - (E X)^2$ gælder også her.

**Ligefordeling på $(a,b)$.** Tæthed $1/(b-a)$ på intervallet, $E(X) = (a+b)/2$, $\mathrm{Var}(X) = (b-a)^2/12$ (side 264-265). Eksempel: $X$ ligefordelt på $(0,1)$, $P(X < 0{,}3) = 0{,}3$.

**Normalfordelingen $N(\mu, \sigma^2)$.** Tæthed $\dfrac{1}{\sigma\sqrt{2\pi}}\,e^{-(x-\mu)^2/(2\sigma^2)}$ (side 266-267). Standardisering $Z = (X - \mu)/\sigma$ giver $N(0,1)$. Eksempel 3 side 271 er nyttigt; side 272-275 kan springes over første gang.
### Tidslinjemodel: Poisson-proces ankomster og eksponentielle ventetider

En Poisson-proces med intensitet $\lambda$ hændelser pr. tidsenhed forbinder to komplementære perspektiver:

```text
  Tidslinje med uafhængige ankomster:
  ───|───────────|──────|─────────────|───────|─────────> Tid t
     <- W1 = Exp ->     <- W3 = Exp ->
     (Ventetid mellem hændelser: kontinuerlig, Exponential(λ))

  Antal hændelser N(t) i fast tidsvindue t: Diskret, Poisson(λt)
```

**Hukommelsesløshed (Memoryless property):**
$$P(W > s + t \mid W > s) = P(W > t).$$
At komponenten har overlevet i $s$ timer uden at gå i stykker, ændrer overhovedet ikke sandsynligheden for, at den overlever yderligere $t$ timer.

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 9. oktober.

Øvelsesopgaver: 3.5.2, 4.1.1, 3.3.14, 3.4.12, 3.5.4, 4.1.2, (4.1.13, 3.5.13). (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 3.5.5, 3.4.17, 3.5.9, 4.1.4.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 16, 18 og 30.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
