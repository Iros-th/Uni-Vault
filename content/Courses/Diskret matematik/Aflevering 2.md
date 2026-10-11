---
title: Aflevering 2
publish: true
tags:
  - aflevering
  - diskret-matematik
---

# Aflevering 2

## Opgave A: divisibility

### 1) If $a \mid bc$, does $a \mid b$ or $a \mid c$?

> Prove or disprove that if $a \mid bc$, where $a, b, c \in \mathbb{Z}$ and $a \neq 0$, then $a \mid b$ or $a \mid c$.

**False.** A counterexample is

$$a = 4,\quad b = 2,\quad c = 2$$

Here $bc = 4$ and $4 \mid 4$, so $a \mid bc$ holds. But $4 \nmid 2$, so $a$ divides neither $b$ nor $c$.

The problem is that $a$ can split its factors between $b$ and $c$. Here $4 = 2 \cdot 2$, and $b$ and $c$ each bring one of the 2's, so together they're divisible by 4 even though neither one is on its own. The claim only works when $a$ is prime, since a prime can't be split like that.

### 2) 5 never divides $a^2 + 2$

> Prove that if $a \in \mathbb{Z}$, then 5 does not divide $a^2 + 2$.

Every integer leaves a remainder of 0, 1, 2, 3 or 4 when divided by 5, so $a \equiv r \pmod 5$ for one of those $r$. Since congruences can be multiplied, $a^2 \equiv r^2 \pmod 5$, so we only have to check those five cases.

| $a \bmod 5$ | $a^2 \bmod 5$ | $a^2 + 2 \bmod 5$ |
| ----------- | ------------- | ----------------- |
| 0           | 0             | 2                 |
| 1           | 1             | 3                 |
| 2           | 4             | 1                 |
| 3           | 9 ≡ 4         | 1                 |
| 4           | 16 ≡ 1        | 3                 |

So a square mod 5 is always 0, 1 or 4, and $a^2 + 2$ is always 2, 3 or 1 mod 5. It's never 0, so 5 never divides $a^2 + 2$.

## Opgave B: odd squares mod 8

> Do exercise 46 in Section 4.1.
>
> Exercise 46 in the book: Prove that if $n$ is an odd positive integer, then $n^2 \equiv 1 \pmod 8$.

Since $n$ is odd we can write $n = 2k + 1$ for some integer $k \ge 0$. Then

$$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 4k(k+1) + 1$$

So $n^2 - 1 = 4k(k+1)$, and we need that to be divisible by 8.

$k$ and $k+1$ are two numbers next to each other, so one of them is even, which makes $k(k+1)$ even. Write $k(k+1) = 2m$. Then

$$n^2 - 1 = 4 \cdot 2m = 8m$$

So $8 \mid n^2 - 1$, which is exactly $n^2 \equiv 1 \pmod 8$. For example $3^2 = 9 = 8 + 1$ and $5^2 = 25 = 3 \cdot 8 + 1$.

## Opgave C: the Euclidean algorithm

### Exercise 32: gcd with the Euclidean algorithm

> Do Exercises 32 and 44 in Section 4.3.
>
> Exercise 32 in the book: Use the Euclidean algorithm to find a) $\gcd(1, 5)$. b) $\gcd(100, 101)$. c) $\gcd(123, 277)$. d) $\gcd(1529, 14039)$. e) $\gcd(1529, 14038)$. f) $\gcd(11111, 111111)$.

The Euclidean algorithm uses that $\gcd(a, b) = \gcd(b, a \bmod b)$. So we keep dividing the bigger number by the smaller one and continue with the remainder. The last remainder that isn't 0 is the gcd.

**a)** $\gcd(1, 5)$

$$5 = 5 \cdot 1 + 0$$

The remainder is 0 right away, so $\gcd(1, 5) = 1$. That's always the case with 1, since 1 divides everything.

**b)** $\gcd(100, 101)$

$$
\begin{aligned}
101 &= 1 \cdot 100 + 1 \\
100 &= 100 \cdot 1 + 0
\end{aligned}
$$

So $\gcd(100, 101) = 1$. Two numbers next to each other always have gcd 1.

**c)** $\gcd(123, 277)$

$$
\begin{aligned}
277 &= 2 \cdot 123 + 31 \\
123 &= 3 \cdot 31 + 30 \\
31 &= 1 \cdot 30 + 1 \\
30 &= 30 \cdot 1 + 0
\end{aligned}
$$

So $\gcd(123, 277) = 1$.

**d)** $\gcd(1529, 14039)$

$$
\begin{aligned}
14039 &= 9 \cdot 1529 + 278 \\
1529 &= 5 \cdot 278 + 139 \\
278 &= 2 \cdot 139 + 0
\end{aligned}
$$

So $\gcd(1529, 14039) = 139$. Checking: $1529 = 11 \cdot 139$ and $14039 = 101 \cdot 139$.

**e)** $\gcd(1529, 14038)$

$$
\begin{aligned}
14038 &= 9 \cdot 1529 + 277 \\
1529 &= 5 \cdot 277 + 144 \\
277 &= 1 \cdot 144 + 133 \\
144 &= 1 \cdot 133 + 11 \\
133 &= 12 \cdot 11 + 1 \\
11 &= 11 \cdot 1 + 0
\end{aligned}
$$

So $\gcd(1529, 14038) = 1$. Changing the bigger number by just 1 compared to d) takes the gcd from 139 down to 1.

**f)** $\gcd(11111, 111111)$

$$
\begin{aligned}
111111 &= 10 \cdot 11111 + 1 \\
11111 &= 11111 \cdot 1 + 0
\end{aligned}
$$

So $\gcd(11111, 111111) = 1$.

### Exercise 44: gcd(1001, 100001) as a linear combination

> Exercise 44 in the book: Use the extended Euclidean algorithm to express $\gcd(1001, 100001)$ as a linear combination of 1001 and 100001.

First the normal Euclidean algorithm to find the gcd:

$$
\begin{aligned}
100001 &= 99 \cdot 1001 + 902 \\
1001 &= 1 \cdot 902 + 99 \\
902 &= 9 \cdot 99 + 11 \\
99 &= 9 \cdot 11 + 0
\end{aligned}
$$

So $\gcd(1001, 100001) = 11$.

Now we go backwards. Each line above can be rewritten as "remainder = something":

$$
\begin{aligned}
11 &= 902 - 9 \cdot 99 \\
99 &= 1001 - 1 \cdot 902 \\
902 &= 100001 - 99 \cdot 1001
\end{aligned}
$$

We start from the first one and replace 99, then 902, so that only 1001 and 100001 are left:

$$
\begin{aligned}
11 &= 902 - 9 \cdot 99 \\
&= 902 - 9\,(1001 - 902) \\
&= 10 \cdot 902 - 9 \cdot 1001 \\
&= 10\,(100001 - 99 \cdot 1001) - 9 \cdot 1001 \\
&= 10 \cdot 100001 - 990 \cdot 1001 - 9 \cdot 1001 \\
&= 10 \cdot 100001 - 999 \cdot 1001
\end{aligned}
$$

**So $\gcd(1001, 100001) = 11 = 10 \cdot 100001 + (-999) \cdot 1001$.**

Checking it: $10 \cdot 100001 = 1000010$ and $999 \cdot 1001 = 999999$, and $1000010 - 999999 = 11$.
