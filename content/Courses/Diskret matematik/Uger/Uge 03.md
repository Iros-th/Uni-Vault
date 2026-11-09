---
publish: true
title: "Diskret matematik uge 3: Mængdeoperationer og funktioner"
course: Diskret matematik
type: week
week: 3
tags:
  - diskret-matematik
  - ugenote
---

# Uge 3: Mængder og funktioner

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W3, 17. september). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave.

## Emner

- Mængdeoperationer (Rosen afsnit 2.2, "Set Operations")
- Kardinalitet af endelige mængder
- Funktioner (Rosen afsnit 2.3, "Functions")

## Begreber

**Mængdeoperationer.** Fællesmængde $A \cap B$, foreningsmængde $A \cup B$, differens $A \setminus B$ og komplement $\overline{A}$. De Morgan gælder også her: $\overline{A \cap B} = \overline{A} \cup \overline{B}$. Eksempel: med $A = \{1,2,3\}$ og $B = \{2,3,4\}$ er $A \cap B = \{2,3\}$, $A \cup B = \{1,2,3,4\}$ og $A \setminus B = \{1\}$.

**Bevis for mængdeidentiteter.** Enten via to inklusioner (tag et vilkårligt element og følg det) eller ved at oversætte til logik: $x \in A \cap B \iff x \in A \land x \in B$. Så bliver mængdeidentiteter til logiske ækvivalenser fra uge 1.

**Inklusion-eksklusion for to mængder.** $|A \cup B| = |A| + |B| - |A \cap B|$. Eksempel: 10 studerende læser matematik, 8 læser fysik, 3 læser begge. Så er der $10 + 8 - 3 = 15$ i alt.

**Funktioner.** $f : A \to B$ tildeler hvert element i definitionsmængden $A$ præcis ét element i $B$. Billedmængden (image) er de værdier, funktionen faktisk antager. Eksempel: $f : \mathbb{Z} \to \mathbb{Z}$, $f(x) = x^2$ har billedmængde $\{0, 1, 4, 9, \dots\}$.

**Injektiv, surjektiv, bijektiv.** Injektiv: forskellige input giver forskellige output. Surjektiv: billedmængden er hele $B$. Bijektiv: begge dele. Eksempel: $f(x) = 2x$ på $\mathbb{Z} \to \mathbb{Z}$ er injektiv men ikke surjektiv (ulige tal rammes aldrig). $f(x) = x + 1$ er bijektiv.

**Sammensætning og invers.** $(g \circ f)(x) = g(f(x))$. En funktion har en invers $f^{-1}$ netop når den er bijektiv. Eksempel: $f(x) = x + 1$ har $f^{-1}(y) = y - 1$.

**Gulv og loft.** $\lfloor x \rfloor$ er det største hele tal $\le x$, og $\lceil x \rceil$ det mindste hele tal $\ge x$. Eksempel: $\lfloor 2{,}7 \rfloor = 2$, $\lceil 2{,}1 \rceil = 3$, $\lfloor -2{,}5 \rfloor = -3$.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Ingen opgaver er markeret fed i denne uge, og planen angiver ingen afvigende numre for 8. udgave.

- Afsnit 2.2: 27, 29, 35, 47 (se definitionen over opgave 38)
- Afsnit 2.3: 9g, 21, 27, 73a

## Tjek dig selv

- [ ] Kan jeg bevise en mængdeidentitet med to inklusioner?
- [ ] Kan jeg oversætte en mængdeidentitet til en logisk ækvivalens?
- [ ] Kan jeg bruge $|A \cup B| = |A| + |B| - |A \cap B|$ i en tekstopgave?
- [ ] Kan jeg afgøre, om en funktion er injektiv og/eller surjektiv, og begrunde det?
- [ ] Kan jeg beregne $\lfloor -2{,}5 \rfloor$ uden at tage fejl af fortegnet?
- [ ] Ved jeg, hvorfor en bijektion har en invers?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
