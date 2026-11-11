---
publish: true
title: "01025 uge 11: Effekt, Fouriers sætning og miniprojekt 2"
course: Differential Equations and Infinite Series
type: week
week: 11
tags:
  - differential-equations
  - ugenote
---

# Uge 11: Effekt, Fouriers sætning og miniprojekt 2

> **Kilde:** ugeseddel 11, facitliste_studerende.pdf, EkstraOpgaver.pdf (opgave 709) (DTU Learn, 01025 E26); lærebogen afsnit 7.3, lemma 6.5 og appendiks om Fouriers sætning. Ingen slides til uge 11 på DTU Learn. Ugesedlen henviser til "proposition A.32" og "A.10, siderne 224 til 230"; i den ældre bog-PDF svarer det til appendiks A.9 og propositionerne A.25 til A.30 (opgave 872 nævner selv proposition A.28). Semesteroversigten på ugeseddel 1 lægger Parseval og Fourierrækkemetoden (6.4 og 7.2) i denne uge; ifølge ugeseddel 10 og 12 gennemgås de i uge 10 og 12.

## Læseplan

- Forelæsning (onsdag 18/11): afsnit 7.3, opgave 863 (i) og (iv), og dele af beviset for Fouriers sætning.
- Øvelserne er erstattet af **miniprojekt 2**, fysisk aflevering senest 25/11 kl. 8.
- Spørgetid til miniprojektet: mandag 23/11 kl. 12 på Peters kontor.

## Begreber

### Effekt (afsnit 7.3)
Effekten af en $2\pi$-periodisk funktion er middelværdien af $|f|^2$ over en periode:

$$P(f) = \frac{1}{2\pi}\int_{-\pi}^\pi |f(t)|^2\,dt.$$

Ifølge Parseval (sætning 6.30) er

$$P(f) = \sum_{n=-\infty}^\infty |c_n|^2 = \frac{1}{4}|a_0|^2 + \frac{1}{2}\sum_{n=1}^\infty \bigl(|a_n|^2 + |b_n|^2\bigr).$$

Frekvensen $n \geq 1$ bidrager med $\frac12(|a_n|^2 + |b_n|^2) = |c_n|^2 + |c_{-n}|^2$, og konstantleddet med $\frac14|a_0|^2 = |c_0|^2$.

### Approksimation i effekt (sætning 7.12)
Afsnitssummen har effekten $P(S_N) = \sum_{n=-N}^N |c_n|^2 \leq P(f)$. For $0 < \delta < 1$ gælder

$$\frac{P(S_N)}{P(f)} \ge \delta \iff \sum_{|n| > N} |c_n|^2 \le (1 - \delta)P(f) \iff \sum_{n=N+1}^\infty \bigl(|a_n|^2 + |b_n|^2\bigr) \le 2(1 - \delta)P(f).$$

Spørgsmålet "hvor mange led skal med for at få $90\,\%$ af effekten?" er altså et spørgsmål om halen af $\sum |c_n|^2$.

**Eksempel.** Firkantbølgen fra uge 9 har $P(f) = 1$, $a_n = 0$ og $b_n = \frac{4}{n\pi}$ for ulige $n$. For $N = 1$ er $P(S_1) = \frac12\left(\frac4\pi\right)^2 = \frac{8}{\pi^2} \approx 0.8106$. For $N = 2$ er $b_2 = 0$, så intet ændres. For $N = 3$ er $P(S_3) = \frac{8}{\pi^2}\left(1 + \frac19\right) \approx 0.9006$. Altså giver $N = 3$ (leddene $\sin t$ og $\sin 3t$) mindst $90\,\%$ af effekten.

### Idéen i beviset for Fouriers sætning (appendiks)
Beviset deles i trin. Først vises konvergens i ét punkt, $x = 0$, under ekstra antagelser om $f$ omkring $0$. Afsnitssummen i $0$ kan skrives som et integral med Dirichlets kerne:

$$S_N(0) = \frac12a_0 + \sum_{n=1}^N a_n = \frac{1}{\pi}\int_{-\pi}^\pi f(t)D_N(t)\,dt, \qquad D_N(t) = \frac12 + \sum_{n=1}^N \cos(nt) = \frac{\sin\bigl((N + \frac12)t\bigr)}{2\sin(t/2)}.$$

Bagefter flyttes resultatet til et vilkårligt punkt $u$ ved at se på $\varphi(x) = f(x + u)$. Det kræver at man ved hvordan Fourierkoefficienterne ændres når koordinatsystemet forskydes; det er indholdet af opgave 872, hvor det skal vises at

$$\int_{-\pi}^{\pi}\varphi(x)e^{-inx}dx = e^{inu}\int_{-\pi}^{\pi}f(y)e^{-iny}dy.$$

Regel (R1) i lemma 6.5 (integralet over en hel periode afhænger ikke af hvor perioden starter) er det der gør substitutionen lovlig.

## Miniprojekt 2

Tæller 2 % af karakteren. Bedømt aflevering.

- **Projektopgave 1:** læs beviset for propositionen i appendiks (ugesedlens A.32), løs opgave 872 og tillægsspørgsmål (iv) om at $\frac12(|a_n|^2 + |b_n|^2)$ ikke ændres ved forskydning.
- **Projektopgave 2:** opgave 518 (i) og (ii) i bogen: en funktion med $a_n = 0$ og $b_n = \frac1{n^3}$, Fourierrækken på kompleks form og en afsnitssum med fejl $\leq 0.1$.
- **Projektopgave 3:** vis at en ulige $2\pi$-periodisk funktion, givet på $[0,\pi]$ ved en kontinuert differentiabel $g$ med $g(0) = g(\pi) = 0$, er kontinuert og kontinuert differentiabel.
- **Projektopgave 4:** systemet $\dot{\mathbf x} = \begin{pmatrix}1&-1\\3&-2\end{pmatrix}\mathbf x + \begin{pmatrix}1\\1\end{pmatrix}u$, $y = x_1 + 2x_2$: asymptotisk stabilitet, overføringsfunktion, løsning som Fourierrække (Fourierrækkemetoden, sætning 7.8, se [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|uge 12]]), fejlvurdering og valg af $N$ så fejlen er højst $0.001$, og plots.

Ugesedlens CAS-råd: plot realdelen af afsnitssummen på kompleks form, efter at have tjekket at imaginærdelen er på størrelse med maskinnøjagtigheden.

## Opgaver

Ingen almindelige øvelsesopgaver; ugen bruges på miniprojekt 2 (opgave 872 og 518 indgår i det). Ingen hjemmeopgavesæt ud over Möbius-sæt 9 fra uge 10.

**MC:** svaret på 708 er 1. Ugens MC-opgave er 709 (EkstraOpgaver.pdf): er $\sum_{n=1}^\infty (-1)^{n-1}\frac{n}{n^2+1}$ divergent, absolut eller betinget konvergent, og hvilket $N$ giver fejl højst $0.01$? Facit (ugeseddel 12): 3 i både (a) og (b), dvs. betinget konvergent og $N = 99$. Leibniz kræver $\frac{N+1}{(N+1)^2 + 1} \leq 0.01$; for $N = 99$ er venstresiden $\frac{100}{10001} \approx 0.009999$, for $N = 95$ er den $\frac{96}{9217} \approx 0.0104$.

## Tjek dig selv

- [ ] Hvordan defineres effekten $P(f)$, og hvordan hænger den sammen med Parseval?
- [ ] Hvordan bruges sætning 7.12 til at finde $N$ så $S_N$ har en given andel af effekten?
- [ ] Hvorfor klarer beviset for Fouriers sætning først punktet $0$ og forskyder derefter?
- [ ] Hvad sker der med $c_n$ når koordinatsystemet forskydes, og hvorfor ændres $|c_n|$ ikke?
- [ ] Hvorfor er (R1) nødvendig i substitutionen?
- [ ] Hvordan kontrolleres at en stykkevist defineret ulige udvidelse er kontinuert i $0$ og $\pm\pi$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 10|Uge 10]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|Uge 12: Variable koefficienter, potensrække- og Fourierrækkemetoden]]
- [[Differential Equations and Infinite Series]]
