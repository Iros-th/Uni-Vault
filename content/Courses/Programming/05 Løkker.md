---
publish: true
title: Løkker
course: Programming
type: note
tags:
  - programming
  - python
  - løkker
  - for
  - while
---

# Løkker

### [[Glossary#for-loop|for-løkke]]
- Gentager noget for hvert element i en sekvens, fx en liste eller en streng. Rigtig god når du ved hvor mange gange du skal køre, eller når du vil igennem alle elementer.

```python
frugter = ["aeble", "banan", "paere"]
for frugt in frugter:
    print(frugt)
```

- Kilde: https://docs.python.org/3/tutorial/controlflow.html#for-statements


### [[Glossary#range|range()]]
- Sammensat (range laver en sekvens af tal)
- Bruges sammen med for når du bare vil tælle. range(5) giver 0, 1, 2, 3, 4.
- VIGTIGT: range tæller fra 0 og stopper LIGE FØR det sidste tal. range(1, 5) giver 1, 2, 3, 4 og ikke 5.

```python
for i in range(5):
    print(i)

for i in range(1, 5):
    print(i)
```

- Kilde: https://docs.python.org/3/library/functions.html#func-range


### range med skridt
- range kan tage et tredje tal der bestemmer hvor meget den hopper hver gang. Kan også være negativt hvis du vil tælle nedad.

```python
for i in range(0, 10, 2):
    print(i)
```

- Kilde: https://docs.python.org/3/library/functions.html#func-range


### [[Glossary#while-loop|while-løkke]]
- Kører så længe betingelsen er sand. God når du ikke ved på forhånd hvor mange gange det skal køre.
- VIGTIGT: husk at ændre på noget inde i løkken så betingelsen på et tidspunkt bliver falsk. Ellers kører den i evig løkke og programmet fryser.

```python
tal = 0
while tal < 5:
    print(tal)
    tal += 1
```

- Kilde: https://docs.python.org/3/reference/compound_stmts.html#the-while-statement


### break og continue
- break stopper løkken helt med det samme. continue springer resten af den aktuelle omgang over og går videre til næste.

```python
for i in range(10):
    if i == 5:
        break
    if i % 2 == 0:
        continue
    print(i)
```

- Kilde: https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements


### [[Glossary#enumerate|enumerate()]]
- Hvis du både vil have elementet og dets plads (index) i en løkke, så er enumerate smart. Så slipper du for at holde styr på en tæller selv.

```python
frugter = ["aeble", "banan", "paere"]
for i, frugt in enumerate(frugter):
    print(i, frugt)
```

- Kilde: https://docs.python.org/3/library/functions.html#enumerate


## Links
- [[Programming]]
