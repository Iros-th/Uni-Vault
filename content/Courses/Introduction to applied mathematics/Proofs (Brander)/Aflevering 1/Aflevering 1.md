# Aflevering 1 - Pre-submission Draft

Working draft for Aflevering 1 hand-in problems:

## Problem 1
The product of two rational numbers is rational.
Let x, y in Q, x = a/b, y = c/d with a,b,c,d in Z and b,d != 0.
xy = (ac)/(bd). Since ac, bd are integers and bd != 0, xy in Q. Claim is true.

## Problem 2
The product of two irrational numbers is irrational.
Counterexample: sqrt(2) is irrational, but sqrt(2) * sqrt(2) = 2 is rational. Claim is false.

## Problem 3
The product of a rational and an irrational number is irrational.
Counterexample: 0 is rational, but 0 * r = 0 is rational for any irrational r. Claim is false.

## Problem 4
The product of a nonzero rational and an irrational is irrational.
Let r != 0 in Q, i in R \ Q. r = a/b with a != 0.
If ri = c/d, then i = (cb)/(da) in Q, contradiction. Claim is true.

## Problem 5 (Hand-in)
Fibonacci F(n) > n^2 for all n >= 13.
Base cases: F(13) = 233 > 169, F(14) = 377 > 196.
Induction step: F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2 = 2k^2 - 2k + 1.
Difference (2k^2 - 2k + 1) - (k^2 + 2k + 1) = k^2 - 4k = k(k-4) > 0 for k >= 14.
So F(k+1) > (k+1)^2. Proven by strong induction.
