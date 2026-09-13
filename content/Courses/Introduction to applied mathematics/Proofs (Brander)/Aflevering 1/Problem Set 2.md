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

Worked solutions in bullet style. P5 is where my handwritten assignment answers go, cleaned up into proper proofs.

- **P1: $|\mathbb{Z}| = |2\mathbb{Z}|$ via the bijection $n \mapsto 2n$**

	- Statement: the integers and the even integers have the same size.

	- Idea: build an explicit bijection, then check both directions.

	- Solution:

		- Define $f : \mathbb{Z} \to 2\mathbb{Z}$ by $f(n) = 2n$.

		- Injective: if $2n = 2m$ then $n = m$, so different inputs give different outputs.

		- Surjective: any even number is $2k$ for some integer $k$, and $f(k) = 2k$, so every even number is hit.

		- $f$ is a bijection, so $|\mathbb{Z}| = |2\mathbb{Z}|$, even though the evens are a strict subset. That is life with infinite sets.


- **P2: $S_k = \{1, \dots, k\}$ has $2^k$ subsets (induction)**

	- Idea: adding one new element doubles the number of subsets, because each old subset either grabs the new element or does not.

	- Solution:

		- Base $k = 0$: $S_0$ is the empty set, whose only subset is itself, so $1 = 2^0$. Holds.

		- Step: assume $S_k$ has $2^k$ subsets. Look at $S_{k+1} = S_k \cup \{k+1\}$.

			- Subsets that do not contain $k+1$: these are exactly the subsets of $S_k$, so $2^k$ of them.

			- Subsets that do contain $k+1$: each is a subset of $S_k$ with $k+1$ thrown in, again $2^k$ of them.

		- Total: $2^k + 2^k = 2^{k+1}$, which is the formula for $k+1$. Done.


- **P3: $\dfrac{1}{1 \cdot 2} + \dfrac{1}{2 \cdot 3} + \dots + \dfrac{1}{n(n+1)} = \dfrac{n}{n+1}$ for $n \ge 1$ (induction)**

	- Idea: standard induction, the algebra collapses nicely when you put the new term over a common denominator.

	- Solution:

		- Base $n = 1$: left side is $\frac{1}{1 \cdot 2} = \frac{1}{2}$, right side is $\frac{1}{2}$. Holds.

		- Step: assume $\sum_{i=1}^{k} \frac{1}{i(i+1)} = \frac{k}{k+1}$. Add the next term $\frac{1}{(k+1)(k+2)}$:

			$$\frac{k}{k+1} + \frac{1}{(k+1)(k+2)} = \frac{k(k+2) + 1}{(k+1)(k+2)} = \frac{k^2 + 2k + 1}{(k+1)(k+2)} = \frac{(k+1)^2}{(k+1)(k+2)} = \frac{k+1}{k+2}$$

		- That is exactly $\frac{n}{n+1}$ with $n = k+1$. Done.


- **P4: a bijection between $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ and $\mathbb{R}$**

	- Idea: use $\tan$, it stretches that open interval across the whole real line.

	- Solution:

		- Define $f : \left(-\frac{\pi}{2}, \frac{\pi}{2}\right) \to \mathbb{R}$ by $f(x) = \tan(x)$.

		- Injective: $\tan$ is strictly increasing on this interval, so $x_1 \ne x_2$ gives $\tan(x_1) \ne \tan(x_2)$.

		- Surjective: as $x \to -\frac{\pi}{2}^+$, $\tan(x) \to -\infty$, and as $x \to \frac{\pi}{2}^-$, $\tan(x) \to +\infty$. Being continuous, it takes every value in between, so every real is hit.

		- $f$ is a bijection with inverse $\arctan$, so the interval and $\mathbb{R}$ have the same size. Done.


- **P5: Fibonacci growth**

	- Setup: [[Glossary#fibonacci|Fibonacci]] numbers $F(1) = 1$, $F(2) = 1$, and the [[Glossary#recurrence|recurrence]] $F(n) = F(n-1) + F(n-2)$ for $n \ge 3$.

	- Handy values for later: $F(14) = 377$, $F(15) = 610$.


	- **P5b: prove $F(n) > n^2$ for all $n \ge 14$ ([[Glossary#strong-induction|strong induction]])**

		- Because the recurrence uses the two previous terms $F(k)$ and $F(k-1)$, the step reaches back two steps. So the proof needs TWO base cases, $F(14)$ and $F(15)$, not one. With a single base case the very first step would reach below where anything is checked.

		- **Base cases:**

			- $F(14) = 377 > 196 = 14^2$. Holds.

			- $F(15) = 610 > 225 = 15^2$. Holds.

		- **Strong induction hypothesis:** fix some $k \ge 15$ and assume $F(m) > m^2$ for every $m$ with $14 \le m \le k$.

		- **Inductive step:** show $F(k+1) > (k+1)^2$.

			- Since $k \ge 15$, both $k$ and $k-1$ sit in the range $[14, k]$, so the hypothesis gives $F(k) > k^2$ and $F(k-1) > (k-1)^2$.

			- Then

				$$F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2$$

			- Now compare $k^2 + (k-1)^2$ with $(k+1)^2$:

				$$k^2 + (k-1)^2 - (k+1)^2 = (2k^2 - 2k + 1) - (k^2 + 2k + 1) = k^2 - 4k = k(k-4)$$

			- For $k \ge 14$ this is clearly positive (it reduces to $k^2 - 4k > 0$, true whenever $k > 4$). So $k^2 + (k-1)^2 > (k+1)^2$.

			- Chaining: $F(k+1) > k^2 + (k-1)^2 > (k+1)^2$.

		- Base cases plus the step cover all $n \ge 14$, so $F(n) > n^2$ for every $n \ge 14$. Done.

		- (Note to self: the only fix from my handwritten version was the second base case $F(15)$. The rest of the reasoning, the $F(k) + F(k-1) > k^2 + (k-1)^2$ move and the $k^2 - 4k > 0$ reduction, was already right.)


	- **P5a: disprove that there is an $F$ with $F(n) < n^2$ for all $n$ beyond some threshold $n_0$**

		- Claim to disprove: there exists $n_0$ such that $F(n) < n^2$ for all $n \ge n_0$.

		- From P5b we know $F(n) > n^2$ for all $n \ge 14$. That directly kills any such threshold.

		- Explicit argument: take any proposed $n_0$. Pick $n = \max(n_0, 14)$.

			- Since $n \ge 14$, P5b gives $F(n) > n^2$.

			- Since $n \ge n_0$, the claim would demand $F(n) < n^2$.

			- These cannot both hold, contradiction.

		- No $n_0$ survives, so no such threshold exists. Done.


## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part I]]
- [[Proofs Part II]]
- [[Problem Set 1]]
