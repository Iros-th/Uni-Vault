---
publish: true
title: "Programming for Mathematical Software uge 5: Datastrukturer og dynamisk hukommelse"
course: Programming for Mathematical Software
type: week
week: 5
tags:
  - c-programming
  - ugenote
---

# Uge 5: Abstrakte datastrukturer og dynamisk hukommelse

> Kilde: `module05.pdf` (opgaveark, 1. oktober 2026), `slides05.pdf` (forelæsning 5, 29 slides), `sols_module05.pdf` (løsningseksempler) og modultabellen. Siden "Solution examples" uden fil kunne ikke åbnes (404). `msptools_demo.tar` og linket til MSP Tools (`https://gitlab.gbar.dtu.dk/mskan/msptools`): se afsnittet "MSP Tools" nedenfor. Pensum: King kap. 14, 16, 17.1 til 17.6; lecture notes kap. 5 (Data Structures).

## Emner

- Abstrakte datatyper (lister, stakke, køer, vektorer, matricer)
- Structs, typedef, pointere til structs
- Dynamisk hukommelse: `malloc`, `calloc`, `realloc`, `free`; stack mod heap
- Dynamiske arrays, enkelt- og dobbeltkædede lister
- To- og flerdimensionelle arrays
- Præprocessoren (kap. 14)

## Begreber

**Abstrakt datatype (slides).** En abstraktion på højt niveau: adfærden er defineret, ikke implementeringen. Eksempler: mængder og lister, vektorer, matricer og tensorer, polynomier, komplekse og rationale tal, punkter, cirkler, trekanter og polygoner. Brugeren kender kun funktionerne, så implementeringen kan skiftes uden at ændre resten af koden.

**Lister (slides).** En ordnet mængde af elementer hvor man kan læse, indsætte og slette på en vilkårlig position, dele listen i delelister og sammenkæde to lister. Indeks kan være 0- eller 1-baserede. Slides' eksempler med $L_1=(5,3,9)$, $L_2=(9,4,7,0)$, $L_3=(10,-2,5,8)$: sammenkædning giver $(5,3,9,9,4,7,0)$, `split(L3,1)` giver $(10)$ og $(-2,5,8)$, `access(L2,2)` giver 7, `insert(L1,2,8)` giver $(5,3,8,9)$ og `delete(L2,0)` giver $(4,7,0)$.

**Stakke og køer (slides).** Stak: en liste hvor man kun indsætter og sletter i den ene ende, først-ind-sidst-ud (FILO), med `push()` og `pop()`. Kø: indsættelse i den ene ende og sletning i den anden, først-ind-først-ud (FIFO), med `enqueue()` og `dequeue()`.

**Struct (slides).** Grupperer variabler: `struct complex { double real; double imag; };` Initialisering: `struct complex b = {1.0,0.0};` eller med navngivne felter `{.real=0.0, .imag=1.0}`. Punktum (`.`) er medlemsoperatoren. Structs kan være indlejrede (en trekant med tre `struct point`), indgå i arrays (`struct point point_array[10];`) og sendes til og returneres fra funktioner. Pointer til struct: `p->member` er det samme som `(*p).member`, mens `*p.x` betyder `*(p.x)`. Man må aldrig returnere en pointer til en automatisk lokal variabel.

**typedef (slides).** Alias for en eksisterende type: `typedef struct point { double x,y; } point_t;` så man kan skrive `point_t a = {.x=1.0,.y=-2.0};`. Slides' eksempel på en struct der bærer sin længde: `struct array { size_t length; double *x; };` med `sum(struct array a)`.

**Dynamisk hukommelse (slides).** Fra `stdlib.h`: `void *malloc(size_t size)`, `void *calloc(size_t nelements, size_t elementSize)` (nulstiller), `void *realloc(void *pointer, size_t size)` og `void free(void *pointer)`. Tjek altid for `NULL`:

```c
double *p = malloc(N*sizeof(double));
if (p == NULL) { /* håndtér fejl */ }
```

Ved `realloc` skal resultatet gemmes i en midlertidig pointer: hvis den er `NULL`, er `p` stadig gyldig, ellers sættes `p = ptmp`. Fejl der skal undgås: at frigive to gange, at frigive automatisk allokeret hukommelse, at bruge en pointer efter `free`, og at glemme `free` (hukommelseslæk). Slides' regel: hvert `malloc()` skal have et tilhørende `free()`.

**Stack mod heap (slides).** Stack: layout fastlagt ved kompilering, til lokale variabler, hurtig (sammenhængende og cache-venlig), automatisk håndtering, begrænset størrelse (typisk 2 til 10 MB pr. tråd). Heap: allokeres ved kørsel med `malloc`, til data der skal leve på tværs af funktioner, manuel håndtering, fleksibel størrelse, langsommere (pointerindirektion og fragmentering) og risiko for læk. Statiske og globale variabler ligger i data-segmentet.

**Dynamisk array (slides).** Struct med `len`, `capacity` og `val`:

```c
typedef struct array {
    size_t len;
    size_t capacity;
    double *val;
} array_t;
```

Allokering: `malloc` først structen, så `val`; fejler det andet kald, frigives structen igen. Ved deallokering skal `free(a->val)` komme før `free(a)`. Indsætning midt i kræver at de følgende elementer flyttes; indsætning i position 0 flytter alle, og at tilføje når `len == capacity` kræver, at kapaciteten øges (design: konstant tillæg eller faktor).

**Kædede lister (slides).** Enkeltkædet: `struct snode { double x; struct snode *next; };` plus en listestruct med `length` og `head`. Indsætning forrest er hurtig; andre steder skal man finde den foregående node (op til $n$ trin) og indsætte (uafhængigt af længden). Dobbeltkædet: `dnode` med både `next` og `prev`, og listen har `head` og `tail`.

**Array mod liste (slides).** Array: adgang uafhængig af listelængden $n$, værste tilfælde for indsætning/sletning proportional med $n$. Kædet liste: adgang værste tilfælde proportional med $n$, indsætning/sletning uafhængig af $n$ (når positionen er fundet).

**To- og flerdimensionelle arrays (slides).** To måder: (1) lineær indeksering i ét langt array med `shape`, en lagringsrækkefølge (`enum storage_order {RowMajor, ColMajor}`) og `val[i*5+j]`; (2) et array af arrays (`double **val`, `val[i][j]`). Et $k$-dimensionelt array har en `shape` $(m_1,\dots,m_k)$, en strides-tuple der bestemmer lagringsrækkefølgen (generaliserer row-/column-major), og indekseres med et multiindeks.

**Præprocessor.** `#define`, `#include`, betinget kompilering (`#ifdef`) og include guards i headerfiler (kap. 14).

## MSP Tools

Slides beskriver MSP Tools som et lille, uddannelsesorienteret C-bibliotek bygget på de datastrukturer, der blev gennemgået i forelæsningen. Makefile-eksempel fra slides:

```make
CC=gcc
CPPFLAGS=-Imsptools/include
CFLAGS=-Wall -std=c17
LDLIBS=-lm -lmsptools
LDFLAGS=-Lmsptools/lib

.PHONY: all clean
all: msptools myprogram
msptools:
	git clone https://gitlab.gbar.dtu.dk/mskan/msptools.git
	make --directory=msptools
clean:
	-$(RM) myprogram
```

Det eksterne gitlab-link (`https://gitlab.gbar.dtu.dk/mskan/msptools`) kunne ikke åbnes udefra (tidsudløb på forbindelsen, formentlig kun nåbart fra DTUs netværk eller VPN). Til gengæld indeholder kursets filer koden:

- `msptools_demo.tar` indeholder en lille projektmappe med `example.c`, en `Makefile` og `msptools.tar`. Makefilen har to valg: klon biblioteket med `git clone`, eller pak `msptools.tar` ud i mappen `msptools` og kør `make` dér. `example.c` allokerer et dynamisk array med `array_alloc(4)`, tilføjer elleve tal `0.1*k` med `array_push_back` (så kapaciteten må vokse), udskriver med `array_print` og frigiver med `array_dealloc`.
- Den samme MSP Tools-kode (version 1.0.2, 9. oktober 2025, BSD 2-Clause, Martin S. Andersen) ligger også i `module07.tar` og `exercises09.zip`. Biblioteket bygges til `lib/libmsptools.a` med `ar rcs` (`CFLAGS=-Wall -O3 -std=c99`).

Moduler i biblioteket (headerfiler i `include/`, samlet i `msptools.h`):

| Header | Type | Indhold |
|---|---|---|
| `array.h` | `array_t` (`len`, `capacity`, `val`) | `array_alloc`, `array_zeros`, `array_dealloc`, `array_resize`, `array_push_back`, `array_cmp`, `array_from_file`, `array_to_file`, `array_print` |
| `array2d.h` | `array2d_t` (`shape[2]`, `order`, `val`) | `array2d_alloc(shape, RowMajor/ColMajor)`, `array2d_from_file`, `array2d_to_file`, `array2d_reshape`, `array2d_print` |
| `carray2d.h` | `carray2d_t` (`shape[2]`, `double **val`) | samme slags funktioner for et array af arrays |
| `ndarray.h` | `ndarray_t` (`ndim`, `shape`, `strides`, `order`, `val`) og `ndindex_t` | `ndarray_alloc`, `ndarray_reshape`, `ndarray_iscontiguous`, `ndarray_entry`, `ndindex_incr` |
| `sllist.h` | `snode_t` og `sllist_t` (`length`, `head`) | `sllist_insert`, `sllist_delete`, `sllist_find`, `sllist_concat`, `sllist_split` |
| `sparse.h` | `coo_t` og `csp_t` (CSC/CSR) | `coo_from_file`, `csp_from_coo` (bruges i uge 6) |
| `misc.h` | `enum storage_order {RowMajor, ColMajor}`, `enum cstype {CSC, CSR}` | returkoderne `MSP_SUCCESS`, `MSP_FAILURE`, `MSP_MEM_ERR`, `MSP_FILE_ERR`, `MSP_ILLEGAL_INPUT`, `MSP_STRIDE_ERR`, `MSP_DIM_ERR` |

README'en viser, hvordan en matrix gemmes og læses som tekstfil (`array2d_to_file("A.txt", A)` og `array2d_from_file("A.txt")`), og at samme tekstformat kan læses og skrives med NumPy (`np.savetxt`/`np.loadtxt`), MATLAB (`save ... -ascii -double` / `load`) og Julia (`writedlm`/`readdlm`). Eksempelfilen `data/A1.txt` er en 4-gange-3 matrix, og `data/v1.txt` er vektoren $(1,2,3)$.
### Allokeringsmodel: 2D-matrix layout (Pointer-array vs. sammenhængende 1D)

To fundamentalt forskellige måder at allokere en $M \times N$ matrix dynamisk i C:

```text
  Metode A: Array af pointere (double** A):
  A ──> [ row 0 ] ───> [ A00 | A01 | A02 | ... ] (allokeret separat i heap)
        [ row 1 ] ───> [ A10 | A11 | A12 | ... ] (ikke garanteret sammenhængende!)
        [ row 2 ] ───> [ A20 | A21 | A22 | ... ]

  Metode B: Sammenhængende 1D buffer (double* A = malloc(M * N * sizeof(double))):
  A ──> [ Række 0 | Række 1 | Række 2 | ... ] (én stor ubrudt hukommelsesblok)
        Indeksering i row-major: A[i * N + j]
```
Metode B er dramatisk hurtigere i videnskabelige beregninger, fordi data ligger sammenhængende og udnytter CPU-cachen optimalt.

## Opgaver

Fra `module05.pdf`. Instruktioner: læs King kap. 14, 16 og 17.1 til 17.6; læs lecture notes kap. 5.

- 5.1 Tag quizzen om structs. (Ikke åbnet.)
- 5.2 Lav exercises 2, 3 og 10 (kap. 16, s. 408) i lærebogen.
  - Løsningsidé: ex. 2 bruger en anonym struct med `real` og `imaginary`, tildeling mellem structs (`c1 = c2`) og addition felt for felt. Ex. 3 laver `struct complex` med funktionerne `make_complex(real, imaginary)` (returnerer en struct med navngivne felter) og `add_complex(a, b)`. Ex. 10 laver `struct rectangle` af to `struct point` og funktionerne `area`, `center` (heltalsdivision), `move` (kopi af rektanglet, forskyd begge hjørner) og `inside` (returnerer `false` hvis punktet ligger udenfor på x- eller y-aksen, ellers `true`).
- 5.3 Lav exercise 3 (kap. 17, s. 453) i lærebogen.
  - Løsningsidé: `create_array(n, initial_value)` returnerer `NULL` for $n\le0$ eller hvis `malloc` fejler, ellers et array fyldt med `initial_value`. Kalderen tjekker for `NULL` og kalder `free`.
- 5.4 Lav "Module 05"-opgaverne på Autolab. (Løsninger lægges på Learn efter deadline.)
- Valgfri 5.5: Skim Wikipedia-artiklen "List of data structures" for at se almindelige datastrukturer.

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
