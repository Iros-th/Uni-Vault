---
publish: true
title: "Introduction to applied mathematics uge 8: Filtrering, fra kalkulus til billedanalyse"
course: Introduction to applied mathematics
type: week
week: 8
tags:
  - applied-math
  - ugenote
---

# Uge 8: Filtrering, fra kalkulus til billedanalyse

> Kilde: DTU Learn 02525, Project 4 (Filtrering): slides `02525_matmod_RL_2026.pdf` (Rasmus Larsen, 26/10 2026), opgavebeskrivelsen `uge1_projekt_opgavebeskrivelse.pdf` (Aasa Feragen), notebooken `Filtreringsprojekt, del 1 - Fra kalkulus til billedanalyse.ipynb` og billederne `cameraman.png` og `dendrite.png`. Mandag 26/10 2026. Bemærk: opgavebeskrivelsen er dateret "september 2023" i PDF'en, så den er genbrugt fra tidligere år.

## Emner

- 1D- og 2D-signaler og hvordan de repræsenteres som data
- Foldning med en filterkerne, i hånden og på computer
- Afledte via foldning (kernen $[-1, 1]$)
- Billeder som matricer, pixelværdier
- Mean-filtrering og randproblemet
- Kantdetektion med gradienter
- Plan for filtreringsprojektet: uge 1 forelæsning og del 1, uge 2 del 2, uge 3 posterpræsentation

## Begreber

**Signal.** Et 1D-signal er en funktion $f: \mathbb{R} \to \mathbb{R}$, men målingen er $y_i = f(x_i) + \varepsilon_i$: det underliggende signal plus støj, målt i diskrete punkter. Opgaven er at fjerne støj og interpolere. Slides bruger Covid-19-smittetal som eksempel.

**Foldning i 1D.** Et signal $f$ er en vektor af værdier, og en filterkerne $h$ er et lille signal. Man vender (flipper) $h$, ganger elementvis med den del af $f$ den ligger over, og summerer. Kernen $(\tfrac13, \tfrac13, \tfrac13)$ udglatter ved at tage lokalt gennemsnit.

**Afledt via foldning.** $f'(x_0) = \lim_{h \to 0}\frac{f(x_0 + h) - f(x_0)}{h}$. I et diskret signal er mindste skridt $h = 1$, så den afledte tilnærmes med forskellen $f(x_0 + 1) - f(x_0)$, som er foldning med kernen $[-1, 1]$ (op til flip).

**Billede.** En matrix af pixelværdier, enten heltal $0$ til $255$ (som i notebooken) eller decimaltal $0$ til $1$. Pixel $p_{i,j}$ har række $i$ og søjle $j$ (indekseres oppefra og ned, fra venstre mod højre). Størrelse angives som højde $H$ og bredde $W$.

**Mean-filter.** For en pixel $p_{i,j}$ og radius $K$ er den gennemsnitsfiltrerede værdi

$$\hat{p}_{i,j} = \frac{1}{(2K+1)^2}\sum_{k=i-K}^{i+K}\;\sum_{l=j-K}^{j+K} p_{k,l}.$$

Faktoren $\frac{1}{(2K+1)^2}$ er $1$ delt med antallet af pixels i vinduet, så det er et gennemsnit. Eksempel fra opgavebeskrivelsen: $\hat p_{33} = \frac{2\cdot 0{,}4 + 4\cdot 0{,}3 + 0{,}35 + 0{,}45 + 1}{9} = 0{,}4222$ for $K = 1$.

**Foldning i 2D.** Filtrering er at lade en kerne køre hen over billedet. Mean-filteret er kernen med $\frac{1}{(2K+1)^2}$ i alle indgange. I `scipy` er det `sg.convolve2d(f, g, mode='same')`. Slides bemærker: i machine learning kaldes det "foldning", som matematikere kalder krydskorrelation (man flipper ikke kernen).

**Partielle afledte og gradient.** $D_x$ og $D_y$ er forskelle i $x$- og $y$-retningen. Gradienten er $\nabla f = (D_x, D_y)$, og dens størrelse (retningsfri afledt) er

$$\|\nabla f\| = \sqrt{D_x^2 + D_y^2},$$

som lyser op ved kanter.

**Poster.** Fra slides: målgruppen er medstuderende, posteren skal støtte en 7 minutters gruppepræsentation, vigtige formler og resultater skal på, gode figurer, ikke for meget tekst (gerne punkter), og tænk på layout. Anbefalet software: vektorgrafik (fx Inkscape) eller LaTeX.
### Billedbehandlingsmodel: 2D-konvolution og filtrering

Et digitalt billede filtreres ved at glide en $3 \times 3$ vægtmatrix (kerne/kernel) hen over hvert pixel:

```text
  Billed-pixels (3 x 3 vindue):          Gaussisk udglatningskerne:
  ┌────┬────┬────┐                       ┌─────┬─────┬─────┐
  │ p1 │ p2 │ p3 │                       │ 1/16│ 2/16│ 1/16│
  ├────┼────┼────┤                       ├─────┼─────┼─────┤
  │ p4 │ p5 │ p6 │      * (konvolut)     │ 2/16│ 4/16│ 2/16│   ──> Nyt pixel p5'
  ├────┼────┼────┤                       ├─────┼─────┼─────┤
  │ p7 │ p8 │ p9 │                       │ 1/16│ 2/16│ 1/16│
  └────┴────┴────┘                       └─────┴─────┴─────┘
```
Konvolution dæmper højfrekvent støj i billedet ved at lade nabopixels stemme om den sande lysintensitet.

## Opgaver

Opgavebeskrivelsen `uge1_projekt_opgavebeskrivelse` har fem dele og en poster:

- **Del 0 (i hånden):** Beregn de gennemsnitsfiltrerede værdier for pixel $p_{11}$ og $p_{22}$ i Figur 1 for $K = 1$. Forklar hvad faktoren $\frac{1}{(2K+1)^2}$ i (1) relaterer sig til. Hvordan håndterer vi billedets kant? Hvordan beregner vi fx den filtrerede værdi for $i = 0$, $j = 0$, $K = 1$?
- **Del 1:** Opgaverne under "Del 1" i notebooken.
- **Del 2: Filtrering af billeder:** Opgaverne under "Del 2" i notebooken.
- **Del 3: Kantdetektion:** Opgave 3 i notebooken, og forklar hvad der sker (læs op på gradienter).
- **Del 4: Fri leg:** Opgave 4 i notebooken.
- **Poster** over de to første uger, præsenteres i uge 3. Efterlad cirka to tredjedele af pladsen til næste uges arbejde.

Opgaverne i notebooken (Python, `scipy`, `skimage`, `matplotlib`):

- **Del 1** (hvad er et billede): `io.imread('dendrite.png')` giver en matrix; `f.shape` og `np.unique(f)` viser størrelse og intensiteter ($0$ til $255$). Et dobbelt løkke-eksempel segmenterer ved tærskel $T = 100$ (alt over $100$ sættes til $255$, resten til $0$). Spørgsmål: hvorfor står der tal langs siderne af billedet?
  - **Opgave 1 a:** Læs `cameraman.png`, plot det og undersøg hvor stort det er.
  - **Opgave 1 b:** Find en måde at gøre billedet mørkere og lysere (brug evt. `vmin=0, vmax=255`).
- **Del 2** (foldninger og filtrering): eksempel med mean-filter `g = np.ones((3,3)); g /= g.sum()` og `sg.convolve2d(f, g, mode='same')`, samt salt-og-peber-støj med `skimage.util.random_noise(f, mode='s&p')`.
  - **Opgave 2:** Lav en kerne $g$, der flytter motivet mod højre, lidt eller meget. Der kommer mere og mere sort ind til venstre. Hint: hvilke to værdier kan optræde i kernen, og hvor mange gange?
- **Del 3** (fra kalkulus til kantdetektion): kernen `Dx = [[-1, 1]]`. Udfyld `Dy` og visualiser.
  - **Opgave 3:** Kod en funktion der beregner den pixelvise gradientstørrelse $\sqrt{D_x^2 + D_y^2}$ og brug den på kameramanden.
  - **Opgave 4 (fri leg):** egne billeder (omsat til gråtone), andre slags støj, kombinér mean-filter og kantdetektion (hvad sker der når filterstørrelsen ændres, eller når der er flere nuller mellem $1$ og $-1$ i $D_x$ og $D_y$?), og læs om randbetingelserne i `convolve2d`.

Notebooken har selv ingen løsninger.

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
