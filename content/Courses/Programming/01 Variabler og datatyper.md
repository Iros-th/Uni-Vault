---
publish: true
title: Variabler og datatyper
course: Programming
type: note
tags:
  - programming
  - python
  - variabler
  - datatyper
---

# Variabler og datatyper

- Variabler
	- Primitiv (selve variablen er bare et navn, men den peger på en værdi)
	- En variabel er et navn du sætter på en værdi, så du kan bruge den igen senere. Du behøver ikke sige hvilken type det er, Python regner det selv ud.
	- VIGTIGT: navnet må ikke starte med et tal, og du kan ikke bruge mellemrum. Brug underscore i stedet (fx antal_elever).

```python
x = 5
navn = "Iros"
print(x)
print(navn)
```

	- Kilde: https://docs.python.org/3/tutorial/introduction.html


- [[Glossary#int|int]] (heltal)
	- Primitiv
	- Hele tal uden decimaler, både positive og negative. Python har ingen øvre grænse, så du kan regne med kæmpestore tal uden at det bryder sammen.

```python
alder = 21
temperatur = -3
print(alder + temperatur)
```

	- Kilde: https://docs.python.org/3/library/functions.html#int


- [[Glossary#float|float]] (kommatal)
	- Primitiv
	- Tal med decimaler. Bemærk at Python bruger punktum og ikke komma.
	- VIGTIGT: floats er ikke helt præcise. 0.1 + 0.2 giver 0.30000000000000004 og ikke 0.3. Det er ikke en fejl i din kode, det er bare sådan computere gemmer kommatal.

```python
pris = 19.95
print(0.1 + 0.2)
```

	- Kilde: https://docs.python.org/3/tutorial/floatingpoint.html


- [[Glossary#str|str]] (tekst / streng)
	- Sammensat (en streng er egentlig en sekvens af tegn)
	- Tekst skrevet i anførselstegn. Du kan bruge enkelte eller dobbelte, bare vær konsekvent.
	- VIGTIGT: "5" er ikke det samme som 5. Det ene er tekst, det andet er et tal. Du kan ikke lægge dem sammen uden at konvertere først.

```python
besked = "hej med dig"
tal_som_tekst = "5"
print(besked)
print(int(tal_som_tekst) + 3)
```

	- Kilde: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str


- [[Glossary#bool|bool]] (sandt eller falsk)
	- Primitiv
	- Kan kun være True eller False. Bruges hele tiden når du skal tjekke betingelser.
	- VIGTIGT: skal skrives med stort begyndelsesbogstav, altså True og False, ikke true og false.

```python
er_voksen = True
har_koerekort = False
print(er_voksen and har_koerekort)
```

	- Kilde: https://docs.python.org/3/library/stdtypes.html#boolean-values


- Konvertering mellem typer ([[Glossary#casting|casting]])
	- Du kan lave en type om til en anden med int(), float(), str() og bool(). Det er super nyttigt når du fx får input ind som tekst men skal regne med det.

```python
alder_tekst = "21"
alder = int(alder_tekst)
print(alder + 1)
```

	- Kilde: https://docs.python.org/3/library/functions.html


- type() til at tjekke hvad noget er
	- Hvis du er i tvivl om hvad en variabel indeholder kan du spørge Python direkte med type().

```python
x = 5
y = "5"
print(type(x))
print(type(y))
```

	- Kilde: https://docs.python.org/3/library/functions.html#type


## Links
- [[Programming]]
