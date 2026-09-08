---
publish: true
title: Klasser og OOP
course: Programming
type: note
tags:
  - programming
  - python
  - klasser
  - oop
---

# Klasser og OOP

### Klasse
- Sammensat
- En klasse er en skabelon for et objekt. Tænk på den som en tegning, og objekterne er de faktiske ting du bygger ud fra tegningen. OOP står for objektorienteret programmering.

```python
class Hund:
    pass

min_hund = Hund()
print(min_hund)
```

- Kilde: https://docs.python.org/3/tutorial/classes.html


### __init__ og attributter
- __init__ er en speciel metode der kører automatisk når du laver et nyt objekt. Her sætter du objektets attributter (dets data).
- VIGTIGT: self henviser til objektet selv og skal altid være første parameter i metoderne. Du skriver det ikke med når du kalder, Python gør det selv.

```python
class Hund:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

fido = Hund("Fido", 3)
print(fido.navn, fido.alder)
```

- Kilde: https://docs.python.org/3/tutorial/classes.html#class-objects


### Metoder
- Metoder er funktioner der hører til en klasse. De kan bruge objektets egne attributter via self.

```python
class Hund:
    def __init__(self, navn):
        self.navn = navn

    def goe(self):
        print(self.navn, "siger vov")

fido = Hund("Fido")
fido.goe()
```

- Kilde: https://docs.python.org/3/tutorial/classes.html#method-objects


### Objekter (instanser)
- Et objekt er en konkret udgave lavet ud fra klassen. Du kan lave lige så mange du vil, og de har hver deres egne data.

```python
class Hund:
    def __init__(self, navn):
        self.navn = navn

fido = Hund("Fido")
rex = Hund("Rex")
print(fido.navn, rex.navn)
```

- Kilde: https://docs.python.org/3/tutorial/classes.html#instance-objects


### Arv
- En klasse kan arve fra en anden. Den får så alle metoder og attributter fra forældreklassen, og du kan tilføje eller ændre efter behov. Det sparer en masse gentagelse.

```python
class Dyr:
    def __init__(self, navn):
        self.navn = navn

    def spis(self):
        print(self.navn, "spiser")

class Hund(Dyr):
    def goe(self):
        print(self.navn, "siger vov")

fido = Hund("Fido")
fido.spis()
fido.goe()
```

- Kilde: https://docs.python.org/3/tutorial/classes.html#inheritance


### __str__ til pæn udskrift
- Uden __str__ ser et objekt kryptisk ud når du printer det. Med __str__ bestemmer du selv hvordan det skal vises.

```python
class Hund:
    def __init__(self, navn):
        self.navn = navn

    def __str__(self):
        return f"Hund ved navn {self.navn}"

print(Hund("Fido"))
```

- Kilde: https://docs.python.org/3/reference/datamodel.html#object.__str__


## Links
- [[Programming]]
