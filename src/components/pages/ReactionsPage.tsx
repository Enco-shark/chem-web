import { useI18n } from '@/i18n/useI18n'
import ReactionInputArea from '@/components/reactions/ReactionInputArea'
import ReactionResult from '@/components/reactions/ReactionResult'

export default function ReactionsPage() {
  const { t } = useI18n()

  return (
    <>
      <div className="module-header">
        <h1 className="module-title">{t('reactionsTitle')}</h1>
        <p className="module-desc">{t('reactionsDesc')}</p>
      </div>
      <ReactionInputArea />
      <ReactionResult />
    </>
  )
}
