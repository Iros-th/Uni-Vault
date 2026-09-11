---
title: Aflevering 1
publish: false
tags:
  - aflevering
  - diskret-matematik
---

# Aflevering 1

## Opgave A: who's lying?

> On a remote island there are two types of people:
> - Truth sayers, that always tell the truth.
> - Liars, that always lie.

### Peter and Signe
Peter siger: "At least one of us is a liar", skrevet $\lnot p \lor \lnot s$.
En sandhedstabel giver overblikket:

| $p$ | $s$ | $\lnot p \lor \lnot s$ |
| --- | --- | ---------------------- |
| T   | T   | F                      |
| T   | F   | T                      |
| F   | T   | T                      |
| F   | F   | T                      |

De kan ikke begge tale sandt, for så er udsagnet falsk (række 1).
Peter kan ikke lyve, for hvis $p = F$ skulle udsagnet være falsk, hvilket kræver $p = T \land s = T$, modstrid.
Dermed er $p = T$ og $s = F$. Peter taler sandt og Signe lyver.

### Anne and Bob
Anne siger: "If Bob is a liar, then I am also a liar", dvs. $\lnot b \rightarrow \lnot a \equiv a \rightarrow b$.
Hvis Anne lyver ($a = F$), bliver implikationen $F \rightarrow b$ automatisk sand, hvilket ville betyde hun talte sandt. Modstrid.
Altså må Anne tale sandt ($a = T$), og da $a \rightarrow b$ er sand, må $b = T$. Begge er sandhedssigere.

## Opgave B: claims in predicate logic
- $C(x)$: $x$ har en computer
- $F(x, y)$: $x$ og $y$ er venner
- $S(x)$: $x$ er studerende

1. $\forall x (S(x) \rightarrow C(x))$
2. $\exists x (S(x) \land \lnot C(x))$
3. $\forall x (S(x) \rightarrow \exists y (S(y) \land x \neq y \land F(x, y)))$
4. $\lnot \exists x (S(x) \land \forall y (S(y) \rightarrow F(x, y)))$

## Opgave C: can we conclude that A = B?

1. $A \cup C = B \cup C$:
Nej, vi kan ikke konkludere $A = B$.
Mod-eksempel: Lad $A = \{1\}$, $B = \emptyset$, og $C = \{1\}$.
Her er $A \cup C = \{1\}$ og $B \cup C = \{1\}$, men $A \neq B$.

2. $A \cap C = B \cap C$:
Heller ikke. Mod-eksempel: Lad $A = \{1\}$, $B = \{2\}$, $C = \emptyset$.
Begge snit er den tomme mængde $\emptyset$, men $A \neq B$.

3. Hvad hvis både $A \cup C = B \cup C$ og $A \cap C = B \cap C$?
Ja! Bevis: Lad $x \in A$.
Hvis $x \in C$, så er $x \in A \cap C = B \cap C$, så $x \in B$.
Hvis $x \notin C$, da $x \in A \cup C = B \cup C$, må $x \in B$.
I begge tilfælde er $x \in B$, så $A \subseteq B$. Helt symmetrisk gælder $B \subseteq A$.
Dermed er $A = B$.

## Opgave D: surjective, injective, both or neither

- a) $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 2x+3$:
Injektiv (hvis $2x+3 = 2y+3 \implies x=y$).
Surjektiv (for ethvert $y \in \mathbb{R}$ er $x = (y-3)/2$ et reelt tal med $f(x) = y$).
Altså bijektiv (både injektiv og surjektiv).

- b) $f : \mathbb{N} \to \mathbb{N}$, $f(n) = 2n+3$:
Injektiv ($2n+3 = 2m+3 \implies n=m$).
Ikke surjektiv da den kun rammer ulige tal $\ge 5$ (fx rammes 4 aldrig i $\mathbb{N}$).

- c) $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$:
Hverken injektiv ($(-1)^2 = 1^2$) eller surjektiv (ingen reelle tal kvadrerer til negative tal fx $-4$).

## Opgave E: inverse images of $x^2$
$f(x) = x^2$ på $\mathbb{R}$:
- a) $f^{-1}(\{1\}) = \{-1, 1\}$
- b) $f^{-1}((0, 1)) = (-1, 0) \cup (0, 1)$  (husk 0 er ikke med!)
- c) $f^{-1}(\{x \mid x > 4\}) = (-\infty, -2) \cup (2, \infty)$

## Opgave F: kladde
Skal vise at for endelige mængder med $|A| = |B| = n$ gælder: injektiv hvis og kun hvis surjektiv.
