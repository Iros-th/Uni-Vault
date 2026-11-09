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

> Kilde: `module01.pdf` på DTU Learn (opgaveark, 3. september 2026) og modultabellen på kursusforsiden. Slides (`slides01.pdf`) er ikke læst. Pensum: King kap. 1, 2, 3 (skim); lecture notes kap. 1 og Appendix A.1 til A.3.

## Emner

- Skrive, kompilere og køre et C-program
- Grundlæggende variabler og typer
- Formateret output med `printf` og input med `scanf`
- Opsætning af compiler og teksteditor
- Autolab (første opgave "Hello Autolab")

## Begreber

**Kompilering.** C-kode i en `.c`-fil oversættes af en compiler (fx `gcc` eller `clang`) til en kørbar fil. Typisk kald: `gcc -Wall -std=c99 hello.c -o hello`. `-Wall` slår de fleste advarsler til, og dem bør man læse.

**Programmets struktur.** Et C-program starter i `main`. Headerfiler som `<stdio.h>` giver prototyper til biblioteksfunktioner.

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

**printf og formatspecifikationer.** Første argument er en formatstreng. `%d` er `int`, `%f` er `double` ved udskrivning, `%c` er et tegn, `%s` er en streng. Man kan angive antal decimaler, fx `%.3f`.

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

**Typer og operatorer (kap. 2 og 3).** `int`, `double`, `char`. Heltalsdivision afrunder mod nul: `7 / 2` er `3`, mens `7.0 / 2` er `3.5`. Operatoren `%` giver rest ved heltalsdivision.

## Opgaver

Fra `module01.pdf`. Inden opgaverne: sørg for at have en C-compiler og en teksteditor installeret (vejledning til Windows, macOS og Linux står i lecture notes). Instruktioner: udfyld pre-course survey, skim King kap. 1, 2, 3, skim lecture notes A.1 til A.3.

- 1.1 Skriv, kompilér og kør "Hello World!" (s. 33 i King (2008)) på din egen laptop.
- 1.2 Lav "Hello Autolab"-opgaven på Autolab.
- 1.3 Lav programming projects 2 og 3 (kap. 2, s. 34) i lærebogen.
- 1.4 Tag quizzen om basal C.
- 1.5 Lav exercises 1 og 2 (kap. 3, s. 49) i lærebogen.
- Valgfri: Se Robert Fano forklare Scientific Computing.

## Tjek dig selv

- [ ] Kan jeg kompilere og køre et C-program fra terminalen med `-Wall`?
- [ ] Hvad er forskellen på `%f` i `printf` og `%lf` i `scanf`?
- [ ] Hvorfor skal man skrive `&` foran variablen i `scanf`?
- [ ] Hvad bliver `7 / 2`, `7 % 2` og `7.0 / 2`?
- [ ] Hvad returnerer `scanf`, og hvorfor er det nyttigt at tjekke det?
- [ ] Hvad gør `#include <stdio.h>`?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
