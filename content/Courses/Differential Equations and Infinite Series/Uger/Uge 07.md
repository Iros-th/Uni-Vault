---
publish: true
title: "01025 uge 7: Potensrækker"
course: Differential Equations and Infinite Series
type: week
week: 7
tags:
  - differential-equations
  - ugenote
---

# Uge 7: Potensrækker

> **Kilde:** ugeseddel 7, SlidesUge7.pdf, Uge7Potensrækker.pdf og Uge7Potensrarkke.mw, WeeklyNotes6.pdf og WeeklyNotes7.pdf, facitliste_studerende.pdf, EkstraOpgaver.pdf (opgave 705), eksamenssættet maj 2024 (01025Mat2MatTekEksamenAogB-F24.pdf i zip-filen) (DTU Learn, 01025 E26); lærebogen afsnit 5.1 og 5.2 og appendiks B. Ugesedlen henviser til beviserne for sætning 5.13 og 5.17 i "appendiks A.9, side 220 til 221"; i den ældre bog-PDF står de i A.8. Sætningsnumre som i slides.

## Læseplan

- Forelæsning (onsdag 21/10): afsnit 5.2 (5.1 er gennemgået i uge 5) og beviserne for sætning 5.13 og 5.17 i appendiks.
- Appendiks B har oversigten over kendte potensrækker for standardfunktionerne.

## Begreber

### Rækker med variable led og potensrækker (definition 5.12)
For funktioner $f_0, f_1, \dots$ ser man på $\sum_{n=0}^\infty f_n(x)$ og taler om punktvis konvergens (for hvert enkelt $x$) mod en sumfunktion. En potensrække er det specialtilfælde hvor $f_n(x) = c_nx^n$:

$$\sum_{n=0}^\infty c_n x^n = c_0 + c_1x + c_2x^2 + \cdots.$$

En funktion der kan skrives sådan, siges at have en potensrækkefremstilling. Bogen udvikler omkring $0$; en række i $(x - x_0)$ behandles på samme måde. I $x = 0$ er summen altid $c_0$.

### Fra Taylorudvikling til potensrække (sætning 5.7 og 5.10)
Sætning 5.7: er $f$ uendelig ofte differentiabel på et interval $I$, og findes en konstant $C$ med $|f^{(n)}(x)| \leq C$ for alle $n$ og alle $x \in I$, så er $f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n$ for alle $x \in I$. Sætning 5.10 giver for alle $x \in \mathbb R$:

$$e^x = \sum_{n=0}^\infty \frac{x^n}{n!}, \qquad \cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}, \qquad \sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}.$$

**Eksempel.** For $\sin$ og $\cos$ er alle afledede begrænset af $C = 1$ på hele $\mathbb R$, så sætning 5.7 gælder direkte. For $e^x$ er $|f^{(n)}(x)| = e^x \leq e^R$ på $[-R, R]$, så rækken gælder på ethvert begrænset interval og dermed overalt.

Slides understreger at en vilkårligt ofte differentiabel funktion ikke behøver at være lig sin Taylorrække; antagelsen i sætning 5.7 er nødvendig.

### Konvergensradius (sætning 5.13)
For enhver potensrække gælder ét af tre: (i) den konvergerer kun for $x = 0$ ($\rho = 0$), (ii) den er absolut konvergent for alle $x$ ($\rho = \infty$), eller (iii) der findes $\rho > 0$ så den er absolut konvergent for $|x| < \rho$ og divergent for $|x| > \rho$. I endepunkterne $x = \pm\rho$ siger sætningen intet.

**Eksempler fra slides.** $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$ for $x \in\, ]-1, 1[$, mens $\sum_{n=1}^\infty n!\,x^n$ kun konvergerer for $x = 0$ (kvotienten $(n+1)|x| \to \infty$ for $x \neq 0$).

**Beviset uden bogens antagelse (slides).** Konvergerer $\sum a_nx_0^n$ for et $x_0 \neq 0$, går $a_nx_0^n \to 0$, så $|a_nx_0^n| \leq M$ for alle $n$. For $|x| < |x_0|$ er da $|a_nx^n| \leq M\left|\frac{x}{x_0}\right|^n$, og sammenligning med en kvotientrække giver absolut konvergens. Sæt $\rho = \sup\{|x| : \sum a_nx^n \text{ konvergerer}\}$. Et mere generelt bevis indgår i hjemmeopgavesæt 6.

### At finde $\rho$ med kvotientkriteriet
Brug kvotientkriteriet på $\sum |c_n x^n|$: hvis $\left|\frac{c_{n+1}}{c_n}\right| \to L$, så er $\rho = \frac1L$ (med $\rho = \infty$ hvis $L = 0$ og $\rho = 0$ hvis $L = \infty$).

**Eksempel.** $\sum_{n=1}^\infty \frac{n}{3^n}(x - 2)^n$ har $\left|\frac{c_n}{c_{n+1}}\right| = 3\cdot\frac{n}{n+1} \to 3$, så rækken konvergerer for $|x - 2| < 3$, dvs. $-1 < x < 5$, og divergerer for $|x - 2| > 3$.

### Endepunkterne
I $x = \pm\rho$ kan rækken konvergere i begge, divergere i begge, eller konvergere i det ene og divergere i det andet.

**Eksempel.** $\sum_{n=1}^\infty \frac{x^n}{n}$: $\frac{|x|^{n+1}/(n+1)}{|x|^n/n} = \frac{n}{n+1}|x| \to |x|$, så $\rho = 1$. For $x = 1$ fås $\sum\frac1n$, divergent; for $x = -1$ fås $\sum\frac{(-1)^n}{n}$, konvergent efter Leibniz. Konvergensintervallet er $[-1, 1[$.

### Differentiation af potensrækker (sætning 5.17)
Har $f(x) = \sum c_n x^n$ konvergensradius $\rho > 0$, så er $f$ uendelig ofte differentiabel på $]-\rho, \rho[$ med $f'(x) = \sum_{n=1}^\infty n c_n x^{n-1}$, og generelt $f^{(k)}(x) = \sum_{n=k}^\infty c_n\,n(n-1)\cdots(n-k+1)\,x^{n-k}$. Den differentierede række har samme konvergensradius. Beviset kommer i uge 8.

**Eksempel.** Differentiér $\sum_{n=0}^\infty x^n = \frac{1}{1-x}$ for $|x| < 1$: $\sum_{n=1}^\infty n x^{n-1} = \frac{1}{(1-x)^2}$. Gang med $x$: $\sum_{n=1}^\infty n x^n = \frac{x}{(1-x)^2}$. For $x = \frac13$ giver det $\sum_{n=1}^\infty \frac{n}{3^n} = \frac{1/3}{4/9} = \frac34$. Det er teknikken i opgave 112.

### Koefficienterne og identitetssætningen (sætning 5.20, korollar 5.21)
Sættes $x = 0$ i formlen for $f^{(k)}$, fås $c_k = \frac{f^{(k)}(0)}{k!}$ (sætning 5.20): potensrækken er entydigt bestemt af $f$'s afledede i $0$. Korollar 5.21 (identitetssætningen): er $\sum c_nx^n = 0$ for alle $x \in\, ]-\rho, \rho[$, så er alle $c_n = 0$. Det er det der gør potensrækkemetoden mulig (uge 12): man indsætter $y = \sum c_nx^n$ og sammenligner koefficienter.

**Eksempel.** Er $\sum c_nx^n = e^x$ nær $0$, så er $c_n = \frac{1}{n!}$, fordi alle afledede af $e^x$ er $1$ i $0$.

### Integration af potensrækker
En potensrække kan integreres ledvis inden for konvergensradius (sætning 5.38, uge 8), og den integrerede række har samme konvergensradius.

**Eksempel.** Integrér $\frac{1}{1+x} = \sum_{n=0}^\infty (-1)^n x^n$ fra $0$ til $x$: $\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}x^n}{n}$ for $|x| < 1$.

### Standardrækker (appendiks B)
- $\frac{1}{1-x} = \sum_{n=0}^\infty x^n$, $\rho = 1$
- $e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$, $\cos x = \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!} x^{2n}$, $\sin x = \sum_{n=0}^\infty \frac{(-1)^n}{(2n+1)!} x^{2n+1}$, alle med $\rho = \infty$
- $\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} x^n$, $\rho = 1$
- $\arctan x = \sum_{n=0}^\infty \frac{(-1)^n}{2n+1} x^{2n+1}$, $\rho = 1$

### Fejlvurdering med en kvotientrække
Er leddene i halen mindre end leddene i en kvotientrække, kan korollar 5.5 vurdere fejlen. Det er idéen i ugesedlens vink til opgave 815: for $x \in [0,1[$ er

$$f(x) - S_N(x) = \sum_{n=N+1}^\infty \frac{2}{2n-1}x^{2n-1} \leq 2\sum_{n=N+1}^\infty x^{2n-1},$$

og den sidste sum er en kvotientrække i $x^2$. For $x = \frac12$ er den $2\sum_{n=N+1}^\infty \left(\frac12\right)^{2n-1} = \frac43\cdot\frac{1}{4^N}$, som er $\leq 0.1$ for $N \geq 2$.

### Maple-eksemplerne (Uge7Potensrækker)
Maple-filen plotter en lakunær potensrække (kun potenserne $x^{2^n}$ er med, med skiftende fortegn) tæt på $x = 1$, hvor sumfunktionen svinger uendeligt mange gange og ikke har en grænseværdi for $x \to 1^-$ (Hardy 1907), og afsnitssummen af $\sum \frac{\cos(3^n x)}{2^n}$ for $N = 300$. Ikke pensum, men en illustration af at sumfunktioner kan opføre sig uventet.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 146 | 4.5, 4.7 | Betinget eller absolut konvergent eller divergent, bl.a. en række der starter med $n^3$ og først senere skifter til $\frac{(-1)^n}{n^3}$. Facit: (i) abs. konv., (ii) divergent, (iii) abs. konv. |
| 112 | 5.1, 5.2 (sætning 5.17) | Find $\sum n x^n$ og $\sum n^2x^n$ ved at differentiere kvotientrækken, og brug det til $\sum\frac{n}{2^n}$ og $\sum\frac{n^2}{2^n}$. Ugesedlen: på samme måde fås $\sum n^p x^n$ og dermed $\sum \text{polynomium}(n)\,x^n$, alle med samme konvergensradius. Facit: $\frac{x}{(1-x)^2}$, $\frac{x+x^2}{(1-x)^3}$, $2$, $6$. |
| 115 | 5.1, 5.2 | Konvergens og sum af $\sum(-x)^n$ og $\sum(-1)^nx^{2n}$. Ugesedlen spørger hvad (ii) har med et vigtigt eksempel på interpolerende polynomium i numeriske algoritmer at gøre. |
| 509 | 5.2 | Konvergensradius for $\sum\frac{x^{2n}}{3^n(n^2+1)}$, endepunkterne, og en vurdering af summen i $x = \sqrt3$. Ugesedlen minder om $\int\frac{1}{1+x^2}dx = \arctan x$. Facit: $\rho = \sqrt3$. |
| 136 | 5.2 | Konvergensradius for $\sum\frac{2^n}{n}x^n$ og et funktionsudtryk for $f'(x)$. Facit: $\rho = \frac12$, $f'(x) = \frac{2}{1-2x}$. |
| 815 | 5.1, 5.2 (korollar 5.5) | Hvor mange led af rækken for $\ln\frac{1+x}{1-x}$ giver fejl $\leq 0.1$ i $x = \frac12$ og på hele $[0, \frac12]$? Se vurderingen ovenfor. |

**Hjemmeopgavesæt 6** (fysisk senest 28/10 kl. 8; Möbius sæt 6 senest 27/10 kl. 20). Bedømt aflevering.
- Opgave 1 fra del B af eksamenssættet 13. maj 2024 (01025Mat2MatTekEksamenAogB-F24.pdf, afsnit 4.5 og 4.7): vis at $\sum_{n=1}^\infty (-1)^n\frac{100+n}{2+n^3}$ er absolut konvergent, og find for rækken $\sum_{n=1}^\infty (-1)^n\frac{100+n}{2+n^k}$, $k \in \mathbb N$, den mindste $k$ der giver absolut konvergens og den mindste $k$ der giver konvergens.
- Spiseseddelopgave 1 (iii) og (iv) fra ugesedlen, en redigeret udgave af bogens opgave 811 (afsnit 4.5): en mere generel udgave af kvotientkriteriet, hvor man kun antager $|a_{n+1}| \leq C|a_n|$ med $C < 1$, ikke at kvotienten konvergerer. Spørgsmål (i) og (ii) må bruges som vink.

**MC:** svaret på 704 er 4. Ugens MC-opgave er 705 (EkstraOpgaver.pdf): en kvotientrække med kvotient $\frac45$ der starter ved $n = 2$; divergent, eller konvergent med hvilken sum? Facit (ugeseddel 8): 2.

**Løsningsnoter:** WeeklyNotes7.pdf (under uge 8 på DTU Learn) løser opgave 815: vurdér halen med $\frac{1}{2n-1} \leq 1$ og summér kvotientrækken, så $|f(x) - S_N(x)| \leq \frac43\cdot 4^{-N}$ på $[0, \frac12]$ og $N \geq 2$ er nok; på $[0, r]$ med $r < 1$ kræves $\frac{2r}{1-r^2}r^{2N} \leq 0.1$, og på hele $[0, 1[$ er konvergensen ikke uniform, fordi $f(x) \to \infty$ for $x \to 1$. WeeklyNotes6.pdf (under uge 7) hører til uge 6. Facit til 112, 115, 136, 146 og 509 står i facitliste_studerende.pdf.

## Tjek dig selv

- [ ] Hvordan finder man konvergensradius med kvotientkriteriet, og hvordan undersøges endepunkterne?
- [ ] Hvad siger sætning 5.7, og hvorfor er antagelsen om begrænsede afledede nødvendig?
- [ ] Hvilke rækker har $e^x$, $\cos x$, $\sin x$, $\ln(1+x)$ og $\frac{1}{1-x}$, og med hvilken konvergensradius?
- [ ] Hvordan differentieres og integreres en potensrække ledvis, og hvorfor ændres $\rho$ ikke?
- [ ] Hvordan summeres $\sum n x^n$ ved at differentiere kvotientrækken?
- [ ] Hvorfor er $c_k = \frac{f^{(k)}(0)}{k!}$, og hvad siger identitetssætningen?
- [ ] Hvordan vurderes $|f(x) - S_N(x)|$ ved sammenligning med en kvotientrække?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 06|Uge 6]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 08|Uge 8: Uniform konvergens]]
- [[Differential Equations and Infinite Series]]
