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

Et interaktivt opslagsværk over alle 118 grundstoffer. Før musen hen over et grundstof for at se dets data med det samme, og klik (eller tryk Enter) for at fastholde det. Hold musen over et grundstof eller en farve i signaturforklaringen for at fremhæve hele kategorien. Hvert grundstof viser atommasse, elektronkonfiguration, Pauling-elektronegativitet, oxidationstrin og smelte/kogepunkter. Tabellen kører helt lokalt i din browser, uden internetopkald, så den virker også offline.

<div class="ptable-legend" id="ptable-legend"></div>

<div class="ptable-wrapper">
  <div class="ptable-grid" id="ptable-grid">
    <!-- Genereres dynamisk via JavaScript -->
  </div>
</div>

<div id="ptable-details" class="ptable-preview">
  <h3>Vælg et grundstof</h3>
  <p>Før musen hen over (eller klik på) et vilkårligt grundstof i tabellen ovenfor for at inspicere atomnummer, atommasse, elektronegativitet, elektronkonfiguration og tilstandsformer.</p>
</div>

Se også: [[Reference/Kemi/Kemiske konstanter|Kemiske konstanter]], [[Reference/Kemi/Kemiske symboler og notation|Kemiske symboler]], [[Reference/Kemi/Grundlaeggende begreber|Grundlæggende kemibegreber]] og kurset [[Courses/Chemistry/Chemistry|Kemi]].

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
  { n: 24, s: "Cr", name: "Chrom", mass: "51.996", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 6, en: "1.66", eConf: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵", state: "Fast stof", melt: "1907", boil: "2671", ox: "+2, +3, +6" },
  { n: 25, s: "Mn", name: "Mangan", mass: "54.938", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 7, en: "1.55", eConf: "[Ar] 3d⁵ 4s²", state: "Fast stof", melt: "1246", boil: "2061", ox: "+2, +4, +7" },
  { n: 26, s: "Fe", name: "Jern", mass: "55.845", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 8, en: "1.83", eConf: "[Ar] 3d⁶ 4s²", state: "Fast stof", melt: "1538", boil: "2862", ox: "+2, +3" },
  { n: 27, s: "Co", name: "Cobalt", mass: "58.933", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 9, en: "1.88", eConf: "[Ar] 3d⁷ 4s²", state: "Fast stof", melt: "1495", boil: "2927", ox: "+2, +3" },
  { n: 28, s: "Ni", name: "Nikkel", mass: "58.693", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 10, en: "1.91", eConf: "[Ar] 3d⁸ 4s²", state: "Fast stof", melt: "1455", boil: "2913", ox: "+2, +3" },
  { n: 29, s: "Cu", name: "Kobber", mass: "63.546", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 11, en: "1.90", eConf: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰", state: "Fast stof", melt: "1084.6", boil: "2562", ox: "+1, +2" },
  { n: 30, s: "Zn", name: "Zink", mass: "65.38", cat: "cat-transition", cName: "Overgangsmetal", period: 4, group: 12, en: "1.65", eConf: "[Ar] 3d¹⁰ 4s²", state: "Fast stof", melt: "419.5", boil: "907", ox: "+2" },
  { n: 31, s: "Ga", name: "Gallium", mass: "69.723", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 4, group: 13, en: "1.81", eConf: "[Ar] 3d¹⁰ 4s² 4p¹", state: "Fast stof", melt: "29.76", boil: "2204", ox: "+3" },
  { n: 32, s: "Ge", name: "Germanium", mass: "72.630", cat: "cat-metalloid", cName: "Halvmetal", period: 4, group: 14, en: "2.01", eConf: "[Ar] 3d¹⁰ 4s² 4p²", state: "Fast stof", melt: "938.3", boil: "2833", ox: "+2, +4" },
  { n: 33, s: "As", name: "Arsen", mass: "74.922", cat: "cat-metalloid", cName: "Halvmetal", period: 4, group: 15, en: "2.18", eConf: "[Ar] 3d¹⁰ 4s² 4p³", state: "Fast stof", melt: "817", boil: "614", ox: "-3, +3, +5" },
  { n: 34, s: "Se", name: "Selen", mass: "78.971", cat: "cat-nonmetal", cName: "Ikke-metal", period: 4, group: 16, en: "2.55", eConf: "[Ar] 3d¹⁰ 4s² 4p⁴", state: "Fast stof", melt: "221", boil: "685", ox: "-2, +4, +6" },
  { n: 35, s: "Br", name: "Brom", mass: "79.904", cat: "cat-halogen", cName: "Halogen", period: 4, group: 17, en: "2.96", eConf: "[Ar] 3d¹⁰ 4s² 4p⁵", state: "Væske", melt: "-7.2", boil: "58.8", ox: "-1, +1, +3, +5" },
  { n: 36, s: "Kr", name: "Krypton", mass: "83.798", cat: "cat-noble", cName: "Ædelgas", period: 4, group: 18, en: "3.00", eConf: "[Ar] 3d¹⁰ 4s² 4p⁶", state: "Gas", melt: "-157.4", boil: "-153.4", ox: "0, +2" },
  { n: 37, s: "Rb", name: "Rubidium", mass: "85.468", cat: "cat-alkali", cName: "Alkalimetal", period: 5, group: 1, en: "0.82", eConf: "[Kr] 5s¹", state: "Fast stof", melt: "39.3", boil: "688", ox: "+1" },
  { n: 38, s: "Sr", name: "Strontium", mass: "87.62", cat: "cat-alkaline", cName: "Jordalkalimetal", period: 5, group: 2, en: "0.95", eConf: "[Kr] 5s²", state: "Fast stof", melt: "777", boil: "1382", ox: "+2" },
  { n: 39, s: "Y", name: "Yttrium", mass: "88.906", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 3, en: "1.22", eConf: "[Kr] 4d¹ 5s²", state: "Fast stof", melt: "1526", boil: "3336", ox: "+3" },
  { n: 40, s: "Zr", name: "Zirconium", mass: "91.224", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 4, en: "1.33", eConf: "[Kr] 4d² 5s²", state: "Fast stof", melt: "1855", boil: "4409", ox: "+4" },
  { n: 41, s: "Nb", name: "Niobium", mass: "92.906", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 5, en: "1.60", eConf: "[Kr] 5s¹ 4d⁴", state: "Fast stof", melt: "2477", boil: "4744", ox: "+3, +5" },
  { n: 42, s: "Mo", name: "Molybdæn", mass: "95.95", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 6, en: "2.16", eConf: "[Kr] 5s¹ 4d⁵", state: "Fast stof", melt: "2623", boil: "4639", ox: "+4, +6" },
  { n: 43, s: "Tc", name: "Technetium", mass: "98", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 7, en: "1.90", eConf: "[Kr] 4d⁵ 5s²", state: "Fast stof", melt: "2157", boil: "4265", ox: "+4, +7" },
  { n: 44, s: "Ru", name: "Ruthenium", mass: "101.07", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 8, en: "2.20", eConf: "[Kr] 5s¹ 4d⁷", state: "Fast stof", melt: "2334", boil: "4150", ox: "+3, +4" },
  { n: 45, s: "Rh", name: "Rhodium", mass: "102.91", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 9, en: "2.28", eConf: "[Kr] 5s¹ 4d⁸", state: "Fast stof", melt: "1964", boil: "3695", ox: "+3" },
  { n: 46, s: "Pd", name: "Palladium", mass: "106.42", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 10, en: "2.20", eConf: "[Kr] 4d¹⁰", state: "Fast stof", melt: "1554.9", boil: "2963", ox: "+2, +4" },
  { n: 47, s: "Ag", name: "Sølv", mass: "107.87", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 11, en: "1.93", eConf: "[Kr] 5s¹ 4d¹⁰", state: "Fast stof", melt: "961.8", boil: "2162", ox: "+1" },
  { n: 48, s: "Cd", name: "Cadmium", mass: "112.41", cat: "cat-transition", cName: "Overgangsmetal", period: 5, group: 12, en: "1.69", eConf: "[Kr] 4d¹⁰ 5s²", state: "Fast stof", melt: "321.1", boil: "767", ox: "+2" },
  { n: 49, s: "In", name: "Indium", mass: "114.82", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 5, group: 13, en: "1.78", eConf: "[Kr] 4d¹⁰ 5s² 5p¹", state: "Fast stof", melt: "156.6", boil: "2072", ox: "+3" },
  { n: 50, s: "Sn", name: "Tin", mass: "118.71", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 5, group: 14, en: "1.96", eConf: "[Kr] 4d¹⁰ 5s² 5p²", state: "Fast stof", melt: "231.9", boil: "2602", ox: "+2, +4" },
  { n: 51, s: "Sb", name: "Antimon", mass: "121.76", cat: "cat-metalloid", cName: "Halvmetal", period: 5, group: 15, en: "2.05", eConf: "[Kr] 4d¹⁰ 5s² 5p³", state: "Fast stof", melt: "630.6", boil: "1587", ox: "-3, +3, +5" },
  { n: 52, s: "Te", name: "Tellur", mass: "127.60", cat: "cat-metalloid", cName: "Halvmetal", period: 5, group: 16, en: "2.10", eConf: "[Kr] 4d¹⁰ 5s² 5p⁴", state: "Fast stof", melt: "449.5", boil: "988", ox: "-2, +4, +6" },
  { n: 53, s: "I", name: "Jod", mass: "126.90", cat: "cat-halogen", cName: "Halogen", period: 5, group: 17, en: "2.66", eConf: "[Kr] 4d¹⁰ 5s² 5p⁵", state: "Fast stof", melt: "113.7", boil: "184.3", ox: "-1, +1, +5, +7" },
  { n: 54, s: "Xe", name: "Xenon", mass: "131.29", cat: "cat-noble", cName: "Ædelgas", period: 5, group: 18, en: "2.60", eConf: "[Kr] 4d¹⁰ 5s² 5p⁶", state: "Gas", melt: "-111.8", boil: "-108.1", ox: "0, +2, +4, +6" },
  { n: 55, s: "Cs", name: "Cæsium", mass: "132.91", cat: "cat-alkali", cName: "Alkalimetal", period: 6, group: 1, en: "0.79", eConf: "[Xe] 6s¹", state: "Fast stof", melt: "28.4", boil: "671", ox: "+1" },
  { n: 56, s: "Ba", name: "Barium", mass: "137.33", cat: "cat-alkaline", cName: "Jordalkalimetal", period: 6, group: 2, en: "0.89", eConf: "[Xe] 6s²", state: "Fast stof", melt: "727", boil: "1897", ox: "+2" },
  { n: 57, s: "La", name: "Lanthan", mass: "138.91", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 3, en: "1.10", eConf: "[Xe] 5d¹ 6s²", state: "Fast stof", melt: "920", boil: "3464", ox: "+3" },
  { n: 58, s: "Ce", name: "Cerium", mass: "140.12", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 4, en: "1.12", eConf: "[Xe] 4f¹ 5d¹ 6s²", state: "Fast stof", melt: "799", boil: "3443", ox: "+3, +4" },
  { n: 59, s: "Pr", name: "Praseodym", mass: "140.91", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 5, en: "1.13", eConf: "[Xe] 4f³ 6s²", state: "Fast stof", melt: "931", boil: "3520", ox: "+3" },
  { n: 60, s: "Nd", name: "Neodym", mass: "144.24", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 6, en: "1.14", eConf: "[Xe] 4f⁴ 6s²", state: "Fast stof", melt: "1016", boil: "3074", ox: "+3" },
  { n: 61, s: "Pm", name: "Promethium", mass: "145", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 7, en: "1.13", eConf: "[Xe] 4f⁵ 6s²", state: "Fast stof", melt: "1042", boil: "3000", ox: "+3" },
  { n: 62, s: "Sm", name: "Samarium", mass: "150.36", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 8, en: "1.17", eConf: "[Xe] 4f⁶ 6s²", state: "Fast stof", melt: "1072", boil: "1794", ox: "+2, +3" },
  { n: 63, s: "Eu", name: "Europium", mass: "151.96", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 9, en: "1.20", eConf: "[Xe] 4f⁷ 6s²", state: "Fast stof", melt: "822", boil: "1529", ox: "+2, +3" },
  { n: 64, s: "Gd", name: "Gadolinium", mass: "157.25", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 10, en: "1.20", eConf: "[Xe] 4f⁷ 5d¹ 6s²", state: "Fast stof", melt: "1313", boil: "3273", ox: "+3" },
  { n: 65, s: "Tb", name: "Terbium", mass: "158.93", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 11, en: "1.10", eConf: "[Xe] 4f⁹ 6s²", state: "Fast stof", melt: "1356", boil: "3230", ox: "+3, +4" },
  { n: 66, s: "Dy", name: "Dysprosium", mass: "162.50", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 12, en: "1.22", eConf: "[Xe] 4f¹⁰ 6s²", state: "Fast stof", melt: "1412", boil: "2567", ox: "+3" },
  { n: 67, s: "Ho", name: "Holmium", mass: "164.93", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 13, en: "1.23", eConf: "[Xe] 4f¹¹ 6s²", state: "Fast stof", melt: "1474", boil: "2700", ox: "+3" },
  { n: 68, s: "Er", name: "Erbium", mass: "167.26", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 14, en: "1.24", eConf: "[Xe] 4f¹² 6s²", state: "Fast stof", melt: "1529", boil: "2868", ox: "+3" },
  { n: 69, s: "Tm", name: "Thulium", mass: "168.93", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 15, en: "1.25", eConf: "[Xe] 4f¹³ 6s²", state: "Fast stof", melt: "1545", boil: "1950", ox: "+2, +3" },
  { n: 70, s: "Yb", name: "Ytterbium", mass: "173.05", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 16, en: "1.10", eConf: "[Xe] 4f¹⁴ 6s²", state: "Fast stof", melt: "824", boil: "1196", ox: "+2, +3" },
  { n: 71, s: "Lu", name: "Lutetium", mass: "174.97", cat: "cat-lanthanide", cName: "Lanthanid", period: 9, group: 17, en: "1.27", eConf: "[Xe] 4f¹⁴ 5d¹ 6s²", state: "Fast stof", melt: "1663", boil: "3402", ox: "+3" },
  { n: 72, s: "Hf", name: "Hafnium", mass: "178.49", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 4, en: "1.30", eConf: "[Xe] 4f¹⁴ 5d² 6s²", state: "Fast stof", melt: "2233", boil: "4603", ox: "+4" },
  { n: 73, s: "Ta", name: "Tantal", mass: "180.95", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 5, en: "1.50", eConf: "[Xe] 4f¹⁴ 5d³ 6s²", state: "Fast stof", melt: "3017", boil: "5458", ox: "+5" },
  { n: 74, s: "W", name: "Wolfram", mass: "183.84", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 6, en: "2.36", eConf: "[Xe] 4f¹⁴ 5d⁴ 6s²", state: "Fast stof", melt: "3422", boil: "5555", ox: "+4, +6" },
  { n: 75, s: "Re", name: "Rhenium", mass: "186.21", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 7, en: "1.90", eConf: "[Xe] 4f¹⁴ 5d⁵ 6s²", state: "Fast stof", melt: "3186", boil: "5596", ox: "+4, +7" },
  { n: 76, s: "Os", name: "Osmium", mass: "190.23", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 8, en: "2.20", eConf: "[Xe] 4f¹⁴ 5d⁶ 6s²", state: "Fast stof", melt: "3033", boil: "5012", ox: "+3, +4, +6, +8" },
  { n: 77, s: "Ir", name: "Iridium", mass: "192.22", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 9, en: "2.20", eConf: "[Xe] 4f¹⁴ 5d⁷ 6s²", state: "Fast stof", melt: "2446", boil: "4428", ox: "+3, +4" },
  { n: 78, s: "Pt", name: "Platin", mass: "195.08", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 10, en: "2.28", eConf: "[Xe] 4f¹⁴ 5d⁹ 6s¹", state: "Fast stof", melt: "1768.3", boil: "3825", ox: "+2, +4" },
  { n: 79, s: "Au", name: "Guld", mass: "196.97", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 11, en: "2.54", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", state: "Fast stof", melt: "1064.2", boil: "2856", ox: "+1, +3" },
  { n: 80, s: "Hg", name: "Kviksølv", mass: "200.59", cat: "cat-transition", cName: "Overgangsmetal", period: 6, group: 12, en: "2.00", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", state: "Væske", melt: "-38.83", boil: "356.7", ox: "+1, +2" },
  { n: 81, s: "Tl", name: "Thallium", mass: "204.38", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 6, group: 13, en: "1.62", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", state: "Fast stof", melt: "304", boil: "1473", ox: "+1, +3" },
  { n: 82, s: "Pb", name: "Bly", mass: "207.2", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 6, group: 14, en: "2.33", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", state: "Fast stof", melt: "327.5", boil: "1749", ox: "+2, +4" },
  { n: 83, s: "Bi", name: "Bismuth", mass: "208.98", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 6, group: 15, en: "2.02", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", state: "Fast stof", melt: "271.4", boil: "1564", ox: "+3, +5" },
  { n: 84, s: "Po", name: "Polonium", mass: "209", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 6, group: 16, en: "2.00", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", state: "Fast stof", melt: "254", boil: "962", ox: "+2, +4" },
  { n: 85, s: "At", name: "Astat", mass: "210", cat: "cat-halogen", cName: "Halogen", period: 6, group: 17, en: "2.20", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", state: "Fast stof", melt: "302", boil: "-", ox: "-1, +1" },
  { n: 86, s: "Rn", name: "Radon", mass: "222", cat: "cat-noble", cName: "Ædelgas", period: 6, group: 18, en: "2.20", eConf: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", state: "Gas", melt: "-71", boil: "-61.7", ox: "0, +2" },
  { n: 87, s: "Fr", name: "Francium", mass: "223", cat: "cat-alkali", cName: "Alkalimetal", period: 7, group: 1, en: "0.70", eConf: "[Rn] 7s¹", state: "Fast stof", melt: "27", boil: "-", ox: "+1" },
  { n: 88, s: "Ra", name: "Radium", mass: "226", cat: "cat-alkaline", cName: "Jordalkalimetal", period: 7, group: 2, en: "0.90", eConf: "[Rn] 7s²", state: "Fast stof", melt: "700", boil: "1737", ox: "+2" },
  { n: 89, s: "Ac", name: "Actinium", mass: "227", cat: "cat-actinide", cName: "Actinid", period: 10, group: 3, en: "1.10", eConf: "[Rn] 6d¹ 7s²", state: "Fast stof", melt: "1050", boil: "3200", ox: "+3" },
  { n: 90, s: "Th", name: "Thorium", mass: "232.04", cat: "cat-actinide", cName: "Actinid", period: 10, group: 4, en: "1.30", eConf: "[Rn] 6d² 7s²", state: "Fast stof", melt: "1750", boil: "4788", ox: "+4" },
  { n: 91, s: "Pa", name: "Protactinium", mass: "231.04", cat: "cat-actinide", cName: "Actinid", period: 10, group: 5, en: "1.50", eConf: "[Rn] 5f² 6d¹ 7s²", state: "Fast stof", melt: "1568", boil: "-", ox: "+4, +5" },
  { n: 92, s: "U", name: "Uran", mass: "238.03", cat: "cat-actinide", cName: "Actinid", period: 10, group: 6, en: "1.38", eConf: "[Rn] 5f³ 6d¹ 7s²", state: "Fast stof", melt: "1132", boil: "4131", ox: "+3, +4, +5, +6" },
  { n: 93, s: "Np", name: "Neptunium", mass: "237", cat: "cat-actinide", cName: "Actinid", period: 10, group: 7, en: "1.36", eConf: "[Rn] 5f⁴ 6d¹ 7s²", state: "Fast stof", melt: "644", boil: "4000", ox: "+3, +4, +5, +6" },
  { n: 94, s: "Pu", name: "Plutonium", mass: "244", cat: "cat-actinide", cName: "Actinid", period: 10, group: 8, en: "1.28", eConf: "[Rn] 5f⁶ 7s²", state: "Fast stof", melt: "640", boil: "3228", ox: "+3, +4, +5, +6" },
  { n: 95, s: "Am", name: "Americium", mass: "243", cat: "cat-actinide", cName: "Actinid", period: 10, group: 9, en: "1.30", eConf: "[Rn] 5f⁷ 7s²", state: "Fast stof", melt: "1176", boil: "2607", ox: "+3" },
  { n: 96, s: "Cm", name: "Curium", mass: "247", cat: "cat-actinide", cName: "Actinid", period: 10, group: 10, en: "1.30", eConf: "[Rn] 5f⁷ 6d¹ 7s²", state: "Fast stof", melt: "1345", boil: "3110", ox: "+3" },
  { n: 97, s: "Bk", name: "Berkelium", mass: "247", cat: "cat-actinide", cName: "Actinid", period: 10, group: 11, en: "1.30", eConf: "[Rn] 5f⁹ 7s²", state: "Fast stof", melt: "1050", boil: "-", ox: "+3, +4" },
  { n: 98, s: "Cf", name: "Californium", mass: "251", cat: "cat-actinide", cName: "Actinid", period: 10, group: 12, en: "1.30", eConf: "[Rn] 5f¹⁰ 7s²", state: "Fast stof", melt: "900", boil: "-", ox: "+3" },
  { n: 99, s: "Es", name: "Einsteinium", mass: "252", cat: "cat-actinide", cName: "Actinid", period: 10, group: 13, en: "1.30", eConf: "[Rn] 5f¹¹ 7s²", state: "Fast stof", melt: "860", boil: "-", ox: "+3" },
  { n: 100, s: "Fm", name: "Fermium", mass: "257", cat: "cat-actinide", cName: "Actinid", period: 10, group: 14, en: "1.30", eConf: "[Rn] 5f¹² 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+3" },
  { n: 101, s: "Md", name: "Mendelevium", mass: "258", cat: "cat-actinide", cName: "Actinid", period: 10, group: 15, en: "1.30", eConf: "[Rn] 5f¹³ 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+2, +3" },
  { n: 102, s: "No", name: "Nobelium", mass: "259", cat: "cat-actinide", cName: "Actinid", period: 10, group: 16, en: "1.30", eConf: "[Rn] 5f¹⁴ 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+2, +3" },
  { n: 103, s: "Lr", name: "Lawrencium", mass: "262", cat: "cat-actinide", cName: "Actinid", period: 10, group: 17, en: "1.30", eConf: "[Rn] 5f¹⁴ 7s² 7p¹", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+3" },
  { n: 104, s: "Rf", name: "Rutherfordium", mass: "267", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 4, en: "-", eConf: "[Rn] 5f¹⁴ 6d² 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+4" },
  { n: 105, s: "Db", name: "Dubnium", mass: "268", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 5, en: "-", eConf: "[Rn] 5f¹⁴ 6d³ 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+5" },
  { n: 106, s: "Sg", name: "Seaborgium", mass: "269", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 6, en: "-", eConf: "[Rn] 5f¹⁴ 6d⁴ 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+6" },
  { n: 107, s: "Bh", name: "Bohrium", mass: "270", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 7, en: "-", eConf: "[Rn] 5f¹⁴ 6d⁵ 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+7" },
  { n: 108, s: "Hs", name: "Hassium", mass: "269", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 8, en: "-", eConf: "[Rn] 5f¹⁴ 6d⁶ 7s²", state: "Fast stof (syntetisk)", melt: "-", boil: "-", ox: "+8" },
  { n: 109, s: "Mt", name: "Meitnerium", mass: "278", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 9, en: "-", eConf: "[Rn] 5f¹⁴ 6d⁷ 7s²", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 110, s: "Ds", name: "Darmstadtium", mass: "281", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 10, en: "-", eConf: "[Rn] 5f¹⁴ 6d⁸ 7s²", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 111, s: "Rg", name: "Roentgenium", mass: "282", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 11, en: "-", eConf: "[Rn] 5f¹⁴ 6d⁹ 7s²", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 112, s: "Cn", name: "Copernicium", mass: "285", cat: "cat-transition", cName: "Overgangsmetal", period: 7, group: 12, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", state: "Ukendt", melt: "-", boil: "-", ox: "+2" },
  { n: 113, s: "Nh", name: "Nihonium", mass: "286", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 7, group: 13, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 114, s: "Fl", name: "Flerovium", mass: "289", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 7, group: 14, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 115, s: "Mc", name: "Moscovium", mass: "290", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 7, group: 15, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 116, s: "Lv", name: "Livermorium", mass: "293", cat: "cat-post-transition", cName: "Post-overgangsmetal", period: 7, group: 16, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 117, s: "Ts", name: "Tennessin", mass: "294", cat: "cat-halogen", cName: "Halogen", period: 7, group: 17, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", state: "Ukendt", melt: "-", boil: "-", ox: "-" },
  { n: 118, s: "Og", name: "Oganesson", mass: "294", cat: "cat-noble", cName: "Ædelgas", period: 7, group: 18, en: "-", eConf: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", state: "Ukendt", melt: "-", boil: "-", ox: "-" }
];

const catLegend = [
  ["cat-alkali","Alkalimetal"],["cat-alkaline","Jordalkalimetal"],["cat-transition","Overgangsmetal"],
  ["cat-post-transition","Post-overgangsmetal"],["cat-metalloid","Halvmetal"],["cat-nonmetal","Ikke-metal"],
  ["cat-halogen","Halogen"],["cat-noble","Ædelgas"],["cat-lanthanide","Lanthanid"],["cat-actinide","Actinid"],
];

// The element that is "pinned" by a click, so it stays shown after the mouse
// leaves the grid. Hovering always previews live on top of this.
let pinnedEl = null;

function highlightCategory(cat) {
  const grid = document.getElementById("ptable-grid");
  if (!grid) return;
  grid.classList.add("dim-others");
  for (const cell of grid.querySelectorAll(".ptable-cell")) {
    const match = cell.getAttribute("data-cat") === cat && !cell.classList.contains("ptable-marker");
    cell.classList.toggle("hl", match);
  }
}

function clearHighlight() {
  const grid = document.getElementById("ptable-grid");
  if (!grid) return;
  grid.classList.remove("dim-others");
  for (const cell of grid.querySelectorAll(".ptable-cell.hl")) {
    cell.classList.remove("hl");
  }
}

function renderLegend() {
  const box = document.getElementById("ptable-legend");
  if (!box) return;
  box.innerHTML = catLegend.map(([c,label]) =>
    `<button type="button" class="ptable-legend-item" data-cat="${c}"><span class="ptable-legend-swatch ${c}"></span>${label}</button>`
  ).join("");
  // Hovering or focusing a legend entry lights up that whole category.
  for (const item of box.querySelectorAll(".ptable-legend-item")) {
    const cat = item.getAttribute("data-cat");
    item.addEventListener("mouseenter", () => highlightCategory(cat));
    item.addEventListener("focus", () => highlightCategory(cat));
    item.addEventListener("mouseleave", clearHighlight);
    item.addEventListener("blur", clearHighlight);
  }
}

function renderTable() {
  renderLegend();
  const container = document.getElementById("ptable-grid");
  if (!container) return;
  container.innerHTML = "";

  // Spacer row that visually separates the f-block strip from the main table.
  const spacer = document.createElement("div");
  spacer.className = "ptable-spacer";
  spacer.style.gridColumn = "1 / -1";
  spacer.style.gridRow = "8";
  container.appendChild(spacer);

  // Series markers sitting in the main table where the f-block is pulled out.
  [["57-71", 6, 3], ["89-103", 7, 3]].forEach(([label, period, group]) => {
    const m = document.createElement("div");
    m.className = "ptable-cell ptable-marker";
    m.style.gridColumn = group;
    m.style.gridRow = period;
    m.innerHTML = `<div class="ptable-sym" style="font-size:0.7rem;">${label}</div>`;
    container.appendChild(m);
  });

  elements.forEach(el => {
    const card = document.createElement("div");
    card.className = "ptable-cell " + el.cat;
    card.style.gridColumn = el.group;
    card.style.gridRow = el.period;
    card.setAttribute("data-cat", el.cat);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", el.name + " (" + el.s + "), atomnummer " + el.n);
    card.innerHTML = `
      <div class="ptable-num">${el.n}</div>
      <div class="ptable-sym">${el.s}</div>
      <div class="ptable-name">${el.name}</div>
    `;

    // Live preview on hover and keyboard focus (this is what makes it feel like
    // ptable.com): the detail panel updates immediately and the element's whole
    // category is highlighted.
    const preview = () => {
      showElementDetails(el, false);
      highlightCategory(el.cat);
    };
    const unpreview = () => {
      clearHighlight();
      if (pinnedEl) showElementDetails(pinnedEl, true);
    };
    card.addEventListener("mouseenter", preview);
    card.addEventListener("mouseleave", unpreview);
    card.addEventListener("focus", preview);
    card.addEventListener("blur", unpreview);

    // Click / Enter / Space pins the element so it stays after the mouse leaves.
    const pin = () => {
      pinnedEl = el;
      showElementDetails(el, true);
      for (const c of container.querySelectorAll(".ptable-cell.selected")) {
        c.classList.remove("selected");
      }
      card.classList.add("selected");
    };
    card.addEventListener("click", pin);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pin(); }
    });

    container.appendChild(card);
  });

  // Re-show whatever was pinned before an SPA re-render, if it is still valid.
  if (pinnedEl) showElementDetails(pinnedEl, true);
}

function showElementDetails(el, pinned) {
  const details = document.getElementById("ptable-details");
  if (!details) return;

  const periodGroup = el.period > 8
    ? (el.cat === "cat-lanthanide" ? "6 (f-blok, lanthanider)" : "7 (f-blok, actinider)")
    : el.period + " / " + el.group;

  details.innerHTML = `
    <div class="ptable-detail-head">
      <span class="ptable-detail-badge ${el.cat}">${el.n}</span>
      <div class="ptable-detail-title">
        <h3>${el.s} <span class="ptable-detail-name">${el.name}</span></h3>
        <span class="status-badge complete">${el.cName}</span>
        ${pinned ? '<span class="ptable-pin-note">fastholdt (klik et andet grundstof)</span>' : ''}
      </div>
    </div>
    <div class="ptable-detail-grid">
      <div><span>Atomnummer</span><strong>${el.n}</strong></div>
      <div><span>Symbol</span><strong>${el.s}</strong></div>
      <div><span>Atommasse</span><strong>${el.mass} u</strong></div>
      <div><span>Kategori</span><strong>${el.cName}</strong></div>
      <div><span>Periode / gruppe</span><strong>${periodGroup}</strong></div>
      <div><span>Elektronkonfiguration</span><strong><code>${el.eConf}</code></strong></div>
      <div><span>Elektronegativitet (Pauling)</span><strong>${el.en}</strong></div>
      <div><span>Oxidationstrin</span><strong>${el.ox}</strong></div>
      <div><span>Tilstand (25 grader C)</span><strong>${el.state}</strong></div>
      <div><span>Smeltepunkt</span><strong>${el.melt} grader C</strong></div>
      <div><span>Kogepunkt</span><strong>${el.boil} grader C</strong></div>
    </div>
  `;
}

// Initialiser når DOM er klar, og igen ved SPA-navigation i Quartz.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTable);
} else {
  renderTable();
}
document.addEventListener("nav", renderTable);
</script>
