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

> Kilde: `module03.pdf` på DTU Learn (opgaveark, 17. september 2026) og modultabellen. Slides (`slides03.pdf`, `UnixIntroSlides.pdf`, `UnixIntroLabs.pdf`) er ikke læst. Del 1 af modulet er introduktion til DTU Unix-systemet (Bernd Dammann), del 2 er løkker, arrays og funktioner (Martin Andersen). Pensum: King kap. 6, 8, 9 (uden 9.6), 10; lecture notes Appendix A.5 (build-systemer og makefiles).

## Emner

- DTU Unix-systemet (adgang, terminal)
- Løkker: `for`, `while`, `do ... while`
- Arrays (endimensionelle og flerdimensionelle)
- Funktioner og programorganisation (flere filer, headers)
- Build-systemer og makefiles

## Begreber

**Løkker.** `for (int i = 0; i < n; i++)` er standardformen til at løbe et array igennem. `while` tester før hver iteration, `do ... while` efter. `break` afslutter løkken, `continue` springer til næste iteration.

**Arrays.** Et array har fast størrelse, og indeks går fra 0 til $n-1$. C tjekker ikke grænser, så adgang uden for arrayet er udefineret adfærd. Når et array sendes til en funktion, sendes i praksis en adresse, så funktionen kan ændre indholdet. Længden skal sendes med separat.

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

**Funktioner og prototyper.** En funktion skal være erklæret før brug. Prototypen (`double sum(const double a[], int n);`) lægges typisk i en `.h`-fil, og definitionen i en `.c`-fil. `const` fortæller, at funktionen ikke ændrer argumentet.

**Programorganisation.** Større programmer deles i flere kildefiler, som kompileres hver for sig til `.o`-filer og linkes sammen. `static` på en global funktion eller variabel gør den privat for filen.

**Makefile.** En makefile beskriver, hvilke filer der afhænger af hvilke, så `make` kun genbygger det, der er ændret. Et minimalt eksempel (indrykning med tabulator):

```make
CFLAGS=-Wall -std=c99
prog: main.o util.o
.PHONY: clean
clean:
	-$(RM) prog *.o
```

Her bruger `make` sine indbyggede regler til at bygge `.o`-filer og linke `prog`.

## Opgaver

Fra `module03.pdf`. Instruktioner: skim King kap. 6, 8, 9 (spring 9.6 over) og 10; læs Appendix A.5 i lecture notes.

- 3.1 Lav "DTU Unix system"-opgaverne.
- 3.2 Tag quizzen om løkker.
- 3.3 Tag quizzen om funktioner.
- 3.4 Tag quizzen om arrays.
- 3.5 Lav "Module 03"-opgaverne på Autolab.

## Tjek dig selv

- [ ] Hvad er forskellen på `while` og `do ... while`?
- [ ] Hvad sker der, hvis jeg skriver uden for et arrays grænser?
- [ ] Hvorfor skal et array's længde sendes med som separat argument?
- [ ] Hvad bruges `const` til i en parameterliste?
- [ ] Hvad er en prototype, og hvor placerer man den typisk?
- [ ] Hvad sparer man ved at bruge `make` frem for at kompilere alt manuelt?
- [ ] Kan jeg logge ind på DTU Unix-systemet og kompilere et program dér?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
