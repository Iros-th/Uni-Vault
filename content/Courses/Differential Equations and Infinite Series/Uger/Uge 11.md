---
publish: true
title: "01025 uge 11: Approksimation i effekt, Fouriers sætning og miniprojekt 2"
course: Differential Equations and Infinite Series
type: week
week: 11
tags:
  - differential-equations
  - ugenote
---

# Uge 11: Approksimation i effekt, Fouriers sætning og miniprojekt 2

> **Kilde:** Ugeseddel 11 og semesterplanen (DTU Learn, 01025 E26), lærebogen Ole Christensen, *Differentialligninger og uendelige rækker* (4. udg., afsnit 7.3 samt appendiks A.9/A.10), facitliste_studerende.pdf og EkstraOpgaver.pdf (opgave 709). Sætningsnumre følger kursets 4. udgave (propositionerne A.25 til A.30 svarer til A.32 i ældre udgaver).

## Læseplan

- Forelæsning (onsdag 18/11): afsnit 7.3 (approksimation i effekt), opgave 863 og hovedtrækkene i beviset for Fouriers sætning i appendiks.
- Gruppearbejde og øvelsestimer er dedikeret til **miniprojekt 2** (afleveres fysisk senest onsdag 25/11 kl. 8 i underviserens dueslag).
- Spørgetime til miniprojektet: mandag 23/11 kl. 12 på Peters kontor.

## Begreber

### Signaleffekt og effektindhold (afsnit 7.3)
Effekten af et $2\pi$-periodisk signal $f$ defineres som middelværdien af $|f(t)|^2$ over en hel periode:

$$P(f) = \frac{1}{2\pi}\int_{-\pi}^\pi |f(t)|^2\,dt.$$

Ifølge Parsevals sætning kan denne effekt opgøres direkte i frekvensdomænet:

$$P(f) = \sum_{n=-\infty}^\infty |c_n|^2 = \frac{1}{4}a_0^2 + \frac{1}{2}\sum_{n=1}^\infty \bigl(a_n^2 + b_n^2\bigr).$$

Hvert frekvensled $n \ge 1$ indeholder effekten $\frac{1}{2}(a_n^2 + b_n^2) = |c_n|^2 + |c_{-n}|^2$, mens DC-komponenten indeholder $\frac{1}{4}a_0^2 = |c_0|^2$. Effekterne i forskellige harmoniske frekvenser adderes uden krydsled, fordi de trigonometriske funktioner danner et ortogonalt system i $L^2([-\pi, \pi])$.

### Approksimation i effekt (sætning 7.12)
Når et signal afskæres til den $N$'te afsnitssum $S_N(t) = \frac{1}{2}a_0 + \sum_{n=1}^N (a_n \cos nt + b_n \sin nt)$, er effekten af afsnitssummen:

$$P(S_N) = \frac{1}{4}a_0^2 + \frac{1}{2}\sum_{n=1}^N \bigl(a_n^2 + b_n^2\bigr) = \sum_{n=-N}^N |c_n|^2.$$

Da alle led er ikke-negative, gælder altid $P(S_N) \le P(f)$. For en ønsket effektandel $\delta \in\, ]0, 1[$ (fx $\delta = 0.90$ for 90 % af effekten, eller $\delta = 0.99$ for 99 %) gælder:

$$\frac{P(S_N)}{P(f)} \ge \delta \iff \sum_{|n| > N} |c_n|^2 \le (1 - \delta)P(f) \iff \frac{1}{2}\sum_{n=N+1}^\infty \bigl(a_n^2 + b_n^2\bigr) \le (1 - \delta)P(f).$$

Spørgsmålet om, hvor mange frekvensled der skal transmitteres for at bevare et givet signalindhold, reduceres dermed til en simpel ulighed på rækkens hale.

**Eksempel.** Betragt firkantbølgen med $P(f) = 1$, $a_n = 0$ og $b_n = \frac{4}{n\pi}$ for ulige $n$. Vi ønsker at bestemme $N$, så $S_N$ indeholder mindst 90 % af effekten ($\delta = 0.90$).
- For $N = 1$: signalet indeholder kun grundtonen $b_1 = \frac{4}{\pi}$. Effekten er $P(S_1) = \frac{1}{2} b_1^2 = \frac{1}{2}\left(\frac{4}{\pi}\right)^2 = \frac{8}{\pi^2} \approx 0.8106$ (81.06 % af effekten).
- For $N = 2$: $b_2 = 0$, så $P(S_2) = P(S_1) \approx 0.8106$.
- For $N = 3$: signalet indeholder også 3. harmoniske med $b_3 = \frac{4}{3\pi}$. Effekten er:
  $$P(S_3) = P(S_1) + \frac{1}{2} b_3^2 = \frac{8}{\pi^2} + \frac{1}{2}\left(\frac{4}{3\pi}\right)^2 = \frac{8}{\pi^2}\left(1 + \frac{1}{9}\right) = \frac{8}{\pi^2} \cdot \frac{10}{9} \approx 0.9006.$$
  Dette udgør 90.06 % af effekten. Altså er $N = 3$ (de to første ikke-nul led, $\sin t$ og $\sin 3t$) tilstrækkeligt til at nå over 90 % af den samlede signaleffekt.

### Idéen i beviset for Fouriers sætning (appendiks A.9/A.10)
Beviset for Fouriers sætning er struktureret i to fundamentale faser:
1. **Fase 1: Konvergens i punktet $x = 0$.**
   Afsnitssummen $S_N(0)$ omskrives ved hjælp af Dirichlets kerne $D_N(t) = \frac{1}{2} + \sum_{n=1}^N \cos(nt) = \frac{\sin((N+1/2)t)}{2\sin(t/2)}$:
   $$S_N(0) = \frac{1}{\pi}\int_{-\pi}^\pi f(t) D_N(t)\,dt.$$
   Under antagelse om at $f$ er stykkevis differentiabel, vises ved hjælp af Riemann-Lebesgue lemmaet, at integralet konvergerer mod $\frac{f(0^+) + f(0^-)}{2}$ for $N \to \infty$.
2. **Fase 2: Forskydning til et vilkårligt punkt $u \in \mathbb{R}$ (opgave 872).**
   For at vise konvergens i et vilkårligt punkt $u$, defineres en forskudt funktion $\varphi(x) = f(x + u)$.
   Konvergensen af Fourierrækken for $\varphi$ i punktet $x = 0$ svarer præcis til konvergensen for $f$ i punktet $u$.
   Overførslen hviler på, hvordan Fourierkoefficienterne transformerer under translation:
   $$c_n(\varphi) = \frac{1}{2\pi}\int_{-\pi}^\pi f(x + u)e^{-inx}\,dx.$$
   Ved substitutionen $y = x + u$ fås:
   $$c_n(\varphi) = \frac{1}{2\pi}\int_{-\pi+u}^{\pi+u} f(y)e^{-in(y-u)}\,dy = e^{inu} \cdot \frac{1}{2\pi}\int_{-\pi+u}^{\pi+u} f(y)e^{-iny}\,dy.$$
   I kraft af regel (R1) i lemma 6.2 (integralet af en periodisk funktion over et interval af længde $2\pi$ afhænger ikke af startpunktet) er integralet over $[-\pi+u, \pi+u]$ lig integralet over $[-\pi, \pi]$. Følgelig er:
   $$c_n(\varphi) = e^{inu} c_n(f).$$

### Bevarelse af frekvensenergi under translation
Da $|e^{inu}| = 1$ for alle reelle $u$ og alle $n$, gælder:

$$|c_n(\varphi)| = |e^{inu} c_n(f)| = |c_n(f)|.$$

Dette er et grundlæggende fysisk og matematisk princip: en tidsforskydning af et signal ændrer kun fasen på de harmoniske komponenter, men **ændrer overhovedet ikke effekten** i nogen frekvens! Reelt gælder $\frac{1}{2}(a_n(\varphi)^2 + b_n(\varphi)^2) = \frac{1}{2}(a_n(f)^2 + b_n(f)^2)$.

## Miniprojekt 2

Miniprojekt 2 tæller 2 % af kursets samlede karakter og afleveres fysisk i grupper.
Noten her løser ikke projektet direkte, men belyser de matematiske kernemekanismer, der indgår i opgaverne:
- **Projektopgave 1:** Læs beviset i appendiks A.9/A.10, løs opgave 872 og bevis tillægsspørgsmål (iv) om at energien $\frac{1}{2}(a_n^2 + b_n^2)$ i den $n$-te frekvens er invariant under forskydning af koordinatsystemet.
- **Projektopgave 2:** Opgave 518 i bogen: betragt funktionen med $a_n = 0$ og $b_n = \frac{1}{n^3}$. Omskriv til kompleks form, vis at rækken konvergerer uniformt, og find den mindste afsnitssum $S_N$ med fejl højst $0.1$.
- **Projektopgave 3:** Givet en funktion $g: [0, \pi] \to \mathbb{R}$ der er kontinuert differentiabel med $g(0) = g(\pi) = 0$. Vis, at den ulige $2\pi$-periodiske udvidelse er kontinuert og kontinuert differentiabel på hele $\mathbb{R}$. Betingelsen $g(0) = 0$ sikrer kontinuitet i origo, mens $g(\pi) = 0$ sikrer kontinuitet i periodegrænserne $\pm\pi$.
- **Projektopgave 4:** Betragt et lineært $2\times 2$ differentialligningssystem $\dot{\mathbf x} = A\mathbf x + \mathbf b u(t)$, $y = \mathbf c^\top \mathbf x$, med matrix $A = \begin{pmatrix} 1 & -1 \\ 3 & -2 \end{pmatrix}$.
  1. Undersøg systemets stabilitet via egenværdier for $A$.
  2. Find overføringsfunktionen $H(s) = \mathbf c^\top (sI - A)^{-1}\mathbf b$.
  3. Anvend Fourierrækkemetoden (sætning 7.8) til at bestemme den stationære outputrespons $y(t) = \sum c_n H(in)e^{int}$ under en $2\pi$-periodisk påvirkning $u(t)$.
  4. Bestem $N$ så afsnitssummen approksimerer den eksakte løsning med fejl højst $0.001$.

### Transmissionsmodel: Båndbredde og energibevarelse

I datatransmission og telekommunikation kan et fysisk kabel ikke overføre uendeligt mange frekvenser. Kablet fungerer som et lavpasfilter, der afskærer frekvenser over et vist knækpunkt $N$:

```
Digitalt signal f(t) ---> [ Kabel med båndbredde N ] ---> Modtaget signal S_N(t)
Effekt P(f)                                                Effekt P(S_N) >= delta * P(f)
```

Sætning 7.12 besvarer spørgsmålet: *Hvor bred en båndbredde $N$ kræves der for at modtage mindst 90 % (eller 99 %) af signalets energi?*
Formlen kræver blot, at energien i den afskårne hale er under den tilladte tabstærskel:

$$\sum_{|n| > N} |c_n|^2 \le (1 - \delta)P(f).$$

### Fysisk model: Translationsinvarians af energien

Hvis et signal forsinkes med tiden $u$, $\varphi(t) = f(t - u)$, ændres bølgeformens position, men dens frekvensenergi forbliver uændret:

$$c_n(\varphi) = e^{-inu}c_n(f) \implies |c_n(\varphi)| = |e^{-inu}| \cdot |c_n(f)| = |c_n(f)|.$$

Dette viser, at tidsforsinkelser i transmissionskanaler kun forskyder signalets fase, men ikke ændrer dets effektspektrum.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 872 | 6.1, app. A | Forskydning af koordinatsystem: $\varphi(x) = f(x+u)$ | $c_n(\varphi) = e^{inu}c_n(f)$ og $\|c_n(\varphi)\| = \|c_n(f)\|$ |
| 518 | 6.2, 6.3 | Funktion med Fourierkoefficienter $a_n = 0$, $b_n = \frac{1}{n^3}$ | Kompleks form $c_n = -\frac{i}{2n^3}$ ($n \neq 0$), $S_2(x) = \sin x + \frac{1}{8}\sin 2x$; fejl $\le 0.1$ opnås for $N \ge 3$ |
| 203 | 6.1, 7.3 | Firkantbølge med $b_n = 0$ og $a_n = \frac{4}{n\pi}\sin(n\pi/2)$ | $P(f) = 1$; ca. 90 % af effekten er indeholdt i $S_3$ |
| 230 | 6.1, 7.3 | Effektberegning for triangulært signal | Effekt fordelt på harmoniske komponenter aftager som $1/n^4$ |
| 231 | 7.2 | Overføringsfunktion og Fourierrækkemetode | $H(s) = \frac{2}{s+2}$, stationær løsning $y(t) = -\frac{\pi^2}{6} + \sum_{n\neq 0}\frac{1}{n^2(2+in)}e^{int}$ |
| MC 709 | EkstraOpgaver | Multiple Choice opgaver til uge 11 | Facit er svarmulighed 3 i både spørgsmål (a) og (b) |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 518.** Lad $f$ være en funktion med reelle Fourierkoefficienter $a_n = 0$ for alle $n \ge 0$, og $b_n = \frac{1}{n^3}$ for $n \ge 1$.
1. Da $a_n = 0$, er $f$ en ulige funktion med middelværdi nul.
2. De komplekse Fourierkoefficienter beregnes via lemma 6.22:
   $$c_0 = 0,$$
   $$c_n = \frac{1}{2}(a_n - i b_n) = \frac{1}{2}\left(0 - i\frac{1}{n^3}\right) = -\frac{i}{2n^3} \quad (n \ge 1).$$
   For negative indeks $n < 0$ fås:
   $$c_n = \frac{1}{2}(a_{-n} + i b_{-n}) = \frac{1}{2}\left(0 + i\frac{1}{(-n)^3}\right) = -\frac{i}{2n^3}.$$
   Fourierrækken på kompleks form er altså $f(x) = \sum_{n \neq 0} -\frac{i}{2n^3} e^{inx}$.
3. Afsnitssummen $S_2(x)$ og $S_3(x)$:
   $$S_2(x) = b_1 \sin x + b_2 \sin 2x = \sin x + \frac{1}{8}\sin 2x.$$
   $$S_3(x) = \sin x + \frac{1}{8}\sin 2x + \frac{1}{27}\sin 3x.$$
4. Fejlvurdering og valg af $N$:
   Da $|\sin(nx)| \le 1$, kan afvigelsen mellem $f(x)$ og afsnitssummen $S_N(x)$ vurderes uniformt:
   $$|f(x) - S_N(x)| = \left| \sum_{n=N+1}^\infty \frac{1}{n^3}\sin(nx) \right| \le \sum_{n=N+1}^\infty \frac{1}{n^3} \le \int_N^\infty \frac{1}{x^3}\,dx = \left[ -\frac{1}{2x^2} \right]_N^\infty = \frac{1}{2N^2}.$$
   For at sikre en fejl på højst $0.1$:
   $$\frac{1}{2N^2} \le 0.1 \iff 2N^2 \ge 10 \iff N^2 \ge 5 \iff N \ge \sqrt{5} \approx 2.24.$$
   Det mindste hele tal er $N = 3$. For $N = 3$ er den teoretiske restfejl højst $\frac{1}{2 \cdot 9} = \frac{1}{18} \approx 0.0556 < 0.1$.

**Opgave 872.** Lad $f$ være en $2\pi$-periodisk funktion med komplekse Fourierkoefficienter $c_n$, og lad $u \in \mathbb{R}$. Sæt $\varphi(x) = f(x + u)$.
1. Definitionen af Fourierkoefficienterne for $\varphi$ er:
   $$c_n(\varphi) = \frac{1}{2\pi}\int_{-\pi}^\pi \varphi(x)e^{-inx}\,dx = \frac{1}{2\pi}\int_{-\pi}^\pi f(x+u)e^{-inx}\,dx.$$
2. Substituér $y = x + u$, så $x = y - u$ og $dx = dy$. Grænserne ændres fra $[-\pi, \pi]$ til $[-\pi+u, \pi+u]$:
   $$c_n(\varphi) = \frac{1}{2\pi}\int_{-\pi+u}^{\pi+u} f(y)e^{-in(y-u)}\,dy = e^{inu}\frac{1}{2\pi}\int_{-\pi+u}^{\pi+u} f(y)e^{-iny}\,dy.$$
3. Funktionen $g(y) = f(y)e^{-iny}$ er $2\pi$-periodisk, da $f(y+2\pi) = f(y)$ og $e^{-in(y+2\pi)} = e^{-iny}e^{-i 2\pi n} = e^{-iny}$.
   Ifølge regel (R1) i lemma 6.2 er integralet over ethvert interval af længde $2\pi$ identisk med integralet over $[-\pi, \pi]$:
   $$\int_{-\pi+u}^{\pi+u} f(y)e^{-iny}\,dy = \int_{-\pi}^\pi f(y)e^{-iny}\,dy = 2\pi c_n(f).$$
   Dermed er $c_n(\varphi) = e^{inu}c_n(f)$.
4. Da $|e^{inu}| = 1$ for alle reelle $u$ og $n$, følger umiddelbart:
   $$|c_n(\varphi)| = |e^{inu}| \cdot |c_n(f)| = |c_n(f)|.$$
   Dette viser, at tidsforskydningen bevarer amplitude- og effektspektret.

**Multiple Choice 709 (EkstraOpgaver).** Facit er svarmulighed 3 i både opgave (a) og (b).

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 10|Uge 10: Kompleks form og Parseval]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 12|Uge 12: Variable koefficienter, potensrække- og Fourierrækkemetoden]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
