---
publish: true
title: Speedrun Map (Matematik 1A)
course: Matematik 1A
type: reference
tags:
  - matematik-1a
  - speedrun
  - studieplan
---

# Speedrun Map: Matematik 1A

Hurtigste vej gennem faget i en fornuftig læringsrækkefølge. Hvert hovedemne har tid, eksamensvægt, delemner, begreber, hvor du lærer det, hvad du skal regne, og en mastery-checklist.

> [!warning] Pensum er tyndt i vaulten
> [[Courses/Matematik 1A/Pensum|Pensum]] er en tom skabelon, og alle 13 lektioner er tomme skabeloner. [[Courses/Matematik 1A/Begreber|Begreber]] nævner vektorer, skalar- og krydsprodukt, differentialkvotient og integral, men intet af det er med på det eneste rigtige eksamenssæt jeg har: **01003 Mathematics 1a, ordinær eksamen 7. december 2025** (`Downloads\OrdinaryExam_Dec2025-01003.pdf`, 4 timer, skriftlige hjælpemidler tilladt). Det sæt har 8 MC-opgaver (50 %) og 7 opgaver med begrundelse (50 %), og det er min kilde til emnerne herunder: logik og mængder, funktioner, induktion/rekursion, komplekse tal, polynomier, lineære ligningssystemer, vektorrum, lineære afbildninger og basisskift, determinant, egenværdier/diagonalisering og ODE'er (2. orden og systemer). Der er ingen lærebog for Matematik 1A i Downloads. Kursusnummeret er uafklaret i vaulten ([[Project-Notes/Semester-Registration-Tracker|Tracker]]: 01001, [[Project-Notes/Study-Plan-Analysis|Study-Plan-Analysis]]: 01003); tjek kursusbasen. Hvis dit hold følger en anden læseplan end Dec 2025-sættet, så justér.

## Forklaring

- ★ = Jitty (kanalen *Computer Engineering Jitty*, [@compengineerjitty](https://www.youtube.com/@compengineerjitty)). Jitty har [Discrete Math](https://www.youtube.com/playlist?list=PLlIjCL-XnH1ehHfLpUOwFBGIcCojkuLsO) (logik, mængder, funktioner, bevisteknik, summer) og [Differential Equations](https://www.youtube.com/playlist?list=PLlIjCL-XnH1dQj6BLHj7Oa8M9EtQ1BH0J), men ingen lineær algebra, komplekse tal eller induktion. Det står ved hvert delemne; så er næste valg blackpenredpen (bprp), derefter Dr. Trefor Bazett, 3Blue1Brown, Khan Academy, Paul's Online Notes, MIT OCW og Steve Brunton.
- Alle video-links er fundet ved søgning; ingen er gættet.
- Eksamensopgaver er nummereret som i Dec 2025-sættet: MC 1-8, opgave 9-15.
- Forudsætninger fra andre fag: [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Introduction to applied mathematics]] (bevis, induktion), [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]] (logik, mængder).
- Fortsætter i [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map: Differentialligninger og uendelige rækker]], som genbruger egenværdier og ODE'er herfra.

## Overblik

| # | Hovedemne | Dec 2025-opgave | Timer | Vægt |
|---|---|---|---|---|
| 1 | Logik, mængder og funktioner | MC 4, opg. 11 | 5 | middel |
| 2 | Induktion og rekursion | MC 7, opg. 15 | 4 | middel |
| 3 | Komplekse tal og polynomier | MC 3, opg. 9 | 6 | høj |
| 4 | Lineære ligningssystemer | opg. 10 | 5 | høj |
| 5 | Vektorrum: span, basis, dimension | opg. 12 | 6 | høj |
| 6 | Lineære afbildninger, matricer og basisskift | MC 8, opg. 14 | 8 | høj |
| 7 | Determinanter | MC 1 | 3 | middel |
| 8 | Egenværdier og diagonalisering | MC 5, opg. 13 | 6 | høj |
| 9 | Differentialligninger: 2. orden og systemer | MC 2, MC 6 | 7 | høj |

Sum: ca. 50 timer. Under "vægt" er der i Dec 2025-sættet 8 af 15 spørgsmål der er ren lineær algebra (MC 1, 5, 8; opg. 10, 12, 13, 14), men 9 og 3 hænger også tæt på. Vægtene er min vurdering ud fra det ene sæt, ikke en officiel fordeling.

---

## 1. Logik, mængder og funktioner

**Tid:** ca. 5 timer. **Vægt: middel.** Hurtige point (opg. 11: logisk ækvivalens og mængdeelement; MC 4: hvilken funktion er bijektiv), men sjældent svære. **Vault:** [[Courses/Matematik 1A/Udsagns logik Uge 1|Udsagnslogik Uge 1]] og [[Courses/Diskret matematik/Begreber|Diskret matematik: Begreber]].

### 1.1 Udsagnslogik

- **Def.** Udsagn, konnektiver ($\wedge,\vee,\neg,\Rightarrow,\Leftrightarrow$) og sandhedstabeller; se [[Reference/Matematik/Logiske symboler|Logiske symboler]].
- **Def.** Logisk ækvivalens: samme sandhedsværdi for alle kombinationer.
- **Sætn.** De Morgan, kontraposition, $P\Rightarrow Q\equiv\neg P\vee Q$ og $(P\Leftrightarrow Q)\wedge P\equiv P\wedge Q$.
- **Opgavetype** "Er $(P\Leftrightarrow\neg Q)\wedge P$ logisk ækvivalent med $P\wedge\neg Q$?" (opg. 11a; svar: ja). Løs med sandhedstabel.
- **Def.** Kvantorer og negering af kvantorer.

**Lær:**
- ★ [What is a Proposition?](https://www.youtube.com/watch?v=mkJ1KbGXWNQ), ★ [Logical Operations](https://www.youtube.com/watch?v=H8DXpsxcPOY), ★ [Conditionals and Biconditionals](https://www.youtube.com/watch?v=pLvSJey4PAw), ★ [De Morgan's Law](https://www.youtube.com/watch?v=zdDmw1DqX5I), ★ [Tautologies and Contradictions](https://www.youtube.com/watch?v=LUkIsG61yx8), ★ [Converse, Inverse, Contrapositive](https://www.youtube.com/watch?v=bAZBNTaVUYw), ★ [Laws of Propositional Logic](https://www.youtube.com/watch?v=ILk-VTZH3y4), ★ [Introduction to Quantifiers](https://www.youtube.com/watch?v=kueSPV70IU0).

**Øv:** Dec 2025 opg. 11a; din egen løsning i `Downloads\Aflevering 1 mat 1a.pdf` (opg. a: $(P\Leftrightarrow Q)\wedge P$ mod $P\Rightarrow Q$); [[Courses/Introduction to applied mathematics/Proofs (Brander)/Proofs Part I|Proofs Part I]] og `Downloads\MathProofs1A.pdf`.

### 1.2 Mængder

- **Def.** Mængde, element, delmængde, fællesmængde, foreningsmængde, differens ($\setminus$); se [[Reference/Matematik/Talmaengder|Talmængder]].
- **Def.** Tallegemer $\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\subset\mathbb C$.
- **Opgavetype** "Er $-2\in S=(\mathbb R\setminus\mathbb N)\cap\mathbb Z$?" (opg. 11b; ja, fordi $-2\notin\mathbb N$, $-2\in\mathbb Z$).
- **Opgavetype** Venn-diagram, potensmængde og kartesisk produkt.

**Lær:**
- ★ [Intro to Set Theory](https://www.youtube.com/watch?v=IZS4ehWKPhs), ★ [Union and Intersection](https://www.youtube.com/watch?v=TkIn4RIsR78), ★ [Venn Diagrams](https://www.youtube.com/watch?v=BIwhtmR1QbI), ★ [Difference and Symmetric Difference](https://www.youtube.com/watch?v=uIp_KAWn-B4), ★ [Set Identities](https://www.youtube.com/watch?v=txqWl1u91kM), ★ [Cartesian Products](https://www.youtube.com/watch?v=fqRU4VpJEW4).

**Øv:** Dec 2025 opg. 11b; flashcards i [[Flashcards/Discrete Math Flashcards|Discrete Math Flashcards]].

### 1.3 Funktioner

- **Def.** Funktion $f:A\to B$, definitionsmængde, værdimængde og billedmængde.
- **Def.** Injektiv, surjektiv, bijektiv; invers og sammensætning; se [[Reference/Formelsamling/Funktioner|Funktioner]].
- **Metode** Bijektiv $\iff$ injektiv + surjektiv; tjek mod den angivne værdimængde (fx er $\cos:[0,\pi]\to[-1,1]$ bijektiv, men $\cos:\mathbb R\to\mathbb R$ ikke).
- **Opgavetype** MC 4: afgør hvilken af seks funktioner $f_1,\dots,f_6$ der er bijektiv ved at vælge definitions- og værdimængde.
- **Opgavetype** Er $f(x)=x^2-3x+2-3|x-1|$ injektiv, og hvad er værdimængden? (din Aflevering 1, opg. b: opdel i $x\ge1$ og $x<1$).

**Lær:**
- ★ [Definition of Functions](https://www.youtube.com/watch?v=PAz9XyD9doI), ★ [Injective, Surjective, Bijective](https://www.youtube.com/watch?v=Rx5RXPz0o3c), ★ [Function Inverses](https://www.youtube.com/watch?v=AE4smlNnmCI), ★ [Composition of Functions](https://www.youtube.com/watch?v=NuAxzCALRms).

**Øv:** Dec 2025 MC 4; Aflevering 1 opg. b; [[Reference/Matematik/Matematiske begreber|Matematiske begreber]] §3.

**Mastery-checklist 1**
- [ ] Kan jeg afgøre logisk ækvivalens med sandhedstabel eller regneregler?
- [ ] Kan jeg afgøre om et tal ligger i en sammensat mængde?
- [ ] Kan jeg afgøre injektiv/surjektiv/bijektiv ud fra den angivne definitions- og værdimængde?

---

## 2. Induktion og rekursion

**Tid:** ca. 4 timer. **Vægt: middel.** Opg. 15 (bevis ved induktion af en ulighed) og MC 7 (udregn et led i en rekursion) giver sikre point. **Vault:** [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Introduction to applied mathematics]] (Proofs Part I/II).

### 2.1 Rekursivt definerede funktioner

- **Def.** Rekursion: startværdier og en regel, fx $f(n)=2f(n-1)+f(n-2)$.
- **Metode** Regn leddene ud ét ad gangen (MC 7: $f(5)$); pas på indekser og startværdier.
- **Opgavetype** Find $f(n)$ for lille $n$ og gæt eller bevis en lukket form.
- **Metode** Lineære rekursioner løses med karakterligning, som ODE'er (se emne 9).

**Lær:**
- Ingen Jitty. The Math Sorcerer: [Second Order Linear Homogeneous Recurrence (distinct real roots)](https://www.youtube.com/watch?v=d5jTxBNK6OU). Justin Ryan: [Closed Form of the Fibonacci Sequence](https://www.youtube.com/watch?v=SilT6i1DEe8).

**Øv:** Dec 2025 MC 7.

### 2.2 Induktionsbeviser

- **Sætn.** Induktionsprincippet: basis + induktionsskridt giver påstand for alle $n\ge n_0$; se [[Reference/Matematik/Matematiske begreber|Induktion]].
- **Metode** Stærk induktion når $P(n)$ afhænger af flere tidligere led.
- **Opgavetype** Opg. 15: vis ved induktion at $f(n)\ge2^n$ for alle $n\ge3$ når $f(n)=2f(n-1)+n-1$ (basis i $n=3$).
- **Opgavetype** Summer og uligheder: $\sum k^3$, $n!>2^n$.

**Lær:**
- Ingen Jitty. bprp: [A Strong Induction Proof](https://www.youtube.com/watch?v=Cey_kU2UaXE), [Induction: sum of first n cubes](https://www.youtube.com/watch?v=w362XRZy5as), [Proving n! > 2^n by induction](https://www.youtube.com/watch?v=j1PWMoFnN7Q). ★ [Closed forms of common summations](https://www.youtube.com/watch?v=ail5ZT06fik) som støtte.

**Øv:** Dec 2025 opg. 15; [[Courses/Introduction to applied mathematics/Proofs (Brander)/Proofs Part I|Proofs Part I]], [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]], [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]].

**Mastery-checklist 2**
- [ ] Kan jeg udregne et rekursivt led uden indeksfejl?
- [ ] Kan jeg skrive et induktionsbevis med korrekt basis og induktionsskridt, også for ulighed?
- [ ] Kan jeg vælge enkelt eller stærk induktion?

---

## 3. Komplekse tal og polynomier

**Tid:** ca. 6 timer. **Vægt: høj.** Opg. 9 (rektangulær og polær form, kvotient, potens) og MC 3 (rest ved division) er faste; komplekse tal bruges derefter i egenværdier, ODE'er og Fourier.

### 3.1 Komplekse tal

- **Def.** $z=a+bi$, konjugeret $\bar z$, modulus $|z|$ og argument $\arg z$; se [[Reference/Matematik/Talmaengder|Talmængder §5]].
- **Metode** Division: $z_2/z_1=z_2\bar z_1/|z_1|^2$ (opg. 9, $z_1=-2+2i$, $z_2=4+5i$).
- **Metode** Polær form $r(\cos\theta+i\sin\theta)=re^{i\theta}$ og de Moivre: $z^n=r^ne^{in\theta}$ (opg. 9: $z_1^4$ i polær form).
- **Opgavetype** Konvertér mellem rektangulær og polær form; find $n$'te rødder af et komplekst tal.
- **Sætn.** Eulers formel $e^{i\theta}=\cos\theta+i\sin\theta$ (bruges i ODE'er); se [[Reference/Matematik/Trigonometriske identiteter|trigonometriske identiteter]].

**Lær:**
- Ingen Jitty. bprp: [Rectangular to polar form of a complex number](https://www.youtube.com/watch?v=inNKD7-3qFM), [sqrt(i), the polar way](https://www.youtube.com/watch?v=Y7su8b8v0i0). Dr. Trefor Bazett: [The Geometric view of Complex Numbers](https://www.youtube.com/watch?v=HrvEkftPZpw), [Polar Form and nth roots](https://www.youtube.com/watch?v=25x6lsxHVpU). 3Blue1Brown: [e^(iπ) in 3.14 minutes](https://www.youtube.com/watch?v=v0YEaeIClKY).
- Paul's Online Notes: [Complex Numbers](https://tutorial.math.lamar.edu/Classes/Alg/ComplexNumbers.aspx).

**Øv:** Dec 2025 opg. 9; flere regnestykker i [[Courses/Introduction to applied mathematics/Past Exams|Past Exams (Intro to applied math)]].

### 3.2 Polynomier

- **Def.** Polynomium, grad, rod og multiplicitet.
- **Sætn.** Divisionsalgoritmen: $p(z)=q(z)(z-a)+r$; restsætningen $r=p(a)$ og faktorsætningen.
- **Sætn.** Algebraens fundamentalsætning: et polynomium af grad $n$ har $n$ komplekse rødder; reelle polynomier har komplekse rødder i par.
- **Opgavetype** MC 3: rest af $p(Z)=Z^3-2Z^2-Z+7$ ved division med $Z+1$ (rest $=p(-1)=-1-2+1+7=5$, svar 3d).
- **Opgavetype** Faktoriser et polynomium efter at have gættet en rod.

**Lær:**
- Ingen Jitty. The Organic Chemistry Tutor: [Remainder Theorem and Synthetic Division](https://www.youtube.com/watch?v=p1lSRAeEMR0), [Factor Theorem](https://www.youtube.com/watch?v=zAGP46nR6-0), [Fundamental Theorem of Algebra](https://www.youtube.com/watch?v=cAfRgqEOURw). Khan Academy: [Fundamental theorem of algebra](https://www.youtube.com/watch?v=d8-LO6FCna0).
- Paul's: [Dividing Polynomials](https://tutorial.math.lamar.edu/Classes/Alg/DividingPolynomials.aspx), [Zeroes/Roots of Polynomials](https://tutorial.math.lamar.edu/Classes/Alg/ZeroesOfPolynomials.aspx), [Factoring](https://tutorial.math.lamar.edu/Classes/Alg/Factoring.aspx).

**Øv:** Dec 2025 MC 3; karakterpolynomier fra emne 8 og 9 er alle polynomier.

**Mastery-checklist 3**
- [ ] Kan jeg regne kvotient, konjugeret og modulus i rektangulær form og omskrive til polær?
- [ ] Kan jeg bruge de Moivre til potenser og rødder?
- [ ] Kan jeg finde rest og rødder af et polynomium med restsætningen?

---

## 4. Lineære ligningssystemer

**Tid:** ca. 5 timer. **Vægt: høj.** Opg. 10 (generel løsning til 3 ligninger med 4 ubekendte) er en fast opgavetype og grundlag for alt det følgende.

### 4.1 Gauss-elimination og generel løsning

- **Def.** Totalmatrix, rækkeoperationer, trappeform og reduceret trappeform.
- **Metode** Gauss-Jordan: bring til reduceret trappeform, aflæs pivotvariable og frie variable.
- **Sætn.** Et system har ingen, én eller uendelig mange løsninger; antal frie variable $=n-\operatorname{rang}$.
- **Opgavetype** Opg. 10: "Bestem den generelle løsning" til $3x_1+2x_2+x_3=0$, $2x_1+x_2+x_4=0$, $x_3-x_4=1$ (løsning = partikulær løsning + $t\cdot$ retningsvektor).
- **Opgavetype** Afgør om systemet er konsistent og hvor mange parametre løsningen har.

**Lær:**
- Ingen Jitty. Dr. Trefor Bazett: [The Gaussian Algorithm Visualized](https://www.youtube.com/watch?v=vhm1bPMAgyU), [Row Echelon Form and RREF](https://www.youtube.com/watch?v=W01H0LcVUdQ). The Organic Chemistry Tutor: [Gauss-Jordan Elimination](https://www.youtube.com/watch?v=eYSASx8_nyg). RGB mathematics: [Linear systems with free variables](https://www.youtube.com/watch?v=CF5MIQbhuNI). MIT OCW 18.06SC: [kursusside](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) (problem sets med løsninger).

**Øv:** Dec 2025 opg. 10; MIT 18.06SC problem sets (elimination).

**Mastery-checklist 4**
- [ ] Kan jeg rækkereducere til reduceret trappeform uden regnefejl?
- [ ] Kan jeg skrive den generelle løsning med frie parametre?
- [ ] Kan jeg afgøre om systemet er konsistent og antal løsninger?

---

## 5. Vektorrum: span, basis, dimension

**Tid:** ca. 6 timer. **Vægt: høj.** Opg. 12 (basis for et span, ligger $x$ i spannet) og alt om lineære afbildninger kræver sproget her. **Vault:** [[Reference/Formelsamling/Vektorer|Vektorer]] (kun 2D/3D-geometri; faget kræver abstrakte vektorrum).

### 5.1 Lineær uafhængighed og span

- **Def.** Vektorrum over $\mathbb R$ eller $\mathbb C$; underrum.
- **Def.** Linearkombination, span, lineær uafhængighed.
- **Metode** Afgør uafhængighed/span ved rækkereduktion af matricen med vektorerne som søjler.
- **Opgavetype** Opg. 12b: ligger $x=(2,1,4,3)^T$ i $\operatorname{span}(u,v,w)$? (løs $[u\,v\,w\mid x]$).

**Lær:**
- Ingen Jitty. 3Blue1Brown: [Linear combinations, span, and basis vectors](https://www.youtube.com/watch?v=k7RM-ot2NWY). Dr. Trefor Bazett: [Introducing Linear Combinations & Span](https://www.youtube.com/watch?v=WJlQzgS_itI), [Linear Dependence and Independence](https://www.youtube.com/watch?v=Bn547nOfs3w), [The Vector Space of Polynomials: Span, Independence, Basis](https://www.youtube.com/watch?v=SzZaQnzstfE).

**Øv:** Dec 2025 opg. 12b.

### 5.2 Basis og dimension

- **Def.** Basis (uafhængig og udspænder); dimension; ordnet basis og koordinater.
- **Sætn.** Alle baser har samme antal vektorer; udtynd et frembringersystem til en basis.
- **Metode** Find en basis for $\operatorname{span}$ ved at tage pivotsøjlerne i den oprindelige matrix.
- **Opgavetype** Opg. 12a: "Find en ordnet basis for $\operatorname{span}_{\mathbb R}(u,v,w)$".
- **Metode** Polynomier $P_n$ med basis $(1,Z,\dots,Z^n)$ er et vektorrum (bruges i MC 8).

**Lær:**
- Dr. Trefor Bazett: [The Vector Space of Polynomials](https://www.youtube.com/watch?v=SzZaQnzstfE). MIT OCW: [Independence, Basis, and Dimension](https://www.youtube.com/watch?v=eeMJg4uI7o0).

**Øv:** Dec 2025 opg. 12a.

**Mastery-checklist 5**
- [ ] Kan jeg afgøre om vektorer er lineært uafhængige?
- [ ] Kan jeg finde en basis for et span og angive dimensionen?
- [ ] Kan jeg afgøre om en vektor ligger i et givet span?

---

## 6. Lineære afbildninger, matricer og basisskift

**Tid:** ca. 8 timer. **Vægt: høj.** MC 8 (afbildningsmatrix for polynomier) og opg. 14 (basisskiftematricer og $_\varepsilon[L]_\varepsilon$) er det sværeste notationsmæssigt, men mekanisk når formlerne sidder.

### 6.1 Lineære afbildninger og deres matricer

- **Def.** Lineær afbildning $L:V\to W$; kerne og billede.
- **Sætn.** Dimensionssætningen: $\dim V=\dim\ker L+\dim\operatorname{im}L$.
- **Metode** Afbildningsmatrix $_\gamma[L]_\beta$: søjle $j$ er $L(\beta_j)$ udtrykt i $\gamma$.
- **Opgavetype** MC 8: kend $_\gamma[L]_\beta$ for $L:P_2\to P_1$; find $L(1+Z+Z^2)$ ved at gange matricen på koordinatvektoren $(1,1,1)^T$.
- **Opgavetype** Find kerne og billede af en matrix.

**Lær:**
- Ingen Jitty. 3Blue1Brown: [Linear transformations and matrices](https://www.youtube.com/watch?v=kYB8IZa5AuE), [Matrix multiplication as composition](https://www.youtube.com/watch?v=XkY2DOUCWMU), [Inverse matrices, column space and null space](https://www.youtube.com/watch?v=uQhTuRlWMxw). Dr. Trefor Bazett: [The Dimension Theorem (rank-nullity)](https://www.youtube.com/watch?v=vpl8EZwrqPk), [Null Space & Column Space](https://www.youtube.com/watch?v=YQRioQ1XUck). Khan Academy: [Transformation matrix with respect to a basis](https://www.youtube.com/watch?v=PiuhTj0zCf4).

**Øv:** Dec 2025 MC 8.

### 6.2 Basisskift

- **Def.** Basisskiftematrix $_\gamma[\mathrm{id}]_\beta$ og dens invers $_\beta[\mathrm{id}]_\gamma$.
- **Sætn.** $_\gamma[L]_\gamma={}_\gamma[\mathrm{id}]_\beta\,{}_\beta[L]_\beta\,{}_\beta[\mathrm{id}]_\gamma$.
- **Metode** Med $\beta=(b_1,b_2,b_3)$ i standardkoordinater er $_\varepsilon[\mathrm{id}]_\beta=[b_1\,b_2\,b_3]$; inverter for den anden.
- **Opgavetype** Opg. 14: find $_\varepsilon[\mathrm{id}]_\beta$, $_\beta[\mathrm{id}]_\varepsilon$ og $_\varepsilon[L]_\varepsilon$ når $_\beta[L]_\beta=\operatorname{diag}$-agtig matrix er givet.

**Lær:**
- 3Blue1Brown: [Change of basis](https://www.youtube.com/watch?v=P2LTAUO1TdA). Professor Dave Explains: [Change of Basis](https://www.youtube.com/watch?v=HZa1RwFHgwU). Khan Academy: [Transformation matrix with respect to a basis](https://www.youtube.com/watch?v=PiuhTj0zCf4).

**Øv:** Dec 2025 opg. 14.

**Mastery-checklist 6**
- [ ] Kan jeg opstille afbildningsmatricen og bruge den på en vektor?
- [ ] Kan jeg beregne basisskiftematricer og transformere en afbildningsmatrix?
- [ ] Kan jeg finde kerne, billede og bruge dimensionssætningen?

---

## 7. Determinanter

**Tid:** ca. 3 timer. **Vægt: middel.** MC 1 (determinant af 3x3) er hurtige point; determinanten bruges også i karakterpolynomiet. **Vault:** [[Courses/Matematik 1A/Begreber|Begreber]] (Determinant).

### 7.1 Beregning og egenskaber

- **Def.** Determinant som signeret volumen/skalering; $\det A=0$ præcis når $A$ er singulær.
- **Metode** Kofaktorudvikling (Laplace) og Sarrus for 3x3; rækkeoperationer ændrer determinanten på kendte måder.
- **Sætn.** $\det(AB)=\det A\det B$ og $A$ invertibel $\iff\det A\neq0$.
- **Opgavetype** MC 1: beregn $\det\begin{pmatrix}0&1&2\\-1&4&1\\1&1&2\end{pmatrix}$ (udvikl efter første række).

**Lær:**
- Ingen Jitty. 3Blue1Brown: [The determinant](https://www.youtube.com/watch?v=Ip3X9LOh2dk). Dr. Trefor Bazett: [Using determinants to compute eigenvalues & eigenvectors](https://www.youtube.com/watch?v=LsZ-nNy0ZRs).

**Øv:** Dec 2025 MC 1; regn 5 vilkårlige 3x3-determinanter i hånden.

**Mastery-checklist 7**
- [ ] Kan jeg beregne en 3x3-determinant sikkert på under 2 minutter?
- [ ] Kan jeg bruge $\det\neq0$ til at afgøre invertibilitet?

---

## 8. Egenværdier og diagonalisering

**Tid:** ca. 6 timer. **Vægt: høj.** MC 5 (egenvektor til $\lambda=i$ for en reel matrix), opg. 13 (find $D$ og $Q$) og hele ODE-systemdelen bygger på det.

### 8.1 Egenværdier og egenvektorer

- **Def.** $Av=\lambda v$, $v\neq0$; egenrum.
- **Metode** Karakterligning $\det(A-\lambda I)=0$; egenvektorer fra $\ker(A-\lambda I)$.
- **Metode** Komplekse egenværdier: egenvektorer i $\mathbb C^n$; konjugeret par for reelle matricer.
- **Opgavetype** MC 5: $A=\begin{pmatrix}3&-2\\5&-3\end{pmatrix}$, $\lambda=i$; find en egenvektor (løs $(A-iI)v=0$).

**Lær:**
- Ingen Jitty. 3Blue1Brown: [Eigenvectors and eigenvalues](https://www.youtube.com/watch?v=PFDu9oVAE-g). Dr. Trefor Bazett: [What eigenvalues and eigenvectors mean geometrically](https://www.youtube.com/watch?v=4wTHFmZPhT0), [COMPLEX Eigenvalues, Eigenvectors & Diagonalization (full example)](https://www.youtube.com/watch?v=FOoi8h47Tw4). Steve Brunton: [Eigenvalues and Eigenvectors](https://www.youtube.com/watch?v=ZSGrJBS_qtc).

**Øv:** Dec 2025 MC 5.

### 8.2 Diagonalisering

- **Def.** $A$ diagonaliserbar $\iff$ der er en basis af egenvektorer; $D=Q^{-1}AQ$ med egenvektorer som søjler i $Q$.
- **Sætn.** $n$ forskellige egenværdier giver diagonaliserbarhed; geometrisk = algebraisk multiplicitet er kriteriet.
- **Metode** Potenser $A^k=QD^kQ^{-1}$.
- **Opgavetype** Opg. 13: find diagonalmatrix $D$ og invertibel $Q$ så $D=Q^{-1}AQ$.

**Lær:**
- Dr. Trefor Bazett: [Full Example: Diagonalizing a Matrix](https://www.youtube.com/watch?v=ieWyx2mlZyk), [How the Diagonalization Process Works](https://www.youtube.com/watch?v=nNwZA1X-C3c), [Visualizing Diagonalization & Eigenbases](https://www.youtube.com/watch?v=EJG6gBeVdfw), [Compute large powers via diagonalization](https://www.youtube.com/watch?v=Z8KBxf4C8kk). MIT OCW: [Diagonalizing a Matrix](https://www.youtube.com/watch?v=U8R54zOTVLw).

**Øv:** Dec 2025 opg. 13.

**Mastery-checklist 8**
- [ ] Kan jeg finde egenværdier og egenvektorer for 2x2 og 3x3, også komplekse?
- [ ] Kan jeg diagonalisere og kontrollere $D=Q^{-1}AQ$?
- [ ] Kan jeg afgøre om en matrix er diagonaliserbar?

---

## 9. Differentialligninger: 2. orden og systemer

**Tid:** ca. 7 timer. **Vægt: høj.** MC 2 (løsning til $3f''-6f'+15f=0$) og MC 6 (system $\mathbf f'=A\mathbf f$ med begyndelsesværdi) er to af otte MC-opgaver. Bruger komplekse tal (emne 3) og egenværdier (emne 8). Dybere behandling i [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map: Differentialligninger og uendelige rækker]], emne 1 og 3. Formler: [[Reference/Formelsamling/Differentialligninger|Differentialligninger]].

### 9.1 Homogene 2. ordens ODE'er med konstante koefficienter

- **Def.** $af''+bf'+cf=0$; karakterligning $a\lambda^2+b\lambda+c=0$.
- **Metode** Rødder $\lambda_{1,2}$: forskellige reelle $\to c_1e^{\lambda_1t}+c_2e^{\lambda_2t}$; dobbelt $\to (c_1+c_2t)e^{\lambda t}$; komplekse $\alpha\pm i\beta\to e^{\alpha t}(c_1\cos\beta t+c_2\sin\beta t)$.
- **Opgavetype** MC 2: karakterligning $3\lambda^2-6\lambda+15=0\Rightarrow\lambda=1\pm2i$; løsning $e^t\cos2t$ (2b).
- **Opgavetype** Verificér en given funktion ved at indsætte den i ligningen.

**Lær:**
- ★ [Intro to Homogeneous Constant Coefficient DEs](https://www.youtube.com/watch?v=iYr-AFstbeo), ★ [Repeated Roots](https://www.youtube.com/watch?v=tParkLxuLmo), ★ [What Even is the Solution to a DE?](https://www.youtube.com/watch?v=HS77_niA_Q4). bprp: [Auxiliary equations with complex roots](https://www.youtube.com/watch?v=u-eQaef1EWw). Dr. Trefor Bazett: [Real/Repeated/Complex pair](https://www.youtube.com/watch?v=r8Uk4tbuxVE).
- Paul's: [Complex Roots](https://tutorial.math.lamar.edu/Classes/DE/ComplexRoots.aspx).

**Øv:** Dec 2025 MC 2; [[Self-Tests/Differential Equations Test|Differential Equations Test]].

### 9.2 Systemer $\mathbf f'=A\mathbf f$

- **Metode** Egenværdimetoden: $\mathbf f(t)=\sum c_ie^{\lambda_it}v_i$; $c_i$ fra begyndelsesværdien (opg. via $Qc=\mathbf f(0)$).
- **Metode** Øvre trekantsmatrix: egenværdier ligger på diagonalen (MC 6: $A=\begin{pmatrix}-1&2\\0&-2\end{pmatrix}$, egenværdier $-1,-2$).
- **Opgavetype** MC 6: find løsningen med $\mathbf f(0)=(3,4)^T$ ved at vælge mellem syv kandidater (indsæt $t=0$ og tjek ODE'en).
- **Metode** Eliminér kandidater: løsningen skal have rette begyndelsesværdi og rette eksponenter.

**Lær:**
- Ingen Jitty. Dr. Trefor Bazett: [Systems of DEs, Part 1: Eigenvalue Method](https://www.youtube.com/watch?v=aTMNQtzU0rU). MIT OCW 18.03SC: [Linear Systems: Matrix Methods](https://www.youtube.com/watch?v=YUjdyKhWt6E). 3Blue1Brown: [How (and why) to raise e to the power of a matrix](https://www.youtube.com/watch?v=O85OWBJ2ayo) (til dem der vil have eksponentialmatrix).
- Paul's: [Real Eigenvalues](https://tutorial.math.lamar.edu/Classes/DE/RealEigenvalues.aspx), [Complex Eigenvalues](https://tutorial.math.lamar.edu/Classes/DE/ComplexEigenvalues.aspx).

**Øv:** Dec 2025 MC 6; ekstra systemopgaver i 01025-bogen (Christensen opg. 401, 408, 413, 414, 421).

**Mastery-checklist 9**
- [ ] Kan jeg løse en 2. ordens homogen ODE for alle tre rodtyper og kontrollere en løsning?
- [ ] Kan jeg løse $\mathbf f'=A\mathbf f$ med begyndelsesværdi via egenværdier?
- [ ] Kan jeg hurtigt vælge det rette svar blandt MC-kandidater ved at indsætte?

---

## Eksamenstræning og tjek

- Tag Dec 2025-sættet under tid (4 timer, skriftlige hjælpemidler). Der er ingen andre Mat 1A-sæt i Downloads; brug `Downloads\Aflevering 1 mat 1a.pdf` og ODE-delen i de gamle 01025-sæt (`Materiale til 01025 ...`) som ekstra. Spørg kursets Absalon/DTU Learn om flere gamle sæt.
- Selv-test: [[Self-Tests/Matematik 1A Test|Matematik 1A Test]], [[Flashcards/Flashcards|Flashcards]], [[Formelsamling/Formelsamling|Formelsamling]], [[Glossary]].
- Lektioner (tomme skabeloner): [[Courses/Matematik 1A/Lektioner/index|Alle lektioner]].
- Ikke set på Dec 2025-sættet men nævnt i vaulten: skalar-/krydsprodukt ([[Reference/Formelsamling/Vektorer|Vektorer]]), differentiation ([[Reference/Formelsamling/Differentialregning|Differentialregning]]) og integration ([[Reference/Formelsamling/Integralregning|Integralregning]]). Behandl dem som opfriskning, ikke som hovedemner, indtil du har set dit holds læseplan.

## Links

- [[Matematik 1A]]
- [[Courses/Matematik 1A/Pensum|Pensum]]
- [[Courses/Matematik 1A/Begreber|Begreber]]
- [[Study-Roadmap|Studieoversigt]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map: Differentialligninger og uendelige rækker]]
- [[Courses/Introduction to Numerical Algorithms/Speedrun Map|Speedrun Map: Numeriske algoritmer]]
