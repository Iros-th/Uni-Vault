---
publish: true
title: "Chemistry uge 9: Anvendelsesforelæsning 2 (batterier, MOF'er, magnetiske materialer)"
course: Chemistry
type: week
week: 9
tags:
  - chemistry
  - ugenote
---

# Uge 9: Anvendelsesforelæsning 2 (batterier, MOF'er, magnetiske materialer)

> Kilde: DTU Learn 26020, Week 9: "26020 Battery Applications Lecture LWG.pdf" (Leo W. Gordon, 2. november 2026) og "MOFs_ChemistryPolytechnic_2026.pdf" (Kasper S. Pedersen, 36 slides, mest figurer). Kursusplanen: mandag 2. november, kl. 8.00 øvelse om forelæsning 7, kl. 10.00 magnetiske materialer, batterier, maskinlæring i kemi. Ingen slides om maskinlæring er lagt op i Week 9. Ugen er en anvendelsesforelæsning uden nyt bogkapitel.

## Emner

- Opgaver fra forrige uge: mælks holdbarhed (Arrhenius) og $\mathrm{N_2O_4}/\mathrm{NO_2}$-ligevægt
- Batteriers opbygning, drift og egenskaber
- NMR-spektroskopi som metode til at studere batterier
- Metal-organiske netværk (MOF'er): gasopsamling og vandopsamling
- Magnetiske materialer og magnetisk køling

## Begreber

**Løsninger til opgaverne fra uge 8 (fra slides).** Mælk: 10 gange hurtigere ved 22 °C end ved 4 °C giver $E_a = 87$ kJ/mol. Ved 30 °C er $\ln(k_2/k_1) = -\dfrac{87000}{8{,}314}\left(\dfrac1{303{,}15}-\dfrac1{295{,}15}\right) = 0{,}936$, dvs. $k_2/k_1 = 2{,}55$, så holdbarheden er $24\ \mathrm{h}/2{,}55 = 9{,}4$ timer (kontrolleret). $\mathrm{N_2O_4\rightleftharpoons 2\,NO_2}$ er endoterm; køling skifter mod farveløs $\mathrm{N_2O_4}$, så røret bliver blegere og $K$ falder.

**Batteriets dele.** Positiv elektrode (katode), negativ elektrode (anode), elektrolyt og separator. Ved afladning mister anoden elektroner (oxidation) og katoden optager dem (reduktion): "LEO goes GER" (Loses Electrons Oxidation, Gains Electrons Reduction). Ioner (kationer) bevæger sig gennem elektrolytten, elektronerne gennem det ydre kredsløb. Li-ion-batterier virker ved at "skubbe" ioner frem og tilbage (slidens billede: to sandwiches der bytter fyld). Volta-søjlen er fra 1800, Li-ion er udviklet i 1980'erne og kommercialiseret i 1991.

**Egenskaber og afvejninger.** Kapacitet (mAh) siger hvor længe batteriet holder, cellepotentiale (V) hvor meget energi man får, og cyklingshastighed (strøm) hvor hurtigt man kan lade. Energi er potentiale gange ladning: $E = V\cdot Q$. Eksempel (egen): 3,7 V og 3,0 Ah giver $3{,}7\cdot3{,}0 = 11{,}1$ Wh, i samme størrelsesorden som slidens 10 Wh for bærbar elektronik. Slides' skala: bærbart ca. 10 Wh, elbiler ca. 100 kWh, elnet over 10 MWh; hvad der er vigtigst (sikkerhed, pris i kr/kWh, miljø og samfund) afhænger af anvendelsen. Effekt afhænger af strøm og spænding: strømmen bestemmer vi, spændingen får vi.

**NMR på batterier.** Elektrokemi viser hvordan batteriet som helhed opfører sig; NMR viser hvordan stofferne indeni opfører sig (kerner som $^1$H, $^7$Li, $^{13}$C, $^{19}$F, $^{23}$Na, $^{27}$Al, $^{31}$P). Transport i en elektrolyt er flux = migration + diffusion + konvektion.

**MOF'er.** Metal-organiske netværk dannes af metalioner forbundet af organiske linkere til porøse krystaller (slides: koordinationskompleks = metalcenter med bundne molekyler eller ioner). Kitagawa, Robson og Yaghi fik Nobelprisen i kemi 2025. Anvendelser fra slides: kulstofopsamling (filtre produceres kommercielt), og vandopsamling fra luft med MOF-303 (ca. 0,4 g vand pr. g MOF ved 40 % relativ luftfugtighed og 25 °C; rapporteret op til 210 mL pr. kg MOF pr. dag i Death Valley-prototype).

**Gasopsamling som ligevægt.** $\mathrm{CO_2(g)+MOF\rightleftharpoons CO_2@MOF}$ har typisk $\Delta H<0$ og $\Delta S<0$, så $\Delta G=\Delta H-T\Delta S$ stiger med temperaturen. Slides: $\Delta H^\circ=-40$ kJ/mol og $\Delta S^\circ=-100$ J/(mol K) $=-0{,}100$ kJ/(mol K). Ved 300 K: $-40-300\cdot(-0{,}100)=-10$ kJ/mol (adsorption gunstig); ved 450 K: $-40+45=+5$ kJ/mol (ugunstig). Omslag ved $T=\Delta H/\Delta S=400$ K, så opvarmning frigiver den opsamlede gas.

**Magnetiske materialer.** Slides viser MOF'er som kvantematerialer (stærke elektroninteraktioner), todimensionelle magneter med $T_C=55$ K, magneter der udligner deres eget felt, og magnetisk køling. Magnetisk entropi for en ion med spin $S$: $S_m=R\ln(2S+1)$; for $\mathrm{Eu^{2+}}$ ($S=7/2$) er $R\ln8=2{,}08R$ (kontrolleret). Teksten på disse slides er sparsom, så detaljerne står ikke her.

## Opgaver

- Exercises_Week_09 (quiz på DTU Learn, ikke åbnet)
- Additional Questions Week 09 (quiz på DTU Learn, ikke åbnet)
- Kursusplanen: "Exercise on Lecture 7 material" kl. 8.00 den 2. november 2026 (emnet er uge 8: kinetik og ligevægt). Selve opgaverne er ikke lagt som fil.
- Ingen bogopgaver med nummer er angivet.

## Tjek dig selv

- [ ] Kan jeg pege på anode, katode, elektrolyt og separator og sige hvad der oxideres og reduceres ved afladning?
- [ ] Kan jeg regne energi i Wh ud fra spænding og kapacitet?
- [ ] Hvilke tre afvejninger gælder for kapacitet, spænding og cyklingshastighed?
- [ ] Hvorfor kan opvarmning frigive gas fra en MOF? Kan jeg finde omslagstemperaturen med $T=\Delta H/\Delta S$?
- [ ] Kan jeg gentage Arrhenius-udregningen for mælk i bil ved 30 °C?
- [ ] Hvad sker der med farve og $K$ for $\mathrm{N_2O_4\rightleftharpoons2\,NO_2}$ ved afkøling?

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
