---
title: Aflevering 3
publish: true
tags:
  - aflevering
  - diskret-matematik
---

# Aflevering 3

## Opgave A: an inequality where induction needs a stronger hypothesis

> Do exercise 76 in Section 5.1.
>
> Exercise 76 in the book: Suppose that we want to prove that
> $$\frac{1}{2} \cdot \frac{3}{4} \cdots \frac{2n-1}{2n} < \frac{1}{\sqrt{3n}}$$
> for all positive integers $n$.
>
> a) Show that if we try to prove this inequality using mathematical induction, the basis step works, but the inductive step fails.
>
> b) Show that mathematical induction can be used to prove the stronger inequality
> $$\frac{1}{2} \cdot \frac{3}{4} \cdots \frac{2n-1}{2n} < \frac{1}{\sqrt{3n+1}}$$
> for all integers greater than 1, which, together with a verification for the case where $n = 1$, establishes the weaker inequality we originally tried to prove using mathematical induction.

Throughout, write

$$P(n) = \frac{1}{2} \cdot \frac{3}{4} \cdots \frac{2n-1}{2n}.$$

Going from $n = k$ to $n = k+1$ adds exactly one factor, $\frac{2(k+1)-1}{2(k+1)} = \frac{2k+1}{2k+2}$, so

$$P(k+1) = P(k) \cdot \frac{2k+1}{2k+2}.$$

### a) Why the direct induction step does not work

**Basis step ($n = 1$).** $P(1) = \frac{1}{2} = 0.5$ and $\frac{1}{\sqrt{3}} \approx 0.577$. Since $\frac{1}{2} < \frac{1}{\sqrt{3}}$ (equivalently $\sqrt{3} < 2$, i.e. $3 < 4$), the basis step holds.

**Inductive step.** Assume the inductive hypothesis $P(k) < \frac{1}{\sqrt{3k}}$ for some positive integer $k$. Then

$$P(k+1) = P(k) \cdot \frac{2k+1}{2k+2} < \frac{2k+1}{(2k+2)\sqrt{3k}}.$$

This is all the hypothesis gives us. To finish the step we would need this upper bound to be at most $\frac{1}{\sqrt{3(k+1)}}$, that is

$$\frac{2k+1}{(2k+2)\sqrt{3k}} \le \frac{1}{\sqrt{3(k+1)}}.$$

Both sides are positive, so we may cross-multiply and square without changing the direction of the inequality:

$$(2k+1)^2 \cdot 3(k+1) \le (2k+2)^2 \cdot 3k.$$

Since $(2k+2)^2 = 4(k+1)^2$, dividing by $3$ gives $(2k+1)^2(k+1) \le 4k(k+1)^2$, and dividing by $k + 1 > 0$ gives

$$(2k+1)^2 \le 4k(k+1) \iff 4k^2 + 4k + 1 \le 4k^2 + 4k \iff 1 \le 0,$$

which is false for every $k$. So the bound we get from the hypothesis is always slightly **larger** than $\frac{1}{\sqrt{3(k+1)}}$. Knowing that $P(k+1)$ is below a number that is bigger than $\frac{1}{\sqrt{3(k+1)}}$ does not tell us that $P(k+1)$ is below $\frac{1}{\sqrt{3(k+1)}}$. The hypothesis is too weak to carry the induction, so the inductive step fails (even though the statement itself turns out to be true, see b).

### b) Proving the stronger inequality works

**Claim.** $P(n) < \frac{1}{\sqrt{3n+1}}$ for every integer $n \ge 2$.

**Basis step ($n = 2$).** $P(2) = \frac{1}{2} \cdot \frac{3}{4} = \frac{3}{8} = 0.375$ and $\frac{1}{\sqrt{7}} \approx 0.378$. Exactly:

$$\frac{3}{8} < \frac{1}{\sqrt{7}} \iff 3\sqrt{7} < 8 \iff 63 < 64,$$

which is true (squaring is allowed because both sides are positive). So the basis step holds.

**Inductive step.** Let $k \ge 2$ and assume the inductive hypothesis $P(k) < \frac{1}{\sqrt{3k+1}}$. We must show $P(k+1) < \frac{1}{\sqrt{3(k+1)+1}} = \frac{1}{\sqrt{3k+4}}$. By the hypothesis,

$$P(k+1) = P(k) \cdot \frac{2k+1}{2k+2} < \frac{2k+1}{(2k+2)\sqrt{3k+1}}.$$

It is therefore enough to show

$$\frac{2k+1}{(2k+2)\sqrt{3k+1}} < \frac{1}{\sqrt{3k+4}}.$$

All quantities are positive, so this is equivalent to (cross-multiply and square)

$$(2k+1)^2(3k+4) < (2k+2)^2(3k+1).$$

Expand the left side:

$$(4k^2 + 4k + 1)(3k+4) = 12k^3 + 16k^2 + 12k^2 + 16k + 3k + 4 = 12k^3 + 28k^2 + 19k + 4.$$

Expand the right side:

$$(4k^2 + 8k + 4)(3k+1) = 12k^3 + 4k^2 + 24k^2 + 8k + 12k + 4 = 12k^3 + 28k^2 + 20k + 4.$$

Right side minus left side is $k > 0$, so the inequality holds. Therefore

$$P(k+1) < \frac{2k+1}{(2k+2)\sqrt{3k+1}} < \frac{1}{\sqrt{3(k+1)+1}},$$

which is the claim for $k+1$. By mathematical induction, $P(n) < \frac{1}{\sqrt{3n+1}}$ for all integers $n \ge 2$.

**Recovering the original inequality.**
- For $n = 1$ we verified in a) that $P(1) = \frac{1}{2} < \frac{1}{\sqrt{3}}$.
- For $n \ge 2$: since $3n + 1 > 3n > 0$, we have $\frac{1}{\sqrt{3n+1}} < \frac{1}{\sqrt{3n}}$, so $P(n) < \frac{1}{\sqrt{3n+1}} < \frac{1}{\sqrt{3n}}$.

Hence $P(n) < \frac{1}{\sqrt{3n}}$ for all positive integers $n$.

The stronger statement works because its hypothesis is a tighter bound: proving more gives us more to use in the inductive step.

---

## Opgave B: splitting a pile of stones

> Do Exercise 16 in Section 5.2 (Exercise 14 in the Eighth edition).
>
> Exercise 14 in the book: Suppose you begin with a pile of $n$ stones and split this pile into $n$ piles of one stone each by successively splitting a pile of stones into two smaller piles. Each time you split a pile you multiply the number of stones in each of the two smaller piles you form, so that if these piles have $r$ and $s$ stones in them, respectively, you compute $rs$. Show that no matter how you split the piles, the sum of the products computed at each step equals $n(n-1)/2$.

Let $P(n)$ be the statement: for a pile of $n$ stones, every way of splitting it down to single stones gives a sum of products equal to $\frac{n(n-1)}{2}$. We prove $P(n)$ for all $n \ge 1$ by **strong induction**.

**Base case ($n = 1$).** If $n = 1$ there is no need for splitting, so the sum is $0$. Replacing the value in the formula gives

$$\frac{1(1-1)}{2} = 0,$$

so the formula agrees with the sum regardless of how the pile is split (there is only one way: no splits at all). So $P(1)$ holds.

**Inductive step.** Let $n \ge 2$ and assume $P(k)$ holds for every $k$ with $1 \le k < n$ (strong induction hypothesis).

The first split divides the pile of $n$ stones into two piles with $r$ and $s$ stones, where $r, s \ge 1$ and $r + s = n$. This first step contributes the product $rs$. After that, the two piles are split down to single stones independently of each other. Since $r < n$ and $s < n$, the induction hypothesis says that

- splitting the pile of $r$ stones contributes $\frac{r(r-1)}{2}$ in total, no matter how it is done, and
- splitting the pile of $s$ stones contributes $\frac{s(s-1)}{2}$ in total, no matter how it is done.

So the total sum for the pile of $n$ stones is

$$
\begin{aligned}
rs + \frac{r(r-1)}{2} + \frac{s(s-1)}{2}
&= \frac{2rs + r^2 - r + s^2 - s}{2} \\
&= \frac{(r^2 + 2rs + s^2) - (r + s)}{2} \\
&= \frac{(r+s)^2 - (r+s)}{2} \\
&= \frac{n^2 - n}{2} = \frac{n(n-1)}{2}.
\end{aligned}
$$

The result does not depend on $r$ and $s$, so it holds for every possible first split, and the rest of the splitting is covered by the hypothesis. Hence $P(n)$ holds.

By strong induction, $P(n)$ is true for all $n \ge 1$: the sum of the products is always $\frac{n(n-1)}{2}$.

---

## Opgave C: generalized induction

> Do Exercise 48 in Section 5.3.
>
> Exercise 48 in the book: Use generalized induction as was done in Example 13 to show that if $a_{m,n}$ is defined recursively by $a_{1,1} = 5$ and
> $$a_{m,n} = \begin{cases} a_{m-1,n} + 2 & \text{if } n = 1 \text{ and } m > 1 \\ a_{m,n-1} + 2 & \text{if } n > 1, \end{cases}$$
> then $a_{m,n} = 2(m+n) + 1$ for all $(m,n) \in \mathbb{Z}^+ \times \mathbb{Z}^+$.

We use induction over $\mathbb{Z}^+ \times \mathbb{Z}^+$ with the **lexicographic ordering**: $(m', n') < (m, n)$ if $m' < m$, or $m' = m$ and $n' < n$. This is a well-ordering, and its least element is $(1,1)$.

**Basis step.** For $(m,n) = (1,1)$ the definition gives $a_{1,1} = 5$, and the formula gives $2(1+1) + 1 = 5$.

**Inductive step.** Let $(m,n) \ne (1,1)$ and assume $a_{m',n'} = 2(m'+n') + 1$ for every pair $(m',n')$ that is smaller than $(m,n)$ in the lexicographic ordering. There are two cases, matching the two cases of the definition.

*Case 1: $n = 1$ and $m > 1$.* Then $a_{m,1} = a_{m-1,1} + 2$. The pair $(m-1, 1)$ is smaller than $(m, 1)$ because its first coordinate is smaller, so by the induction hypothesis $a_{m-1,1} = 2((m-1)+1) + 1 = 2m + 1$. Hence

$$a_{m,1} = 2m + 1 + 2 = 2(m+1) + 1,$$

which is the formula for $(m, 1)$.

*Case 2: $n > 1$.* Then $a_{m,n} = a_{m,n-1} + 2$. The pair $(m, n-1)$ is smaller than $(m, n)$ because the first coordinates are equal and $n - 1 < n$, so by the induction hypothesis $a_{m,n-1} = 2(m + n - 1) + 1$. Hence

$$a_{m,n} = 2(m+n-1) + 1 + 2 = 2(m+n) - 2 + 3 = 2(m+n) + 1.$$

Every pair other than $(1,1)$ falls in exactly one of the two cases, so the inductive step is complete. By generalized induction, $a_{m,n} = 2(m+n) + 1$ for all $(m,n) \in \mathbb{Z}^+ \times \mathbb{Z}^+$.

---

## Opgave D: four of ten around a round table

> Do Exercise 46 in Section 6.1.
>
> Exercise 46 in the book: How many ways are there to seat four of a group of ten people around a circular table where two seatings are considered the same when everyone has the same immediate left and immediate right neighbor?

Two seatings are the same when every person keeps the same left and right neighbour, which means only **rotations** are identified. A mirror image swaps everyone's left and right, so it counts as a different seating.

First choose who sits and in which order around the table: there are $P(10,4) = 10 \cdot 9 \cdot 8 \cdot 7 = 5040$ ordered choices. Each circular seating is counted 4 times, once for each of the 4 rotations (and the 4 rotations of 4 different people are always 4 different ordered lists), so by the division rule

$$\frac{P(10,4)}{4} = \frac{5040}{4} = 1260.$$

Equivalently, $\binom{10}{4} \cdot (4-1)! = 210 \cdot 6 = 1260$: choose the four people, fix one of them, and arrange the other three in the $3!$ orders around the table.

**Answer: 1260.**

---

## Opgave E: the fewest cables between computers and printers

> Do Exercise 40 in Section 6.2.
>
> Exercise 40 in the book: Find the least number of cables required to connect eight computers to four printers to guarantee that for every choice of four of the eight computers, these four computers can directly access four different printers. Justify your answer.

As in Example 9 of Section 6.2, a cable connects one computer directly to one printer, and each printer can serve only one computer at a time. So a choice of four computers works only if each of them can be given its own printer, with every computer cabled to the printer it gets.

**Answer: 20 cables.**

### 20 cables are enough

Call the computers $C_1, \dots, C_8$ and the printers $P_1, \dots, P_4$. Connect

- $C_j$ to $P_j$ for $j = 1, 2, 3, 4$ (4 cables), and
- each of $C_5, C_6, C_7, C_8$ to all four printers ($4 \cdot 4 = 16$ cables).

That is $4 + 16 = 20$ cables.

Take any four computers. Each chosen $C_j$ with $j \le 4$ uses its own printer $P_j$. Suppose $m$ of the chosen computers are among $C_5, \dots, C_8$. Then $4 - m$ are among $C_1, \dots, C_4$, so exactly $m$ of $C_1, \dots, C_4$ are *not* chosen, and their printers are free. Each of the $m$ chosen computers from $C_5, \dots, C_8$ is cabled to every printer, so each gets one of those $m$ free printers. All four chosen computers now have different printers.

### Fewer than 20 cables are not enough

Suppose there are at most $19$ cables. If every printer had at least $5$ cables, there would be at least $5 \cdot 4 = 20$ cables. So some printer $P$ has at most $4$ cables.

Then at least $8 - 4 = 4$ computers have no cable to $P$. Choose four of them. They can only use the other three printers, and four computers cannot get different printers out of three (pigeonhole principle). So this choice fails.

Together: 20 cables suffice and 19 do not, so the least number is $20$. $\blacksquare$

---

## Opgave F: bit strings of length 12

> Do Exercise 12 in Section 6.3.
>
> Exercise 12 in the book: How many bit strings of length 12 contain a) exactly three 1s? b) at most three 1s? c) at least three 1s? d) an equal number of 0s and 1s?

A bit string of length 12 with exactly $k$ ones is fixed by choosing which $k$ of the 12 positions hold a 1, so there are $\binom{12}{k} = C(12,k)$ of them. In total there are $2^{12} = 4096$ bit strings.

**a) Exactly three 1s.**
$$\binom{12}{3} = \frac{12 \cdot 11 \cdot 10}{3!} = 220.$$

**b) At most three 1s.** The cases with 0, 1, 2 and 3 ones are disjoint, so by the sum rule:
$$\binom{12}{0} + \binom{12}{1} + \binom{12}{2} + \binom{12}{3} = 1 + 12 + 66 + 220 = 299.$$

**c) At least three 1s.** Take all strings and remove those with 0, 1 or 2 ones (the complement):
$$2^{12} - \left(\binom{12}{0} + \binom{12}{1} + \binom{12}{2}\right) = 4096 - (1 + 12 + 66) = 4096 - 79 = 4017.$$

**d) An equal number of 0s and 1s.** That means six of each:
$$\binom{12}{6} = 924.$$

**Answers: a) 220, b) 299, c) 4017, d) 924.**

---

## Opgave G: a sum of products of binomial coefficients

> Do Exercise 30 in Section 6.4.
>
> Exercise 30 in the book: Let $n$ and $k$ be integers with $1 \le k \le n$. Show that
> $$\sum_{k=1}^{n} \binom{n}{k}\binom{n}{k-1} = \binom{2n+2}{n+1}\Big/2 - \binom{2n}{n}.$$

Here $k$ is just the summation index, so we prove the identity for every positive integer $n$. The proof has two steps: first Vandermonde's identity turns the left side into a single binomial coefficient, then Pascal's identity rewrites that coefficient as the right side.

**Step 1: the sum equals $\binom{2n}{n+1}$.** Vandermonde's identity says that for nonnegative integers $m, n, r$,

$$\binom{m+n}{r} = \sum_{k=0}^{r} \binom{m}{r-k}\binom{n}{k}.$$

Take $m = n$ and $r = n + 1$:

$$\binom{2n}{n+1} = \sum_{k=0}^{n+1} \binom{n}{n+1-k}\binom{n}{k}.$$

The term $k = 0$ contains $\binom{n}{n+1} = 0$ and the term $k = n+1$ contains $\binom{n}{n+1} = 0$, so only $k = 1, \dots, n$ remain. For those $k$ we have $0 \le k-1 \le n$, and the symmetry $\binom{n}{r} = \binom{n}{n-r}$ gives $\binom{n}{n+1-k} = \binom{n}{n-(n+1-k)} = \binom{n}{k-1}$. Hence

$$\sum_{k=1}^{n} \binom{n}{k}\binom{n}{k-1} = \binom{2n}{n+1}.$$

**Step 2: express $\binom{2n}{n+1}$ through $\binom{2n+2}{n+1}$.** Apply Pascal's identity $\binom{N+1}{r} = \binom{N}{r-1} + \binom{N}{r}$ once with $N = 2n+1$, and then once more to each of the two terms with $N = 2n$:

$$
\begin{aligned}
\binom{2n+2}{n+1} &= \binom{2n+1}{n} + \binom{2n+1}{n+1} \\
&= \left[\binom{2n}{n-1} + \binom{2n}{n}\right] + \left[\binom{2n}{n} + \binom{2n}{n+1}\right] \\
&= \binom{2n}{n-1} + 2\binom{2n}{n} + \binom{2n}{n+1}.
\end{aligned}
$$

By symmetry $\binom{2n}{n-1} = \binom{2n}{2n-(n-1)} = \binom{2n}{n+1}$, so

$$\binom{2n+2}{n+1} = 2\binom{2n}{n+1} + 2\binom{2n}{n}.$$

Dividing by 2 and moving $\binom{2n}{n}$ to the other side:

$$\binom{2n}{n+1} = \frac{1}{2}\binom{2n+2}{n+1} - \binom{2n}{n}.$$

**Conclusion.** Combining the two steps,

$$\sum_{k=1}^{n} \binom{n}{k}\binom{n}{k-1} = \binom{2n}{n+1} = \binom{2n+2}{n+1}\Big/2 - \binom{2n}{n}. \;\blacksquare$$

---

## Opgave H: counting pairs from 2n elements

> Do Exercise 32 in Section 6.4.
>
> Exercise 32 in the book: Show that if $n$ is a positive integer, then
> $$\binom{2n}{2} = 2\binom{n}{2} + n^2$$
> a) using a combinatorial argument. b) by algebraic manipulation.

### a) Combinatorial argument

Let $S$ be a set of $2n$ people, made up of $n$ women $W$ and $n$ men $M$ (any split of $S$ into two disjoint halves $W$ and $M$ of size $n$ works). We count the 2-element subsets of $S$ in two ways.

**Count 1.** Choosing 2 of the $2n$ elements directly gives $\binom{2n}{2}$ subsets.

**Count 2.** Sort the pairs by where their two elements come from. Each pair is of exactly one of these three kinds:

- both in $W$: $\binom{n}{2}$ ways,
- both in $M$: $\binom{n}{2}$ ways,
- one in $W$ and one in $M$: $n$ choices for the woman and $n$ for the man, so $n \cdot n = n^2$ ways by the product rule (the pair is unordered, but the two elements are told apart by which half they are in, so nothing is counted twice).

The three kinds are disjoint and together cover every pair, so by the sum rule there are $2\binom{n}{2} + n^2$ pairs.

Both counts count the same set, so $\binom{2n}{2} = 2\binom{n}{2} + n^2$. $\blacksquare$

### b) Algebraic manipulation

Using $\binom{m}{2} = \frac{m(m-1)}{2}$ (which also gives $\binom{1}{2} = 0$ correctly for $n = 1$):

$$\binom{2n}{2} = \frac{2n(2n-1)}{2} = n(2n-1) = 2n^2 - n,$$

$$2\binom{n}{2} + n^2 = 2 \cdot \frac{n(n-1)}{2} + n^2 = n^2 - n + n^2 = 2n^2 - n.$$

The two sides are equal, so $\binom{2n}{2} = 2\binom{n}{2} + n^2$ for every positive integer $n$. $\blacksquare$

