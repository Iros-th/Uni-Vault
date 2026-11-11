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

> **Kilde:** ugeseddel 2 og semesteroversigten på ugeseddel 1, SlidesUge2.pdf, WeeklyNotes2.pdf, facitliste_studerende.pdf (DTU Learn, 01025 E26); lærebogen afsnit 2.1 til 2.5. Ugesedlen henviser til "appendiks A.5", semesteroversigten til "A.4"; i den ældre bog-PDF hedder afsnittet om systemer A.4. Sætningsnumre som i slides, se [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|oversigten]].

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

### Egenværdimetoden (sætning 2.4)
Hvis $A\mathbf v = \lambda\mathbf v$ med $\mathbf v \neq \mathbf 0$, så er $\mathbf x(t) = e^{\lambda t}\mathbf v$ en løsning. Løsninger hørende til lineært uafhængige egenvektorer er lineært uafhængige. Slides beviser det med "dagens lemma 2.A": er $\mathbf v_1, \dots, \mathbf v_k$ lineært uafhængige vektorer og $\mu_1, \dots, \mu_k \in \mathbb C$ vilkårlige, så er funktionerne $e^{\mu_1t}\mathbf v_1, \dots, e^{\mu_kt}\mathbf v_k$ lineært uafhængige (sæt $t = 0$ i en linearkombination lig nul).

**Eksempel.** $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ har egenværdien $3$ med $\mathbf v = (1,1)^\top$ og $-1$ med $\mathbf v = (1,-1)^\top$ (tjek: $A(1,1)^\top = (3,3)^\top$ og $A(1,-1)^\top = (-1,1)^\top$). Fuldstændig løsning:

$$\mathbf x(t) = c_1 e^{3t}\begin{pmatrix}1\\1\end{pmatrix} + c_2 e^{-t}\begin{pmatrix}1\\-1\end{pmatrix}.$$

### Komplekse egenværdier (sætning 2.7)
Er $\lambda = a + i\omega$ en egenværdi med egenvektor $\mathbf v$, så er $\operatorname{Re}(e^{\lambda t}\mathbf v)$ og $\operatorname{Im}(e^{\lambda t}\mathbf v)$ to reelle, lineært uafhængige løsninger. Den konjugerede egenværdi giver ikke nye reelle løsninger. Slides skriver dem ud: med $\lambda = a + i\omega$ er

$$\operatorname{Re}(e^{\lambda t}\mathbf v) = e^{at}\bigl(\cos\omega t\,\operatorname{Re}\mathbf v - \sin\omega t\,\operatorname{Im}\mathbf v\bigr), \qquad \operatorname{Im}(e^{\lambda t}\mathbf v) = e^{at}\bigl(\sin\omega t\,\operatorname{Re}\mathbf v + \cos\omega t\,\operatorname{Im}\mathbf v\bigr).$$

Observation fra slides (ikke eksplicit i bogen): er $A$ reel og $\mathbf x$ en kompleks løsning, så er $\overline{\mathbf x}$ også en løsning, fordi $\overline{A\mathbf x} = A\overline{\mathbf x}$.

**Eksempel.** $A = \begin{pmatrix} 0 & 1 \\ -1 & 0\end{pmatrix}$ har $\lambda = \pm i$. For $\lambda = i$ giver $(A - iI)\mathbf v = \mathbf 0$ egenvektoren $\mathbf v = (1, i)^\top$. Så

$$e^{it}\begin{pmatrix}1\\ i\end{pmatrix} = \begin{pmatrix}\cos t + i\sin t\\ -\sin t + i\cos t\end{pmatrix},$$

og de reelle løsninger er $(\cos t, -\sin t)^\top$ og $(\sin t, \cos t)^\top$. Tjek den første: $\dot x_1 = -\sin t = x_2$ og $\dot x_2 = -\cos t = -x_1$.

### Algebraisk og geometrisk multiplicitet (sætning 2.11)
Den algebraiske multiplicitet $p$ er antal gange $\lambda$ er rod i det karakteristiske polynomium, den geometriske $q$ er antal lineært uafhængige egenvektorer, og $1 \leq q \leq p$. Slides (sætning 2.11a): er $q < p$, findes vektorer $\mathbf b_{jk}$ så $\mathbf x_j(t) = \mathbf b_{j1}e^{\lambda t} + \mathbf b_{j2}te^{\lambda t} + \dots + \mathbf b_{jj}t^{j-1}e^{\lambda t}$, $j = 1, \dots, p$, er lineært uafhængige løsninger. Hvis en egenværdi har algebraisk multiplicitet $p$ men færre end $p$ lineært uafhængige egenvektorer, giver egenværdimetoden ikke nok løsninger. Så søges løsninger af typen $e^{\lambda t}(\mathbf u + t\mathbf v)$, hvor $\mathbf v$ er en egenvektor og $(A - \lambda I)\mathbf u = \mathbf v$.

**Eksempel.** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}$: $\lambda = 1$ er dobbeltrod, men kun $\mathbf v = (1,0)^\top$ er egenvektor. Løs $(A - I)\mathbf u = \mathbf v$, dvs. $\begin{pmatrix} 0 & 1\\0&0\end{pmatrix}\mathbf u = (1,0)^\top$, fx $\mathbf u = (0,1)^\top$. Anden løsning: $e^{t}(t, 1)^\top$. Tjek: $x_1 = te^t$ giver $\dot x_1 = e^t + te^t = x_1 + x_2$, og $\dot x_2 = e^t = x_2$.

**Eksempel fra slides (indsæt et gæt af formen polynomium gange $e^{\lambda t}$).** $A = \begin{pmatrix}1&0&0\\0&2&-1\\0&1&0\end{pmatrix}$ har $\det(\lambda I - A) = (\lambda - 1)^3$. Her er $A - I = \begin{pmatrix}0&0&0\\0&1&-1\\0&1&-1\end{pmatrix}$ af rang 1, så $q = 2$ med egenvektorer $(1,0,0)^\top$ og $(0,1,1)^\top$. Den tredje løsning: løs $(A - I)\mathbf u = (0,1,1)^\top$, fx $\mathbf u = (0,1,0)^\top$, og få $\mathbf x(t) = e^{t}(0,\,1 + t,\,t)^\top$. Tjek: $\dot x_2 = (2+t)e^t = 2x_2 - x_3$ og $\dot x_3 = (1+t)e^t = x_2$.

### Fundamentalmatrix (afsnit 2.3, sætning 2.16 og 2.17)
En fundamentalmatrix $\Phi(t)$ har $n$ lineært uafhængige løsninger som søjler. Sætning 2.16: $\Phi(t)$ er regulær (invertibel) for alle $t$. Sætning 2.17: $\dot\Phi = A\Phi$, den fuldstændige løsning er $\mathbf x(t) = \Phi(t)\mathbf c$, og løsningen med $\mathbf x(t_0) = \mathbf x_0$ er $\mathbf x(t) = \Phi(t)[\Phi(t_0)]^{-1}\mathbf x_0$.

**Eksempel.** Fra det første eksempel: $\Phi(t) = \begin{pmatrix} e^{3t} & e^{-t}\\ e^{3t} & -e^{-t}\end{pmatrix}$.

### Eksistens og entydighed (afsnit 2.3)
For ethvert $t_0$ og enhver startvektor findes præcis én løsning med $\mathbf x(t_0)$ lig den givne vektor. Med fundamentalmatricen: $\mathbf c = \Phi(t_0)^{-1}\mathbf x(t_0)$.

### Inhomogene systemer (afsnit 2.4, sætning 2.20)
Den generelle løsningsformel er

$$\mathbf x(t) = \Phi(t)\int \Phi(t)^{-1}\mathbf b\,u(t)\,dt,$$

hvor integrationskonstanten giver den homogene del. Slides skriver den med startbetingelse: løsningen gennem $\mathbf x(t_0) = \mathbf x_0$ er

$$\mathbf x(t) = \Phi(t)[\Phi(t_0)]^{-1}\mathbf x_0 + \Phi(t)\int_{t_0}^{t}[\Phi(\tau)]^{-1}\mathbf u(\tau)\,d\tau.$$

Slides kalder integrationen for "små mirakler"; struktursætningen og superpositionsprincippet gælder som for $n$'te ordens ligninger. Ofte er gættemetoden hurtigere: er påvirkningen konstant, prøv en konstant vektor.

**Eksempel.** $\dot{\mathbf x} = \begin{pmatrix}1&2\\2&1\end{pmatrix}\mathbf x + \begin{pmatrix}3\\0\end{pmatrix}$. Gæt $\mathbf x = \mathbf c$ konstant: $\mathbf 0 = A\mathbf c + (3,0)^\top$, så $\mathbf c = -A^{-1}(3,0)^\top$. Med $A^{-1} = -\frac13\begin{pmatrix}1&-2\\-2&1\end{pmatrix}$ fås $\mathbf c = (1,-2)^\top$. Tjek: $A\mathbf c = (-3, 0)^\top$. Gættet virker kun fordi $\det A \neq 0$ (sammenlign opgave 431 (ii), hvor det går galt).

### Variable koefficienter (afsnit 2.5)
Hvis $A = A(t)$ afhænger af $t$, gælder strukturen (fundamentalmatrix, løsningsformel) stadig, men egenværdimetoden virker ikke. Læses selv.

### Lemma A.16
Hvis $\mathbf u + i\mathbf v$ og $\mathbf u - i\mathbf v$ er lineært uafhængige i et komplekst vektorrum, så er $\mathbf u$ og $\mathbf v$ også. Det er argumentet bag at real- og imaginærdel giver to uafhængige reelle løsninger. Beviset er opgave 912 i hjemmeopgavesæt 2.

## Opgaver

| Opgave | Afsnit | Hvad den handler om |
|---|---|---|
| 409 | 2.2 til 2.4 | Fundamentalmatrix for $\begin{pmatrix}5&3\\9&-1\end{pmatrix}$ og fuldstændig løsning med påvirkningen $e^{4t}(3,-5)^\top$. |
| 411 (i), (ii) | 2.2 | Fuldstændig kompleks og reel løsning til et $3 \times 3$ system. Ugesedlen: et andet valg af egenvektorer får løsningerne til at se forskellige ud, men spannet er det samme. |
| 414 | 2.2 (sætning 2.11) | $\begin{pmatrix}2&9\\-1&-4\end{pmatrix}$: dobbelt egenværdi, find en løsning af formen $\mathbf u e^{-t} + \mathbf v te^{-t}$. |
| 914 | 2.2 (sætning 2.7 (b)) | Bevis for at real- og imaginærdel af $e^{\lambda t}\mathbf v$ er uafhængige løsninger. Vink: kompleks konjugér $A\mathbf v = \lambda\mathbf v$. |
| 431 | 2.3, 2.4 | Inhomogent system hvor gættet med en konstant vektor ikke virker; brug den generelle løsningsformel. |

**Hjemmeopgavesæt 2:** Möbius-opgave senest 15/9 kl. 20, og opgave 903 og 912 afleveres fysisk 16/9 kl. 8.

- 903 (afsnit 1.2, bilag F.7): bevis for sætning 1.14 for andenordens ligninger ved direkte udregning; sætning 1.14 må derfor ikke bruges.
- 912 (appendiks om systemer): bevis lemma A.16 (A.15 i den ældre PDF). Ugesedlen understreger at man skal starte med en vilkårlig linearkombination sat lig nul.

Bedømt aflevering.

**Løsningsnoter:** WeeklyNotes2.pdf (under uge 3 på DTU Learn) løser opgave 914 (i) til (v): konjugér karakterligningen og $A\mathbf v = \lambda\mathbf v$ for at se at $\bar\lambda$ er rod med egenvektor $\overline{\mathbf v}$, regn real- og imaginærdel af $e^{\lambda t}\mathbf v$ ud, og brug lemmaet fra opgave 912 til uafhængigheden. Den indeholder også opgave 920 (i) (ikke på ugesedlen): et bevis ved indsættelse for at den generelle løsningsformel giver en løsning. Facit til 409, 411, 414 og 431 står i facitliste_studerende.pdf.

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
