---
publish: true
title: Fejlhåndtering
course: Programming
type: note
tags:
  - programming
  - python
  - fejl
  - fejlhåndtering
---

# Fejlhåndtering

### [[Glossary#try-and-except|try og except]]
- Koden i try bliver forsøgt. Går noget galt, hopper Python ned i except i stedet for at crashe hele programmet. Super til ting der kan gå galt, fx input fra en bruger.

```python
try:
    tal = int(input("Skriv et tal: "))
    print(tal * 2)
except:
    print("Det var ikke et tal")
```

- Kilde: https://docs.python.org/3/tutorial/errors.html#handling-exceptions


### Fange bestemte fejl
- Det er bedre at fange en bestemt type fejl end at fange alt. Så kommer du ikke til at skjule fejl du faktisk gerne ville vide om.
- VIGTIGT: undgå en helt bar except uden type. Den fanger ALT, også tastefejl i din egen kode, og så bliver det svært at finde ud af hvad der gik galt.

```python
try:
    tal = int("ikke et tal")
except ValueError:
    print("Kunne ikke lave om til tal")
```

- Kilde: https://docs.python.org/3/tutorial/errors.html#handling-exceptions


### Flere except-blokke
- Du kan have flere except efter hinanden til at håndtere forskellige fejl på hver sin måde.

```python
try:
    tal = int("10")
    resultat = tal / 0
except ValueError:
    print("Forkert type")
except ZeroDivisionError:
    print("Kan ikke dividere med nul")
```

- Kilde: https://docs.python.org/3/tutorial/errors.html#handling-exceptions


### else og finally
- else kører hvis der IKKE skete en fejl. finally kører altid, uanset hvad, og er god til oprydning som at lukke en fil.

```python
try:
    tal = int("42")
except ValueError:
    print("Fejl")
else:
    print("Gik godt, tallet er", tal)
finally:
    print("Færdig")
```

- Kilde: https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions


### raise (kast selv en fejl)
- Nogle gange vil du selv skabe en fejl, fx hvis input ikke giver mening. Det gør du med raise.

```python
def saet_alder(alder):
    if alder < 0:
        raise ValueError("Alder kan ikke være negativ")
    return alder

print(saet_alder(21))
```

- Kilde: https://docs.python.org/3/tutorial/errors.html#raising-exceptions


## Links
- [[Programming]]
