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

> Kilde: `module07.pdf` (opgaveark, 22. oktober 2026), `slides07.pdf` (forelæsning 7, 29 slides), `sols_module07.pdf` (løsningseksempler) og `module07.tar` (skabeloner: `part1/` med `datasize1.c`, `ex1.c`, `Makefile`; `part2/` med `testcase.c`, `example.c`, tomme `my_dgemv_v1/v2` og hele MSP Tools). Siden "Solution examples" uden fil kunne ikke åbnes (404). Pensum: King kap. 26.3; lecture notes kap. 7 (Complexity and Performance). Under dette modul ligger også et link til en "Assignment" (dropbox) som ikke er åbnet; kursussiden skriver, at koden afleveres på Autolab og en individuel rapport på DTU Learn.

## Emner

- Måling af tid (`time`, `clock`), profilering
- Tids- og pladskompleksitet, $O$-notation
- Computerarkitektur: hukommelseshierarki, cache, lokalitet, instruktionsparallelisme
- Rækkevis og kolonnevis lagring af matricer
- Compileroptimering (`-O0` til `-O3`, `-funroll-loops`)

## Begreber

**Timing (slides).** `time.h` har to grundrutiner. Vægtid: `time_t time(time_t *tloc)`, operativsystemets tid, ikke garanteret monoton, opløsning 1 sekund. CPU-tid: `clock_t clock(void)`, en tilnærmelse til den processortid processen har brugt, systemafhængig opløsning, kan løbe rundt, divider med `CLOCKS_PER_SEC`. Når opløsningen er dårlig, måler man mange gentagelser og tager gennemsnittet. Platformspecifikt: `clock_gettime()` (Linux/macOS), `getrusage()` (POSIX), `mach_absolute_time()` (macOS), `GetTickCount64()` (Windows).

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

**Profilering (slides).** Formålet er det store billede: find hotspots og flaskehalse og analysér tids- og pladskompleksitet. Moderne statistiske værktøjer kræver ingen ændring af koden (Linux `perf`, macOS Xcode Instruments, Visual Studio Profiling Tools, Google gperftools). Det klassiske værktøj instrumenterer koden og kræver genkompilering (`gprof`).

**Big O (slides).** $f(x)=O(g(x))$ for $x\to\infty$ hvis der findes $c>0$ og $x_0$ så $|f(x)|\le c\,g(x)$ for alle $x\ge x_0$. Eksempel: $4x^3-2x^2+5x\le 11x^3$ for $x\ge1$, så det er $O(x^3)$ (også $O(x^4)$ og $O(2^x)$ er sandt, men man vil have den bedste øvre grænse). $\Omega$ giver en nedre grænse ($f=\Omega(g)\iff g=O(f)$), og $\Theta$ en skarp grænse ($f=O(g)$ og $f=\Omega(g)$).

**Tids- og pladskompleksitet (slides).** Tid: adgang til element $i$ i et array er $O(1)$, addition af to vektorer af længde $n$ er $O(n)$, at finde maksimum er $O(n)$, at opremse alle permutationer af $n$ objekter er $O(n!)$. Plads: en vektor er $O(n)$, en $m\times n$ matrix er $O(mn)$. Klasser: konstant $O(1)$, logaritmisk $O(\log n)$, polylogaritmisk, lineær $O(n)$, kvasilineær $O(n(\log n)^k)$, polynomiel $O(n^k)$, eksponentiel $O(2^{\mathrm{poly}(n)})$, faktoriel $O(n!)$ og dobbelt eksponentiel.

Slides' tabel over køretid (hvis én operation tager $10^{-6}$ s): $n^5$ er 0.1 s ved $n=10$ og 1.7 min ved $n=40$, mens $2^n$ er 0.001 s ved $n=10$, 17.9 min ved $n=30$ og 12.7 dage ved $n=40$, og $3^n$ er 6.5 år ved $n=30$. Hypoteser testes med plots: $O(\log n)$ med log på $n$-aksen, $O(n^k)$ i et log-log-plot hvor hældningen er $k$, og $O(2^{\alpha n})$ med log på $T$-aksen.

**Computerarkitektur (slides).** CPU med kerner, matematisk coprocessor, registre og cache, samt instruktionspipelining. Hukommelseshierarki: L0 registre, L1 til L3 cache (SRAM), L4 RAM (DRAM), L5 lokale diske, L6 fjernlager. Cirka-latenser (omkring 2012): CPU-cyklus 0,3 ns, L1 1 ns, branch mispredict 5 ns, L2 7 ns, L3 13 ns, hovedhukommelse 100 ns, 4K tilfældigt fra SSD 150 000 ns, 1 MB sekventielt fra hukommelse 250 000 ns, diskseek 10 ms, 1 MB sekventielt fra disk 20 ms. Systemspecifikationer kan findes med `lscpu | grep cache` (Linux), `sysctl -a | grep "hw.*cache"` (macOS) eller `wmic cpu get L2CacheSize, L3CacheSize` (Windows).

**Lokalitet (slides).** Temporal lokalitet: genbrug af data eller instruktioner inden for kort tid (stram løkke). Spatial lokalitet: brug af data tæt på hinanden i hukommelsen (lille stride, fx stride 1, og sekventielle instruktioner). Eksempel: `for (i=0; i<n; i++) sum += data[i];`.

**Dataform og cache (slides).** `datasize1(elem)` ganger de første `elem` elementer af et globalt array med 3 (1 FLOP pr. element) og returnerer antal hukommelsesadgange. Ydeevnen i MFLOPS plottes mod arrayets størrelse i KB og viser trin ved L1-, L2- og L3-cachens størrelser (slides viser to maskiner: Xeon X5550 med 32 kB L1, 256 kB L2 og 8 MB L3, og Xeon E5-2660 v3 med 25 MB L3). Stride-test: `arr[i] *= 3` med `i += incr` for `incr` = 1, 2, 4, 8, ... viser, at ydeevnen falder med stride; tilfældig adgang giver kun ca. 108 MFLOPS. Slides viser også "memory mountain" (Bryant og O'Hallaron).

**Instruktionsparallelisme (slides).** To løkker med samme antal iterationer: i Loop 1 er `arr[0]++` og `arr[1]++` uafhængige, i Loop 2 skal `arr[1] += arr[0]` vente på `arr[0] += arr[1]`. Uafhængige instruktioner kan udføres samtidigt.

**Compilerflag (slides).** `gcc source.c -Wall -OX -o my_program`: `-O0` ingen optimering (standard, bedst til debugging), `-O1` de mest almindelige, `-O2` yderligere, `-O3` de dyreste (kan gøre filen større), `-Os` reducerer størrelsen, `-ffast-math` kan bryde IEEE-standarden. Flag lægges i `CFLAGS` i makefilen (`CFLAGS=-Wall -std=c99 -O2`). `-march=native` oversætter til den aktuelle CPU. Eksempel på loop unrolling: skriv fire iterationer pr. gennemløb plus en oprydningsløkke, hvilket forbedrer forholdet mellem arbejde og overhead (GCC `-funroll-loops`; Clang slår det til med `-O1`).

**Matrix-vektor-produkt, dgemv (slides, module).** $y\leftarrow\alpha Ax+\beta y$ med $A\in\mathbb{R}^{m\times n}$. Metode 1 (række-orienteret): $y_i\leftarrow\alpha\sum_{j=1}^n A_{ij}x_j+\beta y_i$. Metode 2 (kolonne-orienteret): $y\leftarrow\beta y+\sum_{j=1}^n\alpha x_jA_{:,j}$. Matricer er todimensionelle, men hukommelsen er endimensionel, så adgangsmønsteret kan være "godt" eller "dårligt" for cachen. Rækkevis lagring placerer $(i,j)$ på `i*n + j`, kolonnevis på `i + j*m`.

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

**Skabelonerne i `module07.tar`.** `part1`: `datasize1.c` (funktionen ovenfor), `ex1.c` (skabelon med `MAX_SIZE 16777216` og tom `main`) og en `Makefile` med `CFLAGS=-Wall -std=c11 $(OPT)`. `part2`: `testcase(n, order, &A, &x, &y)` bygger en $n\times n$ testmatrix og vektorer (en Householder-agtig matrix $I-2\,pq^T$ med $y$ normeret) med MSP Tools i valgt lagringsrækkefølge, og `example.c` allokerer et testcase med $n=50$, men har kaldene til `my_dgemv_v1/v2` og tidtagningen udkommenteret. Funktionerne `my_dgemv_v1.c` og `my_dgemv_v2.c` er tomme (`/* Insert your code here */`).
### Hardwaremodel: CPU cache-hierarki og Spatial Locality

En moderne CPU er mange gange hurtigere end hovedhukommelsen (RAM). Cachen henter hele linjer af 64 bytes ad gangen:

```text
  ┌────────────────────────────────────────────────────────┐
  │ CPU Kerne: Registre (0 cykler, ~1 KB)                 │
  ├────────────────────────────────────────────────────────┤
  │ L1 Cache: ~32-64 KB pr. kerne (~4-5 cykler, superhurtig)│
  ├────────────────────────────────────────────────────────┤
  │ L2 Cache: ~512 KB - 1 MB pr. kerne (~12-14 cykler)    │
  ├────────────────────────────────────────────────────────┤
  │ L3 Cache: ~16-64 MB delt mellem kerner (~30-50 cykler) │
  ├────────────────────────────────────────────────────────┤
  │ RAM: Hovedhukommelse (~150-200 cykler! "Memory Wall")  │
  └────────────────────────────────────────────────────────┘
```
**Row-major adgang (hurtig):** `for (i...) for (j...) A[i][j]` læser elementer lige ved siden af hinanden i cachen (stride 1 cache hit).
**Column-major adgang (langsom):** `for (j...) for (i...) A[i][j]` hopper $N$ doubles frem for hvert skridt -> konstant cache miss!

## Opgaver

Fra `module07.pdf`. Instruktioner: læs lecture notes kap. 7; indhent uafsluttede opgaver fra tidligere moduler. Download `module07.tar` fra DTU Learn.

- 7.1 Skriv et program, der måler tiden for funktionen `datasize1()` fra forelæsningen, med det mål at lave en ydeevnegraf, der viser cache-niveauernes indflydelse.
  - (a) Skriv en `main()`, der kalder `datasize1()` med forskelligt antal elementer og måler køretiden (gennemsnit over flere kald; brug `clock()`). Opgaven giver en skabelon `ex1.c` med `#define MAX_SIZE 16777216`, `extern int datasize1(int);` og et globalt array `double arr[MAX_SIZE]`, samt en Makefile med `CFLAGS=-Wall -std=c99 $(OPT)`.
  - (b) Beregn ydeevnen i FLOPS fra tiderne. Hvordan? (Hint: løkken har én multiplikation pr. element.)
  - (c) Plot ydeevnen i FLOPS som funktion af arrayets hukommelsesstørrelse (fra få KB til nogle MB). Kan du se trin? Svarer trinene til cache-størrelserne på din computer? (Hint: log-skala base 2 på x-aksen; kompilér med fuld optimering.)
  - (d) Hvorfor er FLOPS et bedre mål end de rå tider her?
  - Løsningsidé: (a) for hver størrelse `i` fra 2048 og fordoblende op til `MAX_SIZE`: fordobl antal gentagelser `reps` indtil den målte CPU-tid er over 1 sekund, sum antal hukommelsesadgange, og print KB og GFLOPS. Byg med `make clean && make OPT=-O3`, så alle filer kompileres med samme flag. (b) FLOPS = antal operationer / tid; her er antallet lig antal elementer $N$, så FLOPS $=N/T$. (c) Ja, man ser trin: ydeevnen falder, når arrayet overstiger et cacheniveau og data hentes fra et langsommere niveau. (d) FLOPS normaliserer tiden med arbejdet, så størrelser og maskiner kan sammenlignes, mens rå tider mest viser at større arrays tager længere tid.
- 7.2 Matrix-vektor-operationen $y \leftarrow \alpha A x + \beta y$ (dgemv) implementeres i to versioner, som sammenlignes.
  - (a) Lav "Module 07"-opgaverne på Autolab. Funktionerne `my_dgemv_v1()` og `my_dgemv_v2()` bruges i resten af opgaven.
  - (b) Mål CPU-tiden for `my_dgemv_v1()` for $m = n$ og $n \in \{100, 200, \dots, 1600\}$. Start med testcases med rækkevis lagring (funktionen `testcase()` i handoutet, som bruger MSPTOOLS).
  - (c) Mål CPU-tiden for `my_dgemv_v2()` for samme $n$. Er ydeevnen ens for rækkevis og kolonnevis lagring? Sammenlign med `my_dgemv_v1()`: er den ene hurtigere?
  - (d) Kompilér med `-O0`, `-O1`, `-O2` og `-O3` og gentag begge målinger. Hvor meget betyder optimeringen? Med GCC kan man også prøve `-funroll-loops`.
  - (e) (Valgfri) Mål ydeevnen i FLOPS for `my_dgemv_vN()`. Hint: tæl floating-point operationer i løkkelegemet; antallet afhænger af $m$ og $n$.
  - Løsningsidé: `v1` er den række-orienterede metode (indre løkke over $j$ med en sum), `v2` den kolonne-orienterede (indre løkke over $i$ opdaterer `y[i]`); begge starter med `y *= beta` og tjekker pointere og dimensioner. Måling: gentag kaldet `NREPEAT` gange og del tiden. Resultatet: alle versioner får gavn af optimering; for store $n$ er `v1` hurtigst med rækkevis input og `v2` hurtigst med kolonnevis input, fordi adgangen følger lagringsrækkefølgen (spatial lokalitet). (e) `v1` bruger $3mn+2m$ FLOPs og `v2` $3mn+m$, så med $m=n$ er ydeevnen $\frac{3n^2+2n}{T}\cdot10^{-9}$ hhv. $\frac{3n^2+n}{T}\cdot10^{-9}$ GFLOPS. Løsningen påpeger også, at `v2` med kolonnevis input når langt højere throughput end `v1` med rækkevis input, fordi den indre løkke i `v1` har en afhængighed gennem `sum`, som hindrer vektorisering. Det kan afhjælpes med flere uafhængige delsummer, eller med `-ffast-math`, som lader compileren omordne floating-point-operationer.

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
