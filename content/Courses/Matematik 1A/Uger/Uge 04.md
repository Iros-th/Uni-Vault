---
publish: true
title: "Matematik 1A uge 4: komplekse tal, del 2, og polynomier"
course: Matematik 1A
type: week
week: 4
tags:
  - matematik-1a
  - ugenote
---

# Uge 4: Komplekse tal, del 2, og polynomier

> Kilde: kursussiden mat1a.compute.dtu.dk (linket som Course Homepage på DTU Learn for 01001), siderne Lektionsoversigt, Ugeprogram semesteruge 4 og Opgaver Store Dag/Lille Dag uge 4. Bogen er kursets lærebog (udgave 2026).

## Emner

- Den komplekse eksponentialfunktion. Polær form af et komplekst tal. Polynomier og deres rødder. Andengradspolynomier, polynomier med reelle koefficienter og den binome ligning.
- Pensum: Afsnit 4.4, 4.5 og 4.6 i kapitel 4 og afsnit 5.1 til og med 5.4 i kapitel 5. Store Dag: afsnit 4.4, 4.5, 4.6, 5.1 og 5.2. Lille Dag: afsnit 5.3 og 5.4. Hjem1 skal afleveres 27/9.

## Begreber

### Den komplekse eksponentialfunktion

Definition 4.4.1: $e^{a+ib} = e^a(\cos b + i\sin b)$. Specielt giver $a = 0$ Eulers formel $e^{it} = \cos t + i \sin t$ (4.7). Sætning 4.4.2 giver blandt andet $e^z \ne 0$ og $e^{z+w} = e^z e^w$.

*Eksempel.* $e^{i\pi/2} = i$ og $e^{i\pi} = -1$.

### Polær form

Et tal skrives $z = |z| e^{i\theta}$ med $\theta$ et argument (Definition 4.6.1). Ved multiplikation ganges modulus og argumenter lægges sammen, og for heltalspotenser gælder $z^n = |z|^n e^{in\theta}$ (Sætning 4.6.2).

*Eksempel.* $(1+i)^4$: $1 + i = \sqrt{2}\, e^{i\pi/4}$, så $(1+i)^4 = 4 e^{i\pi} = -4$.

### Polynomier og rødder

Et tal $z_0$ er rod i $p$, hvis $p(z_0) = 0$ (Definition 5.1.2). Andengradsligningen $az^2 + bz + c = 0$ har rødderne $z = \frac{-b \pm w}{2a}$, hvor $w^2 = b^2 - 4ac$ (Sætning 5.2.1), også når diskriminanten er negativ.

*Eksempel.* $z^2 + 2z + 5 = 0$: $d = 4 - 20 = -16$, $w = 4i$, så $z = -1 \pm 2i$.

### Reelle koefficienter

Hvis $p$ har reelle koefficienter og $z_0$ er rod, så er $\overline{z_0}$ også rod. Komplekse rødder kommer derfor i konjugerede par (afsnit 5.3).

*Eksempel.* $p(z) = z^2 + 2z + 5$ har rødderne $-1+2i$ og $-1-2i$, som er hinandens konjugerede.

### Binome ligninger

$z^n = w$ har $n$ løsninger (Sætning 5.4.1). Skriv $w = r e^{i\varphi}$, så er $z_k = r^{1/n} e^{i(\varphi + 2\pi k)/n}$ for $k = 0, \dots, n-1$.

*Eksempel.* $z^3 = -8i$: $r = 8$, $\varphi = -\tfrac{\pi}{2}$, så $z_k = 2 e^{i(-\pi/6 + 2\pi k/3)}$, altså $\sqrt{3} - i$, $2i$ og $-\sqrt{3} - i$. Kontrol: $(2i)^3 = 8 i^3 = -8i$.
### Algebraisk model: Komplekse enhedsrødder på enhedscirklen

Ligningen $z^n = 1$ har præcis $n$ forskellige rødder, som udgør hjørnerne i en regulær $n$-kant indskrevet i enhedscirklen:

```text
  Eksempel: z⁴ = 1  (4. enhedsrødder: 1, i, -1, -i)
  
                     Im
                     │
                    (i)
                     │
        (-1) ────────┼──────── (1)   Re
                     │
                   (-i)
                     │
```
Rødderne er givet ved $\omega_k = e^{i rac{2\pi k}{n}}$ for $k = 0, 1, \dots, n-1$. Summen af alle $n$'te enhedsrødder er altid præcis 0 på grund af symmetrien.

## Opgaver

Opgaverne står på kursussiden med de numre, der er gengivet her. Nogle nævner bogen, fx definition eller sætning, i deres hints (se begreberne ovenfor).

**Store Dag**

- Opgave 1: Den komplekse eksponentialfunktion (spørgsmål a til b)
- Opgave 2: Modulus og argument
- Opgave 3: Polær form (spørgsmål a til d)
- Opgave 4: Førstegradspolynomier (spørgsmål a til b)
- Opgave 5: Andengradspolynomier (spørgsmål a til b)
- Opgave 6: Polynomiumsaritmetik (spørgsmål a til b)
- Opgave 7: Ligninger med eksponentialfunktionen (spørgsmål a til c)
- Opgave 8: Kompleks konjugering og rødder i polynomier (spørgsmål a til c)
- Opgave 9: Heltalspotenser og polær form (ét spørgsmål, a)

**Lille Dag**

- Opgave 1: Polynomier med reelle koefficienter (spørgsmål a til b)
- Opgave 2: Binome ligninger (ét spørgsmål, a)
- Opgave 3: En andengradsligning
- Opgave 4: Binome andengradsligninger med reel højreside (spørgsmål a til c)
- Opgave 5: En binom ligning i et udtryk med eksponentialfunktionen (spørgsmål a til b)

## Links

- [[Courses/Matematik 1A/Uger/Oversigt|Oversigt over ugerne]]
- [[Courses/Matematik 1A/Matematik 1A|Matematik 1A]]
