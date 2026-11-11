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

> **Kilde:** ugeseddel 8, SlidesUge8.pdf, WeeklyNotes7.pdf og WeeklyNotes8_v3.pdf, facitliste_studerende.pdf, EkstraOpgaver.pdf (opgave 706), eksamenssættet 01025Mat2MatTekEksamenB-E21.pdf og noten KontinuitetOgDifferentiabilitet.pdf i zip-filen (DTU Learn, 01025 E26); lærebogen afsnit 5.3 og 5.4. Sætningsnumre som i slides (i den ældre bog-PDF er sætning 5.35, 5.36 og 5.37 nummereret 5.33, 5.34 og 5.35).

## Læseplan

- Forelæsning (onsdag 28/10): afsnit 5.3 og 5.4 samt resten af appendiks om potensrækker og generelle rækker.
- Definitionen på kontinuitet ($\epsilon$-$\delta$) skal sidde, for at beviset for ledvis differentiation kan følges. Noten "Kontinuitet og Differentiabilitet" ligger i mappen "Noter og ekstra opgaver" i zip-filen.

## Begreber

### Funktionsrække og sumfunktion (afsnit 5.3)
En række $\sum_{n=1}^\infty f_n(x)$ hvor leddene er funktioner. For hvert $x$ er det en talrække; mængden af $x$ hvor den konvergerer er konvergensområdet, og $f(x) = \sum f_n(x)$ er sumfunktionen. Slides' spørgsmål: er alle $f_n$ kontinuerte, differentiable eller integrable, er sumfunktionen det så? Svaret er nej, nej og nej, uden ekstra antagelser.

**Eksempel.** $\sum_{n=1}^\infty \frac{\sin(nx)}{n^2}$ konvergerer for alle $x$, fordi $\left|\frac{\sin nx}{n^2}\right| \leq \frac{1}{n^2}$.

### Uniform konvergens (definition 5.28)
Rækken konvergerer uniformt mod $f$ på $I$, hvis der for ethvert $\epsilon > 0$ findes $N_0$ så

$$\left|f(x) - \sum_{n=1}^N f_n(x)\right| \leq \epsilon \quad \text{for alle } x \in I \text{ og alle } N \geq N_0.$$

Det er samme $N_0$ for hele intervallet. Ved punktvis konvergens må $N_0$ afhænge af $x$.

**Eksempel.** $\sum_{n=0}^\infty x^n$ konvergerer punktvis på $]-1,1[$, men ikke uniformt: halen er $\frac{x^{N+1}}{1-x}$, og for $x$ tæt på $1$ er den stor uanset $N$. På $[-0.99, 0.99]$ er den uniform, fordi halen højst er $\frac{0.99^{N+1}}{0.01}$.

**Eksempel (følge af funktioner).** $x^n \to 0$ for $x \in [0, 1[$ og $1^n = 1$, så grænsefunktionen springer i $x = 1$, selvom alle $x^n$ er kontinuerte. Konvergensen er ikke uniform på $[0, 1]$, men den er uniform på $[0, d]$ for $d < 1$, fordi $\sup_{x \in [0,d]} x^n = d^n \to 0$.

### Potensrækker er uniformt konvergente på mindre intervaller (sætning 5.30)
En potensrække med konvergensradius $\rho > 0$ er uniformt konvergent på ethvert interval $[-r, r]$ med $0 < r < \rho$. Bevis (slides): for $x \in [-r, r]$ er $\left|\sum_{n=0}^\infty c_nx^n - \sum_{n=0}^N c_nx^n\right| \leq \sum_{n=N+1}^\infty |c_n|r^n$, og den hale går mod $0$ uafhængigt af $x$, fordi rækken er absolut konvergent i $x = r$.

### Majorantrække (definition 5.31, sætning 5.33)
$\sum k_n$ er en majorantrække for $\sum f_n(x)$ på $I$, hvis $|f_n(x)| \leq k_n$ for alle $x \in I$ og alle $n$, og en konvergent majorantrække, hvis $\sum k_n$ desuden konvergerer. Sætning 5.33: har $\sum f_n(x)$ en konvergent majorantrække på $I$, så konvergerer den uniformt på $I$ og absolut for hvert $x \in I$, og

$$|f(x) - S_N(x)| \leq \sum_{n=N+1}^\infty k_n \quad\text{for alle } x \in I.$$

**Eksempel.** For $\sum\frac{\sin nx}{n^2}$ er $k_n = \frac{1}{n^2}$. Med korollar 4.35 (1) er halen højst $\int_N^\infty x^{-2}dx = \frac1N$. For fejl $\leq 0.01$ på hele $\mathbb R$ er $N = 100$ nok.

**Eksempel.** $\sum_{n=1}^\infty \frac{\cos(nx)}{n^2 + x^2}$ har majoranten $\frac{1}{n^2}$ på hele $\mathbb R$, fordi $n^2 + x^2 \geq n^2$.

### Uniform konvergens uden konvergent majorant (slides)
Det omvendte af sætning 5.33 gælder ikke. Slides' eksempel: $f_n(x) = \frac{(-1)^n}{n}$ (konstante funktioner, fx på $I = \{1\}$). Rækken konvergerer, og da afsnitssummerne ikke afhænger af $x$, er konvergensen uniform. Men den mindste majorantrække er $\sum\frac1n$, som divergerer. En konvergent majorant giver jo absolut konvergens, og rækken er kun betinget konvergent.

### Kontinuitet og ledvis integration (sætning 5.35 og 5.36)
Sætning 5.35: er alle $f_n$ kontinuerte på $I$, og konvergerer $\sum f_n$ uniformt på $I$ (fx fordi der er en konvergent majorantrække), så er sumfunktionen kontinuert. Sætning 5.36: under samme antagelser er $\int_a^b \sum f_n(x)\,dx = \sum \int_a^b f_n(x)\,dx$ for $a, b \in I$. I engelsk litteratur kaldes kombinationen med majoranten Weierstrass' M-test.

**Eksempel.** $\sum\frac{\sin nx}{n^2}$ er kontinuert på hele $\mathbb R$.

### Integration af potensrækker (sætning 5.38)
Sætning 5.30 og 5.36 giver: har $\sum c_nx^n$ konvergensradius $\rho > 0$, så er $\int_0^b \sum c_nx^n\,dx = \sum \frac{c_n}{n+1}b^{n+1}$ for ethvert $b \in\, ]-\rho, \rho[$.

**Eksempel.** $\frac{1}{1+x^2} = \sum_{n=0}^\infty (-1)^nx^{2n}$ for $|x| < 1$, så $\arctan b = \sum_{n=0}^\infty \frac{(-1)^n b^{2n+1}}{2n+1}$ for $|b| < 1$.

### Ledvis differentiation (sætning 5.37)
Antag (i) $f_n$ er differentiable med kontinuerte afledede på $I$, (ii) $f(x) = \sum f_n(x)$ er veldefineret på $I$, og (iii) $\sum f_n'(x)$ konvergerer uniformt på $I$ (fx med en konvergent majorantrække). Så er $f$ differentiabel og $f'(x) = \sum f_n'(x)$. Det er rækken af de **afledte** der skal have en majorant.

Bevisidé (slides): $g = \sum f_n'$ er kontinuert, og ledvis integration giver $\int_{x_0}^x g = \sum (f_n(x) - f_n(x_0)) = f(x) - f(x_0)$; differentiér og få $f' = g$. Anvendt på potensrækker (hvor den differentierede række har samme konvergensradius og derfor er uniformt konvergent på $[-r, r]$) beviser det sætning 5.17.

**Eksempel.** $f(x) = \sum\frac{\sin nx}{n^3}$: de afledte er $\frac{\cos nx}{n^2}$ med majorant $\sum\frac1{n^2}$, så $f'(x) = \sum\frac{\cos nx}{n^2}$. For $\sum\frac{\sin nx}{n^2}$ giver differentiation $\sum\frac{\cos nx}{n}$, som ikke har en konvergent majorant, og sætningen siger derfor intet.

## Opgaver (i ugesedlens prioriterede rækkefølge)

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 114 | 5.3, 5.4 | Hvilke rækker har en majorantrække, og hvilke en konvergent majorantrække? Kontinuitet af en sinusrække og sammenhæng med en cosinusrække. Facit: majorantrække i 2, 3, 4, 5; konvergent majorantrække i 3 og 5. |
| 149 | 5.4 | $f(x) = \sum\frac{1}{3^n}\cos(2^nx)$: konvergens, kontinuitet, differentiabilitet, $f'(0)$. Ugesedlen: plot $S_N$ og dens første og anden afledede for $N = 20$ og $200$ på $[0, 2\pi]$ og $[0.001, 0.002]$, og overvej om $f$ ser ud til at være to gange differentiabel. Facit: $f'(0) = 0$. |
| 151 | 5.4, appendiks B | Rækken for $\ln(1+x)$ har ingen konvergent majorant på $]-1,1]$; kontinuitet og differentiabilitet af $\sum\frac{x^n}{n^2}$. Facit: $f'(0) = 1$, $f'(x) = -\frac{\ln(1-x)}{x}$ for $x \neq 0$. |
| 818 | 4.5 | Fra uge 6. Vink: indskudssætningen. |
| 152 | 4.4, 4.5, 4.7 | Kvotientrækker der starter senere, en række der skifter form efter 100 led, og en række givet ved afsnitssummen $S_N = \frac1N\cos(N\pi)$. Vink til (c): find $a_n$ og skriv rækken som en alternerende række. |
| 508 | 4.7, 5.4 | Konvergenstype for $\sum(-1)^{n-1}\tan\frac{1}{\sqrt n}$ og uniform konvergens af $\sum\frac1n\sin\frac{x}{n\sqrt n}$ (eksamensopgave fra kursus 01030). Facit (i): betinget konvergent. |

**Om opgave 149.** Rækken af afledte er $-\sum \left(\frac23\right)^n\sin(2^nx)$ med den konvergente majorant $\sum\left(\frac23\right)^n$, så $f$ er differentiabel, og $f'(0) = 0$ fordi $\sin 0 = 0$. Differentieres igen, får leddene størrelsen $\left(\frac43\right)^n$, og der er ingen konvergent majorant; sætning 5.37 siger derfor intet om $f''$.

**Hjemmeopgavesæt 7:** opgave 4 fra 01025Mat2MatTekEksamenB-E21.pdf, fysisk senest 4/11 kl. 8, og Möbius sæt 7 (to opgaver) samme frist. Opgave 4 handler om $f(t) = \sum_{n=1}^\infty \frac{t\cos(nt)}{n^3}$: uniform konvergens på $[-a,a]$, et $N$ så fejlen er højst $10^{-2}$ på $[-5,5]$, majorant på hele $\mathbb R$, konvergens og kontinuitet. Bedømt aflevering.

**MC:** svaret på 705 er 2. Ugens MC-opgave er 706 (EkstraOpgaver.pdf): er $\sum_{n=2}^\infty \frac{(-1)^n}{n\ln n}$ divergent, absolut konvergent eller betinget konvergent? Facit (ugeseddel 9): 3, betinget konvergent.

**Løsningsnoter:** WeeklyNotes8_v3.pdf (under uge 9 på DTU Learn) løser opgave 151 (den mindste majorant $\sum\frac{1}{n+1}$ divergerer; inden for konvergensintervallet differentieres ledvis og omskrives til $-\frac{\ln(1-x)}{x}$), opgave 162 (i) (korollar 4.35 og fælles brøkstreg) og opgave 818 (integralet over $[n, n+1]$ er $\frac{2}{n\pi}$, så integralet divergerer, mens $f(n) = 0$ giver en konvergent række; ingen modstrid, fordi $f$ ikke er aftagende). WeeklyNotes7.pdf (under uge 8) hører til opgave 815 i uge 7.

## Tjek dig selv

- [ ] Hvad er forskellen på punktvis og uniform konvergens, med et eksempel?
- [ ] Hvordan findes en konvergent majorantrække, eller argumenteres for at der ingen er?
- [ ] Hvordan bruges en majorant til at finde $N$ så fejlen er under $\epsilon$ for alle $x$?
- [ ] Hvilke antagelser kræver sætning 5.35, 5.36 og 5.37, og hvorfor er det rækken af afledte der skal have en majorant i 5.37?
- [ ] Hvorfor giver uniform konvergens ikke altid en konvergent majorantrække?
- [ ] Hvad er definitionen af kontinuitet med $\epsilon$ og $\delta$?
- [ ] Hvorfor er en potensrække uniformt konvergent på $[-r, r]$ for $r < \rho$, men ikke nødvendigvis på $]-\rho, \rho[$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 07|Uge 7]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 09|Uge 9: Fourierrækker]]
- [[Differential Equations and Infinite Series]]
