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

> Kilde: `module08.pdf` (opgaveark, 29. oktober 2026), `slides08.pdf` (forelæsning 8, 26 slides), `sols_module08.pdf` og `module08.tar` (`example_blas.c`, `example_cblas.c`, `README.md` og fire makefiler til Gbar, MinGW, Ubuntu og macOS). Pensum: lecture notes kap. 8 (External Libraries for Numerical Linear Algebra). Autolab-opgaverne er ikke vist i løsningsarket.

## Emner

- BLAS (Basic Linear Algebra Subprograms) niveau 1, 2 og 3, og LAPACK
- Navngivning, lagring (stride, leading dimension, pakket og bånd)
- At kalde Fortran-agtige biblioteksrutiner fra C, CBLAS
- Linking mod BLAS på forskellige systemer
- Ydeevne og flaskehalse

## Begreber

**Aflevering (slides).** Slides minder om afleveringsopgaven: den ligger på DTU Learn og skal afleveres 18. november 2026 (rapport på DTU Learn, kode på Autolab). Opgaven er et selvstændigt program, der løser $Ax=b$ med $A\in\mathbb{R}^{n\times n}$ via LAPACK-rutinen `DGESV`.

**BLAS (slides).** Byggeklodser til lineær algebra, de facto standard, startede som FORTRAN-bibliotek i slutningen af 1970'erne. Det er lineær-algebra-motoren i MATLAB, Python (NumPy, SciPy), R og Mathematica, og giver høj ydelse, når det er optimeret til et bestemt system. Mange leverandører: Intel MKL, AMD AOCL, Accelerate, OpenBLAS, ATLAS.

- Niveau 1 (1970'erne): vektoroperationer som $x^Ty$, $\|x\|_2$, $x\leftarrow\alpha x$, $y\leftarrow\alpha x+y$; $O(n)$ operationer.
- Niveau 2 (1980'erne): matrix-vektor, fx $y\leftarrow\alpha Ax+\beta y$, $A\leftarrow\alpha xx^T+A$, $x\leftarrow T^{-1}x$ ($T$ triangulær); $O(mn)$ operationer.
- Niveau 3 (1980'erne): matrix-matrix, fx $C\leftarrow\alpha AB+\beta C$, $X\leftarrow T^{-1}X$; $O(n^3)$ operationer.

**Navneskema (slides).** `XYYZZ`: første bogstav er datatypen (S, D, C, Z). På niveau 1 angiver `YYZZ` operationen; på niveau 2 og 3 angiver `YY` matrixtypen og `ZZ` operationen. Eksempler: `dscal` (double scale, $x\leftarrow\alpha x$), `saxpy` (single $y\leftarrow\alpha x+y$), `dgemv` (double general matrix-vector, $y\leftarrow\alpha Ax+\beta y$), `dtrsv` (double triangular solve vector, $x\leftarrow T^{-1}x$), `ssymm` (single symmetric matrix-matrix, $C\leftarrow\alpha SB+\beta C$). Matrixtyper: GE (generel), SY (symmetrisk), HE (Hermitisk), TR (triangulær), og de pakkede TP, SP, HP.

**Ydeevne (slides).** Plots (OpenBLAS, Accelerate og MKL på en Intel Core i7 og på Apple M2 Pro og M4) viser GFLOPS som funktion af $n$ for DAXPY (niveau 1), DGEMV (niveau 2) og DGEMM (niveau 3). Niveau 3 når klart højest, fordi matrix-matrix-produkter har så mange operationer pr. dataelement, at cachen udnyttes. Mulige flaskehalse (slides): CPU-bundet, cache-bundet, hukommelses-bundet, I/O-bundet.

**BLAS' lagringsmodel (slides).** Vektorer og matricer er sammenhængende arrays, matricer er lagret kolonnevis, stride er afstanden mellem på hinanden følgende elementer, og leading dimension (LDA) er afstanden mellem kolonner. For en $4\times5$ matrix $A$ gælder: kolonne $i$ er en vektor af længde 4 med stride 1, række $i$ er en vektor af længde 5 med stride 4, diagonalen $(A_{11},A_{22},A_{33},A_{44})$ har stride 5, og en delmatrix på 2 rækker og 3 kolonner har stadig LDA 4. Andre lagringsformater: full (`LDA` er afstanden mellem kolonner), pakket (kun den triangulære del, kolonne for kolonne) og bånd (diagonalerne gemmes som rækker, fx en $5\times6$ matrix med $l=2$ subdiagonaler og $u=1$ superdiagonal). Bemærk modsætningen til C: C bruger row-major, BLAS forventer column-major.

**Kald fra C (slides, løsningsark, `module08.tar`).** BLAS er skrevet i Fortran, så navnene får en understregning (`dscal_`) og alle argumenter sendes som pointere. Man erklærer prototypen selv:

```c
void dscal_(const int *n, const double *a, double *x, const int *incx);

int main(void) {
    int incx = 1, n = 5;
    double a = 3.0, x[5] = {1.0, 2.0, 3.0, 4.0, 5.0};
    dscal_(&n, &a, x, &incx);   /* x <- 3.0 * x */
    return 0;
}
```

`dscal` skalerer $n$ elementer: `x[0]`, `x[incx]`, ..., `x[(n-1)*incx]`. Med `incx` = 1 de første $n$ elementer, med 2 hvert andet. Alle argumenter undtagen `x` er `const`, så rutinen kun må ændre det `x` peger på.

**CBLAS (slides, løsningsark).** C-grænsefladen har headeren `cblas.h` med en prototype for hver rutine, og skalarer sendes som værdier: `cblas_dscal(n, a, x, incx)`. På macOS inkluderes `Accelerate/Accelerate.h`:

```c
#if defined(__MACH__) && defined(__APPLE__)
#include <Accelerate/Accelerate.h>
#else
#include <cblas.h>
#endif
```

**Linking (slides, `module08.tar`).** Makefilerne i tar-filen: Ubuntu/WSL `LDLIBS=-lopenblas`; Windows (MinGW) `-lopenblas`; macOS `-lblas` (BLAS) og `-lcblas` (CBLAS) i slides; DTU Unix (Gbar) `LDFLAGS=-L/usr/lib64/atlas` med `-lf77blas -latlas` (BLAS) og `-lcblas -latlas` (CBLAS) i tar-filen, mens slides skriver `-lsatlas`. Alternativ på Gbar: `module load openblas` og derefter `CPPFLAGS=-I$(MODULE_OPENBLAS_BASE_DIR)/include`, `LDFLAGS=-L$(MODULE_OPENBLAS_BASE_DIR)/lib`, `LDLIBS=-l$(MODULE_OPENBLAS_LIB)`. README'en siger, at man omdøber den rigtige makefile til `Makefile` eller bruger `make -f Makefile_Ubuntu`. Gbar-makefilen nævner, at man skal starte et nyt interaktivt shell med `qrsh`.

**LAPACK (slides).** Bibliotek fra 1990'erne til numerisk lineær algebra: matrixfaktoriseringer (LU, Cholesky, QR, SVD, Schur), lineære ligningssystemer, mindste kvadraters problemer, egenværdi- og singulærværdiproblemer. Det bruger BLAS som byggeklodser. Til afleveringen bruges `DGESV`.

**Windows.** Opgavearket skriver, at BLAS og LAPACK findes på mange Unix/Linux-systemer inkl. DTU Unix og macOS, men ikke på Windows. WSL-brugere kan installere OpenBLAS med `sudo apt-get install libopenblas-dev`.
### Ydelsesmodel: Roofline-modellen og aritmetisk intensitet

Roofline-modellen sætter et teoretisk loft over programmets beregningshastighed ud fra den aritmetiske intensitet $I$ (FLOPs pr. overført byte):

```text
  GFLOP/s ^
          │                             Topsats (Peak Compute, f.eks. 500 GFLOP/s)
          │                      ┌────────────────────────────────────────────────
          │                     /
          │                    /  <- Compute-bound regime (BLAS 3, dgemm)
          │                   /
          │                  /
          │                 /  <- Memory bandwidth-bound regime (BLAS 1/2: daxpy, dgemv)
          │                /
          └───────────────┴─────────────────────────────────────────────>
                         I_kryds            Aritmetisk intensitet (FLOPs / Byte)
```
- **BLAS 1 (`daxpy`):** $2n$ FLOPs for $3n$ doubles overført $\implies I \approx 2/24 = 0{,}083$ FLOPs/byte (hårdt begrænset af RAM-båndbredde).
- **BLAS 3 (`dgemm`):** $2n^3$ FLOPs for $3n^2$ doubles $\implies I = O(n)$ (kan udnytte 100 % af CPU'ens beregningskraft ved matrixblokkering/tiling).

## Opgaver

Fra `module08.pdf`. Instruktioner: læs lecture notes kap. 8.

- 8.1 Download `module08.tar` fra DTU Learn. Den indeholder to eksempler, `example_blas.c` og `example_cblas.c`, der skalerer et array af `double` med BLAS-rutinen `dscal`, samt en Makefile. Det første eksempel inkluderer prototypen for `dscal_` eksplicit; det andet bruger CBLAS og `cblas_dscal`. Læs og forstå eksemplerne (opgavearket forklarer argumenterne `n`, `a`, `x`, `incx` og brugen af `const`).
  - Løsningsidé: løsningsarket er en forklaring af eksemplerne (ingen egen kode). Eksemplerne skalerer `{1,2,3,4,5}` med 3.0 og udskriver `x[i]` med `%.4g`; byg med `make -f Makefile_Ubuntu` (eller den makefile der passer til dit system).
- 8.2 Lav "Module 08"-opgaverne på Autolab. Slides: niveau 1 (`dscal`, `daxpy`) og niveau 2 (`dtrsv`); husk, at BLAS antager kolonnevis lagring. (Løsninger lægges på Learn efter deadline.)

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
