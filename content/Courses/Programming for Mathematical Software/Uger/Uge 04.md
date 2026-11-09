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

> Kilde: `module04.pdf` på DTU Learn (opgaveark, 24. september 2026) og modultabellen. Slides (`slides04.pdf`) er ikke læst. Pensum: King kap. 11, 12, 15.4; lecture notes kap. 4 (Conditioning and numerical stability).

## Emner

- Betingelsestal (conditioning) for et problem
- Numerisk stabilitet for en algoritme
- Fejl ved summation af flydende tal
- Pointere, pointeraritmetik, pointere og arrays

## Begreber

**Conditioning (egenskab ved problemet).** Hvor meget ændrer resultatet sig, når input ændres lidt? For en differentiabel funktion $f$ er det relative betingelsestal
$$\kappa_f(x) = \left| \frac{x f'(x)}{f(x)} \right|.$$
Et stort $\kappa$ betyder dårligt konditioneret: små relative ændringer i $x$ kan give store relative ændringer i $f(x)$. Det er uafhængigt af, hvordan man regner det ud.

**Numerisk stabilitet (egenskab ved algoritmen).** En algoritme er stabil, hvis afrundingsfejlene ikke forstærkes mere, end problemets conditioning tilsiger. Et velkonditioneret problem kan stadig løses med en ustabil algoritme, typisk fordi to næsten ens tal trækkes fra hinanden (udslettelse, cancellation), og de mest betydende cifre forsvinder.

**Summation.** Ved sekventiel summation af $n$ tal vokser den værst tænkelige relative fejl cirka som
$$\frac{n u \sum |x_i|}{\left|\sum x_i\right|},$$
hvor $u$ er enhedsafrundingsfejlen. Er summen meget mindre end summen af de absolutte værdier (som i opgave 4.5), er resultatet følsomt over for afrunding.

**Pointere.** En pointer indeholder en adresse. `int *p = arr;` får `p` til at pege på arrayets første element. `*p` er værdien, `&x` er adressen af `x`. Pointeraritmetik: `p + 1` peger på næste element (flytter `sizeof(int)` bytes), og `a[i]` er det samme som `*(a + i)`. Pointere bruges til at lade en funktion ændre variabler hos kalderen:

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

## Opgaver

Fra `module04.pdf`. Instruktioner: læs King kap. 11, 12 og 15.4; læs lecture notes kap. 4.

- 4.1 Tag quizzen om pointere (spørgsmål 5 og 6 handler om dynamisk hukommelse, som er næste uges emne, og kan springes over).
- 4.2 Analysér det givne program (array `arr[10] = {19,74,13,67,44,80,7,36,9,77}`, pointer `p = arr`, løkke `while (++i < 10) val += *(p++);`, derefter `val /= 10;` og `printf("Value: %.2f\n", val);`). Hvad beregner det? Omskriv programmet, så koden bliver mere læsbar.
- 4.3 Hvad er betingelsestallet for $f(x) = \cos(x)$?
- 4.4 Betragt $f(x) = \int_0^1 e^{tx}\,\mathrm{d}t$, som også kan skrives $f(x) = 1$ for $x = 0$ og $f(x) = (e^x - 1)/x$ for $x \ne 0$.
  - (a) Hvordan karakteriseres problemet at evaluere $f(x)$ for $x$ tæt på 0? (i) velkonditioneret, (ii) dårligt konditioneret, (iii) hverken eller; afhænger af algoritmen og/eller præcisionen.
  - (b) Givet implementeringen `double feval(double x)` med `if (x == 0) return 1.0; else return (exp(x)-1.0)/x;`: er det en numerisk stabil algoritme til at evaluere $f$?
- 4.5 Givet $n$ tal $x_1, \dots, x_n$ hvor $\sum |x_i| \approx 500$ og $|\sum x_i| \approx 0.01$: hvad er cirka den værst tænkelige relative fejl ved sekventiel floating-point summation, hvis enhedsafrundingsfejlen er $u$ og $nu < 0.1$?
- 4.6 Lav "Module 04"-opgaverne på Autolab.
- 4.7 Lav exercises 3 og 6 (kap. 11, s. 255 til 256) i lærebogen.
- 4.8 Lav exercises 6 og 9 (kap. 12, s. 273 til 274) i lærebogen.

## Tjek dig selv

- [ ] Hvad er forskellen på, at et problem er dårligt konditioneret, og at en algoritme er ustabil?
- [ ] Hvordan udregner jeg $\kappa_f(x)$ for en given funktion?
- [ ] Hvorfor giver `(exp(x)-1.0)/x` problemer for meget små $x$?
- [ ] Hvad betyder `*(p++)`, og i hvilken rækkefølge sker deref og increment?
- [ ] Hvorfor er `a[i]` og `*(a + i)` det samme?
- [ ] Hvorfor skal `swap` tage pointere i C?
- [ ] Hvorfor er summation af tal med næsten ophævende tegn følsom over for afrunding?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
