---
publish: true
title: Glossary / Begrebsordbog
type: reference
tags:
  - glossary
  - begreber
  - reference
---

# Glossary / Begrebsordbog

Korte, præcise definitioner af matematiske, kemiske og datalogiske begreber. Hold musen over et linket begreb hvor som helst i noterne for at få vist definitionen som popover.

---

## 1. Beviser & Matematik (Proofs & Mathematics)

## Proof / Bevis
A chain of logically valid steps that starts from things we already accept (axioms and proven theorems) and ends at the claim. En logisk gyldig deduktionskæde fra aksiomer til konklusion.

## Axiom / Aksiom
A statement we accept as true without proving it. Det fundamentale udgangspunkt, som accepteres uden bevis (f.eks. den kommutative lov $a + b = b + a$).

## Theorem / Sætning (Teorem)
A mathematical statement that has been formally proven true from axioms and earlier results. Kan genbruges som byggesten i senere beviser.

## Direct proof / Direkte bevis
Assume the hypothesis $P$ is true, then walk straight to the conclusion $Q$ using definitions and known algebra. Antag $P$, udled $Q$.

## Proof by contradiction / Modstridsbevis
Assume the claim is false ($
eg P$), then show this assumption logically forces an impossibility ($0=1$ or $x \neq x$). Ergo må $P$ være sand. (Klassisk eksempel: bevis for at $\sqrt{2}$ er irrationel).

## Contrapositive / Kontraposition
The statement "if $P$ then $Q$" ($P \implies Q$) is logically equivalent to "if not $Q$ then not $P$" ($
eg Q \implies 
eg P$). Bevis for det kontraponerede udsagn er ækvivalent med det oprindelige.

## Counterexample / Modeksempel
A single case that disproves a universal "for all" claim ($orall x \, P(x)$). Ét modeksempel er nok til at modbevise en påstand (f.eks. modbeviser $x=0$ påstanden om at alle tal har en multiplikativ invers).

## Induction / Matematisk induktion
A proof method for statements indexed by integers $n \ge 1$. Vis basistilfældet $P(1)$ (den første domino), og vis derefter det induktive trin: at hvis $P(k)$ gælder, medfører det $P(k+1)$.

## Strong induction / Stærk induktion
Same principle as induction, but the induction hypothesis assumes the claim holds for **all** values $1, 2, \dots, k$, and uses this to prove $P(k+1)$. Uundværlig ved rekursive følger som Fibonacci.

## Bijection / Bijektion
A function between two sets that is both **injective** (one-to-one, ingen kollisioner) and **surjective** (onto, rammer hele værdimængden). Etablerer en perfekt 1-til-1 parring, så $|A| = |B|$.

## Injective / Injektiv
A map where distinct inputs map to distinct outputs: $f(a) = f(b) \implies a = b$.

## Surjective / Surjektiv
A map where every element in the codomain is hit by at least one input element: $\forall y \in Y, \exists x \in X: f(x) = y$.

## Rational / Rationelt tal
A number expressible as a ratio of two integers $\frac{p}{q}$ with $q \neq 0$ ($x \in \mathbb{Q}$). Har endelig eller periodisk decimaludvikling.

## Irrational / Irrationelt tal
A real number that cannot be written as a fraction of integers ($x \in \mathbb{R} \setminus \mathbb{Q}$), such as $\sqrt{2}, e, \pi$. Uendelig, ikke-periodisk decimaludvikling.

## Limit / Grænseværdi
Værdien en funktion eller talfølge nærmer sig, når variablen går mod et bestemt punkt: $\lim_{x \to x_0} f(x) = L$.

## Continuity / Kontinuitet
En funktion er kontinuert i $x_0$, hvis $\lim_{x \to x_0} f(x) = f(x_0)$. Grafen kan tegnes uden at løfte blyanten.

---

## 2. Kemi (Chemistry)

## Stofmængde (Mole)
Måles i enheden mol. Ét mol svarer til præcis Avogadros tal ($6.022 \times 10^{23}$) formelenheder eller partikler. Formel: $n = \frac{m}{M}$.

## Molarmasse (Molar Mass)
Massen af ét mol af et givet grundstof eller kemisk forbindelse, målt i gram pr. mol (g/mol). Aflæses i det periodiske system.

## Stofmængdekoncentration (Molaritet)
Antal mol opløst stof pr. liter opløsning ($c = \frac{n}{V}$). Angives i M eller mol/L.

## Elektronegativitet
Et atoms evne til at tiltrække elektroner i en kovalent binding (Pauling-skalaen). Fluor er det mest elektronegative grundstof ($3.98$).

## Oxidation
En kemisk proces, hvor et atom, ion eller molekyle **afgiver** elektroner. Oxidationstrinnet stiger.

## Reduktion
En kemisk proces, hvor et atom, ion eller molekyle **optager** elektroner. Oxidationstrinnet falder.

## Syre (Brønsted)
En kemisk partikel (molekyle eller ion), der kan **afgive** en hydron (proton, $\text{H}^+$).

## Base (Brønsted)
En kemisk partikel, der kan **optage** en hydron (proton, $\text{H}^+$).

## pH
Det negative logaritmiske mål for hydroniumion-koncentrationen i en vandig opløsning: $\text{pH} = -\log[\text{H}_3\text{O}^+]$.

---

## 3. Programmering (Programming)

## int (Heltal)
Et heltal uden decimaler (`42`, `-7`). I Python med ubegrænset præcision.

## float (Decimaltal)
Et tal med decimaler (`3.14`). Følger IEEE 754 dobbelt præcision. Husk at `0.1 + 0.2 != 0.3` på grund af binær afrunding.

## str (Streng)
Tekst i Python. Immutable sekvens af tegn.

## bool (Boolske værdier)
Sandhedsværdi: `True` eller `False`.

## list (Liste)
En ordnet, foranderlig (mutable) sekvens af elementer: `[1, 2, 3]`.

## tuple (Tupel)
En ordnet, uforanderlig (immutable) sekvens af elementer: `(x, y)`.

## dict (Dictionary)
En samling af nøgle-værdi par (`{"a": 1}`). Hurtigt $O(1)$ opslag via hash-tabel.

## set (Mængde)
En uordnet samling af unikke værdier (`{1, 2, 3}`). Fjerner automatisk dubletter.

## Scope (Virkefelt)
Området i koden hvor en variabel er synlig og gyldig (lokalt i en funktion vs. globalt i modulet).

## Exception (Undtagelse / Fejl)
En fejl der opstår under programmets kørsel (fx `ZeroDivisionError`, `IndexError`), som kan fanges og håndteres sikkert med `try...except`.
