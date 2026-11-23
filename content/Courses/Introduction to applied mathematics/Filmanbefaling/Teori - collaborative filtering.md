---
publish: true
title: "02525 Filmanbefaling: teori (collaborative filtering)"
course: Introduction to applied mathematics
type: note
tags:
  - applied-math
  - filmanbefaling
  - collaborative-filtering
---

# Filmanbefaling: collaborative filtering

Projekt 1 "Filmanbefaling" i 02525, underviser Georgios Arvanitidis (DTU Compute). Noten samler pensum fra `Notes.pdf` og `Lecture1_updated.pdf` (uge 1 af projektet, 16/11 2026).

## Notation

| Symbol | Betydning |
| --- | --- |
| $N$ | antal brugere |
| $M$ | antal film |
| $\mathbf R$ | ratingmatricen, $N \times M$, indgang $R_{a,i}$ er bruger $a$'s rating af film $i$ |
| $\mathbf R_a$ | bruger $a$'s rækkevektor af ratings |
| $\bar R_a$ | gennemsnittet af bruger $a$'s ratings |
| $\mathbf S$ | similaritetsmatricen, $N \times N$ (user-based) |
| $\mathrm{KNN}(a)$ | de $k$ nærmeste naboer til bruger $a$ |
| $\mathbf P$ | prædiktionsmatricen, samme form som $\mathbf R$ |

Ratingskalaen i projektet er 0 til 5, hvor 0 er en gyldig rating ("Bad"). Manglende ratings skal derfor gemmes som missing (NaN), ikke som 0.

## To familier af anbefalingssystemer

- **Content-based filtering:** anbefaler film hvis egenskaber (genre, skuespillere) ligner dem brugeren allerede kan lide.
- **Collaborative filtering:** anbefaler ud fra mange brugeres ratings. Det er den, projektet handler om.

Collaborative filtering hviler på to antagelser:

1. Brugere kan lide film, som andre **lignende brugere** kan lide (user-based).
2. Brugere kan lide film, der **ligner film**, de allerede kan lide (item-based).

## Similaritetsmål

### Euklidisk

$$D_{\text{Euclidean}}(a,b) = \sqrt{\sum_{i=1}^{M} (R_{a,i} - R_{b,i})^2}, \qquad S_{\text{Euclidean}}(a,b) = \frac{1}{1 + D_{\text{Euclidean}}(a,b)}$$

Det ekstra $1$ i nævneren forhindrer division med nul. $S \in (0,1]$: identiske brugere giver $S = 1$, og $S \to 0$ når afstanden vokser.

### Manhattan

$$D_{\text{Manhattan}}(a,b) = \sum_{i=1}^{M} |R_{a,i} - R_{b,i}|, \qquad S_{\text{Manhattan}}(a,b) = \frac{1}{1 + D_{\text{Manhattan}}(a,b)}$$

Samme værdiområde $(0,1]$.

### Pearson

$$S_{\text{Pearson}}(a,b) = \frac{\frac{1}{M}\sum_{i=1}^{M}(R_{a,i} - \bar R_a)(R_{b,i} - \bar R_b)}{\sqrt{\frac{1}{M}\sum_{i=1}^{M}(R_{a,i} - \bar R_a)^2} \cdot \sqrt{\frac{1}{M}\sum_{i=1}^{M}(R_{b,i} - \bar R_b)^2}} = \frac{\operatorname{Cov}(\mathbf R_a, \mathbf R_b)}{\sigma_{\mathbf R_a} \cdot \sigma_{\mathbf R_b}}$$

$S \in [-1, 1]$. Faktorerne $\frac{1}{M}$ forkorter ud, så man i praksis bare kan regne på summerne. Fordi hver brugers eget gennemsnit trækkes fra, fjerner Pearson personlige ratingvaner: en streng og en gavmild bedømmer med samme smag får stadig $S$ tæt på $1$.

Pearson måler kun, hvor tæt punkterne ligger på en ret linje. Hældningens størrelse betyder ingenting (kun fortegnet), $\rho$ er udefineret for en vandret linje, og tydelige ikke-lineære mønstre kan stadig give $\rho = 0$.

**Forskellen i praksis:** Manhattan og euklidisk afhænger af de faktiske ratingværdier, Pearson kun af mønsteret.

### Similaritetsmatricen

$\mathbf S$ er $N \times N$, symmetrisk ($S_{a,b} = S_{b,a}$) og har $1$ i diagonalen. Den beregnes ud fra $\mathbf R$ og et valgt similaritetsmål.

## $k$ nærmeste naboer

Kig på bruger $a$'s række i $\mathbf S$ og tag de $k$ **andre** brugere med de største værdier. Diagonalen ignoreres, fordi en bruger altid ligner sig selv mest.

Valget af $k$ er en afvejning: et lille $k$ bygger på meget få brugere (støjende prædiktioner), et stort $k$ lader også mindre lignende brugere påvirke resultatet.

## Prædiktion

Tre skemaer, alle med $b$ som nabo i $\mathrm{KNN}(a)$ og $m$ som filmen:

**Gennemsnit.** Behandler alle naboer ens:

$$P_{\text{avg}}(a,m) = \frac{1}{k}\sum_{b \in \mathrm{KNN}(a)} R_{b,m}$$

**Vægtet gennemsnit.** Vægter hver nabo med dens andel af den samlede similaritet:

$$P_{\text{wavg}}(a,m) = \sum_{b \in \mathrm{KNN}(a)} w_{a,b} R_{b,m}, \qquad w_{a,b} = \frac{S_{a,b}}{\sum_{b' \in \mathrm{KNN}(a)} S_{a,b'}}$$

**Vægtet gennemsnit, korrigeret.** Korrigerer for at nogle brugere generelt giver høje eller lave ratings:

$$P_{\text{wavg-corrected}}(a,m) = \bar R_a + \sum_{b \in \mathrm{KNN}(a)} w_{a,b}\,(R_{b,m} - \bar R_b)$$

Her forskydes prædiktionen fra bruger $a$'s eget niveau med naboernes afvigelser fra deres niveau.

## Algoritmen

1. Hent ratingmatricen $\mathbf R$ med $N$ brugere og $M$ film.
2. Beregn similaritetsmatricen $\mathbf S$ med et valgt similaritetsmål.
3. Find de $k$ nærmeste naboer til bruger $a$.
4. Beregn prædiktioner for alle film, $a$ ikke har set.
5. Anbefal bruger $a$ de $l$ bedste film.

$\mathbf S$ skal kun genberegnes, når ratings ændrer sig. Trin 3 til 5 gentages for hver bruger, vi vil anbefale til.

## Evaluering

$$\mathrm{MAE} = \frac{1}{NM}\sum_{i=1}^{N}\sum_{j=1}^{M} |P_{i,j} - R_{i,j}|$$

Har $\mathbf R$ manglende indgange, tælles kun de indgange, hvor $R_{i,j}$ findes (og der divideres med antallet af dem). Jo mindre fejl, jo bedre.

## Valg af parametre

Antal naboer $k$, similaritetsmål og prædiktionsmetode er frie valg. Standardmetoden er **grid search**: afprøv alle kombinationer og vælg den, der minimerer MAE. Med $N_P$ prædiktionsmetoder, $N_S$ similaritetsmål og $N_K$ værdier af $k$ er det $N_P \cdot N_S \cdot N_K$ forsøg.

## Praktiske forbehold

- **Manglende værdier.** Beregn similariteten kun over de film, begge brugere har set. Er der intet overlap, sættes similariteten til $0$. Prædiktionen bruger kun de naboer, der faktisk har bedømt filmen.
- **Beregningspris.** User-based kræver, at $\mathbf S$ genberegnes, hver gang en ny bruger kommer til (en ny række og søjle, $N$ nye similariteter). Det er en af grundene til, at item-based ofte foretrækkes i praksis.
- **Få fælles film.** I øvelserne bygger hver similaritet på fire fælles film. Det er meget støjende.
- **Er testen fair?** Ratingen $R_{u,m}$ indgår aldrig i sin egen prædiktion, fordi en bruger ikke er sin egen nabo. Men den indgik, da $\mathbf S$ blev beregnet.

## Links

- [[Courses/Introduction to applied mathematics/Filmanbefaling/Exercise 1 - løsning|Exercise 1, løsning]]
- [[Courses/Introduction to applied mathematics/Filmanbefaling/User-user handout - gennemregnet|User-user handout, gennemregnet]]
- [[Courses/Introduction to applied mathematics/Uger/Uge 11 - Filmanbefaling, del 1|Uge 11]]
- [[Courses/Introduction to applied mathematics/Uger/Uge 12 - Filmanbefaling, del 2|Uge 12]]
- [[Introduction to applied mathematics|Kursusside]]
