---
publish: true
title: Terms (Introduction to Numerical Algorithms)
course: Introduction to Numerical Algorithms
type: reference
tags:
  - numerical-algorithms
  - begreber
---

# Terms: Introduction to Numerical Algorithms

Core terms for the numerical methods course. Full explanations and formulas live in the reference pages and the formula collection.

## Numbers and error

### Floating point
How a computer stores real numbers with a fixed number of digits. This is why $0.1 + 0.2 \neq 0.3$ exactly.

### Rounding error
The gap between the true value and the value the machine can actually represent.

### Absolute and relative error
Absolute error is $|x - \hat{x}|$; relative error scales it by the size of $x$.

## Methods

### Iteration
Repeating a step to get closer and closer to an answer.

### Convergence rate
How fast an iterative method approaches its answer (linear, quadratic, and so on).

### Newton's method
A root finder that follows the tangent line: $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$.

### Interpolation
Building a function that passes exactly through given data points.

### Numerical integration
Approximating a definite integral by sums, for example the trapezoidal or Simpson rule.

## Analysis

### Stability
Whether small input or rounding errors stay small through the computation.

### Big-O complexity
How the work of an algorithm grows with the problem size $n$.

## Links

- [[Introduction to Numerical Algorithms]]
- [[Reference/Formelsamling/Oversigt|Formula collection]]
- [[Glossary]]
