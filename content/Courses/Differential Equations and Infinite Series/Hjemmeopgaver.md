---
publish: true
title: "01025 hjemmeopgaver og miniprojekter"
course: Differential Equations and Infinite Series
type: index
tags:
  - differential-equations
  - hjemmeopgaver
---

# 01025 hjemmeopgaver og miniprojekter (E26)

Alle afleveringer i porteføljen samlet ét sted, med frist, hvad opgaven går ud på, hvilken teori den bruger, og hvordan man kommer i gang.

## Porteføljen

- 10 hjemmeopgavesæt; de 8 bedste tæller, samlet 8 % af karakteren.
- 2 miniprojekter, 2 % hver.
- Möbius-opgaver afleveres elektronisk, alt andet fysisk (gerne håndskrevet, i en folder der er let at åbne).
- For sent afleverede besvarelser rettes, men bedømmes ikke.
- Alle hjælpemidler er tilladt, men skal citeres, også AI. Fuldt point kræver mellemregninger og henvisninger til de sætninger i bogen man bruger; et facit uden metode er ikke nok.
- Godt at huske ved fysiske afleveringer: studienummer på, sidenumre, arkene i rækkefølge, og $\Leftrightarrow$ kun mellem udsagn.

## Oversigt

| Sæt | Frist | Indhold | Emne | Uge |
|---|---|---|---|---|
| 1 | 9/9 kl. 20 | Möbius | $n$'te ordens ligninger | [[Courses/Differential Equations and Infinite Series/Uger/Uge 01\|Uge 1]] |
| 2 | 15/9 kl. 20 (Möbius), 16/9 kl. 8 (fysisk) | Möbius, opgave 903 og 912 | Dobbeltrod, lineær uafhængighed | [[Courses/Differential Equations and Infinite Series/Uger/Uge 02\|Uge 2]] |
| 3 | 22/9 kl. 20 (Möbius), 23/9 kl. 8 (fysisk) | Möbius, opgave 915 | Stationært svar for systemer | [[Courses/Differential Equations and Infinite Series/Uger/Uge 03\|Uge 3]] |
| Miniprojekt 1 | 30/9 kl. 8 | Opgave 1 og 3 fysisk, opgave 2 i Möbius | Løsningsstruktur, overføringsfunktion, komplekse koefficienter | [[Courses/Differential Equations and Infinite Series/Uger/Uge 04\|Uge 4]] |
| 4 | 6/10 kl. 20 (Möbius), 7/10 kl. 8 (fysisk) | Möbius Sæt4-01025, Opgave A | Kvotientkriteriet | [[Courses/Differential Equations and Infinite Series/Uger/Uge 05\|Uge 5]] |
| 5 | 20/10 kl. 20 | Möbius | Rækker af tal | [[Courses/Differential Equations and Infinite Series/Uger/Uge 06\|Uge 6]] |
| 6 | 27/10 kl. 20 (Möbius), 28/10 kl. 8 (fysisk) | Möbius sæt 6, eksamen maj 2024 del B opgave 1, Spiseseddelopgave 1 (iii) og (iv) | Absolut og betinget konvergens, kvotientkriteriet | [[Courses/Differential Equations and Infinite Series/Uger/Uge 07\|Uge 7]] |
| 7 | 4/11 kl. 8 | Möbius sæt 7 (to opgaver), eksamen B-E21 opgave 4 | Uniform konvergens | [[Courses/Differential Equations and Infinite Series/Uger/Uge 08\|Uge 8]] |
| 8 | 11/11 kl. 8 | Möbius Sæt8MC-01025 og Sæt8B-01025 | Fourierrækker | [[Courses/Differential Equations and Infinite Series/Uger/Uge 09\|Uge 9]] |
| 9 | 18/11 kl. 20 | Möbius Sæt9-01025 | Fourierrækker, kompleks form, Parseval | [[Courses/Differential Equations and Infinite Series/Uger/Uge 10\|Uge 10]] |
| Miniprojekt 2 | 25/11 kl. 8 | Projektopgave 1 til 4, fysisk | Fouriers sætning, Fourierrækkemetoden | [[Courses/Differential Equations and Infinite Series/Uger/Uge 11\|Uge 11]] |
| 10 | 2/12 kl. 8 | Möbius Sæt10-inhomogen-01025 og Sæt10-01025 | Inhomogene ligninger, potensrækkemetoden | [[Courses/Differential Equations and Infinite Series/Uger/Uge 12\|Uge 12]] |

## Hjemmeopgavesæt 1

**Frist:** tirsdag 9/9 kl. 20, i Möbius.

**Teori:** karakterligning, komplekse rødder, multiplicitet, gættemetoden og overføringsfunktion (afsnit 1.1 til 1.4).

**Kom i gang:** skriv karakterpolynomiet op direkte fra ligningen, find rødderne, og opskriv den fuldstændige løsning efter sætning 1.15, før begyndelsesbetingelser sættes ind.

## Hjemmeopgavesæt 2

**Frist:** Möbius 15/9 kl. 20; opgave 903 og 912 fysisk 16/9 kl. 8.

**Opgave 903 (afsnit 1.2):** for $a_0y'' + a_1y' + a_2y = 0$ skal man vise ved indsættelse at $y = te^{\lambda_0 t}$ giver $(2a_0\lambda_0 + a_1)e^{\lambda_0 t}$, og derfra at $te^{\lambda_0 t}$ er en løsning netop når $\lambda_0$ er dobbeltrod. Opgaven er et bevis for sætning 1.14 i et specialtilfælde, så sætning 1.14 må ikke bruges.
- Vink: ved en dobbeltrod er $\lambda_0 = \frac{-a_1 \pm 0}{2a_0}$, altså $2a_0\lambda_0 + a_1 = 0$.

**Opgave 912 (appendiks om systemer):** bevis lemma A.16 (A.15 i ældre udgaver): hvis $\mathbf u + i\mathbf v$ og $\mathbf u - i\mathbf v$ er lineært uafhængige, er $\mathbf u$ og $\mathbf v$ det også.
- Vink: start med en vilkårlig linearkombination $c_1\mathbf u + c_2\mathbf v = \mathbf 0$ og udtryk $\mathbf u$ og $\mathbf v$ ved $\mathbf w_1 = \mathbf u + i\mathbf v$ og $\mathbf w_2 = \mathbf u - i\mathbf v$.

## Hjemmeopgavesæt 3

**Frist:** Möbius 22/9 kl. 20; opgave 915 fysisk 23/9 kl. 8.

**Opgave 915 (afsnit 2.6):** for $\dot{\mathbf x} = A\mathbf x + \mathbf b u$ med $u(t) = e^{st}$ og $\det(A - sI) \neq 0$ skal man vise at $\mathbf x(t) = \mathbf x_0e^{st}$ er en løsning hvis og kun hvis $\mathbf x_0 = -(A - sI)^{-1}\mathbf b$.
- Vink: sæt $\mathbf x_0e^{st}$ ind, divider med $e^{st} \neq 0$, og vis begge retninger af "hvis og kun hvis" for sig.

## Miniprojekt 1

**Frist:** onsdag 30/9 kl. 8, fysisk, og opgave 2 i Möbius. Tæller 2 %. Bedømmes mest på matematisk korrekthed, lidt på læsbarhed: hele sætninger, målrettede beregninger, korrekt brug af symboler, kort og præcist.

**Opgave 1 (lineær uafhængighed):** vis at $e^{\lambda_1 t}, te^{\lambda_1 t}, t^2e^{\lambda_1 t}, e^{\lambda_2 t}, te^{\lambda_2 t}, t^2e^{\lambda_2 t}$ er lineært uafhængige for $\lambda_1 < \lambda_2$, og derefter et tilfælde med komplekse rødder.
- Metode: antag en linearkombination lig nul for alle $t$, divider med den hurtigst voksende funktion og lad $t \to \infty$, så forsvinder én koefficient ad gangen.
- Med $\cos(\omega t)$ og $\sin(\omega t)$ har man ingen grænseværdi; lad derfor $t$ gå mod uendelig gennem en talfølge, fx $t_n = \frac{2\pi n}{\omega}$, hvor cosinus er $1$ og sinus er $0$.

**Opgave 2 (overføringsfunktion, Möbius):** design af en diskantknap i et elektrisk kredsløb ved hjælp af overføringsfunktionen for en andenordens ligning (afsnit 1.4 og 1.5).

**Opgave 3 (komplekse koefficienter):** ja/nej-spørgsmål med begrundelse om $n$'te ordens ligninger hvor $a_0, \dots, a_n$ er komplekse: er $e^{\lambda t}$ stadig en løsning, kommer rødder stadig i konjugerede par, er $e^{\lambda_1 t}$ og $e^{\lambda_2 t}$ lineært uafhængige, og findes der altid reelle løsninger?
- Testeksempel: $y' + iy = 0$.

## Hjemmeopgavesæt 4

**Frist:** Möbius Sæt4-01025 6/10 kl. 20; Opgave A fysisk 7/10 kl. 8.

**Opgave A (afsnit 4.5, sætning 4.30):** antag at $\frac{a_{n+1}}{a_n} \to C < 1$. Hvad siger kvotientkriteriet om
1. $\sum a_n$,
2. $\sum (n^2 + 7n + 3)a_n$,
3. $\sum P(n)a_n$ for et vilkårligt polynomium $P$ af grad $m$?

- Vink: der findes $M$ så $P(n) \neq 0$ for $n \geq M$. Del summen op i $\sum_{n=1}^{M-1}$ og $\sum_{n=M}^\infty$ og brug kvotientkriteriet på den sidste.
- Pas på: de komplekse tal er ikke ordnede, så $z < w$ giver ikke mening for komplekse tal.

## Hjemmeopgavesæt 5

**Frist:** 20/10 kl. 20, kun Möbius.

**Teori:** sammenlignings-, ækvivalens-, kvotient- og integralkriteriet, vurdering af summen og Leibniz' kriterium (afsnit 4.5 til 4.7).

## Hjemmeopgavesæt 6

**Frist:** Möbius sæt 6 (én opgave) 27/10 kl. 20; den fysiske del 28/10 kl. 8.

**Eksamen 13. maj 2024, del B opgave 1 (afsnit 4.5 og 4.7):** vis at $\sum_{n=1}^\infty (-1)^n\frac{100+n}{2+n^3}$ er absolut konvergent, og find for $\sum_{n=1}^\infty (-1)^n\frac{100+n}{2+n^k}$ den mindste $k \in \mathbb N$ der giver absolut konvergens, og den mindste der giver konvergens.
- Metode: absolut konvergens via ækvivalenskriteriet mod en $p$-række; for ren konvergens se på Leibniz' tre betingelser, og husk $n$'te ledskriteriet når leddene ikke går mod $0$.

**Spiseseddelopgave 1 (iii) og (iv), en redigeret udgave af bogens opgave 811 (afsnit 4.5):** målet er en mere generel udgave af kvotientkriteriet, hvor man kun antager $|a_{n+1}| \leq C|a_n|$ for alle $n$, ikke at kvotienten konvergerer.
- (i) og (ii) (må bruges som vink): med $C = \frac12$ vises $|a_n| \leq |a_1|\left(\frac12\right)^{n-1}$, og derfra absolut konvergens ved sammenligning med en kvotientrække.
- (iii): samme argument med et generelt $C < 1$.
- (iv): hvad kan man sige når $C = 1$? Tænk på rækker hvor $|a_{n+1}| \leq |a_n|$, både konvergente og divergente.

## Hjemmeopgavesæt 7

**Frist:** 4/11 kl. 8, både Möbius sæt 7 (to opgaver) og den fysiske del.

**Eksamen B-E21, opgave 4 (afsnit 5.3 og 5.4):** rækken $f(t) = \sum_{n=1}^\infty \frac{t\cos(nt)}{n^3}$.
1. Uniform konvergens på ethvert interval $[-a, a]$.
2. Et $N$ så $\left|f(t) - \sum_{n=1}^N \frac{t\cos(nt)}{n^3}\right| \leq 10^{-2}$ for alle $t \in [-5, 5]$.
3. Har rækken en konvergent majorantrække på hele $\mathbb R$?
4. Er rækken konvergent for alle $t$?
5. Er $f$ kontinuert på hele $\mathbb R$?

- Metode: på $[-a,a]$ er $\left|\frac{t\cos(nt)}{n^3}\right| \leq \frac{a}{n^3}$, en majorant. Fejlen vurderes med halen af majoranten (korollar 4.35). For (3) til (5): skel mellem "majorant på hele $\mathbb R$" og "konvergent i hvert punkt", og brug at kontinuitet er en lokal egenskab.

## Hjemmeopgavesæt 8

**Frist:** 11/11 kl. 8, i Möbius, som to sæt.
- Sæt8MC-01025: almindelige MC-spørgsmål, kun ét svar.
- Sæt8B-01025: efter scoren kan man få en ny tilfældigt genereret opgave; den seneste score tæller, og gamle korrekte svar gemmes ikke.

**Teori:** Fourierkoefficienter, lige og ulige funktioner, Fouriers sætning (afsnit 6.1 og 6.2).

## Hjemmeopgavesæt 9

**Frist:** 18/11 kl. 20, Möbius Sæt9-01025.

**Teori:** Fourierrækker på kompleks form, omregning mellem $a_n, b_n$ og $c_n$, Parsevals sætning (afsnit 6.2 til 6.4).

## Miniprojekt 2

**Frist:** 25/11 kl. 8, fysisk. Tæller 2 %. Spørgetid mandag 23/11 kl. 12 på Peters kontor.

Projektopgave 2 og 3 hører sammen: et system løses med Fourierrækkemetoden, og man finder en approksimation inden for en given fejlmargin. Metoden er mekanisk og virker for alle systemer med periodisk påvirkning.

**Projektopgave 1 (appendiks om Fouriers sætning):**
- Læs beviset for propositionen (ugesedlens A.32) og løs opgave 872: vis at $\varphi(x) = f(x+u)$ opfylder betingelserne i lemmaet, og at $\int_{-\pi}^{\pi}\varphi(x)e^{-inx}dx = e^{inu}\int_{-\pi}^{\pi}f(y)e^{-iny}dy$.
- Tillægsspørgsmål (iv): vis at $\frac12\bigl(|a_n|^2 + |b_n|^2\bigr)$ ikke ændres ved forskydning fra $x$ til $x+u$ (energien i frekvens $n$ afhænger ikke af koordinatsystemet).
- Vink: omskriv til $c_n$ og brug $|e^{inu}| = 1$; regel (R1) i lemma 6.5 gør substitutionen lovlig.

**Projektopgave 2:** opgave 518 (i) og (ii): en kontinuert, stykkevis differentiabel funktion med $a_n = 0$ og $b_n = \frac1{n^3}$. Opstil Fourierrækken på kompleks form, og find $N$ så $|f(x) - S_N(x)| \leq 0.1$ for alle $x$.
- Metode: majorant på halen ($\sum |b_n|$) og korollar 4.35.

**Projektopgave 3:** $f$ er ulige og $2\pi$-periodisk, givet på $[0,\pi]$ ved en kontinuert differentiabel $g$ med $g(0) = g(\pi) = 0$, og $f(t) = -g(-t)$ på $]-\pi, 0[$. Argumentér for at $f$ er kontinuert og kontinuert differentiabel.
- Kritiske punkter: $t = 0$ og $t = \pm\pi$. Sammenlign grænseværdier fra højre og venstre af $f$ og af $f'$.

**Projektopgave 4 (afsnit 2.6, 2.8 og 7.2):** systemet

$$\dot{\mathbf x} = \begin{pmatrix}1&-1\\3&-2\end{pmatrix}\mathbf x + \begin{pmatrix}1\\1\end{pmatrix}u(t), \qquad y = x_1 + 2x_2.$$

1. Asymptotisk stabilitet (spor og determinant, eller egenværdier).
2. Overføringsfunktionen $H(s) = -\mathbf d^\top(A - sI)^{-1}\mathbf b$.
3. Med $u$ fra opgave 518: løsningen $y$ som Fourierrække via sætning 7.8, $y = \sum c_nH(in)e^{int}$.
4. Fejlvurdering: med den oplyste ulighed vises at $|y(t) - \tilde S_N(t)| \leq \frac72\sum_{n=N+1}^\infty\frac{1}{n^4}$ for $N \geq 4$.
5. Find $N$ så fejlen er højst $0.001$ for alle $t$.
6. Plot $y$, afsnitssummen og deres differens. Ved plot af den komplekse form: tjek at imaginærdelen er på størrelse med maskinnøjagtigheden, og plot så realdelen.

## Hjemmeopgavesæt 10

**Frist:** onsdag 2/12 kl. 8, kun Möbius.
- Sæt10-inhomogen-01025: op til 10 forsøg; laves først.
- Sæt10-01025: kun ét forsøg.

**Teori:** inhomogene ligninger, variable koefficienter (sætning 1.31), potensrækkemetoden (afsnit 1.6 og 7.1).

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- [[Differential Equations and Infinite Series]]
