---
publish: true
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

Worked solutions in bullet style. Where the exact wording of a problem was not fully pinned down, I solved the standard version and flagged it.

- **Problem 1: the identity element is unique**

	- Statement: for a set with a binary operation, if an identity element exists, it is unique.

		- (Solved for the standard additive identity $0$ under $+$. The same argument works for any operation with an identity, for example $1$ under multiplication.)

	- Idea: assume there are two identities and show they must be equal. Classic uniqueness move.

	- Solution:

		- Suppose $e$ and $e'$ are both identity elements. So for every $a$: $a + e = a$ and $a + e' = a$.

		- Look at $e + e'$ and read it two ways.

			- Treat $e'$ as the identity: $e + e' = e$.

			- Treat $e$ as the identity: $e + e' = e'$.

		- Both are equal to the same thing $e + e'$, so $e = e'$.

		- The two supposed identities are actually the same element, so the identity is unique. Done.


- **Problem 2: reciprocal of a rational or irrational (true or false)**

	- Statement, part a: if $x$ is a nonzero [[Glossary#rational|rational]], then $\frac{1}{x}$ is rational. TRUE.

		- Let $x = \frac{p}{q}$ with $p, q$ nonzero integers.

		- Then $\frac{1}{x} = \frac{q}{p}$, which is again a ratio of integers with nonzero bottom, so it is rational. Done.

	- Statement, part b: if $x$ is [[Glossary#irrational|irrational]], then $\frac{1}{x}$ is irrational. TRUE.

		- Prove by contradiction. Suppose $x$ is irrational but $\frac{1}{x}$ is rational.

		- Note $x \ne 0$ (irrationals are nonzero), so $\frac{1}{x} \ne 0$, and we can invert again.

		- If $\frac{1}{x}$ is rational and nonzero, then by part a its reciprocal $\frac{1}{1/x} = x$ is rational.

		- But that says $x$ is rational, contradicting the assumption. So $\frac{1}{x}$ must be irrational. Done.


- **Problem 3: the product of two rationals is rational**

	- Statement: if $a$ and $b$ are rational, then $ab$ is rational.

	- Idea: plug in the definition of rational and just multiply the fractions.

	- Solution:

		- Let $a = \frac{p}{q}$ and $b = \frac{r}{s}$ with $p, q, r, s$ integers and $q, s \ne 0$.

		- Then $ab = \frac{p}{q} \cdot \frac{r}{s} = \frac{pr}{qs}$.

		- $pr$ is an integer, $qs$ is an integer, and $qs \ne 0$ since neither factor is zero.

		- So $ab$ is a ratio of integers with nonzero denominator, that is rational. Done.

	- Related fact worth having next to it: the sum of two rationals is rational.

		- $\frac{p}{q} + \frac{r}{s} = \frac{ps + rq}{qs}$, again integer over nonzero integer. Rational.


- **Note on faithfulness**

	- Problems 1 to 3 above cover the identity-uniqueness, reciprocal true/false, and product-of-rationals questions from Problem Set One.

	- I stated each in the standard form used in the course. If your handout has extra parts (for example "products of irrationals" or a specific operation table), tell me and I will fold them in. The methods here (contradiction, definition-chasing) transfer directly.


## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part I]]
- [[Proofs Part II]]
- [[Problem Set 2]]
