---
publish: true
title: "02525 Filmanbefaling: Exercise 1 (uge 1), løsning"
course: Introduction to applied mathematics
type: opgave
tags:
  - applied-math
  - filmanbefaling
  - opgaveløsning
---

# Exercise 1 (uge 1): løsning

Opgaven er `Ex1.pdf` fra Projekt 1 "Filmanbefaling". $M = 5$ film og $N = 8$ brugere. Alle similariteter regnes **kun** på de fire film, alle har bedømt (Interstellar, The Revenant, The Matrix, Ratatouille), fordi Andreas mangler en rating for Dark Knight.

Alle tal herunder er regnet efter formlerne i [[Courses/Introduction to applied mathematics/Filmanbefaling/Teori - collaborative filtering|teorinoten]] og stemmer med de udfyldte felter i opgavens tabeller (kontrolleret på Michael/Christian, Gitte/Wivi og Andreas/Gitte for begge mål).

## Data

| Bruger | Interstellar | The Revenant | The Matrix | Ratatouille | Dark Knight |
| --- | --- | --- | --- | --- | --- |
| Michael | 5 | 4 | 1 | 4 | 3 |
| Christian | 5 | 3 | 4 | 2 | 4 |
| Gitte | 2 | 4 | 1 | 5 | 5 |
| Andreas | 3 | 5 | 3 | 5 | ? |
| Emilie | 4 | 3 | 5 | 1 | 4 |
| Sofie | 5 | 2 | 3 | 3 | 4 |
| Isabel | 2 | 1 | 1 | 2 | 2 |
| Wivi | 3 | 3 | 1 | 5 | 2 |

## 1. Euklidisk similaritet mellem Andreas og Christian

Andreas $= [3,5,3,5]$, Christian $= [5,3,4,2]$.

$$D = \sqrt{(3-5)^2 + (5-3)^2 + (3-4)^2 + (5-2)^2} = \sqrt{4 + 4 + 1 + 9} = \sqrt{18} = 4.2426$$

$$S_{\text{Euclidean}}(\text{Andreas}, \text{Christian}) = \frac{1}{1 + 4.2426} = 0.1907 \approx \mathbf{0.19}$$

Det er den laveste similaritet i Andreas' række: Christian er hans fjerneste nabo i euklidisk forstand.

## 2. Pearson-similaritet mellem Andreas og Sofie

Andreas $= [3,5,3,5]$ med $\bar R_A = 4$, Sofie $= [5,2,3,3]$ med $\bar R_S = 3.25$.

Afvigelser: Andreas $[-1, 1, -1, 1]$, Sofie $[1.75, -1.25, -0.25, -0.25]$.

$$\text{tæller} = (-1)(1.75) + (1)(-1.25) + (-1)(-0.25) + (1)(-0.25) = -3$$

$$\text{nævner} = \sqrt{4} \cdot \sqrt{3.0625 + 1.5625 + 0.0625 + 0.0625} = 2 \cdot \sqrt{4.75} = 4.3589$$

$$S_{\text{Pearson}}(\text{Andreas}, \text{Sofie}) = \frac{-3}{4.3589} = -0.6882 \approx \mathbf{-0.69}$$

Negativ: Andreas og Sofie har modsatrettede ratingmønstre på de fire film.

## 3. De tre nærmeste naboer

Andreas' række i hver similaritetsmatrix, diagonalen ignoreret.

**Tabel 4, euklidisk similaritet**

| Top 3 naboer til Andreas | Similaritet | Rating af Dark Knight |
| --- | --- | --- |
| Gitte | 0.29 | 5 |
| Wivi | 0.26 | 2 |
| Michael | 0.24 | 3 |

**Tabel 5, Pearson-similaritet**

| Top 3 naboer til Andreas | Similaritet | Rating af Dark Knight |
| --- | --- | --- |
| Gitte | 0.95 | 5 |
| Wivi | 0.71 | 2 |
| Michael | 0.33 | 3 |

De to mål udpeger de samme tre naboer i samme rækkefølge. Det er ikke givet på forhånd: de to mål måler forskellige ting, men her peger de samme vej.

## 4. Prædiktioner for Dark Knight

Naboernes gennemsnit over de fire fælles film: Gitte $3.0$, Wivi $3.0$, Michael $3.5$. Andreas' eget gennemsnit er $\bar R_A = (3+5+3+5)/4 = 4.0$.

### Euklidisk

Vægte: $0.2899/0.7914 = 0.366$, $0.2612/0.7914 = 0.330$, $0.2403/0.7914 = 0.304$.

$$P_{\text{avg}} = \frac{5 + 2 + 3}{3} = \mathbf{3.33}$$

$$P_{\text{wavg}} = 0.366 \cdot 5 + 0.330 \cdot 2 + 0.304 \cdot 3 = \mathbf{3.40}$$

$$P_{\text{wavg-corr}} = 4.0 + 0.366(5-3.0) + 0.330(2-3.0) + 0.304(3-3.5) = 4.0 + 0.733 - 0.330 - 0.152 = \mathbf{4.25}$$

### Pearson

Vægte: $0.9487/1.9891 = 0.477$, $0.7071/1.9891 = 0.355$, $0.3333/1.9891 = 0.168$.

$$P_{\text{avg}} = \frac{5 + 2 + 3}{3} = \mathbf{3.33}$$

$$P_{\text{wavg}} = 0.477 \cdot 5 + 0.355 \cdot 2 + 0.168 \cdot 3 = \mathbf{3.60}$$

$$P_{\text{wavg-corr}} = 4.0 + 0.477(5-3.0) + 0.355(2-3.0) + 0.168(3-3.5) = 4.0 + 0.954 - 0.355 - 0.084 = \mathbf{4.51}$$

### Samlet

| Skema | Euklidisk | Pearson |
| --- | --- | --- |
| Gennemsnit | 3.33 | 3.33 |
| Vægtet gennemsnit | 3.40 | 3.60 |
| Vægtet gennemsnit, korrigeret | 4.25 | 4.51 |

Gennemsnittet er det samme for begge mål, fordi de udpeger de samme tre naboer. Det vægtede gennemsnit er højere end det simple, fordi Gitte, der gav 5, også er den mest lignende nabo, og Pearson vægter hende hårdere (0.477 mod 0.366). Den korrigerede udgave løfter prædiktionen yderligere, fordi Andreas generelt bedømmer højere (4.0) end sine naboer (3.0 til 3.5).

## 5. Skal Andreas se Dark Knight?

**Ja.**

Begrundelsen afhænger af, hvilket skema man stoler på, og det er pointen i opgaven. De to ukorrigerede skemaer giver 3.3 til 3.6, hvilket er **under** Andreas' eget gennemsnit på 4.0: målt på hans egen skala er filmen under middel. Den korrigerede prædiktion, som er den eneste, der tager højde for, at Andreas bedømmer højere end sine naboer, giver 4.25 (euklidisk) og 4.51 (Pearson), altså over hans gennemsnit.

Da ratingvanerne her er tydeligt forskellige (naboernes niveau ligger 0.5 til 1.0 under Andreas'), er det korrigerede skema det rigtige valg, og det anbefaler filmen.

**Forbehold:** prædiktionen hviler på tre naboer og fire fælles film, og de tre naboers ratings af Dark Knight er 5, 2 og 3, altså langt fra hinanden. Det er et svagt grundlag, og med $k = 3$ havde en enkelt anden nabo kunnet vende svaret.

## Links

- [[Courses/Introduction to applied mathematics/Filmanbefaling/Teori - collaborative filtering|Teori]]
- [[Courses/Introduction to applied mathematics/Filmanbefaling/User-user handout - gennemregnet|User-user handout, gennemregnet]]
- [[Courses/Introduction to applied mathematics/Uger/Uge 11 - Filmanbefaling, del 1|Uge 11]]
