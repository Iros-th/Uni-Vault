# Aflevering 1 - scribbles & sheets transcribed

![[ghb.jpg]]
![[asj.jpg]]
![[p.jpg]]

Problem Set 1 worked answers:

## Problem 1
mult identity 1 is unique in any field.
proof: assume a * x = x for all x.
take x = 1 => a * 1 = 1.
also 1 * x = x, so 1 * a = a => a * 1 = a by commutativity.
left sides match => a = 1. so identity is unique.

## Problem 2
1. r irrational => 1/r irrational. TRUE.
if 1/r = m/n with m,n in Z, m != 0, then r = n/m in Q, contradiction.
2. q rational, r irrational => q + r irrational. TRUE.
if q + r = a/b in Q, then r = a/b - q in Q, contradiction.

## Problem 3
is product of a rational and an irrational always irrational?
CLAIM: TRUE! (wait need to check what sheet 1 says about 0 * r = 0!)
proof by contradiction: let r = a/b and i be irrational.
suppose r * i = c/d in Q.
then i = (c * b) / (d * a).
since cb and da are integers and da != 0, i must be rational!
this contradicts that i is irrational.
so r * i is always irrational. ez.

## Problem 4
product of two irrationals is irrational? FALSE.
sqrt(2) * sqrt(2) = 2 in Q.

## Problem 5 (Hand-in)
fibonacci sequence F(n) > n^2 for n >= 13.
two base cases:
F(13) = 233 > 169
F(14) = 377 > 196
both hold.
inductive step:
F(k+1) = F(k) + F(k-1) > k^2 + (k-1)^2 = 2k^2 - 2k + 1.
compare to (k+1)^2:
(2k^2 - 2k + 1) - (k^2 + 2k + 1) = k^2 - 4k = k(k-4) > 0 for k >= 14.
so F(k+1) > (k+1)^2. claim is true.

---

### From sheet 2 & 3:
Problem 4:
f(x) = tan(x) on (-pi/2, pi/2).
take tan(x). its a bijection!
strictly increasing so injective, and it hits everything coz that curvy thing of when tan looks like that curvy thing stretching from -inf to +inf ykwis so surjective. inverse is arctan.

Problem 5b:
k >= 14
F(14) = 377      F(14) > 14^2
14^2 = 196
asumptions: F(k+1) = F(k) + F(k-1)
F(k) > k^2 ^ F(k-1) > (k-1)^2
Math fact 1: k^2 + (k-1)^2 > (k+1)^2 <=> k^2 - 4k > 0 (da k >= 14 må dette være sandt)
