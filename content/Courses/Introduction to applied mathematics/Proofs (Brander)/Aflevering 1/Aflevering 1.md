# Aflevering 1 (kladde / quick notes)

PS 1 quick answers & rough work:

## Problem 1
Multiplicative identity 1 is unique.
Suppose an element a satisfies a * x = x for all x.
Put x = 1: a * 1 = 1.
Since 1 is identity: a * 1 = a.
Both sides equal a * 1, so a = 1. Done, unique!

## Problem 2
1. If r is irrational is 1/r irrational?
True. Since 0 is rational, r != 0. If 1/r = m/n with m, n integers, then r = n/m, so r would be rational, contradiction.
2. If q is rational and r is irrational is q + r irrational?
True. If q + r = a/b rational, then r = a/b - q (rational minus rational is rational), contradiction.

## Problem 3
Product of two rationals is rational:
(a/b) * (c/d) = (ac)/(bd). ac and bd are integers, bd != 0. True.

## Problem 4
Product of two irrationals is irrational?
False. Counterexample: sqrt(2) * sqrt(2) = 2, which is rational.

## Problem 5 (Hand-in problem)
Fibonacci inequality: F(n) > n^2 for n >= 13.
F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8, F(7)=13, F(8)=21, F(9)=34, F(10)=55, F(11)=89, F(12)=144, F(13)=233, F(14)=377.
Base cases:
F(13) = 233 > 13^2 = 169 (holds)
F(14) = 377 > 14^2 = 196 (holds)
Induction step:
F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2 = 2k^2 - 2k + 1.
Need 2k^2 - 2k + 1 > (k+1)^2 = k^2 + 2k + 1.
Difference: (2k^2 - 2k + 1) - (k^2 + 2k + 1) = k^2 - 4k = k(k-4) > 0 for k >= 14.
So F(k+1) > (k+1)^2 holds for all k >= 14 by strong induction.
