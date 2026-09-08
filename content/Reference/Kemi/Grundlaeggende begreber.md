---
title: Grundlæggende Kemibegreber & Beregninger
publish: true
type: reference
tags:
  - kemi
  - støkiometri
  - begreber
---

# Grundlæggende Kemibegreber

## 1. Støkiometri og stofmængde

- **Stofmængde $n$**:
  $$n = \frac{m}{M}$$
  hvor $m$ er masse i gram (g), $M$ er molarmasse i gram pr. mol (g/mol), og $n$ måles i mol.
- **Avogadros konstant $N_A$**:
  $$N_A \approx 6.022 \times 10^{23} \, \text{mol}^{-1}$$
  $$N = n \cdot N_A \quad (\text{antal partikler})$$
- **Stofmængdekoncentration (molaritet) $c$**:
  $$c = \frac{n}{V}$$
  hvor $V$ er volumen i liter (L), og $c$ måles i mol/L (M).
- **Fortyndingsformlen**:
  $$c_1 \cdot V_1 = c_2 \cdot V_2$$

## 2. Gasser

- **Idealgasligningen**:
  $$p \cdot V = n \cdot R \cdot T$$
  hvor:
  - $p$ er tryk i Pa eller bar.
  - $V$ er volumen i $\text{m}^3$ eller L.
  - $R$ er gaskonstanten: $R = 8.314 \, \frac{\text{J}}{\text{mol} \cdot \text{K}} = 0.08314 \, \frac{\text{bar} \cdot \text{L}}{\text{mol} \cdot \text{K}}$.
  - $T$ er absolut temperatur i Kelvin: $T(\text{K}) = T(^\circ\text{C}) + 273.15$.
- **Molart volumen ved standardbetingelser ($0^\circ\text{C}, 1.013 \, \text{bar}$)**:
  $$V_m = 22.41 \, \text{L/mol}$$

## 3. Syre-base kemi og pH

- **Vands autoprotolyse og ionprodukt ($25^\circ\text{C}$)**:
  $$2\text{H}_2\text{O(l)} \rightleftharpoons \text{H}_3\text{O}^+\text{(aq)} + \text{OH}^-\text{(aq)}$$
  $$K_w = [\text{H}_3\text{O}^+] \cdot [\text{OH}^-] = 1.0 \times 10^{-14} \, \text{M}^2$$
  $$\text{pH} + \text{pOH} = 14$$
- **Definition af pH og pOH**:
  $$\text{pH} = -\log[\text{H}_3\text{O}^+], \quad [\text{H}_3\text{O}^+] = 10^{-\text{pH}}$$
  $$\text{pOH} = -\log[\text{OH}^-], \quad [\text{OH}^-] = 10^{-\text{pOH}}$$
- **Stærk syre**:
  $$\text{pH} = -\log(c_s)$$
- **Svag syre (bufferligningen / Henderson-Hasselbalch)**:
  $$\text{pH} = \text{p}K_a + \log\left( \frac{[\text{Base}]}{[\text{Syre}]} \right)$$
