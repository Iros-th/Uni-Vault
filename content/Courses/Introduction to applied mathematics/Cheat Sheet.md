---
publish: true
title: Applied Math Cheat Sheet
course: Introduction to applied mathematics
type: cheatsheet
tags:
  - applied-math
  - proofs
  - induction
  - cheatsheet
---

# Applied math cheat sheet

The proof toolkit on one page. This is the "which method do I reach for" reminder, not the full explanation. Follow a link if you want the worked version.

## Which proof method?

| Statement looks like | Try |
|----------------------|-----|
| "if $P$ then $Q$", definitions give you something | direct proof |
| the negation is easier to argue than the original | contrapositive |
| hard to attack head on, or an "only" / "no" claim | contradiction |
| "for all ... " that you suspect is false | one counterexample |
| "true for every $n$ from some point on" | induction |
| the step reaches back more than one term | strong induction |

## The methods

**Direct.** Assume $P$, use definitions and known facts, arrive at $Q$. Example: even + even is even, since $2m + 2n = 2(m+n)$.

**Contrapositive.** "if $P$ then $Q$" is the same statement as "if not $Q$ then not $P$". Prove the second. Example: if $n^2$ is even then $n$ is even, shown by "if $n$ is odd then $n^2$ is odd".

**Contradiction.** Assume the claim is false, derive something impossible. Example: $\sqrt{2}$ is irrational. Assume $\sqrt{2} = p/q$ in lowest terms, get $p^2 = 2q^2$, so both $p$ and $q$ are even, which breaks "lowest terms".

**Counterexample.** One case where a "for all" claim fails kills it. Example: $x^2 + 1 = 0$ has no real root, so "every degree 2 polynomial has a real root" is false. It only disproves, never proves.

## Induction, step by step

1. **Base case.** Check $P$ at the starting value (often $n = 1$).
2. **Assume** $P(k)$ (the induction hypothesis).
3. **Step.** Prove $P(k+1)$ using that assumption.
4. Both hold, so $P(n)$ holds for all $n$ from the base up.

$$1 + 2 + \dots + n = \frac{n(n+1)}{2}$$

Strong induction: in the step you may assume $P$ for all values up to $k$, not just $k$ itself. You need as many base cases as the number of earlier terms the step reaches back to. If the step uses $P(k)$ and $P(k-1)$, check two base cases.

## Facts worth having ready

- A bijection is injective (different inputs, different outputs) and surjective (every output hit). If one exists between $A$ and $B$, then $\abs{A} = \abs{B}$.
- The map $f(n) = 2n$ shows $\abs{\Z} = \abs{2\Z}$, even though the evens sit inside $\Z$.
- A set of $k$ elements has $2^k$ subsets, since each new element doubles the count.
- Fibonacci: $F(1) = F(2) = 1$, $F(n) = F(n-1) + F(n-2)$.

## Links

- [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Course overview]]
- [[Proofs Part I]]
- [[Proofs Part II]]
- [[Flashcards/Proofs Flashcards|Proofs flashcards]]
- [[Self-Tests/Proofs Test|Proofs self-test]]
