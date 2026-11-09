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

> Kilde: `module05.pdf` på DTU Learn (opgaveark, 1. oktober 2026) og modultabellen. Slides (`slides05.pdf`) og `msptools_demo.tar` er ikke læst. På siden ligger et link til "MSP Tools" (`https://gitlab.gbar.dtu.dk/mskan/msptools`), som bruges fra uge 6. Pensum: King kap. 14, 16, 17.1 til 17.6; lecture notes kap. 5 (Data Structures).

## Emner

- Præprocessoren (kap. 14)
- Structs, unions og enumerations (kap. 16)
- Dynamisk hukommelse: `malloc`, `calloc`, `realloc`, `free`; sammenhængende lister (kap. 17.1 til 17.6)
- Abstrakte datastrukturer til vektorer og matricer

## Begreber

**Struct.** Samler flere felter i én type. Med `typedef` slipper man for at skrive `struct` hele tiden.

```c
#include <stdlib.h>

typedef struct {
    size_t len;
    double *data;
} vec_t;

vec_t *vec_new(size_t n) {
    vec_t *v = malloc(sizeof *v);
    if (v == NULL) return NULL;
    v->data = calloc(n, sizeof *v->data);
    if (v->data == NULL) {
        free(v);
        return NULL;
    }
    v->len = n;
    return v;
}

void vec_free(vec_t *v) {
    if (v != NULL) {
        free(v->data);
        free(v);
    }
}
```

**Dynamisk hukommelse.** `malloc(n)` reserverer `n` bytes på heapen og returnerer en pointer, eller `NULL` hvis det fejler. `calloc` nulstiller hukommelsen. `realloc` ændrer størrelsen på en blok (bruges til dynamiske arrays, der vokser). Alt, der er allokeret, skal frigives med `free` præcis én gang. Glemmer man det, får man et hukommelseslæk; frigiver man to gange eller bruger en pointer efter `free`, er adfærden udefineret.

**Abstrakt datatype.** Brugeren af en datastruktur (fx en dynamisk vektor) kender kun funktionerne (`vec_new`, `vec_free` og så videre) og ikke den interne repræsentation. Det gør det muligt at ændre implementeringen uden at ændre resten af koden.

**Sammenhængende liste.** Hver node indeholder data og en pointer til næste node. Indsættelse først er $O(1)$, men adgang til element $i$ er $O(i)$. Et array har omvendt $O(1)$ adgang, men dyr indsættelse midt i.

**Præprocessor.** `#define`, `#include`, betinget kompilering (`#ifdef`) og include guards i headerfiler.

## Opgaver

Fra `module05.pdf`. Instruktioner: læs King kap. 14, 16 og 17.1 til 17.6; læs lecture notes kap. 5.

- 5.1 Tag quizzen om structs.
- 5.2 Lav exercises 2, 3 og 10 (kap. 16, s. 408) i lærebogen.
- 5.3 Lav exercise 3 (kap. 17, s. 453) i lærebogen.
- 5.4 Lav "Module 05"-opgaverne på Autolab.
- Valgfri 5.5: Skim Wikipedia-artiklen "List of data structures" for at se almindelige datastrukturer.

## Tjek dig selv

- [ ] Hvad er forskellen på `malloc` og `calloc`?
- [ ] Hvad sker der, hvis `malloc` returnerer `NULL`, og jeg ikke tjekker det?
- [ ] Hvad er et hukommelseslæk, og hvordan opstår det?
- [ ] Hvad betyder `->` i forhold til `.`?
- [ ] Hvorfor kan man bruge `realloc` til et dynamisk array, og hvad er risikoen, hvis den fejler?
- [ ] Hvad er forskellen på adgangstid i et array og i en sammenhængende liste?
- [ ] Hvad er en include guard, og hvorfor er den nødvendig?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
