# Chemical Laboratory - Claude Code Improvement Prompts

Copy-paste these prompts into Claude Code to improve the project incrementally.

---

## Chemistry Data Expansion

```
Add 10 new common chemical reactions to reactions.js. Focus on reactions taught in high school and first-year university chemistry. Include acid-base, redox, precipitation, and combustion reactions. Each entry must have bilingual (EN/CN) principles, balanced equations with proper symbols (↑↓△⇌), and all required fields matching the existing ReactionsDB schema.
```

```
Add 15 new compounds to compounds.js covering common acids (HCl, HNO3, H3PO4), bases (Ca(OH)2, Ba(OH)2), and salts (Na2CO3, K2CrO4, FeCl3). Include complete bilingual data, molecular mass, hazards, uses, and classification. Verify they parse correctly with ChemParser.
```

```
Add 10 new organic compounds to organic.js covering amines (CH3NH2, C6H5NH2), ethers (CH3OCH3), esters (CH3COOCH2CH3), and amino acids (glycine). Include functional groups, bond types, properties, and common reactions in both English and Chinese.
```

```
Add 8 new 3D molecule structures to molecules.js. Include HCl, NH3, CH3OH, H2CO, CH3COOH, C2H4, C2H2, and C6H5OH. Provide chemically plausible atom coordinates and bond data. Test that each renders correctly in the 3D viewer.
```

---

## Chemistry Engine Improvements

```
Improve ChemParser to handle more formula formats: support for coordination compounds like [Cu(NH3)4]SO4, polyatomic ions in parentheses, and charges like Fe3+ or SO4(2-). Add test cases for each new format.
```

```
Extend ChemInference.predictReaction() with 4 more prediction rules: (1) metal + nonmetal → salt, (2) acid + carbonate → salt + water + CO2, (3) metal oxide + water → base, (4) decomposition by heat. Test each rule with known examples.
```

```
Improve the equation balancer in chem-inference.js to handle redox reactions better. Add support for half-reaction method and acidic/basic medium balancing. Test with: Fe + HCl, KMnO4 + HCl, Cu + HNO3(dilute).
```

```
Add ionic equation generation to the reaction analysis. When a reaction involves aqueous electrolytes, automatically generate the complete ionic equation and net ionic equation. Display these in the reaction results with proper formatting.
```

---

## UI & Visual Improvements

```
Add a periodic table mini-viewer to the search results. When a user searches for an element (e.g., "Fe" or "Iron"), show a small card with the element's symbol, atomic number, mass, category, group, period, and electronegativity. Use glass-card styling.
```

```
Improve the compound analyzer results layout. Add a molecular structure image from PubChem when available, display a visual element composition pie chart using CSS, and show the molecular formula with proper subscript formatting.
```

```
Add a reaction history feature. Store the last 10 analyzed reactions in localStorage and show them as quick-access chips below the input. Use glass-chip styling. Allow clicking a chip to re-run the analysis.
```

```
Improve the mobile experience. Fix the 3D viewer height on small screens, make the search suggestions full-width on mobile, ensure the navigation tabs scroll horizontally if needed, and test all features at 375px width.
```

---

## 3D Viewer Improvements

```
Improve the 3D molecule viewer in molecules.js. Add a distance measurement tool (click two atoms to see the distance), add a wireframe toggle for the entire molecule, and improve the atom tooltip to show element name, symbol, and partial charge when available.
```

```
Add color scheme options to the 3D viewer: CPK (default), monochrome, and by-element-category. Add a dropdown control to switch between schemes. Persist the user's choice in localStorage.
```

```
Improve 3D viewer camera behavior. Add smooth camera transitions when switching molecules (animate from current position to optimal viewing angle). Add a "zoom to fit" button that frames the current molecule perfectly.
```

---

## Search & Discovery

```
Improve the search system to support more query types: (1) search by element symbol to find all compounds containing that element, (2) search by reaction type (e.g., "combustion"), (3) search by functional group (e.g., "alcohol"), (4) fuzzy matching for typos.
```

```
Add an element periodic table page accessible from navigation. Show all 44 elements from ChemParser.ELEMENTS in a proper periodic table layout. Click an element to see its compounds and reactions. Use glass-card styling for each element cell.
```

---

## API & Data Integration

```
Improve PubChem API integration in compounds.js. Add: (1) caching of API responses in localStorage with TTL, (2) retry logic for failed requests, (3) batch lookup for multiple compounds, (4) display the 2D structure image in compound results.
```

```
Add Wikipedia summary integration. When analyzing a compound, fetch a short summary from the Wikipedia API and display it as additional context. Cache results. Show a "Source: Wikipedia" badge. Support both English and Chinese Wikipedia.
```

---

## Performance & Quality

```
Optimize the 3D viewer performance in molecules.js. Implement: (1) geometry/material pooling for common atom types, (2) pause rendering when canvas is not visible, (3) dispose old objects properly when switching molecules, (4) reduce geometry segment count for distant atoms.
```

```
Add error boundaries and graceful degradation. When PubChem API fails, show cached data with a "offline" badge. When a formula doesn't parse, show the raw input with a helpful error message. When 3D data is missing, show a 2D placeholder instead of a blank canvas.
```

```
Audit and fix all CSS issues. Check: (1) theme consistency - all colors use CSS variables, (2) no hardcoded color values, (3) proper dark mode support for all components, (4) responsive breakpoints work correctly, (5) remove unused CSS rules.
```

---

## i18n & Accessibility

```
Audit all user-facing text for bilingual completeness. Find any hardcoded English text in HTML or JS that should be in the i18n system. Add missing translations. Ensure all dynamic text (errors, loading states, results) appears in the active language.
```

```
Add keyboard navigation support. Make all interactive elements focusable and operable with keyboard. Add visible focus indicators. Support Tab to navigate between sections, Enter to submit, Escape to close dropdowns. Test with keyboard-only navigation.
```

---

## Advanced Features

```
Add a chemical equation balancer tool as a new tab. Users input an unbalanced equation, and the app shows the balanced result step-by-step with explanations. Use ChemInference.balanceEquation() and add a visual step-by-step breakdown.
```

```
Add a molar mass calculator tool. Users input a formula, and the app shows: molar mass, element composition (percentage), number of atoms, and a visual breakdown. Use ChemParser.calculateMolarMass() and ChemParser.getComposition().
```

```
Add an electron configuration display for elements. When viewing an element, show its electron configuration (e.g., 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ for Fe), valence electrons, and orbital diagram. Use ChemParser.ELEMENTS data.
```
