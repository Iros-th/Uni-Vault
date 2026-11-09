---
publish: true
title: "01025 uge 2: Systemer af differentialligninger"
course: Differential Equations and Infinite Series
type: week
week: 2
tags:
  - differential-equations
  - ugenote
---

# Uge 2: Systemer af differentialligninger

> **Kilde:** Ugeseddel 2 og semesteroversigten på ugeseddel 1 (DTU Learn, 01025 E26), lærebogen 4. udg. afsnit 2.1 til 2.5. Ugesedlen henviser til "appendiks A.5", semesteroversigten til "A.4"; i den 4. udgave jeg har tjekket mod hedder afsnittet om systemer A.4. SlidesUge2.pdf og WeekleyNotes1.pdf er ikke gennemgået her.

## Læseplan

- Forelæsning (onsdag 9/9): afsnit 2.1, 2.2, 2.3 og 2.4 samt appendiks om systemer (se kildenoten).
- Læs selv: afsnit 2.5 (systemer med variable koefficienter).

## Generelt fra ugesedlen

- Opgaver med 500-numre er eksamensopgaver, 600 er blandede, 700 er multiple choice, 900 er 01025-opgaver. Ekstra opgaver ligger i EkstraOpgaver.pdf i zip-filen.
- CAS må bruges til Mat 1-ting (rødder, egenværdier, egenvektorer), men ikke til at løse selve differentialligningen; det er Mat 2-pensum. Til eksamen oplyses egenværdier og egenvektorer.
- "Matematikgrammatik": et lighedstegn er et verbum i en sætning, med komma og punktum efter almindelige regler.

## Begreber

### Lineært system af 1. orden
$$\dot{\mathbf x}(t) = A\mathbf x(t) + \mathbf b\,u(t),$$

hvor $A$ er en konstant $n \times n$ matrix. Uden $\mathbf b u$ er systemet homogent. En $n$'te ordens ligning kan altid skrives som et system ved at sætte $x_1 = y$, $x_2 = y'$, osv.

**Eksempel.** $y'' + 3y' + 2y = 0$ bliver med $x_1 = y$, $x_2 = y'$ til $\dot x_1 = x_2$, $\dot x_2 = -2x_1 - 3x_2$, altså $A = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}$.

### Egenværdimetoden, reelle egenværdier (sætning 2.3)
Hvis $A\mathbf v = \lambda\mathbf v$ med $\mathbf v \neq \mathbf 0$, så er $\mathbf x(t) = e^{\lambda t}\mathbf v$ en løsning.

**Eksempel.** $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ har egenværdien $3$ med $\mathbf v = (1,1)^\top$ og $-1$ med $\mathbf v = (1,-1)^\top$ (tjek: $A(1,1)^\top = (3,3)^\top$ og $A(1,-1)^\top = (-1,1)^\top$). Fuldstændig løsning:

$$\mathbf x(t) = c_1 e^{3t}\begin{pmatrix}1\\1\end{pmatrix} + c_2 e^{-t}\begin{pmatrix}1\\-1\end{pmatrix}.$$

### Komplekse egenværdier (lemma 2.4, sætning 2.6)
Er $\lambda = a + i\omega$ en egenværdi med egenvektor $\mathbf v$, så er $\operatorname{Re}(e^{\lambda t}\mathbf v)$ og $\operatorname{Im}(e^{\lambda t}\mathbf v)$ to reelle, lineært uafhængige løsninger. Den konjugerede egenværdi giver ikke nye reelle løsninger.

**Eksempel.** $A = \begin{pmatrix} 0 & 1 \\ -1 & 0\end{pmatrix}$ har $\lambda = \pm i$. For $\lambda = i$ giver $(A - iI)\mathbf v = \mathbf 0$ egenvektoren $\mathbf v = (1, i)^\top$. Så

$$e^{it}\begin{pmatrix}1\\ i\end{pmatrix} = \begin{pmatrix}\cos t + i\sin t\\ -\sin t + i\cos t\end{pmatrix},$$

og de reelle løsninger er $(\cos t, -\sin t)^\top$ og $(\sin t, \cos t)^\top$. Tjek den første: $\dot x_1 = -\sin t = x_2$ og $\dot x_2 = -\cos t = -x_1$.

### Algebraisk og geometrisk multiplicitet (sætning 2.10 og 2.11)
Hvis en egenværdi har algebraisk multiplicitet $p$ men færre end $p$ lineært uafhængige egenvektorer, giver egenværdimetoden ikke nok løsninger. Så søges løsninger af typen $e^{\lambda t}(\mathbf u + t\mathbf v)$, hvor $\mathbf v$ er en egenvektor og $(A - \lambda I)\mathbf u = \mathbf v$.

**Eksempel.** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}$: $\lambda = 1$ er dobbeltrod, men kun $\mathbf v = (1,0)^\top$ er egenvektor. Løs $(A - I)\mathbf u = \mathbf v$, dvs. $\begin{pmatrix} 0 & 1\\0&0\end{pmatrix}\mathbf u = (1,0)^\top$, fx $\mathbf u = (0,1)^\top$. Anden løsning: $e^{t}(t, 1)^\top$. Tjek: $x_1 = te^t$ giver $\dot x_1 = e^t + te^t = x_1 + x_2$, og $\dot x_2 = e^t = x_2$.

### Fundamentalmatrix (afsnit 2.3, sætning 2.15 og 2.16)
En fundamentalmatrix $\Phi(t)$ har $n$ lineært uafhængige løsninger som søjler. Så er den fuldstændige løsning til $\dot{\mathbf x} = A\mathbf x$ lig $\mathbf x(t) = \Phi(t)\mathbf c$, og $\Phi(t)$ er invertibel for alle $t$.

**Eksempel.** Fra det første eksempel: $\Phi(t) = \begin{pmatrix} e^{3t} & e^{-t}\\ e^{3t} & -e^{-t}\end{pmatrix}$.

### Eksistens og entydighed (sætning 2.17)
For ethvert $t_0$ og enhver startvektor findes præcis én løsning med $\mathbf x(t_0)$ lig den givne vektor. Med fundamentalmatricen: $\mathbf c = \Phi(t_0)^{-1}\mathbf x(t_0)$.

### Inhomogene systemer (afsnit 2.4, sætning 2.19)
Den generelle løsningsformel er

$$\mathbf x(t) = \Phi(t)\int \Phi(t)^{-1}\mathbf b\,u(t)\,dt,$$

hvor integrationskonstanten giver den homogene del. Ofte er gættemetoden hurtigere: er påvirkningen konstant, prøv en konstant vektor.

**Eksempel.** $\dot{\mathbf x} = \begin{pmatrix}1&2\\2&1\end{pmatrix}\mathbf x + \begin{pmatrix}3\\0\end{pmatrix}$. Gæt $\mathbf x = \mathbf c$ konstant: $\mathbf 0 = A\mathbf c + (3,0)^\top$, så $\mathbf c = -A^{-1}(3,0)^\top$. Med $A^{-1} = -\frac13\begin{pmatrix}1&-2\\-2&1\end{pmatrix}$ fås $\mathbf c = (1,-2)^\top$. Tjek: $A\mathbf c = (-3, 0)^\top$. Gættet virker kun fordi $\det A \neq 0$ (sammenlign opgave 431 (ii), hvor det går galt).

### Variable koefficienter (afsnit 2.5)
Hvis $A = A(t)$ afhænger af $t$, gælder strukturen (fundamentalmatrix, løsningsformel) stadig, men egenværdimetoden virker ikke. Læses selv.

### Lemma A.15
Hvis $\mathbf u + i\mathbf v$ og $\mathbf u - i\mathbf v$ er lineært uafhængige i et komplekst vektorrum, så er $\mathbf u$ og $\mathbf v$ også. Det er argumentet bag at real- og imaginærdel giver to uafhængige reelle løsninger. Beviset er hjemmeopgave 912.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 409 | 2.2 til 2.4 | Fundamentalmatrix for $\begin{pmatrix}5&3\\9&-1\end{pmatrix}$ og fuldstændig løsning med påvirkningen $e^{4t}(3,-5)^\top$. |
| 411 (i), (ii) | 2.2 | Fuldstændig kompleks og reel løsning til et $3 \times 3$ system. Ugesedlen: et andet valg af egenvektorer får løsningerne til at se forskellige ud, men spannet er det samme. |
| 414 | 2.2 (sætning 2.10) | $\begin{pmatrix}2&9\\-1&-4\end{pmatrix}$: dobbelt egenværdi, find en løsning af formen $\mathbf u e^{-t} + \mathbf v te^{-t}$. |
| 914 | 2.2 (sætning 2.6 (b)) | Bevis for at real- og imaginærdel af $e^{\lambda t}\mathbf v$ er uafhængige løsninger. Vink: kompleks konjugér $A\mathbf v = \lambda\mathbf v$. |
| 431 | 2.3, 2.4 | Inhomogent system hvor gættet med en konstant vektor ikke virker; brug den generelle løsningsformel. |

**Hjemmeopgavesæt 2:** Möbius-opgave senest 15/9 kl. 20, og opgave 903 og 912 afleveres fysisk 16/9 kl. 8.

- 903 (afsnit 1.2, bilag F.7): bevis for sætning 1.14 for andenordens ligninger ved direkte udregning; sætning 1.14 må derfor ikke bruges.
- 912 (appendiks om systemer): bevis lemma A.15. Ugesedlen understreger at man skal starte med en vilkårlig linearkombination sat lig nul.

## Tjek dig selv

- [ ] Kan jeg omskrive en $n$'te ordens ligning til et system af 1. orden?
- [ ] Kan jeg bruge egenværdimetoden med både reelle og komplekse egenværdier?
- [ ] Ved jeg hvad jeg gør når den geometriske multiplicitet er mindre end den algebraiske?
- [ ] Hvad er en fundamentalmatrix, og hvordan finder jeg løsningen med en given startværdi?
- [ ] Kan jeg bruge den generelle løsningsformel, og ved jeg hvornår gættemetoden med en konstant vektor fejler?
- [ ] Kan jeg forklare hvorfor den konjugerede egenværdi ikke giver nye reelle løsninger?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 01|Uge 1]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 03|Uge 3: Overføringsfunktion for systemer og stabilitet]]
