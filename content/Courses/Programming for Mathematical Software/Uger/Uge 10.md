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

> Kilde: `module10.pdf` på DTU Learn (opgaveark, 12. november 2026) og modultabellen. Opgavearket er meget kort og henviser til afleveringsopgaven, som ikke er åbnet. Eventuelle slides og lecture notes er ikke læst. Pensum: lecture notes kap. 9 (Debugging and Testing).

## Emner

- Strategier til at finde fejl
- Enhedstest og sammenligning med en reference
- Debuggere og værktøjer til hukommelsesfejl
- Arbejde på afleveringsopgaven

## Begreber

Dette afsnit er generelt og ikke taget fra kursets slides.

**Test.** Test små enheder (funktioner) hver for sig med kendte svar. Sammenlign floating-point resultater med en tolerance og ikke med `==`. Test også randtilfælde: tomme input, størrelse 1, ikke-kvadratiske matricer.

**assert.** `assert(betingelse)` fra `<assert.h>` stopper programmet med en meddelelse, hvis betingelsen er falsk. Den bruges til at fange brud på forudsætninger tidligt. Med `-DNDEBUG` fjernes alle asserts.

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

**Debugger.** Kompilér med `-g`, og kør programmet i fx `gdb`: sæt breakpoints (`break`), kør (`run`), gå trin for trin (`next`, `step`), udskriv variable (`print`). Det er ofte hurtigere end at fylde koden med `printf`.

**Hukommelsesfejl.** Fejl som skrivning uden for et array, brug af frigjort hukommelse og lækager fanges af værktøjer som `valgrind` eller compilerflaget `-fsanitize=address`.

**Compileradvarsler.** Kompilér altid med `-Wall` (evt. `-Wextra`) og ret alle advarsler.

## Opgaver

Fra `module10.pdf`:

- Arbejd på afleveringsopgaven ("Work on the assignment"). Der er ingen andre nummererede opgaver i opgavearket for modul 10.

## Tjek dig selv

- [ ] Hvordan tester jeg en funktion, så jeg ved, at den er korrekt?
- [ ] Hvorfor sammenligner jeg floating-point resultater med en tolerance?
- [ ] Hvad gør `assert`, og hvordan slår man den fra?
- [ ] Hvilket compilerflag skal bruges for at kunne debugge med `gdb`?
- [ ] Hvilke typer fejl kan `valgrind` eller `-fsanitize=address` finde?
- [ ] Hvilke randtilfælde bør jeg teste for matrixfunktioner?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
