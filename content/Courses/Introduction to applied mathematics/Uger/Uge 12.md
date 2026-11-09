---
publish: true
title: "Introduction to applied mathematics uge 12: Filmanbefaling, del 2"
course: Introduction to applied mathematics
type: week
week: 12
tags:
  - applied-math
  - ugenote
---

# Uge 12: Filmanbefaling, del 2

> Kilde: General Info (`02525_IntroAppMat2026v3 - Copy.pdf`). Projekt 5 "Movie Recommenders" er tomt på DTU Learn pr. 9/11 2026. Kunne ikke tilgås: der er ikke lagt materiale op endnu.

## Emner

Fortsættelse af Projekt 5, Filmanbefaling, mandag 23/11 2026 (Georgios Arvanitidis). Rapportdeadline 29/11.

## Begreber

Ikke udfyldt endnu, se [[Courses/Introduction to applied mathematics/Uger/Uge 11|Uge 11]].
### Faktoriseringsmodel: Latente faktorer og lav-rang matrix-tilnærmelse

Den store, ufuldstændige bedømmelsesmatrix $R$ ($M$ brugere $\times$ $N$ film) faktoriseres i to slanke matricer af latente træk:

```text
  Bedømmelsesmatrix R (M x N)          Brugertræk P (M x k)   Filmtræk Q^T (k x N)
  ┌─────────────────────────┐          ┌─────────┐
  │ 5   ?   1   4   ?   ?   │          │ p1 ...  │        ┌─────────────────────────┐
  │ ?   4   ?   ?   2   5   │  ≈       │ p2 ...  │   ·    │ q1   q2   q3   ...   qN │
  │ 1   ?   5   ?   ?   1   │          │ ...     │        └─────────────────────────┘
  └─────────────────────────┘          └─────────┘
```
Hvert element approksimeres ved skalarproduktet $\hat{r}_{ij} = \mathbf{p}_i^\top \mathbf{q}_j$, hvilket tillader algoritmen at forudsige manglende værdier (?) med høj præcision.

## Opgaver

Ingen opgaver lagt op på DTU Learn endnu. Rapportdeadline 29/11.

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
