---
publish: true
title: "01025 uge 3: Overføringsfunktion for systemer og stabilitet"
course: Differential Equations and Infinite Series
type: week
week: 3
tags:
  - differential-equations
  - ugenote
---

# Uge 3: Overføringsfunktion for systemer og stabilitet

> **Kilde:** ugeseddel 3, SlidesUge3.pdf, WeeklyNotes3.pdf, facitliste_studerende.pdf, EkstraOpgaver.pdf (opgave 701) (DTU Learn, 01025 E26); lærebogen afsnit 2.6 til 2.8. Ugesedlen nævner appendiks "A.2 og A.6"; i den ældre bog-PDF står stabilitetsbeviserne i A.5. Sætningsnumre som i slides, se [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|oversigten]].

## Læseplan

- Forelæsning: afsnit 2.6 og 2.8 samt appendiks om lineær algebra og stabilitet.
- Læs selv: afsnit 2.7 (frekvenskarakteristikker for systemer; ikke på pensumlisten).
- Multiple choice: til eksamen er der MC-opgaver hvor udregninger/argumenter også skal noteres. Øv på 701 i EkstraOpgaver.pdf.

## Begreber

### Overføringsfunktion for et system (afsnit 2.6, sætning 2.22)
Slides' motivation: ofte kan kun nogle koordinater påvirkes og kun nogle måles, så input er en fast vektor $\mathbf b$ gange en skalar $u$, og output er en fast linearkombination $y = \mathbf d^\top\mathbf x$. Det stationære svar er intuitivt systemets opførsel efter indsvingningsforløbet. Systemet $\dot{\mathbf x} = A\mathbf x + \mathbf b u$, $y = \mathbf d^\top\mathbf x$ med $u = e^{st}$ har, når $\det(A - sI) \neq 0$, løsningen $\mathbf x(t) = -(A - sI)^{-1}\mathbf b\,e^{st}$ (det er udsagnet i opgave 915). Svaret er så $y = H(s)e^{st}$ med

$$H(s) = -\mathbf d^\top (A - sI)^{-1}\mathbf b.$$

**Eksempel.** $A = \begin{pmatrix}-1&0\\0&-2\end{pmatrix}$, $\mathbf b = (1,1)^\top$, $y = x_1 + x_2$. Da $A - sI$ er diagonal, er $(A - sI)^{-1} = \operatorname{diag}\bigl(\tfrac{1}{-1-s}, \tfrac{1}{-2-s}\bigr)$ og

$$H(s) = \frac{1}{s+1} + \frac{1}{s+2}, \qquad s \neq -1, -2.$$



### Stationært svar på $\cos\omega t$
Ligesom for $n$'te ordens ligninger: er $\det(A - i\omega I) \neq 0$, giver $u = \cos\omega t$ svaret $y = \operatorname{Re}\bigl(H(i\omega)e^{i\omega t}\bigr)$.

### Kursets hovedresultat i miniformat (slides, "guitareksemplet")
Er en periodisk påvirkning en endelig sum $u(t) = \sum_{n=-N}^{N}c_ne^{int}$, og rammer ingen af tallene $in$ en egenværdi, så giver superpositionsprincippet svaret

$$y(t) = \sum_{n=-N}^{N}c_nH(in)e^{int}.$$

Senere i kurset må $N \to \infty$, hvis systemet er stabilt (indsvingningerne dør ud) og $u$ kun har endeligt meget energi. Det er Fourierrækkemetoden i uge 12.

**Eksempel.** $y' + y = u$ med $u = e^{it} + e^{-it} = 2\cos t$ og $H(s) = \frac{1}{s+1}$: $y = \frac{1}{1+i}e^{it} + \frac{1}{1-i}e^{-it} = \cos t + \sin t$.

### Begrænset vektorfunktion (slides)
$\mathbf x : I \to \mathbb C^n$ er begrænset, hvis hver koordinat er begrænset ($|x_i(t)| \leq K_i$), eller ækvivalent hvis længden er begrænset ($\|\mathbf x(t)\| \leq K$). De to definitioner er ækvivalente, fordi $|x_i| \leq \|\mathbf x\| \leq |x_1| + \dots + |x_n|$.

### Stabilitet: definitioner (afsnit 2.8, definition 2.28)
Det homogene system $\dot{\mathbf x} = A\mathbf x$ er **stabilt**, hvis alle løsninger er begrænsede for $t \geq t_0$, og **asymptotisk stabilt**, hvis alle løsninger går mod $\mathbf 0$ for $t \to \infty$. Ellers er det **ustabilt**. Asymptotisk stabil medfører stabil. Slides: i litteraturen hedder det "marginalt stabilt" og "internt stabilt". Definition 2.28 gælder kun homogene lineære systemer med konstante koefficienter; den generelle definition er definition 3.6 (uge 13), og for disse systemer er de to ækvivalente.

### Størrelsesforhold (lemma A.4)
For $a > 0$ og $b > 1$ gælder $\frac{x^a}{b^x} \to 0$ og $\frac{\ln x}{x^a} \to 0$ for $x \to \infty$. Løsningerne er summer af led af typen polynomium$(t)\,e^{\operatorname{Re}(\lambda)t}$ gange cosinus/sinus. Sådan et led går mod $0$ hvis $\operatorname{Re}\lambda < 0$, er begrænset hvis $\operatorname{Re}\lambda = 0$ og polynomiet er konstant, og er ellers ubegrænset. At polynomiet er konstant for alle $\operatorname{Re}\lambda = 0$ svarer præcis til at algebraisk og geometrisk multiplicitet er ens. Det er hele idéen bag stabilitetssætningerne.

**Eksempel.** $t^{10}e^{-0.1t} \to 0$, fordi $\frac{t^{10}}{(e^{0.1})^t}$ har formen $\frac{x^a}{b^x}$ med $b = e^{0.1} > 1$.

### Stabilitetssætningerne (sætning 2.36 og 2.38)
- Sætning 2.38: asymptotisk stabilt netop når alle egenværdier har negativ realdel.
- Sætning 2.36: stabilt netop når (i) ingen egenværdi har positiv realdel, og (ii) enhver egenværdi med realdel nul har samme algebraiske og geometriske multiplicitet.
- Korollar 2.37: med $n$ forskellige egenværdier er systemet stabilt netop når ingen egenværdi har positiv realdel.

**Eksempel 1.** $A = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$ har $\lambda = \pm i$, to forskellige med realdel nul: stabilt, men ikke asymptotisk stabilt (løsningerne er cosinus og sinus).

**Eksempel 2.** $A = \begin{pmatrix}0&1\\0&0\end{pmatrix}$: $\lambda = 0$ er dobbeltrod med kun én egenvektor. Løsningerne er $x_1 = c_1 + c_2 t$, $x_2 = c_2$, så $x_1$ er ubegrænset: ustabilt.

### Routh-Hurwitz' kriterium (sætning 2.41 og korollarerne efter den)
Man kan afgøre om alle rødder har negativ realdel uden at finde dem. Slides' generelle form: alle rødder i $\lambda^n + a_1\lambda^{n-1} + \dots + a_n$ har negativ realdel netop når (i) alle $a_k > 0$ og (ii) alle Hurwitz-determinanter $D_k$, $k = 2, \dots, n-1$, er positive (matricen har $a_1, a_3, a_5, \dots$ i første række, $1, a_2, a_4, \dots$ i anden, og forskydes derefter én plads; $a_p = 0$ for $p > n$). Specialtilfældene:
- $\lambda^2 + a_1\lambda + a_2$: alle rødder har negativ realdel netop når $a_1 > 0$ og $a_2 > 0$.
- $\lambda^3 + a_1\lambda^2 + a_2\lambda + a_3$: netop når $a_1 > 0$, $a_3 > 0$ og $a_1 a_2 > a_3$.

**Eksempel.** $\lambda^3 + 2\lambda^2 + 3\lambda + 1$: $a_1 = 2 > 0$, $a_3 = 1 > 0$ og $a_1a_2 = 6 > 1$, så systemet er asymptotisk stabilt. (Numerisk har rødderne realdel cirka $-0.78$ og $-0.43$.)

**Eksempel fra slides.** $A = \begin{pmatrix}0&2&0\\a&0&-1\\0&1&-1\end{pmatrix}$ har $\det(\lambda I - A) = \lambda^3 + \lambda^2 + (1 - 2a)\lambda - 2a$. Routh-Hurwitz: $a_1 = 1 > 0$, $a_3 = -2a > 0$ kræver $a < 0$, og $a_1a_2 > a_3$ er $1 - 2a > -2a$, som altid gælder. Altså asymptotisk stabilt netop når $a < 0$. For $a = 0$ er polynomiet $\lambda(\lambda^2 + \lambda + 1)$ med tre forskellige rødder $0$ og $-\frac12 \pm \frac{\sqrt3}{2}i$: stabilt, men ikke asymptotisk stabilt. For $a > 0$ er $P(0) = -2a < 0$, så der er en positiv reel rod: ustabilt. Slides' morale: man kan ikke på forhånd vide hvordan stabilitet bedst undersøges (for en øvre trekantsmatrix aflæser man bare egenværdierne på diagonalen).

### Beviset for stabilitetssætningen (lemma A.17 til A.19)
Bogens bevis for sætning 2.36 deles i lemmaer: A.17 ($e^{\lambda t}\mathbf v$ med reel $\lambda$ er begrænset netop når $\lambda \leq 0$), A.18 ($n$ forskellige reelle egenværdier: stabilt netop når alle $\lambda_k \leq 0$) og A.19 ($n$ forskellige egenværdier: stabilt netop når alle $\operatorname{Re}\lambda_k \leq 0$).

### Spor og determinant for $2 \times 2$ (opgave 925)
For en $2\times 2$ matrix er det karakteristiske polynomium $\lambda^2 - \operatorname{tr}(A)\lambda + \det A$, så Routh-Hurwitz giver: asymptotisk stabilt netop når $\det A > 0$ og $\operatorname{tr} A < 0$. (Det er opgave 925 på ugeseddel 5.)

### MC-eksempel: opgave 701 (facit står på ugeseddel 4: svar 3 og 4)
Ligningen $y''' + y'' + 2y' + 2y = u' + u$ har

$$H(s) = \frac{s+1}{s^3 + s^2 + 2s + 2} = \frac{s+1}{(s+1)(s^2+2)} = \frac{1}{s^2+2}, \quad s \notin \{-1, \pm i\sqrt2\}.$$

Påvirkningen $u = \sin 2t = \operatorname{Im}(e^{2it})$ giver $H(2i) = \frac{1}{-4+2} = -\frac12$, så $y = -\frac12\sin 2t$. Pas på definitionsmængden: den er stadig bestemt af nævneren før forkortning.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 701 (MC) | 1.4 | Overføringsfunktion og stationært svar (se eksemplet ovenfor; facit på ugeseddel 4). |
| 411 (iii), (iv) | 2.8 | Er $3\times 3$-systemet fra sidste uge stabilt og asymptotisk stabilt? |
| 422 (i), (ii) | 2.8 | Stabilitet af to systemer. Ugesedlen oplyser egenværdierne: $\frac{-1 \pm \sqrt{93}}{2}$ i (i) og cirka $-0.3686 \pm 1.9158i$ og $-0.2627$ i (ii). |
| 919 | 1.4 | Hvad sker der når $s$ er rod i karakterligningen? Ligningen $y'' - y = u' + u$. Til (iv): sætning 2.20/eksempel 2.21 (ugesedlens numre) eller gæt som på slide 32 i SlidesUge1 (gang gættet med $t$, se uge 1). |
| 417 | 2.6 | Overføringsfunktion for et $2\times 2$ system og stationært svar på $u = \cos t$. Ugesedlen henviser til formlen for den inverse $2\times 2$ matrix bagest i bogen. |
| 507 | 2.8 | Asymptotisk stabilitet af $\begin{pmatrix}a&2\\a&1\end{pmatrix}$ afhængigt af $a$. Vink til (iii): skriv rødderne op og se på fortegnene. |

**Hjemmeopgavesæt 3:** Möbius senest 22/9 kl. 20, og opgave 915 (afsnit 2.6, bevis for løsningsudtrykket (2.34): $\mathbf x_0 e^{st}$ er løsning netop når $\mathbf x_0 = -(A - sI)^{-1}\mathbf b$) afleveres fysisk 23/9 kl. 8. Bedømt aflevering.

**Løsningsnoter:** WeeklyNotes3.pdf (under uge 4 på DTU Learn) løser opgave 919. Nøgleidéer: forkort $H(s) = \frac{s+1}{s^2-1} = \frac{1}{s-1}$ men behold definitionsmængden $s \neq \pm 1$; for $u = e^{-t}$ er højresiden $u' + u = 0$, så ligningen bliver homogen; for $u = e^{t}$ (roden $1$) findes den partikulære løsning $te^{t}$ med formlen for reduktion af orden (sætning 1.31 i den ældre PDF); en sum af påvirkninger løses led for led med superposition, hvor leddet der rammer en rod skal behandles for sig. Facit til 411, 417, 422 og 507 står i facitliste_studerende.pdf.

Miniprojekt 1 stilles i uge 4; ifølge ugesedlen kan opgave 1 (i) til (iv) og opgave 3 laves allerede i uge 3.

## Tjek dig selv

- [ ] Kan jeg udlede $H(s) = -\mathbf d^\top(A - sI)^{-1}\mathbf b$ fra gættet $\mathbf x = \mathbf x_0 e^{st}$?
- [ ] Kan jeg skelne stabil og asymptotisk stabil, og give et eksempel på stabil men ikke asymptotisk stabil?
- [ ] Ved jeg hvorfor en egenværdi med realdel nul og for få egenvektorer giver ustabilitet?
- [ ] Kan jeg bruge Routh-Hurwitz på et 2. og 3. grads polynomium?
- [ ] Kan jeg bruge spor og determinant til at afgøre stabilitet af et $2\times 2$ system?
- [ ] Husker jeg definitionsmængden for $H(s)$, også når der kan forkortes?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 02|Uge 2]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 04|Uge 4: Stabilitet og uendelige rækker]]
