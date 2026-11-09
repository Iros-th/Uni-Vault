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

> Kilde: `module09.pdf` (opgaveark, 5. november 2026, Bernd Dammann) med hjemmearbejde, `slides09.pdf` (37 slides, Bernd Dammann), `solutions09.pdf`, `macOS_OpenMP_Compiler.pdf` og `exercises09.zip` (skabeloner: `main.c`, `hello_world_v2.c`, `datatools.c/.h`, `my_dgemv.c/.h`, `my_dgemv_v1.c`, `my_dgemv_v2.c`, `Makefile.Linux`, `Makefile.macOS` og MSP Tools). Siderne "Solution examples" og `solutions09.zip` uden indhold kunne ikke åbnes (404). Ingen læsning fra lærebogen er angivet for dette modul.

## Emner

- Hvad parallelisme er, niveauer af parallelisme, tråde
- Udførelsesmodeller (multi-thread, multi-process, hybrid)
- Speed-up og Amdahls lov
- OpenMP: direktiver, runtime-bibliotek, miljøvariabler
- Parallelisering af matrix-vektor-produktet (dgemv)
- Vægurstid (`omp_get_wtime()`) mod CPU-tid

## Begreber

**Genopfriskning af modul 7 (slides).** Matrix-vektor-produktet viser forskellige køretider for række- og kolonneadgang. Forklaringen er cache-linjer: sekventiel adgang til en vektor giver ét cache miss pr. cache-linje og derefter hits. At gå rækkevis i et row-major array gør det samme, mens at gå kolonnevis i et row-major array for store arrays giver (næsten) et potentielt cache miss ved hver adgang. Med viden om lagringsrækkefølge (MSP Tools' `array2d_t` har et `order`-felt) kan man lave en generisk `my_dgemv()`, der vælger den hurtigste vej ved kørsel.

**Hvad er parallelisering (slides).** Noget er parallelt, hvis der er en vis uafhængighed i rækkefølgen af operationerne. "Noget" kan være en samling sætninger, en algoritme, en del af programmet eller selve problemet (granularitet). Niveauer: instruktionsniveau (ILP), chipniveau (multicore, multithreading), systemniveau (flere sockets), acceleratorer (GPU, FPGA) og klynger. Eksempel: en server med 2 sockets, 12 kerner og 24 hyper-threads har 24 logiske CPU'er (kurset bruger ikke hyperthreading).

**Tråde og modeller (slides).** En tråd er løst sagt en række instruktioner med egen programtæller og tilstand; en parallel kørsel udfører tråde parallelt, og OS planlægger dem på processorenheder. En multi-threaded proces deler kode, data og I/O-handles, men hver tråd har egne registre, stack og private data. Modeller: multi-threaded (én proces, flere tråde, implicit kommunikation via delt hukommelse, begrænset til én node), multi-process (flere processer, kommunikation over netværk eller delt hukommelse, kan køre på vilkårligt mange noder) og hybrid.

**Timing i parallelle programmer (slides).** `clock()` måler CPU-tid, og i parallelle programmer er den akkumuleret over alle tråde og stiger (parallel overhead). Man skal i stedet bruge vægurstid (wallclock), den tid brugeren venter. Alle parallelle modeller har en funktion til det; i OpenMP er det `omp_get_wtime()`, som returnerer sekunder som `double`.

**Speed-up og Amdahls lov (slides).** $S(p)=T(1)/T(p)$. Ideelt er det lineært, $S(p)=p$, men overhead (ekstra instruktioner, kommunikation, synkronisering) og sekventielle dele forhindrer det. Hvis $f$ er den parallelle andel, er $T(p)=T(1)(1-f)+T(1)f/p$, dvs. $S(p)=\dfrac{p}{(1-f)p+f}$. Med $f=0.5$ er $S<2$ selv med uendeligt mange kerner. Slides' quiz: et program der tager 60 s på én kerne, hvor lang tid tager det på fire kerner? Svaret afhænger af programmet (Amdahls lov). Generelt går vægtiden ned, mens CPU-tiden går op.

**OpenMP (slides).** En shared-memory API til C/C++ og Fortran; det er en "tilføjelse" til sproget, ikke et programmeringssprog, og kræver en compiler der understøtter det. Tre komponenter: direktiver i koden (fx parallel for-løkke), runtime-bibliotek (fx vægurstimer) og miljøvariabler (fx antal tråde). Hello world:

```c
#include <stdio.h>
#ifdef _OPENMP
#include <omp.h>
#endif

int main(int argc, char *argv[]) {
    int t_id = 0;
    #pragma omp parallel private(t_id)
    {
#ifdef _OPENMP
        t_id = omp_get_thread_num();
#endif
        printf("Hello world from %d!\n", t_id);
    }
    return 0;
}
```

Uden `-fopenmp` ignoreres direktiverne, og programmet kører serielt (`gcc -o hello_omp hello_omp.c` giver ét "Hello"). Med `gcc -fopenmp` og `OMP_NUM_THREADS=4` får man fire linjer i en rækkefølge, der varierer fra kørsel til kørsel. Standardantallet af tråde afhænger af OpenMP-implementeringen. `#ifdef _OPENMP` gør koden kompilerbar uden OpenMP.

**Parallel for (slides).** OpenMP implementerer kun parallelle for-løkker (work-sharing). Løkken skal stå lige efter `#pragma omp for` (uden `{ }`):

```c
#pragma omp parallel shared(a,b,c) private(i)
{
    #pragma omp for
    for (i = 0; i < N; i++)
        c[i] = a[i] + b[i];
}
```

Kombineret form med C99-løkke: `#pragma omp parallel for shared(a,b,c)` og `for (int i = 0; ...)`.

**Sammenfatning (slides).** Parallel kørsel kan fremskynde koden; vægtiden falder, men CPU-tiden stiger som regel. Forvent ikke magi: husk Amdahls lov, er problemet for lille, så brug ikke for mange tråde, og kontrollér altid resultaterne mod den serielle version.

**macOS (macOS_OpenMP_Compiler).** Standardcompileren Clang på macOS understøtter ikke OpenMP. Installér Homebrew og derefter `brew install libomp`. Kompilér med `-Xpreprocessor -fopenmp` og link med `-lomp`. Makefile-eksempel: `CC=clang`, `BREWDIR=$(shell brew --prefix)`, `CPPFLAGS=-I$(BREWDIR)/opt/libomp/include`, `CFLAGS=-Wall -Xpreprocessor -fopenmp`, `LDFLAGS=-L$(BREWDIR)/opt/libomp/lib`, `LDLIBS=-lomp`. Skabelonmakefilen `Makefile.macOS` i zip-filen gør det samme, når `OPENMP` er sat.

**Skabelonerne i `exercises09.zip`.** `datatools.c` har `init_data(m, n, a, B, c, ref)` (fylder $B_{ij}=i$, vektoren `c` med ettaller og referencen `ref[i]=n*i`, og afviser for små arrays eller forkerte dimensioner) og `check_results(comment, m, n, a, ref)` (sammenligner relativt med tolerance $100\epsilon$ og tæller fejl). `Makefile.Linux` bruger `OPT = -O3` og `OPENMP =` (tom; sæt fx `OPENMP=-fopenmp`), og `main.c` er en tom skabelon med `#ifdef _OPENMP` til timer. `my_dgemv_v1.c` og `my_dgemv_v2.c` er de to fulde versioner fra modul 7.
### Parallelitetsmodel: OpenMP Fork-Join og Amdahls lov

OpenMP anvender en Fork-Join model, hvor en master-tråd spalter ud i et team af parallelle tråde ved `#pragma omp parallel`:

```text
  Seriel master-tråd
  ─────────────────┐
                   │  Fork (#pragma omp parallel)
                   ├──────────────────────── Tråd 0
                   ├──────────────────────── Tråd 1
                   ├──────────────────────── Tråd 2
                   ├──────────────────────── Tråd 3
                   │  Join (Implicit barriere)
  ─────────────────┴──────────────────────── (Fortsætter serielt)
```

**Amdahls lov for maksimal speedup:**
Hvis en brøkdel $s$ af koden er strengt seriel, kan speedup med $p$ tråde aldrig overstige:
$$S(p) = \frac{1}{s + \frac{1-s}{p}} \xrightarrow{p \to \infty} \frac{1}{s}.$$
Er blot $5 \%$ af koden seriel ($s = 0{,}05$), kan speedup aldrig blive større end 20 uanset om du køber en supercomputer med 10.000 tråde.

## Opgaver

Fra `module09.pdf`. Hjemmearbejde: indhent uafsluttede opgaver (især modul 7, da matrix-vektor-koden bruges igen); læs Wikipedia-artiklerne om CPU time og Wall-clock time; overvej at køre på DTU Unix-systemerne (genopfrisk modul 3). Macbrugere bør følge guiden til at installere en OpenMP-kompiler. Der er ingen Autolab denne uge; man skal hente og pakke `exercises09.zip` ud.

- I. Implementér OpenMP "Hello world v2" fra forelæsningen.
  - 1. Kompilér som sædvanlig. Virker det, eller giver compileren fejl eller advarsler?
  - 2. Kompilér igen med OpenMP slået til (se compilerens dokumentation for flaget).
  - 3. Kør eksemplet med forskelligt antal tråde via miljøvariablen `OMP_NUM_THREADS`.
  - Løsningsidé: i skabelonen `hello_world_v2.c` er det kun at tilføje `#pragma omp parallel private(t_id)` og `t_id = omp_get_thread_num();` som i slides. Uden `-fopenmp` ignoreres pragma og man får én linje; med flaget får man én linje pr. tråd.
- II. Lav en parallel version af dgemv fra modul 7: $y \leftarrow \alpha A x + \beta y$.
  - 1. Opdatér koden fra modul 7 med datainitialisering og resultatkontrol vha. `init_data()` og `check_results()` fra `datatools.c` (i zip-filen). `init_data()` forudsætter $\alpha = 1.0$ og $\beta = 0.0$ og skal kaldes før egne funktioner; der skal allokeres en referencevektor af samme længde som `y`. Test med ikke-kvadratiske matricer ($m \ne n$).
  - 2. Kombinér de to versioner fra modul 7 til én generisk `my_dgemv()` (samme prototype), der vælger rækkevis eller kolonnevis beregning ud fra matricens lagringsrækkefølge. Valider med hjælperutinerne.
  - 3. Kopiér `my_dgemv()` til `omp_dgemv()` med samme prototype.
    - 3.1 Rækkevis: to indlejrede løkker; parallellisér en af dem med `#pragma omp parallel for`. Hvilken løkke skal parallelliseres (ydre eller indre)?
    - 3.2 Kolonnevis: ydre løkke over $j$ og indre over $i$. Parallellisér med OpenMP. Hvad er anderledes end ved rækkevis versionen? Tænk på dataafhængigheder.
  - 4. Lav en version af tidsmålingen fra modul 7, der måler vægurstid. Gentag eksperimenterne for den parallelle version med $m = n$ og $n = 100, 300, \dots, 3000$ og forskelligt antal tråde, fra 1 til maksimalt antal kerner (på DTU Unix vises antallet med `cpucount` eller `lscpu`). Hvad kan du sige om speed-up for forskellige $n$? Brug `omp_get_wtime()`, styr tråde med `OMP_NUM_THREADS` og kompilér med `-O3`.
  - Løsningsidé (`solutions09.pdf`): I. Vægtid: `t1 = omp_get_wtime(); ...; t2 = omp_get_wtime();` giver sekunder (gang med 1000 for ms); man kan definere makroerne `mytimer`/`delta_t` med `#ifdef _OPENMP` for at vælge mellem `omp_get_wtime` og `clock`. II. Allokér `A`, `x`, `y` og referencevektoren `r`, kald `init_data(m,n,y,A,x,r)` og til sidst `check_results("row", m, n, y, r)`; stop hvis der er fejl. III. Generisk `my_dgemv`: ved RowMajor en række ad gangen med en sum (indre løkke over $j$, stride 1); ved ColMajor først `y *= beta`, derefter for hver kolonne $j$ en indre løkke over $i$ (stride 1). IV. `omp_dgemv`: ved RowMajor sættes `#pragma omp parallel for` på den ydre løkke over $i$ (hver tråd får egne `y[i]`). Ved ColMajor skal den ydre $j$-løkke være sekventiel (alle iterationer opdaterer samme `y[i]`), så man har en `#pragma omp parallel` omkring $j$-løkken og `#pragma omp for` på den indre løkke over $i$. Resultater (16-kernet Xeon E5-2665, GCC 9.2.0): køretiden falder med flere tråde, men effekten aftager; for rækkevis version er speed-up godt for 2, 4 og 8 tråde (undtagen for de mindste matricer), nogle steder endda over den teoretiske værdi pga. cache-effekter, og faldet ved 8 tråde for store matricer skyldes ikke-optimal hukommelsesadgang. Kolonneversionen har lavere køretid med flere kerner, men dårligere speed-up end rækkeversionen, fordi arbejdet i den parallelle region er fordelt anderledes og hukommelsen tilgås anderledes; løsningen siger, at det kan "fixes", men at det ligger uden for kurset.

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
