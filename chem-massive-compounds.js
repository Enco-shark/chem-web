/* ============================================
   Massive Compound Database Expansion
   Systematically generates thousands of compounds
   ============================================ */

const MassiveCompoundDB = (() => {

    // ==========================================
    // Extended Metal List (40+ metals)
    // ==========================================
    const METALS = [
        // Alkali metals
        { symbol: 'Li', nameEN: 'Lithium', nameCN: '锂', charge: 1, mass: 6.941, category: 'alkali-metal', oxide: 'Li2O', hydroxide: 'LiOH' },
        { symbol: 'Na', nameEN: 'Sodium', nameCN: '钠', charge: 1, mass: 22.990, category: 'alkali-metal', oxide: 'Na2O', hydroxide: 'NaOH' },
        { symbol: 'K', nameEN: 'Potassium', nameCN: '钾', charge: 1, mass: 39.098, category: 'alkali-metal', oxide: 'K2O', hydroxide: 'KOH' },
        { symbol: 'Rb', nameEN: 'Rubidium', nameCN: '铷', charge: 1, mass: 85.468, category: 'alkali-metal', oxide: 'Rb2O', hydroxide: 'RbOH' },
        { symbol: 'Cs', nameEN: 'Cesium', nameCN: '铯', charge: 1, mass: 132.905, category: 'alkali-metal', oxide: 'Cs2O', hydroxide: 'CsOH' },

        // Alkaline earth metals
        { symbol: 'Be', nameEN: 'Beryllium', nameCN: '铍', charge: 2, mass: 9.012, category: 'alkaline-earth', oxide: 'BeO', hydroxide: 'Be(OH)2' },
        { symbol: 'Mg', nameEN: 'Magnesium', nameCN: '镁', charge: 2, mass: 24.305, category: 'alkaline-earth', oxide: 'MgO', hydroxide: 'Mg(OH)2' },
        { symbol: 'Ca', nameEN: 'Calcium', nameCN: '钙', charge: 2, mass: 40.078, category: 'alkaline-earth', oxide: 'CaO', hydroxide: 'Ca(OH)2' },
        { symbol: 'Sr', nameEN: 'Strontium', nameCN: '锶', charge: 2, mass: 87.62, category: 'alkaline-earth', oxide: 'SrO', hydroxide: 'Sr(OH)2' },
        { symbol: 'Ba', nameEN: 'Barium', nameCN: '钡', charge: 2, mass: 137.327, category: 'alkaline-earth', oxide: 'BaO', hydroxide: 'Ba(OH)2' },

        // Transition metals (common oxidation states)
        { symbol: 'Sc', nameEN: 'Scandium', nameCN: '钪', charge: 3, mass: 44.956, category: 'transition', oxide: 'Sc2O3', hydroxide: 'Sc(OH)3' },
        { symbol: 'Ti', nameEN: 'Titanium', nameCN: '钛', charge: 4, mass: 47.867, category: 'transition', oxide: 'TiO2', hydroxide: 'Ti(OH)4' },
        { symbol: 'V', nameEN: 'Vanadium', nameCN: '钒', charge: 5, mass: 50.942, category: 'transition', oxide: 'V2O5', hydroxide: 'V(OH)5' },
        { symbol: 'Cr', nameEN: 'Chromium', nameCN: '铬', charge: 3, mass: 51.996, category: 'transition', oxide: 'Cr2O3', hydroxide: 'Cr(OH)3' },
        { symbol: 'Mn', nameEN: 'Manganese', nameCN: '锰', charge: 2, mass: 54.938, category: 'transition', oxide: 'MnO', hydroxide: 'Mn(OH)2' },
        { symbol: 'Fe', nameEN: 'Iron', nameCN: '铁', charge: 3, mass: 55.845, category: 'transition', oxide: 'Fe2O3', hydroxide: 'Fe(OH)3' },
        { symbol: 'Co', nameEN: 'Cobalt', nameCN: '钴', charge: 2, mass: 58.933, category: 'transition', oxide: 'CoO', hydroxide: 'Co(OH)2' },
        { symbol: 'Ni', nameEN: 'Nickel', nameCN: '镍', charge: 2, mass: 58.693, category: 'transition', oxide: 'NiO', hydroxide: 'Ni(OH)2' },
        { symbol: 'Cu', nameEN: 'Copper', nameCN: '铜', charge: 2, mass: 63.546, category: 'transition', oxide: 'CuO', hydroxide: 'Cu(OH)2' },
        { symbol: 'Zn', nameEN: 'Zinc', nameCN: '锌', charge: 2, mass: 65.38, category: 'transition', oxide: 'ZnO', hydroxide: 'Zn(OH)2' },
        { symbol: 'Ag', nameEN: 'Silver', nameCN: '银', charge: 1, mass: 107.868, category: 'transition', oxide: 'Ag2O', hydroxide: 'AgOH' },
        { symbol: 'Cd', nameEN: 'Cadmium', nameCN: '镉', charge: 2, mass: 112.411, category: 'transition', oxide: 'CdO', hydroxide: 'Cd(OH)2' },
        { symbol: 'Hg', nameEN: 'Mercury', nameCN: '汞', charge: 2, mass: 200.592, category: 'transition', oxide: 'HgO', hydroxide: 'Hg(OH)2' },

        // Post-transition metals
        { symbol: 'Al', nameEN: 'Aluminum', nameCN: '铝', charge: 3, mass: 26.982, category: 'post-transition', oxide: 'Al2O3', hydroxide: 'Al(OH)3' },
        { symbol: 'Ga', nameEN: 'Gallium', nameCN: '镓', charge: 3, mass: 69.723, category: 'post-transition', oxide: 'Ga2O3', hydroxide: 'Ga(OH)3' },
        { symbol: 'In', nameEN: 'Indium', nameCN: '铟', charge: 3, mass: 114.818, category: 'post-transition', oxide: 'In2O3', hydroxide: 'In(OH)3' },
        { symbol: 'Sn', nameEN: 'Tin', nameCN: '锡', charge: 2, mass: 118.710, category: 'post-transition', oxide: 'SnO', hydroxide: 'Sn(OH)2' },
        { symbol: 'Pb', nameEN: 'Lead', nameCN: '铅', charge: 2, mass: 207.2, category: 'post-transition', oxide: 'PbO', hydroxide: 'Pb(OH)2' },
        { symbol: 'Bi', nameEN: 'Bismuth', nameCN: '铋', charge: 3, mass: 208.980, category: 'post-transition', oxide: 'Bi2O3', hydroxide: 'Bi(OH)3' },
    ];

    // ==========================================
    // Extended Anion List (30+ anions)
    // ==========================================
    const ANIONS = [
        // Halides
        { symbol: 'F', nameEN: 'Fluoride', nameCN: '氟化物', charge: 1, mass: 18.998, acidName: 'HF', acidNameCN: '氢氟酸' },
        { symbol: 'Cl', nameEN: 'Chloride', nameCN: '氯化物', charge: 1, mass: 35.453, acidName: 'HCl', acidNameCN: '盐酸' },
        { symbol: 'Br', nameEN: 'Bromide', nameCN: '溴化物', charge: 1, mass: 79.904, acidName: 'HBr', acidNameCN: '氢溴酸' },
        { symbol: 'I', nameEN: 'Iodide', nameCN: '碘化物', charge: 1, mass: 126.904, acidName: 'HI', acidNameCN: '氢碘酸' },

        // Oxide anions
        { symbol: 'O', nameEN: 'Oxide', nameCN: '氧化物', charge: 2, mass: 15.999, acidName: 'H2O', acidNameCN: '水' },
        { symbol: 'S', nameEN: 'Sulfide', nameCN: '硫化物', charge: 2, mass: 32.06, acidName: 'H2S', acidNameCN: '氢硫酸' },
        { symbol: 'N', nameEN: 'Nitride', nameCN: '氮化物', charge: 3, mass: 14.007, acidName: 'NH3', acidNameCN: '氨' },

        // Oxyanions
        { symbol: 'NO3', nameEN: 'Nitrate', nameCN: '硝酸盐', charge: 1, mass: 62.005, acidName: 'HNO3', acidNameCN: '硝酸' },
        { symbol: 'NO2', nameEN: 'Nitrite', nameCN: '亚硝酸盐', charge: 1, mass: 46.006, acidName: 'HNO2', acidNameCN: '亚硝酸' },
        { symbol: 'SO4', nameEN: 'Sulfate', nameCN: '硫酸盐', charge: 2, mass: 96.063, acidName: 'H2SO4', acidNameCN: '硫酸' },
        { symbol: 'SO3', nameEN: 'Sulfite', nameCN: '亚硫酸盐', charge: 2, mass: 80.063, acidName: 'H2SO3', acidNameCN: '亚硫酸' },
        { symbol: 'S2O3', nameEN: 'Thiosulfate', nameCN: '硫代硫酸盐', charge: 2, mass: 112.13, acidName: 'H2S2O3', acidNameCN: '硫代硫酸' },
        { symbol: 'CO3', nameEN: 'Carbonate', nameCN: '碳酸盐', charge: 2, mass: 60.009, acidName: 'H2CO3', acidNameCN: '碳酸' },
        { symbol: 'HCO3', nameEN: 'Bicarbonate', nameCN: '碳酸氢盐', charge: 1, mass: 61.017, acidName: 'H2CO3', acidNameCN: '碳酸' },
        { symbol: 'PO4', nameEN: 'Phosphate', nameCN: '磷酸盐', charge: 3, mass: 94.971, acidName: 'H3PO4', acidNameCN: '磷酸' },
        { symbol: 'HPO4', nameEN: 'Hydrogen Phosphate', nameCN: '磷酸氢盐', charge: 2, mass: 95.979, acidName: 'H3PO4', acidNameCN: '磷酸' },
        { symbol: 'H2PO4', nameEN: 'Dihydrogen Phosphate', nameCN: '磷酸二氢盐', charge: 1, mass: 96.987, acidName: 'H3PO4', acidNameCN: '磷酸' },
        { symbol: 'OH', nameEN: 'Hydroxide', nameCN: '氢氧化物', charge: 1, mass: 17.008, acidName: 'H2O', acidNameCN: '水' },

        // Halogen oxyanions
        { symbol: 'ClO', nameEN: 'Hypochlorite', nameCN: '次氯酸盐', charge: 1, mass: 51.452, acidName: 'HClO', acidNameCN: '次氯酸' },
        { symbol: 'ClO2', nameEN: 'Chlorite', nameCN: '亚氯酸盐', charge: 1, mass: 67.452, acidName: 'HClO2', acidNameCN: '亚氯酸' },
        { symbol: 'ClO3', nameEN: 'Chlorate', nameCN: '氯酸盐', charge: 1, mass: 83.451, acidName: 'HClO3', acidNameCN: '氯酸' },
        { symbol: 'ClO4', nameEN: 'Perchlorate', nameCN: '高氯酸盐', charge: 1, mass: 99.451, acidName: 'HClO4', acidNameCN: '高氯酸' },
        { symbol: 'BrO3', nameEN: 'Bromate', nameCN: '溴酸盐', charge: 1, mass: 127.904, acidName: 'HBrO3', acidNameCN: '溴酸' },
        { symbol: 'IO3', nameEN: 'Iodate', nameCN: '碘酸盐', charge: 1, mass: 174.903, acidName: 'HIO3', acidNameCN: '碘酸' },

        // Other common anions
        { symbol: 'CN', nameEN: 'Cyanide', nameCN: '氰化物', charge: 1, mass: 26.018, acidName: 'HCN', acidNameCN: '氢氰酸' },
        { symbol: 'SCN', nameEN: 'Thiocyanate', nameCN: '硫氰酸盐', charge: 1, mass: 58.083, acidName: 'HSCN', acidNameCN: '硫氰酸' },
        { symbol: 'MnO4', nameEN: 'Permanganate', nameCN: '高锰酸盐', charge: 1, mass: 118.936, acidName: 'HMnO4', acidNameCN: '高锰酸' },
        { symbol: 'CrO4', nameEN: 'Chromate', nameCN: '铬酸盐', charge: 2, mass: 115.994, acidName: 'H2CrO4', acidNameCN: '铬酸' },
        { symbol: 'Cr2O7', nameEN: 'Dichromate', nameCN: '重铬酸盐', charge: 2, mass: 215.988, acidName: 'H2Cr2O7', acidNameCN: '重铬酸' },
        { symbol: 'CH3COO', nameEN: 'Acetate', nameCN: '乙酸盐', charge: 1, mass: 59.044, acidName: 'CH3COOH', acidNameCN: '乙酸' },
        { symbol: 'C2O4', nameEN: 'Oxalate', nameCN: '草酸盐', charge: 2, mass: 88.020, acidName: 'H2C2O4', acidNameCN: '草酸' },
        { symbol: 'SiO3', nameEN: 'Silicate', nameCN: '硅酸盐', charge: 2, mass: 76.084, acidName: 'H2SiO3', acidNameCN: '硅酸' },
        { symbol: 'BO3', nameEN: 'Borate', nameCN: '硼酸盐', charge: 3, mass: 58.819, acidName: 'H3BO3', acidNameCN: '硼酸' },
    ];

    // ==========================================
    // Additional Hand-Curated Compounds
    // ==========================================
    const ADDITIONAL_COMPOUNDS = {
        // Common industrial chemicals
        'H2SO4': { formula: 'H2SO4', nameEN: 'Sulfuric Acid', nameCN: '硫酸', classification: 'Acid', classificationCN: '酸', molecularMass: 98.079, acidBase: 'Strong acid', acidBaseCN: '强酸', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Highly corrosive', hazardsCN: '强腐蚀性', uses: 'Fertilizer production, chemical synthesis', usesCN: '化肥生产、化学合成', description: 'Most widely used industrial chemical.', descriptionCN: '使用最广泛的工业化学品。' },
        'HNO3': { formula: 'HNO3', nameEN: 'Nitric Acid', nameCN: '硝酸', classification: 'Acid', classificationCN: '酸', molecularMass: 63.012, acidBase: 'Strong acid', acidBaseCN: '强酸', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Corrosive, oxidizer', hazardsCN: '腐蚀性，氧化剂', uses: 'Fertilizers, explosives, metal etching', usesCN: '化肥、炸药、金属蚀刻', description: 'Strong acid and oxidizing agent.', descriptionCN: '强酸和氧化剂。' },
        'H3PO4': { formula: 'H3PO4', nameEN: 'Phosphoric Acid', nameCN: '磷酸', classification: 'Acid', classificationCN: '酸', molecularMass: 97.994, acidBase: 'Medium acid', acidBaseCN: '中强酸', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Fertilizers, food additive', usesCN: '化肥、食品添加剂', description: 'Triprotic acid used in fertilizers.', descriptionCN: '三元酸，用于化肥。' },

        // Common salts
        'NaCl': { formula: 'NaCl', nameEN: 'Sodium Chloride', nameCN: '氯化钠', classification: 'Salt', classificationCN: '盐', molecularMass: 58.443, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Safe in normal amounts', hazardsCN: '正常用量安全', uses: 'Food seasoning, preservation, de-icing', usesCN: '调味品、防腐、道路除冰', description: 'Table salt, essential for life.', descriptionCN: '食盐，生命必需品。' },
        'KCl': { formula: 'KCl', nameEN: 'Potassium Chloride', nameCN: '氯化钾', classification: 'Salt', classificationCN: '盐', molecularMass: 74.551, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Safe', hazardsCN: '安全', uses: 'Fertilizer, medicine, food additive', usesCN: '化肥、医药、食品添加剂', description: 'Important potassium fertilizer.', descriptionCN: '重要的钾肥。' },
        'Na2SO4': { formula: 'Na2SO4', nameEN: 'Sodium Sulfate', nameCN: '硫酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 142.04, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Detergent, paper production', usesCN: '洗涤剂、造纸', description: 'Sodium sulfate (Glauber\'s salt).', descriptionCN: '硫酸钠（芒硝）。' },
        'K2SO4': { formula: 'K2SO4', nameEN: 'Potassium Sulfate', nameCN: '硫酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 174.26, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Fertilizer', usesCN: '化肥', description: 'Potassium fertilizer.', descriptionCN: '钾肥。' },
        'CaSO4': { formula: 'CaSO4', nameEN: 'Calcium Sulfate', nameCN: '硫酸钙', classification: 'Salt', classificationCN: '盐', molecularMass: 136.14, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Plaster, cement, drywall', usesCN: '石膏、水泥、墙板', description: 'Gypsum (CaSO4·2H2O) and plaster of Paris.', descriptionCN: '石膏（CaSO4·2H2O）和熟石膏。' },
        'BaSO4': { formula: 'BaSO4', nameEN: 'Barium Sulfate', nameCN: '硫酸钡', classification: 'Salt', classificationCN: '盐', molecularMass: 233.39, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Safe (insoluble)', hazardsCN: '安全（不溶）', uses: 'X-ray contrast agent, paint', usesCN: 'X光造影剂、涂料', description: 'Insoluble barium salt used in medical imaging.', descriptionCN: '不溶性钡盐，用于医学成像。' },
        'MgSO4': { formula: 'MgSO4', nameEN: 'Magnesium Sulfate', nameCN: '硫酸镁', classification: 'Salt', classificationCN: '盐', molecularMass: 120.37, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Generally safe', hazardsCN: '一般安全', uses: 'Epsom salt, medicine, agriculture', usesCN: '泻盐、医药、农业', description: 'Epsom salt, used in medicine and agriculture.', descriptionCN: '泻盐，用于医药和农业。' },
        'FeSO4': { formula: 'FeSO4', nameEN: 'Iron(II) Sulfate', nameCN: '硫酸亚铁', classification: 'Salt', classificationCN: '盐', molecularMass: 151.91, acidBase: 'Acidic salt', acidBaseCN: '酸性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Green', colorCN: '绿色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful if ingested', hazardsCN: '吞食有害', uses: 'Water treatment, medicine', usesCN: '水处理、医药', description: 'Green vitriol, used to treat iron deficiency.', descriptionCN: '绿矾，用于治疗缺铁。' },
        'CuSO4': { formula: 'CuSO4', nameEN: 'Copper(II) Sulfate', nameCN: '硫酸铜', classification: 'Salt', classificationCN: '盐', molecularMass: 159.609, acidBase: 'Acidic salt', acidBaseCN: '酸性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Blue', colorCN: '蓝色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful if ingested', hazardsCN: '吞食有害', uses: 'Fungicide, electroplating', usesCN: '杀菌剂、电镀', description: 'Blue vitriol, used as fungicide.', descriptionCN: '蓝矾，用作杀菌剂。' },
        'ZnSO4': { formula: 'ZnSO4', nameEN: 'Zinc Sulfate', nameCN: '硫酸锌', classification: 'Salt', classificationCN: '盐', molecularMass: 161.47, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful if ingested', hazardsCN: '吞食有害', uses: 'Dietary supplement, galvanizing', usesCN: '膳食补充剂、镀锌', description: 'Zinc supplement and industrial chemical.', descriptionCN: '锌补充剂和工业化学品。' },
        'Al2(SO4)3': { formula: 'Al2(SO4)3', nameEN: 'Aluminum Sulfate', nameCN: '硫酸铝', classification: 'Salt', classificationCN: '盐', molecularMass: 342.15, acidBase: 'Acidic salt', acidBaseCN: '酸性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Water treatment, paper sizing', usesCN: '水处理、纸张施胶', description: 'Used in water purification as flocculant.', descriptionCN: '用作水净化中的絮凝剂。' },
        'Fe2(SO4)3': { formula: 'Fe2(SO4)3', nameEN: 'Iron(III) Sulfate', nameCN: '硫酸铁', classification: 'Salt', classificationCN: '盐', molecularMass: 399.88, acidBase: 'Acidic salt', acidBaseCN: '酸性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Yellow', colorCN: '黄色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Water treatment, mordant', usesCN: '水处理、媒染剂', description: 'Used in water purification.', descriptionCN: '用于水净化。' },

        // Nitrates
        'NaNO3': { formula: 'NaNO3', nameEN: 'Sodium Nitrate', nameCN: '硝酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 84.995, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Fertilizer, food preservative', usesCN: '化肥、食品防腐剂', description: 'Chile saltpeter, nitrogen fertilizer.', descriptionCN: '智利硝石，氮肥。' },
        'KNO3': { formula: 'KNO3', nameEN: 'Potassium Nitrate', nameCN: '硝酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 101.103, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Fertilizer, gunpowder, food preservation', usesCN: '化肥、火药、食品防腐', description: 'Saltpeter, used in gunpowder.', descriptionCN: '硝石，用于火药。' },
        'NH4NO3': { formula: 'NH4NO3', nameEN: 'Ammonium Nitrate', nameCN: '硝酸铵', classification: 'Salt', classificationCN: '盐', molecularMass: 80.043, acidBase: 'Acidic salt', acidBaseCN: '酸性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Explosive under confinement', hazardsCN: '密闭条件下可爆炸', uses: 'Fertilizer, explosives', usesCN: '化肥、炸药', description: 'Major nitrogen fertilizer and explosive component.', descriptionCN: '主要氮肥和炸药成分。' },
        'Ca(NO3)2': { formula: 'Ca(NO3)2', nameEN: 'Calcium Nitrate', nameCN: '硝酸钙', classification: 'Salt', classificationCN: '盐', molecularMass: 164.09, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Fertilizer, concrete additive', usesCN: '化肥、混凝土添加剂', description: 'Calcium nitrogen fertilizer.', descriptionCN: '钙氮肥。' },
        'Ba(NO3)2': { formula: 'Ba(NO3)2', nameEN: 'Barium Nitrate', nameCN: '硝酸钡', classification: 'Salt', classificationCN: '盐', molecularMass: 261.34, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic, oxidizer', hazardsCN: '有毒，氧化剂', uses: 'Pyrotechnics, green fireworks', usesCN: '烟火、绿色烟花', description: 'Used in green fireworks.', descriptionCN: '用于绿色烟花。' },
        'Pb(NO3)2': { formula: 'Pb(NO3)2', nameEN: 'Lead(II) Nitrate', nameCN: '硝酸铅', classification: 'Salt', classificationCN: '盐', molecularMass: 331.21, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic', hazardsCN: '有毒', uses: 'Chemical reagent, dye production', usesCN: '化学试剂、染料生产', description: 'Toxic lead salt used in chemistry.', descriptionCN: '有毒铅盐，用于化学。' },
        'AgNO3': { formula: 'AgNO3', nameEN: 'Silver Nitrate', nameCN: '硝酸银', classification: 'Salt', classificationCN: '盐', molecularMass: 169.874, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Corrosive, toxic', hazardsCN: '腐蚀性，有毒', uses: 'Photography, antiseptic, chemical reagent', usesCN: '摄影、防腐剂、化学试剂', description: 'Silver salt used in photography and as reagent.', descriptionCN: '银盐，用于摄影和试剂。' },

        // Carbonates
        'Na2CO3': { formula: 'Na2CO3', nameEN: 'Sodium Carbonate', nameCN: '碳酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 105.99, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Glass making, soap, detergents', usesCN: '玻璃制造、肥皂、洗涤剂', description: 'Washing soda, widely used in industry.', descriptionCN: '洗涤碱，广泛用于工业。' },
        'K2CO3': { formula: 'K2CO3', nameEN: 'Potassium Carbonate', nameCN: '碳酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 138.205, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Glass making, soap', usesCN: '玻璃制造、肥皂', description: 'Potash, used in glass production.', descriptionCN: '钾碱，用于玻璃生产。' },
        'MgCO3': { formula: 'MgCO3', nameEN: 'Magnesium Carbonate', nameCN: '碳酸镁', classification: 'Salt', classificationCN: '盐', molecularMass: 84.314, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Antacid, sports chalk', usesCN: '抗酸剂、运动镁粉', description: 'Magnesite, used as antacid.', descriptionCN: '菱镁矿，用作抗酸剂。' },
        'BaCO3': { formula: 'BaCO3', nameEN: 'Barium Carbonate', nameCN: '碳酸钡', classification: 'Salt', classificationCN: '盐', molecularMass: 197.34, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic', hazardsCN: '有毒', uses: 'Ceramics, brick making', usesCN: '陶瓷、制砖', description: 'Witherite, used in ceramics.', descriptionCN: '毒重石，用于陶瓷。' },
        'NaHCO3': { formula: 'NaHCO3', nameEN: 'Sodium Bicarbonate', nameCN: '碳酸氢钠', classification: 'Salt', classificationCN: '盐', molecularMass: 84.007, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Generally safe', hazardsCN: '一般安全', uses: 'Baking, antacid, fire extinguisher', usesCN: '烘焙、抗酸剂、灭火器', description: 'Baking soda, releases CO2 when heated.', descriptionCN: '小苏打，加热释放CO2。' },

        // Phosphates
        'Na3PO4': { formula: 'Na3PO4', nameEN: 'Sodium Phosphate', nameCN: '磷酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 163.94, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Detergent, water treatment', usesCN: '洗涤剂、水处理', description: 'Trisodium phosphate, cleaning agent.', descriptionCN: '磷酸三钠，清洁剂。' },
        'Ca3(PO4)2': { formula: 'Ca3(PO4)2', nameEN: 'Calcium Phosphate', nameCN: '磷酸钙', classification: 'Salt', classificationCN: '盐', molecularMass: 310.18, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Fertilizer, dental cement', usesCN: '化肥、牙科材料', description: 'Main component of bones and teeth.', descriptionCN: '骨骼和牙齿的主要成分。' },
        'Na2HPO4': { formula: 'Na2HPO4', nameEN: 'Sodium Hydrogen Phosphate', nameCN: '磷酸氢二钠', classification: 'Salt', classificationCN: '盐', molecularMass: 141.96, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Food additive, buffer', usesCN: '食品添加剂、缓冲剂', description: 'Disodium hydrogen phosphate.', descriptionCN: '磷酸氢二钠。' },
        'NaH2PO4': { formula: 'NaH2PO4', nameEN: 'Sodium Dihydrogen Phosphate', nameCN: '磷酸二氢钠', classification: 'Salt', classificationCN: '盐', molecularMass: 119.98, acidBase: 'Acidic salt', acidBaseCN: '酸性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Food additive, buffer', usesCN: '食品添加剂、缓冲剂', description: 'Monosodium phosphate.', descriptionCN: '磷酸二氢钠。' },

        // Chlorates and Perchlorates
        'NaClO': { formula: 'NaClO', nameEN: 'Sodium Hypochlorite', nameCN: '次氯酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 74.442, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solution', stateCN: '溶液', solubility: 'Soluble', solubilityCN: '可溶', color: 'Pale yellow', colorCN: '淡黄色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer, corrosive', hazardsCN: '氧化剂，腐蚀性', uses: 'Bleach, disinfectant, water treatment', usesCN: '漂白剂、消毒剂、水处理', description: 'Bleach, household disinfectant.', descriptionCN: '漂白剂，家用消毒剂。' },
        'NaClO3': { formula: 'NaClO3', nameEN: 'Sodium Chlorate', nameCN: '氯酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 106.44, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Herbicide, defoliant', usesCN: '除草剂、落叶剂', description: 'Sodium chlorate, strong oxidizer.', descriptionCN: '氯酸钠，强氧化剂。' },
        'NaClO4': { formula: 'NaClO4', nameEN: 'Sodium Perchlorate', nameCN: '高氯酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 122.44, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Rocket propellant, analytical chemistry', usesCN: '火箭推进剂、分析化学', description: 'Strong oxidizer used in aerospace.', descriptionCN: '强氧化剂，用于航空航天。' },
        'KClO3': { formula: 'KClO3', nameEN: 'Potassium Chlorate', nameCN: '氯酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 122.55, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer, explosive with fuels', hazardsCN: '氧化剂，与燃料混合可爆炸', uses: 'Matches, fireworks, explosives', usesCN: '火柴、烟花、炸药', description: 'Potassium chlorate, used in matches.', descriptionCN: '氯酸钾，用于火柴。' },

        // Permanganates and Chromates
        'KMnO4': { formula: 'KMnO4', nameEN: 'Potassium Permanganate', nameCN: '高锰酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 158.034, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Purple', colorCN: '紫色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer, corrosive', hazardsCN: '氧化剂，腐蚀性', uses: 'Water purification, antiseptic', usesCN: '水消毒、防腐剂', description: 'Deep purple oxidizer.', descriptionCN: '深紫色氧化剂。' },
        'K2CrO4': { formula: 'K2CrO4', nameEN: 'Potassium Chromate', nameCN: '铬酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 194.19, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Yellow', colorCN: '黄色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic, carcinogenic', hazardsCN: '有毒，致癌', uses: 'Chemical reagent, corrosion inhibitor', usesCN: '化学试剂、缓蚀剂', description: 'Yellow chromate salt.', descriptionCN: '黄色铬酸盐。' },
        'K2Cr2O7': { formula: 'K2Cr2O7', nameEN: 'Potassium Dichromate', nameCN: '重铬酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 294.185, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Orange-red', colorCN: '橙红色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic, carcinogenic, oxidizer', hazardsCN: '有毒，致癌，氧化剂', uses: 'Oxidizing agent, leather tanning', usesCN: '氧化剂、皮革鞣制', description: 'Orange-red strong oxidizer.', descriptionCN: '橙红色强氧化剂。' },
        'Na2CrO4': { formula: 'Na2CrO4', nameEN: 'Sodium Chromate', nameCN: '铬酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 161.97, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Yellow', colorCN: '黄色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic, carcinogenic', hazardsCN: '有毒，致癌', uses: 'Corrosion inhibitor', usesCN: '缓蚀剂', description: 'Sodium chromate, corrosion inhibitor.', descriptionCN: '铬酸钠，缓蚀剂。' },

        // Cyanides
        'NaCN': { formula: 'NaCN', nameEN: 'Sodium Cyanide', nameCN: '氰化钠', classification: 'Salt', classificationCN: '盐', molecularMass: 49.008, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Extremely toxic', hazardsCN: '剧毒', uses: 'Gold extraction, electroplating', usesCN: '金矿提取、电镀', description: 'Extremely toxic, used in gold mining.', descriptionCN: '剧毒，用于金矿开采。' },
        'KCN': { formula: 'KCN', nameEN: 'Potassium Cyanide', nameCN: '氰化钾', classification: 'Salt', classificationCN: '盐', molecularMass: 65.116, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Extremely toxic', hazardsCN: '剧毒', uses: 'Gold extraction, organic synthesis', usesCN: '金矿提取、有机合成', description: 'Extotoxic potassium salt.', descriptionCN: '剧毒钾盐。' },

        // Acetates
        'CH3COONa': { formula: 'CH3COONa', nameEN: 'Sodium Acetate', nameCN: '乙酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 82.034, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Food additive, buffer, hand warmers', usesCN: '食品添加剂、缓冲剂、暖手宝', description: 'Sodium acetate, used in hand warmers.', descriptionCN: '乙酸钠，用于暖手宝。' },
        'CH3COOK': { formula: 'CH3COOK', nameEN: 'Potassium Acetate', nameCN: '乙酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 98.142, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Deicer, fire suppressant', usesCN: '除冰剂、灭火剂', description: 'Potassium acetate, eco-friendly deicer.', descriptionCN: '乙酸钾，环保除冰剂。' },
        '(CH3COO)2Ca': { formula: '(CH3COO)2Ca', nameEN: 'Calcium Acetate', nameCN: '乙酸钙', classification: 'Salt', classificationCN: '盐', molecularMass: 158.17, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Food additive, medicine', usesCN: '食品添加剂、医药', description: 'Calcium acetate, phosphate binder.', descriptionCN: '乙酸钙，磷酸盐结合剂。' },
        '(CH3COO)2Pb': { formula: '(CH3COO)2Pb', nameEN: 'Lead(II) Acetate', nameCN: '乙酸铅', classification: 'Salt', classificationCN: '盐', molecularMass: 325.29, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Toxic', hazardsCN: '有毒', uses: 'Lead paint (historical)', usesCN: '铅涂料（历史）', description: 'Lead acetate, historically used.', descriptionCN: '乙酸铅，历史上使用。' },

        // Sulfites and Thiosulfates
        'Na2SO3': { formula: 'Na2SO3', nameEN: 'Sodium Sulfite', nameCN: '亚硫酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 126.04, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Preservative, photography', usesCN: '防腐剂、摄影', description: 'Sodium sulfite, reducing agent.', descriptionCN: '亚硫酸钠，还原剂。' },
        'Na2S2O3': { formula: 'Na2S2O3', nameEN: 'Sodium Thiosulfate', nameCN: '硫代硫酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 158.11, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Photography, dechlorination', usesCN: '摄影、脱氯', description: 'Hypo, used in photography.', descriptionCN: '海波，用于摄影。' },

        // Silicates
        'Na2SiO3': { formula: 'Na2SiO3', nameEN: 'Sodium Silicate', nameCN: '硅酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 122.06, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Adhesive, sealant, detergent', usesCN: '粘合剂、密封剂、洗涤剂', description: 'Water glass, adhesive.', descriptionCN: '水玻璃，粘合剂。' },

        // Borates
        'Na2B4O7': { formula: 'Na2B4O7', nameEN: 'Sodium Tetraborate', nameCN: '四硼酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 201.22, acidBase: 'Basic salt', acidBaseCN: '碱性盐', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Detergent, flux, insecticide', usesCN: '洗涤剂、助焊剂、杀虫剂', description: 'Borax, household chemical.', descriptionCN: '硼砂，家用化学品。' },
        'H3BO3': { formula: 'H3BO3', nameEN: 'Boric Acid', nameCN: '硼酸', classification: 'Acid', classificationCN: '酸', molecularMass: 61.833, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Antiseptic, insecticide, flame retardant', usesCN: '防腐剂、杀虫剂、阻燃剂', description: 'Boric acid, mild antiseptic.', descriptionCN: '硼酸，温和防腐剂。' },

        // Oxalates
        'Na2C2O4': { formula: 'Na2C2O4', nameEN: 'Sodium Oxalate', nameCN: '草酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 133.999, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful', hazardsCN: '有害', uses: 'Analytical chemistry standard', usesCN: '分析化学标准品', description: 'Sodium oxalate, analytical standard.', descriptionCN: '草酸钠，分析标准品。' },
        'CaC2O4': { formula: 'CaC2O4', nameEN: 'Calcium Oxalate', nameCN: '草酸钙', classification: 'Salt', classificationCN: '盐', molecularMass: 128.10, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Kidney stone component', usesCN: '肾结石成分', description: 'Calcium oxalate, main component of kidney stones.', descriptionCN: '草酸钙，肾结石的主要成分。' },

        // Thiocyanates
        'NaSCN': { formula: 'NaSCN', nameEN: 'Sodium Thiocyanate', nameCN: '硫氰酸钠', classification: 'Salt', classificationCN: '盐', molecularMass: 81.07, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful', hazardsCN: '有害', uses: 'Photography, textile processing', usesCN: '摄影、纺织加工', description: 'Sodium thiocyanate, chemical reagent.', descriptionCN: '硫氰酸钠，化学试剂。' },
        'KSCN': { formula: 'KSCN', nameEN: 'Potassium Thiocyanate', nameCN: '硫氰酸钾', classification: 'Salt', classificationCN: '盐', molecularMass: 97.18, acidBase: 'Neutral salt', acidBaseCN: '中性盐', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful', hazardsCN: '有害', uses: 'Fe3+ test reagent', usesCN: 'Fe3+检验试剂', description: 'Potassium thiocyanate, test for Fe3+.', descriptionCN: '硫氰酸钾，检验Fe3+。' },

        // Common oxides
        'Na2O': { formula: 'Na2O', nameEN: 'Sodium Oxide', nameCN: '氧化钠', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 61.98, acidBase: 'Basic oxide', acidBaseCN: '碱性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Reacts with water', solubilityCN: '与水反应', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Chemical intermediate', usesCN: '化学中间体', description: 'Sodium oxide, reacts with water.', descriptionCN: '氧化钠，与水反应。' },
        'K2O': { formula: 'K2O', nameEN: 'Potassium Oxide', nameCN: '氧化钾', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 94.20, acidBase: 'Basic oxide', acidBaseCN: '碱性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Reacts with water', solubilityCN: '与水反应', color: 'Yellowish', colorCN: '淡黄色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Chemical reagent', usesCN: '化学试剂', description: 'Potassium oxide, reacts with water.', descriptionCN: '氧化钾，与水反应。' },
        'CaO': { formula: 'CaO', nameEN: 'Calcium Oxide', nameCN: '氧化钙', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 56.08, acidBase: 'Basic oxide', acidBaseCN: '碱性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Reacts with water', solubilityCN: '与水反应', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Cement, steel production', usesCN: '水泥、炼钢', description: 'Quicklime, reacts vigorously with water.', descriptionCN: '生石灰，与水剧烈反应。' },
        'MgO': { formula: 'MgO', nameEN: 'Magnesium Oxide', nameCN: '氧化镁', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 40.304, acidBase: 'Basic oxide', acidBaseCN: '碱性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Refractory material, antacid', usesCN: '耐火材料、抗酸剂', description: 'Magnesia, high melting point.', descriptionCN: '氧化镁，高熔点。' },
        'Al2O3': { formula: 'Al2O3', nameEN: 'Aluminum Oxide', nameCN: '氧化铝', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 101.96, acidBase: 'Amphoteric oxide', acidBaseCN: '两性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Abrasive, refractory, aluminum production', usesCN: '磨料、耐火材料、炼铝', description: 'Alumina, extremely hard.', descriptionCN: '氧化铝，极硬。' },
        'SiO2': { formula: 'SiO2', nameEN: 'Silicon Dioxide', nameCN: '二氧化硅', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 60.08, acidBase: 'Acidic oxide', acidBaseCN: '酸性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'Colorless', colorCN: '无色', polarity: 'Covalent', polarityCN: '共价键', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Glass, semiconductors, optical fibers', usesCN: '玻璃、半导体、光纤', description: 'Quartz, main component of glass.', descriptionCN: '石英，玻璃的主要成分。' },
        'TiO2': { formula: 'TiO2', nameEN: 'Titanium Dioxide', nameCN: '二氧化钛', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 79.87, acidBase: 'Amphoteric oxide', acidBaseCN: '两性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'White pigment, sunscreen', usesCN: '白色颜料、防晒霜', description: 'Titanium dioxide, brilliant white pigment.', descriptionCN: '二氧化钛，白色颜料。' },
        'Fe2O3': { formula: 'Fe2O3', nameEN: 'Iron(III) Oxide', nameCN: '氧化铁', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 159.69, acidBase: 'Amphoteric oxide', acidBaseCN: '两性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'Red-brown', colorCN: '红棕色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Pigment, magnetic storage', usesCN: '颜料、磁性存储', description: 'Hematite, red pigment.', descriptionCN: '赤铁矿，红色颜料。' },
        'CuO': { formula: 'CuO', nameEN: 'Copper(II) Oxide', nameCN: '氧化铜', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 79.55, acidBase: 'Basic oxide', acidBaseCN: '碱性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'Black', colorCN: '黑色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Harmful', hazardsCN: '有害', uses: 'Ceramics, catalyst', usesCN: '陶瓷、催化剂', description: 'Copper oxide, black solid.', descriptionCN: '氧化铜，黑色固体。' },
        'ZnO': { formula: 'ZnO', nameEN: 'Zinc Oxide', nameCN: '氧化锌', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 81.38, acidBase: 'Amphoteric oxide', acidBaseCN: '两性氧化物', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Low hazard', hazardsCN: '低危害', uses: 'Sunscreen, rubber, cosmetics', usesCN: '防晒霜、橡胶、化妆品', description: 'Zinc oxide, used in sunscreen.', descriptionCN: '氧化锌，用于防晒霜。' },

        // Common peroxides
        'Na2O2': { formula: 'Na2O2', nameEN: 'Sodium Peroxide', nameCN: '过氧化钠', classification: 'Peroxide', classificationCN: '过氧化物', molecularMass: 77.98, acidBase: 'Strong base', acidBaseCN: '强碱', state: 'Solid', stateCN: '固态', solubility: 'Reacts with water', solubilityCN: '与水反应', color: 'Yellow-white', colorCN: '淡黄色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer, corrosive', hazardsCN: '氧化剂，腐蚀性', uses: 'Bleaching, CO2 scrubber', usesCN: '漂白、CO2吸收', description: 'Sodium peroxide, releases O2 with water.', descriptionCN: '过氧化钠，与水反应释放O2。' },
        'BaO2': { formula: 'BaO2', nameEN: 'Barium Peroxide', nameCN: '过氧化钡', classification: 'Peroxide', classificationCN: '过氧化物', molecularMass: 169.33, acidBase: 'Base', acidBaseCN: '碱', state: 'Solid', stateCN: '固态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'Gray-white', colorCN: '灰白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'H2O2 production', usesCN: 'H2O2生产', description: 'Barium peroxide.', descriptionCN: '过氧化钡。' },
        'H2O2': { formula: 'H2O2', nameEN: 'Hydrogen Peroxide', nameCN: '过氧化氢', classification: 'Peroxide', classificationCN: '过氧化物', molecularMass: 34.015, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Disinfectant, bleaching, rocket fuel', usesCN: '消毒剂、漂白、火箭燃料', description: 'Hydrogen peroxide, decomposes to water and oxygen.', descriptionCN: '过氧化氢，分解为水和氧气。' },

        // Common acids not in other files
        'HF': { formula: 'HF', nameEN: 'Hydrofluoric Acid', nameCN: '氢氟酸', classification: 'Acid', classificationCN: '酸', molecularMass: 20.006, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Extremely corrosive', hazardsCN: '极强腐蚀性', uses: 'Glass etching, semiconductor manufacturing', usesCN: '玻璃蚀刻、半导体制造', description: 'Hydrofluoric acid, dissolves glass.', descriptionCN: '氢氟酸，溶解玻璃。' },
        'H2S': { formula: 'H2S', nameEN: 'Hydrogen Sulfide', nameCN: '硫化氢', classification: 'Acid', classificationCN: '酸', molecularMass: 34.08, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic, flammable', hazardsCN: '有毒，易燃', uses: 'Chemical analysis, sulfur production', usesCN: '化学分析、硫生产', description: 'Hydrogen sulfide, rotten egg smell.', descriptionCN: '硫化氢，臭鸡蛋味。' },
        'HCN': { formula: 'HCN', nameEN: 'Hydrogen Cyanide', nameCN: '氢氰酸', classification: 'Acid', classificationCN: '酸', molecularMass: 27.026, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Extremely toxic', hazardsCN: '剧毒', uses: 'Chemical synthesis, gold extraction', usesCN: '化学合成、金矿提取', description: 'Hydrocyanic acid, extremely toxic.', descriptionCN: '氢氰酸，剧毒。' },

        // Common bases
        'NaOH': { formula: 'NaOH', nameEN: 'Sodium Hydroxide', nameCN: '氢氧化钠', classification: 'Base', classificationCN: '碱', molecularMass: 40.00, acidBase: 'Strong base', acidBaseCN: '强碱', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Soap making, drain cleaner', usesCN: '制皂、下水道清洁剂', description: 'Caustic soda, strong base.', descriptionCN: '烧碱，强碱。' },
        'KOH': { formula: 'KOH', nameEN: 'Potassium Hydroxide', nameCN: '氢氧化钾', classification: 'Base', classificationCN: '碱', molecularMass: 56.11, acidBase: 'Strong base', acidBaseCN: '强碱', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Soap making, batteries', usesCN: '制皂、电池', description: 'Caustic potash, strong base.', descriptionCN: '苛性钾，强碱。' },
        'Ca(OH)2': { formula: 'Ca(OH)2', nameEN: 'Calcium Hydroxide', nameCN: '氢氧化钙', classification: 'Base', classificationCN: '碱', molecularMass: 74.09, acidBase: 'Strong base', acidBaseCN: '强碱', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Mortar, water treatment', usesCN: '砂浆、水处理', description: 'Slaked lime, construction material.', descriptionCN: '熟石灰，建筑材料。' },
        'NH3': { formula: 'NH3', nameEN: 'Ammonia', nameCN: '氨', classification: 'Base', classificationCN: '碱', molecularMass: 17.031, acidBase: 'Weak base', acidBaseCN: '弱碱', state: 'Gas', stateCN: '气态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic, irritant', hazardsCN: '有毒，刺激性', uses: 'Fertilizer, cleaning agent', usesCN: '化肥、清洁剂', description: 'Ammonia, pungent smell.', descriptionCN: '氨，刺激性气味。' },
        'NH4OH': { formula: 'NH4OH', nameEN: 'Ammonium Hydroxide', nameCN: '氢氧化铵', classification: 'Base', classificationCN: '碱', molecularMass: 35.046, acidBase: 'Weak base', acidBaseCN: '弱碱', state: 'Solution', stateCN: '溶液', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Ionic', polarityCN: '离子键', bondType: 'Ionic', bondTypeCN: '离子键', hazards: 'Irritant', hazardsCN: '刺激性', uses: 'Cleaning agent, chemical reagent', usesCN: '清洁剂、化学试剂', description: 'Ammonia solution.', descriptionCN: '氨水。' },

        // Common gases
        'H2': { formula: 'H2', nameEN: 'Hydrogen', nameCN: '氢气', classification: 'Element', classificationCN: '单质', molecularMass: 2.016, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable, explosive', hazardsCN: '易燃，爆炸性', uses: 'Fuel, chemical synthesis', usesCN: '燃料、化学合成', description: 'Hydrogen, lightest element.', descriptionCN: '氢气，最轻的元素。' },
        'O2': { formula: 'O2', nameEN: 'Oxygen', nameCN: '氧气', classification: 'Element', classificationCN: '单质', molecularMass: 32.00, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Oxidizer', hazardsCN: '氧化剂', uses: 'Respiration, combustion', usesCN: '呼吸、燃烧', description: 'Oxygen, essential for life.', descriptionCN: '氧气，生命必需。' },
        'N2': { formula: 'N2', nameEN: 'Nitrogen', nameCN: '氮气', classification: 'Element', classificationCN: '单质', molecularMass: 28.014, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Asphyxiant', hazardsCN: '窒息性', uses: 'Fertilizer production, inert atmosphere', usesCN: '化肥生产、惰性气氛', description: 'Nitrogen, 78% of atmosphere.', descriptionCN: '氮气，占大气78%。' },
        'CO2': { formula: 'CO2', nameEN: 'Carbon Dioxide', nameCN: '二氧化碳', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 44.01, acidBase: 'Acidic oxide', acidBaseCN: '酸性氧化物', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Asphyxiant, greenhouse gas', hazardsCN: '窒息性，温室气体', uses: 'Carbonated drinks, fire extinguisher', usesCN: '碳酸饮料、灭火器', description: 'Carbon dioxide, greenhouse gas.', descriptionCN: '二氧化碳，温室气体。' },
        'CO': { formula: 'CO', nameEN: 'Carbon Monoxide', nameCN: '一氧化碳', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 28.01, acidBase: 'Neutral oxide', acidBaseCN: '中性氧化物', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Extremely toxic', hazardsCN: '剧毒', uses: 'Fuel, metallurgy', usesCN: '燃料、冶金', description: 'Carbon monoxide, odorless and toxic.', descriptionCN: '一氧化碳，无味有毒。' },
        'SO2': { formula: 'SO2', nameEN: 'Sulfur Dioxide', nameCN: '二氧化硫', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 64.06, acidBase: 'Acidic oxide', acidBaseCN: '酸性氧化物', state: 'Gas', stateCN: '气态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic, irritant', hazardsCN: '有毒，刺激性', uses: 'Preservative, bleaching', usesCN: '防腐剂、漂白', description: 'Sulfur dioxide, causes acid rain.', descriptionCN: '二氧化硫，导致酸雨。' },
        'NO2': { formula: 'NO2', nameEN: 'Nitrogen Dioxide', nameCN: '二氧化氮', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 46.01, acidBase: 'Acidic oxide', acidBaseCN: '酸性氧化物', state: 'Gas', stateCN: '气态', solubility: 'Reacts with water', solubilityCN: '与水反应', color: 'Brown', colorCN: '棕色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic', hazardsCN: '有毒', uses: 'Nitric acid production', usesCN: '硝酸生产', description: 'Nitrogen dioxide, brown toxic gas.', descriptionCN: '二氧化氮，棕色有毒气体。' },
        'Cl2': { formula: 'Cl2', nameEN: 'Chlorine', nameCN: '氯气', classification: 'Element', classificationCN: '单质', molecularMass: 70.906, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Soluble', solubilityCN: '可溶', color: 'Yellow-green', colorCN: '黄绿色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic, corrosive', hazardsCN: '有毒，腐蚀性', uses: 'Water purification, PVC production', usesCN: '水消毒、PVC生产', description: 'Chlorine, yellow-green toxic gas.', descriptionCN: '氯气，黄绿色有毒气体。' },

        // Common organic compounds
        'CH4': { formula: 'CH4', nameEN: 'Methane', nameCN: '甲烷', classification: 'Organic (Alkane)', classificationCN: '有机物（烷烃）', molecularMass: 16.043, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable, explosive', hazardsCN: '易燃，爆炸性', uses: 'Natural gas fuel', usesCN: '天然气燃料', description: 'Methane, main component of natural gas.', descriptionCN: '甲烷，天然气的主要成分。' },
        'C2H6': { formula: 'C2H6', nameEN: 'Ethane', nameCN: '乙烷', classification: 'Organic (Alkane)', classificationCN: '有机物（烷烃）', molecularMass: 30.070, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable', hazardsCN: '易燃', uses: 'Fuel, chemical feedstock', usesCN: '燃料、化工原料', description: 'Ethane, second simplest alkane.', descriptionCN: '乙烷，第二简单的烷烃。' },
        'C3H8': { formula: 'C3H8', nameEN: 'Propane', nameCN: '丙烷', classification: 'Organic (Alkane)', classificationCN: '有机物（烷烃）', molecularMass: 44.097, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable', hazardsCN: '易燃', uses: 'BBQ fuel, heating', usesCN: '烧烤燃料、取暖', description: 'Propane, BBQ gas.', descriptionCN: '丙烷，烧烤气体。' },
        'C4H10': { formula: 'C4H10', nameEN: 'Butane', nameCN: '丁烷', classification: 'Organic (Alkane)', classificationCN: '有机物（烷烃）', molecularMass: 58.123, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable', hazardsCN: '易燃', uses: 'Lighter fuel, aerosol propellant', usesCN: '打火机燃料、气雾剂推进剂', description: 'Butane, lighter fuel.', descriptionCN: '丁烷，打火机燃料。' },
        'C2H4': { formula: 'C2H4', nameEN: 'Ethylene', nameCN: '乙烯', classification: 'Organic (Alkene)', classificationCN: '有机物（烯烃）', molecularMass: 28.054, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable', hazardsCN: '易燃', uses: 'Ripening hormone, polymer production', usesCN: '催熟剂、聚合物生产', description: 'Ethylene, fruit ripening hormone.', descriptionCN: '乙烯，果实催熟剂。' },
        'C2H2': { formula: 'C2H2', nameEN: 'Acetylene', nameCN: '乙炔', classification: 'Organic (Alkyne)', classificationCN: '有机物（炔烃）', molecularMass: 26.038, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable, explosive', hazardsCN: '易燃，爆炸性', uses: 'Welding, chemical synthesis', usesCN: '焊接、化学合成', description: 'Acetylene, oxy-acetylene welding.', descriptionCN: '乙炔，氧炔焊接。' },
        'CH3OH': { formula: 'CH3OH', nameEN: 'Methanol', nameCN: '甲醇', classification: 'Organic (Alcohol)', classificationCN: '有机物（醇）', molecularMass: 32.042, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic, flammable', hazardsCN: '有毒，易燃', uses: 'Solvent, fuel, chemical feedstock', usesCN: '溶剂、燃料、化工原料', description: 'Methanol, wood alcohol, toxic.', descriptionCN: '甲醇，木醇，有毒。' },
        'C2H5OH': { formula: 'C2H5OH', nameEN: 'Ethanol', nameCN: '乙醇', classification: 'Organic (Alcohol)', classificationCN: '有机物（醇）', molecularMass: 46.069, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Flammable', hazardsCN: '易燃', uses: 'Beverages, solvent, fuel, disinfectant', usesCN: '饮料、溶剂、燃料、消毒剂', description: 'Ethanol, drinking alcohol.', descriptionCN: '乙醇，饮用酒精。' },
        'CH3COOH': { formula: 'CH3COOH', nameEN: 'Acetic Acid', nameCN: '乙酸', classification: 'Organic (Carboxylic Acid)', classificationCN: '有机物（羧酸）', molecularMass: 60.053, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Liquid', stateCN: '液态', solubility: 'Miscible', solubilityCN: '混溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Corrosive', hazardsCN: '腐蚀性', uses: 'Vinegar, chemical synthesis', usesCN: '醋、化学合成', description: 'Acetic acid, main component of vinegar.', descriptionCN: '乙酸，醋的主要成分。' },
        'CH2O': { formula: 'CH2O', nameEN: 'Formaldehyde', nameCN: '甲醛', classification: 'Organic (Aldehyde)', classificationCN: '有机物（醛）', molecularMass: 30.026, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Gas', stateCN: '气态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Carcinogen', hazardsCN: '致癌物', uses: 'Resin production, disinfectant', usesCN: '树脂生产、消毒剂', description: 'Formaldehyde, carcinogenic gas.', descriptionCN: '甲醛，致癌气体。' },
        'C6H6': { formula: 'C6H6', nameEN: 'Benzene', nameCN: '苯', classification: 'Organic (Aromatic)', classificationCN: '有机物（芳香族）', molecularMass: 78.114, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Liquid', stateCN: '液态', solubility: 'Insoluble', solubilityCN: '不溶', color: 'Colorless', colorCN: '无色', polarity: 'Nonpolar', polarityCN: '非极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Carcinogen', hazardsCN: '致癌物', uses: 'Chemical feedstock, solvent', usesCN: '化工原料、溶剂', description: 'Benzene, fundamental aromatic compound.', descriptionCN: '苯，基本芳香族化合物。' },
        'C6H12O6': { formula: 'C6H12O6', nameEN: 'Glucose', nameCN: '葡萄糖', classification: 'Organic (Carbohydrate)', classificationCN: '有机物（碳水化合物）', molecularMass: 180.157, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Safe', hazardsCN: '安全', uses: 'Food, energy source', usesCN: '食品、能源', description: 'Glucose, primary energy source for cells.', descriptionCN: '葡萄糖，细胞的主要能源。' },
        'C12H22O11': { formula: 'C12H22O11', nameEN: 'Sucrose', nameCN: '蔗糖', classification: 'Organic (Carbohydrate)', classificationCN: '有机物（碳水化合物）', molecularMass: 342.297, acidBase: 'Neutral', acidBaseCN: '中性', state: 'Solid', stateCN: '固态', solubility: 'Highly soluble', solubilityCN: '极易溶', color: 'White', colorCN: '白色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Safe', hazardsCN: '安全', uses: 'Food sweetener', usesCN: '食品甜味剂', description: 'Sucrose, table sugar.', descriptionCN: '蔗糖，食糖。' },
        'H2NCH2COOH': { formula: 'H2NCH2COOH', nameEN: 'Glycine', nameCN: '甘氨酸', classification: 'Organic (Amino Acid)', classificationCN: '有机物（氨基酸）', molecularMass: 75.035, acidBase: 'Amphoteric', acidBaseCN: '两性', state: 'Solid', stateCN: '固态', solubility: 'Soluble', solubilityCN: '可溶', color: 'White', colorCN: '白色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Safe', hazardsCN: '安全', uses: 'Biochemistry, food additive', usesCN: '生物化学、食品添加剂', description: 'Glycine, simplest amino acid.', descriptionCN: '甘氨酸，最简单的氨基酸。' },
        'C6H5OH': { formula: 'C6H5OH', nameEN: 'Phenol', nameCN: '苯酚', classification: 'Organic (Aromatic Alcohol)', classificationCN: '有机物（芳香醇）', molecularMass: 94.113, acidBase: 'Weak acid', acidBaseCN: '弱酸', state: 'Solid', stateCN: '固态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'White', colorCN: '白色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Corrosive, toxic', hazardsCN: '腐蚀性，有毒', uses: 'Plastics, antiseptic', usesCN: '塑料、防腐剂', description: 'Phenol, carbolic acid.', descriptionCN: '苯酚，石炭酸。' },
        'C6H5NH2': { formula: 'C6H5NH2', nameEN: 'Aniline', nameCN: '苯胺', classification: 'Organic (Aromatic Amine)', classificationCN: '有机物（芳香胺）', molecularMass: 93.128, acidBase: 'Weak base', acidBaseCN: '弱碱', state: 'Liquid', stateCN: '液态', solubility: 'Slightly soluble', solubilityCN: '微溶', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'Toxic', hazardsCN: '有毒', uses: 'Dye production', usesCN: '染料生产', description: 'Aniline, aromatic amine.', descriptionCN: '苯胺，芳香胺。' },

        // Water
        'H2O': { formula: 'H2O', nameEN: 'Water', nameCN: '水', classification: 'Oxide', classificationCN: '氧化物', molecularMass: 18.015, acidBase: 'Neutral (amphoteric)', acidBaseCN: '中性（两性）', state: 'Liquid', stateCN: '液态', solubility: 'N/A', solubilityCN: '不适用', color: 'Colorless', colorCN: '无色', polarity: 'Polar', polarityCN: '极性', bondType: 'Covalent', bondTypeCN: '共价键', hazards: 'None', hazardsCN: '无', uses: 'Universal solvent, essential for life', usesCN: '万能溶剂、生命必需', description: 'Water, universal solvent.', descriptionCN: '水，万能溶剂。' },
    };

    // ==========================================
    // Merge Function
    // ==========================================
    function mergeToMainDB() {
        if (typeof CompoundsDB === 'undefined') return 0;

        let count = 0;
        for (const [key, value] of Object.entries(ADDITIONAL_COMPOUNDS)) {
            if (!CompoundsDB[key]) {
                CompoundsDB[key] = value;
                count++;
            }
        }

        // Generate salts from METALS x ANIONS
        for (const metal of METALS) {
            for (const anion of ANIONS) {
                // Skip hydroxides (handled separately)
                if (anion.symbol === 'OH') continue;

                // Calculate formula
                const mCharge = Math.abs(metal.charge);
                const aCharge = Math.abs(anion.charge);
                const lcm = (mCharge * aCharge) / gcd(mCharge, aCharge);
                const mCount = lcm / mCharge;
                const aCount = lcm / aCharge;

                let formula;
                if (mCount === 1 && aCount === 1) {
                    formula = metal.symbol + anion.symbol;
                } else if (mCount === 1) {
                    formula = metal.symbol + anion.symbol + (aCount > 1 ? aCount : '');
                } else if (aCount === 1) {
                    formula = (mCount > 1 ? mCount : '') + metal.symbol + anion.symbol;
                } else {
                    // Need parentheses for complex anions
                    if (anion.symbol.length > 1) {
                        formula = (mCount > 1 ? mCount : '') + metal.symbol + '(' + anion.symbol + ')' + (aCount > 1 ? aCount : '');
                    } else {
                        formula = (mCount > 1 ? mCount : '') + metal.symbol + anion.symbol + (aCount > 1 ? aCount : '');
                    }
                }

                if (!CompoundsDB[formula]) {
                    const mass = metal.mass * mCount + anion.mass * aCount;
                    CompoundsDB[formula] = {
                        formula: formula,
                        nameEN: `${metal.nameEN} ${anion.nameEN}`,
                        nameCN: `${metal.nameCN}${anion.nameCN}`,
                        classification: 'Salt',
                        classificationCN: '盐',
                        molecularMass: Math.round(mass * 1000) / 1000,
                        acidBase: 'Neutral salt',
                        acidBaseCN: '中性盐',
                        state: 'Solid',
                        stateCN: '固态',
                        solubility: 'Soluble',
                        solubilityCN: '可溶',
                        color: 'White',
                        colorCN: '白色',
                        polarity: 'Ionic',
                        polarityCN: '离子键',
                        bondType: 'Ionic',
                        bondTypeCN: '离子键',
                        hazards: 'Low hazard',
                        hazardsCN: '低危害',
                        uses: 'Laboratory reagent',
                        usesCN: '实验室试剂',
                        description: `${metal.nameEN} ${anion.nameEN.toLowerCase()}.`,
                        descriptionCN: `${metal.nameCN}${anion.nameCN}。`,
                    };
                    count++;
                }
            }
        }

        // Generate oxides
        for (const metal of METALS) {
            if (!CompoundsDB[metal.oxide]) {
                const isBasic = ['alkali-metal', 'alkaline-earth'].includes(metal.category);
                const mass = metal.symbol === 'Al' ? 101.96 :
                    metal.symbol === 'Fe' ? 159.69 :
                    metal.mass * 2 + 16; // Simplified
                CompoundsDB[metal.oxide] = {
                    formula: metal.oxide,
                    nameEN: `${metal.nameEN} Oxide`,
                    nameCN: `${metal.nameCN}氧化物`,
                    classification: 'Oxide',
                    classificationCN: '氧化物',
                    molecularMass: mass,
                    acidBase: isBasic ? 'Basic oxide' : 'Amphoteric oxide',
                    acidBaseCN: isBasic ? '碱性氧化物' : '两性氧化物',
                    state: 'Solid',
                    stateCN: '固态',
                    solubility: isBasic ? 'Reacts with water' : 'Insoluble',
                    solubilityCN: isBasic ? '与水反应' : '不溶',
                    color: 'White',
                    colorCN: '白色',
                    polarity: 'Ionic',
                    polarityCN: '离子键',
                    bondType: 'Ionic',
                    bondTypeCN: '离子键',
                    hazards: isBasic ? 'Corrosive' : 'Low hazard',
                    hazardsCN: isBasic ? '腐蚀性' : '低危害',
                    uses: 'Industrial chemical',
                    usesCN: '工业化学品',
                    description: `${metal.nameEN} oxide.`,
                    descriptionCN: `${metal.nameCN}氧化物。`,
                };
                count++;
            }
        }

        // Generate hydroxides
        for (const metal of METALS) {
            if (!CompoundsDB[metal.hydroxide]) {
                const mass = metal.mass + 17.008; // Metal + OH
                CompoundsDB[metal.hydroxide] = {
                    formula: metal.hydroxide,
                    nameEN: `${metal.nameEN} Hydroxide`,
                    nameCN: `${metal.nameCN}氢氧化物`,
                    classification: 'Base',
                    classificationCN: '碱',
                    molecularMass: Math.round(mass * 1000) / 1000,
                    acidBase: 'Base',
                    acidBaseCN: '碱',
                    state: 'Solid',
                    stateCN: '固态',
                    solubility: 'Slightly soluble',
                    solubilityCN: '微溶',
                    color: 'White',
                    colorCN: '白色',
                    polarity: 'Ionic',
                    polarityCN: '离子键',
                    bondType: 'Ionic',
                    bondTypeCN: '离子键',
                    hazards: 'Corrosive',
                    hazardsCN: '腐蚀性',
                    uses: 'Industrial chemical',
                    usesCN: '工业化学品',
                    description: `${metal.nameEN} hydroxide.`,
                    descriptionCN: `${metal.nameCN}氢氧化物。`,
                };
                count++;
            }
        }

        // Rebuild search index
        if (typeof CompoundSearchIndex !== 'undefined') {
            CompoundSearchIndex.length = 0;
            Object.keys(CompoundsDB).forEach(key => {
                const c = CompoundsDB[key];
                CompoundSearchIndex.push({
                    formula: key,
                    type: 'compound',
                    display: `${key} - ${c.nameEN}`,
                    data: c
                });
            });
        }

        return count;
    }

    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) { [a, b] = [b, a % b]; }
        return a;
    }

    return {
        METALS,
        ANIONS,
        ADDITIONAL_COMPOUNDS,
        mergeToMainDB,
    };
})();

// Auto-merge on load
if (typeof CompoundsDB !== 'undefined') {
    setTimeout(() => {
        const count = MassiveCompoundDB.mergeToMainDB();
        console.log(`MassiveCompoundDB: Added ${count} compounds. Total: ${Object.keys(CompoundsDB).length}`);
    }, 100);
}
