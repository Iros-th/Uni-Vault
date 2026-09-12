---
title: Aflevering 1
publish: true
tags:
  - aflevering
  - diskret-matematik
---

# Aflevering 1

## Opgave A: who's lying?

> In the following exercise it is very important to explain your solution and argue for its correctness. The task is not trivial, so start thinking about it in due time!
>
> On a remote island there are two types of people:
>
> - Truth sayers, that always tell the truth (everything they say is true).
> - Liars, that always lie (everything they say is false).
>
> It is not possible to distinguish between them by the way they look, but only by the truth of falsehood of the things they say.

### Peter and Signe

> Once a foreigner visited the island. There, he met two of the island's inhabitants, Peter and Signe. He asked them: "Are any of you liars?". "At least one of us is a liar", Peter replied. What are Peter and Signe (truth sayers or liars)?

So Peter says that at least one of them is a liar, which written out is $\lnot p \lor \lnot s$ (where $p$ means "Peter tells the truth" and $s$ means "Signe tells the truth"). A truth sayer always says something true and a liar always says something false, so we just check the statement against who he could be.

| $p$ | $s$ | $\lnot p \lor \lnot s$ |
| --- | --- | ---------------------- |
| T   | T   | F                      |
| T   | F   | T                      |
| F   | T   | T                      |
| F   | F   | T                      |

They can't both be truth sayers, because then $\lnot p \lor \lnot s$ would be false, and a truth sayer isn't allowed to say something false. That's the top row and it doesn't hold up.

They also can't both be liars. If Peter is a liar his statement has to be false, but the only way $\lnot p \lor \lnot s$ is false is if $p \land s$ is true, meaning they'd both be truth sayers. That contradicts Peter being a liar, so he can't be one at all.

That only leaves one option. Peter is telling the truth, and since his statement is then true with $p = T$, we're forced into $\lnot s$, so Signe is the liar.

**So Peter tells the truth and Signe lies.**

### Anne and Bob

> While the the foreigner wandered around the island, he met two other inhabitants, Anne and Bob. He asked Anne: "Are any of you truth sayers?". "If Bob is a liar, then I am also a liar", Anne replied. What are Anne and Bob?

Anne's statement is $\lnot b \rightarrow \lnot a$, which is just $a \rightarrow b$ (with $a$ meaning "Anne tells the truth" and $b$ meaning "Bob tells the truth").

| $a$ | $b$ | $\lnot b \rightarrow \lnot a$ |
| --- | --- | ----------------------------- |
| T   | T   | T                             |
| T   | F   | F                             |
| F   | T   | T                             |
| F   | F   | T                             |

Anne can't be a liar. If she were, her statement would need to be false, but $\lnot b \rightarrow \lnot a$ is only false in the row where $a = T$, and that row literally says she's a truth sayer. So a liar can never make this statement false, which means Anne has to be a truth sayer.

And once Anne is a truth sayer, her statement is true, so $a \rightarrow b$ with $a = T$ forces $b = T$.

**So Anne and Bob both tell the truth.**

### Carsten, Diana and Erika

> The foreigner kept wandering. At night he started searching for shelter for the night, but was very careful, as he knew some of the island's inhabitants to be cannibals, and it was not possible to distinguish between them by their looks. He then met three of the island's inhabitants, Carsten, Diana and Erika. He asked Carsten: "How many of you are truth sayers?". "Flam flim", Carsten replied in his own language. "What did he say?", the stranger asked Dianna. "He said 'Only one'", Diana replied. "Don't trust Diana, she is a liar. Come with me, I am not a cannibal", Erika said. "No, come with me, I am not a cannibal", Diana said. What should the stranger do?

Diana is the liar, because her statement goes directly against what Carsten says.

To put it more bluntly, Carsten's claim would mean there can only be one truth sayer, so Carsten and Diana can't both be truth sayers. Diana's claim contradicts Carsten's, and those two can't both be true at once, so Diana is the one lying.

And since Diana is a liar, that makes Erika's statement true, so Erika is a truth sayer.

**So Diana lies and Erika tells the truth.**

## Opgave B: claims in predicate logic

> Translate the following English sentences into formulas in predicate logic, and determine their truth value (justify your answer). Make sure to specify the domain for each formula. (Claims 1 to 3)
>
> Also translate each of the following formulas into English and determine their truth value and justify your answer. (Claims 4 to 6)

### Claim 1, every real number is smaller than its square

> Every real number is smaller than its square.

$$\forall x \in \mathbb{R}\,(x^2 > x)$$

**False.** Not every number is smaller than its square. Some are just equal, like $1^2 = 1$, and anything between 0 and 1 is actually bigger than its square (for example $0.5^2 = 0.25 < 0.5$).

### Claim 2, there exists a smallest positive real number

> There exists a smallest positive real number.

The claim isn't just saying "there's a positive number". It's saying one positive number is smaller than or equal to all the others, so it has to compare $x$ against every other positive $y$.

$$\exists x \in \mathbb{R}^+\,\forall y \in \mathbb{R}^+\,(x \le y)$$

**False.** In $\mathbb{R}^+$ there's always something smaller than whatever $x$ you pick, just take $x/2$, which is still positive and strictly smaller. So no positive real can be the smallest one. There's always a smaller number than $0.01$ or $0.000000001$.

### Claim 3, for every odd integer there's an even integer greater than it

> For every odd integer, there is an even integer greater than it.

$$\forall x \in \mathbb{Z}\,\big((\exists k \in \mathbb{Z},\, x = 2k+1) \rightarrow \exists y \in \mathbb{Z}\,((\exists m \in \mathbb{Z},\, y = 2m) \land y > x)\big)$$

**True.** Take any odd integer $x$. Then $x+1$ is even and $x+1 > x$, so there's always an even integer bigger than it.

### Claim 4

$$\exists x \in \mathbb{R}\,(x^5 = -1)$$

**True.** There's at least one real number whose fifth power is $-1$, namely $(-1)^5 = -1$. If it were an even power like $x^4 = -1$ it would be false, since no real number gives a negative even power.

### Claim 5

$$\forall x \in \mathbb{N}\,\exists y \in \mathbb{N}\,(y^2 = x)$$

For every natural number $x$ there's a natural number $y$ with $y^2 = x$.

**False.** That would need every natural number to be a perfect square. Take $x = 3$, there's no natural number $y$ with $y^2 = 3$. Since $y$ has to be natural you can't use decimals or negatives, so nothing works.

### Claim 6

$$\forall x \in \mathbb{R}\,\forall z \in \mathbb{R}\,\big(x < z \rightarrow \exists y \in \mathbb{R}\,(x < y < z)\big)$$

For any two real numbers $x$ and $z$, if $x$ is smaller than $z$, then there's a real number $y$ sitting strictly between them.

**True.** Whenever $x < z$ we can just take the midpoint $y = (x+z)/2$, which is still a real number, and it really does land between the two:

$$x = \frac{x+x}{2} < \frac{x+z}{2} < \frac{z+z}{2} = z$$

Both of those hold because $x < z$. So no matter how close together we pick the two numbers, as long as they aren't the same one there's always something in the gap. It'd be a different story in $\mathbb{Z}$, where the claim is false, since $x = 1$ and $z = 2$ have nothing sitting between them.

## Opgave C: can we conclude that A = B?

> Do Exercise 32 in Section 2.2. Justify your answers.
>
> Exercise 32 in the book: Can you conclude that $A = B$ if $A$, $B$, and $C$ are sets such that a) $A \cup C = B \cup C$? b) $A \cap C = B \cap C$? c) $A \cup C = B \cup C$ and $A \cap C = B \cap C$?

So we get sets $A$, $B$ and $C$, and in each case we have to say whether that information is enough to force $A = B$.

### a) $A \cup C = B \cup C$

**No.** A counterexample is

$$A = \{1\},\quad B = \{2\},\quad C = \{1,2\}$$

Here $A \cup C = \{1,2\}$ and $B \cup C = \{1,2\}$, so the two unions are equal, but $A \neq B$. The union just throws everything into one pile, so a big enough $C$ can cover up whatever $A$ and $B$ disagree about.

### b) $A \cap C = B \cap C$

**No,** not this one either. A counterexample is

$$A = \{1\},\quad B = \{2\},\quad C = \{3\}$$

Then $A \cap C = \emptyset$ and $B \cap C = \emptyset$, so the intersections agree, but again $A \neq B$. This one fails for the opposite reason: the intersection only ever sees the part of $A$ and $B$ that lives inside $C$, so if $C$ misses the disagreement entirely it can't tell the two sets apart.

### c) $A \cup C = B \cup C$ and $A \cap C = B \cap C$

**Yes.** Each one on its own leaves a hole, but together they cover for each other. So we check that everything in $A$ is in $B$, and then the same the other way round.

Take any $x \in A$. Then $x \in A \cup C$, and since $A \cup C = B \cup C$ we get $x \in B \cup C$, so $x \in B$ or $x \in C$.

If $x \in B$ we're done. If $x \in C$, then $x$ is in both $A$ and $C$, so $x \in A \cap C$. And $A \cap C = B \cap C$, so $x \in B \cap C$, which in particular gives $x \in B$.

Either way $x \in B$, so everything in $A$ is in $B$. Nothing in that argument cared which set was called which, so running it again with $A$ and $B$ swapped gives the other direction. Both sets sit inside each other, and that's the same as saying they're the same set.

**So we can conclude it in c), but not in a) or b).**

## Opgave D: surjective, injective, both or neither

> Argue whether each of the following functions are surjective, injective, both, neither, or not actually a properly defined function.
>
> 1. $f : \mathbb{N} \to \mathbb{N}$ defined as $f(x) = 2x + 3$
> 2. $f : \mathbb{N} \to \mathbb{Z}$ defined as $f(x) = x/2$ if $x$ is even, and $f(x) = -(x+1)/2$ if $x$ is odd
> 3. $f : \mathbb{R} \to \mathbb{R}$ defined as $f(x) = \sqrt{x}$
> 4. $f : \mathbb{R} \to \mathbb{R}$ defined as $f(x) = \sin(x)$
> 5. $f : \mathbb{Z}^+ \to \mathbb{R}$ defined as $f(x) = \lfloor \log_2(x) \rfloor$

Quick reminder of what we're checking each time. Injective means two different inputs never give the same output, and surjective means everything in the codomain gets hit by something. And before either of those, the rule has to give one output in the codomain for every single input, otherwise it isn't a function at all.

### 1) $f : \mathbb{N} \to \mathbb{N}$, $f(x) = 2x+3$

**Injective.** If $f(x) = f(y)$ then $2x+3 = 2y+3$, and subtracting 3 and dividing by 2 gives $x = y$. So two different inputs can never land on the same output.

**Not surjective.** Everything that comes out is odd and at least 3, so no even number is ever hit and nothing below 3 is either. $f(x) = 4$ would need $x = 1/2$, which isn't in $\mathbb{N}$.

**So this one is injective only.**

### 2) $f : \mathbb{N} \to \mathbb{Z}$, $f(x) = x/2$ for even $x$ and $f(x) = -(x+1)/2$ for odd $x$

The first few values are $f(0) = 0$, $f(1) = -1$, $f(2) = 1$, $f(3) = -2$, $f(4) = 2$, so it walks through $\mathbb{Z}$ by jumping from side to side of 0. Both rules give integers, so it's properly defined.

**Injective.** The even inputs give $x/2 \ge 0$ and the odd ones give $-(x+1)/2 \le -1$, so an even input and an odd input can never collide. Inside each half it's injective too, since $x/2 = y/2$ gives $x = y$, and $-(x+1)/2 = -(y+1)/2$ gives $x = y$ as well.

**Surjective.** Take any $n \in \mathbb{Z}$. If $n \ge 0$, use $x = 2n$, which is even and gives $f(2n) = n$. If $n < 0$, use $x = -2n-1$, which is odd and positive, and

$$f(-2n-1) = -\frac{(-2n-1)+1}{2} = -\frac{-2n}{2} = n$$

**So it's bijective.** This does use $\mathbb{N} = \{0,1,2,\dots\}$. If $\mathbb{N}$ started at 1 instead, nothing would map to 0 and it would only be injective.

### 3) $f : \mathbb{R} \to \mathbb{R}$, $f(x) = \sqrt{x}$

**Not a properly defined function.** A function from $\mathbb{R}$ to $\mathbb{R}$ has to give back a real number for every single real input, and $\sqrt{x}$ doesn't exist in $\mathbb{R}$ when $x$ is negative. So $f(-4)$ has no answer, and that already breaks it.

If the domain was just the non-negative reals it'd be a fine function, and injective too, but written the way it is here it isn't one, so there's nothing else to check.

### 4) $f : \mathbb{R} \to \mathbb{R}$, $f(x) = \sin(x)$

**Neither.**

Not injective, since $\sin$ is periodic and keeps repeating itself. For example $\sin(0) = 0$ and $\sin(2\pi) = 0$ while $0 \neq 2\pi$, so two different inputs share an output.

Not surjective, since $\sin$ only ever outputs values in $[-1,1]$ but the codomain is all of $\mathbb{R}$. Nothing maps to 2.

### 5) $f : \mathbb{Z}^+ \to \mathbb{R}$, $f(x) = \lfloor \log_2(x) \rfloor$

This one is properly defined, since $x \ge 1$ means $\log_2(x) \ge 0$ and the floor of that always exists. But it's **neither**.

Not injective. $\log_2(2) = 1$ and $\log_2(3)$ is about $1.58$, and both of those floor down to 1, so $f(2) = f(3) = 1$ with $2 \neq 3$.

Not surjective. The output is always an integer $\ge 0$ while the codomain is all of $\mathbb{R}$, so nothing maps to $0.5$ and nothing maps to $-1$.

## Opgave E: inverse images of $x^2$

> Do Exercise 44 in Section 2.3. You must read the definition given above the exercise in the book to do this exercise.
>
> The definition above the exercise: Let $f$ be a function from the set $A$ to the set $B$. Let $S$ be a subset of $B$. We define the inverse image of $S$ to be the subset of $A$ whose elements are precisely all preimages of all elements of $S$. We denote the inverse image of $S$ by $f^{-1}(S)$, so $f^{-1}(S) = \{a \in A \mid f(a) \in S\}$.
>
> Exercise 44 in the book: Let $f$ be the function from $\mathbb{R}$ to $\mathbb{R}$ defined by $f(x) = x^2$. Find a) $f^{-1}(\{1\})$. b) $f^{-1}(\{x \mid 0 < x < 1\})$. c) $f^{-1}(\{x \mid x > 4\})$.

So $f^{-1}(S)$ is just everything that gets sent into $S$:

$$f^{-1}(S) = \{a \in A \mid f(a) \in S\}$$

It isn't the inverse function, which matters here because $x^2$ doesn't have one on $\mathbb{R}$. We're only gathering up the inputs that land in $S$.

### a) $f^{-1}(\{1\})$

We want every real $x$ with $x^2 = 1$. Both $1$ and $-1$ square to 1 and nothing else does, so

$$f^{-1}(\{1\}) = \{-1, 1\}$$

### b) $f^{-1}(\{x \mid 0 < x < 1\})$

We want every real $x$ with $0 < x^2 < 1$. The part $x^2 < 1$ means $-1 < x < 1$, and the part $x^2 > 0$ just rules out $x = 0$, since squares are never negative and only 0 squares to 0. Putting those together:

$$f^{-1}(\{x \mid 0 < x < 1\}) = \{x \in \mathbb{R} \mid -1 < x < 1,\ x \neq 0\} = (-1,0) \cup (0,1)$$

### c) $f^{-1}(\{x \mid x > 4\})$

We want every real $x$ with $x^2 > 4$, which happens exactly when $|x| > 2$, so when $x$ is more than 2 away from 0 in either direction:

$$f^{-1}(\{x \mid x > 4\}) = \{x \in \mathbb{R} \mid x < -2 \text{ or } x > 2\} = (-\infty, -2) \cup (2, \infty)$$

None of the three include their endpoints, since 4 itself isn't in $\{x \mid x > 4\}$ and $x = \pm 2$ gives exactly 4.

## Opgave F: one-to-one and onto are the same thing for finite sets of equal size

> (Only for groups of size 3.) Do Exercise 74 in Section 2.3.
>
> Exercise 74 in the book: Suppose that $f$ is a function from $A$ to $B$, where $A$ and $B$ are finite sets with $|A| = |B|$. Show that $f$ is one-to-one if and only if it is onto.

Write $n$ for the shared size, so $|A| = |B| = n$. It's an "if and only if", so we have to show it both ways.

### If $f$ is one-to-one, then $f$ is onto

Suppose $f$ is injective. Then the $n$ elements of $A$ all get sent to different places, so $f(A)$ ends up with exactly $n$ elements, one for each element of $A$.

Now $f(A)$ sits inside $B$, and both of them have $n$ elements. A set inside another set can't match it for size unless it's the whole thing, so $f(A) = B$. That's exactly what onto means.

### If $f$ is onto, then $f$ is one-to-one

Suppose $f$ is onto, so $f(A) = B$ and therefore $|f(A)| = n$.

Say $f$ wasn't injective. Then two different elements $a$ and $a'$ of $A$ would share an output, so the $n$ elements of $A$ would only manage $n-1$ different outputs at most, and $|f(A)| \le n-1$. But we just said $|f(A)| = n$, so that can't happen, and $f$ is injective after all.

So for finite sets of the same size, injective and surjective are the same thing. It stops working the moment the sets are infinite though. $f : \mathbb{N} \to \mathbb{N}$ with $f(x) = 2x+3$ from Opgave D is injective without being onto, even though the domain and the codomain are the same set.
