---
publish: true
title: Ordbog / Begrebsordbog (DA)
type: reference
tags:
  - glossary
  - begreber
  - reference
  - ordbog
---

# Ordbog (DA)

Korte, præcise definitioner af matematiske, kemiske og datalogiske begreber. Hold musen over et linket begreb hvor som helst i noterne for at få vist definitionen som popover.

Dette er den danske version. Den engelske version med hver post oversat ligger på [[Glossary|Glossary (EN)]].

---

## 1. Beviser og matematik

## Bevis
En logisk gyldig kæde af skridt, der starter fra ting vi allerede accepterer (aksiomer og beviste sætninger) og ender ved påstanden.

## Aksiom
Et udsagn vi accepterer som sandt uden bevis. Det fundamentale udgangspunkt, for eksempel den kommutative lov $a + b = b + a$.

## Sætning (teorem)
Et matematisk udsagn, der er formelt bevist sandt ud fra aksiomer og tidligere resultater. Det kan genbruges som byggesten i senere beviser.

## Direkte bevis
Antag at hypotesen $P$ er sand, og udled derefter konklusionen $Q$ direkte ved hjælp af definitioner og kendt algebra.

## Modstridsbevis
Antag at påstanden er falsk ($\lnot P$), og vis at antagelsen fører til en umulighed ($0 = 1$ eller $x \neq x$). Ergo må $P$ være sand. Det klassiske eksempel er beviset for at $\sqrt{2}$ er irrationel.

## Kontraposition
Udsagnet "hvis $P$ så $Q$" ($P \implies Q$) er logisk ensgyldigt med "hvis ikke $Q$ så ikke $P$" ($\lnot Q \implies \lnot P$). At bevise det kontraponerede er ækvivalent med at bevise det oprindelige.

## Modeksempel
Et enkelt tilfælde, der modbeviser en universel "for alle"-påstand ($\forall x \, P(x)$). Ét modeksempel er nok til at modbevise en påstand.

## Matematisk induktion
En bevismetode for udsagn indekseret med heltal $n \ge 1$. Vis basistilfældet $P(1)$ (den første domino), og vis derefter det induktive trin: at $P(k)$ medfører $P(k+1)$.

## Stærk induktion
Samme princip som induktion, men induktionshypotesen antager, at påstanden gælder for alle værdier $1, 2, \dots, k$ og bruger det til at bevise $P(k+1)$. Praktisk ved rekursive følger som Fibonacci.

## Bijektion
En funktion mellem to mængder, der både er injektiv (en-til-en) og surjektiv (på). Den giver en perfekt en-til-en parring, så $|A| = |B|$.

## Injektiv
En afbildning, hvor forskellige input afbildes til forskellige output: $f(a) = f(b) \implies a = b$.

## Surjektiv
En afbildning, hvor hvert element i værdimængden rammes af mindst ét input: $\forall y \in Y, \ \exists x \in X : f(x) = y$.

## Rationelt tal
Et tal, der kan skrives som forholdet mellem to heltal $\frac{p}{q}$ med $q \neq 0$ ($x \in \mathbb{Q}$). Det har endelig eller periodisk decimaludvikling.

## Irrationelt tal
Et reelt tal, der ikke kan skrives som en brøk af heltal ($x \in \mathbb{R} \setminus \mathbb{Q}$), for eksempel $\sqrt{2}, e, \pi$. Decimaludviklingen er uendelig og ikke-periodisk.

## Grænseværdi
Den værdi en funktion eller talfølge nærmer sig, når variablen går mod et bestemt punkt: $\lim_{x \to x_0} f(x) = L$.

## Kontinuitet
En funktion er kontinuert i $x_0$, hvis $\lim_{x \to x_0} f(x) = f(x_0)$. Grafen kan tegnes uden at løfte blyanten.

---

## 2. Kemi

## Stofmængde (mol)
Måles i enheden mol. Ét mol svarer til præcis Avogadros tal ($6{,}022 \times 10^{23}$) formelenheder eller partikler. Formel: $n = \frac{m}{M}$.

## Molarmasse
Massen af ét mol af et grundstof eller en kemisk forbindelse, i gram pr. mol (g/mol). Aflæses i det periodiske system.

## Stofmængdekoncentration (molaritet)
Antal mol opløst stof pr. liter opløsning ($c = \frac{n}{V}$). Angives i M eller mol/L.

## Elektronegativitet
Et atoms evne til at tiltrække elektroner i en kovalent binding (Pauling-skalaen). Fluor er det mest elektronegative grundstof ($3{,}98$).

## Oxidation
En proces, hvor et atom, ion eller molekyle afgiver elektroner. Oxidationstrinnet stiger.

## Reduktion
En proces, hvor et atom, ion eller molekyle optager elektroner. Oxidationstrinnet falder.

## Syre (Brønsted)
En kemisk partikel (molekyle eller ion), der kan afgive en proton ($\text{H}^+$).

## Base (Brønsted)
En kemisk partikel, der kan optage en proton ($\text{H}^+$).

## pH
Det negative logaritmiske mål for hydroniumion-koncentrationen i en vandig opløsning: $\text{pH} = -\log[\text{H}_3\text{O}^+]$.

---

## 3. Programmering

## int (heltal)
Et heltal uden decimaler (`42`, `-7`). I Python med ubegrænset præcision.

## float (decimaltal)
Et tal med decimaler (`3.14`). Følger IEEE 754 dobbelt præcision. Husk at `0.1 + 0.2 != 0.3` på grund af binær afrunding.

## str (streng)
Tekst i Python. En immutable sekvens af tegn.

## bool (boolske værdier)
En sandhedsværdi: `True` eller `False`.

## list (liste)
En ordnet, foranderlig (mutable) sekvens af elementer: `[1, 2, 3]`.

## tuple (tupel)
En ordnet, uforanderlig (immutable) sekvens af elementer: `(x, y)`.

## dict (dictionary)
En samling af nøgle-værdi par (`{"a": 1}`) med hurtigt $O(1)$ opslag via hash-tabel.

## set (mængde)
En uordnet samling af unikke værdier (`{1, 2, 3}`). Fjerner automatisk dubletter.

## Scope (virkefelt)
Området i koden hvor en variabel er synlig og gyldig (lokalt i en funktion vs. globalt i modulet).

## Exception (undtagelse)
En fejl der opstår under programmets kørsel (fx `ZeroDivisionError`, `IndexError`), som kan fanges og håndteres sikkert med `try...except`.

## Links

- [[Glossary|Glossary (EN)]]
- [[index|Hjem]]
- [[Reference/Matematik/Matematiske symboler|Matematiske symboler]]
- [[Formelsamling/Formelsamling|Formelsamling]]
