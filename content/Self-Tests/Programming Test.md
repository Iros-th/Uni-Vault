---
publish: true
title: Programming Test
course: Programming
type: self-test
tags:
  - self-test
  - programming
  - python
---

# Programming self-test

Twelve questions across the Python notes. Answer each one yourself first, then click "Show answer" to check. No score is kept, this is just for you.

**1.** You ask the user for their age with `input()` and try to add 1 to it, but Python complains. What went wrong and how do you fix it?

> [!success]- Show answer
> `input()` always returns text, even when the user types a number. You cannot add 1 to text. Wrap it in `int()` first, for example `alder = int(input("Hvor gammel er du? "))`.

**2.** What does `0.1 + 0.2` print in Python, and is that a bug?

> [!success]- Show answer
> It prints `0.30000000000000004`. It is not a bug in your code, it is just how computers store floating point numbers. Floats are not perfectly precise.

**3.** Write a condition that prints "voksen" only if `alder` is at least 18.

> [!success]- Show answer
> ```python
> if alder >= 18:
>     print("voksen")
> ```
> Remember the colon and the indentation on the line below.

**4.** What does `range(0, 10, 2)` produce?

> [!success]- Show answer
> The numbers 0, 2, 4, 6, 8. The third argument is the step, so it counts up in twos, and it stops before 10.

**5.** What is the difference between `break` and `continue` inside a loop?

> [!success]- Show answer
> `break` stops the whole loop immediately. `continue` skips the rest of the current round and moves on to the next one.

**6.** Why does the code after a `return` statement inside a function never run?

> [!success]- Show answer
> Because `return` ends the function on the spot. As soon as it runs, control leaves the function, so anything after it in the same block is skipped.

**7.** You made a variable inside a function and try to print it outside. You get a NameError. Why?

> [!success]- Show answer
> The variable only exists in the function's local scope. Outside the function Python does not know it. To use the value outside, `return` it from the function.

**8.** Given `frugter = ["aeble", "banan", "paere"]`, how do you get the last element without counting?

> [!success]- Show answer
> `frugter[-1]`. A negative index counts from the end, so `-1` is the last item.

**9.** What does `tal[1:4]` give you if `tal = [0, 1, 2, 3, 4, 5]`?

> [!success]- Show answer
> `[1, 2, 3]`. Slicing runs from position 1 up to but not including position 4.

**10.** Why might you use `.get()` instead of square brackets on a dictionary?

> [!success]- Show answer
> Square brackets raise a KeyError if the key is missing. `.get()` returns `None` (or a default you pass) instead, so it does not crash when you are not sure the key exists.

**11.** What is the point of a tuple compared to a list?

> [!success]- Show answer
> A tuple is immutable, it cannot be changed after it is made. You use it for data that should stay fixed together, like coordinates. A list is mutable.

**12.** Why is a bare `except:` with no error type usually a bad idea?

> [!success]- Show answer
> It catches everything, including typos and bugs in your own code, which hides the real problem. Catch a specific type like `except ValueError:` so you only handle the error you meant to.

## Links

- [[Self-Tests]]
- [[Courses/Programming/Programming|Programming]]
- [[Flashcards]]
