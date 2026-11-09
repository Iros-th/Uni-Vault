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

> Kilde: `module06.pdf` (opgaveark, 8. oktober 2026), `slides06.pdf` (forelæsning 6, 26 slides), `sols_module06.pdf` (løsningseksempler), og MSP Tools-koden fra `module07.tar` (headers, eksempler, `data/`). Siden "Solution examples" uden fil kunne ikke åbnes (404), og gitlab-linket til MSP Tools kunne ikke nås udefra. Pensum: King kap. 13, 22, 23.6; lecture notes kap. 6 (Sparse Matrices).

## Emner

- Sparse matricer og lagringsformater (COO, CSC, CSR)
- Strenge i C (kap. 13), programargumenter
- Tekstfiler og binære filer (kap. 22), fejlhåndtering
- Endianness og 64-bit programmeringsmodeller
- Brug af biblioteket msptools

## Begreber

**Hvad er en sparse matrix (slides).** $A \in \mathbb{R}^{m\times n}$ er sparse hvis den har forholdsvis få ikke-nul-elementer. Der er ingen præcis definition: den er sparse hvis der er "nok nuller til at det kan betale sig at udnytte dem".

**Koordinatformat, COO (slides).** Gem shape $S=(m,n)$ og en liste af tripler (række, kolonne, værdi) for hvert ikke-nul-element. Eksempel fra slides, $A=\begin{bmatrix}1&0&0&4\\0&2&3&0\\5&0&6&7\end{bmatrix}$, giver (1-baseret) $T=((1,1,1.0),(3,1,5.0),(2,2,2.0),(2,3,3.0),(3,3,6.0),(1,4,4.0),(3,4,7.0))$. Flere poster med samme række og kolonne tolkes additivt (3,1,1.0) og (3,1,4.0) er det samme som (3,1,5.0). Listen kan være uordnet eller ordnet, og repræsentationen er minimal, når $|T|$ er lig med antal ikke-nul-elementer (det kan kræve "pruning"). Summen af to sparse matricer er blot sammenkædning af listerne.

I msptools (0-baserede indeks) er det `coo_t` med felterne `shape[2]`, `nnz`, `capacity`, `rowidx`, `colidx`, `val` (tre dynamiske arrays med fælles kapacitet).

**Komprimerede formater, CSC og CSR (slides).** Compressed sparse column (CSC/CCS) gemmer for hver kolonne en liste af (rækkeindeks, værdi). Compressed sparse row (CSR/CRS) gemmer for hver række en liste af (kolonneindeks, værdi). I msptools bruges tre arrays: `ptr`, `idx` og `val`, og typen `csp_t` har også `csx` (`CSC` eller `CSR`). For slides' matrix:

- CSC: `ptr` = 0 2 3 5 7 (længde $n+1$), `idx` (rækkeindeks) = 0 2 1 1 2 0 2, `val` = 1.0 5.0 2.0 3.0 6.0 4.0 7.0. Kolonne $j$ er elementerne fra `ptr[j]` til `ptr[j+1]-1`.
- CSR: `ptr` = 0 2 4 7 (længde $m+1$), `idx` (kolonneindeks) = 0 3 1 2 0 2 3, `val` = 1.0 4.0 2.0 3.0 5.0 6.0 7.0.

**Sammenligning (slides).** For $K \ll mn$ ikke-nul-elementer, indeksstørrelse $s_i$ og værdistørrelse $s_v$ bytes:

| Format | Lager | Adgang |
|---|---|---|
| Tæt | $mn\,s_v$ | $O(1)$ |
| COO | $(2s_i+s_v)K$ | $O(K)$ |
| CSC | $(s_i+s_v)K+(n+1)s_i$ | $O(\max_j \lvert C_j\rvert)$ |
| CSR | $(s_i+s_v)K+(m+1)s_i$ | $O(\max_i \lvert R_i\rvert)$ |

Eksempel (enhedskolonne af længde $10^9$): COO bruger $s_v+2s_i$ bytes, CSC $s_v+3s_i$, men CSR $s_v+(10^9+2)s_i$ (rækkepointerne gør det dyrt).

**Strenge (slides, kap. 13).** En streng er et nulafsluttet `char`-array: `char s[] = "Hello World!";` har `sizeof(s)` = 13 (arrayet) og `strlen(s)` = 12 (strengen). `s[11]` er `!` og `s[12]` er `'\0'`. Arrayet kan være meget længere end strengen. `<string.h>` giver `strlen`, `strcmp` m.fl. En tegnkonstant (`'A'`) er et `char`, ikke en streng, så `printf("%s", c)` er forkert. En streng-literal via pointer (`char *p = "..."`) må ikke ændres (`p[0] = 'P'` er undefined behavior), mens et array initialiseret med en literal må (`s[0] = 'S'`).

**Programargumenter (slides).** `int main(int argc, char const *argv[])`: `argc` er antal strenge inkl. programnavnet, `argv[i]` er strengene. `./main_demo arg1 arg2 arg3` giver `argc` = 4.

**Usikre funktioner (slides).** `gets(buf)` kan ikke begrænse indlæsningen og er fjernet i C11; brug `fgets(buf, 8, stdin)`. `strcpy(buffer2, str)` med en kilde på 22 bytes og et mål på 8 bytes skriver over nabohukommelsen (buffer overflow). `fscanf`/`scanf` med `%s` kan også løbe over, brug `%31s` til `char buf[32]` (der skal være plads til `\0`).

**Tekstfiler (slides).** `FILE *fp = fopen("data.txt", "r");` (`"r"`, `"w"`, `"a"`), `fclose(fp)`; `fp = NULL` bagefter er ikke nødvendigt, men god skik. Input: `fgetc`, `fgets`, `fscanf`. Output: `fputc`, `fputs`, `fprintf`. `fscanf` og `scanf` returnerer antal tildelte felter. De tre standardstrømme er `stdin`, `stdout` og `stderr` (`fprintf(stderr, "...")` til fejlbeskeder).

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

**Binære filer (slides).** Mode `"rb"`, `"wb"`, `"ab"` og `fread(ptr, size, nmemb, fp)` / `fwrite(...)`, som returnerer antal læste/skrevne elementer (tjek mod forventet antal). Eksempel: `fwrite(data, sizeof(*data), n, fp)`. Præcision: i en tekstfil skal man bruge `%.17g` for `double` og `%.9g` for `float` for at kunne genskabe tallet (C11 har makroerne `DBL_DECIMAL_DIG` m.fl. i `float.h`). I en binær fil fylder en `double` 8 bytes og en `float` 4.

**Fejlhåndtering (slides).** `errno.h` har heltallet `errno` (starter som 0), `string.h` har `strerror(errnum)`, og `stdio.h` har `perror(s)`. Når `fopen` returnerer `NULL`, kan man gemme `errno`, kalde `perror(...)` og udskrive `strerror(errnum)` til `stderr`.

**Endianness (slides).** For værdien `0x12345678` gemmer big-endian bytene 12 34 56 78 med stigende adresser (mest betydende byte først), mens little-endian gemmer 78 56 34 12. Test: `int i = 1; char *p = (char *) &i; if (*p == 1)` giver little-endian. GCC har makroerne `__BYTE_ORDER__`, `__ORDER_LITTLE_ENDIAN__` (1234) og `__ORDER_BIG_ENDIAN__` (4321); `cpp -dM /dev/null` lister de indbyggede makroer. Det betyder noget, når man deler binære filer mellem maskiner.

**64-bit programmeringsmodeller (slides).** Typebredder i bit: LP64 (Unix/Linux/macOS): `int` 32, `long` 64, `long long` 64, pointer 64, `size_t` 64. LLP64 (Windows x64): `long` er kun 32. ILP64 (nogle HPC-værktøjskæder): `int` er 64.

**MSP Tools og filformat.** `array2d_from_file` / `array2d_to_file` bruger et tekstformat med ét tal pr. position adskilt af mellemrum, en række pr. linje (`data/A1.txt` er en 4-gange-3 matrix, `data/v1.txt` vektoren `1.0 2.0 3.0`). `coo_from_file` læser Matrix Market-formatet (`data/MM1.txt` starter med `%%MatrixMarket matrix coordinate real general`, efterfulgt af kommentarlinjer der begynder med `%`).
### Matrixmodel: CSR (Compressed Sparse Row) komprimeret lagerformat

Store sparse matricer med mange nuller spilder hukommelse. CSR-formatet gemmer kun de $NNZ$ (non-zero) elementer i tre arrays:

```text
  Original matrix (4 x 4, NNZ = 4):
  ┌                 ┐
  │ 10   0   0   20 │     values   = [ 10,  20,  30,  40 ]  (størrelse NNZ)
  │  0   0   0    0 │     col_idx  = [  0,   3,   1,   2 ]  (søjle for hvert element)
  │  0  30   0    0 │     row_ptr  = [  0,   2,   2,   3,   4 ] (startindeks pr. række)
  │  0   0  40    0 │
  └                 ┘
```
`row_ptr[i+1] - row_ptr[i]` angiver præcis antallet af ikke-nul elementer i række $i$.

## Opgaver

Fra `module06.pdf`. Instruktioner: læs King kap. 13, 22 og 23.6; læs lecture notes kap. 6.

- 6.1 Tag quizzen om strenge. (Ikke åbnet.)
- 6.2 Lav exercise 5 (kap. 13, s. 309) i lærebogen.
  - Løsningsidé: to funktioner der laver en streng om til store bogstaver med `toupper` (`ctype.h`): (a) med indeks og `strlen` i en `for`-løkke, (b) med pointer: `for (; *s != '\0'; s++) *s = toupper(*s);`. Programmet tager strengen som kommandolinjeargument og allokerer `strlen+1` bytes. Min egen bemærkning: løsningen kopierer med `strncpy(str, argv[1], n)`, som ikke selv skriver `\0` når kilden er `n` tegn lang, så det er sikrere at kopiere `n+1` tegn eller bruge `strcpy`.
- 6.3 Lav exercise 12 (kap. 22, s. 583) i lærebogen.
  - Løsningsidé: `count_periods(filename)` åbner filen med `fopen`, løber den igennem med `while ((c = fgetc(fp)) != EOF)` og tæller tegn lig `'.'`. Gem returværdien i en `int` (ikke `char`) så `EOF` kan skelnes. Kommenteret i løsningen: kald `fgetc` kun én gang pr. løkkeiteration.
- 6.4 Lav "Module 06"-opgaverne på Autolab. (Løsninger lægges på Learn efter deadline.)
- 6.5 Download msptools (enten `msptools-master.zip`, eller `git clone https://gitlab.gbar.dtu.dk/mskan/msptools.git`). Kig headerfilerne i `include`-mappen igennem (datatyper og funktionsprototyper).
  - (a) Kør `make` i msptools-mappen. Man kan også køre `make test` for at bygge og køre nogle basale testprogrammer.
  - (b) Gå til `examples`-mappen og kør `array_example01` (`./array_example01`).
  - (c) Lav en kopi af `array_example01.c` (fx `array_example02.c`) og ændr koden, så kapaciteten af de dynamiske arrays udskrives sammen med indholdet.
  - (d) Lav et program, der med msptools læser et todimensionelt array fra en tekstfil (`array2d_from_file()`) og udskriver det (`array2d_print()`). Brug filen `data/A1.txt` som testcase.
  - (e) Lav et program, der læser en sparse matrix fra en tekstfil (`coo_from_file()`) og udskriver den (`coo_print()`). Brug filen `data/MM1.txt` som testcase.
  - Løsningsidé: (a) `git clone`, `cd msptools && make`, `make test`. (b) `make --directory examples` og `./examples/array_example01` (programmet læser tal indtil et ikke-tal tastes, og bruger `array_push_back`). (c) Indsæt `printf("Capacity: %zu\n", a->capacity);` før udskriften. (d) og (e): tag filnavnet fra `argv[1]`, kald `array2d_from_file` hhv. `coo_from_file`, tjek for `NULL`, udskriv, og frigiv med `array2d_dealloc` hhv. `coo_dealloc`.

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
