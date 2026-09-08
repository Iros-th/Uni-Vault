---
publish: true
title: Operatorer
course: Programming
type: note
tags:
  - programming
  - python
  - operatorer
---

# Operatorer

### Aritmetiske operatorer
- De almindelige regnetegn: plus, minus, gange og dividere. Plus regnerækkefølgen fungerer som i matematik, gange og dividere før plus og minus.

```python
print(7 + 2)
print(7 - 2)
print(7 * 2)
print(7 / 2)
```

- Kilde: https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations


### Heltalsdivision og modulo
- // giver hele delen af en division uden decimaler. % (modulo) giver resten.
- VIGTIGT: modulo er super nyttig til at tjekke om et tal er lige. Hvis tal % 2 == 0 er tallet lige.

```python
print(7 // 2)
print(7 % 2)
print(10 % 2)
```

- Kilde: https://docs.python.org/3/reference/expressions.html#binary-arithmetic-operations


### Potens
- To stjerner betyder opløftet i. Ikke ^, det betyder noget helt andet i Python.

```python
print(2 ** 3)
print(9 ** 0.5)
```

- Kilde: https://docs.python.org/3/reference/expressions.html#the-power-operator


### Sammenligningsoperatorer
- De giver altid en bool (True eller False) tilbage. Bruges hele tiden i if-sætninger.
- VIGTIGT: dobbelt lighedstegn == betyder "er lig med" (sammenligning). Enkelt = betyder "sæt lig med" (tildeling). Det er nok den fejl man laver flest gange i starten.

```python
print(5 == 5)
print(5 != 3)
print(5 > 3)
print(5 <= 5)
```

- Kilde: https://docs.python.org/3/reference/expressions.html#comparisons


### Logiske operatorer
- and, or og not til at sætte betingelser sammen. and kræver at begge dele er sande, or kræver bare at mindst en er sand, not vender det om.

```python
er_voksen = True
har_billet = False
print(er_voksen and har_billet)
print(er_voksen or har_billet)
print(not har_billet)
```

- Kilde: https://docs.python.org/3/reference/expressions.html#boolean-operations


### Tildelingsoperatorer med genvej
- I stedet for at skrive x = x + 1 kan du skrive x += 1. Det virker også med minus, gange og dividere.

```python
x = 10
x += 5
x -= 2
x *= 2
print(x)
```

- Kilde: https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements


## Links
- [[Programming]]
