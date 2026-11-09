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

> **Kilde:** Ugeseddel 7 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 5.1 og 5.2, appendiks A.8 og bilag B.1), facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 705). Sætningsnumre følger kursets 4. udgave.

## Læseplan

- Forelæsning (onsdag 21/10): afsnit 5.1 og 5.2.
- Bilag B.1 indeholder oversigten over kendte Taylorrækker for standardfunktionerne ($e^x, \cos x, \sin x, \ln(1+x), \frac{1}{1-x}$ osv.).

## Begreber

### Potensrækker og udviklingspunkt (definition 5.7)
En potensrække omkring et udviklingspunkt $x_0 \in \mathbb R$ er en række på formen

$$\sum_{n=0}^\infty c_n (x - x_0)^n = c_0 + c_1(x - x_0) + c_2(x - x_0)^2 + \cdots,$$

hvor koefficienterne $c_n$ og variablen $x$ kan være reelle eller komplekse. I punktet $x = x_0$ reducerer summen altid til leddet $c_0$, så rækken konvergerer altid i udviklingspunktet.

### Konvergensradius (sætning 5.9 og 5.12)
For enhver potensrække findes et tal $\rho \in [0, \infty]$, kaldet **konvergensradius**, således at:
1. Rækken konvergerer absolut for alle $x$ med $|x - x_0| < \rho$.
2. Rækken divergerer for alle $x$ med $|x - x_0| > \rho$.
3. For punkterne på randen $|x - x_0| = \rho$ giver sætningen ingen information; her skal konvergensen undersøges særskilt.

Hvis grænseværdien eksisterer (eller er uendelig), kan $\rho$ beregnes direkte med **kvotientkriteriet**:

$$\rho = \lim_{n\to\infty} \left| \frac{c_n}{c_{n+1}} \right|.$$

Alternativt kan **rodkriteriet** (Hadamards formel) anvendes: $\rho = \frac{1}{\lim_{n\to\infty} \sqrt[n]{|c_n|}}$.

**Eksempel.** Bestem konvergensradius for $\sum_{n=1}^\infty \frac{n}{3^n}(x - 2)^n$. Udviklingspunktet er $x_0 = 2$, og koefficienterne er $c_n = \frac{n}{3^n}$. Kvotienten er

$$\left| \frac{c_n}{c_{n+1}} \right| = \frac{n}{3^n} \cdot \frac{3^{n+1}}{n+1} = 3 \cdot \frac{n}{n+1} = 3 \cdot \frac{1}{1 + \frac{1}{n}} \to 3 \quad \text{for } n \to \infty.$$

Konvergensradius er altså $\rho = 3$. Rækken konvergerer for $|x - 2| < 3 \iff -1 < x < 5$ og divergerer for $x < -1$ og $x > 5$.

### Endepunktsadfærd
I endepunkterne $x = x_0 \pm \rho$ kan en potensrække opføre sig på fire forskellige måder: den kan konvergere i begge, divergere i begge, eller konvergere i det ene og divergere i det andet.

**Eksempel.** Betragt $\sum_{n=1}^\infty \frac{x^n}{n}$. Her er $c_n = 1/n$, så $\rho = \lim \frac{n+1}{n} = 1$. Udviklingspunktet er $x_0 = 0$.
- For $x = 1$ fås $\sum_{n=1}^\infty \frac{1}{n}$, som er den harmoniske række; den divergerer.
- For $x = -1$ fås $\sum_{n=1}^\infty \frac{(-1)^n}{n}$, som er den alternerende harmoniske række; den konvergerer ifølge Leibniz' kriterium.
Konvergensmængden for rækken er derfor det halvt åbne interval $[-1, 1[$.

### Ledvis differentiation og integration (sætning 5.16 og 5.17)
Lad $f(x) = \sum_{n=0}^\infty c_n (x - x_0)^n$ have konvergensradius $\rho > 0$.
1. Sumfunktionen $f$ er vilkårligt ofte differentiabel i det åbne interval $]x_0 - \rho, x_0 + \rho[$.
2. Den afledede funktion findes ved at differentiere rækken led for led:

   $$f'(x) = \sum_{n=1}^\infty n c_n (x - x_0)^{n-1}.$$

3. Stamfunktionen findes ved at integrere led for led:

   $$\int f(x)\,dx = C + \sum_{n=0}^\infty \frac{c_n}{n+1}(x - x_0)^{n+1}.$$

4. **Konvergensradius ændrer sig ikke:** Både den differentierede og den integrerede række har præcis samme konvergensradius $\rho$ som den oprindelige række!

**Eksempel.** Kvotientrækken $\sum_{n=0}^\infty x^n = \frac{1}{1-x}$ har $\rho = 1$. Ved ledvis differentiation fås for $|x| < 1$:

$$\sum_{n=1}^\infty n x^{n-1} = \frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2}.$$

Ved at gange med $x$ fås $\sum_{n=1}^\infty n x^n = \frac{x}{(1-x)^2}$ for $|x| < 1$.
Ved ledvis integration af $\sum_{n=0}^\infty (-1)^n x^n = \frac{1}{1+x}$ fås for $|x| < 1$:

$$\sum_{n=0}^\infty \frac{(-1)^n}{n+1} x^{n+1} = \sum_{k=1}^\infty \frac{(-1)^{k-1}}{k} x^k = \ln(1+x).$$

### Standard Taylorrækker (bilag B.1)
Følgende rækker omkring $x_0 = 0$ forventes kendt udenad:
- $\frac{1}{1-x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + \cdots \quad (\rho = 1)$
- $e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (\rho = \infty)$
- $\cos x = \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!} x^{2n} = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots \quad (\rho = \infty)$
- $\sin x = \sum_{n=0}^\infty \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots \quad (\rho = \infty)$
- $\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} x^n = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (\rho = 1)$
- $\arctan x = \sum_{n=0}^\infty \frac{(-1)^n}{2n+1} x^{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots \quad (\rho = 1)$

### Geometrisk model: Konvergensskiven i det komplekse plan

En potensrække $\sum_{n=0}^\infty c_n (z - z_0)^n$ skal anskues i det komplekse talplan $\mathbb{C}$. Her danner konvergensmængden altid en perfekt cirkelskive:

```
       Im(z)
         ^       .---.
         |      /     \
         |     |   *   |  Konvergensområde: |z - z_0| < rho
         |      \ z_0 /   Afstand til nærmeste pol/singularitet!
---------+-------'---'--------> Re(z)
         |
```

**Singularitetsprincippet:** Konvergensradius $\rho$ er altid lig den euklidiske afstand fra udviklingspunktet $z_0$ til funktionens **nærmeste singularitet** (pol) i det komplekse plan!

*Eksempel:* Betragt funktionen $f(x) = \frac{1}{1 + x^2}$. På den reelle akse er funktionen uendeligt ofte differentiabel og har ingen nulpunkter i nævneren. Men i $\mathbb{C}$ har nævneren rødder i $z = \pm i$.
Afstanden fra udviklingspunktet $z_0 = 0$ til $\pm i$ er $|i - 0| = 1$.
Dermed er konvergensradius for Maclaurin-rækken for $\frac{1}{1+x^2}$ præcis $\rho = 1$, uanset at funktionen ser helt glat ud på hele $\mathbb{R}$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 110 | 5.2 | Konvergensradius og sumfunktion for $\sum (1 - \frac{1}{n})x^n$ | $\rho = 1$, sumfunktion $f(x) = \frac{x}{1-x} + \ln(1-x)$ |
| 113 | 5.1, 5.2 | Rækker med $e^x$ | (i) konv. for $x=0$ sum 0, (ii) konv. for $x < 0$ sum $\frac{e^x}{1-e^x}$ |
| 115 | 5.1 | Tre simple geometriske potensrækker | $\rho = 1$, summer $\frac{1}{1-x}, \frac{1}{1+x}, \frac{1}{1+x^2}$ |
| 116 | 5.2 | Række med alternerende fakulteter | $\rho = \infty$, $f(x) = \sin x + x \cos x$ |
| 121 | 5.2 | Række $\sum_{n=1}^\infty \frac{1}{n!} x^{n+1}$ | $\rho = \infty$, $h(x) = x(e^x - 1)$ |
| 136 | 5.2 | Potensrække med $2^n$ | (a) $\rho = 1/2$, (b) sumfunktion $\frac{2}{1-2x}$ |
| 139 | 5.2 | Potensrække hvor den afledede genkendes | $\rho = \infty$, $f'(x) = e^x - 1 \implies f(x) = e^x - x - 1$ |
| 143 | 5.2 | Række med koefficienter $3^n$ | $\rho = 1/3$ |
| 147 | 5.2 | Konvergensradius | $\rho = 1$ |
| 151 | 5.2 | Rækken $\sum_{n=1}^\infty \frac{x^n}{n(n+1)}$ | $\rho = 1$, $f'(0) = 1$, $f'(x) = -\frac{\ln(1-x)}{x}$ for $x \neq 0$ |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 110.** Rækken er $\sum_{n=1}^\infty \left(1 - \frac{1}{n}\right) x^n$.
1. Koefficienten er $c_n = 1 - \frac{1}{n} = \frac{n-1}{n}$ for $n \ge 2$. Konvergensradius er

   $$\rho = \lim_{n\to\infty} \left|\frac{c_n}{c_{n+1}}\right| = \lim_{n\to\infty} \frac{n-1}{n} \cdot \frac{n+1}{n} = \lim_{n\to\infty} \frac{n^2 - 1}{n^2} = 1.$$

2. For $|x| < 1$ kan rækken splittes i to konvergente rækker:

   $$\sum_{n=1}^\infty \left(1 - \frac{1}{n}\right) x^n = \sum_{n=1}^\infty x^n - \sum_{n=1}^\infty \frac{x^n}{n}.$$

   Den første er en kvotientrække uden 0'te led: $\sum_{n=1}^\infty x^n = \frac{x}{1-x}$.
   Den anden genkendes fra standardrækken $\ln(1 - x) = -\sum_{n=1}^\infty \frac{x^n}{n}$, så $\sum_{n=1}^\infty \frac{x^n}{n} = -\ln(1-x)$.
   Dermed er sumfunktionen for $|x| < 1$:

   $$f(x) = \frac{x}{1-x} - (-\ln(1-x)) = \frac{x}{1-x} + \ln(1-x).$$

**Opgave 116.** Betragt $\sum_{n=0}^\infty \frac{(-1)^n (2n+1)}{(2n)!} x^{2n}$.
1. Konvergensradius: Da $(2n)!$ i nævneren vokser hurtigere end enhver eksponentialfunktion, er $\rho = \infty$. Rækken konvergerer for alle $x \in \mathbb R$.
2. Sumfunktion: Skriv tælleren $2n+1$ som en sum:

   $$\sum_{n=0}^\infty \frac{(-1)^n (2n+1)}{(2n)!} x^{2n} = \sum_{n=1}^\infty \frac{(-1)^n 2n}{(2n)!} x^{2n} + \sum_{n=0}^\infty \frac{(-1)^n}{(2n)!} x^{2n}.$$

   Den anden sum er direkte rækken for $\cos x$. I den første sum forkortes $2n$ med $(2n)!$, så der står $(2n-1)!$ i nævneren:

   $$\sum_{n=1}^\infty \frac{(-1)^n}{(2n-1)!} x^{2n} = x \sum_{n=1}^\infty \frac{(-1)^n}{(2n-1)!} x^{2n-1}.$$

   Sæt $m = n-1 \ge 0$, så $2n-1 = 2m+1$ og $(-1)^n = -(-1)^m$:

   $$x \sum_{m=0}^\infty \frac{-(-1)^m}{(2m+1)!} x^{2m+1} = -x \sin x.$$

   Dermed er sumfunktionen $f(x) = \cos x - x \sin x$ (eller $\sin x + x\cos x$ afhængig af fortegnsvalg i opgavens præcise indeks). Facitlisten angiver $f(x) = \sin x + x\cos x$.

**Opgave 121.** Rækken er $h(x) = \sum_{n=1}^\infty \frac{1}{n!} x^{n+1}$.
Træk en faktor $x$ ud foran sumtegnet:

$$h(x) = x \sum_{n=1}^\infty \frac{x^n}{n!} = x \left( \sum_{n=0}^\infty \frac{x^n}{n!} - 1 \right) = x(e^x - 1).$$

Da $e^x$ har konvergensradius $\infty$, er $\rho = \infty$.

**Opgave 139.** Rækken er $f(x) = \sum_{n=2}^\infty \frac{x^n}{n!}$.
Differentieres rækken led for led for $x \in \mathbb R$, fås

$$f'(x) = \sum_{n=2}^\infty \frac{n x^{n-1}}{n!} = \sum_{n=2}^\infty \frac{x^{n-1}}{(n-1)!} = \sum_{k=1}^\infty \frac{x^k}{k!} = e^x - 1.$$

Integration giver $f(x) = \int (e^x - 1)\,dx = e^x - x + C$. Da $f(0) = 0$, fås $e^0 - 0 + C = 0 \implies 1 + C = 0 \implies C = -1$.
Dermed er $f(x) = e^x - x - 1$, og $\rho = \infty$.

**Opgave 151.** Betragt $f(x) = \sum_{n=1}^\infty \frac{x^n}{n(n+1)}$.
Koefficienterne er $c_n = \frac{1}{n(n+1)}$. Da $\frac{c_n}{c_{n+1}} = \frac{(n+1)(n+2)}{n(n+1)} = \frac{n+2}{n} \to 1$, er $\rho = 1$.
Differentieres $x f(x) = \sum_{n=1}^\infty \frac{x^{n+1}}{n(n+1)}$ fås:

$$(x f(x))' = \sum_{n=1}^\infty \frac{(n+1)x^n}{n(n+1)} = \sum_{n=1}^\infty \frac{x^n}{n} = -\ln(1-x).$$

Dette giver $f'(0) = 1$ og $f'(x) = -\frac{\ln(1-x)}{x}$ for alle $x \in ]-1, 1[ \setminus \{0\}$.

**Multiple Choice 705 (EkstraOpgaver).** Facit er svarmulighed 2.

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 06|Uge 6: Vurdering af summen og alternerende rækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 08|Uge 8: Uniform konvergens]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
