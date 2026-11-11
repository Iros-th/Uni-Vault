---
publish: true
title: "01025 uge 5: Konvergenskriterier og kvotientrækker"
course: Differential Equations and Infinite Series
type: week
week: 5
tags:
  - differential-equations
  - ugenote
---

# Uge 5: Konvergenskriterier og kvotientrækker

## Læseplan

- Forelæsning (onsdag 30/9): afsnit 4.5 og 5.1, samt beviserne for sætning 4.27 (absolut konvergens) og sætning 4.30 (kvotientkriteriet) i appendiks.
- Husk fra forelæsningen: $\sum_{n=1}^\infty \frac1n$ er divergent (den harmoniske række), selv om leddene går mod 0. At $a_n \to 0$ er en nødvendig, men ikke tilstrækkelig betingelse for konvergens.

## Begreber

### Sammenligningskriteriet (sætning 4.20)
Lad $0 \le a_n \le b_n$ for alle $n \ge N$.
1. Hvis $\sum_{n=1}^\infty b_n$ konvergerer, så konvergerer $\sum_{n=1}^\infty a_n$ også (majorantkriterium).
2. Hvis $\sum_{n=1}^\infty a_n$ divergerer, så divergerer $\sum_{n=1}^\infty b_n$ også (minorantkriterium).

Reglen bruges til at klemme en kompliceret række ind under en kendt konvergent række (oftest en $p$-række $\sum \frac{1}{n^p}$ med $p > 1$ eller en kvotientrække).

**Beviset (slides).** Med $S_N = \sum_{n=1}^N a_n$ og $T_N = \sum_{n=1}^N b_n$ er $0 \leq S_N \leq T_N$, og $S_N$ er voksende. (i) Konvergerer $T_N$, er $S_N$ opadtil begrænset og konvergerer derfor (påstand A nedenfor). (ii) Divergerer $S_N$, kan den ikke være begrænset (igen påstand A), så $S_N \to \infty$ og dermed $T_N \to \infty$.

### Supremum og monotone følger (appendiks A.1, definition A.1 og lemma A.3)
En mængde $E \subseteq \mathbb R$ er opadtil begrænset, hvis der findes $\beta$ med $x \leq \beta$ for alle $x \in E$. Den mindste øvre grænse hedder supremum, $\sup E$. Eksistensen af supremum er et aksiom for de reelle tal. Lemma A.3 (påstand A): en voksende, opadtil begrænset følge af reelle tal er konvergent med grænseværdi $\sup\{k_n\}$.

**Eksempler (slides).** $\sup\,]-\infty, 4] = \sup\,]-\infty, 4[ = 4$, $\sup\{-1, -\frac12, -\frac13, \dots\} = 0$ og $\sup\{\sin n : n \in \mathbb N\} = 1$. I de tre sidste tilfælde tilhører supremum ikke mængden.

**Eksempel.** Betragt $\sum_{n=1}^\infty \frac{1}{n^2 + \sqrt{n}}$. Da $\sqrt{n} \ge 0$, er $n^2 + \sqrt{n} \ge n^2$, og dermed

$$0 \le \frac{1}{n^2 + \sqrt{n}} \le \frac{1}{n^2}.$$

Da $\sum_{n=1}^\infty \frac{1}{n^2}$ konvergerer ($p$-række med $p = 2 > 1$), konvergerer $\sum_{n=1}^\infty \frac{1}{n^2 + \sqrt{n}}$ ifølge sammenligningskriteriet.

### Ækvivalenskriteriet (definition 4.23, sætning 4.24)
Lad $a_n > 0$ og $b_n > 0$. Rækkerne kaldes ækvivalente (definition 4.23), hvis

$$\lim_{n\to\infty} \frac{a_n}{b_n} = C$$

hvor $0 < C < \infty$ er en positiv, endelig konstant, så er rækkerne $\sum a_n$ og $\sum b_n$ ækvivalente: enten konvergerer de begge, eller også divergerer de begge.

Kriteriet er ofte lettere at bruge end direkte sammenligning, fordi man slipper for at bevise skarpe uligheder; man skal blot isolere de dominerende led for store $n$.

**Eksempel.** Betragt $\sum_{n=1}^\infty \frac{2n + 1}{n^3 - 4}$. For store $n$ opfører tælleren sig som $2n$ og nævneren som $n^3$, så leddet ligner $\frac{2n}{n^3} = \frac{2}{n^2}$. Vælg derfor testsammenligningen $b_n = \frac{1}{n^2}$. Kvotienten er

$$\frac{a_n}{b_n} = \frac{\frac{2n+1}{n^3-4}}{\frac{1}{n^2}} = \frac{2n^3 + n^2}{n^3 - 4} = \frac{2 + \frac{1}{n}}{1 - \frac{4}{n^3}} \to 2 \quad \text{for } n \to \infty.$$

Da grænseværdien $C = 2$ er strengt positiv og endelig, og $\sum \frac{1}{n^2}$ konvergerer, er den oprindelige række konvergent.

### Absolut og betinget konvergens (definition 4.26 og 4.28, sætning 4.27)
En række $\sum a_n$ kaldes **absolut konvergent**, hvis rækken af numeriske værdier $\sum |a_n|$ konvergerer, og **betinget konvergent**, hvis $\sum a_n$ konvergerer men $\sum |a_n|$ divergerer. For en reel betinget konvergent række divergerer både summen af de positive og summen af de negative led; kun rækkefølgen giver en endelig sum, og ved at bytte om på leddene kan man opnå enhver sum eller divergens (slides). Sætning 4.27 slår fast: enhver absolut konvergent række er konvergent, og der gælder

$$\left| \sum_{n=1}^\infty a_n \right| \le \sum_{n=1}^\infty |a_n|.$$

**Beviset (slides, reelle led):** sæt $c_n = a_n + |a_n|$. Så er $0 \leq c_n \leq 2|a_n|$, og da $\sum 2|a_n|$ konvergerer (lemma 4.17), konvergerer $\sum c_n$ efter sammenligningskriteriet. Derfor konvergerer $\sum a_n = \sum c_n - \sum |a_n|$ (lemma 4.17). For komplekse led $a_n = u_n + i v_n$ bruges $|u_n| \le |a_n|$ og $|v_n| \le |a_n|$.

**Eksempel.** Rækken $\sum_{n=1}^\infty \frac{\cos(n)}{n^2}$ har led med vekslende fortegn. Da $|\cos(n)| \le 1$, er $|\frac{\cos(n)}{n^2}| \le \frac{1}{n^2}$. Rækken af absolutte værdier er majoriseret af den konvergente række $\sum \frac{1}{n^2}$, så rækken er absolut konvergent og derfor konvergent.

### Kvotientkriteriet (sætning 4.30)
Antag at $a_n \neq 0$ for alle $n$, og at grænseværdien

$$\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = C$$

eksisterer.
1. Hvis $C < 1$, er rækken $\sum a_n$ absolut konvergent (og dermed konvergent).
2. Hvis $C > 1$, er rækken $\sum a_n$ divergent (da leddene $|a_n|$ vokser og ikke går mod nul).
3. Hvis $C = 1$, giver kriteriet ingen oplysning. Rækken kan være konvergent eller divergent.

**Bevisidé:** Hvis $C < 1$, vælges et reelt tal $q$ så $C < q < 1$. Da kvotienten konvergerer mod $C$, findes et indeks $N$ så $|\frac{a_{n+1}}{a_n}| \le q$ for alle $n \ge N$. Ved gentagen anvendelse fås $|a_{N+k}| \le |a_N| q^k$ for alle $k \ge 0$. Da $q < 1$, konvergerer den geometriske række $\sum q^k$, og dermed konvergerer $\sum |a_n|$ ved sammenligningskriteriet.

**Eksempel.** Undersøg $\sum_{n=1}^\infty \frac{n^2}{2^n}$. Her er

$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{(n+1)^2}{2^{n+1}} \cdot \frac{2^n}{n^2} = \frac{1}{2} \left(\frac{n+1}{n}\right)^2 = \frac{1}{2}\left(1 + \frac{1}{n}\right)^2 \to \frac{1}{2} \quad \text{for } n \to \infty.$$

Da $C = \frac{1}{2} < 1$, er rækken absolut konvergent.

**Advarsel om $C = 1$:** For $p$-rækken $\sum \frac{1}{n^p}$ er $\frac{a_{n+1}}{a_n} = (\frac{n}{n+1})^p \to 1$ for alle $p$. Men rækken divergerer for $p=1$ og konvergerer for $p=2$. Kvotientkriteriet kan ikke afgøre rækker, hvis led opfører sig som potenser af $n$; slides kalder det groft (det "ser ikke polynomier") og velegnet til led med fakulteter og eksponentialfunktioner.

### Integralkriteriet (sætning 4.33)
Lad $f: [1, \infty[ \to [0, \infty[$ være en kontinuert, ikke-negativ og aftagende funktion. Så er rækken $\sum_{n=1}^\infty f(n)$ konvergent hvis og kun hvis det uegentlige integral

$$\int_1^\infty f(x)\,dx$$

er konvergent.

**Eksempel (p-rækker).** For $f(x) = \frac{1}{x^p}$ med $p > 0$ er $f$ kontinuert og aftagende på $[1, \infty[$.
Integralet er:

$$\int_1^t x^{-p}\,dx = \begin{cases} \left[\frac{x^{1-p}}{1-p}\right]_1^t = \frac{t^{1-p} - 1}{1-p} & \text{hvis } p \neq 1 \\ [\ln x]_1^t = \ln t & \text{hvis } p = 1. \end{cases}$$

For $t \to \infty$ konvergerer udtrykket netop når $1 - p < 0$, det vil sige $p > 1$. Heraf følger hovedresultatet:

$$\sum_{n=1}^\infty \frac{1}{n^p} \text{ er konvergent } \iff p > 1.$$

**Eksempel 2 (logaritmisk række).** Betragt $\sum_{n=2}^\infty \frac{1}{n \ln n}$. Funktionen $f(x) = \frac{1}{x \ln x}$ er aftagende for $x \ge 2$. Integralet beregnes ved substitutionen $u = \ln x, du = \frac{1}{x}dx$:

$$\int_2^\infty \frac{1}{x \ln x}\,dx = \lim_{t\to\infty} [\ln(\ln x)]_2^t = \infty.$$

Integralet divergerer, så rækken $\sum_{n=2}^\infty \frac{1}{n \ln n}$ divergerer, selv om leddene går mod nul hurtigere end $\frac{1}{n}$.

### Kvotientrækker (afsnit 5.1, sætning 5.2 og korollar 5.5)
Kvotientrækken $\sum_{n=0}^\infty x^n$ konvergerer hvis og kun hvis $|x| < 1$. Når $|x| < 1$, er summen

$$\sum_{n=0}^\infty x^n = \frac{1}{1 - x}.$$

Korollar 5.5 giver summen, når man starter ved et vilkårligt indeks $N \ge 0$:

$$\sum_{n=N}^\infty x^n = \frac{x^N}{1 - x}.$$

**Eksempel.** $\sum_{n=2}^\infty \frac{3 \cdot 2^n}{5^n} = 3 \sum_{n=2}^\infty \left(\frac{2}{5}\right)^n = 3 \cdot \frac{(2/5)^2}{1 - 2/5} = 3 \cdot \frac{4/25}{3/5} = 3 \cdot \frac{4}{15} = \frac{4}{5}$.

### Rækker med variable led og sumfunktioner (afsnit 5.1)
Når en rækkes led afhænger af en variabel $x$, $\sum_{n=0}^\infty f_n(x)$, afhænger konvergensen af værdien af $x$. Mængden af de $x$, hvor rækken konvergerer, kaldes konvergensmængden, og på denne mængde definerer rækken en **sumfunktion** $f(x) = \sum_{n=0}^\infty f_n(x)$.

## Opgaver

| Opgave | Afsnit | Hvad den handler om | Facit / Vigtigste konklusion |
|---|---|---|---|
| 432 | 2.8, 2.9 | Stabilitet af homogent og inhomogent $2\times 2$ system | Begge systemer er asymptotisk stabile (og BIBO-stabile) |
| 925 | 2.8 | Routh-Hurwitz for vilkårlig $2\times 2$ matrix | Asymptotisk stabil $\iff \operatorname{tr}(A) < 0$ og $\det(A) > 0$ |
| 963 | 4.2 | Fire talfølger fra EkstraOpgaver | (i) $\frac{n^2+1}{n}$ divergerer, (ii) $\frac{1}{\ln n + 1} \to 0$, (iii) $\frac{\ln n}{\ln n^2} = \frac12$, (iv) brøken af to fjerdegradspolynomier går mod $\frac34$ |
| 964 | 4.1 | Tre uegentlige integraler: to potensfunktioner på $[1, \infty[$ og $\sin x$ på $[0, \infty[$ | $\int_0^t \sin x\,dx = 1 - \cos t$ har ingen grænseværdi, så det sidste er divergent |
| 144 | 5.1 | Konvergens og sumfunktion for $\sum_{n=0}^\infty (x+1)^n$ | Konvergent for $x \in ]-2, 0[$, sumfunktion $f(x) = -1/x$ |
| 103 | 4.4, 4.5 | Seks rækker (a til f), konvergens og sum | (b) konv. sum $1/4$, (f) konv. sum $1/4$, resten divergente |
| 816 (i-iv) | 4.5 | Konvergensforhold for $\sum \frac{n!\ln n}{n^n}$ | Konvergent ved kvotientkriteriet, kvotient går mod $1/e < 1$ |
| 150 | 4.5 | Sammenlignings- og ækvivalenskriteriet | (a) konvergent, (b) og (c) divergente |

### Detaljeret gennemgang af udvalgte opgaver

**Opgave 432.** Systemet har matrix $A = \begin{pmatrix} -3 & 1 \\ 4 & -3 \end{pmatrix}$.
Karakterligningen er $\det(A - \lambda I) = (-3-\lambda)^2 - 4 = \lambda^2 + 6\lambda + 5 = (\lambda + 1)(\lambda + 5) = 0$. Egenværdierne er $\lambda_1 = -1$ og $\lambda_2 = -5$. Begge har strengt negativ realdel, så det homogene system $\dot{\mathbf x} = A\mathbf x$ er asymptotisk stabilt (sætning 2.38). For det inhomogene system med påvirkning $\mathbf u(t) = (\cos t, \sin t)^\top$ sikrer sætning 2.47, at systemet er asymptotisk stabilt, og da $\mathbf u$ er begrænset, er alle løsninger begrænsede (BIBO-stabilitet jf. sætning 2.49).

**Opgave 925.** Lad $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$.
1. Det karakteristiske polynomium er $P(\lambda) = \det(A - \lambda I) = \lambda^2 - (a+d)\lambda + (ad-bc) = \lambda^2 - \operatorname{tr}(A)\lambda + \det(A)$.
2. Rødderne er $\lambda = \frac{\operatorname{tr}(A) \pm \sqrt{\operatorname{tr}(A)^2 - 4\det(A)}}{2}$.
   - Hvis diskriminanten er negativ eller nul, er realdelen $\frac{1}{2}\operatorname{tr}(A)$, som er strengt negativ netop når $\operatorname{tr}(A) < 0$. Samtidig kræver negativ diskriminant at $4\det(A) \ge \operatorname{tr}(A)^2 \ge 0$, så $\det(A) > 0$.
   - Hvis diskriminanten er positiv, er begge rødder reelle. Den største rod er $\frac{\operatorname{tr}(A) + \sqrt{\operatorname{tr}(A)^2 - 4\det(A)}}{2}$. Den er strengt negativ netop når $\sqrt{\operatorname{tr}(A)^2 - 4\det(A)} < -\operatorname{tr}(A)$, hvilket forudsætter $\operatorname{tr}(A) < 0$ og kvadrering giver $\operatorname{tr}(A)^2 - 4\det(A) < \operatorname{tr}(A)^2 \iff \det(A) > 0$.
   Dermed er systemet asymptotisk stabilt hvis og kun hvis $\operatorname{tr}(A) < 0$ og $\det(A) > 0$.

**Opgave 144.** Rækken $\sum_{n=0}^\infty (x+1)^n$ er en kvotientrække med kvotient $q = x+1$. Den konvergerer netop når $|x+1| < 1$, hvilket betyder $-1 < x+1 < 1 \iff -2 < x < 0$. Konvergensmængden er altså det åbne interval $]-2, 0[$. Sumfunktionen findes direkte fra sumformlen:

$$f(x) = \frac{1}{1 - (x+1)} = \frac{1}{-x} = -\frac{1}{x}.$$

**Opgave 103 (b) og (f).** (b) er kvotientrækken $\sum_{n=1}^\infty \left(\frac15\right)^n = \frac{1/5}{1 - 1/5} = \frac14$ (korollar 5.5 med $N = 1$). (f) er en teleskoprække:

$$\frac{1}{(n+3)(n+4)} = \frac{1}{n+3} - \frac{1}{n+4}, \qquad S_N = \frac14 - \frac{1}{N+4} \to \frac14.$$

**Opgave 816.** Rækken er $\sum_{n=1}^\infty a_n$ med $a_n = \frac{n!\ln n}{n^n}$.
- I (i) vurderes brøken: $n! = 1 \cdot 2 \cdot 3 \cdots n \le 1 \cdot n \cdot n \cdots n = n^{n-1}$. Derfor er $\frac{n!}{n^n} \le \frac{1}{n}$, hvilket giver $a_n \le \frac{\ln n}{n}$.
- I (ii) bemærkes, at $\frac{\ln n}{n} \to 0$, så leddene opfylder $a_n \to 0$. Men $a_n \to 0$ er ikke nok til at afgøre konvergens (den harmoniske række har også led der går mod 0).
- I (iii) anvendes kvotientkriteriet:

$$\frac{a_{n+1}}{a_n} = \frac{(n+1)!\ln(n+1)}{(n+1)^{n+1}} \cdot \frac{n^n}{n!\ln n} = \frac{(n+1)n!}{(n+1)(n+1)^n} \cdot \frac{n^n}{n!} \cdot \frac{\ln(n+1)}{\ln n} = \left(\frac{n}{n+1}\right)^n \cdot \frac{\ln(n+1)}{\ln n}.$$

Da $(\frac{n+1}{n})^n = (1 + \frac{1}{n})^n \to e$, gælder $(\frac{n}{n+1})^n \to \frac{1}{e}$. Da $\frac{\ln(n+1)}{\ln n} \to 1$, fås

$$\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = \frac{1}{e} \cdot 1 = \frac{1}{e} \approx 0.368 < 1.$$

Da grænseværdien er strengt under 1, er rækken konvergent.

**Opgave 150.**
- (a) $\sum \frac{1}{n^3+1}$: $\frac{1}{n^3+1} < \frac{1}{n^3}$ for alle $n \ge 1$. Da $\sum \frac{1}{n^3}$ konvergerer ($p=3 > 1$), konvergerer rækken ved sammenligningskriteriet.
- (b) $\sum \frac{1}{n+\sin n}$: Da $-1 \le \sin n \le 1$, er $\frac{1/(n+\sin n)}{1/n} = \frac{n}{n+\sin n} = \frac{1}{1 + \frac{\sin n}{n}} \to 1$. Da $\sum \frac{1}{n}$ divergerer, divergerer rækken ved ækvivalenskriteriet.
- (c) $\sum \frac{1}{\sqrt n}$: Dette er en $p$-række med $p = 1/2 \le 1$, som divergerer.

**Hjemmeopgavesæt 4:** Opgave A på ugesedlen (kvotientkriteriet på $\sum P(n)a_n$), fysisk 7/10 kl. 8, og Möbius sæt 4 senest 6/10 kl. 20. Se [[Courses/Differential Equations and Infinite Series/Hjemmeopgaver|Hjemmeopgaver]].

**MC:** svarene på 702 er 2, 3 og 5. Ugens MC-opgave er 703 (EkstraOpgaver.pdf): stabilitet og fuldstændig reel løsning for et $2\times 2$ system med komplekse egenværdier (afsnit 2.2 og 2.8). Facit (ugeseddel 6): 4 og 1.

**Løsningsnoter:** WeeklyNotes5.pdf (under uge 6 på DTU Learn) løser opgave 816 (i) til (iii): vurdér $\frac{n!}{n^n} \leq \frac1n$, bemærk at $a_n \to 0$ ikke afgør noget, og brug kvotientkriteriet med $\left(\frac{n}{n+1}\right)^n \to e^{-1}$ og $\frac{\ln(n+1)}{\ln n} \to 1$. Facit til 103, 144 og 150 står i facitliste_studerende.pdf.

## Tjek dig selv

- [ ] Hvilket kriterium (sammenligning, ækvivalens, kvotient, integral) passer til hvilke led?
- [ ] Hvorfor kan kvotientkriteriet ikke afgøre $\sum\frac{1}{n^p}$?
- [ ] Hvordan bevises at absolut konvergens medfører konvergens?
- [ ] Hvad er summen af en kvotientrække der starter ved $n = N$?
- [ ] For hvilke $p$ konvergerer $\sum\frac1{n^p}$, og hvorfor?
- [ ] For hvilke $x$ konvergerer en simpel række med variable led som $\sum (x+1)^n$?

## Links

- [[Courses/Differential Equations and Infinite Series/Uger/Oversigt|Ugeoversigt 01025]]
- Forrige: [[Courses/Differential Equations and Infinite Series/Uger/Uge 04 - Inhomogen stabilitet og uendelige rækker|Uge 4: Stabilitet af inhomogene systemer og uendelige rækker]]
- Næste: [[Courses/Differential Equations and Infinite Series/Uger/Uge 06 - Vurdering af summen og alternerende rækker|Uge 6: Vurdering af summen og alternerende rækker]]
- [[Differential Equations and Infinite Series]]
- [[Courses/Differential Equations and Infinite Series/Speedrun Map|Speedrun Map]]
