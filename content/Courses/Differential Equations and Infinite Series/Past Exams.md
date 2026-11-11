---
publish: true
title: "01025 Gamle eksamenssæt og gennemgange"
course: Differential Equations and Infinite Series
type: past-exams
tags:
  - differential-equations
  - eksamen
  - past-exams
---

# 01025 Gamle eksamenssæt: gennemgang og facit

> **Kilde:** eksamenssættene i "Materiale til 01025 Differentialligninger og uendelige rækker.zip" og 01025Mat2MatTekEksamen-E25.pdf med løsning (DTU Learn, 01025 E26). Gennemgangene nedenfor er regnet ud fra opgaveteksterne; kun E25 (på DTU Learn) og de ældre sæt med "losning" i filnavnet har officielle løsninger.

## Eksamensformen

Fra E25 er eksamen en 3-timers skriftlig prøve med alle skriftlige hjælpemidler og ingen elektroniske hjælpemidler. E25 havde en multiple choice del A (25 %, svar uden begrundelse) og fire opgaver i del B, som besvares med begrundelser, mellemregninger og relevante henvisninger til sætninger i lærebogen. Ældre sæt (til og med F25) var med "alle af DTU tilladte hjælpemidler" og en elektronisk MC-del; B-E24UdenComputer er en computerfri omformulering af E24.

## Oversigt over sættene i zip-filen

| Mappe | Sæt | Løsning i zip-filen |
|---|---|---|
| Eksamensopgaver og løsninger 2012-18 | 2012, 2013, 2014, 2015, dec 2016 (inkl. MC), dec 2017 (del A og B), E18 (B og MC) | 2012, 2013, 2014, 2015, dec 2016 MC, dec 2017, E18 (to udgaver), E18 MC-svar |
| Eksamensopgaver 2019-F26 | B-E19, A-MC-E19, A og B-E20, A-E21, B-E21, A-E22, B-E22, F23, B-E23, AogB-F24, A-MC-E24, B-E24, B-E24UdenComputer, B-F25, E25, F26 | ingen; E25-løsningen ligger separat på DTU Learn under uge 13 |

E25 er beskrevet opgave for opgave i [[Courses/Differential Equations and Infinite Series/Uger/Uge 13|uge 13]]. Opgave 1 i del B af AogB-F24 er hjemmeopgave 6 ([[Courses/Differential Equations and Infinite Series/Uger/Uge 07|uge 7]]) og opgave 4 i B-E21 er hjemmeopgave 7 ([[Courses/Differential Equations and Infinite Series/Uger/Uge 08|uge 8]]); de er bedømte afleveringer og gennemgås ikke her.

---

## Eksamenssæt Maj 2023 (F23)

Prøven blev afholdt 11. maj 2023. Vægtning: Opgave 1 (MC): 45 %, Opgave 2: 15 %, Opgave 3: 25 %, Opgave 4: 15 %.

### Opgave 1: Del A (Multiple Choice)

#### Spørgsmål 1.1: 3. ordens homogen ligning
**Opgave:** Bestem den fuldstændige komplekse løsning til:
$$\frac{d^3y}{dt^3} + 6\frac{d^2y}{dt^2} + 9\frac{dy}{dt} = 0.$$
**Løsning:** Det karakteristiske polynomium er:
$$P(\lambda) = \lambda^3 + 6\lambda^2 + 9\lambda = \lambda(\lambda^2 + 6\lambda + 9) = \lambda(\lambda + 3)^2 = 0.$$
Rødderne er $\lambda = 0$ (simpel rod) og $\lambda = -3$ (dobbeltrod).
Basisløsningerne er $e^{0t} = 1$, $e^{-3t}$ og $t e^{-3t}$.
Den fuldstændige løsning er:
$$y(t) = c_1 + c_2 e^{-3t} + c_3 t e^{-3t}, \quad c_1, c_2, c_3 \in \mathbb{C}.$$
**Svar (udregnet):** **D**.

#### Spørgsmål 1.2: Løsning til asymptotisk stabilt system
**Opgave:** Betragt et $2\times 2$ lineært system $\dot{\mathbf x} = A\mathbf x$. Antag at systemet er asymptotisk stabilt. Kan funktionen $\mathbf x(t) = t \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ være en løsning til systemet?
Anden del: antag omvendt at $\mathbf x(t) = t(1,1)^\top$ er en løsning. Er systemet stabilt?
**Løsning:** For et asymptotisk stabilt system går alle løsninger mod $\mathbf 0$ (definition 2.28). Da $\|\mathbf x(t)\| = \sqrt{2}|t| \to \infty$ for $t \to \infty$, kan funktionen ikke være en løsning: svar B. Er den omvendt en løsning, findes en ubegrænset løsning, så systemet er ikke stabilt: svar 2.
**Samlet svar (udregnet):** **B2**.

#### Spørgsmål 1.3: Overføringsfunktion
**Opgave:** Bestem overføringsfunktionen $H(s)$ for ligningen $\frac{d^3y}{dt^3} + 3\frac{d^2y}{dt^2} + 2\frac{dy}{dt} = u' + u$, samt dens definitionsmængde.
**Løsning:** Med differentialoperatoren $D$ skrives ligningen:
$$(D^3 + 3D^2 + 2D)y = (D + 1)u.$$
Overføringsfunktionen er $H(s) = \frac{Q(s)}{P(s)}$ (sætning 1.25):
$$H(s) = \frac{s + 1}{s^3 + 3s^2 + 2s} = \frac{s + 1}{s(s+1)(s+2)} = \frac{1}{s(s+2)}.$$
Definitionsmængden før forkortelse bestemmes af nævnerens nulpunkter: $s(s+1)(s+2) = 0 \implies s \in \{0, -1, -2\}$.
Overføringsfunktionen er derfor defineret for $s \in \mathbb{C} \setminus \{0, -1, -2\}$.
**Samlet svar (udregnet):** $H(s) = \frac{1}{s(s+2)}$ (**F**), defineret for $s \in \mathbb{C} \setminus \{0, -1, -2\}$ (**2**), altså **F2**.

#### Spørgsmål 1.4: Potensrække og differentiation
**Opgave:** Betragt potensrækken $\sum_{n=2}^\infty n^3 2^n x^n$. Bestem konvergensradius $\rho$, og beregn $f'(0)$ for sumfunktionen $f(x) = \sum_{n=2}^\infty n^3 2^n x^n$.
**Løsning:**
1. Konvergensradius findes med kvotientkriteriet:
   $$\lim_{n\to\infty} \frac{(n+1)^3 2^{n+1}}{n^3 2^n} = 2 \lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^3 = 2 \implies \rho = \frac{1}{2}.$$
2. Rækken starter ved $n = 2$:
   $$f(x) = 2^3 2^2 x^2 + 3^3 2^3 x^3 + \dots = 32 x^2 + 216 x^3 + \dots$$
   Da koefficienten til $x^1$ er $c_1 = 0$, giver sætning 5.20 ($c_1 = f'(0)$):
   $$f'(0) = c_1 = 0.$$
**Samlet svar (udregnet):** $\rho = 1/2$ (**I**) og $f'(0) = 0$ (**1**), altså **I1**.

#### Spørgsmål 1.5: Konvergensforhold
**Opgave:** Undersøg om $\sum_{n=1}^\infty (-1)^n \frac{(n+2)^3}{2^n}$ konvergerer absolut, betinget eller divergerer. Undersøg derefter om $\sum_{n=1}^\infty (n+4)x^n$ konvergerer uniformt på $]0, 1[$.
**Løsning:**
1. Rækken med absolutte værdier er $\sum \frac{(n+2)^3}{2^n}$. Kvotientkriteriet giver:
   $$\lim_{n\to\infty} \frac{(n+3)^3 2^n}{(n+2)^3 2^{n+1}} = \frac{1}{2} < 1.$$
   Rækken er derfor **absolut konvergent** (K).
2. For $\sum_{n=1}^\infty (n+4)x^n$ på intervallet $]0, 1[$ bemærkes, at for ethvert fast $N$ er $\lim_{x\to 1^-} (N+4)x^N = N+4 \ge 5 \neq 0$. Ved uniform konvergens skulle $\sup_{x \in ]0,1[}|f_n(x)| \to 0$ (forskellen mellem to på hinanden følgende afsnitssummer er $f_n$), men her er supremum $n + 4$. Konvergensen er derfor **ikke** uniform på $]0, 1[$ (svarmulighed 2).
**Samlet svar (udregnet):** **K2**.

#### Spørgsmål 1.6: Majorantrækker
**Opgave:** Undersøg om $\sum_{n=1}^\infty \frac{1}{n^2}\ln(x^n)$ har en (konvergent) majorantrække på $[1, \infty[$, og på $[1, 10]$.
**Løsning:**
Omskriv leddet: $\frac{1}{n^2}\ln(x^n) = \frac{n\ln x}{n^2} = \frac{\ln x}{n}$.
- På $[1, \infty[$ er $\sup_{x \ge 1} \frac{\ln x}{n} = \infty$. Rækken har ingen talmajorant overhovedet (**N**).
- På $[1, 10]$ er $\sup_{x \in [1, 10]} \frac{\ln x}{n} = \frac{\ln 10}{n} = M_n$. Rækken har talmajoranten $M_n$, men rækken $\sum \frac{\ln 10}{n} = \ln(10)\sum \frac{1}{n} = \infty$ divergerer. Rækken har altså en majorantrække, men **ikke en konvergent majorantrække** (**1**).
**Samlet svar (udregnet):** **N1**.

---

### Opgave 2: Variable koefficienter og reduktion af orden

Det oplyses, at differentialligningen
$$\frac{d^2y}{dt^2} + \frac{1}{t}\frac{dy}{dt} + a(t)y = 0, \quad t \in\, ]0, \infty[,$$
har løsningen $y_1(t) = t^2$.

**(i) Bestem funktionen $a(t)$:**
Differentiér $y_1(t) = t^2$:
$$y_1'(t) = 2t, \qquad y_1''(t) = 2.$$
Indsæt i differentialligningen:
$$2 + \frac{1}{t}(2t) + a(t)t^2 = 2 + 2 + a(t)t^2 = 4 + a(t)t^2 = 0.$$
Da $t > 0$, kan $t^2$ divideres over:
$$a(t) = -\frac{4}{t^2}.$$

**(ii) Bestem den fuldstændige reelle løsning:**
Differentialligningen er nu $y'' + \frac{1}{t}y' - \frac{4}{t^2}y = 0$.
Vi kender løsningen $y_1(t) = t^2$ og finder en anden lineært uafhængig løsning $y_2(t)$ ved reduktion af orden (sætning 1.31).
Koefficienten er $a_1(t) = \frac{1}{t}$.
Med $\Omega(t) = e^{\int a_1(t)\,dt}$ fås:
$$\Omega(t) = e^{\int a_1(t)\,dt} = e^{\int \frac{1}{t}\,dt} = e^{\ln t} = t \quad (\text{for } t > 0).$$
Ifølge formlen for reduktion af orden er:
$$y_2(t) = y_1(t)\int \frac{1}{y_1(t)^2\,\Omega(t)}\,dt = t^2 \int \frac{1}{(t^2)^2 \cdot t}\,dt = t^2 \int \frac{1}{t^5}\,dt = t^2 \int t^{-5}\,dt.$$
Integration giver:
$$y_2(t) = t^2 \left( -\frac{1}{4}t^{-4} \right) = -\frac{1}{4t^2}.$$
Da enhver konstant multipel af en homogen løsning også er en løsning, vælges den simplere repræsentant $y_2(t) = t^{-2} = \frac{1}{t^2}$.
De to løsninger $y_1(t) = t^2$ og $y_2(t) = t^{-2}$ er lineært uafhængige, fordi deres kvotient $\frac{y_2(t)}{y_1(t)} = t^{-4}$ ikke er konstant.
Den fuldstændige reelle løsning er derfor:
$$y(t) = c_1 t^2 + c_2 t^{-2} = c_1 t^2 + \frac{c_2}{t^2}, \quad c_1, c_2 \in \mathbb{R}, \quad t > 0.$$

---

### Opgave 3: Fourierrække for stykkevis funktion

Betragt den $2\pi$-periodiske funktion $f: \mathbb{R} \to \mathbb{R}$ givet ved:
$$f(x) = \begin{cases} |x| = -x & \text{for } x \in [-\pi, 0], \\ x^{1.01} & \text{for } x \in\, ]0, \pi[. \end{cases}$$

**(i) Skitse:**
På $[-\pi, 0]$ er grafen en ret linje fra $(-\pi, \pi)$ ned til $(0, 0)$.
På $]0, \pi[$ starter grafen i $(0, 0)$ og vokser svagt superlineært op mod $(\pi, \pi^{1.01}) \approx (\pi, 3.178)$.
I naboperioderne gentages dette forløb med periode $2\pi$.

**(ii) Er funktionen $f$ lige?**
Nej. For $x \in\, ]0, \pi[$ er $f(x) = x^{1.01}$, mens $f(-x) = |-x| = x$.
Da $x^{1.01} \neq x$ for alle $x \in\, ]0, \pi[ \setminus \{1\}$, er $f(-x) \neq f(x)$. Funktionen er derfor ikke lige.

**(iii) Beregn Fourierkoefficienten $a_0$:**
$$a_0 = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\,dx = \frac{1}{\pi}\left( \int_{-\pi}^0 -x\,dx + \int_0^\pi x^{1.01}\,dx \right).$$
Integralerne udregnes:
$$\int_{-\pi}^0 -x\,dx = \left[ -\frac{x^2}{2} \right]_{-\pi}^0 = 0 - \left(-\frac{\pi^2}{2}\right) = \frac{\pi^2}{2}.$$
$$\int_0^\pi x^{1.01}\,dx = \left[ \frac{x^{2.01}}{2.01} \right]_0^\pi = \frac{\pi^{2.01}}{2.01}.$$
Dermed er:
$$a_0 = \frac{1}{\pi}\left(\frac{\pi^2}{2} + \frac{\pi^{2.01}}{2.01}\right) = \frac{\pi}{2} + \frac{\pi^{1.01}}{2.01}.$$

**(iv) Hvad konvergerer Fourierrækken mod i $x = \frac{\pi}{2}$?**
I punktet $x = \frac{\pi}{2}$ er $f$ kontinuert og differentiabel. Funktionen er stykkevis differentiabel ($\frac{d}{dx}x^{1.01} = 1.01x^{0.01}$ har grænseværdi $0$ for $x \to 0^+$), og ifølge Fouriers sætning (sætning 6.16) konvergerer rækken punktvis mod selve funktionsværdien:
$$S\left(\frac{\pi}{2}\right) = f\left(\frac{\pi}{2}\right) = \left(\frac{\pi}{2}\right)^{1.01}.$$

**(v) Hvad konvergerer Fourierrækken mod i $x = \pi$?**
Punktet $x = \pi$ er et springpunkt for den $2\pi$-periodiske udvidelse:
- Venstresidede grænseværdi: $\lim_{x\to \pi^-} f(x) = \lim_{x\to \pi^-} x^{1.01} = \pi^{1.01}$.
- Højresidede grænseværdi: $\lim_{x\to \pi^+} f(x) = \lim_{t\to -\pi^+} f(t) = \lim_{t\to -\pi^+} |t| = |-\pi| = \pi$.
Ifølge Fouriers sætning konvergerer rækken mod middelværdien af springet:
$$S(\pi) = \frac{f(\pi^-) + f(\pi^+)}{2} = \frac{\pi^{1.01} + \pi}{2}.$$

**(vi) Konvergerer Fourierrækken uniformt?**
Nej! Da $\pi^{1.01} \neq \pi$, er $f(\pi^-) \neq f(\pi^+)$. Den periodiske udvidelse af $f$ er derfor diskontinuert i punkterne $\pi + 2k\pi$.
Hvis en række af kontinuerte funktioner konvergerer uniformt, skal dens sumfunktion være kontinuert (sætning 5.35). Da sumfunktionen $S(x)$ har spring i $\pi + 2k\pi$, kan konvergensen **ikke** være uniform på $\mathbb{R}$.

---

### Opgave 4: Potensrækkemetoden

Om en differentialligning $y'' + a_1(t)y' + a_2(t)y = 0$ vides, at indsættelse af en potensrække $y(t) = \sum_{n=0}^\infty c_n t^n$ leder til rekursionsformlen:
$$(n + 1)c_{n+1} - c_n = 0 \iff c_{n+1} = \frac{c_n}{n+1} \quad \text{for } n = 0, 1, 2, \dots$$

**(i) Undersøg om $y(t) = t^2$ er løsning:**
Hvis $y(t) = t^2$ var en løsning, ville potensrækken have $c_2 = 1$ og $c_n = 0$ for alle $n \neq 2$.
Test i rekursionsformlen:
- For $n = 0$: $1 \cdot c_1 - c_0 = 0 - 0 = 0$ (opfyldt).
- For $n = 1$: $2 \cdot c_2 - c_1 = 2(1) - 0 = 2 \neq 0$.
Rekursionsformlen fejler for $n = 1$. Følgelig kan $y(t) = t^2$ **ikke** være en løsning til differentialligningen.

**(ii) Bestem konvergensradius $\rho$:**
Kvotienten mellem på hinanden følgende koefficienter er:
$$\lim_{n\to\infty} \left|\frac{c_{n+1}}{c_n}\right| = \lim_{n\to\infty} \frac{1}{n+1} = 0.$$
Da grænseværdien er $L = 0$, er konvergensradius:
$$\rho = \infty.$$
Løsningerne konvergerer for alle $t \in \mathbb{R}$.

**(iii) Løsning med $y(0) = K$ og sumfunktion:**
Begyndelsesværdien $y(0) = K$ betyder $c_0 = K$.
Rekursionen giver ved induktion:
$$c_1 = \frac{c_0}{1} = K,$$
$$c_2 = \frac{c_1}{2} = \frac{K}{2!},$$
$$c_n = \frac{c_{n-1}}{n} = \frac{K}{n!}.$$
Potensrækkeløsningen er:
$$y(t) = \sum_{n=0}^\infty \frac{K}{n!} t^n = K \sum_{n=0}^\infty \frac{t^n}{n!}.$$
Sumfunktionen genkendes direkte som standardrækken for eksponentialfunktionen:
$$y(t) = K e^t.$$

---

## Eksamenssæt efterår 2018 (E18), opgave 3

Betragt den lige $2\pi$-periodiske funktion $f: \mathbb{R} \to \mathbb{R}$, som for $x \in [0, \pi]$ er givet ved:
$$f(x) = \begin{cases} 1 & \text{for } x \in [0, a[, \\ b & \text{for } x = a, \\ 0 & \text{for } x \in\, ]a, \pi], \end{cases}$$
hvor $a \in\, ]0, \pi[$ og $b \in \mathbb{R}$ er givne konstanter.

### Spørgsmål 1: Fourierkoefficienter
Da $f$ er en lige funktion, er $b_n = 0$ for alle $n \ge 1$.
Koefficienterne $a_n$ beregnes ved integration:
$$a_0 = \frac{2}{\pi}\int_0^\pi f(x)\,dx = \frac{2}{\pi}\int_0^a 1\,dx = \frac{2a}{\pi}.$$
For $n \ge 1$:
$$a_n = \frac{2}{\pi}\int_0^a 1 \cdot \cos(nx)\,dx = \frac{2}{\pi}\left[\frac{\sin(nx)}{n}\right]_0^a = \frac{2\sin(an)}{n\pi}.$$
Fourierrækken er:
$$f(x) \sim \frac{a}{\pi} + \frac{2}{\pi}\sum_{n=1}^\infty \frac{\sin(an)}{n}\cos(nx).$$

### Spørgsmål 2: Konvergens overalt og bestemmelse af $b$
I springpunktet $x = a$ er venstresidede grænseværdi $f(a^-) = 1$ og højresidede grænseværdi $f(a^+) = 0$.
Ifølge Fouriers sætning konvergerer rækken i $x = a$ mod middelværdien:
$$S(a) = \frac{f(a^-) + f(a^+)}{2} = \frac{1 + 0}{2} = \frac{1}{2}.$$
For at Fourierrækken skal konvergere mod $f(x)$ for alle $x \in \mathbb{R}$, må funktionsværdien i springet fastsættes til:
$$b = \frac{1}{2}.$$

### Spørgsmål 3: Beregning af talrækker via Fouriers sætning og Parseval
1. **Beregning af $\sum_{n=1}^\infty \frac{\sin(an)}{n}$:**
   Evaluer rækken i det indre punkt $x = 0 \in [0, a[$, hvor $f(0) = 1$.
   Da $f$ er kontinuert i $0$, giver Fouriers sætning:
   $$1 = \frac{a}{\pi} + \frac{2}{\pi}\sum_{n=1}^\infty \frac{\sin(an)}{n}\cos(0) = \frac{a}{\pi} + \frac{2}{\pi}\sum_{n=1}^\infty \frac{\sin(an)}{n}.$$
   Isolér summen:
   $$\frac{2}{\pi}\sum_{n=1}^\infty \frac{\sin(an)}{n} = 1 - \frac{a}{\pi} \implies \sum_{n=1}^\infty \frac{\sin(an)}{n} = \frac{\pi - a}{2}.$$
2. **Beregning af $\sum_{n=1}^\infty \frac{\sin^2(an)}{n^2}$ via Parsevals sætning:**
   Effekten beregnes:
   $$P(f) = \frac{1}{2\pi}\int_{-\pi}^\pi |f(x)|^2\,dx = \frac{1}{\pi}\int_0^\pi |f(x)|^2\,dx = \frac{1}{\pi}\int_0^a 1^2\,dx = \frac{a}{\pi}.$$
   Højresiden i Parsevals formel er:
   $$\frac{1}{4}a_0^2 + \frac{1}{2}\sum_{n=1}^\infty a_n^2 = \frac{1}{4}\left(\frac{2a}{\pi}\right)^2 + \frac{1}{2}\sum_{n=1}^\infty \left(\frac{2\sin(an)}{n\pi}\right)^2 = \frac{a^2}{\pi^2} + \frac{2}{\pi^2}\sum_{n=1}^\infty \frac{\sin^2(an)}{n^2}.$$
   Sæt de to udtryk lig hinanden:
   $$\frac{a}{\pi} = \frac{a^2}{\pi^2} + \frac{2}{\pi^2}\sum_{n=1}^\infty \frac{\sin^2(an)}{n^2}.$$
   Isolér den uendelige række:
   $$\frac{2}{\pi^2}\sum_{n=1}^\infty \frac{\sin^2(an)}{n^2} = \frac{a}{\pi} - \frac{a^2}{\pi^2} = \frac{a\pi - a^2}{\pi^2} \implies \sum_{n=1}^\infty \frac{\sin^2(an)}{n^2} = \frac{a(\pi - a)}{2}.$$

---

## Eksamenssæt december 2017, opgave 3

Betragt differentialligningen $y'' - xy = 0$ (Airy-ligningen). Vi søger løsninger som potensrækker $y(x) = \sum_{n=0}^\infty a_n x^n$.

### 1. Rekursionsformel
Ledvis differentiation giver:
$$y''(x) = \sum_{n=2}^\infty n(n-1)a_n x^{n-2} = 2a_2 + \sum_{k=1}^\infty (k+2)(k+1)a_{k+2} x^k,$$
$$x y(x) = \sum_{n=0}^\infty a_n x^{n+1} = \sum_{k=1}^\infty a_{k-1} x^k.$$
Indsæt i ligningen:
$$2a_2 + \sum_{k=1}^\infty \bigl( (k+2)(k+1)a_{k+2} - a_{k-1} \bigr) x^k = 0.$$
- For $x^0$: $2a_2 = 0 \implies a_2 = 0$.
- For $x^k$ ($k \ge 1$): $(k+2)(k+1)a_{k+2} = a_{k-1}$.
Sættes $n = k - 1 \ge 0$, fås rekursionsformlen:
$$a_{n+3} = \frac{a_n}{(n+3)(n+2)} \quad \text{for } n \ge 0.$$

### 2. Approksimation af 8. grad med $y(0) = 1$ og $y'(0) = 2$
Her er $a_0 = 1$ og $a_1 = 2$, samt $a_2 = 0$.
- $n = 0$: $a_3 = \frac{a_0}{3 \cdot 2} = \frac{1}{6}$.
- $n = 1$: $a_4 = \frac{a_1}{4 \cdot 3} = \frac{2}{12} = \frac{1}{6}$.
- $n = 2$: $a_5 = \frac{a_2}{5 \cdot 4} = 0$.
- $n = 3$: $a_6 = \frac{a_3}{6 \cdot 5} = \frac{1/6}{30} = \frac{1}{180}$.
- $n = 4$: $a_7 = \frac{a_4}{7 \cdot 6} = \frac{1/6}{42} = \frac{1}{252}$.
- $n = 5$: $a_8 = \frac{a_5}{8 \cdot 7} = 0$.

Det 8. Taylor-polynomium er:
$$y_8(x) = 1 + 2x + \frac{1}{6}x^3 + \frac{1}{6}x^4 + \frac{1}{180}x^6 + \frac{1}{252}x^7.$$

### 3. Konvergensradius
Fra rekursionen ses:
$$\lim_{n\to\infty} \frac{a_{n+3}}{a_n} = \lim_{n\to\infty} \frac{1}{(n+3)(n+2)} = 0.$$
Koefficienterne aftager hurtigere end nogen eksponentialfunktion, så konvergensradius for løsningen er $\rho = \infty$. Rækken konvergerer for alle reelle $x$.

---

## Gode vaner fra gennemgangene

1. **Henvisninger:** del B kræver begrundelser og relevante henvisninger til lærebogen, fx "Fouriers sætning (sætning 6.16)", "Parsevals sætning (sætning 6.30)" eller "reduktion af orden (sætning 1.31)". Numrene her følger slides og E25-løsningen.
2. **Springpunkter i Fourierrækker:** i et punkt som $x = \pi$ sammenlignes venstre- og højregrænseværdien. Er de forskellige, konvergerer rækken mod gennemsnittet, og konvergensen kan ikke være uniform.
3. **Frie parametre i rekursioner:** giver rekursionen fx $(k-1)\bigl((k+1)c_{k+1}-c_k\bigr) = 0$, er $c_2$ fri (opgave 891, uge 12).
4. **Definitionsmængden for $H(s)$** bestemmes af nævneren før forkortning.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- [[Studie|Studie-træningsrum]]
- [[Flashcards/Differential Equations Flashcards|Differential Equations Flashcards]]
- [[Self-Tests/Differential Equations Test|Selvtest]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
- [[Courses/Differential Equations and Infinite Series/Uger/Uge 13|Uge 13: E25 og repetition]]
- [[Differential Equations and Infinite Series]]
