---
publish: true
title: Speedrun Map (Applied mathematics)
course: Introduction to applied mathematics
type: speedrun-map
tags:
  - Matematik
  - applied-math
  - speedrun
  - studieplan
---

# Speedrun Map: Introduction to applied mathematics

Hurtigste vej gennem faget: de emner der giver mest point først, med hvor lang tid de koster og hvor du lærer dem bedst. Faget er bestå/ikke-bestå (eksamen + rapporter med smiley-feedback), så målet er forståelse og rene beviser, ikke pensum-bingo. Se [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|kursusforsiden]].

> **Pensum-hul (vær ærlig):** [[Courses/Introduction to applied mathematics/Pensum|Pensum]] og alle 13 [[Courses/Introduction to applied mathematics/Lektioner/index|lektionsskabeloner]] er tomme. Kilderne her er kun [[Applied mathematics introduction lection 1|kursusstart-noten]], [[Lection 1 Introduction to applied mathematics|Lection 1]], [[Lection 2 continuation of proofs|Lection 2]], [[Lection 3 Operations research|Lection 3]], [[Proofs Part I]], [[Proofs Part II]], [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]], [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] og [[Courses/Introduction to applied mathematics/Cheat Sheet|Cheat Sheet]]. Emnerne 4 til 8 bygger på de 7 projekttitler fra første forelæsning, hvor selve indholdet endnu ikke er noteret. Dér er underemner og begreber standardstof for emnet, ikke bekræftet pensum. Eksamensvægt er mit skøn ud fra hvor meget stof vaulten har på emnet, ikke en officiel fordeling.

**Forklaring:** ★ = Jitty, YouTube-kanalen [Computer Engineering Jitty](https://www.youtube.com/@compengineerjitty) (først-valg). Alle links er fundet og tjekket; hvor jeg ikke fandt en god video står det.

## Overblik

| # | Emne | Timer | Eksamensvægt |
|---|------|-------|--------------|
| 1 | Bevisteknik (direkte, kontraposition, modstrid, modeksempel) | 6 | høj |
| 2 | Mængder, funktioner og tælleargumenter | 5 | høj |
| 3 | Induktion og stærk induktion | 6 | høj |
| 4 | Grænseværdidefinitionen (epsilon-delta) | 4 | middel |
| 5 | Operations Research: optimering og datafit | 5 | middel |
| 6 | Filtrering | 3 | lav til middel |
| 7 | Fartpilot (styring og differentialligninger) | 3 | lav til middel |
| 8 | Geometri | 3 | lav til middel |
| | **Samlet** | **35** | |

---

## 1. Bevisteknik (ca. 6 t, vægt: høj)

*Hvorfor høj:* "PROVE PROVE PROVE" er fagets mantra, [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] er ren bevisteknik, og [[Courses/Introduction to applied mathematics/Cheat Sheet|Cheat Sheet]] handler næsten kun om dette. Alt senere bygger på det.

### 1.1 Hvad er et bevis (ca. 1 t)
- **Axiom:** udsagn vi accepterer uden bevis, fx $a+b=b+a$ for reelle tal. Se [[Glossary#axiom|Axiom]].
- **Definition, sætning, bevis:** byggeklodserne; hvert skridt skal være tvunget. Se [[Reference/Matematik/Matematiske begreber|Matematiske begreber]].
- **Beviets skelet:** antag hypotesen, brug gyldige regler, nå konklusionen. Se [[Proofs Part I]].
- **"Prove or disprove":** afgør først om udsagnet er sandt; vælg så bevis eller modeksempel.
- **Notation:** $\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R},\mathbb{C}$, $\forall$, $\exists$. Se [[Reference/Matematik/Logiske symboler|Logiske symboler]] og [[Reference/Matematik/Talmaengder|Talmængder]].

**Lær det her:** [★ Jitty: Introduction to Logical Reasoning](https://www.youtube.com/watch?v=dFqngzk1N8g) · [★ Jitty: Introduction to Axioms for Proofs](https://www.youtube.com/watch?v=3Gs6P0pmaTM) · [Dr. Trefor Bazett: 9 tips to help you PROVE MATH THEOREMS](https://www.youtube.com/watch?v=-6b-tQEBUT8)
**Øv:** læs [[Proofs Part I]] og omskriv hvert bevis fra hukommelsen uden at kigge.

### 1.2 Direkte bevis (ca. 1 t)
- **Metode:** antag $P$, brug definitioner, nå $Q$.
- **Typisk opgave:** lige + lige er lige; produkt og sum af rationale tal er rationalt ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 3).
- **Definition-først-vane:** skriv altid "lad $a=2m$, $b=2n$" ud fra definitionen før du regner.

**Lær det her:** [★ Jitty: Direct Proofs for Even, Odd, Divisibility, and Modular Equivalence](https://www.youtube.com/watch?v=JMi4yDod0MQ)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 3 og "sum af to lige tal".

### 1.3 Kontraposition (ca. 1 t)
- **Ækvivalens:** $P\Rightarrow Q$ er det samme som $\lnot Q\Rightarrow\lnot P$. Se [[Glossary#contrapositive|Kontraposition]].
- **Hvornår:** når negationerne er lettere at arbejde med; eksempel: $n^2$ lige giver $n$ lige.
- **Fælde:** forveksl ikke med det omvendte udsagn $Q\Rightarrow P$ (det er ikke ækvivalent).

**Lær det her:** [★ Jitty: Introduction to Proofs By Contrapositive](https://www.youtube.com/watch?v=P1clQY-C2cU) · [★ Jitty: Conditionals and Biconditionals](https://www.youtube.com/watch?v=pLvSJey4PAw)
**Øv:** "hvis $n^2$ er lige, så er $n$ lige" fra [[Proofs Part I]].

### 1.4 Modstridsbevis (ca. 1,5 t)
- **Metode:** antag det modsatte, led det til noget umuligt. Se [[Glossary#proof-by-contradiction|Modstrid]].
- **Klassiker:** $\sqrt2$ er irrationel ($p^2=2q^2$, begge lige, bryder "ingen fælles faktor").
- **Reciprokværdi af irrationelt tal** er irrationelt ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 2b).
- **Hvornår:** "kun"/"ingen"-påstande og når et direkte angreb er svært.

**Lær det her:** [★ Jitty: Proof by Contradiction Worked Examples](https://www.youtube.com/watch?v=_H8fxyCX2jo) · [blackpenredpen: Proving sqrt(2) is irrational](https://www.youtube.com/watch?v=BhFf0nJ5VOg) · [blackpenredpen: 2 legit proofs & 1 false proof](https://www.youtube.com/watch?v=hfuibrZTJj8) · [bprp math basics: x rational, y irrational, then x+y irrational](https://www.youtube.com/watch?v=EqT_zqoawsM)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 2; bevis $\sqrt3$ er irrationel på samme skabelon.

### 1.5 Modeksempel og entydighed (ca. 1,5 t)
- **Modeksempel:** ét tilfælde dræber en "for alle"-påstand, men beviser aldrig noget. Se [[Glossary#counterexample|Modeksempel]].
- **Eksempel fra forelæsningen:** $x^2+1=0$ har ingen reel rod, så "alle andengradspolynomier har en reel rod" er falsk.
- **Bevis ved tilfælde:** del op i fx lige/ulige og vis begge.
- **Entydighed:** antag to objekter med egenskaben og vis de er ens (identitetselementet er entydigt, [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 1).

**Lær det her:** [★ Jitty: Proof by Counterexample Worked Examples](https://www.youtube.com/watch?v=AzQWIdY3kk8) · [★ Jitty: Proof by Cases](https://www.youtube.com/watch?v=Y5LxP2uvTQ8) · entydighed: ingen specifik video fundet, brug [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 1.
**Øv:** find modeksempler til 5 selvfundne "for alle"-påstande.

### Mastery checklist: bevisteknik
- [ ] Jeg kan vælge bevismetode ud fra [[Courses/Introduction to applied mathematics/Cheat Sheet|Cheat Sheet-tabellen]] uden at slå op.
- [ ] Jeg kan bevise $\sqrt2\notin\mathbb{Q}$ og "$n^2$ lige giver $n$ lige" fra hukommelsen.
- [ ] Jeg starter altid et bevis med definitionerne skrevet ud.
- [ ] Jeg ved hvorfor et modeksempel aldrig kan bevise en "for alle"-påstand.
- [ ] [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] kan løses uden facit.

---

## 2. Mængder, funktioner og tælleargumenter (ca. 5 t, vægt: høj)

*Hvorfor høj:* [[Lection 2 continuation of proofs|Lection 2]] (tælleargumenter, bijektioner, talmængder) og [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 1, 2, 4 handler om præcis dette.

### 2.1 Injektiv, surjektiv, bijektiv (ca. 1,5 t)
- **Injektiv:** forskellige input giver forskellige output. Se [[Glossary#injective|Injektiv]].
- **Surjektiv:** hvert output rammes. Se [[Glossary#surjective|Surjektiv]].
- **Bijektiv:** begge dele; giver invers funktion og $|A|=|B|$. Se [[Glossary#bijection|Bijektion]].
- **Typisk opgave:** vis eller afvis injektiv/surjektiv for en given $f$ (tjek altid domæne og codomæne).
- **Bijektion mellem intervaller:** $\tan:(-\pi/2,\pi/2)\to\mathbb{R}$ ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 4).

**Lær det her:** [★ Jitty: Injective, Surjective, and Bijective Functions](https://www.youtube.com/watch?v=Rx5RXPz0o3c) · [TrevTutor: Injective, Surjective and Bijective](https://www.youtube.com/watch?v=bZred_Ksz2k)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 1 og 4; [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 (diskret) opg. D]] har 5 færdige eksempler.

### 2.2 Tælle på to måder (ca. 1 t)
- **Idé:** tæl samme mængde to veje; de to tal er ens, så får du en identitet gratis.
- **Eksempel:** $1+\dots+n=n(n+1)/2$ ved parring af $k$ med $n+1-k$.
- **Antal delmængder:** en mængde med $k$ elementer har $2^k$ delmængder (fordobles for hvert nyt element).

**Lær det her:** ingen specifik video om "double counting" fundet; brug [[Proofs Part II]] og 3.1 nedenfor.
**Øv:** gentag Gauss-summen ved parring, og bevis $2^k$ delmængder to måder (parring og induktion).

### 2.3 Kardinalitet af uendelige mængder (ca. 1,5 t)
- **Samme størrelse = bijektion:** $f(n)=2n$ viser $|\mathbb{Z}|=|2\mathbb{Z}|$ selvom $2\mathbb{Z}\subset\mathbb{Z}$.
- **Tællelig vs. overtællelig:** $\mathbb{N},\mathbb{Z},\mathbb{Q}$ er tællelige; $\mathbb{R}$ er ikke (Cantors diagonalargument).
- **Typisk opgave:** konstruer en eksplicit bijektion og vis begge retninger.

**Lær det her:** [Dr. Trefor Bazett: Integers & Rationals are both infinite but is it the SAME infinity?](https://www.youtube.com/watch?v=WQWkG9cQ8NQ) · [Dr. Trefor Bazett: Cantor's Diagonal Argument](https://www.youtube.com/watch?v=0HF39OWyl54) · [TrevTutor: Countable and Uncountable Sets](https://www.youtube.com/watch?v=Z_Rr4d-3fFY)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 1 og 4.

### 2.4 Talmængder og rationale tal (ca. 1 t)
- **Rationalt tal:** $p/q$ med heltal og $q\neq0$. Se [[Glossary#rational|Rationalt]] og [[Glossary#irrational|Irrationalt]].
- **Lukkethed:** sum og produkt af rationale er rationale ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]]).
- **Symboler:** [[Reference/Matematik/Matematiske symboler|Matematiske symboler]].

**Lær det her:** ingen separat video nødvendig; dækket af 1.2 og 1.4.
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] opg. 2 og 3.

### Mastery checklist: mængder og funktioner
- [ ] Jeg kan afgøre injektiv/surjektiv/bijektiv for en $f$ og begrunde begge retninger.
- [ ] Jeg kan konstruere en bijektion der viser $|\mathbb{Z}|=|2\mathbb{Z}|$ og for $(-\pi/2,\pi/2)\leftrightarrow\mathbb{R}$.
- [ ] Jeg kan forklare hvorfor $\mathbb{R}$ ikke er tællelig.
- [ ] Jeg kan tælle samme sum to måder.

---

## 3. Induktion og stærk induktion (ca. 6 t, vægt: høj)

*Hvorfor høj:* To af tre dele i [[Proofs Part II]], [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 2, 3 og 5 er induktion, og stærk induktion med to basistilfælde er den klassiske fælde (se rettelsen i [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] P5b).

### 3.1 Simpel induktion på formler (ca. 2 t)
- **Struktur:** basistilfælde, induktionsantagelse $P(k)$, induktionsskridt $P(k+1)$. Se [[Glossary#induction|Induktion]], [[Glossary#base-case|Basistilfælde]] og [[Glossary#inductive-step|Induktionsskridt]].
- **Summer:** $1+\dots+n=n(n+1)/2$ og $\sum 1/(i(i+1))=n/(n+1)$ ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 3).
- **Skridtet:** læg næste led til begge sider og omform til formlen med $k+1$.
- **Typisk opgave:** bevis en sum- eller ulighedsformel for alle $n\ge n_0$.

**Lær det her:** [blackpenredpen: Prove by induction, sum of the first n cubes](https://www.youtube.com/watch?v=w362XRZy5as) · [Dr. Trefor Bazett: Intro to Mathematical Induction](https://www.youtube.com/watch?v=GdM_iA1Zek4) · [Khan Academy: Proof by induction](https://www.youtube.com/watch?v=wblW_M_HVQ8) · [MIT OCW: Contradiction and Induction (6.042J)](https://www.youtube.com/watch?v=_NYsYuzMLs0) · ★ Jitty har ikke en induktionsvideo; hans [★ Telescoping Series Test](https://www.youtube.com/watch?v=ZdTHqG2m-aE) hjælper kun med at genkende teleskopsummen i $1/(i(i+1))$.
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 3; bevis summen af de første $n$ kubikker selv.

### 3.2 Induktion på kombinatorik og uligheder (ca. 1 t)
- **Delmængder:** $S_k$ har $2^k$ delmængder ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 2).
- **Ulighed:** $n!<n^n$ og lignende kræver at du ser hvilken side der vokser hurtigst.
- **Binomialkoefficienter** som identitet ved induktion.

**Lær det her:** [MathDoctorBob: n! less than n^n](https://www.youtube.com/watch?v=NsO6nh42oPo) · [Mu Prime Math: Binomial Coefficients Identity with Induction](https://www.youtube.com/watch?v=-qxZYAiMRBU) · [The Organic Chemistry Tutor: Induction Divisibility](https://www.youtube.com/watch?v=8J7Bft3BN0g)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] opg. 2.

### 3.3 Stærk induktion (ca. 1,5 t)
- **Forskel:** i skridtet må du antage $P$ for alle værdier op til $k$, ikke kun $k$.
- **Basistilfælde-reglen:** lige så mange basistilfælde som skridtet rækker tilbage (to tilbage giver to basistilfælde).
- **Klassiker:** alle heltal $n\ge2$ har en primfaktorisering ([[Proofs Part II]]).
- **Se også:** [[Glossary#strong-induction|Stærk induktion]].

**Lær det her:** [blackpenredpen: A Strong Induction Proof](https://www.youtube.com/watch?v=Cey_kU2UaXE) · [Dr. Trefor Bazett: Strong Induction, Intro and Full Example](https://www.youtube.com/watch?v=rfA0h9udl7E) · [MIT OCW: 1.8.4 Strong Induction](https://www.youtube.com/watch?v=TUueMeRooBk)
**Øv:** bevis primfaktorisering selv uden at kigge.

### 3.4 Fibonacci og rekursion (ca. 1,5 t)
- **Rekursionen:** $F(1)=F(2)=1$, $F(n)=F(n-1)+F(n-2)$. Se [[Glossary#fibonacci|Fibonacci]] og [[Glossary#recurrence|Rekursion]].
- **Opgaven:** $F(n)>n^2$ for $n\ge14$ med to basistilfælde $F(14)=377$, $F(15)=610$ ([[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] P5b).
- **Afvisning:** der findes ingen $n_0$ med $F(n)<n^2$ for alle $n\ge n_0$ (P5a, følger af P5b).
- **Algebra-tricket:** $k^2+(k-1)^2-(k+1)^2=k^2-4k>0$.

**Lær det her:** [Eddie Woo: Induction, Fibonacci Sequence](https://www.youtube.com/watch?v=fG-_Efm9ckM) · [Dr. Yorgey: Proof by strong induction, Fibonacci numbers](https://www.youtube.com/watch?v=MazS9Sm4Oak)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] P5 uden at kigge; prøv $F(n)<2^n$.

### Mastery checklist: induktion
- [ ] Jeg skriver altid basis, antagelse og skridt som tre adskilte afsnit.
- [ ] Jeg ved hvor mange basistilfælde et skridt kræver og kan forklare hvorfor.
- [ ] Jeg kan bevise Gauss-summen, $\sum 1/(i(i+1))$ og $2^k$ delmængder fra hukommelsen.
- [ ] Jeg kan gennemføre $F(n)>n^2$ for $n\ge14$ uden facit.
- [ ] Jeg kan sige hvornår jeg skal bruge stærk i stedet for simpel induktion.

---

## 4. Grænseværdidefinitionen, epsilon-delta (ca. 4 t, vægt: middel)

*Hvorfor middel:* Projektet "Mathematical proofs 2 (Definitions of Limit)" er en af de 7 projekter, men der er ingen lektionsnoter endnu. Selve bevisteknikken fra emne 1 og 3 gælder fuldt ud her.

> **Pensum-hul:** ingen noter om emnet. Alt nedenfor er standardstof for en grænseværdidefinition.

### 4.1 Hvad en grænseværdi er (ca. 1 t)
- **Intuition:** $f(x)$ kommer vilkårligt tæt på $L$ når $x$ kommer tæt på $a$. Se [[Glossary#limit|Limit]].
- **Ensidige grænser** og at $\lim$ findes kun hvis begge sider er ens.
- **Kontinuitet** som $\lim_{x\to a}f(x)=f(a)$. Se [[Glossary#continuity|Kontinuitet]].

**Lær det her:** [★ Jitty: What is a Limit, Calc I Introduction](https://www.youtube.com/watch?v=Om_F2BArlA8) · [★ Jitty: A Complete Guide for One-Sided Limits](https://www.youtube.com/watch?v=blp35VtppIU) · [★ Jitty: What is the Definition of Continuity](https://www.youtube.com/watch?v=oX0ZkjDUDFA)
**Øv:** [★ Jitty: How to Solve Limits](https://www.youtube.com/watch?v=5K9E4jIh9Do) som rutine-opvarmning.

### 4.2 Epsilon-delta-beviser (ca. 3 t)
- **Definitionen:** for ethvert $\varepsilon>0$ findes $\delta>0$ så $0<|x-a|<\delta\Rightarrow|f(x)-L|<\varepsilon$.
- **Scratch-metoden:** arbejd baglæns fra $|f(x)-L|<\varepsilon$ for at finde $\delta$ udtrykt ved $\varepsilon$.
- **Typiske opgaver:** lineær ($3x+5$), $x^2$ ved at begrænse $\delta\le1$, og et produkt af grænser.
- **Skriv-opsætning:** "lad $\varepsilon>0$, vælg $\delta=\dots$, så gælder ..." og afslut med at tjekke ulighedskæden.

**Lær det her:** [blackpenredpen: epsilon-delta definition ultimate introduction](https://www.youtube.com/watch?v=DdtEQk_DHQs) · [Dr Peyam: Epsilon delta limit, Example 1](https://www.youtube.com/watch?v=MaPkBZMkR1U) · [Paul's Online Notes: The Definition of the Limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx)
**Øv:** vis $\lim_{x\to2}(3x+5)=11$ og $\lim_{x\to2}x^2=4$ med eget $\delta(\varepsilon)$.

### Mastery checklist: epsilon-delta
- [ ] Jeg kan skrive definitionen med kvantorer fra hukommelsen og negere den.
- [ ] Jeg kan finde $\delta$ i en lineær og en kvadratisk grænse.
- [ ] Jeg kan forklare hvad $\varepsilon$ og $\delta$ hver især kontrollerer.

---

## 5. Operations Research: optimering og datafit (ca. 5 t, vægt: middel)

*Hvorfor middel:* [[Lection 3 Operations research|Lection 3]] er en enkelt (afkortet) notelinje og et projekt. Den afslørede kerne: optimering og data-fitting med matematiske modeller, Monte Carlo-simulation, og at undgå overfitting.

> **Pensum-hul:** [[Lection 3 Operations research|Lection 3]] slutter midt i en sætning om overfitting. Underemner nedenfor er standardstof for "Operations Research" som projekttema.

### 5.1 Lineær programmering (ca. 2 t)
- **Model:** maksimer/minimer lineær målfunktion under lineære uligheder.
- **Grafisk metode:** tegn det tilladte område; optimum ligger i et hjørne.
- **Simplex-ideen:** gå hjørne for hjørne til målfunktionen ikke kan forbedres; slackvariable.
- **Typisk opgave:** opstil modellen ud fra en tekstopgave og løs grafisk.

**Lær det her:** [The Organic Chemistry Tutor: Linear Programming](https://www.youtube.com/watch?v=Bzzqx1F23a8) · [StatQuest: Optimization with Linear Programming (and the Simplex Algorithm)](https://www.youtube.com/watch?v=h5o1n1QMcmM) · [MIT OCW: Linear Programming, LP, reductions, Simplex](https://www.youtube.com/watch?v=WwMz2fJwUCg)
**Øv:** opstil og løs 3 tekstopgaver grafisk.

### 5.2 Data-fitting og mindste kvadrater (ca. 1,5 t)
- **Idé:** vælg parametre der minimerer summen af kvadrerede residualer.
- **Residualer og fejl:** forskellen mellem data og model.
- **Typisk opgave:** tilpas en ret linje eller en simpel model til målinger.

**Lær det her:** [StatQuest: The Main Ideas of Fitting a Line to Data (Least Squares)](https://www.youtube.com/watch?v=PaFPbb66DxQ) · [Khan Academy: Introduction to residuals and least squares regression](https://www.youtube.com/watch?v=yMgFHbjbAW8) · [Jason Bramburger: Fitting Data to Linear Models](https://www.youtube.com/watch?v=JlDCfTGkJZc)
**Øv:** tilpas en linje til 6 selvvalgte punkter i hånden og i Python.

### 5.3 Monte Carlo-simulation (ca. 1 t)
- **Idé:** estimer ved at trække mange tilfældige stikprøver.
- **Klassiker:** estimer $\pi$ med tilfældige punkter i en firkant.
- **Fejl falder** som $1/\sqrt N$; flere kørsler giver mere præcist, men langsomt.

**Lær det her:** [MIT OCW: Monte Carlo Simulation](https://www.youtube.com/watch?v=OgO1gpXSUzU) · [MarbleScience: Monte Carlo Simulation](https://www.youtube.com/watch?v=7ESK5SaP-bc)
**Øv:** simuler $\pi$ med 10, 1000 og 100000 punkter og sammenlign.

### 5.4 Overfitting (ca. 0,5 t)
- **Problem:** en model der rammer træningsdata perfekt men fejler på nye data.
- **Modgift:** hold testdata ude, hold modellen simpel, valider.

**Lær det her:** [IBM Technology: Overfitting, Underfitting, and Bad Data](https://www.youtube.com/watch?v=0RT2Q0qwXSA)
**Øv:** tilpas polynomier af grad 1, 3 og 9 til støjfyldte data og sammenlign fejl på nye punkter.

### Mastery checklist: Operations Research
- [ ] Jeg kan opstille og løse et LP-problem grafisk.
- [ ] Jeg kan forklare mindste kvadraters idé og udregne en tilpasset linje.
- [ ] Jeg kan lave en Monte Carlo-estimation i Python.
- [ ] Jeg kan forklare overfitting med et konkret eksempel.

---

## 6. Filtrering (ca. 3 t, vægt: lav til middel)

> **Pensum-hul:** kun projekttitlen "Filtering" kendes. Intet er noteret. Underemner er standardstof (støjreduktion på måledata).

### 6.1 Glidende gennemsnit (ca. 1 t)
- **Idé:** erstat hver værdi med gennemsnittet af et vindue; dæmper støj.
- **Afvejning:** større vindue giver glattere kurve men mere forsinkelse.
- **Kant-problemet** ved starten og slutningen af data.

**Lær det her:** [Numeryst: Moving Average Filter Explained](https://www.youtube.com/watch?v=Mzg3ya3LZnc) · [MATLAB: Signal Smoothing](https://www.youtube.com/watch?v=W6lCo2gSDdA)
**Øv:** udjævn støjfyldt sinus i Python med vinduer 3, 9 og 25.

### 6.2 Foldning (konvolution) (ca. 1 t)
- **Idé:** glidende gennemsnit er en foldning med en kerne.
- **Vægtet filter:** kernen bestemmer hvad der dæmpes.

**Lær det her:** [3Blue1Brown: But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA)
**Øv:** fold en kort liste med $[1,1,1]/3$ i hånden.

### 6.3 Kalman-filter, intuition (ca. 1 t)
- **Idé:** vægt model og måling efter hvor meget du stoler på dem.
- **Brug:** fusionér støjfyldte målinger med en forudsigelse.

**Lær det her:** [Visually Explained: Kalman Filters](https://www.youtube.com/watch?v=IFeCIbljreY) · [Steve Brunton: The Kalman Filter](https://www.youtube.com/watch?v=s_9InuQAx-g)
**Øv:** kun intuition nødvendig; forklar det med egne ord på 5 linjer.

### Mastery checklist: filtrering
- [ ] Jeg kan glatte data med et glidende gennemsnit og forklare afvejningen.
- [ ] Jeg ved at filtrering er en foldning.
- [ ] Jeg kan fortælle i ét afsnit hvad et Kalman-filter gør.

---

## 7. Fartpilot (ca. 3 t, vægt: lav til middel)

> **Pensum-hul:** kun projekttitlen "Fartpilot" kendes. Underemner er standardstof for en simpel fartpilotmodel (differentialligning og regulering).

### 7.1 Modelleringen som differentialligning (ca. 1,5 t)
- **Fartens ændring:** $m\,v'=F_{\text{motor}}-F_{\text{modstand}}$.
- **Løsning:** separable og lineære 1. ordens ligninger; startbetingelser.
- **Numerisk:** Eulers metode når der ikke er formel.

**Lær det her:** [★ Jitty: What Even is the Solution to a Differential Equation?](https://www.youtube.com/watch?v=HS77_niA_Q4) · [★ Jitty: Introduction to Separable Differential Equations](https://www.youtube.com/watch?v=O_fexkwNOU8) · [★ Jitty: Integrating Factor Technique](https://www.youtube.com/watch?v=33u1lnIcabM) · [blackpenredpen: Euler's Method](https://www.youtube.com/watch?v=Pm_JWX6DI1I)
**Øv:** løs $v'=a-bv$ med $v(0)=0$ og tegn løsningen.

### 7.2 Regulering (PID) (ca. 1,5 t)
- **Idé:** fejl = ønsket fart minus målt fart; gas justeres efter fejlen.
- **P, I, D:** proportionalt, integrerende og differentierende led.

**Lær det her:** [Brian Douglas: PID Control, a brief introduction](https://www.youtube.com/watch?v=UR0hOmjaHp0) · [MATLAB: What Is PID Control?](https://www.youtube.com/watch?v=wkfEZmsQqiA)
**Øv:** simuler en P-regulator på $v'=a-bv$ i Python.

### Mastery checklist: fartpilot
- [ ] Jeg kan opstille og løse en 1. ordens model for fart.
- [ ] Jeg kan forklare P, I og D i ét afsnit.

---

## 8. Geometri (ca. 3 t, vægt: lav til middel)

> **Pensum-hul:** kun projekttitlen "Geometri" kendes; det er uklart om det er plangeometri, vektorgeometri eller mere. Prioriter dette emne sidst og afklar indholdet i undervisningen. Nedenfor er vektorgrundlaget, som næsten altid er med.

### 8.1 Vektorer og skalarprodukt (ca. 3 t)
- **Vektor:** længde, retning og sum.
- **Skalarprodukt:** $\mathbf{a}\cdot\mathbf{b}=|a||b|\cos\theta$; ortogonalitet når det er 0.
- **Krydsprodukt** i 3D og areal af parallelogram.

**Lær det her:** [3Blue1Brown: Vectors](https://www.youtube.com/watch?v=fNk_zzaMoSs) · [3Blue1Brown: Dot products and duality](https://www.youtube.com/watch?v=LyGKycYT2v0) · [3Blue1Brown: Cross products](https://www.youtube.com/watch?v=eu6i7WJeinw)
**Øv:** find vinklen mellem to vektorer i 3D og et areal med krydsprodukt.

### Mastery checklist: geometri
- [ ] Jeg kan regne skalarprodukt og vinkel og vise ortogonalitet.

---

## Kørselsplan og rapport-tips

1. **Dag 1 til 2:** emne 1 (bevisteknik), derefter [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] uden facit.
2. **Dag 3 til 4:** emne 2 og 3 (funktioner og induktion), derefter [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] uden facit.
3. **Dag 5:** emne 4 (epsilon-delta).
4. **Dag 6 til 7:** emne 5 til 8, kun intuition og projektdele.
5. **Rapporter:** brug feedbacken (stor smiley, lille smiley, ret, sur) til næste rapport; målet er forståelse, ikke bare en løsning.

## Links

- [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Kursusforside]]
- [[Courses/Introduction to applied mathematics/Cheat Sheet|Cheat Sheet]]
- [[Flashcards/Proofs Flashcards|Flashcards]]
- [[Self-Tests/Proofs Test|Selvtest]]
- [[Courses/Introduction to applied mathematics/Past Exams|Tidligere eksamenssæt]]
- [[Study-Roadmap]]
