---
publish: true
title: "Programming for Mathematical Software uge 2: Flydende tal, kontrolstrukturer, basistyper"
course: Programming for Mathematical Software
type: week
week: 2
tags:
  - c-programming
  - ugenote
---

# Uge 2: Flydende tal, kontrolstrukturer, basistyper

> Kilde: `module02.pdf` (opgaveark, 10. september 2026), `slides02.pdf` (forelæsning 2, 27 slides), `sols_module02.pdf` (løsningseksempler) og modultabellen. Eksemplet "demo02" er ikke tilgængeligt i DTU Learn. Pensum: King kap. 4, 5 (skim), kap. 7 (læs), 23.1, 23.4; lecture notes kap. 2 og 3.

## Emner

- Flydende tal (IEEE 754) og afrundingsfejl
- Heltalsaritmetik, overflow og modulær aritmetik
- Cancellation og hvordan man undgår det
- `if`-sætninger og andre kontrolstrukturer
- Basistyper, heltalstyper og typekonvertering (casting)
- Hexadecimal repræsentation

## Begreber

**Hvorfor det går galt (slides).** Forelæsningen starter med to små programmer. Med `double a = 1.0, b = 1e-16, c = -1.0` giver `(a+b)+c` 0, `a+(b+c)` giver $1.1102 \cdot 10^{-16}$, og `(a+c)+b` giver $10^{-16}$. Og med `int a = 1 << 30` giver `2*a` det negative tal $-2147483648$, fordi heltal kan løbe over. Morale: associativ addition gælder ikke i endelig præcision, og heltalsoperationer kan overflowe.

**Heltal (slides).** `unsigned`-typer regner modulært: $a + b$ giver $(a+b) \bmod 2^n$. C kræver ikke en bestemt repræsentation af negative tal, og signed overflow er undefined behavior i C. Uden overflow opfylder signed heltalsaritmetik de sædvanlige regler (kommutativ, associativ, distributiv). Der er heltalspromovering (ingen aritmetik direkte på `char` og `short`). For heltal gælder altid `a == (a/b)*b + a%b`, hvor `a/b` runder mod nul og `a%b` har fortegn.

**Flydende tal (slides).** Et tal skrives $x = s \cdot (d_0.d_1d_2\ldots d_{p-1})_b \cdot b^E = s \sum_{k=0}^{p-1} d_k b^{E-k}$ med base $b$, fortegn $s$, signifikand $d_0.d_1\ldots d_{p-1}$, eksponent $E$ og præcision $p$. Tallet er normalt hvis $d_0 \neq 0$, ellers subnormalt. Kun endeligt mange tal kan repræsenteres, og mange decimaltal som 0.1 kan ikke repræsenteres præcist i binær.

**Machine epsilon, unit round-off og ulp (slides).** Machine epsilon er $\epsilon = b^{-(p-1)}$ (slides advarer om, at nogle forfattere definerer det anderledes). Unit round-off er $u = \epsilon/2$. Ulp af $x$ er $\epsilon \cdot b^E$, dvs. afstanden fra $|x|$ til det næste større flydende tal.

**Største og mindste tal (slides).** Med eksponent $E \in \{E_{min},\ldots,E_{max}\}$ er $N_{max} = b^{E_{max}}(b - b^{-(p-1)})$, mindste normale tal er $N_{min} = b^{E_{min}}$, og mindste subnormale tal er $b^{E_{min}-(p-1)}$. Eksempel fra slides: $b=2$, $p=3$, $E \in \{-1,0,1\}$ giver $\epsilon = 0.25$, $N_{max} = 3.5$, $N_{min} = 0.5$ og mindste subnormale $0.125$.

**Afrunding (slides).** Round to nearest har varianter: ties to even (banker's rounding) og ties away from zero. Der findes også rettet afrunding: mod nul, mod $+\infty$ og mod $-\infty$. Slides' tabel for $b=10$, $p=2$: 1.05 giver 1.0 (even) eller 1.1 (away), og 1.15 giver 1.2 i begge tilfælde.

**Beregningsmodel og fejl (slides).** Uden under- eller overflow gælder $\mathrm{fl}(x \odot y) = (x \odot y)(1+\delta)$ med $|\delta| \le u$ for de fire regneoperationer. For funktioner (exp, log, sin, cos) er modellen $\mathrm{fl}(f(x)) = (1+\delta_1) f((1+\delta_2)x)$. Absolut fejl er $|\mathrm{fl}(f(x)) - f(x)|$ og relativ fejl er denne divideret med $|f(x)|$.

**Cancellation (slides).** Tab af signifikante cifre ved subtraktion af næsten ens tal. Slides' eksempel med $b=10$, $p=3$, $x=1.02$, $y=1.01$: selve subtraktionen $x-y$ er eksakt, men hvis $x$ først har fået en fejl, bliver den relative fejl op til ca. $10^{-1}$. Catastrophic cancellation er når den relative fejl bliver væsentligt større end den absolutte ved subtraktion af næsten ens tal.

**Loss of precision theorem (slides).** Hvis $x > y > 0$ er normale flydende tal og $b^{-\beta} \le 1 - y/x \le b^{-\alpha}$, så mistes mindst $\alpha$ og højst $\beta$ signifikante cifre i $x - y$. Fejlgrænsen for subtraktion er $e_{rel} \le \frac{|x|+|y|}{|x-y|}(2+u)u$ (for $x \neq y$), så den bliver stor når $x \approx y$.

**IEEE 754 (slides).** Standard fra 1985, seneste revision 2019, med binære og decimale formater. Fire regneoperationer og kvadratrod skal være korrekt afrundet.

- binary32 (single, typisk `float`): 1 fortegnsbit, 8 eksponent, 23 signifikand ($p = 24$, $d_0$ er implicit).
- binary64 (double, typisk `double`): 1 fortegnsbit, 11 eksponent, 52 signifikand ($p = 53$). Her er $\epsilon = 2^{-52} \approx 2.22 \cdot 10^{-16}$, $N_{max} = 2^{1023}(2 - 2^{-52}) \approx 1.8 \cdot 10^{308}$ og $N_{min} = 2^{-1022} \approx 2.2 \cdot 10^{-308}$.
- Specialværdier: signed nul, subnormale tal, signed uendelig (`INFINITY`) og `NAN`. Ugyldige operationer giver NaN: $\sqrt{-1}$, $0 \cdot \infty$, $0/0$, $\infty/\infty$, $\infty - \infty$.
- Decimale formater (decimal32, decimal64) er med fra 2008-revisionen, har begrænset hardwarestøtte og bruges fx i finans. 80-bit extended precision findes på x86 (x87-FPU'en).

**Klassificering og FP-miljø (C99, slides).** `math.h` har `isfinite`, `isnormal`, `isnan`, `isinf` og `fpclassify` (returnerer `FP_NAN`, `FP_INFINITE`, `FP_ZERO`, `FP_SUBNORMAL` eller `FP_NORMAL`). Test for NaN: `isnan(x)`, eller `x != x` (kræves af IEEE 754, men virker ikke med alle compilere). `fenv.h` giver `fesetround` og `fegetround` med tilstandene `FE_DOWNWARD`, `FE_TONEAREST`, `FE_TOWARDZERO` og `FE_UPWARD`. GCC/Clang-flaget `-frounding-math` fortæller compileren, at afrundingstilstanden kan ændres.

**Undgå cancellation, under- og overflow (slides).** Brug specialfunktioner: `expm1(x)` til $e^x - 1$ for små $x$, `log1p`, `hypot(x,y)` til $\sqrt{x^2+y^2}$ (eller omskriv til $|x|\sqrt{1+(y/x)^2}$ når $|x|>|y|$), og `lgamma(n+1)` til $\log(n!)$ (eller summér $\sum_{k=2}^n \log k$). Eller omskriv udtrykket:

- $1 - \cos x = 2\sin^2(x/2)$ for små $x$.
- $\sqrt{x+2} - \sqrt{x} = \dfrac{2}{\sqrt{x+2}+\sqrt{x}}$ for store $x$.

**Ting man bør undgå (slides).** Test ikke for lighed mellem flydende tal (`float test = 4.1; if (test == 4.1)` bliver falsk, fordi `4.1` er en `double`). Brug ikke flydende tal som løkketællere. Undgå at trække næsten ens størrelser fra hinanden. GCC/Clang-flaget `-Wfloat-equal` advarer om lighedstest.

**Sammenligning af flydende tal.** Brug i stedet en tolerance, fx `fabs(x - y) < tol`.

**Typekonvertering.** Implicit konvertering sker i blandede udtryk (`int` bliver til `double`). Eksplicit cast skrives `(double) i`. Pas på heltalsdivision: `(double)(a / b)` dividerer først som heltal, mens `(double) a / b` dividerer som `double`.

**Heltalstyper og hexadecimal.** Et `int` er typisk 32 bit med fortegn og kan højst rumme 2 147 483 647. Et `unsigned int` rummer op til 4 294 967 295. Til at udskrive i hex bruges `%x` eller `%X` (til `unsigned`). En byte er 8 bit og kræver 2 hex-cifre, fordi ét hex-ciffer dækker 4 bit.

```c
#include <stdio.h>

int main(void) {
    unsigned int x = 2343432205u;
    printf("%u i hex: %X\n", x, x);
    return 0;
}
```
### Hukommelsesmodel: IEEE 754 flydende tal (double precision bit-layout) (supplerende illustration, ikke fra slides)

En 64-bit `double` i C er opdelt i tre felter ifølge IEEE 754-standarden:

```text
   1 bit       11 bits                             52 bits
  ┌───┬───────────────────────┬────────────────────────────────────────────────────────┐
  │ s │      Eksponent e      │                   Signifikand / Mantisse m             │
  └───┴───────────────────────┴────────────────────────────────────────────────────────┘
  Bit 63     Bits 62-52                              Bits 51-0

  Værdi:  (-1)^s · (1 + m) · 2^(e - 1023)
```

**Maskinpræcision ($\epsilon_{\text{mach}}$):**
For double er $\epsilon \approx 2^{-52} \approx 2{,}22 \times 10^{-16}$. Tallene ligger tættere nær nul og spredes eksponentielt ud ved store værdier. Trækker man to næsten ens tal fra hinanden ($a - b$), mister man næsten alle de signifikante cifre (catastrophic cancellation).

## Opgaver

Fra `module02.pdf`. Instruktioner: skim King kap. 4 og 5, læs kap. 7; læs lecture notes kap. 2 og 3.

- 2.1 Sandt eller falsk? Den associative egenskab for multiplikation gælder for floating-point aritmetik med begrænset præcision, dvs. $a(bc) = (ab)c$ for floating-point tal $a$, $b$, $c$.
  - Løsningsidé: falsk. $\mathrm{fl}(\mathrm{fl}(ab)c) = (ab)(1+\delta_1)c(1+\delta_2)$ og $\mathrm{fl}(a\,\mathrm{fl}(bc)) = (bc)(1+\delta_3)a(1+\delta_4)$ er ikke ens i almindelighed, fordi afrundingsfejlene $\delta_i$ er forskellige. Hvis $a = c$, er $\delta_1 = \delta_3$ og $\delta_2 = \delta_4$, så er de ens.
- 2.2 Sandt eller falsk? Den distributive egenskab gælder for floating-point aritmetik, dvs. $a(b+c) = ab + ac$ for floating-point tal $a$, $b$, $c$.
  - Løsningsidé: falsk, samme metode. $\mathrm{fl}(a\,\mathrm{fl}(b+c))$ har to afrundinger, mens $\mathrm{fl}(\mathrm{fl}(ab) + \mathrm{fl}(ac))$ har tre, med forskellige $\delta$.
- 2.3 Tag quizzen om `if`-sætninger. (Svarnøgle i quizzen.)
- 2.4 Tag quizzen om eksplicit typekonvertering (typecasting). Gæt ikke: skriv kode og find svaret.
- 2.5 Lav "Module 02"-opgaverne på Autolab. (Løsninger lægges på Learn efter deadline.)
- 2.6 Lav exercise 14 (kap. 7, s. 159) i lærebogen.
  - Løsningsidé: Newtons iteration for kvadratrod. Start med $y = 1$, gentag $y \leftarrow \tfrac{1}{2}(y + x/y)$ indtil $|y - y_{old}| \le 10^{-5} y$. Tjek først at `scanf` lykkedes, og at $x$ er endelig og positiv (`isfinite`). Print $x$, $y$, $x/y$ og gennemsnittet for hver iteration.
- 2.7 Skriv et program med en heltalsvariabel med værdien 2.343.432.205. Vælg en passende datatype, og udskriv værdien og dens hexadecimale repræsentation med `printf()`. Hvor mange hex-cifre skal der til for at repræsentere en byte? Hint: brug `%x` eller `%X`.
  - Løsningsidé: tallet er større end $2^{31}-1$ men mindre end $2^{32}-1$, så brug `unsigned int` (32 bit) og `printf("%u ... %X", a, a)`. Ét hex-ciffer er 4 bit ($16 = 2^4$), så en byte (8 bit) kræver 2 hex-cifre.

## Tjek dig selv

- [ ] Hvorfor gælder $(a+b)+c=a+(b+c)$ ikke for flydende tal?
- [ ] Hvad er machine epsilon $\epsilon$ og unit round-off $u$, og hvad er deres værdier for `double`?
- [ ] Hvordan er en `double` opdelt i fortegn, eksponent og signifikand, og hvilke specialværdier findes?
- [ ] Hvad er catastrophic cancellation, og hvilke omskrivninger eller funktioner (`expm1`, `log1p`, `hypot`) kan undgå det?
- [ ] Hvorfor bør flydende tal ikke sammenlignes med `==`, og hvad bruges i stedet?
- [ ] Hvad sker der ved overflow af `int` og `unsigned int`?
- [ ] Hvor mange hex-cifre svarer til én byte?

## Links

- [[Courses/Programming for Mathematical Software/Uger/Oversigt|Oversigt]]
- [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|Kursusforside]]
