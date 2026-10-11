---
publish: true
title: Speedrun Map (Diskret matematik)
course: Diskret matematik
type: speedrun-map
tags:
  - Matematik
  - diskret-matematik
  - speedrun
  - studieplan
---

# Speedrun Map: Diskret matematik

Hurtigste vej gennem faget. Emnerne står i den rækkefølge der bygger bedst oven på hinanden, med timer, eksamensvægt og hvor du lærer det bedst. Se [[Courses/Diskret matematik/Diskret matematik|kursusforsiden]].

> **Pensum-hul (vær ærlig):** [[Courses/Diskret matematik/Pensum|Pensum]] og alle 13 [[Courses/Diskret matematik/Lektioner/index|lektionsskabeloner]] er tomme, og [[Logic gates Lection 1]] er kun en overskrift. Det faktiske indhold jeg kan se er: [[Courses/Diskret matematik/Aflevering 1|Aflevering 1]] (samme opgaver som PDF'en `Aflevering 1 diskret.pdf`; opgave A til F dækker logik, prædikatlogik, mængder, funktioner, inverse billeder og endelige mængder), [[Courses/Diskret matematik/Begreber|Begreber]] (logik, kvantorer, mængder, talmængder, bevis) og [[Formelsamling/Diskret matematik|Formelsamlingen]] (logiske ligheder, mængdelære, kombinatorik, summer). Emnerne 1 til 5 er dermed dokumenteret; 6 til 9 er standardstof for diskret matematik som formelsamlingen eller logic-gate-noten antyder, ikke bekræftet pensum. Eksamensvægt er mit skøn ud fra mængden af stof i vaulten.

**Forklaring:** ★ = Jitty, YouTube-kanalen [Computer Engineering Jitty](https://www.youtube.com/@compengineerjitty) (først-valg). Alle links er fundet og tjekket; hvor jeg ikke fandt en god video står det.

## Overblik

| # | Emne | Timer | Eksamensvægt |
|---|------|-------|--------------|
| 1 | Udsagnslogik | 6 | høj |
| 2 | Prædikatlogik og kvantorer | 5 | høj |
| 3 | Mængdelære | 5 | høj |
| 4 | Funktioner | 5 | høj |
| 5 | Bevismetoder og induktion | 7 | høj |
| 6 | Kombinatorik og tælling | 6 | middel til høj |
| 7 | Relationer | 4 | middel |
| 8 | Boolsk algebra og logiske kredse | 3 | lav til middel |
| 9 | Rekursion, summer og talteori | 3 | lav |
| | **Samlet** | **44** | |

---

## 1. Udsagnslogik (ca. 6 t, vægt: høj)

*Hvorfor høj:* [[Courses/Diskret matematik/Aflevering 1|Aflevering 1]] opgave A (sandhedssigere og løgnere) er ren udsagnslogik, og alt andet i faget bruger den.

### 1.1 Udsagn og forbindere (ca. 1,5 t)
- **Udsagn:** påstand der er enten sand eller falsk. Se [[Courses/Diskret matematik/Begreber|Begreber]].
- **Forbindere:** $\lnot,\land,\lor,\oplus,\Rightarrow,\Leftrightarrow$ og deres sandhedstabeller. Se [[Reference/Matematik/Logiske symboler|Logiske symboler]].
- **Typisk opgave:** lav sandhedstabel for en sammensat formel.

**Lær det her:** [★ Jitty: Introduction to Logical Operations: AND, OR, NOT, XOR](https://www.youtube.com/watch?v=H8DXpsxcPOY) · [★ Jitty: Introduction to Logical Reasoning](https://www.youtube.com/watch?v=dFqngzk1N8g) · [TrevTutor: Introduction to Propositional Logic](https://www.youtube.com/watch?v=itrXYg41-V0)
**Øv:** lav 5 sandhedstabeller med 3 variable.

### 1.2 Implikation og ækvivalens (ca. 1,5 t)
- **Implikation:** $P\Rightarrow Q$ er kun falsk når $P$ er sand og $Q$ falsk; $\equiv\lnot P\lor Q$.
- **Bikonditional:** $P\Leftrightarrow Q$ er sand når begge har samme sandhedsværdi.
- **Kontraposition:** $P\Rightarrow Q\equiv\lnot Q\Rightarrow\lnot P$; den omvendte er ikke ækvivalent.

**Lær det her:** [★ Jitty: Conditionals and Biconditionals](https://www.youtube.com/watch?v=pLvSJey4PAw)
**Øv:** vis ved tabel at implikation og kontraposition er ækvivalente.

### 1.3 Tautologi, modstrid og logiske ligheder (ca. 1,5 t)
- **Tautologi / modstrid / kontingent:** altid sand, altid falsk, afhænger af værdierne.
- **De Morgan:** $\lnot(P\land Q)\equiv\lnot P\lor\lnot Q$ og duelt. Se [[Formelsamling/Diskret matematik|Formelsamling]].
- **Love:** distributiv, kontraposition, implikation som $\lnot P\lor Q$; brug dem til at forenkle uden tabel.

**Lær det her:** [★ Jitty: Tautologies and Contradictions](https://www.youtube.com/watch?v=LUkIsG61yx8) · [★ Jitty: De Morgan's Law/Theorem](https://www.youtube.com/watch?v=zdDmw1DqX5I) · [★ Jitty: What Formula Sheets Miss, The Laws of Propositional Logic](https://www.youtube.com/watch?v=ILk-VTZH3y4) · [★ Jitty: Example Proofs with Laws of Propositional Logic](https://www.youtube.com/watch?v=2mOED89DwO8)
**Øv:** bevis $(P\Rightarrow Q)\land(Q\Rightarrow R)\Rightarrow(P\Rightarrow R)$ med love, ikke tabel.

### 1.4 Sandhedssiger-og-løgner-opgaver og slutningsregler (ca. 1,5 t)
- **Metode (Aflevering 1 A):** kode "X er sandfærdig" som en variabel og tjek udsagnet mod sandhedstabellen; tilfælde der giver selvmodsigelse udelukkes.
- **Slutningsregler:** modus ponens, modus tollens, hypotetisk syllogisme, disjunktiv syllogisme.
- **Typisk opgave:** afgør hvem der lyver ud fra hvad de siger ([[Courses/Diskret matematik/Aflevering 1|Aflevering 1 A]], 3 delopgaver).

**Lær det her:** [★ Jitty: Introduction to the Rules of Inference with Propositions](https://www.youtube.com/watch?v=_Qa5ijtxah8) · [★ Jitty: Proofs with the Rules of Inference for Propositions, Practice Problems](https://www.youtube.com/watch?v=cO9owZ5yizw) · løgner-puslespil: ingen specifik video fundet, brug [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 A]] som skabelon.
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 A]] (tre delopgaver) uden at kigge; opfind en fjerde.

### Mastery checklist: udsagnslogik
- [ ] Jeg kan sandhedstabellen for alle forbindere uden at slå op.
- [ ] Jeg kan forenkle formler med De Morgan og implikationsreglen.
- [ ] Jeg kan løse et sandhedssiger/løgner-puslespil systematisk.
- [ ] Jeg kan nævne og bruge de 4 slutningsregler.

---

## 2. Prædikatlogik og kvantorer (ca. 5 t, vægt: høj)

*Hvorfor høj:* [[Courses/Diskret matematik/Aflevering 1|Aflevering 1]] opgave B er seks påstande i prædikatlogik, og kvantorer er en af de tre nævnte søjler i [[Courses/Diskret matematik/Begreber|Begreber]].

### 2.1 Prædikater og kvantorer (ca. 1,5 t)
- **Prædikat:** udsagn med en variabel, $P(x)$.
- **Kvantorer:** $\forall$ (for alle) og $\exists$ (der findes). Se [[Reference/Matematik/Logiske symboler|Logiske symboler]].
- **Domæne:** sandhedsværdien afhænger af hvilket univers $x$ lever i.
- **Typisk opgave:** oversæt en dansk/engelsk påstand til logik og omvendt (Aflevering 1 B).

**Lær det her:** [★ Jitty: Introduction to Predicates](https://www.youtube.com/watch?v=Wo6yjuBEOb4) · [★ Jitty: Quantified Statements with Compound Predicates](https://www.youtube.com/watch?v=bNF4WXlrygk) · [Chris Marriott: Predicate Logic](https://www.youtube.com/watch?v=fXt3tj8vXcw)
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 B]], påstand 1 til 3.

### 2.2 Indlejrede kvantorer (ca. 1,5 t)
- **Rækkefølge betyder noget:** $\forall x\exists y$ er ikke det samme som $\exists y\forall x$.
- **Fortolkning:** læs fra venstre mod højre som et spil mod en modstander.
- **Typisk opgave:** afgør sand/falsk for tal-påstande (fx "der findes et mindste positivt reelt tal", Aflevering 1 B, påstand 2).

**Lær det her:** [★ Jitty: How to Interpret Nested Quantifiers](https://www.youtube.com/watch?v=J7SAZcgXgho)
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 B]], påstand 4 til 6.

### 2.3 Negation af kvantorer (ca. 1 t)
- **De Morgan for kvantorer:** $\lnot\forall x\,P(x)\equiv\exists x\,\lnot P(x)$ og $\lnot\exists x\,P(x)\equiv\forall x\,\lnot P(x)$.
- **Mekanisk regel:** byt kvantor og negér prædikatet.

**Lær det her:** [★ Jitty: De Morgan's Theorem for Quantified and Nested Quantified Statements](https://www.youtube.com/watch?v=mYeNyzXgi7o)
**Øv:** negér alle påstande i Aflevering 1 B og forenkl.

### 2.4 Slutningsregler for kvantorer (ca. 1 t)
- **Universal instantiering og generalisering, eksistens-instantiering og -generalisering.**
- **Typisk opgave:** bevis en konklusion ud fra kvantificerede præmisser.

**Lær det her:** [★ Jitty: Introduction to the Rules of Inference for Quantified Statements](https://www.youtube.com/watch?v=P3Hub3wuRSE) · [★ Jitty: Proofs with the Rules of Inference for Quantified Statements, Practice Problems](https://www.youtube.com/watch?v=-UJU98TR5RM)
**Øv:** Jittys øveopgaver i videoen.

### Mastery checklist: prædikatlogik
- [ ] Jeg kan oversætte en påstand til kvantorer og tilbage.
- [ ] Jeg ved hvorfor $\forall\exists\neq\exists\forall$ og kan give et modeksempel.
- [ ] Jeg kan negere enhver kvantificeret påstand mekanisk.
- [ ] Jeg kan afgøre sand/falsk for tal-påstande med bevis eller modeksempel.

---

## 3. Mængdelære (ca. 5 t, vægt: høj)

*Hvorfor høj:* [[Courses/Diskret matematik/Aflevering 1|Aflevering 1]] opgave C (kan vi slutte $A=B$ ud fra unioner og fællesmængder?), mængdeformlerne i [[Formelsamling/Diskret matematik|Formelsamlingen]] og begrebet i [[Courses/Diskret matematik/Begreber|Begreber]].

### 3.1 Mængder, delmængder og potensmængde (ca. 1,5 t)
- **Notation:** $\in,\subseteq,\emptyset,|A|$; element er ikke delmængde.
- **Potensmængde:** $|\mathcal P(A)|=2^{|A|}$.
- **Kartesisk produkt:** $|A\times B|=|A|\cdot|B|$.

**Lær det her:** [★ Jitty: Introduction to Set Theory: Cardinality, Within, Null Set, and Subsets](https://www.youtube.com/watch?v=IZS4ehWKPhs) · [★ Jitty: Nested Sets with Subsets and Elements, Practice Problems](https://www.youtube.com/watch?v=_zjiQBfj4mI) · [★ Jitty: How to Find Power Sets](https://www.youtube.com/watch?v=WgO2gerDonQ) · [★ Jitty: How to Solve Cartesian Products](https://www.youtube.com/watch?v=fqRU4VpJEW4)
**Øv:** potensmængden af $\{1,2,\{3\}\}$.

### 3.2 Mængdeoperationer (ca. 1,5 t)
- **Union, fællesmængde, komplement, differens, symmetrisk differens.**
- **Venn-diagrammer** til tre mængder.
- **Inklusion-eksklusion (to mængder):** $|A\cup B|=|A|+|B|-|A\cap B|$.

**Lær det her:** [★ Jitty: Introduction to Union and Intersection of Sets](https://www.youtube.com/watch?v=TkIn4RIsR78) · [★ Jitty: Venn Diagrams with Union, Intersection, and Complement](https://www.youtube.com/watch?v=BIwhtmR1QbI) · [★ Jitty: Difference and Symmetric Difference](https://www.youtube.com/watch?v=uIp_KAWn-B4) · [★ Jitty: Unions and Intersections of Sequences of Sets](https://www.youtube.com/watch?v=bPFwVzy7urE)
**Øv:** farv Venn-diagrammer for 5 sammensatte udtryk.

### 3.3 Mængdeidentiteter og delmængdebeviser (ca. 2 t)
- **De Morgan for mængder:** $\overline{A\cup B}=\overline A\cap\overline B$.
- **Bevis for lighed:** vis $\subseteq$ begge veje med element-argument ("lad $x\in\dots$").
- **Aflevering 1 C:** hvorfor $A\cup C=B\cup C$ alene ikke giver $A=B$, men begge betingelser sammen gør.

**Lær det her:** [★ Jitty: Introduction to Set Identities and Some Chatter](https://www.youtube.com/watch?v=txqWl1u91kM) · [★ Jitty: Subset Proofs](https://www.youtube.com/watch?v=JQdx4dYM7CA)
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 C]], a) til c) med modeksempler.

### Mastery checklist: mængdelære
- [ ] Jeg kan beregne potensmængde og kartesisk produkt og deres størrelser.
- [ ] Jeg kan bevise en mængdeidentitet ved dobbelt delmængde.
- [ ] Jeg kan give modeksempel til $A\cup C=B\cup C\Rightarrow A=B$.
- [ ] Jeg kan De Morgan for mængder.

---

## 4. Funktioner (ca. 5 t, vægt: høj)

*Hvorfor høj:* [[Courses/Diskret matematik/Aflevering 1|Aflevering 1]] opgave D, E og F er alle funktioner (injektiv/surjektiv, inverse billeder, endelige mængder).

### 4.1 Injektiv, surjektiv, bijektiv (ca. 2 t)
- **Injektiv, surjektiv, bijektiv** og hvordan man viser hver. Se [[Glossary#injective|Injektiv]], [[Glossary#surjective|Surjektiv]], [[Glossary#bijection|Bijektion]].
- **Domæne og codomæne betyder noget:** $x\mapsto x^2$ er ikke injektiv på $\mathbb R$, men på $[0,\infty)$.
- **Typisk opgave:** klassificér fem funktioner (Aflevering 1 D, fx $2x+3$ på $\mathbb N$, $\sqrt x$, $\sin x$, $\lfloor\log_2x\rfloor$).

**Lær det her:** [★ Jitty: Injective, Surjective, and Bijective Functions](https://www.youtube.com/watch?v=Rx5RXPz0o3c) · [TrevTutor: Injective, Surjective and Bijective](https://www.youtube.com/watch?v=bZred_Ksz2k)
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 D]], alle 5.

### 4.2 Inverse billeder og invers funktion (ca. 1,5 t)
- **Urbillede:** $f^{-1}(S)=\{x\mid f(x)\in S\}$ findes selv uden invers funktion.
- **Invers funktion** findes kun for bijektioner.
- **Sammensætning:** $(g\circ f)(x)=g(f(x))$.
- **Typisk opgave:** find $f^{-1}(\{1\})$, $f^{-1}$ af et interval for $x^2$ (Aflevering 1 E).

**Lær det her:** [Math Stats: Discrete Math, Inverse Image of an Element](https://www.youtube.com/watch?v=8gd_1Yxf-wE) · [SawFin Mathematics: Inverse Functions and Composition of Functions](https://www.youtube.com/watch?v=aQefXelCN5Y) · ★ Jitty: ingen video om dette fundet.
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 E]], a) til c).

### 4.3 Endelige mængder og afrunding (ca. 1,5 t)
- **Aflevering 1 F:** for endelige mængder af samme størrelse er injektiv ⇔ surjektiv (duehulsprincippet i spil).
- **Gulv og loft:** $\lfloor x\rfloor,\lceil x\rceil$.
- **Typisk opgave:** bevis "hvis $f$ er 1-1, så er $f$ på", og omvendt.

**Lær det her:** [TrevTutor: Floor and Ceiling Examples](https://www.youtube.com/watch?v=RxNs4SwP6lk) · [TrevTutor: Pigeonhole Principle](https://www.youtube.com/watch?v=2-mxYrCNX60)
**Øv:** [[Courses/Diskret matematik/Aflevering 1|Aflevering 1 F]] begge retninger.

### Mastery checklist: funktioner
- [ ] Jeg kan afgøre injektiv/surjektiv for en $f$ med korrekt begrundelse.
- [ ] Jeg kan udregne urbilleder af mængder.
- [ ] Jeg kan forklare hvorfor 1-1 ⇔ på gælder for endelige mængder af samme størrelse.
- [ ] Jeg kan gulv og loft af $\log_2$.

---

## 5. Bevismetoder og induktion (ca. 7 t, vægt: høj)

*Hvorfor høj:* [[Courses/Diskret matematik/Begreber|Begreber]] nævner induktion, modstrid og kontraposition som standardmetoderne, og bevis er det alle emner ender i.

### 5.1 Direkte bevis og talteori-aksiomer (ca. 1,5 t)
- **Direkte bevis** med definitioner (lige/ulige, delelighed). Se [[Glossary#direct-proof|Direkte bevis]].
- **Aksiomer for heltal:** lukkethed, paritet.
- **Se også:** [[Proofs Part I]] i faget Introduction to applied mathematics, samme stof.

**Lær det her:** [★ Jitty: Introduction to Axioms for Proofs](https://www.youtube.com/watch?v=3Gs6P0pmaTM) · [★ Jitty: Direct Proofs for Even, Odd, Divisibility, and Modular Equivalence](https://www.youtube.com/watch?v=JMi4yDod0MQ)
**Øv:** bevis 5 påstande om lige/ulige og delelighed.

### 5.2 Kontraposition, modstrid, modeksempel, tilfælde (ca. 2 t)
- **Kontraposition, modstrid, modeksempel, bevis ved tilfælde.** Se [[Glossary#proof-by-contradiction|Modstrid]], [[Glossary#contrapositive|Kontraposition]], [[Glossary#counterexample|Modeksempel]].
- **Typisk opgave:** vælg metode og skriv et rent bevis.

**Lær det her:** [★ Jitty: Introduction to Proofs By Contrapositive](https://www.youtube.com/watch?v=P1clQY-C2cU) · [★ Jitty: Proof by Contradiction Worked Examples](https://www.youtube.com/watch?v=_H8fxyCX2jo) · [★ Jitty: Proof by Counterexample](https://www.youtube.com/watch?v=AzQWIdY3kk8) · [★ Jitty: Proof by Cases](https://www.youtube.com/watch?v=Y5LxP2uvTQ8) · [TrevTutor: Discrete Math Proofs in 22 Minutes](https://www.youtube.com/watch?v=HIkIqt_ytdc) · [blackpenredpen: Proving sqrt(2) is irrational](https://www.youtube.com/watch?v=BhFf0nJ5VOg)
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 1|Problem Set 1]] fra Applied mathematics.

### 5.3 Induktion (ca. 3,5 t)
- **Simpel og stærk induktion.** Se [[Glossary#induction|Induktion]], [[Glossary#strong-induction|Stærk induktion]].
- **Typiske opgaver:** sumformler, uligheder, delelighed, rekursivt definerede følger.
- **Fælde:** antal basistilfælde ved stærk induktion.

**Lær det her:** [blackpenredpen: Prove by induction, sum of the first n cubes](https://www.youtube.com/watch?v=w362XRZy5as) · [Dr. Trefor Bazett: Intro to Mathematical Induction](https://www.youtube.com/watch?v=GdM_iA1Zek4) · [Dr. Trefor Bazett: Strong Induction](https://www.youtube.com/watch?v=rfA0h9udl7E) · [MIT OCW: Contradiction and Induction](https://www.youtube.com/watch?v=_NYsYuzMLs0) · [Mu Prime Math: Binomial Coefficients Identity with Induction](https://www.youtube.com/watch?v=-qxZYAiMRBU) · ★ Jitty har ikke fundne induktionsvideoer.
**Øv:** [[Courses/Introduction to applied mathematics/Proofs (Brander)/Problem Set 2|Problem Set 2]] (Applied mathematics) opg. 2, 3 og 5.

### Mastery checklist: bevis
- [ ] Jeg kan vælge metode ud fra udsagnets form og skrive et rent bevis.
- [ ] Jeg kan induktion på en sum, en ulighed og en delelighed.
- [ ] Jeg kan forklare stærk induktions basistilfælde-regel.

---

## 6. Kombinatorik og tælling (ca. 6 t, vægt: middel til høj)

> **Pensum-hul:** ikke dækket af nogen lektionsnote eller aflevering. Dokumentation: kun [[Formelsamling/Diskret matematik|Formelsamlingens]] kombinatorik-afsnit (fakultet, permutation, kombination, binomialformel). Regn med at det kommer til eksamen, men tjek kursusbasen.

### 6.1 Sum- og produktreglen, permutationer, kombinationer (ca. 2,5 t)
- **Produktreglen / sumreglen** og deres brug i tælleopgaver.
- **Permutation:** $P(n,k)=n!/(n-k)!$ (ordnet).
- **Kombination:** $\binom nk=n!/(k!(n-k)!)$ (uordnet).
- **Typisk opgave:** kodeord, hold, ord-permutationer.

**Lær det her:** [SawFin Mathematics: Counting Rules](https://www.youtube.com/watch?v=32MnjUdIF0c) · [TrevTutor: Combinations](https://www.youtube.com/watch?v=kWPj-Q5e9Lo) · [Dr. Trefor Bazett: Combinations Formula](https://www.youtube.com/watch?v=6KYp4zjqT6s) · ★ Jitty: ingen tælle-video fundet.
**Øv:** 10 blandede tælleopgaver; for hver, afgør først "ordnet eller ej, med eller uden gentagelse".

### 6.2 Binomialformlen og Pascals trekant (ca. 1,5 t)
- **Formel:** $(a+b)^n=\sum_{k}\binom nk a^{n-k}b^k$.
- **Identiteter:** $\binom nk=\binom n{n-k}$, $\sum_k\binom nk=2^n$.

**Lær det her:** [TrevTutor: Binomial Theorem and Pascal's Triangle](https://www.youtube.com/watch?v=stfqYC13bSY)
**Øv:** udvid $(x+2y)^5$.

### 6.3 Duehulsprincippet og inklusion-eksklusion (ca. 2 t)
- **Duehul:** $n+1$ objekter i $n$ kasser giver en kasse med mindst to.
- **Inklusion-eksklusion** for tre mængder.

**Lær det her:** [TrevTutor: Pigeonhole Principle](https://www.youtube.com/watch?v=2-mxYrCNX60) · [MIT OCW: The Pigeonhole Principle](https://www.youtube.com/watch?v=4Dz4vNUxnZM) · [TrevTutor: Inclusion-Exclusion Principle](https://www.youtube.com/watch?v=GS7dIWA6Hpo)
**Øv:** 3 duehulsbeviser og 3 inklusion-eksklusion-opgaver.

### Mastery checklist: kombinatorik
- [ ] Jeg vælger permutation/kombination uden tøven.
- [ ] Jeg kan udvide binomialer og bruge $\sum\binom nk=2^n$.
- [ ] Jeg kan bruge duehulsprincippet og inklusion-eksklusion.

---

## 7. Relationer (ca. 4 t, vægt: middel)

> **Pensum-hul:** ikke nævnt i vaulten. Standardstof i diskret matematik; bekræft i kursusbasen.

### 7.1 Binære relationer og egenskaber (ca. 2 t)
- **Relation:** delmængde af $A\times B$, repræsenteret som matrix eller digraf.
- **Egenskaber:** refleksiv, symmetrisk, antisymmetrisk, transitiv.

**Lær det her:** [★ Jitty: Introduction to Binary Relations and Matrix Representation](https://www.youtube.com/watch?v=fvmuESDw3C4) · [★ Jitty: Properties of Relations](https://www.youtube.com/watch?v=7aECMU-a9P4) · [★ Jitty: Transitivity and Anti-Transitivity](https://www.youtube.com/watch?v=IkxTzyZO5p4)
**Øv:** klassificér 6 relationer på små mængder.

### 7.2 Ækvivalensrelationer og ordninger (ca. 1 t)
- **Ækvivalensrelation:** refleksiv, symmetrisk og transitiv; ækvivalensklasser opdeler mængden.
- **Delvis ordning:** refleksiv, antisymmetrisk, transitiv.

**Lær det her:** [★ Jitty: Partial Order, Strict Orders, and Equivalence Relations](https://www.youtube.com/watch?v=RKeFY_SlZIQ)
**Øv:** vis at "samme rest mod 3" er en ækvivalensrelation.

### 7.3 Sammensætning af relationer (ca. 1 t)
- **Sammensætning** med mængder, matrix eller digraf.

**Lær det her:** [★ Jitty: Composition of Binary Relations Using Sets](https://www.youtube.com/watch?v=Vx3LjUtKGNs) · [★ Jitty: Compositions of Binary Relations Using Digraphs](https://www.youtube.com/watch?v=5SRXrwReg3c)
**Øv:** sammensæt to relationer på 4 elementer med matrixmultiplikation.

### Mastery checklist: relationer
- [ ] Jeg kan teste de 4 egenskaber og bevise en ækvivalensrelation.
- [ ] Jeg kan sammensætte relationer.

---

## 8. Boolsk algebra og logiske kredse (ca. 3 t, vægt: lav til middel)

*Dokumentation:* [[Logic gates Lection 1]] (kun overskrift, men viser at logiske porte var emnet i første lektion).

### 8.1 Logiske porte og boolske udtryk (ca. 1,5 t)
- **Porte:** NOT, AND, OR, NAND, NOR, XOR, XNOR.
- **Fra kredsløb til ligning** og omvendt.

**Lær det her:** [★ Jitty: Introduction to Logic Gates](https://www.youtube.com/watch?v=pUoljIrYSFU) · [★ Jitty: Digital Logic Circuits and Truth Tables](https://www.youtube.com/watch?v=Dg21uMzlUMo) · [★ Jitty: How to Convert Digital Logic Circuits to Boolean Equations](https://www.youtube.com/watch?v=2IuNQQxhB4Y)
**Øv:** tegn kredsløbet for XOR kun med NAND.

### 8.2 Boolsk algebra og normalformer (ca. 1,5 t)
- **Love:** samme som logiske ligheder (De Morgan, distributiv).
- **Minterm / sum af produkter** og maxterm / produkt af summer.

**Lær det her:** [★ Jitty: Introduction to Boolean Algebra](https://www.youtube.com/watch?v=3yAlsnyLsSc) · [★ Jitty: Properties of Boolean Algebra](https://www.youtube.com/watch?v=zd54mpsijeA) · [★ Jitty: Boolean Algebra Practice Problems](https://www.youtube.com/watch?v=p1olXcSW97g) · [★ Jitty: Minterms and Sums of Products](https://www.youtube.com/watch?v=7fpDf5CW1ow) · [★ Jitty: Maxterms and Product of Sums](https://www.youtube.com/watch?v=9dCOSM8xfC8)
**Øv:** find SOP for en sandhedstabel med 3 variable.

### Mastery checklist: boolsk algebra
- [ ] Jeg kan gå mellem sandhedstabel, boolsk udtryk og kredsløb.
- [ ] Jeg kan SOP og POS.

---

## 9. Rekursion, summer og talteori (ca. 3 t, vægt: lav)

> **Pensum-hul:** kun summerne i [[Formelsamling/Diskret matematik|Formelsamlingen]] er dokumenteret. Modulær aritmetik og rekursion er gætværk ud fra standardfaget.

### 9.1 Summer og rekursionsligninger (ca. 1,5 t)
- **Summer:** $\sum i=n(n+1)/2$ og $\sum i^2=n(n+1)(2n+1)/6$ (bevises ved induktion).
- **Rekursion:** definér en følge ud fra tidligere led (Fibonacci).

**Lær det her:** [TrevTutor: Recurrence Relations](https://www.youtube.com/watch?v=eAaP4XaB8hM) · [SawFin Mathematics: Recurrence Relations](https://www.youtube.com/watch?v=QaAQ-bKCUME) · [★ Jitty: Python Part 18, Recursion (Fibonacci, factorial)](https://www.youtube.com/watch?v=XEhNGKCbnFg)
**Øv:** find lukket formel for $a_n=2a_{n-1}+1$, $a_0=0$ og bevis den ved induktion.

### 9.2 Modulær aritmetik (ca. 1,5 t)
- **Kongruens:** $a\equiv b\pmod m$.
- **Regneregler** for $+$ og $\cdot$ modulo $m$.

**Lær det her:** [★ Jitty: Introduction to Modular Arithmetic](https://www.youtube.com/watch?v=cYRjNOe_5uc)
**Øv:** bevis at kvadrater er $0$ eller $1$ mod $4$.

### Mastery checklist: rekursion og talteori
- [ ] Jeg kan bevise de to standardsummer ved induktion.
- [ ] Jeg kan regne modulo og bevise simple kongruenser.

---

## Kørselsplan

1. **Dag 1 til 2:** emne 1 og 2 (logik), derefter [[Courses/Diskret matematik/Aflevering 1|Aflevering 1]] A og B uden at kigge.
2. **Dag 3 til 4:** emne 3 og 4 (mængder og funktioner), derefter C til F.
3. **Dag 5 til 6:** emne 5 (bevis og induktion).
4. **Dag 7:** emne 6 (kombinatorik).
5. **Dag 8:** emne 7 til 9 hvis kursusbasen bekræfter dem.
6. **Hele vejen:** [[Flashcards/Discrete Math Flashcards|Flashcards]] og [[Self-Tests/Diskret matematik Test|Selvtest]].

## Links

- [[Courses/Diskret matematik/Diskret matematik|Kursusforside]]
- [[Courses/Diskret matematik/Begreber|Begreber]]
- [[Formelsamling/Diskret matematik|Formelsamling]]
- [[Flashcards/Discrete Math Flashcards|Flashcards]]
- [[Self-Tests/Diskret matematik Test|Selvtest]]
- [[Study-Roadmap]]
