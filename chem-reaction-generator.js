/* ============================================
   Chemical Reaction Generator
   Systematically generates reaction entries
   ============================================ */

const ChemReactionGenerator = (() => {

    // ==========================================
    // Reaction Pattern Templates
    // ==========================================

    // Metal + Acid → Salt + H2
    const METAL_ACID_REACTIONS = [
        { metal: 'Fe', acid: 'HCl', salt: 'FeCl2', name: 'Iron', nameCN: '铁' },
        { metal: 'Fe', acid: 'H2SO4', salt: 'FeSO4', name: 'Iron', nameCN: '铁' },
        { metal: 'Mg', acid: 'HCl', salt: 'MgCl2', name: 'Magnesium', nameCN: '镁' },
        { metal: 'Mg', acid: 'H2SO4', salt: 'MgSO4', name: 'Magnesium', nameCN: '镁' },
        { metal: 'Al', acid: 'HCl', salt: 'AlCl3', name: 'Aluminum', nameCN: '铝' },
        { metal: 'Al', acid: 'H2SO4', salt: 'Al2(SO4)3', name: 'Aluminum', nameCN: '铝' },
        { metal: 'Ca', acid: 'HCl', salt: 'CaCl2', name: 'Calcium', nameCN: '钙' },
        { metal: 'Ca', acid: 'H2SO4', salt: 'CaSO4', name: 'Calcium', nameCN: '钙' },
        { metal: 'Ba', acid: 'HCl', salt: 'BaCl2', name: 'Barium', nameCN: '钡' },
        { metal: 'Mn', acid: 'HCl', salt: 'MnCl2', name: 'Manganese', nameCN: '锰' },
        { metal: 'Cr', acid: 'HCl', salt: 'CrCl3', name: 'Chromium', nameCN: '铬' },
        { metal: 'Ni', acid: 'H2SO4', salt: 'NiSO4', name: 'Nickel', nameCN: '镍' },
        { metal: 'Co', acid: 'HCl', salt: 'CoCl2', name: 'Cobalt', nameCN: '钴' },
    ];

    // Acid + Base → Salt + Water (neutralization)
    const NEUTRALIZATION_REACTIONS = [
        { acid: 'HCl', base: 'NaOH', salt: 'NaCl', name: 'Hydrochloric acid', nameCN: '盐酸' },
        { acid: 'HCl', base: 'KOH', salt: 'KCl', name: 'Hydrochloric acid', nameCN: '盐酸' },
        { acid: 'HCl', base: 'Ca(OH)2', salt: 'CaCl2', name: 'Hydrochloric acid', nameCN: '盐酸' },
        { acid: 'HCl', base: 'Ba(OH)2', salt: 'BaCl2', name: 'Hydrochloric acid', nameCN: '盐酸' },
        { acid: 'HNO3', base: 'NaOH', salt: 'NaNO3', name: 'Nitric acid', nameCN: '硝酸' },
        { acid: 'HNO3', base: 'KOH', salt: 'KNO3', name: 'Nitric acid', nameCN: '硝酸' },
        { acid: 'HNO3', base: 'Ca(OH)2', salt: 'Ca(NO3)2', name: 'Nitric acid', nameCN: '硝酸' },
        { acid: 'H2SO4', base: 'NaOH', salt: 'Na2SO4', name: 'Sulfuric acid', nameCN: '硫酸' },
        { acid: 'H2SO4', base: 'KOH', salt: 'K2SO4', name: 'Sulfuric acid', nameCN: '硫酸' },
        { acid: 'H2SO4', base: 'Ca(OH)2', salt: 'CaSO4', name: 'Sulfuric acid', nameCN: '硫酸' },
        { acid: 'H2SO4', base: 'Ba(OH)2', salt: 'BaSO4', name: 'Sulfuric acid', nameCN: '硫酸' },
        { acid: 'H3PO4', base: 'NaOH', salt: 'Na3PO4', name: 'Phosphoric acid', nameCN: '磷酸' },
        { acid: 'H3PO4', base: 'Ca(OH)2', salt: 'Ca3(PO4)2', name: 'Phosphoric acid', nameCN: '磷酸' },
        { acid: 'CH3COOH', base: 'NaOH', salt: 'CH3COONa', name: 'Acetic acid', nameCN: '乙酸' },
        { acid: 'CH3COOH', base: 'Ca(OH)2', salt: '(CH3COO)2Ca', name: 'Acetic acid', nameCN: '乙酸' },
    ];

    // Acid + Carbonate → Salt + Water + CO2
    const ACID_CARBONATE_REACTIONS = [
        { acid: 'HCl', carbonate: 'Na2CO3', salt: 'NaCl', name: 'Sodium carbonate', nameCN: '碳酸钠' },
        { acid: 'HCl', carbonate: 'K2CO3', salt: 'KCl', name: 'Potassium carbonate', nameCN: '碳酸钾' },
        { acid: 'HCl', carbonate: 'MgCO3', salt: 'MgCl2', name: 'Magnesium carbonate', nameCN: '碳酸镁' },
        { acid: 'HCl', carbonate: 'BaCO3', salt: 'BaCl2', name: 'Barium carbonate', nameCN: '碳酸钡' },
        { acid: 'HCl', carbonate: 'NaHCO3', salt: 'NaCl', name: 'Sodium bicarbonate', nameCN: '碳酸氢钠' },
        { acid: 'H2SO4', carbonate: 'Na2CO3', salt: 'Na2SO4', name: 'Sodium carbonate', nameCN: '碳酸钠' },
        { acid: 'H2SO4', carbonate: 'CaCO3', salt: 'CaSO4', name: 'Calcium carbonate', nameCN: '碳酸钙' },
        { acid: 'HNO3', carbonate: 'CaCO3', salt: 'Ca(NO3)2', name: 'Calcium carbonate', nameCN: '碳酸钙' },
        { acid: 'HNO3', carbonate: 'Na2CO3', salt: 'NaNO3', name: 'Sodium carbonate', nameCN: '碳酸钠' },
    ];

    // Metal + Salt solution → New Metal + New Salt (displacement)
    const DISPLACEMENT_REACTIONS = [
        { metal: 'Fe', salt: 'CuSO4', newMetal: 'Cu', newSalt: 'FeSO4' },
        { metal: 'Fe', salt: 'CuCl2', newMetal: 'Cu', newSalt: 'FeCl2' },
        { metal: 'Zn', salt: 'CuSO4', newMetal: 'Cu', newSalt: 'ZnSO4' },
        { metal: 'Zn', salt: 'FeSO4', newMetal: 'Fe', newSalt: 'ZnSO4' },
        { metal: 'Cu', salt: 'AgNO3', newMetal: 'Ag', newSalt: 'Cu(NO3)2' },
        { metal: 'Mg', salt: 'CuSO4', newMetal: 'Cu', newSalt: 'MgSO4' },
        { metal: 'Al', salt: 'CuSO4', newMetal: 'Cu', newSalt: 'Al2(SO4)3' },
        { metal: 'Mg', salt: 'FeSO4', newMetal: 'Fe', newSalt: 'MgSO4' },
    ];

    // Salt + Salt → Precipitate + Soluble Salt (double displacement)
    const PRECIPITATION_REACTIONS = [
        { salt1: 'AgNO3', salt2: 'NaCl', precipitate: 'AgCl', soluble: 'NaNO3', ion: 'Ag⁺ + Cl⁻' },
        { salt1: 'AgNO3', salt2: 'KBr', precipitate: 'AgBr', soluble: 'KNO3', ion: 'Ag⁺ + Br⁻' },
        { salt1: 'AgNO3', salt2: 'KI', precipitate: 'AgI', soluble: 'KNO3', ion: 'Ag⁺ + I⁻' },
        { salt1: 'BaCl2', salt2: 'Na2SO4', precipitate: 'BaSO4', soluble: 'NaCl', ion: 'Ba²⁺ + SO4²⁻' },
        { salt1: 'BaCl2', salt2: 'K2SO4', precipitate: 'BaSO4', soluble: 'KCl', ion: 'Ba²⁺ + SO4²⁻' },
        { salt1: 'Ba(NO3)2', salt2: 'Na2SO4', precipitate: 'BaSO4', soluble: 'NaNO3', ion: 'Ba²⁺ + SO4²⁻' },
        { salt1: 'CaCl2', salt2: 'Na2CO3', precipitate: 'CaCO3', soluble: 'NaCl', ion: 'Ca²⁺ + CO3²⁻' },
        { salt1: 'CaCl2', salt2: 'K2CO3', precipitate: 'CaCO3', soluble: 'KCl', ion: 'Ca²⁺ + CO3²⁻' },
        { salt1: 'Pb(NO3)2', salt2: 'Na2SO4', precipitate: 'PbSO4', soluble: 'NaNO3', ion: 'Pb²⁺ + SO4²⁻' },
        { salt1: 'Pb(NO3)2', salt2: 'KI', precipitate: 'PbI2', soluble: 'KNO3', ion: 'Pb²⁺ + 2I⁻' },
        { salt1: 'CuSO4', salt2: 'NaOH', precipitate: 'Cu(OH)2', soluble: 'Na2SO4', ion: 'Cu²⁺ + 2OH⁻' },
        { salt1: 'FeCl3', salt2: 'NaOH', precipitate: 'Fe(OH)3', soluble: 'NaCl', ion: 'Fe³⁺ + 3OH⁻' },
        { salt1: 'Al2(SO4)3', salt2: 'NaOH', precipitate: 'Al(OH)3', soluble: 'Na2SO4', ion: 'Al³⁺ + 3OH⁻' },
        { salt1: 'MgSO4', salt2: 'NaOH', precipitate: 'Mg(OH)2', soluble: 'Na2SO4', ion: 'Mg²⁺ + 2OH⁻' },
    ];

    // Combustion of organic compounds
    const COMBUSTION_REACTIONS = [
        { formula: 'C2H6', name: 'Ethane', nameCN: '乙烷', o2coeff: 7, co2coeff: 4, h2ocoeff: 6 },
        { formula: 'C3H8', name: 'Propane', nameCN: '丙烷', o2coeff: 5, co2coeff: 3, h2ocoeff: 4 },
        { formula: 'C4H10', name: 'Butane', nameCN: '丁烷', o2coeff: 13, co2coeff: 8, h2ocoeff: 10 },
        { formula: 'C5H12', name: 'Pentane', nameCN: '戊烷', o2coeff: 8, co2coeff: 5, h2ocoeff: 6 },
        { formula: 'C6H14', name: 'Hexane', nameCN: '己烷', o2coeff: 19, co2coeff: 12, h2ocoeff: 14 },
        { formula: 'C2H4', name: 'Ethylene', nameCN: '乙烯', o2coeff: 3, co2coeff: 2, h2ocoeff: 2 },
        { formula: 'C3H6', name: 'Propylene', nameCN: '丙烯', o2coeff: 9, co2coeff: 6, h2ocoeff: 6 },
        { formula: 'C2H2', name: 'Acetylene', nameCN: '乙炔', o2coeff: 5, co2coeff: 4, h2ocoeff: 2 },
        { formula: 'C6H6', name: 'Benzene', nameCN: '苯', o2coeff: 15, co2coeff: 12, h2ocoeff: 6 },
        { formula: 'C7H8', name: 'Toluene', nameCN: '甲苯', o2coeff: 9, co2coeff: 7, h2ocoeff: 4 },
        { formula: 'C2H5OH', name: 'Ethanol', nameCN: '乙醇', o2coeff: 3, co2coeff: 2, h2ocoeff: 3 },
        { formula: 'CH3OH', name: 'Methanol', nameCN: '甲醇', o2coeff: 3, co2coeff: 2, h2ocoeff: 4 },
        { formula: 'C3H7OH', name: 'Propanol', nameCN: '丙醇', o2coeff: 9, co2coeff: 6, h2ocoeff: 8 },
        { formula: 'CH3COOH', name: 'Acetic Acid', nameCN: '乙酸', o2coeff: 2, co2coeff: 2, h2ocoeff: 2 },
        { formula: 'C6H12O6', name: 'Glucose', nameCN: '葡萄糖', o2coeff: 6, co2coeff: 6, h2ocoeff: 6 },
        { formula: 'C12H22O11', name: 'Sucrose', nameCN: '蔗糖', o2coeff: 12, co2coeff: 12, h2ocoeff: 11 },
    ];

    // Metal oxide + Acid → Salt + Water
    const OXIDE_ACID_REACTIONS = [
        { oxide: 'CuO', acid: 'HCl', salt: 'CuCl2', name: 'Copper(II) oxide', nameCN: '氧化铜' },
        { oxide: 'CuO', acid: 'H2SO4', salt: 'CuSO4', name: 'Copper(II) oxide', nameCN: '氧化铜' },
        { oxide: 'Fe2O3', acid: 'HCl', salt: 'FeCl3', name: 'Iron(III) oxide', nameCN: '氧化铁' },
        { oxide: 'Fe2O3', acid: 'H2SO4', salt: 'Fe2(SO4)3', name: 'Iron(III) oxide', nameCN: '氧化铁' },
        { oxide: 'MgO', acid: 'HCl', salt: 'MgCl2', name: 'Magnesium oxide', nameCN: '氧化镁' },
        { oxide: 'MgO', acid: 'H2SO4', salt: 'MgSO4', name: 'Magnesium oxide', nameCN: '氧化镁' },
        { oxide: 'CaO', acid: 'HCl', salt: 'CaCl2', name: 'Calcium oxide', nameCN: '氧化钙' },
        { oxide: 'CaO', acid: 'H2SO4', salt: 'CaSO4', name: 'Calcium oxide', nameCN: '氧化钙' },
        { oxide: 'ZnO', acid: 'HCl', salt: 'ZnCl2', name: 'Zinc oxide', nameCN: '氧化锌' },
        { oxide: 'ZnO', acid: 'H2SO4', salt: 'ZnSO4', name: 'Zinc oxide', nameCN: '氧化锌' },
        { oxide: 'Al2O3', acid: 'HCl', salt: 'AlCl3', name: 'Aluminum oxide', nameCN: '氧化铝' },
        { oxide: 'Na2O', acid: 'HCl', salt: 'NaCl', name: 'Sodium oxide', nameCN: '氧化钠' },
        { oxide: 'Na2O', acid: 'H2SO4', salt: 'Na2SO4', name: 'Sodium oxide', nameCN: '氧化钠' },
        { oxide: 'BaO', acid: 'HCl', salt: 'BaCl2', name: 'Barium oxide', nameCN: '氧化钡' },
    ];

    // ==========================================
    // Generator Functions
    // ==========================================

    function generateMetalAcidReactions() {
        const result = {};
        for (const r of METAL_ACID_REACTIONS) {
            const key = `${r.metal} + ${r.acid}`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            result[key] = {
                reactants: [r.metal, r.acid],
                products: [r.salt, 'H2↑'],
                balanced: `${r.metal} + ${r.acid} → ${r.salt} + H2↑`,
                type: 'displacement',
                typeCN: '置换反应',
                principle: `${r.name} displaces hydrogen from ${r.acid}.`,
                principleCN: `${r.nameCN}从${r.acid}中置换出氢气。`,
                conditions: [],
                catalyst: null,
                reversible: false,
                ionicEquation: `${r.metal} + 2H⁺ → ${r.metal}²⁺ + H2↑`,
                gasProduct: true,
                precipitate: false,
                explanation: `${r.name} reacts with ${r.acid} to produce ${r.salt} and hydrogen gas.`,
                explanationCN: `${r.nameCN}与${r.acid}反应生成${r.salt}和氢气。`,
            };
        }
        return result;
    }

    function generateNeutralizationReactions() {
        const result = {};
        for (const r of NEUTRALIZATION_REACTIONS) {
            const key = `${r.acid} + ${r.base}`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            result[key] = {
                reactants: [r.acid, r.base],
                products: [r.salt, 'H2O'],
                balanced: `${r.acid} + ${r.base} → ${r.salt} + H2O`,
                type: 'neutralization',
                typeCN: '中和反应',
                principle: `${r.acid} neutralizes ${r.base} to form ${r.salt} and water.`,
                principleCN: `${r.acid}中和${r.base}生成${r.salt}和水。`,
                conditions: [],
                catalyst: null,
                reversible: false,
                ionicEquation: 'H⁺ + OH⁻ → H2O',
                gasProduct: false,
                precipitate: false,
                explanation: `Classic acid-base neutralization reaction.`,
                explanationCN: `经典的酸碱中和反应。`,
            };
        }
        return result;
    }

    function generateAcidCarbonateReactions() {
        const result = {};
        for (const r of ACID_CARBONATE_REACTIONS) {
            const key = `${r.carbonate} + ${r.acid}`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            result[key] = {
                reactants: [r.carbonate, r.acid],
                products: [r.salt, 'H2O', 'CO2↑'],
                balanced: `${r.carbonate} + ${r.acid} → ${r.salt} + H2O + CO2↑`,
                type: 'acid-carbonate',
                typeCN: '酸与碳酸盐反应',
                principle: `${r.name} reacts with ${r.acid} to produce salt, water, and CO2.`,
                principleCN: `${r.nameCN}与${r.acid}反应生成盐、水和CO2。`,
                conditions: [],
                catalyst: null,
                reversible: false,
                ionicEquation: 'CO3²⁻ + 2H⁺ → H2O + CO2↑',
                gasProduct: true,
                precipitate: false,
                explanation: `Acid reacts with carbonate to release carbon dioxide gas.`,
                explanationCN: `酸与碳酸盐反应释放二氧化碳气体。`,
            };
        }
        return result;
    }

    function generateDisplacementReactions() {
        const result = {};
        for (const r of DISPLACEMENT_REACTIONS) {
            const key = `${r.metal} + ${r.salt}`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            result[key] = {
                reactants: [r.metal, r.salt],
                products: [r.newSalt, r.newMetal],
                balanced: `${r.metal} + ${r.salt} → ${r.newSalt} + ${r.newMetal}`,
                type: 'displacement',
                typeCN: '置换反应',
                principle: `${r.metal} displaces ${r.newMetal} from ${r.salt} solution.`,
                principleCN: `${r.metal}将${r.newMetal}从${r.salt}溶液中置换出来。`,
                conditions: [],
                catalyst: null,
                reversible: false,
                ionicEquation: `${r.metal} + ${r.newMetal}²⁺ → ${r.metal}²⁺ + ${r.newMetal}`,
                gasProduct: false,
                precipitate: false,
                explanation: `${r.metal} is more reactive than ${r.newMetal} in the activity series.`,
                explanationCN: `${r.metal}在金属活动性顺序中比${r.newMetal}活泼。`,
            };
        }
        return result;
    }

    function generatePrecipitationReactions() {
        const result = {};
        for (const r of PRECIPITATION_REACTIONS) {
            const key = `${r.salt1} + ${r.salt2}`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            result[key] = {
                reactants: [r.salt1, r.salt2],
                products: [r.precipitate + '↓', r.soluble],
                balanced: `${r.salt1} + ${r.salt2} → ${r.precipitate}↓ + ${r.soluble}`,
                type: 'precipitation',
                typeCN: '沉淀反应',
                principle: `${r.ion} forms insoluble ${r.precipitate} precipitate.`,
                principleCN: `${r.ion}生成不溶性${r.precipitate}沉淀。`,
                conditions: [],
                catalyst: null,
                reversible: false,
                ionicEquation: `${r.ion} → ${r.precipitate}↓`,
                gasProduct: false,
                precipitate: true,
                explanation: `Double displacement reaction producing a precipitate.`,
                explanationCN: `复分解反应生成沉淀。`,
            };
        }
        return result;
    }

    function generateCombustionReactions() {
        const result = {};
        for (const r of COMBUSTION_REACTIONS) {
            const key = `${r.formula} + O2`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            const balanced = `${r.formula} + ${r.o2coeff}O2 → ${r.co2coeff}CO2↑ + ${r.h2ocoeff}H2O`;

            result[key] = {
                reactants: [r.formula, 'O2'],
                products: ['CO2↑', 'H2O'],
                balanced: balanced,
                type: 'combustion',
                typeCN: '燃烧反应',
                principle: `${r.name} combustion in oxygen.`,
                principleCN: `${r.nameCN}在氧气中燃烧。`,
                conditions: ['ignition'],
                catalyst: null,
                reversible: false,
                ionicEquation: null,
                gasProduct: true,
                precipitate: false,
                explanation: `${r.name} burns in oxygen to produce carbon dioxide and water.`,
                explanationCN: `${r.nameCN}在氧气中燃烧生成二氧化碳和水。`,
            };
        }
        return result;
    }

    function generateOxideAcidReactions() {
        const result = {};
        for (const r of OXIDE_ACID_REACTIONS) {
            const key = `${r.oxide} + ${r.acid}`;
            if (typeof ReactionsDB !== 'undefined' && ReactionsDB[key]) continue;

            result[key] = {
                reactants: [r.oxide, r.acid],
                products: [r.salt, 'H2O'],
                balanced: `${r.oxide} + ${r.acid} → ${r.salt} + H2O`,
                type: 'acid-base',
                typeCN: '酸碱反应',
                principle: `${r.name} reacts with ${r.acid} to form salt and water.`,
                principleCN: `${r.nameCN}与${r.acid}反应生成盐和水。`,
                conditions: [],
                catalyst: null,
                reversible: false,
                ionicEquation: null,
                gasProduct: false,
                precipitate: false,
                explanation: `Metal oxide reacts with acid in a neutralization-like reaction.`,
                explanationCN: `金属氧化物与酸发生类中和反应。`,
            };
        }
        return result;
    }

    // ==========================================
    // Main Generator
    // ==========================================
    function generateAll() {
        const allReactions = {};

        Object.assign(allReactions, generateMetalAcidReactions());
        Object.assign(allReactions, generateNeutralizationReactions());
        Object.assign(allReactions, generateAcidCarbonateReactions());
        Object.assign(allReactions, generateDisplacementReactions());
        Object.assign(allReactions, generatePrecipitationReactions());
        Object.assign(allReactions, generateCombustionReactions());
        Object.assign(allReactions, generateOxideAcidReactions());

        return allReactions;
    }

    function countGenerated() {
        return Object.keys(generateAll()).length;
    }

    // ==========================================
    // Public API
    // ==========================================
    return {
        generateAll,
        generateMetalAcidReactions,
        generateNeutralizationReactions,
        generateAcidCarbonateReactions,
        generateDisplacementReactions,
        generatePrecipitationReactions,
        generateCombustionReactions,
        generateOxideAcidReactions,
        countGenerated,
        METAL_ACID_REACTIONS,
        NEUTRALIZATION_REACTIONS,
        ACID_CARBONATE_REACTIONS,
        DISPLACEMENT_REACTIONS,
        PRECIPITATION_REACTIONS,
        COMBUSTION_REACTIONS,
        OXIDE_ACID_REACTIONS,
    };
})();

// ==========================================
// Merge Generated Reactions
// ==========================================
function mergeGeneratedReactions() {
    if (typeof ReactionsDB === 'undefined') return;

    const generated = ChemReactionGenerator.generateAll();
    let count = 0;

    for (const [key, value] of Object.entries(generated)) {
        if (!ReactionsDB[key]) {
            ReactionsDB[key] = value;
            count++;
        }
    }

    // Rebuild search index
    if (typeof ReactionSearchIndex !== 'undefined') {
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

    console.log(`ChemReactionGenerator: Added ${count} generated reactions. Total: ${Object.keys(ReactionsDB).length}`);
    return count;
}

// Auto-merge on load
if (typeof ReactionsDB !== 'undefined') {
    setTimeout(() => {
        mergeGeneratedReactions();
    }, 0);
}
