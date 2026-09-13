---
publish: false
title: Problem Set 1
course: Introduction to applied mathematics
date: 2026-09-08
type: problem-set
source: Beviser (Brander, Problem Set One)
tags:
  - applied-math
  - proofs
  - "02525"
  - problem-set
---

# Problem Set 1

Full question text (verbatim from the handout) with a worked solution for every problem. Standing assumptions from the sheet: we may use the usual algebraic and ordering properties of $\mathbb{Z}$ and $\mathbb{Q}$, we take $\mathbb{Q} \subset \mathbb{R}$ with $\mathbb{R}$ sharing those same properties, every nonzero real has an additive and multiplicative inverse, $\sqrt{2}$ exists as a positive real with $(\sqrt{2})^2 = 2$, and $\sqrt{2}$ has already been shown to be [[Glossary#irrational-number|irrational]].

## Problem 1

The real and complex numbers are both examples of a field. Using the field axioms, prove that the multiplicative identity element $1$ is necessarily unique, that is, that it is the only element $a$ satisfying $a \cdot x = x$ for all $x$ in the field.

By definition $1$ satisfies $1 \cdot x = x \cdot 1 = x$ for every $x$. Suppose some element $a$ also satisfies $a \cdot x = x$ for all $x$. Using $a$'s property with $x = 1$ gives $a \cdot 1 = 1$. On the other hand, $1$ being an identity gives $a \cdot 1 = a$. The left sides agree, so $a = a \cdot 1 = 1$. Any element behaving like a multiplicative identity is therefore equal to $1$, so the identity is unique.

## Problem 2

Prove or disprove:

1. If $r$ is irrational then $\frac{1}{r}$ is also irrational.
2. If $q$ is rational and $r$ is irrational then $q + r$ is irrational.

Statement (1) is **true**. Since $0$ is rational, an irrational $r$ is nonzero, so $\frac{1}{r}$ exists. Suppose for contradiction that $\frac{1}{r}$ is rational, say $\frac{1}{r} = \frac{m}{n}$ with $m, n$ integers. Because $\frac{1}{r} \ne 0$ we have $m \ne 0$, so we may invert again: $r = \frac{n}{m}$, a ratio of integers, hence rational. That contradicts $r$ being irrational, so $\frac{1}{r}$ is irrational.

Statement (2) is **true**. Write $q = \frac{m}{n}$ and suppose for contradiction that $q + r$ is rational, say $q + r = \frac{a}{b}$. Then

$$r = \frac{a}{b} - \frac{m}{n} = \frac{an - mb}{bn},$$

which is a ratio of integers with nonzero denominator, hence rational. This contradicts $r$ irrational, so $q + r$ is irrational.

## Problem 3

Prove or disprove:

1. For every integer $n \in \mathbb{Z}$, the number $n + \sqrt{2}$ is irrational.
2. There is a largest irrational number.
3. Given a positive rational $q \in \mathbb{Q}$, one can find an irrational $r$ with $0 < r < q$.
4. Between any two distinct rational numbers lies an irrational number.

Statement (1) is **true**. An integer $n$ is rational and $\sqrt{2}$ is irrational, so this is exactly Problem 2(2) with $q = n$ and $r = \sqrt{2}$: the sum $n + \sqrt{2}$ is irrational.

Statement (2) is **false**. If $x$ is any irrational number, then $x + 1$ is again irrational by Problem 2(2), and $x + 1 > x$. So no irrational number can be the largest. (Part (1) makes the same point concretely: $n + \sqrt{2}$ is irrational for every $n$ and grows without bound.)

Statement (3) is **true**. Take $r = \frac{q}{\sqrt{2}}$. Since $q$ is a nonzero rational and $\frac{1}{\sqrt{2}}$ is irrational, $r$ is a nonzero rational times an irrational, hence irrational by Problem 5(4). Because $\sqrt{2} > 1$ we have $0 < \frac{q}{\sqrt{2}} < q$, so $r$ lands strictly between $0$ and $q$.

Statement (4) is **true**. Let $p < q$ be distinct rationals. Set

$$r = p + \frac{q - p}{\sqrt{2}}.$$

The gap $q - p$ is a positive rational, so $\frac{q-p}{\sqrt{2}}$ is irrational and lies strictly between $0$ and $q - p$ (again because $\sqrt{2} > 1$). Therefore $p < r < q$. Finally $r$ is a rational plus an irrational, so it is irrational by Problem 2(2).

## Problem 4

Prove or disprove: there is no rational number $x$ satisfying $x^2 = \frac{3}{25}$.

The statement is **true**: no such rational exists. Suppose for contradiction that $x = \frac{a}{b}$ is rational and in lowest terms (so $a$ and $b$ share no common factor) with $x^2 = \frac{3}{25}$. Then

$$\frac{a^2}{b^2} = \frac{3}{25}, \qquad \text{so} \qquad 25 a^2 = 3 b^2.$$

The right side is divisible by $3$, so $3 \mid 25 a^2$. Since $3 \nmid 25$, we get $3 \mid a^2$, and because $3$ is prime, $3 \mid a$. Write $a = 3k$. Substituting, $25 \cdot 9 k^2 = 3 b^2$, that is $b^2 = 75 k^2 = 3 (25 k^2)$, so $3 \mid b^2$ and hence $3 \mid b$. Now $3$ divides both $a$ and $b$, contradicting that the fraction was in lowest terms. So no rational $x$ satisfies $x^2 = \frac{3}{25}$.

## Problem 5 (hand-in, Week 2)

This is the assignment problem. It is written up on its own in [[Aflevering 1]]. For completeness the four statements and their verdicts:

1. The product of any two rational numbers is rational. **True.**
2. The product of any two irrational numbers is irrational. **False** ($\sqrt{2} \cdot \sqrt{2} = 2$).
3. The product of a rational number and an irrational number is irrational. **False** ($0 \cdot \sqrt{2} = 0$).
4. The product of a nonzero rational number and an irrational number is irrational. **True.**

The full proofs are in [[Aflevering 1]].

## Problem 6

Using the field axioms, prove that the additive and multiplicative inverse of a given element are necessarily unique.

Additive inverse. Fix an element $a$ and suppose $b$ and $b'$ are both additive inverses, so $a + b = 0$ and $a + b' = 0$. Then, using $0$ as the additive identity and associativity,

$$b = b + 0 = b + (a + b') = (b + a) + b' = 0 + b' = b'.$$

(Here $b + a = a + b = 0$ by commutativity.) So the additive inverse is unique.

Multiplicative inverse. Fix a nonzero element $a$ and suppose $c$ and $c'$ are both multiplicative inverses, so $a \cdot c = 1$ and $a \cdot c' = 1$. Then

$$c = c \cdot 1 = c \cdot (a \cdot c') = (c \cdot a) \cdot c' = 1 \cdot c' = c'.$$

So the multiplicative inverse is unique.

## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part I]]
- [[Proofs Part II]]
- [[Problem Set 2]]
- [[Aflevering 1]]
