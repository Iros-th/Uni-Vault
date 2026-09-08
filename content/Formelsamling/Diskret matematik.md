---
publish: true
title: Formelsamling - Diskret matematik
type: reference
tags:
  - formelsamling
  - diskret-matematik
  - reference
---

# Formelsamling: Diskret matematik

Logik, mængder, kombinatorik og summer samlet på én side. Symbolerne er forklaret i [[Reference/Matematik/Logiske symboler|Logiske symboler]] og [[Reference/Matematik/Matematiske symboler|Matematiske symboler]].

## Logiske ligheder

| Lov | Formel |
|---|---|
| De Morgan | $\neg(P \land Q) \iff \neg P \lor \neg Q$ |
| De Morgan | $\neg(P \lor Q) \iff \neg P \land \neg Q$ |
| Kontraposition | $(P \implies Q) \iff (\neg Q \implies \neg P)$ |
| Implikation | $(P \implies Q) \iff (\neg P \lor Q)$ |
| Distributiv | $P \land (Q \lor R) \iff (P \land Q) \lor (P \land R)$ |

## Mængdelære

$$|A \cup B| = |A| + |B| - |A \cap B|$$

$$|\mathcal{P}(A)| = 2^{|A|}, \qquad |A \times B| = |A|\cdot|B|$$

De Morgan for mængder: $\overline{A \cup B} = \overline{A} \cap \overline{B}$ og $\overline{A \cap B} = \overline{A} \cup \overline{B}$.

## Kombinatorik

| Navn | Formel | Bruges til |
|---|---|---|
| Fakultet | $n! = n\cdot(n-1)\cdots 2 \cdot 1$ | antal ordninger af $n$ ting |
| Permutation | $P(n,k) = \dfrac{n!}{(n-k)!}$ | ordnet udvalg uden gentagelse |
| Kombination | $\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ | uordnet udvalg uden gentagelse |

Binomialformlen: $(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k}$.

## Summer

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}, \qquad \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{i=0}^{n} r^{i} = \frac{r^{n+1}-1}{r-1} \quad (r \neq 1)$$

## Modulo

$$a \equiv b \pmod{m} \iff m \divides (a-b)$$

## Links

- [[Formelsamling/Formelsamling|Formelsamling]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
- [[Reference/Matematik/Logiske symboler|Logiske symboler]]
- [[Glossary]]
