---
publish: true
title: "01025 uge 10: Fourierrækker på kompleks form og Parsevals sætning"
course: Differential Equations and Infinite Series
type: week
week: 10
tags:
  - differential-equations
  - ugenote
---

# Uge 10: Fourierrækker på kompleks form og Parsevals sætning

> **Kilde:** Ugeseddel 10 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 6.2 til 6.4 og appendiks C, eksamenssættet 01025Mat2MatTekEksamenB-E18.pdf (fra zip-filen). SlidesUge10.pdf, Uge10Maple.pdf og WeeklyNotes9.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning: afsnit 6.2, 6.3 og 6.4. Appendiks C har formlerne for periode $T$.
- Miniprojekt 2 kører i uge 11. Ugesedlen anbefaler at starte nu: projektopgave 2, 3 og 4 (i) til (iii) kan laves allerede, og resten af 4 hvis du læser sætning 7.8.

## Begreber

### Approksimation med afsnitssummer (afsnit 6.2, korollar 6.13 og 6.16)
For en kontinuert, stykkevis differentiabel $2\pi$-periodisk funktion konvergerer Fourierrækken uniformt. I praksis vurderer man fejlen med en majorant på halen: hvis $|a_n| + |b_n| \leq k_n$, så er

$$|f(x) - S_N(x)| \leq \sum_{n=N+1}^\infty k_n \quad\text{for alle } x.$$

**Eksempel.** Hvis $|a_n| + |b_n| \leq \frac{1}{n^2}$, giver korollar 4.35 at fejlen er højst $\frac{1}{N+1} + \frac{1}{(N+1)^2}$. For fejl $\leq 0.1$ er $N = 10$ nok ($\frac1{11} + \frac1{121} \approx 0.099$).

### Fourierrækker på kompleks form (afsnit 6.3)
$$f \sim \sum_{n=-\infty}^\infty c_n e^{inx}, \qquad c_n = \frac{1}{2\pi}\int_{-\pi}^\pi f(x)e^{-inx}\,dx.$$

Sammenhæng med den reelle form (lemma 6.22), for $n \geq 1$:

$$c_0 = \tfrac12a_0, \qquad c_n = \tfrac12(a_n - ib_n), \qquad c_{-n} = \tfrac12(a_n + ib_n),$$

og omvendt $a_n = c_n + c_{-n}$, $b_n = i(c_n - c_{-n})$. For reelle $f$ er $c_{-n} = \overline{c_n}$ (lemma 6.23). Den $N$'te afsnitssum er $\sum_{n=-N}^N c_n e^{inx}$ (lemma 6.20).

**Eksempel (firkantbølgen fra uge 9).** $a_n = 0$ og $b_n = \frac{4}{n\pi}$ for ulige $n$. Så er $c_n = -\frac{2i}{n\pi}$ for ulige $n$ (både positive og negative) og $c_n = 0$ for lige $n$, også $c_0 = 0$. Tjek for $n = -1$: $c_{-1} = \frac12(a_1 + ib_1) = \frac{2i}{\pi} = -\frac{2i}{(-1)\pi}$.

### Parsevals sætning (afsnit 6.4, sætning 6.25)
$$\frac{1}{2\pi}\int_{-\pi}^{\pi}|f(x)|^2dx = \frac14|a_0|^2 + \frac12\sum_{n=1}^\infty\bigl(|a_n|^2 + |b_n|^2\bigr) = \sum_{n=-\infty}^\infty |c_n|^2.$$

Venstresiden er effekten (middel af $|f|^2$). Sætningen bruges til at finde summer af talrækker.

**Eksempel.** Firkantbølgen har $|f|^2 = 1$, så venstresiden er $1$. Højresiden er $\frac12\sum_{k=1}^\infty \frac{16}{\pi^2(2k-1)^2}$. Altså

$$\sum_{k=1}^\infty \frac{1}{(2k-1)^2} = \frac{\pi^2}{8}.$$

(Numerisk tjek: begge sider er cirka $1.2337$.)

### Regneregler for integraler af periodiske funktioner (lemma 6.2)
(R1) for en $2\pi$-periodisk funktion er integralet over et vilkårligt interval af længde $2\pi$ det samme. (R2) og (R3) handler om integraler af lige og ulige funktioner over $[-\pi, \pi]$. Opgave 863 beviser dem; resultatet og bevisteknikken bruges i miniprojekt 2.

### Delvis integration til Fourierkoefficienter
Ugesedlens vink til opgave 227:

$$\int x\cos(nx)\,dx = \frac{x}{n}\sin(nx) + \frac{1}{n^2}\cos(nx).$$

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 227 | 6.1, 6.2 | Fourierrækken for $f(x) = \lvert x\rvert$, at $\sim$ kan erstattes af $=$, og hvor stor $N$ skal være for fejl $0.1$ og $0.01$. |
| 222 (c) | 6.3 | De komplekse Fourierkoefficienter for $f(t) = t$ (fortsat fra uge 9). |
| Eksamensopgave 3, 01025Mat2MatTekEksamenB-E18.pdf | 6.1 til 6.4 | Lige $2\pi$-periodisk funktion der er $1$ på $[0,a[$, $b$ i $x = a$ og $0$ på $]a,\pi]$: vis Fourierrækken, find $b$ så rækken konvergerer mod $f$ overalt, og find summerne $\sum\frac{\sin an}{n}$ og $\sum\frac{\sin^2 an}{n^2}$ (det sidste med Parseval). |
| 951 | 4.5, 5.4 | Eksamen 2012: for hvilke $a \geq 0$ er $\sum\frac{a^n}{n^a}$ konvergent, og er den uniformt konvergent på $[0, \frac12]$? |
| 863 (i) og (iv) | 6.1 (lemma 6.2) | Formelt bevis for regnereglerne (R1) til (R3). Hvis du ikke når den, så tænk på den som en hjemmeopgave; den gennemgås i uge 11. |

**Hjemmeopgavesæt 9:** Möbius Sæt9-01025 senest 18/11 kl. 20.

**MC:** svaret på 707 er 2. Løs nu opgave 708.

## Tjek dig selv

- [ ] Kan jeg gå frem og tilbage mellem $a_n, b_n$ og $c_n$?
- [ ] Ved jeg hvorfor $c_{-n} = \overline{c_n}$ når $f$ er reel?
- [ ] Kan jeg skrive Parsevals sætning op på både reel og kompleks form?
- [ ] Kan jeg bruge Parseval til at finde summen af en talrække?
- [ ] Kan jeg vurdere $|f(x) - S_N(x)|$ uniformt med en majorant og integralkriteriet?
- [ ] Kan jeg forklare og bevise regel (R1) om integraler over en periode?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 09|Uge 9]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 11|Uge 11: Effekt, Fouriers sætning og miniprojekt 2]]
