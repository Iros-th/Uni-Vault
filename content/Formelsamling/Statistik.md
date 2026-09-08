---
publish: true
title: Formelsamling - Statistik
type: reference
tags:
  - formelsamling
  - statistik
  - reference
---

# Formelsamling: Statistik

Hurtig oversigt over de vigtigste formler i deskriptiv statistik og sandsynlighed. Den udvidede version med fordelinger og test ligger i [[Reference/Formelsamling/Sandsynlighed og statistik|Sandsynlighed og statistik]].

## Deskriptiv statistik

| Størrelse | Formel | Betydning |
|---|---|---|
| Middelværdi | $\bar{x} = \dfrac{1}{n}\sum_{i=1}^{n} x_i$ | Gennemsnittet af observationerne |
| Varians (stikprøve) | $s^2 = \dfrac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$ | Middel af kvadrerede afvigelser |
| Spredning | $s = \sqrt{s^2}$ | Kvadratroden af variansen |
| Median | midterste værdi | Robust over for outliers |
| Variationsbredde | $\max - \min$ | Spredning fra mindste til største |

## Sandsynlighed

$$P(A) = \frac{\text{gunstige udfald}}{\text{mulige udfald}}, \qquad 0 \le P(A) \le 1$$

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \qquad P(B) \neq 0$$

Uafhængige hændelser: $P(A \cap B) = P(A)\,P(B)$.

## Standardisering og normalfordeling

$$z = \frac{x - \mu}{\sigma}$$

For $X \sim N(\mu, \sigma^2)$ ligger cirka $68\%$ inden for $\mu \pm \sigma$, $95\%$ inden for $\mu \pm 2\sigma$ og $99{,}7\%$ inden for $\mu \pm 3\sigma$.

## Konfidensinterval for middelværdi

$$\bar{x} \pm z_{1-\alpha/2}\,\frac{\sigma}{\sqrt{n}}$$

hvor $z_{0{,}975} \approx 1{,}96$ for et $95\%$ interval.

## Links

- [[Formelsamling/Formelsamling|Formelsamling]]
- [[Reference/Formelsamling/Sandsynlighed og statistik|Sandsynlighed og statistik]]
- [[Courses/Statistics/Statistics|Statistik]]
- [[Glossary]]
