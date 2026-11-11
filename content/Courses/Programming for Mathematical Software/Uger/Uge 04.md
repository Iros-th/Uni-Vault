---
publish: true
title: "Programming for Mathematical Software uge 4: Conditioning, numerisk stabilitet, pointere"
course: Programming for Mathematical Software
type: week
week: 4
tags:
  - c-programming
  - ugenote
---

# Uge 4: Conditioning, numerisk stabilitet, pointere

> Kilde: `module04.pdf` (opgaveark, 24. september 2026), `slides04.pdf` (forelæsning 4, 28 slides), `sols_module04.pdf` (løsningseksempler) og modultabellen. Siden "Solution examples" har ingen fil i DTU Learn. Pensum: King kap. 11, 12, 15.4; lecture notes kap. 4 (Conditioning and numerical stability).

## Emner

- Betingelsestal (conditioning) for et problem
- Numerisk stabilitet for en algoritme, forward og backward error
- Fejlanalyse af sekventiel summation og Kahans summationsalgoritme
- Call-by-value, pointere, pointeraritmetik, pointere og arrays, `const`

## Begreber

**Conditioning (slides).** Hvor følsom er $f(x)$ over for relative forstyrrelser af $x$? Det relative betingelsestal er grænsen af (relativ outputfejl) / (relativ inputfejl):
$$\mathrm{cond}(f,x) = \lim_{\epsilon\to 0^+} \sup_{\|\Delta x\|\le\epsilon} \frac{\|f(x+\Delta x)-f(x)\|/\|f(x)\|}{\|\Delta x\|/\|x\|}.$$
Problemet er velkonditioneret hvis tallet er lille, dårligt konditioneret (ill-conditioned) hvis det er stort, og ill-posed hvis det er uendeligt. Tommelfingerregel: relativ outputfejl $\approx$ betingelsestal $\times$ relativ inputfejl. Det er en egenskab ved problemet og er uafhængigt af algoritmen.

**Betingelsestal for funktioner (slides).** For $f:\mathbb{R}\to\mathbb{R}$ (Taylor med Lagrange-restled) er $\mathrm{cond}_{abs}(f,x) = |f'(x)|$ og $\mathrm{cond}_{rel}(f,x) = \dfrac{|xf'(x)|}{|f(x)|}$. For $f:\mathbb{R}^n\to\mathbb{R}^m$ indgår Jacobi-matricen: $\mathrm{cond}_{abs} = \|J_f(x)\|$ og $\mathrm{cond}(f,x) = \dfrac{\|J_f(x)\|\|x\|}{\|f(x)\|}$ (afhænger af normvalget). Eksempler fra slides:

| $f(x)$ | $\mathrm{cond}(f,x)$ |
|---|---|
| $1-x$ | $\lvert x\rvert/\lvert 1-x\rvert$ |
| $\log x$ | $1/\lvert\log x\rvert$ |
| $\exp x$ | $\lvert x\rvert$ |
| $x^a$ | $\lvert a\rvert$ |
| $Ab$ (i $A$ fast) | $\|A\|_2\|b\|_2/\|Ab\|_2$ |
| $A^{-1}$ | $\|A\|_2\|A^{-1}\|_2$ |

Summation $f(x)=x_1+\dots+x_n$ har $\mathrm{cond}_1(f,x) = \dfrac{\sum|x_i|}{|\sum x_i|}$: lig 1 hvis alle tal har samme fortegn, dårligt konditioneret hvis $\|x\|_1 \gg |f(x)|$, og ill-posed hvis summen er 0. Stikprøvevariansen $\frac{1}{n-1}\|C_n x\|_2^2$ med $C_n = I - \frac{1}{n}\mathbf{1}\mathbf{1}^T$ har $\mathrm{cond}_2 = 2\|x\|_2/\|C_n x\|_2$.

**Numerisk stabilitet (slides).** Hvordan opfører en algoritme sig, når der opstår små fejl undervejs? Stabil hvis fejlene har ubetydelig indflydelse for alle input, ustabil hvis de har betydelig indflydelse for et eller flere input. Et velkonditioneret problem kan altså stadig løses med en ustabil algoritme, typisk når to næsten ens tal trækkes fra hinanden.

**Forward og backward error (slides).** Hvis $y=f(x)$ men algoritmen giver $\hat y$, er den relative forward error $\|\hat y-y\|/\|y\|$. Den relative backward error er den mindste relative forstyrrelse af $x$, så $\hat y = f(x+\Delta x)$. En algoritme er forward stabil hvis $\|\hat y - y\| \le c\cdot\mathrm{cond}(f,x)\cdot\|y\|$ for en lille konstant $c$, backward stabil hvis backward error altid er lille (det medfører forward stabilitet), og mixed forward-backward stabil hvis $\hat y+\Delta y = f(x+\Delta x)$ med $\|\Delta y\|\le\delta_1\|y\|$ og $\|\Delta x\|\le\delta_2\|x\|$.

**Eksempel: $\exp(x)$ som række (slides).** Læg led til indtil summen ikke ændrer sig (`term *= x/k++; sum += term;`, i `float`). Fejlen er stor for negative $x$, fordi seriesummationens betingelsestal er $\exp(|x|-x)$ (selv om $\mathrm{cond}(\exp,x)=|x|$ er lille). Hurtig fix: regn $\exp(|x|)$ og tag den reciprokke, når $x<0$. Slides understreger, at det ikke er sådan exp implementeres i praksis.

**Sekventiel summation (slides).** Med $\hat s_k = (\hat s_{k-1}+x_k)(1+\delta_k)$, $|\delta_k|\le u$, fås $\hat s_n = s_n + \theta_2x_1 + \sum_{i=2}^n\theta_ix_i$ med $1+\theta_i=\prod_{k=i}^n(1+\delta_k)$. Med $1-nu<1+\theta_i<1/(1-nu)$ følger
$$\frac{|\hat s_n-s_n|}{|s_n|} \le \frac{\sum|x_i|}{|\sum x_i|}\cdot\frac{nu}{1-nu}.$$
Hvis $nu<0.1$ kan det forenkles til $<\dfrac{\sum|x_i|}{|\sum x_i|}\cdot 1.06\,nu$ (geometrisk række). For double er $u=2^{-53}$, så $nu<0.1$ giver $n<9\cdot10^{14}$: det ville kræve 7,2 PB lager, og kun selve summationen ville tage ca. 3000 s ved 300 Gflops/s, men at hente data fra RAM (50 GB/s) tager ca. 40 timer og fra harddisk (120 MB/s) ca. 1,9 år.

**Kahans summation (slides).** Kompenseret summation:

```c
double sum = 0.0, c = 0.0, t, y;
for (size_t i = 0; i < n; i++) {
    y = x[i] - c;
    t = sum + y;
    c = (t - sum) - y;
    sum = t;
}
```

I eksakt aritmetik er $c=0$; i floating-point opsamler $c$ den tabte lave del. Den relative forward error opfylder $\epsilon_{rel}\le\dfrac{\sum|x_i|}{|\sum x_i|}(2u+O(nu^2))$, dvs. næsten uafhængig af $n$.

**Call-by-value (slides).** C sender argumenter som værdier. En `swap(int a, int b)` der bytter lokale kopier ændrer derfor ikke `a` og `b` i `main` (de forbliver 1 og 3).

**Pointere (slides).** `int val = 1; int *pval = &val; *pval = 2;`. En pointer er en adresse; `*` dereferencerer, `&` giver adressen, og `%p` udskriver en adresse. Med `swap2(int *a, int *b)` kaldt som `swap2(&a,&b)` bliver værdierne byttet. Eksempel på pointere og arrays: `pdata = &data[1]` er det samme som `data+1`, `pdata[0] = 2.0` sætter `data[1]`, og `*(pdata-3) = 0.5` sætter `data[0]`. Slides spørger, om koden er let at læse (svaret er nej, og det er pointen med 4.2).

```c
#include <stdio.h>

void swap(double *a, double *b) {
    double t = *a;
    *a = *b;
    *b = t;
}

int main(void) {
    double x = 1.0, y = 2.0;
    swap(&x, &y);
    printf("%g %g\n", x, y);
    return 0;
}
```

**Arrays og pointere i funktioner (slides).** `a[i]` er det samme som `*(a+i)`. For en matrix i row-major lagring er element $(i,j)$ af en $m\times n$ matrix `a[j + i*n]`, og `*c` peger på `c[0][0]` mens `**c` er værdien `c[0][0]`.

**Pointere som returværdier (slides).** En funktion kan returnere en pointer (fx `int *max(int *a, int *b)`), men aldrig en pointer til en automatisk lokal variabel, for den findes ikke længere efter kaldet.

**`const` og pointere (slides).** `const double *a` er en pointer til en konstant `double` (compileren afviser `*a = 0;` og `a[i] = 4;`). `double * const a` er en konstant pointer til en `double`. Selve pointeren er en lokal variabel (sendt by value) og kan overskrives. Eksempel: `void mean_var(const double *a, int n, double *mean, double *var)` giver to resultater via output-pointere.
### Maskinmodel: Virtuelt adresserum og pointer-adresser (supplerende illustration, ikke fra slides)

Når et program kører, tildeler styresystemet en virtuel hukommelsesmodel (typisk 48-bit adresser på moderne 64-bit arkitekturer):

```text
  Høje adresser:  0x7FFF...  ┌─────────────────────────┐
                             │       STAKKEN (Stack)   │  Vokser nedad (lokale variable)
                             │            │            │
                             │            v            │
                             │                         │
                             │            ^            │
                             │            │            │
                             │       HEAP (Dynamisk)   │  Vokser opad (malloc / calloc)
                             ├─────────────────────────┤
                             │  BSS & Global data      │  Globale/statiske variable
                             ├─────────────────────────┤
  Lave adresser:  0x0040...  │  Tekstsegment (Kode)    │  Maskininstruktioner (read-only)
                             └─────────────────────────┘
```
En pointer er blot en variabel, hvis værdi er en 64-bit heltaladresse ($8$ bytes), der peger ind i dette adresserum.

## Opgaver

Fra `module04.pdf`. Instruktioner: læs King kap. 11, 12 og 15.4; læs lecture notes kap. 4.

- 4.1 Tag quizzen om pointere (spørgsmål 5 og 6 handler om dynamisk hukommelse, som er næste uges emne, og kan springes over).
- 4.2 Analysér det givne program (array `arr[10] = {19,74,13,67,44,80,7,36,9,77}`, pointer `p = arr`, løkke `while (++i < 10) val += *(p++);`, derefter `val /= 10;` og `printf("Value: %.2f\n", val);`). Hvad beregner det? Omskriv programmet, så koden bliver mere læsbar.
  - Løsningsidé: programmet beregner gennemsnittet af de ti tal. Omskriv til en `for`-løkke med indeks, `val += arr[i];`, og fjern pointeren `p`.
- 4.3 Hvad er betingelsestallet for $f(x) = \cos(x)$?
  - Løsningsidé: $\mathrm{cond}(f,x)=\left|\dfrac{xf'(x)}{f(x)}\right| = \left|\dfrac{x\sin x}{\cos x}\right| = |x\tan x|$.
- 4.4 Betragt $f(x) = \int_0^1 e^{tx}\,\mathrm{d}t$, som også kan skrives $f(x) = 1$ for $x = 0$ og $f(x) = (e^x - 1)/x$ for $x \ne 0$.
  - (a) Hvordan karakteriseres problemet at evaluere $f(x)$ for $x$ tæt på 0? (i) velkonditioneret, (ii) dårligt konditioneret, (iii) hverken eller; afhænger af algoritmen og/eller præcisionen.
  - (b) Givet implementeringen `double feval(double x)` med `if (x == 0) return 1.0; else return (exp(x)-1.0)/x;`: er det en numerisk stabil algoritme til at evaluere $f$?
  - Løsningsidé: (a) velkonditioneret: betingelsestallet $|xf'(x)|/|f(x)|$ er kontinuert og er 0 i $x=0$. (b) Nej, ustabil: $e^x-1$ rammes af cancellation nær 0 selv om problemet er velkonditioneret. Brug `expm1(x)` i stedet.
- 4.5 Givet $n$ tal $x_1, \dots, x_n$ hvor $\sum |x_i| \approx 500$ og $|\sum x_i| \approx 0.01$: hvad er cirka den værst tænkelige relative fejl ved sekventiel floating-point summation, hvis enhedsafrundingsfejlen er $u$ og $nu < 0.1$?
  - Løsningsidé: betingelsestallet er ca. $500/0.01 = 5\cdot10^4$, så fejlen er højst $5\cdot10^4\cdot1.06\,nu \approx 5.3\cdot10^4\,nu$.
- 4.6 Lav "Module 04"-opgaverne på Autolab. (Løsninger lægges på Learn efter deadline.)
- 4.7 Lav exercises 3 og 6 (kap. 11, s. 255 til 256) i lærebogen.
  - Løsningsidé: begge bruger output-pointere. Ex. 3 (`avg_sum`): summér i `*sum` og sæt `*avg = *sum/n`. Ex. 6 (`find_two_largest`): initialiser `*largest` og `*second_largest` ud fra de to første elementer, og opdater i en løkke fra indeks 2 (hvis `a[i] > *largest` rykkes den gamle største ned, ellers sammenlignes med den næststørste).
- 4.8 Lav exercises 6 og 9 (kap. 12, s. 273 til 274) i lærebogen.
  - Løsningsidé: pointerudgaver af løkker. Ex. 6 (`sum_array`): `for (p = a; p < a+n; p++) sum += *p;`. Ex. 9 (`inner_product`): to pointere `pa` og `pb` som øges i samme løkke, `sum += *(pa++) * *(pb++)`.

## Tjek dig selv

- [ ] Hvad er forskellen på et problems conditioning og en algoritmes numeriske stabilitet?
- [ ] Hvordan defineres betingelsestallet for en funktion?
- [ ] Hvad er forward og backward error?
- [ ] Hvorfor kan summation af $\exp(x)$ som række give et dårligt resultat for negative $x$, og hvordan hjælper Kahans summation?
- [ ] Hvad betyder call-by-value i C, og hvordan giver pointere en funktion adgang til kalderens variabel?
- [ ] Hvad betyder `const` i pointerdeklarationer?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
