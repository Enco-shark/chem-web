/* ============================================
   Chemistry Database Generator
   Systematically generates compound entries
   ============================================ */

const ChemDBGenerator = (() => {

    // ==========================================
    // Common Compound Templates
    // ==========================================

    // Metal oxides
    const METAL_OXIDES = [
        { metal: 'Li', nameEN: 'Lithium', nameCN: '锂', mass: 6.941, oxide: 'Li2O', massOxide: 29.88, category: 'alkali-metal' },
        { metal: 'Na', nameEN: 'Sodium', nameCN: '钠', mass: 22.990, oxide: 'Na2O', massOxide: 61.98, category: 'alkali-metal' },
        { metal: 'K', nameEN: 'Potassium', nameCN: '钾', mass: 39.098, oxide: 'K2O', massOxide: 94.20, category: 'alkali-metal' },
        { metal: 'Rb', nameEN: 'Rubidium', nameCN: '铷', mass: 85.468, oxide: 'Rb2O', massOxide: 186.94, category: 'alkali-metal' },
        { metal: 'Cs', nameEN: 'Cesium', nameCN: '铯', mass: 132.905, oxide: 'Cs2O', massOxide: 281.81, category: 'alkali-metal' },
        { metal: 'Be', nameEN: 'Beryllium', nameCN: '铍', mass: 9.012, oxide: 'BeO', massOxide: 25.01, category: 'alkaline-earth' },
        { metal: 'Mg', nameEN: 'Magnesium', nameCN: '镁', mass: 24.305, oxide: 'MgO', massOxide: 40.30, category: 'alkaline-earth' },
        { metal: 'Ca', nameEN: 'Calcium', nameCN: '钙', mass: 40.078, oxide: 'CaO', massOxide: 56.08, category: 'alkaline-earth' },
        { metal: 'Sr', nameEN: 'Strontium', nameCN: '锶', mass: 87.62, oxide: 'SrO', massOxide: 103.62, category: 'alkaline-earth' },
        { metal: 'Ba', nameEN: 'Barium', nameCN: '钡', mass: 137.327, oxide: 'BaO', massOxide: 153.33, category: 'alkaline-earth' },
        { metal: 'Al', nameEN: 'Aluminum', nameCN: '铝', mass: 26.982, oxide: 'Al2O3', massOxide: 101.96, category: 'post-transition' },
        { metal: 'Zn', nameEN: 'Zinc', nameCN: '锌', mass: 65.38, oxide: 'ZnO', massOxide: 81.38, category: 'transition' },
        { metal: 'Fe', nameEN: 'Iron', nameCN: '铁', mass: 55.845, oxide: 'Fe2O3', massOxide: 159.69, category: 'transition' },
        { metal: 'Cu', nameEN: 'Copper', nameCN: '铜', mass: 63.546, oxide: 'CuO', massOxide: 79.55, category: 'transition' },
        { metal: 'Pb', nameEN: 'Lead', nameCN: '铅', mass: 207.2, oxide: 'PbO', massOxide: 223.20, category: 'post-transition' },
        { metal: 'Sn', nameEN: 'Tin', nameCN: '锡', mass: 118.710, oxide: 'SnO2', massOxide: 150.71, category: 'post-transition' },
        { metal: 'Ti', nameEN: 'Titanium', nameCN: '钛', mass: 47.867, oxide: 'TiO2', massOxide: 79.87, category: 'transition' },
        { metal: 'Mn', nameEN: 'Manganese', nameCN: '锰', mass: 54.938, oxide: 'MnO2', massOxide: 86.94, category: 'transition' },
        { metal: 'Cr', nameEN: 'Chromium', nameCN: '铬', mass: 51.996, oxide: 'Cr2O3', massOxide: 152.00, category: 'transition' },
        { metal: 'Ni', nameEN: 'Nickel', nameCN: '镍', mass: 58.693, oxide: 'NiO', massOxide: 74.69, category: 'transition' },
        { metal: 'Co', nameEN: 'Cobalt', nameCN: '钴', mass: 58.933, oxide: 'CoO', massOxide: 74.93, category: 'transition' },
        { metal: 'Ag', nameEN: 'Silver', nameCN: '银', mass: 107.868, oxide: 'Ag2O', massOxide: 231.74, category: 'transition' },
        { metal: 'Hg', nameEN: 'Mercury', nameCN: '汞', mass: 200.592, oxide: 'HgO', massOxide: 216.59, category: 'transition' },
    ];

    // Metal hydroxides
    const METAL_HYDROXIDES = [
        { metal: 'Li', nameCN: '锂', formula: 'LiOH', mass: 23.95, solubility: 'Soluble' },
        { metal: 'Na', nameCN: '钠', formula: 'NaOH', mass: 40.00, solubility: 'Highly soluble' },
        { metal: 'K', nameCN: '钾', formula: 'KOH', mass: 56.11, solubility: 'Highly soluble' },
        { metal: 'Ca', nameCN: '钙', formula: 'Ca(OH)2', mass: 74.09, solubility: 'Slightly soluble' },
        { metal: 'Ba', nameCN: '钡', formula: 'Ba(OH)2', mass: 171.34, solubility: 'Soluble' },
        { metal: 'Mg', nameCN: '镁', formula: 'Mg(OH)2', mass: 58.32, solubility: 'Slightly soluble' },
        { metal: 'Al', nameCN: '铝', formula: 'Al(OH)3', mass: 78.00, solubility: 'Insoluble' },
        { metal: 'Fe', nameCN: '铁', formula: 'Fe(OH)3', mass: 106.87, solubility: 'Insoluble' },
        { metal: 'Cu', nameCN: '铜', formula: 'Cu(OH)2', mass: 97.56, solubility: 'Insoluble' },
        { metal: 'Zn', nameCN: '锌', formula: 'Zn(OH)2', mass: 99.40, solubility: 'Insoluble' },
        { metal: 'Pb', nameCN: '铅', formula: 'Pb(OH)2', mass: 241.21, solubility: 'Insoluble' },
        { metal: 'Ag', nameCN: '银', formula: 'AgOH', mass: 124.88, solubility: 'Insoluble' },
    ];

    // Common salts (anion, cation combinations)
    const CATIONS = [
        { symbol: 'Na', nameEN: 'Sodium', nameCN: '钠', charge: 1, mass: 22.990 },
        { symbol: 'K', nameEN: 'Potassium', nameCN: '钾', charge: 1, mass: 39.098 },
        { symbol: 'Li', nameEN: 'Lithium', nameCN: '锂', charge: 1, mass: 6.941 },
        { symbol: 'NH4', nameEN: 'Ammonium', nameCN: '铵', charge: 1, mass: 18.039 },
        { symbol: 'Ca', nameEN: 'Calcium', nameCN: '钙', charge: 2, mass: 40.078 },
        { symbol: 'Mg', nameEN: 'Magnesium', nameCN: '镁', charge: 2, mass: 24.305 },
        { symbol: 'Ba', nameEN: 'Barium', nameCN: '钡', charge: 2, mass: 137.327 },
        { symbol: 'Fe', nameEN: 'Iron(II)', nameCN: '亚铁', charge: 2, mass: 55.845 },
        { symbol: 'Cu', nameEN: 'Copper(II)', nameCN: '铜', charge: 2, mass: 63.546 },
        { symbol: 'Zn', nameEN: 'Zinc', nameCN: '锌', charge: 2, mass: 65.38 },
        { symbol: 'Pb', nameEN: 'Lead(II)', nameCN: '铅', charge: 2, mass: 207.2 },
        { symbol: 'Ag', nameEN: 'Silver', nameCN: '银', charge: 1, mass: 107.868 },
        { symbol: 'Al', nameEN: 'Aluminum', nameCN: '铝', charge: 3, mass: 26.982 },
    ];

    const ANIONS = [
        { symbol: 'Cl', nameEN: 'Chloride', nameCN: '氯化物', charge: 1, mass: 35.45, acidName: 'Hydrochloric acid', acidNameCN: '盐酸' },
        { symbol: 'Br', nameEN: 'Bromide', nameCN: '溴化物', charge: 1, mass: 79.904, acidName: 'Hydrobromic acid', acidNameCN: '氢溴酸' },
        { symbol: 'I', nameEN: 'Iodide', nameCN: '碘化物', charge: 1, mass: 126.904, acidName: 'Hydroiodic acid', acidNameCN: '氢碘酸' },
        { symbol: 'F', nameEN: 'Fluoride', nameCN: '氟化物', charge: 1, mass: 18.998, acidName: 'Hydrofluoric acid', acidNameCN: '氢氟酸' },
        { symbol: 'NO3', nameEN: 'Nitrate', nameCN: '硝酸盐', charge: 1, mass: 62.005, acidName: 'Nitric acid', acidNameCN: '硝酸' },
        { symbol: 'SO4', nameEN: 'Sulfate', nameCN: '硫酸盐', charge: 2, mass: 96.063, acidName: 'Sulfuric acid', acidNameCN: '硫酸' },
        { symbol: 'CO3', nameEN: 'Carbonate', nameCN: '碳酸盐', charge: 2, mass: 60.009, acidName: 'Carbonic acid', acidNameCN: '碳酸' },
        { symbol: 'PO4', nameEN: 'Phosphate', nameCN: '磷酸盐', charge: 3, mass: 94.971, acidName: 'Phosphoric acid', acidNameCN: '磷酸' },
        { symbol: 'OH', nameEN: 'Hydroxide', nameCN: '氢氧化物', charge: 1, mass: 17.008, acidName: 'Water', acidNameCN: '水' },
        { symbol: 'CH3COO', nameEN: 'Acetate', nameCN: '乙酸盐', charge: 1, mass: 59.044, acidName: 'Acetic acid', acidNameCN: '乙酸' },
        { symbol: 'ClO3', nameEN: 'Chlorate', nameCN: '氯酸盐', charge: 1, mass: 83.451, acidName: 'Chloric acid', acidNameCN: '氯酸' },
        { symbol: 'MnO4', nameEN: 'Permanganate', nameCN: '高锰酸盐', charge: 1, mass: 118.936, acidName: 'Permanganic acid', acidNameCN: '高锰酸' },
        { symbol: 'CrO4', nameEN: 'Chromate', nameCN: '铬酸盐', charge: 2, mass: 115.994, acidName: 'Chromic acid', acidNameCN: '铬酸' },
        { symbol: 'SO3', nameEN: 'Sulfite', nameCN: '亚硫酸盐', charge: 2, mass: 80.063, acidName: 'Sulfurous acid', acidNameCN: '亚硫酸' },
        { symbol: 'NO2', nameEN: 'Nitrite', nameCN: '亚硝酸盐', charge: 1, mass: 46.006, acidName: 'Nitrous acid', acidNameCN: '亚硝酸' },
        { symbol: 'CN', nameEN: 'Cyanide', nameCN: '氰化物', charge: 1, mass: 26.018, acidName: 'Hydrocyanic acid', acidNameCN: '氢氰酸' },
        { symbol: 'SCN', nameEN: 'Thiocyanate', nameCN: '硫氰酸盐', charge: 1, mass: 58.083, acidName: 'Thiocyanic acid', acidNameCN: '硫氰酸' },
    ];

    // Organic compound families
    const ORGANIC_FAMILIES = {
        alkanes: [
            { formula: 'CH4', nameEN: 'Methane', nameCN: '甲烷', mass: 16.043, bp: '-161.5°C', mp: '-182.5°C' },
            { formula: 'C2H6', nameEN: 'Ethane', nameCN: '乙烷', mass: 30.070, bp: '-88.6°C', mp: '-182.8°C' },
            { formula: 'C3H8', nameEN: 'Propane', nameCN: '丙烷', mass: 44.097, bp: '-42.1°C', mp: '-187.7°C' },
            { formula: 'C4H10', nameEN: 'Butane', nameCN: '丁烷', mass: 58.123, bp: '-0.5°C', mp: '-138.3°C' },
            { formula: 'C5H12', nameEN: 'Pentane', nameCN: '戊烷', mass: 72.150, bp: '36.1°C', mp: '-129.7°C' },
            { formula: 'C6H14', nameEN: 'Hexane', nameCN: '己烷', mass: 86.177, bp: '68.7°C', mp: '-95.3°C' },
            { formula: 'C7H16', nameEN: 'Heptane', nameCN: '庚烷', mass: 100.204, bp: '98.4°C', mp: '-90.6°C' },
            { formula: 'C8H18', nameEN: 'Octane', nameCN: '辛烷', mass: 114.231, bp: '125.7°C', mp: '-56.8°C' },
            { formula: 'C10H22', nameEN: 'Decane', nameCN: '癸烷', mass: 142.286, bp: '174.1°C', mp: '-29.7°C' },
            { formula: 'C16H34', nameEN: 'Hexadecane', nameCN: '十六烷', mass: 226.446, bp: '286.8°C', mp: '18.2°C' },
            { formula: 'C20H42', nameEN: 'Eicosane', nameCN: '二十烷', mass: 282.557, bp: '343°C', mp: '36.4°C' },
        ],
        alkenes: [
            { formula: 'C2H4', nameEN: 'Ethylene', nameCN: '乙烯', mass: 28.054, bp: '-103.7°C', mp: '-169.2°C' },
            { formula: 'C3H6', nameEN: 'Propylene', nameCN: '丙烯', mass: 42.081, bp: '-47.6°C', mp: '-185.2°C' },
            { formula: 'C4H8', nameEN: '1-Butene', nameCN: '1-丁烯', mass: 56.108, bp: '-6.3°C', mp: '-185.4°C' },
            { formula: 'C5H10', nameEN: '1-Pentene', nameCN: '1-戊烯', mass: 70.134, bp: '30.0°C', mp: '-165.2°C' },
            { formula: 'C6H12', nameEN: '1-Hexene', nameCN: '1-己烯', mass: 84.161, bp: '63.4°C', mp: '-139.8°C' },
        ],
        alkynes: [
            { formula: 'C2H2', nameEN: 'Acetylene', nameCN: '乙炔', mass: 26.038, bp: '-84.0°C', mp: '-80.8°C' },
            { formula: 'C3H4', nameEN: 'Propyne', nameCN: '丙炔', mass: 40.065, bp: '-23.2°C', mp: '-102.7°C' },
            { formula: 'C4H6', nameEN: '1-Butyne', nameCN: '1-丁炔', mass: 54.092, bp: '8.1°C', mp: '-125.7°C' },
        ],
        alcohols: [
            { formula: 'CH3OH', nameEN: 'Methanol', nameCN: '甲醇', mass: 32.042, bp: '64.7°C', mp: '-97.6°C' },
            { formula: 'C2H5OH', nameEN: 'Ethanol', nameCN: '乙醇', mass: 46.069, bp: '78.4°C', mp: '-114.1°C' },
            { formula: 'C3H7OH', nameEN: 'Propanol', nameCN: '丙醇', mass: 60.096, bp: '97.2°C', mp: '-126.2°C' },
            { formula: 'C4H9OH', nameEN: 'Butanol', nameCN: '丁醇', mass: 74.123, bp: '117.7°C', mp: '-89.5°C' },
            { formula: 'C5H11OH', nameEN: 'Pentanol', nameCN: '戊醇', mass: 88.150, bp: '137.8°C', mp: '-78.9°C' },
            { formula: 'C6H13OH', nameEN: 'Hexanol', nameCN: '己醇', mass: 102.177, bp: '157.0°C', mp: '-51.6°C' },
            { formula: 'C3H8O2', nameEN: 'Propylene Glycol', nameCN: '丙二醇', mass: 76.095, bp: '188.2°C', mp: '-59.5°C' },
            { formula: 'C3H8O3', nameEN: 'Glycerol', nameCN: '甘油', mass: 92.094, bp: '290.0°C', mp: '18.2°C' },
        ],
        aldehydes: [
            { formula: 'CH2O', nameEN: 'Formaldehyde', nameCN: '甲醛', mass: 30.026, bp: '-19.1°C', mp: '-92.0°C' },
            { formula: 'C2H4O', nameEN: 'Acetaldehyde', nameCN: '乙醛', mass: 44.053, bp: '20.2°C', mp: '-123.4°C' },
            { formula: 'C3H6O', nameEN: 'Propionaldehyde', nameCN: '丙醛', mass: 58.080, bp: '48.0°C', mp: '-81.0°C' },
            { formula: 'C4H8O', nameEN: 'Butyraldehyde', nameCN: '丁醛', mass: 72.107, bp: '74.8°C', mp: '-99.0°C' },
            { formula: 'C6H5CHO', nameEN: 'Benzaldehyde', nameCN: '苯甲醛', mass: 106.124, bp: '178.1°C', mp: '-26.0°C' },
        ],
        ketones: [
            { formula: 'C3H6O', nameEN: 'Acetone', nameCN: '丙酮', mass: 58.080, bp: '56.1°C', mp: '-94.7°C' },
            { formula: 'C4H8O', nameEN: 'Butanone', nameCN: '丁酮', mass: 72.107, bp: '79.6°C', mp: '-86.7°C' },
            { formula: 'C5H10O', nameEN: '2-Pentanone', nameCN: '2-戊酮', mass: 86.134, bp: '102.3°C', mp: '-77.8°C' },
            { formula: 'C6H12O', nameEN: 'Cyclohexanone', nameCN: '环己酮', mass: 98.145, bp: '155.6°C', mp: '-16.4°C' },
        ],
        carboxylicAcids: [
            { formula: 'CH2O2', nameEN: 'Formic Acid', nameCN: '甲酸', mass: 46.026, bp: '100.8°C', mp: '8.4°C' },
            { formula: 'C2H4O2', nameEN: 'Acetic Acid', nameCN: '乙酸', mass: 60.053, bp: '117.9°C', mp: '16.6°C' },
            { formula: 'C3H6O2', nameEN: 'Propionic Acid', nameCN: '丙酸', mass: 74.080, bp: '141.1°C', mp: '-20.5°C' },
            { formula: 'C4H8O2', nameEN: 'Butyric Acid', nameCN: '丁酸', mass: 88.107, bp: '163.8°C', mp: '-5.1°C' },
            { formula: 'C5H10O2', nameEN: 'Valeric Acid', nameCN: '戊酸', mass: 102.134, bp: '186.1°C', mp: '-34.5°C' },
            { formula: 'C6H12O2', nameEN: 'Caproic Acid', nameCN: '己酸', mass: 116.161, bp: '205.8°C', mp: '-3.4°C' },
            { formula: 'C2H2O4', nameEN: 'Oxalic Acid', nameCN: '草酸', mass: 90.035, bp: '157°C (sub)', mp: '189.5°C' },
            { formula: 'C4H6O6', nameEN: 'Tartaric Acid', nameCN: '酒石酸', mass: 150.088, bp: '399.3°C', mp: '171.0°C' },
            { formula: 'C6H8O7', nameEN: 'Citric Acid', nameCN: '柠檬酸', mass: 192.124, bp: '310.0°C', mp: '153.0°C' },
        ],
        esters: [
            { formula: 'C3H6O2', nameEN: 'Methyl Acetate', nameCN: '乙酸甲酯', mass: 74.080, bp: '57.1°C', mp: '-98.1°C' },
            { formula: 'C4H8O2', nameEN: 'Ethyl Acetate', nameCN: '乙酸乙酯', mass: 88.107, bp: '77.1°C', mp: '-83.6°C' },
            { formula: 'C5H10O2', nameEN: 'Propyl Acetate', nameCN: '乙酸丙酯', mass: 102.134, bp: '101.5°C', mp: '-92.5°C' },
            { formula: 'C4H6O2', nameEN: 'Vinyl Acetate', nameCN: '乙酸乙烯酯', mass: 86.090, bp: '72.7°C', mp: '-93.2°C' },
            { formula: 'C7H14O2', nameEN: 'Butyl Acetate', nameCN: '乙酸丁酯', mass: 130.187, bp: '126.1°C', mp: '-77.9°C' },
        ],
        amines: [
            { formula: 'CH5N', nameEN: 'Methylamine', nameCN: '甲胺', mass: 31.058, bp: '-6.3°C', mp: '-93.5°C' },
            { formula: 'C2H7N', nameEN: 'Ethylamine', nameCN: '乙胺', mass: 45.085, bp: '16.6°C', mp: '-81.0°C' },
            { formula: 'C3H9N', nameEN: 'Propylamine', nameCN: '丙胺', mass: 59.112, bp: '47.8°C', mp: '-83.0°C' },
            { formula: 'C2H8N2', nameEN: 'Ethylenediamine', nameCN: '乙二胺', mass: 60.099, bp: '116.0°C', mp: '8.5°C' },
            { formula: 'C6H7N', nameEN: 'Aniline', nameCN: '苯胺', mass: 93.128, bp: '184.1°C', mp: '-6.3°C' },
            { formula: 'C6H15N', nameEN: 'Triethylamine', nameCN: '三乙胺', mass: 101.192, bp: '89.3°C', mp: '-114.7°C' },
        ],
        ethers: [
            { formula: 'C2H6O', nameEN: 'Dimethyl Ether', nameCN: '二甲醚', mass: 46.069, bp: '-24.8°C', mp: '-141.5°C' },
            { formula: 'C4H10O', nameEN: 'Diethyl Ether', nameCN: '乙醚', mass: 74.123, bp: '34.6°C', mp: '-116.3°C' },
            { formula: 'C4H10O', nameEN: 'THF', nameCN: '四氢呋喃', mass: 72.107, bp: '66.0°C', mp: '-108.4°C' },
            { formula: 'C4H8O2', nameEN: '1,4-Dioxane', nameCN: '1,4-二氧六环', mass: 88.107, bp: '101.1°C', mp: '11.8°C' },
        ],
        aromatic: [
            { formula: 'C6H6', nameEN: 'Benzene', nameCN: '苯', mass: 78.114, bp: '80.1°C', mp: '5.5°C' },
            { formula: 'C7H8', nameEN: 'Toluene', nameCN: '甲苯', mass: 92.141, bp: '110.6°C', mp: '-95.0°C' },
            { formula: 'C8H10', nameEN: 'Xylene', nameCN: '二甲苯', mass: 106.168, bp: '138.4°C', mp: '-47.4°C' },
            { formula: 'C10H8', nameEN: 'Naphthalene', nameCN: '萘', mass: 128.174, bp: '217.9°C', mp: '80.2°C' },
            { formula: 'C14H10', nameEN: 'Anthracene', nameCN: '蒽', mass: 178.234, bp: '340.0°C', mp: '216.0°C' },
            { formula: 'C13H10', nameEN: 'Fluorene', nameCN: '芴', mass: 166.223, bp: '295.0°C', mp: '116.0°C' },
            { formula: 'C6H5OH', nameEN: 'Phenol', nameCN: '苯酚', mass: 94.113, bp: '181.7°C', mp: '40.5°C' },
            { formula: 'C6H5NH2', nameEN: 'Aniline', nameCN: '苯胺', mass: 93.128, bp: '184.1°C', mp: '-6.3°C' },
            { formula: 'C6H5NO2', nameEN: 'Nitrobenzene', nameCN: '硝基苯', mass: 123.112, bp: '210.9°C', mp: '5.7°C' },
            { formula: 'C6H5Cl', nameEN: 'Chlorobenzene', nameCN: '氯苯', mass: 112.558, bp: '131.7°C', mp: '-45.6°C' },
        ],
        aminoAcids: [
            { formula: 'C2H5NO2', nameEN: 'Glycine', nameCN: '甘氨酸', mass: 75.035, bp: '233.0°C', mp: '233.0°C' },
            { formula: 'C3H7NO2', nameEN: 'Alanine', nameCN: '丙氨酸', mass: 89.094, bp: '297.0°C', mp: '297.0°C' },
            { formula: 'C5H9NO4', nameEN: 'Glutamic Acid', nameCN: '谷氨酸', mass: 147.131, bp: '247.0°C', mp: '247.0°C' },
            { formula: 'C6H13NO2', nameEN: 'Leucine', nameCN: '亮氨酸', mass: 131.175, bp: '293.0°C', mp: '293.0°C' },
            { formula: 'C9H11NO2', nameEN: 'Phenylalanine', nameCN: '苯丙氨酸', mass: 165.192, bp: '295.0°C', mp: '295.0°C' },
        ],
        carbohydrates: [
            { formula: 'C6H12O6', nameEN: 'Glucose', nameCN: '葡萄糖', mass: 180.157, bp: '150.0°C (dec)', mp: '146.0°C' },
            { formula: 'C6H12O6', nameEN: 'Fructose', nameCN: '果糖', mass: 180.157, bp: '440.1°C', mp: '103.0°C' },
            { formula: 'C6H12O6', nameEN: 'Galactose', nameCN: '半乳糖', mass: 180.157, bp: '410.0°C', mp: '167.0°C' },
            { formula: 'C12H22O11', nameEN: 'Sucrose', nameCN: '蔗糖', mass: 342.297, bp: '186.0°C (dec)', mp: '186.0°C' },
            { formula: 'C12H22O11', nameEN: 'Lactose', nameCN: '乳糖', mass: 342.297, bp: '694.0°C', mp: '202.0°C' },
            { formula: 'C12H22O11', nameEN: 'Maltose', nameCN: '麦芽糖', mass: 342.297, bp: '397.8°C', mp: '160.0°C' },
            { formula: 'C5H10O5', nameEN: 'Ribose', nameCN: '核糖', mass: 150.131, bp: '375.0°C', mp: '95.0°C' },
            { formula: 'C6H10O5', nameEN: 'Starch (unit)', nameCN: '淀粉（单元）', mass: 162.142, bp: 'N/A', mp: 'N/A' },
            { formula: 'C6H10O5', nameEN: 'Cellulose (unit)', nameCN: '纤维素（单元）', mass: 162.142, bp: 'N/A', mp: 'N/A' },
        ],
        vitamins: [
            { formula: 'C20H30O', nameEN: 'Vitamin A', nameCN: '维生素A', mass: 286.456, bp: '137.0°C', mp: '64.0°C' },
            { formula: 'C63H88CoN14O14P', nameEN: 'Vitamin B12', nameCN: '维生素B12', mass: 1355.365, bp: 'N/A', mp: '>300°C' },
            { formula: 'C6H8O6', nameEN: 'Vitamin C', nameCN: '维生素C', mass: 176.124, bp: '553.0°C', mp: '190.0°C' },
            { formula: 'C27H44O', nameEN: 'Vitamin D3', nameCN: '维生素D3', mass: 384.648, bp: 'N/A', mp: '83.0°C' },
            { formula: 'C29H50O2', nameEN: 'Vitamin E', nameCN: '维生素E', mass: 430.718, bp: 'N/A', mp: '2.5°C' },
            { formula: 'C31H46O2', nameEN: 'Vitamin K1', nameCN: '维生素K1', mass: 450.706, bp: 'N/A', mp: '-20.0°C' },
        ],
        polymers: [
            { formula: '(C2H4)n', nameEN: 'Polyethylene', nameCN: '聚乙烯', mass: 28.054, bp: 'N/A', mp: '115-135°C' },
            { formula: '(C3H6)n', nameEN: 'Polypropylene', nameCN: '聚丙烯', mass: 42.081, bp: 'N/A', mp: '130-171°C' },
            { formula: '(C2H3Cl)n', nameEN: 'PVC', nameCN: '聚氯乙烯', mass: 62.498, bp: 'N/A', mp: '100-260°C' },
            { formula: '(C8H8)n', nameEN: 'Polystyrene', nameCN: '聚苯乙烯', mass: 104.152, bp: 'N/A', mp: '240°C' },
            { formula: '(C2F4)n', nameEN: 'PTFE (Teflon)', nameCN: '聚四氟乙烯', mass: 100.016, bp: 'N/A', mp: '327°C' },
        ],
    };

    // ==========================================
    // Generator Functions
    // ==========================================

    function generateMetalOxides() {
        const result = {};
        for (const m of METAL_OXIDES) {
            const isBasic = ['alkali-metal', 'alkaline-earth'].includes(m.category);
            result[m.oxide] = {
                formula: m.oxide,
                nameEN: m.nameEN + ' Oxide',
                nameCN: m.nameCN + '氧化物',
                classification: 'Oxide',
                classificationCN: '氧化物',
                molecularMass: m.massOxide,
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
                description: `${m.nameEN} oxide is a ${isBasic ? 'basic' : 'metallic'} oxide.`,
                descriptionCN: `${m.nameCN}氧化物是${isBasic ? '碱性' : '金属'}氧化物。`,
            };
        }
        return result;
    }

    function generateMetalHydroxides() {
        const result = {};
        for (const m of METAL_HYDROXIDES) {
            result[m.formula] = {
                formula: m.formula,
                nameEN: m.formula.replace(/\d/g, '').includes('OH') ?
                    `${m.formula.replace(/[(]OH[)]?\d*/g, '')} Hydroxide` : m.formula,
                nameCN: m.nameCN + '氢氧化物',
                classification: 'Base',
                classificationCN: '碱',
                molecularMass: m.mass,
                acidBase: 'Base',
                acidBaseCN: '碱',
                state: 'Solid',
                stateCN: '固态',
                solubility: m.solubility,
                solubilityCN: m.solubility === 'Soluble' ? '可溶' :
                    m.solubility === 'Highly soluble' ? '极易溶' :
                    m.solubility === 'Slightly soluble' ? '微溶' : '不溶',
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
                description: `A metal hydroxide base.`,
                descriptionCN: `金属氢氧化物碱。`,
            };
        }
        return result;
    }

    function generateSalts() {
        const result = {};
        for (const cation of CATIONS) {
            for (const anion of ANIONS) {
                // Skip hydroxides (already handled)
                if (anion.symbol === 'OH') continue;

                // Calculate formula
                const cCharge = Math.abs(cation.charge);
                const aCharge = Math.abs(anion.charge);
                const lcm = (cCharge * aCharge) / gcd(cCharge, aCharge);
                const cCount = lcm / cCharge;
                const aCount = lcm / aCharge;

                let formula;
                if (cCount === 1 && aCount === 1) {
                    formula = cation.symbol + anion.symbol;
                } else if (cCount === 1) {
                    formula = cation.symbol + anion.symbol + (aCount > 1 ? aCount : '');
                } else if (aCount === 1) {
                    formula = (cCount > 1 ? cCount : '') + cation.symbol + anion.symbol;
                } else {
                    formula = (cCount > 1 ? cCount : '') + cation.symbol + '(' + anion.symbol + ')' + (aCount > 1 ? aCount : '');
                }

                // Skip if already exists in main DB
                if (typeof CompoundsDB !== 'undefined' && CompoundsDB[formula]) continue;

                const mass = cation.mass * cCount + anion.mass * aCount;

                result[formula] = {
                    formula: formula,
                    nameEN: `${cation.nameEN} ${anion.nameEN}`,
                    nameCN: `${cation.nameCN}${anion.nameCN}`,
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
                    description: `${cation.nameEN} ${anion.nameEN.toLowerCase()} is a salt.`,
                    descriptionCN: `${cation.nameCN}${anion.nameCN}是一种盐。`,
                };
            }
        }
        return result;
    }

    function generateOrganicCompounds() {
        const result = {};
        for (const [family, compounds] of Object.entries(ORGANIC_FAMILIES)) {
            for (const comp of compounds) {
                if (typeof CompoundsDB !== 'undefined' && CompoundsDB[comp.formula]) continue;
                if (result[comp.formula]) continue; // Skip duplicates

                const familyCN = {
                    alkanes: '烷烃', alkenes: '烯烃', alkynes: '炔烃',
                    alcohols: '醇', aldehydes: '醛', ketones: '酮',
                    carboxylicAcids: '羧酸', esters: '酯', amines: '胺',
                    ethers: '醚', aromatic: '芳香族', aminoAcids: '氨基酸',
                    carbohydrates: '碳水化合物', vitamins: '维生素', polymers: '聚合物',
                }[family] || '有机物';

                result[comp.formula] = {
                    formula: comp.formula,
                    nameEN: comp.nameEN,
                    nameCN: comp.nameCN,
                    classification: `Organic (${family})`,
                    classificationCN: `有机物（${familyCN}）`,
                    molecularMass: comp.mass,
                    acidBase: family === 'carboxylicAcids' ? 'Weak acid' :
                        family === 'amines' ? 'Weak base' : 'Neutral',
                    acidBaseCN: family === 'carboxylicAcids' ? '弱酸' :
                        family === 'amines' ? '弱碱' : '中性',
                    state: comp.mass < 50 ? 'Gas' : 'Liquid',
                    stateCN: comp.mass < 50 ? '气态' : '液态',
                    solubility: family === 'aromatic' ? 'Insoluble' : 'Soluble',
                    solubilityCN: family === 'aromatic' ? '不溶' : '可溶',
                    color: 'Colorless',
                    colorCN: '无色',
                    polarity: ['aromatic', 'alkanes', 'alkenes', 'alkynes'].includes(family) ? 'Nonpolar' : 'Polar',
                    polarityCN: ['aromatic', 'alkanes', 'alkenes', 'alkynes'].includes(family) ? '非极性' : '极性',
                    bondType: 'Covalent',
                    bondTypeCN: '共价键',
                    hazards: family === 'aromatic' ? 'Harmful' : 'Low hazard',
                    hazardsCN: family === 'aromatic' ? '有害' : '低危害',
                    uses: 'Organic chemistry',
                    usesCN: '有机化学',
                    boilingPoint: comp.bp || 'N/A',
                    meltingPoint: comp.mp || 'N/A',
                    description: `${comp.nameEN} is a ${family.slice(0, -1)} compound.`,
                    descriptionCN: `${comp.nameCN}是一种${familyCN}化合物。`,
                };
            }
        }
        return result;
    }

    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) { [a, b] = [b, a % b]; }
        return a;
    }

    // ==========================================
    // Main Generator
    // ==========================================
    function generateAll() {
        const allCompounds = {};

        // Generate metal oxides
        Object.assign(allCompounds, generateMetalOxides());

        // Generate metal hydroxides
        Object.assign(allCompounds, generateMetalHydroxides());

        // Generate salts
        Object.assign(allCompounds, generateSalts());

        // Generate organic compounds
        Object.assign(allCompounds, generateOrganicCompounds());

        return allCompounds;
    }

    // Count generated compounds
    function countGenerated() {
        return Object.keys(generateAll()).length;
    }

    // ==========================================
    // Public API
    // ==========================================
    return {
        generateAll,
        generateMetalOxides,
        generateMetalHydroxides,
        generateSalts,
        generateOrganicCompounds,
        countGenerated,
        METAL_OXIDES,
        METAL_HYDROXIDES,
        CATIONS,
        ANIONS,
        ORGANIC_FAMILIES,
    };
})();

// ==========================================
// Merge Generated Compounds
// ==========================================
function mergeGeneratedCompounds() {
    if (typeof CompoundsDB === 'undefined') return;

    const generated = ChemDBGenerator.generateAll();
    let count = 0;

    for (const [key, value] of Object.entries(generated)) {
        if (!CompoundsDB[key]) {
            CompoundsDB[key] = value;
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

    console.log(`ChemDBGenerator: Added ${count} generated compounds. Total: ${Object.keys(CompoundsDB).length}`);
    return count;
}

// Auto-merge on load
if (typeof CompoundsDB !== 'undefined') {
    // Wait a tick to ensure other databases are loaded
    setTimeout(() => {
        mergeGeneratedCompounds();
    }, 0);
}
