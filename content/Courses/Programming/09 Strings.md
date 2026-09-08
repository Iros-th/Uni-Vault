---
publish: true
title: Strings
course: Programming
type: note
tags:
  - programming
  - python
  - strings
  - tekst
---

# Strings

### String
- Sammensat (en streng er en sekvens af tegn)
- Tekst i anførselstegn. Du kan behandle den lidt som en liste af bogstaver, fx hente enkelte tegn ud eller tage udsnit.
- VIGTIGT: strenge er immutable. Du kan ikke ændre et enkelt bogstav direkte, du laver i stedet en ny streng.

```python
navn = "Iros"
print(navn[0])
print(navn[-1])
```

- Kilde: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str


### Slicing af strenge
- Præcis som med lister kan du tage udsnit med kolon.

```python
tekst = "programmering"
print(tekst[0:4])
print(tekst[:4])
print(tekst[4:])
```

- Kilde: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str


### Nyttige string-metoder
- Strenge har en masse indbyggede metoder. upper() og lower() ændrer store og små bogstaver, strip() fjerner mellemrum i enderne, replace() bytter tekst ud.

```python
tekst = "  Hej Med Dig  "
print(tekst.upper())
print(tekst.lower())
print(tekst.strip())
print(tekst.replace("Hej", "Hola"))
```

- Kilde: https://docs.python.org/3/library/stdtypes.html#string-methods


### split() og join()
- split() deler en streng op i en liste (godt til at læse input). join() gør det modsatte og samler en liste til en streng.

```python
saetning = "aeble banan paere"
ord = saetning.split()
print(ord)
print("-".join(ord))
```

- Kilde: https://docs.python.org/3/library/stdtypes.html#str.split


### f-strings
- Den nemmeste og pæneste måde at sætte variabler ind i tekst. Sæt f foran og skriv variabler i krøllede parenteser. Du kan endda formatere tal direkte.

```python
navn = "Iros"
pris = 19.9567
print(f"{navn} betaler {pris:.2f} kr")
```

- Kilde: https://docs.python.org/3/reference/lexical_analysis.html#f-strings


### Tjekke indhold i en streng
- Med in kan du hurtigt tjekke om en delstreng findes. startswith() og endswith() tjekker begyndelsen og slutningen.

```python
tekst = "programmering er sjovt"
print("sjovt" in tekst)
print(tekst.startswith("program"))
```

- Kilde: https://docs.python.org/3/library/stdtypes.html#string-methods


## Links
- [[Programming]]
