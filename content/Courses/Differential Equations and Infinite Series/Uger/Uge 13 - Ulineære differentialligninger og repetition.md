---
publish: true
title: "01025 uge 13: Ulineære differentialligninger og repetition"
course: Differential Equations and Infinite Series
type: week
week: 13
tags:
  - differential-equations
  - ugenote
---

# Uge 13: Ulineære differentialligninger og repetition

## Læseplan

- Forelæsning (onsdag 2/12): afsnit 3.1, 3.2 og 3.3 i lærebogen.
- Pensum (Pensumliste 2026): afsnit 3.1 og 3.3. Afsnit 3.2 gennemgås, men er ikke pensum.
- Eksamen: søndag 6. december (ugeseddel 1), 3 timer, alle skriftlige hjælpemidler, ingen elektroniske hjælpemidler. Ifølge SlidesUge1 vil egenværdier, egenvektorer, stamfunktioner og rødder nogle gange være oplyst.

## Begreber

### Ulineære autonome systemer (afsnit 3.1)
Et system af koblede 1. ordens differentialligninger kaldes **autonomt**, hvis højresiden ikke eksplicit afhænger af tiden $t$:

$$\dot{\mathbf x} = \mathbf f(\mathbf x) \iff \begin{pmatrix} \dot x_1 \\ \dot x_2 \end{pmatrix} = \begin{pmatrix} f_1(x_1, x_2) \\ f_2(x_1, x_2) \end{pmatrix}.$$

Systemet kaldes **ulineært**, hvis mindst én af funktionerne $f_1, f_2$ indeholder ulineære led (som fx $x_1^2, x_1 x_2, \sin x_1, e^{x_2}$).
Sætning 3.2 (eksistens og entydighed): har $\mathbf f$ kontinuerte partielle afledede, findes præcis én løsning gennem hvert startpunkt. For et autonomt system kan to forskellige løsningskurver derfor ikke krydse hinanden i faseplanet.

Stabilitet af et stationært punkt defineres generelt i definition 3.6; for lineære systemer med konstante koefficienter er den ækvivalent med definition 2.28 (slides uge 3).

### Stationære punkter / Ligevægtspunkter
Et punkt $\mathbf x^* \in \mathbb{R}^n$ kaldes et **stationært punkt** (eller ligevægtspunkt), hvis:

$$\mathbf f(\mathbf x^*) = \mathbf 0 \iff f_1(\mathbf x^*) = 0 \quad \text{og} \quad f_2(\mathbf x^*) = 0.$$

Hvis systemet starter i et stationært punkt ($\mathbf x(0) = \mathbf x^*$), er løsningen konstant for alle tider: $\mathbf x(t) = \mathbf x^*$.

### Linearisering og stabilitet (sætning 3.7)
I en lille omegn af et stationært punkt $\mathbf x^*$ kan $\mathbf f(\mathbf x)$ approksimeres ved sit 1. ordens Taylor-polynomium:

$$\mathbf f(\mathbf x) \approx \mathbf f(\mathbf x^*) + D\mathbf f(\mathbf x^*)(\mathbf x - \mathbf x^*) = D\mathbf f(\mathbf x^*)(\mathbf x - \mathbf x^*),$$

hvor $D\mathbf f(\mathbf x^*)$ er **Jacobimatricen** (funktionalmatricen) evalueret i $\mathbf x^*$:

$$D\mathbf f(\mathbf x) = \begin{pmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{pmatrix}.$$

Sætning 3.7 etablerer forbindelsen mellem det lineariserede system $\dot{\mathbf z} = D\mathbf f(\mathbf x^*)\mathbf z$ og det sande ulineære system:
1. **Asymptotisk stabilitet:** Hvis alle egenværdier for Jacobimatricen $D\mathbf f(\mathbf x^*)$ har strengt negativ realdel ($\operatorname{Re}(\lambda_i) < 0$ for alle $i$), så er det stationære punkt $\mathbf x^*$ **asymptotisk stabilt** for det ulineære system. Løsninger der starter tilstrækkeligt tæt på $\mathbf x^*$, konvergerer mod $\mathbf x^*$ for $t \to \infty$.
2. **Ustabilitet:** Hvis mindst én egenværdi for $D\mathbf f(\mathbf x^*)$ har strengt positiv realdel ($\operatorname{Re}(\lambda_k) > 0$), så er det stationære punkt $\mathbf x^*$ **ustabilt**.
3. **Uafgørligt grænsetilfælde:** Hvis den maksimale realdel af egenværdierne er præcis 0 (fx rent imaginære egenværdier $\lambda = \pm i\omega$, hvilket svarer til et lineært center), kan lineariseringen **ikke** afgøre stabiliteten. Det ulineære system kan være stabilt eller ustabilt, afhængigt af højere ordens led.

**Eksempel (dæmpet matematisk pendul).**
Bevægelsen er beskrevet ved $\dot x_1 = x_2$ og $\dot x_2 = -\sin x_1 - x_2$.
1. Stationære punkter: $x_2 = 0$ og $\sin x_1 = 0 \implies \mathbf x^* = (k\pi, 0)$ for $k \in \mathbb{Z}$.
2. Jacobimatricen er:
   $$D\mathbf f(x_1, x_2) = \begin{pmatrix} 0 & 1 \\ -\cos x_1 & -1 \end{pmatrix}.$$
3. I det nedadrettede ligevægtspunkt $(0, 0)$ er $\cos(0) = 1$:
   $$D\mathbf f(0, 0) = \begin{pmatrix} 0 & 1 \\ -1 & -1 \end{pmatrix}.$$
   Karakterligningen er $\lambda^2 + \lambda + 1 = 0$, med rødder $\lambda = -\frac{1}{2} \pm i\frac{\sqrt{3}}{2}$.
   Da $\operatorname{Re}(\lambda) = -\frac{1}{2} < 0$, er origo en stabil spiral (asymptotisk stabil ligevægt).
4. I det opadrettede ligevægtspunkt $(\pi, 0)$ er $\cos(\pi) = -1$:
   $$D\mathbf f(\pi, 0) = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}.$$
   Karakterligningen er $\lambda^2 + \lambda - 1 = 0$, med rødder $\lambda = \frac{-1 \pm \sqrt{5}}{2}$.
   Den ene rod er $\lambda_1 = \frac{\sqrt{5}-1}{2} \approx 0.618 > 0$. Da der findes en positiv egenværdi, er punktet et saddelpunkt (ustabilt).

### 1-dimensionale autonome systemer (afsnit 3.2, ikke pensum)
$\dot x = f(x)$. Fortegnet af $f$ mellem de stationære punkter viser hvilken vej løsningerne bevæger sig. Et stationært punkt med $f'(x_s) < 0$ er asymptotisk stabilt, $f'(x_s) > 0$ ustabilt.

**Eksempel.** $\dot x = x(1 - x)$ har stationære punkter $0$ og $1$. $f'(x) = 1 - 2x$, så $f'(0) = 1 > 0$ (ustabilt) og $f'(1) = -1 < 0$ (asymptotisk stabilt). Alle løsninger der starter med $x(0) > 0$ går mod $1$.

### 2-dimensionale faseportrætter og nulkliner (afsnit 3.3)
Omkring et stationært punkt ligner faseportrættet det lineariserede systems: egenværdiernes type (reelle med samme fortegn, modsat fortegn, komplekse) afgør om det er en knude, et saddelpunkt eller en spiral. Til at danne overblik tegnes:
For at danne et overblik over dynamikken i faseplanet $(x_1, x_2)$ tegnes:
1. **$x_1$-nulklinen:** kurven hvor $\dot x_1 = f_1(x_1, x_2) = 0$. På denne kurve er hastighedsvektoren rent vertikal.
2. **$x_2$-nulklinen:** kurven hvor $\dot x_2 = f_2(x_1, x_2) = 0$. På denne kurve er hastighedsvektoren rent horisontal.
3. Skæringspunkterne mellem de to nulkliner er systemets stationære punkter.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / konklusion |
|---|---|---|---|
| Opgave 966 (EkstraOpgaver.pdf) | 3.1, 3.3 (sætning 3.7) | Ulineært system med parameter $a$: vis at $(a, 1)$ er et stationært punkt, og at det er ustabilt for $a > 0$ og asymptotisk stabilt for $a < 0$ | Se gennemgangen nedenfor |
| 436 | 3.1 | Alle stationære punkter for $x' = x^2 + y^2 - x + 2y + 1$, $y' = x - y - 1$; ugesedlen tillader CAS til egenværdier | $(\frac12, -\frac12)$ og $(0, -1)$ |
| 862 (frivillig) | 6.3, 5.4 | Bevis for at en Fourierrække er sin egen Fourierrække, når $\sum d_n$ er absolut konvergent | |
| Eksamenssættet december 2025 | hele pensum | Ugesedlen anbefaler at starte med del B; se tabellen nedenfor | Løsning i 01025Mat2MatTekEksamen-E25-Løsning.pdf |

Som repetition anbefaler ugesedlen opgaverne fra ugesedlerne og gamle eksamensopgaver. Gamle sæt fra 2012 til F26 ligger i zip-filen på DTU Learn, se [[Courses/Differential Equations and Infinite Series/Past Exams|Gamle eksamenssæt]].

### Eksamenssættet december 2025 (E25)

Skriftlig 3-timers prøve 7. december 2025, alle skriftlige hjælpemidler, ingen elektroniske. Del A (multiple choice, 25 %) uden begrundelser; del B med begrundelser og henvisninger til lærebogen.

| Opgave | Emne | Afsnit |
|---|---|---|
| A 1.1 | Fuldstændig reel løsning ud fra $p(\lambda) = (\lambda+1)^2(\lambda^2+1)$ | 1.2 |
| A 1.2 | Stabilitet af samme ligning | 2.8 |
| A 2.1 | Konvergensradius for $\sum \frac{x^n}{2^n\sqrt{n+1}}$ | 5.2 |
| A 2.2 | Absolut, betinget eller divergent: $\sum \frac{(-1)^n}{\sqrt{n+1}}$ | 4.5, 4.7 |
| B 3 (30 %) | Lige $2\pi$-periodisk funktion ($2$ på $[0, \frac\pi2[$, $0$ i $\frac\pi2$, $-2$ på $]\frac\pi2, \pi]$): skitse, summen i $0$, $\frac\pi2$, $\pi$, punktvis og uniform konvergens, vis Fourierrækken, find $\sum\frac{1}{(2k+1)^2}$ | 6.1 til 6.4 |
| B 4 (20 %) | $3\times 3$ system med egenværdien $2$ (algebraisk multiplicitet 2, geometrisk 1): bestem en løsning af formen $e^{2t}\mathbf u + te^{2t}\mathbf v$, find tre lineært uafhængige løsninger og den fuldstændige reelle løsning | 2.2 (sætning 2.11) |
| B 5 (20 %) | $\sum \frac{1}{1 + n^2x^2}$: konvergent majorant på $\mathbb R$?, majoranten $\sum\frac{1}{n^2}$ på $[1, \infty[$, kontinuitet, $N$ så fejlen er under $0.01$ | 5.4, 4.6 |
| B 6 (5 %) | $a_n \leq b_n$ og $\sum b_n$ betinget konvergent: er $\sum a_n$ betinget konvergent? (argument eller modeksempel) | 4.5, 4.7 |

Løsningen (5 håndskrevne sider) angiver 1.1d, 1.2b, 2.1c og 2.2b i del A. Den henviser til sætningerne med samme numre som slides (fx sætning 2.7, 2.11, 2.12, 5.35, 6.6, 6.16, 6.30 og eksempel 4.34 og 4.39).

### Andre nye sæt i zip-filen
Zip-filen på DTU Learn indeholder ud over de ældre sæt: E25, F26 (17. maj 2026, uden computer), B-E24 og en computerfri omformulering B-E24UdenComputer, A-MC-E24, AogB-F24 (13. maj 2024, se [[Courses/Differential Equations and Infinite Series/Uger/Uge 07 - Potensrækker|uge 7]]), B-F25 og B-E23. Emnerne går igen: systemer med en partikulær løsning af en given form, potensrækkemetoden ($y'' = 5xy$, $y' - 2ty = 0$, $ty' - y = \frac{t^2}{1+t}$, $tx'' + x = -1$), Fourierrækker for stykkevis definerede lige/ulige funktioner, korollar 4.35 og majorantrækker.

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 966 (EkstraOpgaver.pdf).**
For en given parameter $a \in \mathbb{R}$ betragtes det ulineære differentialligningssystem (fortegnene er de eneste der gør $(a, 1)$ stationært og giver opgavens stabilitetsudsagn):

$$\dot x_1 = -x_1 x_2 + a x_2,$$

$$\dot x_2 = -x_1 + x_1 x_2.$$

1. **Eftervisning af stationært punkt $(a, 1)$:**
   Indsæt $x_1 = a$ og $x_2 = 1$ i systemets højreside:
   $$\dot x_1 = -(a)(1) + a(1) = -a + a = 0,$$
   $$\dot x_2 = -(a) + (a)(1) = -a + a = 0.$$
   Da begge afledede er nul, er punktet $(a, 1)$ et stationært punkt for systemet for enhver værdi af $a$.
2. **Jacobimatricen:**
   De partielle afledede findes:
   $$\frac{\partial f_1}{\partial x_1} = -x_2, \qquad \frac{\partial f_1}{\partial x_2} = -x_1 + a,$$
   $$\frac{\partial f_2}{\partial x_1} = -1 + x_2, \qquad \frac{\partial f_2}{\partial x_2} = x_1.$$
   Jacobimatricen for et generelt punkt $(x_1, x_2)$ er:
   $$D\mathbf f(x_1, x_2) = \begin{pmatrix} -x_2 & -x_1 + a \\ -1 + x_2 & x_1 \end{pmatrix}.$$
3. **Linearisering i $(a, 1)$:**
   Indsæt $x_1 = a$ og $x_2 = 1$:
   $$D\mathbf f(a, 1) = \begin{pmatrix} -1 & -a + a \\ -1 + 1 & a \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & a \end{pmatrix}.$$
   Matricen er en diagonalmatrix! Egenværdierne aflæses direkte fra diagonalen:
   $$\lambda_1 = -1, \qquad \lambda_2 = a.$$
4. **Stabilitetsanalyse (sætning 3.7):**
   - For $a > 0$: egenværdien $\lambda_2 = a > 0$ er strengt positiv. Systemet har én negativ og én positiv egenværdi, hvilket svarer til et **saddelpunkt**. Punktet $(a, 1)$ er **ustabilt**.
   - For $a < 0$: begge egenværdier er strengt negative ($\lambda_1 = -1 < 0$ og $\lambda_2 = a < 0$). Punktet $(a, 1)$ er derfor **asymptotisk stabilt** (en stabil knude).
   - For $a = 0$: egenværdien er $\lambda_2 = 0$, og lineariseringen kan ikke afgøre stabiliteten.

**Opgave 436.**
Systemet er $\dot x = x^2 + y^2 - x + 2y + 1$, $\dot y = x - y - 1$.
1. Fra den anden ligning isoleres $y$: $\dot y = 0 \implies y = x - 1$.
2. Dette substitueres ind i den første ligning:
   $$x^2 + (x-1)^2 - x + 2(x-1) + 1 = 0 \iff x^2 + x^2 - 2x + 1 - x + 2x - 2 + 1 = 0 \iff 2x^2 - x = 0.$$
   Dette faktoriseres som $x(2x - 1) = 0$, hvilket giver to løsninger:
   - $x = 0 \implies y = 0 - 1 = -1$, hvilket giver punktet $(0, -1)$.
   - $x = \frac{1}{2} \implies y = \frac{1}{2} - 1 = -\frac{1}{2}$, hvilket giver punktet $(\frac{1}{2}, -\frac{1}{2})$.

## Tjek dig selv

- [ ] Hvordan findes alle stationære punkter, også når ligningssystemet er ulineært?
- [ ] Hvordan opstilles funktionalmatricen, og hvad siger sætning 3.7?
- [ ] Hvad kan sætning 3.7 ikke afgøre (egenværdi med realdel nul)?
- [ ] Hvordan analyseres et 1-dimensionalt system med fortegnslinje og $f'(x_s)$?
- [ ] Hvilket gammelt eksamenssæt er regnet helt igennem under eksamensforhold, uden computer?
- [ ] Hvilke hovedsætninger fra uge 1 til 12 skal kunne bruges uden opslag (se [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|oversigten]])?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 12 - Variable koefficienter og rækkemetoder|Uge 12: Variable koefficienter, potensrække- og Fourierrækkemetoden]]
- [[Courses/Differential Equations and Infinite Series/Past Exams|Gamle eksamenssæt]]
- [[Differential Equations and Infinite Series]]
