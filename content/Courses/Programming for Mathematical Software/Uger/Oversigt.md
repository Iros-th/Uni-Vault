---
publish: true
title: "Programming for Mathematical Software: oversigt over uger"
course: Programming for Mathematical Software
type: week-overview
tags:
  - c-programming
  - ugenote
---

# Oversigt: 02635 Programming for Mathematical Software

Uge N svarer til modul N på DTU Learn.

- [[Courses/Programming for Mathematical Software/Uger/Uge 01 - Introduktion til C, input og output|Uge 1: Introduktion til C, input og output]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 02 - Flydende tal, kontrolstrukturer, basistyper|Uge 2: Flydende tal, kontrolstrukturer, basistyper]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 03 - Unix-systemet, løkker, arrays, funktioner|Uge 3: Unix-systemet, løkker, arrays, funktioner]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 04 - Conditioning, numerisk stabilitet, pointere|Uge 4: Conditioning, numerisk stabilitet, pointere]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 05 - Abstrakte datastrukturer og dynamisk hukommelse|Uge 5: Datastrukturer og dynamisk hukommelse]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 06 - Filer og data, sparse matricer|Uge 6: Filer, strenge og sparse matricer]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 07 - Hukommelsesmodel, timing, kompleksitet og compileroptimering|Uge 7: Hukommelsesmodel, tid, kompleksitet, optimering]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 08 - Eksterne biblioteker (BLAS og LAPACK)|Uge 8: Eksterne biblioteker (BLAS og LAPACK)]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 09 - Parallelle beregninger og OpenMP|Uge 9: Parallelle beregninger og OpenMP]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 10 - Test og debugging|Uge 10: Test og debugging]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 11 - Rekursion|Uge 11: Rekursion]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 12 - C++ og objektorienteret programmering|Uge 12: C++ og objektorienteret programmering]]
- [[Courses/Programming for Mathematical Software/Uger/Uge 13 - Objektorienteret programmering og repetition|Uge 13: Objektorienteret programmering, repetition]]

Tilbage til [[Courses/Programming for Mathematical Software/Programming for Mathematical Software|kursusforsiden]].

## Pensum

Kilde: kursusbeskrivelsen på kurser.dtu.dk (02635 Mathematical software programming, opdateret 4. maj 2026) og modultabellen under Course overview på DTU Learn. Eksamen: skriftlig, 4 timer, alle hjælpemidler uden internet, 7-trins-skala. Bedømmelse ifølge slides i uge 1: Autolab 5 %, én afleveringsopgave 10 %, skriftlig eksamen 85 %. Bøger: K. N. King, "C Programming: A Modern Approach", 2. udgave; Horton, "Beginning C++"; kursets lecture notes.

Læsestof pr. modul:

| Modul | Læsestof | Emne |
|---|---|---|
| [[Courses/Programming for Mathematical Software/Uger/Uge 01 - Introduktion til C, input og output\|1]] | King kap. 1, 2, 3 (skim); lecture notes kap. 1, App. A.1 til A.3 | Introduktion til C, input og output |
| [[Courses/Programming for Mathematical Software/Uger/Uge 02 - Flydende tal, kontrolstrukturer, basistyper\|2]] | King kap. 4, 5 (skim), 7, 23.1, 23.4; lecture notes kap. 2 og 3 | Flydende tal, kontrolstrukturer, basistyper |
| [[Courses/Programming for Mathematical Software/Uger/Uge 03 - Unix-systemet, løkker, arrays, funktioner\|3]] | King kap. 6, 8, 9, 10 (opgavearket: uden 9.6, som hører til modul 11); lecture notes App. A.5 | Unix, løkker, arrays, funktioner |
| [[Courses/Programming for Mathematical Software/Uger/Uge 04 - Conditioning, numerisk stabilitet, pointere\|4]] | King kap. 11, 12, 15.4; lecture notes kap. 4 | Conditioning, stabilitet, pointere |
| [[Courses/Programming for Mathematical Software/Uger/Uge 05 - Abstrakte datastrukturer og dynamisk hukommelse\|5]] | King kap. 14, 16, 17 (opgavearket: 17.1 til 17.6); lecture notes kap. 5 | Datastrukturer og dynamisk hukommelse |
| [[Courses/Programming for Mathematical Software/Uger/Uge 06 - Filer og data, sparse matricer\|6]] | King kap. 13, 22, 23.6; lecture notes kap. 6 | Filer, strenge, sparse matricer |
| [[Courses/Programming for Mathematical Software/Uger/Uge 07 - Hukommelsesmodel, timing, kompleksitet og compileroptimering\|7]] | King kap. 26.3; lecture notes kap. 7 | Tid, kompleksitet, optimering |
| [[Courses/Programming for Mathematical Software/Uger/Uge 08 - Eksterne biblioteker (BLAS og LAPACK)\|8]] | Lecture notes kap. 8 | BLAS og LAPACK |
| [[Courses/Programming for Mathematical Software/Uger/Uge 09 - Parallelle beregninger og OpenMP\|9]] | Intet bogstof angivet; hjemmearbejde: Wikipedia-artiklerne om CPU time og wall-clock time (slides og opgaveark) | Parallelle beregninger og OpenMP |
| [[Courses/Programming for Mathematical Software/Uger/Uge 10 - Test og debugging\|10]] | Lecture notes kap. 9 | Test og debugging |
| [[Courses/Programming for Mathematical Software/Uger/Uge 11 - Rekursion\|11]] | King afsnit 9.6 (s. 204 til 209); Big-O Cheat Sheet | Rekursion |
| [[Courses/Programming for Mathematical Software/Uger/Uge 12 - C++ og objektorienteret programmering\|12]] | Beginning C++ s. 1 til 9, 20 til 22, 315 til 333 | C++ og klasser |
| [[Courses/Programming for Mathematical Software/Uger/Uge 13 - Objektorienteret programmering og repetition\|13]] | Beginning C++ s. 52 til 53, 168 til 172, 180 til 182, 495 til 499 (templates, `vector`, `list`) | Templates og STL-containere |

Læringsmål fra kursusbeskrivelsen og hvor de dækkes (uge = modul):

| Læringsmål | Uge |
|---|---|
| Evaluere diskrete og kontinuerlige matematiske udtryk | 1, 2, 4 |
| Datastrukturer: lister, arrays og sparse matricer | 3, 5, 6 |
| Valg af passende datatyper og datastrukturer | 2, 5, 6 |
| Iterative mod rekursive løsninger | 11 |
| Køretid samt tids- og pladskompleksitet | 7, 11 |
| Kalde eksterne programmer og biblioteker | 8 (BLAS, LAPACK), 6 (MSP Tools) |
| Designe, implementere og dokumentere et program (rapport) | 7 og 8 (afleveringsopgave med rapport), 10 |
| Debugge og teste matematisk software | 10 |
| Objektorienteret programmering: klasser og objekter | 12, 13 |
| Afrundingsfejl og repræsentation af flydende tal | 2, 4 |
| Indlæsning af data; optimering og parallelisering (indhold) | 6; 7, 9 |

Afgrænsning:

- Modeldiagrammer markeret "supplerende illustration" (kompileringskæde, cachehierarki, roofline, vtable, HPC-stak m.fl.) er ikke fra slides. Roofline (uge 8), vtable (uge 12) og HPC-stakken (uge 13) er ikke pensum.
- Uge 12 og 13 (C++) bygger på opgavearkene og de angivne sider i "Beginning C++"; slides er ikke tilgængelige i DTU Learn.

## Om kilderne

Noterne bygger på modulernes opgaveark (`moduleNN.pdf`), forelæsningsslides (`slides01.pdf` til `slides10.pdf`, Bernd Dammanns `UnixIntroSlides.pdf` og `slides09.pdf`), løsningsarkene (`sols_module01.pdf` til `sols_module08.pdf`, `solutions09.pdf`), øvelseshæfterne (`UnixIntroLabs.pdf`, `macOS_OpenMP_Compiler.pdf`), filerne i `module07.tar`, `module08.tar`, `msptools_demo.tar` og `exercises09.zip`, kursets meddelelser og modultabellen på kursusforsiden.

Ikke tilgængeligt i DTU Learn: slides og løsninger til modul 11, 12 og 13, løsninger til Autolab-opgaverne, lærebogen og lecture notes. Quizzer og Autolab-opgaver er ikke gengivet; afleveringsopgaven er bedømt aflevering. Løsningsidéerne under hver opgave er korte resuméer af løsningsarkene, ikke fuld kode.
