---
publish: true
title: "Chemistry uge 11: Termodynamik, elektrokemi og redox"
course: Chemistry
type: week
week: 11
tags:
  - chemistry
  - ugenote
---

# Uge 11: Termodynamik, elektrokemi og redox

> Materiale ikke lagt op endnu (2026-11-09), skrevet ud fra kursusplanen. Kursusplanen angiver forelæsning 9 mandag 16. november 2026: "Thermodynamics, electrochemistry, and redox reactions", OpenStax Chemistry 2e kapitel 16 (Thermodynamics) og 17 (Electrochemistry), nøgleord: entropi, Gibbs fri energi, spontanitet, redoxreaktioner, galvaniske celler, Nernst-ligningen, korrosion, batterier, elektrolyse. Formlerne og eksemplerne nedenfor er standardkemi og egne udregninger, ikke fra slides. Opdater når uge 11-materialet er på Learn.

## Emner

- Entropi, Gibbs fri energi og spontanitet (uddybning af uge 3)
- Oxidationstal og afstemning af redoxreaktioner
- Galvaniske celler, cellepotentiale, Nernst
- Korrosion, batterier, elektrolyse

## Begreber

**Gibbs og ligevægt.** $\Delta G=\Delta H-T\Delta S$ (uge 3) og $\Delta G^\circ=-RT\ln K$. Eksempel (egen): $K=10^5$ ved 298,15 K giver $\Delta G^\circ=-8{,}314\cdot298{,}15\cdot\ln10^5=-28{,}5$ kJ/mol. Stor $K$ svarer til stærkt negativ $\Delta G^\circ$.

**Oxidationstal og redox.** Oxidation er afgivelse af elektroner (oxidationstallet stiger), reduktion er optagelse. Eksempel (egen): i $\mathrm{MnO_4^-}$ er Mn $+7$ (fire O à $-2$ giver $-8$, ionladning $-1$). Afstemt i sur opløsning: $\mathrm{MnO_4^-+5\,Fe^{2+}+8\,H^+\to Mn^{2+}+5\,Fe^{3+}+4\,H_2O}$; ladningen er $+17$ på begge sider, og 1 mol permanganat oxiderer 5 mol $\mathrm{Fe^{2+}}$.

**Galvanisk celle.** Anoden oxideres, katoden reduceres; $E^\circ_{celle}=E^\circ_{katode}-E^\circ_{anode}$ og $\Delta G^\circ=-nFE^\circ$ med $F=96485$ C/mol. Eksempel (egen, med tabelværdier ca. $+0{,}34$ V for $\mathrm{Cu^{2+}/Cu}$ og $-0{,}76$ V for $\mathrm{Zn^{2+}/Zn}$): $E^\circ=0{,}34-(-0{,}76)=1{,}10$ V, $\Delta G^\circ=-2\cdot96485\cdot1{,}10=-212$ kJ/mol.

**Nernst.** $E=E^\circ-\dfrac{RT}{nF}\ln Q$, ved 25 °C $E=E^\circ-\dfrac{0{,}0592}{n}\log Q$. Samme celle med $[\mathrm{Zn^{2+}}]=1{,}0$ M og $[\mathrm{Cu^{2+}}]=0{,}010$ M: $Q=100$, $E=1{,}10-\dfrac{0{,}0592}{2}\cdot2=1{,}04$ V.

**Korrosion og elektrolyse.** Korrosion er en spontan redoxreaktion (fx jern og ilt, se rust-eksemplet i uge 2). Elektrolyse tvinger en ikke-spontan reaktion ved at tilføre elektrisk energi. Batterier (uge 9) er galvaniske celler der kan oplades.

### Model: Galvanisk celle diagram (Daniell-cellen)

En galvanisk celle omdanner kemisk energi fra en spontan redoxreaktion ($\Delta G^\circ < 0$) til elektrisk arbejde:

```
      Elektronstrøm e-  =====> =====> =====>
     [ Zn Anode (-) ]                      [ Cu Katode (+) ]
          |                                       |
     Oxidation:                              Reduktion:
     Zn(s) -> Zn^2+ + 2e-                    Cu^2+ + 2e- -> Cu(s)
          |                                       |
     [ Opløsning ZnSO_4 ]                  [ Opløsning CuSO_4 ]
          \__________ Saltbro (K+, NO_3-) ________/
```

- **Huskeregel:** **AN OX** (Anode = Oxidation) og **RED CAT** (Reduktion = Katode).
- **Saltbroens rolle:** Opretholder elektrisk neutralitet. Negative anioner ($\text{NO}_3^-$) vandrer mod anoden, mens positive kationer ($\text{K}^+$) vandrer mod katoden.
- **Cellepotentiale:**
  $$E^\circ_{\text{celle}} = E^\circ_{\text{katode}} - E^\circ_{\text{anode}} = +0{,}34\text{ V} - (-0{,}76\text{ V}) = +1{,}10\text{ V}.$$
- **Nernst-ligningen:** Beskriver hvordan spændingen falder, efterhånden som reaktanterne opbruges og $Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}$ vokser:
  $$E = E^\circ - \frac{RT}{nF}\ln Q.$$

## Opgaver

- Exercises_Week_11 findes ikke i TOC pr. 2026-11-09 (ugen er ikke lagt op).
- Ingen opgaver nævnt i kursusplanen for ugen.

## Gamle eksamensspørgsmål om dette emne

Numrene refererer til de to gamle eksamenssæt på Learn (efterår 2024 og forår 2025, se Uge 13). Efterår 2024 er læst ved OCR af en scannet PDF, og numrene følger rækkefølgen i filen.

- Efterår 2024: spm. 5 (ud fra $\Delta G$ og $\Delta S$ find $\Delta H$), spm. 6 (fortegn af $\Delta H$ og $\Delta S$ og spontanitet), spm. 19 (EMF i koncentrationscelle, Nernst), spm. 20 (afstem redox i sur opløsning, sum af koefficienter).
- Forår 2025: spm. 5 (oxidationstal for svovl), spm. 10 (galvanisk celle, hvem oxideres), spm. 11 (temperatur hvor reaktionen skifter fra spontan til ikke-spontan), spm. 20 (afstem redox, sum af koefficienter), spm. 22 (kogepunkt ud fra $\Delta H$ og $\Delta S$).

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
