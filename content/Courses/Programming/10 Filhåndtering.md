---
publish: true
title: Filhåndtering
course: Programming
type: note
tags:
  - programming
  - python
  - filer
  - filhaandtering
---

# Filhåndtering

### open()
- Åbner en fil så du kan læse eller skrive i den. Andet argument bestemmer hvad du vil: "r" for read (læse), "w" for write (skrive), "a" for append (tilføje).
- VIGTIGT: "w" sletter alt der stod i filen i forvejen. Vil du bevare det gamle indhold og bare tilføje, så brug "a".

```python
fil = open("noter.txt", "w")
fil.write("hej fra Python")
fil.close()
```

- Kilde: https://docs.python.org/3/library/functions.html#open


### with (den anbefalede måde)
- with sørger for at filen automatisk bliver lukket bagefter, også hvis der sker en fejl undervejs. Så slipper du for at huske close() selv.
- VIGTIGT: brug altid with når du kan. Glemmer du at lukke en fil selv kan data gå tabt eller filen blive låst.

```python
with open("noter.txt", "w") as fil:
    fil.write("hej fra Python")
```

- Kilde: https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files


### Læse en hel fil
- read() henter hele indholdet som en streng. God til små filer hvor du bare vil have det hele.

```python
with open("noter.txt", "r") as fil:
    indhold = fil.read()
print(indhold)
```

- Kilde: https://docs.python.org/3/tutorial/inputoutput.html#methods-of-file-objects


### Læse linje for linje
- Du kan køre en for-løkke direkte over filen, så får du en linje ad gangen. Det er skånsomt for hukommelsen ved store filer.

```python
with open("noter.txt", "r") as fil:
    for linje in fil:
        print(linje.strip())
```

- Kilde: https://docs.python.org/3/tutorial/inputoutput.html#methods-of-file-objects


### Skrive flere linjer
- write() tilføjer ikke selv linjeskift, det skal du gøre med \n. Vil du tilføje til en eksisterende fil, så brug "a".

```python
with open("noter.txt", "a") as fil:
    fil.write("linje 1\n")
    fil.write("linje 2\n")
```

- Kilde: https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files


## Links
- [[Programming]]
