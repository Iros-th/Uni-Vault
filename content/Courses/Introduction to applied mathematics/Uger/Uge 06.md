---
publish: true
title: "Introduction to applied mathematics uge 6: Aktiv fartpilot, controller og simulering"
course: Introduction to applied mathematics
type: week
week: 6
tags:
  - applied-math
  - ugenote
---

# Uge 6: Aktiv fartpilot, controller og simulering

> Kilde: DTU Learn 02525, Projekt 3 "Projektuge 2 Controller": `simuler.py`. Mandag 5/10 2026 (ugen efter, 12/10 til 16/10, er efterårsferie). Teorien kommer fra `fart.pdf`, se [[Courses/Introduction to applied mathematics/Uger/Uge 05|Uge 5]]. Der ligger ikke en separat opgavebeskrivelse til denne uge på DTU Learn, kun Python-filen.

## Emner

- Modellering af bil og forankørende med position og hastighed
- Controller: ønsket acceleration ud fra afstand og relativ fart
- Sikkerhedsafstand som funktion af forankørendes fart
- Simulering med Eulers metode
- Plot af afstand og acceleration

## Begreber

**Hvad `simuler.py` gør.** Scriptet er delt i fem dele: (1) initialisering, (2) valg af forankørende, (3) vores controller, (4) simulering, (5) plotning. Alle enheder er SI (meter, sekunder, m/s, m/s$^2$). Opgaven er at ændre de to funktioner i del 3.

**Initialisering.** Tidsrum $0$ til $120$ s med skridt $0{,}01$ s. Egen bil starter i $s = 0$ m med $v = 20$ m/s. Forankørende starter i $s = 30$ m med $v = 20$ m/s.

**Forankørende.** `foran1` kører med konstant fart (acceleration $0$). `foran2` bremser med $-3$ m/s$^2$ efter $30$ s, indtil farten er $5$ m/s. Man kan selv lave flere typer. Valget sker ved `foran_controller = foran1`.

**Controller (udleveret version).**

$$d = s_{\text{foran}} - s_{\text{egen}}, \qquad v_{\text{rel}} = v_{\text{foran}} - v_{\text{egen}}, \qquad a = c\,\bigl(d - d_{\text{sik}}\bigr), \; c = 0{,}25.$$

Sikkerhedsafstanden i skabelonen er $d_{\text{sik}} = 1{,}0\cdot v_{\text{foran}} + 1$ (kommentaret i koden siger "taget fra nettet", altså ikke nødvendigvis god). Der står at man skal tilføje en afhængighed af $v_{\text{rel}}$ i controlleren.

**Fysiske grænser.** `faktisk_acc` klipper den ønskede acceleration til intervallet $[-3,\, 2]$ m/s$^2$: bilen kan højst accelerere $2$ og bremse $3$.

**Euler-simulering.** I hvert tidsskridt $\Delta t$ opdateres

$$s \leftarrow s + \Delta t\, v, \qquad v \leftarrow v + \Delta t\, a,$$

for både egen bil og forankørende. Koden gemmer faktisk afstand, ønsket afstand og acceleration og plotter dem i to figurer (afstand og acceleration). Det er en primitiv numerisk løsning af differentialligningen $s'' = a$ fra uge 5; med en controller på formen $a = -b\,\dot d - c\,(d - d_{\text{sik}})$ får man netop en ligning af typen $x'' + bx' + cx = 0$ for afvigelsen, og dæmpningen (over-, kritisk, underdæmpet) afgør om bilen svinger.

(Den sidste sætning er min egen kobling mellem koden og `fart.pdf`, ikke noget der står i filen.)
### Reguleringsmodel: PID-feedback sløjfe for hastighedsstyring

En aktiv fartpilot korrigerer hele tiden motorpådraget $u(t)$ ud fra fejlen $e(t) = v_{\text{ref}} - v(t)$:

```text
  v_ref    + ┌──────┐  Fejl e(t)  ┌───────────────────┐  u(t)   ┌─────────────┐   v(t)
  ───────>(+)│ Reg. │────────────>│ PID-Controller    │────────>│ Bil-dynamik │────┬───>
           ^ └──────┘             │ P: K_p · e        │         └─────────────┘    │
           │                      │ I: K_i · ∫ e dt   │                            │
           │ -                    │ D: K_d · de/dt    │                            │
           └──────────────────────┴───────────────────┴────────────────────────────┘
                                  Feedback-måling
```
- **P (Proportional):** Reagerer på den aktuelle fejl.
- **I (Integral):** Fjerner stationær fejl (f.eks. ved kørsel op ad bakke).
- **D (Differential):** Dæmper hurtige udsving og modvirker overskydende acceleration.

## Opgaver

- Ændr `sikkerheds_afstand(foran_s, foran_v)` og `controller(egen_s, egen_v, foran_s, foran_v)` i del 3 i `simuler.py`. Det er den eneste opgave filen selv nævner ("Jeres opgave er at modificere de to funktioner defineret i del 3").
- Prøv begge forankørende (`foran1` og `foran2`).
- Posterprojektet afsluttes med præsentation 19/10, se [[Courses/Introduction to applied mathematics/Uger/Uge 07|Uge 7]].

## Links

- [[Courses/Introduction to applied mathematics/Uger/Oversigt|Oversigt over ugerne]]
- [[Introduction to applied mathematics|Kursusside]]
