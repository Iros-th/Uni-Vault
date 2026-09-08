---
title: Matematiske Symboler & Tegnoversigt
publish: true
type: reference
tags:
  - matematik
  - symboler
  - reference
---

# Matematiske Symboler & Tegnoversigt

Komplet oversigt over standardsymboler anvendt i diskret matematik, analyse, lineær algebra og mængdelære på DTU.

## 1. Mængdelære (Set Theory)

| Symbol | Navn / Betydning | Eksempel | Forklaring |
|:---:|---|---|---|
| $\in$ | Element i (tilhører) | $x \in A$ | $x$ er et element i mængden $A$. |
| $\notin$ | Ikke element i | $y \notin A$ | $y$ tilhører ikke mængden $A$. |
| $\subset$ | Ægte delmængde | $A \subset B$ | Alle elementer i $A$ er i $B$, men $A \neq B$. |
| $\subseteq$ | Delmængde eller lig med | $A \subseteq B$ | Alle elementer i $A$ er i $B$ ($A$ kan være lig $B$). |
| $\not\subseteq$ | Ikke delmængde af | $A \not\subseteq B$ | Der findes mindst ét element i $A$, som ikke er i $B$. |
| $\cup$ | Foreningsmængde (Union) | $A \cup B$ | Mængden af elementer, der tilhører $A$ eller $B$ (eller begge). |
| $\cap$ | Fællesmængde (Snit) | $A \cap B$ | Mængden af elementer, der tilhører både $A$ og $B$. |
| $\setminus$ | Mængdedifferens | $A \setminus B$ | Elementer der er i $A$, men ikke i $B$. |
| $\emptyset$ eller $\{\}$ | Den tomme mængde | $\emptyset$ | En mængde uden nogen elementer ($|\emptyset| = 0$). |
| $\mathcal{P}(A)$ | Potensmængde | $\mathcal{P}(\{1, 2\})$ | Mængden af alle delmængder af $A$ ($|\mathcal{P}(A)| = 2^{|A|}$). |
| $|A|$ eller $\#(A)$ | Kardinalitet (størrelse) | $|\{a, b, c\}| = 3$ | Antal elementer i mængden $A$. |
| $A \times B$ | Kartesisk produkt | $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$ | Mængden af alle ordnede par $(a, b)$ hvor $a \in A, b \in B$. |
| $A^c$ eller $\bar{A}$ | Komplementærmængde | $A^c = U \setminus A$ | Elementer i universet $U$, som ikke er i $A$. |

---

## 2. Logiske symboler (Logic)

| Symbol | Navn | Udtales / Betydning | Sandhedsbetingelse |
|:---:|---|---|---|
| $\forall$ | Al-kvantor | "For alle" / "For ethvert" | Udsagnet gælder for samtlige elementer i domænet. |
| $\exists$ | Eksistens-kvantor | "Der findes mindst ét" | Udsagnet er sandt for mindst ét element i domænet. |
| $\exists!$ | Unik eksistens | "Der findes præcis ét" | Præcis ét element opfylder udsagnet. |
| $\neg$ eller $\sim$ | Negation (IKKE) | "Ikke $P$" | Sand, når $P$ er falsk. |
| $\land$ | Konjunktion (OG) | "$P$ og $Q$" | Sand, hvis BÅDE $P$ og $Q$ er sande. |
| $\lor$ | Disjunktion (ELLER) | "$P$ eller $Q$" | Sand, hvis mindst én af $P$ eller $Q$ er sand. |
| $\oplus$ | Eksklusivt eller (XOR) | "Enten $P$ eller $Q$" | Sand, hvis præcis én af $P$ eller $Q$ er sand. |
| $\implies$ | Implikation | "Medfører" / "Hvis $P$ så $Q$" | Kun falsk hvis $P$ er sand og $Q$ er falsk. |
| $\iff$ | Biimplikation | "Ensgyldigt med" / "Hvis og kun hvis" | Sand hvis $P$ og $Q$ har samme sandhedsværdi. |
| $\therefore$ | Konklusion | "Heraf følger" / "Ergo" | Afslutter et deduktivt trin. |
| $\because$ | Begrundelse | "Fordi" / "Da" | Henviser til en præmis eller kendt sætning. |
| $\blacksquare$ eller Q.E.D. | Bevisafslutning | "Hvilket skulle bevises" | Markerer afslutningen på et matematisk bevis. |

---

## 3. Kalkulus og analyse (Calculus & Analysis)

| Symbol | Betydning | Standardnotation |
|:---:|---|---|
| $\lim_{x \to a}$ | Grænseværdi (Limit) | $\lim_{x \to 0} \frac{\sin(x)}{x} = 1$ |
| $f'(x), \frac{df}{dx}$ | Førsteafledede (differentiation) | $\frac{d}{dx}(x^2) = 2x$ |
| $f''(x), \frac{d^2f}{dx^2}$ | Andenafledede | Måler krumning og acceleration |
| $\partial$ | Partiel afledet (flere variable) | $\frac{\partial f}{\partial x}$ |
| $\nabla$ | Nabla / Gradient-operator | $\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)$ |
| $\int$ | Ubestemt integral | $\int x\,dx = \frac{1}{2}x^2 + c$ |
| $\int_a^b$ | Bestemt integral | $\int_0^1 x\,dx = \frac{1}{2}$ |
| $\sum_{i=1}^n$ | Summationstegn | $\sum_{i=1}^n i = \frac{n(n+1)}{2}$ |
| $\prod_{i=1}^n$ | Produkttegn | $\prod_{i=1}^n i = n!$ |
| $\infty$ | Uendelig | Ikke et tal, men en grænsebegivenhed |
| $dx, dt$ | Infinitesimal tilvækst (differential) | Bruges under integration og differentialer |

---

## 4. Sammenligninger og relationer

| Symbol | Betydning | Eksempel |
|:---:|---|---|
| $=$ | Lig med | $2 + 2 = 4$ |
| $\neq$ | Forskellig fra | $3 \neq 4$ |
| $\approx$ | Tilnærmelsesvis lig med | $\pi \approx 3.14159$ |
| $\equiv$ | Identisk lig med / Kongruent | $f(x) \equiv 0$ eller $a \equiv b \pmod m$ |
| $\sim$ | Asymptotisk ækvivalent eller fordelt som | $f(x) \sim g(x)$ eller $X \sim N(0, 1)$ |
| $\propto$ | Proportional med | $F \propto a$ |
| $\le, \ge$ | Mindre end eller lig / Større end eller lig | $x \le 5$ |
| $\ll, \gg$ | Meget mindre end / Meget større end | $m \ll M$ |
