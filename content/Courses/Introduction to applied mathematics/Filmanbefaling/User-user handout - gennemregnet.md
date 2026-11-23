---
publish: true
title: "02525 Filmanbefaling: user-user handout, gennemregnet"
course: Introduction to applied mathematics
type: opgave
tags:
  - applied-math
  - filmanbefaling
  - opgaveløsning
---

# User-based collaborative filtering: handout gennemregnet

Handoutet `User-User-recommendation.pdf` viser et eksempel med $N = 5$ brugere og $M = 6$ film og lader de lodrette prikker ($\vdots$) stå tomme. Her er alle de udeladte beregninger udfyldt. Den udregnede similaritetsmatrix er identisk med den, handoutet trykker, så metoden er den rigtige.

## Data

En streg betyder, at brugeren ikke har bedømt filmen.

| | Film 1 | Film 2 | Film 3 | Film 4 | Film 5 | Film 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Bruger a | 1 | 5 | - | 2 | 2 | 3 |
| Bruger b | 3 | 5 | 1 | 4 | 2 | - |
| Bruger c | - | 5 | 4 | 4 | 2 | 1 |
| Bruger d | 4 | 4 | 5 | - | 2 | 4 |
| Bruger e | 5 | 4 | 3 | 3 | - | 2 |

## 1. Similaritetsmatricen

Pearson over de film, **begge** brugere har bedømt:

$$S_{\text{user}}(a,b) = \frac{\sum_{i \in I}(R_{a,i} - \bar R_a)(R_{b,i} - \bar R_b)}{\sqrt{\sum_{i \in I}(R_{a,i} - \bar R_a)^2}\sqrt{\sum_{i \in I}(R_{b,i} - \bar R_b)^2}}$$

hvor gennemsnittene tages over $I$, altså kun de fælles film.

| | a | b | c | d | e |
| --- | --- | --- | --- | --- | --- |
| **a** | 1.00 | 0.75 | 0.52 | 0.29 | -0.23 |
| **b** | 0.75 | 1.00 | 0.58 | -0.04 | 0.25 |
| **c** | 0.52 | 0.58 | 1.00 | 0.44 | 0.94 |
| **d** | 0.29 | -0.04 | 0.44 | 1.00 | -0.26 |
| **e** | -0.23 | 0.25 | 0.94 | -0.26 | 1.00 |

## 2. De $k = 2$ nærmeste naboer

| Bruger | Nabo 1 | Nabo 2 |
| --- | --- | --- |
| a | b (0.75) | c (0.52) |
| b | a (0.75) | c (0.58) |
| c | e (0.94) | b (0.58) |
| d | c (0.44) | a (0.29) |
| e | c (0.94) | b (0.25) |

Bemærk, at bruger d er dårligt stillet: hendes bedste nabo har kun similaritet 0.44, og hendes to naboer er de to brugere, der ligner alle andre mest. Det er ikke en stærk anbefaling.

## 3. Prædiktionsmatricen

Handoutets regel: gennemsnit over **de naboer, der faktisk har bedømt filmen**, altså

$$P_{\text{avg}}(u,m) = \frac{1}{|B|}\sum_{b \in B} R_{b,m}, \qquad B = \{b \in \mathrm{KNN}(u) : b \text{ har bedømt } m\}$$

(Det er en lempeligere regel end kursusnotens $\frac{1}{k}$, og den er nødvendig her, fordi matricen har huller.)

| | Film 1 | Film 2 | Film 3 | Film 4 | Film 5 | Film 6 |
| --- | --- | --- | --- | --- | --- | --- |
| **a** | 3.00 | 5.00 | **2.50** | 4.00 | 2.00 | 1.00 |
| **b** | 1.00 | 5.00 | 4.00 | 3.00 | 2.00 | **2.00** |
| **c** | **4.00** | 4.50 | 2.00 | 3.50 | 2.00 | 2.00 |
| **d** | 1.00 | 5.00 | 4.00 | **3.00** | 2.00 | 2.00 |
| **e** | 3.00 | 5.00 | 2.50 | 4.00 | **2.00** | 1.00 |

Fed skrift markerer de film, brugeren ikke selv har bedømt. Det er de fem reelle anbefalinger:

- Bruger a, film 3: $(1 + 4)/2 = 2.50$
- Bruger b, film 6: naboerne a og c gav 3 og 1, altså $(3 + 1)/2 = 2.00$
- Bruger c, film 1: naboerne e og b gav 5 og 3, altså $(5 + 3)/2 = 4.00$
- Bruger d, film 4: c gav 4, a gav 2, altså $(4+2)/2 = 3.00$
- Bruger e, film 5: c gav 2, b gav 2, altså $2.00$

Den stærkeste anbefaling er **film 1 til bruger c** med 4.00.

## 4. Evaluering (MAE)

$$\mathrm{MAE} = \frac{1}{|\Omega|}\sum_{(u,m)\in\Omega} |P_{u,m} - R_{u,m}|$$

hvor $\Omega$ er de indgange, hvor der findes en rating. Der er 25 af dem (30 felter minus 5 huller), og alle 25 har en prædiktion.

$$\mathrm{MAE} = \mathbf{1.14}$$

Det er en stor fejl på en skala fra 0 til 5: modellen rammer i gennemsnit over en hel ratingpoint ved siden af. De værste enkeltfejl er bruger a's film 1 ($|3.00 - 1| = 2.00$) og bruger d's film 1 ($|1.00 - 4| = 3.00$), hvor prædiktionen bygger på en enkelt nabo.

## Hvad handoutet selv peger på

- **Manglende ratings.** Med $k = 2$ er prædiktionen ofte baseret på en enkelt bruger. En forbedring er at tage de $k$ mest lignende brugere **blandt dem, der har bedømt filmen**, og falde tilbage på brugerens eget gennemsnit, hvis ingen har.
- **Ratingvaner.** Gennemsnitsratingen går fra 2.6 (bruger a) til 3.8 (bruger d). Det simple gennemsnit ignorerer det; det korrigerede vægtede gennemsnit retter op på det.
- **Nye brugere.** Når en bruger kommer til, får $\mathbf S$ en ny række og søjle ($N$ nye similariteter), og andre brugeres naboskaber kan ændre sig. Det er en af grundene til, at item-based ofte foretrækkes.
- **Få fælles film.** Hver similaritet bygger på højst fire fælles film, så den er meget støjende.
- **Er testen fair?** $R_{u,m}$ indgår aldrig i sin egen prædiktion, men den indgik, da $\mathbf S$ blev beregnet.

## Links

- [[Courses/Introduction to applied mathematics/Filmanbefaling/Teori - collaborative filtering|Teori]]
- [[Courses/Introduction to applied mathematics/Filmanbefaling/Exercise 1 - løsning|Exercise 1, løsning]]
- [[Courses/Introduction to applied mathematics/Uger/Uge 12 - Filmanbefaling, del 2|Uge 12]]
