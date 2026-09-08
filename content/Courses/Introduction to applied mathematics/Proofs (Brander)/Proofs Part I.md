---
publish: true
title: Proofs Part I
course: Introduction to applied mathematics
date: 2026-09-08
type: note
source: Beviser (Brander, Part I)
tags:
  - applied-math
  - proofs
  - "02525"
  - proof-methods
---

# Proofs Part I

Core proof methods from Brander Part I. The point is not memorising tricks, it is understanding why each argument is watertight.

- **What a proof actually is**

	- A proof is a chain of logically valid steps that starts from things we already accept (axioms and previously proven theorems) and ends at the claim.

	- Every step has to be forced. If a reader can say "why does that follow", the step is not done yet.

	- Axioms are the foundation. An [[Glossary#axiom|axiom]] is a statement we accept as true without proving it, for example addition of real numbers is commutative, $a + b = b + a$.

	- So the skeleton is always: assume the hypothesis, apply valid rules, arrive at the conclusion.


- **[[Glossary#direct-proof|Direct proof]]**

	- Idea: assume the hypothesis $P$ is true, then walk straight to the conclusion $Q$ using definitions and known facts.

	- Good default when the statement is "if $P$ then $Q$" and the definitions give you something to work with.

	- Worked example: the sum of two even numbers is even.

		- Let $a$ and $b$ be even. By definition $a = 2m$ and $b = 2n$ for some integers $m, n$.

		- Then $a + b = 2m + 2n = 2(m + n)$.

		- $m + n$ is an integer, so $a + b$ is $2 \times (\text{integer})$, which is even. Done.


- **[[Glossary#proof-by-contradiction|Proof by contradiction]] (indirect)**

	- Idea: assume the claim is false, then show that assumption forces something impossible. Since it cannot be false, it is true.

	- Key move: you get a free extra assumption (the negation), and you hunt for the clash.

	- Worked example: $\sqrt{2}$ is [[Glossary#irrational|irrational]].

		- Suppose instead $\sqrt{2} = \frac{p}{q}$ with $p, q$ integers sharing no common factor (fraction in lowest terms).

		- Then $2 = \frac{p^2}{q^2}$, so $p^2 = 2q^2$. So $p^2$ is even, which means $p$ is even, say $p = 2k$.

		- Substitute: $(2k)^2 = 2q^2 \Rightarrow 4k^2 = 2q^2 \Rightarrow q^2 = 2k^2$. So $q$ is even too.

		- But now $p$ and $q$ are both even, which contradicts "no common factor". Impossible, so $\sqrt{2}$ is irrational.


- **[[Glossary#contrapositive|Proof by contrapositive]]**

	- Idea: "if $P$ then $Q$" is logically the same statement as "if not $Q$ then not $P$". Prove the second one instead.

	- Use it when the negations are easier to handle than the originals.

	- Worked example: if $n^2$ is even then $n$ is even.

		- Contrapositive: if $n$ is odd then $n^2$ is odd.

		- Let $n$ be odd, so $n = 2k + 1$.

		- Then $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd.

		- The contrapositive holds, so the original does too.


- **Disproof by [[Glossary#counterexample|counterexample]]**

	- Idea: a claim that says "for all" is killed by a single example where it fails. You do not prove anything positive, you just break the universal.

	- One clean counterexample is enough, no need to explain the whole pattern.

	- Worked example: "every degree 2 polynomial has a real root" is false.

		- Take $x^2 + 1 = 0$. Solving gives $x^2 = -1$, so $x = i$, which is not real.

		- One polynomial with no real root, so the "for all" claim is dead.

	- Careful: a counterexample only disproves. To prove a "for all" statement you still need a general argument.


## Links

- [[Introduction to applied mathematics]]
- [[Proofs Part II]]
- [[Problem Set 1]]
- [[Problem Set 2]]
