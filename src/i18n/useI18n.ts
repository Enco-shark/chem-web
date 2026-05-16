import { useAppStore } from '@/store/appStore'
import { translations, type TranslationKey } from './translations'

export function useI18n() {
  const lang = useAppStore((state) => state.lang)

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations.en[key] || key
  }

  return { t, lang }
}
