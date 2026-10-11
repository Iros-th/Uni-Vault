---
publish: true
title: Speedrun Map (Introduction to Numerical Algorithms)
course: Introduction to Numerical Algorithms
type: reference
tags:
  - numerical-algorithms
  - speedrun
  - studieplan
---

# Speedrun Map: Introduction to Numerical Algorithms

Hurtigste vej gennem faget i en fornuftig læringsrækkefølge. Hvert hovedemne har tid, eksamensvægt, delemner, begreber, hvor du lærer det, hvad du skal øve, og en mastery-checklist.

> [!warning] Pensum er meget tyndt i vaulten, og emnerne er delvist udledt
> [[Courses/Introduction to Numerical Algorithms/Pensum|Pensum]] er en tom skabelon, alle 13 lektioner er tomme skabeloner, og der er ingen lærebog, noter eller gamle eksamenssæt for dette fag i Downloads. Kilderne til emnelisten er: (1) [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber]] (flydende tal, afrundingsfejl, absolut/relativ fejl, iteration, konvergensrate, Newtons metode, interpolation, numerisk integration, stabilitet, Big-O), (2) [[Self-Tests/Numerical Algorithms Test|Numerical Algorithms Test]], (3) [[Project-Notes/Study-Plan-Analysis|Study-Plan-Analysis]] (02601: 4 timers skriftlig eksamen plus 3 af 4 afleveringer; deler Newton, interpolation, ODE-løsere, rodfinding og lineære systemer med Python og kalkulus) og (4) standardindholdet i et indledende kursus i numeriske metoder. **Emnerne 4, 6, 8 og 9 er derfor ikke bekræftet mod den officielle kursusbeskrivelse** (kurser.dtu.dk/course/02601). Tjek den før du bruger tid på dem, og skift sprog/værktøj (Python eller MATLAB) efter hvad kurset kræver. Eksamensvægtene er mine skøn ud fra standardkurser, ikke en officiel fordeling.

## Forklaring

- ★ = Jitty (kanalen *Computer Engineering Jitty*, [@compengineerjitty](https://www.youtube.com/@compengineerjitty)). Jitty har ingen numeriske metoder i sine afspilningslister (Calculus I-III, Differential Equations, Discrete Math, Python, kredsløb). Derfor er der ingen ★ i dette fag. Hans [Differential Equations](https://www.youtube.com/playlist?list=PLlIjCL-XnH1dQj6BLHj7Oa8M9EtQ1BH0J)-liste er forudsætning for emne 8. Jeg har i stedet valgt Jeffrey Chasnovs serie *Numerical Methods for Engineers* som rygrad (korte, tydelige forelæsninger i kursusrækkefølge), og så blackpenredpen (bprp), Steve Brunton og andre hvor de er bedre. Mu Prime Math og 3Blue1Brown har ikke numeriske metoder, jeg kunne finde.
- Alle video-links er fundet ved søgning; ingen er gættet. Chasnov = Jeffrey Chasnov, HKUST.
- Ekstra: MIT OCW [18.330 Introduction to Numerical Analysis](https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/) (noter og opgaver, matematisk dybere end nødvendigt) og [18.06SC Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/).
- Praksis: faget har afleveringer, så implementér hver metode selv i Python (tilgangen i [[Courses/Programming/Programming|Programming]] og [[Formelsamling/Programmering|Formelsamling: Programmering]]). Det er den bedste eksamenstræning, når der ingen gamle sæt er.
- Forudsætninger: [[Courses/Matematik 1A/Speedrun Map|Matematik 1A]] (lineære systemer, egenværdier), Mat 1B/ODE-intro for emne 8, og [[Courses/Differential Equations and Infinite Series/Speedrun Map|Differentialligninger og uendelige rækker]] (Taylor).

## Overblik

| # | Hovedemne | Timer | Vægt (skøn) |
|---|---|---|---|
| 1 | Tal, fejl og flydende tal | 4 | middel |
| 2 | Løsning af ikke-lineære ligninger (rodfinding) | 6 | høj |
| 3 | Lineære systemer: Gauss, LU, pivotering | 7 | høj |
| 4 | Kondition, stabilitet og iterative løsere | 5 | middel |
| 5 | Interpolation | 6 | høj |
| 6 | Mindste kvadraters metode og datafitting | 5 | middel |
| 7 | Numerisk differentiation og integration | 6 | høj |
| 8 | Differentialligninger: Euler og Runge-Kutta | 7 | høj |
| 9 | Egenværdiproblemer (potensmetoden) | 3 | lav |

Sum: ca. 49 timer (inkl. at implementere hver metode i kode).

---

## 1. Tal, fejl og flydende tal

**Tid:** ca. 4 timer. **Vægt: middel.** Grundlag for al fejlanalyse og fast teorispørgsmål; vault-testen starter her. **Vault:** [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber]] (Floating point, Rounding error, Absolute/relative error).

### 1.1 Flydende tal og afrundingsfejl

- **Def.** Flydende tal (IEEE 754 double: 1 fortegn, 11 eksponent, 52 mantisse); maskinepsilon $\epsilon\approx2.2\cdot10^{-16}$.
- **Sætn.** Afrundingsfejl: $\mathrm{fl}(x)=x(1+\delta)$, $|\delta|\le\epsilon/2$; derfor $0.1+0.2\neq0.3$.
- **Opgavetype** Forklar hvorfor $0.1+0.2\neq0.3$ (vault-test spm. 1) og beregn maskinepsilon i Python.
- **Opgavetype** Find mindste/største repræsenterbare tal for en given præcision.

**Lær:**
- Chasnov: [Double Precision](https://www.youtube.com/watch?v=3RTbnzHtf7Q). Computerphile: [Floating Point Numbers](https://www.youtube.com/watch?v=PZRI1IfStY0). Chad M. Topaz: [Floating Point Representation and Rounding Error](https://www.youtube.com/watch?v=wbxSTxhTmrs).

**Øv:** [[Self-Tests/Numerical Algorithms Test|Numerical Algorithms Test]] spm. 1-2; implementér maskinepsilon-loopet i Python.

### 1.2 Fejlmål og katastrofal udslettelse

- **Def.** Absolut fejl $|x-\hat x|$ og relativ fejl $|x-\hat x|/|x|$.
- **Metode** Undgå subtraktion af næsten ens tal; omskriv fx $\sqrt{x+1}-\sqrt x$ til $1/(\sqrt{x+1}+\sqrt x)$.
- **Def.** Afkortningsfejl (truncation) mod afrundingsfejl; algoritmens orden $O(h^p)$.
- **Opgavetype** Beregn begge fejltyper og forklar hvilken der dominerer.

**Lær:**
- Chasnov: [Double Precision](https://www.youtube.com/watch?v=3RTbnzHtf7Q). Jaisohn Kim: [Roundoff and Truncation Errors](https://www.youtube.com/watch?v=b1CFNSR3f40).

**Øv:** [[Self-Tests/Numerical Algorithms Test|Numerical Algorithms Test]] spm. 2; Taylor-opfriskning i [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map DE emne 6.5]].

**Mastery-checklist 1**
- [ ] Kan jeg forklare hvorfor flydende tal giver afrundingsfejl og beregne maskinepsilon?
- [ ] Kan jeg skelne absolut/relativ fejl og afkortnings-/afrundingsfejl?
- [ ] Kan jeg omskrive et udtryk så katastrofal udslettelse undgås?

---

## 2. Løsning af ikke-lineære ligninger (rodfinding)

**Tid:** ca. 6 timer. **Vægt: høj.** Newtons metode står i både Begreber og vault-testen, og konvergensrate er et fast teoriemne. **Vault:** [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber]] (Iteration, Convergence rate, Newton's method).

### 2.1 Bisektion

- **Def.** Skæringssætningen: $f(a)f(b)<0$ giver en rod i $[a,b]$.
- **Metode** Halvér intervallet; fejl $\le(b-a)/2^n$, så antal skridt til tolerance $\epsilon$ er $\lceil\log_2((b-a)/\epsilon)\rceil$.
- **Opgavetype** Udfør 4 skridt i hånden og angiv fejlgrænse (lineær konvergens).

**Lær:**
- Chasnov: [Bisection Method](https://www.youtube.com/watch?v=mzQFGOvH-mk). ExamSolutions: [How to locate a root, Bisection](https://www.youtube.com/watch?v=OzFuihxtbtA).

**Øv:** Implementér i Python; gentag på $x^3-2x-5=0$ på $[2,3]$.

### 2.2 Newtons metode og sekant

- **Sætn.** Newton: $x_{n+1}=x_n-f(x_n)/f'(x_n)$; kvadratisk konvergens nær simpel rod ([[Self-Tests/Numerical Algorithms Test|vault-test spm. 3-4]]).
- **Metode** Sekantmetoden erstatter $f'$ med differenskvotient; ordenen er ca. 1.618.
- **Def.** Konvergensorden $p$: $|e_{n+1}|\approx C|e_n|^p$; lineær, superlineær, kvadratisk.
- **Opgavetype** Udfør 3 Newton-iterationer; forklar hvorfor metoden kan fejle ($f'\approx0$, dårlig startværdi, multipel rod).
- **Opgavetype** Beregn $\sqrt a$ med Newton (babylonsk metode).

**Lær:**
- bprp: [Newton's method (introduction & example)](https://www.youtube.com/watch?v=iVOsU4tnouk), [Square Root of 2, Newton's method vs Euler's method](https://www.youtube.com/watch?v=R3G8aJaMngw). Chasnov: [Newton's Method](https://www.youtube.com/watch?v=cf_NK7NlWrs), [Secant Method](https://www.youtube.com/watch?v=Zz8AYQ8c5-U), [Order of Convergence](https://www.youtube.com/watch?v=dHQVQG8NqR8), [Convergence of Newton's Method](https://www.youtube.com/watch?v=IPP1p0NKdeo).

**Øv:** Implementér og sammenlign bisektion, Newton og sekant på samme ligning; plot fejl mod iteration i log-skala.

### 2.3 Fikseringspunkt og systemer af ligninger

- **Sætn.** Fikseringspunktsætningen: $x=g(x)$ konvergerer hvis $|g'|<1$ nær fikseringspunktet.
- **Metode** Newton for systemer: $J(x_n)\Delta x=-F(x_n)$ (en lineær løsning pr. skridt, se emne 3).
- **Opgavetype** Skriv $f(x)=0$ om til $x=g(x)$ og afgør konvergens.

**Lær:**
- Oscar Veliz: [Fixed Point Iteration](https://www.youtube.com/watch?v=OLqdJMjzib8). Chasnov: [Systems of Nonlinear Equations](https://www.youtube.com/watch?v=wrQA1_nei7w).

**Øv:** Implementér Newton for et 2x2-system.

**Mastery-checklist 2**
- [ ] Kan jeg udføre bisektion, Newton og sekant i hånden og i kode?
- [ ] Kan jeg angive og forklare konvergensorden for hver?
- [ ] Kan jeg afgøre om fikseringspunktiteration konvergerer?

---

## 3. Lineære systemer: Gauss, LU og pivotering

**Tid:** ca. 7 timer. **Vægt: høj.** Kerne i alle numeriske kurser og bruges i resten af faget (interpolation, mindste kvadrater, ODE'er). Forudsætter [[Courses/Matematik 1A/Speedrun Map|Matematik 1A emne 4]].

### 3.1 Gauss-elimination og pivotering

- **Def.** Fremadelimination og tilbagesubstitution.
- **Metode** Delvis pivotering: byt rækker så pivot er størst i absolut værdi, for at undgå stor vækst i fejl.
- **Sætn.** Gauss kræver ca. $\tfrac23n^3$ flops; tilbagesubstitution $n^2$.
- **Opgavetype** Løs et 3x3-system i hånden med og uden pivotering og sammenlign.

**Lær:**
- Chasnov: [Gaussian Elimination without Pivoting](https://www.youtube.com/watch?v=S5dL9xOj0lU), [Gaussian Elimination with Partial Pivoting](https://www.youtube.com/watch?v=WU3tSs5q1MM), [Operation Counts](https://www.youtube.com/watch?v=WLqtv-fr0R4).

**Øv:** Implementér Gauss med pivotering i Python og test mod `numpy.linalg.solve`.

### 3.2 LU-faktorisering

- **Def.** $A=LU$ (evt. $PA=LU$); $L$ nedre trekant med 1-taller, $U$ øvre trekant.
- **Metode** Løs $Ax=b$ via $Ly=b$, $Ux=y$; én faktorisering kan genbruges til mange højresider.
- **Opgavetype** Beregn $L$ og $U$ for en given matrix og løs et system.

**Lær:**
- Chasnov: [LU Decomposition with Partial Pivoting](https://www.youtube.com/watch?v=WgaFycuL8z0), [LU decomposition (Matrix Algebra)](https://www.youtube.com/watch?v=j48z_nY-oB8). The Bright Side of Mathematics: [LU Decomposition, an example calculation](https://www.youtube.com/watch?v=BFYFkn-eOQk).

**Øv:** Implementér LU og sammenlign antal flops med direkte inversion.

**Mastery-checklist 3**
- [ ] Kan jeg udføre Gauss og LU i hånden for 3x3?
- [ ] Kan jeg forklare hvorfor pivotering er nødvendig?
- [ ] Kan jeg bruge LU til flere højresider og angive kompleksiteten ($O(n^3)$)?

---

## 4. Kondition, stabilitet og iterative løsere

**Tid:** ca. 5 timer. **Vægt: middel.** Stabilitet står i Begreber og testen; iterative løsere er sandsynligvis med (bekræft mod kursusbeskrivelsen). **Vault:** [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber]] (Stability, Big-O).

### 4.1 Kondition og stabilitet

- **Def.** Kondition af problem: $\kappa(A)=\|A\|\|A^{-1}\|$; relativ fejl i løsning kan blive $\kappa$ gange fejlen i data.
- **Def.** Stabil algoritme: små input- og afrundingsfejl forbliver små; skelne mellem problemets kondition og algoritmens stabilitet.
- **Opgavetype** Beregn $\kappa(A)$ i en norm og vurder tabte cifre ($\approx\log_{10}\kappa$).

**Lær:**
- Chad M. Topaz: [Condition Number](https://www.youtube.com/watch?v=BVM3NAt6QoM). Blake Tabian: [Matrix Condition Number and Matrix Norms](https://www.youtube.com/watch?v=GDYmWtWWtNQ).

**Øv:** Hilbert-matricer i Python: se hvordan fejlen vokser med $n$.

### 4.2 Iterative metoder og kompleksitet

- **Metode** Jacobi og Gauss-Seidel: $x^{(k+1)}=\ldots$; konvergerer hvis $A$ er strengt diagonaldominant.
- **Def.** Big-O: antal flops som funktion af $n$ (se [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber: Big-O]]).
- **Opgavetype** Udfør to Jacobi-/Gauss-Seidel-skridt og vurder konvergens.

**Lær:**
- Chasnov: [Jacobi, Gauss-Seidel and SOR Methods](https://www.youtube.com/watch?v=QpzOttega9s). Oscar Veliz: [Fixed Point Iteration](https://www.youtube.com/watch?v=OLqdJMjzib8) som forbindelse.

**Øv:** Implementér Jacobi og Gauss-Seidel.

**Mastery-checklist 4**
- [ ] Kan jeg beregne og tolke et konditionstal?
- [ ] Kan jeg skelne dårlig kondition fra ustabil algoritme?
- [ ] Kan jeg udføre Jacobi/Gauss-Seidel og afgøre konvergens?

---

## 5. Interpolation

**Tid:** ca. 6 timer. **Vægt: høj.** Står i Begreber og Study-Plan-Analysis. **Vault:** [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber]] (Interpolation).

### 5.1 Polynomiel interpolation

- **Sætn.** Gennem $n+1$ punkter går netop ét polynomium af grad $\le n$.
- **Metode** Lagrange-form $p(x)=\sum y_i\ell_i(x)$ og Newtons delte differenser; Vandermonde-systemet (emne 3).
- **Sætn.** Fejlformel: $f(x)-p(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}\prod(x-x_i)$.
- **Opgavetype** Opstil interpolationspolynomium gennem 3-4 punkter og estimér fejlen.

**Lær:**
- Chasnov: [Interpolation](https://www.youtube.com/watch?v=RpxoN9-i7Jc). Dr. Will Wood: [Lagrange Interpolation](https://www.youtube.com/watch?v=bzp_q7NDdd4).

**Øv:** Implementér Lagrange og se Runges fænomen på $1/(1+25x^2)$ med ækvidistante noder.

### 5.2 Splines

- **Def.** Kubisk spline: stykkevis polynomium med kontinuerlig $f,f',f''$; randbetingelser (naturlig).
- **Metode** Opstil og løs det tridiagonale system for andenafledede.
- **Opgavetype** Beskriv forskellen mellem global polynomiel og stykkevis interpolation.

**Lær:**
- Chasnov: [Cubic Spline Interpolation (Part A)](https://www.youtube.com/watch?v=LaolbjAzZvg), [(Part B)](https://www.youtube.com/watch?v=4VpE9Tbie14). Toby Driscoll: [FNC 5.3 Cubic spline interpolation](https://www.youtube.com/watch?v=oiU-y4vxoMc).

**Øv:** `scipy.interpolate.CubicSpline` mod din egen implementering.

**Mastery-checklist 5**
- [ ] Kan jeg opstille Lagrange- og Newton-interpolation?
- [ ] Kan jeg bruge fejlformlen og forklare Runges fænomen?
- [ ] Kan jeg forklare og bruge kubiske splines?

---

## 6. Mindste kvadraters metode og datafitting

**Tid:** ca. 5 timer. **Vægt: middel (uverificeret).** Ikke nævnt i vaultens Begreber, men standard og knytter til [[Courses/Matematik 1A/Speedrun Map|lineær algebra]].

### 6.1 Normalligninger

- **Def.** Mindste kvadraters løsning minimerer $\|Ax-b\|_2$.
- **Sætn.** Normalligningerne $A^TAx=A^Tb$; løsning er projektionen af $b$ på søjlerummet.
- **Metode** Fit en ret linje eller polynomium til data; QR er mere stabil end normalligninger (konditionstal i anden).
- **Opgavetype** Fit $y=a+bx$ til 5-10 punkter og beregn residualet.

**Lær:**
- Chasnov: [Least squares using matrices](https://www.youtube.com/watch?v=RlQBEhLhM8Y), [Normal equation solution of the least-squares problem](https://www.youtube.com/watch?v=WABC6wmuLOk).

**Øv:** Fit data i Python med `numpy.linalg.lstsq`; sammenlign med normalligninger.

**Mastery-checklist 6**
- [ ] Kan jeg opstille og løse normalligningerne for en polynomiel fit?
- [ ] Kan jeg forklare hvorfor QR foretrækkes numerisk?

---

## 7. Numerisk differentiation og integration

**Tid:** ca. 6 timer. **Vægt: høj.** Numerisk integration står i Begreber og vault-test spm. 5. **Vault:** [[Reference/Formelsamling/Integralregning|Integralregning]], [[Reference/Formelsamling/Differentialregning|Differentialregning]].

### 7.1 Numerisk differentiation

- **Metode** Fremad, bagud og centrale differenser: $f'(x)\approx\frac{f(x+h)-f(x)}{h}$ (orden 1), $\frac{f(x+h)-f(x-h)}{2h}$ (orden 2).
- **Sætn.** Total fejl = afkortningsfejl $O(h^p)$ + afrundingsfejl $\epsilon/h$; optimalt $h$ findes (emne 1).
- **Opgavetype** Udled differensformlen med Taylor og beregn ordenen empirisk.

**Lær:**
- Chasnov: [Central Difference Approximation](https://www.youtube.com/watch?v=Tfo12ylAMso). Steve Brunton: [Numerical Differentiation with Finite Difference Derivatives](https://www.youtube.com/watch?v=9fGaTU1-f-0).

**Øv:** Plot fejl mod $h$ i log-log og find knækket.

### 7.2 Numerisk integration

- **Metode** Midtpunkt-, trapez- og Simpsons regel, også sammensat; fejl $O(h^2)$ for trapez, $O(h^4)$ for Simpson ([[Self-Tests/Numerical Algorithms Test|vault-test spm. 5]]).
- **Metode** Gauss-kvadratur: knuder og vægte vælges så polynomier af høj grad integreres eksakt.
- **Opgavetype** Beregn $\int_0^1 e^{-x^2}dx$ med trapez og Simpson for $n=4$ og estimér fejlen.

**Lær:**
- bprp: [Midpoint, trapezoidal and Simpson's rule (which is best?)](https://www.youtube.com/watch?v=pdvYOgZiaP8). Chasnov: [Simpson's Rule](https://www.youtube.com/watch?v=Z6-W6AXqFFs), [Composite Quadrature Rules](https://www.youtube.com/watch?v=6x28YeHIkc4), [Gaussian Quadrature](https://www.youtube.com/watch?v=w2xjlPwYock).

**Øv:** Implementér trapez og Simpson; bekræft orden ved at halvere $h$.

**Mastery-checklist 7**
- [ ] Kan jeg udlede og bruge differensformler og deres orden?
- [ ] Kan jeg anvende trapez og Simpson (sammensat) og angive fejlorden?
- [ ] Kan jeg forklare ideen i Gauss-kvadratur?

---

## 8. Differentialligninger: Euler og Runge-Kutta

**Tid:** ca. 7 timer. **Vægt: høj (uverificeret).** Study-Plan-Analysis nævner ODE-løsere eksplicit. Forudsætter [[Courses/Differential Equations and Infinite Series/Speedrun Map|ODE-grundlaget]] og Jitty's [Differential Equations](https://www.youtube.com/playlist?list=PLlIjCL-XnH1dQj6BLHj7Oa8M9EtQ1BH0J). Formler: [[Reference/Formelsamling/Differentialligninger|Differentialligninger]].

### 8.1 Euler og forbedret Euler

- **Metode** Eulers metode: $y_{n+1}=y_n+hf(t_n,y_n)$; global fejl $O(h)$, lokal $O(h^2)$.
- **Metode** Modificeret Euler (Heun/midtpunkt): orden 2.
- **Opgavetype** Tag 3 Euler-skridt og sammenlign med eksakt løsning; vis fejlen halveres når $h$ halveres.

**Lær:**
- Chasnov: [Euler method](https://www.youtube.com/watch?v=WMQ2Cac4sqw), [Modified Euler Method](https://www.youtube.com/watch?v=d3sZa3T2TJw). Paul's: [Euler's Method](https://tutorial.math.lamar.edu/Classes/DE/EulersMethod.aspx).

**Øv:** Implementér Euler på $y'=-2y$, $y(0)=1$.

### 8.2 Runge-Kutta, systemer og stabilitet

- **Metode** Klassisk RK4: fire kald til $f$ pr. skridt; global orden 4.
- **Metode** Højere-ordens ODE'er og systemer: omskriv til et 1. ordens system (se [[Courses/Differential Equations and Infinite Series/Speedrun Map|DE emne 3]]).
- **Def.** Stabilitet: for $y'=\lambda y$ kræver eksplicit Euler $|1+h\lambda|\le1$; stive problemer.
- **Opgavetype** Vælg skridtlængde så Euler er stabil for $y'=-50y$.

**Lær:**
- Chasnov: [Runge Kutta Methods](https://www.youtube.com/watch?v=C4UymmEi3Kw), [Second-order Runge Kutta methods](https://www.youtube.com/watch?v=wIiCaSzMJFw), [Higher-order ODEs and Systems](https://www.youtube.com/watch?v=wu1sS1g5ivs), [Adaptive Runge-Kutta Methods](https://www.youtube.com/watch?v=6bCBXvsD7gw).

**Øv:** Implementér RK4 for et 2x2-system (fjeder-masse) og sammenlign med Euler.

**Mastery-checklist 8**
- [ ] Kan jeg udføre Euler og RK2/RK4 i hånden og i kode?
- [ ] Kan jeg angive lokal og global fejlorden?
- [ ] Kan jeg omskrive en højere-ordens ODE til et system og forklare stabilitetsgrænsen for Euler?

---

## 9. Egenværdiproblemer (potensmetoden)

**Tid:** ca. 3 timer. **Vægt: lav (uverificeret).** Tag kun hvis kursusbeskrivelsen nævner det. Forudsætter [[Courses/Matematik 1A/Speedrun Map|Mat 1A emne 8]].

### 9.1 Potensmetoden

- **Metode** Iteration $x_{k+1}=Ax_k/\|Ax_k\|$ konvergerer mod egenvektor for største egenværdi; konvergens $\sim|\lambda_2/\lambda_1|^k$.
- **Opgavetype** Udfør 3 iterationer og estimér dominerende egenværdi med Rayleigh-kvotient.

**Lær:**
- Chasnov: [Eigenvalue Power Method](https://www.youtube.com/watch?v=_PDyi5BVY-E), [(Example)](https://www.youtube.com/watch?v=nKd0lu3yThg).

**Øv:** Implementér potensmetoden og sammenlign med `numpy.linalg.eig`.

**Mastery-checklist 9**
- [ ] Kan jeg udføre potensmetoden og forklare hvornår den konvergerer langsomt?

---

## Eksamenstræning og tjek

- Der er ingen gamle sæt i vaulten eller Downloads. Brug (1) [[Self-Tests/Numerical Algorithms Test|Numerical Algorithms Test]], (2) opgaverne i MIT 18.330 og (3) dine egne implementeringer: skriv hver metode, test mod SciPy og plot fejlorden. Se kursusbasens afleveringer; 3 af 4 skal bestås.
- Flashcards: [[Flashcards/Flashcards|Flashcards]]; formler: [[Formelsamling/Formelsamling|Formelsamling]], [[Glossary]].
- Lektioner (tomme skabeloner): [[Courses/Introduction to Numerical Algorithms/Lektioner/index|Alle lektioner]].

## Links

- [[Introduction to Numerical Algorithms]]
- [[Courses/Introduction to Numerical Algorithms/Pensum|Pensum]]
- [[Courses/Introduction to Numerical Algorithms/Begreber|Begreber]]
- [[Study-Roadmap|Studieoversigt]]
- [[Courses/Matematik 1A/Speedrun Map|Speedrun Map: Matematik 1A]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map: Differentialligninger og uendelige rækker]]
