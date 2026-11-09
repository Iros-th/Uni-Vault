---
publish: true
title: "Introduction to applied mathematics uge 13: Mathematical proofs (del B)"
course: Introduction to applied mathematics
type: week
week: 13
tags:
  - applied-math
  - ugenote
---

# Uge 13: Mathematical proofs (del B)

> Kilde: DTU Learn 02525, Project 1: `MathProofs1B.pdf` (David Brander, "Proofs in Mathematics, Part II") og `proofs_problems2.pdf` ("Proofs: Problem Set Two"); tidsplanen står i General Info. Mandag 30/11 2026, rapportdeadline 6/12. General Info kalder emnet "Mathematical proofs 2 (Definition of Limit)", men de to filer på DTU Learn handler om tælleargumenter, induktion og konstruktion af komplekse tal. Grænseværdidefinitionen ligger ikke som fil endnu.

## Emner

- Tælleargumenter og bijektioner, kardinalitet
- Matematisk induktion og stærk induktion
- At bygge ny teori ud fra kendt teori: de komplekse tal som $\mathbb{R} \times \mathbb{R}$
- Grupper (i opgaverne)

## Begreber

**Tælleargument.** Enten tæller man elementerne i en mængde på to måder, hvoraf den ene er nem, eller man laver en bijektion til en mængde, hvis størrelse man kender. En bijektion $\varphi: X \to Y$ er både injektiv og surjektiv. To mængder har samme kardinalitet, $|X| = |Y|$, hvis der er en bijektion mellem dem. Det er også sådan man definerer størrelse for uendelige mængder.

**$|\mathbb{Q}| = |\mathbb{Z}|$ (Sætning 1.3).** Det er nok at vise det for de positive. Skriv de positive rationale tal $m/n$ i en uendelig matrix $A_{ij} = i/j$ og gennemløb den langs afdiagonalerne i en snoet sti, mens gentagelser som $2/2 = 1/1$ springes over. Det giver listen $q_1, q_2, \dots$ og dermed bijektionen $q_i \mapsto i$. Bemærkning 1.4: ikke alle uendelige mængder har samme kardinalitet; Cantors diagonalargument viser at der ikke er en bijektion mellem $\mathbb{Z}$ og $\mathbb{R}$ (noten henviser til at slå det op).

**Induktion.** For et udsagn $P_n$, $n \ge n_0$: (1) vis basistrinnet $P_{n_0}$. (2) Antag $P_k$ for et vilkårligt $k \ge n_0$ og vis $P_{k+1}$. Eksempel (Sætning 2.1): hvis $q$ er et ulige heltal, er $q^2 - 1$ delelig med $8$. Skriv $q = 2n + 1$ og $f(n) = (2n+1)^2 - 1$. Basis: $f(0) = 0 = 8 \cdot 0$. Trin: $f(k+1) = (2k+1)^2 + 4(2k+1) + 4 - 1 = 8m_k + 8(k+1)$, dvs. $8(m_k + k + 1)$.

**Stærk induktion.** Man antager $P_{n_0}, \dots, P_k$ og viser $P_{k+1}$. Eksempel (Sætning 2.2): ethvert heltal $n > 1$ er et produkt af primtal. Hvis $k + 1$ er sammensat, er $k+1 = ab$ med $1 < a, b < k+1$, og begge er produkter af primtal ved induktionsantagelsen.

**Komplekse tal ud fra de reelle.** Definition 3.2: $\mathbb{C} := \mathbb{R} \times \mathbb{R}$, skrevet $a + ib$, med

$$(a+ib) + (c+id) = (a+c) + i(b+d), \qquad (a+ib)(c+id) = (ac - bd) + i(ad + bc).$$

Sætning 3.3: multiplikation er associativ og kommutativ (kommutativitet følger ved at bytte rundt på reelle produkter). Sætning 3.5: $1 := 1 + i\cdot 0$ er det entydige multiplikative identitetselement, og hvert $z = x + iy \ne 0$ har en entydig invers

$$z^{-1} = \frac{x}{x^2+y^2} + i\,\frac{-y}{x^2+y^2}.$$

Delen om inversen efterlades som øvelse i noten (Problem 6 nedenfor).
### Syntesemodel: Den anvendte matematiks ingeniørmæssige cyklus

Fra et fysisk eller datadrevet problem til en valideret løsning:

```text
    ┌─────────────────────────┐
    │ Virkelighed / Problem   │ (Trafik, billedstøj, anbefalinger)
    └───────────┬─────────────┘
                │  1. Matematisk modellering (ODE, LP, Vektorrum)
                v
    ┌─────────────────────────┐
    │ Formel matematisk model │ (Differentialligning, Simplex, SVD)
    └───────────┬─────────────┘
                │  2. Numerisk algoritme & diskretisering (C / Python)
                v
    ┌─────────────────────────┐
    │ Kørbar computersimulering│ (PID feedback, konvolution, gradient descent)
    └───────────┬─────────────┘
                │  3. Validering mod empiri & fejljustering
                v
    ┌─────────────────────────┐
    │ Færdig ingeniørløsning  │
    └─────────────────────────┘
```

## Opgaver

Fra `proofs_problems2` ("Proofs: Problem Set Two").

**1. In class problems**

- Problem 1: Lad $2\mathbb{Z}$ være de lige heltal. Bevis $|\mathbb{Z}| = |2\mathbb{Z}|$.
- Problem 2: Lad $S_k = \{1, 2, \dots, k\}$. Hvor mange delmængder har $S_k$? Bevis resultatet ved induktion.
- Problem 3: Bevis identiteten $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots + \frac{1}{n(n+1)} = \frac{n}{n+1}$ for alle $n \ge 1$.
- Problem 4: Find en bijektion mellem det åbne interval $]-\pi/2, \pi/2[$ og $\mathbb{R}$.

**2. Problem to hand in at the end of week 2** (står sådan i filen; her svarer det til aflevering 6/12)

- Problem 5: Fibonacci-følgen er $F(0) = 0$, $F(1) = 1$, $F(n) = F(n-1) + F(n-2)$ for $n \ge 2$. Betragt: (A) Der findes et heltal $n_0$ så $F(n) < n^2$ for alle $n \ge n_0$. (B) Der findes et heltal $n_0$ så $F(n) > n^2$ for alle $n \ge n_0$. Er nogen af udsagnene sande? Bevis det, ellers bevis at begge er falske.

**3. Further problems**

- Problem 6: Bevis del (2) af Sætning 3.5: hvert komplekst $z \ne 0$ har en entydig multiplikativ invers $z^{-1}$ med $z \cdot z^{-1} = z^{-1} \cdot z = 1$.
- Problem 7: De komplekse tal uden $0$ med multiplikation er en gruppe. En gruppe er en mængde $G$ med en binær operation $\ast$ så (1) $\ast$ er associativ, (2) der er et neutralt element $e$ med $e \ast x = x \ast e = x$, (3) hvert $x$ har en invers $x^{-1}$ med $x \ast x^{-1} = x^{-1} \ast x = e$. Afgør med bevis om følgende er grupper: mængden af bijektive afbildninger $f: \mathbb{R} \to \mathbb{R}$ med komposition, og mængden af injektive afbildninger $f: \mathbb{R} \to \mathbb{R}$ med komposition.

`MathProofs1B` nævner også en øvelse om associativitet af kompleks multiplikation ("see the exercises"), men den står ikke som et nummereret problem i `proofs_problems2`.

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
- [[Courses/Introduction to applied mathematics/Uger/Uge 01|Uge 1, del A af bevisprojektet]]
