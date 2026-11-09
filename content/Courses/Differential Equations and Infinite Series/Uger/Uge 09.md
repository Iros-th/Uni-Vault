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

> **Kilde:** Ugeseddel 9 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 6.1, 6.2 samt appendiks C), facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 707). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 4/11): afsnit 6.1 og 6.2 i lærebogen.
- Læs selv: appendiks C om Fourierrækker for generelle $T$-periodiske funktioner.
- Ugesedlens gyldne råd: skitsér altid funktionen over mindst én fuld periode samt lidt af naboperioderne, også selv om opgaven ikke udtrykkeligt forlanger det. Det afslører omgående symmetrier (lige/ulige) og springpunkter.

## Begreber

### Trigonometriske rækker og Fourierrækken (definition 6.1)
En funktion $f: \mathbb{R} \to \mathbb{R}$ kaldes $2\pi$-periodisk, hvis $f(x + 2\pi) = f(x)$ for alle $x \in \mathbb{R}$. Hvis $\int_{-\pi}^\pi |f(x)|^2\,dx < \infty$ (funktionen er kvadratisk integrabel), tilordnes funktionen en formel række af trigonometriske funktioner:

$$f \sim \frac{1}{2} a_0 + \sum_{n=1}^\infty \bigl(a_n \cos(nx) + b_n \sin(nx)\bigr).$$

Koefficienterne kaldes funktionens **Fourierkoefficienter** og beregnes ved ortogonalitetsintegralerne (Euler-Fourier formlerne):

$$a_0 = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\,dx,$$

$$a_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\cos(nx)\,dx \quad (n \ge 1),$$

$$b_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\sin(nx)\,dx \quad (n \ge 1).$$

Bemærk konventionen med faktoren $\frac{1}{2}$ foran $a_0$: leddet $\frac{1}{2}a_0 = \frac{1}{2\pi}\int_{-\pi}^\pi f(x)\,dx$ er præcis funktionens middelværdi (DC-værdi) over en periode. Tegnet $\sim$ angiver blot, at rækken er dannet ud fra $f$; om rækken rent faktisk konvergerer punktvis mod $f(x)$, afgøres af Fouriers sætning.

**Eksempel.** Betragt det konstante signal $f(x) = 5$ for alle $x$. Da er $a_0 = \frac{1}{\pi}\int_{-\pi}^\pi 5\,dx = \frac{1}{\pi} \cdot 10\pi = 10$. For $n \ge 1$ er $a_n = \frac{5}{\pi}\int_{-\pi}^\pi \cos(nx)\,dx = 0$ og $b_n = 0$. Rækken bliver $\frac{1}{2}a_0 = 5 = f(x)$.

### Symmetrier: Lige og ulige funktioner (sætning 6.3 og korollar 6.4)
Symmetrier reducerer integrationsarbejdet markant:
1. En funktion er **lige**, hvis $f(-x) = f(x)$ for alle $x$. Grafen er symmetrisk omkring $y$-aksen. Da $\sin(nx)$ er ulige, bliver integranden $f(x)\sin(nx)$ ulige, så integralet over $[-\pi, \pi]$ er nul:
   $$b_n = 0 \quad \text{for alle } n \ge 1.$$
   Fourierrækken er en ren cosinusrække, og koefficienterne kan beregnes over det halve interval:
   $$a_n = \frac{2}{\pi}\int_0^\pi f(x)\cos(nx)\,dx \quad (n \ge 0).$$
2. En funktion er **ulige**, hvis $f(-x) = -f(x)$ for alle $x$. Grafen er punktsymmetrisk omkring origo. Da $\cos(nx)$ er lige, bliver integranden $f(x)\cos(nx)$ ulige, så:
   $$a_n = 0 \quad \text{for alle } n \ge 0.$$
   Fourierrækken er en ren sinusrække med middelværdi nul:
   $$b_n = \frac{2}{\pi}\int_0^\pi f(x)\sin(nx)\,dx \quad (n \ge 1).$$

**Eksempel (den klassiske firkantbølge).** Lad $f$ være $2\pi$-periodisk med $f(x) = 1$ for $x \in\, ]0, \pi[$ og $f(x) = -1$ for $x \in\, ]-\pi, 0[$, samt $f(0) = f(\pi) = 0$. Funktionen er ulige, så $a_n = 0$ for alle $n \ge 0$. Sinuskoefficienterne er:

$$b_n = \frac{2}{\pi}\int_0^\pi 1 \cdot \sin(nx)\,dx = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_0^\pi = \frac{2}{n\pi}(1 - \cos(n\pi)) = \frac{2}{n\pi}(1 - (-1)^n).$$

For lige $n = 2k$ er $1 - (-1)^{2k} = 0$, så $b_{2k} = 0$. For ulige $n = 2k-1$ er $1 - (-1)^{2k-1} = 2$, så $b_{2k-1} = \frac{4}{(2k-1)\pi}$. Fourierrækken er derfor:

$$f \sim \frac{4}{\pi} \sum_{k=1}^\infty \frac{\sin((2k-1)x)}{2k-1} = \frac{4}{\pi}\left(\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \dots\right).$$

### Fouriers konvergenssætning (sætning 6.12)
Lad $f$ være en $2\pi$-periodisk funktion, som er stykkevis kontinuert differentiabel på $[-\pi, \pi]$ (dvs. intervallet kan opdeles i endeligt mange delintervaller, hvor $f$ og $f'$ er kontinuerte og har grænseværdier i endepunkterne).
Så konvergerer Fourierrækken for alle $x \in \mathbb{R}$, og summen $S(x)$ er givet ved:

$$S(x) = \lim_{N\to\infty} S_N(x) = \frac{f(x^+) + f(x^-)}{2},$$

hvor $f(x^+) = \lim_{t \to x^+} f(t)$ og $f(x^-) = \lim_{t \to x^-} f(t)$ er henholdsvis højre- og venstresidede grænseværdier.
- I ethvert punkt $x$, hvor $f$ er kontinuert, er $f(x^+) = f(x^-) = f(x)$, så rækken konvergerer punktvis mod funktionsværdien: $S(x) = f(x)$.
- I et springpunkt konvergerer rækken mod midtpunktet af springet.

**Eksempel (beregning af Leibniz række).** For firkantbølgen ovenfor er $f$ kontinuert i $x = \frac{\pi}{2}$ med værdi $f(\frac{\pi}{2}) = 1$. Fouriers sætning giver:

$$1 = \frac{4}{\pi}\sum_{k=1}^\infty \frac{\sin\bigl((2k-1)\frac{\pi}{2}\bigr)}{2k-1}.$$

Da $\sin((2k-1)\frac{\pi}{2}) = (-1)^{k-1}$ (giver skiftevis $+1, -1, +1, -1$), fås:

$$1 = \frac{4}{\pi}\left(1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots\right) \implies \sum_{k=1}^\infty \frac{(-1)^{k-1}}{2k-1} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots = \frac{\pi}{4}.$$

I springpunktet $x = 0$ er $f(0^+) = 1$ og $f(0^-) = -1$. Middelværdien er $\frac{1 + (-1)}{2} = 0$. Rækkens led er alle $\sin(0) = 0$, så summen er 0, hvilket stemmer perfekt.

### Kontinuerte funktioner og uniform konvergens (korollar 6.13)
Hvis den $2\pi$-periodiske funktion $f$ ikke blot er stykkevis kontinuert differentiabel, men også **overalt kontinuert** på hele $\mathbb{R}$ (hvilket kræver, at $f(\pi^-) = f(-\pi^+)$ så periodiciteten ikke skaber spring i endepunkterne), så konvergerer Fourierrækken **uniformt** mod $f$ på $\mathbb{R}$.
Derudover gælder følgende universelle fejlvurdering for den $N$'te afsnitssum $S_N(x)$:

$$|f(x) - S_N(x)| \le \frac{1}{\sqrt{N}}\frac{1}{\sqrt{\pi}}\sqrt{\int_{-\pi}^\pi |f'(t)|^2\,dt} \quad \text{for alle } x \in \mathbb{R}.$$

Dette er et stærkt resultat: integralet $\int_{-\pi}^\pi |f'(t)|^2\,dt$ er en endelig konstant, så fejlen går mod 0 som $\mathcal{O}(1/\sqrt{N})$ uafhængigt af $x$.

### T-periodiske signaler (appendiks C)
For en vilkårlig periode $T > 0$ defineres vinkelfrekvensen (grundfrekvensen) $\omega = \frac{2\pi}{T}$. Fourierrækken for en $T$-periodisk funktion er:

$$f(t) \sim \frac{1}{2}a_0 + \sum_{n=1}^\infty \bigl(a_n \cos(n\omega t) + b_n \sin(n\omega t)\bigr),$$

hvor koefficienterne integreres over et interval af længde $T$ (fx $[0, T]$ eller $[-T/2, T/2]$):

$$a_0 = \frac{2}{T}\int_0^T f(t)\,dt, \qquad a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega t)\,dt, \qquad b_n = \frac{2}{T}\int_0^T f(t)\sin(n\omega t)\,dt.$$

### Rodkriteriet (opgave 813 / Cauchys rodtest)
Lad $\sum_{n=1}^\infty a_n$ være en række. Hvis der findes en konstant $C < 1$ og et indeks $N$ så

$$\sqrt[n]{|a_n|} \le C < 1 \quad \text{for alle } n \ge N,$$

så er rækken $\sum a_n$ absolut konvergent. Beviset følger direkte af sammenligning med kvotientrækken: uligheden medfører $|a_n| \le C^n$. Da $0 \le C < 1$, konvergerer $\sum C^n$, og sammenligningskriteriet giver konvergens af $\sum |a_n|$.

**Eksempel.** Undersøg rækken $\sum_{n=1}^\infty \left(\frac{n}{2n+1}\right)^n$. Vi anvender rodkriteriet:

$$\sqrt[n]{|a_n|} = \sqrt[n]{\left(\frac{n}{2n+1}\right)^n} = \frac{n}{2n+1} = \frac{1}{2 + \frac{1}{n}} \to \frac{1}{2} \quad \text{for } n \to \infty.$$

Da grænseværdien $\frac{1}{2} < 1$, findes et $C \in\, ]1/2, 1[$ så leddene er begrænset af $C$, og rækken konvergerer.

### Signalmodel: Additiv syntese af bølgeformer

Fourierrækker er det matematiske fundament for additiv syntese i akustik, radiokommunikation og digital signalbehandling. Ethvert periodisk signal kan opbygges som en sum af rene sinustoner:

```
Signal f(t) opbygget af harmoniske komponenter:
~  Grundtone sin(w*t)                (Største amplitude)
+  3. harmoniske 1/3 sin(3w*t)       (Mellem amplitude)
+  5. harmoniske 1/5 sin(5w*t)       (Lille amplitude)
=  Firkantbølge (PWM-signal)
```

1. **Firkantbølge (PWM / digital clock):** Indeholder kun **ulige harmoniske** med amplitude proportional med $1/n$:
   $$f(t) = \frac{4}{\pi}\sum_{k=1}^\infty \frac{\sin((2k-1)\omega t)}{2k-1}.$$
2. **Savtakbølge (savtands-oscillator):** Indeholder **både lige og ulige harmoniske** med alternerende fortegn og amplitude $1/n$:
   $$f(t) = \frac{2}{\pi}\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n}\sin(n\omega t).$$
3. **Trekantbølge (integreret firkantbølge):** Kontinuert signal, hvor amplituden falder hurtigt som $1/n^2$:
   $$f(t) = \frac{8}{\pi^2}\sum_{k=1}^\infty \frac{(-1)^{k-1}}{(2k-1)^2}\sin((2k-1)\omega t).$$

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 864 | 6.1, 6.2 | Skitsér $f_1 = \|\cos x\|$, $f_2 = x^3$, $f_3 = \sqrt{\|x\|}$ udvidet $2\pi$-periodisk | $f_1$ er kontinuert og stykkevis differentiabel; $f_2$ har spring i $\pm\pi$; $f_3$ mangler differentiabilitet i $0$ |
| 228 (undt. v) | 6.1, 6.2 | $f(x) = \cos x$ på $]0, \pi]$, $0$ på $]\pi, 2\pi]$ | $a_0 = 0$, sum i $x=0$ er $1/2$, sum i $x=\pi$ er $-1/2$ |
| 222 (a,b,d,e,f) | 6.1, 6.2 | Savtakbølge $f(t) = t$ på $[-\pi, \pi[$ | $a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$, rækkesum $\pi/4$ i $t=\pi/2$, sum er $0$ for $t = \pm\pi$ |
| 861 | 6.1 | Egenskaber ved produkter af lige og ulige funktioner | Lige $\times$ lige er lige, ulige $\times$ ulige er lige, lige $\times$ ulige er ulige |
| 860 | 6.1 | Entydig spaltning af enhver funktion i lige og ulige del | $f(x) = \frac{f(x)+f(-x)}{2} + \frac{f(x)-f(-x)}{2}$ |
| 225 | 6.1, 6.2 | Fourierkoefficienter for den konstante funktion $f(x) = 1$ | $a_0 = 2$, $a_n = 0$ og $b_n = 0$ for $n \ge 1$; rækken er lig funktionen |
| 209 | 6.1, 6.2, 5.4 | Afskåret cosinus: $f(t) = \cos t$ for $\|t\| < \pi/4$, ellers $0$ | Lige funktion ($b_n=0$), $a_0 = \frac{\sqrt{2}}{\pi}$, $a_1 = \frac{1}{4} + \frac{1}{2\pi}$, kontinuert sumfunktion |
| 201 | 6.1, app. C | Savtakket $T$-periodisk funktion med $f(t) = t$ på $[0, T/2]$ | $a_0 = T/4$; for $n \ge 1$ er $b_n = \frac{(-1)^{n+1}}{n\pi}$, $a_n = 0$ for lige $n$, $a_n = -\frac{2}{n^2\pi^2}$ for ulige $n$ |
| 813 | 4.5 | Bevis for Cauchys rodkriterium | Følger ved majorisering af kvotientrækken $\sum C^n$ |
| MC 707 | EkstraOpgaver | Multiple Choice spørgsmål om Fourierrækker | Facit er svarmulighed 2 |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 222.** Betragt funktionen $f(t) = t$ for $t \in [-\pi, \pi[$, udvidet $2\pi$-periodisk til hele $\mathbb{R}$.
1. Da $f(-t) = -t = -f(t)$, er $f$ en ulige funktion. Følgelig er $a_n = 0$ for alle $n \ge 0$.
2. Fourierkoefficienterne $b_n$ findes ved partiel integration:
   $$b_n = \frac{2}{\pi}\int_0^\pi t \sin(nt)\,dt = \frac{2}{\pi}\left( \left[-t\frac{\cos(nt)}{n}\right]_0^\pi + \frac{1}{n}\int_0^\pi \cos(nt)\,dt \right) = \frac{2}{\pi}\left( -\frac{\pi\cos(n\pi)}{n} + 0 \right) = -\frac{2(-1)^n}{n} = \frac{2(-1)^{n+1}}{n}.$$
3. Fourierrækken for savtakbølgen er dermed:
   $$f(t) \sim 2 \sum_{n=1}^\infty \frac{(-1)^{n+1}}{n} \sin(nt) = 2\left(\sin t - \frac{\sin 2t}{2} + \frac{\sin 3t}{3} - \frac{\sin 4t}{4} + \dots\right).$$
4. I punktet $t = \frac{\pi}{2}$ er funktionen kontinuert med værdi $\frac{\pi}{2}$. Leddene med lige indeks giver $\sin(2k\frac{\pi}{2}) = \sin(k\pi) = 0$. Leddene med ulige indeks $n = 2k-1$ har $(-1)^{(2k-1)+1} = 1$ og $\sin((2k-1)\frac{\pi}{2}) = (-1)^{k-1}$. Fouriers sætning giver:
   $$\frac{\pi}{2} = 2 \sum_{k=1}^\infty \frac{(-1)^{k-1}}{2k-1} \implies \sum_{k=1}^\infty \frac{(-1)^{k-1}}{2k-1} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots = \frac{\pi}{4}.$$
5. I endepunkterne $t = \pm\pi$ er venstresidede grænseværdi $\pi$ og højresidede grænseværdi $-\pi$. Fouriers sætning forudsiger summen $\frac{\pi + (-\pi)}{2} = 0$. Direkte indsættelse af $t = \pi$ i rækken giver $\sin(n\pi) = 0$ for alle $n$, så rækkens sum er præcis 0.

**Opgave 209.** Funktionen er defineret $2\pi$-periodisk ud fra $f(t) = \cos t$ for $|t| < \frac{\pi}{4}$ og $f(t) = 0$ for $\frac{\pi}{4} \le |t| \le \pi$.
1. Da $\cos(-t) = \cos t$ og intervallet er symmetrisk omkring 0, er funktionen lige. Derfor er $b_n = 0$ for alle $n \ge 1$.
2. Koefficienten $a_0$ beregnes:
   $$a_0 = \frac{2}{\pi}\int_0^{\pi/4} \cos t\,dt = \frac{2}{\pi}[\sin t]_0^{\pi/4} = \frac{2}{\pi} \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2}}{\pi}.$$
3. For $n = 1$ benyttes $\cos^2 t = \frac{1 + \cos 2t}{2}$:
   $$a_1 = \frac{2}{\pi}\int_0^{\pi/4} \cos^2 t\,dt = \frac{2}{\pi}\int_0^{\pi/4} \frac{1+\cos 2t}{2}\,dt = \frac{1}{\pi}\left[ t + \frac{\sin 2t}{2} \right]_0^{\pi/4} = \frac{1}{\pi}\left(\frac{\pi}{4} + \frac{1}{2}\right) = \frac{1}{4} + \frac{1}{2\pi}.$$
4. For $n \ge 2$ benyttes produktformlen $\cos t \cos(nt) = \frac{1}{2}(\cos((n+1)t) + \cos((n-1)t))$:
   $$a_n = \frac{1}{\pi} \left[ \frac{\sin((n+1)t)}{n+1} + \frac{\sin((n-1)t)}{n-1} \right]_0^{\pi/4} = \frac{1}{\pi}\left( \frac{\sin((n+1)\frac{\pi}{4})}{n+1} + \frac{\sin((n-1)\frac{\pi}{4})}{n-1} \right).$$
5. Konvergens og sumfunktion: Bemærk, at $f(\frac{\pi}{4}^-) = \cos(\frac{\pi}{4}) = \frac{\sqrt{2}}{2}$, mens $f(\frac{\pi}{4}^+) = 0$. Funktionen har altså et spring i $t = \pm \frac{\pi}{4}$. Ifølge Fouriers sætning konvergerer rækken i $t = \frac{\pi}{4}$ mod middelværdien $\frac{\sqrt{2}/2 + 0}{2} = \frac{\sqrt{2}}{4}$. For $|t| < \frac{\pi}{4}$ konvergerer rækken mod $\cos t$, og for $\frac{\pi}{4} < |t| \le \pi$ mod 0.

**Opgave 860 og 861.**
- I 860 vises, at enhver funktion $f: \mathbb{R} \to \mathbb{C}$ entydigt kan skrives som en sum af en lige funktion $f_e$ og en ulige funktion $f_o$.
  Sæt $f_e(x) = \frac{f(x) + f(-x)}{2}$ og $f_o(x) = \frac{f(x) - f(-x)}{2}$.
  Tjek: $f_e(-x) = \frac{f(-x) + f(x)}{2} = f_e(x)$ (lige), og $f_o(-x) = \frac{f(-x) - f(x)}{2} = -f_o(x)$ (ulige). Deres sum er $f_e(x) + f_o(x) = f(x)$. Entydigheden følger af, at hvis $f = g_e + g_o$, giver evaluering i $-x$, at $f(-x) = g_e(x) - g_o(x)$, hvorfra addition og subtraktion entydigt isolerer $g_e$ og $g_o$.
- I 861 undersøges produkter:
  - Lige $\times$ lige: $(fg)(-x) = f(-x)g(-x) = f(x)g(x) = (fg)(x)$ (lige).
  - Ulige $\times$ ulige: $(fg)(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x) = (fg)(x)$ (lige).
  - Lige $\times$ ulige: $(fg)(-x) = f(-x)g(-x) = f(x)(-g(x)) = -(fg)(x)$ (ulige).

**Multiple Choice 707 (EkstraOpgaver).** Facit er svarmulighed 2.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 08|Uge 8: Uniform konvergens]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 10|Uge 10: Kompleks form og Parseval]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
