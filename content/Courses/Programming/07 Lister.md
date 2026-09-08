---
publish: true
title: Lister
course: Programming
type: note
tags:
  - programming
  - python
  - lister
  - datastrukturer
---

# Lister

### [[Glossary#list|Liste]]
- Sammensat
- En liste er en samling af værdier i en bestemt rækkefølge. Du laver den med kantede parenteser og komma imellem. Den kan indeholde blandede typer.

```python
tal = [3, 7, 1, 9]
blandet = ["tekst", 42, True]
print(tal)
```

- Kilde: https://docs.python.org/3/tutorial/introduction.html#lists


### Adgang med [[Glossary#index|index]]
- Du henter et element ud med dets plads i firkantede parenteser.
- VIGTIGT: index starter ved 0, ikke 1. Første element er liste[0]. Negativt index tæller bagfra, så liste[-1] er det sidste.

```python
frugter = ["aeble", "banan", "paere"]
print(frugter[0])
print(frugter[-1])
```

- Kilde: https://docs.python.org/3/tutorial/introduction.html#lists


### Ændre og tilføje elementer
- Lister er mutable, altså de kan ændres efter de er lavet. append() lægger til i slutningen, insert() lægger ind på en bestemt plads.

```python
frugter = ["aeble", "banan"]
frugter.append("paere")
frugter[0] = "kirsebaer"
print(frugter)
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#more-on-lists


### Fjerne elementer
- remove() fjerner en bestemt værdi, pop() fjerner ud fra plads og giver værdien tilbage.

```python
frugter = ["aeble", "banan", "paere"]
frugter.remove("banan")
sidste = frugter.pop()
print(frugter, sidste)
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#more-on-lists


### [[Glossary#slicing|Slicing]] (udsnit)
- Du kan hente en del af en liste med kolon. liste[start:slut] tager fra start og op til (men ikke med) slut.

```python
tal = [0, 1, 2, 3, 4, 5]
print(tal[1:4])
print(tal[:3])
print(tal[3:])
```

- Kilde: https://docs.python.org/3/tutorial/introduction.html#lists


### Nyttige listefunktioner
- len() giver længden, sum() lægger sammen, sorted() sorterer, in tjekker om noget findes.

```python
tal = [3, 7, 1, 9]
print(len(tal))
print(sum(tal))
print(sorted(tal))
print(7 in tal)
```

- Kilde: https://docs.python.org/3/library/functions.html


### List comprehension
- En kompakt måde at lave en ny liste ud fra en gammel. Lidt uvant i starten men mega nyttig når man vænner sig til det.

```python
tal = [1, 2, 3, 4]
kvadrater = [x ** 2 for x in tal]
print(kvadrater)
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions


## Links
- [[Programming]]
