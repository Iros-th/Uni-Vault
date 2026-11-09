---
publish: true
title: Differential Equations Flashcards
course: Differential Equations and Infinite Series
type: flashcards
tags:
  - flashcards
  - differential-equations
---

# Differentialligninger og uendelige rækker flashcards

Klik et kort for at vende det og se svaret. Prøv at svare aktivt for dig selv før du kigger. Kortene dækker hele pensum i 01025 (uge 1 til 13) og synkroniserer automatisk med [[Studie|Studie-træningsrummet]].

## 1. Lineære differentialligninger og overføringsfunktioner

> [!question]- Hvad er den karakteristiske ligning for $y'' + a_1 y' + a_2 y = 0$?
> $P(\lambda) = \lambda^2 + a_1 \lambda + a_2 = 0$. Rødderne bestemmer fundamentalløsningerne: to reelle rødder $\lambda_1 \neq \lambda_2$ giver $e^{\lambda_1 t}, e^{\lambda_2 t}$; en reel dobbeltrod $\lambda_0$ giver $e^{\lambda_0 t}, t e^{\lambda_0 t}$; komplekse rødder $\alpha \pm i\beta$ giver $e^{\alpha t}\cos(\beta t), e^{\alpha t}\sin(\beta t)$.

> [!question]- Hvad er overføringsfunktionen $H(s)$ for en $n$'te ordens ligning med input $u(t)$?
> For ligningen $P(D)y = Q(D)u$ er overføringsfunktionen $H(s) = \frac{Q(s)}{P(s)}$, hvor $P(s)$ og $Q(s)$ er de karakteristiske polynomier for henholdsvis output $y$ og input $u$. Den er defineret for alle $s \in \mathbb{C}$ undtagen rødderne i $P(s)$.

> [!question]- Hvad kræves der for at en $n$'te ordens lineær differentialligning er asymptotisk stabil?
> At alle rødder i det karakteristiske polynomium $P(\lambda) = 0$ har strengt negativ realdel: $\operatorname{Re}(\lambda_i) < 0$ for alle $i$.

> [!question]- Hvilket gæt bruges til partikulær løsning $y_p$ ved harmonisk påvirkning $u(t) = \cos(\omega t)$?
> Hvis $\pm i\omega$ ikke er rod i $P(\lambda)$, gættes $y_p(t) = A\cos(\omega t) + B\sin(\omega t)$. Alternativt regnes komplekst med $\tilde{u}(t) = e^{i\omega t}$, hvor $\tilde{y}_p(t) = H(i\omega)e^{i\omega t}$, og den reelle løsning findes som $\operatorname{Re}(\tilde{y}_p)$.

## 2. Lineære systemer og stabilitet

> [!question]- Hvordan defineres matrixeksponentialfunktionen $e^{At}$, og hvad bruges den til?
> $e^{At} = \sum_{k=0}^\infty \frac{t^k}{k!} A^k$. Den udgør fundamentalmatricen for det homogene system $\dot{\mathbf x} = A\mathbf x$. Løsningen med starttilstand $\mathbf x(0) = \mathbf x_0$ er entydigt $\mathbf x(t) = e^{At}\mathbf x_0$.

> [!question]- Hvordan beregnes $e^{At}$ når matricen $A$ kan diagonaliseres $A = V D V^{-1}$?
> $e^{At} = V e^{Dt} V^{-1}$, hvor $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ er diagonalmatricen af egenværdier, og $e^{Dt} = \operatorname{diag}(e^{\lambda_1 t}, \dots, e^{\lambda_n t})$. Søjlerne i $V$ er de tilhørende lineært uafhængige egenvektorer.

> [!question]- Hvad er Routh-Hurwitz betingelsen for asymptotisk stabilitet af et $2\times 2$ system $\dot{\mathbf x} = A\mathbf x$?
> Systemet er asymptotisk stabilt hvis og kun hvis matricen opfylder $\operatorname{tr}(A) < 0$ og $\det(A) > 0$.

> [!question]- Hvad er forskellen på asymptotisk stabilitet og BIBO-stabilitet?
> Asymptotisk stabilitet betyder, at alle løsninger til det homogene system konvergerer mod nul for $t \to \infty$. BIBO-stabilitet (Bounded-Input Bounded-Output) betyder, at ethvert begrænset inputsignal frembringer et begrænset outputsignal. For lineære tidsinvariante systemer medfører asymptotisk stabilitet altid BIBO-stabilitet.

## 3. Ulineære systemer og linearisering

> [!question]- Hvad er et stationært punkt for et autonomt system $\dot{\mathbf x} = \mathbf f(\mathbf x)$?
> En vektor $\mathbf x^* \in \mathbb{R}^n$, hvor $\mathbf f(\mathbf x^*) = \mathbf 0$. Den konstante funktion $\mathbf x(t) = \mathbf x^*$ er da en stationær ligevægtsløsning.

> [!question]- Hvordan afgøres stabiliteten af et stationært punkt $\mathbf x^*$ for et ulineært system?
> Man opstiller Jacobimatricen $D\mathbf f(\mathbf x^*)$. Hvis alle dens egenværdier opfylder $\operatorname{Re}(\lambda_i) < 0$, er punktet asymptotisk stabilt (sætning 3.7). Hvis mindst én egenværdi har $\operatorname{Re}(\lambda) > 0$, er punktet ustabilt. Hvis den maksimale realdel er 0, er lineariseringen inkonklusiv.

> [!question]- Hvad er en nullkline i et 2-dimensionalt fasesystem?
> Kurver i faserummet hvor den ene afledede er nul: $x_1$-nullklinen har $\dot x_1 = 0$ (rent lodrette hastighedsvektorer), og $x_2$-nullklinen har $\dot x_2 = 0$ (rent vandrette hastighedsvektorer). Deres skæringspunkter er systemets stationære punkter.

## 4. Talfølger og uendelige rækker

> [!question]- Hvad er forskellen på en nødvendig og en tilstrækkelig betingelse for konvergens af en række $\sum a_n$?
> At leddene går mod nul ($a_n \to 0$) er en **nødvendig** betingelse: hvis $a_n \not\to 0$, divergerer rækken altid. Men betingelsen er ikke **tilstrækkelig**: den harmoniske række $\sum \frac{1}{n}$ divergerer, selv om $\frac{1}{n} \to 0$.

> [!question]- Hvornår konvergerer en $p$-række $\sum_{n=1}^\infty \frac{1}{n^p}$?
> Rækken konvergerer hvis og kun hvis $p > 1$. Den divergerer for alle $p \le 1$. Resultatet bevises via integralkriteriet.

> [!question]- Hvordan anvendes ækvivalenskriteriet (grænsesammenligningskriteriet)?
> For rækker med positive led beregnes $C = \lim_{n\to\infty} \frac{a_n}{b_n}$. Hvis $0 < C < \infty$, er rækkerne $\sum a_n$ og $\sum b_n$ ækvivalente (enten konvergerer begge, eller begge divergerer). Man vælger $b_n$ ved at isolere de dominerende led for store $n$.

> [!question]- Hvad siger Leibniz kriterium for alternerende rækker?
> En alternerende række $\sum_{n=1}^\infty (-1)^{n+1} a_n$ med $a_n > 0$ konvergerer, hvis følgen $(a_n)$ er monotont aftagende og $\lim_{n\to\infty} a_n = 0$. Restfejlen opfylder $|S - S_N| \le a_{N+1}$.

> [!question]- Hvad er kvotientkriteriet, og hvornår er det inkonklusivt?
> Lad $C = \lim_{n\to\infty} |\frac{a_{n+1}}{a_n}|$. Hvis $C < 1$, er rækken absolut konvergent. Hvis $C > 1$, divergerer den. Hvis $C = 1$, giver kriteriet intet svar (fx giver alle $p$-rækker $C = 1$).

## 5. Potensrækker og uniform konvergens

> [!question]- Hvordan bestemmes konvergensradius $\rho$ for en potensrække $\sum_{n=0}^\infty c_n(x-x_0)^n$?
> Hvis grænseværdien $L = \lim_{n\to\infty} |\frac{c_{n+1}}{c_n}|$ eller $L = \lim_{n\to\infty} \sqrt[n]{|c_n|}$ eksisterer, er $\rho = \frac{1}{L}$ (med $\rho = \infty$ hvis $L = 0$, og $\rho = 0$ hvis $L = \infty$). Rækken konvergerer absolut for $|x-x_0| < \rho$ og divergerer for $|x-x_0| > \rho$. Endepunkterne skal undersøges separat.

> [!question]- Hvad siger Weierstrass' M-test for en funktionsrække $\sum f_n(x)$?
> Hvis der findes en konvergent talrække $\sum M_n < \infty$ så $|f_n(x)| \le M_n$ for alle $x \in A$ og alle $n$, så konvergerer rækken $\sum f_n(x)$ uniformt og absolut på mængden $A$.

> [!question]- Hvorfor er uniform konvergens vigtig ved integration og differentiation?
> Punktvis konvergens bevarer hverken kontinuitet, integraler eller differentialkvotienter. Uniform konvergens garanterer, at sumfunktionen er kontinuert, og tillader ledvis integration $\int \sum f_n = \sum \int f_n$ samt ledvis differentiation $\frac{d}{dx}\sum f_n = \sum f_n'$ (hvis den afledede række konvergerer uniformt).

## 6. Fourierrækker og Fourieranalyse

> [!question]- Hvad er Euler-Fourier formlerne for de reelle Fourierkoefficienter?
> For en $2\pi$-periodisk funktion: $a_0 = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\,dx$, $a_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\cos(nx)\,dx$, og $b_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x)\sin(nx)\,dx$. Husk at rækkens konstantled er $\frac{1}{2}a_0$, hvilket er signalets middelværdi.

> [!question]- Hvad gælder for Fourierkoefficienterne for lige og ulige funktioner?
> Er $f$ lige, er $b_n = 0$ for alle $n$, og $a_n = \frac{2}{\pi}\int_0^\pi f(x)\cos(nx)\,dx$ (ren cosinusrække). Er $f$ ulige, er $a_n = 0$ for alle $n \ge 0$, og $b_n = \frac{2}{\pi}\int_0^\pi f(x)\sin(nx)\,dx$ (ren sinusrække).

> [!question]- Hvad konvergerer en Fourierrække mod ifølge Fouriers sætning?
> For en stykkevis kontinuert differentiabel $2\pi$-periodisk funktion konvergerer rækken i ethvert punkt mod $\frac{f(x^+) + f(x^-)}{2}$. Hvor $f$ er kontinuert, er summen lig $f(x)$. I et springpunkt er summen midtpunktet af springet.

> [!question]- Hvordan hænger de komplekse Fourierkoefficienter $c_n$ sammen med de reelle $(a_n, b_n)$?
> $c_0 = \frac{1}{2}a_0$, $c_n = \frac{1}{2}(a_n - ib_n)$, og $c_{-n} = \frac{1}{2}(a_n + ib_n)$ for $n \ge 1$. For reelle funktioner gælder spejlsymmetrien $c_{-n} = \overline{c_n}$.

> [!question]- Hvad udsiger Parsevals sætning, og hvordan fortolkes den fysisk?
> $\frac{1}{2\pi}\int_{-\pi}^\pi |f(x)|^2\,dx = \sum_{n=-\infty}^\infty |c_n|^2 = \frac{1}{4}a_0^2 + \frac{1}{2}\sum_{n=1}^\infty (a_n^2 + b_n^2)$. Venstresiden er signalets samlede effekt $P(f)$, og sætningen udtrykker at den samlede energi bevares og er lig summen af energierne i de enkelte frekvenskomponenter.

> [!question]- Hvordan afgøres det hvor mange led $N$ der skal med for at bevare $\delta$ (fx 90 %) af signaleffekten?
> Man kræver $P(S_N) \ge \delta P(f)$, hvilket er ækvivalent med at halen opfylder $\sum_{|n|>N} |c_n|^2 \le (1-\delta)P(f)$ eller $\frac{1}{2}\sum_{n=N+1}^\infty (a_n^2 + b_n^2) \le (1-\delta)P(f)$.

## 7. Variable koefficienter og avancerede metoder

> [!question]- Hvad er reduktion af orden (d'Alemberts metode) for en 2. ordens lineær ligning?
> Hvis $y_1(t)$ er en kendt homogen løsning til $y'' + a_1(t)y' + a_2(t)y = 0$, sættes $y(t) = v(t)y_1(t)$. En anden lineært uafhængig løsning er $y_2(t) = y_1(t)\int \frac{1}{y_1(t)^2\,\Omega(t)}\,dt$, hvor $\Omega(t) = e^{\int a_1(t)\,dt}$.

> [!question]- Hvordan løses en differentialligning med potensrækkemetoden?
> Man gætter $y(t) = \sum_{n=0}^\infty c_n t^n$, differentierer ledvist, indsætter i ligningen, foretager indeksskift så alle led har samme potens $t^n$, og sætter den samlede koefficient foran hver potens lig nul. Dette giver en rekursionsformel for $c_n$.

> [!question]- Hvad er Fourierrækkemetoden for stabile systemer (sætning 7.8)?
> Hvis et stabilt system med overføringsfunktion $H(s)$ påvirkes af et periodisk input $u(t) = \sum_{n=-\infty}^\infty c_n e^{in\omega t}$, er den stationære periodiske outputrespons givet ved $y_p(t) = \sum_{n=-\infty}^\infty c_n H(in\omega)e^{in\omega t}$.

## Links

- [[Studie|Studie-træningsrum (Lær, Test, Genlær)]]
- [[Self-Tests/Differential Equations Test|Differential Equations Selvtest]]
- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
- [[Courses/Differential Equations and Infinite Series/Past Exams|Gamle eksamensopgaver]]
- [[Differential Equations and Infinite Series]]
