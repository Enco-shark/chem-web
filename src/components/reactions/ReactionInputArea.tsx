import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import GlassCard from '@/components/shared/GlassCard'
import GlassInput from '@/components/shared/GlassInput'
import GlassButton from '@/components/shared/GlassButton'
import GlassChip from '@/components/shared/GlassChip'
import SkeletonCard from '@/components/shared/SkeletonCard'
import { useAnalysisStore } from '@/store/analysisStore'

const quickExamples = [
  'HCl + NaOH',
  'AgNO3 + NaCl',
  'H2 + O2',
  'CH4 + O2',
  'CaCO3 + HCl',
  'Fe + CuSO4',
  'Na2CO3 + HCl',
  'Zn + H2SO4',
]

export default function ReactionInputArea() {
  const { t } = useI18n()
  const {
    reactionInput,
    setReactionInput,
    reactionLoading,
    setReactionLoading,
  } = useAnalysisStore()
  const [_feedback] = useState<React.ReactNode>(null)

  const handleSubmit = async () => {
    if (!reactionInput.trim()) return

    setReactionLoading(true)

    // Simulate analysis delay for smooth UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    // TODO: Call chemistry engine
    // const result = await analyzeReaction(reactionInput)
    // setReactionResult(result)

    setReactionLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleChipClick = (formula: string) => {
    setReactionInput(formula)
    handleSubmit()
  }

  return (
    <GlassCard className="reaction-input-area">
      <div className="input-row">
        <GlassInput
          value={reactionInput}
          onChange={(e) => setReactionInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('reactionPlaceholder')}
          feedback={_feedback}
        />
        <GlassButton
          variant="primary"
          onClick={handleSubmit}
          disabled={reactionLoading}
        >
          {reactionLoading ? t('analyzing') : t('analyze')}
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
      {reactionLoading && <SkeletonCard />}
    </GlassCard>
  )
}
