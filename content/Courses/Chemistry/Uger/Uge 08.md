---
publish: true
title: "Chemistry uge 8: Kinetik og ligevægt"
course: Chemistry
type: week
week: 8
tags:
  - chemistry
  - ugenote
---

# Uge 8: Kinetik og ligevægt

> Kilde: DTU Learn 26020, Week 8: "Lecture 7 - post-lecture copy.pdf" (forelæsning 26. oktober 2026; pre-lecture-versionen er ikke læst). Bog: OpenStax Chemistry 2e, kapitel 12 (Kinetics) og 13 (Fundamental Equilibrium Concepts). Pre-lecture-versionen "Lecture 7 - pre-lecture copy.pdf" er læst og sammenlignet. Meddelelserne er læst. Additional Questions Week 08 (quiz) er ikke åbnet.

## Emner

- Reaktionshastighed og hastighedslove (rate laws)
- Metoden med begyndelseshastigheder, første ordens integreret lov
- Aktiveringsenergi og Arrhenius
- Reaktionsmekanismer og katalyse
- Ligevægtskonstant $K$, reaktionskvotient $Q$, Le Châtelier

## Begreber

Slides' sætning: termodynamik siger om det sker, kinetik hvor hurtigt, ligevægt hvor langt.

**Hastighed.** For $aA + bB \to cC + dD$ er $r = -\tfrac1a\tfrac{\Delta[A]}{\Delta t} = \tfrac1c\tfrac{\Delta[C]}{\Delta t}$. Hastigheden afhænger af overfladeareal, koncentration, temperatur, katalysator og stoffernes natur.

**Hastighedslov.** $r = k[A]^m[B]^n$, ordenen er $m+n$ og må bestemmes eksperimentelt (ikke aflæses af den afstemte ligning). $k$ afhænger af temperaturen, ikke koncentrationen, og dens enhed afhænger af ordenen. Begyndelseshastigheder, slides: $[A]$ fordobles giver dobbelt hastighed (1. orden i A), $[B]$ fordobles giver firedobbelt (2. orden i B), så $r = k[A][B]^2$. Egen udregning af $k$ fra forsøg 1: $k = 2{,}0\times10^{-3}/(0{,}10\cdot0{,}10^2) = 2{,}0\ \mathrm{L^2\,mol^{-2}\,s^{-1}}$; forsøg 2 og 3 giver samme værdi.

**Første orden, integreret.** $\ln[A]_t = \ln[A]_0 - kt$, dvs. $[A]_t = [A]_0e^{-kt}$, og halveringstid $t_{1/2} = \ln2/k$. Slides (koffein, halveringstid 5 h): $k = \ln2/(5\cdot3600) = 3{,}85\times10^{-5}\ \mathrm{s^{-1}}$ (kontrolleret). Efter 15 h (tre halveringstider) er $(\tfrac12)^3 = 12{,}5\,\%$ tilbage.

**Arrhenius.** $k = Ae^{-E_a/RT}$, $\ln k = -\dfrac{E_a}{R}\dfrac1T+\ln A$, og $\ln\dfrac{k_2}{k_1} = -\dfrac{E_a}{R}\left(\dfrac1{T_2}-\dfrac1{T_1}\right)$. Slides' datasæt (280 til 320 K): $E_a = 3{,}96/0{,}000446\cdot8{,}314\approx 74$ kJ/mol. Egen udregning (mælk, se uge 9): 10 gange hurtigere ved 22 °C end 4 °C giver $E_a = 8{,}314\cdot\ln10/(1/277{,}15-1/295{,}15) = 87$ kJ/mol.

**Mekanismer.** Hastighedsloven følger det langsomste trin (rate-limiting step). Slides: $\mathrm{NO_2 + CO \to NO + CO_2}$ har $r=k[\mathrm{NO_2}]^2$ fordi første trin $\mathrm{2\,NO_2 \to NO_3 + NO}$ er langsomt, og $\mathrm{NO_3}$ er et intermediat. Katalysator: lavere $E_a$, ens $\Delta H$, ændrer ikke ligevægten.

**Ligevægt.** For $aA+bB\rightleftharpoons cC+dD$ er $K = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$. $K\gg1$ favoriserer produkter. Ligevægt betyder ens hastigheder frem og tilbage, ikke ens koncentrationer og ikke stilstand. Slides: $\mathrm{H_2 + I_2 \rightleftharpoons 2\,HI}$, $K=50{,}5$ ved 448 °C, start 1,00 M af hver: $\dfrac{(2x)^2}{(1-x)^2}=50{,}5$, tag kvadratrod: $\dfrac{2x}{1-x}=7{,}106$, $x=0{,}780$. Ligevægt: $[\mathrm{H_2}]=[\mathrm{I_2}]=0{,}220$ M, $[\mathrm{HI}]=1{,}56$ M.

**$Q$ og Le Châtelier.** $Q$ har samme form som $K$ men bruger aktuelle koncentrationer; systemet bevæger sig så $Q\to K$. Eksempel (egen): $[\mathrm{H_2}]=[\mathrm{I_2}]=0{,}50$, $[\mathrm{HI}]=2{,}0$ giver $Q=2{,}0^2/0{,}50^2=16<50{,}5$, så reaktionen går mod produkter. Slides' regneark: tilføj reaktant giver skift mod produkter ($K$ uændret); komprimering skifter mod færre mol gas; en inert gas ved konstant volumen gør intet; kun temperatur ændrer $K$ (endoterm: $K$ vokser ved opvarmning); katalysator ændrer ikke ligevægten. Haber-Bosch: $\mathrm{N_2+3\,H_2\rightleftharpoons2\,NH_3}$, $\Delta H^\circ=-92$ kJ/mol; lav temperatur og højt tryk giver højt udbytte, men i praksis 400 til 500 °C og 150 til 300 bar over jernkatalysator for at få hastighed.

**Pre-lecture mod post-lecture og meddelelser.** Pre-lecture har 34 sider, post-lecture 46. Post-lecture har bl.a. et plot af resultatet af ligevægtsdemonstrationen, som klassen deltog i (meddelelse 26. oktober). Rettelse fra meddelelse 26. oktober: Q11 i Exercises_Week_08 kan være svær, fordi opløselighedstabellen fra kapitel 4 kun nævnes kort; brug Table 4.1 (side 163) i bogen til den opgave. "Additional Questions Week 08" er en quiz med ekstra spørgsmål fra OpenStax kapitel 10 og 11 (ikke åbnet).

### Model: Arrhenius energibarriere og katalysatormodel

Kemiske reaktioner sker ved molekylære sammenstød (kollisionsteori). For at et stød fører til reaktion, kræves:
1. Korrekt geometrisk orientering.
2. Tilstrækkelig kinetisk energi til at overvinde aktiveringsenergien $E_a$.

```
Potentiel energi
  ^
  |             * Transition State (aktiveret kompleks)
  |            / \
  |           /   \   Uden katalysator (høj E_a)
  |          / *   \
  |         / / \   \ Med katalysator (lavere E_a')
  |  Reaktanter      \
  |  ---------        \
  |                    Produkter
  |                    ---------
--+----------------------------------------------> Reaktionskoordinat
```

**Katalysatorens virkemåde:**
En katalysator ændrer **ikke** reaktionsentalpien $\Delta H^\circ$ eller ligevægtskonstanten $K$. Den tilvejebringer derimod en alternativ reaktionsvej med lavere aktiveringsenergi $E_a'$, hvilket øger hastighedskonstanten $k$ eksponentielt jf. Arrhenius:

$$k = A e^{-\frac{E_a}{RT}}.$$

## Opgaver

- Exercises_Week_08 (quiz på DTU Learn, ikke åbnet)
- Additional Questions Week 08 (quiz på DTU Learn, ikke åbnet)
- Slides, "Think about these problems before next class": Problem 1 (hvor længe holder mælk: åbnet mælk holder 10 dage ved 4 °C og 1 dag ved 22 °C, find $E_a$ og holdbarhed i bil ved 30 °C) og et Problem 2 om $\mathrm{N_2O_4\rightleftharpoons2\,NO_2}$ (endoterm) i et lukket rør flyttet til isvand: hvad sker der med farve og $K$. Løsningerne står i uge 9.
- Ingen bogopgaver med nummer er angivet.

## Gamle eksamensspørgsmål om dette emne

Numrene refererer til de to gamle eksamenssæt på Learn (efterår 2024 og forår 2025, se Uge 13). Efterår 2024 er læst ved OCR af en scannet PDF, og numrene følger rækkefølgen i filen.

- Efterår 2024: spm. 13 (reaktionsorden ud fra koncentration mod tid), spm. 15 (ligevægtskonstant ud fra partialtryk). Spm. 18 (pH i mættet Mg(OH)$_2$) bruger opløselighedsprodukt, som jeg ikke har set i de læste slides.
- Forår 2025: spm. 4 (katalysators virkning), spm. 14 (tryk og ligevægt), spm. 18 (hastighedslov ud fra tabel). Spm. 12 (udfældning, $K_{sp}$) og 24 (molær opløselighed, $K_{sp}$) bruger også opløselighedsprodukt.

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
