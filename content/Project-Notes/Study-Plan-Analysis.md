---
title: Study Plan Analysis & Optimization
tags:
  - meta
  - project
  - roadmap
---

# Study Plan Analysis & Optimization

> [!note] What this is
> An analysis of your DTU study plan, cross-checked against the live course catalogue at [kurser.dtu.dk](https://kurser.dtu.dk) (2025/2026). No `publish: true`, so it stays out of the built site.

## TL;DR (read this first)

1. **Fill the two open electives with `01018` Discrete Mathematics 2: Algebra (autumn) and `02105` Algorithms & Data Structures 1 (spring).** Both reuse things you already study, so they add less *new* load. ~15 min to skim both course pages linked below.
2. **Biggest content overlaps:** Mat1a↔Mat1b (same course, two halves), Discrete Math↔02525 proofs↔Mat1a induction, Numerical Algorithms↔Programming↔Mat1b, and Mathematical Modelling pulls from *everything* (take it last).
3. **Lowest-effort remaining courses:** Discrete Math, the new 01018 elective, Numerical Algorithms, Statistics. **Heaviest:** Physics (10 ECTS), Mat1a/1b (10 ECTS each), Mathematical Modelling (capstone).
4. **One thing to check yourself:** your Chemistry course (`26000` General Chemistry) has **no 2025/2026 page** in the catalogue — confirm the current course number with your study line.

---

## 1. The parsed plan

Your plan is the **BSc in Matematik og Teknologi** foundation (confirmed: course `02525` is *reserved for Mathematics and Technology bachelor students*). The vault doesn't store a formal term-by-term ECTS table — the plan lives as ten course folders grouped into three phases in `Study-Roadmap.md`, with the "course code / term" fields left blank. I filled those in from the catalogue.

Every field below is copied from kurser.dtu.dk (2025/2026). Season key: **E = autumn, F = spring.**

| Vault course | DTU no. | Official title | ECTS | Language | Season / schedule | Exam | Grading |
|---|---|---|---|---|---|---|---|
| Introduction to applied mathematics | **02525** | Introduction to Mathematics and Technology | 10 | Danish | Autumn E2A **+ January** | 4h written (70%) + reports (30%) | 7-step, external |
| Matematik 1A | **01003** | Mathematics 1a (Polytechnical foundation) | 10 | English | Autumn (E5 + E3B) | 4h written + thematic exercises | 7-step, external |
| Diff. Equations & Infinite Series | **01004** | Mathematics 1b (Polytechnical foundation) | 10 | English | Spring (F3B + F5) | 4h written + project report | 7-step, external |
| Diskret matematik | **01017** | Discrete Mathematics | 5 | English | Autumn E2B | 3h written + exercises | 7-step, internal |
| Programming | **02002** | Computer Programming (Polytechnical foundation) | 5 | Danish | Autumn E1B | 4h written | 7-step, internal |
| Physics | **10060** | Physics (Polytechnical foundation) | 10 | English | Spans Spring **and** Autumn (13+13 wks) | written 80% + labs 20% | 7-step, internal |
| Statistics | **02402** | Statistics (Polytechnical foundation) | 5 | Danish | Autumn E3A **or** Spring F4A | 4h written | 7-step, external |
| Numerical Algorithms | **02601** | Introduction to Numerical Algorithms | 5 | Danish (F) / English (E) | Spring F1B **or** Autumn E4B | 4h written + 3-of-4 assignments | 7-step, internal |
| Mathematical Modelling | **02526** | Mathematical Modeling | 5 | English | Spring F3A | 15-min oral + 3 reports | 7-step, external |
| Chemistry | 26000? | General Chemistry *(unconfirmed)* | ? | ? | ? | ? | **verify — see note** |

**Load by roadmap phase** (the vault's three groups ≈ your three "terms"):

- **Phase 1 — Fundamentet:** 02525 (10) + Diskret 01017 (5) + Programming 02002 (5) = **20 ECTS**
- **Phase 2 — Bygger ovenpå:** Mat1a 01003 (10) + Chemistry 26000 (≈5) + Physics 10060 (10) + Statistics 02402 (5) = **≈30 ECTS**
- **Phase 3 — Videregående:** Mat1b 01004 (10) + Numerical 02601 (5) + Modelling 02526 (5) = **20 ECTS**

Total ≈ **70 ECTS** + 2 electives (≈10) ≈ **80 ECTS**.

> [!warning] Scheduling reality vs. the phases
> The three phases are a *learning* order, not a *calendar* order. The seasons above impose hard constraints the phases hide: **Mat1a is autumn-only, Mat1b is spring-only and needs Mat1a first, Numerical needs Mat1b, and Modelling (02526, spring only) lists prerequisites in almost every other course.** Use the ordering in section 4, not the raw phase grouping, when you actually register.

---

## 2. The two unchosen electives — recommended picks

You have two empty `valgfri` slots. Both picks below were chosen to be (a) manageable and (b) heavy on material you're *already* covering, so the extra course adds less genuinely-new work. Both are verified as currently offered.

### Slot A (autumn) → `01018` Discrete Mathematics 2: Algebra — 5 ECTS

- Verify: [kurser.dtu.dk/course/2025-2026/01018](https://kurser.dtu.dk/course/2025-2026/01018)
- English · Autumn **E3B (Fri 13-17)** · 7-step, internal examiner · written exam + exercises.
- **Why it's low added-load:** the catalogue's own prerequisite text says it reuses, directly from courses you already take: *the induction principle, the extended Euclidean algorithm (integers and polynomials), and modular arithmetic* from **Diskret matematik (01017)**, plus *matrix arithmetic, linear maps, kernel and image* from **Mat1a (01003)**. It is essentially "more of 01017," so most of the machinery is already in your head.
- **When:** take it in an autumn *after* you've done 01017 (its prerequisite). Slots into an autumn term cleanly at E3B.

### Slot B (spring) → `02105` Algorithms & Data Structures 1 — 5 ECTS

- Verify: [kurser.dtu.dk/course/2025-2026/02105](https://kurser.dtu.dk/course/2025-2026/02105)
- English · Spring **F2B (Thurs 8-12)** · 7-step, external examiner · written exam.
- **Why it overlaps:** prerequisites are exactly *an introductory programming course + an introductory discrete-math course* — i.e. **Programming (02002)** and **Diskret matematik (01017)**, both already in your plan. You reuse Python, graph theory, combinatorics, induction and complexity arguments rather than learning a new toolset.
- **Honesty flag:** this one is *moderate*, not trivial (external examiner, a real step up in rigour). It's the highest-overlap spring option, but if you want the lightest possible load, see the alternative below.

### Lighter alternative for Slot B (if you want minimum stress)

`02461` Introduction to Intelligent Systems — [kurser.dtu.dk/course/2025-2026/02461](https://kurser.dtu.dk/course/2025-2026/02461) · 10 ECTS · Danish · Autumn E5B + January · **pass / not-pass** (no 7-step grade pressure). It reuses your linear algebra (Mat1a) and Python (02002). Trade-off: it's 10 ECTS, not 5, and pass/fail — good if a slot is that size and you want a low-anxiety course, worse if your open slots are 5 ECTS.

---

## 3. Repetitive / overlapping course clusters

You already noticed **Diskret matematik ↔ Mat1a** overlap. Here are the other heavy overlaps, with the specific shared topics, so you can sequence them together (or pick the easier of a redundant pair):

**A. Proof / logic / induction cluster** — `02525` + `01017` Discrete + `01003` Mat1a
Shared topics: propositional & predicate logic, truth tables, **mathematical induction**, set theory, relations, and formal proof technique. Your `Introduction to applied mathematics` "Proofs (Brander)" notes are the same material as the proof strand in 02525 and the logic strand in Discrete Math. → **Take all three in the same (first) autumn** so induction and proofs are learned once, not three times.

**B. Calculus continuum** — `01003` Mat1a ↔ `01004` Mat1b
These are literally halves of the same course (Mathematics 1). Shared: differentiation/integration, linear algebra, eigenvalues → feeding into **Taylor/power series, convergence, and ODEs** in 1b. → Adjacent terms (autumn → spring); nothing to optimise, just don't leave a gap between them.

**C. Numerical ↔ Programming ↔ Calculus** — `02601` Numerical uses `02002` Python + Mat1a/1b
Shared: **Newton's method** (derivatives), **interpolation** (polynomials), **ODE solvers** (the ODEs from Mat1b), root-finding and linear systems — all implemented in Python. → Take Numerical right after Mat1b, while Python is still fresh.

**D. Statistics ↔ Calculus ↔ Discrete** — `02402` Statistics
Shared: **integration** (probability densities, from Mat1a) and **combinatorics/counting** (from Discrete Math, feeding probability). → Easiest right after Mat1a + Discrete Math.

**E. Physics ↔ Calculus/DiffEq** — `10060` Physics
Shared: vectors and linear algebra, differentiation/integration, and **second-order ODEs** (mechanics, oscillations) — the same ODEs as Mat1b. → Pair Physics with or just after Mat1b so the differential-equation maths lands in both at once.

**F. Modelling = the union of everything** — `02526`
Its catalogue prerequisites explicitly name Mat1b, Numerical (02601), Statistics (02402), Programming/02525, and Physics (10022/10018). Shared: differential-equation models, numerical solution, statistical validation, Python. → **Take it last**; it's the capstone that recombines the rest.

---

## 4. Easy-win scan + optimized ordering

**Lowest effort given what you already know** (front-load or use as buffers):
- **Diskret matematik (01017)** — 5 ECTS, 3h exam, internal examiner; largely logic/sets/induction you also meet in 02525.
- **01018 Discrete Math 2** (new elective) — reuses 01017 + Mat1a almost entirely.
- **Numerical Algorithms (02601)** — mechanical once you have Python + calculus; internal examiner.
- **Statistics (02402)** — light on new theory, mostly integration + standard procedures.

**Heaviest (spread these out, don't stack two in one term):**
- **Physics (10060)** — 10 ECTS and spans two semesters.
- **Mat1a / Mat1b** — 10 ECTS each, external examiner.
- **Mathematical Modelling (02526)** — integrative capstone.

**Recommended ordering (respects seasons + prerequisites, front-loads synergy):**

1. **Autumn 1:** 02525 + Mat1a (01003) + Diskret (01017) + Programming (02002). *The whole proof/logic/induction/linear-algebra/Python cluster in one term — maximum reinforcement.* (~30 ECTS; heavy but every course feeds the others.)
2. **Spring 1:** Mat1b (01004) + Statistics (02402, F4A) + start Physics (10060) + **elective 02105** (reuses the Python + discrete math you just finished).
3. **Autumn 2:** finish Physics (10060) + Chemistry + Numerical (02601, E4B, English) + **elective 01018** (E3B — extends Diskret while it's still fresh).
4. **Spring 2:** Mathematical Modelling (02526, F3A) last, as the capstone that pulls the whole toolbox together.

Adjust term numbers to your real start; the *relative* order and the pairings (proof cluster together; Numerical after Mat1b; both electives next to their overlap courses; Modelling last) are what matter.

---

## Sources

All course facts verified against DTU Course Base, 2025/2026:
- [02525 Introduction to Mathematics and Technology](https://kurser.dtu.dk/course/2025-2026/02525)
- [01003 Mathematics 1a](https://kurser.dtu.dk/course/2025-2026/01003) · [01004 Mathematics 1b](https://kurser.dtu.dk/course/2025-2026/01004)
- [01017 Discrete Mathematics](https://kurser.dtu.dk/course/2025-2026/01017) · [01018 Discrete Mathematics 2: Algebra](https://kurser.dtu.dk/course/2025-2026/01018)
- [02002 Computer Programming](https://kurser.dtu.dk/course/2025-2026/02002) · [02105 Algorithms & Data Structures 1](https://kurser.dtu.dk/course/2025-2026/02105)
- [10060 Physics](https://kurser.dtu.dk/course/2025-2026/10060) · [02402 Statistics](https://kurser.dtu.dk/course/2025-2026/02402)
- [02601 Introduction to Numerical Algorithms](https://kurser.dtu.dk/course/2025-2026/02601) · [02526 Mathematical Modeling](https://kurser.dtu.dk/course/2025-2026/02526)
- [02461 Introduction to Intelligent Systems](https://kurser.dtu.dk/course/2025-2026/02461)
- Chemistry `26000` (General Chemistry): **no 2025/2026 course page found** — confirm the current number before relying on it.
