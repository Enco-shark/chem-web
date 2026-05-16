/* ============================================
   Expanded Chemical Reactions Database
   ============================================ */

const ReactionsDBExpanded = {
    // ==========================================
    // NEUTRALIZATION REACTIONS
    // ==========================================
    'H2SO4 + NaOH': {
        reactants: ['H2SO4', 'NaOH'], products: ['Na2SO4', 'H2O'],
        balanced: 'H2SO4 + 2NaOH → Na2SO4 + 2H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Sulfuric acid reacts with sodium hydroxide to form sodium sulfate and water.', principleCN: '硫酸与氢氧化钠反应生成硫酸钠和水。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'H⁺ + OH⁻ → H2O', gasProduct: false, precipitate: false,
        explanation: 'A diprotic acid neutralized by a strong base. Two moles of NaOH are needed per mole of H2SO4.', explanationCN: '二元酸被强碱中和。每摩尔H2SO4需要两摩尔NaOH。'
    },
    'HNO3 + NaOH': {
        reactants: ['HNO3', 'NaOH'], products: ['NaNO3', 'H2O'],
        balanced: 'HNO3 + NaOH → NaNO3 + H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Nitric acid neutralizes sodium hydroxide to form sodium nitrate and water.', principleCN: '硝酸中和氢氧化钠生成硝酸钠和水。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'H⁺ + OH⁻ → H2O', gasProduct: false, precipitate: false,
        explanation: 'Classic acid-base neutralization producing a soluble salt.', explanationCN: '经典的酸碱中和反应，生成可溶性盐。'
    },
    'HCl + KOH': {
        reactants: ['HCl', 'KOH'], products: ['KCl', 'H2O'],
        balanced: 'HCl + KOH → KCl + H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Hydrochloric acid reacts with potassium hydroxide.', principleCN: '盐酸与氢氧化钾反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'H⁺ + OH⁻ → H2O', gasProduct: false, precipitate: false,
        explanation: 'Strong acid-strong base neutralization.', explanationCN: '强酸强碱中和反应。'
    },
    'H2SO4 + Ca(OH)2': {
        reactants: ['H2SO4', 'Ca(OH)2'], products: ['CaSO4', 'H2O'],
        balanced: 'H2SO4 + Ca(OH)2 → CaSO4 + 2H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Sulfuric acid reacts with calcium hydroxide to form calcium sulfate (gypsum).', principleCN: '硫酸与氢氧化钙反应生成硫酸钙（石膏）。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2H⁺ + SO4²⁻ + Ca²⁺ + 2OH⁻ → CaSO4 + 2H2O', gasProduct: false, precipitate: true,
        explanation: 'Calcium sulfate is slightly insoluble and may precipitate.', explanationCN: '硫酸钙微溶，可能沉淀。'
    },
    'H3PO4 + 3NaOH': {
        reactants: ['H3PO4', 'NaOH'], products: ['Na3PO4', 'H2O'],
        balanced: 'H3PO4 + 3NaOH → Na3PO4 + 3H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Phosphoric acid is a triprotic acid requiring three equivalents of base.', principleCN: '磷酸是三元酸，需要三当量的碱。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'H3PO4 + 3OH⁻ → PO4³⁻ + 3H2O', gasProduct: false, precipitate: false,
        explanation: 'Complete neutralization of phosphoric acid produces trisodium phosphate.', explanationCN: '磷酸完全中和生成磷酸三钠。'
    },

    // ==========================================
    // PRECIPITATION REACTIONS
    // ==========================================
    'BaCl2 + Na2SO4': {
        reactants: ['BaCl2', 'Na2SO4'], products: ['BaSO4↓', 'NaCl'],
        balanced: 'BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Barium ions combine with sulfate ions to form insoluble barium sulfate.', principleCN: '钡离子与硫酸根离子结合生成不溶性硫酸钡。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Ba²⁺ + SO4²⁻ → BaSO4↓', gasProduct: false, precipitate: true,
        explanation: 'Test for sulfate ions. White precipitate of BaSO4 forms.', explanationCN: '检验硫酸根离子。生成白色BaSO4沉淀。'
    },
    'Pb(NO3)2 + KI': {
        reactants: ['Pb(NO3)2', 'KI'], products: ['PbI2↓', 'KNO3'],
        balanced: 'Pb(NO3)2 + 2KI → PbI2↓ + 2KNO3', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Lead iodide precipitates as bright yellow crystals.', principleCN: '碘化铅以亮黄色晶体沉淀。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Pb²⁺ + 2I⁻ → PbI2↓', gasProduct: false, precipitate: true,
        explanation: 'Lead iodide is a beautiful yellow precipitate, used in "golden rain" demonstration.', explanationCN: '碘化铅是美丽的黄色沉淀，用于"金雨"演示。'
    },
    'CaCl2 + Na2CO3': {
        reactants: ['CaCl2', 'Na2CO3'], products: ['CaCO3↓', 'NaCl'],
        balanced: 'CaCl2 + Na2CO3 → CaCO3↓ + 2NaCl', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Calcium carbonate precipitates from calcium and carbonate ions.', principleCN: '碳酸钙从钙离子和碳酸根离子中沉淀。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Ca²⁺ + CO3²⁻ → CaCO3↓', gasProduct: false, precipitate: true,
        explanation: 'White precipitate of calcium carbonate forms.', explanationCN: '生成白色碳酸钙沉淀。'
    },
    'FeCl3 + 3NaOH': {
        reactants: ['FeCl3', 'NaOH'], products: ['Fe(OH)3↓', 'NaCl'],
        balanced: 'FeCl3 + 3NaOH → Fe(OH)3↓ + 3NaCl', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Iron(III) hydroxide precipitates as a reddish-brown gelatinous solid.', principleCN: '氢氧化铁以红棕色胶状固体沉淀。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Fe³⁺ + 3OH⁻ → Fe(OH)3↓', gasProduct: false, precipitate: true,
        explanation: 'Test for Fe3+ ions. Reddish-brown precipitate forms.', explanationCN: '检验Fe3+离子。生成红棕色沉淀。'
    },
    'CuSO4 + 2NaOH': {
        reactants: ['CuSO4', 'NaOH'], products: ['Cu(OH)2↓', 'Na2SO4'],
        balanced: 'CuSO4 + 2NaOH → Cu(OH)2↓ + Na2SO4', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Copper(II) hydroxide precipitates as a blue solid.', principleCN: '氢氧化铜以蓝色固体沉淀。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Cu²⁺ + 2OH⁻ → Cu(OH)2↓', gasProduct: false, precipitate: true,
        explanation: 'Blue precipitate of copper hydroxide forms. Dissolves in excess NaOH.', explanationCN: '生成蓝色氢氧化铜沉淀。溶于过量NaOH。'
    },
    'Al2(SO4)3 + 6NaOH': {
        reactants: ['Al2(SO4)3', 'NaOH'], products: ['Al(OH)3↓', 'Na2SO4'],
        balanced: 'Al2(SO4)3 + 6NaOH → 2Al(OH)3↓ + 3Na2SO4', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Aluminum hydroxide precipitates as a white gelatinous solid.', principleCN: '氢氧化铝以白色胶状固体沉淀。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Al³⁺ + 3OH⁻ → Al(OH)3↓', gasProduct: false, precipitate: true,
        explanation: 'Aluminum hydroxide is amphoteric - dissolves in both excess acid and base.', explanationCN: '氢氧化铝是两性的——溶于过量酸和碱。'
    },

    // ==========================================
    // DECOMPOSITION REACTIONS
    // ==========================================
    '2KClO3': {
        reactants: ['KClO3'], products: ['KCl', 'O2↑'],
        balanced: '2KClO3 → 2KCl + 3O2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Potassium chlorate decomposes on heating with MnO2 catalyst.', principleCN: '氯酸钾在MnO2催化下加热分解。',
        conditions: ['△ heating'], catalyst: 'MnO2', reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Common laboratory method for producing oxygen gas.', explanationCN: '实验室制取氧气的常用方法。'
    },
    '2KMnO4': {
        reactants: ['KMnO4'], products: ['K2MnO4', 'MnO2', 'O2↑'],
        balanced: '2KMnO4 → K2MnO4 + MnO2 + O2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Potassium permanganate decomposes when heated.', principleCN: '高锰酸钾加热分解。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Decomposition produces oxygen, potassium manganate, and manganese dioxide.', explanationCN: '分解产生氧气、锰酸钾和二氧化锰。'
    },
    '2H2O2': {
        reactants: ['H2O2'], products: ['H2O', 'O2↑'],
        balanced: '2H2O2 → 2H2O + O2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Hydrogen peroxide decomposes to water and oxygen.', principleCN: '过氧化氢分解为水和氧气。',
        conditions: ['MnO2 catalyst'], catalyst: 'MnO2', reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'MnO2 catalyzes the decomposition of hydrogen peroxide.', explanationCN: 'MnO2催化过氧化氢的分解。'
    },
    'CaCO3': {
        reactants: ['CaCO3'], products: ['CaO', 'CO2↑'],
        balanced: 'CaCO3 → CaO + CO2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Calcium carbonate decomposes at high temperature to produce quicklime and CO2.', principleCN: '碳酸钙高温分解生成生石灰和CO2。',
        conditions: ['high temperature'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Industrial production of calcium oxide (quicklime).', explanationCN: '工业生产氧化钙（生石灰）。'
    },
    '2NaHCO3': {
        reactants: ['NaHCO3'], products: ['Na2CO3', 'H2O', 'CO2↑'],
        balanced: '2NaHCO3 → Na2CO3 + H2O + CO2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Sodium bicarbonate decomposes when heated.', principleCN: '碳酸氢钠加热分解。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Baking soda releases CO2 when heated, causing dough to rise.', explanationCN: '小苏打加热释放CO2，使面团膨胀。'
    },
    'NH4HCO3': {
        reactants: ['NH4HCO3'], products: ['NH3↑', 'H2O', 'CO2↑'],
        balanced: 'NH4HCO3 → NH3↑ + H2O + CO2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Ammonium bicarbonate decomposes readily when heated.', principleCN: '碳酸氢铵加热容易分解。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Decomposes into three gases/vapor, leaving no residue.', explanationCN: '分解为三种气体/蒸气，不留残渣。'
    },

    // ==========================================
    // COMBUSTION REACTIONS
    // ==========================================
    'CH4 + O2': {
        reactants: ['CH4', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: 'CH4 + 2O2 → CO2↑ + 2H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Methane combustion - primary component of natural gas.', principleCN: '甲烷燃烧——天然气的主要成分。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Complete combustion of methane produces CO2 and water.', explanationCN: '甲烷完全燃烧生成CO2和水。'
    },
    'C2H6 + O2': {
        reactants: ['C2H6', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: '2C2H6 + 7O2 → 4CO2↑ + 6H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Ethane combustion.', principleCN: '乙烷燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Ethane burns in oxygen to produce carbon dioxide and water.', explanationCN: '乙烷在氧气中燃烧生成二氧化碳和水。'
    },
    'C2H4 + O2': {
        reactants: ['C2H4', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: 'C2H4 + 3O2 → 2CO2↑ + 2H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Ethylene combustion.', principleCN: '乙烯燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Ethylene burns with a smoky flame due to high carbon content.', explanationCN: '乙烯因碳含量高而燃烧产生黑烟。'
    },
    'C2H2 + O2': {
        reactants: ['C2H2', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: '2C2H2 + 5O2 → 4CO2↑ + 2H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Acetylene combustion produces extremely hot flame.', principleCN: '乙炔燃烧产生极热火焰。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Oxy-acetylene flame reaches 3300°C, used for welding.', explanationCN: '氧炔焰达3300°C，用于焊接。'
    },
    'C2H5OH + O2': {
        reactants: ['C2H5OH', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: 'C2H5OH + 3O2 → 2CO2↑ + 3H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Ethanol combustion.', principleCN: '乙醇燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Ethanol burns cleanly and is used as a biofuel.', explanationCN: '乙醇燃烧清洁，用作生物燃料。'
    },
    'C + O2': {
        reactants: ['C', 'O2'], products: ['CO2↑'],
        balanced: 'C + O2 → CO2↑', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Carbon combustion.', principleCN: '碳燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Carbon burns in oxygen. With limited oxygen, CO forms instead.', explanationCN: '碳在氧气中燃烧。氧气不足时生成CO。'
    },
    '2Mg + O2': {
        reactants: ['Mg', 'O2'], products: ['MgO'],
        balanced: '2Mg + O2 → 2MgO', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Magnesium burns with brilliant white flame.', principleCN: '镁燃烧发出耀眼白光。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Magnesium burns at 2200°C with intense white light. Used in flares.', explanationCN: '镁在2200°C燃烧，发出强烈白光。用于照明弹。'
    },
    '4Al + 3O2': {
        reactants: ['Al', 'O2'], products: ['Al2O3'],
        balanced: '4Al + 3O2 → 2Al2O3', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Aluminum burns in pure oxygen with white flame.', principleCN: '铝在纯氧中燃烧发出白光。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Thermite reaction principle. Very exothermic.', explanationCN: '铝热反应原理。高度放热。'
    },

    // ==========================================
    // DISPLACEMENT REACTIONS
    // ==========================================
    'Fe + CuSO4': {
        reactants: ['Fe', 'CuSO4'], products: ['FeSO4', 'Cu'],
        balanced: 'Fe + CuSO4 → FeSO4 + Cu', type: 'displacement', typeCN: '置换反应',
        principle: 'Iron displaces copper from copper sulfate solution.', principleCN: '铁将铜从硫酸铜溶液中置换出来。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Fe + Cu²⁺ → Fe²⁺ + Cu', gasProduct: false, precipitate: false,
        explanation: 'Iron is more reactive than copper in the activity series.', explanationCN: '铁在金属活动性顺序中比铜活泼。'
    },
    'Zn + H2SO4': {
        reactants: ['Zn', 'H2SO4'], products: ['ZnSO4', 'H2↑'],
        balanced: 'Zn + H2SO4 → ZnSO4 + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Zinc displaces hydrogen from dilute sulfuric acid.', principleCN: '锌从稀硫酸中置换出氢气。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Zn + 2H⁺ → Zn²⁺ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Common laboratory method for producing hydrogen gas.', explanationCN: '实验室制取氢气的常用方法。'
    },
    'Zn + 2HCl': {
        reactants: ['Zn', 'HCl'], products: ['ZnCl2', 'H2↑'],
        balanced: 'Zn + 2HCl → ZnCl2 + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Zinc reacts with hydrochloric acid to produce hydrogen.', principleCN: '锌与盐酸反应生成氢气。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Zn + 2H⁺ → Zn²⁺ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Zinc is above hydrogen in the activity series.', explanationCN: '锌在金属活动性顺序中位于氢之上。'
    },
    'Mg + 2HCl': {
        reactants: ['Mg', 'HCl'], products: ['MgCl2', 'H2↑'],
        balanced: 'Mg + 2HCl → MgCl2 + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Magnesium reacts vigorously with hydrochloric acid.', principleCN: '镁与盐酸剧烈反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Mg + 2H⁺ → Mg²⁺ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Very vigorous reaction due to high reactivity of magnesium.', explanationCN: '由于镁的高活泼性，反应非常剧烈。'
    },
    'Cu + 2AgNO3': {
        reactants: ['Cu', 'AgNO3'], products: ['Cu(NO3)2', 'Ag'],
        balanced: 'Cu + 2AgNO3 → Cu(NO3)2 + 2Ag', type: 'displacement', typeCN: '置换反应',
        principle: 'Copper displaces silver from silver nitrate solution.', principleCN: '铜将银从硝酸银溶液中置换出来。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Cu + 2Ag⁺ → Cu²⁺ + 2Ag', gasProduct: false, precipitate: false,
        explanation: 'Silver crystals form on copper surface. Blue solution of Cu2+ forms.', explanationCN: '银晶体在铜表面形成。溶液变蓝色（Cu2+）。'
    },
    '2Na + 2H2O': {
        reactants: ['Na', 'H2O'], products: ['NaOH', 'H2↑'],
        balanced: '2Na + 2H2O → 2NaOH + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Sodium reacts violently with water.', principleCN: '钠与水剧烈反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2Na + 2H2O → 2Na⁺ + 2OH⁻ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Sodium floats on water, melts into a ball, and moves rapidly. Hydrogen may ignite.', explanationCN: '钠浮在水面上，熔成球状快速移动。氢气可能被点燃。'
    },
    '2K + 2H2O': {
        reactants: ['K', 'H2O'], products: ['KOH', 'H2↑'],
        balanced: '2K + 2H2O → 2KOH + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Potassium reacts even more violently than sodium with water.', principleCN: '钾与水反应比钠更剧烈。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2K + 2H2O → 2K⁺ + 2OH⁻ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Potassium catches fire with a purple/lilac flame on contact with water.', explanationCN: '钾与水接触时着火，发出紫色火焰。'
    },

    // ==========================================
    // REDOX REACTIONS
    // ==========================================
    '3Cu + 8HNO3': {
        reactants: ['Cu', 'HNO3'], products: ['Cu(NO3)2', 'NO↑', 'H2O'],
        balanced: '3Cu + 8HNO3(dilute) → 3Cu(NO3)2 + 2NO↑ + 4H2O', type: 'redox', typeCN: '氧化还原反应',
        principle: 'Copper reacts with dilute nitric acid in a redox reaction.', principleCN: '铜与稀硝酸发生氧化还原反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '3Cu + 8H⁺ + 2NO3⁻ → 3Cu²⁺ + 2NO↑ + 4H2O', gasProduct: true, precipitate: false,
        explanation: 'Copper is oxidized to Cu2+, nitrate is reduced to NO. Solution turns blue.', explanationCN: '铜被氧化为Cu2+，硝酸根被还原为NO。溶液变蓝。'
    },
    'Cu + 4HNO3': {
        reactants: ['Cu', 'HNO3'], products: ['Cu(NO3)2', 'NO2↑', 'H2O'],
        balanced: 'Cu + 4HNO3(conc) → Cu(NO3)2 + 2NO2↑ + 2H2O', type: 'redox', typeCN: '氧化还原反应',
        principle: 'Copper reacts with concentrated nitric acid.', principleCN: '铜与浓硝酸反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Cu + 4H⁺ + 2NO3⁻ → Cu²⁺ + 2NO2↑ + 2H2O', gasProduct: true, precipitate: false,
        explanation: 'Concentrated HNO3 produces brown NO2 gas instead of NO.', explanationCN: '浓硝酸产生棕色NO2气体而非NO。'
    },
    'Fe2O3 + 3CO': {
        reactants: ['Fe2O3', 'CO'], products: ['Fe', 'CO2↑'],
        balanced: 'Fe2O3 + 3CO → 2Fe + 3CO2↑', type: 'reduction', typeCN: '还原反应',
        principle: 'Iron oxide is reduced by carbon monoxide in a blast furnace.', principleCN: '氧化铁在高炉中被一氧化碳还原。',
        conditions: ['high temperature'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Industrial iron smelting process. CO reduces Fe2O3 to metallic iron.', explanationCN: '工业炼铁过程。CO将Fe2O3还原为金属铁。'
    },
    'Fe2O3 + 2Al': {
        reactants: ['Fe2O3', 'Al'], products: ['Al2O3', 'Fe'],
        balanced: 'Fe2O3 + 2Al → Al2O3 + 2Fe', type: 'thermite', typeCN: '铝热反应',
        principle: 'Thermite reaction - extremely exothermic.', principleCN: '铝热反应——极度放热。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Reaches 2500°C. Used for welding railroad tracks.', explanationCN: '达到2500°C。用于焊接铁轨。'
    },
    'MnO2 + 4HCl': {
        reactants: ['MnO2', 'HCl'], products: ['MnCl2', 'Cl2↑', 'H2O'],
        balanced: 'MnO2 + 4HCl(conc) → MnCl2 + Cl2↑ + 2H2O', type: 'redox', typeCN: '氧化还原反应',
        principle: 'MnO2 oxidizes concentrated HCl to produce chlorine gas.', principleCN: 'MnO2氧化浓盐酸产生氯气。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        ionicEquation: 'MnO2 + 4H⁺ + 2Cl⁻ → Mn²⁺ + Cl2↑ + 2H2O', gasProduct: true, precipitate: false,
        explanation: 'Laboratory method for preparing chlorine gas.', explanationCN: '实验室制备氯气的方法。'
    },

    // ==========================================
    // ACID-CARBONATE REACTIONS
    // ==========================================
    'CaCO3 + 2HCl': {
        reactants: ['CaCO3', 'HCl'], products: ['CaCl2', 'H2O', 'CO2↑'],
        balanced: 'CaCO3 + 2HCl → CaCl2 + H2O + CO2↑', type: 'acid-carbonate', typeCN: '酸与碳酸盐反应',
        principle: 'Acid reacts with carbonate to produce CO2 gas.', principleCN: '酸与碳酸盐反应产生CO2气体。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'CaCO3 + 2H⁺ → Ca²⁺ + H2O + CO2↑', gasProduct: true, precipitate: false,
        explanation: 'Test for carbonates. CO2 gas bubbles out of solution.', explanationCN: '检验碳酸盐。CO2气体从溶液中逸出。'
    },
    'Na2CO3 + 2HCl': {
        reactants: ['Na2CO3', 'HCl'], products: ['NaCl', 'H2O', 'CO2↑'],
        balanced: 'Na2CO3 + 2HCl → 2NaCl + H2O + CO2↑', type: 'acid-carbonate', typeCN: '酸与碳酸盐反应',
        principle: 'Sodium carbonate reacts with hydrochloric acid.', principleCN: '碳酸钠与盐酸反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'CO3²⁻ + 2H⁺ → H2O + CO2↑', gasProduct: true, precipitate: false,
        explanation: 'Sodium carbonate (washing soda) reacts with acids to release CO2.', explanationCN: '碳酸钠（洗涤碱）与酸反应释放CO2。'
    },
    'NaHCO3 + HCl': {
        reactants: ['NaHCO3', 'HCl'], products: ['NaCl', 'H2O', 'CO2↑'],
        balanced: 'NaHCO3 + HCl → NaCl + H2O + CO2↑', type: 'acid-carbonate', typeCN: '酸与碳酸盐反应',
        principle: 'Sodium bicarbonate reacts with acid.', principleCN: '碳酸氢钠与酸反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'HCO3⁻ + H⁺ → H2O + CO2↑', gasProduct: true, precipitate: false,
        explanation: 'Baking soda fizzes when mixed with acid. Used in baking and antacids.', explanationCN: '小苏打与酸混合时冒泡。用于烘焙和抗酸剂。'
    },

    // ==========================================
    // ORGANIC REACTIONS
    // ==========================================
    'C2H4 + H2O': {
        reactants: ['C2H4', 'H2O'], products: ['C2H5OH'],
        balanced: 'C2H4 + H2O → C2H5OH', type: 'addition', typeCN: '加成反应',
        principle: 'Ethylene hydration to produce ethanol.', principleCN: '乙烯水合制乙醇。',
        conditions: ['H3PO4 catalyst', 'high temperature', 'high pressure'], catalyst: 'H3PO4', reversible: true,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Industrial method for producing ethanol from ethylene.', explanationCN: '工业上由乙烯生产乙醇的方法。'
    },
    'C2H4 + Br2': {
        reactants: ['C2H4', 'Br2'], products: ['C2H4Br2'],
        balanced: 'C2H4 + Br2 → C2H4Br2', type: 'addition', typeCN: '加成反应',
        principle: 'Ethylene reacts with bromine in an addition reaction.', principleCN: '乙烯与溴发生加成反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Bromine water is decolorized - test for unsaturation.', explanationCN: '溴水褪色——检验不饱和键。'
    },
    'C2H5OH + CH3COOH': {
        reactants: ['C2H5OH', 'CH3COOH'], products: ['CH3COOC2H5', 'H2O'],
        balanced: 'C2H5OH + CH3COOH ⇌ CH3COOC2H5 + H2O', type: 'esterification', typeCN: '酯化反应',
        principle: 'Ethanol reacts with acetic acid to form ethyl acetate.', principleCN: '乙醇与乙酸反应生成乙酸乙酯。',
        conditions: ['H2SO4 catalyst', '△ heating'], catalyst: 'H2SO4', reversible: true,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Fruity-smelling ester forms. Concentrated H2SO4 acts as catalyst and dehydrating agent.', explanationCN: '生成水果香味的酯。浓硫酸作催化剂和脱水剂。'
    },
    'CH3COOC2H5 + H2O': {
        reactants: ['CH3COOC2H5', 'H2O'], products: ['CH3COOH', 'C2H5OH'],
        balanced: 'CH3COOC2H5 + H2O → CH3COOH + C2H5OH', type: 'hydrolysis', typeCN: '水解反应',
        principle: 'Ethyl acetate hydrolyzes in acidic solution.', principleCN: '乙酸乙酯在酸性溶液中水解。',
        conditions: ['H2SO4 catalyst', '△ heating'], catalyst: 'H2SO4', reversible: true,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Reverse of esterification. Acid-catalyzed hydrolysis of ester.', explanationCN: '酯化反应的逆反应。酯的酸催化水解。'
    },
    'CH3COOC2H5 + NaOH': {
        reactants: ['CH3COOC2H5', 'NaOH'], products: ['CH3COONa', 'C2H5OH'],
        balanced: 'CH3COOC2H5 + NaOH → CH3COONa + C2H5OH', type: 'saponification', typeCN: '皂化反应',
        principle: 'Base hydrolysis of ester (saponification).', principleCN: '酯的碱性水解（皂化反应）。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        ionicEquation: 'CH3COOC2H5 + OH⁻ → CH3COO⁻ + C2H5OH', gasProduct: false, precipitate: false,
        explanation: 'Saponification - the basis of soap making from fats and NaOH.', explanationCN: '皂化反应——用油脂和NaOH制皂的基础。'
    },
    'C6H6 + Br2': {
        reactants: ['C6H6', 'Br2'], products: ['C6H5Br', 'HBr'],
        balanced: 'C6H6 + Br2 → C6H5Br + HBr', type: 'substitution', typeCN: '取代反应',
        principle: 'Electrophilic aromatic substitution of benzene.', principleCN: '苯的亲电芳香取代反应。',
        conditions: ['FeBr3 catalyst'], catalyst: 'FeBr3', reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Benzene undergoes substitution rather than addition due to aromatic stability.', explanationCN: '苯由于芳香稳定性而发生取代而非加成。'
    },
    'C6H6 + HNO3': {
        reactants: ['C6H6', 'HNO3'], products: ['C6H5NO2', 'H2O'],
        balanced: 'C6H6 + HNO3 → C6H5NO2 + H2O', type: 'substitution', typeCN: '取代反应',
        principle: 'Nitration of benzene.', principleCN: '苯的硝化反应。',
        conditions: ['H2SO4 catalyst', '50-60°C'], catalyst: 'H2SO4', reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Nitrobenzene forms. H2SO4 generates the nitronium ion (NO2+).', explanationCN: '生成硝基苯。H2SO4产生硝鎓离子（NO2+）。'
    },

    // ==========================================
    // INDUSTRIAL PROCESSES
    // ==========================================
    'N2 + 3H2': {
        reactants: ['N2', 'H2'], products: ['NH3'],
        balanced: 'N2 + 3H2 ⇌ 2NH3', type: 'combination', typeCN: '化合反应',
        principle: 'Haber process for ammonia synthesis.', principleCN: '合成氨的哈伯法。',
        conditions: ['400-500°C', '200 atm', 'Fe catalyst'], catalyst: 'Fe', reversible: true,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Most important industrial chemical process. Produces ammonia for fertilizers.', explanationCN: '最重要的工业化学过程。生产用于化肥的氨。'
    },
    '2SO2 + O2': {
        reactants: ['SO2', 'O2'], products: ['SO3'],
        balanced: '2SO2 + O2 ⇌ 2SO3', type: 'combination', typeCN: '化合反应',
        principle: 'Contact process for sulfuric acid production.', principleCN: '接触法制硫酸。',
        conditions: ['450°C', 'V2O5 catalyst', '1-2 atm'], catalyst: 'V2O5', reversible: true,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Key step in sulfuric acid production. SO3 is absorbed in H2SO4 to make oleum.', explanationCN: '硫酸生产的关键步骤。SO3被H2SO4吸收制成发烟硫酸。'
    },
    '4NH3 + 5O2': {
        reactants: ['NH3', 'O2'], products: ['NO', 'H2O'],
        balanced: '4NH3 + 5O2 → 4NO + 6H2O', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Ostwald process - oxidation of ammonia to NO.', principleCN: '奥斯特瓦尔德法——氨氧化为NO。',
        conditions: ['Pt/Rh catalyst', '800°C'], catalyst: 'Pt/Rh', reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'First step in nitric acid production from ammonia.', explanationCN: '由氨生产硝酸的第一步。'
    },
};

// Merge expanded reactions into main database
function mergeExpandedReactions() {
    for (const [key, value] of Object.entries(ReactionsDBExpanded)) {
        if (!ReactionsDB[key]) {
            ReactionsDB[key] = value;
        }
    }
    // Rebuild search index
    ReactionSearchIndex.length = 0;
    Object.keys(ReactionsDB).forEach(key => {
        const r = ReactionsDB[key];
        ReactionSearchIndex.push({
            formula: key,
            type: 'reaction',
            display: key,
            data: r
        });
    });
}

// Run merge on load
if (typeof ReactionsDB !== 'undefined') {
    mergeExpandedReactions();
}
