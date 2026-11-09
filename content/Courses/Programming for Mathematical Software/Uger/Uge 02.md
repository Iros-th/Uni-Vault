---
publish: true
title: "Programming for Mathematical Software uge 2: Flydende tal, kontrolstrukturer, basistyper"
course: Programming for Mathematical Software
type: week
week: 2
tags:
  - c-programming
  - ugenote
---

# Uge 2: Flydende tal, kontrolstrukturer, basistyper

> Kilde: `module02.pdf` på DTU Learn (opgaveark, 10. september 2026) og modultabellen. Slides (`slides02.pdf`) er ikke læst; på siden ligger også et dødt link "demo02" som ikke kunne åbnes. Pensum: King kap. 4, 5 (skim), kap. 7 (læs), 23.1, 23.4; lecture notes kap. 2 og 3.

## Emner

- Flydende tal (IEEE 754) og afrundingsfejl
- `if`-sætninger og andre kontrolstrukturer
- Basistyper, heltalstyper og typekonvertering (casting)
- Hexadecimal repræsentation

## Begreber

**Flydende tal.** En `double` gemmer et tal som fortegn, mantisse og eksponent, og kun et endeligt antal tal kan repræsenteres. Resultatet af en operation afrundes til nærmeste repræsenterbare tal. Enhedsafrundingsfejlen (unit round-off) $u$ er et mål for den relative fejl pr. operation. Mange decimaltal, fx 0.1, kan ikke repræsenteres præcist i binær.

**Aritmetik er ikke associativ.** Fordi hvert mellemresultat afrundes, kan rækkefølgen betyde noget:

```c
#include <stdio.h>

int main(void) {
    double a = 1e16, b = -1e16, c = 1.0;
    printf("%g %g\n", (a + b) + c, a + (b + c));
    return 0;
}
```

Her giver første udtryk 1 og andet 0, fordi $-10^{16}+1$ afrundes tilbage til $-10^{16}$ (afstanden mellem nabo-`double`s ved $10^{16}$ er 2). Det er et eksempel på, at $a(b+c) = ab + ac$ og $a(bc) = (ab)c$ ikke gælder generelt i floating-point.

**Sammenligning af flydende tal.** Brug ikke `==` på resultater af beregninger. Sammenlign i stedet med en tolerance, fx `fabs(x - y) < tol`.

**Typekonvertering.** Implicit konvertering sker i blandede udtryk (`int` bliver til `double`). Eksplicit cast skrives `(double) i`. Pas på heltalsdivision: `(double)(a / b)` dividerer først som heltal, mens `(double) a / b` dividerer som `double`.

**Heltalstyper og hexadecimal.** Et `int` er typisk 32 bit med fortegn og kan højst rumme 2 147 483 647. Et `unsigned int` rummer op til 4 294 967 295. Til at udskrive i hex bruges `%x` eller `%X` (til `unsigned`). En byte er 8 bit og kræver 2 hex-cifre, fordi ét hex-ciffer dækker 4 bit.

```c
#include <stdio.h>

int main(void) {
    unsigned int x = 2343432205u;
    printf("%u i hex: %X\n", x, x);
    return 0;
}
```

## Opgaver

Fra `module02.pdf`. Instruktioner: skim King kap. 4 og 5, læs kap. 7; læs lecture notes kap. 2 og 3.

- 2.1 Sandt eller falsk? Den associative egenskab for multiplikation gælder for floating-point aritmetik med begrænset præcision, dvs. $a(bc) = (ab)c$ for floating-point tal $a$, $b$, $c$.
- 2.2 Sandt eller falsk? Den distributive egenskab gælder for floating-point aritmetik, dvs. $a(b+c) = ab + ac$ for floating-point tal $a$, $b$, $c$.
- 2.3 Tag quizzen om `if`-sætninger.
- 2.4 Tag quizzen om eksplicit typekonvertering (typecasting). Gæt ikke: skriv kode og find svaret.
- 2.5 Lav "Module 02"-opgaverne på Autolab.
- 2.6 Lav exercise 14 (kap. 7, s. 159) i lærebogen.
- 2.7 Skriv et program med en heltalsvariabel med værdien 2.343.432.205. Vælg en passende datatype, og udskriv værdien og dens hexadecimale repræsentation med `printf()`. Hvor mange hex-cifre skal der til for at repræsentere en byte? Hint: brug `%x` eller `%X`.

## Tjek dig selv

- [ ] Hvorfor kan 0.1 ikke gemmes præcist som `double`?
- [ ] Kan jeg give et konkret eksempel på, at $(a+b)+c \ne a+(b+c)$ i floating-point?
- [ ] Hvorfor passer 2.343.432.205 ikke i en almindelig 32-bit `int`, men i en `unsigned int`?
- [ ] Hvorfor bør man ikke bruge `==` til at sammenligne to `double`?
- [ ] Hvad er forskellen på `(double)(a / b)` og `(double) a / b` når `a` og `b` er `int`?
- [ ] Hvor mange hex-cifre er der i en byte, og hvorfor?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
