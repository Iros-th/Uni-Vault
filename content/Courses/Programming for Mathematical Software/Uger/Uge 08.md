---
publish: true
title: "Programming for Mathematical Software uge 8: Eksterne biblioteker (BLAS og LAPACK)"
course: Programming for Mathematical Software
type: week
week: 8
tags:
  - c-programming
  - ugenote
---

# Uge 8: Eksterne biblioteker (BLAS og LAPACK)

> Kilde: `module08.pdf` på DTU Learn (opgaveark, 29. oktober 2026) og modultabellen. Slides (`slides08.pdf`) og eksemplerne i `module08.tar` er ikke læst. Pensum: lecture notes kap. 8 (External Libraries for Numerical Linear Algebra).

## Emner

- BLAS (Basic Linear Algebra Subprograms) og LAPACK
- At kalde Fortran-agtige biblioteksrutiner fra C
- CBLAS, den C-venlige grænseflade
- Linking med `-lblas` og lignende

## Begreber

**Hvorfor biblioteker.** Veludviklede biblioteker som BLAS (vektor- og matrixoperationer) og LAPACK (lineære ligningssystemer, egenværdier med mere) er optimeret til hardwaren. En egen implementering vil næsten altid være langsommere og mere fejlbehæftet.

**BLAS-kald fra C.** BLAS er oprindeligt skrevet i Fortran. I Fortran sendes alle argumenter som pointere, og rutinenavnene får typisk en understregning i C (`dscal_`). Derfor erklærer man prototypen selv, og alle skalare argumenter sendes som adresser. Eksemplet nedenfor skalerer et array med `dscal` (prototypen svarer til den, der står i opgavearket); det linkes med fx `gcc ex.c -lblas`:

```c
#include <stdio.h>

void dscal_(const int *n, const double *a, double *x, const int *incx);

int main(void) {
    double x[4] = {1.0, 2.0, 3.0, 4.0};
    const int n = 4, incx = 1;
    const double a = 2.0;
    dscal_(&n, &a, x, &incx);
    for (int i = 0; i < n; i++) {
        printf("%g ", x[i]);
    }
    printf("\n");
    return 0;
}
```

**Stride (`incx`).** Hvis `incx` er $k$, behandles elementerne `x[0]`, `x[k]`, `x[2k]` og så videre. Med `incx = 1` behandles de første $n$ elementer; med `incx = 2` hvert andet.

**CBLAS.** Giver en headerfil `cblas.h` med C-prototyper, hvor skalarer sendes som værdier (`cblas_dscal(n, a, x, incx)`). På macOS inkluderes `<Accelerate/Accelerate.h>` i stedet, hvilket opgavearket løser med et `#if defined(__APPLE__) && defined(__MACH__)`-blok.

**Kolonnevis lagring.** BLAS og LAPACK forventer som udgangspunkt matricer lagret kolonnevis (Fortran-konvention), hvilket man skal passe på, når man bruger rækkevis lagrede C-arrays.

**Windows.** Opgavearket skriver, at BLAS og LAPACK findes på mange Unix/Linux-systemer inkl. DTU Unix og macOS, men ikke på Windows. WSL-brugere kan installere OpenBLAS med `sudo apt-get install libopenblas-dev`.

## Opgaver

Fra `module08.pdf`. Instruktioner: læs lecture notes kap. 8.

- 8.1 Download `module08.tar` fra DTU Learn. Den indeholder to eksempler, `example_blas.c` og `example_cblas.c`, der skalerer et array af `double` med BLAS-rutinen `dscal`, samt en Makefile. Det første eksempel inkluderer prototypen for `dscal_` eksplicit; det andet bruger CBLAS og `cblas_dscal`. Læs og forstå eksemplerne (opgavearket forklarer argumenterne `n`, `a`, `x`, `incx` og brugen af `const`).
- 8.2 Lav "Module 08"-opgaverne på Autolab.

## Tjek dig selv

- [ ] Hvorfor har BLAS-funktionerne en understregning i navnet, når de kaldes fra C?
- [ ] Hvorfor sendes `n`, `a` og `incx` som pointere til `dscal_`, men ikke til `cblas_dscal`?
- [ ] Hvad gør `incx`, og hvad sker der ved `incx = 2`?
- [ ] Hvorfor er `const` brugt på alle argumenter undtagen `x`?
- [ ] Hvad er forskellen på rækkevis og kolonnevis lagring, og hvordan påvirker det BLAS og LAPACK?
- [ ] Hvordan linker jeg mod BLAS med `gcc`?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
