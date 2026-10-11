---
publish: true
title: Speedrun Map (Differential Equations and Infinite Series)
course: Differential Equations and Infinite Series
type: reference
tags:
  - differential-equations
  - speedrun
  - studieplan
---

# Speedrun Map: Differentialligninger og uendelige rækker

Hurtigste vej gennem faget, i den rækkefølge der giver mest mening at lære det. Hvert hovedemne har tid, eksamensvægt, delemner, de begreber du skal kunne, hvor du lærer dem, hvad du skal regne, og en mastery-checklist.

> [!warning] Pensum er tyndt i vaulten
> [[Courses/Differential Equations and Infinite Series/Pensum|Pensum]] er stadig en tom skabelon, og [[Courses/Differential Equations and Infinite Series/Begreber|Begreber]] har kun 10 overordnede ord. Pensum her er derfor udledt af (1) indholdsfortegnelsen i Ole Christensen, *Differentialligninger og uendelige rækker* (v4, kursus 01025, i Downloads), (2) kursets gamle eksamenssæt i `Downloads\Materiale til 01025 Differentialligninger og uendelige rækker\` og (3) PDF'en INFINITE_SERIES_AND_DIFFERENTIAL_EQUATIO.pdf (Hanoi-noter, ikke DTU, bruges kun som ekstra forklaring af 1. ordens ligninger). Vaulten er ikke konsistent om kursusnummeret: [[Project-Notes/Semester-Registration-Tracker|Semester-Registration-Tracker]] siger 01025, [[Project-Notes/Study-Plan-Analysis|Study-Plan-Analysis]] siger 01004. Bogen og eksamenssættene er 01025, så de bruges her. Tjek kursusbasen for den aktuelle læseplan.

## Forklaring

- ★ = Jitty (kanalen *Computer Engineering Jitty*, [@compengineerjitty](https://www.youtube.com/@compengineerjitty)). Jitty har afspilningslister for [Differential Equations](https://www.youtube.com/playlist?list=PLlIjCL-XnH1dQj6BLHj7Oa8M9EtQ1BH0J) (kun 1. ordens og simple konstantkoefficient-ligninger) og [Calculus II](https://www.youtube.com/playlist?list=PLlIjCL-XnH1fho6CkrKUKSI_NZlWBBQZE) (rækker, konvergenstests, potens- og Taylorrækker). Han har ikke Fourier, systemer, stabilitet eller overføringsfunktioner. Der hvor Jitty ikke findes, står det, og så er næste valg blackpenredpen (bprp) eller Mu Prime Math, derefter 3Blue1Brown, Khan Academy, Paul's Online Notes, MIT OCW og Steve Brunton.
- Alle video-links er fundet ved søgning på YouTube; ingen er gættet.
- "Bog" = Christensen, afsnit og opgavenumre (Bilag F). Opgaver med nummer 8xx/9xx er bevisopgaver (de er til 01025-varianten) og er markeret som de dyrere at tage.
- Gamle eksamenssæt: `Downloads\Materiale til 01025 ...\Eksamensopgaver 2019-22`, `...\Eksamensopgaver og løsninger2012-18`, facit i `...\facitliste\facitliste_studerende.pdf`.
- Forudsætninger: lineær algebra og komplekse tal fra [[Courses/Matematik 1A/Speedrun Map|Matematik 1A Speedrun Map]], bevisteknik fra [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Introduction to applied mathematics]].

## Overblik

| # | Hovedemne | Bog | Timer | Vægt |
|---|---|---|---|---|
| 1 | n'te ordens lineære ODE'er | kap. 1.1-1.3 | 6 | høj |
| 2 | Overføringsfunktioner og frekvenskarakteristik | kap. 1.4-1.5 | 4 | høj |
| 3 | Systemer af 1. ordens ODE'er og eksponentialmatricen | kap. 2.1-2.5, 7.4 | 7 | høj |
| 4 | Stabilitet og systemers overføringsfunktion | kap. 2.6-2.9 | 4 | høj |
| 5 | Ulineære ODE'er | kap. 3 | 4 | middel |
| 6 | Uendelige rækker af tal | kap. 4 | 8 | høj |
| 7 | Potensrækker og rækker af funktioner (uniform konvergens) | kap. 5 | 7 | høj |
| 8 | Fourieranalyse | kap. 6 | 7 | høj |
| 9 | ODE'er løst med rækker (potensrække- og Fourierrækkemetoden) | kap. 7.1-7.3 | 5 | middel-høj |

Sum: ca. 52 timer fokuseret arbejde. Eksamensformen i de senere sæt (fx F23, 3 timer, alle hjælpemidler): 4 opgaver. Opgave 1 er multiple choice med 6 spørgsmål (ca. 45 %) og dækker bredt: n'te ordens ODE, stabilitet, overføringsfunktion, konvergensradius, absolut/betinget konvergens, uniform konvergens og majorantrække. De øvrige opgaver (ca. 15/25/15 %) er typisk en ODE med variable koefficienter, en Fourierrække og en potensrækkemetode-opgave. Vægtene herunder er min vurdering ud fra de sæt jeg har læst, ikke en officiel fordeling.

---

## 1. n'te ordens lineære ODE'er

**Tid:** ca. 6 timer. **Vægt: høj.** Grundlaget for hele den ene halvdel af faget; næsten hvert sæt har en karakterligning og en partikulær løsning (ofte med komplekse rødder eller gentagne rødder). **Bog:** kap. 1.1-1.3 og Bilag A.3.

### 1.1 Struktur og den homogene ligning (bog 1.1-1.2)

- **Def.** Lineær n'te ordens ODE med konstante koefficienter, $a_0 y^{(n)}+\dots+a_n y=u(t)$; homogen når $u=0$. Se [[Reference/Formelsamling/Differentialligninger|Differentialligninger (formelsamling)]].
- **Sætn.** Løsningerne til den homogene ligning udgør et n-dimensionalt vektorrum (Sætn. 1.4, 1.5); fuldstændig løsning = n lineært uafhængige løsninger.
- **Def.** Karakterligning og karakteristisk polynomium $P(\lambda)=a_0\lambda^n+\dots+a_n$; $e^{\lambda t}$ er løsning når $P(\lambda)=0$ (Sætn. 1.6).
- **Metode** Reelle forskellige rødder giver $c_1e^{\lambda_1 t}+\dots$; komplekse rødder $\alpha\pm i\beta$ giver $e^{\alpha t}\cos\beta t$ og $e^{\alpha t}\sin\beta t$ (reel form via [[Reference/Matematik/Trigonometriske identiteter|trigonometriske identiteter]]).
- **Metode** Gentagen rod med multiplicitet $m$ giver $e^{\lambda t},te^{\lambda t},\dots,t^{m-1}e^{\lambda t}$.
- **Opgavetype** "Bestem den fuldstændige reelle (eller komplekse) løsning" til en 3.-6. ordens ligning, ofte med $\lambda=0$ som rod eller kompleks gentagen rod (fx $y^{(4)}+6y''+25y=0$).
- **Opgavetype** Begyndelsesværdiproblem: fastlæg $c_1,\dots,c_n$ fra $y(0),y'(0),\dots$ (lineært ligningssystem, se [[Courses/Matematik 1A/Speedrun Map|Mat 1A]]).

**Lær:**
- ★ [Intro to Differential Equations (ODE vs PDE, linear, orden)](https://www.youtube.com/watch?v=MjLPJhOyBGU), [Intro to Homogeneous Constant Coefficient DEs](https://www.youtube.com/watch?v=iYr-AFstbeo), [Auxiliary Equation with Repeated Roots](https://www.youtube.com/watch?v=tParkLxuLmo). Jitty dækker kun 2. orden, så tag n'te orden fra bogen.
- bprp: [2nd order homogeneous, constant coefficients](https://www.youtube.com/watch?v=iQoAbO_xlFs), [komplekse rødder](https://www.youtube.com/watch?v=u-eQaef1EWw), [gentagne rødder](https://www.youtube.com/watch?v=06y5fGI1Y40).
- Dr. Trefor Bazett: [Real/Repeated/Complex pair](https://www.youtube.com/watch?v=r8Uk4tbuxVE). Khan Academy: [Repeated roots](https://www.youtube.com/watch?v=NW9JfMvIsxw). Paul's Online Notes: [Real roots](https://tutorial.math.lamar.edu/Classes/DE/RealRoots.aspx), [Complex roots](https://tutorial.math.lamar.edu/Classes/DE/ComplexRoots.aspx), [Repeated roots](https://tutorial.math.lamar.edu/Classes/DE/RepeatedRoots.aspx), [Higher order homogeneous](https://tutorial.math.lamar.edu/Classes/DE/HOHomogeneousDE.aspx).
- Bog: kap. 1.1-1.2.

**Øv:** Bog 301, 306, 313, 314, 317, 325; bevis-træning: 901-905 (lineær uafhængighed, Sætn. 1.14), 910, 912. Eksamen: 501, 505, 511, 515, 525 og de gamle MC-sæt.

### 1.2 Den inhomogene ligning (bog 1.3)

- **Sætn.** Fuldstændig løsning = homogen løsning + én partikulær løsning.
- **Metode** Gættemetoden (ubestemte koefficienter): gæt af samme type som $u(t)$; ved resonans ($e^{st}$ med $s$ rod i karakterligningen) ganges med $t^k$.
- **Metode** Brug $e^{st}$/$\cos$/$\sin$-højreside via komplekse tal og tag realdel eller imaginærdel (kompleks gættemetode).
- **Opgavetype** Find en partikulær løsning til fx $\ddot y+5\dot y-6y=\cos 2t$ og angiv alle løsninger.
- **Opgavetype** Afgør om en given funktion (fx $te^{2t}$) kan være en partikulær løsning, eller om resonans forekommer.

**Lær:**
- bprp: [Undetermined coefficients (polynomium)](https://www.youtube.com/watch?v=Rg9gsCzhC40), [Variation of parameters (idé)](https://www.youtube.com/watch?v=BaK4Mkn1k1Y). Jitty har ikke inhomogene ligninger, så Trefor Bazett: [Undetermined coefficients](https://www.youtube.com/watch?v=AgyeJEO2a-k).
- Paul's Online Notes: [Undetermined Coefficients](https://tutorial.math.lamar.edu/Classes/DE/UndeterminedCoefficients.aspx), [Variation of Parameters](https://tutorial.math.lamar.edu/Classes/DE/VariationofParameters.aspx). MIT OCW: [Variation of Parameters](https://www.youtube.com/watch?v=0f15AVSQ770).
- Bog: kap. 1.3.

**Øv:** Bog 309, 312, 325; eksamen 501, 505, 515, 519, 527.

### 1.3 Variable koefficienter og reduktion af orden (bog 1.6-1.7)

- **Metode** Kender du én løsning $y_1$ til en 2. ordens ligning med variable koefficienter, så sæt $y=v\,y_1$ og få en 1. ordens ligning i $v'$ (reduktion af orden).
- **Metode** Indsæt den givne løsning (fx $y=t^2$) og aflæs den ukendte koefficientfunktion $a(t)$.
- **Opgavetype** F23 Opgave 2: find $a(t)$ ud fra en given løsning og bestem derefter den fuldstændige reelle løsning (bog 326, 546).
- **Def.** Kap. 1.7 (partielle ligninger) er kun en kort introduktion og kan springes over.

**Lær:**
- Ingen Jitty. Paul's: [Reduction of Order](https://tutorial.math.lamar.edu/Classes/DE/ReductionofOrder.aspx). Bog: kap. 1.6.

**Øv:** Bog 326, 546. Brug ellers de gamle sæt.

### 1.4 Fundament fra 1. orden (hvis det rustner)

- **Metode** Separation af variable, integrerende faktor og eksakte ligninger er forudsætning, ikke pensum i bogen.
- **Opgavetype** Opfrisk én $y'+ay=b$ og én separabel så resten af kapitlet ikke bliver blokeret.

**Lær:**
- ★ [Separable DEs](https://www.youtube.com/watch?v=O_fexkwNOU8), ★ [Integrating Factor](https://www.youtube.com/watch?v=33u1lnIcabM), ★ [Exact DEs](https://www.youtube.com/watch?v=JrcxguPnS1Q), ★ [Slope fields](https://www.youtube.com/watch?v=Zd--UbuU1ok), ★ [Initial conditions](https://www.youtube.com/watch?v=RDDeaivON7E). 3Blue1Brown: [Differential equations, a tourist's guide](https://www.youtube.com/watch?v=p_di4Zn4wz4).
- Paul's: [Linear](https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx), [Separable](https://tutorial.math.lamar.edu/Classes/DE/Separable.aspx), [Exact](https://tutorial.math.lamar.edu/Classes/DE/Exact.aspx). Hanoi-PDF i Downloads, kap. 4 (Separable, Linear, Bernoulli).

**Øv:** [[Reference/Formelsamling/Differentialligninger|Differentialligninger (formelsamling)]] §2-3 som tjekliste.

**Mastery-checklist 1**
- [ ] Kan jeg opskrive og løse karakterligningen for en 3.-4. ordens ligning og skrive den reelle fuldstændige løsning (også med gentagne og komplekse rødder)?
- [ ] Kan jeg vælge det rigtige gæt til $u(t)$ og se resonans?
- [ ] Kan jeg løse et begyndelsesværdiproblem for n'te orden?
- [ ] Kan jeg forklare hvorfor løsningsrummet har dimension n?
- [ ] Kan jeg bruge én kendt løsning til at finde den næste (reduktion af orden)?

---

## 2. Overføringsfunktioner og frekvenskarakteristik

**Tid:** ca. 4 timer. **Vægt: høj.** Optræder i stort set hvert sæt, både som MC-spørgsmål (find $H(s)$ og dens definitionsmængde) og som regneopgave (stationær løsning, amplitude/fase). **Bog:** kap. 1.4-1.5 og 2.6-2.7.

### 2.1 Overføringsfunktionen $H(s)$ (bog 1.4)

- **Def.** For $D_n(y)=D_m(u)$ er $H(s)=Q(s)/P(s)$ (tæller fra højresiden, nævner fra karakterpolynomiet).
- **Sætn.** Hvis $u=e^{st}$ og $s$ ikke er rod i $P$, er $y(t)=H(s)e^{st}$ en partikulær løsning (Sætn. 1.24).
- **Metode** Aflæs $H(s)$ direkte fra ligningen, fx $y'''+3y''+2y'=u'+u$ giver $H(s)=\frac{s+1}{s^3+3s^2+2s}$; forkort kun når de to polynomier har fælles rod.
- **Opgavetype** "For hvilke $s\in\mathbb{C}$ er $H$ defineret?" (komplementmængden til rødderne i $P$).
- **Opgavetype** Find partikulær løsning for $u=\cos\omega t$ via realdelen af $H(i\omega)e^{i\omega t}$.

**Lær:**
- Ingen Jitty. Steve Brunton: [Laplace Transforms and the Transfer Function](https://www.youtube.com/watch?v=0mnTByVKqLM), [Three Equivalent Representations of Linear Systems](https://www.youtube.com/watch?v=HasvumXl_vE). Bogens definition er snævrere end Laplace-versionen, så følg bogen for notation. 3Blue1Brown: [The Physics of Euler's Formula (Laplace prelude)](https://www.youtube.com/watch?v=-j8PzkZ70Lg) som intuition.
- Bog: kap. 1.4; Hanoi-PDF kap. 6 (Laplace) kun som baggrund.

**Øv:** Bog 304, 305, 308, 311, 315, 316, 319, 320; eksamen 519, 527, 537, 546.

### 2.2 Frekvenskarakteristik (bog 1.5)

- **Def.** Amplitudekarakteristik $|H(i\omega)|$ og faskarakteristik $\arg H(i\omega)$.
- **Sætn.** For stabile ligninger er svaret på $\cos\omega t$ asymptotisk $|H(i\omega)|\cos(\omega t+\arg H(i\omega))$.
- **Metode** Skitsér $|H(i\omega)|$ og $\arg H(i\omega)$; læs resonanstoppe og båndbredde.
- **Opgavetype** Beregn og skitsér frekvenskarakteristikker for givet $H$ (bog 307) og læs amplitude/fase ved en bestemt $\omega$.

**Lær:**
- Steve Brunton: [Frequency Response (Bode) for spring-mass-damper](https://www.youtube.com/watch?v=e-8y4MTT7NQ).
- Bog: kap. 1.5, Bilag D.3.3 (Maple).

**Øv:** Bog 306, 307, 316, 917 (Sallen-Key filter, bevisagtig).

**Mastery-checklist 2**
- [ ] Kan jeg aflæse $H(s)$ fra en n'te ordens ligning, også med højresiden $u'+\dots$?
- [ ] Kan jeg finde $H$'s definitionsmængde og en partikulær løsning for $e^{st}$ eller $\cos\omega t$?
- [ ] Kan jeg beregne amplitude og fase af svaret ved en given frekvens?

---

## 3. Systemer af 1. ordens ODE'er og eksponentialmatricen

**Tid:** ca. 7 timer. **Vægt: høj.** Ét helt hovedemne i hvert sæt (typisk 24 % af et 3-timers sæt) og kræver lineær algebra at sidde: egenværdier, egenvektorer og diagonalisering. **Bog:** kap. 2.1-2.5 og 7.4, Bilag A.4.

### 3.1 Homogene systemer $\dot x=Ax$ (bog 2.1-2.2)

- **Def.** System på matrixform; n'te ordens ODE kan omskrives til system (bog 2.1, opg. 916: egenværdierne er rødderne i karakterligningen).
- **Sætn.** Løsningerne udgør et n-dimensionalt vektorrum; en egenværdi $\lambda$ med egenvektor $v$ giver løsningen $e^{\lambda t}v$ (Sætn. 2.6).
- **Metode** Egenværdimetoden: find egenværdier og egenvektorer, skriv $x(t)=\sum c_ie^{\lambda_it}v_i$ ([[Courses/Matematik 1A/Speedrun Map|Mat 1A: diagonalisering]]).
- **Metode** Komplekse egenværdier $\alpha\pm i\beta$: tag real- og imaginærdel af $e^{\lambda t}v$ og få reelle løsninger.
- **Metode** Manglende egenvektorer (gentagen egenværdi): generaliserede egenvektorer eller eksponentialmatricen.
- **Opgavetype** Find den fuldstændige reelle løsning til et 2x2- eller 3x3-system, evt. med begyndelsesbetingelse (bog 401, 408, 413, 414, 421).

**Lær:**
- Ingen Jitty. Trefor Bazett: [Systems of DEs, Part 1: Eigenvalue method](https://www.youtube.com/watch?v=aTMNQtzU0rU), [Complex eigenvalues](https://www.youtube.com/watch?v=FOoi8h47Tw4). 3Blue1Brown: [Eigenvectors and eigenvalues](https://www.youtube.com/watch?v=PFDu9oVAE-g). Steve Brunton: [Motivating Eigenvalues with Differential Equations](https://www.youtube.com/watch?v=QYS-ML_vn4k). MIT OCW 18.03SC: [Linear Systems: Matrix Methods](https://www.youtube.com/watch?v=YUjdyKhWt6E).
- Paul's: [Solutions to Systems](https://tutorial.math.lamar.edu/Classes/DE/SolutionsToSystems.aspx), [Real](https://tutorial.math.lamar.edu/Classes/DE/RealEigenvalues.aspx), [Complex](https://tutorial.math.lamar.edu/Classes/DE/ComplexEigenvalues.aspx), [Repeated eigenvalues](https://tutorial.math.lamar.edu/Classes/DE/RepeatedEigenvalues.aspx).
- Bog: kap. 2.1-2.2.

**Øv:** Bog 401, 402, 408, 410, 411, 413, 414, 421; bevis 914, 916, 923; eksamen 502, 506, 512, 516, 520, 524, 529, 536, 541, 548, 565.

### 3.2 Fundamentalmatrix og eksponentialmatrix (bog 2.3, 7.4)

- **Def.** Fundamentalmatrix $\Phi(t)$ (søjler = n uafhængige løsninger) og $x(t)=\Phi(t)c$.
- **Def.** Eksponentialmatricen $e^{At}=\sum (At)^k/k!$; $x(t)=e^{At}x(0)$.
- **Metode** $e^{At}=Pe^{Dt}P^{-1}$ når $A=PDP^{-1}$; ellers brug Jordanform eller definitionen (bog 119, 120).
- **Opgavetype** Beregn $e^{A}$ for en given 2x2-matrix (bog 119, 120) og find systemets løsning via $e^{At}$.
- **Opgavetype** Find en fundamentalmatrix hørende til et givet system (bog 409).

**Lær:**
- 3Blue1Brown: [How (and why) to raise e to the power of a matrix](https://www.youtube.com/watch?v=O85OWBJ2ayo). MIT OCW: [Matrix Exponentials (18.03SC)](https://www.youtube.com/watch?v=qbyeQum8qTE), [The Matrix Exponential](https://www.youtube.com/watch?v=LwSk9M5lJx4). Trefor Bazett: [Compute large powers of a matrix via diagonalization](https://www.youtube.com/watch?v=Z8KBxf4C8kk).
- Bog: kap. 2.3 og 7.4. Maple-kompendium D.1.3 til kontrol.

**Øv:** Bog 119, 120, 409; eksamen 524, 529.

### 3.3 Det inhomogene system (bog 2.4-2.5)

- **Sætn.** Fuldstændig løsning $x=x_h+x_p$; variation af konstanter giver $x_p=\Phi(t)\int\Phi(s)^{-1}u(s)\,ds$ (Sætn. 2.19, bevis 920).
- **Metode** Gættemetoden for systemer med konstant eller eksponentiel højreside.
- **Opgavetype** Løs et inhomogent system (bog 431, 410, 411) og identificér stationær løsning.
- **Opgavetype** Forklar kort hvorfor systemer med variable koefficienter ikke har en generel løsningsformel (bog 2.5).

**Lær:**
- Paul's: [Nonhomogeneous Systems](https://tutorial.math.lamar.edu/Classes/DE/NonhomogeneousSystems.aspx). MIT 18.03: [Lec 29](https://www.youtube.com/watch?v=zreI4HllD80) (48 min, matrixmetoder).
- Bog: kap. 2.4-2.5.

**Øv:** Bog 410, 411, 431, 920.

**Mastery-checklist 3**
- [ ] Kan jeg omskrive en n'te ordens ligning til et system og omvendt?
- [ ] Kan jeg løse $\dot x=Ax$ for 2x2 og 3x3 med reelle, komplekse og gentagne egenværdier?
- [ ] Kan jeg beregne $e^{At}$ ved diagonalisering?
- [ ] Kan jeg løse et inhomogent system med begyndelsesbetingelse?

---

## 4. Stabilitet og systemers overføringsfunktion

**Tid:** ca. 4 timer. **Vægt: høj.** Spørgsmål om (asymptotisk) stabilitet og om sammenhæng mellem system og overføringsfunktion kommer næsten hvert år og er hurtige point når reglerne sidder. **Bog:** kap. 2.6-2.9, Bilag A.5.

### 4.1 Stabilitet for homogene systemer (bog 2.8)

- **Def.** Stabil, asymptotisk stabil og ustabil: alle løsninger begrænsede / går mod 0 / mindst én ubegrænset.
- **Sætn.** Asymptotisk stabil $\iff$ alle egenværdier har $\operatorname{Re}\lambda<0$; stabil $\iff$ $\operatorname{Re}\lambda\le 0$ og egenværdier med $\operatorname{Re}\lambda=0$ har lige mange egenvektorer som multiplicitet.
- **Metode** 2x2: brug $\operatorname{tr}A$ og $\det A$ eller Routh-lignende betingelser på karakterpolynomiet.
- **Opgavetype** "Afgør om systemet er stabilt/asymptotisk stabilt" for en matrix eller for en n'te ordens ligning (bog 422, 425, 428, 429).
- **Opgavetype** For hvilke værdier af parameteren $a$ er systemet asymptotisk stabilt? (bog 427, 435).

**Lær:**
- Steve Brunton: [Stability and Eigenvalues](https://www.youtube.com/watch?v=XXjoh8L1HkE), [Stability and Eigenvalues (Control Bootcamp)](https://www.youtube.com/watch?v=h7nJ6ZL4Lf0). Ingen Jitty.
- Bog: kap. 2.8.

**Øv:** Bog 422-430, 435; eksamen 507, 512, 514, 520, 541.

### 4.2 Overføringsfunktion og stabilitet for inhomogene systemer (bog 2.6, 2.7, 2.9)

- **Def.** $H(s)=C(sI-A)^{-1}B$ for $\dot x=Ax+Bu$, $y=Cx$ (bog 2.6; poler = egenværdier).
- **Sætn.** Asymptotisk stabilt homogent system giver begrænsede svar på begrænsede input og $H(i\omega)$ styrer stationært svar (2.7, 2.9).
- **Opgavetype** Find $H(s)$ for et givet system (bog 404, 417, 418, 433).
- **Opgavetype** MC-sætning: "systemet er asymptotisk stabilt, er $x(t)=t\,(1,1)^T$ en løsning?" (nej, den er ubegrænset).

**Lær:**
- Steve Brunton: [Laplace and Transfer Function](https://www.youtube.com/watch?v=0mnTByVKqLM) (se også emne 2). Bog: 2.6, 2.7, 2.9.

**Øv:** Bog 404, 417, 418, 433; eksamen 514, 520.

**Mastery-checklist 4**
- [ ] Kan jeg afgøre stabilitet ud fra egenværdier (og kende grænsetilfældet $\operatorname{Re}\lambda=0$)?
- [ ] Kan jeg finde parameterområdet hvor et system er asymptotisk stabilt?
- [ ] Kan jeg beregne $H(s)$ for et system og forklare polernes rolle?

---

## 5. Ulineære ODE'er

**Tid:** ca. 4 timer. **Vægt: middel.** Ofte én delopgave pr. sæt (stationære punkter og lineariseret stabilitet), men ikke den tungeste. **Bog:** kap. 3.

### 5.1 1-dimensionale autonome systemer (bog 3.2)

- **Def.** Autonomt system $\dot x=f(x)$, stationært punkt $f(x^*)=0$.
- **Metode** Stabilitet af $x^*$ ud fra fortegn af $f'(x^*)$.
- **Opgavetype** Find alle stationære punkter og afgør deres type (bog 436, 437).

**Lær:**
- ★ [Slope fields (retningsfelter)](https://www.youtube.com/watch?v=Zd--UbuU1ok) som intuition. Paul's: [Equilibrium Solutions](https://tutorial.math.lamar.edu/Classes/DE/EquilibriumSolutions.aspx). Steve Brunton: [Linearizing Nonlinear DEs Near a Fixed Point](https://www.youtube.com/watch?v=RCWkzzLgwf0).
- Bog: 3.1-3.2.

**Øv:** Bog 436-440.

### 5.2 2-dimensionale autonome systemer og linearisering (bog 3.3)

- **Metode** Jacobimatricen $J(x^*)$; egenværdier af $J$ bestemmer lokal stabilitet (kun hvis ingen $\operatorname{Re}\lambda=0$).
- **Metode** Faseportræt: skitsér nullkliner og retningsfelt.
- **Opgavetype** Find stationære punkter, linearisér og afgør stabilitet (bog 438-442, 534, 940).
- **Opgavetype** Klassificér om et system er lineært eller ulineært (bog 443).

**Lær:**
- Steve Brunton: [Drawing Phase Portraits for Nonlinear Systems](https://www.youtube.com/watch?v=vBwyD4JJlSs), [Linearizing Around a Fixed Point (Control Bootcamp)](https://www.youtube.com/watch?v=1YMTkELi3tE). Paul's: [Phase Plane](https://tutorial.math.lamar.edu/Classes/DE/PhasePlane.aspx). Ingen Jitty.
- Bog: 3.3.

**Øv:** Bog 438, 439, 441, 442, 534, 940.

### 5.3 Dimension 3 og kaos (bog 3.4)

- **Def.** Lorenz-systemet; stationære punkter for givne $r,s,b$ (bog 446).
- **Sætn.** Symmetri $(x,y,z)\mapsto(-x,-y,z)$ (bog 444) og $z$-aksen invariant (bog 445).
- **Opgavetype** Find stationære punkter for Lorenz-systemet for en given parameter.

**Lær:**
- Steve Brunton: [Chaotic Dynamical Systems](https://www.youtube.com/watch?v=PDeN3iCtyNY), [Simulating the Lorenz System](https://www.youtube.com/watch?v=EnsB1wP3LFM). Bog: 3.4.

**Øv:** Bog 444-447.

**Mastery-checklist 5**
- [ ] Kan jeg finde alle stationære punkter for et 2D-system?
- [ ] Kan jeg beregne Jacobimatricen og afgøre lokal stabilitet?
- [ ] Ved jeg hvornår linearisering ikke kan afgøre noget?

---

## 6. Uendelige rækker af tal

**Tid:** ca. 8 timer. **Vægt: høj.** Én fuld eksamensopgave plus MC-spørgsmål (absolut/betinget konvergens, test valg, sum, estimering). Kræver at du ikke blander testene sammen. **Bog:** kap. 4 og Bilag A.7, F.1.

### 6.1 Uegentlige integraler og talfølger (bog 4.1-4.2)

- **Def.** Konvergens af uegentligt integral; sammenligningskriterium og $\int_1^\infty x^{-p}dx$.
- **Def.** Konvergent talfølge ($\epsilon$-$N$-definition), begrænsethed og regneregler (opg. 801-804).
- **Metode** Størrelsesforhold: $\ln n \ll n^a \ll b^n \ll n!\ll n^n$ (indersiden af bogens omslag, opg. 803).
- **Opgavetype** Afgør om en følge konvergerer og find grænsen (bog 803).

**Lær:**
- ★ [How to Solve Improper Integrals](https://www.youtube.com/watch?v=IlLmszWACIA), ★ [Arithmetic and Geometric / Implicit-Explicit Sequences, convergence](https://www.youtube.com/watch?v=ZrwVIxnPp-8). bprp: [Type 1 improper integrals](https://www.youtube.com/watch?v=45YcoKNRa-Y), [P-test for improper integral](https://www.youtube.com/watch?v=rwLkrGrugOk), [Comparison test for improper integrals](https://www.youtube.com/watch?v=4zjp39ga-QM). Khan Academy: [Convergent and divergent sequences](https://www.youtube.com/watch?v=lfZGtjSWcQs).
- Paul's: [Sequences](https://tutorial.math.lamar.edu/Classes/CalcII/Sequences.aspx), [Improper Integrals](https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx). Bog: 4.1-4.2.

**Øv:** Bog 801-804 (formelle beviser); [[Reference/Formelsamling/Integralregning|integralregning]] til hurtig opfriskning.

### 6.2 Rækker, grundbegreber og de enkle serier (bog 4.4)

- **Def.** Række som grænse af delsummer; konvergens og divergens.
- **Sætn.** Divergenstesten: hvis $a_n\not\to0$ divergerer $\sum a_n$.
- **Metode** Geometrisk række $\sum ar^n=a/(1-r)$ for $|r|<1$ og $p$-rækken $\sum n^{-p}$ (konvergent for $p>1$).
- **Metode** Teleskoprække: omskriv med partialbrøker og lad led forsvinde.
- **Opgavetype** Find summen af en geometrisk eller teleskoprække (bog 152, 106, 104 uendeligt kredsløb).

**Lær:**
- ★ [Divergence Test](https://www.youtube.com/watch?v=rhVezcAXvdo), ★ [Geometric Series Test](https://www.youtube.com/watch?v=JuRSUO_ghMU), ★ [P-Series Test](https://www.youtube.com/watch?v=FwUEK5nCjGo), ★ [Telescoping Series Test](https://www.youtube.com/watch?v=ZdTHqG2m-aE). bprp: [Telescoping series, FAST](https://www.youtube.com/watch?v=mkgzDKj4Xs0). Trefor Bazett: [Geometric series](https://www.youtube.com/watch?v=Gs1Qc8XKtqM).
- Paul's: [Series: The Basics](https://tutorial.math.lamar.edu/Classes/CalcII/Series_Basics.aspx), [Special Series](https://tutorial.math.lamar.edu/Classes/CalcII/Series_Special.aspx). Bog: 4.4.

**Øv:** Bog 101, 104, 106, 129, 152.

### 6.3 Konvergenskriterier for positive led (bog 4.5)

- **Sætn.** Integralkriteriet; sammenligningskriteriet (direkte og grænse); kvotientkriteriet $L=\lim|a_{n+1}/a_n|$; rodkriteriet $\lim|a_n|^{1/n}$ (opg. 811, 813 beviser dem).
- **Metode** Vælg test efter ledtype: potenser $\to$ $p$-række eller grænsesammenligning; fakulteter og eksponentialer $\to$ kvotient; $n$'te potens $\to$ rod; ægte funktion $f(n)$ $\to$ integral.
- **Opgavetype** "Afgør om rækken er konvergent eller divergent" for 4-6 rækker (bog 101, 103, 107, 114, 122, 126, 128, 156, 158).
- **Opgavetype** Bevis med integralkriteriet en ulighed for en delsum (bog 105).

**Lær:**
- ★ [Direct Comparison](https://www.youtube.com/watch?v=48PKUQ9zcpk), ★ [Limit Comparison](https://www.youtube.com/watch?v=aMnan_zfA0A), ★ [Direct vs Limit Comparison](https://www.youtube.com/watch?v=UKCfMpkJL3I), ★ [Ratio Test](https://www.youtube.com/watch?v=gOOluy3jOuc), ★ [Root Test](https://www.youtube.com/watch?v=htqK5Z-KZtU), ★ [Convergence Tests Review (52 min)](https://www.youtube.com/watch?v=PfGa8hHkI-8). Jitty har ikke integralkriteriet, så tag bprp: [P-Series & Integral Test](https://www.youtube.com/watch?v=u6f7VfNVvRQ). Mu Prime Math: [Simple Guide to Series Convergence Tests](https://www.youtube.com/watch?v=Y9JctArSAQw). bprp: [Direct & limit comparison, 8 examples](https://www.youtube.com/watch?v=CRwVzk0QvNg). Trefor Bazett: [Choosing Which Convergence Test to Apply](https://www.youtube.com/watch?v=0wefqjpQyKM). Khan Academy: [Ratio test](https://www.youtube.com/watch?v=av947KCWf2U), [Integral test](https://www.youtube.com/watch?v=u1UKIljUWuc).
- Paul's: [Integral](https://tutorial.math.lamar.edu/Classes/CalcII/IntegralTest.aspx), [Comparison/Limit Comparison](https://tutorial.math.lamar.edu/Classes/CalcII/SeriesCompTest.aspx), [Ratio](https://tutorial.math.lamar.edu/Classes/CalcII/RatioTest.aspx), [Root](https://tutorial.math.lamar.edu/Classes/CalcII/RootTest.aspx), [Strategy](https://tutorial.math.lamar.edu/Classes/CalcII/SeriesStrategy.aspx). Bog: 4.5.

**Øv:** Bog 101, 103, 107, 109, 114, 122, 125, 126, 128, 135, 140, 142, 156, 158; bevis 811, 813; eksamen 503, 513, 517, 535, 538, 544, 549.

### 6.4 Alternerende rækker og absolut/betinget konvergens (bog 4.7)

- **Sætn.** Leibniz: $b_n\downarrow0\Rightarrow\sum(-1)^nb_n$ konvergerer.
- **Def.** Absolut konvergent ($\sum|a_n|<\infty$) og betinget konvergent (konvergent men ikke absolut).
- **Sætn.** Absolut konvergens medfører konvergens.
- **Opgavetype** Klassificér række som absolut konvergent, betinget konvergent eller divergent (bog 102, 107, 135, 138, 142, 146, 564).
- **Opgavetype** MC: $\sum(-1)^n(n+2)^3/2^n$ (kvotient giver absolut konvergens).

**Lær:**
- ★ [Alternating Series Test](https://www.youtube.com/watch?v=_1Sq2n7xTuc), ★ [Absolute and Conditional Convergence](https://www.youtube.com/watch?v=sMnMTN_lEIY). bprp: [Alternating Series Test](https://www.youtube.com/watch?v=GkczNhVzG6I), [checking for absolute convergence](https://www.youtube.com/watch?v=cmQAjEWL5OY).
- Paul's: [Alternating Series Test](https://tutorial.math.lamar.edu/Classes/CalcII/AlternatingSeries.aspx), [Absolute Convergence](https://tutorial.math.lamar.edu/Classes/CalcII/AbsoluteConvergence.aspx). Bog: 4.7.

**Øv:** Bog 102, 107, 123, 135, 138, 142, 146, 159, 161, 564.

### 6.5 Vurdering af summen (bog 4.3, 4.6)

- **Sætn.** Taylors sætning med restled (Lagrange): $|R_n|\le\frac{M}{(n+1)!}|x-a|^{n+1}$.
- **Metode** Integralkriteriets rest: $\int_{N+1}^\infty f\le s-s_N\le\int_N^\infty f$.
- **Metode** Alternerende række: $|s-s_N|\le|a_{N+1}|$.
- **Opgavetype** "Hvor mange led skal tages med for at summen er bestemt med fejl under $\epsilon$?" (bog 127, 131, 148, 230).
- **Opgavetype** Find polynomium $P$ med $|\sin x-P(x)|\le0.05$ på $[0,3]$ (bog 127).

**Lær:**
- 3Blue1Brown: [Taylor series](https://www.youtube.com/watch?v=3d6DsjIBzJ4). Khan Academy: [Taylor polynomial remainder](https://www.youtube.com/watch?v=wgkRH5Uoavk), [Alternating series remainder](https://www.youtube.com/watch?v=gs9O255gdEY). Mu Prime Math: [Proof of the Exact Error of Taylor Series](https://www.youtube.com/watch?v=6P4V_B6iAY4). Trefor Bazett: [Alternating series, estimating the remainder](https://www.youtube.com/watch?v=uFIqx1Z1gLU).
- Paul's: [Estimating the Value of a Series](https://tutorial.math.lamar.edu/Classes/CalcII/EstimatingSeries.aspx). Bog: 4.3, 4.6, A.6.

**Øv:** Bog 127, 131, 148, 161; Maple-kompendium D.4.3-D.4.4 til kontrol.

**Mastery-checklist 6**
- [ ] Kan jeg vælge og anvende den rigtige konvergenstest på en ukendt række på under 3 minutter?
- [ ] Kan jeg klassificere som absolut/betinget konvergent/divergent og begrunde det?
- [ ] Kan jeg finde summen af en geometrisk eller teleskoprække?
- [ ] Kan jeg give en fejlgrænse for en delsum og bestemme antal led?
- [ ] Kan jeg bevise at en sum af konvergente følger konvergerer (opg. 801)?

---

## 7. Potensrækker og rækker af funktioner (uniform konvergens)

**Tid:** ca. 7 timer. **Vægt: høj.** Konvergensradius er et fast MC-spørgsmål, og majorantrække/uniform konvergens er en stående kategori ("har rækken en konvergent majorantrække?"). **Bog:** kap. 5 og Bilag A.8, B.1.

### 7.1 Kvotientrækker og potensrækker (bog 5.1-5.2)

- **Def.** Potensrække $\sum c_n(x-a)^n$; konvergensradius $\rho$; konvergens for $|x-a|<\rho$ og divergens for $|x-a|>\rho$.
- **Sætn.** Kvotientrækker: $\sum x^n=1/(1-x)$ for $|x|<1$ (Sætn. 5.2).
- **Metode** $\rho=\lim|c_n/c_{n+1}|$ (kvotientkriteriet) eller $1/\limsup|c_n|^{1/n}$; tjek endepunkterne separat.
- **Opgavetype** Bestem konvergensradius og konvergensintervallet (bog 110, 121, 136, 137, 139, 143, 147, 523, 532, 543, 549).
- **Opgavetype** Bestem de $x$ hvor en række konvergerer, og find summen (bog 113, 115).

**Lær:**
- ★ [Power Series and Radius/Interval of Convergence](https://www.youtube.com/watch?v=oygmAKm38tU), ★ [Difference Between Power Series and Taylor Series](https://www.youtube.com/watch?v=gvxPctm0aZc). bprp: [Power series detailed introduction](https://www.youtube.com/watch?v=Lt3g9THQSts), [The formula for the radius of convergence](https://www.youtube.com/watch?v=eZUTPD7QAEE), [How to find radius and interval](https://www.youtube.com/watch?v=iXP8z3pYM_I). Trefor Bazett: [Power Series & Intervals of Convergence](https://www.youtube.com/watch?v=XHoRBh4hQNU).
- Paul's: [Power Series](https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeries.aspx). Bog: 5.1-5.2.

**Øv:** Bog 110, 113, 115, 121, 136, 137, 139, 143, 144, 147; eksamen 509, 523, 532, 539, 543.

### 7.2 Taylor- og Maclaurinrækker, regning med potensrækker (bog 5.2)

- **Def.** Taylorrække $\sum f^{(n)}(a)(x-a)^n/n!$; standardrækker for $e^x,\sin x,\cos x,\ln(1+x),\tfrac1{1-x}$ (Bilag B.1).
- **Sætn.** Potensrækker må differentieres og integreres led for led inden for konvergensintervallet.
- **Metode** Opbyg nye rækker ud fra standardrækker (substitution, produkt, differentiation, integration), fx $\ln(1+x)$ fra $1/(1+x)$.
- **Opgavetype** "Find potensrækken for $f$" og "find summen af rækken" ved at kende en funktion (bog 116, 117, 145, 157).
- **Opgavetype** Beregn et integral som $\int_0^1\sin(x^2)dx$ med vilkårlig nøjagtighed via potensrække og led-for-led-integration (bog 530).

**Lær:**
- ★ [Intro to Taylor Series](https://www.youtube.com/watch?v=9CfLMV8dZS4), ★ [Maclaurin Series Identities](https://www.youtube.com/watch?v=6-RR7-m28pM). 3Blue1Brown: [Taylor series](https://www.youtube.com/watch?v=3d6DsjIBzJ4). Paul's: [Power Series and Functions](https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeriesandFunctions.aspx), [Taylor Series](https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx).
- Bog: 5.2, Bilag B.1.

**Øv:** Bog 116, 117, 133, 145, 151, 157.

### 7.3 Rækker af funktioner og uniform konvergens (bog 5.3-5.4)

- **Def.** Punktvis og uniform konvergens; majorantrække $\sum M_n$ med $|f_n(x)|\le M_n$ og $\sum M_n<\infty$ (Weierstrass' M-test).
- **Sætn.** Har rækken en konvergent majorantrække, er konvergensen uniform, og summen er kontinuert; led-for-led-integration og -differentiation er tilladt under betingelser.
- **Metode** Bestem $M_n=\sup_x|f_n(x)|$ over et givet interval; afhænger af intervallet ($[1,\infty[$ vs $[1,10]$, jf. F23 MC6).
- **Opgavetype** "Har rækken en (konvergent) majorantrække?" og "konvergerer uniformt på $]0,1[$?" (bog 111, 114, 118, 133, 149, 151, 153, 160).
- **Opgavetype** $\ln(1+x)$-rækken har ikke konvergent majorantrække på $]-1,1]$ (bog 133, 151).

**Lær:**
- Ingen Jitty. The Bright Side of Mathematics: [Weierstrass M-Test](https://www.youtube.com/watch?v=tx6W7t-STC8). MIT OCW 18.100-forelæsning: [Uniform Convergence, the Weierstrass M-Test, and Interchanging Limits](https://www.youtube.com/watch?v=gXPX29KfEc4) (75 min, kun hvis du vil have beviset). Bog: kap. 5.3-5.4, Bilag A.8 og noterne `KontinuitetOgDifferentiabilitet.pdf` i `Noter og ekstra opgaver`.

**Øv:** Bog 111, 114, 118, 149, 153, 160; bevis 860-864; eksamen 503, 518.

**Mastery-checklist 7**
- [ ] Kan jeg finde konvergensradius og endepunktsadfærd for en potensrække?
- [ ] Kan jeg bygge en potensrække og dens sum ud fra standardrækker?
- [ ] Kan jeg afgøre om en funktionsrække har en konvergent majorantrække på et givet interval?
- [ ] Kan jeg forklare forskellen på punktvis og uniform konvergens og hvorfor den betyder noget?

---

## 8. Fourieranalyse

**Tid:** ca. 7 timer. **Vægt: høj.** Én hel opgave i næsten alle sæt (koefficienter, delsum, konvergens i et punkt, uniform konvergens, Parseval for en sum). Kræver trigonometriske integraler og delvis integration. **Bog:** kap. 6 og 7.3, Bilag A.9, B.2, C.1.

### 8.1 Fourierrækker og koefficienter (bog 6.1)

- **Def.** $2\pi$-periodisk $f$; $a_0,a_n,b_n$ via integraler over en periode; reel form $\frac{a_0}{2}+\sum(a_n\cos nx+b_n\sin nx)$.
- **Metode** Lige funktion giver kun $a_n$, ulige kun $b_n$; opdel $f=f_L+f_U$ (opg. 205, 860, 861).
- **Metode** $T$-periodisk $f$: skalér med $\omega=2\pi/T$ (Bilag C.1; opg. 213, 215).
- **Opgavetype** Skitsér $f$ på $[-2\pi,2\pi]$, afgør lige/ulige og beregn $a_0$ og andre koefficienter (bog 201-203, 207, 209, 217, 222-226, 232).
- **Opgavetype** Fra givne koefficienter find rækken på reel form (bog 210).

**Lær:**
- Ingen Jitty. bprp: [How to get the Fourier series coefficients](https://www.youtube.com/watch?v=iSw2xFhMRN0), [Fourier series of e^x from -pi to pi](https://www.youtube.com/watch?v=SXqXmaw28kw). Trefor Bazett: [Intro to Fourier series, the big idea](https://www.youtube.com/watch?v=wmCIrpLBFds), [How to Compute a Fourier Series](https://www.youtube.com/watch?v=ijQaTAT3kOg). 3Blue1Brown: [But what is a Fourier series?](https://www.youtube.com/watch?v=r6sGWTCMz2k). Steve Brunton: [Fourier Series: Part 1](https://www.youtube.com/watch?v=MB6XGQWLV04).
- Paul's: [Fourier Series](https://tutorial.math.lamar.edu/Classes/DE/FourierSeries.aspx), [Periodic & Orthogonal Functions](https://tutorial.math.lamar.edu/Classes/DE/PeriodicOrthogonal.aspx). Bog: 6.1, B.2.

**Øv:** Bog 201, 202, 203, 205, 207, 209, 210, 213, 215, 217, 222-226; eksamen 504, 510, 518, 522, 526, 528, 533, 540, 545, 550, 562.

### 8.2 Fouriers sætning og konvergens (bog 6.2)

- **Sætn.** For stykkevis differentiabel $f$ konvergerer rækken punktvis mod $f(x)$ i kontinuitetspunkter og mod middelværdien $\tfrac12(f(x^+)+f(x^-))$ i spring (Fouriers sætning, bevis opg. 874).
- **Sætn.** Hvis $f$ er kontinuert og stykkevis differentiabel, er konvergensen uniform (majorantrække via koefficienternes aftagen).
- **Metode** Delsum $S_N$ og fejlestimat $|f(x)-S_N(x)|\le\epsilon$ for at bestemme $N$ (bog 211, 230; eksempel 7.9).
- **Opgavetype** "Hvad konvergerer rækken imod i $x=\pi/2$ og $x=\pi$?" (spring og kontinuitet) og "konvergerer rækken uniformt?" (F23 Opgave 3).
- **Opgavetype** Brug Fourierrækken til at finde en sum, fx $\sum 1/n^2$ eller $\sum\sin n/n$ (bog 214: Fourierrække for $|\sin t|$ og derefter en sum).

**Lær:**
- bprp: [the sum of sin(n)/n by using the Fourier Series](https://www.youtube.com/watch?v=oKL0-xRQ-SY). Sarah Schott: [Fourier Series, the Fourier Convergence Theorem](https://www.youtube.com/watch?v=Ww4wiozd2-w). Neso Academy: [Dirichlet conditions](https://www.youtube.com/watch?v=blS_OImUJ-c). Paul's: [Convergence of Fourier Series](https://tutorial.math.lamar.edu/Classes/DE/ConvergenceFourierSeries.aspx). Bog: 6.2, A.9.

**Øv:** Bog 211, 214, 226, 228, 230, 232; bevis 874; eksamen 522, 526, 533, 540.

### 8.3 Kompleks form, Parseval og Hilbertrum (bog 6.3-6.5, 7.3)

- **Def.** Fourierrække på kompleks form $\sum c_ne^{inx}$, $c_n=\frac1{2\pi}\int f e^{-inx}dx$; sammenhæng til $a_n,b_n$.
- **Sætn.** Parsevals sætning: $\frac1{2\pi}\int|f|^2=\sum|c_n|^2$; $\{e^{inx}\}$ er ortonormalt system i $L^2$.
- **Metode** Brug Parseval til at finde sum af $1/n^2$ eller $1/n^4$ (bog 214).
- **Def.** Effekt af signal og approksimation i effekt (kap. 7.3, Bilag A.11).
- **Opgavetype** Opskriv $c_n$ for en given $f$ og sæt Parseval ind (bog 518: opstil rækken på kompleks form ud fra $b_n=1/n^3$; bevis 862, 863, 879, 880).

**Lær:**
- bprp: [Complex Fourier Series](https://www.youtube.com/watch?v=aC0j8CW58AM), [Parseval's Theorem](https://www.youtube.com/watch?v=1qkqCTwYoqU). Trefor Bazett: [The Geometric view of Fourier series (linear algebra)](https://www.youtube.com/watch?v=1Ez1tn1mei8). Bog: 6.3-6.5, 7.3.

**Øv:** Bog 214, 518, 562, 862, 863, 879, 880.

### 8.4 Fouriertransformation og wavelets (bog 6.6-6.7)

- **Def.** Fouriertransformationen $\hat f(\omega)$; ved kun definition og eksempel.
- **Opgavetype** Lav-vægt; ingen opgaver i sættene jeg har set. Spring over første gang.

**Lær:**
- 3Blue1Brown: [But what is the Fourier Transform?](https://www.youtube.com/watch?v=spUNpyF58BY). Steve Brunton: [The Fourier Transform](https://www.youtube.com/watch?v=jVYs-GTqm5U). Bog: 6.6-6.7.

**Mastery-checklist 8**
- [ ] Kan jeg tegne en periodisk funktion, afgøre lige/ulige og beregne koefficienter?
- [ ] Kan jeg sige hvad rækken konvergerer mod i kontinuitets- og springpunkter, og om konvergensen er uniform?
- [ ] Kan jeg bruge Parseval/indsætning til at finde en sum?
- [ ] Kan jeg omskrive mellem reel og kompleks form?

---

## 9. ODE'er løst med rækker

**Tid:** ca. 5 timer. **Vægt: middel-høj.** Typisk én af de fire eksamensopgaver (fx F23 Opgave 4, rekursionsformel $\to$ konvergensradius $\to$ sumfunktion) og knytter potensrækker (emne 7) til ODE'er (emne 1). **Bog:** kap. 7.1-7.3, Bilag A.10, A.11.

### 9.1 Potensrækkemetoden (bog 7.1)

- **Metode** Sæt $y=\sum c_nt^n$ ind, saml koefficienter af samme potens og få en rekursionsformel for $c_n$.
- **Sætn.** Konvergensradius for potensrækkeløsningen er mindst afstanden til nærmeste singularitet af koefficientfunktionerne.
- **Metode** Brug begyndelsesbetingelser til at fastlægge $c_0,c_1$; genkend sumfunktionen (typisk $e^t$ eller $\sin$/$\cos$) fra rekursionen.
- **Opgavetype** Opskriv rekursionsformlen for en ligning som $ty''-y=0$ eller $ty''-(t+1)y'+y=0$ (bog 531, 890, 891, 926).
- **Opgavetype** F23: rekursionen $(n+1)c_{n+1}-c_n=0$; er $t^2$ løsning, hvad er $\rho$, og hvad er sumfunktionen med $y(0)=K$?

**Lær:**
- ★ Jitty har potensrækker (emne 7) men ikke selve metoden. bprp: [Power series solution to differential equation (shortened)](https://www.youtube.com/watch?v=wzdfHn3iolo), [Power Series Solution for a differential equation](https://www.youtube.com/watch?v=4Mqj1GL0ZlA). Trefor Bazett: [How to solve ODEs with infinite series](https://www.youtube.com/watch?v=xeeM3TT4Zgg).
- Paul's: [Series Solutions](https://tutorial.math.lamar.edu/Classes/DE/SeriesSolutions.aspx). Bog: 7.1.

**Øv:** Bog 531, 890, 891, 926; eksamen 531.

### 9.2 Fourierrækkemetoden og effekt (bog 7.2-7.3)

- **Metode** Løs $a_0y^{(n)}+\dots=u(t)$ for periodisk $u$ ved Fourier: $y_p=\sum H(in)c_ne^{int}$ (Bilag A.10).
- **Sætn.** Stationær løsning findes når $H$ er defineret i $in$; konvergens afhænger af at $H(in)$ aftager.
- **Opgavetype** Find den periodiske løsning til en ODE med periodisk højreside (se eksemplerne i kap. 7.2).
- **Opgavetype** Beregn effekt eller antal led for approksimation (kap. 7.3, bog 230).

**Lær:**
- Ingen Jitty. Bog: 7.2-7.3, A.10-A.11. Kombinér Steve Brunton: [Frequency Response](https://www.youtube.com/watch?v=e-8y4MTT7NQ) med bprp: [Complex Fourier Series](https://www.youtube.com/watch?v=aC0j8CW58AM).

**Øv:** Eksemplerne i kap. 7.2; Fourierrække-opgaverne 522, 540, 550 som input til metoden.

**Mastery-checklist 9**
- [ ] Kan jeg indsætte $y=\sum c_nt^n$ og udlede rekursionsformlen?
- [ ] Kan jeg aflæse konvergensradius og sumfunktion af rekursionen?
- [ ] Kan jeg kombinere $H(s)$ og Fourierrække til en stationær løsning?

---

## Eksamenstræning og tjek

- Tag ét komplet sæt under tid, fx `01025Mat2MatTekEksamenAogB-F23.pdf` (3 timer, 4 opgaver) og ét MC-sæt (`...A-E21-MCQ`, `...A-E22-MCQ`, `...A-MC-E19`). Brug facitlisten bagefter.
- Bogens egne eksamensopgaver: F.5 (opg. 501-550) og F.6 (542-566). Opgaver mærket "(kursus 01030)" er den praktiske søsterudgave og lidt lettere.
- Selv-test og flashcards: [[Self-Tests/Differential Equations Test|Differential Equations Test]], [[Flashcards/Flashcards|Flashcards]], [[Formelsamling/Formelsamling|Formelsamling]], [[Glossary]].
- Lektioner (tomme skabeloner): [[Courses/Differential Equations and Infinite Series/Lektioner/index|Alle lektioner]].

## Links

- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Pensum|Pensum]]
- [[Courses/Differential Equations and Infinite Series/Begreber|Begreber]]
- [[Study-Roadmap|Studieoversigt]]
- [[Courses/Matematik 1A/Speedrun Map|Speedrun Map: Matematik 1A]]
- [[Courses/Introduction to Numerical Algorithms/Speedrun Map|Speedrun Map: Numeriske algoritmer]]
