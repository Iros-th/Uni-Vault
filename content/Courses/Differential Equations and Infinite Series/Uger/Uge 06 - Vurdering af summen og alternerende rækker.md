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

## Læseplan

- Forelæsning (onsdag 7/10): afsnit 4.6 (vurdering af summen) og afsnit 4.7 (alternerende rækker og Leibniz).
- Efter uge 6 er der efterårsferie.

## Begreber

### Vurdering af halen med integralkriteriet (afsnit 4.6, korollar 4.35)
Lad $f: [1, \infty[ \to [0, \infty[$ være kontinuert og aftagende, i hvert fald for $x \geq N$, og lad $\int_N^\infty f(x)\,dx$ være konvergent. Korollar 4.35 i bogens 3. og 4. udgave (slides) giver for halen $R_N = \sum_{n=N+1}^\infty f(n)$:

$$\text{(1)}\quad \int_{N+1}^\infty f(x)\,dx \;\le\; \sum_{n=N+1}^\infty f(n) \;\le\; \int_N^\infty f(x)\,dx,$$

$$\text{(2)}\quad \int_{N+1}^\infty f(x)\,dx \;\le\; \sum_{n=N+1}^\infty f(n) \;\le\; \int_{N+1}^\infty f(x)\,dx + f(N+1).$$

I 2. udgave (og i facitlisten og de gamle eksamensløsninger) står kun øvre grænse i (2) og den tilsvarende vurdering af hele summen, så antal led i facit kan afvige lidt.

### Metode (i) og metode (ii) til fejlvurdering
De to metoder svarer på to forskellige spørgsmål (MapleUge6).
1. **Metode (i): hvor mange led skal med?** Brug afsnitssummen $S_N$ og vælg $N$ så den øvre grænse for halen er under $\epsilon$; med (1) betyder det $\int_N^\infty f(x)\,dx \leq \epsilon$.
2. **Metode (ii): et interval af bredde $\epsilon$ der indeholder summen.** Vælg $N$ så $f(N+1) \leq \epsilon$. Så ligger summen i intervallet

   $$S_N + \int_{N+1}^\infty f(x)\,dx \;\le\; S \;\le\; S_N + \int_{N+1}^\infty f(x)\,dx + f(N+1),$$

   og tallet $T_N = S_N + \int_{N+1}^\infty f(x)\,dx$ afviger højst $f(N+1)$ fra $S$. Det kræver typisk langt færre led.

**Eksempel.** Bestem $\sum_{n=1}^\infty \frac{1}{n^3}$ med en fejl under $\epsilon = 0.01$. Her er $f(x) = x^{-3}$, og $\int_k^\infty x^{-3}\,dx = [-\frac{1}{2x^2}]_k^\infty = \frac{1}{2k^2}$.
- Ved metode (i) med (1): Kræv $\frac{1}{2N^2} \le 0.01 \iff 2N^2 \ge 100 \iff N^2 \ge 50 \iff N \ge \sqrt{50} \approx 7.07$, altså $N = 8$ led.
- Ved metode (ii): Kræv $f(N+1) = \frac{1}{(N+1)^3} \le 0.01 \iff (N+1)^3 \ge 100 \iff N+1 \ge 4.64$, altså $N = 4$ led.
  For $N = 4$ er $S_4 = 1 + \frac{1}{8} + \frac{1}{27} + \frac{1}{64} \approx 1.1777$, og integralet fra $N+1 = 5$ er $\int_5^\infty x^{-3}\,dx = \frac{1}{2 \cdot 25} = 0.02$. Den korrigerede approksimation er $1.1777 + 0.02 = 1.1977$. Da den sande sum er cirka $1.2021$, er den faktiske fejl kun $0.0044 < 0.01$.

### Alternerende rækker og Leibniz' kriterium (definition 4.37, sætning 4.38)
En række kaldes alternerende, hvis leddene skifter fortegn for hvert trin, for eksempel $\sum_{n=1}^\infty (-1)^{n-1} b_n$ med $b_n \ge 0$.
**Leibniz' kriterium:** Hvis følgen $\{b_n\}$ opfylder:
1. $b_n > 0$ for alle $n$ (slides),
2. Følgen er monotont aftagende, det vil sige $b_{n+1} \le b_n$ for alle $n$,
3. $\lim_{n\to\infty} b_n = 0$,

så konvergerer rækken $\sum_{n=1}^\infty (-1)^{n-1} b_n$.

### Fejlvurdering for alternerende rækker (sætning 4.38)
Sætning 4.38 giver også fejlvurderingen: for en række der opfylder Leibniz' betingelser er fejlen ved at afskære summen efter $N$ led numerisk højst det første udeladte led:

$$\left| S - S_N \right| \le b_{N+1}.$$

Desuden gælder, at summen $S$ altid ligger mellem to på hinanden følgende afsnitssummer, $S_{2k} \le S \le S_{2k+1}$.

**Eksempel.** Approksimér den alternerende række $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^2}$ med fejl højst $\epsilon = 0.001$.
Ifølge Leibniz' fejlvurdering skal man blot kræve $b_{N+1} = \frac{1}{(N+1)^2} \le 0.001 = \frac{1}{1000} \iff N+1 \ge \sqrt{1000} \approx 31.62$, så $N = 31$ led er tilstrækkeligt.

MapleUge6 viser for $\sum \frac{(-1)^{n-1}}{n} = \ln 2$ at vurderingen $b_{N+1}$ her kun er cirka det dobbelte af den faktiske fejl, og at en række som $\sum \frac{(-1)^n}{1 + \ln(\ln(n + 2))}$ konvergerer meget langsomt: fejlestimatet $b_{N+1} = \frac{1}{1 + \ln(\ln(N+3))}$ er stadig cirka $0.16$ for $N = 10^{100}$.

### Betinget og absolut konvergens (definition 4.26 og 4.28)
- En række $\sum a_n$ kaldes **absolut konvergent**, hvis $\sum |a_n|$ konvergerer.
- En række kaldes **betinget konvergent**, hvis $\sum a_n$ konvergerer, men $\sum |a_n|$ divergerer.

**Eksempel.** Den alternerende harmoniske række $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots$ konvergerer ifølge Leibniz (da $\frac{1}{n}$ er aftagende mod 0), og summen er $\ln 2$. Men rækken af absolutte værdier er den harmoniske række $\sum \frac{1}{n}$, som divergerer. Rækken er derfor betinget konvergent.

**Omordning (Riemanns omordningssætning, ikke pensum som sætning):** i en absolut konvergent række kan leddene byttes om uden at summen ændres. I en reel betinget konvergent række kan man ved en passende omordning få konvergens mod et hvilket som helst reelt tal eller divergens (slides; opgave 108 viser divergens). Slides tilføjer at man endda kan ordne leddene så der for hvert reelt tal er en delfølge af afsnitssummerne der konvergerer mod det.

### Hvad kan hvert kriterium (slides)
- $n$'te ledskriteriet: viser kun "grov divergens".
- Kvotientkriteriet: absolut konvergens når leddene aftager cirka som en kvotientrække; groft, "ser ikke polynomier" (som rodkriteriet).
- Ækvivalenskriteriet: kræver en kendt ækvivalent række, men er fintfølende.
- Sammenligningskriteriet: absolut konvergens eller divergens; skelner fint, hvis man kender mange rækker at sammenligne med.
- Integralkriteriet: fintfølende, fx for $\sum \frac{1}{n^\alpha}$ hvor kvotientkriteriet intet siger (eksempel 4.34).

### Taylors formel med restled (afsnit 4.3, lemma 4.12 og sætning 4.13)
Afsnit 4.3 hører til uge 4 (læses selv) og bruges her til fejlvurdering. Lad $f$ være $(N+1)$ gange differentiabel på et interval omkring $x_0$. Så gælder for ethvert $x$ i intervallet:

$$f(x) = P_N(x) + R_N(x) = \sum_{n=0}^N \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + \frac{f^{(N+1)}(\xi)}{(N+1)!}(x - x_0)^{N+1},$$

hvor $\xi$ er et tal mellem $x_0$ og $x$. Hvis $|f^{(N+1)}(\xi)| \le M$ for alle $\xi$ i intervallet, er restleddet begrænset ved

$$|R_N(x)| \le \frac{M}{(N+1)!}|x - x_0|^{N+1}.$$

**Eksempel.** Find en approksimation til $\sin x$ på intervallet $[0, 3]$ med fejl højst 0.05 omkring $x_0 = 0$.
Da alle afledede af $\sin x$ er $\pm\sin x$ eller $\pm\cos x$, er $|f^{(k)}(\xi)| \le 1$ for alle $k$. Restleddet opfylder $|R_N(x)| \le \frac{1}{(N+1)!} 3^{N+1}$.
For $N = 8$ er $(N+1)! = 9! = 362880$ og $3^9 = 19683$, så $\frac{19683}{362880} \approx 0.054$.
For $N = 9$ giver restleddet $\frac{3^{10}}{10!} = \frac{59049}{3628800} \approx 0.016 < 0.05$. Taylorpolynomiet er da $P(x) = x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + \frac{x^9}{362880}$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 148 | 4.6 | Tilnærmet værdi for $\sum \frac{1}{n^4}$ med fejl højst 0.02 | 1.07 (op til afrunding) |
| 102 | 4.5, 4.7 | Absolut konvergent, betinget konvergent eller divergent: $\sum\frac{\sin n + \cos n}{n^2}$, $\sum\frac{\cos(n\pi)}{2n+5}$, $\sum\frac{(-2)^n}{n^2+7}$ | (i) abs. konv., (ii) bet. konv., (iii) divergent |
| 161 | 4.7 | Leibniz' fejlvurdering med fejl højst $0.01$ for $\sum \frac{(-1)^{n-1}}{n}$ og $\sum \frac{(-1)^{n-1}}{n^4}$ | $N = 99$ og $N = 3$ |
| 108 | 4.5, 4.7 | En række hvis led er de samme tal som i $\sum\frac{(-1)^{n-1}}{\sqrt n}$, men i en anden rækkefølge | Rækken divergerer (ækvivalent med $\sum\frac{1}{\sqrt n}$); ingen modstrid, for omordning ændrer rækken |
| 131 | 4.6 | Rækken $\sum \frac{1}{n^{11/10}}$: er 31642 led nok, og hvor mange led giver fejl højst $0.1$? | Metode (i): $N = 10^{20}$; metode (ii): $N = 8$ og summen er cirka $10.54$ |
| 818 | 4.5 | En ikke-aftagende $f$ med $f(n) = 0$, hvor rækken konvergerer men integralet divergerer | Ingen modstrid: integralkriteriet kræver at $f$ er aftagende |
| 816 (v, vi) | 4.5 | Fortsættelse fra uge 5 for $\sum \frac{n!\ln n}{n^n}$ | Uddybning af konvergensbeviset |
| 802 | 4.2 | Formelt $\epsilon$-$N$ bevis for regnereglen $c x_n \to c x$ | Vælg $N$ hørende til $\epsilon / \lvert c\rvert$ for $c \ne 0$ |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 148.** Rækken er $\sum_{n=1}^\infty \frac{1}{n^4}$, og fejlen må højst være $\epsilon = 0.02$. Her er $f(x) = x^{-4}$, og integralet er $\int_k^\infty x^{-4}\,dx = \frac{1}{3k^3}$.
- **Metode (i):** Kræv $\int_N^\infty x^{-4}\,dx = \frac{1}{3N^3} \le 0.02 = \frac{1}{50} \iff 3N^3 \ge 50 \iff N^3 \ge 16.67 \iff N \ge 3$. Med $N = 3$ er afsnitssummen $S_3 = 1 + \frac{1}{16} + \frac{1}{81} \approx 1.0748$.
- **Metode (ii):** Kræv $f(N+1) = \frac{1}{(N+1)^4} \le 0.02 \iff (N+1)^4 \ge 50 \iff N+1 \ge 2.66 \iff N = 2$.
  Den korrigerede sum er $S_2 + \int_3^\infty x^{-4}\,dx = (1 + \frac{1}{16}) + \frac{1}{3 \cdot 27} = 1.0625 + 0.0123 = 1.0748 \approx 1.07$. Facit bekræfter: 1.07.

**Opgave 102.**
1. $\left|\frac{\sin n + \cos n}{n^2}\right| \leq \frac{2}{n^2}$, og $\sum \frac{2}{n^2}$ konvergerer, så rækken er **absolut konvergent**.
2. $\frac{\cos(n\pi)}{2n+5} = \frac{(-1)^n}{2n+5}$: $b_n = \frac{1}{2n+5}$ er positiv, aftagende og går mod $0$, så rækken konvergerer efter Leibniz. Men $\frac{1}{2n+5}$ er ækvivalent med $\frac1n$ (kvotienten går mod $\frac12$), så $\sum |a_n|$ divergerer: **betinget konvergent**.
3. $\left|\frac{(-2)^n}{n^2+7}\right| = \frac{2^n}{n^2+7} \to \infty$, så leddene går ikke mod $0$: **divergent** efter $n$'te ledskriteriet.

**Opgave 161.** For $\sum \frac{(-1)^{n-1}}{n}$ kræves $b_{N+1} = \frac{1}{N+1} \leq 0.01$, altså $N = 99$. For $\sum \frac{(-1)^{n-1}}{n^4}$ kræves $\frac{1}{(N+1)^4} \leq 0.01$, altså $N + 1 \geq 10^{1/2} \approx 3.16$ og $N = 3$. Højere potens i nævneren giver langt færre led.

**Opgave 131.** $\sum \frac{1}{n^{11/10}}$ konvergerer ($p = 1.1 > 1$), men langsomt: $\int_N^\infty x^{-11/10}\,dx = 10N^{-1/10}$. Metode (i) med (1) kræver $10N^{-1/10} \leq 0.1$, dvs. $N \geq 100^{10} = 10^{20}$ (facit: $10^{20}$), så de 31642 led i (i) er langt fra nok, og så mange led kan ikke summeres numerisk. Metode (ii) kræver kun $(N+1)^{-11/10} \leq 0.1$, dvs. $N + 1 \geq 10^{10/11} \approx 8.1$, så $N = 8$, og $\sum_{n=1}^8 n^{-11/10} + 10 \cdot 9^{-1/10} \approx 10.54$ (facit $10.54$).

**Opgave 802.** Bevis med kvantorer for at $x_n \to x \implies c x_n \to c x$.
Lad $\epsilon > 0$ være givet.
- Hvis $c = 0$, er $c x_n = 0 \to 0 = c x$ oplagt.
- Hvis $c \ne 0$, vælges $\epsilon' = \frac{\epsilon}{|c|} > 0$. Da $x_n \to x$, findes et heltal $N$ så der for alle $n \ge N$ gælder $|x_n - x| < \epsilon'$. For alle $n \ge N$ gælder da:

$$|c x_n - c x| = |c| \cdot |x_n - x| < |c| \cdot \frac{\epsilon}{|c|} = \epsilon.$$

Dette viser pr. definition, at $c x_n \to c x$.

**MC:** svarene på 703 er 4 og 1. Ugens MC-opgave er 704 (EkstraOpgaver.pdf): for hvilke værdier af parameteren $a$ et $3\times 3$ system er asymptotisk stabilt (afsnit 2.8, Routh-Hurwitz). Facit (ugeseddel 7): 4.

**Hjemmeopgavesæt 5:** kun Möbius, senest 20/10 kl. 20. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**Løsningsnoter:** WeeklyNotes6.pdf (under uge 7 på DTU Learn) løser opgave 131 (integralvurdering af halen, se ovenfor), 816 (i) til (vi) (vurdering af $\frac{n!}{n^n}$ og sammenligning med $\sum n^{-3/2}$ i (vi)) og 108 (ækvivalens med $\sum \frac{1}{\sqrt n}$, og forklaringen at rækken er en omordning af $\sum\frac{(-1)^{n-1}}{\sqrt n}$). Løsningerne er fra en ældre udgave og henviser til "korollar 4.22" og "metode (ii) side 88". Opgave 818 er løst i WeeklyNotes8_v3.pdf (uge 8).

## Tjek dig selv

- [ ] Hvad er forskellen på metode (i) og (ii), og hvorfor bruger (ii) færre led?
- [ ] Hvad er $\int_{N+1}^\infty x^{-p}\,dx$?
- [ ] Hvad er de tre betingelser i Leibniz' kriterium, og hvordan bruges fejlvurderingen $b_{N+1}$?
- [ ] Hvilken række er betinget konvergent, og hvorfor?
- [ ] Hvorfor kræver integralkriteriet at $f$ er aftagende (opgave 818)?
- [ ] Hvordan ser et $\epsilon$-$N$ bevis for en regneregel for talfølger ud?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 05 - Konvergenskriterier og kvotientrækker|Uge 5: Konvergenskriterier og kvotientrækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 07 - Potensrækker|Uge 7: Potensrækker]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
