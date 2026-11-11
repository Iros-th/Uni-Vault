---
publish: true
title: "Programming uge 7: strenge"
course: Programming
type: week
week: 7
tags:
  - programming
  - ugenote
---

# Uge 7: Strenge

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 7: Preparation, In-Class og Closure og Advanced. Pensum i bog: TP kapitel 8, *Strings and Regular Expressions*, de første fem afsnit, samt f-strings fra andet afsnit af kapitel 13.

## Emner

- Indeksering, udsnit og negative indeks
- Strenge er immutable
- Strengmetoder, `split()` og `join()`
- `in` for strenge
- f-strings og escape-tegn
- `repr()`

## Begreber

### Indeksering og udsnit

En streng er en sekvens af tegn, og hvert tegn er selv en streng. Udsnit virker som for lister. Strenge kan ikke ændres på stedet.

```python
s = 'Python'
print(s[0], s[-1])    # P n
print(s[1:4])         # yth
# s[0] = 'J' giver TypeError
```

### Metoder

Strengmetoder giver altid en ny streng (eller et tal), fordi strenge er immutable: `upper()`, `lower()`, `find()`, `index()`, `count()`, `strip()`, `replace()`.

```python
t = '  Hej Verden  '
print(t.strip().upper())        # HEJ VERDEN
print(t.count('e'))             # 2
print('a-b-c'.replace('-', '+'))
```

### split og join

`split()` deler en streng til en liste, og `join()` samler en liste til en streng med en given skilletegn.

```python
ord = 'et to tre'.split()
print(ord)                  # ['et', 'to', 'tre']
print('-'.join(ord))        # et-to-tre
```

### f-strings og escape-tegn

En f-string indsætter udtryk i tekst og kan formatere tal. `\n` er linjeskift. `repr()` viser skjulte tegn.

```python
pi = 3.14159
navn = 'Ida'
print(f'{navn} fik {pi:.2f}')   # Ida fik 3.14
print(repr('a\nb'))             # 'a\nb'
```

### Membership

`in` tjekker, om en delstreng findes.

```python
print('yt' in 'Python')   # True
```
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 7.1: Basics of Strings
- Prep 7.2: String Indexing
- Prep 7.3: Strings Are Immutable
- Prep 7.4: Traversing Strings
- Prep 7.5: String Methods
- Prep 7.6: String Methods `split()` and `join()`
- Prep 7.7: The `in` Operator for Strings
- Prep 7.8: Everybody Loves f-strings
- Prep 7.9: Newline `\n` and Other Escape Characters
- Prep 7.10: Fix String Errors
- Prep 7.11: Predict the Output
- Self Quiz: Question 7.1 til 7.20

**In-Class**

- Demo 7.1: Most Vowels
- Demo 7.2: Standardize Address
- Code 7.3: Framed Sign
- Code 7.4: Framed Sign Function
- Code 7.5: Count Vowels
- Code 7.6: Count Vowels Function
- Code 7.7: Format Dates
- Code 7.8: Format Dates Function
- Problem 7.9: DNA Complement
- Problem 7.10: Change Case
- Problem 7.11: Generalized Palindrome
- Problem 7.12: Punctuation Check
- Problem 7.13: Code Shift

**Closure, checkpoints**

- Checkpoint 7.1: Arrival Times
- Checkpoint 7.2: Punctuation Ratio

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 7. Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Kædede strengmetoder (rækkefølgen betyder noget).
- split med maksimalt antal opdelinger.
- Unicode-tegn.
- Flere f-strings og fejlfinding med f-strings (specifikationen =).
- Flere nye linjer og flerlinjede strenge med tre anførselstegn.
- Opgave: Shake It off.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[09 Strings]]
