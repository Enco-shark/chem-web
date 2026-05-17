/* ============================================
   Organic Chemistry Module
   ============================================ */

const OrganicDB = {
    'CH4': {
        formula: 'CH4',
        nameEN: 'Methane',
        nameCN: '甲烷',
        type: 'Alkane',
        typeCN: '烷烃',
        functionalGroups: ['C-H (alkyl)'],
        functionalGroupsCN: ['C-H（烷基）'],
        bondStructure: 'H₃C-H',
        singleBonds: 4,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 16.04,
        boilingPoint: '-161.5°C',
        meltingPoint: '-182.5°C',
        density: '0.657 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble in water',
        solubilityCN: '微溶于水',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Tetrahedral',
        geometryCN: '四面体形',
        hybridization: 'sp3',
        properties: 'Simplest alkane. Stable, unreactive under normal conditions. Burns cleanly. Major component of natural gas.',
        propertiesCN: '最简单的烷烃。常温下稳定、不活泼。燃烧清洁。天然气的主要成分。',
        reactions: [
            { equation: 'CH4 + 2O2 → CO2 + 2H2O', desc: 'Combustion', descCN: '燃烧' },
            { equation: 'CH4 + Cl2 → CH3Cl + HCl', desc: 'Halogenation (UV light)', descCN: '卤代反应（紫外光）' }
        ]
    },
    'C2H6': {
        formula: 'C2H6',
        nameEN: 'Ethane',
        nameCN: '乙烷',
        type: 'Alkane',
        typeCN: '烷烃',
        functionalGroups: ['C-H (alkyl)', 'C-C'],
        functionalGroupsCN: ['C-H（烷基）', 'C-C'],
        bondStructure: 'H₃C-CH₃',
        singleBonds: 7,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 30.07,
        boilingPoint: '-88.6°C',
        meltingPoint: '-182.8°C',
        density: '1.356 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble in water',
        solubilityCN: '微溶于水',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Tetrahedral (each C)',
        geometryCN: '四面体形（每个C）',
        hybridization: 'sp3',
        properties: 'Second simplest alkane. Found in natural gas. Used as a fuel and in petrochemical production.',
        propertiesCN: '第二简单的烷烃。存在于天然气中。用作燃料和石化生产。',
        reactions: [
            { equation: '2C2H6 + 7O2 → 4CO2 + 6H2O', desc: 'Combustion', descCN: '燃烧' },
            { equation: 'C2H6 + Cl2 → C2H5Cl + HCl', desc: 'Halogenation', descCN: '卤代反应' }
        ]
    },
    'C2H4': {
        formula: 'C2H4',
        nameEN: 'Ethylene',
        nameCN: '乙烯',
        type: 'Alkene',
        typeCN: '烯烃',
        functionalGroups: ['C=C (double bond)'],
        functionalGroupsCN: ['C=C（双键）'],
        bondStructure: 'H₂C=CH₂',
        singleBonds: 4,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 28.05,
        boilingPoint: '-103.7°C',
        meltingPoint: '-169.2°C',
        density: '1.178 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Planar',
        geometryCN: '平面形',
        hybridization: 'sp2',
        properties: 'Simplest alkene. Most produced organic chemical industrially. Ripening hormone for fruits. Contains a carbon-carbon double bond.',
        propertiesCN: '最简单的烯烃。工业上产量最大的有机化学品。果实催熟剂。含有碳碳双键。',
        reactions: [
            { equation: 'C2H4 + Br2 → C2H4Br2', desc: 'Addition with bromine', descCN: '与溴加成' },
            { equation: 'C2H4 + H2O → C2H5OH', desc: 'Hydration (acid catalyst)', descCN: '水合反应（酸催化）' },
            { equation: 'nC2H4 → (-CH2-CH2-)n', desc: 'Polymerization (polyethylene)', descCN: '聚合反应（聚乙烯）' }
        ]
    },
    'C3H6': {
        formula: 'C3H6',
        nameEN: 'Propylene',
        nameCN: '丙烯',
        type: 'Alkene',
        typeCN: '烯烃',
        functionalGroups: ['C=C (double bond)'],
        functionalGroupsCN: ['C=C（双键）'],
        bondStructure: 'CH₃-CH=CH₂',
        singleBonds: 6,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 42.08,
        boilingPoint: '-47.6°C',
        meltingPoint: '-185.2°C',
        density: '1.81 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Planar around C=C',
        geometryCN: 'C=C周围平面形',
        hybridization: 'sp2',
        properties: 'Second most important alkene after ethylene. Used to produce polypropylene, acrylonitrile, and isopropanol.',
        propertiesCN: '仅次于乙烯的第二重要烯烃。用于生产聚丙烯、丙烯腈和异丙醇。',
        reactions: [
            { equation: 'C3H6 + H2 → C3H8', desc: 'Hydrogenation', descCN: '加氢反应' },
            { equation: 'nC3H6 → (-CH(CH₃)-CH₂-)n', desc: 'Polymerization (polypropylene)', descCN: '聚合反应（聚丙烯）' }
        ]
    },
    'C2H2': {
        formula: 'C2H2',
        nameEN: 'Acetylene',
        nameCN: '乙炔',
        type: 'Alkyne',
        typeCN: '炔烃',
        functionalGroups: ['C≡C (triple bond)'],
        functionalGroupsCN: ['C≡C（三键）'],
        bondStructure: 'HC≡CH',
        singleBonds: 2,
        doubleBonds: 0,
        tripleBonds: 1,
        aromaticRing: false,
        molecularMass: 26.04,
        boilingPoint: '-84°C',
        meltingPoint: '-80.8°C',
        density: '1.177 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Linear',
        geometryCN: '直线形',
        hybridization: 'sp',
        properties: 'Simplest alkyne. Burns with an extremely hot flame (oxy-acetylene torch). Contains a carbon-carbon triple bond. Terminal alkynes are weakly acidic.',
        propertiesCN: '最简单的炔烃。燃烧火焰极热（氧炔焊炬）。含有碳碳三键。末端炔烃具有弱酸性。',
        reactions: [
            { equation: 'C2H2 + 2Br2 → C2H2Br4', desc: 'Addition with bromine', descCN: '与溴加成' },
            { equation: '2C2H2 → C6H6', desc: 'Cyclotrimerization', descCN: '环三聚反应' },
            { equation: 'C2H2 + H2O → CH3CHO', desc: 'Hydration (Kucherov reaction)', descCN: '水合反应（库切洛夫反应）' }
        ]
    },
    'C2H5OH': {
        formula: 'C2H5OH',
        nameEN: 'Ethanol',
        nameCN: '乙醇',
        type: 'Alcohol',
        typeCN: '醇',
        functionalGroups: ['-OH (hydroxyl)'],
        functionalGroupsCN: ['-OH（羟基）'],
        bondStructure: 'CH₃-CH₂-OH',
        singleBonds: 7,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 46.07,
        boilingPoint: '78.4°C',
        meltingPoint: '-114.1°C',
        density: '0.789 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Bent at O',
        geometryCN: 'O处弯曲形',
        hybridization: 'sp3',
        properties: 'Common alcohol in beverages. Excellent solvent. Produced by fermentation or petrochemical processes. Can be used as a biofuel.',
        propertiesCN: '饮料中的常见酒精。优良溶剂。通过发酵或石化过程生产。可用作生物燃料。',
        reactions: [
            { equation: 'C2H5OH + 3O2 → 2CO2 + 3H2O', desc: 'Combustion', descCN: '燃烧' },
            { equation: 'C2H5OH → C2H4 + H2O', desc: 'Dehydration (H2SO4, 170°C)', descCN: '脱水反应（H2SO4, 170°C）' },
            { equation: '2C2H5OH → C2H5OC2H5 + H2O', desc: 'Dehydration (H2SO4, 140°C)', descCN: '脱水反应（H2SO4, 140°C）' },
            { equation: 'C2H5OH + CH3COOH ⇌ CH3COOC2H5 + H2O', desc: 'Esterification', descCN: '酯化反应' }
        ]
    },
    'CH3OH': {
        formula: 'CH3OH',
        nameEN: 'Methanol',
        nameCN: '甲醇',
        type: 'Alcohol',
        typeCN: '醇',
        functionalGroups: ['-OH (hydroxyl)'],
        functionalGroupsCN: ['-OH（羟基）'],
        bondStructure: 'CH₃-OH',
        singleBonds: 4,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 32.04,
        boilingPoint: '64.7°C',
        meltingPoint: '-97.6°C',
        density: '0.792 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral at C',
        geometryCN: 'C处四面体形',
        hybridization: 'sp3',
        properties: 'Simplest alcohol. Highly toxic — ingestion causes blindness and death. Used as industrial solvent and fuel. Known as wood alcohol.',
        propertiesCN: '最简单的醇。剧毒——摄入可导致失明和死亡。用作工业溶剂和燃料。又称木醇。',
        reactions: [
            { equation: '2CH3OH + 3O2 → 2CO2 + 4H2O', desc: 'Combustion', descCN: '燃烧' },
            { equation: 'CH3OH + HCHO → HCOOCH3', desc: 'Oxidation to formaldehyde', descCN: '氧化为甲醛' }
        ]
    },
    'CH3CHO': {
        formula: 'CH3CHO',
        nameEN: 'Acetaldehyde',
        nameCN: '乙醛',
        type: 'Aldehyde',
        typeCN: '醛',
        functionalGroups: ['-CHO (aldehyde)'],
        functionalGroupsCN: ['-CHO（醛基）'],
        bondStructure: 'CH₃-CHO',
        singleBonds: 5,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 44.05,
        boilingPoint: '20.2°C',
        meltingPoint: '-123.4°C',
        density: '0.788 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2',
        properties: 'Simplest aldehyde after formaldehyde. Pungent, fruity odor. Important intermediate in organic synthesis. Undergoes nucleophilic addition and oxidation.',
        propertiesCN: '甲醛以外最简单的醛。刺激性水果气味。有机合成的重要中间体。发生亲核加成和氧化反应。',
        reactions: [
            { equation: 'CH3CHO + H2 → C2H5OH', desc: 'Reduction (hydrogenation)', descCN: '还原（加氢）' },
            { equation: '2CH3CHO + O2 → 2CH3COOH', desc: 'Oxidation to acetic acid', descCN: '氧化为乙酸' },
            { equation: 'CH3CHO + 2Cu(OH)2 → CH3COOH + Cu2O↓ + 2H2O', desc: "Fehling's / Tollens' test", descCN: '斐林/托伦试剂检验' }
        ]
    },
    'CH3COCH3': {
        formula: 'CH3COCH3',
        nameEN: 'Acetone',
        nameCN: '丙酮',
        type: 'Ketone',
        typeCN: '酮',
        functionalGroups: ['C=O (carbonyl, ketone)'],
        functionalGroupsCN: ['C=O（羰基，酮）'],
        bondStructure: 'CH₃-CO-CH₃',
        singleBonds: 7,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 58.08,
        boilingPoint: '56.05°C',
        meltingPoint: '-94.7°C',
        density: '0.784 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2',
        properties: 'Simplest and most common ketone. Excellent solvent for many organic compounds. Found in nail polish remover. Produced naturally in the body during ketosis.',
        propertiesCN: '最简单、最常见的酮。多种有机化合物的优良溶剂。存在于洗甲水中。酮症时体内自然产生。',
        reactions: [
            { equation: 'CH3COCH3 + H2 → CH3CHOHCH3', desc: 'Reduction', descCN: '还原' },
            { equation: 'CH3COCH3 + HCN → (CH3)2C(OH)CN', desc: 'Cyanohydrin formation', descCN: '氰醇生成' }
        ]
    },
    'CH3COOH': {
        formula: 'CH3COOH',
        nameEN: 'Acetic Acid',
        nameCN: '乙酸',
        type: 'Carboxylic Acid',
        typeCN: '羧酸',
        functionalGroups: ['-COOH (carboxyl)'],
        functionalGroupsCN: ['-COOH（羧基）'],
        bondStructure: 'CH₃-COOH',
        singleBonds: 5,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 60.05,
        boilingPoint: '117.9°C',
        meltingPoint: '16.6°C',
        density: '1.049 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at COOH',
        geometryCN: 'COOH处三角平面形',
        hybridization: 'sp2',
        properties: 'Common weak organic acid (pKa 4.76). Main component of vinegar (5-8% solution). Glacial acetic acid is pure. Important industrial chemical.',
        propertiesCN: '常见的弱有机酸（pKa 4.76）。醋的主要成分（5-8%溶液）。冰醋酸为纯品。重要的工业化学品。',
        reactions: [
            { equation: 'CH3COOH + NaOH → CH3COONa + H2O', desc: 'Neutralization', descCN: '中和反应' },
            { equation: 'CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O', desc: 'Esterification', descCN: '酯化反应' },
            { equation: '2CH3COOH + Na2CO3 → 2CH3COONa + H2O + CO2↑', desc: 'Reaction with carbonate', descCN: '与碳酸盐反应' }
        ]
    },
    'HCOOH': {
        formula: 'HCOOH',
        nameEN: 'Formic Acid',
        nameCN: '甲酸',
        type: 'Carboxylic Acid',
        typeCN: '羧酸',
        functionalGroups: ['-COOH (carboxyl)', '-CHO (aldehyde-like)'],
        functionalGroupsCN: ['-COOH（羧基）', '-CHO（类醛基）'],
        bondStructure: 'H-COOH',
        singleBonds: 2,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 46.03,
        boilingPoint: '100.8°C',
        meltingPoint: '8.4°C',
        density: '1.22 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible with water',
        solubilityCN: '与水混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at COOH',
        geometryCN: 'COOH处三角平面形',
        hybridization: 'sp2',
        properties: 'Simplest carboxylic acid. Found in ant venom (name from Latin "formica" = ant). Both a carboxylic acid and an aldehyde — can be oxidized. Stronger than acetic acid.',
        propertiesCN: '最简单的羧酸。存在于蚂蚁毒液中（名称源自拉丁语"formica"=蚂蚁）。既是羧酸又是醛——可被氧化。比乙酸强。',
        reactions: [
            { equation: 'HCOOH → CO2 + H2', desc: 'Decomposition (H2SO4)', descCN: '分解反应（H2SO4）' },
            { equation: 'HCOOH + NaOH → HCOONa + H2O', desc: 'Neutralization', descCN: '中和反应' }
        ]
    },
    'CH3COOC2H5': {
        formula: 'CH3COOC2H5',
        nameEN: 'Ethyl Acetate',
        nameCN: '乙酸乙酯',
        type: 'Ester',
        typeCN: '酯',
        functionalGroups: ['-COO- (ester)'],
        functionalGroupsCN: ['-COO-（酯基）'],
        bondStructure: 'CH₃-COO-C₂H₅',
        singleBonds: 9,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 88.11,
        boilingPoint: '77.1°C',
        meltingPoint: '-83.6°C',
        density: '0.902 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble (8.3 g/100mL)',
        solubilityCN: '微溶（8.3 g/100mL）',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2',
        properties: 'Common ester with a fruity, pleasant odor. Widely used as a solvent in paints, coatings, and adhesives. Found naturally in some fruits.',
        propertiesCN: '常见的酯，具有水果香味。广泛用作涂料、涂层和粘合剂的溶剂。天然存在于某些水果中。',
        reactions: [
            { equation: 'CH3COOC2H5 + H2O → CH3COOH + C2H5OH', desc: 'Hydrolysis (acid)', descCN: '水解（酸性）' },
            { equation: 'CH3COOC2H5 + NaOH → CH3COONa + C2H5OH', desc: 'Saponification', descCN: '皂化反应' }
        ]
    },
    'C6H6': {
        formula: 'C6H6',
        nameEN: 'Benzene',
        nameCN: '苯',
        type: 'Aromatic Hydrocarbon',
        typeCN: '芳香烃',
        functionalGroups: ['Benzene ring (aromatic)'],
        functionalGroupsCN: ['苯环（芳香族）'],
        bondStructure: 'C₆H₆ (hexagonal ring)',
        singleBonds: 6,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 78.11,
        boilingPoint: '80.1°C',
        meltingPoint: '5.5°C',
        density: '0.879 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Immiscible with water',
        solubilityCN: '不溶于水',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Planar hexagonal',
        geometryCN: '平面六边形',
        hybridization: 'sp2',
        properties: 'Fundamental aromatic compound. Discovered by Faraday (1825). Has a planar hexagonal structure with delocalized π electrons. Resistant to addition reactions, undergoes electrophilic substitution.',
        propertiesCN: '基本芳香族化合物。法拉第发现（1825）。具有平面六边形结构和离域π电子。不易发生加成反应，发生亲电取代反应。',
        reactions: [
            { equation: 'C6H6 + Br2 → C6H5Br + HBr', desc: 'Electrophilic bromination (FeBr3)', descCN: '亲电溴代（FeBr3）' },
            { equation: 'C6H6 + HNO3 → C6H5NO2 + H2O', desc: 'Nitration (H2SO4)', descCN: '硝化反应（H2SO4）' },
            { equation: 'C6H6 + H2SO4 → C6H5SO3H + H2O', desc: 'Sulfonation', descCN: '磺化反应' }
        ]
    },
    'C6H5OH': {
        formula: 'C6H5OH',
        nameEN: 'Phenol',
        nameCN: '苯酚',
        type: 'Aromatic Alcohol',
        typeCN: '芳香醇',
        functionalGroups: ['-OH (phenolic)', 'Benzene ring'],
        functionalGroupsCN: ['-OH（酚羟基）', '苯环'],
        bondStructure: 'C₆H₅-OH',
        singleBonds: 7,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 94.11,
        boilingPoint: '181.7°C',
        meltingPoint: '40.5°C',
        density: '1.07 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White/pink',
        colorCN: '白色/粉色',
        solubility: 'Slightly soluble (8.3 g/100mL)',
        solubilityCN: '微溶（8.3 g/100mL）',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar hexagonal + bent OH',
        geometryCN: '平面六边形 + 弯曲OH',
        hybridization: 'sp2',
        properties: 'Simplest phenol. Weakly acidic (pKa 10) — more acidic than alcohols due to resonance stabilization of phenoxide ion. Used in plastics, drugs, and as an antiseptic.',
        propertiesCN: '最简单的酚。弱酸性（pKa 10）——由于酚氧离子的共振稳定化，比醇酸性强。用于塑料、药物和防腐剂。',
        reactions: [
            { equation: 'C6H5OH + NaOH → C6H5ONa + H2O', desc: 'Neutralization', descCN: '中和反应' },
            { equation: 'C6H5OH + 3Br2 → C6H2Br3OH↓ + 3HBr', desc: 'Bromination (white precipitate)', descCN: '溴代反应（白色沉淀）' },
            { equation: '6C6H5OH + Fe3+ → [Fe(C6H5O)6]3-', desc: 'FeCl3 test (purple color)', descCN: 'FeCl3检验（紫色）' }
        ]
    },
    'CH3NH2': {
        formula: 'CH3NH2',
        nameEN: 'Methylamine',
        nameCN: '甲胺',
        type: 'Amine',
        typeCN: '胺',
        functionalGroups: ['-NH2 (amino)'],
        functionalGroupsCN: ['-NH2（氨基）'],
        bondStructure: 'CH₃-NH₂',
        singleBonds: 4,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 31.06,
        boilingPoint: '-6.3°C',
        meltingPoint: '-93.5°C',
        density: '0.695 g/cm³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal pyramidal at N',
        geometryCN: 'N处三角锥形',
        hybridization: 'sp3',
        properties: 'Simplest primary amine. Fishy odor. Weak base (pKb 3.36). Has a lone pair on nitrogen, acts as a nucleophile and base.',
        propertiesCN: '最简单的伯胺。鱼腥味。弱碱（pKb 3.36）。氮上有一对孤对电子，可作亲核试剂和碱。',
        reactions: [
            { equation: 'CH3NH2 + HCl → CH3NH3Cl', desc: 'Acid-base reaction', descCN: '酸碱反应' },
            { equation: 'CH3NH2 + CH3Cl → (CH3)2NH + HCl', desc: 'Alkylation', descCN: '烷基化反应' }
        ]
    },
    'C6H5NH2': {
        formula: 'C6H5NH2',
        nameEN: 'Aniline',
        nameCN: '苯胺',
        type: 'Aromatic Amine',
        typeCN: '芳香胺',
        functionalGroups: ['-NH2 (amino)', 'Benzene ring'],
        functionalGroupsCN: ['-NH2（氨基）', '苯环'],
        bondStructure: 'C₆H₅-NH₂',
        singleBonds: 7,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 93.13,
        boilingPoint: '184.1°C',
        meltingPoint: '-6.3°C',
        density: '1.022 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless (darkens on exposure)',
        colorCN: '无色（暴露后变暗）',
        solubility: 'Slightly soluble (3.6 g/100mL)',
        solubilityCN: '微溶（3.6 g/100mL）',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar hexagonal + pyramidal NH2',
        geometryCN: '平面六边形 + 锥形NH2',
        hybridization: 'sp2',
        properties: 'Fundamental aromatic amine. Weaker base than aliphatic amines due to electron donation from N into the ring. Used in dye manufacturing (aniline dyes).',
        propertiesCN: '基本芳香胺。由于N向苯环供电子，碱性弱于脂肪胺。用于染料制造（苯胺染料）。',
        reactions: [
            { equation: 'C6H5NH2 + HCl → C6H5NH3Cl', desc: 'Acid-base reaction', descCN: '酸碱反应' },
            { equation: 'C6H5NH2 + HNO2 → C6H5N2+ + 2H2O', desc: 'Diazotization (0-5°C)', descCN: '重氮化反应（0-5°C）' }
        ]
    },
    'CH3OCH3': {
        formula: 'CH3OCH3',
        nameEN: 'Dimethyl Ether',
        nameCN: '二甲醚',
        type: 'Ether',
        typeCN: '醚',
        functionalGroups: ['C-O-C (ether)'],
        functionalGroupsCN: ['C-O-C（醚键）'],
        bondStructure: 'CH₃-O-CH₃',
        singleBonds: 6,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 46.07,
        boilingPoint: '-24.8°C',
        meltingPoint: '-141.5°C',
        density: '1.97 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Soluble in water',
        solubilityCN: '溶于水',
        polarity: 'Slightly polar',
        polarityCN: '弱极性',
        geometry: 'Bent at O',
        geometryCN: 'O处弯曲形',
        hybridization: 'sp3',
        properties: 'Simplest ether. Used as a propellant and refrigerant. Being explored as a diesel alternative. Relatively unreactive due to lack of O-H bond.',
        propertiesCN: '最简单的醚。用作推进剂和制冷剂。正在探索作为柴油替代品。由于缺乏O-H键，相对不活泼。',
        reactions: [
            { equation: 'CH3OCH3 + HI → CH3I + CH3OH', desc: 'Cleavage by HI', descCN: 'HI裂解' }
        ]
    },
    'HCOOCH3': {
        formula: 'HCOOCH3',
        nameEN: 'Methyl Formate',
        nameCN: '甲酸甲酯',
        type: 'Ester',
        typeCN: '酯',
        functionalGroups: ['-COO- (ester)', '-CHO (formyl)'],
        functionalGroupsCN: ['-COO-（酯基）', '-CHO（甲酰基）'],
        bondStructure: 'H-COO-CH₃',
        singleBonds: 4,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 60.05,
        boilingPoint: '31.5°C',
        meltingPoint: '-100°C',
        density: '0.974 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2',
        properties: 'Simplest ester. Pleasant odor. Used as a fumigant and in organic synthesis. Can be hydrolyzed to formic acid and methanol.',
        propertiesCN: '最简单的酯。气味宜人。用作熏蒸剂和有机合成。可水解为甲酸和甲醇。',
        reactions: [
            { equation: 'HCOOCH3 + H2O → HCOOH + CH3OH', desc: 'Hydrolysis', descCN: '水解' },
            { equation: 'HCOOCH3 + NaOH → HCOONa + CH3OH', desc: 'Saponification', descCN: '皂化反应' }
        ]
    },

    // ==========================================
    // AMINO ACIDS
    // ==========================================
    'CH3CH(NH2)COOH': {
        formula: 'CH3CH(NH2)COOH',
        nameEN: 'Alanine',
        nameCN: '丙氨酸',
        type: 'Amino Acid',
        typeCN: '氨基酸',
        functionalGroups: ['-NH2 (amino)', '-COOH (carboxyl)'],
        functionalGroupsCN: ['-NH2（氨基）', '-COOH（羧基）'],
        bondStructure: 'CH₃-CH(NH₂)-COOH',
        singleBonds: 8,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 89.09,
        boilingPoint: '297°C (decomp)',
        meltingPoint: '297°C (decomp)',
        density: '1.432 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral at Cα',
        geometryCN: 'Cα处四面体形',
        hybridization: 'sp3',
        properties: 'Non-essential amino acid. Second simplest amino acid after glycine. Important in glucose-alanine cycle.',
        propertiesCN: '非必需氨基酸。继甘氨酸后第二简单的氨基酸。在葡萄糖-丙氨酸循环中起重要作用。',
        reactions: [
            { equation: 'CH3CH(NH2)COOH → CH3CH(NH2)COO⁻ + H⁺', desc: 'Zwitterion formation', descCN: '两性离子形成' }
        ]
    },
    'HOCH2CH(NH2)COOH': {
        formula: 'HOCH2CH(NH2)COOH',
        nameEN: 'Serine',
        nameCN: '丝氨酸',
        type: 'Amino Acid',
        typeCN: '氨基酸',
        functionalGroups: ['-OH (hydroxyl)', '-NH2 (amino)', '-COOH (carboxyl)'],
        functionalGroupsCN: ['-OH（羟基）', '-NH2（氨基）', '-COOH（羧基）'],
        bondStructure: 'HO-CH₂-CH(NH₂)-COOH',
        singleBonds: 9,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 105.09,
        boilingPoint: 'decomp',
        meltingPoint: '246°C (decomp)',
        density: '1.60 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral at Cα',
        geometryCN: 'Cα处四面体形',
        hybridization: 'sp3',
        properties: 'Non-essential amino acid. Plays roles in biosynthesis of proteins, purines, and pyrimidines. Important in enzyme active sites.',
        propertiesCN: '非必需氨基酸。在蛋白质、嘌呤和嘧啶的生物合成中起作用。在酶活性位点中很重要。',
        reactions: [
            { equation: 'Serine → Pyruvate + NH3', desc: 'Deamination', descCN: '脱氨' }
        ]
    },
    'C6H5CH2CH(NH2)COOH': {
        formula: 'C6H5CH2CH(NH2)COOH',
        nameEN: 'Phenylalanine',
        nameCN: '苯丙氨酸',
        type: 'Amino Acid',
        typeCN: '氨基酸',
        functionalGroups: ['-NH2 (amino)', '-COOH (carboxyl)', 'phenyl ring'],
        functionalGroupsCN: ['-NH2（氨基）', '-COOH（羧基）', '苯环'],
        bondStructure: 'C₆H₅-CH₂-CH(NH₂)-COOH',
        singleBonds: 10,
        doubleBonds: 4,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 165.19,
        boilingPoint: 'decomp',
        meltingPoint: '283°C (decomp)',
        density: '1.26 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Tetrahedral at Cα',
        geometryCN: 'Cα处四面体形',
        hybridization: 'sp3',
        properties: 'Essential amino acid. Precursor to tyrosine and neurotransmitters. People with phenylketonuria (PKU) cannot metabolize it.',
        propertiesCN: '必需氨基酸。酪氨酸和神经递质的前体。苯丙酮尿症（PKU）患者无法代谢。',
        reactions: [
            { equation: 'Phe + O₂ → Tyr + H₂O', desc: 'Hydroxylation to tyrosine', descCN: '羟化为酪氨酸' }
        ]
    },

    // ==========================================
    // CARBOHYDRATES
    // ==========================================
    'C6H12O6-fructose': {
        formula: 'C6H12O6',
        nameEN: 'Fructose',
        nameCN: '果糖',
        type: 'Carbohydrate (Monosaccharide)',
        typeCN: '碳水化合物（单糖）',
        functionalGroups: ['-OH (hydroxyl)', 'C=O (ketone)'],
        functionalGroupsCN: ['-OH（羟基）', 'C=O（酮基）'],
        bondStructure: 'Cyclic: 5-membered ring (furanose)',
        singleBonds: 17,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 180.16,
        boilingPoint: 'decomp',
        meltingPoint: '103°C',
        density: '1.694 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Cyclic (pyranose/furanose)',
        geometryCN: '环状（吡喃/呋喃）',
        hybridization: 'sp3',
        properties: 'Sweetest natural sugar. Found in fruits and honey. Metabolized mainly in the liver. Ketal form of glucose.',
        propertiesCN: '最甜的天然糖。存在于水果和蜂蜜中。主要在肝脏代谢。是葡萄糖的酮式。',
        reactions: [
            { equation: 'C6H12O6 + 6O2 → 6CO2 + 6H2O', desc: 'Cellular respiration', descCN: '细胞呼吸' }
        ]
    },
    'C12H22O11-maltose': {
        formula: 'C12H22O11',
        nameEN: 'Maltose',
        nameCN: '麦芽糖',
        type: 'Carbohydrate (Disaccharide)',
        typeCN: '碳水化合物（二糖）',
        functionalGroups: ['-OH (hydroxyl)', 'C-O-C (glycosidic bond)'],
        functionalGroupsCN: ['-OH（羟基）', 'C-O-C（糖苷键）'],
        bondStructure: 'Two glucose units linked by α-1,4-glycosidic bond',
        singleBonds: 35,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 342.30,
        boilingPoint: 'decomp',
        meltingPoint: '160°C',
        density: '1.54 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Cyclic',
        geometryCN: '环状',
        hybridization: 'sp3',
        properties: 'Disaccharide formed from two glucose units. Produced during starch digestion. Less sweet than sucrose.',
        propertiesCN: '由两个葡萄糖单元组成的二糖。在淀粉消化过程中产生。甜度低于蔗糖。',
        reactions: [
            { equation: 'C12H22O11 + H2O → 2C6H12O6', desc: 'Hydrolysis to glucose', descCN: '水解为葡萄糖' }
        ]
    },
    '(C6H10O5)n': {
        formula: '(C6H10O5)n',
        nameEN: 'Starch',
        nameCN: '淀粉',
        type: 'Carbohydrate (Polysaccharide)',
        typeCN: '碳水化合物（多糖）',
        functionalGroups: ['-OH (hydroxyl)', 'C-O-C (glycosidic bond)'],
        functionalGroupsCN: ['-OH（羟基）', 'C-O-C（糖苷键）'],
        bondStructure: 'Polymer of glucose (amylose + amylopectin)',
        singleBonds: 0,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: '(162.14)n',
        boilingPoint: 'decomp',
        meltingPoint: 'decomp',
        density: '1.5 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Insoluble (forms suspension)',
        solubilityCN: '不溶（形成悬浮液）',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Helical (amylose)',
        geometryCN: '螺旋状（直链淀粉）',
        hybridization: 'sp3',
        properties: 'Major energy storage in plants. Turns blue with iodine. Composed of amylose (linear) and amylopectin (branched).',
        propertiesCN: '植物的主要储能物质。遇碘变蓝。由直链淀粉（线性）和支链淀粉（分支）组成。',
        reactions: [
            { equation: '(C6H10O5)n + nH2O → nC6H12O6', desc: 'Acid hydrolysis to glucose', descCN: '酸水解为葡萄糖' }
        ]
    },
    '(C6H10O5)n-cellulose': {
        formula: '(C6H10O5)n',
        nameEN: 'Cellulose',
        nameCN: '纤维素',
        type: 'Carbohydrate (Polysaccharide)',
        typeCN: '碳水化合物（多糖）',
        functionalGroups: ['-OH (hydroxyl)', 'C-O-C (glycosidic bond)'],
        functionalGroupsCN: ['-OH（羟基）', 'C-O-C（糖苷键）'],
        bondStructure: 'Polymer of glucose (β-1,4-glycosidic bonds)',
        singleBonds: 0,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: '(162.14)n',
        boilingPoint: 'decomp',
        meltingPoint: 'decomp',
        density: '1.5 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Linear chains, hydrogen-bonded',
        geometryCN: '线性链，氢键连接',
        hybridization: 'sp3',
        properties: 'Most abundant organic polymer on Earth. Structural component of plant cell walls. Humans cannot digest it.',
        propertiesCN: '地球上最丰富的有机聚合物。植物细胞壁的结构成分。人类无法消化。',
        reactions: [
            { equation: '(C6H10O5)n + nH2O → nC6H12O6', desc: 'Enzymatic hydrolysis', descCN: '酶水解' }
        ]
    },

    // ==========================================
    // AMIDES & NITRILES
    // ==========================================
    'CH3CONH2': {
        formula: 'CH3CONH2',
        nameEN: 'Acetamide',
        nameCN: '乙酰胺',
        type: 'Amide',
        typeCN: '酰胺',
        functionalGroups: ['-CONH2 (amide)'],
        functionalGroupsCN: ['-CONH2（酰胺基）'],
        bondStructure: 'CH₃-CO-NH₂',
        singleBonds: 5,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 59.07,
        boilingPoint: '221°C',
        meltingPoint: '82°C',
        density: '1.159 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2',
        properties: 'Simplest amide derived from acetic acid. Used as a solvent and plasticizer. The amide bond is the basis of protein structure.',
        propertiesCN: '由乙酸衍生的最简单酰胺。用作溶剂和增塑剂。酰胺键是蛋白质结构的基础。',
        reactions: [
            { equation: 'CH3CONH2 + H2O → CH3COOH + NH3', desc: 'Hydrolysis', descCN: '水解' },
            { equation: 'CH3CONH2 + NaOH → CH3COONa + NH3↑', desc: 'Alkaline hydrolysis', descCN: '碱性水解' }
        ]
    },
    'CH3CN': {
        formula: 'CH3CN',
        nameEN: 'Acetonitrile',
        nameCN: '乙腈',
        type: 'Nitrile',
        typeCN: '腈',
        functionalGroups: ['-C≡N (nitrile)'],
        functionalGroupsCN: ['-C≡N（氰基）'],
        bondStructure: 'CH₃-C≡N',
        singleBonds: 3,
        doubleBonds: 0,
        tripleBonds: 1,
        aromaticRing: false,
        molecularMass: 41.05,
        boilingPoint: '82°C',
        meltingPoint: '-46°C',
        density: '0.786 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Linear at C≡N',
        geometryCN: 'C≡N处直线形',
        hybridization: 'sp',
        properties: 'Important polar aprotic solvent used in HPLC and organic synthesis. Can be hydrolyzed to acetic acid.',
        propertiesCN: '重要的极性非质子溶剂，用于高效液相色谱和有机合成。可水解为乙酸。',
        reactions: [
            { equation: 'CH3CN + 2H2O → CH3COOH + NH3', desc: 'Hydrolysis to acetic acid', descCN: '水解为乙酸' }
        ]
    },

    // ==========================================
    // THIOLS
    // ==========================================
    'CH3SH': {
        formula: 'CH3SH',
        nameEN: 'Methanethiol',
        nameCN: '甲硫醇',
        type: 'Thiol',
        typeCN: '硫醇',
        functionalGroups: ['-SH (thiol)'],
        functionalGroupsCN: ['-SH（巯基）'],
        bondStructure: 'CH₃-SH',
        singleBonds: 4,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 48.11,
        boilingPoint: '6°C',
        meltingPoint: '-123°C',
        density: '0.866 g/cm³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral at C',
        geometryCN: 'C处四面体形',
        hybridization: 'sp3',
        properties: 'Simplest thiol. Has a strong garlic-like odor. Natural gas odorant for leak detection.',
        propertiesCN: '最简单的硫醇。有强烈的蒜味。天然气加臭剂用于泄漏检测。',
        reactions: [
            { equation: '2CH3SH + [O] → CH3S-SCH3 + H2O', desc: 'Oxidation to disulfide', descCN: '氧化为二硫化物' }
        ]
    },
    'C2H5SH': {
        formula: 'C2H5SH',
        nameEN: 'Ethanethiol',
        nameCN: '乙硫醇',
        type: 'Thiol',
        typeCN: '硫醇',
        functionalGroups: ['-SH (thiol)'],
        functionalGroupsCN: ['-SH（巯基）'],
        bondStructure: 'CH₃-CH₂-SH',
        singleBonds: 7,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 62.13,
        boilingPoint: '35°C',
        meltingPoint: '-148°C',
        density: '0.839 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral',
        geometryCN: '四面体形',
        hybridization: 'sp3',
        properties: 'Strong skunk-like odor. Used as a gas odorant. More persistent than methanethiol.',
        propertiesCN: '强烈的臭鼬味。用作天然气加臭剂。比甲硫醇更持久。',
        reactions: [
            { equation: '2C2H5SH + [O] → C2H5S-SC2H5 + H2O', desc: 'Oxidation to disulfide', descCN: '氧化为二硫化物' }
        ]
    },

    // ==========================================
    // HETEROCYCLIC COMPOUNDS
    // ==========================================
    'C5H5N': {
        formula: 'C5H5N',
        nameEN: 'Pyridine',
        nameCN: '吡啶',
        type: 'Heterocyclic (Aromatic)',
        typeCN: '杂环化合物（芳香族）',
        functionalGroups: ['N in aromatic ring'],
        functionalGroupsCN: ['芳香环中的N'],
        bondStructure: 'Six-membered ring with one N replacing CH',
        singleBonds: 5,
        doubleBonds: 3,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 79.10,
        boilingPoint: '115°C',
        meltingPoint: '-42°C',
        density: '0.982 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar hexagonal',
        geometryCN: '平面六边形',
        hybridization: 'sp2',
        properties: 'Heterocyclic aromatic compound. Weak base (N lone pair not in aromatic system). Fishy odor. Important solvent and reagent in organic synthesis.',
        propertiesCN: '杂环芳香化合物。弱碱（N孤对电子不在芳香体系中）。鱼腥味。有机合成中重要的溶剂和试剂。',
        reactions: [
            { equation: 'C5H5N + HCl → C5H5NH⁺Cl⁻', desc: 'Protonation', descCN: '质子化' },
            { equation: 'C5H5N + CH3I → C5H5N⁺(CH3)I⁻', desc: 'N-alkylation', descCN: 'N-烷基化' }
        ]
    },
    'C4H8O': {
        formula: 'C4H8O',
        nameEN: 'Tetrahydrofuran',
        nameCN: '四氢呋喃',
        type: 'Heterocyclic (Ether)',
        typeCN: '杂环化合物（醚）',
        functionalGroups: ['-O- (ether)', 'five-membered ring'],
        functionalGroupsCN: ['-O-（醚键）', '五元环'],
        bondStructure: 'Five-membered ring with one O',
        singleBonds: 9,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 72.11,
        boilingPoint: '66°C',
        meltingPoint: '-108°C',
        density: '0.889 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Envelope',
        geometryCN: '信封形',
        hybridization: 'sp3',
        properties: 'Important aprotic solvent for organometallic reactions. Dissolves many polymers. Used with Grignard reagents.',
        propertiesCN: '重要的非质子溶剂，用于有机金属反应。溶解多种聚合物。用于格氏试剂。',
        reactions: [
            { equation: 'C4H8O + HCl → ClCH₂CH₂CH₂CH₂OH', desc: 'Ring opening', descCN: '开环反应' }
        ]
    },

    // ==========================================
    // ADDITIONAL ALDEHYDES & KETONES
    // ==========================================
    'CH3CH2CHO': {
        formula: 'CH3CH2CHO',
        nameEN: 'Propanal',
        nameCN: '丙醛',
        type: 'Aldehyde',
        typeCN: '醛',
        functionalGroups: ['-CHO (aldehyde)'],
        functionalGroupsCN: ['-CHO（醛基）'],
        bondStructure: 'CH₃-CH₂-CHO',
        singleBonds: 7,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 58.08,
        boilingPoint: '49°C',
        meltingPoint: '-81°C',
        density: '0.807 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2/sp3',
        properties: 'Simple aliphatic aldehyde with pungent odor. Undergoes aldol condensation and oxidation reactions.',
        propertiesCN: '简单的脂肪醛，有刺激性气味。可发生羟醛缩合和氧化反应。',
        reactions: [
            { equation: 'CH3CH2CHO + [O] → CH3CH2COOH', desc: 'Oxidation to propanoic acid', descCN: '氧化为丙酸' },
            { equation: '2CH3CH2CHO + NaOH → aldol product', desc: 'Aldol condensation', descCN: '羟醛缩合' }
        ]
    },
    'CH3COCH2CH3': {
        formula: 'CH3COCH2CH3',
        nameEN: 'Butanone (MEK)',
        nameCN: '丁酮（甲乙酮）',
        type: 'Ketone',
        typeCN: '酮',
        functionalGroups: ['>C=O (ketone)'],
        functionalGroupsCN: ['>C=O（酮基）'],
        bondStructure: 'CH₃-CO-CH₂-CH₃',
        singleBonds: 10,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 72.11,
        boilingPoint: '80°C',
        meltingPoint: '-87°C',
        density: '0.805 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        hybridization: 'sp2/sp3',
        properties: 'Second simplest ketone after acetone. Important industrial solvent. Used in paints, adhesives, and plastics.',
        propertiesCN: '继丙酮后第二简单的酮。重要的工业溶剂。用于油漆、粘合剂和塑料。',
        reactions: [
            { equation: 'CH3COCH2CH3 + HCN → (CH3)(C2H5)C(OH)CN', desc: 'Cyanohydrin formation', descCN: '氰醇生成' }
        ]
    },

    // ==========================================
    // LIPIDS & FATTY ACIDS
    // ==========================================
    'CH3(CH2)16COOH': {
        formula: 'CH3(CH2)16COOH',
        nameEN: 'Stearic Acid',
        nameCN: '硬脂酸',
        type: 'Carboxylic Acid (Fatty Acid)',
        typeCN: '羧酸（脂肪酸）',
        functionalGroups: ['-COOH (carboxyl)'],
        functionalGroupsCN: ['-COOH（羧基）'],
        bondStructure: 'CH₃-(CH₂)₁₆-COOH',
        singleBonds: 55,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 284.48,
        boilingPoint: '361°C',
        meltingPoint: '69°C',
        density: '0.941 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Slightly polar',
        polarityCN: '弱极性',
        geometry: 'Zigzag chain',
        geometryCN: '锯齿链',
        hybridization: 'sp3/sp2',
        properties: 'Saturated fatty acid (C18:0). Major component of animal fat and cocoa butter. Used in candle and soap making.',
        propertiesCN: '饱和脂肪酸（C18:0）。动物脂肪和可可脂的主要成分。用于蜡烛和肥皂制造。',
        reactions: [
            { equation: 'C17H35COOH + NaOH → C17H35COONa + H2O', desc: 'Saponification', descCN: '皂化反应' },
            { equation: 'C17H35COOH + C2H5OH → C17H35COOC2H5 + H2O', desc: 'Esterification', descCN: '酯化反应' }
        ]
    },
    'CH3(CH2)7CH=CH(CH2)7COOH': {
        formula: 'CH3(CH2)7CH=CH(CH2)7COOH',
        nameEN: 'Oleic Acid',
        nameCN: '油酸',
        type: 'Carboxylic Acid (Unsaturated Fatty Acid)',
        typeCN: '羧酸（不饱和脂肪酸）',
        functionalGroups: ['-COOH (carboxyl)', 'C=C (alkene)'],
        functionalGroupsCN: ['-COOH（羧基）', 'C=C（烯键）'],
        bondStructure: 'CH₃-(CH₂)₇-CH=CH-(CH₂)₇-COOH',
        singleBonds: 53,
        doubleBonds: 2,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 282.47,
        boilingPoint: '360°C',
        meltingPoint: '13°C',
        density: '0.895 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Slightly polar',
        polarityCN: '弱极性',
        geometry: 'Bent chain (cis double bond)',
        geometryCN: '弯曲链（顺式双键）',
        hybridization: 'sp3/sp2',
        properties: 'Monounsaturated omega-9 fatty acid (C18:1). Major component of olive oil. Liquid at room temperature due to cis double bond.',
        propertiesCN: '单不饱和omega-9脂肪酸（C18:1）。橄榄油的主要成分。因顺式双键在室温下为液态。',
        reactions: [
            { equation: 'Oleic acid + H2 → Stearic acid', desc: 'Hydrogenation', descCN: '加氢' },
            { equation: 'Oleic acid + Br2 → dibromostearic acid', desc: 'Bromine addition', descCN: '溴加成' }
        ]
    },

    // ==========================================
    // AROMATIC COMPOUNDS
    // ==========================================
    'C6H5CH3': {
        formula: 'C6H5CH3',
        nameEN: 'Toluene',
        nameCN: '甲苯',
        type: 'Aromatic Hydrocarbon',
        typeCN: '芳香烃',
        functionalGroups: ['phenyl ring', '-CH₃ (methyl)'],
        functionalGroupsCN: ['苯环', '-CH₃（甲基）'],
        bondStructure: 'C₆H₅-CH₃',
        singleBonds: 7,
        doubleBonds: 4,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 92.14,
        boilingPoint: '111°C',
        meltingPoint: '-95°C',
        density: '0.867 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Planar ring',
        geometryCN: '平面环',
        hybridization: 'sp2/sp3',
        properties: 'Simplest alkylbenzene. Important solvent and precursor to TNT, benzoic acid, and other chemicals.',
        propertiesCN: '最简单的烷基苯。重要的溶剂和TNT、苯甲酸等的前体。',
        reactions: [
            { equation: 'C6H5CH3 + 3[O] → C6H5COOH + H2O', desc: 'Oxidation to benzoic acid', descCN: '氧化为苯甲酸' },
            { equation: 'C6H5CH3 + HNO3 → O2NC6H4CH3 + H2O', desc: 'Nitration', descCN: '硝化' }
        ]
    },
    'C10H8-naphthalene': {
        formula: 'C10H8',
        nameEN: 'Naphthalene',
        nameCN: '萘',
        type: 'Polycyclic Aromatic Hydrocarbon',
        typeCN: '多环芳烃',
        functionalGroups: ['two fused benzene rings'],
        functionalGroupsCN: ['两个稠合苯环'],
        bondStructure: 'Two fused six-membered rings',
        singleBonds: 7,
        doubleBonds: 5,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 128.17,
        boilingPoint: '218°C',
        meltingPoint: '80°C',
        density: '1.14 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Planar fused rings',
        geometryCN: '平面稠环',
        hybridization: 'sp2',
        properties: 'Simplest polycyclic aromatic hydrocarbon. Strong mothball odor. Sublimes easily. Precursor to phthalic anhydride.',
        propertiesCN: '最简单的多环芳烃。强烈的樟脑丸味。易升华。邻苯二甲酸酐的前体。',
        reactions: [
            { equation: 'C10H8 + H2 → C10H10 (tetralin)', desc: 'Partial hydrogenation', descCN: '部分加氢' },
            { equation: 'C10H8 + O2 → phthalic anhydride', desc: 'Catalytic oxidation', descCN: '催化氧化' }
        ]
    },

    // ==========================================
    // POLYMERS (structural repeat units)
    // ==========================================
    '-(CH2-CHCl)n-': {
        formula: '(C2H3Cl)n',
        nameEN: 'Polyvinyl Chloride (PVC)',
        nameCN: '聚氯乙烯',
        type: 'Polymer',
        typeCN: '高分子',
        functionalGroups: ['-Cl (chloro)'],
        functionalGroupsCN: ['-Cl（氯）'],
        bondStructure: '-(CH₂-CHCl)n-',
        singleBonds: 0,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: '(62.50)n',
        boilingPoint: 'decomp',
        meltingPoint: '~80°C (softens)',
        density: '1.3-1.45 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Slightly polar',
        polarityCN: '弱极性',
        geometry: 'Linear polymer chain',
        geometryCN: '线性聚合物链',
        hybridization: 'sp3',
        properties: 'Third most produced plastic. Rigid or flexible depending on plasticizers. Used in pipes, flooring, and wire insulation.',
        propertiesCN: '产量第三的塑料。根据增塑剂可硬可柔。用于管道、地板和电线绝缘。',
        reactions: [
            { equation: 'nCH₂=CHCl → -(CH₂-CHCl)n-', desc: 'Addition polymerization', descCN: '加成聚合' }
        ]
    },
    '-(C6H4-CH2-CH2)n-': {
        formula: '(C8H8)n',
        nameEN: 'Polystyrene (PS)',
        nameCN: '聚苯乙烯',
        type: 'Polymer',
        typeCN: '高分子',
        functionalGroups: ['phenyl ring'],
        functionalGroupsCN: ['苯环'],
        bondStructure: '-(CH₂-CH(C₆H₅))n-',
        singleBonds: 0,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: '(104.15)n',
        boilingPoint: 'decomp',
        meltingPoint: '~240°C',
        density: '1.04-1.09 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'Transparent',
        colorCN: '透明',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Linear polymer chain',
        geometryCN: '线性聚合物链',
        hybridization: 'sp3/sp2',
        properties: 'Clear, brittle thermoplastic. Expanded form (EPS) used for insulation and packaging. Fifth most produced plastic.',
        propertiesCN: '透明、脆性热塑性塑料。发泡形式（EPS）用于保温和包装。产量第五的塑料。',
        reactions: [
            { equation: 'nC₆H₅CH=CH₂ → -(CH₂-CH(C₆H₅))n-', desc: 'Addition polymerization', descCN: '加成聚合' }
        ]
    },

    // ==========================================
    // BIOMOLECULES
    // ==========================================
    'H2N-CO-NH2': {
        formula: 'H2N-CO-NH2',
        nameEN: 'Urea',
        nameCN: '尿素',
        type: 'Amide (Biomolecule)',
        typeCN: '酰胺（生物分子）',
        functionalGroups: ['-NH2 (amide)', 'C=O (carbonyl)'],
        functionalGroupsCN: ['-NH2（酰胺基）', 'C=O（羰基）'],
        bondStructure: 'H₂N-CO-NH₂',
        singleBonds: 6,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 60.06,
        boilingPoint: 'decomp',
        meltingPoint: '133°C',
        density: '1.32 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar at C=O',
        geometryCN: 'C=O处平面形',
        hybridization: 'sp2',
        properties: 'First organic compound synthesized from inorganic precursors (Wöhler, 1828). Major nitrogen fertilizer. End product of protein metabolism in mammals.',
        propertiesCN: '第一个从无机物合成的有机化合物（维勒，1828年）。主要氮肥。哺乳动物蛋白质代谢的终产物。',
        reactions: [
            { equation: 'H2NCONH2 + H2O → CO2 + 2NH3', desc: 'Hydrolysis', descCN: '水解' },
            { equation: 'H2NCONH2 + HNO3 → H2NCONH2·HNO3', desc: 'Nitric acid salt', descCN: '硝酸盐' }
        ]
    },
    'C6H12O6-glucose-ring': {
        formula: 'C6H12O6',
        nameEN: 'Glucose (cyclic)',
        nameCN: '葡萄糖（环状）',
        type: 'Carbohydrate (Monosaccharide)',
        typeCN: '碳水化合物（单糖）',
        functionalGroups: ['-OH (hydroxyl)', 'C-O-C (hemiacetal)'],
        functionalGroupsCN: ['-OH（羟基）', 'C-O-C（半缩醛）'],
        bondStructure: 'Six-membered ring (pyranose form)',
        singleBonds: 17,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 180.16,
        boilingPoint: 'decomp',
        meltingPoint: '146°C',
        density: '1.54 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Chair conformation',
        geometryCN: '椅式构象',
        hybridization: 'sp3',
        properties: 'Primary energy source for cells. Most important monosaccharide. Exists in α and β anomeric forms. Reduces Tollens and Fehling reagents.',
        propertiesCN: '细胞的主要能源。最重要的单糖。存在α和β异头物形式。可还原托伦试剂和费林试剂。',
        reactions: [
            { equation: 'C6H12O6 + 6O2 → 6CO2 + 6H2O', desc: 'Cellular respiration', descCN: '细胞呼吸' },
            { equation: 'C6H12O6 + 2Cu(OH)2 → Cu2O↓ (red)', desc: 'Fehling test', descCN: '费林试验' }
        ]
    },

    // ==========================================
    // ALKYNES (additional)
    // ==========================================
    'C2H2': {
        formula: 'C2H2',
        nameEN: 'Acetylene',
        nameCN: '乙炔',
        type: 'Alkyne',
        typeCN: '炔烃',
        functionalGroups: ['-C≡C- (alkyne)'],
        functionalGroupsCN: ['-C≡C-（炔键）'],
        bondStructure: 'H-C≡C-H',
        singleBonds: 2,
        doubleBonds: 0,
        tripleBonds: 1,
        aromaticRing: false,
        molecularMass: 26.04,
        boilingPoint: '-84°C',
        meltingPoint: '-80.8°C',
        density: '1.097 kg/m³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Nonpolar',
        polarityCN: '非极性',
        geometry: 'Linear',
        geometryCN: '直线形',
        hybridization: 'sp',
        properties: 'Simplest alkyne. Burns with an extremely hot oxy-acetylene flame (3300°C). Important industrial chemical.',
        propertiesCN: '最简单的炔烃。氧炔焰燃烧温度极高（3300°C）。重要的工业化学品。',
        reactions: [
            { equation: '2C2H2 + 5O2 → 4CO2 + 2H2O', desc: 'Combustion', descCN: '燃烧' },
            { equation: 'C2H2 + 2Br2 → C2H2Br4', desc: 'Bromine addition', descCN: '溴加成' },
            { equation: 'C2H2 + HCl → CH2=CHCl', desc: 'HCl addition (vinyl chloride)', descCN: 'HCl加成（氯乙烯）' }
        ]
    },

    // ==========================================
    // AMINES (additional)
    // ==========================================
    'C2H5NH2': {
        formula: 'C2H5NH2',
        nameEN: 'Ethylamine',
        nameCN: '乙胺',
        type: 'Amine',
        typeCN: '胺',
        functionalGroups: ['-NH2 (primary amine)'],
        functionalGroupsCN: ['-NH2（伯胺）'],
        bondStructure: 'CH₃-CH₂-NH₂',
        singleBonds: 8,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 45.08,
        boilingPoint: '16.6°C',
        meltingPoint: '-81°C',
        density: '0.689 g/cm³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Pyramidal at N',
        geometryCN: 'N处三角锥形',
        hybridization: 'sp3',
        properties: 'Simple primary amine. Fishy odor. Stronger base than methylamine. Used in organic synthesis.',
        propertiesCN: '简单伯胺。鱼腥味。碱性比甲胺强。用于有机合成。',
        reactions: [
            { equation: 'C2H5NH2 + HCl → C2H5NH3⁺Cl⁻', desc: 'Protonation', descCN: '质子化' },
            { equation: 'C2H5NH2 + CH3Cl → C2H5NHCH3 + HCl', desc: 'N-Methylation', descCN: 'N-甲基化' }
        ]
    },
    '(C2H5)2NH': {
        formula: '(C2H5)2NH',
        nameEN: 'Diethylamine',
        nameCN: '二乙胺',
        type: 'Amine',
        typeCN: '胺',
        functionalGroups: ['-NH- (secondary amine)'],
        functionalGroupsCN: ['-NH-（仲胺）'],
        bondStructure: '(CH₃CH₂)₂NH',
        singleBonds: 15,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 73.14,
        boilingPoint: '55.5°C',
        meltingPoint: '-50°C',
        density: '0.707 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Pyramidal at N',
        geometryCN: 'N处三角锥形',
        hybridization: 'sp3',
        properties: 'Secondary amine. Strong base. Used in pharmaceutical and agrochemical synthesis.',
        propertiesCN: '仲胺。强碱。用于药物和农药合成。',
        reactions: [
            { equation: '(C2H5)2NH + HNO2 → (C2H5)2N-NO + H2O', desc: 'Nitrosation', descCN: '亚硝化' }
        ]
    },
    '(CH3)3N': {
        formula: '(CH3)3N',
        nameEN: 'Trimethylamine',
        nameCN: '三甲胺',
        type: 'Amine',
        typeCN: '胺',
        functionalGroups: ['>N- (tertiary amine)'],
        functionalGroupsCN: ['>N-（叔胺）'],
        bondStructure: '(CH₃)₃N',
        singleBonds: 9,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 59.11,
        boilingPoint: '2.9°C',
        meltingPoint: '-117.2°C',
        density: '0.670 g/cm³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Pyramidal at N',
        geometryCN: 'N处三角锥形',
        hybridization: 'sp3',
        properties: 'Tertiary amine with strong fishy odor. Found in rotting fish. Used in chemical synthesis.',
        propertiesCN: '叔胺，有强烈鱼腥味。存在于腐烂鱼类中。用于化学合成。',
        reactions: [
            { equation: '(CH3)3N + CH3I → (CH3)4N⁺I⁻', desc: 'Quaternization', descCN: '季铵化' }
        ]
    },

    // ==========================================
    // ETHERS (additional)
    // ==========================================
    'CH3OCH3-ether': {
        formula: 'CH3OCH3',
        nameEN: 'Dimethyl Ether (DME)',
        nameCN: '二甲醚',
        type: 'Ether',
        typeCN: '醚',
        functionalGroups: ['-O- (ether)'],
        functionalGroupsCN: ['-O-（醚键）'],
        bondStructure: 'CH₃-O-CH₃',
        singleBonds: 8,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 46.07,
        boilingPoint: '-24.8°C',
        meltingPoint: '-141.5°C',
        density: '1.97 kg/m³ (gas)',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Slightly polar',
        polarityCN: '弱极性',
        geometry: 'Bent at O',
        geometryCN: 'O处弯曲形',
        hybridization: 'sp3',
        properties: 'Simplest ether. Used as aerosol propellant and refrigerant. Being explored as diesel替代品.',
        propertiesCN: '最简单的醚。用作气雾推进剂和制冷剂。正在探索作为柴油替代品。',
        reactions: [
            { equation: 'CH3OCH3 + HBr → CH3Br + CH3OH', desc: 'Cleavage by HBr', descCN: 'HBr裂解' }
        ]
    },

    // ==========================================
    // NITRILES (additional)
    // ==========================================
    'C6H5CN': {
        formula: 'C6H5CN',
        nameEN: 'Benzonitrile',
        nameCN: '苯甲腈',
        type: 'Nitrile',
        typeCN: '腈',
        functionalGroups: ['-C≡N (nitrile)', 'phenyl ring'],
        functionalGroupsCN: ['-C≡N（氰基）', '苯环'],
        bondStructure: 'C₆H₅-C≡N',
        singleBonds: 7,
        doubleBonds: 0,
        tripleBonds: 1,
        aromaticRing: true,
        molecularMass: 103.12,
        boilingPoint: '191°C',
        meltingPoint: '-13°C',
        density: '1.01 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Linear at C≡N',
        geometryCN: 'C≡N处直线形',
        hybridization: 'sp2/sp',
        properties: 'Aromatic nitrile with almond-like odor. Used as a solvent and intermediate in organic synthesis.',
        propertiesCN: '芳香腈，有杏仁味。用作溶剂和有机合成中间体。',
        reactions: [
            { equation: 'C6H5CN + 2H2O → C6H5COOH + NH3', desc: 'Hydrolysis to benzoic acid', descCN: '水解为苯甲酸' }
        ]
    },

    // ==========================================
    // AMIDES (additional)
    // ==========================================
    'HCONH2': {
        formula: 'HCONH2',
        nameEN: 'Formamide',
        nameCN: '甲酰胺',
        type: 'Amide',
        typeCN: '酰胺',
        functionalGroups: ['-CHO (formyl)', '-NH2 (amide)'],
        functionalGroupsCN: ['-CHO（甲酰基）', '-NH2（酰胺基）'],
        bondStructure: 'H-CO-NH₂',
        singleBonds: 4,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 45.04,
        boilingPoint: '210°C',
        meltingPoint: '2.5°C',
        density: '1.134 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar at C=O',
        geometryCN: 'C=O处平面形',
        hybridization: 'sp2',
        properties: 'Simplest amide (besides formamide itself). Excellent solvent for ionic compounds. Used in pharmaceutical synthesis.',
        propertiesCN: '最简单的酰胺。离子化合物的优良溶剂。用于药物合成。',
        reactions: [
            { equation: 'HCONH2 + H2O → HCOOH + NH3', desc: 'Hydrolysis', descCN: '水解' }
        ]
    },
    'CH3CONHCH3': {
        formula: 'CH3CONHCH3',
        nameEN: 'N-Methylacetamide',
        nameCN: 'N-甲基乙酰胺',
        type: 'Amide',
        typeCN: '酰胺',
        functionalGroups: ['-CONH- (secondary amide)'],
        functionalGroupsCN: ['-CONH-（仲酰胺）'],
        bondStructure: 'CH₃-CO-NH-CH₃',
        singleBonds: 9,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 73.09,
        boilingPoint: '205°C',
        meltingPoint: '28°C',
        density: '0.937 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar at C=O',
        geometryCN: 'C=O处平面形',
        hybridization: 'sp2',
        properties: 'Secondary amide. Model compound for studying peptide bond properties. Polar aprotic solvent.',
        propertiesCN: '仲酰胺。研究肽键性质的模型化合物。极性非质子溶剂。',
        reactions: [
            { equation: 'CH3CONHCH3 + H2O → CH3COOH + CH3NH2', desc: 'Hydrolysis', descCN: '水解' }
        ]
    },

    // ==========================================
    // HETEROCYCLIC COMPOUNDS (additional)
    // ==========================================
    'C4H5N': {
        formula: 'C4H5N',
        nameEN: 'Pyrrole',
        nameCN: '吡咯',
        type: 'Heterocyclic (Aromatic)',
        typeCN: '杂环化合物（芳香族）',
        functionalGroups: ['N-H in aromatic ring'],
        functionalGroupsCN: ['芳香环中的N-H'],
        bondStructure: 'Five-membered ring with one NH',
        singleBonds: 4,
        doubleBonds: 2,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 67.09,
        boilingPoint: '131°C',
        meltingPoint: '-23°C',
        density: '0.967 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar pentagonal',
        geometryCN: '平面五元环',
        hybridization: 'sp2',
        properties: 'Aromatic heterocycle. N lone pair participates in aromaticity (6π electrons). Weak acid (N-H). Found in porphyrins and chlorophyll.',
        propertiesCN: '芳香杂环。N孤对电子参与芳香性（6π电子）。弱酸（N-H）。存在于卟啉和叶绿素中。',
        reactions: [
            { equation: 'C4H5N + Br2 → C4H4NBr + HBr', desc: 'Electrophilic substitution', descCN: '亲电取代' }
        ]
    },
    'C4H4O': {
        formula: 'C4H4O',
        nameEN: 'Furan',
        nameCN: '呋喃',
        type: 'Heterocyclic (Aromatic)',
        typeCN: '杂环化合物（芳香族）',
        functionalGroups: ['-O- in aromatic ring'],
        functionalGroupsCN: ['芳香环中的-O-'],
        bondStructure: 'Five-membered ring with one O',
        singleBonds: 4,
        doubleBonds: 2,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 68.07,
        boilingPoint: '31.4°C',
        meltingPoint: '-85.6°C',
        density: '0.936 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Slightly soluble',
        solubilityCN: '微溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar pentagonal',
        geometryCN: '平面五元环',
        hybridization: 'sp2',
        properties: 'Aromatic heterocycle with oxygen. Less aromatic than benzene. Found in wood smoke. Used in resin synthesis.',
        propertiesCN: '含氧芳香杂环。芳香性弱于苯。存在于木烟中。用于树脂合成。',
        reactions: [
            { equation: 'C4H4O + H2 → C4H8O (THF)', desc: 'Hydrogenation', descCN: '加氢' }
        ]
    },
    'C3H4N2': {
        formula: 'C3H4N2',
        nameEN: 'Imidazole',
        nameCN: '咪唑',
        type: 'Heterocyclic (Aromatic)',
        typeCN: '杂环化合物（芳香族）',
        functionalGroups: ['two N atoms in aromatic ring'],
        functionalGroupsCN: ['芳香环中的两个N原子'],
        bondStructure: 'Five-membered ring with two N',
        singleBonds: 3,
        doubleBonds: 2,
        tripleBonds: 0,
        aromaticRing: true,
        molecularMass: 68.08,
        boilingPoint: '256°C',
        meltingPoint: '90°C',
        density: '1.23 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar pentagonal',
        geometryCN: '平面五元环',
        hybridization: 'sp2',
        properties: 'Important heterocycle in biochemistry. Found in histidine amino acid and histamine. Amphiprotic (can donate or accept protons).',
        propertiesCN: '生物化学中重要的杂环。存在于组氨酸和组胺中。两性（可给出或接受质子）。',
        reactions: [
            { equation: 'Imidazole + HCl → Imidazolium⁺Cl⁻', desc: 'Protonation', descCN: '质子化' }
        ]
    },

    // ==========================================
    // CARBOHYDRATES (additional)
    // ==========================================
    'C6H12O6-mannose': {
        formula: 'C6H12O6',
        nameEN: 'Mannose',
        nameCN: '甘露糖',
        type: 'Carbohydrate (Monosaccharide)',
        typeCN: '碳水化合物（单糖）',
        functionalGroups: ['-OH (hydroxyl)', 'C-O-C (hemiacetal)'],
        functionalGroupsCN: ['-OH（羟基）', 'C-O-C（半缩醛）'],
        bondStructure: 'Six-membered ring (pyranose)',
        singleBonds: 17,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 180.16,
        boilingPoint: 'decomp',
        meltingPoint: '132°C',
        density: '1.54 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Highly soluble',
        solubilityCN: '极易溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Chair conformation',
        geometryCN: '椅式构象',
        hybridization: 'sp3',
        properties: 'C-2 epimer of glucose. Important in glycoprotein biology. Found in cranberries and peaches.',
        propertiesCN: '葡萄糖的C-2差向异构体。在糖蛋白生物学中很重要。存在于蔓越莓和桃子中。',
        reactions: [
            { equation: 'C6H12O6 + 6O2 → 6CO2 + 6H2O', desc: 'Metabolism', descCN: '代谢' }
        ]
    },

    // ==========================================
    // LIPIDS & STEROIDS
    // ==========================================
    'C27H46O': {
        formula: 'C27H46O',
        nameEN: 'Cholesterol',
        nameCN: '胆固醇',
        type: 'Steroid',
        typeCN: '甾体',
        functionalGroups: ['-OH (hydroxyl)', 'steroid ring system'],
        functionalGroupsCN: ['-OH（羟基）', '甾体环系'],
        bondStructure: 'Four fused rings (cyclopentanoperhydrophenanthrene)',
        singleBonds: 78,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 386.65,
        boilingPoint: '360°C (decomp)',
        meltingPoint: '148°C',
        density: '1.067 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Insoluble',
        solubilityCN: '不溶',
        polarity: 'Amphiphilic',
        polarityCN: '两亲性',
        geometry: 'Planar ring system',
        geometryCN: '平面环系',
        hybridization: 'sp3',
        properties: 'Essential steroid in cell membranes. Precursor to hormones (testosterone, estrogen) and vitamin D. High levels linked to cardiovascular disease.',
        propertiesCN: '细胞膜中必需的甾体。激素（睾酮、雌激素）和维生素D的前体。高水平与心血管疾病相关。',
        reactions: [
            { equation: 'Cholesterol → Bile acids', desc: 'Oxidation in liver', descCN: '肝脏氧化' }
        ]
    },

    // ==========================================
    // AMINO ACIDS (additional)
    // ==========================================
    'HOOCCH(NH2)CH2COOH': {
        formula: 'HOOCCH(NH2)CH2COOH',
        nameEN: 'Aspartic Acid',
        nameCN: '天冬氨酸',
        type: 'Amino Acid',
        typeCN: '氨基酸',
        functionalGroups: ['-NH2 (amino)', '-COOH (carboxyl) x2'],
        functionalGroupsCN: ['-NH2（氨基）', '-COOH（羧基）x2'],
        bondStructure: 'HOOC-CH(NH₂)-CH₂-COOH',
        singleBonds: 10,
        doubleBonds: 2,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 133.10,
        boilingPoint: 'decomp',
        meltingPoint: '270°C (decomp)',
        density: '1.66 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral at Cα',
        geometryCN: 'Cα处四面体形',
        hybridization: 'sp3',
        properties: 'Non-essential amino acid with acidic side chain. One of the 20 standard amino acids. Important in neurotransmitter synthesis.',
        propertiesCN: '含酸性侧链的非必需氨基酸。20种标准氨基酸之一。在神经递质合成中很重要。',
        reactions: [
            { equation: 'Asp + Glu → Asp-Glu (peptide)', desc: 'Peptide bond formation', descCN: '肽键形成' }
        ]
    },
    'HOCH2CH(NH2)COOH-serine': {
        formula: 'HOCH2CH(NH2)COOH',
        nameEN: 'Serine',
        nameCN: '丝氨酸',
        type: 'Amino Acid',
        typeCN: '氨基酸',
        functionalGroups: ['-OH (hydroxyl)', '-NH2 (amino)', '-COOH (carboxyl)'],
        functionalGroupsCN: ['-OH（羟基）', '-NH2（氨基）', '-COOH（羧基）'],
        bondStructure: 'HO-CH₂-CH(NH₂)-COOH',
        singleBonds: 9,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 105.09,
        boilingPoint: 'decomp',
        meltingPoint: '246°C (decomp)',
        density: '1.60 g/cm³',
        state: 'Solid',
        stateCN: '固态',
        color: 'White',
        colorCN: '白色',
        solubility: 'Soluble',
        solubilityCN: '可溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Tetrahedral at Cα',
        geometryCN: 'Cα处四面体形',
        hybridization: 'sp3',
        properties: 'Non-essential amino acid with hydroxyl side chain. Component of phospholipids. Important in enzyme active sites.',
        propertiesCN: '含羟基侧链的非必需氨基酸。磷脂的成分。在酶活性位点中很重要。',
        reactions: [
            { equation: 'Serine → Pyruvate + NH3', desc: 'Deamination', descCN: '脱氨' }
        ]
    },

    // ==========================================
    // ACID DERIVATIVES
    // ==========================================
    '(CH3CO)2O': {
        formula: '(CH3CO)2O',
        nameEN: 'Acetic Anhydride',
        nameCN: '乙酸酐',
        type: 'Acid Anhydride',
        typeCN: '酸酐',
        functionalGroups: ['-CO-O-CO- (anhydride)'],
        functionalGroupsCN: ['-CO-O-CO-（酸酐键）'],
        bondStructure: 'CH₃-CO-O-CO-CH₃',
        singleBonds: 9,
        doubleBonds: 2,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 102.09,
        boilingPoint: '140°C',
        meltingPoint: '-73°C',
        density: '1.082 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Reacts with water',
        solubilityCN: '与水反应',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar at C=O',
        geometryCN: 'C=O处平面形',
        hybridization: 'sp2',
        properties: 'Reactive acylating agent. Used to make aspirin (acetylsalicylic acid) and cellulose acetate. Strong vinegar-like odor.',
        propertiesCN: '反应性酰化剂。用于制造阿司匹林（乙酰水杨酸）和醋酸纤维素。强烈的醋味。',
        reactions: [
            { equation: '(CH3CO)2O + H2O → 2CH3COOH', desc: 'Hydrolysis', descCN: '水解' },
            { equation: '(CH3CO)2O + C6H4(OH)COOH → CH3COOC6H4COOH + CH3COOH', desc: 'Aspirin synthesis', descCN: '阿司匹林合成' }
        ]
    },
    'CH3COCl': {
        formula: 'CH3COCl',
        nameEN: 'Acetyl Chloride',
        nameCN: '乙酰氯',
        type: 'Acid Halide',
        typeCN: '酰卤',
        functionalGroups: ['-COCl (acyl chloride)'],
        functionalGroupsCN: ['-COCl（酰氯）'],
        bondStructure: 'CH₃-CO-Cl',
        singleBonds: 4,
        doubleBonds: 1,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 78.50,
        boilingPoint: '52°C',
        meltingPoint: '-112°C',
        density: '1.104 g/cm³',
        state: 'Liquid',
        stateCN: '液态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Reacts with water',
        solubilityCN: '与水反应',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Planar at C=O',
        geometryCN: 'C=O处平面形',
        hybridization: 'sp2',
        properties: 'Highly reactive acylating agent. Fumes in moist air. Used in organic synthesis for acetylation reactions.',
        propertiesCN: '高反应性酰化剂。在潮湿空气中冒烟。用于有机合成中的乙酰化反应。',
        reactions: [
            { equation: 'CH3COCl + H2O → CH3COOH + HCl', desc: 'Hydrolysis', descCN: '水解' },
            { equation: 'CH3COCl + C2H5OH → CH3COOC2H5 + HCl', desc: 'Esterification', descCN: '酯化' }
        ]
    },

    // ==========================================
    // ORGANOMETALLIC COMPOUNDS
    // ==========================================
    'C2H5MgBr': {
        formula: 'C2H5MgBr',
        nameEN: 'Ethylmagnesium Bromide',
        nameCN: '溴化乙基镁',
        type: 'Grignard Reagent',
        typeCN: '格氏试剂',
        functionalGroups: ['C-Mg (organometallic)', '-Br'],
        functionalGroupsCN: ['C-Mg（有机金属）', '-Br'],
        bondStructure: 'CH₃CH₂-Mg-Br',
        singleBonds: 8,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 133.27,
        boilingPoint: 'decomp',
        meltingPoint: 'decomp',
        density: '1.02 g/cm³',
        state: 'Solution in ether',
        stateCN: '乙醚溶液',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Reacts with water',
        solubilityCN: '与水反应',
        polarity: 'Polar (C-Mg bond)',
        polarityCN: '极性（C-Mg键）',
        geometry: 'Linear at C-Mg',
        geometryCN: 'C-Mg处直线形',
        hybridization: 'sp3',
        properties: 'Classic Grignard reagent. Carbon acts as nucleophile. Must be prepared under anhydrous conditions. Key reagent in organic synthesis.',
        propertiesCN: '经典格氏试剂。碳作为亲核试剂。必须在无水条件下制备。有机合成中的关键试剂。',
        reactions: [
            { equation: 'C2H5MgBr + CO2 → C2H5COOH', desc: 'Carboxylation', descCN: '羧化' },
            { equation: 'C2H5MgBr + HCHO → C2H5CH2OH', desc: 'Formaldehyde addition', descCN: '甲醛加成' }
        ]
    },

    // ==========================================
    // EPOXIDES
    // ==========================================
    'C2H4O-epoxide': {
        formula: 'C2H4O',
        nameEN: 'Ethylene Oxide',
        nameCN: '环氧乙烷',
        type: 'Epoxide',
        typeCN: '环氧化物',
        functionalGroups: ['-O- (three-membered ring)'],
        functionalGroupsCN: ['-O-（三元环）'],
        bondStructure: 'Three-membered ring: CH₂-O-CH₂',
        singleBonds: 6,
        doubleBonds: 0,
        tripleBonds: 0,
        aromaticRing: false,
        molecularMass: 44.05,
        boilingPoint: '10.7°C',
        meltingPoint: '-111.7°C',
        density: '0.882 g/cm³',
        state: 'Gas',
        stateCN: '气态',
        color: 'Colorless',
        colorCN: '无色',
        solubility: 'Miscible',
        solubilityCN: '混溶',
        polarity: 'Polar',
        polarityCN: '极性',
        geometry: 'Triangle (3-membered ring)',
        geometryCN: '三角形（三元环）',
        hybridization: 'sp3',
        properties: 'Highly strained three-membered ring. Very reactive. Major industrial chemical for making ethylene glycol and surfactants. Toxic and carcinogenic.',
        propertiesCN: '高度张力的三元环。反应性极强。生产乙二醇和表面活性剂的主要工业化学品。有毒且致癌。',
        reactions: [
            { equation: 'C2H4O + H2O → HOCH2CH2OH', desc: 'Hydrolysis to ethylene glycol', descCN: '水解为乙二醇' }
        ]
    }
};

// Organic search index
const OrganicSearchIndex = [];
Object.keys(OrganicDB).forEach(key => {
    const o = OrganicDB[key];
    OrganicSearchIndex.push({
        formula: key,
        type: 'organic',
        display: `${key} - ${o.nameEN}`,
        data: o
    });
});

// Render organic compound result
function renderOrganicResult(compoundKey) {
    const compound = OrganicDB[compoundKey];
    if (!compound) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';
        return `<div class="error-message">${isCN ? '未找到该有机化合物。请尝试下面的示例之一。' : 'Organic compound not found. Try one of the examples below.'}</div>`;
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    let html = '';

    // Structure card
    html += `<div class="result-card">`;
    html += `<div class="organic-structure">`;
    html += `<div>`;
    html += `<div class="structure-formula">${formatFormula(compound.formula)}</div>`;
    html += `<div class="structure-name">${isCN ? compound.nameCN : compound.nameEN}</div>`;
    html += `<div class="structure-type">${isCN ? compound.typeCN : compound.type}</div>`;
    html += `</div>`;
    html += `</div>`;

    // Functional groups
    html += `<div class="functional-groups">`;
    const groups = isCN ? compound.functionalGroupsCN : compound.functionalGroups;
    groups.forEach(g => {
        html += `<span class="functional-group">${g}</span>`;
    });
    html += `</div>`;

    // Bond display
    html += `<div class="bond-display">`;
    if (compound.singleBonds > 0) {
        html += `<div class="bond-item"><div class="bond-line"></div> ${compound.singleBonds} ${isCN ? '单键' : 'single'}</div>`;
    }
    if (compound.doubleBonds > 0) {
        html += `<div class="bond-item"><div class="bond-line double"></div> ${compound.doubleBonds} ${isCN ? '双键' : 'double'}</div>`;
    }
    if (compound.tripleBonds > 0) {
        html += `<div class="bond-item"><div class="bond-line triple"></div> ${compound.tripleBonds} ${isCN ? '三键' : 'triple'}</div>`;
    }
    if (compound.aromaticRing) {
        html += `<div class="bond-item"><span style="color:var(--accent); font-weight:600;">⬡</span> ${isCN ? '芳香环' : 'Aromatic ring'}</div>`;
    }
    html += `</div>`;
    html += `</div>`;

    // Properties card
    html += `<div class="result-card" style="animation-delay: 0.1s">`;
    html += `<h3>${isCN ? '物理性质' : 'Physical Properties'}</h3>`;
    html += `<div class="info-grid">`;
    html += makeInfoItem(isCN ? '分子量' : 'Molecular Mass', compound.molecularMass + ' g/mol');
    html += makeInfoItem(isCN ? '沸点' : 'Boiling Point', compound.boilingPoint);
    html += makeInfoItem(isCN ? '熔点' : 'Melting Point', compound.meltingPoint);
    html += makeInfoItem(isCN ? '密度' : 'Density', compound.density);
    html += makeInfoItem(isCN ? '状态' : 'State', isCN ? compound.stateCN : compound.state);
    html += makeInfoItem(isCN ? '颜色' : 'Color', isCN ? compound.colorCN : compound.color);
    html += makeInfoItem(isCN ? '溶解性' : 'Solubility', isCN ? compound.solubilityCN : compound.solubility);
    html += makeInfoItem(isCN ? '极性' : 'Polarity', isCN ? compound.polarityCN : compound.polarity);
    html += makeInfoItem(isCN ? '几何构型' : 'Geometry', isCN ? compound.geometryCN : compound.geometry);
    html += makeInfoItem(isCN ? '杂化方式' : 'Hybridization', compound.hybridization);
    html += makeInfoItem(isCN ? '结构式' : 'Structure', compound.bondStructure);
    html += `</div>`;
    html += `<div class="tag-row">`;
    html += `<span class="tag tag-organic">${isCN ? compound.typeCN : compound.type}</span>`;
    if (compound.aromaticRing) html += `<span class="tag tag-acid">${isCN ? '芳香族' : 'Aromatic'}</span>`;
    if (compound.polarity === 'Polar' || compound.polarityCN === '极性') html += `<span class="tag tag-base">${isCN ? '极性' : 'Polar'}</span>`;
    else html += `<span class="tag tag-neutral">${isCN ? '非极性' : 'Nonpolar'}</span>`;
    html += `</div>`;
    html += `</div>`;

    // Properties description card
    html += `<div class="result-card" style="animation-delay: 0.2s">`;
    html += `<h3>${isCN ? '化学性质' : 'Chemical Properties'}</h3>`;
    html += `<div class="desc-block">${isCN ? compound.propertiesCN : compound.properties}</div>`;
    html += `</div>`;

    // Reactions card
    if (compound.reactions && compound.reactions.length > 0) {
        html += `<div class="result-card" style="animation-delay: 0.3s">`;
        html += `<h3>${isCN ? '典型反应' : 'Typical Reactions'}</h3>`;
        html += `<div class="equation-steps">`;
        compound.reactions.forEach((r, i) => {
            html += `<div class="equation-step" style="animation-delay: ${0.1 * (i + 1)}s">`;
            html += `<div class="step-number">${i + 1}</div>`;
            html += `<div class="step-content">`;
            html += `<span style="font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;">${formatFormula(r.equation)}</span>`;
            html += `<br><span style="color: var(--text-tertiary); font-size: 0.8rem;">${isCN ? r.descCN : r.desc}</span>`;
            html += `</div>`;
            html += `</div>`;
        });
        html += `</div>`;
        html += `</div>`;
    }

    return html;
}

// Analyze organic compound input
function analyzeOrganic(input) {
    const clean = input.trim();

    // Direct match
    if (OrganicDB[clean]) {
        return renderOrganicResult(clean);
    }

    // Case-insensitive match
    const upper = clean.toUpperCase();
    for (const key of Object.keys(OrganicDB)) {
        if (key.toUpperCase() === upper) {
            return renderOrganicResult(key);
        }
    }

    // Name search
    const lowerClean = clean.toLowerCase();
    for (const key of Object.keys(OrganicDB)) {
        const o = OrganicDB[key];
        if (o.nameEN.toLowerCase().includes(lowerClean) ||
            o.nameCN.includes(clean) ||
            o.type.toLowerCase().includes(lowerClean) ||
            o.typeCN.includes(clean)) {
            return renderOrganicResult(key);
        }
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';
    return `<div class="error-message">${isCN ? '未找到该有机化合物。请尝试下面的示例之一。' : 'Organic compound not found. Try one of the examples below.'}</div>`;
}
