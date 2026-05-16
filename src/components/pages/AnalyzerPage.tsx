import { useI18n } from '@/i18n/useI18n'
import CompoundInputArea from '@/components/compound/CompoundInputArea'
import CompoundResult from '@/components/compound/CompoundResult'
import MoleculeViewer from '@/components/viewer/MoleculeViewer'
import { useAnalysisStore } from '@/store/analysisStore'

export default function AnalyzerPage() {
  const { t } = useI18n()
  const moleculeFormula = useAnalysisStore((state) => state.moleculeFormula)

  return (
    <>
      <div className="module-header">
        <h1 className="module-title">{t('analyzerTitle')}</h1>
        <p className="module-desc">{t('analyzerDesc')}</p>
      </div>
      <CompoundInputArea />
      <CompoundResult />
      {moleculeFormula && <MoleculeViewer formula={moleculeFormula} />}
    </>
  )
}
