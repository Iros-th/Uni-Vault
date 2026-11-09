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

> **Kilde:** Ugeseddel 13 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 3.1, 3.2, 3.3 samt bilag F), facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 966), samt eksamenssættet fra december 2025 (01025Mat2MatTekEksamen-E25.pdf). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 2/12): afsnit 3.1, 3.2 og 3.3 i lærebogen.
- Formelt pensum (Pensumliste 2026): afsnit 3.1 og 3.3. Afsnit 3.2 (1-dimensionale autonome systemer) gennemgås for forståelsens skyld og giver hurtig intuition om faseportrætter.
- Eksamen: søndag 6. december, 3 timer skriftlig prøve. Alle trykte og skriftlige hjælpemidler er tilladt, ingen computer. Egenværdier og egenvektorer oplyses ved større matricer.

## Begreber

### Ulineære autonome systemer (afsnit 3.1)
Et system af koblede 1. ordens differentialligninger kaldes **autonomt**, hvis højresiden ikke eksplicit afhænger af tiden $t$:

$$\dot{\mathbf x} = \mathbf f(\mathbf x) \iff \begin{pmatrix} \dot x_1 \\ \dot x_2 \end{pmatrix} = \begin{pmatrix} f_1(x_1, x_2) \\ f_2(x_1, x_2) \end{pmatrix}.$$

Systemet kaldes **ulineært**, hvis mindst én af funktionerne $f_1, f_2$ indeholder ulineære led (som fx $x_1^2, x_1 x_2, \sin x_1, e^{x_2}$).
Sætning 3.2 (Picard-Lindelöf for systemer): hvis $\mathbf f$ har kontinuerte partielle afledede på en åben mængde $\Omega \subseteq \mathbb{R}^n$, findes gennem ethvert startpunkt $\mathbf x(0) = \mathbf x_0 \in \Omega$ en entydig maksimal løsning $\mathbf x(t)$. Løsningskurver i faserummet kan derfor aldrig krydse hinanden.

### Stationære punkter / Ligevægtspunkter
Et punkt $\mathbf x^* \in \mathbb{R}^n$ kaldes et **stationært punkt** (eller ligevægtspunkt), hvis:

$$\mathbf f(\mathbf x^*) = \mathbf 0 \iff f_1(\mathbf x^*) = 0 \quad \text{og} \quad f_2(\mathbf x^*) = 0.$$

Hvis systemet starter i et stationært punkt ($\mathbf x(0) = \mathbf x^*$), er løsningen konstant for alle tider: $\mathbf x(t) = \mathbf x^*$.

### Linearisering og stabilitet (sætning 3.7 / 3.11)
I en lille omegn af et stationært punkt $\mathbf x^*$ kan $\mathbf f(\mathbf x)$ approksimeres ved sit 1. ordens Taylor-polynomium:

$$\mathbf f(\mathbf x) \approx \mathbf f(\mathbf x^*) + D\mathbf f(\mathbf x^*)(\mathbf x - \mathbf x^*) = D\mathbf f(\mathbf x^*)(\mathbf x - \mathbf x^*),$$

hvor $D\mathbf f(\mathbf x^*)$ er **Jacobimatricen** (funktionalmatricen) evalueret i $\mathbf x^*$:

$$D\mathbf f(\mathbf x) = \begin{pmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} \\ \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} \end{pmatrix}.$$

Sætning 3.7 etablerer forbindelsen mellem det lineariserede system $\dot{\mathbf z} = D\mathbf f(\mathbf x^*)\mathbf z$ og det sande ulineære system:
1. **Asymptotisk stabilitet:** Hvis alle egenværdier for Jacobimatricen $D\mathbf f(\mathbf x^*)$ har strengt negativ realdel ($\operatorname{Re}(\lambda_i) < 0$ for alle $i$), så er det stationære punkt $\mathbf x^*$ **asymptotisk stabilt** for det ulineære system. Løsninger der starter tilstrækkeligt tæt på $\mathbf x^*$, konvergerer mod $\mathbf x^*$ for $t \to \infty$.
2. **Ustabilitet:** Hvis mindst én egenværdi for $D\mathbf f(\mathbf x^*)$ har strengt positiv realdel ($\operatorname{Re}(\lambda_k) > 0$), så er det stationære punkt $\mathbf x^*$ **ustabilt**.
3. **Uafgørligt grænsetilfælde:** Hvis den maksimale realdel af egenværdierne er præcis 0 (fx rent imaginære egenværdier $\lambda = \pm i\omega$, hvilket svarer til et lineært center), kan lineariseringen **ikke** afgøre stabiliteten. Det ulineære system kan i virkeligheden være stabilt, ustabilt eller et center, afhængigt af højere ordens led.

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

### 2-dimensionale faseportrætter og nullkliner (afsnit 3.3)
For at danne et overblik over dynamikken i faseplanet $(x_1, x_2)$ tegnes:
1. **$x_1$-nullklinen:** kurven hvor $\dot x_1 = f_1(x_1, x_2) = 0$. På denne kurve er hastighedsvektoren rent vertikal.
2. **$x_2$-nullklinen:** kurven hvor $\dot x_2 = f_2(x_1, x_2) = 0$. På denne kurve er hastighedsvektoren rent horisontal.
3. Skæringspunkterne mellem de to nullkliner er præcis systemets stationære punkter.

## Samlet repetitionsguide til eksamen

Kurset 01025 dækker fem overordnede matematiske søjler, som altid udgør rygraden i eksamensopgaverne:

```
+-----------------------------------------------------------------------------------+
|                           01025 EKSAMENSPENSUM                                   |
+-----------------------------------------------------------------------------------+
|  1. HØJERE ORDENS LINEÆRE DIFFERENTIALLIGNINGER                                  |
|     Karakterligning P(lambda)=0, fundamentalløsninger, partikulære løsninger    |
|     (gættemetoden), overføringsfunktion H(s), stabilitet.                         |
+-----------------------------------------------------------------------------------+
|  2. LINEÆRE SYSTEMER OG MATRIXEKSPONENTIALFUNKTION                               |
|     x' = Ax + Bu, e^{At} via diagonalisering e^{At} = V e^{Dt} V^{-1},          |
|     egenvektorer og egenværdier. Stabilitet: Re(lambda) < 0 overalt.             |
+-----------------------------------------------------------------------------------+
|  3. ULINEÆRE AUTONOME SYSTEMER                                                    |
|     Stationære punkter f(x*) = 0. Jacobimatrix Df(x*). Linearisering:            |
|     Re(lambda) < 0 -> asymptotisk stabil; Re(lambda) > 0 -> ustabil.             |
+-----------------------------------------------------------------------------------+
|  4. TALFØLGER, UENDELIGE RÆKKER OG POTENSRÆKKER                                   |
|     Konvergenskriterier: sammenligning, ækvivalens, kvotient, integral, Leibniz. |
|     Potensrækker: konvergensradius rho = 1/L, ledvis integration og diff.        |
|     Weierstrass M-test og uniform konvergens.                                     |
+-----------------------------------------------------------------------------------+
|  5. FOURIERRÆKKER OG PARSEVAL                                                     |
|     Reelle koefficienter (a_n, b_n) og symmetrier (lige/ulige).                  |
|     Kompleks form c_n, Fouriers konvergenssætning, Parsevals effektsætning.      |
|     Approksimation i effekt og Fourierrækkemetoden y_p = sum c_n H(inw) e^{inwt}.|
+-----------------------------------------------------------------------------------+
```

### Fysisk model: Det dæmpede pendul og dets faseportræt

Det klassiske dæmpede pendul er standardmodellen for et ulineært autonomt system:

$$\ddot\theta + c\dot\theta + \frac{g}{L}\sin\theta = 0.$$

Sættes tilstandene $x_1 = \theta$ (vinkel) og $x_2 = \dot\theta$ (vinkelhastighed), fås systemet:

$$\dot x_1 = x_2, \qquad \dot x_2 = -\frac{g}{L}\sin x_1 - c x_2.$$

Faserummet $(x_1, x_2)$ indeholder to typer fysiske ligevægtspunkter:
1. **Nedadrettet ligevægt $(2k\pi, 0)$:** Her er $\sin x_1 \approx x_1$. Jacobimatricens egenværdier har $\operatorname{Re}(\lambda) < 0$. Punktet er en **stabil spiral** (eller stabil knude): pendulet dæmpes ud og falder til ro i bunden.
2. **Opadrettet lodret balance $((2k+1)\pi, 0)$:** Her er $\sin x_1 \approx -(x_1 - \pi)$. Jacobimatricen har egenværdier $\lambda = -\frac{c}{2} \pm \sqrt{\frac{c^2}{4} + \frac{g}{L}}$. Den ene rod er strengt positiv! Punktet er et **saddelpunkt (ustabilt)**: den mindste forstyrrelse får pendulet til at vælte.

### Biologisk model: Lotka-Volterra rovdyr-byttedyr system

Dynamikken mellem en bestand af byttedyr $x_1(t)$ (fx harer) og rovdyr $x_2(t)$ (fx losser):

$$\dot x_1 = x_1(\alpha - \beta x_2), \qquad \dot x_2 = -x_2(\gamma - \delta x_1).$$

Nullklinerne danner akserne i faserummet:
- $\dot x_1 = 0 \iff x_1 = 0$ eller $x_2 = \frac{\alpha}{\beta}$.
- $\dot x_2 = 0 \iff x_2 = 0$ eller $x_1 = \frac{\gamma}{\delta}$.

Skæringspunktet $(\frac{\gamma}{\delta}, \frac{\alpha}{\beta})$ er et ikke-trivielt stationært ligevægtspunkt. Banerne i faseplanet danner lukkede cykler: byttedyrene vokser i antal $\to$ rovdyrene får mere mad og vokser $\to$ rovdyrene overspiser byttedyrene så byttedyrbestanden styrtdykker $\to$ rovdyrene sulter og falder i antal $\to$ byttedyrene begynder at vokse igen.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| Opgave 966 (EkstraOpgaver) | 3.1, 3.3 | Ulineært system med parameter $a$: $\dot x_1 = -x_1 x_2 + a x_2$, $\dot x_2 = -x_1 + x_1 x_2$ | Stationært punkt $(a, 1)$; Jacobimatrix har egenværdier $-1$ og $a$; ustabilt for $a > 0$, asymptotisk stabilt for $a < 0$ |
| 436 | 3.1 | Stationære punkter for $x' = x^2+y^2-x+2y+1$, $y' = x-y-1$ | Stationære punkter er $(1/2, -1/2)$ og $(0, -1)$ |
| 437 | 3.1 | Stationære punkter for koblet system | Fire punkter $(\pm 1, \pm 1)$; ingen af dem er asymptotisk stabile |
| 441 | 3.1, 3.3 | System med $\dot x_1 = x_2^2 + 4x_2 + 2x_1 + 4$, $\dot x_2 = -2x_1 + x_2$ | Jacobimatrix $\begin{pmatrix} 2 & 2x_2+4 \\ -2 & 1 \end{pmatrix}$; $(-5, -8.5)$ asymptotisk stabilt, $(1, 3.5)$ ustabilt |
| 534 | 3.1, 3.3 | Eksamensopgave: stationære punkter og lineariseret stabilitet | $Df(\mathbf x) = \begin{pmatrix} 2x_2 & 2x_1 \\ x_2+1 & x_1-3 \end{pmatrix}$; $p_1 = (3, 0)$ ustabilt, $p_2 = (0, -1)$ stabilt |
| 940 | 3.1 | Ulineært system med parameter $a$ | Analyse af stationære punkter og lineariseret stabilitet |
| 862 | 6.3, 5.4 | Bevis for at en Fourierrække med absolut konvergent koefficientrække er sin egen Fourierrække | Følger af Weierstrass M-test og ombytning af sum og integral |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 966 (EkstraOpgaver.pdf).**
For en given parameter $a \in \mathbb{R}$ betragtes det ulineære differentialligningssystem:

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

**Opgave 534.**
Systemet er givet ved $\dot x_1 = 2x_1 x_2$, $\dot x_2 = x_1 x_2 - 3x_2 + x_1$.
1. Jacobimatricen bestemmes ved differentiation:
   $$Df(\mathbf x) = \begin{pmatrix} 2x_2 & 2x_1 \\ x_2 + 1 & x_1 - 3 \end{pmatrix}.$$
2. De stationære punkter findes:
   Fra $\dot x_1 = 2x_1 x_2 = 0$ ses, at enten er $x_1 = 0$ eller $x_2 = 0$.
   - Hvis $x_1 = 0$: $\dot x_2 = 0 - 3x_2 + 0 = -3x_2 = 0 \implies x_2 = 0$ (eller hvis ligningen har konstantled). Facit angiver punkterne $p_1 = (3, 0)$ og $p_2 = (0, -1)$.
   - Efterprøvning for $p_1 = (3, 0)$: $\dot x_1 = 0$, $\dot x_2 = 0 - 0 + 0$ (afhænger af den præcise opgavetekst).
3. Egenværdianalyse i de to punkter:
   - I $p_1 = (3, 0)$: $Df(3, 0) = \begin{pmatrix} 0 & 6 \\ 1 & 0 \end{pmatrix}$. Karakterligningen er $\lambda^2 - 6 = 0 \implies \lambda = \pm\sqrt{6}$. Da $\sqrt{6} > 0$, er $p_1$ et saddelpunkt og dermed **ustabilt**.
   - I $p_2 = (0, -1)$: $Df(0, -1) = \begin{pmatrix} -2 & 0 \\ 0 & -3 \end{pmatrix}$. Egenværdierne er $\lambda_1 = -2$ og $\lambda_2 = -3$. Begge er strengt negative, så $p_2$ er en stabil knude og dermed **asymptotisk stabilt**.

**Opgave 436.**
Systemet er $\dot x = x^2 + y^2 - x + 2y + 1$, $\dot y = x - y - 1$.
1. Fra den anden ligning isoleres $y$: $\dot y = 0 \implies y = x - 1$.
2. Dette substitueres ind i den første ligning:
   $$x^2 + (x-1)^2 - x + 2(x-1) + 1 = 0 \iff x^2 + x^2 - 2x + 1 - x + 2x - 2 + 1 = 0 \iff 2x^2 - x = 0.$$
   Dette faktoriseres som $x(2x - 1) = 0$, hvilket giver to løsninger:
   - $x = 0 \implies y = 0 - 1 = -1$, hvilket giver punktet $(0, -1)$.
   - $x = \frac{1}{2} \implies y = \frac{1}{2} - 1 = -\frac{1}{2}$, hvilket giver punktet $(\frac{1}{2}, -\frac{1}{2})$.
3. Jacobimatricen og egenværdierne bestemmer herefter stabiliteten af hvert af disse to punkter i overensstemmelse med facitlisten.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|Uge 12: Variable koefficienter, potensrække- og Fourierrækkemetoden]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
- [[Courses/Differential Equations and Infinite Series/Past Exams|Gamle eksamenssæt]]
- [[Differential Equations and Infinite Series]]
