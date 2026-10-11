---
title: Speedrun Map (Statistics)
course: Statistics
type: speedrun-map
publish: true
tags:
  - statistics
  - speedrun
  - mastery-map
  - eksamen
---

# Speedrun Map: Statistics

Hurtigste vej gennem sandsynlighed og statistik: beskriv data, lær sandsynlighedsreglerne og de vigtige fordelinger, og brug dem så til at slutte fra stikprøve til population (konfidensintervaller og test). Alt i inferensdelen hviler på normalfordelingen og den centrale grænseværdisætning, så de er flaskehalsen. [[Statistics]] beskriver faget som "Distributions, tests, and trying not to mix up my p-values".

Hører sammen med [[Courses/Statistics/Begreber|Begreber]], [[Flashcards/Statistics Flashcards|flashcards]] og [[Self-Tests/Statistics Test|selvtesten]].

> [!warning] Pensum er tyndt
> [[Courses/Statistics/Pensum|Pensum]] er en tom skabelon, og alle 13 [[Courses/Statistics/Lektioner/index|lektioner]] er tomme. [[Courses/Statistics/Begreber|Begreber]] nævner kun: middelværdi/median/typetal, varians og spredning, stokastisk variabel, fordeling (normal, binomial), hypotesetest, p-værdi/signifikansniveau og konfidensinterval. Regression, chi-i-anden, ANOVA, estimation/ML og bootstrap er **antaget** (typisk for et DTU-statistikkursus, men uverificeret). Ret når du kender de officielle emner.

**Forklaring:** ★ = Jitty-video (kanalen "Computer Engineering Jitty", engelsk, som jeg har antaget er den Jitty du mener). Alle videolinks er fundet ved søgning; ingen er gættet. Timer er et skøn for en der skal bestå, ikke mestre alt. Eksamensvægt (høj/med/lav) er mit skøn ud fra emnets rolle i faget, ikke fra en officiel eksamensplan.

## Speedrun-rækkefølge

| # | Emne | Timer | Eksamensvægt |
|---|------|-------|--------------|
| 1 | Beskrivende statistik | 3 | med: grundlag og nævnt i Begreber; sjældent hel opgave men bruges overalt |
| 2 | Sandsynlighedsregning | 5 | høj: grundlaget for alle fordelinger; ofte en opgave med regler og Bayes |
| 3 | Stokastiske variable og forventning | 4 | høj: definitionerne bruges i alle senere emner; typisk beregningsopgave |
| 4 | Binomial- og Poisson-fordelingen | 4 | høj: binomial er nævnt i Begreber; klassisk eksamensopgave |
| 5 | Normalfordelingen | 4 | høj: nævnt i Begreber og bruges i al inferens |
| 6 | Stikprøvefordeling og CLT | 3 | høj: forudsætning for konfidensintervaller og test; teoriopgave ofte |
| 7 | Konfidensintervaller | 3 | høj: nævnt i Begreber; næsten sikker opgave |
| 8 | Hypotesetest | 7 | høj: nævnt i Begreber (hypotesetest, p-værdi, signifikans); kerneopgave |
| 9 | Regression og korrelation | 4 | høj: antaget pensum; meget almindeligt i et statistikkursus |
| 10 | Chi-i-anden og ANOVA | 3 | med: antaget pensum; ofte én afsluttende test |
| 11 | Estimation, likelihood og bootstrap (antaget) | 3 | lav: avanceret; kun hvis kurset går ud over det grundlæggende |

**Samlet skøn: ca. 43 timer.** Hvis tiden er knap: tag alle emner med vægt *høj* først, og spring dem med *lav* over til sidst.

## Lærebog
Kursets egen bog er ikke angivet i vaulten. Jeg bruger gratis [OpenStax Introductory Statistics 2e](https://openstax.org/books/introductory-statistics-2e/pages/2-introduction) som reference; kapitelnumre er derfra. Tjek mod din faktiske bog; DTU-kurser bruger ofte en anden bog med samme rækkefølge.

Supplement: [Khan Academy Statistics and Probability](https://www.khanacademy.org/math/statistics-probability), [MIT OCW 18.05](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/), [LibreTexts Statistics](https://stats.libretexts.org). Jitty har ingen statistikvideoer jeg kunne finde; StatQuest er førstevalg for intuition og Organic Chemistry Tutor for regnemetoden.

## 1. Beskrivende statistik

**Tid:** ca. 3 t. **Eksamensvægt:** med (grundlag og nævnt i Begreber; sjældent hel opgave men bruges overalt).

### Mål for midte og spredning

**Skal kunne:**
- **Middelværdi, median, typetal** og hvornår hver bruges
- **Varians og spredning**: stikprøve s² (n−1) vs. population σ² (N)
- **Kvartiler, percentiler, IQR** og outliers
- Se [[Courses/Statistics/Begreber|Begreber]]

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: middelværdi, varians, standardafvigelse](https://www.youtube.com/watch?v=SzZ6GpcfoQY)
- [The Organic Chemistry Tutor: middelværdi, median, typetal](https://www.youtube.com/watch?v=A1mQ9kD-i9I)
- [The Organic Chemistry Tutor: spredningsformler (stikprøve og population)](https://www.youtube.com/watch?v=Uk98hiMQgN0)
- [StatQuest: kvantiler og percentiler](https://www.youtube.com/watch?v=IFKQLDmRK0Y)
- [OpenStax kap. 2 (Descriptive Statistics)](https://openstax.org/books/introductory-statistics-2e/pages/2-introduction)

**Øv:** 8 opgaver: beregn alle mål i hånden for 8 til 10 datapunkter.

### Visualisering

**Skal kunne:**
- **Histogram** (form: symmetrisk, skæv)
- **Boxplot** og femtalsresumé
- Skævhed og outliers' effekt på middelværdi vs. median

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: histogrammer](https://www.youtube.com/watch?v=qBigTkBLU6g)
- [StatQuest: boxplot](https://www.youtube.com/watch?v=fHLhBnmwUM0)
- [Khan Academy: tolk et histogram](https://www.youtube.com/watch?v=c02vjunQsJM)

**Øv:** Tegn histogram og boxplot for ét datasæt.

### Mestringstjekliste: Beskrivende statistik
- [ ] Jeg regner s med n−1 og ved hvorfor
- [ ] Jeg vælger median over middelværdi ved skæve data

## 2. Sandsynlighedsregning

**Tid:** ca. 5 t. **Eksamensvægt:** høj (grundlaget for alle fordelinger; ofte en opgave med regler og Bayes).

### Regler og betinget sandsynlighed

**Skal kunne:**
- **Udfaldsrum, hændelser**, komplement
- **Additionsregel** P(A∪B) = P(A)+P(B)−P(A∩B)
- **Multiplikationsregel** og **uafhængighed** P(A∩B)=P(A)P(B)
- **Betinget sandsynlighed** P(A|B) = P(A∩B)/P(B)

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: sandsynlighed, grundoversigt og træer](https://www.youtube.com/watch?v=SkidyDQuupA)
- [The Organic Chemistry Tutor: gange-/lægge-regel](https://www.youtube.com/watch?v=94AmzeR9n2w)
- [Khan Academy: betinget sandsynlighed](https://www.youtube.com/watch?v=6xPkG2pA-TU)
- [OpenStax kap. 3 (Probability Topics)](https://openstax.org/books/introductory-statistics-2e/pages/3-introduction)

**Øv:** 10 opgaver; tegn træ- eller tabeldiagram hver gang.

### Bayes' sætning og kombinatorik

**Skal kunne:**
- **Total sandsynlighed** og **Bayes' sætning** P(A|B)=P(B|A)P(A)/P(B)
- **Permutationer og kombinationer** (n!, nPr, nCr) – se [[Reference/Formelsamling/Sandsynlighed og statistik|formelsamling]]
- Typisk opgave: test for sygdom/falsk positiv

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: Bayes' sætning](https://www.youtube.com/watch?v=9wCnvr7Xw4E)
- [3Blue1Brown: Bayes, geometrisk intuition](https://www.youtube.com/watch?v=HZGCoVF3YvM)
- [The Organic Chemistry Tutor: marginal, simultan, betinget](https://www.youtube.com/watch?v=bddckR734aM)

**Øv:** 5 Bayes-opgaver med sandsynlighedstabel.

### Mestringstjekliste: Sandsynlighedsregning
- [ ] Jeg skelner uafhængig fra gensidigt udelukkende
- [ ] Jeg løser en Bayes-opgave med træ og regel
- [ ] Jeg bruger nCr korrekt

## 3. Stokastiske variable og forventning

**Tid:** ca. 4 t. **Eksamensvægt:** høj (definitionerne bruges i alle senere emner; typisk beregningsopgave).

### Diskrete stokastiske variable

**Skal kunne:**
- **Stokastisk variabel** og sandsynlighedsfunktion p(x)
- **Middelværdi E[X] = Σ x·p(x)**
- **Varians Var(X) = E[X²] − (E[X])²**
- Regneregler: E[aX+b], Var(aX+b)=a²Var(X)

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: forventet værdi](https://www.youtube.com/watch?v=b6VK2VPMXNI)
- [Khan Academy: middelværdi af diskret variabel](https://www.youtube.com/watch?v=qafPcWNUiM8)
- [OpenStax kap. 4 (Discrete Random Variables)](https://openstax.org/books/introductory-statistics-2e/pages/4-introduction)

**Øv:** 6 opgaver: tabel til E, Var og lineære transformationer.

### Kontinuerte variable og fordelingsfunktion

**Skal kunne:**
- **Tæthedsfunktion f(x)** og P(a<X<b) = ∫f
- **Fordelingsfunktion F(x)** og kvantiler
- E[X] = ∫x f(x)dx; Var tilsvarende (kræver [[Reference/Formelsamling/Integralregning|integralregning]])
- **Sandsynlighed vs. likelihood**

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: hovedidéen i fordelinger](https://www.youtube.com/watch?v=oI3hZJqXJuc)
- [StatQuest: sandsynlighed er ikke likelihood](https://www.youtube.com/watch?v=pYxNSUDSFH4)
- [OpenStax kap. 5 (Continuous Random Variables)](https://openstax.org/books/introductory-statistics-2e/pages/5-introduction)

**Øv:** 4 opgaver: find konstanten så f er tæthed, og beregn P og E.

### Mestringstjekliste: Stokastiske variable og forventning
- [ ] Jeg beregner E og Var fra en tabel og fra en tæthed
- [ ] Jeg bruger linearitet af E og regnereglen for Var

## 4. Binomial- og Poisson-fordelingen

**Tid:** ca. 4 t. **Eksamensvægt:** høj (binomial er nævnt i Begreber; klassisk eksamensopgave).

### Binomialfordelingen

**Skal kunne:**
- **Bernoulli-forsøg** og 4 binomial-betingelser
- **P(X=k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ**
- **E[X]=np, Var(X)=np(1−p)**
- Kumulativ sandsynlighed (≤, ≥)

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: binomial: sandsynlighed, middelværdi, spredning](https://www.youtube.com/watch?v=3PWKQiLK41M)
- [StatQuest: binomial og binomialtest](https://www.youtube.com/watch?v=J8jNoF-K8E8)
- [The Organic Chemistry Tutor: fordelingsformler](https://www.youtube.com/watch?v=KMLR_lOnVmI)

**Øv:** 8 opgaver inkl. "mindst k"-opgaver.

### Poisson-fordelingen (antaget)

**Skal kunne:**
- **P(X=k) = λᵏe⁻λ/k!**; E = Var = λ
- Hvornår Poisson: tællinger pr. tidsenhed
- Poisson som approksimation til binomial (stor n, lille p)

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: intro til Poisson](https://www.youtube.com/watch?v=m0o-585xwW0)
- [OpenStax kap. 4 (Poisson-afsnittet)](https://openstax.org/books/introductory-statistics-2e/pages/4-introduction)

**Øv:** 4 Poisson-opgaver.

### Mestringstjekliste: Binomial- og Poisson-fordelingen
- [ ] Jeg ved hvornår binomial gælder og opskriver parametre
- [ ] Jeg regner P(X≥k) via komplement

## 5. Normalfordelingen

**Tid:** ca. 4 t. **Eksamensvægt:** høj (nævnt i Begreber og bruges i al inferens).

### Normalfordelingen og standardisering

**Skal kunne:**
- **N(μ, σ²)**, klokkeformen, 68-95-99,7-reglen
- **z-score z = (x−μ)/σ** og slå op i tabel/Φ
- Find kvantiler (omvendt opslag)
- Normaltilnærmelse til binomial (n·p ≥ 5 og n·(1−p) ≥ 5)

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: normalfordelingen](https://www.youtube.com/watch?v=rzFX5NWojp0)
- [The Organic Chemistry Tutor: normalfordeling og sandsynlighedsopgaver](https://www.youtube.com/watch?v=gHBL5Zau3NE)
- [The Organic Chemistry Tutor: z-tabel og empirisk regel](https://www.youtube.com/watch?v=CjF_yQ2N638)
- [OpenStax kap. 6 (The Normal Distribution)](https://openstax.org/books/introductory-statistics-2e/pages/6-introduction)

**Øv:** 10 z-opgaver: P(X<a), P(a<X<b) og kvantil bagfra.

### Mestringstjekliste: Normalfordelingen
- [ ] Jeg standardiserer og slår op uden at forveksle tabelside
- [ ] Jeg finder en kvantil ud fra en sandsynlighed

## 6. Stikprøvefordeling og CLT

**Tid:** ca. 3 t. **Eksamensvægt:** høj (forudsætning for konfidensintervaller og test; teoriopgave ofte).

### Stikprøvegennemsnit og den centrale grænseværdisætning

**Skal kunne:**
- **Stikprøvefordeling** af X̄: E[X̄]=μ, SD = σ/√n (standardfejl)
- **CLT**: X̄ er omtrent normal for stor n, uanset fordeling
- **Standardfejl vs. standardafvigelse**
- Brug CLT til P(X̄ < a)

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: CLT](https://www.youtube.com/watch?v=YAlJCEDH2uY)
- [StatQuest: standardafvigelse vs. standardfejl](https://www.youtube.com/watch?v=A82brFpdr9g)
- [3Blue1Brown: CLT med intuition og beviside](https://www.youtube.com/watch?v=zeJD6dqJ5lo)
- [The Organic Chemistry Tutor: CLT, stikprøvefordeling, opgaver](https://www.youtube.com/watch?v=4YLtvNeRIrg)
- [OpenStax kap. 7 (The Central Limit Theorem)](https://openstax.org/books/introductory-statistics-2e/pages/7-introduction)

**Øv:** 5 opgaver om X̄; 1 simuleringsøvelse i Python/Excel hvis tid.

### Mestringstjekliste: Stikprøvefordeling og CLT
- [ ] Jeg forklarer CLT i to sætninger
- [ ] Jeg bruger σ/√n rigtigt

## 7. Konfidensintervaller

**Tid:** ca. 3 t. **Eksamensvægt:** høj (nævnt i Begreber; næsten sikker opgave).

### Interval for middelværdi og andel

**Skal kunne:**
- **Konfidensinterval** x̄ ± z·σ/√n, og **t-interval** når σ er ukendt: x̄ ± t·s/√n
- **Fejlmargin** og hvordan den afhænger af n og niveau
- **Andel**: p̂ ± z√(p̂(1−p̂)/n)
- Korrekt fortolkning (ikke "95 % sandsynlighed for μ")
- Find nødvendig stikprøvestørrelse

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: konfidensintervaller](https://www.youtube.com/watch?v=TqOeMYtOc1w)
- [The Organic Chemistry Tutor: z-score, interval, fejlmargin](https://www.youtube.com/watch?v=DT-fPG0Hff8)
- [The Organic Chemistry Tutor: interval for andel](https://www.youtube.com/watch?v=_aQTgv_OOSU)
- [OpenStax kap. 8 (Confidence Intervals)](https://openstax.org/books/introductory-statistics-2e/pages/8-introduction)

**Øv:** 8 opgaver: 4 middelværdi (z og t), 3 andel, 1 stikprøvestørrelse.

### Mestringstjekliste: Konfidensintervaller
- [ ] Jeg vælger z vs. t korrekt
- [ ] Jeg fortolker et 95 %-interval rigtigt
- [ ] Jeg beregner nødvendig n

## 8. Hypotesetest

**Tid:** ca. 7 t. **Eksamensvægt:** høj (nævnt i Begreber (hypotesetest, p-værdi, signifikans); kerneopgave).

### Logikken: H₀, H₁, p-værdi og fejltyper

**Skal kunne:**
- **H₀ og H₁**, ensidet vs. tosidet
- **Signifikansniveau α**, **p-værdi** og beslutningsregel (forkast hvis p<α)
- **Type I og II fejl, styrke (power)**
- Kritisk værdi vs. p-værdi-metode

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: H₀ og hypotesetest](https://www.youtube.com/watch?v=0oc49DyA3hU)
- [StatQuest: p-værdier fortolket](https://www.youtube.com/watch?v=vemZtEM63GY)
- [StatQuest: ensidet/tosidet p-værdi](https://www.youtube.com/watch?v=bsZGt-caXO4)
- [The Organic Chemistry Tutor: type I og II fejl](https://www.youtube.com/watch?v=9yQm9F2_yIk)
- [StatQuest: statistisk styrke](https://www.youtube.com/watch?v=Rsc5znwR5FA)
- [OpenStax kap. 9 (Hypothesis Testing with One Sample)](https://openstax.org/books/introductory-statistics-2e/pages/9-introduction)

**Øv:** Skriv hypoteser og konklusion i ord for 10 situationer.

### z-test, t-test og to stikprøver

**Skal kunne:**
- **Test af middelværdi**: z når σ kendt, ellers **t-test**, df = n−1
- **To-stikprøve t-test** og parret t-test
- **Test af andel**
- Fortolk: "der er (ikke) evidens for ..."

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: z- og t-test, ensidet/tosidet](https://www.youtube.com/watch?v=zJ8e_wAWUzE)
- [The Organic Chemistry Tutor: p-værdi-metoden](https://www.youtube.com/watch?v=8Aw45HN5lnA)
- [StatQuest: hvilken t-test skal jeg bruge](https://www.youtube.com/watch?v=nnBJeb_I-q8)
- [OpenStax kap. 10 (Hypothesis Testing with Two Samples)](https://openstax.org/books/introductory-statistics-2e/pages/10-introduction)

**Øv:** 10 fulde tests: 3 én-stikprøve, 3 to-stikprøve, 2 parret, 2 andel.

### Mestringstjekliste: Hypotesetest
- [ ] Jeg gennemfører en test fra hypotese til konklusion
- [ ] Jeg skelner én, to og parrede stikprøver
- [ ] Jeg forklarer en p-værdi uden at misfortolke den

## 9. Regression og korrelation

**Tid:** ca. 4 t. **Eksamensvægt:** høj (antaget pensum; meget almindeligt i et statistikkursus).

### Korrelation og lineær regression

**Skal kunne:**
- **Pearson-korrelation r** og fortolkning (ikke kausalitet)
- **Mindste kvadraters linje** ŷ = b₀ + b₁x, b₁ = r·s_y/s_x
- **R²** (forklaret varians) og **residualer**
- Test af hældning H₀: β₁=0 og interval for β₁

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: Pearson-korrelation](https://www.youtube.com/watch?v=xZ_z8KWkhXE)
- [StatQuest: lineær regression](https://www.youtube.com/watch?v=7ArmBVF2dCs)
- [StatQuest: R²](https://www.youtube.com/watch?v=bMccdk8EdGo)
- [The Organic Chemistry Tutor: mindste kvadraters linje](https://www.youtube.com/watch?v=P8hT5nDai6A)
- [OpenStax kap. 12 (Linear Regression and Correlation)](https://openstax.org/books/introductory-statistics-2e/pages/12-introduction)

**Øv:** 5 opgaver: find linjen, R² og forudsig; tegn residualplot.

### Mestringstjekliste: Regression og korrelation
- [ ] Jeg finder regressionslinje fra summer eller output
- [ ] Jeg fortolker r, R² og hældningens p-værdi

## 10. Chi-i-anden og ANOVA

**Tid:** ca. 3 t. **Eksamensvægt:** med (antaget pensum; ofte én afsluttende test).

### Chi-i-anden-tests og variansanalyse

**Skal kunne:**
- **Goodness-of-fit** og **uafhængighedstest**: χ² = Σ(O−E)²/E
- Forventede antal E = række·søjle/total; df
- **Envejs-ANOVA**: F = MS_mellem/MS_inden

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: chi-i-anden test](https://www.youtube.com/watch?v=HKDqlYSLt68)
- [Khan Academy: ANOVA, sum af kvadrater](https://www.youtube.com/watch?v=EFdlFoHI_0I)
- [StatQuest: t-test og ANOVA som lineære modeller](https://www.youtube.com/watch?v=R7xd624pR1A)
- [OpenStax kap. 11 (The Chi-Square Distribution)](https://openstax.org/books/introductory-statistics-2e/pages/11-introduction)
- [OpenStax kap. 13 (F Distribution and One-Way ANOVA)](https://openstax.org/books/introductory-statistics-2e/pages/13-introduction)

**Øv:** 3 χ²-opgaver og 2 ANOVA-opgaver.

### Mestringstjekliste: Chi-i-anden og ANOVA
- [ ] Jeg beregner χ² og df og konkluderer
- [ ] Jeg opstiller en ANOVA-tabel

## 11. Estimation, likelihood og bootstrap (antaget)

**Tid:** ca. 3 t. **Eksamensvægt:** lav (avanceret; kun hvis kurset går ud over det grundlæggende).

*Kun medtaget fordi mange kurser rammer dette; spring over hvis det ikke står i pensum.*

### Estimatorer og simulation

**Skal kunne:**
- **Maximum likelihood**: maksimér L(θ) eller log-likelihood
- **Biased vs. unbiased** (n−1 i s²)
- **Bootstrap**: gensample for at estimere usikkerhed/p-værdi

**Lær det her (i prioriteret rækkefølge):**
- [StatQuest: maximum likelihood](https://www.youtube.com/watch?v=XepXtl9YKwc)
- [StatQuest: bootstrap, hovedidéer](https://www.youtube.com/watch?v=Xz0x-8-cgaQ)
- [StatQuest: bootstrap-p-værdier](https://www.youtube.com/watch?v=N4ZQQqyIf6k)

**Øv:** Udled ML-estimatet for p i binomial og for μ i normal.

### Mestringstjekliste: Estimation, likelihood og bootstrap (antaget)
- [ ] Jeg udleder ML-estimat for simpel fordeling

## Links
- [[Statistics]]
- [[Courses/Statistics/Begreber|Begreber]]
- [[Courses/Statistics/Pensum|Pensum]]
- [[Formelsamling/Statistik|Formelsamling Statistik]]
- [[Reference/Formelsamling/Sandsynlighed og statistik|Sandsynlighed og statistik]]
- [[Study-Roadmap|Studieoversigt]]
- [[Exam-Prep|Eksamensforberedelse]]
