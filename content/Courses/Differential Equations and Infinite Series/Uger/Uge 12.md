---
publish: true
title: "01025 uge 12: Variable koefficienter, potensrækkemetoden og Fourierrækkemetoden"
course: Differential Equations and Infinite Series
type: week
week: 12
tags:
  - differential-equations
  - ugenote
---

# Uge 12: Variable koefficienter, potensrækkemetoden og Fourierrækkemetoden

> **Kilde:** Ugeseddel 12 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 1.6, 7.1 og 7.2, eksamenssættet 01025Mat2Eksamen-dec-17.pdf (fra zip-filen). Semesteroversigten kalder ugen "2. ordens diff.lign. potensrækkemetoden" og nævner projekt 2, men ifølge ugeseddel 11 afleveres miniprojekt 2 i denne uge (25/11).

## Læseplan

- Forelæsning: afsnit 1.6, 7.1 og 7.2.

## Begreber

### Ligninger med variable koefficienter (afsnit 1.6)
$y'' + a_1(t)y' + a_2(t)y = u(t)$, hvor koefficienterne afhænger af $t$. Karakterligningen virker ikke længere. Men kender man én løsning $y_1$ til den homogene ligning, giver sætning 1.31 resten.

### Reduktion af orden (sætning 1.31)
Lad $y_1$ løse den homogene ligning med $y_1(t) \neq 0$ på $I$, og sæt $A_1(t) = \int a_1(t)\,dt$ og $\Omega(t) = e^{A_1(t)}$. Så er

$$y_2(t) = y_1(t)\int\frac{1}{y_1(t)^2\,\Omega(t)}\,dt$$

en løsning, og $y_1, y_2$ er lineært uafhængige. Sætningen giver også en formel for en partikulær løsning til den inhomogene ligning.

**Eksempel.** $y'' - \frac2t y' + \frac{2}{t^2}y = 0$ for $t > 0$ har $y_1 = t$ (tjek: $0 - \frac2t + \frac2t = 0$). Her er $a_1 = -\frac2t$, så $A_1 = -2\ln t$ og $\Omega = t^{-2}$. Dermed $y_2 = t\int\frac{1}{t^2\cdot t^{-2}}dt = t\cdot t = t^2$. Tjek: $2 - \frac2t\cdot 2t + \frac{2}{t^2}t^2 = 2 - 4 + 2 = 0$. Fuldstændig løsning $y = c_1t + c_2t^2$.

### Potensrækkemetoden (afsnit 7.1, sætning 7.6)
Gæt $y(t) = \sum_{n=0}^\infty c_n t^n$, indsæt, saml led med samme potens af $t$ og sæt hver koefficient lig nul. Det giver en rekursionsformel for $c_n$. Sætning 7.6: hvis $a_1(t)$ og $a_2(t)$ i den normaliserede ligning $y'' + a_1y' + a_2y = 0$ er lig deres Taylorrækker på $]-\rho_1,\rho_1[$ og $]-\rho_2,\rho_2[$, så findes en potensrækkeløsning på $]-\min(\rho_1,\rho_2), \min(\rho_1,\rho_2)[$.

**Eksempel 1.** $y' = y$: $\sum (n+1)c_{n+1}t^n = \sum c_n t^n$ giver $c_{n+1} = \frac{c_n}{n+1}$, så $c_n = \frac{c_0}{n!}$ og $y = c_0e^t$.

**Eksempel 2.** $y'' + y = 0$: indsættelse og indeksskift giver $(n+2)(n+1)c_{n+2} = -c_n$. Med $c_0 = 1, c_1 = 0$ fås $c_2 = -\frac12$, $c_4 = \frac1{24}$, ..., altså $\cos t$; med $c_0 = 0, c_1 = 1$ fås $\sin t$.

Typiske faldgruber: indeksskift (fx $\sum_{n=2}^\infty n(n-1)c_nt^{n-2} = \sum_{n=0}^\infty (n+2)(n+1)c_{n+2}t^n$) og at glemme de første led når summerne starter forskellige steder. Konvergensradius for løsningen findes bagefter med kvotientkriteriet på rekursionen.

### Fourierrækkemetoden (afsnit 7.2, sætning 7.8)
Er systemet asymptotisk stabilt med overføringsfunktion $H(s)$, og er påvirkningen $u(t) = \sum c_n e^{int}$ kontinuert, stykkevis differentiabel og $2\pi$-periodisk, så har systemet løsningen

$$y(t) = \sum_{n=-\infty}^\infty c_n H(in)e^{int}.$$

Man ganger altså hver frekvens med overføringsfunktionen i den frekvens. Bagefter vurderer man fejlen ved at afskære rækken, ligesom i bogens eksempel i afsnit 7.2.

**Eksempel.** $y' + y = u$ med $u(t) = 2\cos t = e^{it} + e^{-it}$, så $c_{\pm1} = 1$ og resten er $0$. Systemet er asymptotisk stabilt (rod $-1$) og $H(s) = \frac{1}{s+1}$. Løsningen er $y = H(i)e^{it} + H(-i)e^{-it} = 2\operatorname{Re}\bigl(\tfrac{1-i}{2}e^{it}\bigr) = \cos t + \sin t$. Tjek: $y' + y = -\sin t + \cos t + \cos t + \sin t = 2\cos t$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 891 | 7.1 | Potensrækkemetoden på $t y'' - (t+1)y' + y = 0$. Antag $t > 0$ i (vi). Ugesedlen: i stedet for (iv) til (vii) kan man indse at der er to lineært uafhængige potensrækkeløsninger og finde deres sumfunktioner. |
| Opgave 3, eksamen 01025 december 2017 | 7.1 | Potensrækkeløsning til $y'' - xy = 0$: rekursionen $a_{n+3}(n+3)(n+2) = a_n$ og $a_2 = 0$, en approksimation $y_8$ med $y(0) = 1$, $y'(0) = 2$, og konvergensradius. |
| 202 | 6.1, 6.2 | Fourierrækken for $f(x) = \frac14x^2 - \frac\pi2x$ på $[0, 2\pi[$, og at $\sim$ kan erstattes af $=$. Ugesedlen giver stamfunktionen til $\bigl(\frac{t^2}{4} - \frac\pi2 t\bigr)\cos nt$. |

**Hjemmeopgavesæt 10:** to Möbius-opgaver, ingen fysisk aflevering, senest onsdag 2/12 kl. 8. Start med Sæt10-inhomogen-01025 (op til 10 forsøg), lav derefter Sæt10-01025 (ét forsøg).

**MC:** svaret på 709 er 3 i både (a) og (b).

## Tjek dig selv

- [ ] Kan jeg bruge sætning 1.31 til at finde en anden løsning når jeg kender én?
- [ ] Husker jeg at normalisere ligningen (koefficient $1$ på $y''$) før jeg aflæser $a_1(t)$?
- [ ] Kan jeg indsætte en potensrække, lave indeksskift og udlede en rekursionsformel?
- [ ] Kan jeg finde konvergensradius for en potensrækkeløsning ud fra rekursionen?
- [ ] Kan jeg bruge Fourierrækkemetoden, og ved jeg hvilke antagelser den kræver (asymptotisk stabil, kontinuert påvirkning)?
- [ ] Kan jeg vurdere fejlen når løsningen fra Fourierrækkemetoden afskæres ved $N$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 11|Uge 11]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 13|Uge 13: Ulineære differentialligninger]]
