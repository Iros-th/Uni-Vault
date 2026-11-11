---
publish: true
title: "Matematik 1A uge 1: udsagnslogik"
course: Matematik 1A
type: week
week: 1
tags:
  - matematik-1a
  - ugenote
---

# Uge 1: Udsagnslogik

> Kilde: kursussiden mat1a.compute.dtu.dk, siderne Lektionsoversigt, Ugeprogram semesteruge 1 og Opgaver Store Dag/Lille Dag uge 1. Bogen er kursets lærebog (udgave 2026).

## Emner

- De logiske symboler og, eller og medfører. Logiske ækvivalenser og regneregler. Bevistyper: modstridsbevis og kontrapositionsbevis.
- Pensum: Kapitel 1, *Udsagnslogik*. Store Dag: det meste af afsnit 1.1, 1.2, 1.3 og 1.5. Lille Dag: resten af kapitel 1 (blandt andet afsnit 1.4).

## Begreber

### Udsagn og sandhedstabeller

Et udsagn er enten sandt (S) eller falsk (F). Med $\wedge$ (og), $\vee$ (eller) og $\neg$ (ikke) bygger man nye udsagn, og en sandhedstabel viser sandhedsværdien for alle kombinationer af de atomare udsagn.

*Eksempel.* $P \vee Q$ er falsk kun når både $P$ og $Q$ er falske. $\neg(P \wedge Q)$ er sand, så snart mindst ét af $P$ og $Q$ er falsk.

### Implikation og biimplikation

$P \Rightarrow Q$ er kun falsk når $P$ er sand og $Q$ falsk. $P \Leftrightarrow Q$ er sand, når $P$ og $Q$ har samme sandhedsværdi, det vil sige når $P \Rightarrow Q$ og $Q \Rightarrow P$ begge gælder.

*Eksempel.* Udsagnet $x - 2 = 3 \Rightarrow (x-2)^2 = 9$ er sandt, men omvendt gælder ikke: $(x-2)^2 = 9$ giver også $x = -1$. Altså kan man kun sætte en enkelt implikationspil mellem de to linjer.

### Tautologi og logisk ækvivalens

En tautologi er et sammensat udsagn, der er sandt uanset sandhedsværdierne af delene. To udsagn er logisk ækvivalente, hvis de har samme sandhedstabel.

*Eksempel.* $(P \vee Q) \vee (\neg P \wedge \neg Q)$ er en tautologi: enten er $P$ eller $Q$ sand, eller også er begge falske.

### Kontraposition og modstridsbevis

$P \Rightarrow Q$ er ækvivalent med $\neg Q \Rightarrow \neg P$. Det bruges i kontrapositionsbeviser. Ved et modstridsbevis for $P$ antager man $\neg P$ og finder en modstrid.

*Eksempel.* Påstand: hvis $a^2$ er lige, så er $a$ lige. Kontraposition: hvis $a$ er ulige, $a = 2k+1$, så er $a^2 = 4k^2 + 4k + 1$ ulige.

### Ligninger via en tautologi

Ved ligninger med absolutværdi indfører man tautologien $x < 0 \vee x \ge 0$ og løser i hvert tilfælde (Eksempel 1.4.2 i lærebogen).

*Eksempel.* Løs $|x| = -x + 1$. Hvis $x \ge 0$: $x = -x + 1$, så $x = \tfrac{1}{2}$ (passer med $x \ge 0$). Hvis $x < 0$: $-x = -x + 1$, altså $0 = 1$, ingen løsning. Svaret er $x = \tfrac{1}{2}$.
## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Udsagn (spørgsmål a til c)
- Opgave 2: Eller (spørgsmål a til c)
- Opgave 3: Sandhedstabeller (spørgsmål a til c)
- Opgave 4: Negation (spørgsmål a til e)
- Opgave 5: Negation sproglig (ét spørgsmål, a)
- Opgave 6: Implikation (spørgsmål a til b)
- Opgave 7: Kontraposition (spørgsmål a til c)
- Opgave 8: NAND operatoren (spørgsmål a til d)
- Opgave 9: Modstridsbevis (spørgsmål a til b)
- Opgave 10: Gåde (ét spørgsmål, a)

**Lille Dag**

- Opgave 1: Repetitionsopgave: Negation (spørgsmål a til b)
- Opgave 2: Implikation (spørgsmål a til b)
- Opgave 3: Implikation/Biimplikation (spørgsmål a til c)
- Opgave 4: Tautologi (spørgsmål a til d)
- Opgave 5: Ligninger (ét spørgsmål, a)

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
