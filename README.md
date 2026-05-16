# Chemical Laboratory

An elegant, interactive chemistry web application featuring reaction analysis, compound information, organic chemistry exploration, and 3D molecular visualization.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

### 🧪 Chemical Reactions
- Explore and analyze chemical reactions
- View balanced equations, reaction types, and principles
- Understand reaction mechanisms and conditions
- See ionic equations and product information

### 🔬 Compound Analyzer
- Input chemical formulas to get detailed information
- View molecular mass, classification, and properties
- Learn about acid/base characteristics, solubility, and more
- 3D molecular structure visualization for supported compounds

### 🧬 Organic Chemistry
- Explore organic compounds and functional groups
- Understand bond structures and hybridization
- View properties and common reactions
- Learn about alkane, alkene, alkyne, alcohol, and more

### 🎨 3D Molecular Viewer
- Interactive 3D visualization using Three.js
- Rotate, zoom, and pan molecular structures
- Toggle auto-rotation and orbital visualization
- View molecular geometry and bonds in 3D space

### 🌐 Bilingual Support (Chinese/English)
- Full English and Chinese language support
- Dynamic language switching
- Elegant, Apple-inspired UI design

### 🎯 Modern UI Features
- Apple-style glass/morphism design
- Dark and light theme support
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Interactive controls and visual feedback

### 📱 Responsive Design
- Works on desktop and mobile devices
- Touch support for mobile screens

## Getting Started

### Installation

This is a static web application, so no complex installation is required!

1. **Clone or download** the repository
2. **Open** `index.html` in a modern web browser
3. **Start exploring**!

Alternatively, you can serve it with a simple HTTP server:

```bash
# If you have Python installed
python -m http.server 8000

# Or with Node.js (http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
Chemical Laboratory/
├── index.html                   # Main HTML entry point
├── style.css                    # Stylesheet
├── app.js                       # Main application logic
├── reactions.js                 # Reactions database module
├── compounds.js                 # Compounds database module
├── organic.js                   # Organic chemistry database module
├── molecules.js                 # 3D molecules module
├── chem-parser.js               # Chemical formula parser
├── chem-inference.js            # Chemical inference engine
├── chem-fallback.js             # Fallback data source system
├── chem-compounds-expanded.js   # Expanded compounds database
├── chem-reactions-expanded.js   # Expanded reactions database
└── README.md                    # This file
```

## Usage

### Reaction Analysis
1. Go to the "Reactions" tab
2. Enter a chemical reaction (e.g., "HCl + NaOH")
3. Or click one of the quick example chips
4. Click "Analyze" to view detailed information

### Compound Analysis
1. Go to the "Compound Analyzer" tab
2. Enter a chemical formula (e.g., "H2SO4")
3. Or click one of the quick examples
4. View 3D structure if available in the database

### Organic Chemistry
1. Go to the "Organic Chemistry" tab
2. Enter an organic compound formula (e.g., "CH4")
3. Explore functional groups and properties

### Controls
- 🌍 **Language Toggle**: Switch between English and Chinese
- 🌗 **Theme Toggle**: Switch between light/dark mode
- 🔍 **Search**: Search for compounds, reactions, and molecules

## Technologies Used

- **HTML5 & CSS3**: Modern semantic markup and styling
- **Vanilla JavaScript**: No framework dependencies
- **Three.js**: 3D molecular visualization
- **Font Awesome style icons**: Beautiful SVG icons
- **LocalStorage**: For saving user preferences

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

Contributions are welcome! Feel free to:
- Add new compounds and reactions to the database
- Improve the UI/UX design
- Fix bugs or add new features
- Add more chemical data sources

## License

MIT License - feel free to use this project for learning and development!

## Author

Chemical Laboratory Web Application

## Acknowledgments

- Inspired by Apple's design language
- Chemical data from various educational sources
