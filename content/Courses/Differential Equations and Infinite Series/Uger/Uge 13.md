---
publish: true
title: "01025 uge 13: Ulineære differentialligninger og repetition"
course: Differential Equations and Infinite Series
type: week
week: 13
tags:
  - differential-equations
  - ugenote
---

# Uge 13: Ulineære differentialligninger og repetition

> **Kilde:** Ugeseddel 13 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 3.1 til 3.3, EkstraOpgaver.pdf (opgave 966). Eksamenssættet fra december 2025 og løsningen ligger på DTU Learn under uge 13, men er ikke gennemgået i denne note.

## Læseplan

- Forelæsning: afsnit 3.1, 3.2 og 3.3, derefter øvelser cirka kl. 9 til 12.
- Pensum (Pensumliste 2026) er 3.1 og 3.3; 3.2 gennemgås men står ikke på pensumlisten.
- Eksamen: søndag 6. december (ugeseddel 1), 3 timer, kun skriftlige hjælpemidler, ingen computer.

## Begreber

### Ulineære systemer og autonome systemer (afsnit 3.1)
Et system $\dot{\mathbf x} = \mathbf f(\mathbf x)$, hvor $\mathbf f$ ikke er lineær. Det er autonomt, fordi $\mathbf f$ ikke afhænger af $t$. Sætning 3.2: har $\mathbf f$ kontinuerte partielle afledede, findes præcis én løsning gennem hvert startpunkt.

### Stationære punkter
$\mathbf x_s$ er stationært, hvis $\mathbf f(\mathbf x_s) = \mathbf 0$. Så er den konstante funktion $\mathbf x(t) = \mathbf x_s$ en løsning (ligevægt).

**Eksempel.** $\dot x_1 = x_2$, $\dot x_2 = -\sin x_1 - x_2$ (dæmpet pendul): $x_2 = 0$ og $\sin x_1 = 0$, så de stationære punkter er $(k\pi, 0)$ for $k \in \mathbb Z$.

### Linearisering og stabilitet (sætning 3.7)
Lad $D\mathbf f(\mathbf x_s)$ være funktionalmatricen (Jacobimatricen) i det stationære punkt.
- Har $D\mathbf f(\mathbf x_s)$ en egenværdi med positiv realdel, er punktet ustabilt.
- Har alle egenværdier negativ realdel, er punktet asymptotisk stabilt.
- Har en egenværdi realdel nul, kan man generelt ikke konkludere noget ud fra lineariseringen.

**Eksempel (fortsat).** $D\mathbf f = \begin{pmatrix}0 & 1\\ -\cos x_1 & -1\end{pmatrix}$.
- I $(0,0)$: $\begin{pmatrix}0&1\\-1&-1\end{pmatrix}$, $\lambda^2 + \lambda + 1 = 0$, $\lambda = -\frac12 \pm \frac{\sqrt3}{2}i$. Negativ realdel: asymptotisk stabilt (pendulet hænger ned).
- I $(\pi, 0)$: $\begin{pmatrix}0&1\\1&-1\end{pmatrix}$, $\lambda^2 + \lambda - 1 = 0$, $\lambda = \frac{-1 \pm\sqrt5}{2}$, og $\frac{-1+\sqrt5}{2} \approx 0.618 > 0$: ustabilt (pendulet står på hovedet).

### 1-dimensionale autonome systemer (afsnit 3.2)
$\dot x = f(x)$. Fortegnet af $f$ mellem de stationære punkter viser hvilken vej løsningerne bevæger sig. Et stationært punkt med $f'(x_s) < 0$ er asymptotisk stabilt, $f'(x_s) > 0$ ustabilt.

**Eksempel.** $\dot x = x(1 - x)$ har stationære punkter $0$ og $1$. $f'(x) = 1 - 2x$, så $f'(0) = 1 > 0$ (ustabilt) og $f'(1) = -1 < 0$ (asymptotisk stabilt). Alle løsninger der starter med $x(0) > 0$ går mod $1$.

### 2-dimensionale systemer og faseportrætter (afsnit 3.3)
Løsningskurverne tegnes i $(x_1, x_2)$-planen. Omkring et stationært punkt ligner billedet det lineariserede systems: egenværdiernes type (reelle med samme fortegn, modsat fortegn, komplekse) bestemmer om det er en knude, et saddelpunkt eller en spiral.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| Opgave 966 (EkstraOpgaver.pdf) | 3.1, 3.3 (sætning 3.7) | Et ulineært system med parameter $a$: vis at $(a, 1)$ er et stationært punkt, og at det er ustabilt for $a > 0$ og asymptotisk stabilt for $a < 0$. |
| 436 | 3.1 | Find alle stationære punkter for $x' = x^2 + y^2 - x + 2y + 1$, $y' = x - y - 1$. Brug evt. CAS til egenværdier. |
| 862, hvis du har lyst | 6.3, 5.4 | Bevis for at en Fourierrække er sin egen Fourierrække, når $\sum d_n$ er absolut konvergent. |
| Eksamenssættet december 2025 (01025Mat2MatTekEksamen-E25.pdf) | hele pensum | Start med del B. Løsning i 01025Mat2MatTekEksamen-E25-Løsning.pdf på DTU Learn. |

Som repetition anbefaler ugesedlen at regne opgaverne fra ugesedlerne og gamle eksamensopgaver. Gamle sæt (2012 til 2022) ligger i zip-filen på DTU Learn.

## Tjek dig selv

- [ ] Kan jeg finde alle stationære punkter, også når ligningssystemet er ulineært?
- [ ] Kan jeg opstille funktionalmatricen og bruge sætning 3.7?
- [ ] Ved jeg hvad sætning 3.7 ikke kan afgøre (egenværdi med realdel nul)?
- [ ] Kan jeg analysere et 1-dimensionalt system med fortegnslinje og $f'(x_s)$?
- [ ] Har jeg regnet mindst ét helt gammelt eksamenssæt under eksamensforhold, uden computer?
- [ ] Kan jeg alle hovedsætningerne fra uge 1 til 12 uden at slå op (se [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|oversigten]])?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|Uge 12]]
