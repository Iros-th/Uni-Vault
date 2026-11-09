---
publish: true
title: "Introduction to applied mathematics uge 9: Filtrering 2, median, rand og segmentering"
course: Introduction to applied mathematics
type: week
week: 9
tags:
  - applied-math
  - ugenote
---

# Uge 9: Filtrering 2, median, rand og segmentering

> Kilde: DTU Learn 02525, Project 4 (Filtrering): slides `02525_filtrering_2.pdf` (Rasmus Larsen, 2/11 2026), opgavebeskrivelsen `uge2_projekt_opgavebeskrivelse.pdf` (Aasa Feragen, dateret "oktober 2023"), notebooken `Filtreringsprojekt, del 2 - Kvalitetskontrol af chokolade.ipynb` og billederne `foam.png` og `ferrero.png`. Mandag 2/11 2026.

## Emner

- Medianfiltrering som alternativ til mean-filtrering
- Randbetingelser: zero padding, replikation, spejling
- Støj og præprocessering
- Histogrammer og tærskelværdier
- Billedsegmentering
- Kvalitetskontrol af Ferrero Rocher: hvor stor en del er nødder?

## Begreber

**Mean og median.** Begge antager at signalet er glat, så værdien i $x_0$ ligner værdierne i nærheden. Den filtrerede værdi er middelværdien (mean-filter) eller medianen (median-filter) af de $2K + 1$ nabopunkter. For $N$ tal sorteret $a_1 \le \dots \le a_N$ er medianen for ulige $N$ det midterste tal $a_{(N+1)/2}$. Eksempel: $5, 3, 6, 8, 1, 2, 2$ sorteres til $1, 2, 2, 3, 5, 6, 8$ med median $3$. For lige $N$ er enhver værdi mellem de to midterste en median (slides: for $1, 2, 3, 5, 6, 8$ er det alt mellem $3$ og $5$). I slides-eksemplet giver $K = 1$ ved pixel $(1,1)$ mean $0{,}52$ og median $0{,}55$.

**Median er ikke en foldning.** Spørgsmålet i slides er om medianfiltrering kan skrives som foldning. Svaret er nej: foldning er lineær, og medianen er det ikke.

**Støj.** Støj skyldes fx at motivet bevæger sig, sløring, for svagt signal og detektorfejl. Filtrering er præprocessering, der gør den videre analyse mindre påvirket af støj. Slides lader en diskutere hvad mean og median hver især er gode til.

**Randbetingelser.** Et billede er et udsnit af verden i et gitter, og valget af randbetingelse er en antagelse om verden udenfor:

- zero padding: der er ikke noget udenfor (nuller)
- replikation af randværdier: verden udenfor ligner randpixlene
- spejling: verden udenfor ligner verden tæt på billedet

Slides stiller opgaven at diskutere hvad zero padding gør ved mean- og medianfiltrering, og hvilke filtre, randbetingelser og filterstørrelser der passer til forskellige billeder.

**Histogram og segmentering.** Pixelværdier ligger mellem $0$ (sort) og $1$ (hvid). En segmentering inddeler pixels i klasser (fx forgrund og baggrund, eller flere materialer). Man starter med et histogram over pixelværdier, og idealet er klar separation mellem klasserne. Ud fra histogrammet vælger man en eller flere tærskelværdier $\tau$, som klassificerer hver pixel. Eksempel i opgavebeskrivelsen: CT-slice af cement ($1000 \times 1000$ pixels) med luftbobler som forgrund (middelværdi cirka $0{,}15$) og cement som baggrund (cirka $0{,}5$); de to toppe overlapper, og $\tau = 0{,}27$ giver en udmærket segmentering især af de store bobler. Filtrering kan forbedre segmenteringen, fordi histogrammets toppe bliver smallere.

**Nødder i chokolade.** Med tre klasser (luft, nødder, chokolade) og tærskler $\tau_{\text{air}}$, $\tau_{\text{nuts}}$, $\tau_{\text{choc}}$ tæller man pixels i hver klasse. Andelen af nødder er

$$\text{nut\_ratio} = \frac{\#\text{nødder}}{\#\text{nødder} + \#\text{chokolade}},$$

hvis man følger notebookens variabler `no_nutpixels` og `no_chocpixels`. (Selve formlen er `? # DEFINER` i notebooken, så dette er min læsning af variabelnavnene.)

## Opgaver

Opgavebeskrivelsen `uge2_projekt_opgavebeskrivelse`, hvor man bruger notebooken (der står "Opgave 1" og "Opgave 2"):

**Opgave 1 (foam.png, notebookens Del 2.1)**

- Opgave 2.1: Sæt en passende tærskelværdi for det oprindelige billede. Er det en god segmentering?
- Opgave 2.2: Definer et gennemsnitsfilter afhængigt af $K$. Hvad sker der med histogrammet, og hvordan ændrer det karakter? Definer en tærskel for det filtrerede billede. Hvad sker der med segmenteringen? Undersøg hvilket $K$ der giver en passende segmentering.
- Opgave 2.3: Hvad sker der hvis mean erstattes med medianfiltrering?

I notebooken hedder delopgaverne 2.1 a (tærskel på original, `tau = ?`), 2.1 b (mean-filter med `h = 1/(?)*np.ones((N,N))`, hvor `?` skal være $N^2$, og ny tærskel) og 2.1 c (medianfilter, fx `sg.medfilt2d(input, kernel_size=3)`, hvor `kernel_size` svarer til $N = 2K + 1$).

**Opgave 2 (ferrero.png, notebookens Del 2.2)**

- Opgave 2.2.a: Ud fra histogrammet, find tærskler for materialerne. Definer segmentering og kommentér resultatet.
- Opgave 2.2.b: Definer filter og størrelse. Inspicér det filtrerede histogram: skal tærsklerne ændres? Definer segmentering af det filtrerede billede. Undersøg en god værdi af $K$.
- Opgave 2.2.c: Find ud af hvor stor en del af produktet der er nødder.

Notebooken udskriver `'Nødder udgør ca. ...% af produktet'`. Indpakningen omkring chokoladen skal man ikke bekymre sig om. Resten af 2.1 (at tælle enkelte bobler) kræver mere avancerede metoder, som kommer i kursus 02502 (Billedanalyse).

Også til posteren: den bedømmes på form, indhold og præsentation (slide "Husk"), og skal afleveres på Learn.

## Tjek dig selv

- [ ] Kan jeg finde medianen af en talliste, også med lige antal tal?
- [ ] Hvorfor er medianfiltrering ikke en foldning?
- [ ] Kan jeg forklare hvad zero padding, replikation og spejling antager om verden uden for billedet?
- [ ] Hvordan vælger jeg tærskler ud fra et histogram, og hvorfor bliver det lettere efter filtrering?
- [ ] Hvad sker der med segmenteringen når $K$ bliver meget stor?
- [ ] Hvordan beregner jeg andelen af nødder ud fra en segmentering?
- [ ] Kan jeg forklare hvornår median er bedre end mean (fx ved salt-og-peber-støj)?

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
