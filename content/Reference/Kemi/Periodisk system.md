---
title: Interaktivt Periodisk System
publish: true
type: reference
tags:
  - kemi
  - periodisk-system
  - grundstoffer
  - interaktiv
---

# Det Periodiske System

Et interaktivt opslagsværk over alle grundstoffer. Klik på et grundstof for at se detaljerede kemiske egenskaber, elektronkonfiguration, Pauling-elektronegativitet og smelte/kogepunkter.

<div class="ptable-wrapper">
  <div class="ptable-grid" id="ptable-grid">
    <!-- Genereres dynamisk via JavaScript -->
  </div>
</div>

<div id="ptable-details" class="ptable-preview">
  <h3>Vælg et grundstof</h3>
  <p>Klik på et vilkårligt grundstof i tabellen ovenfor for at inspicere atomnummer, atommasse, elektronegativitet og tilstandsformer.</p>
</div>

<script>
const elements = [
  { n: 1, s: "H", name: "Hydrogen", mass: "1.008", cat: "cat-nonmetal", cName: "Ikke-metal", period: 1, group: 1, en: "2.20", eConf: "1s¹", state: "Gas", melt: "-259.1", boil: "-252.9", ox: "+1, -1" },
  { n: 2, s: "He", name: "Helium", mass: "4.0026", cat: "cat-noble", cName: "Ædelgas", period: 1, group: 18, en: "-", eConf: "1s²", state: "Gas", melt: "-272.2", boil: "-268.9", ox: "0" },
  { n: 3, s: "Li", name: "Lithium", mass: "6.94", cat: "cat-alkali", cName: "Alkalimetal", period: 2, group: 1, en: "0.98", eConf: "[He] 2s¹", state: "Fast stof", melt: "180.5", boil: "1342", ox: "+1" },
  { n: 4, s: "Be", name: "Beryllium", mass: "9.0122", cat: "cat-alkaline", cName: "Jordalkalimetal", period: 2, group: 2, en: "1.57", eConf: "[He] 2s²", state: "Fast stof", melt: "1287", boil: "2470", ox: "+2" },
  { n: 5, s: "B", name: "Bor", mass: "10.81", cat: "cat-metalloid", cName: "Halvmetal", period: 2, group: 13, en: "2.04", eConf: "[He] 2s² 2p¹", state: "Fast stof", melt: "2076", boil: "3927", ox: "+3" },
  { n: 6, s: "C", name: "Carbon (Kulstof)", mass: "12.011", cat: "cat-nonmetal", cName: "Ikke-metal", period: 2, group: 14, en: "2.55", eConf: "[He] 2s² 2p²", state: "Fast stof", melt: "3550", boil: "4827", ox: "-4, +2, +4" },
  { n: 7, s: "N", name: "Nitrogen (Kvælstof)", mass: "14.007", cat: "cat-nonmetal", cName: "Ikke-metal", period: 2, group: 15, en: "3.04", eConf: "[He] 2s² 2p³", state: "Gas", melt: "-210.0", boil: "-195.8", ox: "-3, +3, +5" },
  { n: 8, s: "O", name: "Oxygen (Ilt)", mass: "15.999", cat: "cat-nonmetal", cName: "Ikke-metal", period: 2, group: 16, en: "3.44", eConf: "[He] 2s² 2p⁴", state: "Gas", melt: "-218.8", boil: "-182.9", ox: "-2" },
  { n: 9, s: "F", name: "Fluor", mass: "18.998", cat: "cat-halogen", cName: "Halogen", period: 2, group: 17, en: "3.98", eConf: "[He] 2s² 2p⁵", state: "Gas", melt: "-219.6", boil: "-188.1", ox: "-1" },
  { n: 10, s: "Ne", name: "Neon", mass: "20.180", cat: "cat-noble", cName: "Ædelgas", period: 2, group: 18, en: "-", eConf: "[He] 2s² 2p⁶", state: "Gas", melt: "-248.6", boil: "-246.1", ox: "0" },
  { n: 11, s: "Na", name: "Natrium", mass: "22.990", cat: "cat-alkali", cName: "Alkalimetal", period: 3, group: 1, en: "0.93", eConf: "[Ne] 3s¹", state: "Fast stof", melt: "97.8", boil: "883", ox: "+1" },
  { n: 12, s: "Mg", name: "Magnesium", mass: "24.305", cat: "cat-alkaline", cName: "Jordalkalimetal", period: 3, group: 2, en: "1.31", eConf: "[Ne] 3s²", state: "Fast stof", melt: "650", boil: "1090", ox: "+2" },
  { n: 13, s: "Al", name: "Aluminium", mass: "26.982", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 3, group: 13, en: "1.61", eConf: "[Ne] 3s² 3p¹", state: "Fast stof", melt: "660.3", boil: "2470", ox: "+3" },
  { n: 14, s: "Si", name: "Silicium", mass: "28.085", cat: "cat-metalloid", cName: "Halvmetal", period: 3, group: 14, en: "1.90", eConf: "[Ne] 3s² 3p²", state: "Fast stof", melt: "1414", boil: "3265", ox: "-4, +4" },
  { n: 15, s: "P", name: "Phosphor", mass: "30.974", cat: "cat-nonmetal", cName: "Ikke-metal", period: 3, group: 15, en: "2.19", eConf: "[Ne] 3s² 3p³", state: "Fast stof", melt: "44.15", boil: "280.5", ox: "-3, +3, +5" },
  { n: 16, s: "S", name: "Svovl", mass: "32.06", cat: "cat-nonmetal", cName: "Ikke-metal", period: 3, group: 16, en: "2.58", eConf: "[Ne] 3s² 3p⁴", state: "Fast stof", melt: "115.2", boil: "444.6", ox: "-2, +4, +6" },
  { n: 17, s: "Cl", name: "Chlor", mass: "35.45", cat: "cat-halogen", cName: "Halogen", period: 3, group: 17, en: "3.16", eConf: "[Ne] 3s² 3p⁵", state: "Gas", melt: "-101.5", boil: "-34.04", ox: "-1, +1, +3, +5, +7" },
  { n: 18, s: "Ar", name: "Argon", mass: "39.948", cat: "cat-noble", cName: "Ædelgas", period: 3, group: 18, en: "-", eConf: "[Ne] 3s² 3p⁶", state: "Gas", melt: "-189.3", boil: "-185.8", ox: "0" },
  { n: 19, s: "K", name: "Kalium", mass: "39.098", cat: "cat-alkali", cName: "Alkalimetal", period: 4, group: 1, en: "0.82", eConf: "[Ar] 4s¹", state: "Fast stof", melt: "63.5", boil: "759", ox: "+1" },
  { n: 20, s: "Ca", name: "Calcium", mass: "40.078", cat: "cat-alkaline", cName: "Jordalkalimetal", period: 4, group: 2, en: "1.00", eConf: "[Ar] 4s²", state: "Fast stof", melt: "842", boil: "1484", ox: "+2" },
  { n: 21, s: "Sc", name: "Scandium", mass: "44.956", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 3, en: "1.36", eConf: "[Ar] 3d¹ 4s²", state: "Fast stof", melt: "1541", boil: "2836", ox: "+3" },
  { n: 22, s: "Ti", name: "Titan", mass: "47.867", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 4, en: "1.54", eConf: "[Ar] 3d² 4s²", state: "Fast stof", melt: "1668", boil: "3287", ox: "+2, +3, +4" },
  { n: 23, s: "V", name: "Vanadium", mass: "50.942", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 5, en: "1.63", eConf: "[Ar] 3d³ 4s²", state: "Fast stof", melt: "1910", boil: "3407", ox: "+2, +3, +4, +5" },
  { n: 24, s: "Cr", name: "Chrom", mass: "51.996", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 6, en: "1.66", eConf: "[Ar] 3d⁵ 4s¹", state: "Fast stof", melt: "1907", boil: "2671", ox: "+2, +3, +6" },
  { n: 25, s: "Mn", name: "Mangan", mass: "54.938", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 7, en: "1.55", eConf: "[Ar] 3d⁵ 4s²", state: "Fast stof", melt: "1246", boil: "2061", ox: "+2, +4, +7" },
  { n: 26, s: "Fe", name: "Jern", mass: "55.845", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 8, en: "1.83", eConf: "[Ar] 3d⁶ 4s²", state: "Fast stof", melt: "1538", boil: "2862", ox: "+2, +3" },
  { n: 27, s: "Co", name: "Cobalt", mass: "58.933", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 9, en: "1.88", eConf: "[Ar] 3d⁷ 4s²", state: "Fast stof", melt: "1495", boil: "2927", ox: "+2, +3" },
  { n: 28, s: "Ni", name: "Nikkel", mass: "58.693", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 10, en: "1.91", eConf: "[Ar] 3d⁸ 4s²", state: "Fast stof", melt: "1455", boil: "2913", ox: "+2, +3" },
  { n: 29, s: "Cu", name: "Kobber", mass: "63.546", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 11, en: "1.90", eConf: "[Ar] 3d¹⁰ 4s¹", state: "Fast stof", melt: "1084.6", boil: "2562", ox: "+1, +2" },
  { n: 30, s: "Zn", name: "Zink", mass: "65.38", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 12, en: "1.65", eConf: "[Ar] 3d¹⁰ 4s²", state: "Fast stof", melt: "419.5", boil: "907", ox: "+2" },
  { n: 31, s: "Ga", name: "Gallium", mass: "69.723", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 4, group: 13, en: "1.81", eConf: "[Ar] 3d¹⁰ 4s² 4p¹", state: "Fast stof (smelter i hånden)", melt: "29.76", boil: "2204", ox: "+3" },
  { n: 32, s: "Ge", name: "Germanium", mass: "72.630", cat: "cat-metalloid", cName: "Halvmetal", period: 4, group: 14, en: "2.01", eConf: "[Ar] 3d¹⁰ 4s² 4p²", state: "Fast stof", melt: "938.3", boil: "2833", ox: "+2, +4" },
  { n: 33, s: "As", name: "Arsen", mass: "74.922", cat: "cat-metalloid", cName: "Halvmetal", period: 4, group: 15, en: "2.18", eConf: "[Ar] 3d¹⁰ 4s² 4p³", state: "Fast stof", melt: "817", boil: "614", ox: "-3, +3, +5" },
  { n: 34, s: "Se", name: "Selen", mass: "78.971", cat: "cat-nonmetal", cName: "Ikke-metal", period: 4, group: 16, en: "2.55", eConf: "[Ar] 3d¹⁰ 4s² 4p⁴", state: "Fast stof", melt: "221", boil: "685", ox: "-2, +4, +6" },
  { n: 35, s: "Br", name: "Brom", mass: "79.904", cat: "cat-halogen", cName: "Halogen", period: 4, group: 17, en: "2.96", eConf: "[Ar] 3d¹⁰ 4s² 4p⁵", state: "Væske (rødbrun)", melt: "-7.2", boil: "58.8", ox: "-1, +1, +3, +5" },
  { n: 36, s: "Kr", name: "Krypton", mass: "83.798", cat: "cat-noble", cName: "Ædelgas", period: 4, group: 18, en: "3.00", eConf: "[Ar] 3d¹⁰ 4s² 4p⁶", state: "Gas", melt: "-157.4", boil: "-153.2", ox: "0, +2" },
  { n: 47, s: "Ag", name: "Sølv", mass: "107.87", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 11, en: "1.93", eConf: "[Kr] 4d¹⁰ 5s¹", state: "Fast stof", melt: "961.8", boil: "2162", ox: "+1" },
  { n: 53, s: "I", name: "Jod", mass: "126.90", cat: "cat-halogen", cName: "Halogen", period: 5, group: 17, en: "2.66", eConf: "[Kr] 4d¹⁰ 5s² 5p⁵", state: "Fast stof (sublimerer)", melt: "113.7", boil: "184.3", ox: "-1, +1, +5, +7" },
  { n: 79, s: "Au", name: "Guld", mass: "196.97", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 11, en: "2.54", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", state: "Fast stof", melt: "1064.2", boil: "2970", ox: "+1, +3" },
  { n: 80, s: "Hg", name: "Kviksølv", mass: "200.59", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 12, en: "2.00", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", state: "Væske", melt: "-38.83", boil: "356.7", ox: "+1, +2" },
  { n: 82, s: "Pb", name: "Bly", mass: "207.2", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 6, group: 14, en: "2.33", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", state: "Fast stof", melt: "327.5", boil: "1749", ox: "+2, +4" },
  { n: 92, s: "U", name: "Uran", mass: "238.03", cat: "cat-actinide", cName: "Actinid", period: 7, group: 3, en: "1.38", eConf: "[Rn] 5f³ 6d¹ 7s²", state: "Fast stof (radioaktivt)", melt: "1132", boil: "4131", ox: "+3, +4, +5, +6" }
];

function renderTable() {
  const container = document.getElementById("ptable-grid");
  if (!container) return;
  container.innerHTML = "";

  elements.forEach(el => {
    const card = document.createElement("div");
    card.className = "ptable-cell " + el.cat;
    card.style.gridColumn = el.group;
    card.style.gridRow = el.period;
    card.innerHTML = `
      <div class="ptable-num">${el.n}</div>
      <div class="ptable-sym">${el.s}</div>
      <div class="ptable-name">${el.name}</div>
    `;
    card.onclick = () => showElementDetails(el);
    container.appendChild(card);
  });
}

function showElementDetails(el) {
  const details = document.getElementById("ptable-details");
  if (!details) return;

  details.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid var(--secondary); padding-bottom: 0.5rem; margin-bottom: 0.8rem;">
      <h2 style="margin: 0; font-size: 1.6rem;">${el.name} (${el.s}) <span style="font-size: 1rem; color: var(--gray);">Atomnummer: ${el.n}</span></h2>
      <span class="status-badge complete">${el.cName}</span>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; font-size: 0.95rem;">
      <div>
        <strong>Atommasse:</strong> ${el.mass} u<br>
        <strong>Elektronkonfiguration:</strong> <code>${el.eConf}</code><br>
        <strong>Oxidationstrin:</strong> ${el.ox}
      </div>
      <div>
        <strong>Elektronegativitet (Pauling):</strong> ${el.en}<br>
        <strong>Fysisk tilstand (25°C):</strong> ${el.state}<br>
        <strong>Smeltepunkt:</strong> ${el.melt} °C | <strong>Kogepunkt:</strong> ${el.boil} °C
      </div>
    </div>
  `;
}

// Initialiser når DOM er klar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTable);
} else {
  renderTable();
}
document.addEventListener("nav", renderTable);
</script>
