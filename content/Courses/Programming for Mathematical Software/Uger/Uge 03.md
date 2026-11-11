---
publish: true
title: "Programming for Mathematical Software uge 3: Unix-systemet, løkker, arrays, funktioner"
course: Programming for Mathematical Software
type: week
week: 3
tags:
  - c-programming
  - ugenote
---

# Uge 3: Unix-systemet, løkker, arrays, funktioner

> Kilde: `module03.pdf` (opgaveark, 17. september 2026), `slides03.pdf` (forelæsning 3, 18 slides), `UnixIntroSlides.pdf` (Bernd Dammann, 25 slides), `UnixIntroLabs.pdf` (øvelse 3B), `sols_module03.pdf` og modultabellen. Siderne "Solution examples" og "Example from lecture" har ingen fil i DTU Learn. Del 1 af modulet er introduktion til DTU Unix-systemet, del 2 er løkker, arrays og funktioner (Martin Andersen). Pensum: King kap. 6, 8, 9 (uden 9.6), 10; lecture notes Appendix A.5 (build-systemer og makefiles).

## Emner

- DTU Unix-systemet (G-bar, ThinLinc, ssh, HPC)
- Prioriteter i matematisk software
- Løkker: `for`, `while`, `do ... while`
- Arrays (endimensionelle og flerdimensionelle), row-major lagring
- Funktioner, array-argumenter og programafslutning
- Programorganisation med flere filer, headers og makefiles

## Begreber

**DTU Unix-systemet (UnixIntroSlides).** G-bar er en "remote databar" med Linux (Alma Linux 9.6 på applikationsserverne) og mere end 10000 brugere. Adgang: ThinLinc-fjernskrivebord (klient mod `thinlinc.gbar.dtu.dk`, eller via browser på `https://thinlinc.gbar.dtu.dk/`) eller `ssh` til `login.gbar.dtu.dk` eller `login.hpc.dtu.dk`, hvorefter man starter `linuxsh`. Loginnoderne er kun til login. På DTU-netværk eller VPN er der ingen ændring; udenfor kræver ThinLinc en ssh-nøgle med passphrase (kun klient, ingen webadgang), og ssh kræver nøgle, passphrase og DTU-password. Begrundelsen for at bruge systemet er, at man før eller siden vil løse problemer der ikke passer på laptoppen, mange problemer, eller bruge software der ikke kører på ens egen pc.

Interaktivt arbejde har en "code of conduct": programmer fra menuen kører på flerbrugermaskiner med grænser på 24 timers CPU-tid og 16 GB hukommelse. Mere end det kræver batch-systemet (scheduler, se `www.hpc.dtu.dk`). Filer overføres med WinSCP, FileZilla, Cyberduck, `scp` eller `rsync` (server `transfer.gbar.dtu.dk` ifølge labbet). Undgå mellemrum og nationale tegn i filnavne. Data bliver backet up. Hjælp: `www.gbar.dtu.dk`, `www.hpc.dtu.dk`, `support@cc.dtu.dk`, `support@hpc.dtu.dk`.

Ansvarlig brug af AI på klyngen (slides): fjernudvidelser i VS Code, Cursor eller Zed kan lade en AI-agent arbejde på HPC-systemet uden at man opdager det, fx søge efter en fil udenfor sin egen mappe. Klyngen er ikke ens private computer, og man er altid selv ansvarlig for, hvad der sker under ens konto.

**Lab 3B (UnixIntroLabs).** Log ind med ThinLinc, første gang vælges "Use default config". Opret en mappe uden mellemrum (fx `02635`), lav `hello.c` (gedit), åbn en terminal i mappen ("Open Terminal Here"), kompilér og kør. Den kørbare fil kan ikke køres ved at dobbeltklikke i filhåndteringen (opgaven er at tænke over hvorfor). Valgfrit: VS Code med C/C++-udvidelsen, eller IDE'en Geany; alternativer nævnt er Eclipse, Emacs og vim.

**Prioriteter (slides).** Korrekthed (design med debugging og test i tankerne), numerisk stabilitet, nøjagtighed (model, diskretisering, approksimation), fleksibilitet (abstraktionsniveau, modularitet) og effektivitet (tid og hukommelse). Der er ofte en afvejning mellem effektivitet og de andre.

**Løkker.** `for (int i = 0; i < n; i++)` er standardformen til at løbe et array igennem. `while` tester før hver iteration, `do ... while` efter. `break` afslutter løkken, `continue` springer til næste iteration.

**Arrays (slides).** En sammenhængende samling af elementer af samme type, indekseret fra 0: `int data[10] = {2,5,3,4,8,-1,3,5,4,-3};`. C tjekker ikke grænser, så adgang uden for arrayet er udefineret adfærd. Todimensionelle arrays: `double a[3][5] = {{...},{...},{...}};` hvor første indeks er række og andet er kolonne.

**Row-major og column-major (slides).** C, C++ og Objective-C gemmer flerdimensionelle arrays række for række (row-major): `a[1][0]` ligger lige efter `a[0][4]`, og `a[i]` er selv et array (et "array af arrays"). FORTRAN, MATLAB og Julia bruger column-major og 1-baseret indeksering. Det betyder noget for ydelsen, når man løber en matrix igennem, og når man kalder biblioteker (uge 8).

**Variabel-længde arrays (slides).** `size_t n; scanf("%zu", &n); double data[n];` (på Windows/MinGW: `%Iu`). De hedder VLA, blev defineret i C99 og er valgfrie fra C11. Brug dem med forsigtighed, og slå `-Wvla` eller `-Werror=vla` til i `CFLAGS` for at opdage dem. Dynamisk allokering kommer i uge 5.

**Funktioner (slides).** Form: `return-type function-name(arguments) { ... }`. Linjen `return-type function-name(arguments);` er en prototype. Højst én returværdi, og den kan ikke være et array. `void` betyder ingen returværdi og/eller ingen argumenter. Argumenter sendes by value, og variabler er automatiske med scope i blokken `{ }`.

**Array-argumenter (slides).** `int sum_array(int a[], int n)`: længden udelades normalt og skal sendes som ekstra parameter. Er arrayet kortere end `n`, er adfærden udefineret. Arrays sendes (i praksis) by reference, så funktionen kan ændre indholdet; `const` fortæller, at den ikke gør det. Compound literals (C99): `sum_array((int []){3,0,3,4,1}, 5);`.

```c
#include <stdio.h>

double sum(const double a[], int n) {
    double s = 0.0;
    for (int i = 0; i < n; i++) {
        s += a[i];
    }
    return s;
}

int main(void) {
    double v[4] = {1.0, 2.0, 3.0, 4.0};
    printf("%g\n", sum(v, 4));
    return 0;
}
```

**Programafslutning (slides).** `EXIT_SUCCESS` og `EXIT_FAILURE` er defineret i `stdlib.h`. Programmet kan afsluttes hvor som helst med `exit(EXIT_SUCCESS)` eller `exit(EXIT_FAILURE)`.

**Flere filer (slides).** Eksemplet er `array_fun.h` med prototyper (`array_sum`, `array_cumsum`, `array_print`) beskyttet af include guards (`#ifndef ARRAY_FUN_H` / `#define ARRAY_FUN_H` / `#endif`), `array_fun.c` med definitionerne, og `myprogram.c` med `main`. Arrayets længde findes med `sizeof(a)/sizeof(double)`. Manuelt bygges det sådan:

```
$ gcc -Wall -std=c11 -c array_fun.c
$ gcc -Wall -std=c11 -c myprogram.c
$ gcc myprogram.o array_fun.o -lm -o myprogram
```

Kæden er preprocessing, compilation, assembly og linking (mod `libm` og `libc`). `static` på en global funktion eller variabel gør den privat for filen.

**Makefile (slides).** Form: `variable = value` og `target : dependencies` efterfulgt af en kommando indrykket med tabulator. Make har mange indbyggede regler (se dem med `make -p -f/dev/null`), fx `COMPILE.c = $(CC) $(CFLAGS) $(CPPFLAGS) $(TARGET_ARCH) -c` og `LINK.c = $(CC) $(CFLAGS) $(CPPFLAGS) $(LDFLAGS) $(TARGET_ARCH)`. Implicit afhænger `target` af `target.o`, som afhænger af `target.c`. Man tilføjer eksplicitte afhængigheder (objektfiler afhænger af headers, den kørbare af flere objektfiler). Eksempel fra slides:

```make
CC=gcc
CPPFLAGS=
CFLAGS=-Wall -std=c11
LDFLAGS=
LDLIBS=-lm

myprogram: myprogram.o array_fun.o
myprogram.o: array_fun.h
array_fun.o: array_fun.h

.PHONY: clean
clean:
	-$(RM) myprogram *.o
```

`.PHONY: clean` betyder, at `clean` ikke danner en fil med det navn. `gcc -MM *.c` genererer afhængigheder automatisk. En generisk makefile bruger `obj=$(patsubst %.c,%.o,$(wildcard *.c))` og `myprogram: $(obj)`.
### Byggemodel: Make Directed Acyclic Graph (DAG) og dependency tracking (supplerende illustration, ikke fra slides)

GNU Make opbygger en rettet graf uden kredsløb (DAG) over filernes afhængigheder og sammenligner tidsstempler:

```text
                       [ myprogram ] (Target)
                        /         \
           [ myprogram.o ]       [ array_fun.o ]
             /        \             /        \
       [ myprogram.c ] [ fun.h ] [ array_fun.c ]
```
Hvis kun `array_fun.c` ændres, genkompileres kun `array_fun.o`, hvorefter `myprogram` linkes på ny. `myprogram.c` berøres overhovedet ikke.

## Opgaver

Fra `module03.pdf`. Instruktioner: skim King kap. 6, 8, 9 (spring 9.6 over) og 10; læs Appendix A.5 i lecture notes.

- 3.1 Lav "DTU Unix system"-opgaverne.
  - Løsningsidé: løsningsarket har ingen løsning her; opgaverne er lab 3B (log ind med ThinLinc, lav og kør hello world fra kommandolinjen, valgfrit VS Code eller Geany).
- 3.2 Tag quizzen om løkker.
- 3.3 Tag quizzen om funktioner.
- 3.4 Tag quizzen om arrays.
- 3.5 Lav "Module 03"-opgaverne på Autolab.
  - Hint fra forelæsningens sidste slide (ikke en løsning): funktionsevaluering uden over- og underflow og catastrophic cancellation, fx Poisson-sandsynligheden $f(k;\lambda) = \frac{\lambda^k}{k!} e^{-\lambda}$ for $k \in \mathbb{N}_0$, $\lambda > 0$. Brug `lgamma()` med $\log\Gamma(k+1) = \log(k!)$, og Stirlings formel $k! = \sqrt{2\pi k}\,(k/e)^k (1 + O(1/k))$. Autolab-løsninger lægges på Learn efter deadline.

## Tjek dig selv

- [ ] Hvordan logger man ind på DTU Unix-systemet (ThinLinc og ssh), og hvad er loginnoder til?
- [ ] Hvad er forskellen på row-major og column-major lagring, og hvilken bruger C?
- [ ] Hvordan sendes et array til en funktion, og hvorfor skal længden med?
- [ ] Hvad er et variabel-længde array, og hvilke begrænsninger har det?
- [ ] Hvordan opdeles et program i flere filer, og hvad indeholder en `Makefile`-regel (mål, afhængigheder, kommando)?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
