---
publish: true
title: LaTeX-makroer
type: reference
tags:
  - reference
  - latex
  - matematik
---

# LaTeX-makroer

Jeg har sat en håndfuld genveje op i Quartz, så jeg ikke skal skrive den samme lange notation igen og igen. De virker i al matematik på siden, både inline med `$...$` og i display med `$$...$$`. Skriv bare makroen i stedet for den fulde kommando.

Er selve makroerne defineret i `quartz.config.ts` under `Plugin.Latex`. Vil du tilføje en ny, så læg den ind der og hold denne liste opdateret.

## Talmængder

| Makro | Giver | Betyder |
|-------|-------|---------|
| `\R` | $\mathbb{R}$ | de reelle tal |
| `\Z` | $\mathbb{Z}$ | de hele tal |
| `\Q` | $\mathbb{Q}$ | de rationale tal |
| `\N` | $\mathbb{N}$ | de naturlige tal |
| `\C` | $\mathbb{C}$ | de komplekse tal |

## Operatorer og tegn

| Makro | Giver | Betyder |
|-------|-------|---------|
| `\eps` | $\varepsilon$ | epsilon (den pæne variant) |
| `\implies` | $\Rightarrow$ | medfører |
| `\iff` | $\Leftrightarrow$ | hvis og kun hvis |
| `\divides` | $a \mid b$ | "a går op i b" |

## Med argumenter

De her tager noget i krøllede parenteser bagefter.

| Makro | Eksempel | Giver |
|-------|----------|-------|
| `\set{...}` | `\set{1,2,3}` | $\set{1,2,3}$ |
| `\abs{...}` | `\abs{x}` | $\abs{x}$ |
| `\norm{...}` | `\norm{v}` | $\norm{v}$ |
| `\ceil{...}` | `\ceil{x}` | $\ceil{x}$ |
| `\floor{...}` | `\floor{x}` | $\floor{x}$ |
| `\vec{...}` | `\vec{v}` | $\vec{v}$ |
| `\dd` | `\int f(x) \dd x` | $\int f(x) \dd x$ |
| `\deriv{...}{...}` | `\deriv{y}{x}` | $\deriv{y}{x}$ |

Kort sagt: skriv `\R` i stedet for `\mathbb{R}`, `\abs{x}` i stedet for `\left|x\right|`, og spar dig selv for besværet.

## Links

- [[Reference/Matematik/Matematiske symboler|Matematiske symboler]]
- [[Reference/Matematik/Talmaengder|Talmængder]]
- [[index|Home]]
