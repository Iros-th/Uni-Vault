---
publish: true
title: "Sandsynlighedsregning uge 7: Fordelingsfunktion og ordnede variable"
course: Sandsynlighedsregning
type: week
week: 7
tags:
  - sandsynlighed
  - ugenote
---

# Uge 7: Fordelingsfunktion, maksimum og minimum, ordnede variable

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 23. oktober, afsnit 4.5 og 4.6; 16. oktober er ikke på planen) og ugebrevet til forelæsning 7. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "over middel", ca. 18 sider. Slides er ikke læst.

## Emner

- Afsnit 4.5: fordelingsfunktionen, fraktiler, simulation, maksimum og minimum
- Afsnit 4.6: fordelingen af ordnede stokastiske variable

## Begreber

**Fordelingsfunktion.** $F(x) = P(X \le x)$, samme definition for diskrete og kontinuerte variable. Egenskaber: voksende, går mod 0 for $x \to -\infty$ og mod 1 for $x \to \infty$. $P(a < X \le b) = F(b) - F(a)$. For kontinuert $X$ er $f = F'$. Eksempel: eksponential har $F(x) = 1 - e^{-\lambda x}$.

**Fraktiler.** $q$-fraktilen $x_q$ opfylder $F(x_q) = q$ (side 319-320, pensum men "i udkanten"). Medianen er $x_{0{,}5}$. Eksempel: eksponentialfordelingens median er $\ln 2/\lambda$.

**Simulation med den inverse fordelingsfunktion.** Hvis $U$ er ligefordelt på $(0,1)$, har $X = F^{-1}(U)$ fordelingsfunktion $F$ (side 320). Eksempel: $X = -\ln(U)/\lambda$ er eksponentialfordelt (set også i uge 6).

**Maksimum og minimum.** For uafhængige $X_1, \dots, X_n$: $F_{\max}(x) = \prod_i F_i(x)$ (nederst side 316) og $F_{\min}(x) = 1 - \prod_i\big(1 - F_i(x)\big)$ (øverst side 317). Hvis alle har samme $F$: $F^n$ og $1 - (1-F)^n$. Ugebrevet opfordrer til at overveje, hvordan formlerne ser ud i det tilfælde.

Eksempel: tre uafhængige ligefordelte på $(0,1)$, maksimum: $F_{\max}(x) = x^3$, tæthed $3x^2$, middelværdi $\int_0^1 x\cdot 3x^2dx = 3/4$. Eksempel: minimum af $n$ uafhængige eksponentialfordelte med rate $\lambda$ har $P(\min > t) = e^{-n\lambda t}$, altså eksponential med rate $n\lambda$.

**Den $k$'te ordensstatistik.** For uafhængige, identisk fordelte kontinuerte variable med tæthed $f$ og fordelingsfunktion $F$ er tætheden af den $k$'te mindste $\dfrac{n!}{(k-1)!\,(n-k)!}\,F(x)^{k-1}\big(1 - F(x)\big)^{n-k} f(x)$ (boks midt på side 326). For ligefordelte på $(0,1)$ er den $k$'te mindste betafordelt. Betafordelingen bruges som eksempel i forelæsninger og opgaver.

**Hvorfor maksimum?** Ugebrevet motiverer det med dimensionering: konstruktioner skal ofte klare maksimal belastning, ikke gennemsnittet.
### Sorteringsmodel: Ordnede stokastiske variable (Order statistics)

Når $n$ uafhængige målinger sorteres i voksende rækkefølge: $X_{(1)} \le X_{(2)} \le \dots \le X_{(n)}$:

```text
           X_(1)              X_(k)               X_(n)
             │                  │                   │
  ───[───────o───────────────[──o──]───────────────o───────]───> x
     <- Min  ->              k-te observation     <- Max ->
```

**Maksimum og minimum:**
- $P(X_{(n)} \le x) = [F(x)]^n$ (alle $n$ målinger er $\le x$).
- $P(X_{(1)} > x) = [1 - F(x)]^n$ (alle $n$ målinger er $> x$).

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 30. oktober.

Øvelsesopgaver: 4.5.1, 4.6.1, 4.2.4, 4.3.6, 4.4.10, 4.5.2. (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 4.3.4, 4.4.6, 4.5.4, 4.6.3. Ugebrevet til uge 8 anbefaler at have regnet 4.6.3 inden næste forelæsning.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 7, 21 og 24.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
