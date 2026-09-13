---
publish: false
title: Aflevering 1
course: Introduction to applied mathematics
date: 2026-09-13
type: aflevering
source: Beviser (Brander) - Aflevering 1
tags:
  - applied-math
  - proofs
  - "02525"
  - aflevering
---

# Aflevering 1

Verified final solutions to the graded hand-in. Problems 1 to 4 are about products of [[Glossary#rational-number|rational]] and [[Glossary#irrational-number|irrational]] numbers; problem 5 is a [[Glossary#strong-induction|strong induction]] on the Fibonacci numbers. This note is kept private (`publish: false`) because it is the assignment answer sheet.

## Problem 1: the product of two rational numbers is rational (true)

Let $x$ and $y$ be rational. By definition we can write $x = \frac{a}{b}$ and $y = \frac{c}{d}$ with $a, b, c, d$ integers and $b, d \ne 0$. Then

$$x y = \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}.$$

Here $ac$ and $bd$ are integers, and $bd \ne 0$ since neither $b$ nor $d$ is zero. So $xy$ is a ratio of two integers with nonzero denominator, which is exactly what it means to be rational. The claim is true.

## Problem 2: the product of two irrational numbers is irrational (false)

This is false, and a single counterexample settles it. The number $\sqrt{2}$ is irrational, yet

$$\sqrt{2} \cdot \sqrt{2} = 2,$$

which is rational. So two irrational numbers can have a rational product, and the claim fails.

## Problem 3: the product of a rational and an irrational number is irrational (false)

As stated the claim is false, because it allows the rational factor to be $0$. Take the rational number $0$ and any irrational $i$. Then

$$0 \cdot i = 0,$$

which is rational, not irrational. So the property does not hold for every rational number, and the claim is false.

It is worth seeing exactly where a naive proof breaks down. Suppose we tried to argue by contradiction: write the rational factor as $r = \frac{a}{b}$ and assume the product $r i = \frac{c}{d}$ is rational. Solving for $i$ gives

$$i = \frac{c b}{d a},$$

a ratio of integers, which would contradict $i$ being irrational. But dividing by $a$ is only valid when $a \ne 0$, that is when $r \ne 0$. The argument says nothing about $r = 0$, and $r = 0$ is precisely the case that makes the claim false. Adding the assumption that the rational factor is nonzero repairs the statement, which is problem 4.

## Problem 4: the product of a nonzero rational and an irrational number is irrational (true)

Let $r$ be a nonzero rational and $i$ irrational. Write $r = \frac{a}{b}$ with $a, b$ integers; since $r \ne 0$ we have $a \ne 0$, and $b \ne 0$ as always. Suppose for contradiction that the product is rational, say

$$r i = \frac{c}{d}, \qquad c, d \text{ integers}, \ d \ne 0.$$

Solving for $i$,

$$i = \frac{c}{d r} = \frac{c b}{d a}.$$

Because $a \ne 0$ and $d \ne 0$, the numerator $cb$ and denominator $da$ are integers with $da \ne 0$, so $i$ is rational. This contradicts $i$ being irrational. Hence $r i$ cannot be rational, so it is irrational. The claim is true.

The assumption $a \ne 0$ is used in an essential way when dividing by $a$; that is the exact assumption missing in problem 3.

## Problem 5: there is an $n_0$ with $F(n) > n^2$ for all $n > n_0$ (true)

The Fibonacci numbers are $F(0) = 0$, $F(1) = 1$, and $F(n) = F(n-1) + F(n-2)$ for $n > 1$. We prove the statement by strong induction with $n_0 = 12$; that is, $F(n) > n^2$ for all $n \ge 13$.

Two base cases are needed, because the step for $F(k+1)$ uses both $F(k)$ and $F(k-1)$:

$$F(13) = 233 > 169 = 13^2, \qquad F(14) = 377 > 196 = 14^2.$$

Both hold.

Induction hypothesis: fix $k \ge 14$ and assume $F(m) > m^2$ for every integer $m$ with $13 \le m \le k$.

Inductive step: we show $F(k+1) > (k+1)^2$. Since $k \ge 14$, both $k$ and $k-1$ lie in the range $[13, k]$, so the hypothesis gives $F(k) > k^2$ and $F(k-1) > (k-1)^2$. Adding these,

$$F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2 = 2k^2 - 2k + 1.$$

It remains to check that $2k^2 - 2k + 1 \ge (k+1)^2$. Their difference is

$$\left(2k^2 - 2k + 1\right) - \left(k^2 + 2k + 1\right) = k^2 - 4k = k(k-4),$$

which is positive for $k \ge 14$. Therefore

$$F(k+1) > k^2 + (k-1)^2 > (k+1)^2.$$

The two base cases together with the step cover every $n \ge 13$, so $F(n) > n^2$ for all $n > 12$. The claim is true.

## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part I]]
- [[Proofs Part II]]
- [[Problem Set 1]]
- [[Problem Set 2]]
