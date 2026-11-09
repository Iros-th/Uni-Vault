---
publish: true
title: "Diskret matematik uge 7: Induktion og rekursion"
course: Diskret matematik
type: week
week: 7
tags:
  - diskret-matematik
  - ugenote
---

# Uge 7: Induktion og rekursion

> Kilde: ugeplanen på kursussiden https://www2.imm.dtu.dk/courses/01017/2026/ (uge W7, 22. oktober, efter ferieugen). Begrebsforklaringerne er skrevet ud fra emnerne i planen; der er ingen slides. Afsnitstitler er tjekket mod en lokal tekst af Rosen, 8. udgave (5.1, 5.2 "Strong Induction and Well-Ordering", 5.3 "Recursive Definitions and Structural Induction").

## Emner

- Matematisk induktion (Rosen afsnit 5.1)
- Stærk induktion (afsnit 5.2)
- Rekursive definitioner og strukturel induktion (afsnit 5.3)

## Begreber

**Induktion, mere avanceret.** Induktion bruges også til uligheder, delelighed og summer. Eksempel på en ulighed: vis $2^n > n$ for $n \ge 1$. Basis: $2 > 1$. Trin: $2^{k+1} = 2 \cdot 2^k > 2k \ge k + 1$ for $k \ge 1$.

**Basis, der ikke er 1.** Man kan starte induktionen ved et andet tal. Eksempel: $2^n < n!$ for $n \ge 4$ (basis $n = 4$: $16 < 24$).

**Stærk induktion.** I trinnet må man antage $P(j)$ for alle $j \le k$ (ikke kun $P(k)$) og vise $P(k+1)$. Eksempel: hvert heltal $n \ge 2$ er et produkt af primtal. Hvis $k+1$ er primtal, er det vist. Ellers er $k+1 = ab$ med $2 \le a, b \le k$, og begge er produkter af primtal ved antagelsen.

**Velordningsprincippet.** Enhver ikke-tom mængde af positive hele tal har et mindste element. Det er ækvivalent med induktion og bruges i beviser ved "mindste modeksempel".

**Rekursive definitioner.** En funktion eller følge defineres ved et basistilfælde og en regel, der bruger tidligere værdier. Eksempel: Fibonacci: $f_0 = 0$, $f_1 = 1$, $f_n = f_{n-1} + f_{n-2}$. Altså $0, 1, 1, 2, 3, 5, 8, \dots$

**Rekursivt definerede mængder.** Man angiver nogle startelementer og nogle regler for at lave nye. Eksempel: $S$ indeholder 3, og hvis $x, y \in S$, så er $x + y \in S$. Så er $S$ netop de positive multipla af 3.

**Strukturel induktion.** For at vise, at alle elementer i en rekursivt defineret mængde har en egenskab, viser man den for startelementerne og viser, at reglerne bevarer den. Eksempel: alle elementer i $S$ ovenfor er delelige med 3, fordi 3 er det, og summen af to multipla af 3 er et multiplum af 3.

## Opgaver

Fra kursussiden, Rosen, "Discrete Mathematics and Its Applications" (2025-udgaven). Fed skrift betyder, at kurset vil have dem lavet først. Hvor 8. udgave har andre numre, står de i parentes.

- Afsnit 5.1: **19**, **51**, 65, **75**
- Afsnit 5.2: 5, **27** (3, **25** i 8. udgave)
- Afsnit 5.3: 1, **5**, **7**, 13, 17, **31**, **45**

## Tjek dig selv

- [ ] Kan jeg afgøre, hvornår jeg skal bruge stærk induktion i stedet for almindelig?
- [ ] Kan jeg lave et induktionsbevis for en ulighed, hvor basis ikke er $n = 1$?
- [ ] Kan jeg beregne de første ti led af en rekursivt defineret følge?
- [ ] Kan jeg give en rekursiv definition af en mængde og bevise en egenskab ved strukturel induktion?
- [ ] Kan jeg forklare, hvorfor velordningsprincippet og induktion hænger sammen?

## Links

- [[Courses/Diskret matematik/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Diskret matematik/Diskret matematik|Diskret matematik]]
