---
publish: true
title: "01025 uge 10: Kompleks form og Parsevals sætning"
course: Differential Equations and Infinite Series
type: week
week: 10
tags:
  - differential-equations
  - ugenote
---

# Uge 10: Kompleks form og Parsevals sætning

## Læseplan

- Forelæsning (onsdag 11/11): afsnit 6.2 (fejlvurderinger), 6.3 (kompleks form) og 6.4 (Parsevals sætning).
- Læs selv: appendiks C for formlerne på kompleks form med vilkårlig periode $T$.
- Ifølge ugesedlen kan projektopgave 2, 3 og 4 (i) til (iii) i miniprojekt 2 laves allerede i uge 10.

## Begreber

### Fourierrækker på kompleks form (afsnit 6.3)
Ved hjælp af Eulers formel $e^{inx} = \cos(nx) + i\sin(nx)$ kan den reelle Fourierrække samles i en elegant kompleks eksponentialrække:

$$f \sim \sum_{n=-\infty}^\infty c_n e^{inx},$$

hvor de komplekse Fourierkoefficienter $c_n \in \mathbb{C}$ beregnes ved (lemma 6.24, definition 6.25):

$$c_n = \frac{1}{2\pi}\int_{-\pi}^\pi f(x)e^{-inx}\,dx \quad (n \in \mathbb{Z}).$$

Lemma 6.24: den $N$'te afsnitssum er den samme på begge former, $S_N(x) = \frac12a_0 + \sum_{n=1}^N(a_n\cos nx + b_n\sin nx) = \sum_{n=-N}^N c_ne^{inx}$. Beviset (slides) indsætter $\cos nx = \frac{e^{inx} + e^{-inx}}{2}$ og $\sin nx = \frac{e^{inx} - e^{-inx}}{2i}$ og ser at $a_n\cos nx + b_n\sin nx = c_ne^{inx} + c_{-n}e^{-inx}$. Rækken på kompleks form summeres derfor symmetrisk fra $-N$ til $N$.

Sammenhængen mellem de reelle koefficienter $(a_n, b_n)$ og de komplekse koefficienter $c_n$ er givet ved (lemma 6.26):

$$c_0 = \frac{1}{2}a_0,$$

$$c_n = \frac{1}{2}(a_n - i b_n), \qquad c_{-n} = \frac{1}{2}(a_n + i b_n) \quad (n \ge 1).$$

Omvendt genfindes de reelle koefficienter som:

$$a_n = c_n + c_{-n}, \qquad b_n = i(c_n - c_{-n}) \quad (n \ge 1).$$

Hvis $f$ er en **reel funktion** ($f(x) \in \mathbb{R}$), gælder (lemma 6.27):

$$c_{-n} = \overline{c_n}.$$

Dermed er $|c_{-n}| = |c_n|$, hvilket viser at de negative frekvenser indeholder præcis samme energi som de positive.

**Eksempel.** Betragt firkantbølgen fra uge 9: her var $a_n = 0$ for alle $n$, og $b_n = \frac{4}{n\pi}$ for ulige $n$. De komplekse koefficienter er:
- $c_0 = \frac{1}{2}a_0 = 0$.
- For ulige $n$: $c_n = \frac{1}{2}(0 - i\frac{4}{n\pi}) = -\frac{2i}{n\pi}$.
- Tjek for negative $n$: for $n = -1$ fås $c_{-1} = \frac{1}{2}(0 + i\frac{4}{1\pi}) = \frac{2i}{\pi} = -\frac{2i}{(-1)\pi}$. Formlen $c_n = -\frac{2i}{n\pi}$ gælder altså for alle ulige $n \in \mathbb{Z}$.

### Parsevals sætning (afsnit 6.4, sætning 6.30)
Parsevals sætning udtrykker energibevarelse mellem tidsdomænet og frekvensdomænet. For enhver $2\pi$-periodisk funktion med $\int_{-\pi}^\pi |f(x)|^2\,dx < \infty$ gælder:

$$\frac{1}{2\pi}\int_{-\pi}^\pi |f(x)|^2\,dx = \sum_{n=-\infty}^\infty |c_n|^2 = \frac{1}{4}|a_0|^2 + \frac{1}{2}\sum_{n=1}^\infty \bigl(|a_n|^2 + |b_n|^2\bigr).$$

Venstresiden er effekten $P(f)$ (definition 6.32, middelværdien af $|f|^2$ over en periode). Parsevals sætning viser, at den samlede effekt er summen af effekterne i de enkelte frekvenser, og den bruges til at finde summer af talrækker.

**Korollar (slides).** For $f \in L^2(-\pi, \pi)$ går $a_n \to 0$, $b_n \to 0$ og $c_n \to 0$, fordi rækken $\sum |c_n|^2$ konvergerer. Opgave 879 giver et selvstændigt bevis for uligheden $\geq$ i sætning 6.30 (Bessels ulighed).

**Eksempel (beregning af $\sum \frac{1}{(2k-1)^2} = \frac{\pi^2}{8}$).**
For firkantbølgen er $|f(x)|^2 = 1$ næsten overalt på $[-\pi, \pi]$. Signaleffekten er:

$$\frac{1}{2\pi}\int_{-\pi}^\pi 1^2\,dx = 1.$$

Da $a_n = 0$ og $b_{2k-1} = \frac{4}{(2k-1)\pi}$, giver højresiden i Parsevals sætning:

$$\frac{1}{2}\sum_{k=1}^\infty |b_{2k-1}|^2 = \frac{1}{2}\sum_{k=1}^\infty \frac{16}{\pi^2(2k-1)^2} = \frac{8}{\pi^2}\sum_{k=1}^\infty \frac{1}{(2k-1)^2}.$$

Sættes dette lig 1, fås omgående:

$$\sum_{k=1}^\infty \frac{1}{(2k-1)^2} = 1 + \frac{1}{9} + \frac{1}{25} + \frac{1}{49} + \dots = \frac{\pi^2}{8} \approx 1.2337.$$

### Approksimation og fejlvurdering med afsnitssummer (afsnit 6.2, korollar 6.17 og 6.20, sætning 6.21 og 6.29)
For en kontinuert, stykkevis differentiabel $2\pi$-periodisk funktion konvergerer Fourierrækken uniformt (korollar 6.17), og

$$|f(x) - S_N(x)| \leq \frac{1}{\sqrt N}\frac{1}{\sqrt\pi}\sqrt{\int_{-\pi}^\pi |f'(t)|^2dt}.$$

Korollar 6.20 vender det om: $|f(x) - S_N(x)| \leq \epsilon$ for alle $x$, hvis $N \geq \frac{\int_{-\pi}^\pi |f'(t)|^2dt}{\pi\epsilon^2}$.

Sætning 6.21 giver ofte et bedre estimat: $|f(x) - S_N(x)| \leq \sum_{n=N+1}^\infty (|a_n| + |b_n|)$ for alle $x$. Divergerer rækken til højre, siger sætningen intet. På kompleks form (sætning 6.29): $|f(t) - S_N(t)| \leq \sum_{|n| > N}|c_n|$. Halen vurderes typisk med korollar 4.35, fx $\sum_{n=N+1}^\infty \frac{1}{n^p} \le \int_N^\infty x^{-p}\,dx = \frac{1}{(p-1)N^{p-1}}$ for $p > 1$.

**Eksempel ($f(x) = |x|$, opgave 227).** $f' = \pm 1$, så $\int_{-\pi}^\pi |f'|^2 = 2\pi$, og korollar 6.20 giver $N \geq \frac{2}{\epsilon^2}$: $N = 200$ for $\epsilon = 0.1$ og $N = 20000$ for $\epsilon = 0.01$ (facitlistens tal). Sætning 6.21 med $|a_n| = \frac{4}{\pi n^2}$ for ulige $n$ giver i stedet $N \geq 13$ og $N \geq 128$, se gennemgangen nedenfor.

### Glathed og konvergenshastighed (slides)
Er $f$ $2\pi$-periodisk, $C^k$ og stykkevis $C^{k+1}$, så har den $k$ gange ledvis differentierede Fourierrække majorantrækken $\sum n^k(|a_n| + |b_n|)$; konvergerer den, konvergerer Fourierrækken for $f^{(k)}$ uniformt. Jo glattere $f$ er, jo hurtigere må koefficienterne aftage, og omvendt sætter graden af differentiabilitet en grænse for hvor hurtigt rækken kan konvergere.

**Eksempel.** For $|x|$ (kontinuert, men $f'$ springer) aftager koefficienterne som $\frac{1}{n^2}$; for firkantbølgen (diskontinuert) kun som $\frac1n$.

### Regneregler for integraler af periodiske funktioner (lemma 6.5)
Lad $f: \mathbb{R} \to \mathbb{C}$ være en $T$-periodisk funktion, der er integrabel over en periode.
1. **Regel (R1) - Uafhængighed af integrationsintervallets startpunkt:**
   $$\int_a^{a+T} f(t)\,dt = \int_0^T f(t)\,dt \quad \text{for ethvert } a \in \mathbb{R}.$$
   Man kan altså frit forskyde integrationsintervallet, så længe længden er præcis én hel periode $T$.
2. **Regel (R2) - Lige funktioner:**
   $$\int_{-T/2}^{T/2} f(t)\,dt = 2\int_0^{T/2} f(t)\,dt \quad \text{hvis } f \text{ er lige}.$$
3. **Regel (R3) - Ulige funktioner:**
   $$\int_{-T/2}^{T/2} f(t)\,dt = 0 \quad \text{hvis } f \text{ er ulige}.$$

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 227 | 6.1, 6.2, 6.3 | Fourierrække for $f(x) = \lvert x\rvert$ på $[-\pi, \pi]$ | $a_0 = \pi$, $a_n = -\frac{4}{\pi n^2}$ ($n$ ulige), $b_n=0$, $c_0 = \pi/2$, $c_n = -\frac{2}{\pi n^2}$; $N=200$ og $N=20000$ med korollar 6.20 (facit) |
| 222 (c) | 6.3 | Komplekse Fourierkoefficienter for savtakbølge $f(t) = t$ | $c_0 = 0$, $c_n = \frac{i}{n}(-1)^n$ for $n \neq 0$ |
| Eksamen E18 Opg. 3 | 6.1-6.4 | Lige puls-funktion med værdi $1$ på $[0, a[$ og $0$ på $]a, \pi]$ | $a_0 = \frac{2a}{\pi}$, $a_n = \frac{2\sin(an)}{n\pi}$, $b=1/2$, sum $\sum \frac{\sin^2 an}{n^2} = \frac{a(\pi-a)}{2}$ via Parseval |
| 951 | 4.5, 5.4 | Eksamen 2012: rækken $\sum_{n=1}^\infty \frac{a^n}{n^a}$ for $a \ge 0$ | Konvergent for $a \in [0, 1[$, divergent for $a \ge 1$; uniformt konvergent på $[0, 1/2]$ |
| 863 (i), (iv) | 6.1 (lemma 6.5) | Formelt bevis for regnereglerne (R1)-(R3) for periodiske integraler | Bevis via substitution $u = t - T$ og integralets opspaltning |

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
   - For en maksimal fejl $\le 0.1$: $\frac{4}{\pi N} \le 0.1 \implies N \ge \frac{40}{\pi} \approx 12.7$, dvs. $N \ge 13$ (korollar 6.20 giver den grovere $N \ge 200$).
   - For fejl $\le 0.01$: $\frac{4}{\pi N} \le 0.01 \implies N \ge \frac{400}{\pi} \approx 127.3$, dvs. $N \geq 128$ (korollar 6.20: $20000$).

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

**Hjemmeopgavesæt 9:** Möbius Sæt9-01025 senest 18/11 kl. 20. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**MC:** svaret på 707 er 2. Ugens MC-opgave er 708 (EkstraOpgaver.pdf): konvergensområdet for $\sum_{n=0}^\infty \frac{3^n}{2^n + 1}x^n$. Facit (ugeseddel 11): 1, absolut konvergent for $|x| < \frac23$ og divergent for $|x| \geq \frac23$ (i $x = \pm\frac23$ går leddene ikke mod $0$).

**Maple (Uge10Maple):** eksemplet fra forelæsningen tager udgangspunkt i opgave 510 og beregner antal led efter korollar 6.20 og en sum via Parsevals ligning, kontrolleret mod Maples bibliotek.

**Løsningsnoter:** WeeklyNotes9.pdf (under uge 10 på DTU Learn) løser opgave 222 (c): med $a_n = 0$ og $b_n = \frac2n(-1)^{n+1}$ giver lemma 6.26 $c_0 = 0$ og $c_n = \frac{i}{n}(-1)^n$ for $n \neq 0$. Resten af opgave 222 er beskrevet i [[Courses/Differential Equations and Infinite Series/Uger/Uge 09 - Fourierrækker|uge 9]].

## Tjek dig selv

- [ ] Hvordan går man frem og tilbage mellem $a_n, b_n$ og $c_n$?
- [ ] Hvorfor er $c_{-n} = \overline{c_n}$ når $f$ er reel?
- [ ] Hvordan lyder Parsevals sætning på reel og på kompleks form?
- [ ] Hvordan bruges Parseval til at finde summen af en talrække?
- [ ] Hvordan vurderes $|f(x) - S_N(x)|$ uniformt med korollar 6.20 eller sætning 6.21?
- [ ] Hvordan bevises regel (R1) om integraler over en periode?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 09 - Fourierrækker|Uge 9: Fourierrækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 11 - Effekt, Fouriers sætning og miniprojekt 2|Uge 11: Effekt, Fouriers sætning og miniprojekt 2]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
