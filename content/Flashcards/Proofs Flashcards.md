---
publish: true
title: Proofs Flashcards
course: Introduction to applied mathematics
type: flashcards
tags:
  - flashcards
  - proofs
  - induction
  - applied-math
---

# Proofs and induction flashcards

Click a card to flip it and see the answer. Questions come from the Brander proof notes and problem sets. Answer in your head first, then check.

## Proof methods

> [!question]- What is a proof, in one sentence?
> A chain of logically valid steps that starts from things we already accept (axioms and proven theorems) and ends at the claim, with every step forced.

> [!question]- What is an axiom?
> A statement we accept as true without proving it, the foundation everything else is built on. For example, addition of real numbers is commutative, $a + b = b + a$.

> [!question]- How does a direct proof work?
> Assume the hypothesis $P$ is true, then walk straight to the conclusion $Q$ using definitions and known facts.

> [!question]- How does proof by contradiction work?
> Assume the claim is false, then show that assumption forces something impossible. Since it cannot be false, it must be true.

> [!question]- What is the contrapositive of "if $P$ then $Q$"?
> "If not $Q$ then not $P$". It is logically the same statement, so proving it counts as proving the original.

> [!question]- What does a single counterexample achieve?
> It disproves a "for all" claim. One case where the statement fails is enough. It does not prove anything positive.

## Worked results

> [!question]- Why is $\sqrt{2}$ irrational (the shape of the argument)?
> Assume $\sqrt{2} = \frac{p}{q}$ in lowest terms. Then $p^2 = 2q^2$, so $p$ is even, say $p = 2k$. Substituting forces $q$ to be even too, but then $p$ and $q$ share a factor of 2, contradicting lowest terms.

> [!question]- What is the sum $1 + 2 + \dots + n$?
> $\frac{n(n+1)}{2}$. You can see it by pairing each $k$ with $n + 1 - k$, since every pair sums to $n + 1$.

> [!question]- What makes a map a bijection?
> It is both injective (different inputs give different outputs) and surjective (every output is hit). If a bijection exists, the two sets have the same size, $|A| = |B|$.

> [!question]- Why do the even integers have the same size as all the integers?
> The map $f(n) = 2n$ from $\mathbb{Z}$ to $2\mathbb{Z}$ is a bijection: it is injective and surjective. So $|\mathbb{Z}| = |2\mathbb{Z}|$ even though the evens are a strict subset.

## Induction

> [!question]- What are the two ingredients of a proof by induction?
> A base case (check $P$ holds at the starting value) and an inductive step (assume $P(k)$, then prove $P(k+1)$).

> [!question]- How is strong induction different from ordinary induction?
> In the step you get to assume $P$ holds for all values up to $k$, not just the single previous one. Use it when the argument reaches back more than one step.

> [!question]- How many base cases does strong induction need?
> As many as the number of earlier terms the step depends on. If the step uses $P(k)$ and $P(k-1)$, you need two base cases, otherwise the first step reaches below anything you checked.

> [!question]- How many subsets does a set of $k$ elements have, and why?
> $2^k$. Adding one new element doubles the count, because each old subset either takes the new element or does not.

## Fibonacci problem (P5)

> [!question]- What is the Fibonacci recurrence?
> $F(1) = 1$, $F(2) = 1$, and $F(n) = F(n-1) + F(n-2)$ for $n \ge 3$.

> [!question]- Why does proving $F(n) > n^2$ for $n \ge 14$ need two base cases?
> Because the recurrence uses the two previous terms $F(k)$ and $F(k-1)$, so the step reaches back two steps. With one base case the first application would reach below where anything is checked. The two base cases are $F(14) = 377 > 196$ and $F(15) = 610 > 225$.

> [!question]- In the Fibonacci step, why is $k^2 + (k-1)^2 > (k+1)^2$ for $k \ge 14$?
> Because $k^2 + (k-1)^2 - (k+1)^2 = k^2 - 4k = k(k-4)$, which is positive whenever $k > 4$. So the sum of the two lower bounds already clears $(k+1)^2$.

## Links

- [[Flashcards]]
- [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Introduction to Applied Mathematics]]
- [[Glossary]]
