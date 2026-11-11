---
publish: true
title: "Programming for Mathematical Software uge 1: Introduktion til C, input og output"
course: Programming for Mathematical Software
type: week
week: 1
tags:
  - c-programming
  - ugenote
---

# Uge 1: Introduktion til C, input og output

> Kilde: `module01.pdf` (opgaveark, 3. september 2026), `slides01.pdf` (forelæsning 1, Martin S. Andersen, 25 slides), `sols_module01.pdf` (løsningseksempler), kursets tre meddelelser (velkomst 10. august, Autolab-opsætning 31. august, Autolab-vurdering 15. september) og modultabellen på kursusforsiden. Pensum: King kap. 1, 2, 3 (skim); lecture notes kap. 1 og Appendix A.1 til A.3.

## Emner

- Kursets format og mål
- Hvorfor C, og hvad matematisk software handler om
- Skrive, kompilere og køre et C-program (preprocessor, compiler, linker, `make`)
- Grundlæggende variabler og typer
- Formateret output med `printf` og input med `scanf`
- Opsætning af compiler og teksteditor
- Autolab (første opgave "Hello Autolab")
- Ansvarlig brug af AI

## Begreber

**Kursets format (slides).** 5 ECTS, forelæsninger og øvelser, ugentlige læseopgaver. Autolab-øvelser tæller 5 %, én afleveringsopgave 10 %, og den skriftlige eksamen 85 % (8. december 2026). Undervisere er Martin S. Andersen og Bernd Dammann. Spørgsmål stilles helst på diskussionsforummet på DTU Learn (gerne anonymt), mens e-mail er til personlige ting.

**Meddelelser på Learn.** Velkomstbeskeden (10. august) siger, at kurset er learn-by-doing: hvert modul starter med en forelæsning (ca. 13:00 til 14:45 i bygning 303A, lokale 041) og derefter øvelser (ca. 15:00 til 17:00, også i teamområderne 302-1SV og 302-1SØ). Der er ingen computere i lokalerne, så man skal medbringe sin laptop. Man skal forberede sig ved at læse det angivne stof, og ugens første lektie var kapitel 1 til 3 i King (s. 1 til 48). Autolab (31. august): man genererer et kodeord på `autolab.compute.dtu.dk` med sin `@student.dtu.dk`-mail, og afleveringer får automatisk feedback om beståede testcases. Meddelelsen fra 15. september understreger, at Autolab-opgaverne indgår i bedømmelsen, bliver lagt ud ugentligt, har deadline cirka tre uger efter, og at for sene afleveringer ikke accepteres.

**Hvad er matematisk software (slides).** Emnerne er talrepræsentation, endelig præcision, betingning af et problem, stabilitet af en algoritme, datastrukturer (polynomier, vektorer, matricer), tids- og pladskompleksitet, hukommelseshierarki, parallelle beregninger og rekursion. Tre motiverende eksempler fra forelæsningen:

- Matrixkæder: $y = UU^T x$ med $U \in \mathbb{R}^{n \times k}$ kan regnes som $(UU^T)x$ eller $U(U^T x)$. Begge er matematisk ens, men den anden er mere end 250 gange hurtigere i MATLAB ($n = 8000$, $k = 100$: 0,449 s mod 0,0017 s), og resultaterne er ikke bitvis ens.
- Endelig præcision: $10^{12} - (10^6-7)(10^6+7)$ burde give 49 og gør det i Python, mens $3 \cdot 0.1 - 0.3$ giver ca. $5.55 \cdot 10^{-17}$ i stedet for 0.
- Sparse matricer: en enhedsvektor af længde $4 \cdot 10^9$ fylder kun 32 bytes som sparse, men dens transponerede som tæt vektor ville kræve 29,8 GB.

**Hvorfor C i 2026 (slides).** C er fundamentet under operativsystemer, compilere og databaser, og Python, MATLAB, R og Julia bruger C/C++ under motorhjelmen. Man lærer hukommelseslayout, pegere, funktionskald og compilerprocessen. Numeriske biblioteker som BLAS, LAPACK, FFTW, SuiteSparse, PETSc og GSL er skrevet i C eller C-kompatible sprog. Ydelse er ofte begrænset af hukommelsesbåndbredde, så man skal forstå lavniveaudetaljer. Forelæsningens eksempel: matrix-vektor-produkt tog 5,53 ms i C, 296 ms i ren Python, 1,41 ms i Python med NumPy og 1,32 ms i C med BLAS. Slides påpeger også, at AI kan generere kode, men ikke pålideligt garantere korrekthed, effektivitet, numerisk stabilitet eller hukommelsessikkerhed.

**Fra kildefil til program (slides).** Kæden er: kildefil (`hello.c`), preprocessor (håndterer `#include`), compiler/assembler (giver `hello.o`), linker (kobler på `libc` m.fl.) og til sidst den kørbare fil `hello`. Kald fra forelæsningen:

```
$ gcc -Wall -std=c11 hello.c -o hello
$ ./hello
```

`-Wall` slår de fleste advarsler til, og dem bør man læse. Standarderne C89, C99, C11 og C18 er nævnt; GCC 8.1 og Clang 7.0 understøtter C18. Visual Studio (MSVC) understøttes ikke i kurset. På Windows anbefales GCC via WSL, på macOS Clang (`xcode-select --install`) eller GCC via Homebrew, på Linux `build-essential` og `gdb`.

**Make (slides, løsningsark).** Med en fil kaldet `Makefile` (uden filendelse) kan man skrive `make hello` og få bygget `hello` fra `hello.c`. Variablerne `CC`, `CFLAGS` og `LDLIBS` styrer compiler, compilerflag og biblioteker. Eksempel: `CFLAGS= -std=c11 -Wall`. Til programmer der bruger `math.h` skal man tilføje `LDLIBS= -lm`, som linker mod matematikbiblioteket `libm`. Man kan også give flag på kommandolinjen: `make "CFLAGS=-std=c11 -Wall" hello`.

**Programmets struktur.** Et C-program starter i `main`. Headerfiler som `<stdio.h>` giver prototyper til biblioteksfunktioner.

```c
#include <stdio.h>

int main(void) {
    printf("Hello 02635!\n");
    return 0;
}
```

**printf og formatspecifikationer.** Første argument er en formatstreng. `%d` er `int`, `%f` er `double` ved udskrivning, `%c` er et tegn, `%s` er en streng. Man kan angive antal decimaler, fx `%.3f`, bredde (`%6d`), venstrejustering (`%-6.2g`) og eksponentform (`%12.5e`).

**scanf.** Læser fra standard input og skriver ind i variabler, så man skal give adressen med `&`. Til `double` bruger `scanf` formatet `%lf` (modsat `printf`, hvor `%f` bruges). Returværdien er antal succesfuldt læste felter, og den bør tjekkes.

```c
#include <stdio.h>

int main(void) {
    int n;
    double x;
    printf("Indtast et heltal og et kommatal: ");
    if (scanf("%d %lf", &n, &x) != 2) {
        return 1;
    }
    printf("n = %d, x = %.3f\n", n, x);
    return 0;
}
```

**M_PI og `#ifndef` (løsningsark).** Konstanten `M_PI` er ikke en del af C-standarden, men findes i `math.h` på de fleste systemer. Løsningen beskytter sig med `#ifndef M_PI`, `#define M_PI (3.14159...)` og `#endif`.

**Typer og operatorer (kap. 2 og 3).** `int`, `double`, `char`. Heltalsdivision afrunder mod nul: `7 / 2` er `3`, mens `7.0 / 2` er `3.5`. Operatoren `%` giver rest ved heltalsdivision.

**Ansvarlig brug af AI (slides).** Godt: forklare syntaks, compilerfejl og advarsler, sammenligne alternative implementeringer, lave små eksempler man kan studere, hjælpe med at debugge og med stilgennemgang, stille hvorfor- og hvordan-spørgsmål. Dårligt: aflevere AI-kode man ikke forstår, kopiere uden at teste, bruge AI til at omgå øvelserne, stole på ydelses- eller talresultater uden at validere, og bede AI løse en opgave før man selv har prøvet. Slides understreger, at man selv er ansvarlig for al kode, alle resultater og forklaringer man afleverer.

**Ressourcer (slides).** Lærebog: K. N. King, "C Programming: A Modern Approach", 2. udgave (2008). Supplement: Horton, "Beginning C" (5. udgave, 2013) og "Beginning C++" (2014), Big-O Cheat Sheet og "Learn to Solve It". Redaktører: VS Code eller Zed. Værktøjer: GNU Make og GNU debugger.
### Systemmodel: C-kompileringskæden (Build pipeline) (supplerende illustration, ikke fra slides)

Kompilering af C-kode er en fire-trins proces fra menneskelæselig tekst til eksekverbar maskinkode:

```text
  kildekode.c  ──(Preprocessor: gcc -E)──>  kildekode.i (udvider #include og #define)
                     │
                     └──(Compiler: gcc -S)──>  kildekode.s (assemblerkode)
                            │
                            └──(Assembler: gcc -c)──>  kildekode.o (binær objektkode)
                                   │
  biblioteker.a / .so ─────────────┴──(Linker: gcc -o)──>  program.out (kørbar binær)
```
Linkeren forbinder eksterne funktionskald (f.eks. `sin()` i `libm` med flaget `-lm`) med de konkrete hukommelsesadresser i det færdige program.

## Opgaver

Fra `module01.pdf`. Inden opgaverne: sørg for at have en C-compiler og en teksteditor installeret (vejledning til Windows, macOS og Linux står i lecture notes). Instruktioner: udfyld pre-course survey, skim King kap. 1, 2, 3, skim lecture notes A.1 til A.3.

- 1.1 Skriv, kompilér og kør "Hello World!" (s. 33 i King (2008)) på din egen laptop.
  - Løsningsidé: `hello.c` med `#include <stdio.h>`, `main` og `printf("Hello World!\n")`; byg med `make hello` og kør `./hello`.
- 1.2 Lav "Hello Autolab"-opgaven på Autolab.
  - Løsningsarket skriver, at løsninger til Autolab-opgaver lægges på DTU Learn efter deadline.
- 1.3 Lav programming projects 2 og 3 (kap. 2, s. 34) i lærebogen.
  - Løsningsidé (løsningsarket viser `king_ch2pp2.c`, kugles volumen): læs radius med `scanf("%lf", &r)` og tjek at returværdien er 1, beregn $\frac{4}{3}\pi r^3$ og print med `%.3f`. Brug `M_PI` med `#ifndef`-sikring og `LDLIBS= -lm` i `Makefile`. Skriv brøken med decimalpunktum (`4.0f/3.0f`), ellers bliver det heltalsdivision.
- 1.4 Tag quizzen om basal C. (Svarnøglen findes under "Answer Key" i quizzen.)
- 1.5 Lav exercises 1 og 2 (kap. 3, s. 49) i lærebogen.
  - Løsningsidé (exercise 1, `king_ch3ex1.c`): fire `printf`-kald med formaterne `"%6d,%4d"` (86 og 1040), `"%12.5e"` (30.253), `"%.4f"` (83.162) og `"%-6.2g"` (.0000009979). Kør programmet og se, hvordan bredde, justering og eksponentform opfører sig.
- Valgfri: Se Robert Fano forklare Scientific Computing.

## Tjek dig selv

- [ ] Hvilke trin gennemgår en kildefil, fra preprocessor til kørbar fil?
- [ ] Hvad gør `-Wall`, og hvorfor skal `-lm` med, når `math.h` bruges?
- [ ] Hvorfor bruger `scanf` formatet `%lf` til `double`, og hvorfor skal returværdien tjekkes?
- [ ] Hvad er forskellen på `7 / 2` og `7.0 / 2` i C?
- [ ] Hvorfor er $(UU^T)x$ langsommere end $U(U^Tx)$, selvom de er matematisk ens?
- [ ] Hvilke anvendelser af AI beskriver slides som gode og dårlige?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
