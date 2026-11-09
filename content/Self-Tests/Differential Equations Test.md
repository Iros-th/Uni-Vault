---
publish: true
title: Differential Equations Test
course: Differential Equations and Infinite Series
type: self-test
tags:
  - self-test
  - differential-equations
---

# Selvtest: Differentialligninger og uendelige rækker

Prøv at løse hver opgave selv på papir, før du klikker "Vis svar". Testen dækker de typiske opgavetyper fra de skriftlige eksamener i 01025 og kan også trænes interaktivt i [[Studie|Studie-træningsrummet]].

**1.** Hvad er den fuldstændige løsning til den homogene differentialligning $y''' + 6y'' + 9y' = 0$?

> [!success]- Vis svar
> Den karakteristiske ligning er $\lambda^3 + 6\lambda^2 + 9\lambda = \lambda(\lambda + 3)^2 = 0$. Rødderne er $\lambda_1 = 0$ (simpel rod) og $\lambda_2 = -3$ (dobbeltrod). Den fuldstændige reelle løsning er derfor:
> $$y(t) = c_1 + c_2 e^{-3t} + c_3 t e^{-3t}, \quad c_1, c_2, c_3 \in \mathbb{R}.$$

**2.** Bestem overføringsfunktionen $H(s)$ for differentialligningen $y''' + 3y'' + 2y' = u' + u$, og angiv definitionsmængden.

> [!success]- Vis svar
> Med differentialoperatoren $D$ er ligningen $(D^3 + 3D^2 + 2D)y = (D + 1)u$. Overføringsfunktionen er:
> $$H(s) = \frac{s + 1}{s^3 + 3s^2 + 2s} = \frac{s + 1}{s(s + 1)(s + 2)} = \frac{1}{s(s + 2)}.$$
> Definitionsmængden for $H(s)$ er $s \in \mathbb{C} \setminus \{0, -1, -2\}$, da nævneren i det oprindelige udtryk har rødderne $0, -1, -2$.

**3.** Afgør om det lineære system $\dot{\mathbf x} = \begin{pmatrix} -3 & 1 \\ 4 & -3 \end{pmatrix}\mathbf x$ er asymptotisk stabilt.

> [!success]- Vis svar
> Karakterligningen er $\det(A - \lambda I) = (-3-\lambda)^2 - 4 = \lambda^2 + 6\lambda + 5 = (\lambda + 1)(\lambda + 5) = 0$. Egenværdierne er $\lambda_1 = -1$ og $\lambda_2 = -5$. Da begge egenværdier har strengt negativ realdel ($\operatorname{Re}(\lambda) < 0$), er systemet asymptotisk stabilt. Alternativt via Routh-Hurwitz for $2\times 2$: $\operatorname{tr}(A) = -3 + (-3) = -6 < 0$ og $\det(A) = 9 - 4 = 5 > 0$.

**4.** Kan funktionen $\mathbf x(t) = t \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ være en løsning til et asymptotisk stabilt lineært system $\dot{\mathbf x} = A\mathbf x$?

> [!success]- Vis svar
> Nej. For et asymptotisk stabilt system skal enhver løsning opfylde $\|\mathbf x(t)\| \to 0$ for $t \to \infty$. Da funktionen $\mathbf x(t) = t \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ vokser ubegrænset ($\|\mathbf x(t)\| \to \infty$), kan den umuligt være løsning til et asymptotisk stabilt system.

**5.** For et ulineært system $\dot x_1 = -x_1 x_2 + a x_2$, $\dot x_2 = -x_1 + x_1 x_2$, vis at $(a, 1)$ er et stationært punkt, og bestem dets lineariserede stabilitet for $a > 0$ og $a < 0$.

> [!success]- Vis svar
> Indsættelse af $(a, 1)$ giver $\dot x_1 = -a(1) + a(1) = 0$ og $\dot x_2 = -a + a(1) = 0$, så $(a, 1)$ er stationært. Jacobimatricen er:
> $$D\mathbf f(x_1, x_2) = \begin{pmatrix} -x_2 & -x_1 + a \\ -1 + x_2 & x_1 \end{pmatrix} \implies D\mathbf f(a, 1) = \begin{pmatrix} -1 & 0 \\ 0 & a \end{pmatrix}.$$
> Egenværdierne er $\lambda_1 = -1$ og $\lambda_2 = a$.
> - For $a > 0$: $\lambda_2 > 0$, så punktet er et saddelpunkt og dermed **ustabilt**.
> - For $a < 0$: begge egenværdier er negative, så punktet er **asymptotisk stabilt**.

**6.** Afgør om rækken $\sum_{n=1}^\infty \frac{2n+1}{n^3-4}$ konvergerer eller divergerer.

> [!success]- Vis svar
> Brug ækvivalenskriteriet med $b_n = \frac{1}{n^2}$. Kvotienten er:
> $$\lim_{n\to\infty} \frac{a_n}{b_n} = \lim_{n\to\infty} \frac{\frac{2n+1}{n^3-4}}{\frac{1}{n^2}} = \lim_{n\to\infty} \frac{2n^3 + n^2}{n^3 - 4} = 2.$$
> Da grænseværdien $C = 2$ er positiv og endelig, og $\sum_{n=1}^\infty \frac{1}{n^2}$ er en konvergent $p$-række ($p = 2 > 1$), er rækken **konvergent**.

**7.** Bestem konvergensradius $\rho$ for potensrækken $\sum_{n=2}^\infty n^3 2^n x^n$.

> [!success]- Vis svar
> Med koefficienter $c_n = n^3 2^n$ anvendes kvotientkriteriet:
> $$L = \lim_{n\to\infty} \left|\frac{c_{n+1}}{c_n}\right| = \lim_{n\to\infty} \frac{(n+1)^3 2^{n+1}}{n^3 2^n} = 2 \lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^3 = 2 \cdot 1 = 2.$$
> Konvergensradius er $\rho = \frac{1}{L} = \frac{1}{2}$. Rækken konvergerer for $|x| < \frac{1}{2}$ og divergerer for $|x| > \frac{1}{2}$.

**8.** Undersøg om funktionsrækken $\sum_{n=1}^\infty \frac{\cos(nx)}{n^2 + x^2}$ konvergerer uniformt på $\mathbb{R}$.

> [!success]- Vis svar
> Da $|\cos(nx)| \le 1$ og $n^2 + x^2 \ge n^2$ for alle $x \in \mathbb{R}$, gælder uligheden:
> $$\left| \frac{\cos(nx)}{n^2 + x^2} \right| \le \frac{1}{n^2} = M_n \quad \text{for alle } x \in \mathbb{R}.$$
> Da talrækken $\sum_{n=1}^\infty \frac{1}{n^2}$ konvergerer ($p=2 > 1$), giver Weierstrass' M-test, at rækken konvergerer **uniformt og absolut** på hele $\mathbb{R}$.

**9.** Find Fourierkoefficienterne $a_n$ og $b_n$ for den $2\pi$-periodiske savtakbølge givet ved $f(t) = t$ for $t \in [-\pi, \pi[$.

> [!success]- Vis svar
> Da $f(-t) = -t = -f(t)$, er funktionen ulige. Derfor er $a_n = 0$ for alle $n \ge 0$.
> Sinuskoefficienterne findes ved partiel integration:
> $$b_n = \frac{2}{\pi}\int_0^\pi t \sin(nt)\,dt = \frac{2}{\pi}\left( \left[-t\frac{\cos(nt)}{n}\right]_0^\pi + \frac{1}{n}\int_0^\pi \cos(nt)\,dt \right) = \frac{2(-1)^{n+1}}{n}.$$
> Fourierrækken er $f(t) \sim 2 \sum_{n=1}^\infty \frac{(-1)^{n+1}}{n}\sin(nt)$.

**10.** Hvad konvergerer Fourierrækken for $f(t) = t$ mod i endepunktet $t = \pi$?

> [!success]- Vis svar
> I $t = \pi$ har den $2\pi$-periodiske udvidelse et springpunkt med venstresidet grænseværdi $f(\pi^-) = \pi$ og højresidet grænseværdi $f(\pi^+) = f(-\pi^+) = -\pi$. Ifølge Fouriers sætning konvergerer rækken mod middelværdien:
> $$\frac{f(\pi^+) + f(\pi^-)}{2} = \frac{-\pi + \pi}{2} = 0.$$
> Direkte indsættelse af $t = \pi$ i rækken giver ligeledes $\sin(n\pi) = 0$, hvilket stemmer overens.

**11.** Benyt Parsevals sætning på firkantbølgen ($P(f) = 1$, $a_n = 0$, $b_{2k-1} = \frac{4}{(2k-1)\pi}$) til at beregne summen af $\sum_{k=1}^\infty \frac{1}{(2k-1)^2}$.

> [!success]- Vis svar
> Parsevals sætning giver:
> $$\frac{1}{2\pi}\int_{-\pi}^\pi |f(x)|^2\,dx = \frac{1}{2}\sum_{n=1}^\infty b_n^2 \implies 1 = \frac{1}{2}\sum_{k=1}^\infty \frac{16}{\pi^2(2k-1)^2} = \frac{8}{\pi^2}\sum_{k=1}^\infty \frac{1}{(2k-1)^2}.$$
> Heraf isoleres summen:
> $$\sum_{k=1}^\infty \frac{1}{(2k-1)^2} = 1 + \frac{1}{9} + \frac{1}{25} + \dots = \frac{\pi^2}{8}.$$

**12.** En differentialligning $y'' + \frac{1}{t}y' + a(t)y = 0$ for $t > 0$ vides at have løsningen $y_1(t) = t^2$. Bestem $a(t)$ og find den fuldstændige reelle løsning.

> [!success]- Vis svar
> 1. Differentiér $y_1$: $y_1' = 2t$ og $y_1'' = 2$. Indsættelse giver $2 + \frac{1}{t}(2t) + a(t)t^2 = 4 + a(t)t^2 = 0 \implies a(t) = -\frac{4}{t^2}$.
> 2. Reduktion af orden: $a_1(t) = \frac{1}{t}$, så $\Omega(t) = e^{\int \frac{1}{t}dt} = t$. En anden lineært uafhængig løsning er:
> $$y_2(t) = t^2 \int \frac{1}{(t^2)^2 \cdot t}\,dt = t^2 \int t^{-5}\,dt = t^2\left(-\frac{1}{4}t^{-4}\right) = -\frac{1}{4t^2}.$$
> Den fuldstændige reelle løsning er $y(t) = c_1 t^2 + c_2 t^{-2}$ for $t > 0$.

**13.** En potensrækkeindsættelse $y(t) = \sum_{n=0}^\infty c_n t^n$ i en differentialligning leder til rekursionsformlen $(n+1)c_{n+1} - c_n = 0$. Kan $y(t) = t^2$ være en løsning?

> [!success]- Vis svar
> Nej. Hvis $y(t) = t^2$, er $c_2 = 1$ og alle andre $c_n = 0$. For $n = 0$ kræver rekursionen $1 \cdot c_1 - c_0 = 0 \implies 0 - 0 = 0$ (opfyldt). Men for $n = 1$ kræver rekursionen $2 c_2 - c_1 = 0 \implies 2(1) - 0 = 2 \neq 0$. Da rekursionsformlen ikke er opfyldt for $n = 1$, kan $y(t) = t^2$ ikke være en løsning.

**14.** Hvad er den stationære outputrespons $y_p(t)$ for systemet $y' + 2y = u(t)$, når $u(t) = 4\cos(3t)$?

> [!success]- Vis svar
> Systemet er stabilt med overføringsfunktion $H(s) = \frac{1}{s+2}$. Ved frekvens $\omega = 3$ er overføringsfunktionen:
> $$H(3i) = \frac{1}{2 + 3i} = \frac{2 - 3i}{2^2 + 3^2} = \frac{2 - 3i}{13}.$$
> Skrives $u(t) = 2e^{i 3t} + 2e^{-i 3t}$, fås outputtet:
> $$y_p(t) = 2 \cdot 2 \operatorname{Re}\left( \frac{2 - 3i}{13} e^{i 3t} \right) = \frac{4}{13}\bigl(2\cos(3t) + 3\sin(3t)\bigr).$$

**15.** Hvorfor medfører punktvis konvergens af en funktionsrække $\sum f_n(x)$ mod $f(x)$ på $[a, b]$ ikke nødvendigvis, at $\int_a^b f(x)\,dx = \sum \int_a^b f_n(x)\,dx$?

> [!success]- Vis svar
> Fordi punktvis konvergens tillader at leddenes funktioner danner en smal "spids" (en massekoncentration), som ikke forsvinder under integration. Standardeksemplet er følgen $f_n(x) = 2n^2 x e^{-n^2 x^2}$ på $[0, 1]$: for hvert fast $x$ gælder $f_n(x) \to 0$, så den punktvise grænsefunktion er $f(x) \equiv 0$, med $\int_0^1 0\,dx = 0$. Men $\int_0^1 f_n(x)\,dx = [-e^{-n^2 x^2}]_0^1 = 1 - e^{-n^2} \to 1 \neq 0$. Først ved **uniform konvergens** kan grænseovergang og integration lovligt ombyttes.

## Links

- [[Studie|Studie-træningsrum]]
- [[Flashcards/Differential Equations Flashcards|Differential Equations Flashcards]]
- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- [[Courses/Differential Equations and Infinite Series/Past Exams|Gamle eksamenssæt]]
- [[Differential Equations and Infinite Series]]
