---
publish: true
title: Input og output
course: Programming
type: note
tags:
  - programming
  - python
  - input
  - output
---

# Input og output

### [[Glossary#print|print()]]
- Skriver noget ud i konsollen. Det er det første du bruger til at se om din kode overhovedet gør noget.
- Du kan skrive flere ting i samme print ved at sætte komma imellem, så laver Python selv et mellemrum.

```python
print("hej")
print("summen er", 2 + 3)
```

- Kilde: https://docs.python.org/3/library/functions.html#print


### [[Glossary#input|input()]]
- Sammensat (det du får tilbage er altid en streng)
- Beder brugeren om at skrive noget. Teksten du giver med er det spørgsmål der vises.
- VIGTIGT: input() giver ALTID tekst tilbage, også selvom brugeren skriver et tal. Vil du regne med det skal du pakke det ind i int() eller float() først.

```python
navn = input("Hvad hedder du? ")
print("Hej", navn)
```

- Kilde: https://docs.python.org/3/library/functions.html#input


### input konverteret til tal
- Det klassiske nybegynderproblem: du får et tal ind som tekst og undrer dig over at plus ikke virker. Løsningen er at caste med det samme.

```python
alder = int(input("Hvor gammel er du? "))
print("Om et aar er du", alder + 1)
```

- Kilde: https://docs.python.org/3/library/functions.html#int


### print med sep og end
- print har to smarte muligheder. sep bestemmer hvad der kommer mellem tingene, og end bestemmer hvad der kommer til sidst (normalt et linjeskift).

```python
print("a", "b", "c", sep="-")
print("ingen linjeskift her", end=" ")
print("saa fortsaetter det")
```

- Kilde: https://docs.python.org/3/library/functions.html#print


### f-strings til pæn output
- Den nemmeste måde at blande tekst og variabler. Sæt et f foran anførselstegnet og skriv variabler i krøllede parenteser.

```python
navn = "Iros"
alder = 21
print(f"{navn} er {alder} aar gammel")
```

- Kilde: https://docs.python.org/3/reference/lexical_analysis.html#f-strings


## Links
- [[Programming]]
