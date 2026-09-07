---
publish: true
title: Funktioner
course: Programming
type: note
tags:
  - programming
  - python
  - funktioner
  - def
---

# Funktioner

- def (definer en funktion)
	- En funktion er en bid kode du kan genbruge. Du definerer den en gang og kalder den så mange gange du vil. Husk kolon og indrykning.

```python
def sig_hej():
    print("hej med dig")

sig_hej()
sig_hej()
```

	- Kilde: https://docs.python.org/3/tutorial/controlflow.html#defining-functions


- Parametre
	- Parametre er de værdier du sender ind i funktionen. De gør funktionen fleksibel så den kan arbejde med forskellige data.

```python
def sig_hej(navn):
    print("hej", navn)

sig_hej("Iros")
sig_hej("Anna")
```

	- Kilde: https://docs.python.org/3/tutorial/controlflow.html#defining-functions


- return
	- return sender en værdi tilbage ud af funktionen så du kan bruge den videre. Det er forskellen på at printe noget og at faktisk give et resultat tilbage.
	- VIGTIGT: så snart return køres, stopper funktionen. Kode efter return i samme blok bliver aldrig kørt.

```python
def laeg_sammen(a, b):
    return a + b

resultat = laeg_sammen(3, 4)
print(resultat)
```

	- Kilde: https://docs.python.org/3/tutorial/controlflow.html#defining-functions


- Standardværdier for parametre
	- Du kan give en parameter en standardværdi. Så kan man kalde funktionen uden at give den værdi, og den bruger bare standarden.

```python
def sig_hej(navn="ven"):
    print("hej", navn)

sig_hej()
sig_hej("Iros")
```

	- Kilde: https://docs.python.org/3/tutorial/controlflow.html#default-argument-values


- Scope (rækkevidde af variabler)
	- Variabler du laver inde i en funktion findes kun inde i funktionen. Udenfor kender Python dem ikke. Det kaldes lokalt scope.
	- VIGTIGT: prøver du at bruge en lokal variabel udenfor funktionen får du en NameError. Vil du have værdien ud, så brug return.

```python
def beregn():
    hemmelig = 42
    return hemmelig

print(beregn())
```

	- Kilde: https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces


- Flere returværdier
	- En funktion kan returnere flere ting på en gang. Python pakker dem sammen som en tuple, og du kan pakke dem ud i flere variabler.

```python
def min_og_max(tal):
    return min(tal), max(tal)

lav, hoej = min_og_max([3, 7, 1, 9])
print(lav, hoej)
```

	- Kilde: https://docs.python.org/3/tutorial/controlflow.html#defining-functions


## Links
- [[Programming]]
