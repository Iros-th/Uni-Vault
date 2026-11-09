---
publish: true
title: "01025 uge 7: Rækker med variable led og potensrækker"
course: Differential Equations and Infinite Series
type: week
week: 7
tags:
  - differential-equations
  - ugenote
---

# Uge 7: Rækker med variable led og potensrækker

> **Kilde:** Ugeseddel 7 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 5.1 og 5.2. Ugesedlen henviser til beviserne for sætning 5.13 og 5.17 i "appendiks A.9, side 220 til 221"; i den 4. udgave jeg har tjekket mod står de i A.8. SlidesUge7.pdf, Uge7Potensrækker.pdf og WeeklyNotes6.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning (onsdag 21/10): afsnit 5.2 (5.1 er allerede gennemgået) og beviserne for sætning 5.13 og 5.17 i appendiks.

## Begreber

### Potensrække og konvergensradius (sætning 5.13)
En potensrække er $\sum_{n=0}^\infty c_n x^n$. Sætning 5.13 siger at der er tre muligheder: den konvergerer kun for $x = 0$ ($\rho = 0$), den konvergerer absolut for alle $x$ ($\rho = \infty$), eller der findes $\rho > 0$ så den konvergerer absolut for $|x| < \rho$ og divergerer for $|x| > \rho$. Tallet $\rho$ er konvergensradius. I endepunkterne $x = \pm\rho$ siger sætningen intet; dem skal man undersøge for sig.

### At finde $\rho$ med kvotientkriteriet
Brug kvotientkriteriet på $\sum |c_n x^n|$: hvis $\left|\frac{c_{n+1}}{c_n}\right| \to L$, så er $\rho = \frac1L$ (med $\rho = \infty$ hvis $L = 0$).

**Eksempel.** $\sum_{n=1}^\infty \frac{x^n}{n}$: $\frac{|x|^{n+1}/(n+1)}{|x|^n/n} = \frac{n}{n+1}|x| \to |x|$, så $\rho = 1$. Endepunkter: for $x = 1$ fås $\sum\frac1n$, divergent; for $x = -1$ fås $\sum\frac{(-1)^n}{n}$, konvergent efter Leibniz. Konvergensintervallet er $[-1, 1[$.

### Taylorrækker (sætning 5.7 og 5.10)
Er $f$ uendelig ofte differentiabel og går restleddet i Taylors formel mod $0$, så er $f$ lig sin Taylorrække. Sætning 5.10 giver for alle $x \in \mathbb R$:

$$e^x = \sum_{n=0}^\infty \frac{x^n}{n!}, \qquad \cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}, \qquad \sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}.$$

Flere standardrækker står i appendiks B.

### Differentiation af potensrækker (sætning 5.17)
Har $f(x) = \sum c_n x^n$ konvergensradius $\rho > 0$, så er $f$ differentiabel på $]-\rho, \rho[$ med $f'(x) = \sum_{n=1}^\infty n c_n x^{n-1}$, og den differentierede række har samme konvergensradius.

**Eksempel.** Differentiér $\sum_{n=0}^\infty x^n = \frac{1}{1-x}$ for $|x| < 1$: $\sum_{n=1}^\infty n x^{n-1} = \frac{1}{(1-x)^2}$. Gang med $x$: $\sum_{n=1}^\infty n x^n = \frac{x}{(1-x)^2}$. For $x = \frac13$ giver det $\sum_{n=1}^\infty \frac{n}{3^n} = \frac{1/3}{4/9} = \frac34$ (tjekket numerisk). Det er teknikken i opgave 112.

### Integration og identitetssætningen (korollar 5.21 og 5.36)
En potensrække kan integreres ledvis inden for konvergensradius, og to potensrækker med samme sum på et interval omkring $0$ har samme koefficienter (identitetssætningen, korollar 5.21).

**Eksempel.** Integrér $\frac{1}{1+x} = \sum_{n=0}^\infty (-1)^n x^n$ fra $0$ til $x$: $\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}x^n}{n}$ for $|x| < 1$.

### Fejlvurdering med en kvotientrække
Er leddene i halen mindre end leddene i en kvotientrække, kan man bruge korollar 5.5 til at vurdere fejlen. Det er idéen i ugesedlens vink til opgave 815: for $x \in [0,1[$ er

$$f(x) - S_N(x) = \sum_{n=N+1}^\infty \frac{2}{2n-1}x^{2n-1} \leq 2\sum_{n=N+1}^\infty x^{2n-1},$$

og den sidste sum er en kvotientrække i $x^2$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 146 | 4.5, 4.7 | Betinget eller absolut konvergent eller divergent, bl.a. en række der starter med $n^3$ og først senere skifter til $\frac{(-1)^n}{n^3}$. |
| 112 | 5.1, 5.2 (sætning 5.17) | Find $\sum n x^n$ og $\sum n^2x^n$ ved at differentiere kvotientrækken, og brug det til $\sum\frac{n}{2^n}$ og $\sum\frac{n^2}{2^n}$. Ugesedlen: på samme måde fås $\sum n^p x^n$ og dermed $\sum \text{polynomium}(n)\,x^n$, alle med samme konvergensradius. |
| 115 | 5.1, 5.2 | Konvergens og sum af $\sum(-x)^n$ og $\sum(-1)^nx^{2n}$. Ugesedlen: hvad har (ii) med et vigtigt eksempel på interpolerende polynomium i numeriske algoritmer at gøre? |
| 509 | 5.2 | Konvergensradius for $\sum\frac{x^{2n}}{3^n(n^2+1)}$, endepunkterne, og en vurdering af summen i $x = \sqrt3$. Husk $\int\frac{1}{1+x^2}dx = \arctan x$. |
| 136 | 5.2 | Konvergensradius for $\sum\frac{2^n}{n}x^n$ og et funktionsudtryk for $f'(x)$. |
| 815 | 5.1, 5.2 (korollar 5.5) | Hvor mange led af rækken for $\ln\frac{1+x}{1-x}$ skal der til for fejl $\leq 0.1$ i $x = \frac12$ og på hele $[0, \frac12]$? Se vinket ovenfor. |

**Hjemmeopgavesæt 6:** afleveres fysisk senest 28/10 kl. 8:
- Opgave 1 fra del B af eksamenssættet maj 2024 (ligger i zip-filen i første Content på DTU Learn). Ikke læst her: den zip-fil jeg havde adgang til lokalt indeholder ikke sættet fra 2024.
- Spiseseddelopgave 1 (iii) og (iv) fra ugesedlen, en redigeret udgave af bogens opgave 811 (afsnit 4.5): en mere generel udgave af kvotientkriteriet, hvor man kun antager $|a_{n+1}| \leq C|a_n|$ med $C < 1$, ikke at kvotienten konvergerer. Spørgsmål (i) og (ii) må bruges som vink.
- Möbius sæt 6 (én opgave) senest 27/10 kl. 20.

**MC:** svaret på 704 er 4. Løs nu opgave 705.

## Tjek dig selv

- [ ] Kan jeg finde konvergensradius med kvotientkriteriet og bagefter undersøge endepunkterne?
- [ ] Kender jeg rækkerne for $e^x$, $\cos x$, $\sin x$ og $\frac{1}{1-x}$ udenad?
- [ ] Kan jeg differentiere og integrere en potensrække ledvis, og ved jeg at $\rho$ ikke ændres?
- [ ] Kan jeg bruge differentiation af kvotientrækken til at summere $\sum n x^n$?
- [ ] Kan jeg vurdere fejlen $|f(x) - S_N(x)|$ ved at sammenligne halen med en kvotientrække?
- [ ] Kan jeg forklare forskellen på konvergensradius og konvergensinterval?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 06|Uge 6]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 08|Uge 8: Uniform konvergens]]
