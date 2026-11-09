---
publish: true
title: "Diskret matematik uge 1: Udsagnslogik og prædikatlogik"
course: Diskret matematik
type: week
week: 1
tags:
  - diskret-matematik
  - ugenote
---

# Uge 1: Udsagnslogik og prædikatlogik

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W1, 3. september). Begrebsforklaringerne er skrevet ud fra emnerne og afsnitsnumrene i planen; DTU Learns indholdsområde er tomt, så der er ingen slides at støtte sig til. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave.

## Emner

- Udsagnslogik (propositional logic), Rosen afsnit 1.1
- Prædikater og kvantorer (predicates and quantifiers), Rosen afsnit 1.4

## Begreber

**Udsagn og konnektiver.** Et udsagn er en sætning, der enten er sand eller falsk. Med negation $\neg p$, konjunktion $p \land q$, disjunktion $p \lor q$, eksklusiv eller $p \oplus q$, implikation $p \to q$ og biimplikation $p \leftrightarrow q$ bygger man sammensatte udsagn. Sandhedsværdien findes i en sandhedstabel. Eksempel: $p \to q$ er kun falsk, når $p$ er sand og $q$ er falsk. Derfor er "hvis $2 > 3$ så er $1 = 1$" sand.

**Logisk ækvivalens.** To udsagn er ækvivalente, hvis de har samme sandhedstabel. Tre ækvivalenser bruges hele tiden: $p \to q \equiv \neg p \lor q$, kontraposition $p \to q \equiv \neg q \to \neg p$, og De Morgans love $\neg(p \land q) \equiv \neg p \lor \neg q$ og $\neg(p \lor q) \equiv \neg p \land \neg q$. Eksempel: negationen af "det regner og jeg har paraply" er "det regner ikke eller jeg har ikke paraply".

**Tautologi og kontradiktion.** En tautologi er sand uanset sandhedsværdierne, fx $p \lor \neg p$. En kontradiktion er altid falsk, fx $p \land \neg p$. Man viser det med en sandhedstabel eller ved at omskrive med ækvivalenserne ovenfor.

**Omvendt og kontraponeret.** For $p \to q$ er den omvendte $q \to p$ og den kontraponerede $\neg q \to \neg p$. Kun den kontraponerede er ækvivalent med den oprindelige. Eksempel: "hvis $n$ er lige, så er $n^2$ lige" er sand, men den omvendte "hvis $n^2$ er lige, så er $n$ lige" er en anden påstand, som skal bevises for sig.

**Prædikater.** Et prædikat $P(x)$ bliver først et udsagn, når $x$ får en værdi, eller når $x$ bindes af en kvantor. Eksempel: $P(x)$: "$x > 3$". $P(5)$ er sand, $P(2)$ er falsk.

**Kvantorer.** $\forall x\, P(x)$ siger "for alle $x$ i domænet" og $\exists x\, P(x)$ siger "der findes et $x$". Domænet har betydning. Eksempel: $P(x)$: $x^2 > x$ over de hele tal. $\exists x\, P(x)$ er sand ($x = 2$), mens $\forall x\, P(x)$ er falsk ($x = 1$ giver $1 > 1$, og $x = 0$ giver $0 > 0$).

**Negation af kvantorer.** $\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)$ og $\neg \exists x\, P(x) \equiv \forall x\, \neg P(x)$. For at modbevise et "for alle" er et enkelt modeksempel nok.

**Indlejrede kvantorer.** Rækkefølgen betyder noget. Over $\mathbb{Z}$ er $\forall x\, \exists y\, (x + y = 0)$ sand (vælg $y = -x$), men $\exists y\, \forall x\, (x + y = 0)$ er falsk, fordi ét $y$ ikke kan virke for alle $x$.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Her er der ingen afvigende numre for 8. udgave i planen.

- Afsnit 1.1: **1**, 3, **11**, **37**, 53
- Afsnit 1.4: **1**, 31, **35**, 37, 41, **55**

Kurset oplyser, at de fleste opgaver er ulige numre, hvis løsninger står bag i bogen.

## Tjek dig selv

- [ ] Kan jeg opstille sandhedstabellen for $p \to q$ og forklare, hvorfor den er sand, når $p$ er falsk?
- [ ] Kan jeg vise $p \to q \equiv \neg p \lor q$ med en sandhedstabel?
- [ ] Kan jeg bruge De Morgan til at negere et sammensat udsagn uden at miste en konnektiv?
- [ ] Kan jeg skelne omvendt fra kontraponeret implikation?
- [ ] Kan jeg negere $\forall x\, \exists y\, P(x,y)$ og skrive resultatet uden $\neg$ foran kvantorerne?
- [ ] Kan jeg give et eksempel, hvor $\forall x\, \exists y$ er sand, men $\exists y\, \forall x$ er falsk?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
