---
publish: true
title: "Diskret matematik uge 12: Grafer og Cantor-Schröder-Bernstein"
course: Diskret matematik
type: week
week: 12
tags:
  - diskret-matematik
  - ugenote
---

# Uge 12: Grafer og Cantor-Schröder-Bernstein-sætningen

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W12, 26. november). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave (kapitel 10). Det grafteoretiske bevis for Cantor-Schröder-Bernstein, som planen nævner, ligger ikke som link på kursussiden, så det er ikke læst. Planen oplyser, at sætningen hedder Schröder-Bernstein i opgave 41 i afsnit 2.5.

## Emner

- Grafer og grafmodeller (10.1), grafterminologi og særlige grafer (10.2)
- Repræsentation af grafer og isomorfi (10.3)
- Sammenhæng (10.4)
- Euler- og Hamiltonstier (10.5)
- Cantor-Schröder-Bernstein-sætningen (grafteoretisk bevis)

## Begreber

**Graf.** En simpel graf $G = (V, E)$ har en mængde knuder $V$ og en mængde kanter $E$ af uordnede par. Eksempel: $V = \{a,b,c\}$, $E = \{ab, bc\}$ er en sti med to kanter.

**Grad og håndtrykslemmaet.** Graden $\deg(v)$ er antallet af kanter ved $v$. Summen af alle grader er $2|E|$. Konsekvens: antallet af knuder med ulige grad er lige. Eksempel: i en graf med 4 knuder af grad $3,3,2,2$ er $|E| = 5$.

**Særlige grafer.** Komplet graf $K_n$ (alle par forbundne, $\binom{n}{2}$ kanter), kreds $C_n$, hjul, tosidet (bipartit) graf, og komplet bipartit $K_{m,n}$ (med $mn$ kanter). Eksempel: $K_5$ har $\binom{5}{2} = 10$ kanter.

**Repræsentation.** Naboliste, nabomatrix og incidensmatrix. Nabomatricen $A$ har $a_{ij} = 1$, hvis $i$ og $j$ er forbundet. Eksempel: for stien $a-b-c$ er rækkerne $(0,1,0), (1,0,1), (0,1,0)$.

**Isomorfi.** To grafer er isomorfe, hvis der findes en bijektion mellem knuderne, der bevarer kanter. Hvis grader, antal kanter eller kredsstørrelser er forskellige, er de ikke isomorfe. Eksempel: $C_6$ og to adskilte trekanter har begge 6 knuder og 6 kanter, men den ene er sammenhængende, så de er ikke isomorfe.

**Sammenhæng.** En sti er en følge af kanter mellem knuder. En graf er sammenhængende, hvis der er en sti mellem alle par. Komponenter er de maksimale sammenhængende dele.

**Eulerkreds og Eulersti.** En Eulerkreds bruger hver kant præcis én gang og vender tilbage. En sammenhængende graf har en Eulerkreds netop når alle knuder har lige grad. En Eulersti (ikke lukket) findes netop når højst to knuder har ulige grad. Eksempel: $K_5$ har alle grader 4, altså en Eulerkreds; $K_4$ har alle grader 3, så ingen.

**Hamiltonkreds.** En kreds, der besøger hver knude præcis én gang. Der er ingen simpel nødvendig og tilstrækkelig betingelse. Eksempel: $K_n$ med $n \ge 3$ har en.

**Cantor-Schröder-Bernstein.** Hvis der er en injektion $A \to B$ og en injektion $B \to A$, så er der en bijektion mellem $A$ og $B$, altså $|A| = |B|$. Beviset, som kurset nævner, er grafteoretisk. Det er ikke læst her.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Hvor 8. udgave har andre numre, står de i parentes.

- Afsnit 10.1: **11**
- Afsnit 10.2: **5**, **47** (**43** i 8. udgave), 59 (55 i 8. udgave)
- Afsnit 10.3: 7, **57**
- Afsnit 10.4: **9**, **11**
- Afsnit 10.5: 1, **3**, **13**

## Tjek dig selv

- [ ] Kan jeg bruge håndtrykslemmaet til at finde antal kanter ud fra gradsekvensen?
- [ ] Kan jeg opstille nabomatricen for en lille graf?
- [ ] Kan jeg argumentere for, at to grafer ikke er isomorfe?
- [ ] Kan jeg afgøre, om en graf har en Eulerkreds eller Eulersti, bare ved at tælle grader?
- [ ] Kan jeg forklare forskellen på Euler- og Hamiltonkreds?
- [ ] Kan jeg formulere Cantor-Schröder-Bernstein-sætningen?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
