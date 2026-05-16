import { useI18n } from '@/i18n/useI18n'
import FormulaDisplay from '@/components/shared/FormulaDisplay'

interface MoleculeInfoCardProps {
  formula: string
  data: {
    name: string
    nameCN: string
    molecularMass: number
    geometry: string
    geometryCN: string
    bondAngle: string
    hybridization: string
    atoms: number
    elementComposition: Record<string, number>
  }
}

export default function MoleculeInfoCard({
  formula,
  data,
}: MoleculeInfoCardProps) {
  const { t, lang } = useI18n()
  const isCN = lang === 'zh'

  return (
    <div className="result-card">
      <h3>
        {isCN ? data.nameCN : data.name} (
        <FormulaDisplay formula={formula} />)
      </h3>

      <div className="mol-info-grid">
        <div className="mol-info-item">
          <div className="mol-label">{t('formula')}</div>
          <div className="mol-value">
            <FormulaDisplay formula={formula} />
          </div>
        </div>
        <div className="mol-info-item">
          <div className="mol-label">{t('molecularMass')}</div>
          <div className="mol-value">{data.molecularMass.toFixed(3)} g/mol</div>
        </div>
        <div className="mol-info-item">
          <div className="mol-label">{t('geometry')}</div>
          <div className="mol-value">
            {isCN ? data.geometryCN : data.geometry}
          </div>
        </div>
        <div className="mol-info-item">
          <div className="mol-label">{t('bondAngle')}</div>
          <div className="mol-value">{data.bondAngle}</div>
        </div>
        <div className="mol-info-item">
          <div className="mol-label">{t('hybridization')}</div>
          <div className="mol-value">{data.hybridization}</div>
        </div>
        <div className="mol-info-item">
          <div className="mol-label">{t('atoms')}</div>
          <div className="mol-value">{data.atoms}</div>
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <div className="info-label" style={{ marginBottom: '8px' }}>
          {t('elementComposition')}
        </div>
        <div className="functional-groups">
          {Object.entries(data.elementComposition).map(([element, count]) => (
            <span key={element} className="functional-group">
              {element}: {count}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
