---
publish: true
title: "Diskret matematik uge 11: Relationer"
course: Diskret matematik
type: week
week: 11
tags:
  - diskret-matematik
  - ugenote
---

# Uge 11: Relationer

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W11, 19. november). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave (9.5 "Equivalence Relations", 9.6 "Partial Orderings").

## Emner

- Ækvivalensrelationer (Rosen afsnit 9.5)
- Partielle ordninger (afsnit 9.6)

## Begreber

**Relation.** En relation $R$ på en mængde $A$ er en delmængde af $A \times A$. Man skriver $aRb$ for $(a,b) \in R$. Eksempel: "$\le$" på $\mathbb{Z}$.

**Refleksiv, symmetrisk, antisymmetrisk, transitiv.** Refleksiv: $aRa$ for alle $a$. Symmetrisk: $aRb \Rightarrow bRa$. Antisymmetrisk: $aRb$ og $bRa$ giver $a = b$. Transitiv: $aRb$ og $bRc$ giver $aRc$. Eksempel: "$\le$" er refleksiv, antisymmetrisk og transitiv, men ikke symmetrisk.

**Ækvivalensrelation.** En relation, der er refleksiv, symmetrisk og transitiv. Eksempel: kongruens modulo $m$ på $\mathbb{Z}$ (uge 4).

**Ækvivalensklasser.** $[a] = \{x : xRa\}$. Klasserne opdeler $A$ i disjunkte dele (en partition), og to elementer er i samme klasse netop når de er relateret. Eksempel: modulo 3 har tre klasser $[0], [1], [2]$.

**Partielt ordnet mængde (poset).** En relation, der er refleksiv, antisymmetrisk og transitiv. Eksempel: delelighed $\mid$ på de positive hele tal. $2 \mid 6$, men 2 og 3 er ikke sammenlignelige.

**Hasse-diagram.** Tegn kun de "umiddelbare" relationer og udelad løkker og transitive kanter. Mindre elementer tegnes nedenunder. Eksempel: divisorer af 12: $1$ nederst, så $2$ og $3$, så $4$ og $6$, øverst $12$; kanter $1$-$2$, $1$-$3$, $2$-$4$, $2$-$6$, $3$-$6$, $4$-$12$, $6$-$12$.

**Maksimale, minimale, største og mindste element.** Et maksimalt element har intet over sig; et største element er over alle andre. I divisorerne af 12 er 12 det største og 1 det mindste.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Planen angiver ingen afvigende numre for 8. udgave i denne uge.

- Afsnit 9.5: 1, 7, **11**, **30**, **35**, **45**
- Afsnit 9.6: **1**, **3**, 15, **19**, 20, **33**

## Tjek dig selv

- [ ] Kan jeg teste de fire egenskaber på en konkret relation og give modeksempler?
- [ ] Kan jeg vise, at en relation er en ækvivalensrelation?
- [ ] Kan jeg angive ækvivalensklasserne og tælle dem?
- [ ] Kan jeg tegne et Hasse-diagram for delelighed på en lille mængde?
- [ ] Kan jeg skelne maksimalt element fra største element?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
