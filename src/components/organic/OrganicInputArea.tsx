import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import GlassCard from '@/components/shared/GlassCard'
import GlassInput from '@/components/shared/GlassInput'
import GlassButton from '@/components/shared/GlassButton'
import GlassChip from '@/components/shared/GlassChip'
import SkeletonCard from '@/components/shared/SkeletonCard'
import { useAnalysisStore } from '@/store/analysisStore'

const quickExamples = [
  { formula: 'CH4', label: 'CH4 Methane' },
  { formula: 'C2H4', label: 'C2H4 Ethylene' },
  { formula: 'C2H2', label: 'C2H2 Acetylene' },
  { formula: 'C2H5OH', label: 'C2H5OH Ethanol' },
  { formula: 'CH3COOH', label: 'CH3COOH Acetic acid' },
  { formula: 'C6H6', label: 'C6H6 Benzene' },
  { formula: 'CH3CHO', label: 'CH3CHO Acetaldehyde' },
  { formula: 'CH3COCH3', label: 'CH3COCH3 Acetone' },
  { formula: 'CH3COOC2H5', label: 'CH3COOC2H5 Ethyl acetate' },
  { formula: 'CH3NH2', label: 'CH3NH2 Methylamine' },
]

export default function OrganicInputArea() {
  const { t } = useI18n()
  const {
    organicInput,
    setOrganicInput,
    organicLoading,
    setOrganicLoading,
  } = useAnalysisStore()
  const [_feedback] = useState<React.ReactNode>(null)

  const handleSubmit = async () => {
    if (!organicInput.trim()) return

    setOrganicLoading(true)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    // TODO: Call chemistry engine
    // const result = await analyzeOrganic(organicInput)
    // setOrganicResult(result)

    setOrganicLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleChipClick = (formula: string) => {
    setOrganicInput(formula)
    handleSubmit()
  }

  return (
    <GlassCard className="reaction-input-area">
      <div className="input-row">
        <GlassInput
          value={organicInput}
          onChange={(e) => setOrganicInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('organicPlaceholder')}
          feedback={_feedback}
        />
        <GlassButton
          variant="primary"
          onClick={handleSubmit}
          disabled={organicLoading}
        >
          {organicLoading ? t('analyzing') : t('analyze')}
        </GlassButton>
      </div>
      <div className="quick-reactions">
        <span className="quick-label">{t('quickExamples')}</span>
        {quickExamples.map(({ formula, label }) => (
          <GlassChip key={formula} onClick={() => handleChipClick(formula)}>
            {label}
          </GlassChip>
        ))}
      </div>
      {organicLoading && <SkeletonCard />}
    </GlassCard>
  )
}
