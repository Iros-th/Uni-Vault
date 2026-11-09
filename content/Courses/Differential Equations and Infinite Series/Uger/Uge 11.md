---
publish: true
title: "01025 uge 11: Approksimation i effekt, Fouriers sætning og miniprojekt 2"
course: Differential Equations and Infinite Series
type: week
week: 11
tags:
  - differential-equations
  - ugenote
---

# Uge 11: Approksimation i effekt, Fouriers sætning og miniprojekt 2

> **Kilde:** Ugeseddel 11 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 7.3, lemma 6.2 og appendiks om Fouriers sætning. Ugesedlen henviser til "proposition A.32" og "A.10, siderne 224 til 230"; i den 4. udgave jeg har tjekket mod svarer det til appendiks A.9 og propositionerne A.25 til A.30 (opgave 872 nævner selv proposition A.28). Semesteroversigten på ugeseddel 1 lægger Parseval og Fourierrækkemetoden (6.4 og 7.2) i denne uge, men ifølge ugeseddel 10 og 12 gennemgås de i uge 10 og 12.

## Læseplan

- Forelæsning: afsnit 7.3, opgave 863 (i) og (iv), og dele af beviset for Fouriers sætning.
- Øvelserne er erstattet af **miniprojekt 2**, afleveres fysisk senest 25/11 kl. 8.
- Spørgetid til miniprojektet: mandag 23/11 kl. 12 på Peters kontor.

## Begreber

### Effekt (afsnit 7.3)
Effekten af en $2\pi$-periodisk funktion er middelværdien af $|f|^2$ over en periode:

$$P(f) = \frac{1}{2\pi}\int_{-\pi}^{\pi}|f(t)|^2\,dt.$$

Ifølge Parseval er $P(f) = \sum_n |c_n|^2$, så hvert frekvensled bidrager med sin egen del af effekten.

### Approksimation i effekt (sætning 7.12)
For $0 < \delta < 1$ gælder

$$\frac{P(S_N)}{P(f)} \geq \delta \iff \sum_{|n| > N}|c_n|^2 \leq (1-\delta)P(f) \iff \sum_{n=N+1}^\infty\bigl(|a_n|^2 + |b_n|^2\bigr) \leq 2(1-\delta)P(f).$$

Spørgsmålet "hvor mange led skal med for at få $90\,\%$ af effekten?" er altså et spørgsmål om halen af $\sum |c_n|^2$.

**Eksempel.** Firkantbølgen fra uge 9 har $P(f) = 1$ og $b_n = \frac{4}{n\pi}$ for ulige $n$. For $\delta = 0.9$ kræves $\sum_{n > N,\ n \text{ ulige}} \frac{16}{\pi^2 n^2} \leq 0.2$. Numerisk er halen cirka $0.379$ for $N = 1$ og cirka $0.199$ for $N = 3$, så $N = 3$ (de to første ikke-nul led $\sin x$ og $\sin 3x$) giver mindst $90\,\%$ af effekten.

### Fouriers sætning, idéen i beviset (appendiks)
Beviset splittes i trin. Først vises konvergens i ét punkt, $x = 0$, under ekstra antagelser (fx $f(0) = 0$ og at $f$ opfører sig pænt omkring $0$). Bagefter flyttes resultatet til et vilkårligt punkt $u$ ved at se på $\varphi(x) = f(x + u)$, og det kræver at man ved hvordan Fourierkoefficienterne ændres når man forskyder koordinatsystemet. Det er indholdet af opgave 872:

$$\int_{-\pi}^{\pi}\varphi(x)e^{-inx}dx = e^{inu}\int_{-\pi}^{\pi}f(y)e^{-iny}dy.$$

Regel (R1) i lemma 6.2 (integralet over en hel periode afhænger ikke af hvor perioden starter) er det der gør substitutionen lovlig.

### Energi i en frekvens er uafhængig af koordinatsystemet
Ved forskydningen ændres $c_n$ kun med faktoren $e^{inu}$, som har absolutværdi $1$. Derfor er $|c_n|$ og dermed $\frac12\bigl(|a_n|^2 + |b_n|^2\bigr)$ uændret. Det er pointen i projektopgave 1 (iv). (Her kun idéen; selve beviset er en del af den bedømte aflevering.)

## Miniprojekt 2

Tæller 2 % af karakteren. Noten løser det ikke.

- **Projektopgave 1:** læs beviset for propositionen i appendiks (ugesedlens A.32), løs opgave 872 og tillægsspørgsmål (iv) om at $\frac12(|a_n|^2 + |b_n|^2)$ ikke ændres ved forskydning.
- **Projektopgave 2:** opgave 518 (i) og (ii) i bogen: en funktion med $a_n = 0$ og $b_n = \frac1{n^3}$, Fourierrækken på kompleks form og en afsnitssum med fejl $\leq 0.1$.
- **Projektopgave 3:** vis at en ulige $2\pi$-periodisk funktion, givet på $[0,\pi]$ ved en kontinuert differentiabel $g$ med $g(0) = g(\pi) = 0$, er kontinuert og kontinuert differentiabel.
- **Projektopgave 4:** systemet $\dot{\mathbf x} = \begin{pmatrix}1&-1\\3&-2\end{pmatrix}\mathbf x + \begin{pmatrix}1\\1\end{pmatrix}u$, $y = x_1 + 2x_2$: asymptotisk stabilitet, overføringsfunktion, løsning som Fourierrække (Fourierrækkemetoden, sætning 7.8, se [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|uge 12]]), fejlvurdering og valg af $N$ så fejlen er højst $0.001$, og plots.

Ugesedlens CAS-råd: plot evt. realdelen af afsnitssummen på kompleks form, men tjek først at imaginærdelen er på størrelse med maskinnøjagtigheden.

**MC:** svaret på 708 er 1. Løs nu opgave 709.

## Opgaver

Ingen almindelige øvelsesopgaver; ugen bruges på miniprojekt 2 (opgave 872 og 518 indgår i det). Ingen hjemmeopgavesæt ud over Möbius-sæt 9 fra uge 10.

## Tjek dig selv

- [ ] Kan jeg definere effekten $P(f)$ og forbinde den med Parseval?
- [ ] Kan jeg bruge sætning 7.12 til at finde $N$ så $S_N$ har en given andel af effekten?
- [ ] Kan jeg forklare hvorfor beviset for Fouriers sætning først klarer punktet $0$ og derefter forskyder?
- [ ] Kan jeg vise at forskydning ganger $c_n$ med $e^{inu}$?
- [ ] Kan jeg gøre rede for hvorfor (R1) er nødvendig i substitutionen?
- [ ] Kan jeg kontrollere at en stykkevist defineret ulige udvidelse er kontinuert i $0$ og $\pm\pi$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 10|Uge 10]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|Uge 12: Variable koefficienter, potensrække- og Fourierrækkemetoden]]
