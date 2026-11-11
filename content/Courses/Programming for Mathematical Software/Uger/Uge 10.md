---
publish: true
title: "Programming for Mathematical Software uge 10: Test og debugging"
course: Programming for Mathematical Software
type: week
week: 10
tags:
  - c-programming
  - ugenote
---

# Uge 10: Test og debugging

> Kilde: `module10.pdf` (opgaveark, 12. november 2026) og `slides10.pdf` (forelæsning 10, Martin S. Andersen, 17 slides). Opgavearket er kort og henviser til afleveringsopgaven (bedømt aflevering). Pensum: lecture notes kap. 9 (Debugging and Testing).

## Emner

- Retningslinjer for at skrive testbar kode
- Indrykning og læsbarhed
- Kompilerkæden og C-præprocessoren (makroer)
- Fejlhåndtering, `assert`, debuggere (`-g`, `gdb`)
- Typiske fejl: stack overflow, pointere, hukommelse, indeksfejl, strenge, makroer
- Arbejde på afleveringsopgaven

## Begreber

**Retningslinjer (slides).** Design programmet med test for øje. Byg ikke et fuldt program fra start: start med specifikationer, datastrukturer og tests, og implementér og test ét modul/én funktion ad gangen. Brug betinget kompilering til at tage debugkode med eller ud, brug fejlkontrol og assertions, undgå (for mange) globale variabler, slå advarsler til (`-Wall` og `-Wextra`), sigt efter læsbarhed (undgå som tommelfingerregel `goto`) og brug ordentlig indrykning.

**Indrykning (slides).** Slides' to eksempler med `int x = 5;`: `while( x > 0 ); x--;` og `while( x > 0 ) ; x--;`. I begge tilfælde er løkkens krop det tomme udsagn (semikolon efter `while(...)`), så `x--` står uden for løkken, og løkken kører uendeligt mange gange, fordi `x` aldrig ændres. Indrykning ville have vist, at det ikke er det, man mener.

**Compilerkæden (slides).** Præprocessering (`cpp`): `hello.c` bliver til `hello.i`; kompilering (`gcc -S`): `hello.i` bliver til assembler `hello.s`; assembly (`as`): `hello.s` bliver til `hello.o`; linking (`ld`): objektfiler og biblioteker bliver til en kørbar fil.

**Præprocessoren (slides).** Makroer som `#define BUFFER_SIZE 1024` og funktionslignende `#define min(X, Y) ((X) < (Y) ? (X) : (Y))`. Pas på faldgruber. Foruddefinerede makroer: `__FILE__`, `__LINE__`, og fra C99 `__DATE__`, `__TIME__`, `__func__`. Systemmakroer: `_WIN32`, `_WIN64`, `__linux__`, `__APPLE__`, `__MACH__`, `__unix__`. Man kan liste indbyggede makroer med `cpp -dM /dev/null` (Windows uden WSL: `NUL`), og med flag: `gcc -dM -E - [options] < /dev/null`.

**Fejlhåndtering (slides).** Tjek returværdien fra `malloc`, skriv fejl til `stderr` med `__func__` og `__LINE__`, returnér `EXIT_FAILURE`, og sæt pointeren til `NULL` efter `free`.

```c
double *data = malloc(100*sizeof(*data));
if (data == NULL) {
    fprintf(stderr, "Malloc failed in %s function, line %d\n", __func__, __LINE__);
    return EXIT_FAILURE;
}
free(data);
data = NULL;
```

**assert (slides).** Boolske udtryk, der skal være sande, med mindre der er en fejl. Nyttige til debugging, men erstatter ikke fejlkontrol. `#include <assert.h>` og `assert(expression);`. Slås fra ved at definere `NDEBUG` før `assert.h`, eller med `-DNDEBUG` (i `CPPFLAGS` i makefilen). Slides' eksempel: `assert(data != NULL); assert(size > 0);` giver ved `my_function(NULL, 5)` en meddelelse med udtrykket, funktionsnavnet, filen og linjen, og programmet afbrydes (abort).

**Debugging (slides).** Kompilér med `-g` for en debugversion. Terminaldebuggere (GNU `gdb`, Intel `idb`, Sun `dbx`, LLVM `lldb`) kan sætte breakpoints, gå trin for trin og undersøge variabler. Integrerede debuggere i IDE'er kan det samme. Man kan også tilføje betinget kompileret debugkode (assertions, udskrivning af udvalgte variabler).

```c
#include <assert.h>
#include <stdio.h>

double mean(const double *x, int n) {
    double s = 0.0;
    assert(n > 0);
    for (int i = 0; i < n; i++) {
        s += x[i];
    }
    return s / n;
}

int main(void) {
    double x[3] = {1.0, 2.0, 3.0};
    assert(mean(x, 3) == 2.0);
    printf("ok\n");
    return 0;
}
```

**Typiske fejl (slides).**

- Stack overflow: store automatiske arrays (`double data[2097152]` kræver 16 MB, tjek størrelsen) og rekursive kald. Slides' eksempel er `fibonacci(long n)` kaldt med negativt `n`, som aldrig rammer basistilfældene `n == 0` og `n == 1`; brug en debugger til at spore kaldene.
- Pointere: uinitialiseret pointer (`double *pd; *pd = 5.0;`, advarsler med `-Wall`) og dereferencing af `NULL` (`int *pi = NULL; *pi = 2;`, brug en assertion før dereferencing).
- Hukommelse: manglende allokering (`double *A;` og derefter `A[i] = 1.0`, initialisér med `= NULL` og brug assertions), manglende deallokering (hukommelseslæk, tjek `malloc` og `free` eller brug AddressSanitizer eller Valgrind) og manglende `free` i en fejlgren (slides' `some_function` returnerer -1, når `fopen` fejler, uden at frigive `y`).
- Indeks uden for grænser: `for (int i=0;i<=10;i++)` på `double data[10]`, og `s[5] = '\0'` på `char s[5]`. Brug assertions eller en debugger.
- Manglende nulafslutning: `char s[5]` fyldt med "Hello" uden plads til `'\0'`, og så `puts(s)`.
- Utilsigtede makroer: `#define cube(x) x*x*x` med `cube(2+3)` bliver til `2+3*2+3*2+3` og ikke $(2+3)^3$. Tjek præprocessorens output, og sæt parenteser om argumenter.
### Fejldiagnose-model: Valgrind og memory leak-registrering (supplerende illustration, ikke fra slides)

Valgrind overvåger alle heap-allokeringer i en virtuel CPU:

```text
       Allokering (malloc):            Frigørelse (free):
       Heap: [ Block A: 100 bytes ] -> Heap: [ Frigivet / tom ]
       
  Fejlscenarier:
  1. Memory Leak: malloc() kaldes uden tilhørende free() før programafslutning.
  2. Use-After-Free: Pointer p tilgås efter free(p).
  3. Buffer Overflow: Skrivning ud over allokeret længde (overskriver nabodata).
```
Kompilér altid med debug-symboler `-g` for at få præcise filnavne og linjenumre i Valgrind-rapporten.

## Opgaver

Fra `module10.pdf`:

- Arbejd på afleveringsopgaven ("Work on the assignment"). Der er ingen andre nummererede opgaver i opgavearket for modul 10. Bedømt aflevering.
- Løsningsark: der er ikke fundet nogen `sols_module10` på Learn.

## Tjek dig selv

- [ ] Hvilke retningslinjer for kodestil og indrykning bruges i kurset?
- [ ] Hvordan bruges `assert`, og hvornår bør man i stedet returnere en fejlkode?
- [ ] Hvordan bruges en debugger (`gdb`) til at finde en fejl?
- [ ] Hvilke typiske fejl giver stack overflow, manglende allokering og hukommelseslæk?
- [ ] Hvorfor giver makroen `#define cube(x) x*x*x` et forkert resultat for `cube(2+3)`?
- [ ] Hvordan kan AddressSanitizer eller Valgrind bruges?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
