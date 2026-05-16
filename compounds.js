/* ============================================
   Compound Analyzer Module
   ============================================ */

const CompoundsDB = {
    'H2SO4': {
        formula: 'H2SO4',
        nameEN: 'Sulfuric Acid',
        nameCN: '硫酸',
        classification: 'Acid',
        classificationCN: '酸',
        molecularMass: 98.079,
        acidBase: 'Strong acid',
        acidBaseCN: '强酸',
        state: 'Liquid (concentrated)',
        stateCN: '液态（浓）',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Polar',
        polarityCN: '极性',
        bondType: 'Covalent (polar)',
        bondTypeCN: '共价键（极性）',
        hazards: 'Highly corrosive, causes severe burns',
        hazardsCN: '强腐蚀性，可造成严重灼伤',
        uses: 'Fertilizer production, chemical synthesis, battery acid, petroleum refining',
        usesCN: '化肥生产、化学合成、电池酸液、石油精炼',
        description: 'Sulfuric acid is one of the most important industrial chemicals. It is a dense, oily liquid that is highly corrosive. It is a diprotic acid, meaning it can donate two hydrogen ions per molecule.',
        descriptionCN: '硫酸是最重要的工业化学品之一。它是一种稠密的油状液体，具有强腐蚀性。它是二元酸，每个分子可电离出两个氢离子。'
    },
    'NaOH': {
        formula: 'NaOH',
        nameEN: 'Sodium Hydroxide',
        nameCN: '氢氧化钠',
        classification: 'Base',
        classificationCN: '碱',
        molecularMass: 40.00,
        acidBase: 'Strong base',
        acidBaseCN: '强碱',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        color: 'White',
        colorCN: '白色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Corrosive, causes severe burns to skin and eyes',
        hazardsCN: '腐蚀性，可灼伤皮肤和眼睛',
        uses: 'Soap making, paper production, drain cleaner, chemical manufacturing',
        usesCN: '制造肥皂、造纸、下水道清洁剂、化工生产',
        description: 'Sodium hydroxide (caustic soda) is a strong base that dissociates completely in water. It is widely used in industry and is one of the most produced chemicals in the world.',
        descriptionCN: '氢氧化钠（烧碱）是一种强碱，在水中完全电离。广泛用于工业，是世界上产量最大的化学品之一。'
    },
    'NH3': {
        formula: 'NH3',
        nameEN: 'Ammonia',
        nameCN: '氨',
        classification: 'Hydride / Weak base',
        classificationCN: '氢化物 / 弱碱',
        molecularMass: 17.031,
        acidBase: 'Weak base',
        acidBaseCN: '弱碱',
        state: 'Gas',
        stateCN: '气态',
        solubility: 'Highly soluble in water',
        solubilityCN: '极易溶于水',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Polar',
        polarityCN: '极性',
        bondType: 'Covalent (polar)',
        bondTypeCN: '共价键（极性）',
        hazards: 'Toxic, irritant, corrosive at high concentrations',
        hazardsCN: '有毒，刺激性，高浓度时有腐蚀性',
        uses: 'Fertilizer production, cleaning agent, refrigerant, chemical synthesis',
        usesCN: '化肥生产、清洁剂、制冷剂、化学合成',
        description: 'Ammonia is a pungent gas with a trigonal pyramidal molecular geometry. It has a lone pair of electrons on the nitrogen atom, making it a good ligand and a weak base.',
        descriptionCN: '氨是一种具有三角锥形分子几何结构的刺激性气体。氮原子上有一对孤对电子，使其成为良好的配体和弱碱。'
    },
    'CuSO4': {
        formula: 'CuSO4',
        nameEN: 'Copper Sulfate',
        nameCN: '硫酸铜',
        classification: 'Salt',
        classificationCN: '盐',
        molecularMass: 159.609,
        acidBase: 'Neutral salt (slightly acidic in solution)',
        acidBaseCN: '中性盐（溶液略呈酸性）',
        state: 'Solid (pentahydrate is blue crystal)',
        stateCN: '固态（五水合物为蓝色晶体）',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        color: 'Blue (pentahydrate), White (anhydrous)',
        colorCN: '蓝色（五水合物），白色（无水）',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Harmful if ingested, irritant',
        hazardsCN: '吞食有害，刺激性',
        uses: 'Agricultural fungicide, electroplating, educational demonstrations',
        usesCN: '农业杀菌剂、电镀、教学演示',
        description: 'Copper sulfate pentahydrate (CuSO4·5H2O) is a blue crystalline solid known as blue vitriol. It is used in agriculture as a fungicide and in chemistry education for various demonstrations.',
        descriptionCN: '五水硫酸铜（CuSO4·5H2O）是一种蓝色晶体固体，称为蓝矾。在农业中用作杀菌剂，在化学教学中用于各种演示。'
    },
    'KMnO4': {
        formula: 'KMnO4',
        nameEN: 'Potassium Permanganate',
        nameCN: '高锰酸钾',
        classification: 'Salt (oxidizing agent)',
        classificationCN: '盐（氧化剂）',
        molecularMass: 158.034,
        acidBase: 'Neutral salt',
        acidBaseCN: '中性盐',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Soluble (7.6 g/100mL)',
        solubilityCN: '可溶（7.6 g/100mL）',
        color: 'Purple / Dark purple crystals',
        colorCN: '紫色 / 暗紫色晶体',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic with covalent permanganate ion',
        bondTypeCN: '离子键，高锰酸根内含共价键',
        hazards: 'Strong oxidizer, corrosive, causes burns',
        hazardsCN: '强氧化剂，腐蚀性，可造成灼伤',
        uses: 'Water purification, antiseptic, oxidizing agent in chemistry',
        usesCN: '水消毒、防腐剂、化学氧化剂',
        description: 'Potassium permanganate is a strong oxidizing agent with a distinctive purple color. It is widely used in water treatment and as an antiseptic. In acidic solution, it is reduced to nearly colorless Mn²⁺ ions.',
        descriptionCN: '高锰酸钾是一种强氧化剂，具有独特的紫色。广泛用于水处理和作为防腐剂。在酸性溶液中被还原为几乎无色的Mn²⁺离子。'
    },
    'CaCO3': {
        formula: 'CaCO3',
        nameEN: 'Calcium Carbonate',
        nameCN: '碳酸钙',
        classification: 'Salt',
        classificationCN: '盐',
        molecularMass: 100.087,
        acidBase: 'Basic salt',
        acidBaseCN: '碱性盐',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Slightly soluble (0.0013 g/100mL)',
        solubilityCN: '微溶（0.0013 g/100mL）',
        color: 'White',
        colorCN: '白色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Generally safe, may cause irritation to eyes',
        hazardsCN: '一般安全，可能刺激眼睛',
        uses: 'Construction material (marble, limestone), antacid, chalk, cement',
        usesCN: '建筑材料（大理石、石灰石）、抗酸剂、粉笔、水泥',
        description: 'Calcium carbonate is the main component of limestone, marble, and chalk. It is used extensively in construction and as an antacid. It reacts with acids to produce CO2 gas.',
        descriptionCN: '碳酸钙是石灰石、大理石和�ite的主要成分。广泛用于建筑和作为抗酸剂。与酸反应产生CO2气体。'
    },
    'HCl': {
        formula: 'HCl',
        nameEN: 'Hydrochloric Acid',
        nameCN: '盐酸',
        classification: 'Acid',
        classificationCN: '酸',
        molecularMass: 36.461,
        acidBase: 'Strong acid',
        acidBaseCN: '强酸',
        state: 'Gas (pure), Solution (aqueous)',
        stateCN: '气态（纯），溶液（水溶液）',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Polar',
        polarityCN: '极性',
        bondType: 'Covalent (polar)',
        bondTypeCN: '共价键（极性）',
        hazards: 'Corrosive, causes burns, toxic fumes',
        hazardsCN: '腐蚀性，可灼伤，有毒气体',
        uses: 'Steel pickling, food processing, pH control, chemical synthesis',
        usesCN: '钢铁酸洗、食品加工、pH调节、化学合成',
        description: 'Hydrochloric acid is a strong acid that is the aqueous solution of hydrogen chloride gas. It is found naturally in gastric acid. It is one of the most commonly used acids in laboratories.',
        descriptionCN: '盐酸是氯化氢气体的水溶液，是一种强酸。天然存在于胃酸中。是实验室中最常用的酸之一。'
    },
    'C2H5OH': {
        formula: 'C2H5OH',
        nameEN: 'Ethanol',
        nameCN: '乙醇',
        classification: 'Organic (Alcohol)',
        classificationCN: '有机物（醇）',
        molecularMass: 46.069,
        acidBase: 'Neutral (very weak acid)',
        acidBaseCN: '中性（极弱酸）',
        state: 'Liquid',
        stateCN: '液态',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Polar',
        polarityCN: '极性',
        bondType: 'Covalent (polar)',
        bondTypeCN: '共价键（极性）',
        hazards: 'Flammable, intoxicant',
        hazardsCN: '易燃，有麻醉性',
        uses: 'Fuel, solvent, alcoholic beverages, disinfectant, chemical feedstock',
        usesCN: '燃料、溶剂、酒精饮料、消毒剂、化工原料',
        description: 'Ethanol is the type of alcohol found in alcoholic beverages. It is a versatile solvent and fuel. It is produced by fermentation of sugars by yeast.',
        descriptionCN: '乙醇是酒精饮料中的酒精类型。是一种多功能溶剂和燃料。通过酵母发酵糖类生产。'
    },
    'NaCl': {
        formula: 'NaCl',
        nameEN: 'Sodium Chloride',
        nameCN: '氯化钠',
        classification: 'Salt',
        classificationCN: '盐',
        molecularMass: 58.443,
        acidBase: 'Neutral salt',
        acidBaseCN: '中性盐',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Soluble (36 g/100mL)',
        solubilityCN: '可溶（36 g/100mL）',
        color: 'White',
        colorCN: '白色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Safe in normal amounts, excessive intake harmful',
        hazardsCN: '正常用量安全，过量摄入有害',
        uses: 'Food seasoning, preservation, de-icing roads, chemical feedstock',
        usesCN: '调味品、防腐、道路除冰、化工原料',
        description: 'Sodium chloride (table salt) is essential for life. It is the most common seasoning and preservative. It dissociates into Na+ and Cl- ions in water.',
        descriptionCN: '氯化钠（食盐）是生命必需品。是最常见的调味品和防腐剂。在水中解离为Na+和Cl-离子。'
    },
    'Fe2O3': {
        formula: 'Fe2O3',
        nameEN: 'Iron(III) Oxide',
        nameCN: '氧化铁(III)',
        classification: 'Oxide',
        classificationCN: '氧化物',
        molecularMass: 159.687,
        acidBase: 'Amphoteric oxide',
        acidBaseCN: '两性氧化物',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        color: 'Red-brown (rust)',
        colorCN: '红棕色（铁锈）',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'May cause irritation, generally low toxicity',
        hazardsCN: '可能刺激，一般低毒',
        uses: 'Pigment (rust color), magnetic storage, polishing compound',
        usesCN: '颜料（铁锈色）、磁性存储、抛光剂',
        description: 'Iron(III) oxide is the main component of rust. It is a reddish-brown powder used as a pigment. In nature, it occurs as the mineral hematite.',
        descriptionCN: '氧化铁(III)是铁锈的主要成分。是一种红棕色粉末，用作颜料。在自然界中以赤铁矿形式存在。'
    },
    'AgNO3': {
        formula: 'AgNO3',
        nameEN: 'Silver Nitrate',
        nameCN: '硝酸银',
        classification: 'Salt',
        classificationCN: '盐',
        molecularMass: 169.874,
        acidBase: 'Neutral salt',
        acidBaseCN: '中性盐',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        color: 'White (turns dark in light)',
        colorCN: '白色（遇光变暗）',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Corrosive, causes burns, toxic',
        hazardsCN: '腐蚀性，可灼伤，有毒',
        uses: 'Photography, silver plating, antiseptic, chemical reagent',
        usesCN: '摄影、镀银、防腐剂、化学试剂',
        description: 'Silver nitrate is a versatile silver compound used in photography and as a laboratory reagent. It darkens on exposure to light and is used to test for halide ions.',
        descriptionCN: '硝酸银是一种多用途银化合物，用于摄影和实验室试剂。遇光变暗，用于检验卤素离子。'
    },
    'H2O': {
        formula: 'H2O',
        nameEN: 'Water',
        nameCN: '水',
        classification: 'Oxide / Solvent',
        classificationCN: '氧化物 / 溶剂',
        molecularMass: 18.015,
        acidBase: 'Neutral (amphoteric)',
        acidBaseCN: '中性（两性）',
        state: 'Liquid',
        stateCN: '液态',
        solubility: 'N/A (is the universal solvent)',
        solubilityCN: '不适用（万能溶剂）',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Polar',
        polarityCN: '极性',
        bondType: 'Covalent (polar)',
        bondTypeCN: '共价键（极性）',
        hazards: 'None',
        hazardsCN: '无',
        uses: 'Universal solvent, drinking, agriculture, industry, power generation',
        usesCN: '万能溶剂、饮用、农业、工业、发电',
        description: 'Water (H2O) is the most essential compound for life on Earth. It has a bent molecular geometry with a bond angle of 104.5°. It is an excellent solvent due to its polarity.',
        descriptionCN: '水（H2O）是地球上生命最重要的化合物。具有弯曲的分子几何结构，键角为104.5°。由于其极性，是一种优良的溶剂。'
    },
    'CO2': {
        formula: 'CO2',
        nameEN: 'Carbon Dioxide',
        nameCN: '二氧化碳',
        classification: 'Oxide',
        classificationCN: '氧化物',
        molecularMass: 44.01,
        acidBase: 'Acidic oxide',
        acidBaseCN: '酸性氧化物',
        state: 'Gas',
        stateCN: '气态',
        solubility: 'Slightly soluble (1.45 g/L at 25°C)',
        solubilityCN: '微溶（25°C时1.45 g/L）',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Nonpolar (linear symmetry)',
        polarityCN: '非极性（线性对称）',
        bondType: 'Covalent (polar bonds, nonpolar molecule)',
        bondTypeCN: '共价键（极性键，非极性分子）',
        hazards: 'Asphyxiant at high concentrations, greenhouse gas',
        hazardsCN: '高浓度时窒息，温室气体',
        uses: 'Carbonated drinks, fire extinguisher, dry ice, photosynthesis',
        usesCN: '碳酸饮料、灭火器、干冰、光合作用',
        description: 'Carbon dioxide is a linear, nonpolar molecule despite having polar C=O bonds. It is a greenhouse gas and is essential for photosynthesis. Solid CO2 (dry ice) sublimes at -78.5°C.',
        descriptionCN: '二氧化碳是线性非极性分子，尽管含有极性C=O键。它是温室气体，对光合作用至关重要。固体CO2（干冰）在-78.5°C升华。'
    },
    'CH4': {
        formula: 'CH4',
        nameEN: 'Methane',
        nameCN: '甲烷',
        classification: 'Organic (Alkane)',
        classificationCN: '有机物（烷烃）',
        molecularMass: 16.043,
        acidBase: 'Neutral',
        acidBaseCN: '中性',
        state: 'Gas',
        stateCN: '气态',
        solubility: 'Slightly soluble in water',
        solubilityCN: '微溶于水',
        color: 'Colorless',
        colorCN: '无色',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        bondType: 'Covalent (nonpolar)',
        bondTypeCN: '共价键（非极性）',
        hazards: 'Flammable, explosive, asphyxiant, greenhouse gas',
        hazardsCN: '易燃、爆炸性、窒息、温室气体',
        uses: 'Natural gas fuel, chemical feedstock, hydrogen production',
        usesCN: '天然气燃料、化工原料、制氢',
        description: 'Methane is the simplest alkane and the main component of natural gas. It has a tetrahedral geometry with 109.5° bond angles. It is a potent greenhouse gas.',
        descriptionCN: '甲烷是最简单的烷烃，是天然气的主要成分。具有四面体几何结构，键角为109.5°。是一种强效温室气体。'
    },
    'H2O2': {
        formula: 'H2O2',
        nameEN: 'Hydrogen Peroxide',
        nameCN: '过氧化氢',
        classification: 'Peroxide',
        classificationCN: '过氧化物',
        molecularMass: 34.015,
        acidBase: 'Weak acid',
        acidBaseCN: '弱酸',
        state: 'Liquid',
        stateCN: '液态',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        color: 'Colorless (pale blue in pure form)',
        colorCN: '无色（纯品为淡蓝色）',
        polarity: 'Polar',
        polarityCN: '极性',
        bondType: 'Covalent (polar)',
        bondTypeCN: '共价键（极性）',
        hazards: 'Oxidizer, corrosive at high concentrations, decomposes exothermically',
        hazardsCN: '氧化剂，高浓度时腐蚀性，分解放热',
        uses: 'Bleaching agent, disinfectant, rocket propellant, antiseptic',
        usesCN: '漂白剂、消毒剂、火箭推进剂、防腐剂',
        description: 'Hydrogen peroxide (H2O2) has an open book molecular structure. It decomposes into water and oxygen, especially when catalyzed. The 3% solution is commonly used as a disinfectant.',
        descriptionCN: '过氧化氢（H2O2）具有开放式书本状分子结构。分解为水和氧气，尤其在催化下。3%溶液常用作消毒剂。'
    },
    'Na2CO3': {
        formula: 'Na2CO3',
        nameEN: 'Sodium Carbonate',
        nameCN: '碳酸钠',
        classification: 'Salt',
        classificationCN: '盐',
        molecularMass: 105.989,
        acidBase: 'Basic salt',
        acidBaseCN: '碱性盐',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Soluble (22 g/100mL)',
        solubilityCN: '可溶（22 g/100mL）',
        color: 'White',
        colorCN: '白色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Irritant to eyes and skin',
        hazardsCN: '刺激眼睛和皮肤',
        uses: 'Glass making, soap, detergents, water treatment',
        usesCN: '玻璃制造、肥皂、洗涤剂、水处理',
        description: 'Sodium carbonate (washing soda) is an alkaline salt used extensively in industry. Its aqueous solution is basic due to hydrolysis of the carbonate ion.',
        descriptionCN: '碳酸钠（洗涤碱）是一种广泛用于工业的碱性盐。由于碳酸根离子的水解，其水溶液呈碱性。'
    },
    'K2Cr2O7': {
        formula: 'K2Cr2O7',
        nameEN: 'Potassium Dichromate',
        nameCN: '重铬酸钾',
        classification: 'Salt (oxidizing agent)',
        classificationCN: '盐（氧化剂）',
        molecularMass: 294.185,
        acidBase: 'Neutral salt',
        acidBaseCN: '中性盐',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        color: 'Orange-red',
        colorCN: '橙红色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Highly toxic, carcinogenic, strong oxidizer',
        hazardsCN: '剧毒，致癌，强氧化剂',
        uses: 'Oxidizing agent in chemistry, leather tanning, photography',
        usesCN: '化学氧化剂、皮革鞣制、摄影',
        description: 'Potassium dichromate is a powerful oxidizing agent with a distinctive orange-red color. In acidic solution, it is reduced from Cr(VI) (orange) to Cr(III) (green).',
        descriptionCN: '重铬酸钾是一种强氧化剂，具有独特的橙红色。在酸性溶液中，Cr(VI)（橙色）被还原为Cr(III)（绿色）。'
    },
    'MgO': {
        formula: 'MgO',
        nameEN: 'Magnesium Oxide',
        nameCN: '氧化镁',
        classification: 'Oxide',
        classificationCN: '氧化物',
        molecularMass: 40.304,
        acidBase: 'Basic oxide',
        acidBaseCN: '碱性氧化物',
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
        hazards: 'Irritant to eyes and respiratory tract',
        hazardsCN: '刺激眼睛和呼吸道',
        uses: 'Refractory material, antacid, fireproofing',
        usesCN: '耐火材料、抗酸剂、防火',
        description: 'Magnesium oxide is a white, highly refractory solid with a very high melting point (2852°C). It is produced by burning magnesium in air.',
        descriptionCN: '氧化镁是一种白色高耐火性固体，熔点极高（2852°C）。通过在空气中燃烧镁制取。'
    },
    'ZnO': {
        formula: 'ZnO',
        nameEN: 'Zinc Oxide',
        nameCN: '氧化锌',
        classification: 'Oxide (amphoteric)',
        classificationCN: '氧化物（两性）',
        molecularMass: 81.38,
        acidBase: 'Amphoteric oxide',
        acidBaseCN: '两性氧化物',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        color: 'White',
        colorCN: '白色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Generally safe, may cause respiratory irritation',
        hazardsCN: '一般安全，可能刺激呼吸道',
        uses: 'Sunscreen, rubber vulcanization, cosmetics, ointments',
        usesCN: '防晒霜、橡胶硫化、化妆品、药膏',
        description: 'Zinc oxide is an amphoteric oxide that reacts with both acids and bases. It is widely used in sunscreen for its UV-blocking properties.',
        descriptionCN: '氧化锌是一种两性氧化物，既能与酸反应又能与碱反应。因其阻挡紫外线的特性而广泛用于防晒霜。'
    },
    'Al2O3': {
        formula: 'Al2O3',
        nameEN: 'Aluminum Oxide',
        nameCN: '氧化铝',
        classification: 'Oxide (amphoteric)',
        classificationCN: '氧化物（两性）',
        molecularMass: 101.961,
        acidBase: 'Amphoteric oxide',
        acidBaseCN: '两性氧化物',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        color: 'White',
        colorCN: '白色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Generally safe',
        hazardsCN: '一般安全',
        uses: 'Abrasive, refractory material, catalyst support, aluminum production',
        usesCN: '磨料、耐火材料、催化剂载体、炼铝',
        description: 'Aluminum oxide (alumina) is extremely hard (9 on Mohs scale). It forms a protective layer on aluminum surfaces and is used as an abrasive (sapphire and ruby are forms of Al2O3).',
        descriptionCN: '氧化铝（矾土）硬度极高（莫氏硬度9）。在铝表面形成保护层，用作磨料（蓝宝石和红宝石是Al2O3的形式）。'
    },
    'MnO2': {
        formula: 'MnO2',
        nameEN: 'Manganese Dioxide',
        nameCN: '二氧化锰',
        classification: 'Oxide',
        classificationCN: '氧化物',
        molecularMass: 86.937,
        acidBase: 'Amphoteric oxide',
        acidBaseCN: '两性氧化物',
        state: 'Solid',
        stateCN: '固态',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        color: 'Black',
        colorCN: '黑色',
        polarity: 'Ionic',
        polarityCN: '离子键',
        bondType: 'Ionic',
        bondTypeCN: '离子键',
        hazards: 'Harmful if inhaled',
        hazardsCN: '吸入有害',
        uses: 'Catalyst (H2O2 decomposition), dry cell batteries, water treatment',
        usesCN: '催化剂（H2O2分解）、干电池、水处理',
        description: 'Manganese dioxide is a black solid used as a catalyst for decomposing hydrogen peroxide. It is also used in dry cell batteries as a depolarizer.',
        descriptionCN: '二氧化锰是一种黑色固体，用作分解过氧化氢的催化剂。也用作干电池的去极化剂。'
    }
};

// Compound search index
const CompoundSearchIndex = [];
Object.keys(CompoundsDB).forEach(key => {
    const c = CompoundsDB[key];
    CompoundSearchIndex.push({
        formula: key,
        type: 'compound',
        display: `${key} - ${c.nameEN}`,
        data: c
    });
});

// ==========================================
// PubChem API Integration
// ==========================================
const PubChemAPI = {
    BASE: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug',

    async searchByName(name) {
        const encoded = encodeURIComponent(name);
        // Try name → CID
        let cid = null;
        try {
            const res = await fetch(`${this.BASE}/compound/name/${encoded}/cids/JSON`);
            if (res.ok) {
                const data = await res.json();
                cid = data?.IdentifierList?.CID?.[0];
            }
        } catch (e) { /* ignore */ }

        // If name search failed, try as formula
        if (!cid) {
            try {
                const res = await fetch(`${this.BASE}/compound/formula/${encoded}/cids/JSON`);
                if (res.ok) {
                    const data = await res.json();
                    cid = data?.IdentifierList?.CID?.[0];
                }
            } catch (e) { /* ignore */ }
        }

        return cid;
    },

    async getProperties(cid) {
        const props = [
            'MolecularFormula', 'MolecularWeight', 'IUPACName',
            'CanonicalSMILES', 'ExactMass', 'HBondDonorCount',
            'HBondAcceptorCount', 'TPSA', 'Complexity', 'Charge',
            'XLogP', 'InChIKey'
        ].join(',');

        try {
            const res = await fetch(`${this.BASE}/compound/cid/${cid}/property/${props}/JSON`);
            if (res.ok) {
                const data = await res.json();
                return data?.PropertyTable?.Properties?.[0] || null;
            }
        } catch (e) { /* ignore */ }
        return null;
    },

    async getDescription(cid) {
        try {
            const res = await fetch(`${this.BASE}/compound/cid/${cid}/description/JSON`);
            if (res.ok) {
                const data = await res.json();
                const descs = data?.InformationList?.Information || [];
                // Find the longest description
                let desc = '';
                for (const info of descs) {
                    if (info.Description && info.Description.length > desc.length) {
                        desc = info.Description;
                    }
                }
                return desc || null;
            }
        } catch (e) { /* ignore */ }
        return null;
    },

    async getSynonyms(cid) {
        try {
            const res = await fetch(`${this.BASE}/compound/cid/${cid}/synonyms/JSON`);
            if (res.ok) {
                const data = await res.json();
                const synonyms = data?.InformationList?.Information?.[0]?.Synonym || [];
                return synonyms.slice(0, 8);
            }
        } catch (e) { /* ignore */ }
        return [];
    },

    getStructureURL(cid) {
        return `${this.BASE}/compound/cid/${cid}/PNG`;
    },

    getPubChemURL(cid) {
        return `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`;
    },

    async fetchFull(query) {
        const cid = await this.searchByName(query);
        if (!cid) return null;

        const [props, description, synonyms] = await Promise.all([
            this.getProperties(cid),
            this.getDescription(cid),
            this.getSynonyms(cid)
        ]);

        if (!props) return null;

        return {
            cid,
            formula: props.MolecularFormula || query,
            molecularWeight: props.MolecularWeight || 0,
            iupacName: props.IUPACName || '',
            smiles: props.CanonicalSMILES || '',
            exactMass: props.ExactMass || 0,
            hBondDonors: props.HBondDonorCount || 0,
            hBondAcceptors: props.HBondAcceptorCount || 0,
            tpsa: props.TPSA || 0,
            complexity: props.Complexity || 0,
            charge: props.Charge || 0,
            xlogp: props.XLogP || 0,
            inchiKey: props.InChIKey || '',
            description: description || '',
            synonyms: synonyms || [],
            structureURL: this.getStructureURL(cid),
            pubchemURL: this.getPubChemURL(cid)
        };
    }
};

// Cache for PubChem results to avoid repeated API calls
const PubChemCache = {};

// Render PubChem compound result
function renderPubChemResult(data) {
    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    let html = '';

    // Source badge
    html += `<div class="result-card">`;
    html += `<div class="source-badge source-pubchem">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>
            <path d="M4 7h6M7 4v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        PubChem CID: ${data.cid}
    </div>`;

    // Title
    const displayName = data.iupacName || data.formula;
    html += `<h3>${formatFormula(data.formula)} — ${displayName}</h3>`;

    // 2D Structure image
    html += `<div class="pubchem-structure-img">
        <img src="${data.structureURL}" alt="${data.formula} structure"
             onerror="this.parentElement.innerHTML='<span style=\\'color:var(--text-tertiary); font-size:0.85rem;\\'>${isCN ? '结构图加载失败' : 'Structure image unavailable'}</span>'"
             loading="lazy">
    </div>`;

    // Properties grid
    html += `<div class="info-grid">`;
    html += makeInfoItem(isCN ? '分子式' : 'Molecular Formula', formatFormula(data.formula));
    html += makeInfoItem(isCN ? '分子量' : 'Molecular Weight', data.molecularWeight.toFixed(2) + ' g/mol');
    if (data.iupacName) {
        html += makeInfoItem(isCN ? 'IUPAC名' : 'IUPAC Name', data.iupacName);
    }
    if (data.exactMass) {
        html += makeInfoItem(isCN ? '精确质量' : 'Exact Mass', data.exactMass.toFixed(4) + ' u');
    }
    if (data.smiles) {
        html += makeInfoItem('SMILES', `<span style="font-family: 'SF Mono', monospace; font-size: 0.8rem; word-break: break-all;">${data.smiles}</span>`);
    }
    if (data.hBondDonors !== undefined) {
        html += makeInfoItem(isCN ? '氢键供体' : 'H-Bond Donors', data.hBondDonors);
    }
    if (data.hBondAcceptors !== undefined) {
        html += makeInfoItem(isCN ? '氢键受体' : 'H-Bond Acceptors', data.hBondAcceptors);
    }
    if (data.tpsa) {
        html += makeInfoItem('TPSA', data.tpsa.toFixed(1) + ' Å²');
    }
    if (data.complexity) {
        html += makeInfoItem(isCN ? '复杂度' : 'Complexity', data.complexity.toFixed(0));
    }
    if (data.xlogp !== undefined && data.xlogp !== 0) {
        html += makeInfoItem('XLogP', data.xlogp.toFixed(1));
    }
    html += `</div>`;

    // Tags
    html += `<div class="tag-row">`;
    html += `<span class="tag tag-neutral">${isCN ? '在线数据' : 'Online Data'}</span>`;
    if (data.charge !== 0) {
        html += `<span class="tag tag-base">${isCN ? '电荷' : 'Charge'}: ${data.charge > 0 ? '+' : ''}${data.charge}</span>`;
    }
    html += `</div>`;

    // PubChem link
    html += `<div style="margin-top: 12px;">`;
    html += `<a href="${data.pubchemURL}" target="_blank" rel="noopener" class="pubchem-link">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M5 1H2C1.45 1 1 1.45 1 2v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M7 1h4v4M11 1L5.5 6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ${isCN ? '在 PubChem 中查看' : 'View on PubChem'}
    </a>`;
    html += `</div>`;
    html += `</div>`;

    // Description card
    if (data.description) {
        html += `<div class="result-card" style="animation-delay: 0.1s">`;
        html += `<h3>${isCN ? '描述' : 'Description'}</h3>`;
        html += `<div class="desc-block">${data.description}</div>`;
        html += `</div>`;
    }

    // Synonyms card
    if (data.synonyms && data.synonyms.length > 0) {
        html += `<div class="result-card" style="animation-delay: 0.2s">`;
        html += `<h3>${isCN ? '别名' : 'Synonyms'}</h3>`;
        html += `<div class="tag-row">`;
        data.synonyms.forEach(syn => {
            html += `<span class="tag tag-neutral">${syn}</span>`;
        });
        html += `</div>`;
        html += `</div>`;
    }

    return html;
}

// Render compound result
function renderCompoundResult(compoundKey) {
    const compound = CompoundsDB[compoundKey];
    if (!compound) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';
        return `<div class="error-message">${isCN ? '未找到该化合物。请尝试下面的示例之一。' : 'Compound not found. Try one of the examples below.'}</div>`;
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    let html = '';

    // Main info card
    html += `<div class="result-card">`;
    html += `<h3>${formatFormula(compound.formula)} — ${isCN ? compound.nameCN : compound.nameEN}</h3>`;
    html += `<div class="info-grid">`;
    html += makeInfoItem(isCN ? '英文名' : 'English Name', compound.nameEN);
    html += makeInfoItem(isCN ? '中文名' : 'Chinese Name', compound.nameCN);
    html += makeInfoItem(isCN ? '分类' : 'Classification', isCN ? compound.classificationCN : compound.classification);
    html += makeInfoItem(isCN ? '分子量' : 'Molecular Mass', compound.molecularMass + ' g/mol');
    html += makeInfoItem(isCN ? '酸碱性' : 'Acid/Base', isCN ? compound.acidBaseCN : compound.acidBase);
    html += makeInfoItem(isCN ? '状态' : 'State', isCN ? compound.stateCN : compound.state);
    html += makeInfoItem(isCN ? '溶解性' : 'Solubility', isCN ? compound.solubilityCN : compound.solubility);
    html += makeInfoItem(isCN ? '颜色' : 'Color', isCN ? compound.colorCN : compound.color);
    html += makeInfoItem(isCN ? '极性' : 'Polarity', isCN ? compound.polarityCN : compound.polarity);
    html += makeInfoItem(isCN ? '键型' : 'Bond Type', isCN ? compound.bondTypeCN : compound.bondType);
    html += `</div>`;

    // Tags
    html += `<div class="tag-row">`;
    if (compound.classification.includes('Acid') || compound.acidBase.includes('acid')) {
        html += `<span class="tag tag-acid">${isCN ? '酸' : 'Acid'}</span>`;
    }
    if (compound.classification.includes('Base') || compound.acidBase.includes('base')) {
        html += `<span class="tag tag-base">${isCN ? '碱' : 'Base'}</span>`;
    }
    if (compound.classification.includes('Salt')) {
        html += `<span class="tag tag-salt">${isCN ? '盐' : 'Salt'}</span>`;
    }
    if (compound.classification.includes('Oxide')) {
        html += `<span class="tag tag-oxide">${isCN ? '氧化物' : 'Oxide'}</span>`;
    }
    if (compound.classification.includes('Organic')) {
        html += `<span class="tag tag-organic">${isCN ? '有机物' : 'Organic'}</span>`;
    }
    html += `</div>`;
    html += `</div>`;

    // Hazards card
    html += `<div class="result-card" style="animation-delay: 0.1s">`;
    html += `<h3>${isCN ? '安全信息' : 'Safety Information'}</h3>`;
    html += `<div class="desc-block">`;
    html += `<strong>${isCN ? '危害' : 'Hazards'}:</strong> ${isCN ? compound.hazardsCN : compound.hazards}`;
    html += `</div>`;
    html += `<div class="tag-row">`;
    if (compound.hazards.toLowerCase().includes('corrosive') || compound.hazardsCN.includes('腐蚀')) {
        html += `<span class="tag tag-danger">${isCN ? '腐蚀性' : 'Corrosive'}</span>`;
    }
    if (compound.hazards.toLowerCase().includes('toxic') || compound.hazardsCN.includes('毒')) {
        html += `<span class="tag tag-danger">${isCN ? '有毒' : 'Toxic'}</span>`;
    }
    if (compound.hazards.toLowerCase().includes('flammable') || compound.hazardsCN.includes('易燃')) {
        html += `<span class="tag tag-danger">${isCN ? '易燃' : 'Flammable'}</span>`;
    }
    if (compound.hazards.toLowerCase().includes('safe') || compound.hazardsCN.includes('安全')) {
        html += `<span class="tag tag-safe">${isCN ? '安全' : 'Safe'}</span>`;
    }
    html += `</div>`;
    html += `</div>`;

    // Uses card
    html += `<div class="result-card" style="animation-delay: 0.2s">`;
    html += `<h3>${isCN ? '用途' : 'Uses'}</h3>`;
    html += `<div class="desc-block">${isCN ? compound.usesCN : compound.uses}</div>`;
    html += `</div>`;

    // Description card
    html += `<div class="result-card" style="animation-delay: 0.3s">`;
    html += `<h3>${isCN ? '描述' : 'Description'}</h3>`;
    html += `<div class="desc-block">${isCN ? compound.descriptionCN : compound.description}</div>`;
    html += `</div>`;

    return html;
}

// Analyze compound input (local DB only, synchronous)
function analyzeCompoundLocal(input) {
    const clean = input.trim();

    // Direct match
    if (CompoundsDB[clean]) {
        return renderCompoundResult(clean);
    }

    // Case-insensitive match
    const upper = clean.toUpperCase();
    for (const key of Object.keys(CompoundsDB)) {
        if (key.toUpperCase() === upper) {
            return renderCompoundResult(key);
        }
    }

    // Name search
    const lowerClean = clean.toLowerCase();
    for (const key of Object.keys(CompoundsDB)) {
        const c = CompoundsDB[key];
        if (c.nameEN.toLowerCase().includes(lowerClean) ||
            c.nameCN.includes(clean)) {
            return renderCompoundResult(key);
        }
    }

    return null; // Not found locally
}

// Render parser-inferred compound result
function renderParserResult(formula) {
    if (typeof ChemParser === 'undefined' || typeof ChemInference === 'undefined') return null;

    const parsed = ChemParser.parse(formula);
    if (Object.keys(parsed).length === 0) return null;

    const record = ChemParser.buildCompoundRecord(formula);
    const props = ChemInference.inferProperties(formula);
    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    let html = '';

    // Source badge
    html += `<div class="result-card">`;
    html += `<div class="source-badge source-pubchem" style="background: rgba(52, 199, 89, 0.08); border-color: rgba(52, 199, 89, 0.15); color: var(--success);">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ${isCN ? '智能解析' : 'Parser Inferred'}
    </div>`;

    html += `<h3>${formatFormula(formula)}</h3>`;

    // Composition
    html += `<div class="info-grid">`;
    html += makeInfoItem(isCN ? '分子式' : 'Molecular Formula', formatFormula(formula));
    html += makeInfoItem(isCN ? '分子量' : 'Molecular Mass', record.molecularMass.toFixed(3) + ' g/mol');
    html += makeInfoItem(isCN ? '分类' : 'Classification', record.type === 'organic' ? (isCN ? '有机物' : 'Organic') :
        record.type === 'acid' ? (isCN ? '酸' : 'Acid') :
        record.type === 'base' ? (isCN ? '碱' : 'Base') :
        record.type === 'salt' ? (isCN ? '盐' : 'Salt') :
        record.type === 'oxide' ? (isCN ? '氧化物' : 'Oxide') :
        (isCN ? '化合物' : 'Compound'));
    html += makeInfoItem(isCN ? '族' : 'Family', record.family);
    html += makeInfoItem(isCN ? '酸碱性' : 'Acid/Base', props.acidBaseCN ? (isCN ? props.acidBaseCN : props.acidBase) : (isCN ? '未知' : 'Unknown'));
    html += makeInfoItem(isCN ? '键型' : 'Bond Type', props.bondType || 'Unknown');
    html += makeInfoItem(isCN ? '极性' : 'Polarity', props.polarity || 'Unknown');
    html += makeInfoItem(isCN ? '原子数' : 'Atom Count', record.atomCount);
    html += `</div>`;

    // Element composition
    html += `<div style="margin-top: 16px;">`;
    html += `<div class="info-label" style="margin-bottom: 8px;">${isCN ? '元素组成' : 'Element Composition'}</div>`;
    html += `<div class="functional-groups">`;
    for (const comp of record.composition) {
        const elProps = ChemParser.ELEMENTS[comp.element];
        if (elProps) {
            const colorHex = elProps.category === 'alkali-metal' ? '#ff6b6b' :
                elProps.category === 'alkaline-earth' ? '#ffa94d' :
                elProps.category === 'transition' ? '#ffd43b' :
                elProps.category === 'nonmetal' ? '#69db7c' :
                elProps.category === 'halogen' ? '#74c0fc' :
                '#b197fc';
            html += `<span class="functional-group" style="background: rgba(0, 122, 255, 0.08); border-color: rgba(0, 122, 255, 0.15);">${comp.element}: ${comp.count} (${comp.percentage}%)</span>`;
        }
    }
    html += `</div>`;
    html += `</div>`;

    // Ionic groups detected
    if (record.ionicGroups.length > 0) {
        html += `<div style="margin-top: 16px;">`;
        html += `<div class="info-label" style="margin-bottom: 8px;">${isCN ? '离子基团' : 'Ionic Groups'}</div>`;
        html += `<div class="functional-groups">`;
        for (const group of record.ionicGroups) {
            html += `<span class="functional-group">${isCN ? group.nameCN : group.name} (${group.formula})</span>`;
        }
        html += `</div>`;
        html += `</div>`;
    }

    // Organic functional groups
    if (record.functionalGroups && record.functionalGroups.length > 0) {
        html += `<div style="margin-top: 16px;">`;
        html += `<div class="info-label" style="margin-bottom: 8px;">${isCN ? '官能团' : 'Functional Groups'}</div>`;
        html += `<div class="functional-groups">`;
        for (const group of record.functionalGroups) {
            html += `<span class="functional-group">${isCN ? group.nameCN : group.name}</span>`;
        }
        html += `</div>`;
        html += `</div>`;
    }

    // Tags
    html += `<div class="tag-row">`;
    if (record.isAcid) html += `<span class="tag tag-acid">${isCN ? '酸性' : 'Acidic'}</span>`;
    if (record.isBase) html += `<span class="tag tag-base">${isCN ? '碱性' : 'Basic'}</span>`;
    if (record.isOrganic) html += `<span class="tag tag-organic">${isCN ? '有机物' : 'Organic'}</span>`;
    html += `<span class="tag tag-neutral">${isCN ? '自动推断' : 'Auto-inferred'}</span>`;
    html += `</div>`;
    html += `</div>`;

    return html;
}

// Full analyze with parser + PubChem fallback (async)
async function analyzeCompoundWithFallback(input) {
    // 1. Try local database first
    const localResult = analyzeCompoundLocal(input);
    if (localResult) return localResult;

    const clean = input.trim();
    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    // 2. Try formula parser for unknown compounds
    if (typeof ChemParser !== 'undefined') {
        const parsed = ChemParser.parse(clean);
        if (Object.keys(parsed).length > 0 && /^[A-Z]/.test(clean)) {
            const parserResult = renderParserResult(clean);
            if (parserResult) return parserResult;
        }
    }

    // 3. Check PubChem cache
    if (PubChemCache[clean]) {
        return renderPubChemResult(PubChemCache[clean]);
    }

    // 4. Show loading state while querying PubChem
    const loadingHtml = `<div class="pubchem-loading">
        <div class="loading-spinner"></div>
        <span>${isCN ? '正在从 PubChem 查询...' : 'Searching PubChem...'}</span>
    </div>`;

    // 5. Try PubChem API
    try {
        const data = await PubChemAPI.fetchFull(clean);
        if (data) {
            PubChemCache[clean] = data;
            return renderPubChemResult(data);
        }
    } catch (e) {
        console.warn('PubChem API error:', e);
    }

    return `<div class="error-message">
        ${isCN ? '未找到该化合物。请尝试下面的示例之一。' : 'Compound not found. Try one of the examples below.'}
    </div>`;
}

// Synchronous wrapper for backward compatibility
function analyzeCompound(input) {
    return analyzeCompoundLocal(input) || '';
}
