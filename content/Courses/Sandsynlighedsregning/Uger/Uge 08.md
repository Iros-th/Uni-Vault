---
publish: true
title: "Sandsynlighedsregning uge 8: Simultane tætheder"
course: Sandsynlighedsregning
type: week
week: 8
tags:
  - sandsynlighed
  - ugenote
---

# Uge 8: Ligefordeling i planen og simultane tætheder

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 30. oktober, afsnit 5.1 og 5.2) og ugebrevet til forelæsning 8. Lærebog: Jim Pitman, Probability. Velkomstteksten skønner sværhedsgraden til "under middel", ca. 14 sider. Slides er ikke læst.

## Emner

- Afsnit 5.1: ligefordeling i planen
- Afsnit 5.2: simultane og marginale tætheder for todimensionale kontinuerte variable

## Begreber

**Ligefordeling på et område.** Punktet $(X, Y)$ er ligefordelt på et område $R$ i planen, hvis $P((X,Y) \in A) = \dfrac{\operatorname{areal}(A \cap R)}{\operatorname{areal}(R)}$ (teorien side 340). Eksempel: ligefordelt på enhedskvadratet, $P(X + Y \le 1) = 1/2$, det halve areal. Ugebrevet minder om, at det ofte kan betale sig at regne på det komplementære område (eksempel 2 a, b side 343 og eksempel 3 side 343) eller en lidt sammensat konstruktion (eksempel 2 c).

**Simultan tæthed.** En funktion $f(x,y) \ge 0$ med $\iint f\,dx\,dy = 1$. $P((X,Y) \in B) = \iint_B f(x,y)\,dx\,dy$ (resultater side 349, sammenlignet med de diskrete udtryk side 348). Det er planintegralet fra analysen.

**Marginal tæthed.** $f_X(x) = \int f(x,y)\,dy$ og $f_Y(y) = \int f(x,y)\,dx$. Husk at være omhyggelig med integrationsgrænserne, når området ikke er et rektangel. Eksempel: $f(x,y) = 2$ for $0 < x < y < 1$ (ligefordeling på en trekant med areal $1/2$). Så er $f_X(x) = \int_x^1 2\,dy = 2(1 - x)$ for $0 < x < 1$.

**Uafhængighed.** $X$ og $Y$ er uafhængige, hvis $f(x,y) = f_X(x)f_Y(y)$. I trekant-eksemplet er de ikke uafhængige: området er ikke et rektangel, og $f_X f_Y$ giver ikke konstanten 2.

**Maks-min-problemer som illustration.** Ugebrevet bruger max-min-problemstillingen fra afsnit 4.5 både som eksempel på simultane fordelinger og som repetition. Opgave 4.6.3 anbefales regnet i forvejen.
### Rumlig model: Simultan 2D sandsynlighedstæthed og marginalisering

For to kontinuerte stokastiske variable $(X, Y)$ svarer sandsynligheden til volumen under tæthedsfladen $f(x, y)$:

```text
           z = f(x, y)
             ^
             │        Volumen = 1
             │       .-''''-.
             │     .'        '.
             │    /   P(A)     \
             └───/──────────────\─────> y
                /                \
               v x
```

**Marginalisering ("projektion" ned på én akse):**
For at finde fordelingen af $X$ alene, integreres $y$ væk over hele sit definitionsområde:
$$f_X(x) = \int_{-\infty}^\infty f(x, y)\,dy.$$

## Opgaver

Pitman, Probability (kapitel.afsnit.opgave). Regnes ved øvelsen fredag 6. november.

Øvelsesopgaver: 5.1.1, 5.2.1, 4.5.6, 4.2.8, 5.1.2, 5.2.4, 4.6.4. (Ugebrev og kursusside har samme liste.)

Opgaver til selvstudium: 4.5.8, 4.6.5, 5.1.4, 5.1.5, 5.2.7.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 23 og 28.

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
