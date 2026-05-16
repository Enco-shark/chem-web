/* ============================================
   Chemistry Inference Engine
   ============================================ */

const ChemInference = (() => {

    // ==========================================
    // Equation Balancer
    // ==========================================
    function parseEquation(equation) {
        // Split on → or = or ->
        const parts = equation.split(/→|->|=/);
        if (parts.length !== 2) return null;

        const reactants = parts[0].split('+').map(s => s.trim()).filter(Boolean);
        const products = parts[1].split('+').map(s => s.trim()).filter(Boolean);
        return { reactants, products };
    }

    function formulaToVector(formula, elementList) {
        const parsed = ChemParser.parse(formula);
        return elementList.map(el => parsed[el] || 0);
    }

    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) { [a, b] = [b, a % b]; }
        return a;
    }

    function gcdArray(arr) {
        return arr.reduce((a, b) => gcd(a, b));
    }

    function balanceEquation(reactantFormulas, productFormulas) {
        // Collect all elements
        const allElements = new Set();
        const allFormulas = [...reactantFormulas, ...productFormulas];
        for (const f of allFormulas) {
            const parsed = ChemParser.parse(f);
            Object.keys(parsed).forEach(el => allElements.add(el));
        }
        const elementList = [...allElements];
        const n = elementList.length;

        if (n === 0) return null;

        const rCount = reactantFormulas.length;
        const pCount = productFormulas.length;
        const total = rCount + pCount;

        // Build matrix: each row is an element, each column is a compound
        // Reactants have positive coefficients, products have negative
        const matrix = [];
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j < rCount; j++) {
                const parsed = ChemParser.parse(reactantFormulas[j]);
                row.push(parsed[elementList[i]] || 0);
            }
            for (let j = 0; j < pCount; j++) {
                const parsed = ChemParser.parse(productFormulas[j]);
                row.push(-(parsed[elementList[i]] || 0));
            }
            matrix.push(row);
        }

        // Gaussian elimination to find null space
        const m = matrix.length;
        const ncols = total;

        // Augment with zeros
        for (let i = 0; i < m; i++) {
            // Find pivot
            let pivotRow = -1;
            for (let r = i; r < m; r++) {
                if (matrix[r][i] !== 0) {
                    pivotRow = r;
                    break;
                }
            }
            if (pivotRow === -1) continue;

            // Swap rows
            if (pivotRow !== i) {
                [matrix[i], matrix[pivotRow]] = [matrix[pivotRow], matrix[i]];
            }

            // Eliminate
            for (let r = 0; r < m; r++) {
                if (r === i || matrix[r][i] === 0) continue;
                const factor = matrix[r][i] / matrix[i][i];
                for (let c = 0; c < ncols; c++) {
                    matrix[r][c] -= factor * matrix[i][c];
                }
            }
        }

        // Find free variables and compute coefficients
        // Simple approach: try small integer coefficients
        const maxCoeff = 20;

        function tryCoeffs() {
            // Try brute force for small systems
            if (total <= 3) {
                for (let a = 1; a <= maxCoeff; a++) {
                    if (total === 2) {
                        // Simple case: aR1 = bP1
                        const rVec = formulaToVector(reactantFormulas[0], elementList);
                        const pVec = formulaToVector(productFormulas[0], elementList);
                        for (let b = 1; b <= maxCoeff; b++) {
                            const balanced = elementList.every((_, idx) => a * rVec[idx] === b * pVec[idx]);
                            if (balanced) {
                                const coefs = [a, b];
                                const g = gcdArray(coefs);
                                return coefs.map(c => c / g);
                            }
                        }
                    }
                    for (let b = 1; b <= maxCoeff; b++) {
                        if (total === 3) {
                            for (let c = 1; c <= maxCoeff; c++) {
                                const coefs = rCount === 2 ? [a, b, c] : [a, c, b];
                                // Check balance
                                let balanced = true;
                                for (let e = 0; e < elementList.length; e++) {
                                    let sum = 0;
                                    for (let j = 0; j < rCount; j++) {
                                        sum += coefs[j] * formulaToVector(reactantFormulas[j], elementList)[e];
                                    }
                                    for (let j = 0; j < pCount; j++) {
                                        sum -= coefs[rCount + j] * formulaToVector(productFormulas[j], elementList)[e];
                                    }
                                    if (sum !== 0) { balanced = false; break; }
                                }
                                if (balanced) {
                                    const g = gcdArray(coefs);
                                    return coefs.map(c => c / g);
                                }
                            }
                        }
                    }
                }
            }

            // For larger systems, try 1:1 first
            for (let scale = 1; scale <= 5; scale++) {
                const coefs = new Array(total).fill(scale);
                let balanced = true;
                for (let e = 0; e < elementList.length; e++) {
                    let sum = 0;
                    for (let j = 0; j < rCount; j++) {
                        sum += coefs[j] * formulaToVector(reactantFormulas[j], elementList)[e];
                    }
                    for (let j = 0; j < pCount; j++) {
                        sum -= coefs[rCount + j] * formulaToVector(productFormulas[j], elementList)[e];
                    }
                    if (sum !== 0) { balanced = false; break; }
                }
                if (balanced) return coefs;
            }

            return null;
        }

        return tryCoeffs();
    }

    // ==========================================
    // Reaction Type Inference
    // ==========================================
    function inferReactionType(reactants, products) {
        const rTypes = reactants.map(f => ChemParser.inferCompoundType(f));
        const pTypes = products.map(f => ChemParser.inferCompoundType(f));

        // Combustion: organic + O2 → CO2 + H2O
        if (reactants.some(f => ChemParser.parse(f)['C']) && reactants.includes('O2') &&
            products.includes('CO2') && products.includes('H2O')) {
            return 'combustion';
        }

        // Neutralization: acid + base → salt + water
        if (rTypes.some(t => t.isAcid) && rTypes.some(t => t.isBase) &&
            products.includes('H2O')) {
            return 'neutralization';
        }

        // Precipitation: two salts → precipitate + salt
        if (rTypes.every(t => t.type === 'salt') && products.some(f => f.includes('↓'))) {
            return 'precipitation';
        }

        // Decomposition: one reactant → multiple products
        if (reactants.length === 1 && products.length > 1) {
            return 'decomposition';
        }

        // Combination: multiple reactants → one product
        if (reactants.length > 1 && products.length === 1) {
            return 'combination';
        }

        // Displacement: element + compound → element + compound
        if (reactants.length === 2) {
            const rElements = reactants.map(f => Object.keys(ChemParser.parse(f)));
            const hasElement = rElements.some(els => els.length === 1);
            if (hasElement) return 'displacement';
        }

        // Double displacement: two compounds swap partners
        if (rTypes.every(t => ['salt', 'acid', 'base'].includes(t.type)) && products.length === 2) {
            return 'double-displacement';
        }

        // Redox (check for oxidation state changes - simplified)
        if (reactants.some(f => f === 'O2' || f === 'Cl2' || f === 'Br2')) {
            return 'redox';
        }

        return 'unknown';
    }

    // ==========================================
    // Reaction Prediction
    // ==========================================
    const REACTION_RULES = [
        // Acid + Base → Salt + Water
        {
            match: (r, p, rTypes) => rTypes.some(t => t.isAcid) && rTypes.some(t => t.isBase),
            predict: (reactants) => {
                const acid = reactants.find((f, i) => ChemParser.inferCompoundType(f).isAcid);
                const base = reactants.find((f, i) => ChemParser.inferCompoundType(f).isBase);
                if (!acid || !base) return null;

                const acidParsed = ChemParser.parse(acid);
                const baseParsed = ChemParser.parse(base);
                const acidGroups = ChemParser.detectIonicGroups(acid);
                const baseGroups = ChemParser.detectIonicGroups(base);

                // Get cation from base and anion from acid
                const cation = Object.keys(baseParsed).find(e => e !== 'H' && e !== 'O' && ChemParser.ELEMENTS[e]);
                const anion = acidGroups.find(g => g.charge < 0);

                if (cation && anion) {
                    const saltFormula = cation + anion.formula;
                    return {
                        products: [saltFormula, 'H2O'],
                        type: 'neutralization',
                        conditions: [],
                        reversible: false
                    };
                }
                return null;
            }
        },

        // Metal + Acid → Salt + H2
        {
            match: (r, p, rTypes) => {
                const hasMetal = rTypes.some(t => ['alkali-metal', 'alkaline-earth', 'transition'].includes(
                    ChemParser.ELEMENTS[Object.keys(ChemParser.parse(r.find(f => ChemParser.parse(f).H === undefined) || ''))[0]]?.category || ''
                ));
                const hasAcid = rTypes.some(t => t.isAcid);
                return hasMetal && hasAcid;
            },
            predict: (reactants) => {
                const metal = reactants.find(f => {
                    const parsed = ChemParser.parse(f);
                    const els = Object.keys(parsed);
                    return els.length === 1 && ChemParser.ELEMENTS[els[0]] &&
                        ['alkali-metal', 'alkaline-earth', 'transition', 'post-transition'].includes(ChemParser.ELEMENTS[els[0]].category);
                });
                const acid = reactants.find(f => ChemParser.inferCompoundType(f).isAcid);
                if (!metal || !acid) return null;

                const metalEl = Object.keys(ChemParser.parse(metal))[0];
                const acidGroups = ChemParser.detectIonicGroups(acid);
                const anion = acidGroups.find(g => g.charge < 0);
                if (anion) {
                    return {
                        products: [metalEl + anion.formula, 'H2↑'],
                        type: 'displacement',
                        conditions: [],
                        reversible: false
                    };
                }
                return null;
            }
        },

        // Metal Oxide + Acid → Salt + Water
        {
            match: (r, p, rTypes) => rTypes.some(t => t.family === 'basic-oxide') && rTypes.some(t => t.isAcid),
            predict: (reactants) => {
                const oxide = reactants.find(f => ChemParser.inferCompoundType(f).family === 'basic-oxide');
                const acid = reactants.find(f => ChemParser.inferCompoundType(f).isAcid);
                if (!oxide || !acid) return null;

                const oxideEl = Object.keys(ChemParser.parse(oxide)).find(e => e !== 'O');
                const acidGroups = ChemParser.detectIonicGroups(acid);
                const anion = acidGroups.find(g => g.charge < 0);
                if (oxideEl && anion) {
                    return {
                        products: [oxideEl + anion.formula, 'H2O'],
                        type: 'acid-base',
                        conditions: [],
                        reversible: false
                    };
                }
                return null;
            }
        },

        // Nonmetal Oxide + Water → Acid
        {
            match: (r, p, rTypes) => rTypes.some(t => t.family === 'acidic-oxide') && reactants => reactants.includes('H2O'),
            predict: (reactants) => {
                const oxide = reactants.find(f => ChemParser.inferCompoundType(f).family === 'acidic-oxide');
                if (!oxide) return null;

                const parsed = ChemParser.parse(oxide);
                const nonmetal = Object.keys(parsed).find(e => e !== 'O');

                // Known oxide → acid mappings
                const oxideToAcid = {
                    'SO2': 'H2SO3', 'SO3': 'H2SO4',
                    'CO2': 'H2CO3', 'NO2': 'HNO3',
                    'N2O5': 'HNO3', 'P2O5': 'H3PO4',
                    'Cl2O': 'HClO', 'Cl2O7': 'HClO4',
                };

                if (oxideToAcid[oxide]) {
                    return {
                        products: [oxideToAcid[oxide]],
                        type: 'combination',
                        conditions: [],
                        reversible: false
                    };
                }
                return null;
            }
        },

        // Combustion of organic compound
        {
            match: (r, p, rTypes) => rTypes.some(t => t.type === 'organic' || t.family === 'alkane' || t.family === 'alkene') && reactants => reactants.includes('O2'),
            predict: (reactants) => {
                const organic = reactants.find(f => ChemParser.parse(f)['C']);
                if (!organic) return null;

                const parsed = ChemParser.parse(organic);
                const c = parsed['C'] || 0;
                const h = parsed['H'] || 0;
                const o = parsed['O'] || 0;

                // CxHyOz + (x + y/4 - z/2)O2 → xCO2 + y/2 H2O
                const o2Needed = c + h / 4 - o / 2;

                return {
                    products: ['CO2', 'H2O'],
                    type: 'combustion',
                    conditions: ['ignition'],
                    reversible: false,
                    balanced: { organic: 1, O2: Math.round(o2Needed * 2) / 2 }
                };
            }
        },

        // Salt + Salt → Precipitate (double displacement)
        {
            match: (r, p, rTypes) => rTypes.every(t => t.type === 'salt') && rTypes.length === 2,
            predict: (reactants) => {
                // Known precipitation reactions
                const precipitates = {
                    'Ag': { 'Cl': 'AgCl↓', 'Br': 'AgBr↓', 'I': 'AgI↓' },
                    'Ba': { 'SO4': 'BaSO4↓', 'SO3': 'BaSO3↓' },
                    'Ca': { 'CO3': 'CaCO3↓', 'SO4': 'CaSO4↓' },
                    'Pb': { 'Cl': 'PbCl2', 'I': 'PbI2↓', 'SO4': 'PbSO4↓' },
                };

                // Try to identify cations and anions
                for (const r1 of reactants) {
                    for (const r2 of reactants) {
                        if (r1 === r2) continue;
                        const p1 = ChemParser.parse(r1);
                        const p2 = ChemParser.parse(r2);
                        // Simplified: check for known combinations
                    }
                }

                return null; // Return null for unknown salt combinations
            }
        }
    ];

    function predictReaction(reactantFormulas) {
        const rTypes = reactantFormulas.map(f => ChemParser.inferCompoundType(f));

        for (const rule of REACTION_RULES) {
            try {
                if (rule.match(reactantFormulas, [], rTypes)) {
                    const result = rule.predict(reactantFormulas);
                    if (result) return result;
                }
            } catch (e) { /* rule failed, try next */ }
        }

        return null;
    }

    // ==========================================
    // Compound Property Inference
    // ==========================================
    function inferProperties(formula) {
        const parsed = ChemParser.parse(formula);
        const typeInfo = ChemParser.inferCompoundType(formula);
        const mass = ChemParser.calculateMolarMass(formula);
        const elements = Object.keys(parsed);

        const props = {
            formula,
            molecularMass: mass,
            ...typeInfo,
            elements: parsed,
        };

        // Infer polarity
        if (typeInfo.type === 'organic') {
            const hasO = !!parsed['O'];
            const hasN = !!parsed['N'];
            props.polarity = (hasO || hasN) ? 'Polar' : 'Nonpolar';
        } else {
            // Ionic compounds are polar
            props.polarity = typeInfo.type === 'salt' || typeInfo.type === 'base' ? 'Ionic' : 'Covalent';
        }

        // Infer bond type
        if (['salt', 'base'].includes(typeInfo.type)) {
            props.bondType = 'Ionic';
        } else if (typeInfo.type === 'oxide') {
            const nonmetal = elements.find(e => e !== 'O' && ChemParser.ELEMENTS[e]);
            if (nonmetal && ['alkali-metal', 'alkaline-earth'].includes(ChemParser.ELEMENTS[nonmetal].category)) {
                props.bondType = 'Ionic';
            } else {
                props.bondType = 'Covalent';
            }
        } else {
            props.bondType = 'Covalent';
        }

        // Infer state at room temperature
        if (parsed['C'] && parsed['H'] && !parsed['O'] && mass < 50) {
            props.state = 'Gas';
            props.stateCN = '气态';
        } else if (typeInfo.type === 'acid' && !parsed['C']) {
            props.state = 'Solution';
            props.stateCN = '溶液';
        } else if (typeInfo.type === 'salt' || typeInfo.type === 'base') {
            props.state = 'Solid';
            props.stateCN = '固态';
        } else {
            props.state = 'Liquid';
            props.stateCN = '液态';
        }

        // Infer acidity/basicity
        props.acidBase = typeInfo.isAcid ? 'Acidic' : typeInfo.isBase ? 'Basic' : 'Neutral';
        props.acidBaseCN = typeInfo.isAcid ? '酸性' : typeInfo.isBase ? '碱性' : '中性';

        return props;
    }

    // ==========================================
    // Public API
    // ==========================================
    return {
        parseEquation,
        balanceEquation,
        inferReactionType,
        predictReaction,
        inferProperties,
        REACTION_RULES,
    };

})();
