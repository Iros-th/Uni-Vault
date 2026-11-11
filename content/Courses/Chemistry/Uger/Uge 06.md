---
publish: true
title: "Chemistry uge 6: Anvendelsesforelæsning 1 (polymerer, beregningskemi, DNA)"
course: Chemistry
type: week
week: 6
tags:
  - chemistry
  - ugenote
---

# Uge 6: Anvendelsesforelæsning 1 (polymerer, beregningskemi, DNA)

> Kilde: DTU Learn 26020, uge 6: "class6_Application_PE.pdf" (polyethylen), "JJE_Chemistry_on_computers.pdf" (Janus Juul Eriksen, 9 slides) og "KGA_2026 lecture poly.pdf" (Kira Gerber Astakhova, nukleinsyrer og sekvensering), kursusplanen og kursusmeddelelserne. Tre gif-filer (Diels-Alder, nukleofil aromatisk substitution, IR-spektrum af sukrose) er ikke medtaget. Kursusplanen: mandag 5. oktober 2026, kl. 8.00 øvelse om forelæsning 5, kl. 10.00 biokemi, polymerer og beregningskemi. Ugen er en anvendelsesforelæsning uden nyt bogkapitel.

## Emner

Anvendelsesforelæsning: kursusbeskrivelsen angiver ikke stoffet som pensum (ikke pensum, læses selv). Eksamenssættene har ét spørgsmål herfra (PET, spm. 16 i efterår 2024); polymerer og kondensation er også pensum via uge 12.

- Polyethylen (PE): syntese, tværbinding, størkningsmekanismer, mekaniske egenskaber
- Beregningskemi: hvad en computer kan regne på molekyler
- Nukleinsyrer: nukleosider, DNA-sekvensering, oligonukleotid-lægemidler

## Begreber

**Polymerer og polyethylen.** Polymerer er kæder af gentagne enheder (monomerer). PE laves ved additionspolymerisation, mest med frie radikaler: $n\,\mathrm{H_2C{=}CH_2} \to (\mathrm{CH_2CH_2})_n$. Egen udregning: UHMWPE med $M\approx4\times10^6$ g/mol (slides) svarer til $4\times10^6/28{,}05 \approx 1{,}4\times10^5$ ethylenenheder pr. kæde.

**Tværbundet PE (PEX), varmekrympeslange.** Demonstrationen: ved stuetemperatur et fleksibelt fast stof, ved $-196$ °C stift, ved ca. 150 °C gummiagtigt. Slangen laves og tværbindes i den sammentrukne form, udvides, og den udvidede form "låses" ved afkøling. Opvarmning trækker den sammen igen. Tre størkningsmekanismer fra slides: glasdannelse (for PEX ca. $-110$ °C, bruges ikke), krystallisation (ca. 120 °C, fastholder den strakte form) og tværbindinger (bestemmer ligevægtsformen). Tværbinding sker med en radikalstarter, fx benzoylperoxid; i PE er tværbinding ca. 4 gange mere sandsynlig end kædebrud.

**Kæder, smelter og viskositet.** Frie bindingsrotationer giver tilfældige nøgler: afstanden mellem kædeender er $r = d\sqrt{N}$ (random walk). Egen udregning: $N = 10^4$ enheder med $d = 0{,}15$ nm giver $r = 15$ nm, langt mindre end kædens fulde længde (1,5 µm). I en smelte (over $T_g$ og $T_m$) bevæger kæder sig slangeagtigt i et "rør" af andre kæder (reptation). Silly putty (PDMS) flyder langsomt men preller hurtigt, fordi udfiltring tager lang tid i forhold til slagtiden.

**Stivhed.** Hookes lov: $\sigma = E\varepsilon$ med $\sigma = F/A$ og $\varepsilon = (l-l_0)/l_0$; $E$ er Youngs modul. Slides: stål ca. 200 GPa, de fleste faste polymerer ca. 1 GPa. Egen udregning: 10 N på 1 mm$^2$ er $\sigma = 10$ MPa; med $E=1$ GPa er $\varepsilon = 0{,}01$ (1 %). UHMWPE-fibre har $E\approx150$ GPa (densitet 0,97 g/cm$^3$), fordi krystallerne er rettet langs fiberen; krystallen er anisotrop ($E_\parallel \approx 240$ GPa, $E_\perp \approx 3$ til $9$ GPa).

**Beregningskemi.** Slides: man beregner energien af molekyler og materialer ved at løse den elektroniske Schrödinger-ligning numerisk i videnskabelig software; andre egenskaber fås som afledede af energien (fx IR-spektre). Pointen er at kemikere i stigende grad har brug for programmering og maskinlæring (robotter, autonom syntese, generativ AI til materialedesign).

**Nukleosider og DNA.** Et nukleosid er base + sukker (2'-deoxyribose i DNA). Helixen holdes af stacking (π-stacking, hydrofobe effekter) og Watson-Crick-hydrogenbindinger. Kools forsøg viste at ikke-hydrogenbundne formlignende baser stadig kan danne stabile par, så H-bindinger er ikke den eneste faktor. Illumina-sekvensering bruger nukleotider med farvestof og reversibel blokering: byg ind, aflæs farve, fraspalt, gentag. Syntese af oligonukleotider sker fast-fase i cyklus: deblok, kobl (phosphoramidit), cap, oxidér. Anvendelser: ASO, siRNA, aptamerer. Slidens pointe: flaskehalsen er i stigende grad levering til de rigtige celler.

**Praktisk.** Mandag 5. oktober startede forelæsningen kl. 10.00 i stedet for 10.15, med pause omkring 10.40. Midtvejsevalueringen er en anonym survey under Activities, Surveys på Learn (åben til 19. oktober).

### Model: Polymerstruktur og krystallinitet (LDPE vs. HDPE) (supplerende illustration, ikke fra slides), ikke pensum

Mekaniske egenskaber i polymerer bestemmes direkte af kædernes forgrening og evne til at pakke tæt:

```text
LDPE (Low-Density Polyethylene):
  Mange sideforgreninger forhindrer tæt pakning -> stor amorf fraktion.
   ~~~~/\/\~~~~~/\/\~~~~
        \           \
         \/\/\       \/\/\~
  - Massefylde: ca. 0,91 - 0,94 g/cm³
  - Krystallinitet: 40 - 50 %
  - Egenskaber: Blød, fleksibel, lavere smeltepunkt (f.eks. bæreposer, plastfilm).

HDPE (High-Density Polyethylene):
  Lineære kæder uden nævneværdige forgreninger -> pakker tæt i krystallitter.
   ═════════════════════
   ═════════════════════  <-- Tæt krystalgitter, stærke Van der Waals-kræfter
   ═════════════════════
  - Massefylde: ca. 0,94 - 0,97 g/cm³
  - Krystallinitet: 70 - 80 %
  - Egenskaber: Stiv, hård, højere smeltepunkt (f.eks. mælkekander, vandrør).
```

### Biokemisk model: Watson-Crick baseparring i DNA (supplerende illustration, ikke fra slides), ikke pensum

DNA-dobbeltstrenget stabiliseres af to komplementære hydrogenbindingsmønstre:

```text
Adenin (A) = Thymin (T)                Guanin (G) ≡ Cytosin (C)
  2 hydrogenbindinger                    3 hydrogenbindinger

      [ A ]                                  [ G ]
      :   :  (2 x H-bånd)                    :   :   :  (3 x H-bånd)
      [ T ]                                  [ C ]

  Konsekvens for stabilitet:
  Sekvenser med højt GC-indhold kræver væsentligt højere temperatur (højere Tm)
  for at denaturere/smelte fra hinanden, fordi 3 H-bindinger binder stærkere end 2.
```

## Opgaver

- Exercises_Week_06 (quiz på DTU Learn)
- Kursusplanen: "Exercise on Lecture 5 material" kl. 8.00 den 5. oktober 2026 (emnet er uge 5: Lewis, VSEPR, hybridisering, MO). Opgaverne er ikke lagt som fil i uge 6-mappen.
- Ingen bogopgaver med nummer er angivet.

## Gamle eksamensspørgsmål om dette emne

Numrene refererer til de to gamle eksamenssæt på Learn (efterår 2024 og forår 2025, se Uge 13). Numrene for efterår 2024 følger rækkefølgen i den scannede fil.

- Efterår 2024: spm. 16 (polymerisationsgrad for PET ud fra molvægten).
- Forår 2025: ingen spørgsmål direkte om anvendelsesstoffet.

## Tjek dig selv

- [ ] Hvordan dannes polyethylen ved additionspolymerisation, og hvor mange ethylenenheder har en kæde med en given molar masse?
- [ ] Hvad er forskellen på glasdannelse, krystallisation og tværbinding som størkningsmekanismer?
- [ ] Hvad udtrykker Youngs modul $E$ i $\sigma=E\varepsilon$?
- [ ] Hvad er et nukleosid, og hvilke kræfter holder DNA-helixen sammen?
- [ ] Hvorfor smelter GC-rige DNA-sekvenser ved højere temperatur end AT-rige?

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
