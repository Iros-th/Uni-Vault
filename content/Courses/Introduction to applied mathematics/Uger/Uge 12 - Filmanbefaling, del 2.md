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

> Kilde: oversigtsslidet i `Lecture1_updated.pdf`. Selve uge 2-materialet (slides og `Ex2.pdf`) er ikke vedlagt her pr. 23/11 2026, så punkterne nedenfor er programmet, ikke indholdet.

## Emner (mandag 23/11 2026)

- Item-based filtering: $\mathbf S$ mellem film i stedet for mellem brugere
- Collaborative filtering: hvorfor det virker, og hvilke problemer det har
- Evaluering af performance (MAE, grid search over $k$, similaritetsmål og prædiktionsskema)
- Analyse af klassens egne ratings: anbefalinger ud fra "Top 50 IMDB movies"-formularen fra uge 1
- Information om rapporten
- Exercise 2

Baggrunden er den samme som i uge 1: [[Courses/Introduction to applied mathematics/Filmanbefaling/Teori - collaborative filtering|Teori, collaborative filtering]]. Det, der er nyt, er at $\mathbf S$ beregnes mellem film, og at den derfor ikke skal genberegnes, hver gang en ny bruger kommer til. Det er hovedargumentet for item-based i praksis.

## Opgaver

- Exercise 2 (`Ex2.pdf`, lægges på Learn)
- **Rapportdeadline 29/11**, bedømt aflevering (feedback only)

### Huskeliste til rapporten

Pensum peger på, at en rapport bør dække: ratingmatricen og dens huller, valget af similaritetsmål, valget af $k$, de tre prædiktionsskemaer, MAE som evalueringsmål, og en sammenligning af user-based og item-based på de samme data. Grid search over de tre valg er den metode, kursusnoten anviser til at finde den bedste kombination.

## Links

- [[Courses/Introduction to applied mathematics/Uger/Uge 11 - Filmanbefaling, del 1|Uge 11]]
- [[Courses/Introduction to applied mathematics/Filmanbefaling/User-user handout - gennemregnet|User-user handout, gennemregnet]]
- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
