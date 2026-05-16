/* ============================================
   Chemical Formula Parser Engine
   ============================================ */

const ChemParser = (() => {

    // ==========================================
    // Element Data
    // ==========================================
    const ELEMENTS = {
        H:  { symbol: 'H',  name: 'Hydrogen',      nameCN: '氢',   mass: 1.008,   category: 'nonmetal',        group: 1,  period: 1, electronegativity: 2.20 },
        He: { symbol: 'He', name: 'Helium',         nameCN: '氦',   mass: 4.003,   category: 'noble-gas',       group: 18, period: 1, electronegativity: 0 },
        Li: { symbol: 'Li', name: 'Lithium',        nameCN: '锂',   mass: 6.941,   category: 'alkali-metal',    group: 1,  period: 2, electronegativity: 0.98 },
        Be: { symbol: 'Be', name: 'Beryllium',      nameCN: '铍',   mass: 9.012,   category: 'alkaline-earth',  group: 2,  period: 2, electronegativity: 1.57 },
        B:  { symbol: 'B',  name: 'Boron',          nameCN: '硼',   mass: 10.81,   category: 'metalloid',       group: 13, period: 2, electronegativity: 2.04 },
        C:  { symbol: 'C',  name: 'Carbon',         nameCN: '碳',   mass: 12.011,  category: 'nonmetal',        group: 14, period: 2, electronegativity: 2.55 },
        N:  { symbol: 'N',  name: 'Nitrogen',       nameCN: '氮',   mass: 14.007,  category: 'nonmetal',        group: 15, period: 2, electronegativity: 3.04 },
        O:  { symbol: 'O',  name: 'Oxygen',         nameCN: '氧',   mass: 15.999,  category: 'nonmetal',        group: 16, period: 2, electronegativity: 3.44 },
        F:  { symbol: 'F',  name: 'Fluorine',       nameCN: '氟',   mass: 18.998,  category: 'halogen',         group: 17, period: 2, electronegativity: 3.98 },
        Ne: { symbol: 'Ne', name: 'Neon',           nameCN: '氖',   mass: 20.180,  category: 'noble-gas',       group: 18, period: 2, electronegativity: 0 },
        Na: { symbol: 'Na', name: 'Sodium',         nameCN: '钠',   mass: 22.990,  category: 'alkali-metal',    group: 1,  period: 3, electronegativity: 0.93 },
        Mg: { symbol: 'Mg', name: 'Magnesium',      nameCN: '镁',   mass: 24.305,  category: 'alkaline-earth',  group: 2,  period: 3, electronegativity: 1.31 },
        Al: { symbol: 'Al', name: 'Aluminum',       nameCN: '铝',   mass: 26.982,  category: 'post-transition', group: 13, period: 3, electronegativity: 1.61 },
        Si: { symbol: 'Si', name: 'Silicon',        nameCN: '硅',   mass: 28.086,  category: 'metalloid',       group: 14, period: 3, electronegativity: 1.90 },
        P:  { symbol: 'P',  name: 'Phosphorus',     nameCN: '磷',   mass: 30.974,  category: 'nonmetal',        group: 15, period: 3, electronegativity: 2.19 },
        S:  { symbol: 'S',  name: 'Sulfur',         nameCN: '硫',   mass: 32.06,   category: 'nonmetal',        group: 16, period: 3, electronegativity: 2.58 },
        Cl: { symbol: 'Cl', name: 'Chlorine',       nameCN: '氯',   mass: 35.45,   category: 'halogen',         group: 17, period: 3, electronegativity: 3.16 },
        Ar: { symbol: 'Ar', name: 'Argon',          nameCN: '氩',   mass: 39.948,  category: 'noble-gas',       group: 18, period: 3, electronegativity: 0 },
        K:  { symbol: 'K',  name: 'Potassium',      nameCN: '钾',   mass: 39.098,  category: 'alkali-metal',    group: 1,  period: 4, electronegativity: 0.82 },
        Ca: { symbol: 'Ca', name: 'Calcium',        nameCN: '钙',   mass: 40.078,  category: 'alkaline-earth',  group: 2,  period: 4, electronegativity: 1.00 },
        Sc: { symbol: 'Sc', name: 'Scandium',       nameCN: '钪',   mass: 44.956,  category: 'transition',      group: 3,  period: 4, electronegativity: 1.36 },
        Ti: { symbol: 'Ti', name: 'Titanium',       nameCN: '钛',   mass: 47.867,  category: 'transition',      group: 4,  period: 4, electronegativity: 1.54 },
        V:  { symbol: 'V',  name: 'Vanadium',       nameCN: '钒',   mass: 50.942,  category: 'transition',      group: 5,  period: 4, electronegativity: 1.63 },
        Cr: { symbol: 'Cr', name: 'Chromium',       nameCN: '铬',   mass: 51.996,  category: 'transition',      group: 6,  period: 4, electronegativity: 1.66 },
        Mn: { symbol: 'Mn', name: 'Manganese',      nameCN: '锰',   mass: 54.938,  category: 'transition',      group: 7,  period: 4, electronegativity: 1.55 },
        Fe: { symbol: 'Fe', name: 'Iron',           nameCN: '铁',   mass: 55.845,  category: 'transition',      group: 8,  period: 4, electronegativity: 1.83 },
        Co: { symbol: 'Co', name: 'Cobalt',         nameCN: '钴',   mass: 58.933,  category: 'transition',      group: 9,  period: 4, electronegativity: 1.88 },
        Ni: { symbol: 'Ni', name: 'Nickel',         nameCN: '镍',   mass: 58.693,  category: 'transition',      group: 10, period: 4, electronegativity: 1.91 },
        Cu: { symbol: 'Cu', name: 'Copper',         nameCN: '铜',   mass: 63.546,  category: 'transition',      group: 11, period: 4, electronegativity: 1.90 },
        Zn: { symbol: 'Zn', name: 'Zinc',           nameCN: '锌',   mass: 65.38,   category: 'transition',      group: 12, period: 4, electronegativity: 1.65 },
        Ga: { symbol: 'Ga', name: 'Gallium',        nameCN: '镓',   mass: 69.723,  category: 'post-transition', group: 13, period: 4, electronegativity: 1.81 },
        Ge: { symbol: 'Ge', name: 'Germanium',      nameCN: '锗',   mass: 72.630,  category: 'metalloid',       group: 14, period: 4, electronegativity: 2.01 },
        As: { symbol: 'As', name: 'Arsenic',        nameCN: '砷',   mass: 74.922,  category: 'metalloid',       group: 15, period: 4, electronegativity: 2.18 },
        Se: { symbol: 'Se', name: 'Selenium',       nameCN: '硒',   mass: 78.971,  category: 'nonmetal',        group: 16, period: 4, electronegativity: 2.55 },
        Br: { symbol: 'Br', name: 'Bromine',        nameCN: '溴',   mass: 79.904,  category: 'halogen',         group: 17, period: 4, electronegativity: 2.96 },
        Kr: { symbol: 'Kr', name: 'Krypton',        nameCN: '氪',   mass: 83.798,  category: 'noble-gas',       group: 18, period: 4, electronegativity: 3.00 },
        Rb: { symbol: 'Rb', name: 'Rubidium',       nameCN: '铷',   mass: 85.468,  category: 'alkali-metal',    group: 1,  period: 5, electronegativity: 0.82 },
        Sr: { symbol: 'Sr', name: 'Strontium',      nameCN: '锶',   mass: 87.62,   category: 'alkaline-earth',  group: 2,  period: 5, electronegativity: 0.95 },
        Ag: { symbol: 'Ag', name: 'Silver',         nameCN: '银',   mass: 107.868, category: 'transition',      group: 11, period: 5, electronegativity: 1.93 },
        I:  { symbol: 'I',  name: 'Iodine',         nameCN: '碘',   mass: 126.904, category: 'halogen',         group: 17, period: 5, electronegativity: 2.66 },
        Ba: { symbol: 'Ba', name: 'Barium',         nameCN: '钡',   mass: 137.327, category: 'alkaline-earth',  group: 2,  period: 6, electronegativity: 0.89 },
        Au: { symbol: 'Au', name: 'Gold',           nameCN: '金',   mass: 196.967, category: 'transition',      group: 11, period: 6, electronegativity: 2.54 },
        Hg: { symbol: 'Hg', name: 'Mercury',        nameCN: '汞',   mass: 200.592, category: 'transition',      group: 12, period: 6, electronegativity: 2.00 },
        Pb: { symbol: 'Pb', name: 'Lead',           nameCN: '铅',   mass: 207.2,   category: 'post-transition', group: 14, period: 6, electronegativity: 2.33 },
        Bi: { symbol: 'Bi', name: 'Bismuth',        nameCN: '铋',   mass: 208.980, category: 'post-transition', group: 15, period: 6, electronegativity: 2.02 },
    };

    // ==========================================
    // Common Ionic Groups
    // ==========================================
    const IONIC_GROUPS = {
        'SO4':  { formula: 'SO4',  name: 'Sulfate',       nameCN: '硫酸根',   charge: -2, mass: 96.06 },
        'NO3':  { formula: 'NO3',  name: 'Nitrate',       nameCN: '硝酸根',   charge: -1, mass: 62.00 },
        'CO3':  { formula: 'CO3',  name: 'Carbonate',     nameCN: '碳酸根',   charge: -2, mass: 60.01 },
        'PO4':  { formula: 'PO4',  name: 'Phosphate',     nameCN: '磷酸根',   charge: -3, mass: 94.97 },
        'OH':   { formula: 'OH',   name: 'Hydroxide',     nameCN: '氢氧根',   charge: -1, mass: 17.01 },
        'NH4':  { formula: 'NH4',  name: 'Ammonium',      nameCN: '铵根',     charge: +1, mass: 18.04 },
        'ClO3': { formula: 'ClO3', name: 'Chlorate',      nameCN: '氯酸根',   charge: -1, mass: 83.45 },
        'ClO4': { formula: 'ClO4', name: 'Perchlorate',   nameCN: '高氯酸根', charge: -1, mass: 99.45 },
        'MnO4': { formula: 'MnO4', name: 'Permanganate',  nameCN: '高锰酸根', charge: -1, mass: 118.94 },
        'Cr2O7':{ formula: 'Cr2O7',name: 'Dichromate',    nameCN: '重铬酸根', charge: -2, mass: 216.00 },
        'CrO4': { formula: 'CrO4', name: 'Chromate',      nameCN: '铬酸根',   charge: -2, mass: 116.00 },
        'CN':   { formula: 'CN',   name: 'Cyanide',       nameCN: '氰根',     charge: -1, mass: 26.02 },
        'SCN':  { formula: 'SCN',  name: 'Thiocyanate',   nameCN: '硫氰根',   charge: -1, mass: 58.08 },
        'SO3':  { formula: 'SO3',  name: 'Sulfite',       nameCN: '亚硫酸根', charge: -2, mass: 80.06 },
        'NO2':  { formula: 'NO2',  name: 'Nitrite',       nameCN: '亚硝酸根', charge: -1, mass: 46.01 },
        'C2O4': { formula: 'C2O4', name: 'Oxalate',       nameCN: '草酸根',   charge: -2, mass: 88.02 },
        'CH3COO': { formula: 'CH3COO', name: 'Acetate',   nameCN: '乙酸根',   charge: -1, mass: 59.04 },
        'HCO3': { formula: 'HCO3', name: 'Bicarbonate',   nameCN: '碳酸氢根', charge: -1, mass: 61.02 },
        'HSO4': { formula: 'HSO4', name: 'Bisulfate',     nameCN: '硫酸氢根', charge: -1, mass: 97.07 },
        'S2O3': { formula: 'S2O3', name: 'Thiosulfate',   nameCN: '硫代硫酸根', charge: -2, mass: 112.13 },
        'SiO3': { formula: 'SiO3', name: 'Silicate',      nameCN: '硅酸根',   charge: -2, mass: 76.08 },
        'BO3':  { formula: 'BO3',  name: 'Borate',        nameCN: '硼酸根',   charge: -3, mass: 58.82 },
        'F':    { formula: 'F',    name: 'Fluoride',      nameCN: '氟离子',   charge: -1, mass: 19.00 },
        'Cl':   { formula: 'Cl',   name: 'Chloride',      nameCN: '氯离子',   charge: -1, mass: 35.45 },
        'Br':   { formula: 'Br',   name: 'Bromide',       nameCN: '溴离子',   charge: -1, mass: 79.90 },
        'I':    { formula: 'I',    name: 'Iodide',        nameCN: '碘离子',   charge: -1, mass: 126.90 },
        'S':    { formula: 'S',    name: 'Sulfide',       nameCN: '硫离子',   charge: -2, mass: 32.06 },
        'O':    { formula: 'O',    name: 'Oxide',         nameCN: '氧离子',   charge: -2, mass: 16.00 },
        'N':    { formula: 'N',    name: 'Nitride',       nameCN: '氮离子',   charge: -3, mass: 14.01 },
        'H':    { formula: 'H',    name: 'Hydride',       nameCN: '氢离子',   charge: -1, mass: 1.008 },
    };

    // ==========================================
    // Tokenizer
    // ==========================================
    function tokenize(formula) {
        const tokens = [];
        let i = 0;
        while (i < formula.length) {
            const ch = formula[i];
            if (ch === '(' || ch === ')' || ch === '·' || ch === '.' || ch === '[' || ch === ']') {
                tokens.push({ type: 'paren', value: ch });
                i++;
            } else if (ch >= 'A' && ch <= 'Z') {
                let elem = ch;
                i++;
                while (i < formula.length && formula[i] >= 'a' && formula[i] <= 'z') {
                    elem += formula[i];
                    i++;
                }
                tokens.push({ type: 'element', value: elem });
            } else if (ch >= '0' && ch <= '9') {
                let num = ch;
                i++;
                while (i < formula.length && formula[i] >= '0' && formula[i] <= '9') {
                    num += formula[i];
                    i++;
                }
                tokens.push({ type: 'number', value: parseInt(num) });
            } else if (ch === '+' || ch === '-') {
                tokens.push({ type: 'charge', value: ch });
                i++;
            } else {
                i++;
            }
        }
        return tokens;
    }

    // ==========================================
    // Parser (recursive descent)
    // ==========================================
    function parse(formula) {
        // Handle hydrates: CuSO4·5H2O or CuSO4.5H2O
        const hydrateParts = formula.split(/[·.]/);
        const allGroups = [];

        for (const part of hydrateParts) {
            const trimmed = part.trim();
            // Extract leading coefficient (e.g., "5H2O" → 5, "H2O")
            let coeff = 1;
            let rest = trimmed;
            const coeffMatch = trimmed.match(/^(\d+)(.+)$/);
            if (coeffMatch && !trimmed.match(/^[A-Z][a-z]?\d/)) {
                // Only treat as coefficient if it's clearly a hydrate prefix
                const possibleCoeff = parseInt(coeffMatch[1]);
                const possibleFormula = coeffMatch[2];
                // Check if the rest starts with an element
                if (/^[A-Z]/.test(possibleFormula)) {
                    // Could be a coefficient or part of formula
                    // Heuristic: if first element is a known element and the coeff is small
                    const firstElemMatch = possibleFormula.match(/^([A-Z][a-z]?)/);
                    if (firstElemMatch && ELEMENTS[firstElemMatch[1]] && possibleCoeff <= 20) {
                        coeff = possibleCoeff;
                        rest = possibleFormula;
                    }
                }
            }

            const tokens = tokenize(rest);
            let pos = 0;

            function parseGroup() {
                const result = [];
                while (pos < tokens.length) {
                    if (tokens[pos].type === 'paren' && (tokens[pos].value === '(' || tokens[pos].value === '[')) {
                        pos++; // skip '('
                        const inner = parseGroup();
                        pos++; // skip ')'
                        // Get multiplier after parenthesis
                        let mult = 1;
                        if (pos < tokens.length && tokens[pos].type === 'number') {
                            mult = tokens[pos].value;
                            pos++;
                        }
                        // Apply multiplier to inner elements
                        for (const [el, count] of Object.entries(inner)) {
                            result[el] = (result[el] || 0) + count * mult;
                        }
                    } else if (tokens[pos].type === 'paren' && (tokens[pos].value === ')' || tokens[pos].value === ']')) {
                        break;
                    } else if (tokens[pos].type === 'element') {
                        const elem = tokens[pos].value;
                        pos++;
                        let count = 1;
                        if (pos < tokens.length && tokens[pos].type === 'number') {
                            count = tokens[pos].value;
                            pos++;
                        }
                        result[elem] = (result[elem] || 0) + count;
                    } else if (tokens[pos].type === 'number') {
                        // Standalone number (shouldn't happen in well-formed formula)
                        pos++;
                    } else if (tokens[pos].type === 'charge') {
                        pos++;
                    } else {
                        pos++;
                    }
                }
                return result;
            }

            const parsed = parseGroup();
            // Apply hydrate coefficient
            for (const el in parsed) {
                parsed[el] *= coeff;
            }
            allGroups.push(parsed);
        }

        // Merge all groups
        const merged = {};
        for (const group of allGroups) {
            for (const [el, count] of Object.entries(group)) {
                merged[el] = (merged[el] || 0) + count;
            }
        }
        return merged;
    }

    // ==========================================
    // Molar Mass Calculation
    // ==========================================
    function calculateMolarMass(formula) {
        const parsed = parse(formula);
        let mass = 0;
        for (const [el, count] of Object.entries(parsed)) {
            if (ELEMENTS[el]) {
                mass += ELEMENTS[el].mass * count;
            }
        }
        return Math.round(mass * 1000) / 1000;
    }

    // ==========================================
    // Detect Ionic Groups
    // ==========================================
    function detectIonicGroups(formula) {
        const detected = [];
        const formulaUpper = formula;

        // Sort groups by length (longest first) to match preferentially
        const sortedGroups = Object.keys(IONIC_GROUPS).sort((a, b) => b.length - a.length);

        for (const groupKey of sortedGroups) {
            if (formulaUpper.includes(groupKey)) {
                detected.push(IONIC_GROUPS[groupKey]);
            }
        }
        return detected;
    }

    // ==========================================
    // Element Composition
    // ==========================================
    function getComposition(formula) {
        const parsed = parse(formula);
        const mass = calculateMolarMass(formula);
        const composition = [];

        for (const [el, count] of Object.entries(parsed)) {
            const elemData = ELEMENTS[el];
            if (elemData) {
                composition.push({
                    element: el,
                    name: elemData.name,
                    nameCN: elemData.nameCN,
                    count: count,
                    mass: elemData.mass * count,
                    percentage: Math.round((elemData.mass * count / mass) * 10000) / 100
                });
            }
        }
        return composition;
    }

    // ==========================================
    // Compound Type Inference
    // ==========================================
    function inferCompoundType(formula) {
        const parsed = parse(formula);
        const elements = Object.keys(parsed);
        const groups = detectIonicGroups(formula);

        // Check for water/hydrates
        if (formula === 'H2O') return { type: 'oxide', family: 'water', isAcid: false, isBase: false };
        if (formula.includes('·') || formula.includes('.')) {
            return { type: 'salt', family: 'hydrate', isAcid: false, isBase: false };
        }

        // Check for acids
        if (parsed['H'] && !parsed['O'] && elements.length === 2) {
            const nonH = elements.find(e => e !== 'H');
            if (ELEMENTS[nonH] && ELEMENTS[nonH].category === 'halogen') {
                return { type: 'acid', family: 'hydrohalic-acid', isAcid: true, isBase: false };
            }
        }

        // Check for oxoacids (H + nonmetal + O)
        if (parsed['H'] && parsed['O']) {
            const nonHO = elements.filter(e => e !== 'H' && e !== 'O');
            if (nonHO.length > 0) {
                const nonmetal = nonHO.every(e => ELEMENTS[e] && ['nonmetal', 'halogen', 'metalloid'].includes(ELEMENTS[e].category));
                if (nonmetal) {
                    return { type: 'acid', family: 'oxoacid', isAcid: true, isBase: false };
                }
            }
        }

        // Check for bases (metal + OH)
        const hasOH = groups.some(g => g.formula === 'OH');
        if (hasOH) {
            const metals = elements.filter(e => e !== 'H' && e !== 'O' && ELEMENTS[e] &&
                ['alkali-metal', 'alkaline-earth', 'transition', 'post-transition'].includes(ELEMENTS[e].category));
            if (metals.length > 0) {
                return { type: 'base', family: 'hydroxide', isAcid: false, isBase: true };
            }
        }

        // Check for oxides (metal/nonmetal + O only)
        if (elements.length <= 2 && parsed['O']) {
            const other = elements.filter(e => e !== 'O');
            if (other.length === 1) {
                const elem = ELEMENTS[other[0]];
                if (elem) {
                    if (['alkali-metal', 'alkaline-earth'].includes(elem.category)) {
                        return { type: 'oxide', family: 'basic-oxide', isAcid: false, isBase: true };
                    }
                    if (['nonmetal', 'halogen'].includes(elem.category)) {
                        return { type: 'oxide', family: 'acidic-oxide', isAcid: true, isBase: false };
                    }
                    if (['transition', 'post-transition'].includes(elem.category)) {
                        return { type: 'oxide', family: 'amphoteric-oxide', isAcid: false, isBase: false };
                    }
                }
            }
        }

        // Check for salts (metal + ionic group)
        const hasIonicGroup = groups.some(g => g.charge < 0);
        if (hasIonicGroup) {
            const metals = elements.filter(e => {
                const ionic = IONIC_GROUPS[e];
                if (ionic && ionic.charge > 0) return false; // skip cation groups like NH4
                return ELEMENTS[e] && ['alkali-metal', 'alkaline-earth', 'transition', 'post-transition'].includes(ELEMENTS[e].category);
            });
            const hasNH4 = groups.some(g => g.formula === 'NH4');
            if (metals.length > 0 || hasNH4) {
                // Determine salt family
                let family = 'salt';
                if (groups.some(g => g.formula === 'SO4')) family = 'sulfate';
                else if (groups.some(g => g.formula === 'NO3')) family = 'nitrate';
                else if (groups.some(g => g.formula === 'CO3')) family = 'carbonate';
                else if (groups.some(g => g.formula === 'PO4')) family = 'phosphate';
                else if (groups.some(g => g.formula === 'Cl')) family = 'chloride';
                else if (groups.some(g => g.formula === 'Br')) family = 'bromide';
                else if (groups.some(g => g.formula === 'I')) family = 'iodide';
                else if (groups.some(g => g.formula === 'F')) family = 'fluoride';
                else if (groups.some(g => g.formula === 'CH3COO')) family = 'acetate';
                else if (groups.some(g => g.formula === 'CN')) family = 'cyanide';
                return { type: 'salt', family, isAcid: false, isBase: false };
            }
        }

        // Check for peroxides (Na2O2, H2O2)
        if (parsed['O']) {
            const oCount = parsed['O'];
            const otherMetals = elements.filter(e => e !== 'O' && ELEMENTS[e] &&
                ['alkali-metal', 'alkaline-earth'].includes(ELEMENTS[e].category));
            if (otherMetals.length > 0) {
                const metalCount = otherMetals.reduce((sum, e) => sum + parsed[e], 0);
                if (oCount / metalCount >= 1.5 && oCount / metalCount <= 2.5) {
                    return { type: 'peroxide', family: 'peroxide', isAcid: false, isBase: true };
                }
            }
        }

        // Check for organic compounds
        if (parsed['C']) {
            return inferOrganicType(formula, parsed, elements);
        }

        // Check for simple compounds
        if (parsed['H'] && parsed['S']) return { type: 'compound', family: 'hydride', isAcid: false, isBase: false };

        return { type: 'compound', family: 'unknown', isAcid: false, isBase: false };
    }

    // ==========================================
    // Organic Compound Inference
    // ==========================================
    function inferOrganicType(formula, parsed, elements) {
        const hasO = !!parsed['O'];
        const hasN = !!parsed['N'];
        const hasS = !!parsed['S'];
        const hasOnlyCHO = elements.every(e => ['C', 'H', 'O'].includes(e));
        const hasHalogen = elements.some(e => ['F', 'Cl', 'Br', 'I'].includes(e));

        // Count degrees of unsaturation
        const cCount = parsed['C'] || 0;
        const hCount = parsed['H'] || 0;
        const nCount = parsed['N'] || 0;
        const halogenCount = elements.filter(e => ['F', 'Cl', 'Br', 'I'].includes(e))
            .reduce((sum, e) => sum + (parsed[e] || 0), 0);
        const DoU = (2 * cCount + 2 - hCount - halogenCount + nCount) / 2;

        // Detect functional groups from formula patterns
        const groups = [];

        // Carboxylic acid: -COOH (has C, 2xO, H)
        if (hasO && parsed['O'] >= 2 && formula.match(/COOH|CO2H/i)) {
            groups.push({ type: 'carboxylic-acid', name: '-COOH (Carboxyl)', nameCN: '-COOH（羧基）' });
        }

        // Aldehyde: -CHO
        if (hasO && formula.match(/CHO/i) && !formula.match(/COOH/i)) {
            groups.push({ type: 'aldehyde', name: '-CHO (Aldehyde)', nameCN: '-CHO（醛基）' });
        }

        // Alcohol: -OH (not carboxylic, not phenol)
        if (hasO && !formula.match(/COOH/i) && !formula.match(/COO/i)) {
            if (parsed['O'] >= 1 && hCount > 2 * cCount - 2 * (parsed['O'] || 0)) {
                groups.push({ type: 'alcohol', name: '-OH (Hydroxyl)', nameCN: '-OH（羟基）' });
            }
        }

        // Ester: -COO-
        if (hasO && formula.match(/COO/i) && !formula.match(/COOH/i)) {
            groups.push({ type: 'ester', name: '-COO- (Ester)', nameCN: '-COO-（酯基）' });
        }

        // Amine: -NH2
        if (hasN) {
            groups.push({ type: 'amine', name: '-NH2 (Amino)', nameCN: '-NH2（氨基）' });
        }

        // Ether: C-O-C
        if (hasO && !formula.match(/OH|COOH|CHO|COO/i) && parsed['O'] >= 1) {
            if (cCount >= 2) {
                groups.push({ type: 'ether', name: 'C-O-C (Ether)', nameCN: 'C-O-C（醚键）' });
            }
        }

        // Determine primary type
        let type = 'organic';
        let family = 'organic';

        if (groups.length > 0) {
            type = groups[0].type;
            family = groups[0].type;
        } else if (!hasO && !hasN && !hasS && !hasHalogen) {
            // Hydrocarbons
            if (DoU === 0) {
                type = 'alkane';
                family = 'alkane';
                groups.push({ type: 'alkane', name: 'C-C (Alkane)', nameCN: 'C-C（烷烃）' });
            } else if (DoU === 1) {
                type = 'alkene';
                family = 'alkene';
                groups.push({ type: 'alkene', name: 'C=C (Alkene)', nameCN: 'C=C（烯烃）' });
            } else if (DoU >= 2 && cCount <= 3) {
                type = 'alkyne';
                family = 'alkyne';
                groups.push({ type: 'alkyne', name: 'C≡C (Alkyne)', nameCN: 'C≡C（炔烃）' });
            } else if (DoU >= 4) {
                type = 'aromatic';
                family = 'aromatic';
                groups.push({ type: 'aromatic', name: 'Benzene ring', nameCN: '苯环' });
            }
        }

        if (hasHalogen) {
            groups.push({ type: 'halide', name: 'Halogenated', nameCN: '卤代' });
        }

        return {
            type: 'organic',
            family,
            isAcid: groups.some(g => g.type === 'carboxylic-acid'),
            isBase: groups.some(g => g.type === 'amine'),
            functionalGroups: groups,
            degreeOfUnsaturation: DoU
        };
    }

    // ==========================================
    // Build Compound Record
    // ==========================================
    function buildCompoundRecord(formula) {
        const parsed = parse(formula);
        const mass = calculateMolarMass(formula);
        const composition = getComposition(formula);
        const groups = detectIonicGroups(formula);
        const typeInfo = inferCompoundType(formula);

        const elements = Object.keys(parsed);
        const elemNames = elements.map(e => ELEMENTS[e] ? ELEMENTS[e].name : e);
        const elemNamesCN = elements.map(e => ELEMENTS[e] ? ELEMENTS[e].nameCN : e);

        return {
            formula,
            molecularMass: mass,
            elements: parsed,
            composition,
            ionicGroups: groups,
            ...typeInfo,
            elementNames: elemNames,
            elementNamesCN: elemNamesCN,
            atomCount: Object.values(parsed).reduce((s, v) => s + v, 0),
            isOrganic: !!parsed['C'] && (parsed['H'] || parsed['O'] || parsed['N']),
        };
    }

    // ==========================================
    // Public API
    // ==========================================
    return {
        ELEMENTS,
        IONIC_GROUPS,
        tokenize,
        parse,
        calculateMolarMass,
        detectIonicGroups,
        getComposition,
        inferCompoundType,
        inferOrganicType,
        buildCompoundRecord,
    };

})();
