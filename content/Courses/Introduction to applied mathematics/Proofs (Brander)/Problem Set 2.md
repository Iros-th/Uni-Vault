---
publish: true
title: Problem Set 2
course: Introduction to applied mathematics
date: 2026-09-08
type: problem-set
source: Beviser (Brander, Problem Set Two)
tags:
  - applied-math
  - proofs
  - "02525"
  - problem-set
  - induction
  - fibonacci
---

# Problem Set 2

Full question text (verbatim from the handout) with a worked solution for every problem.

## Problem 1

Let $\mathbb{Z}$ denote the integers and $2\mathbb{Z}$ the even integers. Prove that the cardinality of $\mathbb{Z}$ and $2\mathbb{Z}$ is the same: $|\mathbb{Z}| = |2\mathbb{Z}|$.

Two sets have the same cardinality when there is a [[Glossary#bijection|bijection]] between them, so we build one. Define $f : \mathbb{Z} \to 2\mathbb{Z}$ by $f(n) = 2n$. It is [[Glossary#injective|injective]]: if $2n = 2m$ then $n = m$. It is [[Glossary#surjective|surjective]]: any even integer has the form $2k$ for some integer $k$, and $f(k) = 2k$ hits it. So $f$ is a bijection and $|\mathbb{Z}| = |2\mathbb{Z}|$, even though the evens are a proper subset of the integers.

## Problem 2

Let $S_k = \{1, 2, \dots, k\}$. How many subsets does $S_k$ have? Prove your result by induction.

The answer is $2^k$. We argue by [[Glossary#induction|induction]] on $k$.

Base case $k = 1$: $S_1 = \{1\}$ has exactly the two subsets $\varnothing$ and $\{1\}$, and $2^1 = 2$. (If one prefers to start at $k = 0$, the empty set $S_0 = \varnothing$ has the single subset $\varnothing$, and $2^0 = 1$.)

Inductive step: assume $S_k$ has $2^k$ subsets and look at $S_{k+1} = S_k \cup \{k+1\}$. Every subset of $S_{k+1}$ either omits $k+1$ or contains it. The subsets omitting $k+1$ are exactly the subsets of $S_k$, so there are $2^k$ of them. The subsets containing $k+1$ are exactly the subsets of $S_k$ with $k+1$ adjoined, so there are again $2^k$ of them. In total

$$2^k + 2^k = 2^{k+1},$$

which is the claim for $k+1$. By induction $S_k$ has $2^k$ subsets for all $k$.

## Problem 3

Prove the identity

$$\frac{1}{1 \cdot 2} + \frac{1}{2 \cdot 3} + \cdots + \frac{1}{n(n+1)} = \frac{n}{n+1} \qquad \text{for all } n \ge 1.$$

By induction on $n$. Base case $n = 1$: the left side is $\frac{1}{1 \cdot 2} = \frac{1}{2}$ and the right side is $\frac{1}{2}$, so it holds.

Inductive step: assume $\sum_{i=1}^{k} \frac{1}{i(i+1)} = \frac{k}{k+1}$. Adding the next term,

$$\frac{k}{k+1} + \frac{1}{(k+1)(k+2)} = \frac{k(k+2) + 1}{(k+1)(k+2)} = \frac{k^2 + 2k + 1}{(k+1)(k+2)} = \frac{(k+1)^2}{(k+1)(k+2)} = \frac{k+1}{k+2}.$$

That is the identity with $n = k+1$, so by induction it holds for all $n \ge 1$.

## Problem 4

Find a bijection between the open interval $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ and the set $\mathbb{R}$ of all real numbers.

Take $f(x) = \tan(x)$ on $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$. It is injective because $\tan$ is strictly increasing there, so distinct inputs give distinct outputs. It is surjective because $\tan(x) \to -\infty$ as $x \to -\frac{\pi}{2}^{+}$ and $\tan(x) \to +\infty$ as $x \to \frac{\pi}{2}^{-}$, and being continuous it takes every value in between (intermediate value theorem). So $\tan$ is a bijection from the interval onto $\mathbb{R}$, with inverse $\arctan$.

## Problem 5 (hand-in, Week 2)

This is the assignment problem. It is written up on its own in [[Aflevering 1]]. The setup and verdicts:

The [[Glossary#fibonacci|Fibonacci]] sequence is $F(0) = 0$, $F(1) = 1$, $F(n) = F(n-1) + F(n-2)$ for $n \ge 2$. Statement A claims there is an $n_0$ with $F(n) < n^2$ for all $n \ge n_0$; statement B claims there is an $n_0$ with $F(n) > n^2$ for all $n \ge n_0$. **A is false and B is true.** The full [[Glossary#strong-induction|strong induction]] proof of B and the disproof of A are in [[Aflevering 1]].

## Problem 6

Prove part (2) of Theorem 3.5: every complex number $z \ne 0$ has a unique multiplicative inverse, that is, a number $z^{-1}$ satisfying $z \cdot z^{-1} = z^{-1} \cdot z = 1$.

Existence. Write $z = a + bi$ with $a, b$ real and not both zero, so $a^2 + b^2 > 0$. Then

$$z^{-1} = \frac{a - bi}{a^2 + b^2}$$

satisfies $z \cdot z^{-1} = \frac{(a+bi)(a-bi)}{a^2+b^2} = \frac{a^2 + b^2}{a^2 + b^2} = 1$, and likewise $z^{-1} \cdot z = 1$ by commutativity.

Uniqueness. Suppose $w$ and $w'$ both satisfy $z \cdot w = 1$ and $z \cdot w' = 1$. Then, using associativity,

$$w = w \cdot 1 = w \cdot (z \cdot w') = (w \cdot z) \cdot w' = 1 \cdot w' = w'.$$

So the multiplicative inverse is unique.

## Problem 7

The nonzero complex numbers $\mathbb{C} \setminus \{0\}$ with multiplication form a group. Recall a group is a set $G$ with a binary operation $* : G \times G \to G$ that is associative, has an identity $e$ with $e * x = x * e = x$, and gives every $x$ an inverse $x^{-1}$ with $x * x^{-1} = x^{-1} * x = e$. For each of the following, determine with proof whether it is a group under composition:

- the set of bijective maps $f : \mathbb{R} \to \mathbb{R}$;
- the set of injective maps $f : \mathbb{R} \to \mathbb{R}$.

The bijective maps **form a group**. Composition of two bijections is again a bijection, so the operation stays inside the set (closure). Composition of functions is always associative, $(f \circ g) \circ h = f \circ (g \circ h)$. The identity map $\mathrm{id}(x) = x$ is a bijection and satisfies $f \circ \mathrm{id} = \mathrm{id} \circ f = f$. Finally every bijection $f$ has a two-sided inverse $f^{-1}$, which is itself a bijection, with $f \circ f^{-1} = f^{-1} \circ f = \mathrm{id}$. All axioms hold.

The injective maps **do not form a group**. Closure, associativity and the identity are fine (the identity is injective, and a composition of injective maps is injective). The inverse axiom fails: an injective map need not be surjective, and without surjectivity there is no map $g$ with $f \circ g = \mathrm{id}$, since $f \circ g = \mathrm{id}$ would force $f$ to hit every real. Concretely $f(x) = e^{x}$ is injective from $\mathbb{R}$ to $\mathbb{R}$, but its image is only $(0, \infty)$, so no map $g : \mathbb{R} \to \mathbb{R}$ can satisfy $f \circ g = \mathrm{id}_{\mathbb{R}}$. With no inverse for $e^x$ inside the set, the group axioms fail.

## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part I]]
- [[Proofs Part II]]
- [[Problem Set 1]]
- [[Aflevering 1]]
