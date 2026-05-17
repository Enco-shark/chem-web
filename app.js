/* ============================================
   Chemical Laboratory - Main Application
   ============================================ */

// ==========================================
// i18n System
// ==========================================
const i18n = {
    en: {
        appTitle: 'Chemical Laboratory',
        searchPlaceholder: 'Search elements, compounds, reactions...',
        navReactions: 'Reactions',
        navAnalyzer: 'Compound Analyzer',
        navOrganic: 'Organic Chemistry',
        navMolecules: '3D Molecules',
        reactionsTitle: 'Chemical Reactions',
        reactionsDesc: 'Enter a chemical equation to explore reactants, products, and reaction mechanisms.',
        analyzerTitle: 'Compound Analyzer',
        analyzerDesc: 'Input a chemical formula to analyze its molecular structure and properties.',
        organicTitle: 'Organic Chemistry',
        organicDesc: 'Explore organic compounds, functional groups, and molecular structures.',
        molecules3dTitle: '3D Molecular Viewer',
        molecules3dDesc: 'Visualize molecular structures in 3D with interactive rotation and orbital display.',
        reactionPlaceholder: 'Enter reaction, e.g. HCl + NaOH',
        compoundPlaceholder: 'Enter formula, e.g. H2SO4',
        organicPlaceholder: 'Enter formula, e.g. CH3COOH',
        molecule3dPlaceholder: 'Enter formula, e.g. H2O',
        analyze: 'Analyze',
        render: 'Render',
        quickExamples: 'Quick examples:',
        analyzing: 'Analyzing...',
        analysisComplete: 'Analysis complete',
        moleculeRendered: 'Molecule rendered',
        noResult: 'No matching result found',
        pubchemFetching: 'Searching PubChem...',
        pubchemComplete: 'Data fetched from PubChem',
        searchOnline: 'Search online',
        molecularStructure: '3D Molecular Structure',
        autoRotate: 'Auto Rotate',
        resetView: 'Reset View',
        toggleOrbitals: 'Toggle Orbitals',
        predicted: 'Predicted',
        parserInferred: 'Parser Inferred',
        onlineData: 'Online Data',
        viewOnPubChem: 'View on PubChem',
        synonyms: 'Synonyms',
        searchingPubChem: 'Searching PubChem...',
        noMatchFound: 'No matching result found',
        errorOccurred: 'An error occurred. Please try again.',
        language: 'Language',
        theme: 'Theme',
        viewMode: 'View Mode'
    },
    zh: {
        appTitle: '化学实验室',
        searchPlaceholder: '搜索元素、化合物、反应...',
        navReactions: '化学反应',
        navAnalyzer: '化合物分析',
        navOrganic: '有机化学',
        navMolecules: '3D分子',
        reactionsTitle: '化学反应',
        reactionsDesc: '输入化学方程式，探索反应物、产物和反应机理。',
        analyzerTitle: '化合物分析',
        analyzerDesc: '输入化学式，分析其分子结构和性质。',
        organicTitle: '有机化学',
        organicDesc: '探索有机化合物、官能团和分子结构。',
        molecules3dTitle: '3D分子查看器',
        molecules3dDesc: '以3D方式可视化分子结构，支持交互旋转和轨道显示。',
        reactionPlaceholder: '输入反应，如 HCl + NaOH',
        compoundPlaceholder: '输入化学式，如 H2SO4',
        organicPlaceholder: '输入化学式，如 CH3COOH',
        molecule3dPlaceholder: '输入化学式，如 H2O',
        analyze: '分析',
        render: '渲染',
        quickExamples: '快速示例：',
        analyzing: '分析中...',
        analysisComplete: '分析完成',
        moleculeRendered: '分子渲染完成',
        noResult: '未找到匹配结果',
        pubchemFetching: '正在从 PubChem 查询...',
        pubchemComplete: '已从 PubChem 获取数据',
        searchOnline: '在线搜索',
        molecularStructure: '3D分子结构',
        autoRotate: '自动旋转',
        resetView: '重置视图',
        toggleOrbitals: '切换轨道',
        predicted: '预测结果',
        parserInferred: '智能解析',
        onlineData: '在线数据',
        viewOnPubChem: '在 PubChem 中查看',
        synonyms: '别名',
        searchingPubChem: '正在从 PubChem 查询...',
        noMatchFound: '未找到匹配结果',
        errorOccurred: '查询出错，请重试。',
        language: '语言',
        theme: '主题',
        viewMode: '视图模式'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) {
            el.setAttribute('placeholder', i18n[lang][key]);
        }
    });

    // Update titles (for buttons)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (i18n[lang][key]) {
            el.setAttribute('title', i18n[lang][key]);
        }
    });

    // Update lang button label
    const langLabel = document.querySelector('.lang-label');
    if (langLabel) langLabel.textContent = lang === 'en' ? 'EN' : '中';

    // Re-render any visible results to update language
    refreshVisibleResults();
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    localStorage.setItem('chemlab-lang', newLang);
}

// Re-render visible results when language changes
function refreshVisibleResults() {
    // Re-render reaction result
    const reactionResult = document.getElementById('reactionResult');
    if (reactionResult && reactionResult.innerHTML.trim()) {
        const input = document.getElementById('reactionInput');
        if (input && input.value.trim()) {
            const val = input.value.trim();
            ChemFallback.analyzeReactionUnified(val).then(result => {
                reactionResult.innerHTML = result;
            }).catch(() => {
                // Fallback to local-only analysis
                if (typeof analyzeReaction === 'function') {
                    reactionResult.innerHTML = analyzeReaction(val);
                }
            });
        }
    }

    // Re-render compound result
    const compoundResult = document.getElementById('compoundResult');
    if (compoundResult && compoundResult.innerHTML.trim()) {
        const input = document.getElementById('compoundInput');
        if (input && input.value.trim()) {
            const val = input.value.trim();
            ChemFallback.analyzeCompoundUnified(val).then(result => {
                compoundResult.innerHTML = result;
            }).catch(() => {
                const localResult = analyzeCompoundLocal(val);
                if (localResult) compoundResult.innerHTML = localResult;
            });
        }
    }

    // Check if there's a visible organic result
    const organicResult = document.getElementById('organicResult');
    if (organicResult && organicResult.innerHTML.trim()) {
        const input = document.getElementById('organicInput');
        if (input && input.value.trim()) {
            organicResult.innerHTML = analyzeOrganic(input.value);
        }
    }

    // Check if there's a visible 3D molecule info
    const molecule3dInfo = document.getElementById('molecule3dInfo');
    if (molecule3dInfo && molecule3dInfo.innerHTML.trim()) {
        const canvas = document.getElementById('molecule3dCanvas');
        if (canvas) {
            const currentFormula = canvas.getAttribute('data-formula');
            if (currentFormula) {
                molecule3dInfo.innerHTML = renderMolecule3DInfo(currentFormula);
            }
        }
    }
}

// ==========================================
// Theme System
// ==========================================
let currentTheme = 'light';

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);

    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === 'light' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('chemlab-theme', newTheme);
}

// ==========================================
// Navigation System
// ==========================================
const tabs = ['reactions', 'analyzer', 'organic'];
let activeTab = 'reactions';

function switchTab(tabName) {
    if (!tabs.includes(tabName)) return;
    activeTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-tab') === tabName);
    });

    // Move indicator
    moveNavIndicator(tabName);

    // Switch pages with animation
    document.querySelectorAll('.module-page').forEach(page => {
        const isActive = page.id === `page-${tabName}`;
        if (isActive) {
            page.classList.add('active');
            page.style.animation = 'none';
            page.offsetHeight; // trigger reflow
            page.style.animation = '';
        } else {
            page.classList.remove('active');
        }
    });
}

function moveNavIndicator(tabName) {
    const indicator = document.querySelector('.nav-indicator');
    const tab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
    if (!indicator || !tab) return;

    const track = document.querySelector('.nav-track');
    const trackRect = track.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    indicator.style.width = `${tabRect.width}px`;
    indicator.style.left = `${tabRect.left - trackRect.left}px`;
}

// ==========================================
// Search System
// ==========================================
function getAllSearchItems() {
    const items = [];
    if (typeof ReactionSearchIndex !== 'undefined') items.push(...ReactionSearchIndex);
    if (typeof CompoundSearchIndex !== 'undefined') items.push(...CompoundSearchIndex);
    if (typeof OrganicSearchIndex !== 'undefined') items.push(...OrganicSearchIndex);
    if (typeof MoleculeSearchIndex !== 'undefined') items.push(...MoleculeSearchIndex);
    return items;
}

function performSearch(query) {
    if (!query || query.length < 1) return [];
    const lower = query.toLowerCase();
    const items = getAllSearchItems();
    const results = [];

    items.forEach(item => {
        const display = item.display || item.formula;
        let matched = false;

        // Match formula or English display
        if (display.toLowerCase().includes(lower) || item.formula.toLowerCase().includes(lower)) {
            matched = true;
        }

        // Match Chinese name from compound data
        if (!matched && item.data) {
            const nameCN = item.data.nameCN || '';
            if (nameCN.includes(query)) {
                matched = true;
            }
        }

        // Match Chinese name from organic data
        if (!matched && item.data) {
            const nameCN = item.data.nameCN || '';
            if (nameCN.includes(query)) {
                matched = true;
            }
        }

        // Match Chinese reaction type
        if (!matched && item.type === 'reaction' && item.data) {
            const typeCN = item.data.typeCN || '';
            if (typeCN.includes(query)) {
                matched = true;
            }
        }

        // Match Chinese molecule name
        if (!matched && item.type === 'molecule' && item.data) {
            const nameCN = item.data.nameCN || '';
            if (nameCN.includes(query)) {
                matched = true;
            }
        }

        if (matched) {
            results.push(item);
        }
    });

    return results.slice(0, 12);
}

function renderSearchSuggestions(results) {
    const dropdown = document.getElementById('searchSuggestions');
    if (!dropdown) return;

    const searchInput = document.getElementById('searchInput');
    const query = searchInput ? searchInput.value.trim() : '';

    if (results.length === 0 && (!query || query.length < 2)) {
        dropdown.classList.remove('visible');
        return;
    }

    const lang = currentLang;
    let html = '';

    results.forEach(r => {
        const typeLabel = r.type === 'reaction' ? (lang === 'zh' ? '反应' : 'Reaction')
            : r.type === 'compound' ? (lang === 'zh' ? '化合物' : 'Compound')
            : r.type === 'organic' ? (lang === 'zh' ? '有机物' : 'Organic')
            : (lang === 'zh' ? '分子' : 'Molecule');

        // Get display name based on language
        let displayName = formatFormula(r.formula);
        if (r.type === 'reaction') {
            // For reactions, show the type in Chinese if available
            if (r.data && r.data.typeCN && lang === 'zh') {
                displayName = `${r.formula} (${r.data.typeCN})`;
            } else if (r.data && r.data.type) {
                displayName = `${r.formula} (${r.data.type})`;
            }
        } else if (r.data && r.data.nameCN && lang === 'zh') {
            displayName = `${formatFormula(r.formula)} - ${r.data.nameCN}`;
        } else if (r.data && r.data.nameEN) {
            displayName = `${formatFormula(r.formula)} - ${r.data.nameEN}`;
        } else if (r.data && r.data.name) {
            displayName = `${formatFormula(r.formula)} - ${r.data.name}`;
        }

        html += `<div class="suggestion-item" data-type="${r.type}" data-formula="${r.formula}">`;
        html += `<span class="suggestion-type">${typeLabel}</span>`;
        html += `<span class="suggestion-formula">${displayName}</span>`;
        html += `</div>`;
    });

    // Add PubChem search option if no compound results and query is long enough
    const hasCompoundResult = results.some(r => r.type === 'compound');
    if (!hasCompoundResult && query && query.length >= 2) {
        html += `<div class="suggestion-item" data-type="pubchem" data-formula="${query}" style="border-top: 1px solid var(--divider); margin-top: 4px; padding-top: 10px;">`;
        html += `<span class="suggestion-type" style="background: rgba(0, 122, 255, 0.12); color: var(--accent);">PubChem</span>`;
        html += `<span class="suggestion-formula">${lang === 'zh' ? '在线搜索' : 'Search online'}: ${query}</span>`;
        html += `</div>`;
    }

    if (html === '') {
        dropdown.classList.remove('visible');
        return;
    }

    dropdown.innerHTML = html;
    dropdown.classList.add('visible');

    // Attach click handlers
    dropdown.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', (e) => {
            createRipple(e, item);
            const type = item.getAttribute('data-type');
            const formula = item.getAttribute('data-formula');
            handleSuggestionClick(type, formula);
            dropdown.classList.remove('visible');
            document.getElementById('searchInput').value = '';
        });
    });
}

function handleSuggestionClick(type, formula) {
    if (type === 'reaction') {
        switchTab('reactions');
        document.getElementById('reactionInput').value = formula;
        submitWithFeedback('reactionSubmit', 'reactionResult', () => ChemFallback.analyzeReactionUnified(formula), formula);
    } else if (type === 'compound' || type === 'molecule') {
        switchTab('analyzer');
        document.getElementById('compoundInput').value = formula;
        submitWithFeedback('compoundSubmit', 'compoundResult', () => ChemFallback.analyzeCompoundUnified(formula), formula);
        renderCompound3D(formula);
    } else if (type === 'organic') {
        switchTab('organic');
        document.getElementById('organicInput').value = formula;
        submitWithFeedback('organicSubmit', 'organicResult', () => analyzeOrganic(formula), formula);
        renderOrganic3D(formula);
    } else if (type === 'pubchem') {
        switchTab('analyzer');
        document.getElementById('compoundInput').value = formula;
        submitWithFeedback('compoundSubmit', 'compoundResult', () => ChemFallback.analyzeCompoundUnified(formula), formula);
        renderCompound3D(formula);
    }
}

// ==========================================
// Ripple Effect
// ==========================================
function createRipple(e, element) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    element.style.position = element.style.position || 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
}

function initRippleEffects() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.primary-btn, .glass-btn, .toolbar-btn, .nav-tab');
        if (btn) createRipple(e, btn);
    });
}

// ==========================================
// Toast Notification System
// ==========================================
let toastContainer = null;

function initToastContainer() {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
}

function showToast(message, type = 'info', duration = 2500) {
    if (!toastContainer) initToastContainer();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        error: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        info: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.2"/><path d="M8 5v0M8 7v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    };

    toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        toast.addEventListener('animationend', () => toast.remove());
    }, duration);
}

// ==========================================
// Chip Burst Effect
// ==========================================
function createChipBurst(e, chip) {
    const rect = chip.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('span');
        particle.className = 'chip-burst';
        const angle = (Math.PI * 2 / 6) * i;
        const dist = 15 + Math.random() * 15;
        particle.style.left = `${cx}px`;
        particle.style.top = `${cy}px`;
        particle.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
        chip.appendChild(particle);
        particle.addEventListener('animationend', () => particle.remove());
    }
}

function initChipBurstEffects() {
    document.addEventListener('click', (e) => {
        const chip = e.target.closest('.glass-chip');
        if (chip) createChipBurst(e, chip);
    });
}

// ==========================================
// Card Tilt Effect
// ==========================================
function initCardTilt() {
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.result-card, .glass-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -2;
                const rotateY = ((x - centerX) / centerX) * 2;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            } else {
                card.style.transform = '';
            }
        });
    });

    document.addEventListener('mouseleave', () => {
        document.querySelectorAll('.result-card, .glass-card').forEach(card => {
            card.style.transform = '';
        });
    });
}

// ==========================================
// 3D Molecule Rendering for Compound Analyzer
// ==========================================
function renderCompound3D(formula) {
    const section = document.getElementById('compound3dSection');
    if (!section) return;

    // Hide organic 3D section when compound 3D is shown
    const organicSection = document.getElementById('organic3dSection');
    if (organicSection) organicSection.style.display = 'none';

    const clean = formula.trim().toUpperCase();
    let matched = null;

    if (typeof MoleculesDB !== 'undefined') {
        for (const key of Object.keys(MoleculesDB)) {
            if (key.toUpperCase() === clean) {
                matched = key;
                break;
            }
        }
    }

    if (matched) {
        section.style.display = 'block';
        const molecule = renderMolecule3D(matched);
        if (molecule) {
            const info = renderMolecule3DInfo(matched);
            document.getElementById('molecule3dInfo').innerHTML = info;
        }
        document.getElementById('autoRotateBtn')?.classList.add('active');
    } else {
        section.style.display = 'none';
        document.getElementById('molecule3dInfo').innerHTML = '';
    }
}

function renderOrganic3D(formula) {
    const section = document.getElementById('organic3dSection');
    if (!section) return;

    const clean = formula.trim().toUpperCase();
    let matched = null;

    if (typeof MoleculesDB !== 'undefined') {
        for (const key of Object.keys(MoleculesDB)) {
            if (key.toUpperCase() === clean) {
                matched = key;
                break;
            }
        }
    }

    if (matched) {
        section.style.display = 'block';
        const molecule = renderMolecule3D(matched, 'organic3dCanvas');
        if (molecule) {
            const info = renderMolecule3DInfo(matched);
            document.getElementById('organic3dInfo').innerHTML = info;
        }
        // Also hide compound 3D section if visible
        const compoundSection = document.getElementById('compound3dSection');
        if (compoundSection) compoundSection.style.display = 'none';
    } else {
        section.style.display = 'none';
        document.getElementById('organic3dInfo').innerHTML = '';
    }
}

// ==========================================
// Submit with Loading Feedback
// ==========================================
function submitWithFeedback(btnId, resultId, analyzeFn, input, isRender = false) {
    const btn = document.getElementById(btnId);
    const resultArea = document.getElementById(resultId);
    if (!btn || !resultArea) return;

    // Show loading state
    btn.classList.add('loading');
    const lang = currentLang;
    const loadingLabel = lang === 'zh' ? '分析中...' : 'Analyzing...';
    const originalText = btn.textContent;
    btn.textContent = loadingLabel;

    // Show skeleton loading
    resultArea.innerHTML = `
        <div class="skeleton-card">
            <div class="skeleton-title"></div>
            <div class="skeleton-line long"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line short"></div>
            <div class="skeleton-line long"></div>
        </div>
    `;

    const finalize = (result) => {
        resultArea.innerHTML = result;
        btn.classList.remove('loading');
        btn.textContent = originalText;

        const isError = result.includes('error-message');
        if (isError) {
            showToast(lang === 'zh' ? '未找到匹配结果' : 'No matching result found', 'error');
        } else if (isRender) {
            showToast(lang === 'zh' ? '分子渲染完成' : 'Molecule rendered', 'success');
        } else if (result.includes('source-pubchem')) {
            showToast(lang === 'zh' ? '已从 PubChem 获取数据' : 'Data fetched from PubChem', 'info');
        } else {
            showToast(lang === 'zh' ? '分析完成' : 'Analysis complete', 'success');
        }
    };

    // Check if analyzeFn returns a Promise (async)
    const delay = isRender ? 400 : 300;
    setTimeout(async () => {
        try {
            const result = analyzeFn();
            // Handle async (PubChem fallback) results
            if (result instanceof Promise) {
                const asyncResult = await result;
                finalize(asyncResult);
            } else {
                finalize(result);
            }
        } catch (e) {
            console.error('Analysis error:', e);
            finalize(`<div class="error-message">${lang === 'zh' ? '查询出错，请重试。' : 'An error occurred. Please try again.'}</div>`);
        }
    }, delay);
}

// ==========================================
// Event Listeners
// ==========================================
function initEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.getAttribute('data-tab'));
        });
    });

    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    // Language toggle
    document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const results = performSearch(e.target.value);
            renderSearchSuggestions(results);
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.length > 0) {
                const results = performSearch(searchInput.value);
                renderSearchSuggestions(results);
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-box')) {
                document.getElementById('searchSuggestions')?.classList.remove('visible');
            }
        });
    }

    // Reactions module
    document.getElementById('reactionSubmit')?.addEventListener('click', () => {
        const input = document.getElementById('reactionInput').value;
        if (input.trim()) {
            submitWithFeedback('reactionSubmit', 'reactionResult', () => ChemFallback.analyzeReactionUnified(input), input);
        }
    });

    document.getElementById('reactionInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = e.target.value;
            if (input.trim()) {
                submitWithFeedback('reactionSubmit', 'reactionResult', () => ChemFallback.analyzeReactionUnified(input), input);
            }
        }
    });

    // Compound analyzer module (with multi-source fallback + 3D viewer)
    document.getElementById('compoundSubmit')?.addEventListener('click', () => {
        const input = document.getElementById('compoundInput').value;
        if (input.trim()) {
            submitWithFeedback('compoundSubmit', 'compoundResult', () => ChemFallback.analyzeCompoundUnified(input), input);
            renderCompound3D(input.trim());
        }
    });

    document.getElementById('compoundInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = e.target.value;
            if (input.trim()) {
                submitWithFeedback('compoundSubmit', 'compoundResult', () => ChemFallback.analyzeCompoundUnified(input), input);
                renderCompound3D(input.trim());
            }
        }
    });

    // Organic chemistry module
    document.getElementById('organicSubmit')?.addEventListener('click', () => {
        const input = document.getElementById('organicInput').value;
        if (input.trim()) {
            submitWithFeedback('organicSubmit', 'organicResult', () => analyzeOrganic(input), input);
            renderOrganic3D(input.trim());
        }
    });

    document.getElementById('organicInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = e.target.value;
            if (input.trim()) {
                submitWithFeedback('organicSubmit', 'organicResult', () => analyzeOrganic(input), input);
                renderOrganic3D(input.trim());
            }
        }
    });

    // 3D viewer controls (compound)
    document.getElementById('autoRotateBtn')?.addEventListener('click', () => {
        const state = toggleAutoRotation();
        document.getElementById('autoRotateBtn')?.classList.toggle('active', state);
    });
    document.getElementById('resetViewBtn')?.addEventListener('click', resetMoleculeView);
    document.getElementById('toggleOrbitalsBtn')?.addEventListener('click', () => {
        const state = toggleOrbitals();
        document.getElementById('toggleOrbitalsBtn')?.classList.toggle('active', state);
    });

    // 3D viewer controls (organic)
    document.getElementById('autoRotateBtn2')?.addEventListener('click', () => {
        const state = toggleAutoRotation();
        document.getElementById('autoRotateBtn2')?.classList.toggle('active', state);
    });
    document.getElementById('resetViewBtn2')?.addEventListener('click', resetMoleculeView);
    document.getElementById('toggleOrbitalsBtn2')?.addEventListener('click', () => {
        const state = toggleOrbitals();
        document.getElementById('toggleOrbitalsBtn2')?.classList.toggle('active', state);
    });

    // Quick example chips
    document.querySelectorAll('[data-reaction]').forEach(chip => {
        chip.addEventListener('click', () => {
            const val = chip.getAttribute('data-reaction');
            document.getElementById('reactionInput').value = val;
            submitWithFeedback('reactionSubmit', 'reactionResult', () => ChemFallback.analyzeReactionUnified(val), val);
        });
    });

    document.querySelectorAll('[data-compound]').forEach(chip => {
        chip.addEventListener('click', () => {
            const val = chip.getAttribute('data-compound');
            document.getElementById('compoundInput').value = val;
            submitWithFeedback('compoundSubmit', 'compoundResult', () => ChemFallback.analyzeCompoundUnified(val), val);
            renderCompound3D(val);
        });
    });

    document.querySelectorAll('[data-organic]').forEach(chip => {
        chip.addEventListener('click', () => {
            const val = chip.getAttribute('data-organic');
            document.getElementById('organicInput').value = val;
            submitWithFeedback('organicSubmit', 'organicResult', () => analyzeOrganic(val), val);
            renderOrganic3D(val);
        });
    });

    // Window resize - update nav indicator
    window.addEventListener('resize', () => {
        moveNavIndicator(activeTab);
    });
}

// ==========================================
// Input Validation Feedback
// ==========================================
function initInputFeedback() {
    const inputs = [
        { id: 'reactionInput', db: () => typeof ReactionsDB !== 'undefined' ? ReactionsDB : {}, hasFallback: false, hasParser: false },
        { id: 'compoundInput', db: () => typeof CompoundsDB !== 'undefined' ? CompoundsDB : {}, hasFallback: true, hasParser: true },
        { id: 'organicInput', db: () => typeof OrganicDB !== 'undefined' ? OrganicDB : {}, hasFallback: false, hasParser: true },
        { id: 'molecule3dInput', db: () => typeof MoleculesDB !== 'undefined' ? MoleculesDB : {}, hasFallback: false, hasParser: false }
    ];

    inputs.forEach(({ id, db, hasFallback, hasParser }) => {
        const input = document.getElementById(id);
        if (!input) return;

        const wrapper = input.closest('.formula-input-wrapper');
        const feedback = wrapper?.querySelector('.input-feedback');

        input.addEventListener('input', () => {
            const val = input.value.trim();

            // Reset wrapper state
            wrapper?.classList.remove('input-valid', 'input-partial', 'input-invalid');
            if (feedback) {
                feedback.classList.remove('valid', 'partial', 'invalid');
            }

            if (!val) {
                if (feedback) feedback.textContent = '';
                return;
            }

            const database = db();
            const keys = Object.keys(database);
            const match = keys.some(k => k.toLowerCase() === val.toLowerCase());
            const partial = keys.some(k => k.toLowerCase().startsWith(val.toLowerCase()) || val.toLowerCase().startsWith(k.toLowerCase()));

            if (match) {
                if (feedback) {
                    feedback.innerHTML = '<span class="success-check">✓</span>';
                    feedback.classList.add('valid');
                }
                wrapper?.classList.add('input-valid');
            } else if (partial) {
                if (feedback) {
                    feedback.textContent = '...';
                    feedback.classList.add('partial');
                }
                wrapper?.classList.add('input-partial');
            } else if (hasParser && typeof ChemParser !== 'undefined' && /^[A-Z]/.test(val)) {
                // Check if parser can handle this formula
                try {
                    const parsed = ChemParser.parse(val);
                    if (Object.keys(parsed).length > 0) {
                        if (feedback) {
                            const lang = currentLang;
                            feedback.innerHTML = `<span style="font-size: 0.65rem; opacity: 0.7;">${lang === 'zh' ? '解析' : 'parse'}</span>`;
                            feedback.classList.add('partial');
                        }
                        wrapper?.classList.add('input-partial');
                    } else {
                        if (feedback) feedback.textContent = '';
                    }
                } catch (e) {
                    if (feedback) feedback.textContent = '';
                }
            } else if (hasFallback && val.length >= 2) {
                // Show PubChem search hint
                if (feedback) {
                    const lang = currentLang;
                    feedback.innerHTML = `<span style="font-size: 0.65rem; opacity: 0.7;">${lang === 'zh' ? '在线' : 'web'}</span>`;
                    feedback.classList.add('partial');
                }
                wrapper?.classList.add('input-partial');
            } else {
                if (feedback) {
                    feedback.textContent = '';
                }
            }
        });
    });
}

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Restore saved preferences
    const savedTheme = localStorage.getItem('chemlab-theme') || 'light';
    const savedLang = localStorage.getItem('chemlab-lang') || 'en';

    setTheme(savedTheme);
    setLanguage(savedLang);

    // Initialize UI
    initEventListeners();
    initInputFeedback();
    initCardTilt();
    initRippleEffects();
    initChipBurstEffects();
    initToastContainer();

    // Set initial nav indicator position
    requestAnimationFrame(() => {
        moveNavIndicator('reactions');
    });

    // Set auto-rotate button as active by default
    document.getElementById('autoRotateBtn')?.classList.add('active');
});
