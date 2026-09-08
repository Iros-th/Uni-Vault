---
publish: true
title: Programming Cheat Sheet
course: Programming
type: cheatsheet
tags:
  - programming
  - python
  - cheatsheet
---

# Programming cheat sheet

Alt det jeg hele tiden glemmer, samlet på én side. Python. Tænkt som et hurtigt opslag lige før en opgave eller en prøve, ikke som en lærebog. Vil du have det forklaret ordentligt, så følg linket til noten.

## Datatyper

| Type | Eksempel | Bemærk |
|------|----------|--------|
| `int` | `5` | helt tal, ingen decimaler |
| `float` | `5.0` | decimaltal, skriv med punktum. Ikke helt præcist (`0.1 + 0.2` er ikke `0.3`) |
| `str` | `"hej"` | tekst, i anførselstegn |
| `bool` | `True` / `False` | stort forbogstav |
| `list` | `[1, 2, 3]` | kan ændres, kantede parenteser |
| `tuple` | `(1, 2, 3)` | kan ikke ændres |
| `dict` | `{"navn": "Iros"}` | nøgle til værdi |
| `set` | `{1, 2, 3}` | ingen dubletter, ingen rækkefølge |

Cast med `int()`, `float()`, `str()`, `bool()` når du skal skifte type.

## Input og output

```python
navn = input("Hvad hedder du? ")   # giver altid en str
alder = int(input("Alder? "))      # husk int() hvis du skal regne
print(f"{navn} er {alder} aar")    # f-string dropper variabler ind i teksten
```

## Operatorer

| | |
|------|--------|
| `+ - * /` | plus, minus, gange, division (giver float) |
| `//` | heltalsdivision |
| `%` | rest (modulo) |
| `**` | potens |
| `== != < > <= >=` | sammenligning |
| `and or not` | logik |
| `in` | er noget med i en liste/streng |

## Betingelser

```python
if x > 0:
    print("positiv")
elif x == 0:
    print("nul")
else:
    print("negativ")
```

Husk kolon og indrykning.

## Løkker

```python
for i in range(1, 5):      # 1, 2, 3, 4  (stopper FOER 5)
    print(i)

while x < 10:              # koerer saa laenge betingelsen er sand
    x += 1                 # aendr noget, ellers loeber den evigt
```

`break` stopper hele løkken. `continue` springer resten af runden over. `enumerate(liste)` giver både index og element.

## Funktioner

```python
def laeg_sammen(a, b):
    return a + b           # return sender vaerdi ud og stopper funktionen
```

En variabel lavet inde i en funktion findes kun der (lokalt scope). Skal du bruge værdien udenfor, så `return` den.

## Lister og opslag

```python
liste[0]     # foerste element
liste[-1]    # sidste element
liste[1:4]   # element 1, 2, 3 (stopper foer 4)
d.get("nøgle")   # henter uden at crashe hvis nøglen mangler
```

## Fejlhåndtering

```python
try:
    tal = int(input("Tal: "))
except ValueError:
    print("Det var ikke et tal")
else:
    print("Gik godt")        # kun hvis intet gik galt
finally:
    print("Koerer altid")    # altid, godt til oprydning
```

Undgå bar `except:` uden fejltype, den fanger alt og skjuler dine egne fejl.

## Links

- [[Courses/Programming/Programming|Programming (kursusoversigt)]]
- [[Flashcards/Programming Flashcards|Programming flashcards]]
- [[Self-Tests/Programming Test|Programming self-test]]
- [[Reference/Programmering/Alle datatyper|Alle datatyper]]
- [[Reference/Programmering/Alle operatorer|Alle operatorer]]
