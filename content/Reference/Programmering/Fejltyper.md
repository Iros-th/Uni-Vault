---
title: Fejltyper & Exceptions i Python - Håndtering og Fejlfinding
publish: true
type: reference
tags:
  - programmering
  - fejlhåndtering
  - python
---

# Fejltyper og Fejlhåndtering i Python

Oversigt over de mest almindelige indbyggede exceptions (undtagelser) i Python, hvorfor de opstår, og hvordan du fanger dem med `try`/`except`.

---

## 1. Almindelige Exceptions

| Fejltype | Hvorfor den opstår | Eksempel der fejler | Løsning |
|---|---|---|---|
| `SyntaxError` | Ugyldig Python-syntaks (mangler kolon, forkert parentes) | `if x == 5` (mangler `:`) | Ret koden før kørsel. |
| `IndentationError` | Forkert eller inkonsistent indrykning (blandede tabs/mellemrum) | Forkert whitespace under `def` | Brug altid 4 mellemrum pr. indrykning. |
| `NameError` | Du bruger en variabel eller funktion, der ikke er defineret | `print(ukendt_tal)` | Tjek stavemåde og definér variablen først. |
| `TypeError` | Operation på en datatype, der ikke understøtter det | `"tekst" + 5` | Konverter eksplicit: `"tekst" + str(5)`. |
| `ValueError` | Rigtig type, men ugyldig værdi | `int("ikke_et_tal")` | Validér input før konvertering. |
| `IndexError` | Du tilgår et indeks i en liste, der ligger uden for længden | `l = [1, 2]; print(l[5])` | Tjek `len(l)` eller brug slicing `l[5:6]`. |
| `KeyError` | Du henter en nøgle i en dictionary, der ikke findes | `d = {}; print(d["alder"])` | Brug `d.get("alder", standardvaerdi)`. |
| `AttributeError` | Du kalder en metode eller attribut, som objektet ikke har | `tal = 42; tal.append(5)` | Tjek dokumentationen for typens metoder. |
| `ZeroDivisionError`| Division med 0 | `10 / 0` | Tjek at nævneren $\neq 0$ før division. |
| `FileNotFoundError`| Forsøg på at åbne en fil, der ikke eksisterer på stien | `open("findes_ikke.txt")` | Tjek `os.path.exists()` eller brug `try/except`. |

---

## 2. Korrekt `try...except...else...finally` Mønster

Fang **altid** den specifikke exception. Undgå altid et "bart" `except:`, da det også fanger afbrydelser som `KeyboardInterrupt` (Ctrl+C).

```python
try:
    with open("data.csv", "r", encoding="utf-8") as f:
        tal = int(f.readline().strip())
        resultat = 100 / tal
except FileNotFoundError:
    print("Fejl: Filen kunne ikke findes på computeren.")
except ValueError:
    print("Fejl: Første linje i filen var ikke et gyldigt heltal.")
except ZeroDivisionError:
    print("Fejl: Tallet i filen var 0 - kan ikke dividere med nul.")
else:
    # Kører KUN hvis ingen exceptions opstod i try-blokken
    print(f"Beregning lykkedes: {resultat}")
finally:
    # Kører ALTID, uanset om der opstod en fejl eller ej (godt til oprydning)
    print("Færdig med fil-operation.")
```
