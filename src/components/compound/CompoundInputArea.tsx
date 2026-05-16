import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import GlassCard from '@/components/shared/GlassCard'
import GlassInput from '@/components/shared/GlassInput'
import GlassButton from '@/components/shared/GlassButton'
import GlassChip from '@/components/shared/GlassChip'
import SkeletonCard from '@/components/shared/SkeletonCard'
import { useAnalysisStore } from '@/store/analysisStore'

const quickExamples = [
  'H2SO4',
  'NaOH',
  'NH3',
  'CuSO4',
  'KMnO4',
  'CaCO3',
  'HCl',
  'C2H5OH',
]

export default function CompoundInputArea() {
  const { t } = useI18n()
  const {
    compoundInput,
    setCompoundInput,
    compoundLoading,
    setCompoundLoading,
  } = useAnalysisStore()
  const [_feedback] = useState<React.ReactNode>(null)

  const handleSubmit = async () => {
    if (!compoundInput.trim()) return

    setCompoundLoading(true)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    // TODO: Call chemistry engine
    // const result = await analyzeCompound(compoundInput)
    // setCompoundResult(result)
    // setMoleculeFormula(compoundInput) // if exists in MoleculesDB

    setCompoundLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleChipClick = (formula: string) => {
    setCompoundInput(formula)
    handleSubmit()
  }

  return (
    <GlassCard className="reaction-input-area">
      <div className="input-row">
        <GlassInput
          value={compoundInput}
          onChange={(e) => setCompoundInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('compoundPlaceholder')}
          feedback={_feedback}
        />
        <GlassButton
          variant="primary"
          onClick={handleSubmit}
          disabled={compoundLoading}
        >
          {compoundLoading ? t('analyzing') : t('analyze')}
        </GlassButton>
      </div>
      <div className="quick-reactions">
        <span className="quick-label">{t('quickExamples')}</span>
        {quickExamples.map((formula) => (
          <GlassChip key={formula} onClick={() => handleChipClick(formula)}>
            {formula}
          </GlassChip>
        ))}
      </div>
      {compoundLoading && <SkeletonCard />}
    </GlassCard>
  )
}
