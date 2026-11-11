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

## Læseplan

- Forelæsning (onsdag 4/11): afsnit 6.1 og 6.2 i lærebogen.
- Læs selv: appendiks C om Fourierrækker for generelle $T$-periodiske funktioner.
- Ugesedlens gyldne råd: skitsér altid funktionen over mindst én fuld periode samt lidt af naboperioderne, også selv om opgaven ikke udtrykkeligt forlanger det. Det afslører omgående symmetrier (lige/ulige) og springpunkter.

## Begreber

### Trigonometriske rækker og Fourierrækken (definition 6.1)
En funktion $f: \mathbb{R} \to \mathbb{C}$ kaldes $2\pi$-periodisk, hvis $f(x + 2\pi) = f(x)$ for alle $x \in \mathbb{R}$. De naturlige funktioner er de kvadratisk integrable, vektorrummet $L^2(-\pi, \pi) = \{f : \int_{-\pi}^\pi |f(x)|^2\,dx < \infty\}$. Til $f \in L^2(-\pi, \pi)$ knyttes rækken

$$f \sim \frac{1}{2} a_0 + \sum_{n=1}^\infty \bigl(a_n \cos(nx) + b_n \sin(nx)\bigr).$$

Koefficienterne kaldes funktionens **Fourierkoefficienter**:

$$a_0 = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\,dx,$$

$$a_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\cos(nx)\,dx \quad (n \ge 1),$$

$$b_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\sin(nx)\,dx \quad (n \ge 1).$$

Bemærk konventionen med faktoren $\frac{1}{2}$ foran $a_0$: leddet $\frac{1}{2}a_0 = \frac{1}{2\pi}\int_{-\pi}^\pi f(x)\,dx$ er præcis funktionens middelværdi (DC-værdi) over en periode. Tegnet $\sim$ angiver blot, at rækken er dannet ud fra $f$; om rækken rent faktisk konvergerer punktvis mod $f(x)$, afgøres af Fouriers sætning.

Slides: tegnet $\sim$ betyder at $f$ tilhører ækvivalensklassen af alle funktioner med samme Fourierrække. Værdien i endeligt mange punkter ændrer ikke integralerne og dermed ikke rækken. Afbildningen $f \mapsto$ Fourierrække er lineær, $FR(f + g) = FR(f) + FR(g)$ og $FR(kf) = k\,FR(f)$, så koefficienter kan regnes led for led og genbruges.

**Ikke pensum (slides): Fourierrække som mindste kvadraters løsning.** Minimerer man $\int_{-\pi}^\pi \bigl(f(x) - \frac{a_0}{2} - \sum_{n=1}^N (a_n\cos nx + b_n\sin nx)\bigr)^2dx$ over koefficienterne, giver de partielle afledede netop Fourierformlerne, fordi basisfunktionerne er ortogonale: $a_m$ er projektionen af $f$ på $\cos(mx)$.

**Eksempel.** Betragt det konstante signal $f(x) = 5$ for alle $x$. Da er $a_0 = \frac{1}{\pi}\int_{-\pi}^\pi 5\,dx = \frac{1}{\pi} \cdot 10\pi = 10$. For $n \ge 1$ er $a_n = \frac{5}{\pi}\int_{-\pi}^\pi \cos(nx)\,dx = 0$ og $b_n = 0$. Rækken bliver $\frac{1}{2}a_0 = 5 = f(x)$.

### Regneregler for integraler (lemma 6.5)
(R1) Er $f$ $2\pi$-periodisk, er $\int_0^{2\pi} f(x)\,dx = \int_a^{a+2\pi} f(x)\,dx$ for alle $a$. (R2) Er $f$ lige, er $\int_{-a}^a f(x)\,dx = 2\int_0^a f(x)\,dx$. (R3) Er $f$ ulige, er $\int_{-a}^a f(x)\,dx = 0$. (R2) og (R3) gælder også hvis $f$ ikke er lige/ulige i endeligt mange punkter pr. periode.

### Symmetrier: Lige og ulige funktioner (sætning 6.6 og korollar 6.7)
Symmetrier reducerer integrationsarbejdet markant:
1. En funktion er **lige**, hvis $f(-x) = f(x)$ for alle $x$. Grafen er symmetrisk omkring $y$-aksen. Da $\sin(nx)$ er ulige, bliver integranden $f(x)\sin(nx)$ ulige, så integralet over $[-\pi, \pi]$ er nul:
   $$b_n = 0 \quad \text{for alle } n \ge 1.$$
   Fourierrækken er en ren cosinusrække, og koefficienterne kan beregnes over det halve interval:
   $$a_n = \frac{2}{\pi}\int_0^\pi f(x)\cos(nx)\,dx \quad (n \ge 0).$$
2. En funktion er **ulige**, hvis $f(-x) = -f(x)$ for alle $x$. Grafen er punktsymmetrisk omkring origo. Da $\cos(nx)$ er lige, bliver integranden $f(x)\cos(nx)$ ulige, så:
   $$a_n = 0 \quad \text{for alle } n \ge 0.$$
   Fourierrækken er en ren sinusrække med middelværdi nul:
   $$b_n = \frac{2}{\pi}\int_0^\pi f(x)\sin(nx)\,dx \quad (n \ge 1).$$

Slides: brug sætningerne, "for kun en tåbe frygter ikke fortegnsfejl".

**Eksempel (den klassiske firkantbølge).** Lad $f$ være $2\pi$-periodisk med $f(x) = 1$ for $x \in\, ]0, \pi[$ og $f(x) = -1$ for $x \in\, ]-\pi, 0[$, samt $f(0) = f(\pi) = 0$. Funktionen er ulige, så $a_n = 0$ for alle $n \ge 0$. Sinuskoefficienterne er:

$$b_n = \frac{2}{\pi}\int_0^\pi 1 \cdot \sin(nx)\,dx = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_0^\pi = \frac{2}{n\pi}(1 - \cos(n\pi)) = \frac{2}{n\pi}(1 - (-1)^n).$$

For lige $n = 2k$ er $1 - (-1)^{2k} = 0$, så $b_{2k} = 0$. For ulige $n = 2k-1$ er $1 - (-1)^{2k-1} = 2$, så $b_{2k-1} = \frac{4}{(2k-1)\pi}$. Fourierrækken er derfor:

$$f \sim \frac{4}{\pi} \sum_{k=1}^\infty \frac{\sin((2k-1)x)}{2k-1} = \frac{4}{\pi}\left(\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \dots\right).$$

### Stykkevis differentiabel funktion (definition 6.13)
En $2\pi$-periodisk $f$ er stykkevis differentiabel, hvis der findes punkter $-\pi = x_1 < x_2 < \dots < x_n = \pi$ og kontinuert differentiable funktioner $F_i : [x_i, x_{i+1}] \to \mathbb C$ med $f = F_i$ på $]x_i, x_{i+1}[$. Ækvivalent: de ensidede grænseværdier af $f$ og $f'$ i hvert $x_i$ skal eksistere (og være endelige).

**Eksempel (opgave 864).** $\sqrt{|x|}$ på $[-\pi, \pi[$ udvidet periodisk er kontinuert, men ikke stykkevis differentiabel: $f'(x) = \frac{1}{2\sqrt x} \to \infty$ for $x \to 0^+$. Derimod er $|\cos x|$ og $x^3$ stykkevis differentiable ($x^3$ springer fra $\pi^3$ til $-\pi^3$ i $x = \pi$).

### Fouriers konvergenssætning (sætning 6.16)
Lad $f$ være $2\pi$-periodisk og stykkevis differentiabel.
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

### Kontinuerte funktioner og uniform konvergens (korollar 6.17)
Hvis den $2\pi$-periodiske funktion $f$ ikke blot er stykkevis kontinuert differentiabel, men også **overalt kontinuert** på hele $\mathbb{R}$ (hvilket kræver, at $f(\pi^-) = f(-\pi^+)$ så periodiciteten ikke skaber spring i endepunkterne), så er $f(x)$ lig sin Fourierrække for alle $x$, og konvergensen er **uniform** på $\mathbb{R}$. Firkantbølgen er ikke kontinuert og konvergerer ikke uniformt: MapleUge9 animerer afsnitssummerne op til $N = 1024$ og viser Gibbs-fænomenet, hvor afsnitssummen skyder over målet ved springene, og området hvor det sker rykker tættere på springet når $N$ vokser.
Derudover gælder følgende universelle fejlvurdering for den $N$'te afsnitssum $S_N(x)$:

$$|f(x) - S_N(x)| \le \frac{1}{\sqrt{N}}\frac{1}{\sqrt{\pi}}\sqrt{\int_{-\pi}^\pi |f'(t)|^2\,dt} \quad \text{for alle } x \in \mathbb{R}.$$

Dette er et stærkt resultat: integralet $\int_{-\pi}^\pi |f'(t)|^2\,dt$ er en endelig konstant, så fejlen går mod 0 som $\mathcal{O}(1/\sqrt{N})$ uafhængigt af $x$.

### T-periodiske signaler (appendiks C)
For en vilkårlig periode $T > 0$ defineres vinkelfrekvensen (grundfrekvensen) $\omega = \frac{2\pi}{T}$. Fourierrækken for en $T$-periodisk funktion er:

$$f(t) \sim \frac{1}{2}a_0 + \sum_{n=1}^\infty \bigl(a_n \cos(n\omega t) + b_n \sin(n\omega t)\bigr),$$

hvor koefficienterne integreres over et interval af længde $T$ (fx $[0, T]$ eller $[-T/2, T/2]$):

$$a_0 = \frac{2}{T}\int_0^T f(t)\,dt, \qquad a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega t)\,dt, \qquad b_n = \frac{2}{T}\int_0^T f(t)\sin(n\omega t)\,dt.$$

### CAS og Fourierkoefficienter (slides)
CAS må ikke bruges til uegentlige integraler (integralkriteriet), men gerne til egentlige integraler som Fourierkoefficienter. Maple regner typisk én koefficient forkert: den hvor stamfunktionen er anderledes end det generelle tilfælde (fx $n = 1$ når nævneren $n - 1$ optræder). Brug derfor CAS til ubestemte integraler og tjek at stamfunktionen giver mening for alle $n$. Til eksamen (uden computer) oplyses relevante ikke-trivielle stamfunktioner.

### Rodkriteriet (opgave 813)
Lad $\sum_{n=1}^\infty a_n$ være en række. Hvis der findes en konstant $C < 1$ og et indeks $N$ så

$$\sqrt[n]{|a_n|} \le C < 1 \quad \text{for alle } n \ge N,$$

så er rækken $\sum a_n$ absolut konvergent. Beviset følger direkte af sammenligning med kvotientrækken: uligheden medfører $|a_n| \le C^n$. Da $0 \le C < 1$, konvergerer $\sum C^n$, og sammenligningskriteriet giver konvergens af $\sum |a_n|$.

**Eksempel.** Undersøg rækken $\sum_{n=1}^\infty \left(\frac{n}{2n+1}\right)^n$. Vi anvender rodkriteriet:

$$\sqrt[n]{|a_n|} = \sqrt[n]{\left(\frac{n}{2n+1}\right)^n} = \frac{n}{2n+1} = \frac{1}{2 + \frac{1}{n}} \to \frac{1}{2} \quad \text{for } n \to \infty.$$

Her er endda $\frac{n}{2n+1} \leq \frac12$ for alle $n$, så $|a_n| \leq \left(\frac12\right)^n$, og rækken er absolut konvergent.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 864, kun $f_1, f_2, f_3$ | 6.1, 6.2 | Skitsér $f_1 = \lvert\cos x\rvert$, $f_2 = x^3$, $f_3 = \sqrt{\lvert x\rvert}$ udvidet $2\pi$-periodisk | $f_1$ er kontinuert og stykkevis differentiabel; $f_2$ har spring i $\pm\pi$; $f_3$ mangler differentiabilitet i $0$ |
| 228 (undt. v) | 6.1, 6.2 | $f(x) = \cos x$ på $]0, \pi]$, $0$ på $]\pi, 2\pi]$: skitse, konvergens, sum i $x = 0$, $a_0$ | Sum i $x=0$ er $\frac12$, $a_0 = 0$ (facit) |
| 222 (alt undtagen (c)) | 6.1, 6.2 | $f(t) = t$ på $[-\pi, \pi[$ udvidet periodisk; (c) laves i uge 10 | $a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$, rækkesum $\pi/4$ i $t=\pi/2$, sum er $0$ for $t = \pm\pi$ |
| 861 | 6.1 | Egenskaber ved produkter af lige og ulige funktioner | Lige $\times$ lige er lige, ulige $\times$ ulige er lige, lige $\times$ ulige er ulige |
| 860 | 6.1 | Entydig spaltning af enhver funktion i lige og ulige del | $f(x) = \frac{f(x)+f(-x)}{2} + \frac{f(x)-f(-x)}{2}$ |
| 225 | 6.1, 6.2 | Fourierkoefficienter for den konstante funktion $f(x) = 1$; ugesedlen: en konsekvens af at en Fourierrække under passende antagelser er sin egen Fourierrække | $a_0 = 2$, $a_n = 0$ og $b_n = 0$ for $n \ge 1$; rækken er lig funktionen |
| 209 | 6.1, 6.2, 5.4 | Afskåret cosinus: $f(t) = \cos t$ for $\lvert t\rvert < \pi/4$, ellers $0$ | Lige funktion ($b_n=0$), $a_0 = \frac{\sqrt{2}}{\pi}$, $a_1 = \frac{1}{4} + \frac{1}{2\pi}$; $f$ springer i $\pm\frac\pi4$, så konvergensen er ikke uniform og der er ingen konvergent majorantrække |
| 813 | 4.5 | Bevis for Cauchys rodkriterium | Følger ved majorisering af kvotientrækken $\sum C^n$ |

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

**Hjemmeopgavesæt 8:** to Möbius-sæt (Sæt8MC-01025 og Sæt8B-01025), senest 11/11 kl. 8. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**MC:** svaret på 706 er 3. Ugens MC-opgave er 707 (EkstraOpgaver.pdf): konvergensradius for $\sum_{n=0}^\infty \cosh(n)\,x^n$. Facit (ugeseddel 10): 2, dvs. $\rho = e^{-1}$, fordi $\frac{\cosh(n+1)}{\cosh n} \to e$.

**Løsningsnoter:** WeeklyNotes9.pdf (under uge 10 på DTU Learn) løser opgave 222 (a) til (f): (b) $f(t) = t$ kan udvides til en differentiabel funktion på $[-\pi, \pi]$, så Fouriers sætning gælder, og $t = \frac\pi2$ giver $\sum\frac{(-1)^{k-1}}{2k-1} = \frac\pi4$; (c) $c_n = \frac{i}{n}(-1)^n$ for $n \neq 0$ og $c_0 = 0$; (d) den mindste majorant $\sum\frac2n$ divergerer; (e) summen er $t$ for $t \in\, ]-\pi, \pi[$ og $0$ for $t = \pm\pi$; (f) ledvis differentiation er ikke tilladt (rækken af afledte divergerer i $t = 0$).

## Tjek dig selv

- [ ] Hvad er formlerne for $a_n$ og $b_n$, og hvorfor står der $\frac12a_0$?
- [ ] Hvordan halverer lige/ulige symmetri arbejdet?
- [ ] Hvad konvergerer Fourierrækken mod i et springpunkt?
- [ ] Hvornår kan $\sim$ erstattes af $=$?
- [ ] Hvordan bruges Fouriers sætning i et konkret punkt til at finde summen af en talrække?
- [ ] Hvordan omregnes til en $T$-periodisk funktion med $\omega = 2\pi/T$?
- [ ] Hvordan skitseres en periodisk udvidelse korrekt, inkl. værdierne i springpunkterne?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 08|Uge 8: Uniform konvergens]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 10|Uge 10: Kompleks form og Parseval]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
