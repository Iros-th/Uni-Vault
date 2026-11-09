---
publish: true
title: "Programming for Mathematical Software uge 11: Rekursion"
course: Programming for Mathematical Software
type: week
week: 11
tags:
  - c-programming
  - ugenote
---

# Uge 11: Rekursion

> Kilde: `module11.pdf` på DTU Learn (opgaveark, 19. november 2026) og modultabellen. Slides er ikke læst. Pensum: King afsnit 9.6 (s. 204 til 209); repetér worst-case tidskompleksitet for adgang, søgning, indsættelse og sletning i arrays og sammenhængende lister (Big-O Cheat Sheet).

## Emner

- Rekursive funktioner: basistilfælde og rekursivt kald
- Tids- og pladskompleksitet for rekursive algoritmer
- Fibonacci-tal som eksempel
- Rekursion mod iteration

## Begreber

**Rekursion.** En funktion kalder sig selv på et mindre delproblem og skal have et basistilfælde, der stopper kaldene. Hvert kald lægger en stakramme på programstakken, så dybden af rekursionen er pladsforbruget.

**Eksponentiel vækst.** Den naive rekursive Fibonacci beregner de samme delproblemer igen og igen. Hvis $f_n$ er antal kald, er $f_n = f_{n-1} + f_{n-2} + 1$ med $f_0 = f_1 = 1$, så antallet af kald vokser eksponentielt (omtrent som $\varphi^n$ med $\varphi = (1+\sqrt 5)/2$). Tidskompleksiteten er derfor eksponentiel, mens stakkens dybde kun er $O(n)$.

**Tælling af kald og dybde.** Man kan udstyre funktionen med globale tællere:

```c
#include <stdio.h>

static unsigned long ncalls = 0;
static int depth = 0, max_depth = 0;

unsigned long fibonacci(unsigned long n) {
    unsigned long Fn;
    ncalls++;
    depth++;
    if (depth > max_depth) max_depth = depth;
    if (n == 0)
        Fn = 0;
    else if (n == 1)
        Fn = 1;
    else
        Fn = fibonacci(n - 1) + fibonacci(n - 2);
    depth--;
    return Fn;
}

int main(void) {
    unsigned long f = fibonacci(5);
    printf("F5 = %lu, kald = %lu, max dybde = %d\n", f, ncalls, max_depth);
    return 0;
}
```

**Iterativ version.** Man kan undgå rekursionen ved at huske de to seneste tal. Det giver $O(n)$ tid og $O(1)$ plads:

```c
unsigned long fib_iter(unsigned long n) {
    unsigned long a = 0, b = 1;
    for (unsigned long i = 0; i < n; i++) {
        unsigned long t = a + b;
        a = b;
        b = t;
    }
    return a;
}
```

**Overløb.** Et `unsigned long` er 4 eller 8 bytes afhængigt af systemet. Ved 8 bytes er det største Fibonacci-tal, der kan repræsenteres, $F_{93} = 12200160415121876738$ (jeg har regnet det ud, men tjek det med dit eget program). Ved 4 bytes er det $F_{47} = 2971215073$.

## Opgaver

Fra `module11.pdf`. Instruktioner: læs King 9.6; repetér Big-O Cheat Sheet; indhent uafsluttede opgaver.

- 11.1 Fibonacci-tallene er defineret ved $F_n = F_{n-1} + F_{n-2}$ for $n = 2, 3, 4, \dots$ med $F_0 = 0$ og $F_1 = 1$. De kan også udtrykkes vha. det gyldne snit $\varphi = (1+\sqrt 5)/2$ som $F_n = (\varphi^n - (-\varphi)^{-n})/\sqrt 5$. Analysér den givne rekursive funktion `unsigned long fibonacci(unsigned long n)`.
  - (a) Hvor mange gange kaldes funktionen, hvis $n = 5$? Skriv et kort program, der tæller antal kald (fx med en global eller static variabel). Hint: $f_n = f_{n-1} + f_{n-2} + 1$ for $n \ge 2$ og $f_0 = f_1 = 1$.
  - (b) Hvad er tidskompleksiteten af den rekursive implementering? Skriv et kort program, der verificerer resultatet. Hint: lineær, polynomiel eller eksponentiel vækst?
  - (c) Hvad er pladskompleksiteten? Hint: hvad er det maksimale antal funktionskald på stakken? Find rekursionsdybden med globale variable (`depth` og `max_depth`).
  - (d) Omskriv Fibonacci-funktionen, så den undgår rekursive kald (returtype `unsigned long`). Hvad er tidskompleksitet og pladskompleksitet?
  - (e) Mål CPU-tiden for den rekursive variant og din modificerede version for forskellige $n$. Afspejler den målte tid de Big-O-kompleksiteter, du udledte?
  - (f) Find det største Fibonacci-tal, der kan repræsenteres som `unsigned long`. Hint: `unsigned long` er 4 eller 8 bytes afhængigt af systemet.

## Tjek dig selv

- [ ] Hvad er et basistilfælde, og hvad sker der uden?
- [ ] Hvorfor er naiv rekursiv Fibonacci eksponentiel i tid, men kun $O(n)$ i stakplads?
- [ ] Hvad er pladsforbruget af en rekursion, og hvad ligger på stakken?
- [ ] Hvordan skriver jeg en iterativ Fibonacci, og hvad er dens kompleksitet?
- [ ] Hvad sker der, når et `unsigned long` løber over?
- [ ] Hvad er worst-case tid for søgning i et array og i en sammenhængende liste?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
