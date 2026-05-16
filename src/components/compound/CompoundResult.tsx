import { useAnalysisStore } from '@/store/analysisStore'
import { useI18n } from '@/i18n/useI18n'
import InfoItem from '@/components/shared/InfoItem'
import TagRow, { Tag } from '@/components/shared/TagRow'
import FormulaDisplay from '@/components/shared/FormulaDisplay'

export default function CompoundResult() {
  const { compoundResult } = useAnalysisStore()
  const { t, lang } = useI18n()
  const isCN = lang === 'zh'

  if (!compoundResult) return null

  const {
    formula,
    nameEN,
    nameCN,
    classification,
    classificationCN,
    molecularMass,
    acidBase,
    acidBaseCN,
    state,
    stateCN,
    solubility,
    solubilityCN,
    color,
    colorCN,
    polarity,
    polarityCN,
    bondType,
    bondTypeCN,
    hazards,
    hazardsCN,
    uses,
    usesCN,
    description,
    descriptionCN,
  } = compoundResult

  return (
    <div className="result-area">
      {/* Main info card */}
      <div className="result-card">
        <h3>
          <FormulaDisplay formula={formula} /> — {isCN ? nameCN : nameEN}
        </h3>
        <div className="info-grid">
          <InfoItem label={t('englishName')} value={nameEN} />
          <InfoItem label={t('chineseName')} value={nameCN} />
          <InfoItem
            label={t('classification')}
            value={isCN ? classificationCN : classification}
          />
          <InfoItem
            label={t('molecularMass')}
            value={`${molecularMass} g/mol`}
          />
          <InfoItem
            label={t('acidBase')}
            value={isCN ? acidBaseCN : acidBase}
          />
          <InfoItem label={t('state')} value={isCN ? stateCN : state} />
          <InfoItem
            label={t('solubility')}
            value={isCN ? solubilityCN : solubility}
          />
          <InfoItem label={t('color')} value={isCN ? colorCN : color} />
          <InfoItem
            label={t('polarity')}
            value={isCN ? polarityCN : polarity}
          />
          <InfoItem
            label={t('bondType')}
            value={isCN ? bondTypeCN : bondType}
          />
        </div>
        <TagRow>
          {classification?.includes('Acid') && (
            <Tag variant="acid">{t('acid')}</Tag>
          )}
          {classification?.includes('Base') && (
            <Tag variant="base">{t('base')}</Tag>
          )}
          {classification?.includes('Salt') && (
            <Tag variant="salt">{t('salt')}</Tag>
          )}
          {classification?.includes('Oxide') && (
            <Tag variant="oxide">{t('oxide')}</Tag>
          )}
          {classification?.includes('Organic') && (
            <Tag variant="organic">{t('organic')}</Tag>
          )}
        </TagRow>
      </div>

      {/* Safety card */}
      <div className="result-card" style={{ animationDelay: '0.1s' }}>
        <h3>{t('safetyInformation')}</h3>
        <div className="desc-block">
          <strong>{t('hazards')}:</strong> {isCN ? hazardsCN : hazards}
        </div>
        <TagRow>
          {hazards?.toLowerCase().includes('corrosive') && (
            <Tag variant="danger">{isCN ? '腐蚀性' : 'Corrosive'}</Tag>
          )}
          {hazards?.toLowerCase().includes('toxic') && (
            <Tag variant="danger">{isCN ? '有毒' : 'Toxic'}</Tag>
          )}
          {hazards?.toLowerCase().includes('flammable') && (
            <Tag variant="danger">{isCN ? '易燃' : 'Flammable'}</Tag>
          )}
          {hazards?.toLowerCase().includes('safe') && (
            <Tag variant="safe">{isCN ? '安全' : 'Safe'}</Tag>
          )}
        </TagRow>
      </div>

      {/* Uses card */}
      <div className="result-card" style={{ animationDelay: '0.2s' }}>
        <h3>{t('uses')}</h3>
        <div className="desc-block">{isCN ? usesCN : uses}</div>
      </div>

      {/* Description card */}
      <div className="result-card" style={{ animationDelay: '0.3s' }}>
        <h3>{t('description')}</h3>
        <div className="desc-block">{isCN ? descriptionCN : description}</div>
      </div>
    </div>
  )
}
