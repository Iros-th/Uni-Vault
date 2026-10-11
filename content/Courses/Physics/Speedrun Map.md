---
title: Speedrun Map (Physics)
course: Physics
type: speedrun-map
publish: true
tags:
  - physics
  - speedrun
  - mastery-map
  - eksamen
---

# Speedrun Map: Physics

Hurtigste vej gennem introfysik: vektorer og kinematik først, så Newtons love, og derefter de to "bevarelses-genveje" (energi og impuls) der løser de fleste opgaver uden at gå via kræfter. Rotation, svingninger og resten bygger ovenpå. [[Physics]] beskriver faget som "Mechanics first, then whatever comes after", så mekanik vægtes tungest.

Hører sammen med [[Courses/Physics/Begreber|Begreber]], [[Flashcards/Physics Flashcards|flashcards]] og [[Self-Tests/Physics Test|selvtesten]].

> [!warning] Pensum er tyndt
> [[Courses/Physics/Pensum|Pensum]] er en tom skabelon, og alle 13 [[Courses/Physics/Lektioner/index|lektioner]] er tomme. [[Courses/Physics/Begreber|Begreber]] dækker kun mekanik (position/hastighed/acceleration, kraft, energi og arbejde, impuls) samt enheder og vektorer. Emne 6 til 11 (rotation, gravitation, svingninger/bølger, fluider, termo, el/magnetisme) er **antaget** ud fra et standardkursus; især el/magnetisme og termodynamik kan være uden for dit pensum. Slet det der ikke er med, når du kender de officielle emner.

**Forklaring:** ★ = Jitty-video (kanalen "Computer Engineering Jitty", engelsk, som jeg har antaget er den Jitty du mener). Alle videolinks er fundet ved søgning; ingen er gættet. Timer er et skøn for en der skal bestå, ikke mestre alt. Eksamensvægt (høj/med/lav) er mit skøn ud fra emnets rolle i faget, ikke fra en officiel eksamensplan.

## Speedrun-rækkefølge

| # | Emne | Timer | Eksamensvægt |
|---|------|-------|--------------|
| 1 | Enheder og vektorer | 3 | med: fundament; vektorfejl ødelægger alt senere, men sjældent en hel opgave i sig selv |
| 2 | Kinematik i 1D og 2D | 5 | høj: fundamentet for enhver mekanikopgave; kommer også ind via projektil og cirkelbevægelse |
| 3 | Newtons love og kræfter | 7 | høj: den mest brugte metode i faget; fylder typisk flere opgaver |
| 4 | Arbejde, energi og effekt | 5 | høj: genvej der erstatter kraftregning; næsten altid en opgave |
| 5 | Impuls og kollisioner | 4 | høj: nævnt i Begreber, bevarelseslov og typisk kollisionsopgave |
| 6 | Rotation og kraftmoment | 6 | med: antaget pensum; svær men ofte én opgave, hvis med |
| 7 | Gravitation | 2 | med: antaget pensum; formelbaseret og kort |
| 8 | Svingninger og bølger | 4 | med: antaget pensum; kort sluttopgave hvis med |
| 9 | Fluider | 2 | lav: antaget pensum; ofte udeladt eller kort opgave |
| 10 | Termodynamik (antaget) | 3 | lav: usikkert om med; hvis kemi-kurset dækker det, er det overlap |
| 11 | Elektricitet og magnetisme (antaget) | 6 | lav: usikkert om med; mange kurser kører el/mag som egen fysik 2 |

**Samlet skøn: ca. 47 timer.** Hvis tiden er knap: tag alle emner med vægt *høj* først, og spring dem med *lav* over til sidst.

## Lærebog
Kursets egen bog er ikke angivet i vaulten. Jeg bruger gratis [OpenStax University Physics Vol. 1](https://openstax.org/books/university-physics-volume-1/pages/1-introduction) og [Vol. 2](https://openstax.org/books/university-physics-volume-2/pages/1-introduction) som reference; kapitelnumre er derfra. Tjek mod din faktiske bog.

Supplement: [Khan Academy Physics](https://www.khanacademy.org/science/physics), [LibreTexts University Physics](https://phys.libretexts.org/Bookshelves/University_Physics), [MIT OCW 8.01SC Classical Mechanics](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/). Jitty-kanalen har mange mekanikvideoer (fundet for emne 1 til 8, dog ikke bølger); Flipping Physics er lærebogsagtig og AP-orienteret, men dækker samme stof.

## 1. Enheder og vektorer

**Tid:** ca. 3 t. **Eksamensvægt:** med (fundament; vektorfejl ødelægger alt senere, men sjældent en hel opgave i sig selv).

### Enheder, dimensioner og estimater

**Skal kunne:**
- **SI-enheder** og afledte enheder (N, J, W, Pa)
- **Dimensionsanalyse** som fejltjek af en formel
- Signifikante cifre og størrelsesordensestimat
- Se Begreber: [[Courses/Physics/Begreber|Enheder og SI-system]]

**Lær det her (i prioriteret rækkefølge):**
- [The Organic Chemistry Tutor: SI-enheder](https://www.youtube.com/watch?v=8rZRYPoerPw)
- [The Organic Chemistry Tutor: dimensionsanalyse](https://www.youtube.com/watch?v=vWovdihteqs)
- [OpenStax Vol. 1 kap. 1 (Units and Measurement)](https://openstax.org/books/university-physics-volume-1/pages/1-introduction)

**Øv:** Tjek enheder på 10 formler; omregn km/t, g/cm³.

### Vektorer, komponenter og addition

**Skal kunne:**
- **Skalar vs. vektor**; størrelse og retning
- **Komponentopløsning**: Aₓ = A cosθ, A_y = A sinθ
- **Vektoraddition** komponentvis, enhedsvektorer î ĵ
- **Prik- og krydsprodukt** (prik: projektion/arbejde; kryds: moment)
- Se [[Reference/Formelsamling/Vektorer|Vektorer]] og [[Reference/Formelsamling/Geometri og trigonometri|Geometri og trigonometri]]

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: intro til vektorer](https://www.youtube.com/watch?v=tCwlAiI_Hck)
- ★ [Jitty: vinkler og komponenter](https://www.youtube.com/watch?v=J3szwa-y3sQ)
- ★ [Jitty: projektioner og skalarer](https://www.youtube.com/watch?v=PoREb6My1O4)
- [Flipping Physics: vektorkomponenter](https://www.youtube.com/watch?v=Hjc8WwqqF6s)
- [OpenStax Vol. 1 kap. 2 (Vectors)](https://openstax.org/books/university-physics-volume-1/pages/2-introduction)

**Øv:** 10 komponent-/additionsopgaver; to af dem i 3D.

### Mestringstjekliste: Enheder og vektorer
- [ ] Jeg opløser og adderer vektorer uden at tegne forkert vinkel
- [ ] Jeg bruger enheder som fejltjek på hvert slutresultat

## 2. Kinematik i 1D og 2D

**Tid:** ca. 5 t. **Eksamensvægt:** høj (fundamentet for enhver mekanikopgave; kommer også ind via projektil og cirkelbevægelse).

### Bevægelse langs en linje

**Skal kunne:**
- **Position, forskydning, hastighed, acceleration** (se [[Courses/Physics/Begreber|Begreber]])
- **Middel vs. øjeblikkelig**: v = dx/dt, a = dv/dt
- **Konstant acceleration**: v = v₀ + at, x = x₀ + v₀t + ½at², v² = v₀² + 2aΔx
- Fritfald (a = g ≈ 9,82 m/s²); aflæs x(t)- og v(t)-grafer

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: kinematiske ligninger](https://www.youtube.com/watch?v=ZKZ6xkryxZ4)
- ★ [Jitty: middelhastighed og middelacceleration](https://www.youtube.com/watch?v=Evf0tDWmpDA)
- [Flipping Physics: kinematik-review](https://www.youtube.com/watch?v=qP-9wwRrJbg)
- [OpenStax Vol. 1 kap. 3 (Motion Along a Straight Line)](https://openstax.org/books/university-physics-volume-1/pages/3-introduction)

**Øv:** 10 opgaver: 4 med ligninger, 3 med grafer, 3 med fritfald.

### Projektilbevægelse og relativ bevægelse

**Skal kunne:**
- **Uafhængige komponenter**: vandret a = 0, lodret a = −g
- Rækkevidde, maks. højde, flyvetid; skråt kast
- **Relativ hastighed** i to dimensioner

**Lær det her (i prioriteret rækkefølge):**
- [Flipping Physics: intro til projektilbevægelse](https://www.youtube.com/watch?v=GiiWsXtt5GE)
- [Flipping Physics: udled rækkeviddeformlen](https://www.youtube.com/watch?v=zr4lNTxI0FM)
- [The Organic Chemistry Tutor: projektil: formler og opgaver](https://www.youtube.com/watch?v=8NLzuURxFwY)
- [OpenStax Vol. 1 kap. 4 (Motion in Two and Three Dimensions)](https://openstax.org/books/university-physics-volume-1/pages/4-introduction)

**Øv:** 6 kast-opgaver inkl. fra højde og med vinkel.

### Mestringstjekliste: Kinematik i 1D og 2D
- [ ] Jeg vælger den rigtige kinematikligning ud fra hvad der er givet
- [ ] Jeg deler projektilbevægelse i x og y
- [ ] Jeg aflæser og tegner v(t) ud fra x(t)

## 3. Newtons love og kræfter

**Tid:** ca. 7 t. **Eksamensvægt:** høj (den mest brugte metode i faget; fylder typisk flere opgaver).

### Newtons tre love og frit-legeme-diagrammer

**Skal kunne:**
- **N1** (inerti), **N2: ΣF = ma**, **N3** (aktion-reaktion)
- **Frit-legeme-diagram**: tegn alle kræfter, vælg akser, opstil ΣF pr. akse
- **Normalkraft, tyngdekraft (W = mg), snorkraft**
- Systemer med remskive og flere legemer

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: Newtons love simpelt](https://www.youtube.com/watch?v=PMlZ4HuFGFc)
- ★ [Jitty: normalkraft](https://www.youtube.com/watch?v=nzpBYzqe0OE)
- [Flipping Physics: frit-legeme-diagram](https://www.youtube.com/watch?v=29YPIvj1zjc)
- [Flipping Physics: 5 trin til FBD-opgaver](https://www.youtube.com/watch?v=pA9Uc_rJNiA)
- [The Organic Chemistry Tutor: Newtons love, lang gennemgang](https://www.youtube.com/watch?v=g550H4e5FCY)
- [OpenStax Vol. 1 kap. 5 (Newton's Laws of Motion)](https://openstax.org/books/university-physics-volume-1/pages/5-introduction)

**Øv:** 10 FBD-opgaver; start med at tegne FBD *før* du ser på tal.

### Friktion, skråplan og cirkelbevægelse

**Skal kunne:**
- **Statisk og kinetisk friktion**: f ≤ μₛN, f = μₖN
- **Skråplan**: opløs tyngdekraft langs/vinkelret på planet
- **Centripetalacceleration a = v²/r**, centripetalkraft er *resultanten* ikke en ny kraft
- Vandret/lodret cirkel og banked curve

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: friktion med FBD](https://www.youtube.com/watch?v=hpzhq2zvgbk)
- ★ [Jitty: skråplan med FBD](https://www.youtube.com/watch?v=r7bI1BVHWFg)
- ★ [Jitty: lodret cirkelbevægelse](https://www.youtube.com/watch?v=4xfViDT5cCM)
- [Flipping Physics: centripetalacceleration](https://www.youtube.com/watch?v=RHmrcxQCbwg)
- [The Organic Chemistry Tutor: friktion, snor og skråplan, lange øvelser](https://www.youtube.com/watch?v=pL2YfC-22Uc)
- [OpenStax Vol. 1 kap. 6 (Applications of Newton's Laws)](https://openstax.org/books/university-physics-volume-1/pages/6-introduction)

**Øv:** 8 skråplan-/friktionsopgaver og 4 cirkelbevægelser.

### Mestringstjekliste: Newtons love og kræfter
- [ ] Jeg tegner korrekt FBD og opstiller ΣF=ma på hver akse
- [ ] Jeg løser et skråplan med friktion
- [ ] Jeg identificerer hvilken kraft der leverer centripetalkraften

## 4. Arbejde, energi og effekt

**Tid:** ca. 5 t. **Eksamensvægt:** høj (genvej der erstatter kraftregning; næsten altid en opgave).

### Arbejde og kinetisk energi

**Skal kunne:**
- **Arbejde W = F·d·cosθ** (prikprodukt), W = ∫F dx for variabel kraft
- **Arbejde-energi-sætningen**: W_net = ΔK = ½mv² − ½mv₀²
- **Effekt P = W/t = F·v**
- Fjederarbejde W = ½kx²

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: arbejde-energi-sætningen med opgaver](https://www.youtube.com/watch?v=LVDoPm5Qd6s)
- ★ [Jitty: effekt med eksempler](https://www.youtube.com/watch?v=nTlTL8njUKk)
- [Flipping Physics: arbejde, energi, effekt, review](https://www.youtube.com/watch?v=dyueNvRuxic)
- [OpenStax Vol. 1 kap. 7 (Work and Kinetic Energy)](https://openstax.org/books/university-physics-volume-1/pages/7-introduction)

**Øv:** 8 opgaver inkl. variabel kraft (integrale) og fjeder.

### Potentiel energi og energibevarelse

**Skal kunne:**
- **Konservative kræfter** og potentiel energi U = mgh, U = ½kx²
- **Bevarelse af mekanisk energi** K + U = konstant
- Med ikke-konservative kræfter: K₁ + U₁ + W_nc = K₂ + U₂
- Energidiagrammer

**Lær det her (i prioriteret rækkefølge):**
- [Flipping Physics: bevarelse af mekanisk energi](https://www.youtube.com/watch?v=AnuLW0ZX7-Q)
- [Flipping Physics: opgave med friktion, skråplan og fjeder](https://www.youtube.com/watch?v=-K5d97U7FwQ)
- [OpenStax Vol. 1 kap. 8 (Potential Energy and Conservation of Energy)](https://openstax.org/books/university-physics-volume-1/pages/8-introduction)

**Øv:** 8 energi-opgaver; løs samme opgave med N2 og med energi for at mærke genvejen.

### Mestringstjekliste: Arbejde, energi og effekt
- [ ] Jeg vælger energi i stedet for kræfter når farten ønskes ud fra højde
- [ ] Jeg bruger W_nc korrekt med friktion
- [ ] Jeg regner effekt både som W/t og F·v

## 5. Impuls og kollisioner

**Tid:** ca. 4 t. **Eksamensvægt:** høj (nævnt i Begreber, bevarelseslov og typisk kollisionsopgave).

### Impuls og impulsbevarelse

**Skal kunne:**
- **Impuls p = mv**, stød J = FΔt = Δp
- **Bevarelse af impuls** i lukket system
- **Massemidtpunkt**

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: lineær impuls og stød](https://www.youtube.com/watch?v=5oH3cRGhZ8I)
- [Flipping Physics: stødkraft og impuls](https://www.youtube.com/watch?v=pOuqsUiNI_0)
- [Flipping Physics: massemidtpunkt](https://www.youtube.com/watch?v=nyJeaUe7wXM)
- [OpenStax Vol. 1 kap. 9 (Linear Momentum and Collisions)](https://openstax.org/books/university-physics-volume-1/pages/9-introduction)

**Øv:** 6 opgaver inkl. rekyl og stød.

### Kollisioner (elastiske og uelastiske)

**Skal kunne:**
- **Elastisk**: p og K bevares
- **Fuldstændig uelastisk**: legemerne hænger sammen, kun p bevares
- Kollisioner i 2D: p bevares per komponent
- Ballistisk pendul (impuls, så energi)

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: elastiske/uelastiske kollisioner og bevarelse](https://www.youtube.com/watch?v=Qtvkz9UvNok)
- [Flipping Physics: intro til kollisioner](https://www.youtube.com/watch?v=53nDh4_GhA8)
- [The Organic Chemistry Tutor: 2D-kollisioner](https://www.youtube.com/watch?v=9YRgHikdcqs)
- [Flipping Physics: impuls review](https://www.youtube.com/watch?v=ufXw3CgzJCk)

**Øv:** 6 kollisionsopgaver; sørg for at skelne hvilken størrelse der bevares.

### Mestringstjekliste: Impuls og kollisioner
- [ ] Jeg afgør om en kollision er elastisk ud fra tallene
- [ ] Jeg løser et ballistisk pendul i to trin

## 6. Rotation og kraftmoment

**Tid:** ca. 6 t. **Eksamensvægt:** med (antaget pensum; svær men ofte én opgave, hvis med).

### Vinkelkinematik, moment og inertimoment

**Skal kunne:**
- **Vinkelposition, ω, α** og ligninger parallelle med lineær kinematik
- **Kraftmoment τ = r × F**, **inertimoment I = Σmr²**
- **N2 for rotation: Στ = Iα**
- Rotationsenergi K = ½Iω², rullende uden at glide

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: vinkelkinematik](https://www.youtube.com/watch?v=KlbCWC69bxg)
- ★ [Jitty: kraftmoment](https://www.youtube.com/watch?v=ypU9YfBtyEQ)
- ★ [Jitty: inertimoment og rotationsenergi](https://www.youtube.com/watch?v=zcdGVLQjgkU)
- ★ [Jitty: N2 for rotation](https://www.youtube.com/watch?v=fNFQ43sMmBk)
- [Flipping Physics: kraftmoment intro](https://www.youtube.com/watch?v=Tu6e9_SrzBA)
- [OpenStax Vol. 1 kap. 10 (Fixed-Axis Rotation)](https://openstax.org/books/university-physics-volume-1/pages/10-introduction)

**Øv:** 6 opgaver: 2 moment, 2 Στ=Iα, 2 rullende legemer.

### Impulsmoment og statisk ligevægt

**Skal kunne:**
- **Impulsmoment L = Iω**, bevares uden ydre moment
- Statisk ligevægt: ΣF = 0 og Στ = 0
- Vælg drejepunkt der eliminerer ukendte

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: vælg drejepunkt, moment og kraftsystemer](https://www.youtube.com/watch?v=QnNCUxOOK8Q)
- [Flipping Physics: bevarelse af impulsmoment](https://www.youtube.com/watch?v=oGzQflqf1VA)
- [OpenStax Vol. 1 kap. 11 (Angular Momentum)](https://openstax.org/books/university-physics-volume-1/pages/11-introduction)

**Øv:** 4 ligevægtsopgaver (stige, bjælke) og 2 impulsmoment.

### Mestringstjekliste: Rotation og kraftmoment
- [ ] Jeg opstiller Στ=Iα og ΣF=ma for samme legeme
- [ ] Jeg løser en statisk ligevægtsopgave med drejepunkt

## 7. Gravitation

**Tid:** ca. 2 t. **Eksamensvægt:** med (antaget pensum; formelbaseret og kort).

### Newtons gravitationslov og baner

**Skal kunne:**
- **F = Gm₁m₂/r²**, g(r)
- **Gravitationel potentiel energi U = −GMm/r**, flugthastighed
- **Keplers love**, cirkelbaner v = √(GM/r)

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: gravitationsloven og baneformler](https://www.youtube.com/watch?v=i_KcEhl6Auk)
- ★ [Jitty: gravitationel potentiel energi](https://www.youtube.com/watch?v=onLddPnrCAM)
- ★ [Jitty: energier i baner](https://www.youtube.com/watch?v=9oVSQGVlrIM)
- [Flipping Physics: gravitation review](https://www.youtube.com/watch?v=Bqly7yhFLKE)
- [OpenStax Vol. 1 kap. 13 (Gravitation)](https://openstax.org/books/university-physics-volume-1/pages/13-introduction)

**Øv:** 5 opgaver: kraft, bane, flugthastighed.

### Mestringstjekliste: Gravitation
- [ ] Jeg skelner mellem mgh og −GMm/r
- [ ] Jeg finder omløbstid og hastighed for cirkelbane

## 8. Svingninger og bølger

**Tid:** ca. 4 t. **Eksamensvægt:** med (antaget pensum; kort sluttopgave hvis med).

### Harmonisk svingning

**Skal kunne:**
- **x(t) = A cos(ωt + φ)**, ω = √(k/m), T = 2π/ω
- Pendul: T = 2π√(L/g) for små udsving
- Energi i SHM: K og U veksler, E = ½kA²

**Lær det her (i prioriteret rækkefølge):**
- ★ [Jitty: SHM, fjedre, pendler, vinkelfrekvens](https://www.youtube.com/watch?v=QqwSRJD5Yvk)
- ★ [Jitty: faseforskydning](https://www.youtube.com/watch?v=GSYgyWg6XAI)
- ★ [Jitty: energi i SHM](https://www.youtube.com/watch?v=bzxIDCzpId4)
- ★ [Jitty: simpelt pendul](https://www.youtube.com/watch?v=jn3mCBLLxZ4)
- [Flipping Physics: oscillationer review](https://www.youtube.com/watch?v=wgEyKvMN2ME)
- [OpenStax Vol. 1 kap. 15 (Oscillations)](https://openstax.org/books/university-physics-volume-1/pages/15-introduction)

**Øv:** 6 opgaver: ω, T, x(t) og energi.

### Bølger

**Skal kunne:**
- **v = fλ**, bølgefunktion y(x,t)
- **Superposition og stående bølger** (grundtone, overtoner)
- Intensitet og lyd (kun hvis i pensum)

**Lær det her (i prioriteret rækkefølge):**
- [Flipping Physics: intro til bølger](https://www.youtube.com/watch?v=drOnyIIe5Eg)
- [Flipping Physics: superposition](https://www.youtube.com/watch?v=JUCLoczzwPo)
- [Flipping Physics: stående bølger](https://www.youtube.com/watch?v=DUPLRe5PHvE)
- [OpenStax Vol. 1 kap. 16 (Waves)](https://openstax.org/books/university-physics-volume-1/pages/16-introduction)

**Øv:** 4 opgaver om stående bølger i streng/rør.

### Mestringstjekliste: Svingninger og bølger
- [ ] Jeg skriver x(t) ud fra A, T og startfase
- [ ] Jeg finder frekvenser for stående bølger

## 9. Fluider

**Tid:** ca. 2 t. **Eksamensvægt:** lav (antaget pensum; ofte udeladt eller kort opgave).

### Tryk, opdrift og Bernoulli

**Skal kunne:**
- **Tryk P = F/A, P = P₀ + ρgh**
- **Archimedes' lov** F_opdrift = ρVg
- **Kontinuitet** A₁v₁ = A₂v₂ og **Bernoulli**

**Lær det her (i prioriteret rækkefølge):**
- [Flipping Physics: fluider review](https://www.youtube.com/watch?v=C9JgVBg7L7Q)
- [Flipping Physics: opdrift](https://www.youtube.com/watch?v=OUEhQhNbFZE)
- [Flipping Physics: Bernoulli udledt](https://www.youtube.com/watch?v=f3ln4aq44u0)
- [OpenStax Vol. 1 kap. 14 (Fluid Mechanics)](https://openstax.org/books/university-physics-volume-1/pages/14-introduction)

**Øv:** 4 opgaver: opdrift og Bernoulli.

### Mestringstjekliste: Fluider
- [ ] Jeg bruger P=P₀+ρgh og opdrift rigtigt
- [ ] Jeg anvender Bernoulli mellem to punkter

## 10. Termodynamik (antaget)

**Tid:** ca. 3 t. **Eksamensvægt:** lav (usikkert om med; hvis kemi-kurset dækker det, er det overlap).

*Overlap med [[Courses/Chemistry/Begreber|Chemistry]]; spring over hvis pensum ikke nævner det.*

### Temperatur, ideal gas og hovedsætninger

**Skal kunne:**
- **Idealgasloven** PV = nRT = NkT
- **Kinetisk gasteori**: ½mv̄² = (3/2)kT
- **Første hovedsætning** ΔU = Q − W; **2. hovedsætning** (entropi, virkningsgrad)

**Lær det her (i prioriteret rækkefølge):**
- [Professor Dave Explains: kinetisk gasteori og idealgasloven](https://www.youtube.com/watch?v=robEY-idcLU)
- [Professor Dave Explains: 2. hovedsætning](https://www.youtube.com/watch?v=MrwW4w2nAMc)
- [The Organic Chemistry Tutor: idealgasloven med Boltzmann](https://www.youtube.com/watch?v=LZUs6nawHAk)
- [OpenStax Vol. 2 kap. 2 (Kinetic Theory of Gases)](https://openstax.org/books/university-physics-volume-2/pages/2-introduction)
- [OpenStax Vol. 2 kap. 3 (First Law)](https://openstax.org/books/university-physics-volume-2/pages/3-introduction)

**Øv:** 4 opgaver: PV=nRT og arbejde i p-V-diagram.

### Mestringstjekliste: Termodynamik (antaget)
- [ ] Jeg løser adiabatisk/isoterm arbejde fra p-V-diagram

## 11. Elektricitet og magnetisme (antaget)

**Tid:** ca. 6 t. **Eksamensvægt:** lav (usikkert om med; mange kurser kører el/mag som egen fysik 2).

*Ingen af vaultens fysiknoter nævner elektricitet; dette emne er helt antaget.*

### Elektrostatik og potentiale

**Skal kunne:**
- **Coulombs lov** F = kq₁q₂/r²
- **Elektrisk felt** E = F/q, feltlinjer
- **Elektrisk potentiale** V og potentiel energi U = qV

**Lær det her (i prioriteret rækkefølge):**
- [Flipping Physics: Coulombs lov](https://www.youtube.com/watch?v=4ubqby1Id4g)
- [Flipping Physics: elektriske felter](https://www.youtube.com/watch?v=nQXFueA1sMY)
- [Flipping Physics: elektrisk potentiale](https://www.youtube.com/watch?v=hMoMw3NzCr8)
- [OpenStax Vol. 2 kap. 5 (Electric Charges and Fields)](https://openstax.org/books/university-physics-volume-2/pages/5-introduction)
- [OpenStax Vol. 2 kap. 7 (Electric Potential)](https://openstax.org/books/university-physics-volume-2/pages/7-introduction)

**Øv:** 6 opgaver: kraft/felt fra punktladninger.

### Kredsløb og magnetisme

**Skal kunne:**
- **Ohms lov** V = IR, effekt P = IV
- Serie/parallel; Kirchhoffs love
- **Magnetisk kraft** F = qv×B, Biot-Savart (overblik)

**Lær det her (i prioriteret rækkefølge):**
- [Flipping Physics: modstand og Ohms lov](https://www.youtube.com/watch?v=HKPMK4nuCLA)
- [Flipping Physics: elektricitet review](https://www.youtube.com/watch?v=tJDb5wP2vAM)
- [Flipping Physics: magnetfelter og kræfter](https://www.youtube.com/watch?v=URPKNQ69XdA)
- [Professor Dave Explains: magneter og magnetfelter](https://www.youtube.com/watch?v=IgtIdttfGVw)

**Øv:** 6 kredsløbsopgaver og 3 magnetkraftopgaver.

### Mestringstjekliste: Elektricitet og magnetisme (antaget)
- [ ] Jeg beregner felt og kraft fra flere punktladninger
- [ ] Jeg reducerer et kredsløb med serie og parallel

## Links
- [[Physics]]
- [[Courses/Physics/Begreber|Begreber]]
- [[Courses/Physics/Pensum|Pensum]]
- [[Formelsamling/Fysik|Formelsamling Fysik]]
- [[Reference/Formelsamling/Oversigt|Formelsamling oversigt]]
- [[Reference/Formelsamling/Vektorer|Vektorer]]
- [[Study-Roadmap|Studieoversigt]]
- [[Exam-Prep|Eksamensforberedelse]]
