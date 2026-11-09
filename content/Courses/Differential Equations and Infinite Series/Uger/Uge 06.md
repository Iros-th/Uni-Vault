---
publish: true
title: "01025 uge 6: Vurdering af summen og alternerende rækker"
course: Differential Equations and Infinite Series
type: week
week: 6
tags:
  - differential-equations
  - ugenote
---

# Uge 6: Vurdering af summen og alternerende rækker

> **Kilde:** Ugeseddel 6 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 4.6 og 4.7 samt appendiks A.6), facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 704). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 7/10): afsnit 4.6 (vurdering af summen) og afsnit 4.7 (alternerende rækker og Leibniz).
- Efter uge 6 er der efterårsferie.

## Begreber

### Vurdering af halen med integralkriteriet (afsnit 4.6, korollar 4.35 / sætning 4.36)
Lad $f: [1, \infty[ \to [0, \infty[$ være en kontinuert, ikke-negativ og monotont aftagende funktion, hvor det uegentlige integral $\int_1^\infty f(x)\,dx$ konvergerer.
For summen $S = \sum_{n=1}^\infty f(n)$ og afsnitssummen $S_N = \sum_{n=1}^N f(n)$ gælder følgende vurdering for restleddet (halen) $R_N = S - S_N = \sum_{n=N+1}^\infty f(n)$:

$$\int_{N+1}^\infty f(x)\,dx \;\le\; \sum_{n=N+1}^\infty f(n) \;\le\; \int_N^\infty f(x)\,dx.$$

Dermed er den sande sum klemt inde i intervallet:

$$S_N + \int_{N+1}^\infty f(x)\,dx \;\le\; S \;\le\; S_N + \int_N^\infty f(x)\,dx.$$

Da forskellen mellem øvre og nedre grænse er $\int_N^{N+1} f(x)\,dx \le f(N)$, kan man benytte to praktiske metoder til at beregne summen med en given tilladt fejl $\epsilon > 0$:

### Metode (i) og metode (ii) til fejlvurdering
1. **Metode (i) (simpel afsnitssum):** Hvis man benytter selve afsnitssummen $S_N \approx S$, er fejlen højst den øvre grænse for halen:

   $$\text{Fejl} \le \int_N^\infty f(x)\,dx \le \epsilon.$$

   Dette kræver ofte et stort antal led $N$, da integralet aftager langsomt.
2. **Metode (ii) (integralkorrigeret sum):** Vælg som approksimation midtpunktet af klemmen eller den nedre grænse:

   $$T_N = S_N + \int_{N+1}^\infty f(x)\,dx.$$

   Fejlen $|S - T_N|$ er da højst differensen mellem de to grænser:

   $$\text{Fejl} \le \int_N^\infty f(x)\,dx - \int_{N+1}^\infty f(x)\,dx = \int_N^{N+1} f(x)\,dx \le f(N) \le \epsilon.$$

   Dette kræver typisk langt færre led, fordi leddet $f(N)$ aftager en hel potens hurtigere end integralet!

**Eksempel.** Bestem $\sum_{n=1}^\infty \frac{1}{n^3}$ med en fejl under $\epsilon = 0.01$. Her er $f(x) = x^{-3}$, og $\int_k^\infty x^{-3}\,dx = [-\frac{1}{2x^2}]_k^\infty = \frac{1}{2k^2}$.
- Ved metode (i): Kræv $\frac{1}{2N^2} \le 0.01 \iff 2N^2 \ge 100 \iff N^2 \ge 50 \iff N \ge \sqrt{50} \approx 7.07$, altså $N = 8$ led.
- Ved metode (ii): Kræv $f(N+1) = \frac{1}{(N+1)^3} \le 0.01 \iff (N+1)^3 \ge 100 \iff N+1 \ge 4.64$, altså $N = 4$ led.
  For $N = 4$ er $S_4 = 1 + \frac{1}{8} + \frac{1}{27} + \frac{1}{64} \approx 1.1777$, og integralet fra $N+1 = 5$ er $\int_5^\infty x^{-3}\,dx = \frac{1}{2 \cdot 25} = 0.02$. Den korrigerede approksimation er $1.1777 + 0.02 = 1.1977$. Da den sande sum er cirka $1.2021$, er den faktiske fejl kun $0.0044 < 0.01$.

### Alternerende rækker og Leibniz' kriterium (sætning 4.38 / 4.41)
En række kaldes alternerende, hvis leddene skifter fortegn for hvert trin, for eksempel $\sum_{n=1}^\infty (-1)^{n-1} b_n$ med $b_n \ge 0$.
**Leibniz' kriterium:** Hvis følgen $\{b_n\}$ opfylder:
1. $b_n \ge 0$ for alle $n$,
2. Følgen er monotont aftagende, det vil sige $b_{n+1} \le b_n$ for alle $n$,
3. $\lim_{n\to\infty} b_n = 0$,

så konvergerer rækken $\sum_{n=1}^\infty (-1)^{n-1} b_n$.

### Fejlvurdering for alternerende rækker (sætning 4.43)
For en række der opfylder Leibniz' betingelser, er fejlen ved at afskære summen efter $N$ led numerisk højst det første udeladte led:

$$\left| S - S_N \right| \le b_{N+1}.$$

Desuden gælder, at summen $S$ altid ligger mellem to på hinanden følgende afsnitssummer, $S_{2k} \le S \le S_{2k+1}$.

**Eksempel.** Approksimér den alternerende række $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^2}$ med fejl højst $\epsilon = 0.001$.
Ifølge Leibniz' fejlvurdering skal man blot kræve $b_{N+1} = \frac{1}{(N+1)^2} \le 0.001 = \frac{1}{1000} \iff N+1 \ge \sqrt{1000} \approx 31.62$, så $N = 31$ led er tilstrækkeligt.

### Betinget konvergens mod absolut konvergens (definition 4.44)
- En række $\sum a_n$ kaldes **absolut konvergent**, hvis $\sum |a_n|$ konvergerer.
- En række kaldes **betinget konvergent**, hvis $\sum a_n$ konvergerer, men $\sum |a_n|$ divergerer.

**Eksempel.** Den alternerende harmoniske række $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ konvergerer ifølge Leibniz (da $\frac{1}{n}$ er aftagende mod 0), og summen er $\ln 2$. Men rækken af absolutte værdier er den harmoniske række $\sum \frac{1}{n}$, som divergerer. Rækken er derfor betinget konvergent.

**Riemanns omordningssætning:** I en absolut konvergent række kan man bytte vilkårligt rundt på leddenes rækkefølge uden at ændre summen. I en betinget konvergent række kan man derimod ved en passende omordning af leddene få rækken til at konvergere mod et hvilket som helst reelt tal eller divergere mod $\pm\infty$! Derfor er rækkefølgen af led bindende i betinget konvergente rækker.

### Taylors formel med Lagrange-restled (sætning 4.13, appendiks A.6)
Lad $f$ være $(N+1)$ gange kontinuert differentiabel på et interval omkring $x_0$. Så gælder for ethvert $x$ i intervallet:

$$f(x) = P_N(x) + R_N(x) = \sum_{n=0}^N \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + \frac{f^{(N+1)}(\xi)}{(N+1)!}(x - x_0)^{N+1},$$

hvor $\xi$ er et tal mellem $x_0$ og $x$. Hvis $|f^{(N+1)}(\xi)| \le M$ for alle $\xi$ i intervallet, er restleddet begrænset ved

$$|R_N(x)| \le \frac{M}{(N+1)!}|x - x_0|^{N+1}.$$

**Eksempel.** Find en approksimation til $\sin x$ på intervallet $[0, 3]$ med fejl højst 0.05 omkring $x_0 = 0$.
Da alle afledede af $\sin x$ er $\pm\sin x$ eller $\pm\cos x$, er $|f^{(k)}(\xi)| \le 1$ for alle $k$. Restleddet opfylder $|R_N(x)| \le \frac{1}{(N+1)!} 3^{N+1}$.
For $N = 8$ er $(N+1)! = 9! = 362880$ og $3^9 = 19683$, så $\frac{19683}{362880} \approx 0.054$.
For $N = 9$ er restleddet med grad $N = 9$ (hvor polynomiet er af grad 9): leddet for $N=9$ er 0 i sinus, og restleddet med $N+1 = 10$ giver $\frac{3^{10}}{10!} = \frac{59049}{3628800} \approx 0.016 < 0.05$. Taylorpolynomiet er da $P(x) = x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + \frac{x^9}{362880}$.

### Geometrisk model: Areal-sandwich for integralkriteriet

Integralkriteriet (sætning 4.33) bygger på en geometrisk sandwich af arealer. Da $f(x)$ er aftagende, kan vi tegne søjler med bredde 1:

```
f(x)
 ^   +---+
 |   |   |+---+
 |   |   ||   |+---+       Sum f(n) klemmer integralet
 |   |   ||   ||   |       mellem S_N og S_{N+1}
 +---+---++---++---+---> x
     1   2    3    4
```

1. **Undersummer:** De indskrevne søjler har areal $\sum_{n=2}^{N+1} f(n) \le \int_1^{N+1} f(x)\,dx$.
2. **Oversummer:** De omskrevne søjler har areal $\int_1^{N+1} f(x)\,dx \le \sum_{n=1}^N f(n)$.

Ved at lade $N \to \infty$ ses umiddelbart, at rækken $\sum_{n=1}^\infty f(n)$ konvergerer hvis og kun hvis det uegentlige integral $\int_1^\infty f(x)\,dx$ konvergerer. Samtidig leverer arealoverskuddet den præcise restledsvurdering:

$$\int_{N+1}^\infty f(x)\,dx \le \sum_{n=N+1}^\infty f(n) \le \int_N^\infty f(x)\,dx.$$

### Dynamisk model: Leibniz alternerende fejltragt

For en alternerende række $\sum (-1)^{n+1} a_n$ med faldende led danner partielsummerne $S_N$ en indsnævrende tragt mod summen $S$:

```
Sum S_N
  ^
  |  S_1 *
  |                     S_3 *
  |                                  S_5 *
  |  ----------------- S (Den sande grænseværdi) -----------------
  |                                  S_4 *
  |                     S_2 *
--+------------------------------------------------------------> N
```

Hvert nyt led kaster summen over på den modsatte side af $S$, men med et mindre udsving end før ($a_{N+1} < a_N$).
Derfor ligger $S$ altid fanget mellem to på hinanden følgende afsnitssummer: $S_N \le S \le S_{N+1}$ (eller omvendt). Afstanden til $S$ kan aldrig overstige længden af det næste skridt:

$$|S - S_N| \le a_{N+1}.$$

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 148 | 4.6 | Tilnærmet værdi for $\sum \frac{1}{n^4}$ med fejl højst 0.02 | 1.07 (op til afrunding) |
| 102 | 4.5, 4.7 | Absolut konvergent, betinget konvergent eller divergent | (i) abs. konv., (ii) bet. konv., (iii) divergent |
| 161 | 4.7 | Fejlvurdering ved Leibniz for to rækker | $\sum \frac{(-1)^{n-1}}{n^4}$ kræver markant færre led end $\sum \frac{(-1)^{n-1}}{n}$ |
| 108 | 4.5, 4.7 | Alternerende led uden monotonicitet | Viser at monotonicitet i Leibniz er nødvendig |
| 131 | 4.6 | Rækken $\sum \frac{1}{n^{1.1}}$ og numeriske udfordringer | Langsom konvergens kræver astronomisk mange led |
| 818 | 4.5 | Modificeret funktion hvor integralet konvergerer men rækken ikke gør | $f$ må være aftagende for at integralkriteriet gælder |
| 816 (v, vi) | 4.5 | Fortsættelse fra uge 5 for $\sum \frac{n!\ln n}{n^n}$ | Uddybning af konvergensbeviset |
| 802 | 4.2 | Formelt $\epsilon$-$N$ bevis for regnereglen $c x_n \to c x$ | Vælg $N$ hørende til $\epsilon / |c|$ for $c \ne 0$ |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 148.** Rækken er $\sum_{n=1}^\infty \frac{1}{n^4}$, og fejlen må højst være $\epsilon = 0.02$. Her er $f(x) = x^{-4}$, og integralet er $\int_k^\infty x^{-4}\,dx = \frac{1}{3k^3}$.
- **Metode (i):** Kræv $\int_N^\infty x^{-4}\,dx = \frac{1}{3N^3} \le 0.02 = \frac{1}{50} \iff 3N^3 \ge 50 \iff N^3 \ge 16.67 \iff N \ge 3$. Med $N = 3$ er afsnitssummen $S_3 = 1 + \frac{1}{16} + \frac{1}{81} \approx 1.0748$.
- **Metode (ii):** Kræv $f(N+1) = \frac{1}{(N+1)^4} \le 0.02 \iff (N+1)^4 \ge 50 \iff N+1 \ge 2.66 \iff N = 2$.
  Den korrigerede sum er $S_2 + \int_3^\infty x^{-4}\,dx = (1 + \frac{1}{16}) + \frac{1}{3 \cdot 27} = 1.0625 + 0.0123 = 1.0748 \approx 1.07$. Facit bekræfter: 1.07.

**Opgave 102.** Klassifikation af tre rækker:
1. $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^2}$: Rækken af absolutte værdier er $\sum \frac{1}{n^2}$, som konvergerer ($p = 2 > 1$). Rækken er derfor **absolut konvergent**.
2. $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{\sqrt{n}}$: Leddene $b_n = \frac{1}{\sqrt{n}}$ er positive, monotont aftagende og går mod 0. Rækken konvergerer ved Leibniz. Men $\sum \frac{1}{\sqrt{n}}$ divergerer ($p = 1/2 \le 1$). Rækken er derfor **betinget konvergent**.
3. $\sum_{n=1}^\infty (-1)^n \frac{n}{n+1}$: Da $\lim_{n\to\infty} |a_n| = \lim_{n\to\infty} \frac{n}{n+1} = 1 \ne 0$, går leddene ikke mod nul. Rækken er **divergent** ved divergenstesten.

**Opgave 161.**
- For $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n}$ er restleddet begrænset af $b_{N+1} = \frac{1}{N+1}$. For at opnå en fejl under $10^{-4}$ kræves $\frac{1}{N+1} \le 10^{-4} \iff N+1 \ge 10000 \iff N \ge 9999$ led.
- For $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^4}$ er restleddet $b_{N+1} = \frac{1}{(N+1)^4}$. For fejl under $10^{-4}$ kræves $\frac{1}{(N+1)^4} \le 10^{-4} \iff N+1 \ge 10 \iff N \ge 9$ led.
Højere potens i nævneren medfører en dramatisk reduktion i det nødvendige antal led til en given præcision.

**Opgave 131.** Betragt $\sum_{n=1}^\infty \frac{1}{n^{1.1}}$. Rækken er konvergent, da $p = 1.1 > 1$. Men da $p$ ligger meget tæt på 1, aftager integralet ekstremt langsomt: $\int_N^\infty x^{-1.1}\,dx = [ -10 x^{-0.1} ]_N^\infty = \frac{10}{N^{0.1}}$.
Hvis man ønsker fejlen under $10^{-3}$ ved metode (i), kræves $\frac{10}{N^{0.1}} \le 10^{-3} \iff N^{0.1} \ge 10000 \iff N \ge 10^{40}$. Et sådant antal led kan ikke beregnes numerisk på nogen computer. Opgaven illustrerer forskellen på teoretisk konvergens og praktisk beregnelighed.

**Opgave 802.** Bevis med kvantorer for at $x_n \to x \implies c x_n \to c x$.
Lad $\epsilon > 0$ være givet.
- Hvis $c = 0$, er $c x_n = 0 \to 0 = c x$ oplagt.
- Hvis $c \ne 0$, vælges $\epsilon' = \frac{\epsilon}{|c|} > 0$. Da $x_n \to x$, findes et heltal $N$ så der for alle $n \ge N$ gælder $|x_n - x| < \epsilon'$. For alle $n \ge N$ gælder da:

$$|c x_n - c x| = |c| \cdot |x_n - x| < |c| \cdot \frac{\epsilon}{|c|} = \epsilon.$$

Dette viser pr. definition, at $c x_n \to c x$.

**Multiple Choice 704 (EkstraOpgaver).** Facit er svarmulighed 4.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 05|Uge 5: Konvergenskriterier og kvotientrækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 07|Uge 7: Potensrækker]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
