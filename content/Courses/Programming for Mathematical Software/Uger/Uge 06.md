---
publish: true
title: "Programming for Mathematical Software uge 6: Filer, strenge og sparse matricer"
course: Programming for Mathematical Software
type: week
week: 6
tags:
  - c-programming
  - ugenote
---

# Uge 6: Filer og data, sparse matricer

> Kilde: `module06.pdf` på DTU Learn (opgaveark, 8. oktober 2026) og modultabellen. Slides (`slides06.pdf`) er ikke læst. Pensum: King kap. 13, 22, 23.6; lecture notes kap. 6 (Sparse Matrices).

## Emner

- Strenge i C (kap. 13)
- Input og output med filer (kap. 22)
- Sparse matricer og lagringsformater
- Brug af biblioteket msptools (kursets egne datatyper til arrays og sparse matricer)

## Begreber

**Strenge.** En streng i C er et `char`-array afsluttet med nultegnet `'\0'`. Længden fås med `strlen` fra `<string.h>`. Pladsen til nultegnet må ikke glemmes ved allokering, og `strcpy` tjekker ikke grænser.

**Filer.** `fopen` åbner en fil og returnerer en `FILE *` (eller `NULL` ved fejl). `fscanf` og `fprintf` svarer til `scanf` og `printf`. Til sidst lukkes med `fclose`.

```c
#include <stdio.h>

int main(void) {
    FILE *f = fopen("data.txt", "r");
    double x, sum = 0.0;
    if (f == NULL) {
        perror("fopen");
        return 1;
    }
    while (fscanf(f, "%lf", &x) == 1) {
        sum += x;
    }
    fclose(f);
    printf("Sum: %g\n", sum);
    return 0;
}
```

**Sparse matricer.** En matrix med overvejende nuller gemmes ved kun at gemme de ikke-nul elementer. Det sparer både plads og regnetid. Et simpelt format er koordinatformatet (COO), hvor hvert ikke-nul element gemmes som (række, kolonne, værdi). Skitse af en sådan datatype (eget eksempel, ikke msptools' faktiske definition):

```c
typedef struct {
    int m, n;      /* matrixens dimensioner */
    int nnz;       /* antal ikke-nul elementer */
    int *row;      /* rækkeindeks, længde nnz */
    int *col;      /* kolonneindeks, længde nnz */
    double *val;   /* værdier, længde nnz */
} coo_t;
```

I øvelserne bruges msptools, som allerede har typer og funktioner til dynamiske arrays, todimensionelle arrays og sparse matricer i COO-format (funktionsnavne i opgaven: `array2d_from_file()`, `array2d_print()`, `coo_from_file()`, `coo_print()`).

## Opgaver

Fra `module06.pdf`. Instruktioner: læs King kap. 13, 22 og 23.6; læs lecture notes kap. 6.

- 6.1 Tag quizzen om strenge.
- 6.2 Lav exercise 5 (kap. 13, s. 309) i lærebogen.
- 6.3 Lav exercise 12 (kap. 22, s. 583) i lærebogen.
- 6.4 Lav "Module 06"-opgaverne på Autolab.
- 6.5 Download msptools (enten `msptools-master.zip`, eller `git clone https://gitlab.gbar.dtu.dk/mskan/msptools.git`). Kig headerfilerne i `include`-mappen igennem (datatyper og funktionsprototyper).
  - (a) Kør `make` i msptools-mappen. Man kan også køre `make test` for at bygge og køre nogle basale testprogrammer.
  - (b) Gå til `examples`-mappen og kør `array_example01` (`./array_example01`).
  - (c) Lav en kopi af `array_example01.c` (fx `array_example02.c`) og ændr koden, så kapaciteten af de dynamiske arrays udskrives sammen med indholdet.
  - (d) Lav et program, der med msptools læser et todimensionelt array fra en tekstfil (`array2d_from_file()`) og udskriver det (`array2d_print()`). Brug filen `data/A1.txt` som testcase.
  - (e) Lav et program, der læser en sparse matrix fra en tekstfil (`coo_from_file()`) og udskriver den (`coo_print()`). Brug filen `data/MM1.txt` som testcase.

## Tjek dig selv

- [ ] Hvad er nultegnet, og hvad sker der, hvis det mangler?
- [ ] Hvad returnerer `fopen` ved fejl, og hvorfor skal det tjekkes?
- [ ] Hvorfor tester løkken på `fscanf(...) == 1` i stedet for fx at teste på filens slutning først?
- [ ] Hvorfor gemmer man sparse matricer anderledes end fulde matricer?
- [ ] Hvor mange tal skal et COO-format bruge for en matrix med `nnz` ikke-nul elementer?
- [ ] Hvad er forskellen på et dynamisk arrays længde og dets kapacitet?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
