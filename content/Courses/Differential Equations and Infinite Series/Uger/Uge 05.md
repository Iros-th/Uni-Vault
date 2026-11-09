---
publish: true
title: "01025 uge 5: Konvergenskriterier og kvotientrækker"
course: Differential Equations and Infinite Series
type: week
week: 5
tags:
  - differential-equations
  - ugenote
---

# Uge 5: Konvergenskriterier og kvotientrækker

> **Kilde:** Ugeseddel 5 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 4.5 og 5.1. Ugesedlen siger at sætning 4.27 og 4.30 bevises i "appendiks A.8"; i den 4. udgave jeg har tjekket mod står beviserne i A.7 (Konvergenskriterier for uendelige rækker). Opgave 963 og 964 er fra EkstraOpgaver.pdf. SlidesUge5.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning (onsdag 30/9): afsnit 4.5 og 5.1, samt beviserne for sætning 4.27 og 4.30 i appendiks (se kildenoten).
- Husk fra forelæsningen: $\sum_{n=1}^\infty \frac1n$ er divergent.

## Begreber

### Sammenligningskriteriet (sætning 4.20)
Antag $0 \leq a_n \leq b_n$. Hvis $\sum b_n$ er konvergent, er $\sum a_n$ konvergent. Hvis $\sum a_n$ er divergent, er $\sum b_n$ divergent.

**Eksempel.** $0 \leq \frac{1}{n^2 + 1} \leq \frac{1}{n^2}$ og $\sum \frac1{n^2}$ er konvergent, så $\sum \frac{1}{n^2+1}$ er konvergent.

### Ækvivalenskriteriet (sætning 4.24)
To rækker med positive led er ækvivalente, hvis $\frac{a_n}{b_n} \to C$ med $C > 0$ endelig. Så er de enten begge konvergente eller begge divergente.

**Eksempel.** $a_n = \frac{n+1}{n^3 + 2}$ og $b_n = \frac{1}{n^2}$: $\frac{a_n}{b_n} = \frac{n^3 + n^2}{n^3 + 2} \to 1$. Da $\sum\frac1{n^2}$ er konvergent, er $\sum a_n$ det også.

### Absolut konvergens (sætning 4.27)
$\sum a_n$ er absolut konvergent, hvis $\sum |a_n|$ er konvergent, og så er $\sum a_n$ selv konvergent. Det virker også for komplekse led.

**Eksempel.** $\sum \frac{(-1)^n}{n^2}$ er absolut konvergent, da $\sum\frac1{n^2}$ er konvergent.

### Kvotientkriteriet (sætning 4.30)
Antag $a_n \neq 0$ og $\left|\frac{a_{n+1}}{a_n}\right| \to C$. Hvis $C < 1$, er rækken absolut konvergent. Hvis $C > 1$, er den divergent. $C = 1$ giver ingen konklusion.

**Eksempel.** $a_n = \frac{n}{2^n}$: $\frac{a_{n+1}}{a_n} = \frac{n+1}{2n} \to \frac12 < 1$, så rækken er konvergent. Bemærk at $\sum\frac1n$ og $\sum\frac1{n^2}$ begge giver $C = 1$, men den ene divergerer og den anden konvergerer.

### Integralkriteriet (sætning 4.33)
Er $f: [1, \infty[ \to [0, \infty[$ kontinuert og aftagende, så er $\sum_{n=1}^\infty f(n)$ konvergent netop når $\int_1^\infty f(x)\,dx$ er konvergent.

**Eksempel.** $\sum \frac{1}{n^p}$ er konvergent netop når $p > 1$, fordi $\int_1^\infty x^{-p}dx$ er det (eksempel 4.34 i bogen). Fx er $\sum\frac{1}{n^{1.1}}$ konvergent.

### Kvotientrækker (afsnit 5.1, sætning 5.2 og korollar 5.5)
$\sum_{n=0}^\infty x^n$ er konvergent netop når $|x| < 1$, og så er summen $\frac{1}{1-x}$. Korollar 5.5: for $|x|<1$ er

$$\sum_{n=N}^\infty x^n = \frac{x^N}{1-x}.$$

**Eksempel.** $\sum_{n=2}^\infty \left(\tfrac13\right)^n = \frac{(1/3)^2}{1 - 1/3} = \frac{1/9}{2/3} = \frac16$.

### Rækker med variable led, første smag (afsnit 5.1)
$\sum_{n=0}^\infty x^n$ er et eksempel på en række hvor leddene afhænger af $x$. Svaret på "konvergerer den?" afhænger af $x$, og summen er en funktion af $x$ (sumfunktionen).

**Eksempel.** $\sum_{n=0}^\infty (2x)^n$ konvergerer netop når $|2x| < 1$, dvs. $|x| < \frac12$, med sumfunktion $\frac{1}{1-2x}$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 432 | 2.8, 2.9 | Vis at et homogent og et inhomogent $2\times 2$ system (påvirkning $(\cos t, \sin t)^\top$) er asymptotisk stabile. |
| 925 | 2.8 (Routh-Hurwitz) | Karakteristisk polynomium for en $2\times2$ matrix; asymptotisk stabil netop når $\det A > 0$ og $\operatorname{tr} A < 0$. |
| Opgave 963 (EkstraOpgaver) | 4.2 | Konvergens og grænseværdi for fire talfølger. |
| Opgave 964 (EkstraOpgaver) | 4.1 | Er tre uegentlige integraler konvergente, og hvad er værdien? |
| 144 | 5.1 | For hvilke $x$ er $\sum_{n=0}^\infty (x+1)^n$ konvergent, og hvad er sumfunktionen? |
| 103 | 4.4, 4.5 | Konvergens og sum af seks rækker, bl.a. en teleskoprække (vink: eksempel 4.18(iii)). |
| 816 (i) til (iv) | 4.5 | Konvergens af $\sum \frac{n!\,\ln n}{n^n}$ via en vurdering af leddene. |
| 150 | 4.5 | Sammenlignings- og ækvivalenskriteriet på $\sum\frac{1}{n^3+1}$, $\sum\frac{1}{n + \sin n}$, $\sum\frac1{\sqrt n}$. |

**Hjemmeopgavesæt 4:** Opgave A på ugesedlen afleveres fysisk 7/10 kl. 8, og Möbius sæt 4 senest 6/10 kl. 20. Opgave A handler om kvotientkriteriet anvendt på $\sum a_n$, $\sum (n^2 + 7n + 3)a_n$ og $\sum P(n)a_n$ for et polynomium $P$, når $\frac{a_{n+1}}{a_n} \to C < 1$. Ugesedlens vink: der findes $M$ så $P(n) \neq 0$ for $n \geq M$, og del summen op ved $M$. (Ikke løst her, det er en bedømt aflevering.)

**MC:** svarene på 702 er 2, 3 og 5. Løs nu opgave 703.

## Tjek dig selv

- [ ] Kan jeg vælge det rigtige kriterium (sammenligning, ækvivalens, kvotient, integral) ud fra hvordan leddene ser ud?
- [ ] Ved jeg hvorfor kvotientkriteriet ikke kan afgøre $\sum\frac{1}{n^p}$?
- [ ] Kan jeg bevise at absolut konvergens medfører konvergens (appendiksbeviset)?
- [ ] Kan jeg finde summen af en kvotientrække der starter ved $n = N$?
- [ ] Ved jeg præcis for hvilke $p$ rækken $\sum\frac1{n^p}$ konvergerer, og hvorfor?
- [ ] Kan jeg finde de $x$ hvor en simpel række med variable led konvergerer?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 04|Uge 4]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 06|Uge 6: Vurdering af summen og alternerende rækker]]
