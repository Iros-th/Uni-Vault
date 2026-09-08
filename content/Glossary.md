---
publish: true
title: Glossary / Begrebsordbog
type: reference
tags:
  - glossary
  - begreber
  - reference
---

# Glossary (EN)

Short, precise definitions of mathematical, chemical and computing terms. Hover any linked term anywhere in the notes to see the definition as a popover.

This is the English version. The Danish version, with every entry translated, is at [[Ordbog|Ordbog (DA)]].

---

## 1. Proofs and Mathematics

## Proof
A chain of logically valid steps that starts from things we already accept (axioms and proven theorems) and ends at the claim.

## Axiom
A statement we accept as true without proving it. The fundamental starting point, for example the commutative law $a + b = b + a$.

## Theorem
A mathematical statement that has been formally proven true from axioms and earlier results. It can be reused as a building block in later proofs.

## Direct proof
Assume the hypothesis $P$ is true, then walk straight to the conclusion $Q$ using definitions and known algebra.

## Proof by contradiction
Assume the claim is false ($\lnot P$), then show this assumption forces an impossibility ($0 = 1$ or $x \neq x$). Therefore $P$ must be true. The classic example is the proof that $\sqrt{2}$ is irrational.

## Contrapositive
The statement "if $P$ then $Q$" ($P \implies Q$) is logically equivalent to "if not $Q$ then not $P$" ($\lnot Q \implies \lnot P$). Proving the contrapositive is equivalent to proving the original.

## Counterexample
A single case that disproves a universal "for all" claim ($\forall x \, P(x)$). One counterexample is enough to refute a statement.

## Induction
A proof method for statements indexed by integers $n \ge 1$. Show the base case $P(1)$ (the first domino), then show the inductive step: that $P(k)$ implies $P(k+1)$.

## Strong induction
Same principle as induction, but the induction hypothesis assumes the claim holds for all values $1, 2, \dots, k$ and uses this to prove $P(k+1)$. Handy for recursive sequences like Fibonacci.

## Bijection
A function between two sets that is both injective (one-to-one) and surjective (onto). It sets up a perfect one-to-one pairing, so $|A| = |B|$.

## Injective
A map where distinct inputs map to distinct outputs: $f(a) = f(b) \implies a = b$.

## Surjective
A map where every element in the codomain is hit by at least one input: $\forall y \in Y, \ \exists x \in X : f(x) = y$.

## Rational number
A number expressible as a ratio of two integers $\frac{p}{q}$ with $q \neq 0$ ($x \in \mathbb{Q}$). It has a finite or repeating decimal expansion.

## Irrational number
A real number that cannot be written as a fraction of integers ($x \in \mathbb{R} \setminus \mathbb{Q}$), such as $\sqrt{2}, e, \pi$. Its decimal expansion is infinite and non-repeating.

## Limit
The value a function or sequence approaches as the variable tends to a given point: $\lim_{x \to x_0} f(x) = L$.

## Continuity
A function is continuous at $x_0$ if $\lim_{x \to x_0} f(x) = f(x_0)$. The graph can be drawn without lifting the pen.

---

## 2. Chemistry

## Amount of substance (mole)
Measured in moles. One mole is exactly Avogadro's number ($6.022 \times 10^{23}$) of formula units or particles. Formula: $n = \frac{m}{M}$.

## Molar mass
The mass of one mole of an element or compound, in grams per mole (g/mol). Read off the periodic table.

## Molar concentration (molarity)
Moles of dissolved substance per litre of solution ($c = \frac{n}{V}$), given in M or mol/L.

## Electronegativity
An atom's ability to attract electrons in a covalent bond (Pauling scale). Fluorine is the most electronegative element ($3.98$).

## Oxidation
A process where an atom, ion or molecule gives away electrons. The oxidation state rises.

## Reduction
A process where an atom, ion or molecule takes up electrons. The oxidation state falls.

## Acid (Broensted)
A chemical particle (molecule or ion) that can donate a proton ($\text{H}^+$).

## Base (Broensted)
A chemical particle that can accept a proton ($\text{H}^+$).

## pH
The negative logarithm of the hydronium ion concentration in an aqueous solution: $\text{pH} = -\log[\text{H}_3\text{O}^+]$.

---

## 3. Programming

## int (integer)
A whole number with no decimals (`42`, `-7`). In Python it has unlimited precision.

## float (decimal)
A number with decimals (`3.14`). It follows IEEE 754 double precision. Note that `0.1 + 0.2 != 0.3` because of binary rounding.

## str (string)
Text in Python. An immutable sequence of characters.

## bool (boolean)
A truth value: `True` or `False`.

## list
An ordered, mutable sequence of elements: `[1, 2, 3]`.

## tuple
An ordered, immutable sequence of elements: `(x, y)`.

## dict (dictionary)
A collection of key-value pairs (`{"a": 1}`) with fast $O(1)$ lookup via a hash table.

## set
An unordered collection of unique values (`{1, 2, 3}`). It drops duplicates automatically.

## Scope
The region of code where a variable is visible and valid (local inside a function versus global in the module).

## Exception
An error that occurs while the program runs (for example `ZeroDivisionError`, `IndexError`), which can be caught and handled safely with `try...except`.

## Links

- [[Ordbog|Ordbog (DA)]]
- [[index|Home]]
- [[Reference/Matematik/Matematiske symboler|Mathematical symbols]]
- [[Formelsamling/Formelsamling|Formelsamling]]
