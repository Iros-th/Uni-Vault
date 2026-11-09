---
publish: true
title: "01025 uge 12: Variable koefficienter, potensrækkemetoden og Fourierrækkemetoden"
course: Differential Equations and Infinite Series
type: week
week: 12
tags:
  - differential-equations
  - ugenote
---

# Uge 12: Variable koefficienter, potensrækkemetoden og Fourierrækkemetoden

> **Kilde:** Ugeseddel 12 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 1.6, 7.1, 7.2 samt appendiks), facitliste_studerende.pdf og eksamensopgave 3 fra december 2017 (01025Mat2Eksamen-dec-17.pdf). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 25/11): afsnit 1.6 (reduktion af orden for ligninger med variable koefficienter), 7.1 (potensrækkemetoden) og 7.2 (Fourierrækkemetoden for stabile systemer).
- Miniprojekt 2 afleveres i denne uge (onsdag 25/11 kl. 8).
- Hjemmeopgavesæt 10 er i Möbius (to dele: Sæt10-inhomogen-01025 og Sæt10-01025, frist onsdag 2/12 kl. 8).

## Begreber

### Differentialligninger med variable koefficienter (afsnit 1.6)
En lineær 2. ordens differentialligning med variable koefficienter har formen:

$$y'' + a_1(t)y' + a_2(t)y = u(t),$$

hvor koefficienterne $a_1(t)$ og $a_2(t)$ afhænger af den uafhængige variabel $t$. Her kan den karakteristiske ligning ikke anvendes, da rødderne ville afhænge af $t$. Løsningsrummet til den homogene ligning er dog stadig et 2-dimensionalt vektorrum på ethvert interval $I$, hvor koefficienterne er kontinuerte.

### Reduktion af orden / d'Alemberts metode (sætning 1.31)
Hvis man kender én ikke-triviel løsning $y_1(t)$ til den homogene ligning $y'' + a_1(t)y' + a_2(t)y = 0$, og $y_1(t) \neq 0$ for alle $t \in I$, kan en anden lineært uafhængig løsning $y_2(t)$ altid findes ved at sætte:

$$y(t) = v(t)y_1(t).$$

Indsættelse og reduktion fører til en 1. ordens differentialligning for hjælpefunktionen $w(t) = v'(t)$. Løsningen er givet ved den eksplicitte formel:

$$y_2(t) = y_1(t)\int \frac{1}{y_1(t)^2\,\Omega(t)}\,dt, \quad \text{hvor } \Omega(t) = e^{\int a_1(t)\,dt}.$$

Størrelsen $\Omega(t)$ kaldes Wronski-integrationsfaktoren. Funktionerne $y_1(t)$ og $y_2(t)$ udgør et fundamentalløsningssæt for den homogene ligning.

**Eksempel.** Betragt Euler-Cauchy ligningen $y'' - \frac{2}{t}y' + \frac{2}{t^2}y = 0$ for $t > 0$.
1. Gæt løsningen $y_1(t) = t$: da er $y_1' = 1, y_1'' = 0$. Indsættelse giver $0 - \frac{2}{t}\cdot 1 + \frac{2}{t^2}\cdot t = -\frac{2}{t} + \frac{2}{t} = 0$, så $y_1$ er en løsning.
2. Identificér koefficienten: $a_1(t) = -\frac{2}{t}$.
3. Find $\Omega(t)$: $\int a_1(t)\,dt = -2\ln t = \ln(t^{-2})$, så $\Omega(t) = e^{\ln(t^{-2})} = t^{-2} = \frac{1}{t^2}$.
4. Beregn $y_2(t)$:
   $$y_2(t) = t \int \frac{1}{t^2 \cdot \frac{1}{t^2}}\,dt = t \int 1\,dt = t \cdot t = t^2.$$
5. Tjek: for $y_2 = t^2$ fås $y_2' = 2t, y_2'' = 2$. Indsættelse: $2 - \frac{2}{t}(2t) + \frac{2}{t^2}(t^2) = 2 - 4 + 2 = 0$.
Den fuldstændige homogene løsning er $y_h(t) = c_1 t + c_2 t^2$.

### Potensrækkemetoden (afsnit 7.1, sætning 7.6)
Hvis koefficienterne $a_1(t)$ og $a_2(t)$ i $y'' + a_1(t)y' + a_2(t)y = 0$ er analytiske i et punkt $t = 0$ (dvs. lig deres Taylorrækker på et interval $]-R, R[$), søges løsningen som en potensrække:

$$y(t) = \sum_{n=0}^\infty c_n t^n.$$

Fremgangsmåden er:
1. Differentiér potensrækken ledvist:
   $$y'(t) = \sum_{n=1}^\infty n c_n t^{n-1}, \qquad y''(t) = \sum_{n=2}^\infty n(n-1) c_n t^{n-2}.$$
2. Indsæt rækkerne i differentialligningen.
3. Udfør **indeksskift** så alle led i ligningen har samme potens $t^k$ (typisk $t^n$). Fx:
   $$\sum_{n=2}^\infty n(n-1)c_n t^{n-2} = \sum_{n=0}^\infty (n+2)(n+1)c_{n+2} t^n.$$
4. Saml koefficienterne foran hver potens af $t$. Da en potensrække kun er identisk nul hvis alle koefficienter er nul, sættes udtrykket foran $t^n$ lig nul. Dette etablerer en **rekursionsformel** for $c_n$.
5. Begyndelsesværdierne $y(0) = c_0$ og $y'(0) = c_1$ bestemmer de frie parametre.

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

Antag at systemet er **asymptotisk stabilt** (alle egenværdier for $A$ har strengt negativ realdel), og at systemet påvirkes af et periodisk inputsignal $u(t)$ med periode $T = \frac{2\pi}{\omega}$, der kan skrives som en konvergent Fourierrække:

$$u(t) = \sum_{n=-\infty}^\infty c_n e^{in\omega t}.$$

Da har systemet en entydig periodisk, stationær outputrespons $y_p(t)$, som er givet direkte ved overføringsfunktionen $H(s) = \mathbf c^\top (sI - A)^{-1}\mathbf b$:

$$y_p(t) = \sum_{n=-\infty}^\infty c_n H(in\omega) e^{in\omega t}.$$

Hver harmonisk svingning $e^{in\omega t}$ i indgangssignalet skaleres med den komplekse overføringsfunktions værdi $H(in\omega)$ i den pågældende frekvens.

**Eksempel.** Betragt det 1. ordens system $y' + 2y = u(t)$, hvor $u(t) = 4\cos(3t)$.
1. Systemet har koefficient $a_1 = 2 > 0$, så roden er $\lambda = -2 < 0$, og systemet er stabilt.
2. Overføringsfunktionen er $H(s) = \frac{1}{s + 2}$.
3. Indgangssignalet skrives på kompleks form: $u(t) = 2e^{i 3t} + 2e^{-i 3t}$, dvs. $c_1 = 2$ for frekvens $\omega = 3$, $c_{-1} = 2$ for frekvens $-3$, og alle andre $c_n = 0$.
4. Beregn responsen for frekvens $\omega = 3$:
   $$H(3i) = \frac{1}{2 + 3i} = \frac{2 - 3i}{2^2 + 3^2} = \frac{2 - 3i}{13}.$$
5. Outputtet bliver:
   $$y_p(t) = 2 H(3i)e^{i 3t} + 2 H(-3i)e^{-i 3t} = 2 \cdot 2 \operatorname{Re}\left( \frac{2 - 3i}{13}(\cos 3t + i\sin 3t) \right) = \frac{4}{13}\bigl(2\cos(3t) + 3\sin(3t)\bigr).$$

### Fysisk model: Bessel-funktioner og trommeskind

Mange vigtige differentialligninger med variable koefficienter opstår ved separation af variable i cylindriske eller sfæriske koordinater.
Bessel-ligningen af orden $\nu$:

$$t^2 \frac{d^2y}{dt^2} + t \frac{dy}{dt} + (t^2 - \nu^2)y = 0$$

beskriver de stående transversale bølger på en cirkulær elastisk membran (et trommeskind). Da koefficienterne er $a_1(t) = 1/t$ og $a_2(t) = 1 - \nu^2/t^2$, har ligningen et singulært punkt i $t = 0$.
Løsningerne findes via potensrækkemetoden (Frobenius-metoden) og resulterer i Bessel-funktionerne $J_\nu(t)$, hvis nulpunkter svarer til nodelinjerne (knudelinjer uden bevægelse) på trommeskindet.

### Filtermodel: Fourierrækkemetoden for periodisk støjbekæmpelse

Når et stabilt fysisk system udsættes for periodisk interferens eller støj, beregnes den stationære respons ved Fourierrækkemetoden:

```
Støjsignal u(t) = Sum c_n e^{inw t}
       |
       v
+-----------------------------+
| Stabilt dynamisk system     |
| Overføringsfunktion H(s)    |
+-----------------------------+
       |
       v
Filtreret respons y_p(t) = Sum c_n * H(inw) * e^{inw t}
```

Hvert harmonisk led i støjen skaleres med overføringsfunktionens værdi $H(in\omega)$. For et dæmpet system med $H(s) = \frac{1}{s+a}$ falder faktoren som $\frac{1}{|a + in\omega|} \approx \frac{1}{n\omega}$ for høje frekvenser, så højfrekvent støj udglattes automatisk.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 891 | 7.1 | Potensrækkemetoden på $t y'' - (t+1)y' + y = 0$ | Rekursion $(n-1)c_n = c_{n-1}$; to uafhængige løsninger $y_1(t) = 1+t$ og $y_2(t) = e^t$ |
| Eksamen dec 2017 Opg. 3 | 7.1 | Ligningen $y'' - xy = 0$ med potensrækker | Rekursion $a_{n+3} = \frac{a_n}{(n+3)(n+2)}$, $a_2 = 0$; konvergensradius $\rho = \infty$ |
| 202 | 6.1, 6.2 | Fourierrække for $f(x) = \frac{1}{4}x^2 - \frac{\pi}{2}x$ på $[0, 2\pi[$ | $a_0 = -\frac{\pi^2}{3}$, $a_n = \frac{1}{n^2}$, $b_n = 0$; afsnitssum $N \ge 10$; sum $\sum \frac{1}{n^4} = \frac{\pi^4}{90}$ |
| 326 | 7.1 | Potensrækkeløsning for $t y'' + 2y' + t y = 0$ | Løsning $y(t) = \sum_{n=0}^\infty \frac{(-1)^n}{(2n+1)!}t^{2n} = \frac{\sin t}{t}$ |
| 231 | 7.2 | Overføringsfunktion og Fourierrækkemetode for 1. ordens ligning | $H(s) = \frac{2}{s+2}$, stationær løsning $y(t) = -\frac{\pi^2}{6} + \sum_{n\neq 0} \frac{1}{n^2(2+in)}e^{int}$ |
| 926 | 7.1 | Ligningen $t y'' + (\alpha + t)y' + \beta y = 0$ | Rekursionsformel for koefficienterne afhænger af parametrene $\alpha, \beta$ |

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

**Opgave 231.** Systemet er givet ved $y' + 2y = u(t)$, hvor $u(t)$ er en periodisk påvirkning med Fourierrække $u(t) = \sum_{n \neq 0} \frac{1}{n^2} e^{int}$.
1. Systemet svarer til overføringsfunktionen:
   $$(s + 2)Y(s) = U(s) \implies H(s) = \frac{1}{s+2}.$$
   (Med en forstærkningsfaktor 2 bliver $H(s) = \frac{2}{s+2}$).
2. Systemet er asymptotisk stabilt, da polen er $s = -2 < 0$.
3. Indgangssignalet har Fourierkoefficienter $c_0 = 0$ (eller en konstant middelværdi) og $c_n = \frac{1}{n^2}$ for $n \neq 0$.
4. Ifølge sætning 7.8 findes den stationære løsning direkte ved:
   $$y(t) = \sum_{n=-\infty}^\infty c_n H(in) e^{int} = c_0 H(0) + \sum_{n \neq 0} \frac{1}{n^2} \frac{2}{2 + in} e^{int}.$$

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 11|Uge 11: Effekt og miniprojekt 2]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 13|Uge 13: Ulineære differentialligninger og repetition]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
