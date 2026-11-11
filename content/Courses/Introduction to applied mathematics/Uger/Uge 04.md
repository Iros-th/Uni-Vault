---
publish: true
title: "Introduction to applied mathematics uge 4: Operations Research, del 2"
course: Introduction to applied mathematics
type: week
week: 4
tags:
  - applied-math
  - ugenote
---

# Uge 4: Operations Research, del 2

> Kilde: DTU Learn 02525, Project 2: `Lecture2.pdf` ("OR-Lecture2", Thomas Stidsen, 21/9 2026), `Tshirt.py`, samt projektbeskrivelsen `OR_Projekt.pdf`. Mandag 21/9 2026, rapportdeadline 27/9.

## Emner

- Repetition af læringsmål fra sidste uge
- Notation: $c$, $b$, $A$ og summer
- Opskrivning af en model ud fra tekst (T-shirt-eksemplet)
- Heltalskrav, logiske betingelser, fikseret omkostning
- Løsningsmetoder: eksakte metoder og heuristikker
- Branch and bound, TSP, grådig algoritme og lokalsøgning
- Videre OR-kurser på DTU

## Begreber

**Notation.** Bryggeri-modellen skrives med $c = (4, 5)$, $b = (5, 8)$ og $A = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}$, så $c_2 = 5$, $b_1 = 5$ og $A_{12} = 2$. Slides bruger $\sum$ for en sum og $\forall$ ("for alle") for at lave en betingelse for hvert element. Her er $i$ ressourcen (humle, gær) og $j$ produktet (stout, pilsner):

$$\max \sum_j c_j x_j \quad \text{s.t.} \quad \sum_j A_{ij}x_j \le b_i \;\forall i.$$

**At opskrive en model (T-shirts).** To typer T-shirts med profit $2$ og $3$. Mindst $3$ T-shirts i alt, $20$ og $10$ materialeenheder pr. stk. med $80$ til rådighed, og produktionen af type 2 må højst være det dobbelte af type 1. Modellen:

$$\max\; 2x_1 + 3x_2 \quad \text{s.t.} \quad x_1 + x_2 \ge 3,\;\; 20x_1 + 10x_2 \le 80,\;\; x_2 \le 2x_1,\;\; x_1, x_2 \ge 0.$$

Slides bemærker at $x_1, x_2 \ge 0$ ikke sikrer heltal, men at det optimale her tilfældigvis er heltallet. Vil man være sikker, bruger man $x_1, x_2 \in \mathbb{N}_0$, som i `Tshirt.py` (`cat='Integer'`, `lowBound=0`).

**Logiske betingelser med binære variable.** Eksempel med fire venner, $x_i \in \{0, 1\}$ for om ven $i$ inviteres:

- ikke alle: $\sum_{i=1}^{4} x_i \le 3$
- mindst én: $\sum_{i=1}^{4} x_i \ge 1$
- ven 2 ikke hvis ven 3: $x_2 + x_3 \le 1$
- ven 3 kun hvis ven 4: $x_3 \le x_4$
- begge af 1 og 2 eller ingen: $x_1 = x_2$

**Fikseret omkostning (transportproblem).** Modellen $\min\; x_1 + 2x_2 + 5y_1 + 5y_2$ med $x_1 + x_2 \ge 10$, $x_1 \le 7y_1$, $x_2 \le 12y_2$, $x_i \in \mathbb{N}_0$, $y_i \in \{0,1\}$ viser hvordan en binær $y$ kobler til om en rute bruges. Samme idé er nødvendig i projektets spørgsmål 18 (fast omkostning ved at tanke i en havn).

**Eksakte metoder og heuristikker.** Eksakte metoder finder og beviser et optimum: grafisk løsning (2 variable), simplex (LP), branch and bound (heltal eller binære). Heuristikker finder en forhåbentlig god løsning: grådige algoritmer, lokalsøgning.

**Branch and bound.** Man tillader først ikke-heltallige løsninger (relaksation) og tilføjer systematisk begrænsninger, der fjerner dem. Rygsæk-relaksationen (KNAPSACK-LP) har $x_i \in [0,1]$, og slides fremhæver at $\text{Opt(LP)} \ge \text{Opt(MIP)}$, og at en tilføjet begrænsning aldrig forbedrer relaksationens optimum. Det giver en øvre grænse, der bruges til at skære grene væk.

**TSP (Travelling Salesman Problem).** Find den korteste rute der besøger alle byer. Grådigt: byg ruten kant for kant og vælg den korteste kant, der ikke giver en ulovlig løsning. Forbedring med lokalsøgning: byt rundt på to kanter (swap). Lokalsøgning har ingen garanti for kvaliteten og kan sidde fast i et lokalt optimum.

**Eksakt TSP-model.** Binær $x_{ij}$ er $1$ hvis sælgeren går fra by $i$ til $j$. De to første sæt betingelser ligner assignment-problemet (hver by forlades og nås præcis én gang), men tillader delture. Derfor tilføjes en tællevariabel $u_c$ pr. by med

$$u_{c_1} + 1 \le u_{c_2} + |C|\,(1 - x_{c_1 c_2}) \quad \forall\, c_1 \ne c_2,\; c_2 \ne 1.$$

Slidet skriver objektfunktionen som max. Modellen virker kun op til cirka $30$ byer, så heuristikker er stadig nødvendige.

**Videre.** DORS (dansk OR-forening) og DTU-kurser som 42101 Introduktion til operationsanalyse (BSc) og 42112, 42114, 42115 (MSc).
## Opgaver

- Projektet `OR_Projekt.pdf` fortsætter: spørgsmål 1 til 18 (se listen i [[Courses/Introduction to applied mathematics/Uger/Uge 03|Uge 3]]). Rapportdeadline 27/9.
- `Tshirt.py` er et løst eksempel (T-shirt-modellen) at tage udgangspunkt i, når projektet skal kodes i PuLP.
- Slides har ikke nummererede øvelser udover diskussionsspørgsmålene "Opt(KNAPSACK-LP) $\ge$ Opt(KNAPSACK-MIP): hvorfor?" og "Er denne TSP-løsning optimal?".

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
