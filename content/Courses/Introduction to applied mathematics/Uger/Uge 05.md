---
publish: true
title: "Introduction to applied mathematics uge 5: Aktiv fartpilot, teori"
course: Introduction to applied mathematics
type: week
week: 5
tags:
  - applied-math
  - ugenote
---

# Uge 5: Aktiv fartpilot, teori

> Kilde: DTU Learn 02525, Projekt 3 (aktiv fartpilot), "Projekt uge 1 Teori": `fart.pdf` ("Aktiv fartpilot, Noter om andenordens lineære differentialligninger", Christian Henriksen, 2025). Mandag 28/9 2026. Mine egne lektionsnoter: [[Lection 5 Operations research 1]] (filen hedder "Operations research", men indholdet handler om fartpiloten).

## Emner

- Funktioner: eksplicit og implicit definition
- Førsteordens differentialligninger, stamfunktioner og løsningsformlen
- Komplekse førsteordens differentialligninger
- Andenordens lineære differentialligninger med konstante koefficienter
- Den homogene ligning $x'' + bx' + cx = 0$ og de tre løsningstilfælde

## Begreber

**Fartpilotprojektet.** En aktiv fartpilot sikrer at en bil holder sikkerhedsafstand til forankørende. Til at designe den skal man kunne analysere løsningerne $x(t)$ til $x''(t) + bx'(t) + cx(t) = 0$, en homogen lineær andenordens differentialligning med konstante koefficienter.

**Eksplicit og implicit funktion.** Eksplicit: $f(t) = \sqrt{t^2 + 1}$ er angivet ved en forskrift. Implicit: $f(t) = x$, hvor $x > 0$ løser $x^2 = t^2 + 1$. Implicit definerer man en funktion ved betingelser, som kun den opfylder. Arcsin er et eksempel: $f(t) = x$ hvor $x \in [-\pi/2, \pi/2]$ opfylder $\sin(x) = t$.

**Førsteordens differentialligning.** Formen $x'(t) = f(x(t), t)$. Eksempler i noten: Alices køretur ($x'(t) = f(t)$, farten kendes, vejlængden søges) og radioaktivt henfald ($x'(t) = -cx(t)$). Sætning 1: hvis $f$ er kontinuert på et åbent interval $I$, har $x' = f$ en løsning $F$, og alle løsninger er $F(t) + k$, $k \in \mathbb{R}$. Kræver man $x(t_0) = x_0$, er der præcis én løsning. Ikke alle løsninger kan skrives med elementære funktioner: fx har $x'(t) = \frac{2}{\sqrt{\pi}}e^{-t^2}$ løsningen erf (med $x(0) = 0$).

**Løsningsformlen for $x' + p(t)x = q(t)$.** Gang med $e^{P(t)}$, hvor $P$ er en stamfunktion til $p$. Venstresiden bliver $(e^{P(t)}x(t))'$ (produktreglen), så

$$x(t) = e^{-P(t)}\left(\int e^{P(t)}q(t)\,dt + k\right), \quad k \in \mathbb{R}.$$

Eksempel 5: $x' + x = 1$ giver $x(t) = 1 + ke^{-t}$.

**Komplekse funktioner af en reel variabel.** $f(t) = u(t) + iv(t)$, og $f' = u' + iv'$. For $\lambda = \alpha + i\beta$ gælder $\frac{d}{dt}e^{\lambda t} = \lambda e^{\lambda t}$. Samme løsningsformel gælder for $z' + p(t)z = q(t)$ med komplekse $p, q$ (Sætning 4), og $z' - \lambda z = 0$ har løsningerne $z = de^{\lambda t}$, $d \in \mathbb{C}$.

**Hjælpeligning med eksponentialfunktion på højresiden (Eksempel 9).** For $z' - \lambda_2 z = d_1 e^{\lambda_1 t}$ er alle løsninger $z = (d_1 t + d_2)e^{\lambda_2 t}$ hvis $\lambda_1 = \lambda_2$, og $z = \frac{d_1}{\lambda_1 - \lambda_2}e^{\lambda_1 t} + d_2 e^{\lambda_2 t}$ hvis $\lambda_1 \ne \lambda_2$.

**Andenordens ligning som to førsteordens.** Hvis $w' - \lambda_1 w = q$ og $z' - \lambda_2 z = w$, så løser $z$ ligningen $z'' + bz' + cz = q$ med $b = -(\lambda_1 + \lambda_2)$ og $c = \lambda_1\lambda_2$. Sætning 6: hvis $\lambda_1, \lambda_2$ er rødderne i det karakteristiske polynomium $z^2 + bz + c$, er løsningsmængderne ens. Sætning 7: med $z(t_0) = z_0$ og $z'(t_0) = v_0$ er der præcis én løsning.

**Sætning 8 (løsningsformlen for $x'' + bx' + cx = 0$, $b, c \in \mathbb{R}$).** Lad $\lambda_1, \lambda_2$ være rødderne i $z^2 + bz + c$. Tre tilfælde, hvor $k_1, k_2 \in \mathbb{R}$:

- $\lambda_1 \ne \lambda_2$ reelle: $x(t) = k_1 e^{\lambda_1 t} + k_2 e^{\lambda_2 t}$
- $\lambda_1 = \lambda_2 = \lambda$: $x(t) = (k_1 t + k_2)e^{\lambda t}$
- $\lambda_1 = \alpha + i\beta$, $\beta > 0$ (komplekst konjugerede): $x(t) = (k_1\cos(\beta t) + k_2\sin(\beta t))e^{\alpha t}$

**Dæmpning (Opgave 10).** For $c > 0$ kaldes ligningen overdæmpet hvis $b > 2\sqrt{c}$, kritisk dæmpet hvis $b = 2\sqrt{c}$ og underdæmpet hvis $0 < b < 2\sqrt{c}$.
### Fysisk systemmodel: Dynamisk bilmodel for adaptiv fartpilot

Bilens acceleration bestemmes af kraftbalancen mellem motorens trækkraft og de samlede modstandskræfter:

```text
  Luftmodstand: F_luft = 1/2 · ρ · C_d · A · v²
  Rullemodstand: F_rul = C_r · m · g
  Motortrækkraft: F_motor (styres af fartpiloten)

      ┌─────────────────────────┐
  <── │  F_luft + F_rul + F_bak │ ─── Bil (masse m, hastighed v) ───> F_motor
      └─────────────────────────┘
```
Differentialligningen for systemet:
$$m \frac{dv}{dt} = F_{\text{motor}} - \frac{1}{2}\rho C_d A v^2 - C_r m g.$$
Modellen er ulineær på grund af $v^2$-leddet, så omkring en marchhastighed $v_0$ lineariseres den med Taylor-approksimation: $v^2 \approx v_0^2 + 2v_0(v - v_0)$.

## Opgaver

Opgaverne i `fart.pdf`, nummereret som i noten (der er ingen bogreferencer, kun denne note):

- **Opgave 1:** Vis at $e^x + e^t x - t = 0$ definerer en funktion $x(t)$, $t \in \mathbb{R}$. Fastlæg $t$ og se på $g_t(x) = e^x + e^t x - t$. (a) Vis at $g_t$ er kontinuert og strengt voksende. (b) Vis $g_t(x) \to -\infty$ for $x \to -\infty$. (c) Vis $g_t(x) \to \infty$ for $x \to \infty$. (d) Forklar hvorfor (a) til (c) giver at der findes $x = x(t)$ med $g_t(x) = 0$.
- **Opgave 2:** (a) Definerer $x^2 = t^2 + 1$ en og kun én funktion $x(t)$, $t \in \mathbb{R}$? (b) Hvad hvis vi kræver at $x$ er kontinuert? (c) (ikke pensum) Hvad hvis vi desuden kræver $x(0) = 1$?
- **Opgave 3:** (a) Vis at $F(t) = k_1 + \ln(t)$ for $t > 0$ og $F(t) = k_2 + \ln(-t)$ for $t < 0$ opfylder $F'(t) = 1/t$ for $t \ne 0$ for vilkårlige $k_1, k_2$. (b) Tænk over hvorfor løsningerne til $F' = 1/t$ ikke alle er $F + k$, uden at det strider mod Sætning 1.
- **Opgave 4:** Løs $x'(t) + \frac{x(t)}{t} = 1$, $t > 0$.
- **Opgave 5:** (a) Brug produktreglen på $f(t)G(t)$ til at vise $f(t)g(t) = (f(t)G(t))' - f'(t)G(t)$. (b) Vis $\int f g\,dt = fG - \int f'G\,dt$ (partiel integration). (c) Find $\int te^t\,dt$. (d) Løs $x'(t) + x(t) = t$.
- **Opgave 6:** (a) Find alle komplekse løsninger til $z'(t) + z(t) = e^{it}$, $t \in \mathbb{R}$. (b) Skriv $z = x + iy$ og vis $x' + x = \cos(t)$ og $y' + y = \sin(t)$. (c) Opskriv de reelle løsninger til $x' + x = \cos(t)$ ved at tage realdelen af løsningerne fra (a).
- **Opgave 7:** Find alle komplekse løsninger til $z'' + 3z' + 2z = 0$. Hvad er de reelle løsninger?
- **Opgave 8:** Indtegn i et $(b, c)$-koordinatsystem de punkter, hvor $z^2 + bz + c$ har dobbeltrødder. I hvilket område er rødderne reelle, og i hvilket er de to komplekst konjugerede?
- **Opgave 9:** Brug at $te^{\alpha t} \to 0$ for $t \to \infty$ hvis og kun hvis $\alpha < 0$. Vis at enhver løsning til $x'' + bx' + cx = 0$ går mod $0$ hvis og kun hvis $\operatorname{Re}\lambda_j < 0$ for $j = 1, 2$.
- **Opgave 10:** Vælg $c > 0$ (fx $c = 4$). Med et CAS-værktøj, tegn løsningen med $x(0) = 1$, $x'(0) = 0$ for (a) $b > 2\sqrt{c}$, (b) $b = 2\sqrt{c}$, (c) $0 < b < 2\sqrt{c}$. (d) Sammenlign over $0 \le t \le T$: hvilken går hurtigst mod $0$?

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
