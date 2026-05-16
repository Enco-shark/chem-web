/* ============================================
   Chemical Reactions Module
   ============================================ */

const ReactionsDB = {
    'HCl + NaOH': {
        reactants: ['HCl', 'NaOH'],
        products: ['NaCl', 'H2O'],
        balanced: 'HCl + NaOH → NaCl + H2O',
        type: 'neutralization',
        typeCN: '中和反应',
        principle: 'Acid-base neutralization. Hydrogen ions from HCl combine with hydroxide ions from NaOH to form water. The remaining Na+ and Cl- ions form NaCl.',
        principleCN: '酸碱中和反应。盐酸中的氢离子与氢氧化钠中的氢氧根离子结合生成水，剩余的钠离子和氯离子形成氯化钠。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'H⁺ + OH⁻ → H2O',
        gasProduct: false,
        precipitate: false,
        explanation: 'This is a classic acid-base neutralization reaction. HCl is a strong acid and NaOH is a strong base. When they react, they form salt (NaCl) and water. The reaction is exothermic.',
        explanationCN: '这是一个经典的酸碱中和反应。盐酸是强酸，氢氧化钠是强碱。反应生成盐（氯化钠）和水。该反应是放热反应。'
    },
    'AgNO3 + NaCl': {
        reactants: ['AgNO3', 'NaCl'],
        products: ['AgCl↓', 'NaNO3'],
        balanced: 'AgNO3 + NaCl → AgCl↓ + NaNO3',
        type: 'precipitation',
        typeCN: '沉淀反应',
        principle: 'Double displacement reaction. Silver ions combine with chloride ions to form insoluble silver chloride precipitate.',
        principleCN: '复分解反应。银离子与氯离子结合生成不溶性的氯化银沉淀。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'Ag⁺ + Cl⁻ → AgCl↓',
        gasProduct: false,
        precipitate: true,
        explanation: 'AgNO3 reacts with NaCl in a double displacement reaction. The Ag+ ions combine with Cl- ions to form AgCl, which is a white precipitate that is insoluble in water. This reaction is used to test for chloride ions.',
        explanationCN: '硝酸银与氯化钠发生复分解反应。银离子与氯离子结合生成氯化银，这是一种不溶于水的白色沉淀。该反应用于检验氯离子。'
    },
    'H2 + O2': {
        reactants: ['H2', 'O2'],
        products: ['H2O'],
        balanced: '2H2 + O2 → 2H2O',
        type: 'combination',
        typeCN: '化合反应',
        principle: 'Hydrogen combustion. Hydrogen molecules react with oxygen molecules to form water. This is a highly exothermic reaction.',
        principleCN: '氢气燃烧。氢分子与氧分子反应生成水。这是一个高度放热的反应。',
        conditions: ['ignition'],
        catalyst: null,
        reversible: false,
        ionicEquation: null,
        gasProduct: false,
        precipitate: false,
        explanation: 'Hydrogen gas burns in oxygen to produce water. The reaction releases a large amount of heat energy. The balanced equation shows that 2 molecules of H2 react with 1 molecule of O2 to form 2 molecules of H2O.',
        explanationCN: '氢气在氧气中燃烧生成水。该反应释放大量热能。配平后的方程式表明2个氢分子与1个氧分子反应生成2个水分子。'
    },
    'CH4 + O2': {
        reactants: ['CH4', 'O2'],
        products: ['CO2↑', 'H2O'],
        balanced: 'CH4 + 2O2 → CO2↑ + 2H2O',
        type: 'combustion',
        typeCN: '燃烧反应',
        principle: 'Methane combustion. Methane reacts with oxygen to produce carbon dioxide and water. This is the primary component of natural gas.',
        principleCN: '甲烷燃烧。甲烷与氧气反应生成二氧化碳和水。这是天然气的主要成分。',
        conditions: ['ignition'],
        catalyst: null,
        reversible: false,
        ionicEquation: null,
        gasProduct: true,
        precipitate: false,
        explanation: 'Methane (CH4) is the main component of natural gas. When burned, it reacts with oxygen to produce CO2 and H2O. This reaction releases significant energy and is used for heating and cooking.',
        explanationCN: '甲烷（CH4）是天然气的主要成分。燃烧时与氧气反应生成CO2和H2O。该反应释放大量能量，用于加热和烹饪。'
    },
    'CaCO3 + HCl': {
        reactants: ['CaCO3', 'HCl'],
        products: ['CaCl2', 'H2O', 'CO2↑'],
        balanced: 'CaCO3 + 2HCl → CaCl2 + H2O + CO2↑',
        type: 'acid-carbonate',
        typeCN: '酸与碳酸盐反应',
        principle: 'Acid reacts with carbonate to produce salt, water, and carbon dioxide gas.',
        principleCN: '酸与碳酸盐反应生成盐、水和二氧化碳气体。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'CaCO3 + 2H⁺ → Ca²⁺ + H2O + CO2↑',
        gasProduct: true,
        precipitate: false,
        explanation: 'Calcium carbonate (limestone) reacts with hydrochloric acid to produce calcium chloride, water, and carbon dioxide gas. The CO2 gas bubbles out of the solution. This reaction is used to test for carbonates.',
        explanationCN: '碳酸钙（石灰石）与盐酸反应生成氯化钙、水和二氧化碳气体。CO2气体从溶液中逸出。该反应用于检验碳酸盐。'
    },
    'Fe + CuSO4': {
        reactants: ['Fe', 'CuSO4'],
        products: ['FeSO4', 'Cu'],
        balanced: 'Fe + CuSO4 → FeSO4 + Cu',
        type: 'displacement',
        typeCN: '置换反应',
        principle: 'Single displacement reaction. Iron is more reactive than copper and displaces it from the sulfate solution.',
        principleCN: '置换反应。铁比铜更活泼，将铜从硫酸盐溶液中置换出来。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'Fe + Cu²⁺ → Fe²⁺ + Cu',
        gasProduct: false,
        precipitate: false,
        explanation: 'Iron displaces copper from copper sulfate solution because iron is more reactive than copper in the activity series. The iron dissolves and copper metal is deposited. The solution changes from blue to green.',
        explanationCN: '铁将铜从硫酸铜溶液中置换出来，因为铁在金属活动性顺序中比铜更活泼。铁溶解，铜金属析出。溶液从蓝色变为绿色。'
    },
    'Na2CO3 + HCl': {
        reactants: ['Na2CO3', 'HCl'],
        products: ['NaCl', 'H2O', 'CO2↑'],
        balanced: 'Na2CO3 + 2HCl → 2NaCl + H2O + CO2↑',
        type: 'acid-carbonate',
        typeCN: '酸与碳酸盐反应',
        principle: 'Sodium carbonate reacts with hydrochloric acid to produce sodium chloride, water, and carbon dioxide.',
        principleCN: '碳酸钠与盐酸反应生成氯化钠、水和二氧化碳。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'CO3²⁻ + 2H⁺ → H2O + CO2↑',
        gasProduct: true,
        precipitate: false,
        explanation: 'Sodium carbonate (washing soda) reacts with HCl in a two-step process. First forming NaHCO3, then NaCl with release of CO2 gas.',
        explanationCN: '碳酸钠（洗涤碱）与盐酸分两步反应。首先生成碳酸氢钠，然后生成氯化钠并释放CO2气体。'
    },
    'Zn + H2SO4': {
        reactants: ['Zn', 'H2SO4'],
        products: ['ZnSO4', 'H2↑'],
        balanced: 'Zn + H2SO4 → ZnSO4 + H2↑',
        type: 'displacement',
        typeCN: '置换反应',
        principle: 'Zinc displaces hydrogen from dilute sulfuric acid. Zinc is more reactive than hydrogen in the activity series.',
        principleCN: '锌从稀硫酸中置换出氢气。锌在金属活动性顺序中比氢更活泼。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'Zn + 2H⁺ → Zn²⁺ + H2↑',
        gasProduct: true,
        precipitate: false,
        explanation: 'Zinc reacts with dilute sulfuric acid to produce zinc sulfate and hydrogen gas. The hydrogen gas bubbles out. This is a common laboratory method for producing hydrogen gas.',
        explanationCN: '锌与稀硫酸反应生成硫酸锌和氢气。氢气以气泡形式逸出。这是实验室制取氢气的常用方法。'
    },
    'Na + H2O': {
        reactants: ['Na', 'H2O'],
        products: ['NaOH', 'H2↑'],
        balanced: '2Na + 2H2O → 2NaOH + H2↑',
        type: 'displacement',
        typeCN: '置换反应',
        principle: 'Sodium reacts vigorously with water to produce sodium hydroxide and hydrogen gas.',
        principleCN: '钠与水剧烈反应生成氢氧化钠和氢气。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: '2Na + 2H2O → 2Na⁺ + 2OH⁻ + H2↑',
        gasProduct: true,
        precipitate: false,
        explanation: 'Sodium is a very reactive alkali metal. When placed in water, it reacts violently, producing NaOH and hydrogen gas. The heat generated may ignite the hydrogen, producing a yellow flame.',
        explanationCN: '钠是一种非常活泼的碱金属。放入水中时剧烈反应，生成NaOH和氢气。产生的热量可能点燃氢气，产生黄色火焰。'
    },
    'Cu + HNO3': {
        reactants: ['Cu', 'HNO3'],
        products: ['Cu(NO3)2', 'NO↑', 'H2O'],
        balanced: '3Cu + 8HNO3(dilute) → 3Cu(NO3)2 + 2NO↑ + 4H2O',
        type: 'oxidation-reduction',
        typeCN: '氧化还原反应',
        principle: 'Copper reacts with dilute nitric acid in an oxidation-reduction reaction. Nitric acid acts as both an acid and an oxidizing agent.',
        principleCN: '铜与稀硝酸发生氧化还原反应。硝酸既起酸的作用又起氧化剂的作用。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: '3Cu + 8H⁺ + 2NO3⁻ → 3Cu²⁺ + 2NO↑ + 4H2O',
        gasProduct: true,
        precipitate: false,
        explanation: 'Copper dissolves in dilute nitric acid. The copper is oxidized to Cu²⁺ ions while nitrate is reduced to NO gas. The solution turns blue due to Cu²⁺ ions.',
        explanationCN: '铜溶解于稀硝酸中。铜被氧化为Cu²⁺离子，而硝酸根被还原为NO气体。溶液因Cu²⁺离子而变蓝。'
    },
    'Fe2O3 + CO': {
        reactants: ['Fe2O3', 'CO'],
        products: ['Fe', 'CO2↑'],
        balanced: 'Fe2O3 + 3CO → 2Fe + 3CO2↑',
        type: 'reduction',
        typeCN: '还原反应',
        principle: 'Iron oxide is reduced by carbon monoxide in a blast furnace reaction. This is the basis of iron smelting.',
        principleCN: '氧化铁被一氧化碳还原，这是高炉反应。这是炼铁的基础。',
        conditions: ['high temperature'],
        catalyst: null,
        reversible: false,
        ionicEquation: null,
        gasProduct: true,
        precipitate: false,
        explanation: 'This reaction occurs in a blast furnace. Carbon monoxide reduces iron oxide to metallic iron. The CO is oxidized to CO2. This is the main industrial method for producing iron.',
        explanationCN: '该反应发生在高炉中。一氧化碳将氧化铁还原为金属铁。CO被氧化为CO2。这是工业炼铁的主要方法。'
    },
    'NaOH + CO2': {
        reactants: ['NaOH', 'CO2'],
        products: ['Na2CO3', 'H2O'],
        balanced: '2NaOH + CO2 → Na2CO3 + H2O',
        type: 'acid-base',
        typeCN: '酸碱反应',
        principle: 'Sodium hydroxide absorbs carbon dioxide to form sodium carbonate and water.',
        principleCN: '氢氧化钠吸收二氧化碳生成碳酸钠和水。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: '2OH⁻ + CO2 → CO3²⁻ + H2O',
        gasProduct: false,
        precipitate: false,
        explanation: 'NaOH solution absorbs CO2 gas, forming sodium carbonate. With excess CO2, sodium bicarbonate (NaHCO3) forms instead. This reaction is used in CO2 scrubbing.',
        explanationCN: 'NaOH溶液吸收CO2气体，生成碳酸钠。CO2过量时，生成碳酸氢钠（NaHCO3）。该反应用于CO2吸收。'
    },
    'KClO3': {
        reactants: ['KClO3'],
        products: ['KCl', 'O2↑'],
        balanced: '2KClO3 → 2KCl + 3O2↑',
        type: 'decomposition',
        typeCN: '分解反应',
        principle: 'Potassium chlorate decomposes upon heating to produce potassium chloride and oxygen gas.',
        principleCN: '氯酸钾加热分解生成氯化钾和氧气。',
        conditions: ['△ heating', 'MnO2 catalyst'],
        catalyst: 'MnO2',
        reversible: false,
        ionicEquation: null,
        gasProduct: true,
        precipitate: false,
        explanation: 'Potassium chlorate decomposes when heated with MnO2 catalyst to release oxygen gas. This is a common laboratory method for preparing oxygen.',
        explanationCN: '氯酸钾在MnO2催化剂存在下加热分解，释放氧气。这是实验室制取氧气的常用方法。'
    },
    'H2O2': {
        reactants: ['H2O2'],
        products: ['H2O', 'O2↑'],
        balanced: '2H2O2 → 2H2O + O2↑',
        type: 'decomposition',
        typeCN: '分解反应',
        principle: 'Hydrogen peroxide decomposes into water and oxygen gas, accelerated by catalysts.',
        principleCN: '过氧化氢分解为水和氧气，催化剂可加速反应。',
        conditions: ['MnO2 catalyst'],
        catalyst: 'MnO2',
        reversible: false,
        ionicEquation: null,
        gasProduct: true,
        precipitate: false,
        explanation: 'Hydrogen peroxide slowly decomposes into water and oxygen. MnO2 catalyzes this reaction, making it much faster. This is used for producing oxygen in labs.',
        explanationCN: '过氧化氢缓慢分解为水和氧气。MnO2催化该反应使其更快。这用于实验室制取氧气。'
    },
    'N2 + H2': {
        reactants: ['N2', 'H2'],
        products: ['NH3'],
        balanced: 'N2 + 3H2 ⇌ 2NH3',
        type: 'combination',
        typeCN: '化合反应',
        principle: 'Haber process for ammonia synthesis. Nitrogen and hydrogen combine under high pressure and temperature.',
        principleCN: '合成氨的哈伯法。氮气和氢气在高温高压下化合。',
        conditions: ['high temperature', 'high pressure', 'Fe catalyst'],
        catalyst: 'Fe',
        reversible: true,
        ionicEquation: null,
        gasProduct: false,
        precipitate: false,
        explanation: 'The Haber process combines nitrogen from air with hydrogen (from natural gas) to produce ammonia. It requires high temperature (400-500°C), high pressure (200 atm), and an iron catalyst. This is one of the most important industrial chemical processes.',
        explanationCN: '哈伯法将空气中的氮气与氢气（来自天然气）结合生产氨。需要高温（400-500°C）、高压（200个大气压）和铁催化剂。这是最重要的工业化学过程之一。'
    },
    'SO2 + H2O': {
        reactants: ['SO2', 'H2O'],
        products: ['H2SO3'],
        balanced: 'SO2 + H2O → H2SO3',
        type: 'combination',
        typeCN: '化合反应',
        principle: 'Sulfur dioxide dissolves in water to form sulfurous acid, which is responsible for acid rain.',
        principleCN: '二氧化硫溶于水生成亚硫酸，这是酸雨的成因。',
        conditions: [],
        catalyst: null,
        reversible: true,
        ionicEquation: 'SO2 + H2O ⇌ H2SO3',
        gasProduct: false,
        precipitate: false,
        explanation: 'SO2 from burning sulfur-containing fuels dissolves in atmospheric moisture to form sulfurous acid (H2SO3). This is a major contributor to acid rain. The acid can further oxidize to sulfuric acid (H2SO4).',
        explanationCN: '含硫燃料燃烧产生的SO2溶解在大气水分中形成亚硫酸（H2SO3）。这是酸雨的主要成因。亚硫酸可进一步氧化为硫酸（H2SO4）。'
    },
    'Al + O2': {
        reactants: ['Al', 'O2'],
        products: ['Al2O3'],
        balanced: '4Al + 3O2 → 2Al2O3',
        type: 'combination',
        typeCN: '化合反应',
        principle: 'Aluminum reacts with oxygen to form aluminum oxide, a protective layer on aluminum surfaces.',
        principleCN: '铝与氧气反应生成氧化铝，这是铝表面的保护层。',
        conditions: ['ignition'],
        catalyst: null,
        reversible: false,
        ionicEquation: null,
        gasProduct: false,
        precipitate: false,
        explanation: 'Aluminum is very reactive with oxygen but forms a thin, protective Al2O3 layer that prevents further oxidation. When ignited (e.g., in oxygen), aluminum burns brilliantly with a white flame.',
        explanationCN: '铝与氧气反应很活泼，但形成薄而致密的Al2O3保护层防止进一步氧化。点燃时（如在纯氧中），铝剧烈燃烧发出白光。'
    },
    'Mg + O2': {
        reactants: ['Mg', 'O2'],
        products: ['MgO'],
        balanced: '2Mg + O2 → 2MgO',
        type: 'combination',
        typeCN: '化合反应',
        principle: 'Magnesium burns in oxygen with a brilliant white flame to produce magnesium oxide.',
        principleCN: '镁在氧气中燃烧发出耀眼白光，生成氧化镁。',
        conditions: ['ignition'],
        catalyst: null,
        reversible: false,
        ionicEquation: null,
        gasProduct: false,
        precipitate: false,
        explanation: 'Magnesium burns in oxygen with an extremely bright white flame, producing white magnesium oxide powder. This reaction releases intense heat and light, and is used in fireworks and flares.',
        explanationCN: '镁在氧气中燃烧发出极亮的白色火焰，生成白色氧化镁粉末。该反应释放强烈的热和光，用于烟花和照明弹。'
    },
    'C + O2': {
        reactants: ['C', 'O2'],
        products: ['CO2↑'],
        balanced: 'C + O2 → CO2↑',
        type: 'combustion',
        typeCN: '燃烧反应',
        principle: 'Carbon combustion. Carbon burns in oxygen to produce carbon dioxide.',
        principleCN: '碳燃烧。碳在氧气中燃烧生成二氧化碳。',
        conditions: ['ignition'],
        catalyst: null,
        reversible: false,
        ionicEquation: null,
        gasProduct: true,
        precipitate: false,
        explanation: 'Carbon (coal, charcoal) burns in oxygen to produce CO2. With limited oxygen, CO (carbon monoxide) forms instead. This is the basis of fossil fuel combustion.',
        explanationCN: '碳（煤、木炭）在氧气中燃烧生成CO2。氧气不足时生成CO（一氧化碳）。这是化石燃料燃烧的基础。'
    },
    'NH4Cl + NaOH': {
        reactants: ['NH4Cl', 'NaOH'],
        products: ['NaCl', 'H2O', 'NH3↑'],
        balanced: 'NH4Cl + NaOH → NaCl + H2O + NH3↑',
        type: 'double-displacement',
        typeCN: '复分解反应',
        principle: 'Ammonium salt reacts with strong base to release ammonia gas.',
        principleCN: '铵盐与强碱反应释放氨气。',
        conditions: ['△ heating'],
        catalyst: null,
        reversible: false,
        ionicEquation: 'NH4⁺ + OH⁻ → H2O + NH3↑',
        gasProduct: true,
        precipitate: false,
        explanation: 'When an ammonium salt reacts with a strong base and is heated, ammonia gas is released. This is a standard test for ammonium ions - the ammonia can be detected by its pungent smell or by turning damp litmus paper blue.',
        explanationCN: '铵盐与强碱反应并加热时释放氨气。这是检验铵离子的标准方法——氨气可通过其刺激性气味或使湿润石蕊试纸变蓝来检测。'
    },
    'BaCl2 + Na2SO4': {
        reactants: ['BaCl2', 'Na2SO4'],
        products: ['BaSO4↓', 'NaCl'],
        balanced: 'BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl',
        type: 'precipitation',
        typeCN: '沉淀反应',
        principle: 'Barium ions combine with sulfate ions to form insoluble barium sulfate precipitate.',
        principleCN: '钡离子与硫酸根离子结合生成不溶性硫酸钡沉淀。',
        conditions: [],
        catalyst: null,
        reversible: false,
        ionicEquation: 'Ba²⁺ + SO4²⁻ → BaSO4↓',
        gasProduct: false,
        precipitate: true,
        explanation: 'Barium chloride reacts with sodium sulfate to form a white precipitate of barium sulfate, which is insoluble in water and acids. This reaction is used to test for sulfate ions.',
        explanationCN: '氯化钡与硫酸钠反应生成白色硫酸钡沉淀，不溶于水和酸。该反应用于检验硫酸根离子。'
    }
};

// Reaction search index
const ReactionSearchIndex = [];
Object.keys(ReactionsDB).forEach(key => {
    const r = ReactionsDB[key];
    ReactionSearchIndex.push({
        formula: key,
        type: 'reaction',
        display: key,
        data: r
    });
});

// Format reaction equation with animated HTML
function formatReactionEquation(reaction) {
    const { reactants, products, conditions, balanced } = reaction;

    let html = '<div class="reaction-display">';

    // Reactants
    reactants.forEach((r, i) => {
        if (i > 0) html += '<span style="color:var(--text-tertiary)"> + </span>';
        html += `<span class="reactant">${formatFormula(r)}</span>`;
    });

    // Arrow with conditions
    html += '<span class="reaction-arrow">';
    if (conditions.length > 0) {
        html += `<span class="condition">${conditions.join(' / ')}</span>`;
    }
    if (reaction.reversible) {
        html += ' ⇌ ';
    } else {
        html += '<span class="arrow-line"></span>';
    }
    html += '</span>';

    // Products
    products.forEach((p, i) => {
        if (i > 0) html += '<span style="color:var(--text-tertiary)"> + </span>';
        let productHtml = formatFormula(p.replace('↑', '').replace('↓', ''));
        if (p.includes('↑')) {
            productHtml += ' <span class="gas-indicator">↑</span>';
        }
        if (p.includes('↓')) {
            productHtml += ' <span class="precipitate-indicator">↓</span>';
        }
        html += `<span class="product">${productHtml}</span>`;
    });

    html += '</div>';
    return html;
}

// Format chemical formula with subscripts
function formatFormula(formula) {
    return formula.replace(/(\d+)/g, '<sub>$1</sub>');
}

// Render reaction result
function renderReactionResult(reactionKey) {
    const reaction = ReactionsDB[reactionKey];
    if (!reaction) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';
        return `<div class="error-message">${isCN ? '未找到该反应。请尝试下面的示例之一。' : 'Reaction not found. Try one of the examples below.'}</div>`;
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    let html = '';

    // Main equation card
    html += `<div class="result-card">`;
    html += `<h3>${isCN ? '化学方程式' : 'Chemical Equation'}</h3>`;
    html += formatReactionEquation(reaction);
    html += `<div class="desc-block">`;
    html += `<strong>${isCN ? '配平方程式' : 'Balanced Equation'}:</strong> ${formatFormula(reaction.balanced)}`;
    html += `</div>`;
    html += `</div>`;

    // Reaction info card
    html += `<div class="result-card" style="animation-delay: 0.1s">`;
    html += `<h3>${isCN ? '反应信息' : 'Reaction Information'}</h3>`;
    html += `<div class="info-grid">`;
    html += makeInfoItem(isCN ? '反应类型' : 'Reaction Type', isCN ? reaction.typeCN : reaction.type);
    html += makeInfoItem(isCN ? '可逆反应' : 'Reversible', reaction.reversible ? (isCN ? '是' : 'Yes') : (isCN ? '否' : 'No'));
    if (reaction.catalyst) {
        html += makeInfoItem(isCN ? '催化剂' : 'Catalyst', reaction.catalyst);
    }
    if (reaction.conditions.length > 0) {
        html += makeInfoItem(isCN ? '条件' : 'Conditions', reaction.conditions.join(', '));
    }
    html += makeInfoItem(isCN ? '生成气体' : 'Gas Product', reaction.gasProduct ? (isCN ? '是' : 'Yes') : (isCN ? '否' : 'No'));
    html += makeInfoItem(isCN ? '生成沉淀' : 'Precipitate', reaction.precipitate ? (isCN ? '是' : 'Yes') : (isCN ? '否' : 'No'));
    html += `</div>`;
    html += `<div class="tag-row">`;
    html += `<span class="tag tag-acid">${isCN ? reaction.typeCN : reaction.type}</span>`;
    if (reaction.reversible) html += `<span class="tag tag-neutral">${isCN ? '可逆' : 'reversible'}</span>`;
    if (reaction.gasProduct) html += `<span class="tag tag-organic">${isCN ? '气体' : 'gas'}</span>`;
    if (reaction.precipitate) html += `<span class="tag tag-oxide">${isCN ? '沉淀' : 'precipitate'}</span>`;
    html += `</div>`;
    html += `</div>`;

    // Ionic equation
    if (reaction.ionicEquation) {
        html += `<div class="result-card" style="animation-delay: 0.2s">`;
        html += `<h3>${isCN ? '离子方程式' : 'Ionic Equation'}</h3>`;
        html += `<div class="desc-block" style="font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace; font-size: 1.1rem; text-align: center; padding: 20px;">`;
        html += formatFormula(reaction.ionicEquation);
        html += `</div>`;
        html += `</div>`;
    }

    // Principle card
    html += `<div class="result-card" style="animation-delay: 0.3s">`;
    html += `<h3>${isCN ? '反应原理' : 'Reaction Principle'}</h3>`;
    html += `<div class="desc-block">${isCN ? reaction.principleCN : reaction.principle}</div>`;
    html += `</div>`;

    // Explanation card
    html += `<div class="result-card" style="animation-delay: 0.4s">`;
    html += `<h3>${isCN ? '详细说明' : 'Detailed Explanation'}</h3>`;
    html += `<div class="desc-block">${isCN ? reaction.explanationCN : reaction.explanation}</div>`;
    html += `</div>`;

    return html;
}

function makeInfoItem(label, value) {
    return `<div class="info-item"><div class="info-label">${label}</div><div class="info-value">${value}</div></div>`;
}

// Analyze user input reaction
function analyzeReaction(input) {
    const clean = input.trim().replace(/\s+/g, ' ');

    // Direct match
    if (ReactionsDB[clean]) {
        return renderReactionResult(clean);
    }

    // Try matching with different arrow formats
    const normalized = clean
        .replace(/→/g, '+')
        .replace(/->/g, '+')
        .replace(/=/g, '+')
        .replace(/ yields /gi, '+')
        .replace(/ gives /gi, '+')
        .split('+')
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .sort()
        .join(' + ');

    for (const key of Object.keys(ReactionsDB)) {
        const keyNorm = key.split('+').map(s => s.trim()).sort().join(' + ');
        if (keyNorm === normalized) {
            return renderReactionResult(key);
        }
    }

    // Try partial match
    for (const key of Object.keys(ReactionsDB)) {
        const keyParts = key.split('+').map(s => s.trim().toLowerCase());
        const inputParts = clean.split('+').map(s => s.trim().toLowerCase()).filter(s => s);
        if (inputParts.every(p => keyParts.includes(p)) && inputParts.length === keyParts.length) {
            return renderReactionResult(key);
        }
    }

    // Try reaction prediction using inference engine
    if (typeof ChemInference !== 'undefined') {
        const reactantFormulas = clean.split('+').map(s => s.trim()).filter(Boolean);
        if (reactantFormulas.length >= 1) {
            const predicted = ChemInference.predictReaction(reactantFormulas);
            if (predicted) {
                return renderPredictedReaction(reactantFormulas, predicted);
            }
        }
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';
    return `<div class="error-message">
        ${isCN ? '未找到该反应。请尝试下面的示例之一。' : 'Reaction not found. Try one of the examples below.'}
    </div>`;
}

// Render a predicted reaction result
function renderPredictedReaction(reactants, prediction) {
    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    let html = '';

    // Source badge
    html += `<div class="result-card">`;
    html += `<div class="source-badge source-pubchem" style="background: rgba(52, 199, 89, 0.08); border-color: rgba(52, 199, 89, 0.15); color: var(--success);">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ${isCN ? '智能预测' : 'Predicted'}
    </div>`;

    html += `<h3>${isCN ? '预测反应' : 'Predicted Reaction'}</h3>`;

    // Animated reaction display
    html += `<div class="reaction-display">`;
    reactants.forEach((r, i) => {
        if (i > 0) html += '<span style="color:var(--text-tertiary)"> + </span>';
        html += `<span class="reactant">${formatFormula(r)}</span>`;
    });

    html += '<span class="reaction-arrow">';
    if (prediction.conditions && prediction.conditions.length > 0) {
        html += `<span class="condition">${prediction.conditions.join(' / ')}</span>`;
    }
    if (prediction.reversible) {
        html += ' ⇌ ';
    } else {
        html += '<span class="arrow-line"></span>';
    }
    html += '</span>';

    prediction.products.forEach((p, i) => {
        if (i > 0) html += '<span style="color:var(--text-tertiary)"> + </span>';
        let productHtml = formatFormula(p.replace('↑', '').replace('↓', ''));
        if (p.includes('↑')) productHtml += ' <span class="gas-indicator">↑</span>';
        if (p.includes('↓')) productHtml += ' <span class="precipitate-indicator">↓</span>';
        html += `<span class="product">${productHtml}</span>`;
    });
    html += `</div>`;
    html += `</div>`;

    // Info card
    html += `<div class="result-card" style="animation-delay: 0.1s">`;
    html += `<h3>${isCN ? '反应信息' : 'Reaction Information'}</h3>`;
    html += `<div class="info-grid">`;
    html += makeInfoItem(isCN ? '反应类型' : 'Reaction Type', prediction.type || 'Unknown');
    html += makeInfoItem(isCN ? '可逆反应' : 'Reversible', prediction.reversible ? (isCN ? '是' : 'Yes') : (isCN ? '否' : 'No'));
    if (prediction.catalyst) {
        html += makeInfoItem(isCN ? '催化剂' : 'Catalyst', prediction.catalyst);
    }
    if (prediction.conditions && prediction.conditions.length > 0) {
        html += makeInfoItem(isCN ? '条件' : 'Conditions', prediction.conditions.join(', '));
    }
    html += `</div>`;
    html += `<div class="tag-row">`;
    html += `<span class="tag tag-neutral">${isCN ? '自动推断' : 'Auto-inferred'}</span>`;
    if (prediction.type) html += `<span class="tag tag-acid">${prediction.type}</span>`;
    html += `</div>`;
    html += `</div>`;

    return html;
}
