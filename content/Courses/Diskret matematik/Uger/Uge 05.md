---
publish: true
title: "Diskret matematik uge 5: Primtal og Euklids algoritme"
course: Diskret matematik
type: week
week: 5
tags:
  - diskret-matematik
  - ugenote
---

# Uge 5: Primtal og Euklids algoritme

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W5, 1. oktober), Rosen afsnit 4.3 i Rosen, "Discrete Mathematics and Its Applications". Slides er ikke anvendt.

## Emner

- Primtal
- Største fælles divisor (gcd)
- Euklids algoritme
- Rosen afsnit 4.3

## Begreber

**Primtal og primfaktorisering.** Et primtal er et helt tal $p > 1$, hvis eneste positive divisorer er 1 og $p$. Aritmetikkens fundamentalsætning: hvert helt tal $n > 1$ kan skrives som et produkt af primtal på en entydig måde (op til rækkefølge). Eksempel: $360 = 2^3 \cdot 3^2 \cdot 5$.

**Sammensatte tal.** Hvis $n$ er sammensat, har $n$ en primfaktor $\le \sqrt{n}$. Det bruges til at teste, om et tal er primtal. Eksempel: for at teste 97 er det nok at prøve primtallene op til $\sqrt{97} < 10$, altså 2, 3, 5, 7. Ingen går op, så 97 er primtal.

**Uendeligt mange primtal.** Euklids bevis (modstrid): hvis $p_1, \dots, p_k$ var alle primtal, har $N = p_1 p_2 \cdots p_k + 1$ en primfaktor, men den kan ikke være nogen af $p_i$, fordi hver $p_i$ giver rest 1.

**Største fælles divisor.** $\gcd(a,b)$ er det største hele tal, der går op i både $a$ og $b$. Hvis $\gcd(a,b) = 1$ kaldes $a$ og $b$ indbyrdes primiske. Via primfaktorisering: tag mindste potens af hver primfaktor. Eksempel: $\gcd(360, 84)$ med $84 = 2^2 \cdot 3 \cdot 7$ giver $2^2 \cdot 3 = 12$.

**Euklids algoritme.** Bygger på $\gcd(a,b) = \gcd(b, a \bmod b)$. Man gentager, til resten er 0; sidste ikke-nul rest er gcd. Eksempel: $\gcd(252, 105)$: $252 = 2 \cdot 105 + 42$, $105 = 2 \cdot 42 + 21$, $42 = 2 \cdot 21 + 0$. Altså $\gcd = 21$.

**Bézouts identitet og udvidet Euklid.** Der findes hele tal $s,t$ med $\gcd(a,b) = sa + tb$. Man finder dem ved at løbe Euklids algoritme baglæns. Eksempel: $21 = 105 - 2 \cdot 42 = 105 - 2(252 - 2 \cdot 105) = 5 \cdot 105 - 2 \cdot 252$.

**Mindste fælles multiplum.** $\operatorname{lcm}(a,b) \cdot \gcd(a,b) = ab$. Eksempel: $\operatorname{lcm}(12, 18) = 12 \cdot 18 / 6 = 36$.
## Opgaver

Fra kursussiden, Rosen (2025-udgaven). Fed skrift betyder, at kurset anbefaler at lave dem først. Planen angiver ingen afvigende numre for 8. udgave i denne uge.

- Afsnit 4.3: 3, **11**, 15, **17**, **31**, **33**, 41, **43**, **49**, **51**, **55**
- Ekstra fra kurset: Bevis, at for ethvert helt tal $n > 1$ og ikke-negativt helt tal $k$ går $n - 1$ op i $n^k - 1$. (Hint: tænk på $n \equiv 1 \pmod{n-1}$ og brug regnereglerne for kongruens fra uge 4.)

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
