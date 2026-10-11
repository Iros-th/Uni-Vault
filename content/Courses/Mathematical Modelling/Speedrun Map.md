---
publish: true
title: Speedrun Map (Mathematical Modelling)
course: Mathematical Modelling
type: speedrun-map
tags:
  - mathematical-modelling
  - speedrun
  - studieplan
---

# Speedrun Map: Mathematical Modelling

Hurtigste vej gennem faget: det der bærer mest først, med timer, eksamensvægt og hvor du lærer det bedst. Se [[Mathematical Modelling|kursusforsiden]].

> **Pensum-hul (vigtigt):** [[Courses/Mathematical Modelling/Pensum|Pensum]] og alle 13 [[Courses/Mathematical Modelling/Lektioner/index|lektionsskabeloner]] er tomme, og kursusforsiden siger "still filling this in". Den eneste egentlige kilde er [[Courses/Mathematical Modelling/Begreber|Begreber]], der nævner: model, antagelse, variabel og parameter, dimensionsanalyse, differentialligningsmodeller, diskrete modeller, optimeringsmodeller, validering og sensitivitetsanalyse. Rækkefølgen og underemnerne nedenfor følger de begreber, plus standardstof for sådan et kursus. Intet er bekræftet pensum, så tjek kursusbasen og skift timer og vægt ud når du har den. Eksamensvægt er mit skøn ud fra hvor meget hvert emne fylder i Begreber.

**Forklaring:** ★ = Jitty, YouTube-kanalen [Computer Engineering Jitty](https://www.youtube.com/@compengineerjitty) (først-valg). Jitty har ingen modelleringskursus-videoer, men har en god differentialligningsserie som jeg bruger. Alle links er fundet og tjekket; hvor jeg ikke fandt en god video står det.

## Overblik

| # | Emne | Timer | Eksamensvægt |
|---|------|-------|--------------|
| 1 | Modelleringsprocessen | 3 | høj |
| 2 | Enheder og dimensionsanalyse | 3 | middel til høj |
| 3 | Differentialligningsmodeller | 8 | høj |
| 4 | Diskrete modeller | 4 | middel til høj |
| 5 | Optimeringsmodeller | 5 | middel |
| 6 | Datafit og validering | 4 | middel |
| 7 | Sensitivitetsanalyse | 2 | middel |
| | **Samlet** | **29** | |

---

## 1. Modelleringsprocessen (ca. 3 t, vægt: høj)

*Hvorfor høj:* Første sektion i [[Courses/Mathematical Modelling/Begreber|Begreber]] ("Building a model") er hele fagets sprog; alle senere emner er værktøjer til denne proces.

### 1.1 Hvad er en model (ca. 1 t)
- **Model:** forenklet matematisk beskrivelse af en situation, lavet for at besvare ét konkret spørgsmål.
- **Antagelse:** bevidst forenkling; gode modeller siger deres antagelser højt.
- **Variabel og parameter:** variable ændrer sig i modellen, parametre er faste tal der tuner den.

**Lær det her:** [Jason Bramburger: Welcome, Math Modelling](https://www.youtube.com/watch?v=22E2hkNWxbs) · ★ Jitty: ingen modelleringsvideo fundet.
**Øv:** beskriv en kaffekop der køler af: spørgsmål, antagelser, variable, parametre (5 linjer).

### 1.2 De fem trin (ca. 2 t)
- **Trin:** formulér spørgsmål, opstil model, løs, fortolk, valider/forbedr.
- **Typisk opgave:** få en tekstopgave og skriv trin 1 og 2 (spørgsmål og antagelser) før du regner.
- **Iteration:** en fejlslagen validering sender dig tilbage til antagelserne.

**Lær det her:** [Jason Bramburger: The Five Step Method, Lecture 1](https://www.youtube.com/watch?v=zw9Y4t-Nh3E)
**Øv:** vælg 3 hverdagsproblemer og skriv spørgsmål og antagelser; vælg den du kan løse.

### Mastery checklist: modelleringsprocessen
- [ ] Jeg kan nævne de fem trin og et eksempel på hvert.
- [ ] Jeg kan skelne variabel fra parameter i en given model.
- [ ] Jeg skriver altid antagelserne ud før løsningen.

---

## 2. Enheder og dimensionsanalyse (ca. 3 t, vægt: middel til høj)

*Hvorfor middel til høj:* "Dimensional analysis" er et af de fire begreber under "Building a model" i [[Courses/Mathematical Modelling/Begreber|Begreber]], og det er hurtigt at tage point på.

### 2.1 Enhedstjek som fejlsøgning (ca. 1 t)
- **Regel:** begge sider af en ligning har samme enhed; man lægger ikke meter og sekunder sammen.
- **Typisk opgave:** find ud af hvilken enhed en parameter har ud fra modellen.
- **Test:** hurtigt sanity-check af en formel du ikke stoler på.

**Lær det her:** [Jason Bramburger: Units and Nondimensionalization, Lecture 2](https://www.youtube.com/watch?v=VrVhaulePjE)
**Øv:** find enheden på $k$ i $\frac{dT}{dt}=-k(T-T_{\text{rum}})$.

### 2.2 Dimensionsløse variable og skalering (ca. 2 t)
- **Idé:** skalér variable så ligningen får færre parametre.
- **Buckingham Pi:** antal dimensionsløse grupper $=$ antal variable minus antal grundenheder.
- **Typisk opgave:** gør en logistisk ligning dimensionsløs.

**Lær det her:** [Albert Hung: Buckingham Pi Dimensional Analysis](https://www.youtube.com/watch?v=eRzyXg5tWzY) · [Jason Bramburger: Units and Nondimensionalization](https://www.youtube.com/watch?v=VrVhaulePjE)
**Øv:** nondimensionalisér $y'=ry(1-y/K)$ til $u'=u(1-u)$.

### Mastery checklist: dimensionsanalyse
- [ ] Jeg kan tjekke enheder i en ligning og finde parametres enheder.
- [ ] Jeg kan gøre en simpel ODE dimensionsløs.

---

## 3. Differentialligningsmodeller (ca. 8 t, vægt: høj)

*Hvorfor høj:* "Differential equation model" er første punkt under "Common model types" i [[Courses/Mathematical Modelling/Begreber|Begreber]], og de fleste klassiske modeller (vækst, epidemi, rovdyr-bytte) er ODE'er. Støtteværktøjer: [[Reference/Formelsamling/Differentialligninger|Formelsamling: Differentialligninger]], [[Reference/Formelsamling/Differentialregning|Differentialregning]].

### 3.1 Vækst og henfald (ca. 1,5 t)
- **Eksponentiel vækst:** $y'=ky$, løsning $y=y_0e^{kt}$.
- **Logistisk vækst:** $y'=ry(1-y/K)$ med bærekapacitet $K$.
- **Typisk opgave:** opstil og løs en vækst- eller afkølingsmodel ud fra tekst.

**Lær det her:** [★ Jitty: Intro to Differential Equations, ODE vs. PDE, Linear vs. Non-Linear, Order](https://www.youtube.com/watch?v=MjLPJhOyBGU) · [★ Jitty: What Even is the Solution to a Differential Equation?](https://www.youtube.com/watch?v=HS77_niA_Q4) · [blackpenredpen: Logistic Differential Equation](https://www.youtube.com/watch?v=TuQnl4RMnDk) · [Dr. Trefor Bazett: The Logistic Growth Differential Equation](https://www.youtube.com/watch?v=aP4YXOo-Uko)
**Øv:** model en population med $K=1000$ og find hvornår den når 500.

### 3.2 Løsningsmetoder: separable og lineære 1. ordens (ca. 2 t)
- **Separable:** $y'=f(x)g(y)$, skil og integrér.
- **Lineære 1. orden:** integrerende faktor.
- **Startbetingelse** fastlægger konstanten.

**Lær det her:** [★ Jitty: Introduction to Separable Differential Equations](https://www.youtube.com/watch?v=O_fexkwNOU8) · [★ Jitty: Integrating Factor Technique](https://www.youtube.com/watch?v=33u1lnIcabM) · [★ Jitty: Introduction to Initial Conditions](https://www.youtube.com/watch?v=RDDeaivON7E) · [Paul's Online Notes: Separable Equations](https://tutorial.math.lamar.edu/Classes/DE/Separable.aspx) · [Paul's Online Notes: Linear Equations](https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx) · [Paul's Online Notes: Modeling with First Order DEs](https://tutorial.math.lamar.edu/Classes/DE/Modeling.aspx)
**Øv:** 3 separable og 3 lineære med startværdi.

### 3.3 Retningsfelter, ligevægte og stabilitet (ca. 1,5 t)
- **Retningsfelt:** tegn hældningen i hvert punkt for at se løsningen kvalitativt.
- **Ligevægt:** $y'=0$; stabil eller ustabil efter fortegn af $y'$ omkring den.
- **Typisk opgave:** find ligevægte for en autonom ligning og afgør stabilitet uden at løse den.

**Lær det her:** [★ Jitty: Introduction to Slope/Direction Fields](https://www.youtube.com/watch?v=Zd--UbuU1ok) · [Dr. Trefor Bazett: Autonomous Equations, Equilibrium Solutions, and Stability](https://www.youtube.com/watch?v=pZOmToxx-R8) · [Paul's Online Notes: Equilibrium Solutions](https://tutorial.math.lamar.edu/Classes/DE/EquilibriumSolutions.aspx)
**Øv:** find og klassificér ligevægtene for $y'=y(1-y)(y-2)$.

### 3.4 Systemer: epidemi og rovdyr-bytte (ca. 2 t)
- **SIR-modellen:** $S'=-\beta SI,\ I'=\beta SI-\gamma I,\ R'=\gamma I$; basis-reproduktionstallet $R_0=\beta/\gamma$.
- **Lotka-Volterra:** to koblede ligninger der giver svingninger.
- **Typisk opgave:** opstil et system ud fra en tekst og find ligevægtene.

**Lær det her:** [Dr. Trefor Bazett: The MATH of Pandemics, Intro to the SIR Model](https://www.youtube.com/watch?v=Qrp40ck3WpI) · [Mike Saint-Antoine: Predator-Prey Model (Lotka-Volterra)](https://www.youtube.com/watch?v=Tc05IbqTsFM) · [3Blue1Brown: Differential equations, a tourist's guide](https://www.youtube.com/watch?v=p_di4Zn4wz4) · [Jason Bramburger: Modelling Romeo and Juliet](https://www.youtube.com/watch?v=aQXLFXA-twI)
**Øv:** find ligevægtene for et rovdyr-bytte-system og skitsér faseplanen.

### 3.5 Numerisk løsning: Eulers metode (ca. 1 t)
- **Metode:** $y_{n+1}=y_n+h\,f(t_n,y_n)$.
- **Fejl:** mindre skridt $h$ giver mindre fejl; sammenlign med eksakt løsning.

**Lær det her:** [blackpenredpen: Euler's Method](https://www.youtube.com/watch?v=Pm_JWX6DI1I) · [Khan Academy: Euler's method](https://www.youtube.com/watch?v=q87L9R9v274) · [Paul's Online Notes: Euler's Method](https://tutorial.math.lamar.edu/Classes/DE/EulersMethod.aspx)
**Øv:** kør 5 skridt i hånden og skriv en Python-løkke (se [[Courses/Programming/05 Løkker|Løkker]]).

### Mastery checklist: differentialligningsmodeller
- [ ] Jeg kan opstille en ODE ud fra en tekstbeskrivelse.
- [ ] Jeg kan løse separable og lineære 1. ordens ligninger med startbetingelse.
- [ ] Jeg kan finde ligevægte og afgøre stabilitet uden at løse ligningen.
- [ ] Jeg kan opstille SIR og Lotka-Volterra og forklare hvert led.
- [ ] Jeg kan lave Eulers metode i hånden og i Python.

---

## 4. Diskrete modeller (ca. 4 t, vægt: middel til høj)

*Hvorfor middel til høj:* "Discrete model" (trin for trin, fx generationer) er andet punkt under "Common model types" i [[Courses/Mathematical Modelling/Begreber|Begreber]].

### 4.1 Differensligninger (ca. 2 t)
- **Rekursion:** $x_{n+1}=f(x_n)$, fx $x_{n+1}=rx_n$ eller den diskrete logistiske model.
- **Lukket formel** for lineære: $x_n=x_0r^n$.
- **Typisk opgave:** opstil og iterér en generationsmodel.

**Lær det her:** [Jason Bramburger: Discrete-Time Dynamical Systems, Lecture 13](https://www.youtube.com/watch?v=wnYe8KK4qJg) · [Duane Nykamp: Exponential growth and decay in discrete dynamical systems](https://www.youtube.com/watch?v=rbvTlXW_4-g) · [★ Jitty: Python Part 18, Recursion](https://www.youtube.com/watch?v=XEhNGKCbnFg) (til at kode iterationen)
**Øv:** iterér $x_{n+1}=1{,}1x_n-20$ og se hvornår den vender.

### 4.2 Faste punkter og stabilitet (ca. 2 t)
- **Fast punkt:** $x^*=f(x^*)$; stabilt hvis $|f'(x^*)|<1$.
- **Cobweb-diagram** til at se konvergens.
- **Sammenhæng til ODE:** diskret vs. kontinuert model af samme fænomen.

**Lær det her:** [Jason Bramburger: Analysis of Discrete-Time Dynamical Systems, Lecture 19](https://www.youtube.com/watch?v=6It02qpjHQ8) · [Mike, the Mathematician: Discrete Dynamical Systems](https://www.youtube.com/watch?v=9T3NeytFmy4)
**Øv:** find og klassificér faste punkter for $x_{n+1}=rx_n(1-x_n)$ for $r=2$ og $r=3{,}5$.

### Mastery checklist: diskrete modeller
- [ ] Jeg kan opstille en differensligning ud fra tekst.
- [ ] Jeg kan finde faste punkter og vurdere stabilitet.
- [ ] Jeg kan forklare forskellen på diskret og kontinuert model.

---

## 5. Optimeringsmodeller (ca. 5 t, vægt: middel)

*Hvorfor middel:* "Optimisation model" er det tredje modeltype i [[Courses/Mathematical Modelling/Begreber|Begreber]]; omfanget kendes ikke.

### 5.1 Optimering med ét og flere variable (ca. 2 t)
- **Målfunktion og bibetingelse:** opstil hvad der maksimeres og hvilke grænser der gælder.
- **Kritiske punkter:** $f'=0$ og tjek af min/max.
- **Typisk opgave:** maksimér areal eller profit under en betingelse.

**Lær det her:** [Paul's Online Notes: Optimization](https://tutorial.math.lamar.edu/Classes/CalcI/Optimization.aspx) · [Jason Bramburger: Optimization and Sensitivity Analysis, Lecture 3](https://www.youtube.com/watch?v=BR_vjTEP14M)
**Øv:** 3 klassiske optimeringsopgaver (indhegning, dåse, profit).

### 5.2 Lagrange-multiplikatorer (ca. 1,5 t)
- **Idé:** $\nabla f=\lambda\nabla g$ ved optimum på bibetingelsen $g=c$.
- **Skyggepris:** $\lambda$ fortæller hvor meget optimum ændrer sig når grænsen ændres.

**Lær det her:** [Dr. Trefor Bazett: Lagrange Multipliers, Geometric Meaning & Full Example](https://www.youtube.com/watch?v=8mjcnxGMwFo) · [Jason Bramburger: Lagrange Multipliers, Lecture 6](https://www.youtube.com/watch?v=bRTZARYISII) · [Jason Bramburger: Constrained Modelling and Shadow Pricing, Lecture 7](https://www.youtube.com/watch?v=SY6NvKj0fRM) · [Paul's Online Notes: Lagrange Multipliers](https://tutorial.math.lamar.edu/Classes/CalcIII/LagrangeMultipliers.aspx)
**Øv:** maksimér $xy$ under $x+2y=10$.

### 5.3 Lineær programmering (ca. 1,5 t)
- **Model, grafisk løsning og simplex-ideen** som i Applied mathematics emne 5.

**Lær det her:** [The Organic Chemistry Tutor: Linear Programming](https://www.youtube.com/watch?v=Bzzqx1F23a8) · [StatQuest: Linear Programming and the Simplex Algorithm](https://www.youtube.com/watch?v=h5o1n1QMcmM)
**Øv:** opstil og løs en produktionsmix-opgave grafisk.

### Mastery checklist: optimering
- [ ] Jeg kan opstille målfunktion og bibetingelse ud fra tekst.
- [ ] Jeg kan løse med kritiske punkter og med Lagrange.
- [ ] Jeg kan forklare hvad $\lambda$ betyder.

---

## 6. Datafit og validering (ca. 4 t, vægt: middel)

*Hvorfor middel:* "Validation" er et af to punkter under "Trusting a model" i [[Courses/Mathematical Modelling/Begreber|Begreber]].

### 6.1 Mindste kvadraters metode (ca. 2 t)
- **Idé:** vælg parametre der minimerer summen af kvadrerede residualer.
- **Lineær og ikke-lineær tilpasning;** transformér data hvis modellen er eksponentiel.

**Lær det her:** [StatQuest: The Main Ideas of Fitting a Line to Data](https://www.youtube.com/watch?v=PaFPbb66DxQ) · [Khan Academy: Introduction to residuals and least squares regression](https://www.youtube.com/watch?v=yMgFHbjbAW8) · [Jason Bramburger: Fitting Data to Linear Models, Lecture 21](https://www.youtube.com/watch?v=JlDCfTGkJZc) · [Jason Bramburger: Fitting Nonlinear Models with LASSO Regression, Lecture 22](https://www.youtube.com/watch?v=IglP4Zjhefw)
**Øv:** tilpas $y=ae^{bx}$ til data ved at tage logaritmen.

### 6.2 Validering og overfitting (ca. 2 t)
- **Validering:** sammenlign modellen med data den ikke blev tilpasset på.
- **Residualplot:** mønstre i residualer afslører en forkert model.
- **Overfitting:** for mange parametre rammer støjen, ikke fænomenet.

**Lær det her:** [IBM Technology: Overfitting, Underfitting, and Bad Data](https://www.youtube.com/watch?v=0RT2Q0qwXSA)
**Øv:** opdel data i træning og test, tilpas grad 1 og 5, sammenlign fejl.

### Mastery checklist: datafit og validering
- [ ] Jeg kan tilpasse en model til data og udregne residualer.
- [ ] Jeg kan forklare hvordan jeg validerer og hvad overfitting er.

---

## 7. Sensitivitetsanalyse (ca. 2 t, vægt: middel)

*Hvorfor middel:* næste punkt under "Trusting a model" i [[Courses/Mathematical Modelling/Begreber|Begreber]].

### 7.1 Parameterfølsomhed (ca. 2 t)
- **Idé:** ryst en parameter lidt og se hvor meget outputtet flytter sig.
- **Relativ følsomhed:** $\frac{\Delta y/y}{\Delta p/p}$.
- **Typisk opgave:** rangér parametre efter betydning og vurdér hvilke der skal måles nøjagtigt.

**Lær det her:** [Razavi Science Lab: Introduction to Sensitivity Analysis](https://www.youtube.com/watch?v=H-XU9BDWjUA) · [Jason Bramburger: Optimization and Sensitivity Analysis, Lecture 3](https://www.youtube.com/watch?v=BR_vjTEP14M)
**Øv:** varier hver parameter i SIR-modellen med 10 procent og rangér effekten på toppen af $I(t)$.

### Mastery checklist: sensitivitet
- [ ] Jeg kan udregne relativ følsomhed for en parameter.
- [ ] Jeg kan fortælle hvilke parametre der betyder mest og hvorfor.

---

## Kørselsplan

1. **Dag 1:** emne 1 og 2.
2. **Dag 2 til 4:** emne 3 (kernen).
3. **Dag 5:** emne 4.
4. **Dag 6:** emne 5.
5. **Dag 7:** emne 6 og 7.
6. **Husk:** bekræft pensum i kursusbasen, og fyld [[Courses/Mathematical Modelling/Pensum|Pensum]] og lektionsnoterne ud så dette kort kan rettes til.

## Links

- [[Mathematical Modelling|Kursusforside]]
- [[Courses/Mathematical Modelling/Begreber|Begreber]]
- [[Reference/Formelsamling/Oversigt|Formelsamling]]
- [[Self-Tests/Mathematical Modelling Test|Selvtest]]
- [[Study-Roadmap]]
