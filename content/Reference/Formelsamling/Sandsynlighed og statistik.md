---
title: Sandsynlighedsregning og statistik - Formelsamling
publish: true
type: reference
tags:
  - formelsamling
  - statistik
  - sandsynlighed
---

# Sandsynlighed og Statistik

## 1. Kombinatorik

- **Fakultet**:
  $$n! = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1, \quad 0! = 1$$
- **Kombinationer (rækkefølge ligegyldig, $n$ vælg $r$)**:
  $$K(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$
- **Permutationer (rækkefølge vigtig)**:
  $$P(n, r) = \frac{n!}{(n-r)!}$$

## 2. Sandsynlighedsfelt

- **Klassisk sandsynlighed (Laplace-fordeling)**:
  $$P(A) = \frac{\text{antal gunstige udfald}}{\text{antal mulige udfald}}$$
- **Komplementærhændelse**:
  $$P(\bar{A}) = 1 - P(A)$$
- **Additionsformel**:
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
- **Betinget sandsynlighed**:
  $$P(A | B) = \frac{P(A \cap B)}{P(B)}$$
- **Uafhængighed**:
  $$A \text{ og } B \text{ er uafhængige} \iff P(A \cap B) = P(A) \cdot P(B)$$

## 3. Binomialfordeling

En stokastisk variabel $X \sim \text{Bin}(n, p)$ modellerer antal succeser i $n$ uafhængige forsøg med sandsynlighed $p$:
- **Sandsynlighedsfunktion**:
  $$P(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}, \quad k = 0, 1, \dots, n$$
- **Middelværdi**:
  $$\mu = E(X) = n \cdot p$$
- **Varians og spredning**:
  $$\text{Var}(X) = n \cdot p \cdot (1 - p), \quad \sigma = \sqrt{n \cdot p \cdot (1 - p)}$$

## 4. Normalfordeling

En kontinuert stokastisk variabel $X \sim N(\mu, \sigma^2)$ har tæthedsfunktionen:
$$f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)$$
- **Z-standardisering**:
  $$Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$$
- **Normale kontrolintervaller**:
  - $P(\mu - \sigma \le X \le \mu + \sigma) \approx 68.27\%$
  - $P(\mu - 2\sigma \le X \le \mu + 2\sigma) \approx 95.45\%$
  - $P(\mu - 1.96\sigma \le X \le \mu + 1.96\sigma) = 95.00\%$

## 5. $\chi^2$-test

Teststørrelsen for goodness-of-fit eller uafhængighedstest i en korrelationstabel:
$$Q = \chi^2 = \sum \frac{(O - E)^2}{E}$$
hvor $O$ er den observerede hyppighed, og $E$ er den forventede hyppighed:
$$E = \frac{\text{Rækkesum} \cdot \text{Kolonnesum}}{\text{Totalsum}}$$
- **Frihedsgrader**: $df = (r - 1)(c - 1)$ for en tabel med $r$ rækker og $c$ kolonner.
