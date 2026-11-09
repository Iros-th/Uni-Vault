---
publish: true
title: "01025 uge 6: Vurdering af summen og alternerende rækker"
course: Differential Equations and Infinite Series
type: week
week: 6
tags:
  - differential-equations
  - ugenote
---

# Uge 6: Vurdering af summen og alternerende rækker

> **Kilde:** Ugeseddel 6 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 4.6 og 4.7. Ugesedlen henviser til "metode 1 og metode 2 på side 104"; i den 4. udgave jeg har tjekket mod hedder de metode (i) og (ii) og står på side 102 til 103. WeeklyNotes5.pdf, SlidesUge6.pdf og Maple-filerne er ikke gennemgået her.

## Læseplan

- Forelæsning (onsdag 7/10): afsnit 4.6 og 4.7, og resten af beviserne i appendiks for konvergenskriterierne. Mindre ny teori end sidst, så brug tid på at studere sætningerne fra uge 5.
- Efter uge 6 er der efterårsferie.

## Begreber

### Vurdering af halen med integralkriteriet (afsnit 4.6, korollar 4.35)
Lad $f$ være kontinuert, ikke-negativ og aftagende, og $\int_1^\infty f$ konvergent. Så gælder

$$\sum_{n=N+1}^\infty f(n) \leq \int_{N+1}^\infty f(x)\,dx + f(N+1),$$

$$\sum_{n=1}^N f(n) + \int_{N+1}^\infty f(x)\,dx \;\leq\; \sum_{n=1}^\infty f(n) \;\leq\; \sum_{n=1}^N f(n) + \int_{N+1}^\infty f(x)\,dx + f(N+1).$$

Ugesedlen gør opmærksom på at formuleringen er ændret fra 3. udgave, og at facitliste og gamle eksamensløsninger er lavet til 1./2. udgave. Antallet af led man skal summere kan derfor afvige lidt fra facit.

### Metode (i) og metode (ii)
Vi vil finde $\sum_{n=1}^\infty f(n)$ med fejl højst $\epsilon$.
- **Metode (i):** vælg $N$ så $\int_{N+1}^\infty f(x)dx + f(N+1) \leq \epsilon$. Så er afsnitssummen $\sum_{n=1}^N f(n)$ god nok.
- **Metode (ii):** vælg $N$ så $f(N+1) \leq \epsilon$. Så er tallet $\sum_{n=1}^N f(n) + \int_{N+1}^\infty f(x)dx$ god nok. Det kræver typisk langt færre led.

**Eksempel.** $\sum_{n=1}^\infty \frac{1}{n^3}$ med $\epsilon = 0.01$. Her er $\int_{N+1}^\infty x^{-3}dx = \frac{1}{2(N+1)^2}$.
- Metode (i): $\frac{1}{2(N+1)^2} + \frac{1}{(N+1)^3} \leq 0.01$. For $N = 6$ er venstresiden cirka $0.0131$, for $N = 7$ cirka $0.0098$. Så $N = 7$.
- Metode (ii): $\frac{1}{(N+1)^3} \leq 0.01$ gælder fra $N = 4$ ($\frac1{125} = 0.008$). Approksimationen er $1 + \frac18 + \frac1{27} + \frac1{64} + \frac{1}{2 \cdot 25} \approx 1.1977$. Den sande sum er cirka $1.2021$, så fejlen er cirka $0.0044$, under $0.01$ som lovet.

### Alternerende rækker og Leibniz' kriterium (afsnit 4.7, sætning 4.38)
En række $\sum_{n=1}^\infty (-1)^{n-1}b_n$ med (i) $b_n \geq 0$, (ii) $b_n$ aftagende og (iii) $b_n \to 0$ er konvergent, og

$$\left|\sum_{n=1}^\infty (-1)^{n-1}b_n - \sum_{n=1}^N (-1)^{n-1}b_n\right| \leq b_{N+1}.$$

Ugesedlens opskrift: vælg $N$ med $b_{N+1} \leq \epsilon$, så ligger den uendelige sum i intervallet afsnitssum $\pm\,\epsilon$.

**Eksempel.** $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^2}$ med fejl højst $0.001$: kræv $\frac{1}{(N+1)^2} \leq 0.001$, dvs. $N + 1 \geq \sqrt{1000} \approx 31.6$. Så $N = 31$ er nok ($\frac{1}{32^2} \approx 0.00098$).

### Betinget konvergens
En række er betinget konvergent, hvis den er konvergent men ikke absolut konvergent.

**Eksempel.** $\sum \frac{(-1)^{n-1}}{n}$ er konvergent efter Leibniz, men $\sum\frac1n$ er divergent, så rækken er betinget konvergent.

### Numerisk bemærkning
Ugesedlen påpeger at endelige summer med mange led og skiftende fortegn ikke er trivielle at regne på en computer på grund af kancellering (jf. kurset Programmering af Matematisk Software). Det er pointen i spørgsmålet ved opgave 131.

### Talfølger formelt (opgave 802)
Opgave 802 træner beviser med kvantorer: hvis $x_n \to x$ så $cx_n \to cx$. Skabelon: givet $\epsilon > 0$, vælg $N$ fra antagelsen med $\frac{\epsilon}{|c|}$ i stedet for $\epsilon$ (tilfældet $c = 0$ for sig).

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 148 | 4.6 | Tilnærmet værdi for $\sum\frac{1}{n^4}$ med fejl højst $0.02$. Løs med både metode (i) og (ii). |
| 102 | 4.5, 4.7 | Absolut konvergent, betinget konvergent eller divergent: tre rækker. |
| 161 | 4.7 | Leibniz' fejlvurdering for $\sum\frac{(-1)^{n-1}}{n}$ og $\sum\frac{(-1)^{n-1}}{n^4}$, og hvorfor den anden kræver færre led. |
| 108 | 4.5, 4.7 | En række af led med $\frac{1}{\sqrt n}$ der divergerer, og hvorfor det ikke strider mod Leibniz. |
| 131 | 4.6 | Summen $\sum\frac{1}{n^{11/10}}$: hvor mange led skal der til? Er der numeriske problemer med de endelige summer? |
| 818 | 4.5 (integralkriteriet) | En funktion hvor integralet og rækken opfører sig forskelligt. Vink: indskudssætningen $\int_a^b = \int_a^c + \int_c^b$. Strider det mod integralkriteriet? |
| 816 (v), (vi) | 4.5 | Fortsættelse fra uge 5. |
| 802 | 4.2 | Formelt bevis for at $cx_n \to cx$. |

**Hjemmeopgavesæt 5:** kun Möbius, senest 20/10 kl. 20.

**MC:** svarene på 703 er 4 og 1. Løs nu opgave 704.

## Tjek dig selv

- [ ] Kan jeg forklare forskellen på metode (i) og (ii), og hvorfor (ii) bruger færre led?
- [ ] Kan jeg regne $\int_{N+1}^\infty f$ for $f(x) = x^{-p}$?
- [ ] Kender jeg de tre betingelser i Leibniz' kriterium, og kan jeg bruge fejlvurderingen $b_{N+1}$?
- [ ] Kan jeg give et eksempel på en betinget konvergent række?
- [ ] Ved jeg hvorfor integralkriteriet kræver at $f$ er aftagende (opgave 818)?
- [ ] Kan jeg skrive et $\epsilon$-$N$ bevis for en regneregel for talfølger?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 05|Uge 5]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 07|Uge 7: Potensrækker]]
