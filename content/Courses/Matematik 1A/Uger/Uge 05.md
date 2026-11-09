---
publish: true
title: "Matematik 1A uge 5: divisionsalgoritmen og induktion"
course: Matematik 1A
type: week
week: 5
tags:
  - matematik-1a
  - ugenote
---

# Uge 5: Divisionsalgoritmen og induktion

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 5 og Opgaver Store Dag/Lille Dag uge 5. Bogen er kursets lærebog (udgave 2026).

## Emner

- Divisionsalgoritmen for polynomier, rod mod faktor, multiplicitet af rødder, induktion.
- Pensum: Afsnit 5.5 og 5.6 i kapitel 5 samt afsnit 3.3, 3.4 og 3.5 i kapitel 3. Store Dag: afsnit 5.5 og 5.6. Lille Dag: afsnit 3.3, 3.4 og 3.5.

## Begreber

### Divisionsalgoritmen

For polynomier $f$ og $g \neq 0$ findes kvotient $q$ og rest $r$ med $f = q g + r$, hvor $r$ er $0$ eller har lavere grad end $g$ (afsnit 5.5).

*Eksempel.* $x^3 - 2x + 1 = (x-1)(x^2 + x - 1) + 0$. Kontrol: $(x-1)(x^2+x-1) = x^3 + x^2 - x - x^2 - x + 1 = x^3 - 2x + 1$.

### Rod og faktor

$z_0$ er rod i $p$ præcis når $(z - z_0)$ er en faktor i $p$. Det følger af divisionsalgoritmen, fordi resten ved division med $z - z_0$ er $p(z_0)$.

*Eksempel.* $p(x) = x^3 - 2x + 1$ har $p(1) = 0$, så $(x - 1)$ er en faktor, som ovenfor.

### Multiplicitet

Roden $z_0$ har multiplicitet $m$, hvis $(z - z_0)^m$ går op i $p$, men $(z - z_0)^{m+1}$ ikke gør (Definition 5.6.1).

*Eksempel.* $p(x) = (x-2)^2 (x+1)$ har roden $2$ med multiplicitet $2$ og roden $-1$ med multiplicitet $1$.

### Induktion

For at vise $P(n)$ for alle $n \ge n_0$ viser man basis $P(n_0)$ og induktionsskridtet: hvis $P(n)$ gælder, så gælder $P(n+1)$.

*Eksempel.* Påstand: $1 + 3 + 5 + \dots + (2n-1) = n^2$. Basis: $n = 1$ giver $1 = 1$. Skridt: $n^2 + (2n+1) = (n+1)^2$.

### Geometrisk række

For $q \ne 1$ er $\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q}$. Den kan bevises ved induktion.

*Eksempel.* $\sum_{k=0}^{3} 2^k = 1 + 2 + 4 + 8 = 15 = \frac{1 - 2^4}{1 - 2}$.

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Divisionsalgoritmen (spørgsmål a til b)
- Opgave 2: Multiplicitet af rødder (spørgsmål a til b)
- Opgave 3: Polynomiets rødder og koefficienter (ét spørgsmål, a)
- Opgave 4: Et tredjegradspolynomium (spørgsmål a til c)
- Opgave 5: Reelle rødder (ét spørgsmål, a)
- Opgave 6: At faktorisere for at kunne forkorte
- Opgave 7: Faktorer med reelle koefficienter
- Opgave 8: Komplekse rødder og faktorer med reelle koefficienter (spørgsmål a til c)

**Lille Dag**

- Opgave 1: Repetitionsopgave om rekursion og sumtegnet (spørgsmål a til b)
- Opgave 2: Summen af ulige tal og induktion (spørgsmål a til c)
- Opgave 3: Den geometriske række (spørgsmål a til c)
- Opgave 4: En hoppebold og den geometriske række (spørgsmål a til b)
- Opgave 5: En ulighed (spørgsmål a til b)

## Tjek dig selv

- [ ] Hvad siger divisionsalgoritmen?
- [ ] Hvordan afgør jeg, om $(x - 2)$ er en faktor i et polynomium?
- [ ] Hvordan bestemmer jeg multipliciteten af en rod?
- [ ] Hvilke to skridt har et induktionsbevis?
- [ ] Hvad er formlen for en geometrisk sum?
- [ ] Hvordan faktoriserer jeg et polynomium med reelle koefficienter, når der er komplekse rødder?

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
