---
publish: true
title: Speedrun Map (Programming)
course: Programming
type: speedrun-map
tags:
  - programming
  - python
  - speedrun
  - studieplan
---

# Speedrun Map: Programming (Python)

Hurtigste vej gennem faget: emnerne i den bedste læringsrækkefølge, med timer, eksamensvægt og hvor du lærer dem bedst. Se [[Programming|kursusforsiden]] og [[Courses/Programming/Cheat Sheet|Cheat Sheet]].

> **Pensum-hul:** [[Courses/Programming/Pensum|Pensum]] og alle 13 [[Courses/Programming/Lektioner/index|lektionsskabeloner]] er tomme, og [[Courses/Programming/Past Exams|Past Exams]] har ingen sæt. Kursusforsiden siger selv at de 12 noter følger "standard intro Python curriculum", fordi det præcise DTU-pensum ikke kunne læses. Emnerne her følger de 12 noter, og undervisningssproget er Python. Eksamensvægt er mit skøn ud fra standardforløbet, ikke en officiel fordeling; eksamensformen (skriftlig, hjælpemidler) er ukendt.

**Forklaring:** ★ = Jitty ([Computer Engineering Jitty](https://www.youtube.com/@compengineerjitty) på YouTube, Python Part 1 til 19). Jitty dækker ikke filhåndtering, fejlhåndtering og klasser; dér bruger jeg Corey Schafer og CS50P, og officielle Python-docs som opslag. Alle links er fundet og tjekket.

## Overblik

| # | Emne | Timer | Eksamensvægt |
|---|------|-------|--------------|
| 1 | Grundlæggende: variabler, typer, input/output, operatorer | 5 | høj |
| 2 | Kontrolflow: betingelser og løkker | 6 | høj |
| 3 | Funktioner | 5 | høj |
| 4 | Samlinger og strings | 8 | høj |
| 5 | Fejlhåndtering | 3 | middel |
| 6 | Filhåndtering | 3 | middel |
| 7 | Klasser og OOP | 6 | middel til høj |
| 8 | Eksamensteknik: læse, spore og skrive kode | 4 | høj |
| | **Samlet** | **40** | |

---

## 1. Grundlæggende (ca. 5 t, vægt: høj)

*Hvorfor høj:* alt senere hviler på det, og små fejl her (heltalsdivision, input giver tekst) koster point overalt. Noter: [[Courses/Programming/01 Variabler og datatyper|01]], [[Courses/Programming/02 Input og output|02]], [[Courses/Programming/03 Operatorer|03]].

### 1.1 Variabler og datatyper (ca. 1,5 t)
- **Variabel:** et navn på en værdi; tildeling med `=`. Se [[Courses/Programming/01 Variabler og datatyper|Variabler og datatyper]].
- **Typer:** `int`, `float`, `str`, `bool`; `type()` viser typen. Se [[Reference/Programmering/Alle datatyper|Alle datatyper]].
- **Casting:** `int()`, `float()`, `str()`, `bool()`.
- **Flydende komma:** `0.1 + 0.2` er ikke præcis `0.3`.
- **Typisk opgave:** hvad udskriver programmet, og hvilken type har udtrykket?

**Lær det her:** [★ Jitty: Introduction to Python, The 4 Data Types](https://www.youtube.com/watch?v=jqKB9H_5eN0) · [★ Jitty: Python Part 2, Introduction to Variables](https://www.youtube.com/watch?v=ggwRwy-u7tI) · [★ Jitty: Python Part 1, Printing, Commenting, and String Concatenation](https://www.youtube.com/watch?v=xEddYwojqAc) · [CS50P: Lecture 0, Functions, Variables](https://www.youtube.com/watch?v=JP7ITIXGpHk) · [Python docs: An Informal Introduction](https://docs.python.org/3/tutorial/introduction.html) · [Python docs: Floating-Point Arithmetic](https://docs.python.org/3/tutorial/floatingpoint.html)
**Øv:** skriv 10 udtryk og forudsig typen før du kører dem.

### 1.2 Input og output (ca. 1 t)
- **`input()`** giver altid en `str`; cast før du regner. Se [[Courses/Programming/02 Input og output|Input og output]].
- **`print()`** med `sep` og `end`; **f-strings** til formatering.
- **Typisk opgave:** læs to tal, udskriv resultatet pænt formateret.

**Lær det her:** [★ Jitty: Python Part 4, Built-In Functions: User Input, Type Casting](https://www.youtube.com/watch?v=EcjNGidGJ9c) · [Corey Schafer: F-Strings, advanced string formatting](https://www.youtube.com/watch?v=nghuHvKLhJA) · [Python docs: Input and Output](https://docs.python.org/3/tutorial/inputoutput.html)
**Øv:** et program der spørger om navn og alder og siger hvornår du fylder 100.

### 1.3 Operatorer (ca. 1,5 t)
- **Aritmetik:** `+ - * / // % **`; `/` giver altid `float`, `//` heltalsdivision, `%` rest. Se [[Courses/Programming/03 Operatorer|Operatorer]] og [[Reference/Programmering/Alle operatorer|Alle operatorer]].
- **Sammenligning og logik:** `== != < > <= >=`, `and or not`, `in`.
- **Præcedens:** `**` før `*` før `+`; brug parenteser.
- **Typisk opgave:** er et tal lige (`% 2`), ciffersum med `//` og `%`.

**Lær det her:** [★ Jitty: Python Part 7, If Statements, Conditionals, and Logical Operators](https://www.youtube.com/watch?v=EZ5DjcLuktQ) · [★ Jitty: Python Part 5, Libraries and Modules (Math, Time, Random)](https://www.youtube.com/watch?v=fS0h8l6ZEP4) · [CS50P: Lecture 0](https://www.youtube.com/watch?v=JP7ITIXGpHk)
**Øv:** udregn $17//5$, $17\%5$, $-17//5$ i hånden og kontrollér.

### Mastery checklist: grundlæggende
- [ ] Jeg kan forudsige typen og værdien af ethvert simpelt udtryk.
- [ ] Jeg husker at `input()` giver tekst.
- [ ] Jeg kender forskellen på `/`, `//` og `%`.

---

## 2. Kontrolflow: betingelser og løkker (ca. 6 t, vægt: høj)

*Hvorfor høj:* næsten hver eksamensopgave bruger `if` og `for`/`while`. Noter: [[Courses/Programming/04 Betingelser|04]], [[Courses/Programming/05 Løkker|05]].

### 2.1 Betingelser (ca. 2 t)
- **`if` / `elif` / `else`** med kolon og indrykning. Se [[Courses/Programming/04 Betingelser|Betingelser]] og [[Reference/Programmering/Kontrolstrukturer|Kontrolstrukturer]].
- **Sammensatte betingelser** med `and`/`or`/`not`; **sandhedsværdier** (tom streng og 0 er falsk).
- **Typisk opgave:** klassificér et tal eller en karakter; skriv en betingelseskæde uden overlap.

**Lær det her:** [★ Jitty: Python Part 7, If Statements, Conditionals, and Logical Operators](https://www.youtube.com/watch?v=EZ5DjcLuktQ) · [Corey Schafer: Conditionals and Booleans](https://www.youtube.com/watch?v=DZwmZ8Usvnk) · [CS50P: Lecture 1, Conditionals](https://www.youtube.com/watch?v=_b6NgY_pMdw)
**Øv:** skriv FizzBuzz og en skudårsfunktion.

### 2.2 `for`-løkker (ca. 2 t)
- **`for x in ...`** og **`range(start, stop, step)`** (stopper før `stop`). Se [[Courses/Programming/05 Løkker|Løkker]].
- **`enumerate`** giver index og element.
- **Nestede løkker** til mønstre og tabeller.

**Lær det her:** [★ Jitty: Python Part 9, Introduction to For Loops, Range and Enumerate](https://www.youtube.com/watch?v=n1WxFHaUlIE) · [★ Jitty: Python Part 12, Nested For Loops, Staircase Print Problem](https://www.youtube.com/watch?v=KFEWt7x0mrs) · [Corey Schafer: Loops and Iterations](https://www.youtube.com/watch?v=6iF8Xb7Z3wQ)
**Øv:** udskriv en trekant og en gangetabel.

### 2.3 `while`, `break`, `continue` (ca. 2 t)
- **`while`** kører så længe betingelsen er sand; ændr noget i løkken, ellers løber den evigt.
- **`break` / `continue` / `pass`.**
- **Typisk opgave:** bliv ved at spørge til input er gyldigt; akkumulér en sum til en grænse.

**Lær det her:** [★ Jitty: Python Part 8, While Loops and Loop Controllers](https://www.youtube.com/watch?v=jSDaK1W6tbY) · [Corey Schafer: Else Clauses on Loops](https://www.youtube.com/watch?v=Dh-0lAyc3Bc)
**Øv:** gæt-et-tal-spil med `while`.

### Mastery checklist: kontrolflow
- [ ] Jeg kan spore en løkke i hånden med en variabeltabel.
- [ ] Jeg ved hvad `range(1, 5)` giver.
- [ ] Jeg undgår uendelige løkker og kan bruge `break`.

---

## 3. Funktioner (ca. 5 t, vægt: høj)

*Hvorfor høj:* eksamensopgaver bliver oftest stillet som "skriv en funktion der ...". Note: [[Courses/Programming/06 Funktioner|Funktioner]].

### 3.1 Definition, parametre og `return` (ca. 2 t)
- **`def`** og kald; `return` sender værdi ud og stopper funktionen (uden `return` får du `None`).
- **Scope:** variabler inde i funktionen er lokale; se [[Glossary]].
- **Typisk opgave:** skriv `max_of_three`, `is_prime`, `count_vowels`.

**Lær det her:** [★ Jitty: Python Part 3, Functions, Scope, Arguments and Return](https://www.youtube.com/watch?v=5ZZYq31DgYU) · [Corey Schafer: Functions](https://www.youtube.com/watch?v=9Os0o3wzS_I)
**Øv:** 5 små funktioner; skriv for hver 3 testkald.

### 3.2 Standardargumenter og `*args`/`**kwargs` (ca. 1,5 t)
- **Standardværdier:** `def f(x, n=2)`; ændringsbare standardværdier er en fælde.
- **Nøgleordsargumenter,** `*args` og `**kwargs`.

**Lær det her:** [★ Jitty: Python Part 16, Keyword Arguments and Default Parameters](https://www.youtube.com/watch?v=PjZP4ySCH1s) · [★ Jitty: Python Part 17, *Args and **Kwargs](https://www.youtube.com/watch?v=Ztafbz-dDWM)
**Øv:** funktion med standardargument og en der summerer vilkårligt mange tal.

### 3.3 Rekursion (ca. 1,5 t)
- **Basistilfælde + rekursivt kald** der nærmer sig basistilfældet.
- **Eksempler:** fakultet, Fibonacci.
- **Typisk opgave:** spor et rekursivt kald; omskriv en løkke til rekursion.

**Lær det her:** [★ Jitty: Python Part 18, Recursion, Fibonacci Sequence and Factorial](https://www.youtube.com/watch?v=XEhNGKCbnFg) · [CS50P: Lecture 0](https://www.youtube.com/watch?v=JP7ITIXGpHk)
**Øv:** rekursiv sum af en liste og rekursiv potens.

### Mastery checklist: funktioner
- [ ] Jeg forklarer forskellen på `print` og `return`.
- [ ] Jeg kan skrive en funktion med standardargument.
- [ ] Jeg kan spore et rekursivt kald trin for trin.

---

## 4. Samlinger og strings (ca. 8 t, vægt: høj)

*Hvorfor høj:* data bor i lister, dictionaries og strings; eksamensopgaver er ofte "behandl disse data". Noter: [[Courses/Programming/07 Lister|07]], [[Courses/Programming/08 Dictionaries tuples og sets|08]], [[Courses/Programming/09 Strings|09]].

### 4.1 Lister (ca. 2,5 t)
- **Index og slicing:** `l[0]`, `l[-1]`, `l[1:4]` (stopper før 4). Se [[Courses/Programming/07 Lister|Lister]].
- **Metoder:** `append`, `pop`, `insert`, `sort`, `reverse`; lister kan ændres.
- **2D-lister** og indeksering `m[i][j]`.
- **Comprehensions:** `[x*x for x in l if x > 0]`.
- **Typisk opgave:** find maksimum/gennemsnit uden indbyggede funktioner; filtrér en liste.

**Lær det her:** [★ Jitty: Python Part 6, Introduction to Lists](https://www.youtube.com/watch?v=fRCT_A78hNM) · [★ Jitty: Python Part 13, 2D Lists and Indexing](https://www.youtube.com/watch?v=lEHolV2ZhPg) · [★ Jitty: Python Part 19, List and Dictionary Comprehension](https://www.youtube.com/watch?v=wFGK17SEtIM) · [Corey Schafer: Slicing Lists and Strings](https://www.youtube.com/watch?v=ajrtAuDg3yw) · [Python docs: Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
**Øv:** vend en liste uden `reverse`, find dubletter, transponér en matrix.

### 4.2 Dictionaries, tuples og sets (ca. 2,5 t)
- **Dictionary:** nøgle til værdi; `get()` crasher ikke; `keys/values/items`. Se [[Courses/Programming/08 Dictionaries tuples og sets|Dictionaries, tuples og sets]].
- **Tuple:** kan ikke ændres; pakkes ud med `a, b = t`.
- **Set:** ingen dubletter, ingen rækkefølge; union, fællesmængde.
- **Typisk opgave:** tæl ordfrekvenser med en dictionary; fjern dubletter med et set.

**Lær det her:** [★ Jitty: Python Part 14, Dictionaries and Dictionary Methods](https://www.youtube.com/watch?v=7X4imbBOtVc) · [★ Jitty: Python Part 15, Introduction to Tuples and Sets](https://www.youtube.com/watch?v=T-h2qzlofKs) · [Corey Schafer: Dictionaries](https://www.youtube.com/watch?v=daefaLgNkw0) · [Corey Schafer: Lists, Tuples, and Sets](https://www.youtube.com/watch?v=W8KRzm-HUcc)
**Øv:** ordfrekvens på en tekst; sæt-operationer på to lister.

### 4.3 Strings (ca. 3 t)
- **Index/slicing** som lister, men strings kan ikke ændres. Se [[Courses/Programming/09 Strings|Strings]].
- **Metoder:** `split`, `join`, `strip`, `replace`, `find`, `upper/lower`. Se [[Reference/Programmering/String metoder|String metoder]].
- **Formatering:** f-strings og `format`.
- **Typisk opgave:** tæl vokaler, tjek palindrom, vend ord.

**Lær det her:** [★ Jitty: Python Part 10, String Indexing](https://www.youtube.com/watch?v=9G7RGtEfYG8) · [★ Jitty: Python Part 11, String Methods and Formatting](https://www.youtube.com/watch?v=y6vKbClUOgo) · [Corey Schafer: Strings, Working with Textual Data](https://www.youtube.com/watch?v=k9TUPpGqYTo) · [Python docs: String methods](https://docs.python.org/3/library/stdtypes.html)
**Øv:** palindromtjek, Caesar-chiffer, tæl ord.

### Mastery checklist: samlinger og strings
- [ ] Jeg kan slicing med negative index og `step`.
- [ ] Jeg vælger rigtig struktur (liste, dict, set, tuple) til en opgave.
- [ ] Jeg kan tælle forekomster med en dictionary.
- [ ] Jeg kender de 8 vigtigste string-metoder.

---

## 5. Fejlhåndtering (ca. 3 t, vægt: middel)

*Hvorfor middel:* mindre emne, men giver nemme point. Note: [[Courses/Programming/12 Fejlhåndtering|Fejlhåndtering]].

### 5.1 `try`/`except` (ca. 3 t)
- **Struktur:** `try`, `except Type`, `else` (kun hvis intet gik galt), `finally` (kører altid). Se [[Courses/Programming/12 Fejlhåndtering|Fejlhåndtering]].
- **Typiske fejl:** `ValueError`, `TypeError`, `KeyError`, `IndexError`, `ZeroDivisionError`, `FileNotFoundError`. Se [[Reference/Programmering/Fejltyper|Fejltyper]].
- **Undgå bar `except:`;** den skjuler dine egne fejl.
- **`raise`** til egne fejl.
- **Typisk opgave:** bliv ved at spørge til brugeren giver et gyldigt tal.

**Lær det her:** [Corey Schafer: Using Try/Except Blocks for Error Handling](https://www.youtube.com/watch?v=NIWwJbo-9_8) · [CS50P: Lecture 3, Exceptions](https://www.youtube.com/watch?v=LW7g1169v7w) · [Python docs: Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html) · [Python docs: Built-in Exceptions](https://docs.python.org/3/library/exceptions.html) · ★ Jitty: ingen video om fejlhåndtering fundet.
**Øv:** `safe_int(tekst)` der returnerer `None` ved fejl.

### Mastery checklist: fejlhåndtering
- [ ] Jeg kan skrive `try/except/else/finally` og forklare hver del.
- [ ] Jeg fanger bestemte fejltyper, ikke alt.

---

## 6. Filhåndtering (ca. 3 t, vægt: middel)

*Hvorfor middel:* typisk én delopgave; kombinér med strings og fejlhåndtering. Note: [[Courses/Programming/10 Filhåndtering|Filhåndtering]].

### 6.1 Læse og skrive filer (ca. 3 t)
- **`with open(navn, "r"|"w"|"a") as f:`** lukker filen automatisk. Se [[Courses/Programming/10 Filhåndtering|Filhåndtering]].
- **Læs:** `f.read()`, `f.readline()`, `for linje in f`; `strip()` fjerner linjeskift.
- **Skriv:** `f.write()` (husk `\n`); `"w"` overskriver, `"a"` tilføjer.
- **CSV** som alternativ.
- **Typisk opgave:** læs tal fra en fil og skriv summen til en anden; tæl linjer/ord.

**Lær det her:** [Corey Schafer: File Objects, Reading and Writing to Files](https://www.youtube.com/watch?v=Uh2ebFW8OYM) · [CS50P: Lecture 6, File I/O](https://www.youtube.com/watch?v=KD-Yoel6EVQ) · [Corey Schafer: CSV Module](https://www.youtube.com/watch?v=q5uM4VKywbA) · [Python docs: Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html) · ★ Jitty: ingen video om filer fundet.
**Øv:** læs en tekstfil, tæl ord, skriv de 10 hyppigste til en ny fil.

### Mastery checklist: filhåndtering
- [ ] Jeg bruger altid `with open`.
- [ ] Jeg kender forskel på `"r"`, `"w"` og `"a"`.
- [ ] Jeg kan læse en fil linje for linje og behandle data.

---

## 7. Klasser og OOP (ca. 6 t, vægt: middel til høj)

*Hvorfor middel til høj:* sidste og største emne i noterne; eksamener i intro-Python kommer typisk med mindst én klasseopgave. Note: [[Courses/Programming/11 Klasser og OOP|Klasser og OOP]].

### 7.1 Klasser, objekter og `__init__` (ca. 2 t)
- **Klasse og objekt:** tegning og konkret forekomst. Se [[Courses/Programming/11 Klasser og OOP|Klasser og OOP]].
- **`__init__` og `self`:** konstruktør og reference til objektet selv.
- **Attributter og metoder;** klassevariabler vs. instansvariabler.
- **Typisk opgave:** skriv klassen `BankKonto` med `indsæt` og `hæv`.

**Lær det her:** [Corey Schafer: Python OOP Tutorial 1, Classes and Instances](https://www.youtube.com/watch?v=ZDa-Z5JzLYM) · [Corey Schafer: OOP Tutorial 2, Class Variables](https://www.youtube.com/watch?v=BJ-VvGyQxho) · [CS50P: Lecture 8, Object-Oriented Programming](https://www.youtube.com/watch?v=e4fwY9ZsxPw) · [Python docs: Classes](https://docs.python.org/3/tutorial/classes.html) · ★ Jitty: ingen OOP-video fundet.
**Øv:** `BankKonto` med fejl ved overtræk.

### 7.2 Specielle metoder og nedarvning (ca. 2 t)
- **`__str__` / `__repr__`** og andre dunder-metoder.
- **Nedarvning:** underklasse, `super().__init__()`, overskrive metoder.
- **Typisk opgave:** `Hund` og `Kat` der arver fra `Dyr`.

**Lær det her:** [Corey Schafer: OOP Tutorial 5, Special (Magic/Dunder) Methods](https://www.youtube.com/watch?v=3ohzBxoFHAY) · [Corey Schafer: OOP Tutorial 4, Inheritance](https://www.youtube.com/watch?v=RSl87lqOXDE)
**Øv:** `Dyr`-hierarki med `lyd()` der overskrives.

### 7.3 Properties (ca. 2 t)
- **`@property`** getter og setter til kontrolleret adgang.
- **Indkapsling:** valider i setter.

**Lær det her:** [Corey Schafer: OOP Tutorial 6, Property Decorators](https://www.youtube.com/watch?v=jCzT9XFZ5bw)
**Øv:** `Temperatur` med property der afviser værdier under absolut nulpunkt.

### Mastery checklist: OOP
- [ ] Jeg kan skrive en klasse med `__init__`, metoder og `__str__` fra bunden.
- [ ] Jeg kan forklare `self` og forskellen på klasse- og instansvariabel.
- [ ] Jeg kan lave en underklasse med `super()`.

---

## 8. Eksamensteknik: læse, spore og skrive kode (ca. 4 t, vægt: høj)

*Hvorfor høj:* eksamen tester om du kan læse og skrive småprogrammer under tidspres. [[Courses/Programming/Past Exams|Past Exams]] er tom, så brug [[Self-Tests/Programming Test|selvtesten]] og flashcards i stedet.

### 8.1 Sporing og fejlfinding (ca. 2 t)
- **Variabeltabel:** skriv værdierne for hver iteration.
- **Typiske fejl:** off-by-one i `range`, `=` vs `==`, glemt `return`, ændring af liste mens du løber over den.
- **Typisk opgave:** "hvad udskriver programmet?" og "find fejlen".

**Lær det her:** [CS50P: Lecture 3, Exceptions](https://www.youtube.com/watch?v=LW7g1169v7w) til fejlsøgning; ellers [[Courses/Programming/Cheat Sheet|Cheat Sheet]]. Ingen bedre enkeltvideo fundet.
**Øv:** spor 5 selvvalgte programmer i hånden og kontrollér.

### 8.2 Skriv funktioner på tid (ca. 2 t)
- **Metode:** 1) forstå input/output, 2) skriv et testkald, 3) skriv den simpleste løsning, 4) test grænsetilfælde (tom liste, 0, negativ).
- **Typisk opgave:** 20 minutter pr. delopgave.

**Lær det her:** [CS50P: Full Course, freeCodeCamp](https://www.youtube.com/watch?v=nLRL_NcnK-4) (opslag, ikke hele).
**Øv:** tag tid på 5 små opgaver og dokumentér fejl i [[Courses/Programming/Past Exams|Past Exams]]-formatet.

### Mastery checklist: eksamensteknik
- [ ] Jeg kan spore et program med en variabeltabel.
- [ ] Jeg tester altid grænsetilfælde.
- [ ] Jeg har prøvet 5 opgaver på tid.

---

## Kørselsplan

1. **Dag 1 til 2:** emne 1 og 2.
2. **Dag 3:** emne 3.
3. **Dag 4 til 5:** emne 4.
4. **Dag 6:** emne 5 og 6.
5. **Dag 7:** emne 7.
6. **Dag 8:** emne 8 og [[Flashcards/Programming Flashcards|Flashcards]].

## Links

- [[Programming|Kursusforside]]
- [[Courses/Programming/Cheat Sheet|Cheat Sheet]]
- [[Courses/Programming/Begreber|Begreber]]
- [[Flashcards/Programming Flashcards|Flashcards]]
- [[Self-Tests/Programming Test|Selvtest]]
- [[Study-Roadmap]]
