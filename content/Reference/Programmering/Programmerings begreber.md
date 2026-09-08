---
title: Programmerings begreber
publish: true
type: reference
tags:
  - programmering
  - begreber
  - reference
---

# Programmerings begreber

Korte forklaringer paa de grundbegreber der gaar igen i programmering. Hold musen over et linket begreb i noterne for at faa definitionen som popover.

## 1. Data og vaerdier

### Variabel
Et navn du saetter paa en vaerdi, saa du kan bruge den igen senere. I Python behoever du ikke sige hvilken type det er, det regner Python selv ud. Se [[01 Variabler og datatyper|noten]].

### Datatype
Hvilken slags vaerdi noget er: heltal, kommatal, tekst, sandt/falsk osv. Fuld liste i [[Reference/Programmering/Alle datatyper|Alle datatyper]].

### Casting (typekonvertering)
At lave en type om til en anden med fx `int()`, `float()` eller `str()`. Nyttigt naar input kommer ind som tekst men skal regnes med.

### Immutable og mutable
Immutable betyder at vaerdien ikke kan aendres paa plads (fx `int`, `str`, `tuple`). Mutable betyder at den kan (fx `list`, `dict`, `set`).

## 2. Operatorer og udtryk

### Operator
Tegn der regner eller sammenligner, fx `+`, `-`, `*`, `==`, `and`. Se [[Reference/Programmering/Alle operatorer|Alle operatorer]].

### Udtryk
En bid kode der udregner en vaerdi, fx `3 + 4 * x`.

## 3. Kontrol af programforloeb

### Betingelse
`if`, `elif` og `else` styrer hvilken kode der koeres afhaengigt af om noget er sandt. Se [[Reference/Programmering/Kontrolstrukturer|Kontrolstrukturer]].

### Loekke (loop)
Gentager kode. `for` loeber over en samling, `while` koerer saa laenge en betingelse er sand. Se [[05 Løkker|noten]].

### Break og continue
`break` stopper loekken helt, `continue` springer til naeste gennemloeb.

## 4. Funktioner

### Funktion
En genbrugelig bid kode du definerer med `def` og kalder naar du har brug for den. Se [[06 Funktioner|noten]].

### Parameter og argument
Parametre er de navne funktionen tager ind. Argumenter er de faktiske vaerdier du sender med naar du kalder den.

### Returvaerdi
Det en funktion sender tilbage med `return`.

### Scope
Hvor en variabel er synlig. Variabler lavet inde i en funktion er lokale og kan ikke ses udenfor.

## 5. Datastrukturer

### Liste
En ordnet, aendrbar samling af vaerdier. Se [[07 Lister|noten]].

### Dictionary
Par af noegle og vaerdi. Se [[08 Dictionaries tuples og sets|noten]].

### Tuple
Som en liste, men kan ikke aendres.

### Set
En samling uden dubletter og uden fast raekkefoelge.

## 6. Objektorientering

### Klasse
En skabelon for din egen datatype med data og metoder. Se [[11 Klasser og OOP|noten]].

### Objekt (instans)
En konkret ting lavet ud fra en klasse.

### Metode
En funktion der hoerer til en klasse.

### Attribut
En variabel der hoerer til et objekt.

## 7. Fejl

### Exception (undtagelse)
En fejl der opstaar under koersel og stopper programmet hvis den ikke haandteres. Se [[Reference/Programmering/Fejltyper|Fejltyper]].

### Try og except
Blokken der fanger og haandterer fejl, saa programmet kan fortsaette.

## Links

- [[Programming]]
- [[Courses/Programming/Begreber|Begreber (kursus)]]
- [[Reference/Programmering/Alle datatyper|Alle datatyper]]
- [[Glossary]]
