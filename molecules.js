/* ============================================
   3D Molecular Viewer Module (Three.js)
   ============================================ */

// Atom properties
const AtomProperties = {
    H:  { radius: 0.31, color: 0xffffff, name: 'Hydrogen', nameCN: '氢', mass: 1.008 },
    C:  { radius: 0.77, color: 0x444444, name: 'Carbon', nameCN: '碳', mass: 12.011 },
    N:  { radius: 0.71, color: 0x3050f8, name: 'Nitrogen', nameCN: '氮', mass: 14.007 },
    O:  { radius: 0.66, color: 0xff0d0d, name: 'Oxygen', nameCN: '氧', mass: 15.999 },
    S:  { radius: 1.05, color: 0xffff30, name: 'Sulfur', nameCN: '硫', mass: 32.06 },
    Cl: { radius: 1.02, color: 0x1ff01f, name: 'Chlorine', nameCN: '氯', mass: 35.45 },
    Na: { radius: 1.66, color: 0xab5cf2, name: 'Sodium', nameCN: '钠', mass: 22.99 },
    K:  { radius: 2.03, color: 0x8f40d4, name: 'Potassium', nameCN: '钾', mass: 39.10 },
    Ca: { radius: 1.76, color: 0x3dff00, name: 'Calcium', nameCN: '钙', mass: 40.08 },
    Fe: { radius: 1.56, color: 0xe06633, name: 'Iron', nameCN: '铁', mass: 55.85 },
    Cu: { radius: 1.45, color: 0xc88033, name: 'Copper', nameCN: '铜', mass: 63.55 },
    Zn: { radius: 1.42, color: 0x7d80b0, name: 'Zinc', nameCN: '锌', mass: 65.38 },
    Ag: { radius: 1.65, color: 0xc0c0c0, name: 'Silver', nameCN: '银', mass: 107.87 },
    Br: { radius: 1.20, color: 0xa62929, name: 'Bromine', nameCN: '溴', mass: 79.90 },
    I:  { radius: 1.39, color: 0x940094, name: 'Iodine', nameCN: '碘', mass: 126.90 },
    F:  { radius: 0.57, color: 0x90e050, name: 'Fluorine', nameCN: '氟', mass: 19.00 },
    P:  { radius: 1.07, color: 0xff8000, name: 'Phosphorus', nameCN: '磷', mass: 30.97 },
    Mg: { radius: 1.45, color: 0x8aff00, name: 'Magnesium', nameCN: '镁', mass: 24.31 },
    Mn: { radius: 1.61, color: 0x9c7ac7, name: 'Manganese', nameCN: '锰', mass: 54.94 },
    Al: { radius: 1.21, color: 0xbfa6a6, name: 'Aluminum', nameCN: '铝', mass: 26.98 }
};

// Molecule structures database
const MoleculesDB = {
    'H2O': {
        name: 'Water',
        nameCN: '水',
        atoms: [
            { element: 'O', x: 0, y: 0, z: 0 },
            { element: 'H', x: -0.76, y: 0.59, z: 0 },
            { element: 'H', x: 0.76, y: 0.59, z: 0 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1]],
        geometry: 'Bent',
        geometryCN: '弯曲形',
        bondAngle: '104.5°',
        hybridization: 'sp3'
    },
    'CO2': {
        name: 'Carbon Dioxide',
        nameCN: '二氧化碳',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'O', x: -1.16, y: 0, z: 0 },
            { element: 'O', x: 1.16, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 2], [0, 2, 2]],
        geometry: 'Linear',
        geometryCN: '直线形',
        bondAngle: '180°',
        hybridization: 'sp'
    },
    'CH4': {
        name: 'Methane',
        nameCN: '甲烷',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'H', x: 0.63, y: 0.63, z: 0.63 },
            { element: 'H', x: -0.63, y: -0.63, z: 0.63 },
            { element: 'H', x: -0.63, y: 0.63, z: -0.63 },
            { element: 'H', x: 0.63, y: -0.63, z: -0.63 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]],
        geometry: 'Tetrahedral',
        geometryCN: '四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'NH3': {
        name: 'Ammonia',
        nameCN: '氨',
        atoms: [
            { element: 'N', x: 0, y: 0.34, z: 0 },
            { element: 'H', x: 0.94, y: -0.11, z: 0 },
            { element: 'H', x: -0.47, y: -0.11, z: 0.81 },
            { element: 'H', x: -0.47, y: -0.11, z: -0.81 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]],
        geometry: 'Trigonal Pyramidal',
        geometryCN: '三角锥形',
        bondAngle: '107°',
        hybridization: 'sp3'
    },
    'C2H5OH': {
        name: 'Ethanol',
        nameCN: '乙醇',
        atoms: [
            { element: 'C', x: -0.75, y: 0, z: 0 },
            { element: 'C', x: 0.75, y: 0, z: 0 },
            { element: 'O', x: 1.5, y: 1.0, z: 0 },
            { element: 'H', x: 2.2, y: 1.0, z: 0 },
            { element: 'H', x: -1.12, y: 0.63, z: 0.63 },
            { element: 'H', x: -1.12, y: -0.63, z: 0.63 },
            { element: 'H', x: -1.12, y: 0, z: -0.88 },
            { element: 'H', x: 1.12, y: -0.63, z: 0.63 },
            { element: 'H', x: 1.12, y: -0.63, z: -0.63 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [1, 7, 1], [1, 8, 1]],
        geometry: 'Multiple centers',
        geometryCN: '多中心',
        bondAngle: '~109.5°',
        hybridization: 'sp3'
    },
    'C6H6': {
        name: 'Benzene',
        nameCN: '苯',
        atoms: [
            { element: 'C', x: 1.4, y: 0, z: 0 },
            { element: 'C', x: 0.7, y: 1.21, z: 0 },
            { element: 'C', x: -0.7, y: 1.21, z: 0 },
            { element: 'C', x: -1.4, y: 0, z: 0 },
            { element: 'C', x: -0.7, y: -1.21, z: 0 },
            { element: 'C', x: 0.7, y: -1.21, z: 0 },
            { element: 'H', x: 2.48, y: 0, z: 0 },
            { element: 'H', x: 1.24, y: 2.15, z: 0 },
            { element: 'H', x: -1.24, y: 2.15, z: 0 },
            { element: 'H', x: -2.48, y: 0, z: 0 },
            { element: 'H', x: -1.24, y: -2.15, z: 0 },
            { element: 'H', x: 1.24, y: -2.15, z: 0 }
        ],
        bonds: [
            [0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1],
            [0, 6, 1], [1, 7, 1], [2, 8, 1], [3, 9, 1], [4, 10, 1], [5, 11, 1]
        ],
        geometry: 'Planar hexagonal',
        geometryCN: '平面六边形',
        bondAngle: '120°',
        hybridization: 'sp2'
    },
    'O2': {
        name: 'Oxygen',
        nameCN: '氧气',
        atoms: [
            { element: 'O', x: -0.6, y: 0, z: 0 },
            { element: 'O', x: 0.6, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 2]],
        geometry: 'Linear',
        geometryCN: '直线形',
        bondAngle: '180°',
        hybridization: 'sp2'
    },
    'NaCl': {
        name: 'Sodium Chloride',
        nameCN: '氯化钠',
        atoms: [
            { element: 'Na', x: -1.0, y: 0, z: 0 },
            { element: 'Cl', x: 1.0, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 1]],
        geometry: 'Linear (ionic)',
        geometryCN: '直线形（离子）',
        bondAngle: '180°',
        hybridization: 'N/A (ionic)'
    },
    'H2': {
        name: 'Hydrogen',
        nameCN: '氢气',
        atoms: [
            { element: 'H', x: -0.37, y: 0, z: 0 },
            { element: 'H', x: 0.37, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 1]],
        geometry: 'Linear',
        geometryCN: '直线形',
        bondAngle: '180°',
        hybridization: 's'
    },
    'HCl': {
        name: 'Hydrogen Chloride',
        nameCN: '氯化氢',
        atoms: [
            { element: 'H', x: -0.64, y: 0, z: 0 },
            { element: 'Cl', x: 0.64, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 1]],
        geometry: 'Linear',
        geometryCN: '直线形',
        bondAngle: '180°',
        hybridization: 'sp3'
    },
    'C2H4': {
        name: 'Ethylene',
        nameCN: '乙烯',
        atoms: [
            { element: 'C', x: -0.67, y: 0, z: 0 },
            { element: 'C', x: 0.67, y: 0, z: 0 },
            { element: 'H', x: -1.24, y: 0.93, z: 0 },
            { element: 'H', x: -1.24, y: -0.93, z: 0 },
            { element: 'H', x: 1.24, y: 0.93, z: 0 },
            { element: 'H', x: 1.24, y: -0.93, z: 0 }
        ],
        bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]],
        geometry: 'Planar',
        geometryCN: '平面形',
        bondAngle: '120°',
        hybridization: 'sp2'
    },
    'C2H2': {
        name: 'Acetylene',
        nameCN: '乙炔',
        atoms: [
            { element: 'C', x: -0.6, y: 0, z: 0 },
            { element: 'C', x: 0.6, y: 0, z: 0 },
            { element: 'H', x: -1.66, y: 0, z: 0 },
            { element: 'H', x: 1.66, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 3], [0, 2, 1], [1, 3, 1]],
        geometry: 'Linear',
        geometryCN: '直线形',
        bondAngle: '180°',
        hybridization: 'sp'
    },
    'H2SO4': {
        name: 'Sulfuric Acid',
        nameCN: '硫酸',
        atoms: [
            { element: 'S', x: 0, y: 0, z: 0 },
            { element: 'O', x: -1.1, y: 0.7, z: 0 },
            { element: 'O', x: 1.1, y: 0.7, z: 0 },
            { element: 'O', x: -0.7, y: -0.9, z: 0.5 },
            { element: 'O', x: 0.7, y: -0.9, z: -0.5 },
            { element: 'H', x: -1.3, y: -1.5, z: 0.8 },
            { element: 'H', x: 1.3, y: -1.5, z: -0.8 }
        ],
        bonds: [[0, 1, 2], [0, 2, 2], [0, 3, 1], [0, 4, 1], [3, 5, 1], [4, 6, 1]],
        geometry: 'Tetrahedral around S',
        geometryCN: 'S周围四面体形',
        bondAngle: '~109.5°',
        hybridization: 'sp3'
    },
    'NaOH': {
        name: 'Sodium Hydroxide',
        nameCN: '氢氧化钠',
        atoms: [
            { element: 'Na', x: -1.5, y: 0, z: 0 },
            { element: 'O', x: 0, y: 0, z: 0 },
            { element: 'H', x: 0.8, y: 0.5, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1]],
        geometry: 'Linear (ionic)',
        geometryCN: '直线形（离子）',
        bondAngle: '~180°',
        hybridization: 'N/A'
    },
    'CH3COOH': {
        name: 'Acetic Acid',
        nameCN: '乙酸',
        atoms: [
            { element: 'C', x: -0.8, y: 0, z: 0 },
            { element: 'C', x: 0.8, y: 0, z: 0 },
            { element: 'O', x: 1.5, y: 0.9, z: 0 },
            { element: 'O', x: 1.5, y: -0.9, z: 0 },
            { element: 'H', x: 2.1, y: -1.2, z: 0 },
            { element: 'H', x: -1.2, y: 0.6, z: 0.6 },
            { element: 'H', x: -1.2, y: -0.6, z: 0.6 },
            { element: 'H', x: -1.2, y: 0, z: -0.88 }
        ],
        bonds: [[0, 1, 1], [1, 2, 2], [1, 3, 1], [3, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 1]],
        geometry: 'Planar around C=O',
        geometryCN: 'C=O周围平面形',
        bondAngle: '~120°',
        hybridization: 'sp2/sp3'
    },

    // ==========================================
    // ADDITIONAL 3D MOLECULES
    // ==========================================
    'H2O2': {
        name: 'Hydrogen Peroxide',
        nameCN: '过氧化氢',
        atoms: [
            { element: 'O', x: -0.7, y: 0, z: 0 },
            { element: 'O', x: 0.7, y: 0, z: 0 },
            { element: 'H', x: -1.1, y: 0.8, z: 0.3 },
            { element: 'H', x: 1.1, y: -0.8, z: 0.3 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [1, 3, 1]],
        geometry: 'Open book (skewed)',
        geometryCN: '书本形（扭曲）',
        bondAngle: '94.8° (OOO)',
        hybridization: 'sp3'
    },
    'CH3OH': {
        name: 'Methanol',
        nameCN: '甲醇',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'O', x: 1.2, y: 0.5, z: 0 },
            { element: 'H', x: 1.9, y: 0.1, z: 0 },
            { element: 'H', x: -0.4, y: 0.6, z: 0.8 },
            { element: 'H', x: -0.4, y: 0.6, z: -0.8 },
            { element: 'H', x: -0.4, y: -1.0, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1]],
        geometry: 'Tetrahedral at C',
        geometryCN: 'C处四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'HCHO': {
        name: 'Formaldehyde',
        nameCN: '甲醛',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'O', x: 1.2, y: 0, z: 0 },
            { element: 'H', x: -0.6, y: 0.9, z: 0 },
            { element: 'H', x: -0.6, y: -0.9, z: 0 }
        ],
        bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1]],
        geometry: 'Trigonal planar',
        geometryCN: '三角平面形',
        bondAngle: '120°',
        hybridization: 'sp2'
    },
    'CH3CHO': {
        name: 'Acetaldehyde',
        nameCN: '乙醛',
        atoms: [
            { element: 'C', x: -1.0, y: 0, z: 0 },
            { element: 'C', x: 0.5, y: 0, z: 0 },
            { element: 'O', x: 1.3, y: 0.8, z: 0 },
            { element: 'H', x: -1.4, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.4, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.4, y: -1.0, z: 0 },
            { element: 'H', x: 0.9, y: -0.9, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 2], [0, 3, 1], [0, 4, 1], [0, 5, 1], [1, 6, 1]],
        geometry: 'Planar at C=O',
        geometryCN: 'C=O处平面形',
        bondAngle: '~120°',
        hybridization: 'sp2/sp3'
    },
    'CH3COCH3': {
        name: 'Acetone',
        nameCN: '丙酮',
        atoms: [
            { element: 'C', x: -1.5, y: 0, z: 0 },
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'C', x: 1.5, y: 0, z: 0 },
            { element: 'O', x: 0, y: 1.2, z: 0 },
            { element: 'H', x: -1.9, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.9, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.9, y: -1.0, z: 0 },
            { element: 'H', x: 1.9, y: 0.6, z: 0.8 },
            { element: 'H', x: 1.9, y: 0.6, z: -0.8 },
            { element: 'H', x: 1.9, y: -1.0, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [1, 3, 2], [0, 4, 1], [0, 5, 1], [0, 6, 1], [2, 7, 1], [2, 8, 1], [2, 9, 1]],
        geometry: 'Trigonal planar at C=O',
        geometryCN: 'C=O处三角平面形',
        bondAngle: '120°',
        hybridization: 'sp2/sp3'
    },
    'HCOOH': {
        name: 'Formic Acid',
        nameCN: '甲酸',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'O', x: 1.0, y: 0.8, z: 0 },
            { element: 'O', x: 1.0, y: -0.8, z: 0 },
            { element: 'H', x: 1.7, y: -1.1, z: 0 },
            { element: 'H', x: -0.7, y: 0.5, z: 0 }
        ],
        bonds: [[0, 1, 2], [0, 2, 1], [2, 3, 1], [0, 4, 1]],
        geometry: 'Planar',
        geometryCN: '平面形',
        bondAngle: '~120°',
        hybridization: 'sp2'
    },
    'CH3NH2': {
        name: 'Methylamine',
        nameCN: '甲胺',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'N', x: 1.3, y: 0.3, z: 0 },
            { element: 'H', x: -0.4, y: 0.6, z: 0.8 },
            { element: 'H', x: -0.4, y: 0.6, z: -0.8 },
            { element: 'H', x: -0.4, y: -1.0, z: 0 },
            { element: 'H', x: 1.8, y: -0.1, z: 0.7 },
            { element: 'H', x: 1.8, y: -0.1, z: -0.7 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [1, 5, 1], [1, 6, 1]],
        geometry: 'Tetrahedral at C, pyramidal at N',
        geometryCN: 'C处四面体形，N处三角锥形',
        bondAngle: '109.5° (C), ~107° (N)',
        hybridization: 'sp3'
    },
    'C6H5OH': {
        name: 'Phenol',
        nameCN: '苯酚',
        atoms: [
            { element: 'C', x: 1.2, y: 0.7, z: 0 },
            { element: 'C', x: 1.2, y: -0.7, z: 0 },
            { element: 'C', x: 0, y: -1.4, z: 0 },
            { element: 'C', x: -1.2, y: -0.7, z: 0 },
            { element: 'C', x: -1.2, y: 0.7, z: 0 },
            { element: 'C', x: 0, y: 1.4, z: 0 },
            { element: 'O', x: 2.4, y: 1.4, z: 0 },
            { element: 'H', x: 2.1, y: -1.2, z: 0 },
            { element: 'H', x: 0, y: -2.5, z: 0 },
            { element: 'H', x: -2.1, y: -1.2, z: 0 },
            { element: 'H', x: -2.1, y: 1.2, z: 0 },
            { element: 'H', x: 0, y: 2.5, z: 0 },
            { element: 'H', x: 3.0, y: 0.9, z: 0 }
        ],
        bonds: [[0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1], [0, 6, 1], [1, 7, 1], [2, 8, 1], [3, 9, 1], [4, 10, 1], [5, 11, 1], [6, 12, 1]],
        geometry: 'Planar hexagonal ring',
        geometryCN: '平面六元环',
        bondAngle: '120° (ring)',
        hybridization: 'sp2'
    },
    'CH3OCH3': {
        name: 'Dimethyl Ether',
        nameCN: '二甲醚',
        atoms: [
            { element: 'C', x: -1.2, y: 0, z: 0 },
            { element: 'O', x: 0, y: 0, z: 0 },
            { element: 'C', x: 1.2, y: 0, z: 0 },
            { element: 'H', x: -1.6, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.6, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.6, y: -1.0, z: 0 },
            { element: 'H', x: 1.6, y: 0.6, z: 0.8 },
            { element: 'H', x: 1.6, y: 0.6, z: -0.8 },
            { element: 'H', x: 1.6, y: -1.0, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [2, 6, 1], [2, 7, 1], [2, 8, 1]],
        geometry: 'Bent at O',
        geometryCN: 'O处弯曲形',
        bondAngle: '111.7° (COC)',
        hybridization: 'sp3'
    },
    'C2H5OC2H5': {
        name: 'Diethyl Ether',
        nameCN: '乙醚',
        atoms: [
            { element: 'C', x: -2.0, y: 0.5, z: 0 },
            { element: 'C', x: -0.8, y: 0, z: 0 },
            { element: 'O', x: 0, y: 0, z: 0 },
            { element: 'C', x: 0.8, y: 0, z: 0 },
            { element: 'C', x: 2.0, y: 0.5, z: 0 },
            { element: 'H', x: -2.4, y: 1.1, z: 0.8 },
            { element: 'H', x: -2.4, y: 1.1, z: -0.8 },
            { element: 'H', x: -2.4, y: -0.5, z: 0 },
            { element: 'H', x: -0.8, y: -0.6, z: 0.8 },
            { element: 'H', x: -0.8, y: -0.6, z: -0.8 },
            { element: 'H', x: 0.8, y: -0.6, z: 0.8 },
            { element: 'H', x: 0.8, y: -0.6, z: -0.8 },
            { element: 'H', x: 2.4, y: 1.1, z: 0.8 },
            { element: 'H', x: 2.4, y: 1.1, z: -0.8 },
            { element: 'H', x: 2.4, y: -0.5, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 1], [1, 8, 1], [1, 9, 1], [3, 10, 1], [3, 11, 1], [4, 12, 1], [4, 13, 1], [4, 14, 1]],
        geometry: 'Bent at O',
        geometryCN: 'O处弯曲形',
        bondAngle: '~112° (COC)',
        hybridization: 'sp3'
    },
    'CH3Cl': {
        name: 'Chloromethane',
        nameCN: '氯甲烷',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'Cl', x: 1.4, y: 0, z: 0 },
            { element: 'H', x: -0.5, y: 0.8, z: 0.5 },
            { element: 'H', x: -0.5, y: -0.8, z: 0.5 },
            { element: 'H', x: -0.5, y: 0, z: -0.9 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]],
        geometry: 'Tetrahedral',
        geometryCN: '四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'CH2Cl2': {
        name: 'Dichloromethane',
        nameCN: '二氯甲烷',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'Cl', x: 1.4, y: 0.8, z: 0 },
            { element: 'Cl', x: -1.4, y: 0.8, z: 0 },
            { element: 'H', x: 0.5, y: -0.6, z: 0.8 },
            { element: 'H', x: -0.5, y: -0.6, z: -0.8 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]],
        geometry: 'Tetrahedral',
        geometryCN: '四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'C2H5Cl': {
        name: 'Chloroethane',
        nameCN: '氯乙烷',
        atoms: [
            { element: 'C', x: -1.0, y: 0, z: 0 },
            { element: 'C', x: 0.5, y: 0, z: 0 },
            { element: 'Cl', x: 1.5, y: 1.0, z: 0 },
            { element: 'H', x: -1.4, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.4, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.4, y: -1.0, z: 0 },
            { element: 'H', x: 0.9, y: -0.6, z: 0.8 },
            { element: 'H', x: 0.9, y: -0.6, z: -0.8 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [1, 6, 1], [1, 7, 1]],
        geometry: 'Tetrahedral at each C',
        geometryCN: '每个C处四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },

    // ==========================================
    // ADDITIONAL 3D MOLECULES
    // ==========================================
    'C3H8': {
        name: 'Propane',
        nameCN: '丙烷',
        atoms: [
            { element: 'C', x: -1.2, y: 0, z: 0 },
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'C', x: 1.2, y: 0, z: 0 },
            { element: 'H', x: -1.6, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.6, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.6, y: -1.0, z: 0 },
            { element: 'H', x: 0.4, y: 0.6, z: 0.8 },
            { element: 'H', x: 0.4, y: -0.6, z: 0.8 },
            { element: 'H', x: 1.6, y: 0.6, z: 0.8 },
            { element: 'H', x: 1.6, y: 0.6, z: -0.8 },
            { element: 'H', x: 1.6, y: -1.0, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [1, 6, 1], [1, 7, 1], [2, 8, 1], [2, 9, 1], [2, 10, 1]],
        geometry: 'Tetrahedral at each C',
        geometryCN: '每个C处四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'C3H6': {
        name: 'Propylene',
        nameCN: '丙烯',
        atoms: [
            { element: 'C', x: -1.2, y: 0, z: 0 },
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'C', x: 1.2, y: 0.5, z: 0 },
            { element: 'H', x: -1.6, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.6, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.6, y: -1.0, z: 0 },
            { element: 'H', x: 0.4, y: -0.9, z: 0 },
            { element: 'H', x: 1.6, y: 1.1, z: 0 },
            { element: 'H', x: 1.6, y: 0, z: 0.8 },
            { element: 'H', x: 1.6, y: 0, z: -0.8 }
        ],
        bonds: [[0, 1, 1], [1, 2, 2], [0, 3, 1], [0, 4, 1], [0, 5, 1], [1, 6, 1], [2, 7, 1], [2, 8, 1], [2, 9, 1]],
        geometry: 'Planar at C=C',
        geometryCN: 'C=C处平面形',
        bondAngle: '120° (C=C)',
        hybridization: 'sp2/sp3'
    },
    'C3H4': {
        name: 'Propyne',
        nameCN: '丙炔',
        atoms: [
            { element: 'C', x: -1.5, y: 0, z: 0 },
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'C', x: 1.4, y: 0, z: 0 },
            { element: 'H', x: -1.9, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.9, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.9, y: -1.0, z: 0 },
            { element: 'H', x: 2.2, y: 0.5, z: 0 }
        ],
        bonds: [[0, 1, 1], [1, 2, 3], [0, 3, 1], [0, 4, 1], [0, 5, 1], [2, 6, 1]],
        geometry: 'Linear at C≡C',
        geometryCN: 'C≡C处直线形',
        bondAngle: '180° (C≡C)',
        hybridization: 'sp2/sp'
    },
    'N2H4': {
        name: 'Hydrazine',
        nameCN: '联氨（肼）',
        atoms: [
            { element: 'N', x: -0.7, y: 0, z: 0 },
            { element: 'N', x: 0.7, y: 0, z: 0 },
            { element: 'H', x: -1.1, y: 0.8, z: 0.3 },
            { element: 'H', x: -1.1, y: -0.8, z: 0.3 },
            { element: 'H', x: 1.1, y: 0.8, z: -0.3 },
            { element: 'H', x: 1.1, y: -0.8, z: -0.3 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]],
        geometry: 'Each N is pyramidal',
        geometryCN: '每个N为三角锥形',
        bondAngle: '~112° (NNH)',
        hybridization: 'sp3'
    },
    'HNO3': {
        name: 'Nitric Acid',
        nameCN: '硝酸',
        atoms: [
            { element: 'N', x: 0, y: 0, z: 0 },
            { element: 'O', x: 1.0, y: 0.8, z: 0 },
            { element: 'O', x: -1.0, y: 0.8, z: 0 },
            { element: 'O', x: 0, y: -1.0, z: 0 },
            { element: 'H', x: -0.6, y: 1.5, z: 0 }
        ],
        bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [2, 4, 1]],
        geometry: 'Planar',
        geometryCN: '平面形',
        bondAngle: '~120°',
        hybridization: 'sp2'
    },
    'NH4Cl': {
        name: 'Ammonium Chloride',
        nameCN: '氯化铵',
        atoms: [
            { element: 'N', x: 0, y: 0, z: 0 },
            { element: 'H', x: 0.5, y: 0.5, z: 0.5 },
            { element: 'H', x: -0.5, y: -0.5, z: 0.5 },
            { element: 'H', x: -0.5, y: 0.5, z: -0.5 },
            { element: 'H', x: 0.5, y: -0.5, z: -0.5 },
            { element: 'Cl', x: 2.0, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]],
        geometry: 'Tetrahedral (NH4+)',
        geometryCN: '四面体形（NH4+）',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'CaCO3': {
        name: 'Calcium Carbonate',
        nameCN: '碳酸钙',
        atoms: [
            { element: 'Ca', x: -1.5, y: 0, z: 0 },
            { element: 'C', x: 0.5, y: 0, z: 0 },
            { element: 'O', x: 0.5, y: 1.2, z: 0 },
            { element: 'O', x: 1.5, y: -0.6, z: 0 },
            { element: 'O', x: -0.5, y: -0.6, z: 0 }
        ],
        bonds: [[1, 2, 2], [1, 3, 1], [1, 4, 1]],
        geometry: 'Trigonal planar (CO3²⁻)',
        geometryCN: '三角平面形（CO3²⁻）',
        bondAngle: '120°',
        hybridization: 'sp2'
    },
    'CuSO4': {
        name: 'Copper Sulfate',
        nameCN: '硫酸铜',
        atoms: [
            { element: 'Cu', x: -1.5, y: 0, z: 0 },
            { element: 'S', x: 0.5, y: 0, z: 0 },
            { element: 'O', x: 1.2, y: 1.0, z: 0 },
            { element: 'O', x: 1.2, y: -1.0, z: 0 },
            { element: 'O', x: -0.2, y: 0.8, z: 0.5 },
            { element: 'O', x: -0.2, y: -0.8, z: -0.5 }
        ],
        bonds: [[1, 2, 2], [1, 3, 2], [1, 4, 1], [1, 5, 1]],
        geometry: 'Tetrahedral (SO4²⁻)',
        geometryCN: '四面体形（SO4²⁻）',
        bondAngle: '~109.5°',
        hybridization: 'sp3'
    },
    'C6H5NH2': {
        name: 'Aniline',
        nameCN: '苯胺',
        atoms: [
            { element: 'C', x: 1.2, y: 0.7, z: 0 },
            { element: 'C', x: 1.2, y: -0.7, z: 0 },
            { element: 'C', x: 0, y: -1.4, z: 0 },
            { element: 'C', x: -1.2, y: -0.7, z: 0 },
            { element: 'C', x: -1.2, y: 0.7, z: 0 },
            { element: 'C', x: 0, y: 1.4, z: 0 },
            { element: 'N', x: 2.4, y: 1.4, z: 0 },
            { element: 'H', x: 2.1, y: -1.2, z: 0 },
            { element: 'H', x: 0, y: -2.5, z: 0 },
            { element: 'H', x: -2.1, y: -1.2, z: 0 },
            { element: 'H', x: -2.1, y: 1.2, z: 0 },
            { element: 'H', x: 0, y: 2.5, z: 0 },
            { element: 'H', x: 3.0, y: 1.0, z: 0.5 },
            { element: 'H', x: 3.0, y: 1.0, z: -0.5 }
        ],
        bonds: [[0, 1, 2], [1, 2, 1], [2, 3, 2], [3, 4, 1], [4, 5, 2], [5, 0, 1], [0, 6, 1], [1, 7, 1], [2, 8, 1], [3, 9, 1], [4, 10, 1], [5, 11, 1], [6, 12, 1], [6, 13, 1]],
        geometry: 'Planar hexagonal ring',
        geometryCN: '平面六元环',
        bondAngle: '120° (ring)',
        hybridization: 'sp2'
    },
    'CH3CH2OH': {
        name: 'Ethanol',
        nameCN: '乙醇',
        atoms: [
            { element: 'C', x: -1.0, y: 0, z: 0 },
            { element: 'C', x: 0.5, y: 0, z: 0 },
            { element: 'O', x: 1.2, y: 0.8, z: 0 },
            { element: 'H', x: 1.8, y: 0.4, z: 0 },
            { element: 'H', x: -1.4, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.4, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.4, y: -1.0, z: 0 },
            { element: 'H', x: 0.9, y: -0.6, z: 0.8 },
            { element: 'H', x: 0.9, y: -0.6, z: -0.8 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [1, 7, 1], [1, 8, 1]],
        geometry: 'Tetrahedral at each C',
        geometryCN: '每个C处四面体形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'CH3CH2NH2': {
        name: 'Ethylamine',
        nameCN: '乙胺',
        atoms: [
            { element: 'C', x: -1.0, y: 0, z: 0 },
            { element: 'C', x: 0.5, y: 0, z: 0 },
            { element: 'N', x: 1.3, y: 0.5, z: 0 },
            { element: 'H', x: -1.4, y: 0.6, z: 0.8 },
            { element: 'H', x: -1.4, y: 0.6, z: -0.8 },
            { element: 'H', x: -1.4, y: -1.0, z: 0 },
            { element: 'H', x: 0.9, y: -0.6, z: 0.8 },
            { element: 'H', x: 0.9, y: -0.6, z: -0.8 },
            { element: 'H', x: 1.9, y: 0.1, z: 0.5 },
            { element: 'H', x: 1.9, y: 0.1, z: -0.5 }
        ],
        bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [1, 6, 1], [1, 7, 1], [2, 8, 1], [2, 9, 1]],
        geometry: 'Tetrahedral at C, pyramidal at N',
        geometryCN: 'C处四面体形，N处三角锥形',
        bondAngle: '109.5°',
        hybridization: 'sp3'
    },
    'COCl2': {
        name: 'Phosgene',
        nameCN: '光气',
        atoms: [
            { element: 'C', x: 0, y: 0, z: 0 },
            { element: 'O', x: 0, y: 1.2, z: 0 },
            { element: 'Cl', x: -1.2, y: -0.6, z: 0 },
            { element: 'Cl', x: 1.2, y: -0.6, z: 0 }
        ],
        bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1]],
        geometry: 'Trigonal planar',
        geometryCN: '三角平面形',
        bondAngle: '120°',
        hybridization: 'sp2'
    },
    'SOCl2': {
        name: 'Thionyl Chloride',
        nameCN: '亚硫酰氯',
        atoms: [
            { element: 'S', x: 0, y: 0, z: 0 },
            { element: 'O', x: 0, y: 1.3, z: 0 },
            { element: 'Cl', x: -1.2, y: -0.6, z: 0.4 },
            { element: 'Cl', x: 1.2, y: -0.6, z: -0.4 }
        ],
        bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1]],
        geometry: 'Trigonal pyramidal',
        geometryCN: '三角锥形',
        bondAngle: '~106°',
        hybridization: 'sp3'
    },
    'PCl3': {
        name: 'Phosphorus Trichloride',
        nameCN: '三氯化磷',
        atoms: [
            { element: 'P', x: 0, y: 0.3, z: 0 },
            { element: 'Cl', x: -1.2, y: -0.4, z: 0.3 },
            { element: 'Cl', x: 1.2, y: -0.4, z: 0.3 },
            { element: 'Cl', x: 0, y: -0.4, z: -0.8 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]],
        geometry: 'Trigonal pyramidal',
        geometryCN: '三角锥形',
        bondAngle: '100°',
        hybridization: 'sp3'
    },
    'SF6': {
        name: 'Sulfur Hexafluoride',
        nameCN: '六氟化硫',
        atoms: [
            { element: 'S', x: 0, y: 0, z: 0 },
            { element: 'F', x: 1.0, y: 0, z: 0 },
            { element: 'F', x: -1.0, y: 0, z: 0 },
            { element: 'F', x: 0, y: 1.0, z: 0 },
            { element: 'F', x: 0, y: -1.0, z: 0 },
            { element: 'F', x: 0, y: 0, z: 1.0 },
            { element: 'F', x: 0, y: 0, z: -1.0 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1]],
        geometry: 'Octahedral',
        geometryCN: '八面体形',
        bondAngle: '90°',
        hybridization: 'sp3d2'
    },
    'XeF4': {
        name: 'Xenon Tetrafluoride',
        nameCN: '四氟化氙',
        atoms: [
            { element: 'Xe', x: 0, y: 0, z: 0 },
            { element: 'F', x: 1.2, y: 0, z: 0 },
            { element: 'F', x: -1.2, y: 0, z: 0 },
            { element: 'F', x: 0, y: 0, z: 1.2 },
            { element: 'F', x: 0, y: 0, z: -1.2 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]],
        geometry: 'Square planar',
        geometryCN: '正方形平面',
        bondAngle: '90°',
        hybridization: 'sp3d2'
    },
    'BF3': {
        name: 'Boron Trifluoride',
        nameCN: '三氟化硼',
        atoms: [
            { element: 'B', x: 0, y: 0, z: 0 },
            { element: 'F', x: 1.1, y: 0, z: 0 },
            { element: 'F', x: -0.55, y: 0.95, z: 0 },
            { element: 'F', x: -0.55, y: -0.95, z: 0 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]],
        geometry: 'Trigonal planar',
        geometryCN: '三角平面形',
        bondAngle: '120°',
        hybridization: 'sp2'
    },
    'BeCl2': {
        name: 'Beryllium Chloride',
        nameCN: '氯化铍',
        atoms: [
            { element: 'Be', x: 0, y: 0, z: 0 },
            { element: 'Cl', x: -1.4, y: 0, z: 0 },
            { element: 'Cl', x: 1.4, y: 0, z: 0 }
        ],
        bonds: [[0, 1, 1], [0, 2, 1]],
        geometry: 'Linear',
        geometryCN: '直线形',
        bondAngle: '180°',
        hybridization: 'sp'
    }
};

// Molecule search index
const MoleculeSearchIndex = [];
Object.keys(MoleculesDB).forEach(key => {
    const m = MoleculesDB[key];
    MoleculeSearchIndex.push({
        formula: key,
        type: 'molecule',
        display: `${key} - ${m.name}`,
        data: m
    });
});

// 3D Viewer state
let moleculeViewer = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    moleculeGroup: null,
    autoRotate: true,
    showOrbitals: false,
    initialized: false,
    animationId: null,
    raycaster: null,
    mouse: null,
    hoveredAtom: null,
    tooltipEl: null
};

// Initialize Three.js viewer
function initMoleculeViewer(containerId) {
    const container = document.getElementById(containerId || 'molecule3dCanvas');
    if (!container) return;
    if (moleculeViewer.initialized && moleculeViewer.container === container) return;

    // If re-initializing for a different container, clean up old renderer
    if (moleculeViewer.initialized && moleculeViewer.container !== container) {
        if (moleculeViewer.renderer && moleculeViewer.renderer.domElement.parentNode) {
            moleculeViewer.renderer.domElement.parentNode.removeChild(moleculeViewer.renderer.domElement);
        }
        moleculeViewer.initialized = false;
    }

    moleculeViewer.container = container;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    moleculeViewer.scene = new THREE.Scene();

    // Camera
    moleculeViewer.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    moleculeViewer.camera.position.set(0, 0, 8);

    // Renderer
    moleculeViewer.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    moleculeViewer.renderer.setSize(width, height);
    moleculeViewer.renderer.setPixelRatio(window.devicePixelRatio);
    moleculeViewer.renderer.setClearColor(0x000000, 0);
    container.appendChild(moleculeViewer.renderer.domElement);

    // Controls
    moleculeViewer.controls = new THREE.OrbitControls(moleculeViewer.camera, moleculeViewer.renderer.domElement);
    moleculeViewer.controls.enableDamping = true;
    moleculeViewer.controls.dampingFactor = 0.08;
    moleculeViewer.controls.autoRotate = true;
    moleculeViewer.controls.autoRotateSpeed = 1.5;
    moleculeViewer.controls.enablePan = false;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    moleculeViewer.scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    moleculeViewer.scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, -3, -5);
    moleculeViewer.scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x4488ff, 0.3, 50);
    pointLight.position.set(0, 10, 0);
    moleculeViewer.scene.add(pointLight);

    // Molecule group
    moleculeViewer.moleculeGroup = new THREE.Group();
    moleculeViewer.scene.add(moleculeViewer.moleculeGroup);

    // Raycaster for atom hover
    moleculeViewer.raycaster = new THREE.Raycaster();
    moleculeViewer.mouse = new THREE.Vector2();

    // Create or reuse tooltip element
    if (moleculeViewer.tooltipEl && moleculeViewer.tooltipEl.parentNode) {
        moleculeViewer.tooltipEl.parentNode.removeChild(moleculeViewer.tooltipEl);
    }
    moleculeViewer.tooltipEl = document.createElement('div');
    moleculeViewer.tooltipEl.className = 'atom-tooltip';
    moleculeViewer.tooltipEl.style.display = 'none';
    document.body.appendChild(moleculeViewer.tooltipEl);

    // Mouse move for hover detection
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        moleculeViewer.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        moleculeViewer.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        moleculeViewer.raycaster.setFromCamera(moleculeViewer.mouse, moleculeViewer.camera);
        const atomMeshes = moleculeViewer.moleculeGroup.children.filter(
            c => c.userData && c.userData.element && !c.userData.isOrbital
        );
        const intersects = moleculeViewer.raycaster.intersectObjects(atomMeshes);

        if (intersects.length > 0) {
            const atom = intersects[0].object;
            if (moleculeViewer.hoveredAtom !== atom) {
                // Reset previous
                if (moleculeViewer.hoveredAtom) {
                    moleculeViewer.hoveredAtom.material.emissive?.setHex(0x000000);
                    moleculeViewer.hoveredAtom.scale.setScalar(1);
                }
                moleculeViewer.hoveredAtom = atom;
                atom.material.emissive?.setHex(0x222222);
                atom.scale.setScalar(1.15);
            }
            // Update tooltip
            const lang = document.documentElement.getAttribute('data-lang') || 'en';
            const isCN = lang === 'zh';
            const name = isCN ? (atom.userData.nameCN || atom.userData.name) : atom.userData.name;
            moleculeViewer.tooltipEl.innerHTML = `
                <div class="tooltip-element">${atom.userData.element}</div>
                <div class="tooltip-name">${name} · ${atom.userData.mass} u</div>
            `;
            moleculeViewer.tooltipEl.style.display = 'block';
            moleculeViewer.tooltipEl.style.left = `${e.clientX + 14}px`;
            moleculeViewer.tooltipEl.style.top = `${e.clientY - 10}px`;
        } else {
            if (moleculeViewer.hoveredAtom) {
                moleculeViewer.hoveredAtom.material.emissive?.setHex(0x000000);
                moleculeViewer.hoveredAtom.scale.setScalar(1);
                moleculeViewer.hoveredAtom = null;
            }
            moleculeViewer.tooltipEl.style.display = 'none';
        }
    });

    container.addEventListener('mouseleave', () => {
        if (moleculeViewer.hoveredAtom) {
            moleculeViewer.hoveredAtom.material.emissive?.setHex(0x000000);
            moleculeViewer.hoveredAtom.scale.setScalar(1);
            moleculeViewer.hoveredAtom = null;
        }
        moleculeViewer.tooltipEl.style.display = 'none';
    });

    // Animation loop
    function animate() {
        moleculeViewer.animationId = requestAnimationFrame(animate);
        moleculeViewer.controls.update();
        moleculeViewer.renderer.render(moleculeViewer.scene, moleculeViewer.camera);
    }
    animate();

    moleculeViewer.initialized = true;

    // Handle resize (remove old listener first to prevent accumulation)
    if (moleculeViewer._resizeHandler) {
        window.removeEventListener('resize', moleculeViewer._resizeHandler);
    }
    moleculeViewer._resizeHandler = () => {
        if (!moleculeViewer.initialized) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        moleculeViewer.camera.aspect = w / h;
        moleculeViewer.camera.updateProjectionMatrix();
        moleculeViewer.renderer.setSize(w, h);
    };
    window.addEventListener('resize', moleculeViewer._resizeHandler);
}

// Render a molecule in 3D
function renderMolecule3D(formula, containerId) {
    const molecule = MoleculesDB[formula];
    if (!molecule) return null;

    initMoleculeViewer(containerId);

    // Clear previous molecule
    while (moleculeViewer.moleculeGroup.children.length > 0) {
        const child = moleculeViewer.moleculeGroup.children[0];
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
            if (Array.isArray(child.material)) {
                child.material.forEach(m => m.dispose());
            } else {
                child.material.dispose();
            }
        }
        moleculeViewer.moleculeGroup.remove(child);
    }

    const scale = 0.4;

    // Add atoms
    molecule.atoms.forEach(atom => {
        const props = AtomProperties[atom.element] || { radius: 0.5, color: 0x888888 };
        const geometry = new THREE.SphereGeometry(props.radius * scale * 1.5, 32, 32);

        // Check if dark theme
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const opacity = isDark ? 0.85 : 0.88;

        const material = new THREE.MeshPhysicalMaterial({
            color: props.color,
            transparent: true,
            opacity: opacity,
            roughness: 0.15,
            metalness: 0.05,
            clearcoat: 0.8,
            clearcoatRoughness: 0.1
        });

        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(atom.x * scale * 2, atom.y * scale * 2, atom.z * scale * 2);
        sphere.userData = { element: atom.element, ...props };
        moleculeViewer.moleculeGroup.add(sphere);
    });

    // Add bonds
    molecule.bonds.forEach(bond => {
        const startAtom = molecule.atoms[bond[0]];
        const endAtom = molecule.atoms[bond[1]];
        const bondOrder = bond[2];

        const start = new THREE.Vector3(
            startAtom.x * scale * 2,
            startAtom.y * scale * 2,
            startAtom.z * scale * 2
        );
        const end = new THREE.Vector3(
            endAtom.x * scale * 2,
            endAtom.y * scale * 2,
            endAtom.z * scale * 2
        );

        const direction = new THREE.Vector3().subVectors(end, start);
        const length = direction.length();
        const center = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

        const bondRadius = 0.06;
        const bondGap = 0.14;

        for (let i = 0; i < bondOrder; i++) {
            const geometry = new THREE.CylinderGeometry(bondRadius, bondRadius, length, 12);
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const material = new THREE.MeshPhysicalMaterial({
                color: isDark ? 0x667788 : 0x889999,
                transparent: true,
                opacity: isDark ? 0.5 : 0.55,
                roughness: 0.3,
                metalness: 0.1,
                clearcoat: 0.5
            });
            const cylinder = new THREE.Mesh(geometry, material);

            cylinder.position.copy(center);

            // Orient the cylinder
            const axis = new THREE.Vector3(0, 1, 0);
            const quaternion = new THREE.Quaternion();
            quaternion.setFromUnitVectors(axis, direction.clone().normalize());
            cylinder.quaternion.copy(quaternion);

            // Offset for multiple bonds
            if (bondOrder > 1) {
                const offset = (i - (bondOrder - 1) / 2) * bondGap;
                const perpendicular = new THREE.Vector3();
                if (Math.abs(direction.y) < 0.99) {
                    perpendicular.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();
                } else {
                    perpendicular.crossVectors(direction, new THREE.Vector3(1, 0, 0)).normalize();
                }
                cylinder.position.add(perpendicular.multiplyScalar(offset));
            }

            moleculeViewer.moleculeGroup.add(cylinder);
        }
    });

    // Center the molecule
    const box = new THREE.Box3().setFromObject(moleculeViewer.moleculeGroup);
    const center = box.getCenter(new THREE.Vector3());
    moleculeViewer.moleculeGroup.position.sub(center);

    // Reset camera
    moleculeViewer.camera.position.set(0, 0, 6);
    moleculeViewer.controls.reset();

    // Store current formula for re-rendering on language change
    const canvas = document.getElementById(containerId || 'molecule3dCanvas');
    if (canvas) {
        canvas.setAttribute('data-formula', formula);
    }

    return molecule;
}

// Toggle auto rotation
function toggleAutoRotation() {
    if (!moleculeViewer.controls) return;
    moleculeViewer.autoRotate = !moleculeViewer.autoRotate;
    moleculeViewer.controls.autoRotate = moleculeViewer.autoRotate;
    return moleculeViewer.autoRotate;
}

// Toggle orbital display
function toggleOrbitals() {
    moleculeViewer.showOrbitals = !moleculeViewer.showOrbitals;
    // Simple orbital visualization using wireframe spheres
    moleculeViewer.moleculeGroup.children.forEach(child => {
        if (child.userData && child.userData.element) {
            if (moleculeViewer.showOrbitals) {
                // Add orbital sphere
                const orbitalGeom = new THREE.SphereGeometry(child.geometry.parameters.radius * 2.5, 16, 16);
                const orbitalMat = new THREE.MeshBasicMaterial({
                    color: child.material.color,
                    transparent: true,
                    opacity: 0.08,
                    wireframe: true
                });
                const orbital = new THREE.Mesh(orbitalGeom, orbitalMat);
                orbital.position.copy(child.position);
                orbital.userData.isOrbital = true;
                moleculeViewer.moleculeGroup.add(orbital);
            }
        }
    });

    if (!moleculeViewer.showOrbitals) {
        // Remove orbital meshes
        const toRemove = [];
        moleculeViewer.moleculeGroup.children.forEach(child => {
            if (child.userData && child.userData.isOrbital) {
                toRemove.push(child);
            }
        });
        toRemove.forEach(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
            moleculeViewer.moleculeGroup.remove(child);
        });
    }

    return moleculeViewer.showOrbitals;
}

// Reset camera view
function resetMoleculeView() {
    if (!moleculeViewer.controls || !moleculeViewer.camera) return;
    moleculeViewer.camera.position.set(0, 0, 6);
    moleculeViewer.controls.reset();
}

// Render molecule info card
function renderMolecule3DInfo(formula) {
    const molecule = MoleculesDB[formula];
    if (!molecule) return '';

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';

    const props = AtomProperties[molecule.atoms[0].element];
    let totalMass = 0;
    const elementCounts = {};

    molecule.atoms.forEach(atom => {
        const p = AtomProperties[atom.element];
        totalMass += p ? p.mass : 0;
        elementCounts[atom.element] = (elementCounts[atom.element] || 0) + 1;
    });

    let html = `<div class="result-card">`;
    html += `<h3>${isCN ? molecule.nameCN : molecule.name} (${formatFormula(formula)})</h3>`;

    html += `<div class="mol-info-grid">`;
    html += `<div class="mol-info-item"><div class="mol-label">${isCN ? '分子式' : 'Formula'}</div><div class="mol-value">${formatFormula(formula)}</div></div>`;
    html += `<div class="mol-info-item"><div class="mol-label">${isCN ? '分子量' : 'Molecular Mass'}</div><div class="mol-value">${totalMass.toFixed(3)} g/mol</div></div>`;
    html += `<div class="mol-info-item"><div class="mol-label">${isCN ? '几何构型' : 'Geometry'}</div><div class="mol-value">${isCN ? molecule.geometryCN : molecule.geometry}</div></div>`;
    html += `<div class="mol-info-item"><div class="mol-label">${isCN ? '键角' : 'Bond Angle'}</div><div class="mol-value">${molecule.bondAngle}</div></div>`;
    html += `<div class="mol-info-item"><div class="mol-label">${isCN ? '杂化方式' : 'Hybridization'}</div><div class="mol-value">${molecule.hybridization}</div></div>`;
    html += `<div class="mol-info-item"><div class="mol-label">${isCN ? '原子数' : 'Atoms'}</div><div class="mol-value">${molecule.atoms.length}</div></div>`;
    html += `</div>`;

    // Element composition
    html += `<div style="margin-top: 16px;">`;
    html += `<div class="info-label" style="margin-bottom: 8px;">${isCN ? '元素组成' : 'Element Composition'}</div>`;
    html += `<div class="functional-groups">`;
    for (const [el, count] of Object.entries(elementCounts)) {
        const elProps = AtomProperties[el];
        if (elProps) {
            html += `<span class="functional-group" style="background: rgba(${hexToRgb(elProps.color)}, 0.15); border-color: rgba(${hexToRgb(elProps.color)}, 0.3); color: #${elProps.color.toString(16).padStart(6, '0')};">${el}: ${count}</span>`;
        }
    }
    html += `</div>`;
    html += `</div>`;

    html += `</div>`;

    return html;
}

function hexToRgb(hex) {
    if (typeof hex === 'number') {
        return `${(hex >> 16) & 255}, ${(hex >> 8) & 255}, ${hex & 255}`;
    }
    return '128, 128, 128';
}

// Analyze molecule input for 3D
function analyzeMolecule3D(input) {
    const clean = input.trim().toUpperCase();

    // Direct match
    for (const key of Object.keys(MoleculesDB)) {
        if (key.toUpperCase() === clean) {
            const molecule = renderMolecule3D(key);
            if (molecule) {
                return renderMolecule3DInfo(key);
            }
        }
    }

    // Name search
    const lowerClean = input.trim().toLowerCase();
    for (const key of Object.keys(MoleculesDB)) {
        const m = MoleculesDB[key];
        if (m.name.toLowerCase().includes(lowerClean) || m.nameCN.includes(input.trim())) {
            const molecule = renderMolecule3D(key);
            if (molecule) {
                return renderMolecule3DInfo(key);
            }
        }
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const isCN = lang === 'zh';
    return `<div class="error-message">${isCN ? '未找到该分子。请尝试下面的示例之一。' : 'Molecule not found. Try one of the examples below.'}</div>`;
}
