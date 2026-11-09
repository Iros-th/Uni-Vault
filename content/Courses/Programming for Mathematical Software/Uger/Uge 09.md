---
publish: true
title: "Programming for Mathematical Software uge 9: Parallelle beregninger og OpenMP"
course: Programming for Mathematical Software
type: week
week: 9
tags:
  - c-programming
  - ugenote
---

# Uge 9: Parallelle beregninger og OpenMP

> Kilde: `module09.pdf` på DTU Learn (opgaveark, 5. november 2026, Bernd Dammann), samt modulets beskrivelse med hjemmearbejde. Slides (`slides09.pdf`), `exercises09.zip`, `solutions09.pdf` og macOS-guiden er ikke læst. Ingen læsning fra lærebogen er angivet for dette modul.

## Emner

- Delt-hukommelses-parallelisering med OpenMP
- Antal tråde styret af `OMP_NUM_THREADS`
- Parallelisering af matrix-vektor-produktet (dgemv)
- Dataafhængigheder og dataræs
- Vægurstid (`omp_get_wtime()`) og speed-up

## Begreber

**OpenMP.** Man tilføjer compilerdirektiver (`#pragma omp ...`) til almindelig C-kode, og compileren genererer tråde. Det kræver et compilerflag, fx `-fopenmp` med GCC. Uden flaget ignoreres direktiverne, og programmet kører serielt.

```c
#include <stdio.h>
#include <omp.h>

int main(void) {
    #pragma omp parallel
    {
        printf("Hej fra traad %d af %d\n",
               omp_get_thread_num(), omp_get_num_threads());
    }
    return 0;
}
```

Antallet af tråde sættes uden at genkompilere, fx `export OMP_NUM_THREADS=4` før kørsel.

**Parallel for.** `#pragma omp parallel for` fordeler iterationerne i en løkke mellem trådene. Det er kun korrekt, hvis iterationerne er uafhængige. Rækkevis dgemv er et eksempel, hvor den ydre løkke over `i` kan parallelliseres, fordi hver `y[i]` beregnes uafhængigt:

```c
void omp_dgemv_rows(int m, int n, double alpha, const double *A,
                    const double *x, double beta, double *y) {
    #pragma omp parallel for
    for (int i = 0; i < m; i++) {
        double s = 0.0;
        for (int j = 0; j < n; j++) {
            s += A[i*n + j] * x[j];
        }
        y[i] = alpha * s + beta * y[i];
    }
}
```

Hvis man i stedet løber kolonnevis (ydre løkke over `j`), opdaterer alle iterationer de samme `y[i]`. Så skriver flere tråde til samme sted, hvilket er et dataræs. Det må løses, fx med en reduktion eller ved at parallellisere den indre løkke over `i` (her skriver hver iteration til sit eget `y[i]`).

**CPU-tid mod vægurstid.** CPU-tid (`clock()`) tæller tid summeret over alle tråde, så den vokser ved parallelisering. Vægurstid er den tid, der går på uret, og den skal bruges til at måle parallel speed-up.

**Speed-up.** $S = T_1 / T_p$, hvor $T_p$ er vægurstiden med $p$ tråde.

## Opgaver

Fra `module09.pdf`. Hjemmearbejde: indhent uafsluttede opgaver (især modul 7, da matrix-vektor-koden bruges igen); læs Wikipedia-artiklerne om CPU time og Wall-clock time; overvej at køre på DTU Unix-systemerne (genopfrisk modul 3). Macbrugere bør følge guiden til at installere en OpenMP-kompiler. Der er ingen Autolab denne uge; man skal hente og pakke `exercises09.zip` ud.

- I. Implementér OpenMP "Hello world v2" fra forelæsningen.
  - 1. Kompilér som sædvanlig. Virker det, eller giver compileren fejl eller advarsler?
  - 2. Kompilér igen med OpenMP slået til (se compilerens dokumentation for flaget).
  - 3. Kør eksemplet med forskelligt antal tråde via miljøvariablen `OMP_NUM_THREADS`.
- II. Lav en parallel version af dgemv fra modul 7: $y \leftarrow \alpha A x + \beta y$.
  - 1. Opdatér koden fra modul 7 med datainitialisering og resultatkontrol vha. `init_data()` og `check_results()` fra `datatools.c` (i zip-filen). `init_data()` forudsætter $\alpha = 1.0$ og $\beta = 0.0$ og skal kaldes før egne funktioner; der skal allokeres en referencevektor af samme længde som `y`. Test med ikke-kvadratiske matricer ($m \ne n$).
  - 2. Kombinér de to versioner fra modul 7 til én generisk `my_dgemv()` (samme prototype), der vælger rækkevis eller kolonnevis beregning ud fra matricens lagringsrækkefølge. Valider med hjælperutinerne.
  - 3. Kopiér `my_dgemv()` til `omp_dgemv()` med samme prototype.
    - 3.1 Rækkevis: to indlejrede løkker; parallellisér en af dem med `#pragma omp parallel for`. Hvilken løkke skal parallelliseres (ydre eller indre)?
    - 3.2 Kolonnevis: ydre løkke over $j$ og indre over $i$. Parallellisér med OpenMP. Hvad er anderledes end ved rækkevis versionen? Tænk på dataafhængigheder.
  - 4. Lav en version af tidsmålingen fra modul 7, der måler vægurstid. Gentag eksperimenterne for den parallelle version med $m = n$ og $n = 100, 300, \dots, 3000$ og forskelligt antal tråde, fra 1 til maksimalt antal kerner (på DTU Unix vises antallet med `cpucount` eller `lscpu`). Hvad kan du sige om speed-up for forskellige $n$? Brug `omp_get_wtime()`, styr tråde med `OMP_NUM_THREADS` og kompilér med `-O3`.

## Tjek dig selv

- [ ] Hvad sker der, hvis jeg glemmer `-fopenmp`?
- [ ] Hvordan ændrer jeg antallet af tråde uden at genkompilere?
- [ ] Hvorfor kan man parallellisere den ydre løkke i rækkevis dgemv?
- [ ] Hvorfor giver en naiv parallelisering af den kolonnevise ydre løkke forkerte resultater?
- [ ] Hvorfor måler man vægurstid og ikke CPU-tid for parallelle programmer?
- [ ] Hvordan definerer man speed-up, og hvorfor er det ofte lille for små $n$?
- [ ] Hvorfor tester man den serielle version mod en reference, før man parallelliserer?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
