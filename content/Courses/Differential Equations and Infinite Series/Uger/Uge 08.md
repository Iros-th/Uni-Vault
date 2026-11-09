---
publish: true
title: "01025 uge 8: Generelle funktionsrækker og uniform konvergens"
course: Differential Equations and Infinite Series
type: week
week: 8
tags:
  - differential-equations
  - ugenote
---

# Uge 8: Generelle funktionsrækker og uniform konvergens

> **Kilde:** Ugeseddel 8 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 5.3 og 5.4, eksamenssættet 01025Mat2MatTekEksamenB-E21.pdf (fra zip-filen). SlidesUge8.pdf og WeeklyNotes7.pdf er ikke gennemgået her. Noten "Kontinuitet og Differentiabilitet" ligger i mappen "Noter og ekstra opgaver" i zip-filen.

## Læseplan

- Forelæsning (onsdag 28/10): afsnit 5.3 og 5.4 samt resten af appendiks om potensrækker og generelle rækker, fra beviset for sætning 5.33.
- Forstå definitionen på kontinuitet, så du kan følge beviset for sætning 5.35.

## Begreber

### Funktionsrække og sumfunktion (afsnit 5.3)
En række $\sum_{n=1}^\infty f_n(x)$ hvor leddene er funktioner. For hvert $x$ er det en talrække; mængden af $x$ hvor den konvergerer er konvergensområdet, og $f(x) = \sum f_n(x)$ er sumfunktionen.

**Eksempel.** $\sum_{n=1}^\infty \frac{\sin(nx)}{n^2}$ konvergerer for alle $x$, fordi $\left|\frac{\sin nx}{n^2}\right| \leq \frac{1}{n^2}$.

### Punktvis kontra uniform konvergens (afsnit 5.4)
Punktvis: for hvert $x$ går $S_N(x) \to f(x)$, men hvor hurtigt kan afhænge af $x$. Uniform: der findes for ethvert $\epsilon > 0$ et $N$ der virker for alle $x$ samtidig, dvs. $|f(x) - S_N(x)| \leq \epsilon$ for alle $x$ i intervallet når $N$ er stort nok.

**Eksempel.** $\sum_{n=0}^\infty x^n$ konvergerer punktvis på $]-1,1[$, men ikke uniformt: halen er $\frac{x^{N+1}}{1-x}$, og for $x$ tæt på $1$ er den stor uanset $N$. På $[-0.99, 0.99]$ er den derimod uniform, fordi halen højst er $\frac{0.99^{N+1}}{0.01}$.

### Majorantrække (Weierstrass)
Hvis $|f_n(x)| \leq k_n$ for alle $x$ i intervallet og $\sum k_n$ er konvergent, kaldes $\sum k_n$ en konvergent majorantrække. Så er $\sum f_n$ uniformt konvergent, og

$$|f(x) - S_N(x)| \leq \sum_{n=N+1}^\infty k_n \quad\text{for alle } x.$$

**Eksempel.** For $\sum\frac{\sin nx}{n^2}$ er $k_n = \frac{1}{n^2}$. Med korollar 4.35 er halen højst $\frac{1}{N+1} + \frac{1}{(N+1)^2}$. For fejl $\leq 0.01$ på hele $\mathbb R$ er $N = 100$ nok ($\frac1{101} + \frac1{101^2} \approx 0.00999$).

### Kontinuitet af sumfunktionen (sætning 5.33)
Er alle $f_n$ kontinuerte på $I$ og har $\sum f_n$ en konvergent majorantrække på $I$, så er sumfunktionen kontinuert på $I$.

**Eksempel.** $\sum\frac{\sin nx}{n^2}$ er kontinuert på hele $\mathbb R$.

### Ledvis integration (sætning 5.34)
Under samme antagelser er $\int_a^b \sum f_n(x)\,dx = \sum \int_a^b f_n(x)\,dx$.

### Ledvis differentiation (sætning 5.35)
Er $f_n$ differentiable og har $\sum f_n'$ en konvergent majorantrække (og $\sum f_n$ konvergerer), så er $f$ differentiabel og $f'(x) = \sum f_n'(x)$. Det er rækken af de **afledte** der skal have en majorant.

**Eksempel.** $f(x) = \sum\frac{\sin nx}{n^3}$: de afledte er $\frac{\cos nx}{n^2}$ med majorant $\sum\frac1{n^2}$, så $f'(x) = \sum\frac{\cos nx}{n^2}$. For $\sum\frac{\sin nx}{n^2}$ giver differentiation $\sum\frac{\cos nx}{n}$, som ikke har en konvergent majorant, og sætningen siger derfor intet.

### Potensrækker er uniformt konvergente på mindre intervaller (sætning 5.30)
En potensrække med konvergensradius $\rho > 0$ er uniformt konvergent på ethvert interval $[-r, r]$ med $0 < r < \rho$. Beviset bruger majoranten $\sum |c_n| r^n$. Derfor er sumfunktionen kontinuert og må differentieres ledvis inde i konvergensintervallet.

## Opgaver (i prioriteret rækkefølge)

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 114 | 5.3, 5.4 | Hvilke rækker har en majorantrække, og hvilke en konvergent majorantrække? Kontinuitet af en sinusrække og sammenhæng med en cosinusrække. |
| 149 | 5.4 | $f(x) = \sum\frac{1}{3^n}\cos(2^nx)$: konvergens, kontinuitet, differentiabilitet, $f'(0)$. Ugesedlen: plot $S_N$ og dens første og anden afledede for $N = 20$ og $200$ på $[0, 2\pi]$ og $[0.001, 0.002]$. Ser $f$ ud til at være to gange differentiabel? |
| 151 | 5.4, appendiks B | Rækken for $\ln(1+x)$ har ingen konvergent majorant på $]-1,1]$; kontinuitet og differentiabilitet af $\sum\frac{x^n}{n^2}$. |
| 818 | 4.5 | Hvis den ikke blev lavet i uge 6. Vink: indskudssætningen. |
| 152 | 4.4, 4.5, 4.7 | Kvotientrækker der starter senere, en række der skifter form efter 100 led, og en række givet ved afsnitssummen $S_N = \frac1N\cos(N\pi)$. Vink til (c): find $a_n$ og skriv rækken som en alternerende række. |
| 508 | 4.7, 5.4 | Konvergenstype for $\sum(-1)^{n-1}\tan\frac{1}{\sqrt n}$ og uniform konvergens af $\sum\frac1n\sin\frac{x}{n\sqrt n}$ (eksamensopgave fra kursus 01030). |

**Hjemmeopgavesæt 7:** opgave 4 fra 01025Mat2MatTekEksamenB-E21.pdf afleveres fysisk senest 4/11 kl. 8. Den handler om $f(t) = \sum_{n=1}^\infty \frac{t\cos(nt)}{n^3}$: uniform konvergens på $[-a,a]$, et $N$ så fejlen er højst $10^{-2}$ på $[-5,5]$, majorant på hele $\mathbb R$, konvergens og kontinuitet. Möbius sæt 7 (to opgaver) samme frist. (Ikke løst her.)

**MC:** svaret på 705 er 2. Løs nu opgave 706.

## Tjek dig selv

- [ ] Kan jeg forklare forskellen på punktvis og uniform konvergens med et eksempel?
- [ ] Kan jeg finde en konvergent majorantrække, eller argumentere for at der ingen er?
- [ ] Kan jeg bruge en majorant til at finde $N$ så fejlen er under $\epsilon$ for alle $x$?
- [ ] Hvilke antagelser kræver sætning 5.33, 5.34 og 5.35, og hvorfor er det rækken af afledte der skal have en majorant i 5.35?
- [ ] Kan jeg gengive definitionen af kontinuitet med $\epsilon$ og $\delta$?
- [ ] Hvorfor er en potensrække uniformt konvergent på $[-r, r]$ for $r < \rho$, men ikke nødvendigvis på $]-\rho, \rho[$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 07|Uge 7]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 09|Uge 9: Fourierrækker]]
