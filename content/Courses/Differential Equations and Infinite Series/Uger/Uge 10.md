---
publish: true
title: "01025 uge 10: Fourierrækker på kompleks form og Parsevals sætning"
course: Differential Equations and Infinite Series
type: week
week: 10
tags:
  - differential-equations
  - ugenote
---

# Uge 10: Fourierrækker på kompleks form og Parsevals sætning

> **Kilde:** Ugeseddel 10 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 6.2, 6.3, 6.4 samt appendiks C), facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 708), samt eksamensopgave 3 fra E18 (01025Mat2MatTekEksamenB-E18.pdf). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 11/11): afsnit 6.2 (fejlvurderinger), 6.3 (kompleks form) og 6.4 (Parsevals sætning).
- Læs selv: appendiks C for formlerne på kompleks form med vilkårlig periode $T$.
- Forberedelse til miniprojekt 2 (uge 11): det anbefales kraftigt at løse projektopgave 2, 3 og 4 (i)-(iii) allerede nu.

## Begreber

### Fourierrækker på kompleks form (afsnit 6.3)
Ved hjælp af Eulers formel $e^{inx} = \cos(nx) + i\sin(nx)$ kan den reelle Fourierrække samles i en elegant kompleks eksponentialrække:

$$f \sim \sum_{n=-\infty}^\infty c_n e^{inx},$$

hvor de komplekse Fourierkoefficienter $c_n \in \mathbb{C}$ beregnes ved:

$$c_n = \frac{1}{2\pi}\int_{-\pi}^\pi f(x)e^{-inx}\,dx \quad (n \in \mathbb{Z}).$$

Sammenhængen mellem de reelle koefficienter $(a_n, b_n)$ og de komplekse koefficienter $c_n$ er givet ved (lemma 6.22):

$$c_0 = \frac{1}{2}a_0,$$

$$c_n = \frac{1}{2}(a_n - i b_n), \qquad c_{-n} = \frac{1}{2}(a_n + i b_n) \quad (n \ge 1).$$

Omvendt genfindes de reelle koefficienter som:

$$a_n = c_n + c_{-n}, \qquad b_n = i(c_n - c_{-n}) \quad (n \ge 1).$$

Hvis $f$ er en **reel funktion** ($f(x) \in \mathbb{R}$), gælder spejlsymmetrien (lemma 6.23):

$$c_{-n} = \overline{c_n}.$$

Dermed er $|c_{-n}| = |c_n|$, hvilket viser at de negative frekvenser indeholder præcis samme energi som de positive.

**Eksempel.** Betragt firkantbølgen fra uge 9: her var $a_n = 0$ for alle $n$, og $b_n = \frac{4}{n\pi}$ for ulige $n$. De komplekse koefficienter er:
- $c_0 = \frac{1}{2}a_0 = 0$.
- For ulige $n$: $c_n = \frac{1}{2}(0 - i\frac{4}{n\pi}) = -\frac{2i}{n\pi}$.
- Tjek for negative $n$: for $n = -1$ fås $c_{-1} = \frac{1}{2}(0 + i\frac{4}{1\pi}) = \frac{2i}{\pi} = -\frac{2i}{(-1)\pi}$. Formlen $c_n = -\frac{2i}{n\pi}$ gælder altså for alle ulige $n \in \mathbb{Z}$.

### Parsevals sætning (afsnit 6.4, sætning 6.25)
Parsevals sætning udtrykker energibevarelse mellem tidsdomænet og frekvensdomænet. For enhver $2\pi$-periodisk funktion med $\int_{-\pi}^\pi |f(x)|^2\,dx < \infty$ gælder:

$$\frac{1}{2\pi}\int_{-\pi}^\pi |f(x)|^2\,dx = \sum_{n=-\infty}^\infty |c_n|^2 = \frac{1}{4}|a_0|^2 + \frac{1}{2}\sum_{n=1}^\infty \bigl(|a_n|^2 + |b_n|^2\bigr).$$

Venstresiden kaldes funktionens **signaleffekt** (middelværdien af signalets kvadrat over en periode). Parsevals sætning viser, at den samlede effekt er lig summen af effekterne i de enkelte frekvenskomponenter.
Sætningen er et af de mest kraftfulde værktøjer til at beregne summer af uendelige talrækker, som ellers er umulige at summere.

**Eksempel (beregning af $\sum \frac{1}{(2k-1)^2} = \frac{\pi^2}{8}$).**
For firkantbølgen er $|f(x)|^2 = 1$ næsten overalt på $[-\pi, \pi]$. Signaleffekten er:

$$\frac{1}{2\pi}\int_{-\pi}^\pi 1^2\,dx = 1.$$

Da $a_n = 0$ og $b_{2k-1} = \frac{4}{(2k-1)\pi}$, giver højresiden i Parsevals sætning:

$$\frac{1}{2}\sum_{k=1}^\infty |b_{2k-1}|^2 = \frac{1}{2}\sum_{k=1}^\infty \frac{16}{\pi^2(2k-1)^2} = \frac{8}{\pi^2}\sum_{k=1}^\infty \frac{1}{(2k-1)^2}.$$

Sættes dette lig 1, fås omgående:

$$\sum_{k=1}^\infty \frac{1}{(2k-1)^2} = 1 + \frac{1}{9} + \frac{1}{25} + \frac{1}{49} + \dots = \frac{\pi^2}{8} \approx 1.2337.$$

### Approksimation og fejlvurdering med afsnitssummer (afsnit 6.2)
I numeriske anvendelser afskæres Fourierrækken efter $N$ led til afsnitssummen $S_N(x) = \frac{1}{2}a_0 + \sum_{n=1}^N (a_n \cos(nx) + b_n \sin(nx))$.
Hvis leddene kan vurderes ved $|a_n| + |b_n| \le M_n$, hvor $\sum M_n$ konvergerer, giver trekantsuligheden en uniform fejlvurdering:

$$|f(x) - S_N(x)| = \left|\sum_{n=N+1}^\infty (a_n \cos nx + b_n \sin nx)\right| \le \sum_{n=N+1}^\infty (|a_n| + |b_n|) \le \sum_{n=N+1}^\infty M_n.$$

Halen af rækken kan ofte vurderes opad ved hjælp af integralkriteriet (korollar 4.35):

$$\sum_{n=N+1}^\infty \frac{1}{n^p} \le \int_N^\infty \frac{1}{x^p}\,dx = \frac{1}{(p-1)N^{p-1}} \quad (p > 1).$$

Dette gør det muligt på forhånd at garantere en maksimal afvigelse overalt på definitionsmængden.

### Regneregler for integraler af periodiske funktioner (lemma 6.2)
Lad $f: \mathbb{R} \to \mathbb{C}$ være en $T$-periodisk funktion, der er integrabel over en periode.
1. **Regel (R1) - Uafhængighed af integrationsintervallets startpunkt:**
   $$\int_a^{a+T} f(t)\,dt = \int_0^T f(t)\,dt \quad \text{for ethvert } a \in \mathbb{R}.$$
   Man kan altså frit forskyde integrationsintervallet, så længe længden er præcis én hel periode $T$.
2. **Regel (R2) - Lige funktioner:**
   $$\int_{-T/2}^{T/2} f(t)\,dt = 2\int_0^{T/2} f(t)\,dt \quad \text{hvis } f \text{ er lige}.$$
3. **Regel (R3) - Ulige funktioner:**
   $$\int_{-T/2}^{T/2} f(t)\,dt = 0 \quad \text{hvis } f \text{ er ulige}.$$

### Spektral energimodel: Parsevals teorem og frekvensspektrum

Parsevals teorem udtrykker isometrien mellem tidsdomænet og frekvensdomænet:

```
Tidsdomæne: Kontinuerlig bølgeform      <=======>  Frekvensdomæne: Diskret effektspektrum
P(f) = 1/(2pi) \int_{-\pi}^\pi |f(t)|^2 dt    =    P(f) = Sum_{n=-\infty}^\infty |c_n|^2
```

Visualisering af effektspektret (linjespektrum):

```
Effekt |c_n|^2
  ^
  |     |c_0|^2 (DC-middelværdi)
  |     |
  |     |     |c_1|^2  |c_-1|^2 (Grundtone)
  |     |     |        |
  |     |     |        |     |c_2|^2  |c_-2|^2
  +-----+-----+--------+-----+--------+-----> Frekvens n*w
 -2    -1     0        1     2
```

Hver diskret spektrallinje bærer sin egen andel af signalets samlede effekt. Parseval sikrer, at ingen energi går tabt ved transformationen.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 227 | 6.1, 6.2, 6.3 | Fourierrække for $f(x) = \|x\|$ på $[-\pi, \pi]$ | $a_0 = \pi$, $a_n = -\frac{4}{\pi n^2}$ ($n$ ulige), $b_n=0$, $c_0 = \pi/2$, $c_n = -\frac{2}{\pi n^2}$; $N=200$ for fejl $\le 0.1$, $N=20000$ for fejl $\le 0.01$ |
| 222 (c) | 6.3 | Komplekse Fourierkoefficienter for savtakbølge $f(t) = t$ | $c_0 = 0$, $c_n = \frac{i}{n}(-1)^n$ for $n \neq 0$ |
| Eksamen E18 Opg. 3 | 6.1-6.4 | Lige puls-funktion med værdi $1$ på $[0, a[$ og $0$ på $]a, \pi]$ | $a_0 = \frac{2a}{\pi}$, $a_n = \frac{2\sin(an)}{n\pi}$, $b=1/2$, sum $\sum \frac{\sin^2 an}{n^2} = \frac{a(\pi-a)}{2}$ via Parseval |
| 951 | 4.5, 5.4 | Eksamen 2012: rækken $\sum_{n=1}^\infty \frac{a^n}{n^a}$ for $a \ge 0$ | Konvergent for $a \in [0, 1[$, divergent for $a \ge 1$; uniformt konvergent på $[0, 1/2]$ |
| 863 (i, iv) | 6.1 (lemma 6.2) | Formelt bevis for regnereglerne (R1)-(R3) for periodiske integraler | Bevis via substitution $u = t - T$ og integralets opspaltning |
| MC 708 | EkstraOpgaver | Multiple Choice spørgsmål om Parseval og kompleks form | Facit er svarmulighed 1 |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 227.** Betragt funktionen $f(x) = |x|$ for $x \in [-\pi, \pi]$, udvidet $2\pi$-periodisk til $\mathbb{R}$.
1. Da $|-x| = |x|$, er $f$ en lige funktion. Derfor er $b_n = 0$ for alle $n \ge 1$.
2. Koefficienterne beregnes på $[0, \pi]$, hvor $|x| = x$:
   $$a_0 = \frac{2}{\pi}\int_0^\pi x\,dx = \frac{2}{\pi}\left[\frac{x^2}{2}\right]_0^\pi = \frac{2}{\pi}\frac{\pi^2}{2} = \pi.$$
   For $n \ge 1$ benyttes partiel integration:
   $$a_n = \frac{2}{\pi}\int_0^\pi x \cos(nx)\,dx = \frac{2}{\pi}\left( \left[x \frac{\sin nx}{n}\right]_0^\pi - \frac{1}{n}\int_0^\pi \sin(nx)\,dx \right) = \frac{2}{\pi}\left( 0 + \left[\frac{\cos nx}{n^2}\right]_0^\pi \right) = \frac{2}{\pi n^2}((-1)^n - 1).$$
   For lige $n$ er $(-1)^n - 1 = 0$, så $a_n = 0$. For ulige $n$ er $(-1)^n - 1 = -2$, så:
   $$a_n = -\frac{4}{\pi n^2} \quad (n \text{ ulige}).$$
3. Fourierrækken på reel form er derfor:
   $$f(x) = \frac{\pi}{2} - \frac{4}{\pi}\sum_{k=1}^\infty \frac{\cos((2k-1)x)}{(2k-1)^2}.$$
   Da $f$ er overalt kontinuert og stykkevis kontinuert differentiabel, kan $\sim$ erstattes af lighedstegn $=$ for alle $x \in \mathbb{R}$.
4. Komplekse koefficienter:
   $$c_0 = \frac{1}{2}a_0 = \frac{\pi}{2}.$$
   For ulige $n \in \mathbb{Z}$ er $c_n = \frac{1}{2}(a_n - i b_n) = \frac{1}{2}(-\frac{4}{\pi n^2} - 0) = -\frac{2}{\pi n^2}$. For lige $n \neq 0$ er $c_n = 0$.
5. Fejlvurdering og valg af $N$:
   Fejlen for afsnitssummen $S_N(x)$ er vurderet ved:
   $$|f(x) - S_N(x)| \le \sum_{n=N+1}^\infty |a_n| \le \frac{4}{\pi}\sum_{n=N+1}^\infty \frac{1}{n^2} \le \frac{4}{\pi}\int_N^\infty \frac{1}{x^2}\,dx = \frac{4}{\pi N}.$$
   - For en maksimal fejl $\le 0.1$: $\frac{4}{\pi N} \le 0.1 \implies N \ge \frac{40}{\pi} \approx 12.7$, dvs. $N \ge 13$ (eller med den konservative vurdering fra sætning 6.10: $N \ge 200$).
   - For fejl $\le 0.01$: $\frac{4}{\pi N} \le 0.01 \implies N \ge \frac{400}{\pi} \approx 127$ (konservativt $20000$).

**Eksamensopgave 3 (E18).** Lad $f$ være en lige $2\pi$-periodisk funktion med $f(x) = 1$ for $x \in [0, a[$, $f(a) = b$, og $f(x) = 0$ for $x \in\, ]a, \pi]$.
1. Da $f$ er lige, er $b_n = 0$. Koefficienterne er:
   $$a_0 = \frac{2}{\pi}\int_0^a 1\,dx = \frac{2a}{\pi}.$$
   $$a_n = \frac{2}{\pi}\int_0^a 1 \cdot \cos(nx)\,dx = \frac{2}{\pi}\left[\frac{\sin nx}{n}\right]_0^a = \frac{2\sin(an)}{n\pi} \quad (n \ge 1).$$
2. Rækken er $S(x) = \frac{a}{\pi} + \frac{2}{\pi}\sum_{n=1}^\infty \frac{\sin(an)}{n}\cos(nx)$.
   I springpunktet $x = a$ konvergerer Fourierrækken mod middelværdien af grænseværdierne: $\frac{f(a^-) + f(a^+)}{2} = \frac{1 + 0}{2} = \frac{1}{2}$. For at rækken konvergerer mod $f(x)$ for alle $x$, skal funktionsværdien i springet sættes til $b = 1/2$.
3. Indsættes $x = 0$ (hvor $f(0) = 1$), fås:
   $$1 = \frac{a}{\pi} + \frac{2}{\pi}\sum_{n=1}^\infty \frac{\sin(an)}{n} \implies \sum_{n=1}^\infty \frac{\sin(an)}{n} = \frac{\pi - a}{2}.$$
4. Parsevals sætning anvendes på $f$:
   Venstresiden (signaleffekten) er:
   $$\frac{1}{2\pi}\int_{-\pi}^\pi |f(x)|^2\,dx = \frac{1}{\pi}\int_0^a 1^2\,dx = \frac{a}{\pi}.$$
   Højresiden er:
   $$\frac{1}{4}a_0^2 + \frac{1}{2}\sum_{n=1}^\infty a_n^2 = \frac{1}{4}\left(\frac{2a}{\pi}\right)^2 + \frac{1}{2}\sum_{n=1}^\infty \frac{4\sin^2(an)}{n^2\pi^2} = \frac{a^2}{\pi^2} + \frac{2}{\pi^2}\sum_{n=1}^\infty \frac{\sin^2(an)}{n^2}.$$
   Sættes venstreside lig højreside:
   $$\frac{a}{\pi} = \frac{a^2}{\pi^2} + \frac{2}{\pi^2}\sum_{n=1}^\infty \frac{\sin^2(an)}{n^2} \implies \sum_{n=1}^\infty \frac{\sin^2(an)}{n^2} = \frac{\pi^2}{2}\left(\frac{a}{\pi} - \frac{a^2}{\pi^2}\right) = \frac{a(\pi - a)}{2}.$$

**Opgave 951 (Eksamen 2012).** Rækken er $\sum_{n=1}^\infty \frac{a^n}{n^a}$ for $a \ge 0$.
1. For $a = 0$: leddene er $0$ for $n \ge 1$, rækken konvergerer mod 0.
2. For $a > 0$: brug kvotientkriteriet:
   $$\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \lim_{n\to\infty} \frac{a^{n+1}}{(n+1)^a} \cdot \frac{n^a}{a^n} = a \lim_{n\to\infty} \left(\frac{n}{n+1}\right)^a = a \cdot 1 = a.$$
   - Hvis $0 \le a < 1$, er grænseværdien $< 1$, så rækken konvergerer.
   - Hvis $a > 1$, er grænseværdien $> 1$, så rækken divergerer.
   - Hvis $a = 1$, bliver rækken $\sum_{n=1}^\infty \frac{1^n}{n^1} = \sum_{n=1}^\infty \frac{1}{n}$, som er den harmoniske række, der divergerer.
   Konklusion: rækken konvergerer netop for $a \in [0, 1[$.
3. Uniform konvergens på $[0, 1/2]$:
   For $a \in [0, 1/2]$ er $a^n \le (1/2)^n$. Nævneren opfylder $n^a \ge n^0 = 1$. Dermed er:
   $$\left|\frac{a^n}{n^a}\right| \le \left(\frac{1}{2}\right)^n = M_n.$$
   Da $\sum_{n=1}^\infty (1/2)^n$ er en konvergent kvotientrække, sikrer Weierstrass' M-test, at rækken konvergerer uniformt på $[0, 1/2]$.

**Multiple Choice 708 (EkstraOpgaver).** Facit er svarmulighed 1.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 09|Uge 9: Fourierrækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 11|Uge 11: Effekt, Fouriers sætning og miniprojekt 2]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
