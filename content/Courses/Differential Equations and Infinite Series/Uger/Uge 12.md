---
publish: true
title: "01025 uge 12: Variable koefficienter og rækkemetoder"
course: Differential Equations and Infinite Series
type: week
week: 12
tags:
  - differential-equations
  - ugenote
---

# Uge 12: Variable koefficienter og rækkemetoder

## Læseplan

- Forelæsning (onsdag 25/11): afsnit 1.6 (reduktion af orden for ligninger med variable koefficienter), 7.1 (potensrækkemetoden) og 7.2 (Fourierrækkemetoden for stabile systemer).
- Miniprojekt 2 afleveres i denne uge (onsdag 25/11 kl. 8).
- Hjemmeopgavesæt 10 er i Möbius (to dele: Sæt10-inhomogen-01025 og Sæt10-01025, frist onsdag 2/12 kl. 8).

## Begreber

### Differentialligninger med variable koefficienter (afsnit 1.6)
En lineær 2. ordens differentialligning med variable koefficienter har formen:

$$y'' + a_1(t)y' + a_2(t)y = u(t),$$

hvor koefficienterne $a_1(t)$ og $a_2(t)$ afhænger af den uafhængige variabel $t$. Her kan den karakteristiske ligning ikke anvendes, da rødderne ville afhænge af $t$. Løsningsrummet til den homogene ligning er dog stadig et 2-dimensionalt vektorrum på ethvert interval $I$, hvor koefficienterne er kontinuerte.

### Reduktion af orden (sætning 1.31)
Hvis man kender én ikke-triviel løsning $y_1(t)$ til den homogene ligning $y'' + a_1(t)y' + a_2(t)y = 0$, og $y_1(t) \neq 0$ for alle $t \in I$, kan en anden lineært uafhængig løsning $y_2(t)$ altid findes ved at sætte:

$$y(t) = v(t)y_1(t).$$

Indsættelse og reduktion fører til en 1. ordens differentialligning for hjælpefunktionen $w(t) = v'(t)$. Løsningen er givet ved den eksplicitte formel:

$$y_2(t) = y_1(t)\int \frac{1}{y_1(t)^2\,\Omega(t)}\,dt, \quad \text{hvor } \Omega(t) = e^{\int a_1(t)\,dt}.$$

Ligningen skal være normaliseret (koefficient $1$ på $y''$), før $a_1(t)$ aflæses. Funktionerne $y_1$ og $y_2$ er lineært uafhængige, og sætningen giver også en formel for en partikulær løsning til den inhomogene ligning:

$$y_0(t) = y_1(t)\int\frac{1}{y_1(t)^2\,\Omega(t)}\left[\int y_1(t)\,\Omega(t)\,u(t)\,dt\right]dt.$$

Den formel bruges i løsningen til opgave 919 (iv) i WeeklyNotes3.pdf, se [[Courses/Differential Equations and Infinite Series/Uger/Uge 03|uge 3]]: $y'' - y = 2e^t$ med $y_1 = e^t$ og $\Omega = 1$ giver $y_0 = e^t\int e^{-2t}\left[\int 2e^{2t}dt\right]dt = te^t$.

**Eksempel.** Betragt Euler-Cauchy ligningen $y'' - \frac{2}{t}y' + \frac{2}{t^2}y = 0$ for $t > 0$.
1. Gæt løsningen $y_1(t) = t$: da er $y_1' = 1, y_1'' = 0$. Indsættelse giver $0 - \frac{2}{t}\cdot 1 + \frac{2}{t^2}\cdot t = -\frac{2}{t} + \frac{2}{t} = 0$, så $y_1$ er en løsning.
2. Identificér koefficienten: $a_1(t) = -\frac{2}{t}$.
3. Find $\Omega(t)$: $\int a_1(t)\,dt = -2\ln t = \ln(t^{-2})$, så $\Omega(t) = e^{\ln(t^{-2})} = t^{-2} = \frac{1}{t^2}$.
4. Beregn $y_2(t)$:
   $$y_2(t) = t \int \frac{1}{t^2 \cdot \frac{1}{t^2}}\,dt = t \int 1\,dt = t \cdot t = t^2.$$
5. Tjek: for $y_2 = t^2$ fås $y_2' = 2t, y_2'' = 2$. Indsættelse: $2 - \frac{2}{t}(2t) + \frac{2}{t^2}(t^2) = 2 - 4 + 2 = 0$.
Den fuldstændige homogene løsning er $y_h(t) = c_1 t + c_2 t^2$.

### Potensrækkemetoden (afsnit 7.1, sætning 7.6)
Sætning 7.6: er $a_1(t)$ og $a_2(t)$ i den normaliserede ligning $y'' + a_1(t)y' + a_2(t)y = 0$ lig deres Taylorrækker på $]-\rho_1, \rho_1[$ og $]-\rho_2, \rho_2[$, så findes en potensrækkeløsning på $]-\min(\rho_1, \rho_2), \min(\rho_1, \rho_2)[$. Løsningen søges som

$$y(t) = \sum_{n=0}^\infty c_n t^n.$$

Fremgangsmåden er:
1. Differentiér potensrækken ledvist:
   $$y'(t) = \sum_{n=1}^\infty n c_n t^{n-1}, \qquad y''(t) = \sum_{n=2}^\infty n(n-1) c_n t^{n-2}.$$
2. Indsæt rækkerne i differentialligningen.
3. Udfør **indeksskift** så alle led i ligningen har samme potens $t^k$ (typisk $t^n$). Fx:
   $$\sum_{n=2}^\infty n(n-1)c_n t^{n-2} = \sum_{n=0}^\infty (n+2)(n+1)c_{n+2} t^n.$$
4. Saml koefficienterne foran hver potens af $t$. Ifølge identitetssætningen (korollar 5.21) er en potensrække kun identisk nul hvis alle koefficienter er nul, så udtrykket foran $t^n$ sættes lig nul. Dette etablerer en **rekursionsformel** for $c_n$.
5. Begyndelsesværdierne $y(0) = c_0$ og $y'(0) = c_1$ bestemmer de frie parametre. Konvergensradius findes bagefter med kvotientkriteriet på rekursionen. Typiske fejl: indeksskiftet og de første led, når summerne starter forskellige steder.

**Eksempel.** Løs $y' = 2ty$ med $y(0) = 1$.
Indsæt $y = \sum c_n t^n$ og $y' = \sum (n+1)c_{n+1} t^n$:
$$\sum_{n=0}^\infty (n+1)c_{n+1} t^n = 2t \sum_{n=0}^\infty c_n t^n = \sum_{n=0}^\infty 2c_n t^{n+1} = \sum_{n=1}^\infty 2c_{n-1} t^n.$$
- For $n = 0$: $1 \cdot c_1 = 0 \implies c_1 = 0$.
- For $n \ge 1$: $(n+1)c_{n+1} = 2c_{n-1} \implies c_{n+1} = \frac{2}{n+1}c_{n-1}$.
Da $c_1 = 0$, er alle ulige koefficienter nul: $c_3 = c_5 = \dots = 0$.
For de lige koefficienter ($n = 2k-1$): $c_{2k} = \frac{2}{2k}c_{2k-2} = \frac{1}{k}c_{2(k-1)}$.
Dermed er $c_{2k} = \frac{1}{k!}c_0 = \frac{1}{k!}$.
Løsningen er $y(t) = \sum_{k=0}^\infty \frac{1}{k!}t^{2k} = \sum_{k=0}^\infty \frac{(t^2)^k}{k!} = e^{t^2}$, hvilket verificeres umiddelbart.

### Fourierrækkemetoden for stabile systemer (afsnit 7.2, sætning 7.8)
Betragt et lineært differentialligningssystem (eller en $n$'te ordens ligning) med konstant koefficientmatrice:

$$\dot{\mathbf x} = A\mathbf x + \mathbf b u(t), \qquad y = \mathbf c^\top \mathbf x.$$

Sætning 7.8: er systemet **asymptotisk stabilt**, og er påvirkningen $u(t) = \sum_{n=-\infty}^\infty c_n e^{int}$ kontinuert, stykkevis differentiabel og $2\pi$-periodisk, så har systemet løsningen

$$y(t) = \sum_{n=-\infty}^\infty c_n H(in) e^{int},$$

hvor $H(s) = -\mathbf c^\top(A - sI)^{-1}\mathbf b = \mathbf c^\top(sI - A)^{-1}\mathbf b$. Hver frekvens ganges med overføringsfunktionen i den frekvens (det er "guitareksemplet" fra uge 3 med $N \to \infty$). Bagefter vurderes fejlen ved at afskære rækken, som i bogens eksempel i afsnit 7.2. For periode $T$ erstattes $n$ af $n\omega$ med $\omega = \frac{2\pi}{T}$ (appendiks C).

**Eksempel.** Betragt det 1. ordens system $y' + 2y = u(t)$, hvor $u(t) = 4\cos(3t)$.
1. Karakterligningen $\lambda + 2 = 0$ har roden $\lambda = -2 < 0$, så systemet er asymptotisk stabilt.
2. Overføringsfunktionen er $H(s) = \frac{1}{s + 2}$.
3. Indgangssignalet skrives på kompleks form: $u(t) = 2e^{3it} + 2e^{-3it}$, dvs. $c_3 = c_{-3} = 2$, og alle andre $c_n = 0$.
4. Beregn responsen for frekvens $\omega = 3$:
   $$H(3i) = \frac{1}{2 + 3i} = \frac{2 - 3i}{2^2 + 3^2} = \frac{2 - 3i}{13}.$$
5. Outputtet bliver:
   $$y(t) = 2 H(3i)e^{3it} + 2 H(-3i)e^{-3it} = 4 \operatorname{Re}\left( \frac{2 - 3i}{13}(\cos 3t + i\sin 3t) \right) = \frac{4}{13}\bigl(2\cos(3t) + 3\sin(3t)\bigr).$$

   Tjek: $y' + 2y = \frac{4}{13}\bigl(-6\sin 3t + 9\cos 3t + 4\cos 3t + 6\sin 3t\bigr) = 4\cos 3t$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 891 | 7.1 | Potensrækkemetoden på $t y'' - (t+1)y' + y = 0$; antag $t > 0$ i (vi). Ugesedlen: i stedet for (iv) til (vii) kan man indse at der er to lineært uafhængige potensrækkeløsninger og finde deres sumfunktioner | $c_1 = c_0$ og $(k-1)\bigl((k+1)c_{k+1} - c_k\bigr) = 0$; løsningerne $1 + t$ og $e^t$ |
| Opgave 3, eksamen december 2017 | 7.1 | $y'' - xy = 0$: rekursion, $y_8$ med $y(0) = 1$, $y'(0) = 2$, konvergensradius | Rekursion $a_{n+3} = \frac{a_n}{(n+3)(n+2)}$, $a_2 = 0$; konvergensradius $\rho = \infty$ |
| 202 | 6.1, 6.2 | Fourierrække for $f(x) = \frac{1}{4}x^2 - \frac{\pi}{2}x$ på $[0, 2\pi[$, og at $\sim$ kan erstattes af $=$; ugesedlen giver stamfunktionen til $\bigl(\frac{t^2}{4} - \frac\pi2 t\bigr)\cos nt$ | $a_0 = -\frac{\pi^2}{3}$, $a_n = \frac{1}{n^2}$, $b_n = 0$; facit: (vi) $N \ge 10$, (vii) $\frac{\pi^4}{90}$ |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 891.** Betragt differentialligningen $t y'' - (t+1)y' + y = 0$ for $t \in \mathbb{R}$.
1. Indsæt $y(t) = \sum_{n=0}^\infty c_n t^n$:
   $$y'(t) = \sum_{n=1}^\infty n c_n t^{n-1}, \qquad y''(t) = \sum_{n=2}^\infty n(n-1)c_n t^{n-2}.$$
2. Multiplicér leddene med $t$ og indsæt:
   $$t y'' = \sum_{n=2}^\infty n(n-1)c_n t^{n-1} = \sum_{k=1}^\infty (k+1)k c_{k+1} t^k.$$
   $$-(t+1)y' = -t y' - y' = -\sum_{n=1}^\infty n c_n t^n - \sum_{n=1}^\infty n c_n t^{n-1} = -\sum_{k=1}^\infty k c_k t^k - c_1 - \sum_{k=1}^\infty (k+1)c_{k+1} t^k.$$
   $$y = c_0 + \sum_{k=1}^\infty c_k t^k.$$
3. Konstantleddet ($t^0$): $-c_1 + c_0 = 0 \implies c_1 = c_0$.
4. For $k \ge 1$ samles leddene foran $t^k$:
   $$(k+1)k c_{k+1} - (k+1)c_{k+1} - k c_k + c_k = 0.$$
   Faktorisér koefficienterne:
   $$(k+1)(k-1)c_{k+1} - (k-1)c_k = 0 \iff (k-1)\bigl( (k+1)c_{k+1} - c_k \bigr) = 0.$$
5. Løs rekursionen:
   - For $k = 1$: $(1-1)(2c_2 - c_1) = 0 \cdot (2c_2 - c_1) = 0$.
     Ligningen er trivielt opfyldt for **enhver** værdi af $c_2$! Koefficienten $c_2$ er altså en fri parameter!
   - For $k \ge 2$ er $k-1 \neq 0$, så vi kan dividere med $k-1$:
     $$(k+1)c_{k+1} - c_k = 0 \implies c_{k+1} = \frac{c_k}{k+1}.$$
     Ved gentagen anvendelse for $n \ge 2$:
     $$c_n = \frac{c_2}{3 \cdot 4 \cdots n} = \frac{2 c_2}{n!}.$$
6. Den samlede løsning kan splittes i de to frie parametre $c_0$ og $c_2$:
   $$y(t) = c_0(1 + t) + 2c_2 \sum_{n=2}^\infty \frac{t^n}{n!} = c_0(1 + t) + 2c_2(e^t - 1 - t).$$
   Vælges $c_0 = 1, c_2 = 0$, fås løsningen $y_1(t) = 1 + t$.
   Vælges $c_0 = 1, 2c_2 = 1$, fås løsningen $y_2(t) = (1+t) + (e^t - 1 - t) = e^t$.
   Tjek: for $y = e^t$ fås $t e^t - (t+1)e^t + e^t = (t - t - 1 + 1)e^t = 0$. Passer perfekt!

**Eksamensopgave 3 (December 2017).** Ligningen er $y'' - xy = 0$ (Airy-ligningen).
1. Indsæt $y(x) = \sum_{n=0}^\infty a_n x^n$:
   $$y''(x) = \sum_{n=2}^\infty n(n-1)a_n x^{n-2} = 2a_2 + \sum_{k=1}^\infty (k+2)(k+1)a_{k+2} x^k.$$
   $$x y(x) = \sum_{n=0}^\infty a_n x^{n+1} = \sum_{k=1}^\infty a_{k-1} x^k.$$
2. Indsættelse og samling af potenser:
   $$2a_2 + \sum_{k=1}^\infty \bigl( (k+2)(k+1)a_{k+2} - a_{k-1} \bigr) x^k = 0.$$
   - Konstantleddet giver: $2a_2 = 0 \implies a_2 = 0$.
   - For $k \ge 1$: $(k+2)(k+1)a_{k+2} = a_{k-1}$.
     Sættes $n = k-1 \ge 0$, omskrives rekursionsformlen til:
     $$a_{n+3} = \frac{a_n}{(n+3)(n+2)} \quad (n \ge 0).$$
3. Approksimation med $y(0) = 1$ og $y'(0) = 2$:
   Her er $a_0 = 1$ og $a_1 = 2$, samt $a_2 = 0$.
   - $n = 0$: $a_3 = \frac{a_0}{3 \cdot 2} = \frac{1}{6}$.
   - $n = 1$: $a_4 = \frac{a_1}{4 \cdot 3} = \frac{2}{12} = \frac{1}{6}$.
   - $n = 2$: $a_5 = \frac{a_2}{5 \cdot 4} = 0$.
   - $n = 3$: $a_6 = \frac{a_3}{6 \cdot 5} = \frac{1/6}{30} = \frac{1}{180}$.
   - $n = 4$: $a_7 = \frac{a_4}{7 \cdot 6} = \frac{1/6}{42} = \frac{1}{252}$.
   - $n = 5$: $a_8 = \frac{a_5}{8 \cdot 7} = 0$.
   Taylor-polynomiet af 8. grad er derfor:
   $$y_8(x) = 1 + 2x + \frac{1}{6}x^3 + \frac{1}{6}x^4 + \frac{1}{180}x^6 + \frac{1}{252}x^7.$$
4. Konvergensradius:
   Fra rekursionen ses at $\frac{a_{n+3}}{a_n} = \frac{1}{(n+3)(n+2)} \to 0$ for $n \to \infty$. Kvotientkriteriet viser, at potensrækken konvergerer for alle $x \in \mathbb{R}$, så konvergensradius er $\rho = \infty$.

**Hjemmeopgavesæt 10:** to Möbius-opgaver (Sæt10-inhomogen-01025 og Sæt10-01025), senest onsdag 2/12 kl. 8. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**MC:** svaret på 709 er 3 i både (a) og (b).

## Tjek dig selv

- [ ] Hvordan bruges sætning 1.31 til at finde en anden løsning, når én er kendt?
- [ ] Hvorfor skal ligningen normaliseres (koefficient $1$ på $y''$), før $a_1(t)$ aflæses?
- [ ] Hvordan indsættes en potensrække, laves indeksskift og udledes en rekursionsformel?
- [ ] Hvordan findes konvergensradius for en potensrækkeløsning ud fra rekursionen?
- [ ] Hvad siger Fourierrækkemetoden, og hvilke antagelser kræver den (asymptotisk stabil, kontinuert påvirkning)?
- [ ] Hvordan vurderes fejlen, når løsningen fra Fourierrækkemetoden afskæres ved $N$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 11|Uge 11: Effekt og miniprojekt 2]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 13|Uge 13: Ulineære differentialligninger og repetition]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
