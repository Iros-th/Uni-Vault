---
publish: true
title: Betingelser
course: Programming
type: note
tags:
  - programming
  - python
  - betingelser
  - if
---

# Betingelser

### if
- Kører en blok kode kun hvis betingelsen er sand. Betingelsen skal ende med kolon, og linjerne under skal være rykket ind.
- VIGTIGT: Python bruger indrykning (mellemrum eller tab) til at bestemme hvad der hører til if-blokken. Glemmer du indrykningen får du en fejl. Vær konsekvent, bland ikke tabs og mellemrum.

```python
alder = 20
if alder >= 18:
    print("Du er voksen")
```

- Kilde: https://docs.python.org/3/tutorial/controlflow.html#if-statements


### if og else
- else fanger alt det som if ikke fangede. Enten det ene eller det andet kører, aldrig begge.

```python
alder = 15
if alder >= 18:
    print("Du er voksen")
else:
    print("Du er mindreaarig")
```

- Kilde: https://docs.python.org/3/tutorial/controlflow.html#if-statements


### elif til flere muligheder
- elif står for "else if" og bruges når du har mere end to muligheder. Python tjekker oppefra og ned og stopper ved den første der passer.

```python
karakter = 7
if karakter >= 10:
    print("Rigtig godt")
elif karakter >= 4:
    print("Bestaaet")
else:
    print("Ikke bestaaet")
```

- Kilde: https://docs.python.org/3/tutorial/controlflow.html#if-statements


### Sammensatte betingelser
- Du kan blande betingelser med and og or. Brug parenteser hvis det bliver uoverskueligt, så er du sikker på rækkefølgen.

```python
alder = 20
har_billet = True
if alder >= 18 and har_billet:
    print("Velkommen ind")
```

- Kilde: https://docs.python.org/3/reference/expressions.html#boolean-operations


### Indlejrede if-sætninger
- Du kan sætte en if inde i en anden if. Bare pas på med at det ikke bliver for dybt, så bliver det svært at læse. Ofte kan man skrive det pænere med and.

```python
alder = 20
medlem = True
if alder >= 18:
    if medlem:
        print("Gratis adgang")
```

- Kilde: https://docs.python.org/3/tutorial/controlflow.html#if-statements


## Links
- [[Programming]]
