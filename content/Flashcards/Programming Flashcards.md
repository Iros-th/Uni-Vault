---
publish: true
title: Programming Flashcards
course: Programming
type: flashcards
tags:
  - flashcards
  - programming
  - python
---

# Programming flashcards

Click a card to flip it and see the answer. Questions come from the Python notes. Try to answer before you peek.

## Types and variables

> [!question]- What does a variable actually do in Python?
> It puts a name on a value so you can reuse it later. You do not declare the type yourself, Python works it out from what you assign.

> [!question]- What is the difference between `int` and `float`?
> `int` is a whole number with no decimals. `float` has decimals and is written with a dot, not a comma. Floats are not perfectly precise, so `0.1 + 0.2` gives `0.30000000000000004`.

> [!question]- Is `"5"` the same as `5`?
> No. `"5"` is text (a `str`), `5` is a number (an `int`). You cannot add them together without converting one first, for example with `int("5")`.

> [!question]- How do you write `True` and `False` in Python?
> With a capital first letter. `true` and `false` in lowercase will not work.

> [!question]- What is casting?
> Converting one type into another with `int()`, `float()`, `str()` or `bool()`. Handy when input comes in as text but you need to do maths with it.

## Input and output

> [!question]- What does `input()` give you back, even if the user types a number?
> Always text (a string). If you want to calculate with it you have to wrap it in `int()` or `float()` first.

> [!question]- How do you drop a variable straight into a string?
> Use an f-string: put `f` before the opening quote and write the variable in curly braces, like `f"{navn} er {alder} aar"`.

## Conditions and loops

> [!question]- What is the difference between a `for` loop and a `while` loop?
> A `for` loop runs once for each element in a sequence, good when you know how many rounds. A `while` loop runs as long as a condition stays true, good when you do not know in advance.

> [!question]- What does `range(1, 5)` produce?
> The numbers 1, 2, 3, 4. It starts at the first number and stops just before the last, so 5 is not included.

> [!question]- What is the risk with a `while` loop?
> If you never change anything that makes the condition false, it loops forever and the program freezes. Always update something inside the loop.

> [!question]- What is the difference between `break` and `continue`?
> `break` stops the whole loop immediately. `continue` skips the rest of the current round and jumps to the next one.

> [!question]- What does `enumerate()` give you in a loop?
> Both the index and the element each round, so you do not have to keep a counter yourself.

## Functions

> [!question]- What keyword defines a function, and what must you remember?
> `def`. Remember the colon after the name and the indentation for the body.

> [!question]- What does `return` do, and what happens to code after it?
> It sends a value back out of the function. As soon as it runs the function stops, so any code after `return` in the same block never runs.

> [!question]- Why can you not use a variable made inside a function from outside it?
> Because it lives in local scope, it only exists inside the function. To get the value out, `return` it.

## Lists, dicts, tuples, sets

> [!question]- What index is the first element of a list, and how do you get the last?
> The first is index 0, so `liste[0]`. The last is `liste[-1]` using a negative index that counts from the end.

> [!question]- What does `liste[1:4]` return?
> Elements at positions 1, 2 and 3. Slicing runs from the start up to but not including the end position.

> [!question]- How is a tuple different from a list?
> A tuple is immutable, it cannot be changed after it is made, and you write it with ordinary parentheses. A list is mutable and uses square brackets.

> [!question]- How do you fetch a value from a dictionary without risking a KeyError?
> Use `.get()`. It returns `None` (or a default you choose) instead of crashing when the key is missing.

> [!question]- What is a set good for?
> A collection with no duplicates and no fixed order. Great for stripping repeated values out of a list or checking membership quickly.

## Error handling

> [!question]- What do `try` and `except` do?
> Code in `try` is attempted, and if something goes wrong Python jumps to `except` instead of crashing the whole program.

> [!question]- Why avoid a bare `except` with no error type?
> Because it catches everything, including typos in your own code, which makes it hard to see what actually went wrong. Catch a specific type instead.

> [!question]- What is the difference between `else` and `finally` on a try block?
> `else` runs only if no error happened. `finally` runs always, no matter what, and is good for cleanup like closing a file.

## Links

- [[Flashcards]]
- [[Courses/Programming/Programming|Programming]]
- [[Glossary]]
