---
publish: true
title: "Diskret matematik uge 2: Beviser og mængder"
course: Diskret matematik
type: week
week: 2
tags:
  - diskret-matematik
  - ugenote
---

# Uge 2: Introduktion til beviser og mængder

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W2, 10. september), Rosen afsnit 1.7 og 2.1 i Rosen, "Discrete Mathematics and Its Applications". Slides er ikke anvendt.

## Emner

- Direkte beviser, kontraposition og modstrid (Rosen afsnit 1.7, "Introduction to Proofs")
- Mængder, delmængder, potensmængder og kartesiske produkter (Rosen afsnit 2.1, "Sets")

## Begreber

**Direkte bevis.** For at vise $p \to q$ antager man $p$ og udleder $q$. Eksempel: hvis $n$ er ulige, er $n^2$ ulige. Skriv $n = 2k + 1$. Så er $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, som er ulige.

**Bevis ved kontraposition.** I stedet for $p \to q$ viser man $\neg q \to \neg p$. Eksempel: hvis $3n + 2$ er ulige, så er $n$ ulige. Kontraponeret: hvis $n$ er lige, $n = 2k$, så er $3n + 2 = 6k + 2 = 2(3k + 1)$ lige. Færdig.

**Bevis ved modstrid.** Man antager det modsatte af det, man vil vise, og når frem til en selvmodsigelse. Klassisk eksempel: $\sqrt{2}$ er irrationel. Antag $\sqrt{2} = a/b$ med $\gcd(a,b) = 1$. Så er $a^2 = 2b^2$, så $a$ er lige, $a = 2c$, så $b^2 = 2c^2$ og $b$ er også lige. Det modsiger $\gcd(a,b) = 1$.

**Mængder og delmængder.** $x \in A$ betyder, at $x$ er element i $A$. $A \subseteq B$ betyder, at alle elementer i $A$ også ligger i $B$. For at vise $A = B$ viser man $A \subseteq B$ og $B \subseteq A$. Den tomme mængde $\emptyset$ er delmængde af enhver mængde.

**Kardinalitet og potensmængde.** $|A|$ er antallet af elementer i en endelig mængde. Potensmængden $\mathcal{P}(A)$ er mængden af alle delmængder af $A$, og $|\mathcal{P}(A)| = 2^{|A|}$. Eksempel: $\mathcal{P}(\{a,b\}) = \{\emptyset, \{a\}, \{b\}, \{a,b\}\}$, altså $2^2 = 4$ elementer.

**Kartesisk produkt.** $A \times B = \{(a,b) : a \in A, b \in B\}$ er mængden af ordnede par, og $|A \times B| = |A| \cdot |B|$. Eksempel: $\{1,2\} \times \{x,y,z\}$ har $2 \cdot 3 = 6$ par. Rækkefølgen betyder noget, så $A \times B \ne B \times A$ i almindelighed.
## Opgaver

Fra kursussiden, Rosen (2025-udgaven). Fed skrift betyder, at kurset anbefaler at lave dem først. Hvor 8. udgave har andre numre, står de i parentes.

- Afsnit 1.7: 3, **11**, **37**, **41**
- Ekstra fra kurset: "Show you are smarter than Kenneth H. Rosen by giving a direct proof for Example 3 in Section 1.7." (I 8. udgave er Eksempel 3 beviset for, at hvis $3n + 2$ er ulige, så er $n$ ulige, og det bevises der ved kontraposition. Et direkte bevis: hvis $3n + 2$ er ulige, er $3n$ ulige, og så er $n = 3n - 2n$ ulige som forskel mellem et ulige og et lige tal.)
- Afsnit 2.1: **15**, 25, **31**, **41** (**11**, 21, **27**, **37** i 8. udgave)

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
