---
title: Kontrolstrukturer i Python — Betingelser og Løkker
publish: true
type: reference
tags:
  - programmering
  - python
  - kontrolstrukturer
---

# Kontrolstrukturer i Python

Hvordan du styrer programmets flow med forgreninger og gentagelser.

## 1. Betingelser (`if`, `elif`, `else`)

```python
score = 85

if score >= 90:
    karakter = "12"
elif score >= 80:
    karakter = "10"
elif score >= 70:
    karakter = "7"
elif score >= 50:
    karakter = "02"
else:
    karakter = "-3"
```

- **Ternary operator (én-linjes if)**:
  ```python
  status = "Bestået" if score >= 50 else "Ikke bestået"
  ```

## 2. Løkker (`for` og `while`)

### `for`-løkke (Kendt antal gentagelser)
```python
# Løkke over talrække
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Løkke over en liste med indeks via enumerate
fag = ["Matematik", "Kemi", "Programmering"]
for idx, f in enumerate(fag):
    print(f"Fag {idx+1}: {f}")

# Løkke over en dictionary
karakterer = {"Mat 1A": 12, "Fysik": 10}
for fagnavn, kar in karakterer.items():
    print(f"{fagnavn}: {kar}")
```

### `while`-løkke (Kører så længe betingelsen er sand)
```python
tæller = 0
while tæller < 3:
    print(f"Runde {tæller}")
    tæller += 1
```

## 3. Løkkestyring: `break`, `continue`, `pass` og `else`

- **`break`**: Afbryder løkken øjeblikkeligt og hopper ud.
- **`continue`**: Springer resten af den nuværende omgang over og går direkte til næste iteration.
- **`pass`**: Gør ingenting. En pladsholder så koden er syntaktisk gyldig.
- **`for...else` / `while...else`**:
  Blokken under `else` kører KUN, hvis løkken kørte færdig **uden** at ramme et `break`:
  ```python
  for n in range(2, 10):
      for x in range(2, n):
          if n % x == 0:
              print(f"{n} er ikke et primtal")
              break
      else:
          print(f"{n} er et primtal!")
  ```

## 4. Strukturel Pattern Matching (`match` / `case`) — Python 3.10+

```python
status_kode = 404

match status_kode:
    case 200:
        print("OK")
    case 400 | 404 as err:
        print(f"Klientfejl: {err}")
    case 500:
        print("Serverfejl")
    case _:
        print("Ukendt status")
```
