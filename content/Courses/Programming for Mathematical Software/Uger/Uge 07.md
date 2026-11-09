---
publish: true
title: "Programming for Mathematical Software uge 7: Hukommelsesmodel, tid, kompleksitet, optimering"
course: Programming for Mathematical Software
type: week
week: 7
tags:
  - c-programming
  - ugenote
---

# Uge 7: Hukommelsesmodel, timing, kompleksitet og compileroptimering

> Kilde: `module07.pdf` på DTU Learn (opgaveark, 22. oktober 2026) og modultabellen. Slides (`slides07.pdf`) og skabelonerne i `module07.tar` er ikke læst. Pensum: King kap. 26.3; lecture notes kap. 7 (Complexity and Performance). Under dette modul ligger også et link til en "Assignment" (dropbox) som ikke er åbnet; kursussiden skriver, at koden afleveres på Autolab og en individuel rapport på DTU Learn.

## Emner

- Hukommelseshierarki og cache
- Måling af tid med `clock()`
- FLOPS som ydeevnemål
- Tidskompleksitet ($O$-notation)
- Rækkevis og kolonnevis lagring af matricer
- Compileroptimering (`-O0` til `-O3`)

## Begreber

**Hukommelseshierarki.** Data hentes fra RAM til cache (L1, L2, L3) før CPU'en bruger dem. Cache er hurtig men lille. Hvis et programs data er mindre end en cache, kører det hurtigt; ellers falder ydeevnen i trin, når data ikke længere passer i næste niveau. Det er "stepping"-effekten i opgave 7.1.

**Måling af CPU-tid.** `clock()` fra `<time.h>` giver CPU-tid i "clock ticks". Divider med `CLOCKS_PER_SEC` for sekunder. Korte kald måles upålideligt, så man gentager kaldet i en løkke og tager gennemsnittet.

```c
#include <stdio.h>
#include <time.h>

int main(void) {
    clock_t t1 = clock();
    /* ... kode der skal måles ... */
    clock_t t2 = clock();
    printf("Tid: %g s\n", (double)(t2 - t1) / CLOCKS_PER_SEC);
    return 0;
}
```

**FLOPS.** Antal floating-point operationer pr. sekund = (antal operationer) / (tid). Det er et bedre mål end rå tid, når problemstørrelsen varierer, fordi man så sammenligner "arbejde pr. sekund" og ikke bare, at større problemer tager længere tid. For en løkke med 1 multiplikation pr. element og `n` elementer er det `n` operationer pr. gennemløb.

**Matrix-vektor-produkt (dgemv).** Operationen $y \leftarrow \alpha A x + \beta y$ med $A$ af størrelse $m \times n$. Hvis $A$ lagres rækkevis (row major) i et enkelt array, ligger element $(i,j)$ på plads `i*n + j`. Løber den indre løkke over $j$, læses hukommelsen sammenhængende:

```c
void dgemv_rowmajor(int m, int n, double alpha, const double *A,
                    const double *x, double beta, double *y) {
    for (int i = 0; i < m; i++) {
        double s = 0.0;
        for (int j = 0; j < n; j++) {
            s += A[i*n + j] * x[j];
        }
        y[i] = alpha * s + beta * y[i];
    }
}
```

Ved kolonnevis lagring (column major) ligger $(i,j)$ på `i + j*m`, og man bør i stedet lade den indre løkke løbe over $i$ for at få sammenhængende adgang. Antal operationer er ca. proportionalt med $mn$, altså $O(mn)$.

**Compileroptimering.** `-O0` slår optimering fra, `-O1` til `-O3` slår stadig mere aggressive optimeringer til. Alt skal genkompileres med samme flag (`make clean && make OPT=-O3`).

## Opgaver

Fra `module07.pdf`. Instruktioner: læs lecture notes kap. 7; indhent uafsluttede opgaver fra tidligere moduler. Download `module07.tar` fra DTU Learn.

- 7.1 Skriv et program, der måler tiden for funktionen `datasize1()` fra forelæsningen, med det mål at lave en ydeevnegraf, der viser cache-niveauernes indflydelse.
  - (a) Skriv en `main()`, der kalder `datasize1()` med forskelligt antal elementer og måler køretiden (gennemsnit over flere kald; brug `clock()`). Opgaven giver en skabelon `ex1.c` med `#define MAX_SIZE 16777216`, `extern int datasize1(int);` og et globalt array `double arr[MAX_SIZE]`, samt en Makefile med `CFLAGS=-Wall -std=c99` plus en variabel OPT til optimeringsflag.
  - (b) Beregn ydeevnen i FLOPS fra tiderne. Hvordan? (Hint: løkken har én multiplikation pr. element.)
  - (c) Plot ydeevnen i FLOPS som funktion af arrayets hukommelsesstørrelse (fra få KB til nogle MB). Kan du se trin? Svarer trinene til cache-størrelserne på din computer? (Hint: log-skala base 2 på x-aksen; kompilér med fuld optimering.)
  - (d) Hvorfor er FLOPS et bedre mål end de rå tider her?
- 7.2 Matrix-vektor-operationen $y \leftarrow \alpha A x + \beta y$ (dgemv) implementeres i to versioner, som sammenlignes.
  - (a) Lav "Module 07"-opgaverne på Autolab. Funktionerne `my_dgemv_v1()` og `my_dgemv_v2()` bruges i resten af opgaven.
  - (b) Mål CPU-tiden for `my_dgemv_v1()` for $m = n$ og $n \in \{100, 200, \dots, 1600\}$. Start med testcases med rækkevis lagring (funktionen `testcase()` i handoutet, som bruger MSPTOOLS).
  - (c) Mål CPU-tiden for `my_dgemv_v2()` for samme $n$. Er ydeevnen ens for rækkevis og kolonnevis lagring? Sammenlign med `my_dgemv_v1()`: er den ene hurtigere?
  - (d) Kompilér med `-O0`, `-O1`, `-O2` og `-O3` og gentag begge målinger. Hvor meget betyder optimeringen? Med GCC kan man også prøve `-funroll-loops`.
  - (e) (Valgfri) Mål ydeevnen i FLOPS for `my_dgemv_vN()`. Hint: tæl floating-point operationer i løkkelegemet; antallet afhænger af $m$ og $n$.

## Tjek dig selv

- [ ] Hvorfor falder ydeevnen i trin, når et array vokser?
- [ ] Hvorfor gentager man et kald mange gange, før man måler tid?
- [ ] Hvordan regner jeg FLOPS ud ud fra en tid?
- [ ] Hvorfor er rækkevis traversering hurtigere for rækkevis lagrede matricer?
- [ ] Hvad er forskellen på CPU-tid og vægurstid (wall-clock)?
- [ ] Hvad er tidskompleksiteten for dgemv med $m \times n$-matrix?
- [ ] Hvorfor skal alle filer genkompileres, når man skifter optimeringsflag?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
