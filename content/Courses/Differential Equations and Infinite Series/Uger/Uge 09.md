---
publish: true
title: "01025 uge 9: Fourierrækker"
course: Differential Equations and Infinite Series
type: week
week: 9
tags:
  - differential-equations
  - ugenote
---

# Uge 9: Fourierrækker

> **Kilde:** Ugeseddel 9 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 6.1 og 6.2 samt appendiks C. SlidesUge9.pdf, MapleUge9.pdf og WeeklyNotes8_v3.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning: afsnit 6.1 og 6.2.
- Læs selv: appendiks C (Fourierrækker for $T$-periodiske funktioner).
- Ugesedlens råd: skitsér altid funktionen, med en hel periode og lidt af nabo-perioderne, også når opgaven ikke beder om det.

## Begreber

### Fourierrække (definition 6.1)
Til en $2\pi$-periodisk funktion $f$ med $\int_{-\pi}^{\pi}|f|^2 < \infty$ knyttes

$$f \sim \frac12 a_0 + \sum_{n=1}^\infty \bigl(a_n\cos nx + b_n \sin nx\bigr),$$

$$a_n = \frac1\pi\int_{-\pi}^{\pi} f(x)\cos nx\,dx, \qquad b_n = \frac1\pi\int_{-\pi}^{\pi} f(x)\sin nx\,dx.$$

Tegnet $\sim$ betyder kun at rækken hører til $f$; om den konvergerer mod $f$ er et separat spørgsmål (Fouriers sætning). Bemærk $\frac12 a_0$, som er middelværdien af $f$ over en periode.

### Lige og ulige funktioner (sætning 6.3, korollar 6.4)
- $f$ lige: $b_n = 0$ og $a_n = \frac2\pi\int_0^\pi f(x)\cos nx\,dx$ (ren cosinusrække).
- $f$ ulige: $a_n = 0$ og $b_n = \frac2\pi\int_0^\pi f(x)\sin nx\,dx$ (ren sinusrække).

Det bygger på at produktet af to lige funktioner er lige, og lige gange ulige er ulige (opgave 861), og at integralet af en ulige funktion over $[-\pi,\pi]$ er $0$.

**Eksempel (firkantbølge).** $f(x) = 1$ for $x \in\, ]0,\pi[$ og $f(x) = -1$ for $x \in\, ]-\pi, 0[$, udvidet $2\pi$-periodisk. Funktionen er ulige, så $a_n = 0$ og

$$b_n = \frac2\pi\int_0^\pi \sin nx\,dx = \frac{2}{\pi}\cdot\frac{1 - \cos n\pi}{n} = \begin{cases}\frac{4}{n\pi}, & n \text{ ulige},\\ 0, & n \text{ lige}.\end{cases}$$

Altså $f \sim \frac4\pi\sum_{k=1}^\infty \frac{\sin((2k-1)x)}{2k-1}$.

### Fouriers sætning (sætning 6.12)
Er $f$ stykkevis differentiabel og $2\pi$-periodisk, så konvergerer Fourierrækken i alle punkter. Hvor $f$ er kontinuert, er summen $f(x)$; i et springpunkt er summen middelværdien $\frac{f(x^+) + f(x^-)}{2}$.

**Eksempel (fortsat).** I $x = 0$ springer firkantbølgen fra $-1$ til $1$, så rækken giver $0$ (og alle led er da også $0$). I $x = \frac\pi2$ er $f$ kontinuert med værdi $1$, og $\sin\bigl((2k-1)\frac\pi2\bigr) = (-1)^{k-1}$, så

$$1 = \frac4\pi\Bigl(1 - \frac13 + \frac15 - \dots\Bigr), \quad\text{dvs.}\quad \sum_{k=1}^\infty\frac{(-1)^{k-1}}{2k-1} = \frac\pi4.$$

### Kontinuerte funktioner: uniform konvergens (korollar 6.13)
Er $f$ desuden kontinuert, er $f(x)$ lig sin Fourierrække for alle $x$, konvergensen er uniform, og

$$|f(x) - S_N(x)| \leq \frac{1}{\sqrt N}\frac{1}{\sqrt\pi}\sqrt{\int_{-\pi}^\pi |f'(t)|^2dt}.$$

Firkantbølgen er ikke kontinuert, så den konvergerer ikke uniformt (Gibbs-fænomenet ved springene).

### Majorant for en Fourierrække
Hvis $\sum(|a_n| + |b_n|)$ er konvergent, er $\sum(|a_n| + |b_n|)$ en konvergent majorantrække for Fourierrækken, og sumfunktionen er kontinuert (sætning 5.33). Det bruges i opgave 209 (v).

### Fourierrækker for $T$-periodiske funktioner (appendiks C)
Med $\omega = \frac{2\pi}{T}$:

$$f \sim \frac12a_0 + \sum_{n=1}^\infty\bigl(a_n\cos n\omega t + b_n\sin n\omega t\bigr), \qquad a_n = \frac2T\int_0^T f(t)\cos(n\omega t)\,dt,$$

og tilsvarende for $b_n$ med sinus.

### Rodkriteriet (opgave 813)
Hvis $|a_n|^{1/n} \leq C < 1$ for alle $n$, er $\sum a_n$ absolut konvergent, fordi $|a_n| \leq C^n$ og $\sum C^n$ er en konvergent kvotientrække. Svarer til kvotientkriteriet men giver nogle gange lettere regninger.

**Eksempel.** $\sum\left(\frac{n}{2n+1}\right)^n$: $|a_n|^{1/n} = \frac{n}{2n+1} \leq \frac12$, så rækken er konvergent.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 864, kun $f_1, f_2, f_3$ | 6.1, 6.2 | Skitsér $\lvert\cos x\rvert$, $x^3$ og $\sqrt{\lvert x\rvert}$ udvidet $2\pi$-periodisk; hvilke er stykkevis differentiable? |
| 228, undtagen (v) | 6.1, 6.2 | $f = \cos x$ på $]0,\pi]$ og $0$ på $]\pi, 2\pi]$: skitse, konvergens, sum i $x = 0$, $a_0$. |
| 222, undtagen (c) | 6.1, 6.2 | Fourierrækken for $f(t) = t$ på $[-\pi,\pi[$, og summen af $\sum\frac{(-1)^{n+1}}{2n-1}$. Se eksempel 6.10 i bogen. (c) laves i uge 10. |
| 861, 860 | 6.1 | Lige og ulige funktioner: produkter, og at enhver funktion entydigt er en sum af en lige og en ulige. |
| 225 | 6.1, 6.2 | Fourierkoefficienter for $f = 1$. Ugesedlen: en konsekvens af at en Fourierrække under passende antagelser er sin egen Fourierrække. |
| 209 | 6.1, 6.2, 5.4 | $f = \cos t$ for $\lvert t\rvert < \frac\pi4$, ellers $0$. Vink: $\cos^2x = \frac{1+\cos2x}{2}$ og formlen for $\int\cos nx\cos mx\,dx$ på ugesedlen. I (iii) skal summen angives for alle $t$. |
| 813 | 4.5 | Bevis rodkriteriet. |

**Hjemmeopgavesæt 8** (senest 11/11 kl. 8): to sæt i Möbius. Sæt8MC-01025 kan kun besvares én gang. I Sæt8B-01025 kan man få en ny tilfældig opgave efter scoren; den seneste score tæller.

**MC:** svaret på 706 er 3. Løs nu opgave 707.

## Tjek dig selv

- [ ] Kan jeg formlerne for $a_n$ og $b_n$, og husker jeg $\frac12a_0$?
- [ ] Kan jeg bruge lige/ulige til at halvere arbejdet?
- [ ] Kan jeg sige præcis hvad Fourierrækken konvergerer mod i et springpunkt?
- [ ] Hvornår kan $\sim$ erstattes af $=$?
- [ ] Kan jeg bruge Fouriers sætning i et konkret punkt til at finde summen af en talrække?
- [ ] Kan jeg omregne til en $T$-periodisk funktion med $\omega = 2\pi/T$?
- [ ] Kan jeg skitsere en periodisk udvidelse korrekt, inkl. værdierne i springpunkterne?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 08|Uge 8]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 10|Uge 10: Fourierrækker på kompleks form og Parseval]]
