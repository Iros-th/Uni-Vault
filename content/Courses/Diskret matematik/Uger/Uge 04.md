---
publish: true
title: "Diskret matematik uge 4: Modulær aritmetik"
course: Diskret matematik
type: week
week: 4
tags:
  - diskret-matematik
  - ugenote
---

# Uge 4: Modulær aritmetik

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W4, 24. september), Rosen afsnit 4.1 og en smule af 4.3 i Rosen, "Discrete Mathematics and Its Applications". Slides er ikke anvendt.

## Emner

- Delelighed
- Modulær aritmetik
- Rosen afsnit 4.1 ("Divisibility and Modular Arithmetic") og lidt af afsnit 4.3

## Begreber

**Delelighed.** $a \mid b$ betyder, at der findes et helt tal $k$ med $b = ak$ (for $a \ne 0$). Eksempel: $6 \mid 42$, fordi $42 = 6 \cdot 7$. Hvis $a \mid b$ og $a \mid c$, så $a \mid (bx + cy)$ for alle hele tal $x, y$.

**Divisionsalgoritmen.** For $a \in \mathbb{Z}$ og $d > 0$ findes entydige $q, r$ med $a = dq + r$ og $0 \le r < d$. Eksempel: $-17 = 6 \cdot (-3) + 1$, så $-17 \bmod 6 = 1$ (ikke $-5$).

**Kongruens.** $a \equiv b \pmod m$ betyder $m \mid (a - b)$, altså at $a$ og $b$ har samme rest ved division med $m$. Eksempel: $38 \equiv 14 \pmod{12}$, fordi $12 \mid 24$.

**Regneregler.** Hvis $a \equiv b$ og $c \equiv d \pmod m$, så er $a + c \equiv b + d$ og $ac \equiv bd \pmod m$. Man må altså reducere undervejs. Eksempel: $7^{100} \bmod 6$: da $7 \equiv 1 \pmod 6$ er $7^{100} \equiv 1^{100} = 1$.

**Division er forsigtig.** Man må ikke altid forkorte. $2 \cdot 3 \equiv 2 \cdot 0 \pmod 6$, men man kan ikke dele med 2 og få $3 \equiv 0 \pmod 6$. Forkortelse af $c$ virker, når $\gcd(c, m) = 1$ (kommer tilbage til i uge 5 og 6).

**Aritmetik modulo $m$.** Regning i $\mathbb{Z}_m = \{0, 1, \dots, m-1\}$ med $+$ og $\cdot$ taget modulo $m$. Eksempel i $\mathbb{Z}_7$: $5 \cdot 4 = 20 \equiv 6$.
## Opgaver

Fra kursussiden, Rosen (2025-udgaven). Fed skrift betyder, at kurset anbefaler at lave dem først. Planen angiver ingen afvigende numre for 8. udgave i denne uge.

- Afsnit 4.1: 1, **5**, **9**, 17, 21, **29**, **41**, **43**, **44**, **45**, **47**, 51

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
