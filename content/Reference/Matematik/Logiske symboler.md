---
title: Logiske Symboler, Sandhedstabeller & Regneregler
publish: true
type: reference
tags:
  - matematik
  - logik
  - diskret-matematik
---

# Logiske Symboler & Sandhedstabeller

Oversigt over udsagnslogik, konnektiver, sandhedstabeller og ækvivalensregler fra diskret matematik.

## 1. Sandhedstabeller for de grundlæggende konnektiver

| $P$ | $Q$ | Negation $\neg P$ | Konjunktion $P \land Q$ | Disjunktion $P \lor Q$ | Implikation $P \implies Q$ | Biimplikation $P \iff Q$ | XOR $P \oplus Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | 0 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |

> [!NOTE]
> **Vigtigt om implikation**: $P \implies Q$ er kun falsk, hvis forudsætningen $P$ er sand, men konklusionen $Q$ alligevel er falsk. Hvis $P$ er falsk, er implikationen altid sand (vakuøst sand).

## 2. Logiske ækvivalenser (Vigtige regneregler)

Lad $T$ være en tautologi (altid sand) og $F$ en modstrid (altid falsk):

- **De Morgans Love**:
  $$\neg(P \land Q) \equiv \neg P \lor \neg Q$$
  $$\neg(P \lor Q) \equiv \neg P \land \neg Q$$
- **Implikationsloven**:
  $$P \implies Q \equiv \neg P \lor Q$$
- **Kontraposition (Kontraponering)**:
  $$P \implies Q \equiv \neg Q \implies \neg P$$
- **Distributive love**:
  $$P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$$
  $$P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$$
- **Dobbelt negation**:
  $$\neg(\neg P) \equiv P$$
- **Modstrid (Reductio ad absurdum)**:
  $$P \land \neg P \equiv F$$

## 3. Prædikater og kvantorer

- **Negation af kvantorer**:
  $$\neg (\forall x \, P(x)) \equiv \exists x \, \neg P(x)$$
  $$\neg (\exists x \, P(x)) \equiv \forall x \, \neg P(x)$$
