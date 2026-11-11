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

## Hjemmeopgave 2

### Opgave 903

Betragt $a_0y'' + a_1y' + a_2y = 0$, lad $\lambda_0 \in \mathbb R$ være rod i karakterligningen $a_0\lambda^2 + a_1\lambda + a_2 = 0$, og sæt $y(t) = te^{\lambda_0 t}$.

**(i)** Vi differentierer:

$$y' = e^{\lambda_0 t}(1 + \lambda_0 t), \qquad y'' = e^{\lambda_0 t}(2\lambda_0 + \lambda_0^2 t).$$

Indsat:

$$a_0y'' + a_1y' + a_2y = e^{\lambda_0 t}\Bigl(t\bigl(a_0\lambda_0^2 + a_1\lambda_0 + a_2\bigr) + 2a_0\lambda_0 + a_1\Bigr) = (2a_0\lambda_0 + a_1)e^{\lambda_0 t},$$

fordi $a_0\lambda_0^2 + a_1\lambda_0 + a_2 = 0$, da $\lambda_0$ er rod.

**(ii)** Rødderne er $\lambda = \frac{-a_1 \pm \sqrt{a_1^2 - 4a_0a_2}}{2a_0}$. Er $\lambda_0$ dobbeltrod, er diskriminanten $0$, så $\lambda_0 = \frac{-a_1}{2a_0}$, dvs. $2a_0\lambda_0 + a_1 = 0$. Ifølge (i) er højresiden da $0$ for alle $t$, så $y = te^{\lambda_0 t}$ er en løsning.

**(iii)** Er $\lambda_0$ en reel rod men ikke dobbeltrod, er diskriminanten $D = a_1^2 - 4a_0a_2 > 0$ og $\lambda_0 = \frac{-a_1 \pm \sqrt D}{2a_0}$, så $2a_0\lambda_0 + a_1 = \pm\sqrt D \neq 0$. Da $e^{\lambda_0 t} \neq 0$ for alle $t$, er $(2a_0\lambda_0 + a_1)e^{\lambda_0 t}$ ikke nulfunktionen, og $y = te^{\lambda_0 t}$ er derfor ikke en løsning.

### Opgave 912 (lemma A.16)

**Påstand.** Lad $V$ være et komplekst vektorrum og $\mathbf u, \mathbf v \in V$. Hvis $\mathbf w_1 = \mathbf u + i\mathbf v$ og $\mathbf w_2 = \mathbf u - i\mathbf v$ er lineært uafhængige, så er $\mathbf u$ og $\mathbf v$ lineært uafhængige.

**Bevis.** Lad $c_1, c_2 \in \mathbb C$ og antag $c_1\mathbf u + c_2\mathbf v = \mathbf 0$. Af definitionen af $\mathbf w_1, \mathbf w_2$ fås

$$\mathbf u = \tfrac12(\mathbf w_1 + \mathbf w_2), \qquad \mathbf v = \tfrac{1}{2i}(\mathbf w_1 - \mathbf w_2).$$

Indsat:

$$\Bigl(\frac{c_1}{2} + \frac{c_2}{2i}\Bigr)\mathbf w_1 + \Bigl(\frac{c_1}{2} - \frac{c_2}{2i}\Bigr)\mathbf w_2 = \mathbf 0.$$

Da $\mathbf w_1, \mathbf w_2$ er lineært uafhængige, er begge koefficienter $0$:

$$\frac{c_1}{2} + \frac{c_2}{2i} = 0, \qquad \frac{c_1}{2} - \frac{c_2}{2i} = 0.$$

Lægges ligningerne sammen, fås $c_1 = 0$; trækkes de fra hinanden, fås $\frac{c_2}{i} = 0$, altså $c_2 = 0$. Den eneste linearkombination af $\mathbf u$ og $\mathbf v$ der giver $\mathbf 0$ er den trivielle, så $\mathbf u$ og $\mathbf v$ er lineært uafhængige. $\square$

## Hjemmeopgave 3

### Opgave 915

Betragt $\dot{\mathbf x} = A\mathbf x + \mathbf b u$ med $u(t) = e^{st}$, hvor $\det(A - sI) \neq 0$. Vis at $\mathbf x(t) = \mathbf x_0e^{st}$ er en løsning hvis og kun hvis $\mathbf x_0 = -(A - sI)^{-1}\mathbf b$.

**Bevis.** For $\mathbf x(t) = \mathbf x_0e^{st}$ er $\dot{\mathbf x}(t) = s\mathbf x_0e^{st}$. Derfor gælder for alle $t$:

$$\dot{\mathbf x} = A\mathbf x + \mathbf b e^{st} \iff s\mathbf x_0e^{st} = A\mathbf x_0e^{st} + \mathbf b e^{st} \iff s\mathbf x_0 = A\mathbf x_0 + \mathbf b,$$

hvor vi har divideret med $e^{st} \neq 0$ (og ganget med den igen i den anden retning). Videre er

$$s\mathbf x_0 = A\mathbf x_0 + \mathbf b \iff (A - sI)\mathbf x_0 = -\mathbf b \iff \mathbf x_0 = -(A - sI)^{-1}\mathbf b,$$

hvor den sidste biimplikation bruger at $A - sI$ er invertibel, fordi $\det(A - sI) \neq 0$. Alle skridt er biimplikationer, så påstanden gælder i begge retninger. $\square$

## Miniprojekt 1

### Opgave 1: lineær uafhængighed

Lad $\lambda_1 < \lambda_2$ og sæt $\alpha = \lambda_2 - \lambda_1 > 0$. Antag at

$$c_1e^{\lambda_1t} + c_2te^{\lambda_1t} + c_3t^2e^{\lambda_1t} + c_4e^{\lambda_2t} + c_5te^{\lambda_2t} + c_6t^2e^{\lambda_2t} = 0 \quad \text{for alle } t \in \mathbb R. \tag{1}$$

Vi bruger flere gange at $t^ke^{-\alpha t} \to 0$ for $t \to \infty$ når $\alpha > 0$ og $k \geq 0$.

**(i)** For $t \neq 0$ divideres (1) med $t^2e^{\lambda_2 t}$:

$$\frac{c_1}{t^2}e^{-\alpha t} + \frac{c_2}{t}e^{-\alpha t} + c_3e^{-\alpha t} + \frac{c_4}{t^2} + \frac{c_5}{t} + c_6 = 0.$$

For $t \to +\infty$ går de fem første led mod $0$, så venstresiden går mod $c_6$. Da venstresiden er $0$ for alle $t$, er $c_6 = 0$.

**(ii)** Med $c_6 = 0$ divideres (1) med $te^{\lambda_2 t}$:

$$\frac{c_1}{t}e^{-\alpha t} + c_2e^{-\alpha t} + c_3te^{-\alpha t} + \frac{c_4}{t} + c_5 = 0.$$

For $t \to +\infty$ går venstresiden mod $c_5$, så $c_5 = 0$.

**(iii)** Med $c_5 = c_6 = 0$ divideres med $e^{\lambda_2 t}$: $c_1e^{-\alpha t} + c_2te^{-\alpha t} + c_3t^2e^{-\alpha t} + c_4 = 0$, og $t \to \infty$ giver $c_4 = 0$. Tilbage står $c_1e^{\lambda_1 t} + c_2te^{\lambda_1 t} + c_3t^2e^{\lambda_1 t} = 0$. Division med $e^{\lambda_1 t}$ giver $c_1 + c_2t + c_3t^2 = 0$ for alle $t$. Samme argument (divider med $t^2$, lad $t \to \infty$) giver $c_3 = 0$, derefter $c_2 = 0$ og til sidst $c_1 = 0$.

**(iv)** Alle koefficienter i (1) er $0$, så de seks funktioner er lineært uafhængige.

**(v)** Antag $f(t) \to a$ for $t \to \infty$, og lad $t_n \to \infty$. Lad $\epsilon > 0$. Der findes $k$ så $t > k \Rightarrow |f(t) - a| < \epsilon$. Da $t_n \to \infty$, findes (med $C = k$) et $N$ så $n > N \Rightarrow t_n > k$. For $n > N$ er altså $|f(t_n) - a| < \epsilon$, dvs. $f(t_n) \to a$.

Den anden vej gælder ikke. Funktionen $g(t) = \sin(\pi t)$ har $g(n) = 0$ for alle $n \in \mathbb N$, men $g(n + \frac12) = \pm 1$, så $g(t)$ går ikke mod $0$ for $t \to \infty$.

**(vi)** Antag $c_1e^{\lambda_1t} + c_2te^{\lambda_1t} + a_4e^{\lambda_2t}\cos(\omega t) + b_4e^{\lambda_2t}\sin(\omega t) = 0$ for alle $t$. Division med $e^{\lambda_2 t}$ giver

$$c_1e^{-\alpha t} + c_2te^{-\alpha t} + a_4\cos(\omega t) + b_4\sin(\omega t) = 0. \tag{2}$$

Sæt $t_n = \frac{2\pi n}{\omega}$. Så er $\cos(\omega t_n) = 1$ og $\sin(\omega t_n) = 0$, og (2) giver $c_1e^{-\alpha t_n} + c_2t_ne^{-\alpha t_n} + a_4 = 0$. Funktionen $c_1e^{-\alpha t} + c_2te^{-\alpha t}$ går mod $0$ for $t \to \infty$, så ifølge (v) går den mod $0$ langs $t_n \to \infty$. Altså $a_4 = 0$.

**(vii)** Vælg $t_n = \frac{\pi/2 + 2\pi n}{\omega}$. Så er $\cos(\omega t_n) = 0$ og $\sin(\omega t_n) = 1$, og samme argument giver $b_4 = 0$. Tilbage står $c_1e^{\lambda_1 t} + c_2te^{\lambda_1 t} = 0$, dvs. $c_1 + c_2t = 0$ for alle $t$, så $c_1 = c_2 = 0$.

### Opgave 3: komplekse koefficienter

Nu er $a_0, \dots, a_n \in \mathbb C$, og $P(\lambda) = a_0\lambda^n + \dots + a_n$.

**(i) Ja.** For ethvert $\lambda \in \mathbb C$ er $\frac{d^k}{dt^k}e^{\lambda t} = \lambda^ke^{\lambda t}$. Indsat i ligningen fås $P(\lambda)e^{\lambda t}$, som er $0$ når $\lambda$ er rod. At koefficienterne er komplekse ændrer ikke udregningen.

**(ii) Nej.** For $y' + iy = 0$ er $P(\lambda) = \lambda + i$ med eneste rod $-i$. Den konjugerede $i$ er ikke rod, da $P(i) = 2i \neq 0$. (Argumentet for reelle koefficienter bruger $\overline{P(\lambda)} = P(\overline\lambda)$, som kræver reelle koefficienter.)

**(iii) Ja.** Antag $c_1e^{\lambda_1t} + c_2e^{\lambda_2t} = 0$ for alle $t$ med $\lambda_1 \neq \lambda_2$. Sæt $t = 0$: $c_1 + c_2 = 0$. Differentiér og sæt $t = 0$: $\lambda_1c_1 + \lambda_2c_2 = 0$. Indsættes $c_1 = -c_2$, fås $c_2(\lambda_2 - \lambda_1) = 0$, så $c_2 = 0$ og $c_1 = 0$. Argumentet bruger ikke at koefficienterne er reelle.

**(iv) Nej, ikke altid.** Ligningen $y' + iy = 0$ har de fuldstændige løsninger $y(t) = ce^{-it}$, $c \in \mathbb C$ (løsningsrummet har dimension $1$). Er $y$ reel, er $y(0) = c$ reel og $y(\frac\pi2) = -ic$ reel, så $c$ er både reel og rent imaginær, dvs. $c = 0$. Nulfunktionen er altså den eneste reelle løsning.

## Hjemmeopgave 4

### Opgave A

Antag at $a_n \neq 0$ og $\left|\frac{a_{n+1}}{a_n}\right| \to C < 1$ for $n \to \infty$ (leddene må være komplekse).

**1.** Ifølge kvotientkriteriet (sætning 4.30) er $\sum_{n=1}^\infty a_n$ absolut konvergent, og dermed konvergent.

**2.** Lad $b_n = (n^2 + 7n + 3)a_n$. Da $n^2 + 7n + 3 > 0$ for $n \geq 1$, er $b_n \neq 0$, og

$$\left|\frac{b_{n+1}}{b_n}\right| = \frac{(n+1)^2 + 7(n+1) + 3}{n^2 + 7n + 3}\left|\frac{a_{n+1}}{a_n}\right| = \frac{n^2 + 9n + 11}{n^2 + 7n + 3}\left|\frac{a_{n+1}}{a_n}\right| \to 1 \cdot C = C < 1.$$

Kvotientkriteriet giver at $\sum b_n$ er absolut konvergent.

**3.** Lad $P(n) = p_mn^m + \dots + p_0$ med $p_m \neq 0$ (koefficienterne må være komplekse). Et polynomium af grad $m$ har højst $m$ rødder, så der findes $M \in \mathbb N$ med $P(n) \neq 0$ for alle $n \geq M$. For $n \geq M$ er

$$\left|\frac{b_{n+1}}{b_n}\right| = \left|\frac{P(n+1)}{P(n)}\right|\left|\frac{a_{n+1}}{a_n}\right|.$$

Da $\frac{P(n+1)}{n^m} \to p_m$ og $\frac{P(n)}{n^m} \to p_m$, er $\frac{P(n+1)}{P(n)} \to \frac{p_m}{p_m} = 1$, så $\left|\frac{b_{n+1}}{b_n}\right| \to C < 1$. Kvotientkriteriet anvendt på rækken fra $n = M$ giver at $\sum_{n=M}^\infty b_n$ er absolut konvergent. Da

$$\sum_{n=1}^\infty b_n = \sum_{n=1}^{M-1} b_n + \sum_{n=M}^\infty b_n,$$

og den første sum er endelig, er $\sum_{n=1}^\infty b_n$ absolut konvergent.

## Hjemmeopgave 6

### Eksamen maj 2024, del B opgave 1

**Absolut konvergens af $\sum_{n=1}^\infty (-1)^n\frac{100+n}{2+n^3}$.** Sæt $c_n = \frac{100+n}{2+n^3} > 0$ og sammenlign med $\frac{1}{n^2}$:

$$\frac{c_n}{1/n^2} = \frac{100n^2 + n^3}{n^3 + 2} \to 1.$$

Rækkerne er ækvivalente, og $\sum\frac{1}{n^2}$ er konvergent, så $\sum c_n = \sum|a_n|$ er konvergent ifølge ækvivalenskriteriet. Rækken er absolut konvergent.

**Rækken $\sum_{n=1}^\infty (-1)^n\frac{100+n}{2+n^k}$, $k \in \mathbb N$.** Leddenes numeriske værdi er $c_n = \frac{100+n}{2+n^k}$, og $\frac{c_n}{1/n^{k-1}} = \frac{100n^{k-1} + n^k}{2 + n^k} \to 1$.

- **Absolut konvergens:** $\sum c_n$ er ækvivalent med $\sum\frac{1}{n^{k-1}}$, som er konvergent netop når $k - 1 > 1$. Mindste $k$ er altså $k = 3$.
- **$k = 1$:** $\frac{100+n}{2+n} \to 1$, så leddene går ikke mod $0$, og rækken er divergent ($n$'te ledskriteriet).
- **$k = 2$:** $c_n = f(n)$ med $f(x) = \frac{100+x}{2+x^2}$. Her er

$$f'(x) = \frac{(2+x^2) - 2x(100+x)}{(2+x^2)^2} = \frac{2 - 200x - x^2}{(2+x^2)^2} < 0 \quad \text{for } x \geq 1,$$

så $c_n$ er positiv og aftagende, og $c_n \to 0$. Leibniz' kriterium giver at rækken er konvergent (betinget, da $k = 2 < 3$).

Mindste $k$ der giver konvergens er derfor $k = 2$.

### Spiseseddelopgave 1 (redigeret opgave 811)

Antag $|a_{n+1}| \leq \frac12|a_n|$ for alle $n \in \mathbb N$.

**(i)** Induktion i $n$. For $n = 1$ står der $|a_1| \leq |a_1|$. Antag $|a_n| \leq |a_1|\left(\frac12\right)^{n-1}$. Så er $|a_{n+1}| \leq \frac12|a_n| \leq |a_1|\left(\frac12\right)^n$, som er påstanden for $n + 1$.

**(ii)** $\sum_{n=1}^\infty |a_1|\left(\frac12\right)^{n-1} = 2|a_1|$ er en konvergent kvotientrække. Ifølge (i) og sammenligningskriteriet er $\sum|a_n|$ konvergent, dvs. $\sum a_n$ er absolut konvergent.

**(iii)** Antag $|a_{n+1}| \leq C|a_n|$ for alle $n$, med $0 < C < 1$. Præcis som i (i) vises ved induktion at $|a_n| \leq |a_1|C^{n-1}$. Rækken $\sum_{n=1}^\infty |a_1|C^{n-1} = \frac{|a_1|}{1-C}$ er en konvergent kvotientrække, da $0 < C < 1$. Sammenligningskriteriet giver at $\sum|a_n|$ er konvergent, så $\sum a_n$ er absolut konvergent. Bemærk at vi ikke har brugt at $\frac{|a_{n+1}|}{|a_n|}$ konvergerer.

**(iv)** Nej, man kan ikke slutte noget. Både $a_n = \frac1n$ og $a_n = \frac1{n^2}$ opfylder $|a_{n+1}| \leq 1 \cdot |a_n|$, men $\sum\frac1n$ er divergent og $\sum\frac1{n^2}$ er konvergent.

## Hjemmeopgave 7

### Eksamen B-E21, opgave 4

Betragt $f(t) = \sum_{n=1}^\infty \frac{t\cos(nt)}{n^3}$.

**1. Uniform konvergens på $[-a, a]$.** For $t \in [-a, a]$ er

$$\left|\frac{t\cos(nt)}{n^3}\right| \leq \frac{a}{n^3},$$

og $\sum\frac{a}{n^3}$ er konvergent. Rækken har altså en konvergent majorantrække på $[-a,a]$ og er derfor uniformt konvergent der (majorantsætningen, sætning 5.33 i kursets udgave).

**2. Valg af $N$ på $[-5, 5]$.** For $t \in [-5,5]$ er

$$\left|f(t) - \sum_{n=1}^N\frac{t\cos(nt)}{n^3}\right| \leq \sum_{n=N+1}^\infty \frac{5}{n^3}.$$

Da $x \mapsto x^{-3}$ er aftagende, er $\frac{1}{n^3} \leq \int_{n-1}^{n}\frac{dx}{x^3}$, så

$$\sum_{n=N+1}^\infty \frac{5}{n^3} \leq 5\int_N^\infty \frac{dx}{x^3} = \frac{5}{2N^2}.$$

Vi kræver $\frac{5}{2N^2} \leq 10^{-2}$, dvs. $N^2 \geq 250$, dvs. $N \geq 15.82$. Altså virker $N = 16$ (vurderingen giver $\frac{5}{512} \approx 0.0098$).

**3. Majorant på hele $\mathbb R$? Nej.** For fast $n$ er $\sup_{t \in \mathbb R}\left|\frac{t\cos(nt)}{n^3}\right| = \infty$; fx er $\frac{t\cos(nt)}{n^3} = \frac{2\pi k}{n^4}$ for $t = \frac{2\pi k}{n}$, som er vilkårligt stort. Der findes derfor ingen tal $k_n$ med $\left|\frac{t\cos(nt)}{n^3}\right| \leq k_n$ for alle $t$.

**4. Konvergens for alle $t$? Ja.** For fast $t$ er $\left|\frac{t\cos(nt)}{n^3}\right| \leq \frac{|t|}{n^3}$, og $\sum\frac{|t|}{n^3}$ er konvergent. Rækken er altså absolut konvergent for hvert $t \in \mathbb R$.

**5. Er $f$ kontinuert på $\mathbb R$? Ja.** Lad $t_0 \in \mathbb R$ og vælg $a > |t_0|$. Leddene $\frac{t\cos(nt)}{n^3}$ er kontinuerte, og ifølge 1. har rækken en konvergent majorant på $[-a, a]$. Så er sumfunktionen kontinuert på $[-a,a]$ (sætning 5.35 i kursets udgave), specielt i $t_0$, som ligger i det indre af intervallet. Da $t_0$ var vilkårlig, er $f$ kontinuert på hele $\mathbb R$. Bemærk at kontinuitet er en lokal egenskab, så vi behøver ikke en majorant på hele $\mathbb R$.

## Miniprojekt 2

Løsningen tilføjes efter afleveringsfristen.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- [[Differential Equations and Infinite Series]]
