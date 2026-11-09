---
publish: true
title: "01025 uge 3: Overføringsfunktion for systemer og stabilitet"
course: Differential Equations and Infinite Series
type: week
week: 3
tags:
  - differential-equations
  - ugenote
---

# Uge 3: Overføringsfunktion for systemer og stabilitet

> **Kilde:** Ugeseddel 3 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 2.6 til 2.8. Ugesedlen nævner appendiks "A.2 og A.6"; i den 4. udgave jeg har tjekket mod er stabilitetsbeviserne i A.5. SlidesUge3.pdf og WeeklyNotes2.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning: afsnit 2.6 og 2.8 samt appendiks om lineær algebra og stabilitet.
- Læs selv: afsnit 2.7 (frekvenskarakteristikker for systemer; ikke på pensumlisten).
- Multiple choice: til eksamen er der MC-opgaver hvor udregninger/argumenter også skal noteres. Øv på 701 i EkstraOpgaver.pdf.

## Begreber

### Overføringsfunktion for et system (afsnit 2.6, sætning 2.21)
Systemet $\dot{\mathbf x} = A\mathbf x + \mathbf b u$, $y = \mathbf d^\top\mathbf x$ med $u = e^{st}$ har, når $\det(A - sI) \neq 0$, løsningen $\mathbf x(t) = -(A - sI)^{-1}\mathbf b\,e^{st}$ (det er udsagnet i opgave 915). Svaret er så $y = H(s)e^{st}$ med

$$H(s) = -\mathbf d^\top (A - sI)^{-1}\mathbf b.$$

**Eksempel.** $A = \begin{pmatrix}-1&0\\0&-2\end{pmatrix}$, $\mathbf b = (1,1)^\top$, $y = x_1 + x_2$. Da $A - sI$ er diagonal, er $(A - sI)^{-1} = \operatorname{diag}\bigl(\tfrac{1}{-1-s}, \tfrac{1}{-2-s}\bigr)$ og

$$H(s) = \frac{1}{s+1} + \frac{1}{s+2}, \qquad s \neq -1, -2.$$

(Kontrolleret numerisk for $s = 0.5$ og $s = 2$.)

### Stationært svar på $\cos\omega t$ (sætning 2.24)
Ligesom for $n$'te ordens ligninger: er $\det(A - i\omega I) \neq 0$, giver $u = \cos\omega t$ svaret $y = \operatorname{Re}\bigl(H(i\omega)e^{i\omega t}\bigr)$.

### Stabilitet: definitioner (afsnit 2.8)
Det homogene system $\dot{\mathbf x} = A\mathbf x$ er **stabilt**, hvis alle løsninger er begrænsede for $t \geq 0$, og **asymptotisk stabilt**, hvis alle løsninger går mod $\mathbf 0$ for $t \to \infty$. Asymptotisk stabil medfører stabil.

### Stabilitetssætningerne (sætning 2.34 og 2.36)
- Asymptotisk stabilt netop når alle egenværdier har negativ realdel.
- Stabilt netop når (i) ingen egenværdi har positiv realdel, og (ii) enhver egenværdi med realdel nul har samme algebraiske og geometriske multiplicitet.
- Korollar 2.35: med $n$ forskellige egenværdier er systemet stabilt netop når ingen egenværdi har positiv realdel.

**Eksempel 1.** $A = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$ har $\lambda = \pm i$, to forskellige med realdel nul: stabilt, men ikke asymptotisk stabilt (løsningerne er cosinus og sinus).

**Eksempel 2.** $A = \begin{pmatrix}0&1\\0&0\end{pmatrix}$: $\lambda = 0$ er dobbeltrod med kun én egenvektor. Løsningerne er $x_1 = c_1 + c_2 t$, $x_2 = c_2$, så $x_1$ er ubegrænset: ustabilt.

### Routh-Hurwitz' kriterium (sætning 2.39, korollar 2.40 og 2.41)
Man kan afgøre om alle rødder har negativ realdel uden at finde dem.
- $\lambda^2 + a_1\lambda + a_2$: alle rødder har negativ realdel netop når $a_1 > 0$ og $a_2 > 0$.
- $\lambda^3 + a_1\lambda^2 + a_2\lambda + a_3$: netop når $a_1 > 0$, $a_3 > 0$ og $a_1 a_2 > a_3$.

**Eksempel.** $\lambda^3 + 2\lambda^2 + 3\lambda + 1$: $a_1 = 2 > 0$, $a_3 = 1 > 0$ og $a_1a_2 = 6 > 1$, så systemet er asymptotisk stabilt. (Numerisk har rødderne realdel cirka $-0.78$ og $-0.43$.)

### Spor og determinant for $2 \times 2$ (opgave 925)
For en $2\times 2$ matrix er det karakteristiske polynomium $\lambda^2 - \operatorname{tr}(A)\lambda + \det A$, så Routh-Hurwitz giver: asymptotisk stabilt netop når $\det A > 0$ og $\operatorname{tr} A < 0$. (Opgave 925 beder dig vise det; den står på ugeseddel 5.)

### MC-eksempel: opgave 701 (facit står på ugeseddel 4: svar 3 og 4)
Ligningen $y''' + y'' + 2y' + 2y = u' + u$ har

$$H(s) = \frac{s+1}{s^3 + s^2 + 2s + 2} = \frac{s+1}{(s+1)(s^2+2)} = \frac{1}{s^2+2}, \quad s \notin \{-1, \pm i\sqrt2\}.$$

Påvirkningen $u = \sin 2t = \operatorname{Im}(e^{2it})$ giver $H(2i) = \frac{1}{-4+2} = -\frac12$, så $y = -\frac12\sin 2t$. Pas på definitionsmængden: den er stadig bestemt af nævneren før forkortning.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 701 (MC) | 1.4 | Overføringsfunktion og stationært svar (se eksemplet ovenfor; facit på ugeseddel 4). |
| 411 (iii), (iv) | 2.8 | Er $3\times 3$-systemet fra sidste uge stabilt og asymptotisk stabilt? |
| 422 (i), (ii) | 2.8 | Stabilitet af to systemer. Ugesedlen oplyser egenværdierne: $\frac{-1 \pm \sqrt{93}}{2}$ i (i) og cirka $-0.3686 \pm 1.9158i$ og $-0.2627$ i (ii). |
| 919 | 1.4 | Hvad sker der når $s$ er rod i karakterligningen? Ligningen $y'' - y = u' + u$. Til (iv): sætning 2.20/eksempel 2.21 (ugesedlens numre) eller gæt som på slide 32 i SlidesUge1. |
| 417 | 2.6 | Overføringsfunktion for et $2\times 2$ system og stationært svar på $u = \cos t$. Den inverse $2\times 2$ matrix står på side 242 og bogens omslag. |
| 507 | 2.8 | Asymptotisk stabilitet af $\begin{pmatrix}a&2\\a&1\end{pmatrix}$ afhængigt af $a$. Vink til (iii): skriv rødderne op og se på fortegnene. |

**Hjemmeopgavesæt 3:** Möbius senest 22/9 kl. 20, og opgave 915 (afsnit 2.6, bevis for løsningsudtrykket (2.34): $\mathbf x_0 e^{st}$ er løsning netop når $\mathbf x_0 = -(A - sI)^{-1}\mathbf b$) afleveres fysisk 23/9 kl. 8.

Miniprojekt 1 kommer i uge 4. Opgave 1 (i) til (iv) og opgave 3 kan laves allerede nu.

## Tjek dig selv

- [ ] Kan jeg udlede $H(s) = -\mathbf d^\top(A - sI)^{-1}\mathbf b$ fra gættet $\mathbf x = \mathbf x_0 e^{st}$?
- [ ] Kan jeg skelne stabil og asymptotisk stabil, og give et eksempel på stabil men ikke asymptotisk stabil?
- [ ] Ved jeg hvorfor en egenværdi med realdel nul og for få egenvektorer giver ustabilitet?
- [ ] Kan jeg bruge Routh-Hurwitz på et 2. og 3. grads polynomium?
- [ ] Kan jeg bruge spor og determinant til at afgøre stabilitet af et $2\times 2$ system?
- [ ] Husker jeg definitionsmængden for $H(s)$, også når der kan forkortes?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 02|Uge 2]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 04|Uge 4: Stabilitet og uendelige rækker]]
