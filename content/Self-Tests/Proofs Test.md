---
publish: true
title: Proofs Test
course: Introduction to applied mathematics
type: self-test
tags:
  - self-test
  - proofs
  - induction
  - applied-math
---

# Proofs and induction self-test

Ten questions from the Brander proof notes and problem sets. Work each one out first, then click "Show answer". No score is kept.

**1.** State what a proof is and what it means for a step to be "forced".

> [!success]- Show answer
> A proof is a chain of logically valid steps from things we already accept (axioms and proven theorems) to the claim. A step is forced when a reader cannot ask "why does that follow", it is a necessary consequence of what came before.

**2.** You want to prove "if $P$ then $Q$" but the negations look easier to handle. Which method fits, and what do you prove instead?

> [!success]- Show answer
> Proof by contrapositive. You prove "if not $Q$ then not $P$", which is logically the same statement.

**3.** Sketch the contradiction argument that $\sqrt{2}$ is irrational.

> [!success]- Show answer
> Assume $\sqrt{2} = \frac{p}{q}$ in lowest terms. Squaring gives $p^2 = 2q^2$, so $p^2$ is even and therefore $p$ is even, say $p = 2k$. Substituting gives $q^2 = 2k^2$, so $q$ is even too. Now $p$ and $q$ share a factor of 2, contradicting lowest terms. So $\sqrt{2}$ is irrational.

**4.** What two properties must a map have to be a bijection, and what does a bijection tell you about the two sets?

> [!success]- Show answer
> It must be injective (different inputs give different outputs) and surjective (every output is hit). If a bijection between $A$ and $B$ exists, then $|A| = |B|$.

**5.** Give the bijection showing $|\mathbb{Z}| = |2\mathbb{Z}|$ and say why it works.

> [!success]- Show answer
> Use $f(n) = 2n$ from $\mathbb{Z}$ to $2\mathbb{Z}$. Injective: if $2n = 2m$ then $n = m$. Surjective: any even number is $2k$ and $f(k) = 2k$. So it is a bijection and the sets have the same size.

**6.** What are the two ingredients of an ordinary induction proof?

> [!success]- Show answer
> A base case, where you check $P$ holds at the starting value, and an inductive step, where you assume $P(k)$ and prove $P(k+1)$.

**7.** Prove by induction that a set of $k$ elements has $2^k$ subsets (give the idea).

> [!success]- Show answer
> Base: the empty set has 1 subset, and $2^0 = 1$. Step: assume $S_k$ has $2^k$ subsets. Adding a new element, each old subset either takes it or does not, so the count doubles to $2^k + 2^k = 2^{k+1}$.

**8.** When do you reach for strong induction instead of ordinary induction, and how does the number of base cases change?

> [!success]- Show answer
> Use strong induction when the step needs values further back than one step. You need as many base cases as the number of earlier terms the step depends on. If it uses $P(k)$ and $P(k-1)$, you need two base cases.

**9.** State the Fibonacci recurrence and explain why proving $F(n) > n^2$ for $n \ge 14$ needs two base cases.

> [!success]- Show answer
> The recurrence is $F(1) = 1$, $F(2) = 1$, $F(n) = F(n-1) + F(n-2)$ for $n \ge 3$. The step uses the two previous terms, so it reaches back two steps. With only one base case the first application would reach below where anything is checked. The two base cases are $F(14) = 377 > 196$ and $F(15) = 610 > 225$.

**10.** In the Fibonacci step, show that $k^2 + (k-1)^2 > (k+1)^2$ for $k \ge 14$.

> [!success]- Show answer
> Compute the difference: $k^2 + (k-1)^2 - (k+1)^2 = (2k^2 - 2k + 1) - (k^2 + 2k + 1) = k^2 - 4k = k(k-4)$. This is positive whenever $k > 4$, so it certainly holds for $k \ge 14$.

## Links

- [[Self-Tests]]
- [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Introduction to Applied Mathematics]]
- [[Flashcards]]
