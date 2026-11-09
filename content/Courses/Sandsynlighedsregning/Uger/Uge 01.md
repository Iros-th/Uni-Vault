---
publish: true
title: "Sandsynlighedsregning uge 1: Grundbegreber, betinget sandsynlighed og uafhængighed"
course: Sandsynlighedsregning
type: week
week: 1
tags:
  - sandsynlighed
  - ugenote
---

# Uge 1: Grundbegreber, betinget sandsynlighed og uafhængighed

> Kilde: kursussiden http://www2.imm.dtu.dk/courses/02405/ (forelæsning 4. september, afsnit 1.1, (1.2), 1.3, 1.4, 1.5 og 1.6), ugebrevet til forelæsning 1 (uge1.laesevejledning.html) og velkomstteksten (velkomsttekst.pdf, dateret 2024). Lærebog: Jim Pitman, Probability (Springer, 1993). Velkomstteksten skønner sværhedsgraden til "middel", ca. 61 sider. Slides, videoer og multiple-choice-løsninger ligger som links på kursussiden og er ikke læst her.

## Emner

- Afsnit 1.1: lige sandsynlige udfald
- Afsnit 1.2: diskussion og baggrund (kan læses kursorisk, bliver ikke gennemgået)
- Afsnit 1.3: udfaldsrum, hændelser, regneregler for sandsynligheder
- Afsnit 1.4: betinget sandsynlighed og uafhængighed
- Afsnit 1.5: Bayes' regel
- Afsnit 1.6: sekvenser af hændelser og uafhængighed af flere hændelser

## Begreber

**Udfaldsrum og hændelse.** Udfaldsrummet $\Omega$ er mængden af mulige udfald af et eksperiment, og en hændelse $A$ er en delmængde af $\Omega$. Er alle udfald lige sandsynlige, er $P(A) = |A| / |\Omega|$. Eksempel: to terninger, summen er 7: $6/36 = 1/6$.

**Regneregler.** Komplementreglen: $P(A^c) = 1 - P(A)$. Additionsreglen for to hændelser (inklusion-eksklusion): $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. For gensidigt udelukkende hændelser er sidste led 0. Ugebrevet peger på tabel 1 side 19, boksen øverst side 21, komplementreglen side 21 og inklusion-eksklusionsreglen side 22 som særligt vigtige.

**Partition.** Hændelserne $B_1, \dots, B_n$ er en partition, hvis de er parvis disjunkte og deres forening er $\Omega$. Så er $P(A) = \sum_i P(A \cap B_i)$.

**Betinget sandsynlighed.** $P(B \mid A) = \dfrac{P(A \cap B)}{P(A)}$ når $P(A) > 0$. Omskrevet er det multiplikationsreglen $P(A \cap B) = P(A)\,P(B \mid A)$. Eksempel: to kort trækkes uden tilbagelægning. $P(\text{begge es}) = \frac{4}{52} \cdot \frac{3}{51} = \frac{1}{221}$.

**Gennemsnit af betingede sandsynligheder (total sandsynlighed).** Hvis $B_1, \dots, B_n$ er en partition, er $P(A) = \sum_i P(B_i)\,P(A \mid B_i)$. Ugebrevet kalder boksen øverst side 41 vigtig.

**Bayes' regel.** $P(B_j \mid A) = \dfrac{P(B_j)\,P(A \mid B_j)}{\sum_i P(B_i)\,P(A \mid B_i)}$. Eksempel: en sygdom rammer 1 % af befolkningen. En test er positiv for 95 % af syge og for 5 % af raske. $P(\text{syg} \mid \text{positiv}) = \dfrac{0{,}01 \cdot 0{,}95}{0{,}01 \cdot 0{,}95 + 0{,}99 \cdot 0{,}05} = \dfrac{0{,}0095}{0{,}059} \approx 0{,}16$. Selv med en god test er de fleste positive falske, fordi sygdommen er sjælden.

**Uafhængighed.** $A$ og $B$ er uafhængige, hvis $P(A \cap B) = P(A)\,P(B)$, eller ækvivalent $P(B \mid A) = P(B)$. For flere hændelser kræves, at produktreglen gælder for alle delmængder af hændelserne (afsnit 1.6), ikke kun for par.

**Arbejdsgang for tekstopgaver.** Ugebrevet bruger opgave 1.4.10 til at træne en fast rækkefølge: (1) oversæt til symboler, (2) oversæt oplysninger til formler, (3) definér det, der spørges om, (4) knyt input til output, (5) udled formlen, (6) sæt tal ind.

## Opgaver

Alle numre er fra Pitman, Probability (kapitel.afsnit.opgave). Kursussiden lister ingen øvelsesopgaver under 4. september; opgaverne herunder regnes ved øvelsen fredag 11. september.

Øvelsesopgaver (ugebrevets liste): 1.3.1, 1.3.2, 1.3.8, 1.4.1, 1.4.11, 1.5.1, 1.6.1, (1.3.12\*). Opgaver med \* er supplerende og lidt mere udfordrende. Kursussidens liste afviger lidt: den har 1.3.2, 1.3.8, 1.4.1, 1.4.11, 1.5.1, 1.6.1 og 1.3.11 (og 1.3.1 kun under "ældre løsninger"). Spørg en instruktor, hvis det er uklart.

Opgaver til selvstudium: 1.1.7, 1.2.4, 1.3.4, 1.4.2, 1.5.5, 1.6.6.

Gamle eksamensspørgsmål fra 16/12/2004: spørgsmål 1, 2, 3, 5 og 20.

## Tjek dig selv

- [ ] Kan jeg beregne $P(A)$ som antal gunstige delt med antal mulige, og se, hvornår det ikke må bruges?
- [ ] Kan jeg bruge komplementreglen og additionsreglen i en opgave med "mindst ét"?
- [ ] Kan jeg udlede $P(A \cap B) = P(A)P(B \mid A)$ fra definitionen?
- [ ] Kan jeg opstille et træ og bruge total sandsynlighed?
- [ ] Kan jeg gennemføre Bayes-regningen for sygdomstesten og forklare, hvorfor svaret er så lavt?
- [ ] Kan jeg forklare, hvorfor parvis uafhængighed ikke er nok for tre hændelser?

## Links

- [[Courses/Sandsynlighedsregning/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Sandsynlighedsregning/Sandsynlighedsregning|Sandsynlighedsregning]]
