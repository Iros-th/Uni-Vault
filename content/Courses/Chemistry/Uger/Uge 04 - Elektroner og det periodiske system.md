---
publish: true
title: "Chemistry uge 4: Elektroner og det periodiske system"
course: Chemistry
type: week
week: 4
tags:
  - chemistry
  - ugenote
---

# Uge 4: Elektroner og det periodiske system

> Kilde: DTU Learn 26020, uge 4: "Lecture 4 - post-lecture copy.pdf" (forelæsning 21. september 2026, 42 sider), "Lecture 4 - pre-lecture copy.pdf" (37 sider) og kursusmeddelelserne. Figurer på slides er ikke gengivet. Pptx-versionen af slides er ikke tilgængelig i DTU Learn (pdf-versionen er brugt). Bog: OpenStax Chemistry 2e, kapitel 6 (Electronic Structure and Periodic Properties of Elements).

## Emner

- Elektromagnetisk stråling, kvantisering af energi
- Fra Planck og Einstein til Bohr
- De fire kvantetal
- Elektronkonfigurationer (Aufbau, Hund, Pauli)
- Periodiske tendenser: radius, ioniseringsenergi, elektronaffinitet, elektronegativitet

## Begreber

**Bølger og fotoner.** I vakuum er $c = \lambda\nu$ med $c = 2{,}998\times10^8$ m/s. Fotonenergi er $E = h\nu$ med $h = 6{,}63\times10^{-34}$ J s. Slides: WiFi ved 2,4 GHz har $\lambda = 2{,}998\times10^8/2{,}4\times10^9 = 0{,}125$ m, ved 5,0 GHz $0{,}060$ m. Egen udregning: en foton på 500 nm har $E = hc/\lambda = 6{,}63\times10^{-34}\cdot2{,}998\times10^8/5{,}00\times10^{-7} = 3{,}97\times10^{-19}$ J, altså ca. 239 kJ pr. mol fotoner.

**Fra klassisk fysik til kvanter.** Planck forklarede sortlegemestråling ved at lys kun udveksles i pakker $E=h\nu$. Einstein brugte det på den fotoelektriske effekt: om en elektron slås ud afhænger af bølgelængden (fotonens energi), ikke af intensiteten. Bohr: elektroner har diskrete energiniveauer; absorption løfter en elektron op, emission af en foton sker når den falder ned (hydrogens linjespektrum).

**Kvantetal.** $n = 1,2,3,\dots$ (energiniveau); $\ell = 0,\dots,n-1$ (underskal: $\ell=0$ s, 1 p, 2 d, 3 f); $m_\ell = -\ell,\dots,+\ell$ (orbitalens retning); $m_s = \pm\tfrac12$ (spin). Slides sammenligner det med en adresse. Eksempel (egen): for $n=3$ er $\ell=0,1,2$ og antal orbitaler er $n^2 = 9$ (1 + 3 + 5), altså plads til 18 elektroner.

**Opfyldningsregler.** Aufbau: laveste energi først (rækkefølgen følger $n+\ell$, ved lige værdi lavest $n$ først). Hund: degenererede orbitaler fyldes enkeltvis med parallel spin før parring. Pauli: ingen to elektroner har alle fire kvantetal ens.

**Elektronkonfigurationer.** Slides: P ($Z=15$) er $1s^2 2s^2 2p^6 3s^2 3p^3 = [\mathrm{Ne}]3s^2 3p^3$. Se ($Z=34$) er $[\mathrm{Ar}]4s^2 3d^{10} 4p^4$. Anionen $\mathrm{Se^{2-}}$ får to elektroner mere og bliver $[\mathrm{Ar}]4s^2 3d^{10} 4p^6$ (18 + 2 + 10 + 6 = 36 elektroner, som krypton).

**Effektiv kerneladning ($Z_{eff}$) og tendenser.** Indre elektroner skærmer kernen. Hen over en periode stiger $Z_{eff}$, så radius falder og ioniseringsenergi stiger. Ned ad en gruppe kommer flere skaller, så radius vokser og ioniseringsenergien falder. Slides' opsummering: radius vokser oppefra og ned og fra højre mod venstre; ioniseringsenergi og elektronaffinitet vokser nedefra og op og fra venstre mod højre. Ioniseringsenergi: $\mathrm{X(g)\to X^+(g)+e^-}$. Elektronaffinitet: $\mathrm{X(g)+e^-\to X^-(g)}$.

**Ioner.** Kationer er mindre end deres atomer, anioner større.

**Elektronegativitet.** Et mål for hvor hårdt en kerne trækker i delte elektroner i en binding (ca. gennemsnit af elektronaffinitet og ioniseringsenergi). Bruges i uge 5 til at afgøre bindingstype.

**Rettelser og tilføjelser i post-lecture (meddelelse 21. september).** Rettet: (i) forveksling af $\lambda$ og $\nu$, (ii) bølgelængden for 2,4 GHz, (iii) vinkelmomentreglen er $\ell = 0,\dots,n-1$ og ikke op til $n$ (pre-lecture har den gamle fejl), (iv) C-H på sidste slide er flyttet tættere på C. Nyt slide om effektiv kerneladning: det handler om, hvor meget af kernens ladning de yderste elektroner faktisk mærker, fordi kerneelektronerne skærmer, og det forklarer tendenserne i det periodiske system. Pre-lecture har 37 sider mod 42 i post-lecture, og der er ingen ekstra opgaver i pre-lecture.

### Model: Kvantemekanisk orbitalmodel og energitrappe (supplerende illustration, ikke fra slides)

Elektroner i atomer beskrives ikke som partikler i faste baner, men som 3D stående bølger (orbitaler) med sandsynlighedstæthed $|\psi|^2$:

```
Energi
  ^
  |                                        4p  _ _ _
  |                            3d  _ _ _ _ _
  |                        4s  _
  |                                        3p  _ _ _
  |                        3s  _
  |                                        2p  _ _ _
  |                        2s  _
  |
  |   1s  _
--+----------------------------------------------------> Orbitaler
```

Opbygningsprincipperne (Aufbau-modellen):
1. **Aufbau-princippet:** Elektroner fyldes i orbitalerne i rækkefølge efter stigende energi ($1s \to 2s \to 2p \to 3s \to 3p \to 4s \to 3d \to \dots$).
2. **Pauli-udelukkelsesprincippet:** Højst 2 elektroner pr. orbital, og de skal have modsatte spins ($\uparrow\downarrow$, $m_s = \pm 1/2$).
3. **Hunds regel:** I degenererede orbitaler (fx de tre $2p$-orbitaler) fordeles elektronerne først enkeltvis med parallelle spins ($\uparrow\ \uparrow\ \uparrow$) for at minimere elektron-elektron frastødning.

## Opgaver

- Exercises_Week_04 (quiz på DTU Learn)
- Ingen bogopgaver med nummer er angivet for ugen.

## Gamle eksamensspørgsmål om dette emne

Numrene refererer til de to gamle eksamenssæt på Learn (efterår 2024 og forår 2025, se Uge 13). Numrene for efterår 2024 følger rækkefølgen i den scannede fil.

- Efterår 2024: spm. 1 (rækkefølge efter atomradius i periode 3), spm. 7 (gyldigt sæt kvantetal for en 4d-elektron), spm. 8 (antal yderste elektroner i ædelgasserne).
- Forår 2025: spm. 8 (valenselektroner i fosfor), spm. 19 (hvilken ion har mindst radius), spm. 25 (gruppe og periode ud fra konfigurationen $4s^2 4p^5$).

## Tjek dig selv

- [ ] Hvordan hænger bølgelængde, frekvens og fotonenergi sammen?
- [ ] Hvilke værdier kan $n$, $\ell$, $m_\ell$ og $m_s$ antage?
- [ ] Hvad siger Aufbau-princippet, Hunds regel og Paulis udelukkelsesprincip?
- [ ] Hvordan skrives elektronkonfigurationen for P og for $\mathrm{Se^{2-}}$?
- [ ] Hvordan ændres radius og ioniseringsenergi hen over en periode og ned ad en gruppe, og hvilken rolle spiller $Z_{eff}$?
- [ ] Hvorfor er kationer mindre og anioner større end de tilhørende atomer?

## Links

- [[Courses/Chemistry/Uger/Oversigt|Oversigt over ugenoter]]
- [[Courses/Chemistry/Chemistry|Chemistry (kursusside)]]
