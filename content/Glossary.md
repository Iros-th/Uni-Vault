---
publish: true
title: Glossary
type: reference
tags:
  - glossary
  - reference
---

# Glossary

Short, plain-language definitions of the terms and functions that show up across these notes. Hover a linked term anywhere in the vault to see its entry pop up, or just skim the list here.

Two groups: proof and math words first, then the Python bits.

## Proofs and mathematics

## Proof

A chain of logically valid steps that starts from things we already accept (axioms and proven theorems) and ends at the claim. Every step has to be forced, so a reader can never ask "why does that follow".

## Axiom

A statement we accept as true without proving it. It is the foundation everything else is built on, for example that addition of real numbers is commutative, $a + b = b + a$.

## Theorem

A statement that has been proven true from axioms and earlier results. Once proven, you are allowed to reuse it in later proofs.

## Direct proof

Assume the hypothesis $P$ is true, then walk straight to the conclusion $Q$ using definitions and known facts. The default when "if $P$ then $Q$" gives you something concrete to unpack.

## Proof by contradiction

Assume the claim is false, then show that assumption forces something impossible. Since it cannot be false, it must be true. This is how you show $\sqrt{2}$ is irrational.

## Contrapositive

The statement "if $P$ then $Q$" is logically the same as "if not $Q$ then not $P$". Proving the second version counts as proving the first, and sometimes the negations are easier to work with.

## Counterexample

A single example that breaks a "for all" claim. One case where the statement fails is enough to disprove it, for example $x^2 + 1 = 0$ shows not every degree 2 polynomial has a real root.

## Induction

A way to prove a statement $P(n)$ holds for every $n$ from some starting point. Knock over the first domino (the base case), then show each domino knocks over the next one (the inductive step).

## Strong induction

Same idea as induction, but in the step you get to assume $P$ holds for all values up to $k$, not just the one before. Use it when the argument reaches back more than one step, like a recurrence that uses $P(k)$ and $P(k-1)$.

## Base case

The starting value you check by hand, often $n = 1$. If the inductive step reaches back two terms, you need two base cases, otherwise the first step reaches below anything you have checked.

## Inductive step

The part where you assume $P(k)$ (the induction hypothesis) and prove $P(k+1)$ from it. Base case plus step together cover every value.

## Bijection

A pairing between two sets where every element matches exactly one on the other side, no leftovers either way. It is both injective and surjective, and if one exists the two sets have the same size, written $|A| = |B|$.

## Injective

A map where different inputs always give different outputs. No two inputs collide onto the same value, so if $f(a) = f(b)$ then $a = b$.

## Surjective

A map where every possible output actually gets hit by some input. Nothing in the target set is left out.

## Rational

A number you can write as a fraction $\frac{p}{q}$ of two integers with $q \ne 0$. The reciprocal and product of rationals stay rational.

## Irrational

A number that cannot be written as a fraction of two integers, like $\sqrt{2}$. Its decimal expansion never settles into a repeating pattern.

## Recurrence

A rule that defines each term using earlier terms. The Fibonacci numbers are the classic case: $F(n) = F(n-1) + F(n-2)$.

## Fibonacci

The sequence starting $F(1) = 1$, $F(2) = 1$, where each later term is the sum of the two before it. It grows fast, quickly overtaking things like $n^2$.

## Python

## print

Writes something to the console. It is the first tool you reach for to check whether your code is doing anything at all. Separate several values with commas and Python puts spaces between them.

## input

Asks the user to type something and hands it back. Important: it always returns text, even when the user types a number, so wrap it in `int()` or `float()` first if you want to do maths.

## int

A whole number with no decimals, positive or negative. Also the function `int()` that converts text or a float into a whole number.

## float

A number with decimals, written with a dot not a comma. Floats are not perfectly precise, so `0.1 + 0.2` gives `0.30000000000000004`, which is normal, not a bug.

## str

Text, written inside quotes. Note that `"5"` is not the same as `5`: one is text, the other a number, and you cannot add them together without converting first.

## bool

A value that is only ever `True` or `False`, written with a capital letter. Used constantly whenever you check a condition.

## casting

Converting one type into another with `int()`, `float()`, `str()` or `bool()`. Handy when input arrives as text but you need to calculate with it.

## range

Makes a sequence of numbers to count through, usually paired with a for loop. It starts at 0 and stops just before the last number, so `range(1, 5)` gives 1, 2, 3, 4 and not 5.

## def

The keyword that defines a function, a reusable chunk of code you name once and call as often as you like. Remember the colon and the indentation underneath.

## return

Sends a value back out of a function so you can use it later. It also stops the function immediately, so any code after it in the same block never runs.

## for loop

Repeats a block once for each element in a sequence, like a list or a string. Good when you know how many times to run, or want to touch every element.

## while loop

Repeats a block as long as a condition stays true. Good when you do not know in advance how many rounds you need. Remember to change something inside, or it loops forever.

## if, elif, else

Branching. `if` runs a block only when its condition is true, `elif` adds more options checked top to bottom, and `else` catches everything left over. Only one branch runs.

## list

An ordered, changeable collection written with square brackets. Index starts at 0, so the first item is `liste[0]` and `liste[-1]` is the last. Add with `append()`, take a slice with a colon.

## dict

A dictionary stores key and value pairs. Instead of fetching by a number index you fetch by the key, which is ideal when data belongs together, like a name and an age. Use `.get()` to avoid a KeyError.

## tuple

Like a list but immutable, so it cannot be changed once made. Written with ordinary parentheses, used for data that stays fixed together, such as coordinates.

## set

A collection with no duplicates and no fixed order. Great for stripping repeated values out of a list or checking membership quickly.

## index

The position of an element in a sequence, counted from 0. Fetch an element with square brackets, and use a negative index to count from the end.

## slicing

Taking a chunk of a sequence with a colon, like `liste[start:slut]`, which runs from start up to but not including the end position.

## f-string

A string with an `f` in front of the opening quote, letting you drop variables straight into the text inside curly braces. The tidiest way to mix text and values.

## enumerate

Wraps a loop so you get both the index and the element each round, instead of tracking a counter yourself.

## append

A list method that adds one item to the end. Its cousin `insert()` drops an item at a chosen position.

## try and except

Error handling. Code in `try` is attempted, and if something goes wrong Python jumps into `except` instead of crashing the whole program. Best to catch a specific error type rather than a bare `except`.

## mutable

Able to be changed after it is created. Lists and dictionaries are mutable.

## immutable

Fixed once created, cannot be changed. Tuples and strings are immutable.

## scope

Where a variable is visible. A variable made inside a function only exists inside it (local scope), so to use its value outside you have to `return` it.

## Links

- [[index|Home]]
- [[Courses/Programming/Programming|Programming]]
- [[Courses/Introduction to applied mathematics/Introduction to applied mathematics|Introduction to Applied Mathematics]]
