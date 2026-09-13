# Aflevering 1

Draft merging full answers to Problem Set 1 and Problem Set 2.

## Problem Set 1

### Problem 1
The multiplicative identity 1 is unique.
Suppose an element a satisfies a * x = x for all x in the field.
Setting x = 1 gives a * 1 = 1.
On the other hand 1 being the identity gives a * 1 = a.
The left sides agree so a = a * 1 = 1.
Any element acting as multiplicative identity is equal to 1, so the identity is unique.

### Problem 2
1. If r is irrational then 1/r is irrational. Statement is **true**.
Since 0 is rational, an irrational r is nonzero, so 1/r exists. If 1/r is rational, say 1/r = m/n with integers m, n, then r = n/m would be rational, contradiction.
2. If q is rational and r is irrational then q + r is irrational. Statement is **true**.
Suppose for contradiction that q + r = a/b is rational. Then r = a/b - q, which is a difference of rationals, hence rational. Contradiction.

### Problem 3
Is the product of a rational and an irrational number always irrational?
Wait, this is **false**! Look at the notes from the sheet: if the rational number is 0, then 0 * r = 0, which is rational.
My earlier scribble assumed r = a/b with a != 0 so I could divide by a, but when r = 0 that division is undefined.

### Problem 4
If the rational factor is nonzero, then the product of a nonzero rational and an irrational is irrational. Statement is **true**.
Let p != 0 be rational and r irrational. Write p = m/n with m, n != 0. If p * r = a/b is rational, then r = m/(np) is rational. Det vil sige at for at p*r skal være rationelt, så skal r være i Q, hvilket vi ved det ikke gør. Contradiction.

### Problem 5 (Hand-in)
The Fibonacci sequence F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).
In 5b, prove F(n) > n^2 for all n >= 13 by strong induction.
Base cases:
F(13) = 233 > 169 = 13^2
F(14) = 377 > 196 = 14^2
Both hold.
Induction hypothesis: assume F(m) > m^2 for all 13 <= m <= k (with k >= 14).
Inductive step:
F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2 = 2k^2 - 2k + 1.
Math fact 1: compare with (k+1)^2 = k^2 + 2k + 1:
(2k^2 - 2k + 1) - (k^2 + 2k + 1) = k^2 - 4k = k(k-4) > 0 (da k >= 14 må dette være sandt).
Therefore F(k+1) > (k+1)^2, completing the induction.

In 5a: Disprove existence of n_0 such that F(n) < n^2 for all n >= n_0.
Since in 5b we proved that for any n >= 14, F(n) > n^2, and there isn't a way for the sequence to skip this step n >= 14, there will always be an n where F(n) > n^2. So 5a is false.

## Problem Set 2

### Problem 1
Show |Z| = |2Z|.
Define f : Z -> 2Z by f(n) = 2n.
It is injective: if 2n = 2m then n = m.
It is surjective: any even integer has the form 2k, and f(k) = 2k.
So f is a bijection and |Z| = |2Z|.

### Problem 2
Number of subsets of S_k = {1, 2, ..., k} is 2^k.
Proof by induction on k:
Base case k = 1: S_1 = {1} has empty set and {1}, so 2 subsets, and 2^1 = 2.
Inductive step: S_{k+1} = S_k U {k+1}.
Subsets omitting k+1 are subsets of S_k (2^k).
Subsets containing k+1 are subsets of S_k with k+1 added (2^k).
Total = 2^k + 2^k = 2^{k+1}.

### Problem 3
Prove 1/(1*2) + 1/(2*3) + ... + 1/(n(n+1)) = n/(n+1).
Base case n = 1: 1/(1*2) = 1/2 and 1/(1+1) = 1/2.
Inductive step: assume formula holds for k.
Adding 1/((k+1)(k+2)):
k/(k+1) + 1/((k+1)(k+2)) = (k(k+2)+1)/((k+1)(k+2)) = (k+1)^2/((k+1)(k+2)) = (k+1)/(k+2).
Done by induction.

### Problem 4
Find a bijection between (-pi/2, pi/2) and R.
Take f(x) = tan(x) on (-pi/2, pi/2).
It is injective because tan is strictly increasing on this interval.
It is surjective: tan(x) -> -inf as x -> -pi/2+ and tan(x) -> +inf as x -> pi/2-.
Because tan is continuous, by the intermediate value theorem (that curvy graph of tan that spans all of R), it hits every real value.
So tan is a bijection, and its inverse is arctan.

### Problem 6
Multiplicative inverse in C:
Write z = a + bi != 0.
Then z^-1 = (a - bi)/(a^2 + b^2) satisfies z * z^-1 = 1.
Uniqueness follows from associativity: w = w * 1 = w * (z * w') = (w * z) * w' = 1 * w' = w'.

### Problem 7
- Bijective maps R -> R form a group under composition.
- Injective maps R -> R do not form a group.
