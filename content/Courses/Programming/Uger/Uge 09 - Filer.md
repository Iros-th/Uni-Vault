---
publish: true
title: "Programming uge 9: filer"
course: Programming
type: week
week: 9
tags:
  - programming
  - ugenote
---

# Uge 9: Filer

> Kilde: kursussiden programmering.compute.dtu.dk, siderne Week 9: Preparation, In-Class og Closure og Advanced. Pensum i bog: TP kapitel 13, *Files and Databases*, afsnittet *Filenames and paths*, og afsnit 7.2 om at læse filer. At skrive filer er ikke dækket i bogen, men på kursussiden.

## Emner

- Arbejdsmappe og stier med `os`
- `open()` med `'r'` og `'w'` og `with`
- Læse- og skrivemetoder
- Linjeskift og `strip()`
- CSV-filer som tekst

## Begreber

### Stier og os

Python læser filer relativt til arbejdsmappen (CWD). `os.getcwd()`, `os.listdir()`, `os.path.isfile()`, `os.path.isdir()` og `os.path.join()` hjælper med at finde filer og mapper.

```python
import os
print(os.getcwd())
print(os.path.isfile('data.txt'))
sti = os.path.join('mappe', 'data.txt')
```

### Læse en fil

`with open(...) as f` lukker filen automatisk, også ved fejl. `read()` giver hele teksten, `readlines()` en liste af linjer.

```python
with open('data.txt', 'r') as f:
    tekst = f.read()
linjer = tekst.splitlines()
print(len(linjer))
```

### Skrive en fil

Med `'w'` overskrives filen. `write()` skriver en streng, `writelines()` en liste af strenge. Linjeskift skal skrives selv.

```python
with open('ud.txt', 'w') as f:
    f.write('første linje\n')
    f.write('anden linje\n')
```

### CSV som tekst

En CSV-fil kan læses som tekst og deles med `split(',')`. Husk at fjerne linjeskift med `strip()`.

```python
with open('maalinger.csv') as f:
    for linje in f:
        dele = linje.strip().split(',')
        print(dele)
```
## Opgaver

Ugens struktur: Preparation (Copy-and-Run og selvquiz) før timen, derefter In-Class (demo, Coding Practice, Problem Solving), og til sidst Closure (syllabus og checkpoints). Hver torsdag er der quiz og live-demo 13:00 til 14:00, derefter selvstændigt arbejde med Coding Practice.

**Preparation**

- Prep 9.1: Current Working Directory (CWD)
- Prep 9.2: Accessing Files
- Prep 9.3: Reading Files
- Prep 9.4: Other Methods for Reading Files
- Prep 9.5: More About Line Breaks
- Prep 9.6: Writing to Files
- Prep 9.7: Other Methods for Writing to Files
- Prep 9.8: CSV Files
- Self Quiz: Question 9.1 til 9.20

**In-Class**

- Demo 9.1: Surname Percentage
- Code 9.2: Get Texts
- Code 9.3: Count a Letter
- Code 9.4: Letter Frequency
- Code 9.5: Combining Files
- Problem 9.6: Lix Number
- Problem 9.7: Number Lines

**Closure, checkpoints**

- Checkpoint 9.1: Nitrate Levels (klassificering af nitratværdier fra fil)
- Checkpoint 9.2: Count Differences

## Advanced (ikke pensum)

Kursussidens Advanced-side for uge 9. Ingen obligatoriske opgaver eller eksamensspørgsmål bygger på den.

- Læse en fil linje for linje med readline().
- Oprette mapper med os.mkdir() og os.makedirs().
- Tilføje til en fil (append-tilstand).
- shutil, glob og pathlib til filer og stier.
- Pickle-filer (binære, gemmer vilkårlige objekter).
- JSON- og CSV-filer.

## Links

- [[Courses/Programming/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Programming/Programming|Programming]]
- Eksisterende emnenoter (følger en generel pensumrække, ikke DTU's egen): [[10 Filhåndtering]]
