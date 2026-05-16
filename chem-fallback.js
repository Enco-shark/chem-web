/* ============================================
   Multi-Source Data Fallback System
   ============================================ */

const ChemFallback = (() => {

    // ==========================================
    // Source Registry
    // ==========================================
    const SOURCES = {
        local: { name: 'Local Database', nameCN: '本地数据库', priority: 1, icon: '💾' },
        parser: { name: 'Formula Parser', nameCN: '公式解析器', priority: 2, icon: '🔬' },
        inference: { name: 'Rule Inference', nameCN: '规则推断', priority: 3, icon: '🧠' },
        pubchem: { name: 'PubChem', nameCN: 'PubChem', priority: 4, icon: '🌐' },
        wikidata: { name: 'Wikidata', nameCN: 'Wikidata', priority: 5, icon: '📚' },
        chemspider: { name: 'ChemSpider', nameCN: 'ChemSpider', priority: 6, icon: '🔍' },
    };

    // ==========================================
    // Cache System
    // ==========================================
    const cache = {
        compounds: {},
        reactions: {},
        organic: {},
    };

    function getCached(type, key) {
        return cache[type]?.[key] || null;
    }

    function setCache(type, key, data, source) {
        if (!cache[type]) cache[type] = {};
        cache[type][key] = {
            data,
            source,
            timestamp: Date.now(),
        };
    }

    function clearCache(type) {
        if (type) {
            cache[type] = {};
        } else {
            cache.compounds = {};
            cache.reactions = {};
            cache.organic = {};
        }
    }

    // ==========================================
    // Compound Sources
    // ==========================================

    // Source 1: Local Database
    async function tryLocalCompound(formula) {
        if (typeof CompoundsDB === 'undefined') return null;

        // Direct match
        if (CompoundsDB[formula]) {
            return { data: CompoundsDB[formula], source: 'local' };
        }

        // Case-insensitive match
        const upper = formula.toUpperCase();
        for (const key of Object.keys(CompoundsDB)) {
            if (key.toUpperCase() === upper) {
                return { data: CompoundsDB[key], source: 'local' };
            }
        }

        // Name search
        const lower = formula.toLowerCase();
        for (const key of Object.keys(CompoundsDB)) {
            const c = CompoundsDB[key];
            if (c.nameEN?.toLowerCase().includes(lower) || c.nameCN?.includes(formula)) {
                return { data: c, source: 'local' };
            }
        }

        return null;
    }

    // Source 2: Formula Parser
    async function tryParserCompound(formula) {
        if (typeof ChemParser === 'undefined') return null;

        try {
            const parsed = ChemParser.parse(formula);
            if (Object.keys(parsed).length > 0 && /^[A-Z]/.test(formula)) {
                const record = ChemParser.buildCompoundRecord(formula);
                if (record && record.molecularMass > 0) {
                    return { data: record, source: 'parser' };
                }
            }
        } catch (e) {
            console.warn('Parser error:', e);
        }

        return null;
    }

    // Source 3: Rule Inference
    async function tryInferenceCompound(formula) {
        if (typeof ChemInference === 'undefined') return null;

        try {
            const props = ChemInference.inferProperties(formula);
            if (props && props.molecularMass > 0) {
                return { data: props, source: 'inference' };
            }
        } catch (e) {
            console.warn('Inference error:', e);
        }

        return null;
    }

    // Source 4: PubChem API
    async function tryPubChemCompound(formula) {
        if (typeof PubChemAPI === 'undefined') return null;

        try {
            const data = await PubChemAPI.fetchFull(formula);
            if (data) {
                return { data, source: 'pubchem' };
            }
        } catch (e) {
            console.warn('PubChem error:', e);
        }

        return null;
    }

    // Source 5: Wikidata (via SPARQL)
    async function tryWikidataCompound(formula) {
        try {
            const query = `
                SELECT ?compound ?compoundLabel ?formula ?mass WHERE {
                    ?compound wdt:P31 wd:Q11173 .
                    ?compound wdt:P274 "${formula}" .
                    OPTIONAL { ?compound wdt:P2067 ?mass }
                    SERVICE wikibase:label { bd:serviceParam wikibase:language "en,zh" }
                } LIMIT 1
            `;
            const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;
            const response = await fetch(url, {
                headers: { 'Accept': 'application/json' },
                signal: AbortSignal.timeout(5000),
            });

            if (response.ok) {
                const data = await response.json();
                const results = data?.results?.bindings;
                if (results && results.length > 0) {
                    const r = results[0];
                    return {
                        data: {
                            formula: formula,
                            nameEN: r.compoundLabel?.value || formula,
                            nameCN: '',
                            molecularMass: parseFloat(r.mass?.value) || 0,
                            source: 'wikidata',
                        },
                        source: 'wikidata',
                    };
                }
            }
        } catch (e) {
            console.warn('Wikidata error:', e);
        }

        return null;
    }

    // ==========================================
    // Reaction Sources
    // ==========================================

    // Source 1: Local Reaction Database
    async function tryLocalReaction(input) {
        if (typeof ReactionsDB === 'undefined') return null;

        const clean = input.trim().replace(/\s+/g, ' ');

        // Direct match
        if (ReactionsDB[clean]) {
            return { data: ReactionsDB[clean], source: 'local' };
        }

        // Normalized match
        const normalized = clean
            .replace(/→/g, '+').replace(/->/g, '+').replace(/=/g, '+')
            .split('+').map(s => s.trim()).filter(Boolean).sort().join(' + ');

        for (const key of Object.keys(ReactionsDB)) {
            const keyNorm = key.split('+').map(s => s.trim()).sort().join(' + ');
            if (keyNorm === normalized) {
                return { data: ReactionsDB[key], source: 'local' };
            }
        }

        // Partial match
        for (const key of Object.keys(ReactionsDB)) {
            const keyParts = key.split('+').map(s => s.trim().toLowerCase());
            const inputParts = clean.split('+').map(s => s.trim().toLowerCase()).filter(Boolean);
            if (inputParts.every(p => keyParts.includes(p)) && inputParts.length === keyParts.length) {
                return { data: ReactionsDB[key], source: 'local' };
            }
        }

        return null;
    }

    // Source 2: Reaction Prediction
    async function tryPredictReaction(input) {
        if (typeof ChemInference === 'undefined') return null;

        try {
            const reactantFormulas = input.split('+').map(s => s.trim()).filter(Boolean);
            if (reactantFormulas.length >= 1) {
                const predicted = ChemInference.predictReaction(reactantFormulas);
                if (predicted) {
                    return { data: predicted, source: 'inference' };
                }
            }
        } catch (e) {
            console.warn('Reaction prediction error:', e);
        }

        return null;
    }

    // ==========================================
    // Multi-Source Compound Lookup
    // ==========================================
    async function lookupCompound(formula, options = {}) {
        const {
            showSource = true,
            useCache = true,
            sources = ['local', 'parser', 'inference', 'pubchem'],
        } = options;

        const clean = formula.trim();
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        // Check cache first
        if (useCache) {
            const cached = getCached('compounds', clean);
            if (cached) {
                return {
                    ...cached.data,
                    _source: cached.source,
                    _cached: true,
                };
            }
        }

        // Try each source in priority order
        const sourceFunctions = {
            local: tryLocalCompound,
            parser: tryParserCompound,
            inference: tryInferenceCompound,
            pubchem: tryPubChemCompound,
            wikidata: tryWikidataCompound,
        };

        for (const sourceName of sources) {
            const sourceFn = sourceFunctions[sourceName];
            if (!sourceFn) continue;

            try {
                const result = await sourceFn(clean);
                if (result) {
                    // Cache the result
                    setCache('compounds', clean, result.data, result.source);

                    return {
                        ...result.data,
                        _source: result.source,
                        _sourceInfo: SOURCES[result.source],
                    };
                }
            } catch (e) {
                console.warn(`Source ${sourceName} failed:`, e);
            }
        }

        return null;
    }

    // ==========================================
    // Multi-Source Reaction Lookup
    // ==========================================
    async function lookupReaction(input, options = {}) {
        const {
            showSource = true,
            useCache = true,
            sources = ['local', 'inference'],
        } = options;

        const clean = input.trim();
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        // Check cache first
        if (useCache) {
            const cached = getCached('reactions', clean);
            if (cached) {
                return {
                    ...cached.data,
                    _source: cached.source,
                    _cached: true,
                };
            }
        }

        // Try each source in priority order
        const sourceFunctions = {
            local: tryLocalReaction,
            inference: tryPredictReaction,
        };

        for (const sourceName of sources) {
            const sourceFn = sourceFunctions[sourceName];
            if (!sourceFn) continue;

            try {
                const result = await sourceFn(clean);
                if (result) {
                    // Cache the result
                    setCache('reactions', clean, result.data, result.source);

                    return {
                        ...result.data,
                        _source: result.source,
                        _sourceInfo: SOURCES[result.source],
                    };
                }
            } catch (e) {
                console.warn(`Source ${sourceName} failed:`, e);
            }
        }

        return null;
    }

    // ==========================================
    // Source Badge Renderer
    // ==========================================
    function renderSourceBadge(source, cached = false) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';
        const sourceInfo = SOURCES[source];

        if (!sourceInfo) return '';

        const name = isCN ? sourceInfo.nameCN : sourceInfo.name;
        const cacheLabel = cached ? (isCN ? ' (缓存)' : ' (cached)') : '';

        return `<div class="source-badge source-${source}" style="${getSourceBadgeStyle(source)}">
            <span class="source-icon">${sourceInfo.icon}</span>
            <span>${name}${cacheLabel}</span>
        </div>`;
    }

    function getSourceBadgeStyle(source) {
        const styles = {
            local: 'background: rgba(52, 199, 89, 0.08); border-color: rgba(52, 199, 89, 0.15); color: var(--success);',
            parser: 'background: rgba(0, 122, 255, 0.08); border-color: rgba(0, 122, 255, 0.15); color: var(--accent);',
            inference: 'background: rgba(175, 82, 222, 0.08); border-color: rgba(175, 82, 222, 0.15); color: #af52de;',
            pubchem: 'background: rgba(255, 149, 0, 0.08); border-color: rgba(255, 149, 0, 0.15); color: #ff9500;',
            wikidata: 'background: rgba(0, 122, 255, 0.08); border-color: rgba(0, 122, 255, 0.15); color: #0066ff;',
            chemspider: 'background: rgba(52, 199, 89, 0.08); border-color: rgba(52, 199, 89, 0.15); color: #34c759;',
        };
        return styles[source] || styles.local;
    }

    // ==========================================
    // Unified Compound Analyzer
    // ==========================================
    async function analyzeCompoundUnified(input) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        // Show loading state
        const loadingHtml = `<div class="pubchem-loading">
            <div class="loading-spinner"></div>
            <span>${isCN ? '正在查询...' : 'Searching...'}</span>
        </div>`;

        // Try multi-source lookup
        const result = await lookupCompound(input, {
            sources: ['local', 'parser', 'inference', 'pubchem'],
        });

        if (!result) {
            return `<div class="error-message">
                ${isCN ? '未找到该化合物。请尝试下面的示例之一。' : 'Compound not found. Try one of the examples below.'}
            </div>`;
        }

        // Render based on source
        const source = result._source;
        const cached = result._cached || false;

        // Add source badge to result
        let renderedResult = '';

        if (source === 'local') {
            renderedResult = renderLocalCompoundResult(result);
        } else if (source === 'parser') {
            renderedResult = renderParserCompoundResult(result);
        } else if (source === 'inference') {
            renderedResult = renderInferenceCompoundResult(result);
        } else if (source === 'pubchem') {
            renderedResult = renderPubChemCompoundResult(result);
        } else {
            renderedResult = renderGenericCompoundResult(result);
        }

        // Prepend source badge
        if (source !== 'local') {
            renderedResult = renderSourceBadge(source, cached) + renderedResult;
        }

        return renderedResult;
    }

    // ==========================================
    // Result Renderers by Source
    // ==========================================

    function renderLocalCompoundResult(compound) {
        // Use existing renderCompoundResult function
        if (typeof renderCompoundResult === 'function') {
            // Find the key in CompoundsDB
            for (const [key, value] of Object.entries(CompoundsDB || {})) {
                if (value === compound) {
                    return renderCompoundResult(key);
                }
            }
        }
        return renderGenericCompoundResult(compound);
    }

    function renderParserCompoundResult(record) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        let html = `<div class="result-card">`;
        html += `<h3>${formatFormula(record.formula)}</h3>`;

        html += `<div class="info-grid">`;
        html += makeInfoItem(isCN ? '分子式' : 'Molecular Formula', formatFormula(record.formula));
        html += makeInfoItem(isCN ? '分子量' : 'Molecular Mass', record.molecularMass?.toFixed(3) + ' g/mol');
        html += makeInfoItem(isCN ? '分类' : 'Classification', record.type || (isCN ? '化合物' : 'Compound'));
        html += makeInfoItem(isCN ? '族' : 'Family', record.family || '-');
        html += makeInfoItem(isCN ? '原子数' : 'Atom Count', record.atomCount || '-');
        html += `</div>`;

        // Element composition
        if (record.composition && record.composition.length > 0) {
            html += `<div style="margin-top: 16px;">`;
            html += `<div class="info-label" style="margin-bottom: 8px;">${isCN ? '元素组成' : 'Element Composition'}</div>`;
            html += `<div class="functional-groups">`;
            for (const comp of record.composition) {
                html += `<span class="functional-group">${comp.element}: ${comp.count} (${comp.percentage}%)</span>`;
            }
            html += `</div></div>`;
        }

        // Tags
        html += `<div class="tag-row">`;
        if (record.isAcid) html += `<span class="tag tag-acid">${isCN ? '酸性' : 'Acidic'}</span>`;
        if (record.isBase) html += `<span class="tag tag-base">${isCN ? '碱性' : 'Basic'}</span>`;
        if (record.isOrganic) html += `<span class="tag tag-organic">${isCN ? '有机物' : 'Organic'}</span>`;
        html += `<span class="tag tag-neutral">${isCN ? '自动解析' : 'Auto-parsed'}</span>`;
        html += `</div>`;

        html += `</div>`;
        return html;
    }

    function renderInferenceCompoundResult(props) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        let html = `<div class="result-card">`;
        html += `<h3>${formatFormula(props.formula)}</h3>`;

        html += `<div class="info-grid">`;
        html += makeInfoItem(isCN ? '分子式' : 'Molecular Formula', formatFormula(props.formula));
        html += makeInfoItem(isCN ? '分子量' : 'Molecular Mass', props.molecularMass?.toFixed(3) + ' g/mol');
        html += makeInfoItem(isCN ? '分类' : 'Classification', props.type || '-');
        html += makeInfoItem(isCN ? '族' : 'Family', props.family || '-');
        html += makeInfoItem(isCN ? '酸碱性' : 'Acid/Base', isCN ? (props.acidBaseCN || '-') : (props.acidBase || '-'));
        html += makeInfoItem(isCN ? '键型' : 'Bond Type', props.bondType || '-');
        html += makeInfoItem(isCN ? '极性' : 'Polarity', props.polarity || '-');
        html += `</div>`;

        html += `<div class="tag-row">`;
        if (props.isAcid) html += `<span class="tag tag-acid">${isCN ? '酸性' : 'Acidic'}</span>`;
        if (props.isBase) html += `<span class="tag tag-base">${isCN ? '碱性' : 'Basic'}</span>`;
        html += `<span class="tag tag-neutral">${isCN ? '规则推断' : 'Rule-inferred'}</span>`;
        html += `</div>`;

        html += `</div>`;
        return html;
    }

    function renderPubChemCompoundResult(data) {
        // Use existing renderPubChemResult function
        if (typeof renderPubChemResult === 'function') {
            return renderPubChemResult(data);
        }
        return renderGenericCompoundResult(data);
    }

    function renderGenericCompoundResult(data) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        let html = `<div class="result-card">`;
        html += `<h3>${formatFormula(data.formula || '')}</h3>`;

        html += `<div class="info-grid">`;
        if (data.nameEN || data.nameCN) {
            html += makeInfoItem(isCN ? '名称' : 'Name', isCN ? (data.nameCN || data.nameEN) : data.nameEN);
        }
        if (data.molecularMass) {
            html += makeInfoItem(isCN ? '分子量' : 'Molecular Mass', data.molecularMass.toFixed(3) + ' g/mol');
        }
        if (data.classification) {
            html += makeInfoItem(isCN ? '分类' : 'Classification', isCN ? (data.classificationCN || data.classification) : data.classification);
        }
        html += `</div>`;

        html += `</div>`;
        return html;
    }

    // ==========================================
    // Unified Reaction Analyzer
    // ==========================================
    async function analyzeReactionUnified(input) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        // Try multi-source lookup
        const result = await lookupReaction(input, {
            sources: ['local', 'inference'],
        });

        if (!result) {
            return `<div class="error-message">
                ${isCN ? '未找到该反应。请尝试下面的示例之一。' : 'Reaction not found. Try one of the examples below.'}
            </div>`;
        }

        const source = result._source;
        const cached = result._cached || false;

        let renderedResult = '';

        if (source === 'local') {
            // Use existing renderReactionResult
            if (typeof renderReactionResult === 'function') {
                // Find the key
                for (const [key, value] of Object.entries(ReactionsDB || {})) {
                    if (value === result) {
                        renderedResult = renderReactionResult(key);
                        break;
                    }
                }
            }
            if (!renderedResult) {
                renderedResult = renderGenericReactionResult(result);
            }
        } else if (source === 'inference') {
            // Use existing renderPredictedReaction
            if (typeof renderPredictedReaction === 'function') {
                const reactants = input.split('+').map(s => s.trim()).filter(Boolean);
                renderedResult = renderPredictedReaction(reactants, result);
            } else {
                renderedResult = renderGenericReactionResult(result);
            }
        } else {
            renderedResult = renderGenericReactionResult(result);
        }

        // Prepend source badge for non-local results
        if (source !== 'local') {
            renderedResult = renderSourceBadge(source, cached) + renderedResult;
        }

        return renderedResult;
    }

    function renderGenericReactionResult(data) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const isCN = lang === 'zh';

        let html = `<div class="result-card">`;
        html += `<h3>${isCN ? '反应结果' : 'Reaction Result'}</h3>`;

        if (data.balanced) {
            html += `<div class="desc-block" style="font-family: monospace; text-align: center;">${data.balanced}</div>`;
        }

        if (data.type) {
            html += `<div class="tag-row">`;
            html += `<span class="tag tag-neutral">${data.type}</span>`;
            html += `</div>`;
        }

        html += `</div>`;
        return html;
    }

    // ==========================================
    // Public API
    // ==========================================
    return {
        SOURCES,
        cache,
        getCached,
        setCache,
        clearCache,
        lookupCompound,
        lookupReaction,
        renderSourceBadge,
        analyzeCompoundUnified,
        analyzeReactionUnified,
        tryLocalCompound,
        tryParserCompound,
        tryInferenceCompound,
        tryPubChemCompound,
        tryWikidataCompound,
        tryLocalReaction,
        tryPredictReaction,
    };
})();
