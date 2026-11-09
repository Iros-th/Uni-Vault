---
publish: true
title: "Sandsynlighedsregning uge 2: Binomialfordelingen og normalapproksimation"
course: Sandsynlighedsregning
type: week
week: 2
tags:
  - sandsynlighed
  - ugenote
---

# Uge 2: Binomialfordelingen, normalapproksimation og hypergeometrisk fordeling

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 11. september, afsnit 2.1, 2.2, 2.5 og Appendiks 1 om counting) og ugebrevet til forelæsning 2. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "under middel", ca. 39 sider. Slides og videoer er ikke læst.

## Emner

- Afsnit 2.1: binomialfordelingen
- Afsnit 2.2: normalfordelingen som approksimation til binomialfordelingen (til midt side 103)
- Afsnit 2.5: den hypergeometriske fordeling
- Appendiks 1: counting
- Ikke pensum: side 103-104 ("How good is the normal approximation") er anbefalet læsning, side 104-108 og afsnit 2.3 læses kun ved overskud. Afsnit 2.4 er pensum, men er stort set dækket af afsnit 3.5.

## Begreber

**Binomialfordelingen.** Antal succeser $X$ i $n$ uafhængige forsøg, hver med succesandel $p$: $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k = 0, \dots, n$. Eksempel: 10 møntkast, præcis 3 kroner: $\binom{10}{3} / 2^{10} = 120/1024 \approx 0{,}117$. Ugebrevet peger på boksen nederst side 81, som opsummerer egenskaberne.

**Middelværdi og spredning.** For binomialfordelingen er $E(X) = np$ og $\sigma = \sqrt{np(1-p)}$. Eksempel: $n = 100$, $p = 0{,}5$ giver $50$ og $5$.

**Normalfordelingen.** Standardnormalfordelingens fordelingsfunktion skrives $\Phi(z)$. Har $X$ middelværdi $\mu$ og spredning $\sigma$, standardiserer man med $Z = (X - \mu)/\sigma$. Boksen side 99 lige under midten er det beregningsmæssigt vigtigste i afsnit 2.2.

**Normalapproksimation til binomial.** For stor $n$ er $P(a \le X \le b) \approx \Phi\!\left(\frac{b + 0{,}5 - np}{\sigma}\right) - \Phi\!\left(\frac{a - 0{,}5 - np}{\sigma}\right)$ med kontinuitetskorrektion. Eksempel: $n = 100$, $p = 0{,}5$, $P(X \ge 55) \approx 1 - \Phi\!\left(\frac{54{,}5 - 50}{5}\right) = 1 - \Phi(0{,}9) \approx 0{,}18$.

**Kvadratrodsloven og store tals lov.** Spredningen på antallet af succeser vokser som $\sqrt{n}$, mens spredningen på andelen $X/n$ aftager som $1/\sqrt{n}$. Boksene nederst side 100 og øverst side 101 er specialtilfælde af generelle resultater, som kommer senere i kurset.

**Hypergeometrisk fordeling.** Træk $n$ uden tilbagelægning fra en population på $N$ med $G$ "gode": $P(X = k) = \dfrac{\binom{G}{k}\binom{N-G}{n-k}}{\binom{N}{n}}$. Eksempel: 5 kort fra 52, præcis 2 hjerter: $\dfrac{\binom{13}{2}\binom{39}{3}}{\binom{52}{5}} = \dfrac{78 \cdot 9139}{2\,598\,960} \approx 0{,}274$.

**Counting.** Antal ordnede udvælgelser af $r$ blandt $n$ er $n!/(n-r)!$, antal uordnede er $\binom{n}{r}$. Binomial er "med tilbagelægning", hypergeometrisk er "uden".

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 18. september.

Øvelsesopgaver: 2.1.1, 2.2.1 [a), d)], 2.5.1, 1.5.9, 1.6.8, 2.1.2, 2.2.4, (1.3.12\*), R.1.1. (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: R.1.3, R.1.15, 2.1.6, 2.2.6.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 8, 11, 12 og 26.

## Tjek dig selv

- [ ] Kan jeg opstille $P(X = k)$ for en binomialfordeling og forklare hvert led?
- [ ] Kan jeg bruge kontinuitetskorrektion i normalapproksimationen?
- [ ] Kan jeg standardisere og aflæse $\Phi$ i en tabel?
- [ ] Kan jeg forklare, hvorfor $X/n$ koncentrerer sig om $p$ for stor $n$?
- [ ] Kan jeg afgøre, om en opgave er binomial eller hypergeometrisk?

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
