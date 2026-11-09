---
publish: true
title: "Introduction to applied mathematics uge 11: Filmanbefaling, del 1"
course: Introduction to applied mathematics
type: week
week: 11
tags:
  - applied-math
  - ugenote
---

# Uge 11: Filmanbefaling, del 1

> Kilde: General Info (`02525_IntroAppMat2026v3 - Copy.pdf`). Projekt 5 "Movie Recommenders" er tomt på DTU Learn pr. 9/11 2026 (ingen filer i indholdsfortegnelsen). Der er derfor ikke læst noget projektmateriale: kunne ikke tilgås, fordi det ikke er lagt op endnu.

## Emner

Fra tidsplanen i General Info: Projekt 5, Filmanbefaling, uge 11 og 12 (16/11 og 23/11 2026). Forelæser er Georgios Arvanitidis, lektor, Cognitive Systems, DTU Compute. Rapportdeadline er 29/11. Mandag 16/11 2026 er første dag.

Emnet ud over titlen er ikke beskrevet i det tilgængelige materiale.

## Begreber

Ikke udfyldt endnu. Når slides og opgavebeskrivelse er lagt på DTU Learn, kan begreberne tilføjes her.
### Anbefalingsmodel: Vektorrum og Cosinus-lighed

Kollaborativ filtrering sammenligner brugeres smag ved at måle vinklen mellem deres vurderingsvektorer i $\mathbb{R}^d$:

```text
                Film B (Sci-Fi) ^
                                │          Bruger 1 (u)
                                │         /
                                │      θ /
                                │       /   Bruger 2 (v)
                                │      /  /
                                │     / /
                                └────┴─────────────────> Film A (Komedie)
```
Cosinus-ligheden måler retningen uafhængigt af, om en bruger generelt giver høje eller lave karakterer:
$$\cos(\theta) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|} = \frac{\sum u_i v_i}{\sqrt{\sum u_i^2} \sqrt{\sum v_i^2}} \in [-1, 1].$$

## Opgaver

Der er endnu ingen opgaver lagt op på DTU Learn for Projekt 5. Deadline for rapporten er 29/11 (fra General Info). Projektet tæller som et af de små projekter med skriftlig/mundtlig rapport (feedback only, $2$ point).

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
