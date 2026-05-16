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
