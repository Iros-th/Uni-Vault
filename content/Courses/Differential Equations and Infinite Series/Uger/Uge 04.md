---
publish: true
title: "01025 uge 4: Inhomogen stabilitet og uendelige rækker"
course: Differential Equations and Infinite Series
type: week
week: 4
tags:
  - differential-equations
  - ugenote
---

# Uge 4: Inhomogen stabilitet og uendelige rækker

## Læseplan

- Forelæsning: afsnit 2.9 (afrunder stabilitet), 4.1, 4.2 og 4.4.
- Læs selv: afsnit 4.3 (Taylors sætning).
- Øvelserne er erstattet af **miniprojekt 1** (se nedenfor).

## Begreber

### Stabilitet af inhomogene systemer (afsnit 2.9, definition 2.46 og 2.48, sætning 2.47 og 2.49)
Definition 2.46: det inhomogene system $\dot{\mathbf x} = A\mathbf x + \mathbf u$ er asymptotisk stabilt, hvis der for enhver påvirkning $\mathbf u$ gælder at to vilkårlige løsninger opfylder $\mathbf x_1(t) - \mathbf x_2(t) \to \mathbf 0$. Alle løsninger ender altså i den samme løsning, deraf ordet "stationær løsning". Da det skal gælde for alle $\mathbf u$, er det en egenskab ved $A$. Sætning 2.47: det sker netop når det homogene system er asymptotisk stabilt. Definition 2.48 og sætning 2.49: systemet er **BIBO-stabilt** (bounded input, bounded output: enhver begrænset påvirkning giver begrænsede løsninger) netop når det homogene system $\dot{\mathbf x} = A\mathbf x$ er asymptotisk stabilt. Man afgør det altså med egenværdier eller Routh-Hurwitz, præcis som i uge 3.

**Eksempel.** $\dot x = -2x + \cos t$: egenværdien er $-2 < 0$, så systemet er BIBO-stabilt. Alle løsninger er $x = \frac{2\cos t + \sin t}{5} + ce^{-2t}$ og forskellen mellem to af dem er $ce^{-2t} \to 0$. (Tjek af den partikulære del: $\frac{-2\sin t + \cos t}{5} + \frac{2(2\cos t + \sin t)}{5} = \cos t$.)

**Slides' 1-dimensionale billede (panserformlen).** $\dot x - \lambda_1x = u$ har $x(t) = ce^{\lambda_1t} + e^{\lambda_1t}\int e^{-\lambda_1t}u(t)\,dt$, altså en indsvingningsdel plus en stationær del. Hvis $\lambda_1 < 0$ er systemet asymptotisk stabilt, hvis $\lambda_1 = 0$ forløber naboløsninger parallelt (stabilt), og hvis $\lambda_1 > 0$ fjerner naboløsninger sig eksponentielt fra hinanden.

### Uegentlige integraler (afsnit 4.1)
Definition 4.1: $\int_a^\infty f(x)\,dx$ er defineret som $\lim_{t\to\infty}\int_a^t f(x)\,dx$, hvis grænsen findes (konvergent), ellers er integralet divergent. Slides' pointe for hele kapitel 4: følger, rækker og uegentlige integraler er alle grænseovergange, og symbolet kan både betyde et tal og en divergent grænseovergang. Regn aldrig med symbolet før eksistensen er vist. Med kvantorer: $g(t) \to a$ betyder $\forall\epsilon > 0\ \exists k: t > k \Rightarrow |g(t) - a| < \epsilon$.

**Eksempel.** $\int_1^\infty \frac{1}{x^2}dx = \lim_{t\to\infty}\left[-\frac1x\right]_1^t = \lim_{t\to\infty}\left(1 - \frac1t\right) = 1$. Derimod er $\int_1^\infty \frac1x dx = \lim \ln t = \infty$ divergent. Generelt er $\int_1^\infty x^{-a}dx$ konvergent netop når $a > 1$.

### Talfølger og konvergens (afsnit 4.2)
$x_n \to x$ betyder: for ethvert $\epsilon > 0$ findes $N$ så $|x_n - x| < \epsilon$ for alle $n > N$. I 01025 bruges definitionen med kvantorer, ikke kun regneregler. Slides skriver den $\forall\epsilon > 0\ \exists N \in \mathbb N: n \geq N \Rightarrow |x_n - s| \leq \epsilon$. Lemma 4.10: er $x_n \to x$ og $y_n \to y$, så går $\alpha x_n + \beta y_n \to \alpha x + \beta y$; tilsvarende for produkt, kvotient (ikke division med nul) og kontinuerte funktioner.

**Eksempel.** $x_n = \frac{2n+1}{n+3} \to 2$: $|x_n - 2| = \frac{|2n + 1 - 2n - 6|}{n+3} = \frac{5}{n+3}$, som er mindre end $\epsilon$ når $n > \frac5\epsilon - 3$. Vælg $N$ som et heltal større end $\frac5\epsilon$.

### Cauchyfølger (slides, ikke i bogen som definition)
Hvordan viser man konvergens uden at kende grænseværdien? $\{x_n\}$ er en Cauchyfølge, hvis $\forall\epsilon > 0\ \exists N: n, m \geq N \Rightarrow |x_n - x_m| \leq \epsilon$. I $\mathbb R$ og $\mathbb C$ er en følge konvergent netop når den er en Cauchyfølge (bevises i Topologiske grundbegreber og metriske rum).

**Eksempel.** $x_n = \frac1n$: for $n, m \geq N$ er $|x_n - x_m| \leq \max(\frac1n, \frac1m) \leq \frac1N$, som er $\leq \epsilon$ når $N \geq \frac1\epsilon$.

### Taylors sætning (afsnit 4.3, læses selv)
Taylorpolynomiet af grad $N$ omkring $x_0$ er $P_N(x) = \sum_{n=0}^N \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n$, og Taylors formel (lemma 4.12) giver restleddet $\frac{f^{(N+1)}(\xi)}{(N+1)!}(x - x_0)^{N+1}$ for et $\xi$ mellem $x_0$ og $x$.

**Eksempel.** $e^{0.1} \approx P_2(0.1) = 1 + 0.1 + 0.005 = 1.105$. Restleddet er højst $e^{0.1}\frac{0.1^3}{6} \approx 0.00018$; den sande værdi er $1.10517\ldots$, så fejlen er cirka $0.00017$.

### Uendelige rækker (afsnit 4.4)
$\sum_{n=1}^\infty a_n$ er konvergent med sum $S$, hvis afsnitssummerne $S_N = \sum_{n=1}^N a_n$ konvergerer mod $S$. Ellers divergent. Lemma 4.16: summationsindekset må skiftes, $\sum_{n=N}^\infty a_n = \sum_{n=0}^\infty a_{n+N}$, og at fjerne endeligt mange led ændrer ikke konvergensen. Lemma 4.17: konvergente rækker kan lægges sammen og ganges med konstanter ledvis (bevis: lemma 4.10 på afsnitssummerne). Det omvendte gælder ikke: $\sum(a_n + b_n)$ kan konvergere uden at $\sum a_n$ og $\sum b_n$ gør det.

**Summationsrækkefølgen er fast (slides).** En række er matematisk kun sin følge af afsnitssummer. Bytter man om på uendeligt mange led, får man andre afsnitssummer og dermed en anden række. Endeligt mange ombytninger er i orden, fordi $S_N$ er uændret når $N$ er forbi dem.

**Eksempel (teleskoprække).** $\frac{1}{n(n+1)} = \frac1n - \frac{1}{n+1}$, så $S_N = 1 - \frac{1}{N+1} \to 1$. Altså $\sum_{n=1}^\infty \frac{1}{n(n+1)} = 1$.

### $n$'te ledskriteriet (sætning 4.19)
Hvis $a_n \not\to 0$, er rækken divergent. Det omvendte gælder ikke: $\sum \frac1n$ er divergent selvom $\frac1n \to 0$.

**Eksempel.** $\sum_{n=1}^\infty \frac{2n}{n+5}$ er divergent, da leddene går mod $2$.

## Miniprojekt 1 (erstatter øvelserne)

Fysisk aflevering onsdag 30/9 kl. 8, opgave 2 i Möbius; 2 % af karakteren. Tre opgaver: lineær uafhængighed af funktionerne $t^ke^{\lambda t}$ (afsnit 1.2 og 4.2), overføringsfunktion for et elektrisk kredsløb (afsnit 1.4) og ligninger med komplekse koefficienter. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**MC:** svarene på 701 er 3 og 4. Ugens MC-opgave er 702 (EkstraOpgaver.pdf): et $2\times 2$ system med $y = x_2$, hvor man skal vælge overføringsfunktion med definitionsmængde, amplitudekarakteristik og fasekarakteristik (afsnit 2.6 og 2.7).

**Gode råd om afleveringer (SlidesUge4):** tydeligt studienummer, sidenumre, arkene i rigtig rækkefølge og "vend" ved fortsættelse på bagsiden. $\Leftrightarrow$ står kun mellem udsagn (ikke "$2 + 5 \Leftrightarrow 7$"). Et konstruktivt bevis eller en direkte udregning foretrækkes frem for et modstridsbevis. Opgavetekst, sætninger og definitioner skal ikke skrives af.

## Tjek dig selv

- [ ] Hvad er forskellen på stabilitet af det homogene og det inhomogene system, og hvad betyder BIBO-stabil?
- [ ] For hvilke $a$ konvergerer $\int_1^\infty x^{-a}dx$, og hvad er værdien?
- [ ] Hvordan bevises $x_n \to x$ direkte fra definitionen med $\epsilon$ og $N$?
- [ ] Hvorfor gælder $f(t_n) \to a$ for enhver følge $t_n \to \infty$ når $f(t) \to a$, men ikke omvendt?
- [ ] Hvad betyder det at en række er konvergent (afsnitssummer)?
- [ ] Hvad kan $n$'te ledskriteriet vise, og hvad kan det ikke?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 03|Uge 3]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 05|Uge 5: Konvergenskriterier og kvotientrækker]]
