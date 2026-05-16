import { useI18n } from '@/i18n/useI18n'
import OrganicInputArea from '@/components/organic/OrganicInputArea'
import OrganicResult from '@/components/organic/OrganicResult'

export default function OrganicPage() {
  const { t } = useI18n()

  return (
    <>
      <div className="module-header">
        <h1 className="module-title">{t('organicTitle')}</h1>
        <p className="module-desc">{t('organicDesc')}</p>
      </div>
      <OrganicInputArea />
      <OrganicResult />
    </>
  )
}
