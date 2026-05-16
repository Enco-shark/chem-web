import { useAnalysisStore } from '@/store/analysisStore'
import { useI18n } from '@/i18n/useI18n'
import InfoItem from '@/components/shared/InfoItem'
import TagRow, { Tag } from '@/components/shared/TagRow'
import FormulaDisplay from '@/components/shared/FormulaDisplay'

export default function ReactionResult() {
  const { reactionResult } = useAnalysisStore()
  const { t, lang } = useI18n()
  const isCN = lang === 'zh'

  if (!reactionResult) return null

  const {
    reactants,
    products,
    balanced,
    type,
    typeCN,
    principle,
    principleCN,
    conditions,
    catalyst,
    reversible,
    ionicEquation,
    gasProduct,
    precipitate,
    explanation,
    explanationCN,
  } = reactionResult

  return (
    <div className="result-area">
      {/* Main equation card */}
      <div className="result-card">
        <h3>{t('chemicalEquation')}</h3>
        <div className="reaction-display">
          {reactants.map((r: string, i: number) => (
            <span key={`r-${i}`}>
              {i > 0 && <span style={{ color: 'var(--text-tertiary)' }}> + </span>}
              <span className="reactant">
                <FormulaDisplay formula={r} />
              </span>
            </span>
          ))}

          <span className="reaction-arrow">
            {conditions && conditions.length > 0 && (
              <span className="condition">{conditions.join(' / ')}</span>
            )}
            {reversible ? ' ⇌ ' : <span className="arrow-line" />}
          </span>

          {products.map((p: string, i: number) => (
            <span key={`p-${i}`}>
              {i > 0 && <span style={{ color: 'var(--text-tertiary)' }}> + </span>}
              <span className="product">
                <FormulaDisplay formula={p.replace('↑', '').replace('↓', '')} />
                {p.includes('↑') && <span className="gas-indicator"> ↑</span>}
                {p.includes('↓') && <span className="precipitate-indicator"> ↓</span>}
              </span>
            </span>
          ))}
        </div>
        <div className="desc-block">
          <strong>{t('balancedEquation')}:</strong>{' '}
          <FormulaDisplay formula={balanced} />
        </div>
      </div>

      {/* Reaction info card */}
      <div className="result-card" style={{ animationDelay: '0.1s' }}>
        <h3>{t('reactionInformation')}</h3>
        <div className="info-grid">
          <InfoItem label={t('reactionType')} value={isCN ? typeCN : type} />
          <InfoItem
            label={t('reversible')}
            value={reversible ? t('yes') : t('no')}
          />
          {catalyst && <InfoItem label={t('catalyst')} value={catalyst} />}
          {conditions && conditions.length > 0 && (
            <InfoItem label={t('conditions')} value={conditions.join(', ')} />
          )}
          <InfoItem
            label={t('gasProduct')}
            value={gasProduct ? t('yes') : t('no')}
          />
          <InfoItem
            label={t('precipitate')}
            value={precipitate ? t('yes') : t('no')}
          />
        </div>
        <TagRow>
          <Tag variant="acid">{isCN ? typeCN : type}</Tag>
          {reversible && <Tag variant="neutral">{t('reversibleTag')}</Tag>}
          {gasProduct && <Tag variant="organic">{t('gas')}</Tag>}
          {precipitate && <Tag variant="oxide">{t('precipitateTag')}</Tag>}
        </TagRow>
      </div>

      {/* Ionic equation */}
      {ionicEquation && (
        <div className="result-card" style={{ animationDelay: '0.2s' }}>
          <h3>{t('ionicEquation')}</h3>
          <div
            className="desc-block"
            style={{
              fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
              fontSize: '1.1rem',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <FormulaDisplay formula={ionicEquation} />
          </div>
        </div>
      )}

      {/* Principle */}
      <div className="result-card" style={{ animationDelay: '0.3s' }}>
        <h3>{t('reactionPrinciple')}</h3>
        <div className="desc-block">{isCN ? principleCN : principle}</div>
      </div>

      {/* Explanation */}
      <div className="result-card" style={{ animationDelay: '0.4s' }}>
        <h3>{t('detailedExplanation')}</h3>
        <div className="desc-block">{isCN ? explanationCN : explanation}</div>
      </div>
    </div>
  )
}
