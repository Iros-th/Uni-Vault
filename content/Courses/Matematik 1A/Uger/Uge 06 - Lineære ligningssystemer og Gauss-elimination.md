---
publish: true
title: "Matematik 1A uge 6: lineære ligningssystemer og gauss-elimination"
course: Matematik 1A
type: week
week: 6
tags:
  - matematik-1a
  - ugenote
---

# Uge 6: Lineære ligningssystemer og Gauss-elimination

> Kilde: kursussiden mat1a.compute.dtu.dk, siderne Lektionsoversigt, Ugeprogram semesteruge 6 og Opgaver Store Dag/Lille Dag uge 6. Bogen er kursets lærebog (udgave 2026).

## Emner

- Lineære ligningssystemer, matricer, Gauss-elimination, (reduceret) trappeform, rang, partikulær løsning og fuldstændig løsning.
- Pensum: Afsnit 6.1 til og med 6.4 i kapitel 6. Store Dag: afsnit 6.1, 6.2 og 6.3. Lille Dag: afsnit 6.4.

## Begreber

### Totalmatrix og rækkeoperationer

Et system skrives som en totalmatrix. De tilladte rækkeoperationer (ombyt to rækker, gang en række med $c \ne 0$, læg et multiplum af en række til en anden) ændrer ikke løsningsmængden (Sætning 6.2.1).

*Eksempel.* $x + 2y = 5$, $2x + 3y = 8$: $\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 2 & 3 & 8 \end{array}\right] \to \left[\begin{array}{cc|c} 1 & 2 & 5 \\ 0 & -1 & -2 \end{array}\right] \to \left[\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 2 \end{array}\right]$, så $x = 1$, $y = 2$.

### Trappeform og reduceret trappeform

En matrix på reduceret trappeform opfylder de fire krav i Definition 6.3.2. Hver pivot (første nul-forskellige tal i en række) er $1$, og alle andre tal i pivotsøjlen er $0$.

*Eksempel.* Matricen i det sidste skridt ovenfor er på reduceret trappeform med pivot i begge søjler.

### Rang

Rangen af $\mathbf{A}$ er antallet af pivotelementer i dens reducerede trappeform (Definition 6.3.3).

*Eksempel.* Matricen ovenfor har rang 2.

### Fuldstændig løsning og frie parametre

Søjler uden pivot svarer til frie parametre. Man udtrykker de øvrige ubekendte ved dem (afsnit 6.4). For et inhomogent system er løsningen en partikulær løsning plus løsningen til det tilhørende homogene system (Sætning 6.1.2).

*Eksempel.* $x + y + z = 3$, $y - z = 1$. Sæt $z = t$: $y = 1 + t$, $x = 2 - 2t$. Kontrol: $x + y + z = 2 - 2t + 1 + t + t = 3$.
## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Egenskaber af lineære ligningssystemer (spørgsmål a til d)
- Opgave 2: Totalmatrix og rækkeoperationer (spørgsmål a til e)
- Opgave 3: Trappematricer. (spørgsmål a til b)
- Opgave 4: Reduceret trappeform af en $4 \times 5$ matrix.
- Opgave 5: Relation mellem trappematrix og reduceret trappematrix (spørgsmål a til b)
- Opgave 6: Eksempler på lineære ligningssystemer (spørgsmål a til c)
- Opgave 7: Et system med fire ligninger og fire ubekendte (spørgsmål a til b)
- Opgave 8: Kvadratiske matricer og tilhørende lineære ligningssystemer (ét spørgsmål, a)
- Opgave 9: Reduceret trappeform (spørgsmål a til b)

**Lille Dag**

- Opgave 1: Pivot-elementer i en reduceret trappematrix (spørgsmål a til b)
- Opgave 2: Rang af en matrix
- Opgave 3: Parameterfremstilling med en fri parameter (spørgsmål a til d)
- Opgave 4: Parameterfremstilling med flere frie parametre (spørgsmål a til d)
- Opgave 5: Et inhomogent system
- Opgave 6: Tre eksempler på lineære ligningssystemer

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
