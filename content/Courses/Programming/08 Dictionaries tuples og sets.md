---
publish: true
title: Dictionaries, tuples og sets
course: Programming
type: note
tags:
  - programming
  - python
  - dictionaries
  - tuples
  - sets
---

# Dictionaries, tuples og sets

### [[Glossary#dict|Dictionary]]
- Sammensat
- En dictionary gemmer par af nøgle og værdi. I stedet for at hente med et tal-index henter du med nøglen. God når data hører sammen, fx navn og alder.

```python
person = {"navn": "Iros", "alder": 21}
print(person["navn"])
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#dictionaries


### Tilføje og ændre i en dictionary
- Du sætter bare en ny nøgle lig med en værdi. Findes nøglen allerede bliver den overskrevet, ellers oprettes den.

```python
person = {"navn": "Iros"}
person["alder"] = 21
person["navn"] = "Anna"
print(person)
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#dictionaries


### Løkke igennem en dictionary
- Med .items() får du både nøgle og værdi ud i en for-løkke. Der er også .keys() og .values() hvis du kun vil have den ene del.

```python
person = {"navn": "Iros", "alder": 21}
for noegle, vaerdi in person.items():
    print(noegle, "=", vaerdi)
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#looping-techniques


### get() så du undgår fejl
- Henter du en nøgle der ikke findes med kantede parenteser får du en KeyError. .get() giver i stedet None (eller en standardværdi du vælger).
- VIGTIGT: brug .get() når du ikke er sikker på at nøglen findes. Det redder dig fra en masse crashes.

```python
person = {"navn": "Iros"}
print(person.get("alder"))
print(person.get("alder", "ukendt"))
```

- Kilde: https://docs.python.org/3/library/stdtypes.html#dict.get


### [[Glossary#tuple|Tuple]]
- Sammensat
- En tuple er ligesom en liste, men den kan ikke ændres efter den er lavet (immutable). Bruges til data der hører fast sammen, fx koordinater.
- VIGTIGT: du laver den med almindelige parenteser. Prøver du at ændre et element får du en fejl, det er hele pointen med en tuple.

```python
punkt = (3, 5)
print(punkt[0])
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences


### [[Glossary#set|Set]] (mængde)
- Sammensat
- Et set er en samling uden dubletter og uden fast rækkefølge. Super til at fjerne gengangere eller tjekke om noget findes hurtigt.

```python
tal = [1, 2, 2, 3, 3, 3]
unikke = set(tal)
print(unikke)
```

- Kilde: https://docs.python.org/3/tutorial/datastructures.html#sets


## Links
- [[Programming]]
