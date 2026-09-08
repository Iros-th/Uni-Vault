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

Korte forklaringer på de grundbegreber der går igen i programmering. Hold musen over et linket begreb i noterne for at få definitionen som popover.

## 1. Data og værdier

### Variabel
Et navn du sætter på en værdi, så du kan bruge den igen senere. I Python behøver du ikke sige hvilken type det er, det regner Python selv ud. Se [[01 Variabler og datatyper|noten]].

### Datatype
Hvilken slags værdi noget er: heltal, kommatal, tekst, sandt/falsk osv. Fuld liste i [[Reference/Programmering/Alle datatyper|Alle datatyper]].

### Casting (typekonvertering)
At lave en type om til en anden med fx `int()`, `float()` eller `str()`. Nyttigt når input kommer ind som tekst men skal regnes med.

### Immutable og mutable
Immutable betyder at værdien ikke kan ændres på plads (fx `int`, `str`, `tuple`). Mutable betyder at den kan (fx `list`, `dict`, `set`).

## 2. Operatorer og udtryk

### Operator
Tegn der regner eller sammenligner, fx `+`, `-`, `*`, `==`, `and`. Se [[Reference/Programmering/Alle operatorer|Alle operatorer]].

### Udtryk
En bid kode der udregner en værdi, fx `3 + 4 * x`.

## 3. Kontrol af programforløb

### Betingelse
`if`, `elif` og `else` styrer hvilken kode der køres afhængigt af om noget er sandt. Se [[Reference/Programmering/Kontrolstrukturer|Kontrolstrukturer]].

### Løkke (loop)
Gentager kode. `for` løber over en samling, `while` kører så længe en betingelse er sand. Se [[05 Løkker|noten]].

### Break og continue
`break` stopper løkken helt, `continue` springer til næste gennemløb.

## 4. Funktioner

### Funktion
En genbrugelig bid kode du definerer med `def` og kalder når du har brug for den. Se [[06 Funktioner|noten]].

### Parameter og argument
Parametre er de navne funktionen tager ind. Argumenter er de faktiske værdier du sender med når du kalder den.

### Returværdi
Det en funktion sender tilbage med `return`.

### Scope
Hvor en variabel er synlig. Variabler lavet inde i en funktion er lokale og kan ikke ses udenfor.

## 5. Datastrukturer

### Liste
En ordnet, ændrbar samling af værdier. Se [[07 Lister|noten]].

### Dictionary
Par af nøgle og værdi. Se [[08 Dictionaries tuples og sets|noten]].

### Tuple
Som en liste, men kan ikke ændres.

### Set
En samling uden dubletter og uden fast rækkefølge.

## 6. Objektorientering

### Klasse
En skabelon for din egen datatype med data og metoder. Se [[11 Klasser og OOP|noten]].

### Objekt (instans)
En konkret ting lavet ud fra en klasse.

### Metode
En funktion der hører til en klasse.

### Attribut
En variabel der hører til et objekt.

## 7. Fejl

### Exception (undtagelse)
En fejl der opstår under kørsel og stopper programmet hvis den ikke håndteres. Se [[Reference/Programmering/Fejltyper|Fejltyper]].

### Try og except
Blokken der fanger og håndterer fejl, så programmet kan fortsætte.

## Links

- [[Programming]]
- [[Courses/Programming/Begreber|Begreber (kursus)]]
- [[Reference/Programmering/Alle datatyper|Alle datatyper]]
- [[Glossary]]
