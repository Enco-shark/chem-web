import { useAnalysisStore } from '@/store/analysisStore'
import { useI18n } from '@/i18n/useI18n'
import InfoItem from '@/components/shared/InfoItem'
import TagRow, { Tag } from '@/components/shared/TagRow'
import FormulaDisplay from '@/components/shared/FormulaDisplay'

export default function OrganicResult() {
  const { organicResult } = useAnalysisStore()
  const { t, lang } = useI18n()
  const isCN = lang === 'zh'

  if (!organicResult) return null

  const {
    formula,
    nameEN,
    nameCN,
    type,
    typeCN,
    functionalGroups,
    functionalGroupsCN,
    singleBonds,
    doubleBonds,
    tripleBonds,
    aromaticRing,
    molecularMass,
    boilingPoint,
    meltingPoint,
    density,
    state,
    stateCN,
    color,
    colorCN,
    solubility,
    solubilityCN,
    polarity,
    polarityCN,
    geometry,
    geometryCN,
    hybridization,
    bondStructure,
    properties,
    propertiesCN,
    reactions,
  } = organicResult

  return (
    <div className="result-area">
      {/* Structure card */}
      <div className="result-card">
        <div className="organic-structure">
          <div>
            <div className="structure-formula">
              <FormulaDisplay formula={formula} />
            </div>
            <div className="structure-name">{isCN ? nameCN : nameEN}</div>
            <div className="structure-type">{isCN ? typeCN : type}</div>
          </div>
        </div>

        {/* Functional groups */}
        <div className="functional-groups">
          {(isCN ? functionalGroupsCN : functionalGroups)?.map(
            (group: string, i: number) => (
              <span key={i} className="functional-group">
                {group}
              </span>
            )
          )}
        </div>

        {/* Bond display */}
        <div className="bond-display">
          {singleBonds > 0 && (
            <div className="bond-item">
              <div className="bond-line" />
              {singleBonds} {isCN ? '单键' : 'single'}
            </div>
          )}
          {doubleBonds > 0 && (
            <div className="bond-item">
              <div className="bond-line double" />
              {doubleBonds} {isCN ? '双键' : 'double'}
            </div>
          )}
          {tripleBonds > 0 && (
            <div className="bond-item">
              <div className="bond-line triple" />
              {tripleBonds} {isCN ? '三键' : 'triple'}
            </div>
          )}
          {aromaticRing && (
            <div className="bond-item">
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>⬡</span>
              {isCN ? '芳香环' : 'Aromatic ring'}
            </div>
          )}
        </div>
      </div>

      {/* Properties card */}
      <div className="result-card" style={{ animationDelay: '0.1s' }}>
        <h3>{t('physicalProperties')}</h3>
        <div className="info-grid">
          <InfoItem
            label={t('molecularMass')}
            value={`${molecularMass} g/mol`}
          />
          <InfoItem label={t('boilingPoint')} value={boilingPoint} />
          <InfoItem label={t('meltingPoint')} value={meltingPoint} />
          <InfoItem label={t('density')} value={density} />
          <InfoItem label={t('state')} value={isCN ? stateCN : state} />
          <InfoItem label={t('color')} value={isCN ? colorCN : color} />
          <InfoItem
            label={t('solubility')}
            value={isCN ? solubilityCN : solubility}
          />
          <InfoItem
            label={t('polarity')}
            value={isCN ? polarityCN : polarity}
          />
          <InfoItem
            label={t('geometry')}
            value={isCN ? geometryCN : geometry}
          />
          <InfoItem label={t('hybridization')} value={hybridization} />
          <InfoItem label={t('structure')} value={bondStructure} />
        </div>
        <TagRow>
          <Tag variant="organic">{isCN ? typeCN : type}</Tag>
          {aromaticRing && <Tag variant="acid">{isCN ? '芳香族' : 'Aromatic'}</Tag>}
          {polarity === 'Polar' ? (
            <Tag variant="base">{isCN ? '极性' : 'Polar'}</Tag>
          ) : (
            <Tag variant="neutral">{isCN ? '非极性' : 'Nonpolar'}</Tag>
          )}
        </TagRow>
      </div>

      {/* Chemical properties */}
      <div className="result-card" style={{ animationDelay: '0.2s' }}>
        <h3>{t('chemicalProperties')}</h3>
        <div className="desc-block">{isCN ? propertiesCN : properties}</div>
      </div>

      {/* Reactions */}
      {reactions && reactions.length > 0 && (
        <div className="result-card" style={{ animationDelay: '0.3s' }}>
          <h3>{t('typicalReactions')}</h3>
          <div className="equation-steps">
            {reactions.map(
              (
                r: { equation: string; desc: string; descCN: string },
                i: number
              ) => (
                <div
                  key={i}
                  className="equation-step"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <span
                      style={{
                        fontFamily:
                          "'SF Mono', 'Fira Code', 'Consolas', monospace",
                      }}
                    >
                      <FormulaDisplay formula={r.equation} />
                    </span>
                    <br />
                    <span
                      style={{
                        color: 'var(--text-tertiary)',
                        fontSize: '0.8rem',
                      }}
                    >
                      {isCN ? r.descCN : r.desc}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
