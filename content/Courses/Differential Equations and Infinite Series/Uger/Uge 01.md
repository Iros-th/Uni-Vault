---
publish: true
title: "01025 uge 1: n'te ordens ligninger og overføringsfunktion"
course: Differential Equations and Infinite Series
type: week
week: 1
tags:
  - differential-equations
  - ugenote
---

# Uge 1: n'te ordens ligninger og overføringsfunktion


## Læseplan

- Forelæsning (onsdag 2/9): afsnit 1.1 til 1.4 samt appendiks A.2 og A.3.
- Læs selv: begyndelsen af afsnit 1.5, til og med definition 1.29.
- Pensum fra afsnit 1.5 går til og med sætning 1.28 (Pensumliste 2026).

## Begreber

### Lineær differentialligning af n'te orden
En ligning på formen

$$a_0\frac{d^n y}{dt^n} + a_1\frac{d^{n-1} y}{dt^{n-1}} + \dots + a_{n-1}\frac{dy}{dt} + a_n y = u(t),$$

hvor $a_0, \dots, a_n$ er reelle konstanter og $a_0 \neq 0$. Bogen skriver venstresiden kort som $D_n(y)$. Hvis $u = 0$ hedder ligningen **homogen**, ellers **inhomogen**. Funktionen $u$ kaldes påvirkningen og $y$ svaret.

**Eksempel.** $y'' + 3y' + 2y = \cos t$ er en inhomogen ligning af orden 2 med $a_0 = 1$, $a_1 = 3$, $a_2 = 2$.

### Linearitet og løsningsrummet (sætning 1.4 og 1.5)
Hvis $y_1$ og $y_2$ løser den homogene ligning, så gør $c_1 y_1 + c_2 y_2$ det også. Løsningerne til $D_n(y) = 0$ udgør derfor et vektorrum, og sætning 1.5 siger at dimensionen er præcis $n$. Man skal altså finde $n$ lineært uafhængige løsninger for at have dem alle.

### Differentialoperatoren $D$ (slides, appendiks A.3)
Slides skriver venstresiden som en operator: $D f = f'$, $D^2 f = f''$, og $D_n = a_0D^n + a_1D^{n-1} + \dots + a_n$ er en afbildning $C^\infty(\mathbb R) \to C^\infty(\mathbb R)$. Alle disse operatorer er lineære, og derfor hedder ligningen lineær. Lighedstegnet i $D_n(y) = u$ er en identitet mellem funktioner, ikke mellem funktionsværdier. Faktorerne $(D - a)$ og $(D - b)$ kommuterer, så faktoriseringen af $P(\lambda)$ giver en faktorisering af operatoren:

$$D_n = a_0(D - \lambda_1)^{p_1}(D - \lambda_2)^{p_2}\cdots(D - \lambda_k)^{p_k}.$$

**Eksempel.** $(D - 1)(D - 2)f = (D - 1)(f' - 2f) = f'' - 2f' - f' + 2f = f'' - 3f' + 2f$, altså $(D-1)(D-2) = D^2 - 3D + 2$, som svarer til $P(\lambda) = (\lambda - 1)(\lambda - 2)$. Regner man $(D-2)(D-1)f$ ud, får man det samme.

Sætning 1.6 har også en anden del: løsninger $e^{\lambda t}$ hørende til forskellige rødder er lineært uafhængige. Beviset er opgave 905 i miniprojekt 1.

### Karakterligningen og $e^{\lambda t}$ (sætning 1.6)
Indsætter man $y = e^{\lambda t}$ i den homogene ligning, får man $e^{\lambda t}P(\lambda) = 0$, hvor

$$P(\lambda) = a_0\lambda^n + a_1\lambda^{n-1} + \dots + a_n$$

er det karakteristiske polynomium. Så $e^{\lambda t}$ er en løsning netop når $P(\lambda) = 0$.

**Eksempel.** $y''' - y' = 0$ giver $P(\lambda) = \lambda^3 - \lambda = \lambda(\lambda - 1)(\lambda + 1)$, rødderne $0, 1, -1$, og den fuldstændige løsning

$$y(t) = c_1 + c_2 e^{t} + c_3 e^{-t}.$$

### Komplekse rødder og reelle løsninger (lemma 1.8, sætning 1.9)
Har ligningen reelle koefficienter, kommer komplekse rødder i par $a \pm i\omega$. Hvis $y$ er en kompleks løsning, er både $\operatorname{Re} y$ og $\operatorname{Im} y$ reelle løsninger (lemma 1.8). Roden $a + i\omega$ giver derfor de to reelle løsninger $e^{at}\cos(\omega t)$ og $e^{at}\sin(\omega t)$, og den konjugerede rod giver ikke noget nyt.

**Eksempel.** $y'' + 2y' + 5y = 0$: $\lambda^2 + 2\lambda + 5 = 0$ giver $\lambda = -1 \pm 2i$, så

$$y(t) = e^{-t}\bigl(c_1\cos 2t + c_2 \sin 2t\bigr).$$

### Rødder med multiplicitet (sætning 1.14 og 1.15)
Er $\lambda$ en rod med algebraisk multiplicitet $p$, giver den de $p$ lineært uafhængige løsninger $e^{\lambda t}, te^{\lambda t}, \dots, t^{p-1}e^{\lambda t}$. Sætning 1.15 samler det hele: den fuldstændige løsning er en linearkombination af alle disse funktioner fra alle rødder.

**Eksempel.** $y'' - 4y' + 4y = 0$ har $P(\lambda) = (\lambda - 2)^2$, dobbeltrod $2$, og $y(t) = (c_1 + c_2 t)e^{2t}$.

**Eksempler fra slides.** $y'''' - y''' + y'' - y' = 0$ har $P(\lambda) = \lambda(\lambda - 1)(\lambda^2 + 1)$, rødderne $0, 1, \pm i$, og den reelle løsning $y = c_1 + c_2e^{t} + c_3\cos t + c_4\sin t$. Og $y''' + 2y'' + y' = 0$ har $P(\lambda) = \lambda(\lambda + 1)^2$, så $y = c_1 + (c_2 + c_3t)e^{-t}$. Slides bemærker at multiple rødder sjældent opstår "tilfældigt", men kan være ønskede i design.

### Eksistens og entydighed (sætning 1.18)
Er $u$ kontinuert på et interval $I$, har begyndelsesværdiproblemet med $y(t_0), y'(t_0), \dots, y^{(n-1)}(t_0)$ givet præcis én løsning.

**Eksempel.** $y'' + y = 0$ med $y(0) = 1$, $y'(0) = 0$: fuldstændig løsning $c_1\cos t + c_2\sin t$, betingelserne giver $c_1 = 1$, $c_2 = 0$, så den ene løsning er $y = \cos t$.

### Struktursætningen og gættemetoden (sætning 1.20)
Den fuldstændige løsning til den inhomogene ligning er én partikulær løsning plus den fuldstændige løsning til den homogene ligning: $y = y_0 + y_{\text{hom}}$. En partikulær løsning findes ofte ved at gætte en løsning af samme type som $u$ (polynomium, eksponentialfunktion, cosinus/sinus).

**Eksempel.** $y'' + y = t$. Gæt $y_0 = at + b$: så er $y_0'' + y_0 = at + b = t$, altså $a = 1$, $b = 0$. Fuldstændig løsning: $y = t + c_1\cos t + c_2\sin t$.

**Når gættet rammer den homogene løsning (slide 32).** Er gættet selv en løsning til den homogene ligning, ganges det med $t^p$, hvor $p$ er multipliciteten af den rod det svarer til. Det følger af opgave 904. **Eksempel.** $y''' + 2y'' + y' = 1$: en konstant er homogen løsning (roden $0$ er simpel), så gæt $y_0 = at$. Så er $y_0''' + 2y_0'' + y_0' = a = 1$, og $y_0 = t$.

### Superpositionsprincippet (sætning 1.23)
Hvis $y_1$ svarer til påvirkningen $u_1$ og $y_2$ til $u_2$, så svarer $c_1 y_1 + c_2 y_2$ til $c_1 u_1 + c_2 u_2$. Det bruges når højresiden er en sum, fx i opgave 309 (4).

### Overføringsfunktion og stationært svar (afsnit 1.4, sætning 1.25)
For ligningen $a_0 y^{(n)} + \dots + a_n y = b_0 u^{(m)} + \dots + b_m u$ er overføringsfunktionen

$$H(s) = \frac{b_0 s^m + \dots + b_m}{a_0 s^n + \dots + a_n} = \frac{Q(s)}{P(s)}.$$

Når $u(t) = e^{st}$ og $s$ ikke er rod i $P$, er $y(t) = H(s)e^{st}$ en løsning, det stationære svar.

**Eksempel.** $y'' + 3y' + 2y = u$ har $H(s) = \dfrac{1}{s^2 + 3s + 2}$. Påvirkningen $u = e^{t}$ har $s = 1$, som ikke er rod, så det stationære svar er $y = H(1)e^{t} = \tfrac{1}{6}e^{t}$.

### Cosinus-påvirkning (sætning 1.27)
Hvis $i\omega$ ikke er rod, giver $u(t) = \cos(\omega t)$ det stationære svar

$$y(t) = \operatorname{Re}\bigl(H(i\omega)e^{i\omega t}\bigr) = |H(i\omega)|\cos\bigl(\omega t + \operatorname{Arg} H(i\omega)\bigr).$$

**Eksempel.** $y' + y = \cos t$: $H(s) = \frac{1}{s+1}$ og $H(i) = \frac{1}{1+i} = \frac{1-i}{2}$. Så $|H(i)| = \frac{1}{\sqrt 2}$, $\operatorname{Arg} H(i) = -\frac{\pi}{4}$ og $y = \frac{1}{\sqrt 2}\cos(t - \frac{\pi}{4}) = \frac12(\cos t + \sin t)$. Tjek: $y' + y = \frac12(-\sin t + \cos t) + \frac12(\cos t + \sin t) = \cos t$.

### Frekvenskarakteristikker (starten af afsnit 1.5)
Amplitudekarakteristikken er $A(\omega) = |H(i\omega)|$ og fasekarakteristikken $\varphi(\omega) = \operatorname{Arg} H(i\omega)$. De fortæller hvor meget en svingning med vinkelfrekvens $\omega$ forstærkes og forskydes. I eksemplet ovenfor er $A(\omega) = 1/\sqrt{1+\omega^2}$ og $\varphi(\omega) = -\arctan\omega$.

### Lineær uafhængighed (appendiks A.2)
Funktionerne $f_1, \dots, f_k$ er lineært uafhængige, hvis $c_1 f_1(t) + \dots + c_k f_k(t) = 0$ for alle $t$ kun har løsningen $c_1 = \dots = c_k = 0$. Start altid med en vilkårlig linearkombination sat lig nul (det er også vinket til opgave 913).

**Eksempel.** $c_1 e^{t} + c_2 e^{2t} = 0$ for alle $t$. Sæt $t = 0$: $c_1 + c_2 = 0$. Differentiér og sæt $t = 0$: $c_1 + 2c_2 = 0$. Trækkes de fra hinanden, fås $c_2 = 0$ og så $c_1 = 0$.

### Appendiks A.3 (lemma A.13 og A.14)
Lemma A.13: hvis $(D - \lambda_j)^{p_j}y = 0$, så er $D_n(y) = 0$, fordi faktoren kan flyttes helt til højre i faktoriseringen. Lemma A.14 (= opgave 904): $(D - \lambda)^p y = 0$ har de $p$ lineært uafhængige løsninger $e^{\lambda t}, \dots, t^{p-1}e^{\lambda t}$. Nøglen er operatoridentiteten $(D - \lambda)(e^{\lambda t}u) = e^{\lambda t}u'$. Tilsammen beviser de sætning 1.14 og 1.15.

## Opgaver

Alle numre er fra opgavesamlingen bagerst i lærebogen (bilag F). Facitlisten (facitliste_studerende.pdf) har svar til øvelsesopgaverne i bogen.

**Opvarmningsopgave** (ugesedlen): hvad kan man ud fra en graf af en løsning sige om ligningen, rødderne i karakterligningen, ordenen og om der er periodiske løsninger?

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| Möbius-opgave | 1.1 til 1.4 | Elektronisk opgave i Möbius |
| 306 | 1.2 | Alle komplekse og alle reelle løsninger til $y^{(4)} + 2y^{(2)} + y = 0$. Ugesedlen: karakterligningen er en andengradsligning i $\lambda^2$. |
| 320 (ii), (iii) | 1.4 | Overføringsfunktion for $y^{(4)} + 6y'' + 25y = u' + 3u$ og svar på $u = e^{-t}$ og $u = e^{t}\cos t$. Ugesedlen: begge kan regnes på mere end én måde. |
| 317 | 1.2, 1.3 | Fuldstændig reel løsning til $y^{(4)} + 10y'' + 169y = 0$ og den løsning med $f(0) = 0$, $f'(0) = 1$, $f(t) \to 0$. |
| 312 | 1.3 | Har $y' - 2y = e^{2t}$ en løsning $Ce^{2t}$? (Hvad sker der når påvirkningen "rammer" en rod.) |
| 904 (i) til (iii) (vigtig) | A.3 | Bevis for lemma A.14 via $(D-\lambda)(e^{\lambda t}u) = e^{\lambda t}u'$. Ugesedlen spørger: hvad har det med gættemetoden at gøre? |
| 913 | A.2 | Vis at $u_1 + u_2$ og $u_1 - u_2$ er lineært uafhængige hvis $u_1, u_2$ er. |
| 309 (1), (3), (4), hvis tid | 1.3 | Gættemetoden på $\ddot y + 5\dot y - 6y = \cos 2t$ og $\sin 2t$; (3) og (4) skal blot forklares i ord (superposition). |
| 904 (iv), hvis tid | A.3 | Lineær uafhængighed af $e^{\lambda t}, \dots, t^{p-1}e^{\lambda t}$. |

> [!note] Rødderne i opgave 317
> Ugesedlen angiver rødderne $\lambda = \pm(1 \pm 3i)$; det passer ikke med ligningen. $\lambda^4 + 10\lambda^2 + 169 = 0$ giver $\lambda^2 = -5 \pm 12i$ og dermed $\lambda = \pm(2 \pm 3i)$, fordi $(2+3i)^2 = -5 + 12i$. Facitlisten (facitliste_studerende.pdf) bekræfter det: den reelle løsning er bygget af $e^{\pm 2t}\cos 3t$ og $e^{\pm 2t}\sin 3t$, og den søgte løsning er $f(t) = \frac13 e^{-2t}\sin 3t$ (den løser ligningen, og $f(0) = 0$, $f'(0) = 1$).

**Hjemmeopgavesæt 1:** Möbius, frist tirsdag 9/9 kl. 20. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**Løsningsnoter:** WeekleyNotes1.pdf (under uge 2 på DTU Learn) løser opgave 904 (i) til (iii): (i) direkte udregning af $(D-\lambda)(e^{\lambda t}u) = e^{\lambda t}u'$, (ii) gentag (i) $m$ gange og få $(D-\lambda)^m(e^{\lambda t}u) = e^{\lambda t}u^{(m)}$, (iii) sæt $u = t^k$ med $k < p$, så $u^{(p)} = 0$. Facit til 306, 309, 317 og 320 står i facitliste_studerende.pdf.

## Tjek dig selv

- [ ] Hvordan opskrives karakterligningen direkte ud fra en $n$'te ordens ligning?
- [ ] Hvordan fås reelle løsninger fra komplekse rødder $a \pm i\omega$, og hvorfor er det lovligt (lemma 1.8)?
- [ ] Hvilke løsninger giver en dobbeltrod eller en tripelrod?
- [ ] Hvorfor er $y = y_0 + y_{\text{hom}}$ alle løsninger (struktursætningen)?
- [ ] Hvordan findes $H(s)$, og hvordan bruges den til stationære svar på $e^{st}$ og på $\cos\omega t$?
- [ ] Hvad går galt når $s$ er rod i karakterligningen (opgave 312), og hvad gør gættemetoden så?
- [ ] Hvordan vises lineær uafhængighed ved at starte med en vilkårlig linearkombination lig nul?
- [ ] Hvordan beregnes amplitude- og fasekarakteristik for en simpel ligning?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 02|Uge 2: Systemer af differentialligninger]]
- [[Differential Equations and Infinite Series]]
