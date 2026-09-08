---
publish: true
title: Numerical Algorithms Test
course: Introduction to Numerical Algorithms
type: self-test
tags:
  - self-test
  - numerical-algorithms
---

# Self-test: Introduction to Numerical Algorithms

Answer each one yourself first, then click "Show answer". No score is kept, this is just for you.

**1.** Why does `0.1 + 0.2` not equal `0.3` on a computer?

> [!success]- Show answer
> Floating point stores numbers in binary with finite precision, and $0.1$ and $0.2$ have no exact finite binary form. The tiny rounding error shows up in the sum.

**2.** What is the difference between absolute and relative error?

> [!success]- Show answer
> Absolute error is $|x - \hat{x}|$. Relative error scales that by the size of the true value, $\frac{|x - \hat{x}|}{|x|}$, so it tells you the error as a fraction.

**3.** Write one step of Newton's method for finding a root of $f$.

> [!success]- Show answer
> $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$. It follows the tangent line down to the axis and repeats.

**4.** What does quadratic convergence mean in practice?

> [!success]- Show answer
> The number of correct digits roughly doubles each step. Newton's method has this near a simple root, which is why it is fast.

**5.** What does the trapezoidal rule approximate, and how?

> [!success]- Show answer
> A definite integral. It replaces the area under the curve on each subinterval with a trapezoid and adds them up.

**6.** What does it mean for an algorithm to be stable?

> [!success]- Show answer
> Small input or rounding errors stay small through the computation rather than blowing up. An unstable method can turn tiny errors into a useless answer.

## Links

- [[Self-Tests/Self-Tests|Self-tests]]
- [[Introduction to Numerical Algorithms]]
- [[Formelsamling/Programmering|Formelsamling: Programmering]]
- [[Flashcards/Flashcards|Flashcards]]
