---
publish: true
title: "Chemistry uge 3: Energi, termokemi og reaktioner"
course: Chemistry
type: week
week: 3
tags:
  - chemistry
  - ugenote
---

# Uge 3: Energi, termokemi og reaktioner

> Kilde: DTU Learn 26020, Week 3: "Lecture 3 - post-lecture.pdf" (forelæsning 14. september 2026) og "Lecture 3 - pre-lecture copy.pdf" (30 sider, sammenlignet). "Hess- Law working.pdf" er læst, men er håndskrevet og tekstudtrækket er rodet, se afsnittet nedenfor. Kursusmeddelelserne er læst. Bog: OpenStax Chemistry 2e, kapitel 5 (Thermochemistry) med et forsmag på kapitel 16. Exercises_Week_03 (quiz) er ikke åbnet.

## Emner

- System og omgivelser, varmestrøm
- Varmekapacitet og kalorimetri
- Entalpi og Hess' lov
- Entropi og Gibbs fri energi (introduceres, uddybes i uge 11)
- Spontanitet vs. hastighed

## Begreber

**Første hovedsætning.** $\Delta U = q + w$. Energi bevares. Et åbent system udveksler energi og stof, et lukket kun energi, et isoleret ingen af delene. Fortegn: varme ind i systemet er $q>0$, ud er $q<0$.

**Varme og kalorimetri.** $q = mc\Delta T$. I et isoleret system er $q_1 = -q_2$. Slides: 25 g vand ved 80 °C blandes med 25 g ved 20 °C; samme $mc$ giver $T_f = 50$ °C. Jernpande: $2000\cdot0{,}46\cdot(220-T_f) = 300\cdot3{,}5\cdot(T_f-4)$ giver $T_f = 104{,}9$ °C (kontrolleret). Med en pande på 4,0 kg bliver det 141,5 °C, og med kun 75 g bøf 193,0 °C.

**Entalpi.** $H = U + PV$. Ved konstant tryk er $\Delta H = q_P$ (kaffekop-kalorimeter), og i en bombekalorimeter (konstant volumen, $w=0$) er $\Delta U = q_V$. Entalpi er en tilstandsfunktion: kun start og slut tæller. Eksempel fra slides: 91,6 g $\mathrm{H_2SO_4}$ (0,93 mol) opløst i 300 g vand hæver temperaturen fra 22,5 til 62,0 °C. $q_P = 391{,}6\cdot4{,}184\cdot39{,}5 = 64{,}7$ kJ, $\Delta H_{proces} = -64{,}7$ kJ, pr. mol $-69{,}6$ kJ/mol.

**Hess' lov / dannelsesentalpier.** $\Delta H^\circ_{rx} = \sum \Delta H^\circ_f(\text{produkter}) - \sum \Delta H^\circ_f(\text{reaktanter})$, og $\Delta H_f^\circ = 0$ for et grundstof i standardtilstand. Slides, termit: $\mathrm{2\,Al + Fe_2O_3 \to Al_2O_3 + 2\,Fe}$ med $\Delta H_f^\circ(\mathrm{Fe_2O_3}) = -824{,}2$ og $\Delta H_f^\circ(\mathrm{Al_2O_3}) = -1675{,}7$ kJ/mol giver $\Delta H^\circ_{rx} = -1675{,}7 + 824{,}2 = -851{,}5$ kJ/mol. Slides, sukker med svovlsyre: $\Delta H^\circ_{rx} = 11\cdot(-285{,}8) - (-2226{,}1) = -917{,}7$ kJ/mol (slides bruger her dannelsesentalpien for flydende vand, selvom ligningen viser $\mathrm{H_2O(g)}$).

**Entropi.** $S$ måler spredning af energi, "uorden". Anden hovedsætning: $\Delta S_{univers} = \Delta S_{system} + \Delta S_{omgivelser} > 0$ for spontane processer. Entropien vokser fra fast til væske til gas, med flere mol gas og med temperatur. Tredje hovedsætning: en perfekt krystal ved 0 K har $S = 0$.

**Gibbs fri energi.** $\Delta G = \Delta H - T\Delta S$. $\Delta G<0$ er spontan, $>0$ ikke spontan, $=0$ ligevægt. Fortegn: $\Delta H<0,\Delta S>0$ altid spontan; $\Delta H>0,\Delta S<0$ aldrig; $\Delta H<0,\Delta S<0$ spontan ved lav $T$; $\Delta H>0,\Delta S>0$ spontan ved høj $T$. Eksempel (egen): $\Delta H = +10$ kJ/mol og $\Delta S = +30$ J/(mol K) giver $\Delta G<0$ når $T>10000/30 = 333$ K.

**Spontan er ikke det samme som hurtig.** Diamant til grafit har $\Delta G<0$ men tager geologisk tid; termit er spontan men kræver en aktiveringsenergi ("gnist"). $\Delta G$ siger om det sker, $E_a$ (uge 8) siger hvor hurtigt.

**Hess' lov, håndskrevet løsning.** Filen "Hess- Law working.pdf" (2 sider) er lagt i Week 3-mappen efter forelæsning 5 som svar på spørgsmål om Hess' lov for sværere systemer (meddelelse 28. september); det er en løsning på et af ugens opgavespørgsmål. Den er håndskrevet, og pdf.js kunne kun trække fragmenter ud af den (reaktioner nummereret 1 til 6, ledetråde om at alle reaktioner skal gå op i ilt, og kJ/mol-tal). Teksten er for rodet til, at jeg kan gengive løsningen uden at gætte, så den er ikke refereret her. Læs selve filen på Learn.

**Rettelser efter forelæsningen (meddelelse 14. september).** Et manglende minustegn i en Hess-udregning er rettet. Opløsningsentalpien for $\mathrm{H_2SO_4}$ i vand skulle ligge mellem ca. $-70$ og $-90$ kJ/mol, og målingen i forsøget gav $-69{,}5$ kJ/mol; at den ligger lidt for lavt i størrelse forklares med varmetab til omgivelserne. Der er tilføjet et billede af thermit-reaktionens resultat. Pre-lecture-versionen (30 sider) er ellers ens med post-lecture uden ekstra opgaver.

### Model: Energidiagram og Hess' lov som energitrappe

En kemisk reaktions entalpiforløb visualiseres ved et energidiagram:

```
Entalpi H
  ^
  |      [ Reaktanter ]
  |            |
  |            |  \Delta H < 0  (Eksoterm: varme frigives til omgivelserne)
  |            v
  |      [ Produkter ]
--+----------------------------------------> Reaktionsforløb
```

Hess' lov siger, at entalpi er en **tilstandsfunktion**: ændringen $\Delta H$ afhænger kun af start- og sluttilstand, ikke af reaktionsvejen:

```
                  \Delta H_direkte
[ Reaktanter ] =======================> [ Produkter ]
      |                                       ^
      | \Delta H_1                            | \Delta H_2
      v                                       |
           [ Mellemtrin / Grundstoffer ] -----+
```

Derfor kan enhver ukendt reaktionsentalpi beregnes som en trappe:
$$\Delta H^\circ_{\text{reaktion}} = \Delta H_1 + \Delta H_2 = \sum \nu_p \Delta H_f^\circ(\text{produkter}) - \sum \nu_r \Delta H_f^\circ(\text{reaktanter}).$$

## Opgaver

- Exercises_Week_03 (quiz på DTU Learn, ikke åbnet)
- Ingen bogopgaver med nummer er angivet for ugen. Slides henviser til tabel G1 (standard dannelsesentalpier) i bogens appendiks.

## Gamle eksamensspørgsmål om dette emne

Numrene refererer til de to gamle eksamenssæt på Learn (efterår 2024 og forår 2025, se Uge 13). Efterår 2024 er læst ved OCR af en scannet PDF, og numrene følger rækkefølgen i filen.

- Forår 2025: spm. 21 (estimér $\Delta H$ ud fra bindingsenthalpier), spm. 30 (Hess' lov med tre delreaktioner).
- Efterår 2024: spm. 5 og 6 bruger $\Delta H$, $\Delta S$ og $\Delta G$, se uge 11.

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
