#!/usr/bin/env node
/**
 * Compound & 3D Structure Generator
 * Generates chem-compounds-mega.js and chem-molecules-mega.js
 * Run: node generate-compounds.js
 */

const fs = require('fs');

// ==========================================
// ELEMENT DATA
// ==========================================
const ELEMENTS = {
    H:  { mass: 1.008, radius: 0.31, color: 0xffffff, nameEN: 'Hydrogen', nameCN: '氢' },
    He: { mass: 4.003, radius: 0.28, color: 0xd9ffff, nameEN: 'Helium', nameCN: '氦' },
    Li: { mass: 6.941, radius: 1.28, color: 0xcc80ff, nameEN: 'Lithium', nameCN: '锂' },
    Be: { mass: 9.012, radius: 0.96, color: 0xc2ff00, nameEN: 'Beryllium', nameCN: '铍' },
    B:  { mass: 10.81, radius: 0.84, color: 0xffb5b5, nameEN: 'Boron', nameCN: '硼' },
    C:  { mass: 12.011, radius: 0.76, color: 0x444444, nameEN: 'Carbon', nameCN: '碳' },
    N:  { mass: 14.007, radius: 0.71, color: 0x3050f8, nameEN: 'Nitrogen', nameCN: '氮' },
    O:  { mass: 15.999, radius: 0.66, color: 0xff0d0d, nameEN: 'Oxygen', nameCN: '氧' },
    F:  { mass: 19.00, radius: 0.57, color: 0x90e050, nameEN: 'Fluorine', nameCN: '氟' },
    Ne: { mass: 20.18, radius: 0.58, color: 0xb3e3f5, nameEN: 'Neon', nameCN: '氖' },
    Na: { mass: 22.99, radius: 1.66, color: 0xab5cf2, nameEN: 'Sodium', nameCN: '钠' },
    Mg: { mass: 24.31, radius: 1.41, color: 0x8aff00, nameEN: 'Magnesium', nameCN: '镁' },
    Al: { mass: 26.98, radius: 1.21, color: 0xbfa6a6, nameEN: 'Aluminum', nameCN: '铝' },
    Si: { mass: 28.09, radius: 1.11, color: 0xf0c8a0, nameEN: 'Silicon', nameCN: '硅' },
    P:  { mass: 30.97, radius: 1.07, color: 0xff8000, nameEN: 'Phosphorus', nameCN: '磷' },
    S:  { mass: 32.06, radius: 1.05, color: 0xffff30, nameEN: 'Sulfur', nameCN: '硫' },
    Cl: { mass: 35.45, radius: 1.02, color: 0x1ff01f, nameEN: 'Chlorine', nameCN: '氯' },
    Ar: { mass: 39.95, radius: 1.06, color: 0x80d1e3, nameEN: 'Argon', nameCN: '氩' },
    K:  { mass: 39.10, radius: 2.03, color: 0x8f40d4, nameEN: 'Potassium', nameCN: '钾' },
    Ca: { mass: 40.08, radius: 1.76, color: 0x3dff00, nameEN: 'Calcium', nameCN: '钙' },
    Ti: { mass: 47.87, radius: 1.60, color: 0xbfc2c7, nameEN: 'Titanium', nameCN: '钛' },
    Cr: { mass: 52.00, radius: 1.39, color: 0x8a99c7, nameEN: 'Chromium', nameCN: '铬' },
    Mn: { mass: 54.94, radius: 1.39, color: 0x9c7ac7, nameEN: 'Manganese', nameCN: '锰' },
    Fe: { mass: 55.85, radius: 1.56, color: 0xe06633, nameEN: 'Iron', nameCN: '铁' },
    Co: { mass: 58.93, radius: 1.26, color: 0xf090a0, nameEN: 'Cobalt', nameCN: '钴' },
    Ni: { mass: 58.69, radius: 1.24, color: 0x50d050, nameEN: 'Nickel', nameCN: '镍' },
    Cu: { mass: 63.55, radius: 1.32, color: 0xc88033, nameEN: 'Copper', nameCN: '铜' },
    Zn: { mass: 65.38, radius: 1.22, color: 0x7d80b0, nameEN: 'Zinc', nameCN: '锌' },
    Ga: { mass: 69.72, radius: 1.22, color: 0xc28f8f, nameEN: 'Gallium', nameCN: '镓' },
    Ge: { mass: 72.63, radius: 1.20, color: 0x668f8f, nameEN: 'Germanium', nameCN: '锗' },
    As: { mass: 74.92, radius: 1.19, color: 0xbd80e3, nameEN: 'Arsenic', nameCN: '砷' },
    Se: { mass: 78.97, radius: 1.20, color: 0xffa100, nameEN: 'Selenium', nameCN: '硒' },
    Br: { mass: 79.90, radius: 1.20, color: 0xa62929, nameEN: 'Bromine', nameCN: '溴' },
    Kr: { mass: 83.80, radius: 1.16, color: 0x5cb8d1, nameEN: 'Krypton', nameCN: '氪' },
    Rb: { mass: 85.47, radius: 2.20, color: 0x702eb0, nameEN: 'Rubidium', nameCN: '铷' },
    Sr: { mass: 87.62, radius: 1.95, color: 0x00ff00, nameEN: 'Strontium', nameCN: '锶' },
    Ag: { mass: 107.87, radius: 1.45, color: 0xc0c0c0, nameEN: 'Silver', nameCN: '银' },
    Sn: { mass: 118.71, radius: 1.39, color: 0x668080, nameEN: 'Tin', nameCN: '锡' },
    I:  { mass: 126.90, radius: 1.39, color: 0x940094, nameEN: 'Iodine', nameCN: '碘' },
    Ba: { mass: 137.33, radius: 2.15, color: 0x00c900, nameEN: 'Barium', nameCN: '钡' },
    Au: { mass: 196.97, radius: 1.36, color: 0xffd123, nameEN: 'Gold', nameCN: '金' },
    Hg: { mass: 200.59, radius: 1.32, color: 0xb8b8d0, nameEN: 'Mercury', nameCN: '汞' },
    Pb: { mass: 207.2, radius: 1.46, color: 0x575961, nameEN: 'Lead', nameCN: '铅' },
    Bi: { mass: 208.98, radius: 1.48, color: 0x9e4fb5, nameEN: 'Bismuth', nameCN: '铋' },
};

// ==========================================
// FORMULA PARSER
// ==========================================
function parseFormula(formula) {
    const atoms = {};
    let i = 0;

    function parseGroup() {
        const result = {};
        while (i < formula.length) {
            if (formula[i] === '(' || formula[i] === '[') {
                i++; // skip opening bracket
                const inner = parseGroup();
                i++; // skip closing bracket
                // Get multiplier after bracket
                let mult = '';
                while (i < formula.length && /\d/.test(formula[i])) {
                    mult += formula[i]; i++;
                }
                const m = mult ? parseInt(mult) : 1;
                for (const [el, count] of Object.entries(inner)) {
                    result[el] = (result[el] || 0) + count * m;
                }
            } else if (formula[i] === ')' || formula[i] === ']') {
                break;
            } else if (/[A-Z]/.test(formula[i])) {
                let el = formula[i]; i++;
                while (i < formula.length && /[a-z]/.test(formula[i])) {
                    el += formula[i]; i++;
                }
                let num = '';
                while (i < formula.length && /\d/.test(formula[i])) {
                    num += formula[i]; i++;
                }
                const count = num ? parseInt(num) : 1;
                result[el] = (result[el] || 0) + count;
            } else {
                i++; // skip unexpected chars
            }
        }
        return result;
    }

    const result = parseGroup();
    return result;
}

function calculateMass(atoms) {
    let mass = 0;
    for (const [el, count] of Object.entries(atoms)) {
        mass += (ELEMENTS[el]?.mass || 0) * count;
    }
    return Math.round(mass * 1000) / 1000;
}

// ==========================================
// 3D STRUCTURE GENERATOR
// ==========================================
const BOND_LENGTH = 1.5;
const PI = Math.PI;

function tetrahedral(idx) {
    const angles = [
        [0, 0, 0],
        [1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]
    ];
    const a = angles[idx] || [0, 0, 0];
    const s = BOND_LENGTH * 0.6;
    return { x: a[0] * s, y: a[1] * s, z: a[2] * s };
}

function trigonalPlanar(idx) {
    const angle = (idx * 2 * PI) / 3;
    return { x: BOND_LENGTH * Math.cos(angle), y: BOND_LENGTH * Math.sin(angle), z: 0 };
}

function linear(idx) {
    return { x: (idx === 0 ? -1 : 1) * BOND_LENGTH, y: 0, z: 0 };
}

function bent(idx, angleDeg) {
    const angle = (angleDeg * PI) / 180;
    const half = angle / 2;
    const a = idx === 0 ? PI - half : PI + half;
    return { x: BOND_LENGTH * Math.cos(a), y: BOND_LENGTH * Math.sin(a), z: 0 };
}

function trigonalPyramidal(idx) {
    const planar = trigonalPlanar(idx);
    return { x: planar.x, y: planar.y, z: idx < 3 ? -0.4 : 0.5 };
}

function octahedral(idx) {
    const dirs = [
        [1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]
    ];
    const d = dirs[idx] || [0,0,0];
    return { x: d[0]*BOND_LENGTH, y: d[1]*BOND_LENGTH, z: d[2]*BOND_LENGTH };
}

function ringGeometry(n, radius) {
    const coords = [];
    for (let i = 0; i < n; i++) {
        const angle = (i * 2 * PI) / n;
        coords.push({ x: radius * Math.cos(angle), y: radius * Math.sin(angle), z: 0 });
    }
    return coords;
}

// Determine geometry from atom count
function getGeometry(centralAtom, bondedCount) {
    const el = centralAtom;
    if (bondedCount >= 6) return 'octahedral';
    if (bondedCount === 5) return 'trigonalBipyramidal';
    if (bondedCount === 4) return 'tetrahedral';
    if (bondedCount === 3) {
        if (['B', 'Al', 'Ga'].includes(el)) return 'trigonalPlanar';
        return 'trigonalPyramidal';
    }
    if (bondedCount === 2) {
        if (['Be', 'Mg', 'Ca', 'Zn', 'Hg', 'Cd'].includes(el)) return 'linear';
        return 'bent';
    }
    return 'linear';
}

function getGeometryLabel(geo) {
    const labels = {
        tetrahedral: ['Tetrahedral', '四面体形', '109.5°', 'sp3'],
        trigonalPlanar: ['Trigonal planar', '三角平面形', '120°', 'sp2'],
        linear: ['Linear', '直线形', '180°', 'sp'],
        bent: ['Bent', '弯曲形', '~104.5°', 'sp3'],
        trigonalPyramidal: ['Trigonal pyramidal', '三角锥形', '~107°', 'sp3'],
        octahedral: ['Octahedral', '八面体形', '90°', 'sp3d2'],
        trigonalBipyramidal: ['Trigonal bipyramidal', '三角双锥形', '90°/120°', 'sp3d'],
    };
    return labels[geo] || ['Unknown', '未知', '-', '-'];
}

function placeAtoms(centralEl, otherAtoms, geometry) {
    const result = [{ element: centralEl, x: 0, y: 0, z: 0 }];
    const bonds = [];
    let idx = 0;

    for (const [el, count] of Object.entries(otherAtoms)) {
        for (let i = 0; i < count; i++) {
            let pos;
            switch (geometry) {
                case 'tetrahedral': pos = tetrahedral(idx + 1); break;
                case 'trigonalPlanar': pos = trigonalPlanar(idx); break;
                case 'linear': pos = linear(idx); break;
                case 'bent': pos = bent(idx, 104.5); break;
                case 'trigonalPyramidal': pos = trigonalPyramidal(idx); break;
                case 'octahedral': pos = octahedral(idx); break;
                default: pos = tetrahedral(idx + 1);
            }
            result.push({ element: el, x: Math.round(pos.x * 100) / 100, y: Math.round(pos.y * 100) / 100, z: Math.round(pos.z * 100) / 100 });
            bonds.push([0, idx + 1, 1]);
            idx++;
        }
    }
    return { atoms: result, bonds };
}

// ==========================================
// COMPOUND DEFINITIONS
// ==========================================

// --- METALS ---
const METALS = [
    { sym: 'Li', cn: '锂', charge: 1, cat: 'alkali' },
    { sym: 'Na', cn: '钠', charge: 1, cat: 'alkali' },
    { sym: 'K', cn: '钾', charge: 1, cat: 'alkali' },
    { sym: 'Rb', cn: '铷', charge: 1, cat: 'alkali' },
    { sym: 'Cs', cn: '铯', charge: 1, cat: 'alkali' },
    { sym: 'Be', cn: '铍', charge: 2, cat: 'alkaline' },
    { sym: 'Mg', cn: '镁', charge: 2, cat: 'alkaline' },
    { sym: 'Ca', cn: '钙', charge: 2, cat: 'alkaline' },
    { sym: 'Sr', cn: '锶', charge: 2, cat: 'alkaline' },
    { sym: 'Ba', cn: '钡', charge: 2, cat: 'alkaline' },
    { sym: 'Al', cn: '铝', charge: 3, cat: 'post' },
    { sym: 'Ga', cn: '镓', charge: 3, cat: 'post' },
    { sym: 'In', cn: '铟', charge: 3, cat: 'post' },
    { sym: 'Tl', cn: '铊', charge: 3, cat: 'post' },
    { sym: 'Sn', cn: '锡', charge: 2, cat: 'post' },
    { sym: 'Pb', cn: '铅', charge: 2, cat: 'post' },
    { sym: 'Bi', cn: '铋', charge: 3, cat: 'post' },
    { sym: 'Ti', cn: '钛', charge: 4, cat: 'transition' },
    { sym: 'V', cn: '钒', charge: 3, cat: 'transition' },
    { sym: 'Cr', cn: '铬', charge: 3, cat: 'transition' },
    { sym: 'Mn', cn: '锰', charge: 2, cat: 'transition' },
    { sym: 'Fe', cn: '铁', charge: 2, cat: 'transition' },
    { sym: 'Co', cn: '钴', charge: 2, cat: 'transition' },
    { sym: 'Ni', cn: '镍', charge: 2, cat: 'transition' },
    { sym: 'Cu', cn: '铜', charge: 2, cat: 'transition' },
    { sym: 'Zn', cn: '锌', charge: 2, cat: 'transition' },
    { sym: 'Ag', cn: '银', charge: 1, cat: 'transition' },
    { sym: 'Cd', cn: '镉', charge: 2, cat: 'transition' },
    { sym: 'Hg', cn: '汞', charge: 2, cat: 'transition' },
    { sym: 'Sc', cn: '钪', charge: 3, cat: 'transition' },
    { sym: 'Y', cn: '钇', charge: 3, cat: 'transition' },
    { sym: 'Zr', cn: '锆', charge: 4, cat: 'transition' },
    { sym: 'Mo', cn: '钼', charge: 6, cat: 'transition' },
    { sym: 'Pd', cn: '钯', charge: 2, cat: 'transition' },
    { sym: 'Pt', cn: '铂', charge: 2, cat: 'transition' },
    { sym: 'Au', cn: '金', charge: 3, cat: 'transition' },
    { sym: 'Hf', cn: '铪', charge: 4, cat: 'transition' },
    { sym: 'Ta', cn: '钽', charge: 5, cat: 'transition' },
    { sym: 'W', cn: '钨', charge: 6, cat: 'transition' },
    { sym: 'Re', cn: '铼', charge: 7, cat: 'transition' },
    { sym: 'Os', cn: '锇', charge: 4, cat: 'transition' },
    { sym: 'Ir', cn: '铱', charge: 3, cat: 'transition' },
    { sym: 'Ru', cn: '钌', charge: 3, cat: 'transition' },
    { sym: 'Rh', cn: '铑', charge: 3, cat: 'transition' },
    { sym: 'Nb', cn: '铌', charge: 5, cat: 'transition' },
    { sym: 'Tc', cn: '锝', charge: 4, cat: 'transition' },
    { sym: 'Sb', cn: '锑', charge: 3, cat: 'post' },
    { sym: 'Te', cn: '碲', charge: 4, cat: 'post' },
    { sym: 'Po', cn: '钋', charge: 4, cat: 'post' },
    { sym: 'La', cn: '镧', charge: 3, cat: 'lanthanide' },
    { sym: 'Ce', cn: '铈', charge: 3, cat: 'lanthanide' },
    { sym: 'Nd', cn: '钕', charge: 3, cat: 'lanthanide' },
    { sym: 'Sm', cn: '钐', charge: 3, cat: 'lanthanide' },
    { sym: 'Eu', cn: '铕', charge: 3, cat: 'lanthanide' },
    { sym: 'Gd', cn: '钆', charge: 3, cat: 'lanthanide' },
    { sym: 'Dy', cn: '镝', charge: 3, cat: 'lanthanide' },
    { sym: 'Er', cn: '铒', charge: 3, cat: 'lanthanide' },
    { sym: 'Yb', cn: '镱', charge: 3, cat: 'lanthanide' },
    { sym: 'Lu', cn: '镥', charge: 3, cat: 'lanthanide' },
    { sym: 'Th', cn: '钍', charge: 4, cat: 'actinide' },
    { sym: 'U', cn: '铀', charge: 6, cat: 'actinide' },
    { sym: 'Ge', cn: '锗', charge: 4, cat: 'post' },
    { sym: 'As', cn: '砷', charge: 3, cat: 'post' },
    { sym: 'Se', cn: '硒', charge: 4, cat: 'post' },
    { sym: 'Kr', cn: '氪', charge: 2, cat: 'noble' },
    { sym: 'Xe', cn: '氙', charge: 4, cat: 'noble' },
];

// --- ANIONS ---
const ANIONS = [
    { sym: 'F', cn: '氟化物', charge: -1, name: 'Fluoride', acid: 'HF' },
    { sym: 'Cl', cn: '氯化物', charge: -1, name: 'Chloride', acid: 'HCl' },
    { sym: 'Br', cn: '溴化物', charge: -1, name: 'Bromide', acid: 'HBr' },
    { sym: 'I', cn: '碘化物', charge: -1, name: 'Iodide', acid: 'HI' },
    { sym: 'O', cn: '氧化物', charge: -2, name: 'Oxide', acid: 'H2O' },
    { sym: 'S', cn: '硫化物', charge: -2, name: 'Sulfide', acid: 'H2S' },
    { sym: 'N', cn: '氮化物', charge: -3, name: 'Nitride', acid: 'NH3' },
    { sym: 'NO3', cn: '硝酸盐', charge: -1, name: 'Nitrate', acid: 'HNO3' },
    { sym: 'NO2', cn: '亚硝酸盐', charge: -1, name: 'Nitrite', acid: 'HNO2' },
    { sym: 'SO4', cn: '硫酸盐', charge: -2, name: 'Sulfate', acid: 'H2SO4' },
    { sym: 'SO3', cn: '亚硫酸盐', charge: -2, name: 'Sulfite', acid: 'H2SO3' },
    { sym: 'CO3', cn: '碳酸盐', charge: -2, name: 'Carbonate', acid: 'H2CO3' },
    { sym: 'HCO3', cn: '碳酸氢盐', charge: -1, name: 'Bicarbonate', acid: 'H2CO3' },
    { sym: 'PO4', cn: '磷酸盐', charge: -3, name: 'Phosphate', acid: 'H3PO4' },
    { sym: 'HPO4', cn: '磷酸氢盐', charge: -2, name: 'HPhosphate', acid: 'H3PO4' },
    { sym: 'H2PO4', cn: '磷酸二氢盐', charge: -1, name: 'DihPhosphate', acid: 'H3PO4' },
    { sym: 'OH', cn: '氢氧化物', charge: -1, name: 'Hydroxide', acid: 'H2O' },
    { sym: 'ClO', cn: '次氯酸盐', charge: -1, name: 'Hypochlorite', acid: 'HClO' },
    { sym: 'ClO2', cn: '亚氯酸盐', charge: -1, name: 'Chlorite', acid: 'HClO2' },
    { sym: 'ClO3', cn: '氯酸盐', charge: -1, name: 'Chlorate', acid: 'HClO3' },
    { sym: 'ClO4', cn: '高氯酸盐', charge: -1, name: 'Perchlorate', acid: 'HClO4' },
    { sym: 'MnO4', cn: '高锰酸盐', charge: -1, name: 'Permanganate', acid: 'HMnO4' },
    { sym: 'CrO4', cn: '铬酸盐', charge: -2, name: 'Chromate', acid: 'H2CrO4' },
    { sym: 'Cr2O7', cn: '重铬酸盐', charge: -2, name: 'Dichromate', acid: 'H2Cr2O7' },
    { sym: 'CN', cn: '氰化物', charge: -1, name: 'Cyanide', acid: 'HCN' },
    { sym: 'SCN', cn: '硫氰化物', charge: -1, name: 'Thiocyanate', acid: 'HSCN' },
    { sym: 'CH3COO', cn: '乙酸盐', charge: -1, name: 'Acetate', acid: 'CH3COOH' },
    { sym: 'C2O4', cn: '草酸盐', charge: -2, name: 'Oxalate', acid: 'H2C2O4' },
    { sym: 'SiO3', cn: '硅酸盐', charge: -2, name: 'Silicate', acid: 'H2SiO3' },
    { sym: 'BO3', cn: '硼酸盐', charge: -3, name: 'Borate', acid: 'H3BO3' },
    { sym: 'BrO3', cn: '溴酸盐', charge: -1, name: 'Bromate', acid: 'HBrO3' },
    { sym: 'IO3', cn: '碘酸盐', charge: -1, name: 'Iodate', acid: 'HIO3' },
    { sym: 'S2O3', cn: '硫代硫酸盐', charge: -2, name: 'Thiosulfate', acid: 'H2S2O3' },
    { sym: 'AsO4', cn: '砷酸盐', charge: -3, name: 'Arsenate', acid: 'H3AsO4' },
    { sym: 'SeO4', cn: '硒酸盐', charge: -2, name: 'Selenate', acid: 'H2SeO4' },
    { sym: 'TeO4', cn: '碲酸盐', charge: -2, name: 'Tellurate', acid: 'H2TeO4' },
    { sym: 'WO4', cn: '钨酸盐', charge: -2, name: 'Tungstate', acid: 'H2WO4' },
    { sym: 'MoO4', cn: '钼酸盐', charge: -2, name: 'Molybdate', acid: 'H2MoO4' },
    { sym: 'VO3', cn: '钒酸盐', charge: -1, name: 'Vanadate', acid: 'HVO3' },
    { sym: 'TiO3', cn: '钛酸盐', charge: -2, name: 'Titanate', acid: 'H2TiO3' },
    { sym: 'ZrO3', cn: '锆酸盐', charge: -2, name: 'Zirconate', acid: 'H2ZrO3' },
    { sym: 'SnO3', cn: '锡酸盐', charge: -2, name: 'Stannate', acid: 'H2SnO3' },
    { sym: 'PbO2', cn: '铅酸盐', charge: -2, name: 'Plumbate', acid: 'H2PbO2' },
    { sym: 'AlO2', cn: '铝酸盐', charge: -1, name: 'Aluminate', acid: 'HAlO2' },
    { sym: 'ZnO2', cn: '锌酸盐', charge: -2, name: 'Zincate', acid: 'H2ZnO2' },
    { sym: 'GaO2', cn: '镓酸盐', charge: -1, name: 'Gallate', acid: 'HGaO2' },
    { sym: 'BiO3', cn: '铋酸盐', charge: -1, name: 'Bismuthate', acid: 'HBiO3' },
    { sym: 'SbO3', cn: '锑酸盐', charge: -1, name: 'Antimonate', acid: 'HSbO3' },
];

function buildSaltFormula(metal, anion) {
    const mCharge = metal.charge;
    const aCharge = Math.abs(anion.charge);
    const lcm = (mCharge * aCharge) / gcd(mCharge, aCharge);
    const mCount = lcm / mCharge;
    const aCount = lcm / aCharge;

    let mPart = mCount === 1 ? metal.sym : (mCount + metal.sym);
    let aPart = aCount === 1 ? anion.sym : (aCount + anion.sym);

    // Handle multi-char anions with parentheses
    if (aCount > 1 && anion.sym.length > 1 && !anion.sym.startsWith('H')) {
        aPart = '(' + anion.sym + ')' + aCount;
    }
    if (mCount > 1 && metal.sym.length > 1) {
        mPart = '(' + metal.sym + ')' + mCount;
    }

    return mPart + aPart;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

// ==========================================
// GENERATE COMPOUNDS
// ==========================================
const compounds = {};
const molecules = {};
let compoundCount = 0;

function addCompound(formula, data) {
    if (compounds[formula]) return;
    compounds[formula] = { formula, ...data };
    compoundCount++;
}

function addMolecule(formula, name, nameCN, atoms, bonds, geometry, geometryCN, bondAngle, hybridization) {
    if (molecules[formula]) return;
    molecules[formula] = { name, nameCN, atoms, bonds, geometry, geometryCN, bondAngle, hybridization };
}

// Generate 3D structure for a simple compound
function generate3D(formula) {
    const parsed = parseFormula(formula);
    const elements = Object.keys(parsed);

    // Skip complex formulas
    if (elements.length === 0 || elements.length > 6) return null;

    // Single element
    if (elements.length === 1) {
        const el = elements[0];
        const count = parsed[el];
        if (count === 1) return { atoms: [{ element: el, x: 0, y: 0, z: 0 }], bonds: [] };
        if (count === 2) return { atoms: [{ element: el, x: -0.5, y: 0, z: 0 }, { element: el, x: 0.5, y: 0, z: 0 }], bonds: [[0, 1, 1]] };
        // Ring for 3+
        const coords = ringGeometry(count, 1.0);
        const atoms = coords.map((c, i) => ({ element: el, x: Math.round(c.x * 100) / 100, y: Math.round(c.y * 100) / 100, z: 0 }));
        const bonds = [];
        for (let i = 0; i < count; i++) bonds.push([i, (i + 1) % count, 1]);
        return { atoms, bonds };
    }

    // Two elements
    if (elements.length === 2) {
        const el1 = elements[0], el2 = elements[1];
        const c1 = parsed[el1], c2 = parsed[el2];

        // Simple XY or XY2 or X2Y patterns
        if (c1 === 1 && c2 === 1) {
            return { atoms: [{ element: el1, x: -0.5, y: 0, z: 0 }, { element: el2, x: 0.5, y: 0, z: 0 }], bonds: [[0, 1, 1]] };
        }
        if (c1 === 1 && c2 === 2) {
            const geo = getGeometry(el1, 2);
            const pos = bent(0, 104.5);
            const pos2 = bent(1, 104.5);
            return {
                atoms: [{ element: el1, x: 0, y: 0, z: 0 }, { element: el2, x: Math.round(pos.x * 100) / 100, y: Math.round(pos.y * 100) / 100, z: 0 }, { element: el2, x: Math.round(pos2.x * 100) / 100, y: Math.round(pos2.y * 100) / 100, z: 0 }],
                bonds: [[0, 1, 1], [0, 2, 1]]
            };
        }
        if (c1 === 2 && c2 === 1) {
            return {
                atoms: [{ element: el1, x: -0.7, y: 0, z: 0 }, { element: el2, x: 0, y: 0, z: 0 }, { element: el1, x: 0.7, y: 0, z: 0 }],
                bonds: [[0, 1, 1], [1, 2, 1]]
            };
        }
        if (c1 === 1 && c2 === 3) {
            const coords = [trigonalPlanar(0), trigonalPlanar(1), trigonalPlanar(2)];
            return {
                atoms: [{ element: el1, x: 0, y: 0, z: 0 }, ...coords.map(c => ({ element: el2, x: Math.round(c.x * 100) / 100, y: Math.round(c.y * 100) / 100, z: 0 }))],
                bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1]]
            };
        }
        if (c1 === 1 && c2 === 4) {
            const coords = [tetrahedral(1), tetrahedral(2), tetrahedral(3), tetrahedral(4)];
            return {
                atoms: [{ element: el1, x: 0, y: 0, z: 0 }, ...coords.map(c => ({ element: el2, x: Math.round(c.x * 100) / 100, y: Math.round(c.y * 100) / 100, z: Math.round(c.z * 100) / 100 }))],
                bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]]
            };
        }
        // Fallback: line up remaining atoms
        const atoms = [{ element: el1, x: 0, y: 0, z: 0 }];
        const bonds = [];
        let idx = 1;
        for (let i = 0; i < c2; i++) {
            atoms.push({ element: el2, x: idx * 0.8, y: 0, z: 0 });
            bonds.push([0, idx, 1]);
            idx++;
        }
        return { atoms, bonds };
    }

    // Three elements: pick the most electronegative as central
    const central = elements.find(e => ['C', 'N', 'S', 'P', 'Si', 'B'].includes(e)) || elements[0];
    const others = {};
    for (const el of elements) {
        if (el === central) continue;
        others[el] = parsed[el];
    }
    const bondedCount = Object.values(others).reduce((a, b) => a + b, 0);
    const geo = getGeometry(central, Math.min(bondedCount, 6));
    const placed = placeAtoms(central, others, geo);
    return placed;
}

// ==========================================
// 1. Generate salts (metal + anion)
// ==========================================
let saltCount = 0;
for (const metal of METALS) {
    for (const anion of ANIONS) {
        if (saltCount >= 1700) break;
        const formula = buildSaltFormula(metal, anion);
        if (compounds[formula]) continue;

        const atoms = parseFormula(formula);
        const mass = calculateMass(atoms);

        addCompound(formula, {
            nameEN: `${metal.sym} ${anion.name}`,
            nameCN: `${metal.cn}${anion.cn}`,
            classification: 'Salt', classificationCN: '盐',
            molecularMass: mass,
            acidBase: 'Neutral salt', acidBaseCN: '中性盐',
            state: 'Solid', stateCN: '固态',
            solubility: 'Varies', solubilityCN: '视情况而定',
            color: 'White', colorCN: '白色',
            polarity: 'Ionic', polarityCN: '离子键',
            bondType: 'Ionic', bondTypeCN: '离子键',
            hazards: 'Varies', hazardsCN: '视情况而定',
            uses: 'Chemical reagent, industrial', usesCN: '化学试剂、工业',
            description: `${metal.sym} ${anion.name} salt.`,
            descriptionCN: `${metal.cn}${anion.cn}盐。`,
        });

        // Generate 3D
        const struct = generate3D(formula);
        if (struct) {
            addMolecule(formula, `${metal.sym} ${anion.name}`, `${metal.cn}${anion.cn}`, struct.atoms, struct.bonds, 'Ionic', '离子', '-', 'N/A');
        }
        saltCount++;
    }
}

// ==========================================
// 2. Generate oxides (metal + O)
// ==========================================
for (const metal of METALS) {
    if (compoundCount >= 2200) break;
    const mCharge = metal.charge;
    const oCharge = 2;
    const lcm = (mCharge * oCharge) / gcd(mCharge, oCharge);
    const mCount = lcm / mCharge;
    const oCount = lcm / oCharge;

    let formula;
    if (mCount === 1 && oCount === 1) formula = metal.sym + 'O';
    else if (mCount === 1) formula = metal.sym + 'O' + (oCount > 1 ? oCount : '');
    else if (oCount === 1) formula = (mCount > 1 ? mCount : '') + metal.sym + 'O';
    else formula = (mCount > 1 ? mCount : '') + metal.sym + (oCount > 1 ? 'O' + oCount : 'O');

    if (!compounds[formula]) {
        const atoms = parseFormula(formula);
        const mass = calculateMass(atoms);
        addCompound(formula, {
            nameEN: `${metal.sym} Oxide`, nameCN: `${metal.cn}氧化物`,
            classification: 'Oxide', classificationCN: '氧化物',
            molecularMass: mass,
            acidBase: metal.cat === 'alkali' || metal.cat === 'alkaline' ? 'Basic oxide' : 'Amphoteric oxide',
            acidBaseCN: metal.cat === 'alkali' || metal.cat === 'alkaline' ? '碱性氧化物' : '两性氧化物',
            state: 'Solid', stateCN: '固态',
            solubility: 'Insoluble', solubilityCN: '不溶',
            color: 'White', colorCN: '白色',
            polarity: 'Ionic', polarityCN: '离子键',
            bondType: 'Ionic', bondTypeCN: '离子键',
            hazards: 'Low hazard', hazardsCN: '低危害',
            uses: 'Industrial, chemical reagent', usesCN: '工业、化学试剂',
            description: `${metal.sym} oxide.`,
            descriptionCN: `${metal.cn}氧化物。`,
        });

        const struct = generate3D(formula);
        if (struct) {
            addMolecule(formula, `${metal.sym} Oxide`, `${metal.cn}氧化物`, struct.atoms, struct.bonds, 'Ionic', '离子', '-', 'N/A');
        }
    }
}

// ==========================================
// 3. Generate hydroxides
// ==========================================
for (const metal of METALS) {
    if (compoundCount >= 2200) break;
    if (metal.charge > 3) continue;

    let formula;
    if (metal.charge === 1) formula = metal.sym + 'OH';
    else if (metal.charge === 2) formula = metal.sym + '(OH)2';
    else formula = metal.sym + '(OH)3';

    if (!compounds[formula]) {
        const atoms = parseFormula(formula);
        const mass = calculateMass(atoms);
        addCompound(formula, {
            nameEN: `${metal.sym} Hydroxide`, nameCN: `${metal.cn}氢氧化物`,
            classification: 'Base', classificationCN: '碱',
            molecularMass: mass,
            acidBase: 'Base', acidBaseCN: '碱',
            state: 'Solid', stateCN: '固态',
            solubility: metal.cat === 'alkali' ? 'Highly soluble' : 'Slightly soluble',
            solubilityCN: metal.cat === 'alkali' ? '极易溶' : '微溶',
            color: 'White', colorCN: '白色',
            polarity: 'Ionic', polarityCN: '离子键',
            bondType: 'Ionic', bondTypeCN: '离子键',
            hazards: 'Corrosive', hazardsCN: '腐蚀性',
            uses: 'Chemical reagent, industrial', usesCN: '化学试剂、工业',
            description: `${metal.sym} hydroxide.`,
            descriptionCN: `${metal.cn}氢氧化物。`,
        });

        const struct = generate3D(formula);
        if (struct) {
            addMolecule(formula, `${metal.sym} Hydroxide`, `${metal.cn}氢氧化物`, struct.atoms, struct.bonds, 'Ionic', '离子', '-', 'N/A');
        }
    }
}

// ==========================================
// 4. Generate halides
// ==========================================
const HALIDES = [
    { sym: 'F', cn: '氟', el: 'F' },
    { sym: 'Cl', cn: '氯', el: 'Cl' },
    { sym: 'Br', cn: '溴', el: 'Br' },
    { sym: 'I', cn: '碘', el: 'I' },
];

for (const metal of METALS) {
    for (const hal of HALIDES) {
        if (compoundCount >= 2200) break;
        if (metal.charge > 4) continue;

        let formula;
        if (metal.charge === 1) formula = metal.sym + hal.sym;
        else if (metal.charge === 2) formula = metal.sym + hal.sym + '2';
        else if (metal.charge === 3) formula = metal.sym + hal.sym + '3';
        else formula = metal.sym + hal.sym + '4';

        if (!compounds[formula]) {
            const atoms = parseFormula(formula);
            const mass = calculateMass(atoms);
            addCompound(formula, {
                nameEN: `${metal.sym} ${hal.cn}ide`, nameCN: `${metal.cn}${hal.cn}化物`,
                classification: 'Salt', classificationCN: '盐',
                molecularMass: mass,
                acidBase: 'Neutral salt', acidBaseCN: '中性盐',
                state: 'Solid', stateCN: '固态',
                solubility: 'Soluble', solubilityCN: '可溶',
                color: 'White', colorCN: '白色',
                polarity: 'Ionic', polarityCN: '离子键',
                bondType: 'Ionic', bondTypeCN: '离子键',
                hazards: 'Low hazard', hazardsCN: '低危害',
                uses: 'Chemical reagent', usesCN: '化学试剂',
                description: `${metal.sym} ${hal.cn}化物.`,
                descriptionCN: `${metal.cn}${hal.cn}化物。`,
            });

            const struct = generate3D(formula);
            if (struct) {
                addMolecule(formula, `${metal.sym} ${hal.cn}ide`, `${metal.cn}${hal.cn}化物`, struct.atoms, struct.bonds, 'Ionic', '离子', '-', 'N/A');
            }
        }
    }
}

// ==========================================
// 5. Generate common inorganic compounds
// ==========================================
const COMMON_INORGANIC = [
    { f: 'H2O', en: 'Water', cn: '水', cls: 'Oxide', clsCN: '氧化物', mass: 18.015, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'H2O2', en: 'Hydrogen Peroxide', cn: '过氧化氢', cls: 'Peroxide', clsCN: '过氧化物', mass: 34.01, ab: 'Weak acid', abCN: '弱酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'NH3', en: 'Ammonia', cn: '氨', cls: 'Hydride', clsCN: '氢化物', mass: 17.03, ab: 'Weak base', abCN: '弱碱', state: 'Gas', stCN: '气态', sol: 'Highly soluble', solCN: '极易溶', col: 'Colorless', colCN: '无色' },
    { f: 'HCl', en: 'Hydrochloric Acid', cn: '盐酸', cls: 'Acid', clsCN: '酸', mass: 36.46, ab: 'Strong acid', abCN: '强酸', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'H2S', en: 'Hydrogen Sulfide', cn: '硫化氢', cls: 'Hydride', clsCN: '氢化物', mass: 34.08, ab: 'Weak acid', abCN: '弱酸', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'HBr', en: 'Hydrobromic Acid', cn: '氢溴酸', cls: 'Acid', clsCN: '酸', mass: 80.91, ab: 'Strong acid', abCN: '强酸', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'HI', en: 'Hydroiodic Acid', cn: '氢碘酸', cls: 'Acid', clsCN: '酸', mass: 127.91, ab: 'Strong acid', abCN: '强酸', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'HF', en: 'Hydrofluoric Acid', cn: '氢氟酸', cls: 'Acid', clsCN: '酸', mass: 20.01, ab: 'Weak acid', abCN: '弱酸', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'SO2', en: 'Sulfur Dioxide', cn: '二氧化硫', cls: 'Oxide', clsCN: '氧化物', mass: 64.07, ab: 'Acidic oxide', abCN: '酸性氧化物', state: 'Gas', stCN: '气态', sol: 'Soluble', solCN: '可溶', col: 'Colorless', colCN: '无色' },
    { f: 'SO3', en: 'Sulfur Trioxide', cn: '三氧化硫', cls: 'Oxide', clsCN: '氧化物', mass: 80.06, ab: 'Acidic oxide', abCN: '酸性氧化物', state: 'Gas', stCN: '气态', sol: 'Reacts with water', solCN: '与水反应', col: 'Colorless', colCN: '无色' },
    { f: 'CO', en: 'Carbon Monoxide', cn: '一氧化碳', cls: 'Oxide', clsCN: '氧化物', mass: 28.01, ab: 'Neutral oxide', abCN: '中性氧化物', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CO2', en: 'Carbon Dioxide', cn: '二氧化碳', cls: 'Oxide', clsCN: '氧化物', mass: 44.01, ab: 'Acidic oxide', abCN: '酸性氧化物', state: 'Gas', stCN: '气态', sol: 'Soluble', solCN: '可溶', col: 'Colorless', colCN: '无色' },
    { f: 'NO', en: 'Nitric Oxide', cn: '一氧化氮', cls: 'Oxide', clsCN: '氧化物', mass: 30.01, ab: 'Neutral oxide', abCN: '中性氧化物', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'NO2', en: 'Nitrogen Dioxide', cn: '二氧化氮', cls: 'Oxide', clsCN: '氧化物', mass: 46.01, ab: 'Acidic oxide', abCN: '酸性氧化物', state: 'Gas', stCN: '气态', sol: 'Reacts with water', solCN: '与水反应', col: 'Brown', colCN: '棕色' },
    { f: 'N2O', en: 'Nitrous Oxide', cn: '一氧化二氮', cls: 'Oxide', clsCN: '氧化物', mass: 44.01, ab: 'Neutral oxide', abCN: '中性氧化物', state: 'Gas', stCN: '气态', sol: 'Soluble', solCN: '可溶', col: 'Colorless', colCN: '无色' },
    { f: 'SiO2', en: 'Silicon Dioxide', cn: '二氧化硅', cls: 'Oxide', clsCN: '氧化物', mass: 60.08, ab: 'Acidic oxide', abCN: '酸性氧化物', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'P2O5', en: 'Phosphorus Pentoxide', cn: '五氧化二磷', cls: 'Oxide', clsCN: '氧化物', mass: 141.94, ab: 'Acidic oxide', abCN: '酸性氧化物', state: 'Solid', stCN: '固态', sol: 'Reacts with water', solCN: '与水反应', col: 'White', colCN: '白色' },
    { f: 'MnO2', en: 'Manganese Dioxide', cn: '二氧化锰', cls: 'Oxide', clsCN: '氧化物', mass: 86.94, ab: 'Amphoteric oxide', abCN: '两性氧化物', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Black', colCN: '黑色' },
    { f: 'HNO3', en: 'Nitric Acid', cn: '硝酸', cls: 'Acid', clsCN: '酸', mass: 63.01, ab: 'Strong acid', abCN: '强酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'H2SO4', en: 'Sulfuric Acid', cn: '硫酸', cls: 'Acid', clsCN: '酸', mass: 98.08, ab: 'Strong acid', abCN: '强酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'H3PO4', en: 'Phosphoric Acid', cn: '磷酸', cls: 'Acid', clsCN: '酸', mass: 98.00, ab: 'Medium acid', abCN: '中强酸', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'H2CO3', en: 'Carbonic Acid', cn: '碳酸', cls: 'Acid', clsCN: '酸', mass: 62.03, ab: 'Weak acid', abCN: '弱酸', state: 'Solution', stCN: '溶液', sol: 'Exists in solution', solCN: '仅存在于溶液中', col: 'Colorless', colCN: '无色' },
    { f: 'H2SO3', en: 'Sulfurous Acid', cn: '亚硫酸', cls: 'Acid', clsCN: '酸', mass: 82.08, ab: 'Weak acid', abCN: '弱酸', state: 'Solution', stCN: '溶液', sol: 'Exists in solution', solCN: '存在于溶液中', col: 'Colorless', colCN: '无色' },
    { f: 'HClO', en: 'Hypochlorous Acid', cn: '次氯酸', cls: 'Acid', clsCN: '酸', mass: 52.46, ab: 'Weak acid', abCN: '弱酸', state: 'Solution', stCN: '溶液', sol: 'Exists in solution', solCN: '存在于溶液中', col: 'Colorless', colCN: '无色' },
    { f: 'HClO4', en: 'Perchloric Acid', cn: '高氯酸', cls: 'Acid', clsCN: '酸', mass: 100.46, ab: 'Strong acid', abCN: '强酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'HCN', en: 'Hydrogen Cyanide', cn: '氢氰酸', cls: 'Acid', clsCN: '酸', mass: 27.03, ab: 'Weak acid', abCN: '弱酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH4', en: 'Methane', cn: '甲烷', cls: 'Organic', clsCN: '有机物', mass: 16.04, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H6', en: 'Ethane', cn: '乙烷', cls: 'Organic', clsCN: '有机物', mass: 30.07, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C3H8', en: 'Propane', cn: '丙烷', cls: 'Organic', clsCN: '有机物', mass: 44.10, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C4H10', en: 'Butane', cn: '丁烷', cls: 'Organic', clsCN: '有机物', mass: 58.12, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H4', en: 'Ethylene', cn: '乙烯', cls: 'Organic', clsCN: '有机物', mass: 28.05, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H2', en: 'Acetylene', cn: '乙炔', cls: 'Organic', clsCN: '有机物', mass: 26.04, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H5OH', en: 'Ethanol', cn: '乙醇', cls: 'Organic', clsCN: '有机物', mass: 46.07, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3OH', en: 'Methanol', cn: '甲醇', cls: 'Organic', clsCN: '有机物', mass: 32.04, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3COOH', en: 'Acetic Acid', cn: '乙酸', cls: 'Organic', clsCN: '有机物', mass: 60.05, ab: 'Weak acid', abCN: '弱酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'HCHO', en: 'Formaldehyde', cn: '甲醛', cls: 'Organic', clsCN: '有机物', mass: 30.03, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3CHO', en: 'Acetaldehyde', cn: '乙醛', cls: 'Organic', clsCN: '有机物', mass: 44.05, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3COCH3', en: 'Acetone', cn: '丙酮', cls: 'Organic', clsCN: '有机物', mass: 58.08, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'HCOOH', en: 'Formic Acid', cn: '甲酸', cls: 'Organic', clsCN: '有机物', mass: 46.03, ab: 'Weak acid', abCN: '弱酸', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H6', en: 'Benzene', cn: '苯', cls: 'Organic', clsCN: '有机物', mass: 78.11, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H5OH', en: 'Phenol', cn: '苯酚', cls: 'Organic', clsCN: '有机物', mass: 94.11, ab: 'Weak acid', abCN: '弱酸', state: 'Solid', stCN: '固态', sol: 'Slightly soluble', solCN: '微溶', col: 'White', colCN: '白色' },
    { f: 'C6H5NH2', en: 'Aniline', cn: '苯胺', cls: 'Organic', clsCN: '有机物', mass: 93.13, ab: 'Weak base', abCN: '弱碱', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H5Cl', en: 'Chlorobenzene', cn: '氯苯', cls: 'Organic', clsCN: '有机物', mass: 112.56, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H5Br', en: 'Bromobenzene', cn: '溴苯', cls: 'Organic', clsCN: '有机物', mass: 157.01, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H5NO2', en: 'Nitrobenzene', cn: '硝基苯', cls: 'Organic', clsCN: '有机物', mass: 123.11, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Yellow', colCN: '黄色' },
    { f: 'C6H5CH3', en: 'Toluene', cn: '甲苯', cls: 'Organic', clsCN: '有机物', mass: 92.14, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H4(CH3)2', en: 'Xylene', cn: '二甲苯', cls: 'Organic', clsCN: '有机物', mass: 106.17, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C10H8', en: 'Naphthalene', cn: '萘', cls: 'Organic', clsCN: '有机物', mass: 128.17, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
    { f: 'CH3Cl', en: 'Chloromethane', cn: '氯甲烷', cls: 'Organic', clsCN: '有机物', mass: 50.49, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH2Cl2', en: 'Dichloromethane', cn: '二氯甲烷', cls: 'Organic', clsCN: '有机物', mass: 84.93, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CHCl3', en: 'Chloroform', cn: '氯仿', cls: 'Organic', clsCN: '有机物', mass: 119.38, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CCl4', en: 'Carbon Tetrachloride', cn: '四氯化碳', cls: 'Organic', clsCN: '有机物', mass: 153.82, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H5Cl', en: 'Chloroethane', cn: '氯乙烷', cls: 'Organic', clsCN: '有机物', mass: 64.51, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3Br', en: 'Bromomethane', cn: '溴甲烷', cls: 'Organic', clsCN: '有机物', mass: 94.94, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3I', en: 'Iodomethane', cn: '碘甲烷', cls: 'Organic', clsCN: '有机物', mass: 141.94, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H5Br', en: 'Bromoethane', cn: '溴乙烷', cls: 'Organic', clsCN: '有机物', mass: 108.97, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3OCH3', en: 'Dimethyl Ether', cn: '二甲醚', cls: 'Organic', clsCN: '有机物', mass: 46.07, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Soluble', solCN: '可溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H5OC2H5', en: 'Diethyl Ether', cn: '乙醚', cls: 'Organic', clsCN: '有机物', mass: 74.12, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3NH2', en: 'Methylamine', cn: '甲胺', cls: 'Organic', clsCN: '有机物', mass: 31.06, ab: 'Weak base', abCN: '弱碱', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'C2H5NH2', en: 'Ethylamine', cn: '乙胺', cls: 'Organic', clsCN: '有机物', mass: 45.08, ab: 'Weak base', abCN: '弱碱', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: '(CH3)2NH', en: 'Dimethylamine', cn: '二甲胺', cls: 'Organic', clsCN: '有机物', mass: 45.08, ab: 'Weak base', abCN: '弱碱', state: 'Gas', stCN: '气态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: '(CH3)3N', en: 'Trimethylamine', cn: '三甲胺', cls: 'Organic', clsCN: '有机物', mass: 59.11, ab: 'Weak base', abCN: '弱碱', state: 'Gas', stCN: '气态', sol: 'Soluble', solCN: '可溶', col: 'Colorless', colCN: '无色' },
    { f: 'CH3CN', en: 'Acetonitrile', cn: '乙腈', cls: 'Organic', clsCN: '有机物', mass: 41.05, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'CS2', en: 'Carbon Disulfide', cn: '二硫化碳', cls: 'Organic', clsCN: '有机物', mass: 76.14, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Insoluble', solCN: '不溶', col: 'Colorless', colCN: '无色' },
    { f: 'C6H12O6', en: 'Glucose', cn: '葡萄糖', cls: 'Carbohydrate', clsCN: '碳水化合物', mass: 180.16, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'C12H22O11', en: 'Sucrose', cn: '蔗糖', cls: 'Carbohydrate', clsCN: '碳水化合物', mass: 342.30, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'H2NCH2COOH', en: 'Glycine', cn: '甘氨酸', cls: 'Amino Acid', clsCN: '氨基酸', mass: 75.03, ab: 'Amphoteric', abCN: '两性', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'CH3CONH2', en: 'Acetamide', cn: '乙酰胺', cls: 'Amide', clsCN: '酰胺', mass: 59.07, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'C6H5CHO', en: 'Benzaldehyde', cn: '苯甲醛', cls: 'Organic', clsCN: '有机物', mass: 106.12, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'C8H10N4O2', en: 'Caffeine', cn: '咖啡因', cls: 'Alkaloid', clsCN: '生物碱', mass: 194.19, ab: 'Weak base', abCN: '弱碱', state: 'Solid', stCN: '固态', sol: 'Slightly soluble', solCN: '微溶', col: 'White', colCN: '白色' },
    { f: 'C6H8O7', en: 'Citric Acid', cn: '柠檬酸', cls: 'Organic', clsCN: '有机物', mass: 192.12, ab: 'Weak acid', abCN: '弱酸', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'C3H8O3', en: 'Glycerol', cn: '甘油', cls: 'Organic', clsCN: '有机物', mass: 92.09, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Miscible', solCN: '混溶', col: 'Colorless', colCN: '无色' },
    { f: 'NaClO', en: 'Sodium Hypochlorite', cn: '次氯酸钠', cls: 'Salt', clsCN: '盐', mass: 74.44, ab: 'Basic salt', abCN: '碱性盐', state: 'Solution', stCN: '溶液', sol: 'Soluble', solCN: '可溶', col: 'Pale yellow', colCN: '淡黄色' },
    { f: 'CaCO3', en: 'Calcium Carbonate', cn: '碳酸钙', cls: 'Salt', clsCN: '盐', mass: 100.09, ab: 'Basic salt', abCN: '碱性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
    { f: 'BaSO4', en: 'Barium Sulfate', cn: '硫酸钡', cls: 'Salt', clsCN: '盐', mass: 233.39, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
    { f: 'AgCl', en: 'Silver Chloride', cn: '氯化银', cls: 'Salt', clsCN: '盐', mass: 143.32, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
    { f: 'AgBr', en: 'Silver Bromide', cn: '溴化银', cls: 'Salt', clsCN: '盐', mass: 187.77, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Pale yellow', colCN: '淡黄色' },
    { f: 'AgI', en: 'Silver Iodide', cn: '碘化银', cls: 'Salt', clsCN: '盐', mass: 234.77, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Yellow', colCN: '黄色' },
    { f: 'PbI2', en: 'Lead Iodide', cn: '碘化铅', cls: 'Salt', clsCN: '盐', mass: 461.01, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Yellow', colCN: '黄色' },
    { f: 'Na2SiO3', en: 'Sodium Silicate', cn: '硅酸钠', cls: 'Salt', clsCN: '盐', mass: 122.06, ab: 'Basic salt', abCN: '碱性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'Na2S2O3', en: 'Sodium Thiosulfate', cn: '硫代硫酸钠', cls: 'Salt', clsCN: '盐', mass: 158.11, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'K2Cr2O7', en: 'Potassium Dichromate', cn: '重铬酸钾', cls: 'Salt', clsCN: '盐', mass: 294.18, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'Orange-red', colCN: '橙红色' },
    { f: 'KMnO4', en: 'Potassium Permanganate', cn: '高锰酸钾', cls: 'Salt', clsCN: '盐', mass: 158.03, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'Purple', colCN: '紫色' },
    { f: 'NH4Cl', en: 'Ammonium Chloride', cn: '氯化铵', cls: 'Salt', clsCN: '盐', mass: 53.49, ab: 'Acidic salt', abCN: '酸性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'NH4NO3', en: 'Ammonium Nitrate', cn: '硝酸铵', cls: 'Salt', clsCN: '盐', mass: 80.04, ab: 'Acidic salt', abCN: '酸性盐', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: '(NH4)2SO4', en: 'Ammonium Sulfate', cn: '硫酸铵', cls: 'Salt', clsCN: '盐', mass: 132.14, ab: 'Acidic salt', abCN: '酸性盐', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'NaHCO3', en: 'Sodium Bicarbonate', cn: '碳酸氢钠', cls: 'Salt', clsCN: '盐', mass: 84.01, ab: 'Basic salt', abCN: '碱性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'Na2CO3', en: 'Sodium Carbonate', cn: '碳酸钠', cls: 'Salt', clsCN: '盐', mass: 105.99, ab: 'Basic salt', abCN: '碱性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'K2CO3', en: 'Potassium Carbonate', cn: '碳酸钾', cls: 'Salt', clsCN: '盐', mass: 138.21, ab: 'Basic salt', abCN: '碱性盐', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'MgSO4', en: 'Magnesium Sulfate', cn: '硫酸镁', cls: 'Salt', clsCN: '盐', mass: 120.37, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'ZnSO4', en: 'Zinc Sulfate', cn: '硫酸锌', cls: 'Salt', clsCN: '盐', mass: 161.47, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'FeSO4', en: 'Iron(II) Sulfate', cn: '硫酸亚铁', cls: 'Salt', clsCN: '盐', mass: 151.91, ab: 'Acidic salt', abCN: '酸性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'Green', colCN: '绿色' },
    { f: 'CuSO4', en: 'Copper Sulfate', cn: '硫酸铜', cls: 'Salt', clsCN: '盐', mass: 159.61, ab: 'Acidic salt', abCN: '酸性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'Blue', colCN: '蓝色' },
    { f: 'Al2(SO4)3', en: 'Aluminum Sulfate', cn: '硫酸铝', cls: 'Salt', clsCN: '盐', mass: 342.15, ab: 'Acidic salt', abCN: '酸性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'Na3PO4', en: 'Sodium Phosphate', cn: '磷酸钠', cls: 'Salt', clsCN: '盐', mass: 163.94, ab: 'Basic salt', abCN: '碱性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'Ca3(PO4)2', en: 'Calcium Phosphate', cn: '磷酸钙', cls: 'Salt', clsCN: '盐', mass: 310.18, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
    { f: 'NaNO3', en: 'Sodium Nitrate', cn: '硝酸钠', cls: 'Salt', clsCN: '盐', mass: 85.00, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'KNO3', en: 'Potassium Nitrate', cn: '硝酸钾', cls: 'Salt', clsCN: '盐', mass: 101.10, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'CaSO4', en: 'Calcium Sulfate', cn: '硫酸钙', cls: 'Salt', clsCN: '盐', mass: 136.14, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Slightly soluble', solCN: '微溶', col: 'White', colCN: '白色' },
    { f: 'Na2SO4', en: 'Sodium Sulfate', cn: '硫酸钠', cls: 'Salt', clsCN: '盐', mass: 142.04, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'KCl', en: 'Potassium Chloride', cn: '氯化钾', cls: 'Salt', clsCN: '盐', mass: 74.55, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'NaBr', en: 'Sodium Bromide', cn: '溴化钠', cls: 'Salt', clsCN: '盐', mass: 102.89, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Soluble', solCN: '可溶', col: 'White', colCN: '白色' },
    { f: 'KI', en: 'Potassium Iodide', cn: '碘化钾', cls: 'Salt', clsCN: '盐', mass: 166.00, ab: 'Neutral salt', abCN: '中性盐', state: 'Solid', stCN: '固态', sol: 'Highly soluble', solCN: '极易溶', col: 'White', colCN: '白色' },
    { f: 'N2', en: 'Nitrogen', cn: '氮气', cls: 'Element', clsCN: '单质', mass: 28.01, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'O2', en: 'Oxygen', cn: '氧气', cls: 'Element', clsCN: '单质', mass: 32.00, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'H2', en: 'Hydrogen', cn: '氢气', cls: 'Element', clsCN: '单质', mass: 2.016, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Colorless', colCN: '无色' },
    { f: 'Cl2', en: 'Chlorine', cn: '氯气', cls: 'Element', clsCN: '单质', mass: 70.90, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Soluble', solCN: '可溶', col: 'Yellow-green', colCN: '黄绿色' },
    { f: 'Br2', en: 'Bromine', cn: '溴', cls: 'Element', clsCN: '单质', mass: 159.81, ab: 'Neutral', abCN: '中性', state: 'Liquid', stCN: '液态', sol: 'Slightly soluble', solCN: '微溶', col: 'Red-brown', colCN: '红棕色' },
    { f: 'I2', en: 'Iodine', cn: '碘', cls: 'Element', clsCN: '单质', mass: 253.81, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Slightly soluble', solCN: '微溶', col: 'Purple-black', colCN: '紫黑色' },
    { f: 'S', en: 'Sulfur', cn: '硫', cls: 'Element', clsCN: '单质', mass: 32.06, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Yellow', colCN: '黄色' },
    { f: 'P', en: 'Phosphorus', cn: '磷', cls: 'Element', clsCN: '单质', mass: 30.97, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
    { f: 'C', en: 'Carbon', cn: '碳', cls: 'Element', clsCN: '单质', mass: 12.01, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'Black', colCN: '黑色' },
    { f: 'O3', en: 'Ozone', cn: '臭氧', cls: 'Element', clsCN: '单质', mass: 48.00, ab: 'Neutral', abCN: '中性', state: 'Gas', stCN: '气态', sol: 'Slightly soluble', solCN: '微溶', col: 'Pale blue', colCN: '淡蓝色' },
    { f: 'P4', en: 'White Phosphorus', cn: '白磷', cls: 'Element', clsCN: '单质', mass: 123.90, ab: 'Neutral', abCN: '中性', state: 'Solid', stCN: '固态', sol: 'Insoluble', solCN: '不溶', col: 'White', colCN: '白色' },
];

for (const c of COMMON_INORGANIC) {
    if (compounds[c.f]) continue;
    addCompound(c.f, {
        nameEN: c.en, nameCN: c.cn,
        classification: c.cls, classificationCN: c.clsCN,
        molecularMass: c.mass,
        acidBase: c.ab, acidBaseCN: c.abCN,
        state: c.state, stateCN: c.stCN,
        solubility: c.sol, solubilityCN: c.solCN,
        color: c.col, colorCN: c.colCN,
        polarity: 'Varies', polarityCN: '视情况而定',
        bondType: 'Varies', bondTypeCN: '视情况而定',
        hazards: 'Varies', hazardsCN: '视情况而定',
        uses: 'Various', usesCN: '多种用途',
        description: `${c.en}.`,
        descriptionCN: `${c.cn}。`,
    });

    const struct = generate3D(c.f);
    if (struct) {
        addMolecule(c.f, c.en, c.cn, struct.atoms, struct.bonds, 'Varies', '视情况而定', '-', '-');
    }
}

// ==========================================
// OUTPUT
// ==========================================
console.log('Total compounds:', compoundCount);
console.log('Total 3D molecules:', Object.keys(molecules).length);

// Write compounds file
let cpOut = '/* ============================================\n';
cpOut += '   Mega Compound Database\n';
cpOut += '   Generated: ' + new Date().toISOString().split('T')[0] + '\n';
cpOut += '   Entries: ' + compoundCount + '\n';
cpOut += '   ============================================ */\n\n';
cpOut += 'const CompoundsDBMega = {\n';

for (const [key, c] of Object.entries(compounds)) {
    const safeKey = key.replace(/'/g, "\\'");
    cpOut += `    '${safeKey}': { formula: '${c.formula.replace(/'/g, "\\'")}', nameEN: '${c.nameEN.replace(/'/g, "\\'")}', nameCN: '${c.nameCN}', classification: '${c.classification}', classificationCN: '${c.classificationCN}', molecularMass: ${c.molecularMass}, acidBase: '${c.acidBase}', acidBaseCN: '${c.acidBaseCN}', state: '${c.state}', stateCN: '${c.stateCN}', solubility: '${c.solubility}', solubilityCN: '${c.solubilityCN}', color: '${c.color}', colorCN: '${c.colorCN}', polarity: '${c.polarity}', polarityCN: '${c.polarityCN}', bondType: '${c.bondType}', bondTypeCN: '${c.bondTypeCN}', hazards: '${c.hazards}', hazardsCN: '${c.hazardsCN}', uses: '${c.uses}', usesCN: '${c.usesCN}', description: '${c.description.replace(/'/g, "\\'")}', descriptionCN: '${c.descriptionCN}' },\n`;
}

cpOut += '};\n\n';
cpOut += `// Merge mega compounds into main database\n`;
cpOut += `function mergeMegaCompounds() {\n`;
cpOut += `    for (const [key, value] of Object.entries(CompoundsDBMega)) {\n`;
cpOut += `        if (!CompoundsDB[key]) {\n`;
cpOut += `            CompoundsDB[key] = value;\n`;
cpOut += `        }\n`;
cpOut += `    }\n`;
cpOut += `}\n\n`;
cpOut += `if (typeof CompoundsDB !== 'undefined') mergeMegaCompounds();\n`;

fs.writeFileSync('chem-compounds-mega.js', cpOut);
console.log('Wrote chem-compounds-mega.js');

// Write molecules file (split into parts)
const molEntries = Object.entries(molecules);
const PART_SIZE = 600;
const parts = Math.ceil(molEntries.length / PART_SIZE);

for (let p = 0; p < parts; p++) {
    const start = p * PART_SIZE;
    const end = Math.min(start + PART_SIZE, molEntries.length);
    const slice = molEntries.slice(start, end);
    const fileName = p === 0 ? 'chem-molecules-mega.js' : `chem-molecules-mega-${p + 1}.js`;
    const dbName = p === 0 ? 'MoleculesDBMega' : `MoleculesDBMega${p + 1}`;

    let mOut = '/* ============================================\n';
    mOut += '   Mega 3D Molecules Database (Part ' + (p + 1) + '/' + parts + ')\n';
    mOut += '   Generated: ' + new Date().toISOString().split('T')[0] + '\n';
    mOut += '   Entries: ' + slice.length + '\n';
    mOut += '   ============================================ */\n\n';
    mOut += `const ${dbName} = {\n`;

    for (const [key, m] of slice) {
        const safeKey = key.replace(/'/g, "\\'");
        const atomsStr = m.atoms.map(a => `{ element: '${a.element}', x: ${a.x}, y: ${a.y}, z: ${a.z} }`).join(', ');
        const bondsStr = m.bonds.map(b => `[${b[0]}, ${b[1]}, ${b[2]}]`).join(', ');
        mOut += `    '${safeKey}': { name: '${m.name.replace(/'/g, "\\'")}', nameCN: '${m.nameCN}', atoms: [${atomsStr}], bonds: [${bondsStr}], geometry: '${m.geometry}', geometryCN: '${m.geometryCN}', bondAngle: '${m.bondAngle}', hybridization: '${m.hybridization}' },\n`;
    }

    mOut += '};\n\n';
    mOut += `// Merge part ${p + 1} into main MoleculesDB\n`;
    mOut += `function mergeMegaMolecules${p + 1}() {\n`;
    mOut += `    for (const [key, value] of Object.entries(${dbName})) {\n`;
    mOut += `        if (!MoleculesDB[key]) {\n`;
    mOut += `            MoleculesDB[key] = value;\n`;
    mOut += `        }\n`;
    mOut += `    }\n`;
    mOut += `}\n\n`;
    mOut += `if (typeof MoleculesDB !== 'undefined') mergeMegaMolecules${p + 1}();\n`;

    fs.writeFileSync(fileName, mOut);
    console.log(`Wrote ${fileName} (${slice.length} entries)`);
}

console.log('Done!');
