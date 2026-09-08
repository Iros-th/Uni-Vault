---
publish: true
title: Proofs Part II
course: Introduction to applied mathematics
date: 2026-09-08
type: note
source: Beviser (Brander, Part II)
tags:
  - applied-math
  - proofs
  - "02525"
  - counting-and-induction
---

# Proofs Part II

Counting arguments and mathematical induction. Two of the most reused tools in the whole course.

- **Counting a set two ways**

	- Idea: count the same collection in two different ways. Both counts have to give the same number, so setting them equal gives you an identity for free.

	- The trick is picking a set where each way of counting reveals a different formula.

	- Worked example: sum of the first $n$ numbers, $1 + 2 + \dots + n$.

		- Take the numbers $1$ to $n$ and pair each $k$ with $n + 1 - k$.

		- Every pair sums to $n + 1$, and there are $n$ such terms, giving a total of $n(n+1)$ if you add the list to its own reverse.

		- That double counts the sum, so $2S = n(n+1)$, hence

			$$S = \frac{n(n+1)}{2}$$

		- Same set, counted so the pairing is obvious, and the formula falls out.


- **[[Glossary#bijection|Bijections]] (one-to-one correspondence)**

	- Idea: two sets have the same size exactly when you can pair their elements up perfectly, no leftovers on either side.

	- A bijection is a map $f$ that is both [[Glossary#injective|injective]] (no two inputs share an output) and [[Glossary#surjective|surjective]] (every output is hit). If one exists, $|A| = |B|$.

	- This is how we compare infinite sets too, where "just count them" is not available.

	- Worked example: the even numbers have the same size as all the integers.

		- Define $f : \mathbb{Z} \to 2\mathbb{Z}$ by $f(n) = 2n$.

		- Injective: if $2n = 2m$ then $n = m$.

		- Surjective: any even number is $2k$, and $f(k) = 2k$, so it gets hit.

		- A bijection exists, so $|\mathbb{Z}| = |2\mathbb{Z}|$, even though one set sits inside the other.


- **Mathematical [[Glossary#induction|induction]]**

	- Idea: to prove a statement $P(n)$ for all $n$ from some starting point, knock over the first domino and show each domino knocks over the next one.

	- Two ingredients:

		- **[[Glossary#base-case|Base case]]**: check $P$ holds at the starting value (often $n = 1$).

		- **[[Glossary#inductive-step|Inductive step]]**: assume $P(k)$ (the induction hypothesis), then prove $P(k+1)$.

	- If both hold, $P(n)$ is true for every $n$ at or above the base.

	- Worked example: $1 + 2 + \dots + n = \frac{n(n+1)}{2}$.

		- Base $n = 1$: left side is $1$, right side is $\frac{1 \cdot 2}{2} = 1$. Holds.

		- Step: assume $1 + \dots + k = \frac{k(k+1)}{2}$. Add $k+1$ to both sides:

			$$1 + \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$

		- That is exactly the formula with $k+1$ plugged in, so $P(k+1)$ holds. Done.


- **[[Glossary#strong-induction|Strong induction]]**

	- Idea: same as ordinary induction, but in the step you get to assume $P$ holds for all values up to $k$, not just the single previous one.

	- Use it when proving $P(k+1)$ needs to reach back further than one step, for example a recurrence that uses $P(k)$ and $P(k-1)$.

	- KEY POINT on base cases: you need as many base cases as the number of earlier terms the step depends on.

		- If the step uses only $P(k)$, one base case is enough.

		- If the step uses both $P(k)$ and $P(k-1)$, you need two base cases, otherwise the very first application of the step reaches below where you have checked anything.

	- Worked example: every integer $n \ge 2$ has a prime factorisation.

		- Base $n = 2$: $2$ is prime, so it is its own factorisation.

		- Step: assume every integer from $2$ up to $k$ factors into primes. Look at $k+1$.

			- If $k+1$ is prime, done.

			- If not, write $k+1 = a \cdot b$ with $2 \le a, b \le k$. By the strong hypothesis both $a$ and $b$ factor into primes, so gluing those factorisations together gives one for $k+1$.

		- The step needed arbitrary smaller values ($a$ and $b$), which is exactly why strong induction is the right tool here.


## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part I]]
- [[Problem Set 1]]
- [[Problem Set 2]]
