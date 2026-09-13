---
publish: false
title: Aflevering 1
course: Introduction to applied mathematics
date: 2026-09-13
type: aflevering
source: Beviser (Brander) - Problem Set 1 and Problem Set 2 (full), hand-in problems marked
tags:
  - applied-math
  - proofs
  - "02525"
  - aflevering
---

# Aflevering 1

Everything for the first hand-in in one place: every question from Problem Set 1 and Problem Set 2, each with a full worked answer. The two problems that actually get handed in (Problem 5 in each set) are flagged as hand-in. Kept private (`publish: false`) since it holds the graded answers.

Standing assumptions from the sheet: I use the usual algebra and ordering of $\mathbb{Z}$ and $\mathbb{Q}$, take $\mathbb{Q} \subset \mathbb{R}$ with the same properties, assume $\sqrt{2}$ exists with $(\sqrt{2})^2 = 2$, and take it as known that $\sqrt{2}$ is [[Glossary#irrational-number|irrational]].

# Problem Set 1

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

## Problem 5 (hand-in)

Prove or disprove the following statements:

1. The product of any two rational numbers is rational.
2. The product of any two irrational numbers is irrational.
3. The product of a rational number and an irrational number is irrational.
4. The product of a nonzero rational number and an irrational number is irrational.

**Statement (1) is true.** Let $x$ and $y$ be rational, so $x = \frac{a}{b}$ and $y = \frac{c}{d}$ with $a, b, c, d$ integers and $b, d \ne 0$. Then

$$x y = \frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}.$$

Here $ac$ and $bd$ are integers and $bd \ne 0$, so $xy$ is a ratio of integers with nonzero denominator, which is what it means to be rational.

**Statement (2) is false.** One counterexample is enough. The number $\sqrt{2}$ is irrational, yet

$$\sqrt{2} \cdot \sqrt{2} = 2,$$

which is rational. So two irrational numbers can multiply to a rational, and the claim fails.

**Statement (3) is false.** The claim allows the rational factor to be $0$. Taking the rational number $0$ and any irrational $i$,

$$0 \cdot i = 0,$$

which is rational, not irrational. So the property does not hold for every rational number.

It is worth seeing where a tempting proof goes wrong. If we write the rational factor as $r = \frac{a}{b}$, assume $r i = \frac{c}{d}$ is rational, and solve for $i$, we get $i = \frac{cb}{da}$, seemingly rational and so a contradiction. But dividing by $a$ is only legal when $a \ne 0$, that is when $r \ne 0$. The argument never covers $r = 0$, and $r = 0$ is exactly the case that breaks the statement. Ruling out the zero factor is what statement (4) does.

**Statement (4) is true.** Let $r$ be a nonzero rational and $i$ irrational. Write $r = \frac{a}{b}$ with integers $a, b$; since $r \ne 0$ we have $a \ne 0$, and $b \ne 0$ as always. Suppose for contradiction that the product is rational,

$$r i = \frac{c}{d}, \qquad c, d \text{ integers}, \ d \ne 0.$$

Solving for $i$,

$$i = \frac{c}{d r} = \frac{c b}{d a}.$$

Because $a \ne 0$ and $d \ne 0$, both $cb$ and $da$ are integers with $da \ne 0$, so $i$ is rational. That contradicts $i$ being irrational, so $ri$ cannot be rational. Hence $ri$ is irrational. The assumption $a \ne 0$ is used exactly at the division step, and it is the assumption that was missing in statement (3).

## Problem 6

Using the field axioms, prove that the additive and multiplicative inverse of a given element are necessarily unique.

Additive inverse. Fix an element $a$ and suppose $b$ and $b'$ are both additive inverses, so $a + b = 0$ and $a + b' = 0$. Then, using $0$ as the additive identity and associativity,

$$b = b + 0 = b + (a + b') = (b + a) + b' = 0 + b' = b'.$$

(Here $b + a = a + b = 0$ by commutativity.) So the additive inverse is unique.

Multiplicative inverse. Fix a nonzero element $a$ and suppose $c$ and $c'$ are both multiplicative inverses, so $a \cdot c = 1$ and $a \cdot c' = 1$. Then

$$c = c \cdot 1 = c \cdot (a \cdot c') = (c \cdot a) \cdot c' = 1 \cdot c' = c'.$$

So the multiplicative inverse is unique.

# Problem Set 2

## Problem 1

Let $\mathbb{Z}$ denote the integers and $2\mathbb{Z}$ the even integers. Prove that the cardinality of $\mathbb{Z}$ and $2\mathbb{Z}$ is the same: $|\mathbb{Z}| = |2\mathbb{Z}|$.

Two sets have the same cardinality when there is a [[Glossary#bijection|bijection]] between them, so I build one. Define $f : \mathbb{Z} \to 2\mathbb{Z}$ by $f(n) = 2n$. It is [[Glossary#injective|injective]]: if $2n = 2m$ then $n = m$. It is [[Glossary#surjective|surjective]]: any even integer has the form $2k$ for some integer $k$, and $f(k) = 2k$ hits it. So $f$ is a bijection and $|\mathbb{Z}| = |2\mathbb{Z}|$, even though the evens are a proper subset of the integers.

## Problem 2

Let $S_k = \{1, 2, \dots, k\}$. How many subsets does $S_k$ have? Prove your result by induction.

The answer is $2^k$. I argue by [[Glossary#induction|induction]] on $k$.

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

## Problem 5 (hand-in)

The Fibonacci sequence $0, 1, 1, 2, 3, 5, 8, 13, 21, \dots$ is defined by

$$F(0) = 0, \quad F(1) = 1, \quad F(n) = F(n-1) + F(n-2) \ \text{ for } n \ge 2.$$

Consider the two statements:

- **A.** There exists an integer $n_0$ such that $F(n) < n^2$ for all $n \ge n_0$.
- **B.** There exists an integer $n_0$ such that $F(n) > n^2$ for all $n \ge n_0$.

Are either of these true? Prove the true ones, or prove both false.

**B is true and A is false.**

For B, take $n_0 = 13$ and prove $F(n) > n^2$ for all $n \ge 13$ by [[Glossary#strong-induction|strong induction]]. Two base cases are needed, because the step for $F(k+1)$ leans on both $F(k)$ and $F(k-1)$:

$$F(13) = 233 > 169 = 13^2, \qquad F(14) = 377 > 196 = 14^2.$$

Both hold. Now fix $k \ge 14$ and assume $F(m) > m^2$ for every integer $m$ with $13 \le m \le k$. Since $k \ge 14$, both $k$ and $k-1$ lie in that range, so $F(k) > k^2$ and $F(k-1) > (k-1)^2$. Adding,

$$F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2 = 2k^2 - 2k + 1.$$

Comparing this with $(k+1)^2 = k^2 + 2k + 1$,

$$\left(2k^2 - 2k + 1\right) - \left(k^2 + 2k + 1\right) = k^2 - 4k = k(k-4) > 0 \quad \text{for } k \ge 14,$$

so $2k^2 - 2k + 1 > (k+1)^2$, and therefore $F(k+1) > (k+1)^2$. The two base cases and the step cover every $n \ge 13$, proving B.

A is false as a direct consequence. Suppose some $n_0$ worked for A. Choose $n = \max(n_0, 13)$. Then $n \ge 13$, so B gives $F(n) > n^2$, while A would demand $F(n) < n^2$. These cannot both hold, so no such $n_0$ exists. (This matches the underlying behaviour: $F(n)$ grows like $\varphi^n$ with $\varphi = \frac{1+\sqrt{5}}{2} \approx 1.618$, which eventually dwarfs $n^2$, so beyond a point the Fibonacci numbers sit above $n^2$ and stay there.)

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
- [[Problem Set 2]]
