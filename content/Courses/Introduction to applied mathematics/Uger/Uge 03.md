---
publish: true
title: "Introduction to applied mathematics uge 3: Operations Research, del 1"
course: Introduction to applied mathematics
type: week
week: 3
tags:
  - applied-math
  - ugenote
---

# Uge 3: Operations Research, del 1

> Kilde: DTU Learn 02525, Project 2: `OR_Lecture1.pdf` (Thomas Stidsen, 14/9 2026), `OR_Projekt.pdf` (brændstofprojektet), `bryggeri.py`, `bryggeri_integer.py`, `knapsack.py`. Mandag 14/9 2026. Mine egne noter: [[Lection 3 Operations research]].

## Emner

- Hvad er operationsanalyse (OR)?
- Matematiske optimeringsmodeller: beslutningsvariable, objektfunktion, betingelser
- Grafisk løsning af et problem med to variable
- Heltalsvariable og binære variable
- Assignment-problemet og rygsæksproblemet
- Grådige algoritmer
- Introduktion til projektet om brændstof i liner shipping (deadline 27/9)

## Praktisk om Python

Meddelelse 15/9: nogle havde problemer med PuLP-pakken. Man behøver ikke slette sit gamle environment, men ved gruppeopgaver i 02525 skal man aktivere environmentet `intromat` og arbejde dér i stedet for `base`. Der findes også en Python-supportside for kurset: https://pythonsupport.dtu.dk/course/02525.html.

## Begreber

**Operationsanalyse.** Slides citerer INFORMS (2004): at anvende avancerede analytiske metoder til at træffe bedre beslutninger. Faget er tværfagligt. Eksempel fra slides: optimering af kabellayout for en offshore vindpark (Fischetti og Pisinger, 2018), hvor en bedre løsning sparer 1,5 mio. euro.

**Optimeringsmodel.** Består af beslutningsvariable (hvad vi kan vælge), en objektfunktion (det vi vil maksimere eller minimere) og betingelser. En lovlig løsning opfylder alle betingelser. En optimal løsning er den bedste lovlige løsning med hensyn til objektfunktionen. Generel form for en LP med maksimering:

$$\max \sum_{j} c_j x_j \quad \text{s.t.} \quad \sum_{j} A_{ij} x_j \le b_i \;\; \forall i, \quad x_j \ge 0.$$

**Bryggeri-eksemplet.** Stout giver profit 4 pr. balje og bruger 3 kg humle og 1 dl gær. Pilsner giver 5 og bruger 2 kg humle og 4 dl gær. Der er 5 kg humle og 8 dl gær. Med $x_1$ baljer stout og $x_2$ baljer pilsner:

$$\max\; 4x_1 + 5x_2 \quad \text{s.t.} \quad 3x_1 + 2x_2 \le 5,\;\; x_1 + 4x_2 \le 8.$$

Grafisk løsning: den optimale ikke-heltallige løsning er $x_1 = 0{,}4$, $x_2 = 1{,}9$ med værdi $11{,}1$. En optimal løsning af et LP ligger altid i et hjørnepunkt, og simplexmetoden går fra hjørne til hjørne. Kræver man heltal ($x_j \in \mathbb{N}_0$), bliver optimum $x_1 = 0$, $x_2 = 2$ med værdi $10$. Man nøjes så ikke længere med hjørnepunkter.

**Python med PuLP.** `bryggeri.py` opretter `LpProblem('Bryggeri_optimering', LpMaximize)`, to variable `beer1` og `beer2` med `lowBound=0`, tilføjer objektfunktionen `4*x1 + 5*x2` og to betingelser, kalder `problem.solve()` og printer mængder og profit. `bryggeri_integer.py` er identisk, men variablene har `cat='Integer'`, og løsningen bliver derfor $(0, 2)$ med profit $10$.

**Binære variable.** $x \in \{0, 1\}$ bruges til ja/nej-beslutninger og kan modellere ethvert problem med et begrænset antal muligheder.

**Assignment-problemet.** 4 jobs skal fordeles på 4 personer, så hver person får præcis ét job og hvert job præcis én person. Med $x_{ij} = 1$ hvis person $i$ får job $j$:

$$\max \sum_{i=1}^{4}\sum_{j=1}^{4} c_{ij}x_{ij} \quad \text{s.t.} \quad \sum_{j} x_{ij} = 1 \;\forall i, \quad \sum_{i} x_{ij} = 1 \;\forall j, \quad x_{ij} \in \{0,1\}.$$

**Rygsæksproblemet.** Genstande har værdi $v_i$ og vægt $w_i$, rygsækken har kapacitet $W$:

$$\max \sum_i v_i x_i \quad \text{s.t.} \quad \sum_i w_i x_i \le W, \quad x_i \in \{0,1\}.$$

Slides-eksempel med $W = 15$: kop ($w=3$, $v=7$), disketter ($w=4$, $v=10$), papir ($w=12$, $v=4$), T-shirt ($w=2$, $v=4$), bog ($w=6$, $v=8$). `knapsack.py` modellerer det med binære variable.

**Grådig algoritme.** Tag i hver iteration det lokalt bedste valg, her genstande efter værdi/vægt. På eksemplet giver den kop, disketter, T-shirt og bog med værdi $29$. Hvis disketterne vejer $5$ i stedet for $4$, giver grådig valg værdi $21$ (bogen kan ikke være med), mens kop, disketter og bog giver $25$. Pointen er at en grådig algoritme kan være heldig eller uheldig.

## Opgaver

Projektet `OR_Projekt.pdf`, "Optimering i containerbranchen: reducering af omkostninger til brændstof". Skibet sejler Mombasa, Zanzibar, Victoria, Salalah og tilbage til Mombasa, har 2 tanke á $3500$ mt og skal have præcis $1000$ mt reserve ved ankomst til Mombasa. Data i opgaven: forbrug til næste havn $700$, $1800$, $2200$, $2800$ mt, reserve ved ankomst $1000$ (start), $1200$, $1800$, $2800$ mt, brændstofpris $600$, $900$, $1100$, $1200$ dollar pr. mt. Rapportdeadline 27/9.

Opgaverne, nummereret som i PDF'en:

1. Hvilken betingelse er ikke opfyldt i rederiets seneste tankningsmønster (Mombasa $2000/2000$, Zanzibar $1000/1000$, Victoria $1000/1000$, Salalah $0/0$)? Husk de $1000$ mt ombord før optankning i Mombasa.
2. Efter ny data (Victoria $750/750$ i stedet): (a) Er alle betingelser nu opfyldt? (b) Hvad koster løsningen?
3. Lad $l_{is}$ være mængden fyldt på tank $s \in S = \{1, 2\}$ i havn $i \in P = \{0, 1, 2, 3\}$. Skriv omkostningen til brændstof som funktion af $l_{is}$.
4. Forklar med ord: $f_{is} \le h_{is}$ for alle $i \in \{0,1,2,3\}$, $s \in \{1,2\}$.
5. Beskriv med ord: $h_{is} = h_{i-1,s} + l_{is} - f_{i-1,s}$ for $i \in \{1,2,3\}$, og for Mombasa $h_{0s} = h_{3s} + l_{0s} - f_{3s}$.
6. Opstil kravet til brændstofmængden i tankene ved afgang fra Zanzibar ($h_{1s}$) og Victoria ($h_{2s}$) på samme måde som eksemplerne $h_{31} + h_{32} = R_0 + F_3 = 3800$ og $h_{01} + h_{02} \ge R_1 + F_0 = 1900$.
7. Beskriv med ord: $f_{i1} + f_{i2} = F_i$ for alle $i$.
8. Skriv omkostningen som skal minimeres i Python (`obj`).
9. Skriv betingelserne (1) til (6) i Python som listen `cnsts`.
10. Løs modellen i Python. Angiv værdierne af $h_{is}$, $f_{is}$ og $l_{is}$.
11. Er løsningen lovlig?
12. Angiv domænet for $h_{is}$. Behøver vi domæne for $l_{is}$ og $f_{is}$? Hvorfor eller hvorfor ikke?
13. Tilføj domænebetingelser til `cnsts`. Minimér med LPSolve og angiv omkostning og værdier.
14. Tankene sidder på hver sin side, så niveauerne skal være ens både ved ankomst og afgang. Tilføj det til modellen.
15. Find løsningen og sammenlign med spørgsmål 13.
16. Hvor meget er sparet i forhold til rederiets oprindelige tankning?
17. Kan antallet af begrænsninger og/eller variable reduceres?
18. Faste ekstraomkostninger $c_i$ ved at tanke i havn $i$ (Mombasa $200000$, Zanzibar $100000$, Victoria $400000$, Salalah $300000$ dollar, betales kun hvis der tankes). Tilføj variable, begrænsninger, domæne og opdatér objektfunktionen.

## Tjek dig selv

- [ ] Kan jeg pege på beslutningsvariable, objektfunktion og betingelser i bryggeri-modellen?
- [ ] Kan jeg tegne bryggeriets lovlige område og finde hjørnet $(0{,}4;\ 1{,}9)$?
- [ ] Hvorfor er heltalsoptimum $10$ lavere end LP-optimum $11{,}1$?
- [ ] Kan jeg opstille assignment-problemet med $x_{ij}$ og forklare de to summer?
- [ ] Kan jeg vise på rygsækseksemplet at en grådig algoritme ikke altid er optimal?
- [ ] Kan jeg forklare med ord hvad $h_{is}$, $f_{is}$ og $l_{is}$ er?
- [ ] Hvad er forskellen på at tanke "det samme i begge tanke" (spørgsmål 14) og den frie model?

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
