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

> Kilde: DTU Learn 26020, Week 6: "class6_Application_PE.pdf" (polyethylen), "JJE_Chemistry_on_computers.pdf" (Janus Juul Eriksen, kun 9 slides med lidt tekst) og "KGA_2026 lecture poly.pdf" (Kira Gerber Astakhova, nukleinsyrer og sekvensering). De tre gif-filer (Diels-Alder, nukleofil aromatisk substitution, IR-spektrum af sukrose) er ikke åbnet. Kursusplanen: mandag 5. oktober 2026, kl. 8.00 øvelse om forelæsning 5, kl. 10.00 biokemi, polymerer, beregningskemi. Ugen er en anvendelsesforelæsning uden nyt bogkapitel.

## Emner

- Polyethylen (PE): syntese, tværbinding, størkningsmekanismer, mekaniske egenskaber
- Beregningskemi: hvad en computer kan regne på molekyler
- Nukleinsyrer: nukleosider, DNA-sekvensering, oligonukleotid-lægemidler

## Begreber

**Polymerer og polyethylen.** Polymerer er kæder af gentagne enheder (monomerer). PE laves ved additionspolymerisation, mest med frie radikaler: $n\,\mathrm{H_2C{=}CH_2} \to (\mathrm{CH_2CH_2})_n$. Egen udregning: UHMWPE med $M\approx4\times10^6$ g/mol (slides) svarer til $4\times10^6/28{,}05 \approx 1{,}4\times10^5$ ethylenenheder pr. kæde.

**Tværbundet PE (PEX), varmekrympeslange.** Demonstrationen: ved stuetemperatur et fleksibelt fast stof, ved $-196$ °C stift, ved ca. 150 °C gummiagtigt. Slangen laves og tværbindes i den sammentrukne form, udvides, og den udvidede form "låses" ved afkøling. Opvarmning trækker den sammen igen. Tre størkningsmekanismer fra slides: glasdannelse (for PEX ca. $-110$ °C, bruges ikke), krystallisation (ca. 120 °C, fastholder den strakte form) og tværbindinger (bestemmer ligevægtsformen). Tværbinding sker med en radikalstarter, fx benzoylperoxid; i PE er tværbinding ca. 4 gange mere sandsynlig end kædebrud.

**Kæder, smelter og viskositet.** Frie bindingsrotationer giver tilfældige nøgler: afstanden mellem kædeender er $r = d\sqrt{N}$ (random walk). Egen udregning: $N = 10^4$ enheder med $d = 0{,}15$ nm giver $r = 15$ nm, langt mindre end kædens fulde længde (1,5 µm). I en smelte (over $T_g$ og $T_m$) bevæger kæder sig slangeagtigt i et "rør" af andre kæder (reptation). Silly putty (PDMS) flyder langsomt men preller hurtigt, fordi udfiltring tager lang tid i forhold til slagtiden.

**Stivhed.** Hookes lov: $\sigma = E\varepsilon$ med $\sigma = F/A$ og $\varepsilon = (l-l_0)/l_0$; $E$ er Youngs modul. Slides: stål ca. 200 GPa, de fleste faste polymerer ca. 1 GPa. Egen udregning: 10 N på 1 mm$^2$ er $\sigma = 10$ MPa; med $E=1$ GPa er $\varepsilon = 0{,}01$ (1 %). UHMWPE-fibre har $E\approx150$ GPa (densitet 0,97 g/cm$^3$), fordi krystallerne er rettet langs fiberen; krystallen er anisotrop ($E_\parallel \approx 240$ GPa, $E_\perp \approx 3$ til $9$ GPa).

**Beregningskemi.** Slides: man beregner energien af molekyler og materialer ved at løse den elektroniske Schrödinger-ligning numerisk i videnskabelig software; andre egenskaber fås som afledede af energien (fx IR-spektre). Pointen er at kemikere i stigende grad har brug for programmering og maskinlæring (robotter, autonom syntese, generativ AI til materialedesign). Teksten på slides er kort, så detaljer om metoderne står ikke her.

**Nukleosider og DNA.** Et nukleosid er base + sukker (2'-deoxyribose i DNA). Helixen holdes af stacking (π-stacking, hydrofobe effekter) og Watson-Crick-hydrogenbindinger. Kools forsøg viste at ikke-hydrogenbundne formlignende baser stadig kan danne stabile par, så H-bindinger er ikke den eneste faktor. Illumina-sekvensering bruger nukleotider med farvestof og reversibel blokering: byg ind, aflæs farve, fraspalt, gentag. Syntese af oligonukleotider sker fast-fase i cyklus: deblok, kobl (phosphoramidit), cap, oxidér. Anvendelser: ASO, siRNA, aptamerer. Slidens pointe: flaskehalsen er i stigende grad levering til de rigtige celler.

## Opgaver

- Exercises_Week_06 (quiz på DTU Learn, ikke åbnet)
- Kursusplanen: "Exercise on Lecture 5 material" kl. 8.00 den 5. oktober 2026 (emnet er uge 5: Lewis, VSEPR, hybridisering, MO). Selve opgaverne er ikke lagt som fil i Week 6-mappen.
- Ingen bogopgaver med nummer er angivet.

## Tjek dig selv

- [ ] Kan jeg forklare hvorfor en varmekrympeslange trækker sig sammen, ud fra tværbinding og krystallisation?
- [ ] Kan jeg skelne glasdannelse, krystallisation og tværbinding som størkningsmekanismer?
- [ ] Kan jeg bruge $\sigma=E\varepsilon$ til en lille udregning?
- [ ] Hvorfor er UHMWPE-fibre så stive i fiberretningen?
- [ ] Hvad er et nukleosid, og hvad gør en reversibel terminator i sekvensering?
- [ ] Hvilke molekyleegenskaber kan en computer beregne ud fra energien?

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
