---
publish: true
title: "01025 uge 4: Stabilitet af inhomogene systemer og uendelige rækker"
course: Differential Equations and Infinite Series
type: week
week: 4
tags:
  - differential-equations
  - ugenote
---

# Uge 4: Stabilitet af inhomogene systemer og uendelige rækker

> **Kilde:** Ugeseddel 4 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 2.9 og 4.1 til 4.4. SlidesUge4.pdf og WeeklyNotes3.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning: afsnit 2.9 (afrunder stabilitet), 4.1, 4.2 og 4.4.
- Læs selv: afsnit 4.3 (Taylors sætning).
- Øvelserne er erstattet af **miniprojekt 1** (se nedenfor).

## Begreber

### Stabilitet af inhomogene systemer (afsnit 2.9, sætning 2.45 og 2.47)
Det inhomogene system $\dot{\mathbf x} = A\mathbf x + \mathbf b u$ kaldes asymptotisk stabilt, hvis forskellen mellem to vilkårlige løsninger går mod nul. Sætning 2.45: det sker netop når det homogene system er asymptotisk stabilt. Sætning 2.47: systemet er **BIBO-stabilt** (begrænset input giver begrænset output) netop når det homogene system $\dot{\mathbf x} = A\mathbf x$ er asymptotisk stabilt. Man afgør det altså med egenværdier eller Routh-Hurwitz, præcis som i uge 3.

**Eksempel.** $\dot x = -2x + \cos t$: egenværdien er $-2 < 0$, så systemet er BIBO-stabilt. Alle løsninger er $x = \frac{2\cos t + \sin t}{5} + ce^{-2t}$ og forskellen mellem to af dem er $ce^{-2t} \to 0$. (Tjek af den partikulære del: $\frac{-2\sin t + \cos t}{5} + \frac{2(2\cos t + \sin t)}{5} = \cos t$.)

### Uegentlige integraler (afsnit 4.1)
$\int_1^\infty f(x)\,dx$ er defineret som $\lim_{t\to\infty}\int_1^t f(x)\,dx$, hvis grænsen findes.

**Eksempel.** $\int_1^\infty \frac{1}{x^2}dx = \lim_{t\to\infty}\left[-\frac1x\right]_1^t = \lim_{t\to\infty}\left(1 - \frac1t\right) = 1$. Derimod er $\int_1^\infty \frac1x dx = \lim \ln t = \infty$ divergent. Generelt er $\int_1^\infty x^{-a}dx$ konvergent netop når $a > 1$.

### Talfølger og konvergens (afsnit 4.2)
$x_n \to x$ betyder: for ethvert $\epsilon > 0$ findes $N$ så $|x_n - x| < \epsilon$ for alle $n > N$. I 01025 skal du kunne bruge definitionen med kvantorer, ikke kun regneregler.

**Eksempel.** $x_n = \frac{2n+1}{n+3} \to 2$: $|x_n - 2| = \frac{|2n + 1 - 2n - 6|}{n+3} = \frac{5}{n+3}$, som er mindre end $\epsilon$ når $n > \frac5\epsilon - 3$. Vælg $N$ som et heltal større end $\frac5\epsilon$.

### Taylors sætning (afsnit 4.3, læses selv)
Taylorpolynomiet af grad $N$ omkring $x_0$ er $P_N(x) = \sum_{n=0}^N \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n$, og Taylors formel (lemma 4.12) giver restleddet $\frac{f^{(N+1)}(\xi)}{(N+1)!}(x - x_0)^{N+1}$ for et $\xi$ mellem $x_0$ og $x$.

**Eksempel.** $e^{0.1} \approx P_2(0.1) = 1 + 0.1 + 0.005 = 1.105$. Restleddet er højst $e^{0.1}\frac{0.1^3}{6} \approx 0.00018$; den sande værdi er $1.10517\ldots$, så fejlen er cirka $0.00017$.

### Uendelige rækker (afsnit 4.4)
$\sum_{n=1}^\infty a_n$ er konvergent med sum $S$, hvis afsnitssummerne $S_N = \sum_{n=1}^N a_n$ konvergerer mod $S$. Ellers divergent. Lemma 4.16: at fjerne endeligt mange led ændrer ikke konvergensen. Lemma 4.17: konvergente rækker kan lægges sammen og ganges med konstanter ledvis.

**Eksempel (teleskoprække).** $\frac{1}{n(n+1)} = \frac1n - \frac{1}{n+1}$, så $S_N = 1 - \frac{1}{N+1} \to 1$. Altså $\sum_{n=1}^\infty \frac{1}{n(n+1)} = 1$.

### $n$'te ledskriteriet (sætning 4.19)
Hvis $a_n \not\to 0$, er rækken divergent. Det omvendte gælder ikke: $\sum \frac1n$ er divergent selvom $\frac1n \to 0$.

**Eksempel.** $\sum_{n=1}^\infty \frac{2n}{n+5}$ er divergent, da leddene går mod $2$.

## Miniprojekt 1 (erstatter øvelserne)

Afleveres onsdag 30/9 kl. 8, fysisk, og opgave 2 i Möbius. Det tæller 2 % af karakteren. Bedømmelsen vægter matematisk korrekthed højest og læsbarhed lidt.

- **Opgave 1 (lineær uafhængighed, afsnit 1.2 og 4.2):** vis at $e^{\lambda_1 t}, te^{\lambda_1 t}, t^2e^{\lambda_1 t}, e^{\lambda_2 t}, te^{\lambda_2 t}, t^2e^{\lambda_2 t}$ er lineært uafhængige ved at dividere med den hurtigst voksende funktion og lade $t \to \infty$. Bagefter med komplekse rødder, hvor man lader $t \to \infty$ gennem en talfølge $t_n = \frac{2\pi n}{\omega}$ (delspørgsmål (v) til (vii)).
- **Opgave 2 (overføringsfunktion, afsnit 1.4):** stillet i Möbius; design af en diskantknap i et elektrisk kredsløb.
- **Opgave 3 (komplekse koefficienter):** ja/nej-spørgsmål med begrundelse om ligninger hvor $a_0, \dots, a_n$ er komplekse. Inspiration: $y' + iy = 0$.

Noten her løser ikke miniprojektet, da det er en bedømt aflevering.

**MC:** svarene på 701 er 3 og 4. Løs nu opgave 702 (EkstraOpgaver.pdf).

## Tjek dig selv

- [ ] Hvad er forskellen på stabilitet af det homogene og det inhomogene system, og hvad betyder BIBO-stabil?
- [ ] Kan jeg afgøre om $\int_1^\infty x^{-a}dx$ konvergerer, og regne værdien ud?
- [ ] Kan jeg bevise $x_n \to x$ direkte fra definitionen med $\epsilon$ og $N$?
- [ ] Kan jeg forklare hvorfor $f(t_n) \to a$ for enhver følge $t_n \to \infty$ når $f(t) \to a$, men ikke omvendt?
- [ ] Ved jeg hvad det betyder at en række er konvergent (afsnitssummer)?
- [ ] Kan jeg bruge $n$'te ledskriteriet, og ved jeg at det kun kan vise divergens?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 03|Uge 3]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 05|Uge 5: Konvergenskriterier og kvotientrækker]]
