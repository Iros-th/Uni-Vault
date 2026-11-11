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

> Kilde: kursusplanen, forelæsning 9 mandag 16. november 2026: "Thermodynamics, electrochemistry, and redox reactions", OpenStax Chemistry 2e kapitel 16 (Thermodynamics) og 17 (Electrochemistry), nøgleord: entropi, Gibbs fri energi, spontanitet, redoxreaktioner, galvaniske celler, Nernst-ligningen, korrosion, batterier, elektrolyse. Slides til ugen er ikke lagt op i DTU Learn pr. 2026-11-09; formlerne og eksemplerne nedenfor er standardkemi og egne udregninger.

## Emner

- Entropi, Gibbs fri energi og spontanitet (uddybning af uge 3)
- Oxidationstal og afstemning af redoxreaktioner
- Galvaniske celler, cellepotentiale, Nernst
- Korrosion, batterier, elektrolyse

## Begreber

**Standardentropi.** $\Delta S^\circ_{rx}=\sum S^\circ(\text{produkter})-\sum S^\circ(\text{reaktanter})$ (med støkiometriske koefficienter). Flere mol gas på produktsiden giver typisk $\Delta S^\circ>0$. Ved et faseskift ved ligevægt er $\Delta G=0$, så $T=\Delta H/\Delta S$. Eksempel (egen, afrundede værdier): fordampning af vand har $\Delta H_{vap}=40{,}7$ kJ/mol og $\Delta S_{vap}\approx109$ J/(mol K), så $T_b=40700/109\approx373$ K. Husk at omregne $\Delta H$ (kJ) og $\Delta S$ (J) til samme enhed.

**Gibbs og ligevægt.** $\Delta G=\Delta H-T\Delta S$ (uge 3) og $\Delta G^\circ=-RT\ln K$. Eksempel (egen): $K=10^5$ ved 298,15 K giver $\Delta G^\circ=-8{,}314\cdot298{,}15\cdot\ln10^5=-28{,}5$ kJ/mol. Stor $K$ svarer til stærkt negativ $\Delta G^\circ$.

**Regler for oxidationstal.** Et grundstof har 0; en monoatomar ion har sin ladning; O er normalt $-2$ (i peroxider $-1$), H er normalt $+1$ (i hydrider $-1$); summen af oxidationstal er lig molekylets eller ionens ladning. Eksempel (egen): i $\mathrm{SO_4^{2-}}$ er S $+6$ ($x+4\cdot(-2)=-2$), og i $\mathrm{SO_3^{2-}}$ er S $+4$.

**Afstemning af redox med halvreaktioner (sur opløsning).** (1) Opdel i oxidations- og reduktionshalvreaktion. (2) Afstem alle atomer undtagen O og H. (3) Afstem O med $\mathrm{H_2O}$ og derefter H med $\mathrm{H^+}$. (4) Afstem ladning med $\mathrm{e^-}$. (5) Gang halvreaktionerne, så elektronerne går op, og læg dem sammen. Eksempel (egen): $\mathrm{Cr_2O_7^{2-}+6\,Fe^{2+}+14\,H^+\to2\,Cr^{3+}+6\,Fe^{3+}+7\,H_2O}$ har ladning $+24$ på begge sider. I basisk opløsning afstemmes først som sur, og derefter tilsættes $\mathrm{OH^-}$ svarende til $\mathrm{H^+}$ på begge sider, så $\mathrm{H^+ + OH^-}$ bliver $\mathrm{H_2O}$.

**Oxidationstal og redox.** Oxidation er afgivelse af elektroner (oxidationstallet stiger), reduktion er optagelse. Eksempel (egen): i $\mathrm{MnO_4^-}$ er Mn $+7$ (fire O à $-2$ giver $-8$, ionladning $-1$). Afstemt i sur opløsning: $\mathrm{MnO_4^-+5\,Fe^{2+}+8\,H^+\to Mn^{2+}+5\,Fe^{3+}+4\,H_2O}$; ladningen er $+17$ på begge sider, og 1 mol permanganat oxiderer 5 mol $\mathrm{Fe^{2+}}$.

**Galvanisk celle.** Anoden oxideres, katoden reduceres; $E^\circ_{celle}=E^\circ_{katode}-E^\circ_{anode}$ og $\Delta G^\circ=-nFE^\circ$ med $F=96485$ C/mol. Eksempel (egen, med tabelværdier ca. $+0{,}34$ V for $\mathrm{Cu^{2+}/Cu}$ og $-0{,}76$ V for $\mathrm{Zn^{2+}/Zn}$): $E^\circ=0{,}34-(-0{,}76)=1{,}10$ V, $\Delta G^\circ=-2\cdot96485\cdot1{,}10=-212$ kJ/mol.

**Nernst.** $E=E^\circ-\dfrac{RT}{nF}\ln Q$, ved 25 °C $E=E^\circ-\dfrac{0{,}0592}{n}\log Q$. Samme celle med $[\mathrm{Zn^{2+}}]=1{,}0$ M og $[\mathrm{Cu^{2+}}]=0{,}010$ M: $Q=100$, $E=1{,}10-\dfrac{0{,}0592}{2}\cdot2=1{,}04$ V.

**Korrosion og elektrolyse.** Korrosion er en spontan redoxreaktion (fx jern og ilt, se rust-eksemplet i uge 2). Elektrolyse tvinger en ikke-spontan reaktion ved at tilføre elektrisk energi. Faradays lov: ladningen er $Q=It$, og stofmængden af elektroner er $n_{e}=Q/F$. Eksempel (egen): 2,00 A i 1,00 time giver $Q=7200$ C og $n_e=0{,}0746$ mol; med $\mathrm{Cu^{2+}+2\,e^-\to Cu}$ udfældes $0{,}0373$ mol, ca. $2{,}37$ g Cu ($M=63{,}55$ g/mol). Batterier (uge 9) er galvaniske celler der kan oplades.

### Model: Galvanisk celle diagram (Daniell-cellen) (supplerende illustration, ikke fra slides)

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

- Opgaver (Exercises_Week_11) er ikke lagt op pr. 2026-11-09.
- Ingen opgaver nævnt i kursusplanen for ugen.

## Gamle eksamensspørgsmål om dette emne

Numrene refererer til de to gamle eksamenssæt på Learn (efterår 2024 og forår 2025, se Uge 13). Numrene for efterår 2024 følger rækkefølgen i den scannede fil.

- Efterår 2024: spm. 5 (ud fra $\Delta G$ og $\Delta S$ find $\Delta H$), spm. 6 (fortegn af $\Delta H$ og $\Delta S$ og spontanitet), spm. 19 (EMF i koncentrationscelle, Nernst), spm. 20 (afstem redox i sur opløsning, sum af koefficienter).
- Forår 2025: spm. 5 (oxidationstal for svovl), spm. 10 (galvanisk celle, hvem oxideres), spm. 11 (temperatur hvor reaktionen skifter fra spontan til ikke-spontan), spm. 20 (afstem redox, sum af koefficienter), spm. 22 (kogepunkt ud fra $\Delta H$ og $\Delta S$).

## Tjek dig selv

- [ ] Hvordan hænger $\Delta G^\circ$, $K$ og $E^\circ_{celle}$ sammen?
- [ ] Hvordan bestemmes oxidationstal, og hvordan afstemmes en redoxreaktion i sur opløsning med halvreaktioner?
- [ ] Hvilken elektrode er anode og katode i en galvanisk celle, og hvordan beregnes $E^\circ_{celle}$?
- [ ] Hvordan ændrer Nernst-ligningen cellepotentialet, når koncentrationerne ændres?
- [ ] Hvordan findes den temperatur, hvor en reaktion skifter mellem spontan og ikke-spontan, og hvilke enheder skal omregnes først?
- [ ] Hvordan beregnes mængden af udfældet metal ved elektrolyse?

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
