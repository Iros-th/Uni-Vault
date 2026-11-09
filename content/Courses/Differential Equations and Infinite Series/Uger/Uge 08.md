---
publish: true
title: "01025 uge 8: Uniform konvergens"
course: Differential Equations and Infinite Series
type: week
week: 8
tags:
  - differential-equations
  - ugenote
---

# Uge 8: Uniform konvergens

> **Kilde:** Ugeseddel 8 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 5.3 og 5.4, appendiks A.8), notatet KontinuitetOgDifferentiabilitet.pdf, facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 706). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 28/10): afsnit 5.3 og 5.4 samt beviset for sætning 5.32 (Weierstrass' M-test) i appendiks A.8.
- Læs selv: noterne `KontinuitetOgDifferentiabilitet.pdf` i mappen Noter og ekstra opgaver.

## Begreber

### Punktvis konvergens (definition 5.22)
Lad $\{f_n\}$ være en følge af funktioner defineret på et interval $I$. Følgen siges at konvergere **punktvis** mod en grænsefunktion $f$ på $I$, hvis der for ethvert fast $x \in I$ gælder:

$$\lim_{n\to\infty} f_n(x) = f(x).$$

Med kvantorer skrives det:

$$\forall x \in I \quad \forall \epsilon > 0 \quad \exists N \in \mathbb N \quad \text{så} \quad n \ge N \implies |f_n(x) - f(x)| < \epsilon.$$

Her må valget af $N$ afhænge af både $\epsilon$ og punktet $x$. Punktvis konvergens er en svag egenskab: selv om alle $f_n$ er kontinuerte funktioner, behøver grænsefunktionen $f$ ikke at være kontinuert!

### Uniform konvergens (definition 5.27)
Følgen $\{f_n\}$ konvergerer **uniformt** (ensartet) mod $f$ på intervallet $I$, hvis det samme $N$ kan bruges for samtlige punkter $x \in I$ på én gang:

$$\forall \epsilon > 0 \quad \exists N \in \mathbb N \quad \text{så} \quad n \ge N \implies \forall x \in I: |f_n(x) - f(x)| \le \epsilon.$$

En ækvivalent og meget anvendelig formulering er:

$$\lim_{n\to\infty} \sup_{x \in I} |f_n(x) - f(x)| = 0.$$

Geometrisk betyder det, at grafen for $f_n$ for $n \ge N$ ligger helt inde i et bånd af bredde $\pm\,\epsilon$ omkring grafen for grænsefunktionen $f$.

**Klassisk modeksempel.** Betragt $f_n(x) = x^n$ på intervallet $[0, 1]$.
- For $x \in [0, 1[$ gælder $x^n \to 0$.
- For $x = 1$ gælder $1^n = 1 \to 1$.
Grænsefunktionen er $f(x) = 0$ for $x \in [0, 1[$ og $f(1) = 1$. Selvom hver $f_n$ er kontinuert, er grænsefunktionen diskontinuert i $x = 1$. Konvergensen kan derfor umuligt være uniform på $[0, 1]$.
Hvis man derimod indskrænker til $[0, d]$ med $0 < d < 1$, er $\sup_{x\in [0, d]} |x^n - 0| = d^n \to 0$. Konvergensen **er** uniform på ethvert lukket delinterval $[0, d] \subset [0, 1[$.

### Weierstrass' M-test / Majorantkriteriet (sætning 5.32)
Dette er kursets vigtigste arbejdsredskab til at bevise uniform konvergens af rækker $\sum_{n=1}^\infty f_n(x)$.
Antag at der findes en talrække med positive led $\sum_{n=1}^\infty M_n$, således at:
1. $|f_n(x)| \le M_n$ for alle $x \in I$ og alle $n \ge 1$,
2. Talrækken $\sum_{n=1}^\infty M_n$ er konvergent ($\sum M_n < \infty$).

Så konvergerer funktionsrækken $\sum_{n=1}^\infty f_n(x)$ **både uniformt og absolut** på intervallet $I$.

**Eksempel.** Betragt $\sum_{n=1}^\infty \frac{\cos(nx)}{n^2 + x^2}$ for $x \in \mathbb R$.
For ethvert reelt $x$ gælder $|\cos(nx)| \le 1$ og $n^2 + x^2 \ge n^2$, så

$$\left| \frac{\cos(nx)}{n^2 + x^2} \right| \le \frac{1}{n^2} = M_n.$$

Da $\sum_{n=1}^\infty \frac{1}{n^2}$ konvergerer ($p=2 > 1$), sikrer Weierstrass' M-test, at rækken konvergerer uniformt og absolut på hele $\mathbb R$.

### Hovedsætningerne for uniform konvergens
Uniform konvergens sikrer, at man lovligt må ombytte grænseovergange:

1. **Kontinuitet (sætning 5.29):** Hvis funktionerne $f_n$ er kontinuerte på $I$, og $\sum f_n(x)$ konvergerer uniformt på $I$, så er sumfunktionen $s(x) = \sum_{n=1}^\infty f_n(x)$ **kontinuert** på $I$.
2. **Ledvis integration (sætning 5.35):** Hvis $f_n$ er kontinuerte og rækken konvergerer uniformt på et begrænset interval $[a, b]$, må integration og summation byttes:

   $$\int_a^b \left( \sum_{n=1}^\infty f_n(x) \right) dx = \sum_{n=1}^\infty \int_a^b f_n(x)\,dx.$$

3. **Ledvis differentiation (sætning 5.38):** Hvis $f_n$ er differentiable, rækken $\sum f_n(x_0)$ konvergerer i mindst ét punkt $x_0$, og rækken af afledede $\sum f_n'(x)$ konvergerer **uniformt** på $I$, så er sumfunktionen $s(x)$ differentiabel, og

   $$\left( \sum_{n=1}^\infty f_n(x) \right)' = \sum_{n=1}^\infty f_n'(x).$$

### Geometrisk model: Epsilon-tunnelen (funktionstunnel)

Forskellen på punktvis konvergens og uniform konvergens kan visualiseres ved en $\varepsilon$-tunnel omkring grænsefunktionen $f(x)$:

```
y ^               +-- f(x) + epsilon
  |              /
  |   ==========*========= S_N(x) ligger HELT inde i tunnelen for ALLE x
  |            /
  |           +-- f(x) - epsilon
--+----------------------------------> x
```

- **Punktvis konvergens:** For hvert enkelt punkt $x$ gælder $S_N(x) \to f(x)$. Vælger vi et $\varepsilon > 0$, vil grafen for $S_N$ på et tidspunkt ramme ind i tunnelen ved dette specifikke $x$. Men tidspunktet $N(x, \varepsilon)$ kan blive uendeligt stort, når $x$ nærmer sig et randpunkt.
- **Uniform konvergens:** Der findes ét fælles indeks $N(\varepsilon)$, så **hele funktionsgrafen** for $S_N(x)$ ligger fuldstændigt inden i tunnelen $[f(x) - \varepsilon, f(x) + \varepsilon]$ for samtlige $x \in A$ på én gang!

*Modeksemplet $f_n(x) = x^n$ på $[0, 1]$:* For ethvert $x < 1$ går $x^n \to 0$. Men i punktet $x = 1$ er $1^n = 1$. Lige under 1 slipper kurven altid ud af $\varepsilon$-tunnelen, uanset hvor stor $N$ vælges. Derfor er konvergensen ikke uniform, og grænsefunktionen springer diskontinuert fra 0 til 1.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 111 | 5.3 | Majorantrække for trigonometrisk funktionsrække | $\sum \frac{2}{(2n+1)^2} < \infty \implies$ uniform konvergens |
| 114 | 5.3 | Undersøg fem funktionsrækker for majorantrække | Majorantrække i 2, 3, 4, 5; konvergent majorant i 3 og 5 |
| 118 | 5.4 | Rækken $\sum \frac{x^2}{1 + n^2 x^2}$ | Punktvis konvergent på $\mathbb R$, uniform på lukkede delmængder |
| 133 | 5.4 | Rækken $\sum \frac{(-1)^n x^n}{n}$ på $]-1, 1]$ | Ingen konvergent talmajorant, men uniform konvergens på $[0, 1]$ |
| 149 | 5.4 | Ledvis differentiation af $f(x) = \sum \frac{\sin(nx)}{n^3}$ | $f'(0) = 0$ (eller $\sum 1/n^2$) |
| 153 | 5.4 | Fejlvurdering ved Weierstrass majorant | $N \ge 9$, fejl 0.138 |
| 160 | 5.4 | Funktionsrækker og grænser | Uniform konvergens via M-test |
| 860-864 | A.8 | Teoretiske beviser for funktionsrækker | Beviser fra appendiks A.8 |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 111.** Betragt rækken $\sum_{n=0}^\infty \frac{2}{(2n+1)^2} \cos((2n+1)x)$ for $x \in \mathbb R$.
Da $|\cos((2n+1)x)| \le 1$ for alle $x$, gælder vurderingen:

$$\left| \frac{2}{(2n+1)^2} \cos((2n+1)x) \right| \le \frac{2}{(2n+1)^2} = M_n.$$

Talrækken $\sum_{n=0}^\infty \frac{2}{(2n+1)^2}$ konvergerer ved sammenligning med $\sum \frac{1}{n^2}$. Ifølge Weierstrass' M-test konvergerer rækken derfor uniformt og absolut på hele $\mathbb R$. Da hvert led er en kontinuert funktion, er sumfunktionen kontinuert på hele $\mathbb R$.

**Opgave 114.** Undersøg om der findes en majorantrække, og om den er konvergent:
1. Rækker med ubegrænsede funktioner på ubegrænsede intervaller har sjældent en talmajorant.
2. $\sum \frac{\sin(nx)}{n}$: $|\frac{\sin(nx)}{n}| \le \frac{1}{n} = M_n$. Dette er en majorantrække, men $\sum \frac{1}{n}$ er divergent, så M-testen kan ikke anvendes med denne majorant.
3. $\sum \frac{\sin(nx)}{n^2}$: Her er $M_n = \frac{1}{n^2}$, og $\sum \frac{1}{n^2} < \infty$. Dette er en konvergent majorantrække.
Facit bekræfter: majorantrække i 2, 3, 4, 5; konvergent majorantrække i 3 og 5.

**Opgave 133.** Betragt $\sum_{n=1}^\infty (-1)^n \frac{x^n}{n}$ for $x \in ]-1, 1]$.
Hvis man søger en talmajorant på $]-1, 1]$, må man tage supremum over intervallet:

$$M_n = \sup_{x \in ]-1, 1]} \left| (-1)^n \frac{x^n}{n} \right| = \frac{1}{n}.$$

Da $\sum_{n=1}^\infty \frac{1}{n} = \infty$, **har rækken ingen konvergent talmajorant** på $]-1, 1]$.
Alligevel konvergerer rækken uniformt på $[0, 1]$! Dette indses ved at benytte Leibniz' fejlvurdering: For $x \in [0, 1]$ er leddene alternerende, aftagende og går mod 0. Restleddet opfylder

$$|R_N(x)| = \left| \sum_{n=N+1}^\infty (-1)^n \frac{x^n}{n} \right| \le \frac{x^{N+1}}{N+1} \le \frac{1}{N+1}.$$

Da $\frac{1}{N+1} \to 0$ helt uafhængigt af $x$, er konvergensen uniform på $[0, 1]$. Opgaven er vigtig, fordi den viser, at Weierstrass' M-test er en tilstrækkelig betingelse for uniform konvergens, men ikke en nødvendig betingelse!

**Opgave 149.** Lad $f(x) = \sum_{n=1}^\infty \frac{\sin(nx)}{n^3}$.
1. Da $|\frac{\sin(nx)}{n^3}| \le \frac{1}{n^3}$, og $\sum \frac{1}{n^3} < \infty$, konvergerer rækken uniformt på $\mathbb R$. Sumfunktionen $f$ er derfor kontinuert.
2. Differentiér formelt led for led: $\sum_{n=1}^\infty \frac{n \cos(nx)}{n^3} = \sum_{n=1}^\infty \frac{\cos(nx)}{n^2}$.
3. Da $|\frac{\cos(nx)}{n^2}| \le \frac{1}{n^2}$ og $\sum \frac{1}{n^2} < \infty$, konvergerer den differentierede række uniformt på $\mathbb R$.
4. Sætning 5.38 giver derfor, at $f$ er differentiabel, og $f'(x) = \sum_{n=1}^\infty \frac{\cos(nx)}{n^2}$.
5. I punktet $x = 0$ fås $f'(0) = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$.

**Multiple Choice 706 (EkstraOpgaver).** Facit er svarmulighed 3.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 07|Uge 7: Potensrækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 09|Uge 9: Fourierrækker]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
