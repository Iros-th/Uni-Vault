---
publish: true
title: "Diskret matematik uge 6: Kinesisk restsætning og induktion"
course: Diskret matematik
type: week
week: 6
tags:
  - diskret-matematik
  - ugenote
---

# Uge 6: Kinesisk restsætning og matematisk induktion

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W6, 8. oktober), Rosen afsnit 4.4 og 5.1 i Rosen, "Discrete Mathematics and Its Applications". Slides er ikke anvendt. Efter denne uge er der efterårsferie.

## Emner

- Løsning af kongruenser (Rosen afsnit 4.4)
- Matematisk induktion (Rosen afsnit 5.1, første introduktion)

## Begreber

**Lineær kongruens.** $ax \equiv b \pmod m$ har løsning netop når $\gcd(a,m) \mid b$. Når $\gcd(a,m) = 1$ findes en invers $\bar{a}$ med $a\bar{a} \equiv 1 \pmod m$, og så er $x \equiv \bar{a}b$. Eksempel: $3x \equiv 4 \pmod 7$. Inversen til 3 er 5 (for $3 \cdot 5 = 15 \equiv 1$), så $x \equiv 5 \cdot 4 = 20 \equiv 6 \pmod 7$.

**Invers modulo $m$.** Findes via udvidet Euklid (uge 5): $sa + tm = 1$ giver $s \equiv a^{-1} \pmod m$. Eksempel: $\gcd(3,7)$: $1 = 3 \cdot (-2) + 7 \cdot 1$, så $3^{-1} \equiv -2 \equiv 5 \pmod 7$.

**Kinesisk restsætning (CRT).** Hvis $m_1, \dots, m_k$ er parvis indbyrdes primiske, har systemet $x \equiv a_i \pmod{m_i}$ en løsning, som er entydig modulo $M = m_1 \cdots m_k$. Eksempel: $x \equiv 2 \pmod 3$ og $x \equiv 3 \pmod 5$. Prøv $x = 3 + 5t$; kravet $3 + 5t \equiv 2 \pmod 3$ giver $2t \equiv 2$, så $t \equiv 1$ og $x = 8$. Løsningerne er $x \equiv 8 \pmod{15}$.

**Matematisk induktion.** For at vise $P(n)$ for alle $n \ge 1$ viser man (1) basistrinnet $P(1)$ og (2) induktionstrinnet: hvis $P(k)$ gælder, så gælder $P(k+1)$. Eksempel: $1 + 2 + \dots + n = \frac{n(n+1)}{2}$. Basis: $n=1$ giver $1 = 1$. Trin: antag formlen for $k$. Så er $1 + \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2}$.

**Typiske fejl i induktion.** Man må ikke glemme basistrinnet, og man må ikke antage det, man vil vise, for $k+1$. Induktionsantagelsen gælder kun for $k$.
## Opgaver

Fra kursussiden, Rosen (2025-udgaven). Fed skrift betyder, at kurset anbefaler at lave dem først. Planen angiver ingen afvigende numre for 8. udgave i denne uge.

- Afsnit 4.4: **5**, 7, **9**, **11**, 19, **21**, **24**, 29, 35, **39**, 43, **47**, 53
- Afsnit 5.1: 1, **3**, **5**, 7

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
