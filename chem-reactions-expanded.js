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
        conditionsCN: ['△ 加热'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Common laboratory method for producing oxygen gas.', explanationCN: '实验室制取氧气的常用方法。'
    },
    '2KMnO4': {
        reactants: ['KMnO4'], products: ['K2MnO4', 'MnO2', 'O2↑'],
        balanced: '2KMnO4 → K2MnO4 + MnO2 + O2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Potassium permanganate decomposes when heated.', principleCN: '高锰酸钾加热分解。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        conditionsCN: ['△ 加热'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Decomposition produces oxygen, potassium manganate, and manganese dioxide.', explanationCN: '分解产生氧气、锰酸钾和二氧化锰。'
    },
    '2H2O2': {
        reactants: ['H2O2'], products: ['H2O', 'O2↑'],
        balanced: '2H2O2 → 2H2O + O2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Hydrogen peroxide decomposes to water and oxygen.', principleCN: '过氧化氢分解为水和氧气。',
        conditions: ['MnO2 catalyst'], catalyst: 'MnO2', reversible: false,
        conditionsCN: ['MnO2 催化剂'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'MnO2 catalyzes the decomposition of hydrogen peroxide.', explanationCN: 'MnO2催化过氧化氢的分解。'
    },
    'CaCO3': {
        reactants: ['CaCO3'], products: ['CaO', 'CO2↑'],
        balanced: 'CaCO3 → CaO + CO2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Calcium carbonate decomposes at high temperature to produce quicklime and CO2.', principleCN: '碳酸钙高温分解生成生石灰和CO2。',
        conditions: ['high temperature'], catalyst: null, reversible: false,
        conditionsCN: ['高温'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Industrial production of calcium oxide (quicklime).', explanationCN: '工业生产氧化钙（生石灰）。'
    },
    '2NaHCO3': {
        reactants: ['NaHCO3'], products: ['Na2CO3', 'H2O', 'CO2↑'],
        balanced: '2NaHCO3 → Na2CO3 + H2O + CO2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Sodium bicarbonate decomposes when heated.', principleCN: '碳酸氢钠加热分解。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        conditionsCN: ['△ 加热'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Baking soda releases CO2 when heated, causing dough to rise.', explanationCN: '小苏打加热释放CO2，使面团膨胀。'
    },
    'NH4HCO3': {
        reactants: ['NH4HCO3'], products: ['NH3↑', 'H2O', 'CO2↑'],
        balanced: 'NH4HCO3 → NH3↑ + H2O + CO2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Ammonium bicarbonate decomposes readily when heated.', principleCN: '碳酸氢铵加热容易分解。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        conditionsCN: ['△ 加热'],
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
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Complete combustion of methane produces CO2 and water.', explanationCN: '甲烷完全燃烧生成CO2和水。'
    },
    'C2H6 + O2': {
        reactants: ['C2H6', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: '2C2H6 + 7O2 → 4CO2↑ + 6H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Ethane combustion.', principleCN: '乙烷燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Ethane burns in oxygen to produce carbon dioxide and water.', explanationCN: '乙烷在氧气中燃烧生成二氧化碳和水。'
    },
    'C2H4 + O2': {
        reactants: ['C2H4', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: 'C2H4 + 3O2 → 2CO2↑ + 2H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Ethylene combustion.', principleCN: '乙烯燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Ethylene burns with a smoky flame due to high carbon content.', explanationCN: '乙烯因碳含量高而燃烧产生黑烟。'
    },
    'C2H2 + O2': {
        reactants: ['C2H2', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: '2C2H2 + 5O2 → 4CO2↑ + 2H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Acetylene combustion produces extremely hot flame.', principleCN: '乙炔燃烧产生极热火焰。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Oxy-acetylene flame reaches 3300°C, used for welding.', explanationCN: '氧炔焰达3300°C，用于焊接。'
    },
    'C2H5OH + O2': {
        reactants: ['C2H5OH', 'O2'], products: ['CO2↑', 'H2O'],
        balanced: 'C2H5OH + 3O2 → 2CO2↑ + 3H2O', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Ethanol combustion.', principleCN: '乙醇燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Ethanol burns cleanly and is used as a biofuel.', explanationCN: '乙醇燃烧清洁，用作生物燃料。'
    },
    'C + O2': {
        reactants: ['C', 'O2'], products: ['CO2↑'],
        balanced: 'C + O2 → CO2↑', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Carbon combustion.', principleCN: '碳燃烧。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Carbon burns in oxygen. With limited oxygen, CO forms instead.', explanationCN: '碳在氧气中燃烧。氧气不足时生成CO。'
    },
    '2Mg + O2': {
        reactants: ['Mg', 'O2'], products: ['MgO'],
        balanced: '2Mg + O2 → 2MgO', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Magnesium burns with brilliant white flame.', principleCN: '镁燃烧发出耀眼白光。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Magnesium burns at 2200°C with intense white light. Used in flares.', explanationCN: '镁在2200°C燃烧，发出强烈白光。用于照明弹。'
    },
    '4Al + 3O2': {
        reactants: ['Al', 'O2'], products: ['Al2O3'],
        balanced: '4Al + 3O2 → 2Al2O3', type: 'combustion', typeCN: '燃烧反应',
        principle: 'Aluminum burns in pure oxygen with white flame.', principleCN: '铝在纯氧中燃烧发出白光。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
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
        conditionsCN: ['高温'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Industrial iron smelting process. CO reduces Fe2O3 to metallic iron.', explanationCN: '工业炼铁过程。CO将Fe2O3还原为金属铁。'
    },
    'Fe2O3 + 2Al': {
        reactants: ['Fe2O3', 'Al'], products: ['Al2O3', 'Fe'],
        balanced: 'Fe2O3 + 2Al → Al2O3 + 2Fe', type: 'thermite', typeCN: '铝热反应',
        principle: 'Thermite reaction - extremely exothermic.', principleCN: '铝热反应——极度放热。',
        conditions: ['ignition'], catalyst: null, reversible: false,
        conditionsCN: ['点燃'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Reaches 2500°C. Used for welding railroad tracks.', explanationCN: '达到2500°C。用于焊接铁轨。'
    },
    'MnO2 + 4HCl': {
        reactants: ['MnO2', 'HCl'], products: ['MnCl2', 'Cl2↑', 'H2O'],
        balanced: 'MnO2 + 4HCl(conc) → MnCl2 + Cl2↑ + 2H2O', type: 'redox', typeCN: '氧化还原反应',
        principle: 'MnO2 oxidizes concentrated HCl to produce chlorine gas.', principleCN: 'MnO2氧化浓盐酸产生氯气。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        conditionsCN: ['△ 加热'],
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
        conditionsCN: ['H3PO4 催化剂','高温','高压'],
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
        conditionsCN: ['H2SO4 催化剂','△ 加热'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Fruity-smelling ester forms. Concentrated H2SO4 acts as catalyst and dehydrating agent.', explanationCN: '生成水果香味的酯。浓硫酸作催化剂和脱水剂。'
    },
    'CH3COOC2H5 + H2O': {
        reactants: ['CH3COOC2H5', 'H2O'], products: ['CH3COOH', 'C2H5OH'],
        balanced: 'CH3COOC2H5 + H2O → CH3COOH + C2H5OH', type: 'hydrolysis', typeCN: '水解反应',
        principle: 'Ethyl acetate hydrolyzes in acidic solution.', principleCN: '乙酸乙酯在酸性溶液中水解。',
        conditions: ['H2SO4 catalyst', '△ heating'], catalyst: 'H2SO4', reversible: true,
        conditionsCN: ['H2SO4 催化剂','△ 加热'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Reverse of esterification. Acid-catalyzed hydrolysis of ester.', explanationCN: '酯化反应的逆反应。酯的酸催化水解。'
    },
    'CH3COOC2H5 + NaOH': {
        reactants: ['CH3COOC2H5', 'NaOH'], products: ['CH3COONa', 'C2H5OH'],
        balanced: 'CH3COOC2H5 + NaOH → CH3COONa + C2H5OH', type: 'saponification', typeCN: '皂化反应',
        principle: 'Base hydrolysis of ester (saponification).', principleCN: '酯的碱性水解（皂化反应）。',
        conditions: ['△ heating'], catalyst: null, reversible: false,
        conditionsCN: ['△ 加热'],
        ionicEquation: 'CH3COOC2H5 + OH⁻ → CH3COO⁻ + C2H5OH', gasProduct: false, precipitate: false,
        explanation: 'Saponification - the basis of soap making from fats and NaOH.', explanationCN: '皂化反应——用油脂和NaOH制皂的基础。'
    },
    'C6H6 + Br2': {
        reactants: ['C6H6', 'Br2'], products: ['C6H5Br', 'HBr'],
        balanced: 'C6H6 + Br2 → C6H5Br + HBr', type: 'substitution', typeCN: '取代反应',
        principle: 'Electrophilic aromatic substitution of benzene.', principleCN: '苯的亲电芳香取代反应。',
        conditions: ['FeBr3 catalyst'], catalyst: 'FeBr3', reversible: false,
        conditionsCN: ['FeBr3 催化剂'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Benzene undergoes substitution rather than addition due to aromatic stability.', explanationCN: '苯由于芳香稳定性而发生取代而非加成。'
    },
    'C6H6 + HNO3': {
        reactants: ['C6H6', 'HNO3'], products: ['C6H5NO2', 'H2O'],
        balanced: 'C6H6 + HNO3 → C6H5NO2 + H2O', type: 'substitution', typeCN: '取代反应',
        principle: 'Nitration of benzene.', principleCN: '苯的硝化反应。',
        conditions: ['H2SO4 catalyst', '50-60°C'], catalyst: 'H2SO4', reversible: false,
        conditionsCN: ['H2SO4 催化剂','50-60°C'],
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
        conditionsCN: ['400-500°C','200 atm','Fe 催化剂'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Most important industrial chemical process. Produces ammonia for fertilizers.', explanationCN: '最重要的工业化学过程。生产用于化肥的氨。'
    },
    '2SO2 + O2': {
        reactants: ['SO2', 'O2'], products: ['SO3'],
        balanced: '2SO2 + O2 ⇌ 2SO3', type: 'combination', typeCN: '化合反应',
        principle: 'Contact process for sulfuric acid production.', principleCN: '接触法制硫酸。',
        conditions: ['450°C', 'V2O5 catalyst', '1-2 atm'], catalyst: 'V2O5', reversible: true,
        conditionsCN: ['450°C','V2O5 催化剂','1-2 atm'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Key step in sulfuric acid production. SO3 is absorbed in H2SO4 to make oleum.', explanationCN: '硫酸生产的关键步骤。SO3被H2SO4吸收制成发烟硫酸。'
    },
    '4NH3 + 5O2': {
        reactants: ['NH3', 'O2'], products: ['NO', 'H2O'],
        balanced: '4NH3 + 5O2 → 4NO + 6H2O', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Ostwald process - oxidation of ammonia to NO.', principleCN: '奥斯特瓦尔德法——氨氧化为NO。',
        conditions: ['Pt/Rh catalyst', '800°C'], catalyst: 'Pt/Rh', reversible: false,
        conditionsCN: ['Pt/Rh 催化剂','800°C'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'First step in nitric acid production from ammonia.', explanationCN: '由氨生产硝酸的第一步。'
    },

    // ==========================================
    // ACID-BASE NEUTRALIZATION (additional),,
    'H2SO4 + 2NaOH': {
        reactants: ['H2SO4', 'NaOH'], products: ['Na2SO4', 'H2O'],
        balanced: 'H2SO4 + 2NaOH → Na2SO4 + 2H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Diprotic acid requires two equivalents of base.', principleCN: '二元酸需要两当量的碱中和。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2H⁺ + 2OH⁻ → 2H2O', gasProduct: false, precipitate: false,
        explanation: 'Sulfuric acid is diprotic, so two moles of NaOH are needed per mole of acid.', explanationCN: '硫酸是二元酸，每摩尔酸需要两摩尔NaOH中和。'
    },
    'HCl + NH3·H2O': {
        reactants: ['HCl', 'NH3·H2O'], products: ['NH4Cl', 'H2O'],
        balanced: 'HCl + NH3·H2O → NH4Cl + H2O', type: 'neutralization', typeCN: '中和反应',
        principle: 'Strong acid neutralizes weak base ammonium hydroxide.', principleCN: '强酸中和弱碱氨水。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'H⁺ + NH3·H2O → NH4⁺ + H2O', gasProduct: false, precipitate: false,
        explanation: 'Ammonium chloride is used in fertilizers and as a flux in soldering.', explanationCN: '氯化铵用于肥料和焊接助焊剂。'
    },

    // ==========================================
    // PRECIPITATION REACTIONS (additional),,
    'AgNO3 + KCl': {
        reactants: ['AgNO3', 'KCl'], products: ['AgCl↓', 'KNO3'],
        balanced: 'AgNO3 + KCl → AgCl↓ + KNO3', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Silver chloride precipitates as white curdy solid.', principleCN: '氯化银以白色凝乳状固体沉淀。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Ag⁺ + Cl⁻ → AgCl↓', gasProduct: false, precipitate: true,
        explanation: 'AgCl is white, curdy, and turns purple in sunlight. Used to test for Cl⁻ ions.', explanationCN: 'AgCl为白色凝乳状，在阳光下变紫。用于检验Cl⁻离子。'
    },

    // ==========================================
    // DISPLACEMENT REACTIONS (additional),,
    'Fe + H2SO4': {
        reactants: ['Fe', 'H2SO4'], products: ['FeSO4', 'H2↑'],
        balanced: 'Fe + H2SO4 → FeSO4 + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Iron displaces hydrogen from dilute sulfuric acid.', principleCN: '铁从稀硫酸中置换出氢气。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Fe + 2H⁺ → Fe²⁺ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Iron reacts slowly with dilute sulfuric acid to produce iron(II) sulfate and hydrogen.', explanationCN: '铁与稀硫酸缓慢反应生成硫酸亚铁和氢气。'
    },

    // ==========================================
    // OXIDATION-REDUCTION (additional)
    // ==========================================
    'CuO + H2': {
        reactants: ['CuO', 'H2'], products: ['Cu', 'H2O'],
        balanced: 'CuO + H2 → Cu + H2O', type: 'reduction', typeCN: '还原反应',
        principle: 'Hydrogen reduces copper oxide to metallic copper.', principleCN: '氢气将氧化铜还原为金属铜。',
        conditions: ['heating'], catalyst: null, reversible: false,
        conditionsCN: ['加热'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Black CuO turns to reddish-brown Cu metal. Water droplets form on cooler parts of the tube.', explanationCN: '黑色CuO变为红棕色Cu金属。试管较冷处形成水滴。'
    },

    // ==========================================
    // ORGANIC REACTIONS,,
    'CH3CHO + O2': {
        reactants: ['CH3CHO', 'O2'], products: ['CH3COOH'],
        balanced: '2CH3CHO + O2 → 2CH3COOH', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Oxidation of acetaldehyde to acetic acid.', principleCN: '乙醛氧化为乙酸。',
        conditions: ['Mn catalyst', '60°C'], catalyst: 'Mn²⁺', reversible: false,
        conditionsCN: ['Mn 催化剂','60°C'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Industrial production of acetic acid from acetaldehyde oxidation.', explanationCN: '工业上由乙醛氧化生产乙酸。'
    },

    // ==========================================
    // ADDITIONAL DECOMPOSITION
    // ==========================================
    '2H2O': {
        reactants: ['H2O'], products: ['H2', 'O2'],
        balanced: '2H2O → 2H2↑ + O2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Electrolysis of water produces hydrogen and oxygen.', principleCN: '电解水产生氢气和氧气。',
        conditions: ['electrolysis', 'DC current'], catalyst: null, reversible: false,
        conditionsCN: ['电解','直流电'],
        ionicEquation: '2H2O → 2H2↑ + O2↑', gasProduct: true, precipitate: false,
        explanation: 'Water decomposes into hydrogen (cathode) and oxygen (anode) during electrolysis. Volume ratio H2:O2 = 2:1.', explanationCN: '水电解时分解为氢气（阴极）和氧气（阳极）。体积比H2:O2 = 2:1。'
    },

    // ==========================================
    // ADDITION REACTIONS
    // ==========================================
    'C2H4 + H2': {
        reactants: ['C2H4', 'H2'], products: ['C2H6'],
        balanced: 'C2H4 + H2 → C2H6', type: 'addition', typeCN: '加成反应',
        principle: 'Catalytic hydrogenation of ethylene to ethane.', principleCN: '乙烯催化加氢生成乙烷。',
        conditions: ['Ni catalyst', 'heat'], catalyst: 'Ni', reversible: false,
        conditionsCN: ['Ni 催化剂','加热'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Ethylene adds hydrogen across the double bond to form ethane. Used in margarine production.', explanationCN: '乙烯在双键上加氢生成乙烷。用于人造黄油生产。'
    },
    'C2H4 + HCl': {
        reactants: ['C2H4', 'HCl'], products: ['C2H5Cl'],
        balanced: 'C2H4 + HCl → C2H5Cl', type: 'addition', typeCN: '加成反应',
        principle: 'Electrophilic addition of HCl to ethylene (Markovnikov).', principleCN: 'HCl对乙烯的亲电加成反应（马氏规则）。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'HCl adds across the double bond of ethylene to form chloroethane. Follows Markovnikov\'s rule for asymmetric alkenes.', explanationCN: 'HCl在乙烯双键上加成生成氯乙烷。不对称烯烃遵循马氏规则。'
    },
    'C2H2 + H2': {
        reactants: ['C2H2', 'H2'], products: ['C2H4'],
        balanced: 'C2H2 + H2 → C2H4', type: 'addition', typeCN: '加成反应',
        principle: 'Partial hydrogenation of acetylene to ethylene.', principleCN: '乙炔部分加氢生成乙烯。',
        conditions: ['Pd/BaSO4 catalyst', 'Lindlar catalyst'], catalyst: 'Pd/BaSO4', reversible: false,
        conditionsCN: ['Pd/BaSO4 催化剂','林德拉催化剂'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Lindlar catalyst allows selective partial hydrogenation of alkynes to cis-alkenes.', explanationCN: '林德拉催化剂允许炔烃选择性部分加氢生成顺式烯烃。'
    },

    // ==========================================
    // POLYMERIZATION REACTIONS
    // ==========================================
    'nC2H4': {
        reactants: ['C2H4'], products: ['(C2H4)n'],
        balanced: 'nC2H4 → -(CH₂-CH₂)n-', type: 'polymerization', typeCN: '聚合反应',
        principle: 'Free radical polymerization of ethylene to polyethylene.', principleCN: '乙烯自由基聚合生成聚乙烯。',
        conditions: ['high pressure', 'O2 initiator', '200°C'], catalyst: 'O2 (initiator)', reversible: false,
        conditionsCN: ['高压','O2 initiator','200°C'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Ethylene molecules add together to form polyethylene (PE), the most common plastic. Used in bags, bottles, and pipes.', explanationCN: '乙烯分子加成在一起形成聚乙烯（PE），最常见的塑料。用于袋子、瓶子和管道。'
    },
    'nCH2CHCH3': {
        reactants: ['CH2CHCH3'], products: ['-(CH₂-CH(CH₃))n-'],
        balanced: 'nCH₂=CH(CH₃) → -(CH₂-CH(CH₃))n-', type: 'polymerization', typeCN: '聚合反应',
        principle: 'Polymerization of propylene to polypropylene.', principleCN: '丙烯聚合生成聚丙烯。',
        conditions: ['Ziegler-Natta catalyst', '60°C'], catalyst: 'Ziegler-Natta', reversible: false,
        conditionsCN: ['齐格勒-纳塔催化剂','60°C'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Polypropylene (PP) is a strong, heat-resistant plastic used in containers, textiles, and automotive parts.', explanationCN: '聚丙烯（PP）是耐热的强韧塑料，用于容器、纺织品和汽车零件。'
    },

    // ==========================================
    // ELECTROCHEMISTRY REACTIONS
    // ==========================================
    '2NaCl + 2H2O': {
        reactants: ['NaCl', 'H2O'], products: ['NaOH', 'H2↑', 'Cl2↑'],
        balanced: '2NaCl + 2H2O → 2NaOH + H2↑ + Cl2↑', type: 'electrolysis', typeCN: '电解反应',
        principle: 'Electrolysis of brine (chlor-alkali process).', principleCN: '食盐水电解（氯碱工业）。',
        conditions: ['electrolysis', 'membrane cell'], catalyst: null, reversible: false,
        conditionsCN: ['电解','膜电解槽'],
        ionicEquation: '2Cl⁻ → Cl2↑ + 2e⁻ (anode); 2H2O + 2e⁻ → H2↑ + 2OH⁻ (cathode)', gasProduct: true, precipitate: false,
        explanation: 'Industrial production of NaOH, Cl2, and H2 from brine electrolysis. One of the most important electrochemical processes.', explanationCN: '食盐水电解工业生产NaOH、Cl2和H2。最重要的电化学过程之一。'
    },
    '2CuSO4 + 2H2O': {
        reactants: ['CuSO4', 'H2O'], products: ['Cu', 'O2↑', 'H2SO4'],
        balanced: '2CuSO4 + 2H2O → 2Cu + O2↑ + 2H2SO4', type: 'electrolysis', typeCN: '电解反应',
        principle: 'Electrolysis of copper sulfate solution with inert electrodes.', principleCN: '惰性电极电解硫酸铜溶液。',
        conditions: ['electrolysis', 'inert electrodes (Pt/C)'], catalyst: null, reversible: false,
        conditionsCN: ['电解','惰性电极（Pt/C）'],
        ionicEquation: 'Cu²⁺ + 2e⁻ → Cu (cathode); 2H2O → O2↑ + 4H⁺ + 4e⁻ (anode)', gasProduct: true, precipitate: false,
        explanation: 'Copper deposits at cathode, oxygen gas at anode. Solution becomes acidic as H2SO4 accumulates.', explanationCN: '铜在阴极析出，氧气在阳极产生。溶液因H2SO4积累而变酸。'
    },

    // ==========================================
    // ADDITIONAL REDOX REACTIONS
    // ==========================================
    'Zn + CuSO4': {
        reactants: ['Zn', 'CuSO4'], products: ['ZnSO4', 'Cu'],
        balanced: 'Zn + CuSO4 → ZnSO4 + Cu', type: 'displacement', typeCN: '置换反应',
        principle: 'Zinc displaces copper from copper sulfate solution.', principleCN: '锌从硫酸铜溶液中置换出铜。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'Zn + Cu²⁺ → Zn²⁺ + Cu', gasProduct: false, precipitate: false,
        explanation: 'Zinc is more reactive than copper. Used in Daniell cell - a classic electrochemical cell.', explanationCN: '锌比铜更活泼。用于丹尼尔电池——一种经典电化学电池。'
    },
    '2FeCl3 + Fe': {
        reactants: ['FeCl3', 'Fe'], products: ['FeCl2'],
        balanced: '2FeCl3 + Fe → 3FeCl2', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Iron reduces Fe³⁺ to Fe²⁺.', principleCN: '铁将Fe³⁺还原为Fe²⁺。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2Fe³⁺ + Fe → 3Fe²⁺', gasProduct: false, precipitate: false,
        explanation: 'Iron metal reduces iron(III) to iron(II). The yellow FeCl3 solution turns pale green.', explanationCN: '铁金属将铁(III)还原为铁(II)。黄色FeCl3溶液变为浅绿色。'
    },
    '2FeCl3 + Cu': {
        reactants: ['FeCl3', 'Cu'], products: ['FeCl2', 'CuCl2'],
        balanced: '2FeCl3 + Cu → 2FeCl2 + CuCl2', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Fe³⁺ oxidizes copper metal.', principleCN: 'Fe³⁺氧化铜金属。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺', gasProduct: false, precipitate: false,
        explanation: 'Copper dissolves in FeCl3 solution. Used to etch copper circuit boards.', explanationCN: '铜溶解在FeCl3溶液中。用于蚀刻铜电路板。'
    },

    // ==========================================
    // SAPONIFICATION & HYDROLYSIS
    // ==========================================
    'C3H5(OOC17H35)3 + 3NaOH': {
        reactants: ['C3H5(OOC17H35)3', 'NaOH'], products: ['C3H5(OH)3', 'C17H35COONa'],
        balanced: 'C3H5(OOC17H35)3 + 3NaOH → C3H5(OH)3 + 3C17H35COONa', type: 'saponification', typeCN: '皂化反应',
        principle: 'Alkaline hydrolysis of fat to produce soap and glycerol.', principleCN: '油脂碱性水解生成肥皂和甘油。',
        conditions: ['heating', 'reflux'], catalyst: null, reversible: false,
        conditionsCN: ['加热','回流'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Fat (triglyceride) reacts with NaOH to produce soap (sodium stearate) and glycerol. This is the traditional soap-making process.', explanationCN: '油脂（甘油三酯）与NaOH反应生成肥皂（硬脂酸钠）和甘油。这是传统的制皂过程。'
    },

    // ==========================================
    // ADDITIONAL DECOMPOSITION & COMBINATION
    // ==========================================
    '2AgCl': {
        reactants: ['AgCl'], products: ['Ag', 'Cl2'],
        balanced: '2AgCl → 2Ag + Cl2↑', type: 'decomposition', typeCN: '分解反应',
        principle: 'Silver chloride decomposes in light.', principleCN: '氯化银在光照下分解。',
        conditions: ['sunlight/UV'], catalyst: null, reversible: false,
        conditionsCN: ['阳光/紫外光'],
        ionicEquation: null, gasProduct: true, precipitate: false,
        explanation: 'Photodecomposition of AgCl. Used in traditional photography - darkens on exposure to light.', explanationCN: '氯化银的光分解。用于传统摄影——曝光后变黑。'
    },
    'N2 + O2': {
        reactants: ['N2', 'O2'], products: ['NO'],
        balanced: 'N2 + O2 → 2NO', type: 'combination', typeCN: '化合反应',
        principle: 'Nitrogen and oxygen combine at high temperatures.', principleCN: '氮气和氧气在高温下化合。',
        conditions: ['lightning or >3000°C'], catalyst: null, reversible: true,
        conditionsCN: ['闪电或>3000°C'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Occurs naturally during lightning strikes. Part of the nitrogen cycle. NO further oxidizes to NO2.', explanationCN: '雷击时自然发生。氮循环的一部分。NO进一步氧化为NO2。'
    },
    'CaO + SiO2': {
        reactants: ['CaO', 'SiO2'], products: ['CaSiO3'],
        balanced: 'CaO + SiO2 → CaSiO3', type: 'combination', typeCN: '化合反应',
        principle: 'Lime reacts with silica to form calcium silicate (slag).', principleCN: '石灰与二氧化硅反应生成硅酸钙（炉渣）。',
        conditions: ['high temperature'], catalyst: null, reversible: false,
        conditionsCN: ['高温'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'This reaction occurs in blast furnaces to remove impurities as slag during iron smelting.', explanationCN: '此反应在高炉中发生，将杂质以炉渣形式除去。'
    },
    'CaO + 2HCl': {
        reactants: ['CaO', 'HCl'], products: ['CaCl2', 'H2O'],
        balanced: 'CaO + 2HCl → CaCl2 + H2O', type: 'acid-base', typeCN: '酸碱反应',
        principle: 'Calcium oxide (basic oxide) reacts with hydrochloric acid.', principleCN: '氧化钙（碱性氧化物）与盐酸反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'CaO + 2H⁺ → Ca²⁺ + H2O', gasProduct: false, precipitate: false,
        explanation: 'Quicklime reacts vigorously with acid. This is a neutralization of a basic oxide.', explanationCN: '生石灰与酸剧烈反应。这是碱性氧化物的中和。'
    },
    'Na2CO3 + Ca(OH)2': {
        reactants: ['Na2CO3', 'Ca(OH)2'], products: ['CaCO3↓', 'NaOH'],
        balanced: 'Na2CO3 + Ca(OH)2 → CaCO3↓ + 2NaOH', type: 'precipitation', typeCN: '沉淀反应',
        principle: 'Soda-lime process for NaOH production.', principleCN: '苛化法制备NaOH。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: 'CO3²⁻ + Ca²⁺ → CaCO3↓', gasProduct: false, precipitate: true,
        explanation: 'Industrial method for producing NaOH (causticization). CaCO3 precipitates, leaving NaOH in solution.', explanationCN: '工业制备NaOH的方法（苛化法）。CaCO3沉淀，NaOH留在溶液中。'
    },

    // ==========================================
    // GAS REACTIONS
    // ==========================================
    'H2 + Cl2': {
        reactants: ['H2', 'Cl2'], products: ['HCl'],
        balanced: 'H2 + Cl2 → 2HCl', type: 'combination', typeCN: '化合反应',
        principle: 'Hydrogen reacts with chlorine to form hydrogen chloride.', principleCN: '氢气与氯气反应生成氯化氢。',
        conditions: ['UV light or ignition'], catalyst: null, reversible: false,
        conditionsCN: ['紫外光或点燃'],
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Burns with a pale yellow flame in Cl2. HCl gas dissolves in water to form hydrochloric acid.', explanationCN: '在Cl2中燃烧发出淡黄色火焰。HCl气体溶于水形成盐酸。'
    },
    '2NO + O2': {
        reactants: ['NO', 'O2'], products: ['NO2'],
        balanced: '2NO + O2 → 2NO2', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Nitric oxide oxidizes to nitrogen dioxide in air.', principleCN: '一氧化氮在空气中氧化为二氧化氮。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'Colorless NO turns brown as it oxidizes to NO2 in air. Part of the nitrogen cycle and smog formation.', explanationCN: '无色NO在空气中氧化为NO2时变棕色。是氮循环和烟雾形成的一部分。'
    },
    '3NO2 + H2O': {
        reactants: ['NO2', 'H2O'], products: ['HNO3', 'NO'],
        balanced: '3NO2 + H2O → 2HNO3 + NO', type: 'oxidation', typeCN: '氧化反应',
        principle: 'Nitrogen dioxide disproportionation in water.', principleCN: '二氧化氮在水中歧化反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'NO2 reacts with water to form HNO3 and NO. This is the last step in the Ostwald process for HNO3 production.', explanationCN: 'NO2与水反应生成HNO3和NO。这是奥斯特瓦尔德法制硝酸的最后一步。'
    },
    'SO3 + H2O': {
        reactants: ['SO3', 'H2O'], products: ['H2SO4'],
        balanced: 'SO3 + H2O → H2SO4', type: 'combination', typeCN: '化合反应',
        principle: 'Sulfur trioxide dissolves in water to form sulfuric acid.', principleCN: '三氧化硫溶于水生成硫酸。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: null, gasProduct: false, precipitate: false,
        explanation: 'In industry, SO3 is absorbed in concentrated H2SO4 first (to form oleum) then diluted, as direct dissolution produces a dangerous mist.', explanationCN: '工业上，SO3先被浓H2SO4吸收（形成发烟硫酸）再稀释，因为直接溶解会产生危险酸雾。'
    },

    // ==========================================
    // ADDITIONAL ACID-BASE REACTIONS
    // ==========================================
    'HCl + Fe': {
        reactants: ['HCl', 'Fe'], products: ['FeCl2', 'H2↑'],
        balanced: '2HCl + Fe → FeCl2 + H2↑', type: 'displacement', typeCN: '置换反应',
        principle: 'Iron reacts with dilute hydrochloric acid.', principleCN: '铁与稀盐酸反应。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2H⁺ + Fe → Fe²⁺ + H2↑', gasProduct: true, precipitate: false,
        explanation: 'Iron dissolves in dilute HCl to produce iron(II) chloride and hydrogen gas. Produces FeCl2 (green), not FeCl3.', explanationCN: '铁溶于稀盐酸生成氯化亚铁和氢气。生成FeCl2（绿色），而非FeCl3。'
    },
    'H2SO4 + CuO': {
        reactants: ['H2SO4', 'CuO'], products: ['CuSO4', 'H2O'],
        balanced: 'H2SO4 + CuO → CuSO4 + H2O', type: 'acid-base', typeCN: '酸碱反应',
        principle: 'Acid reacts with metal oxide to form salt and water.', principleCN: '酸与金属氧化物反应生成盐和水。',
        conditions: ['heating'], catalyst: null, reversible: false,
        conditionsCN: ['加热'],
        ionicEquation: '2H⁺ + CuO → Cu²⁺ + H2O', gasProduct: false, precipitate: false,
        explanation: 'Black CuO dissolves in H2SO4 to form blue CuSO4 solution. Used to prepare copper sulfate crystals.', explanationCN: '黑色CuO溶于H2SO4生成蓝色CuSO4溶液。用于制备硫酸铜晶体。'
    },
    'HCl + MgO': {
        reactants: ['HCl', 'MgO'], products: ['MgCl2', 'H2O'],
        balanced: '2HCl + MgO → MgCl2 + H2O', type: 'acid-base', typeCN: '酸碱反应',
        principle: 'Hydrochloric acid neutralizes magnesium oxide.', principleCN: '盐酸中和氧化镁。',
        conditions: [], catalyst: null, reversible: false,
        ionicEquation: '2H⁺ + MgO → Mg²⁺ + H2O', gasProduct: false, precipitate: false,
        explanation: 'MgO (a basic oxide) reacts with HCl to form magnesium chloride. Used in antacid formulations.', explanationCN: 'MgO（碱性氧化物）与盐酸反应生成氯化镁。用于抗酸剂配方。'
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
