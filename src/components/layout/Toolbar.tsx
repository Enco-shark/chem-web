import { useAppStore } from '@/store/appStore'
import { useI18n } from '@/i18n/useI18n'
import SearchBox from '@/components/search/SearchBox'

export default function Toolbar() {
  const { toggleTheme, toggleLang, theme, lang } = useAppStore()
  const { t } = useI18n()

  return (
    <header className="toolbar glass-panel">
      <div className="toolbar-left">
        <div className="app-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            <circle cx="10" cy="11" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="18" cy="11" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="14" cy="18" r="3" fill="currentColor" opacity="0.4" />
            <line x1="10" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="10" y1="11" x2="14" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="18" y1="11" x2="14" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </svg>
          <span className="app-title">{t('appTitle')}</span>
        </div>
      </div>

      <div className="toolbar-center">
        <SearchBox />
      </div>

      <div className="toolbar-right">
        <button
          className="toolbar-btn glass-btn"
          onClick={toggleLang}
          title={t('language')}
        >
          <span className="lang-label">{lang === 'en' ? 'EN' : '中'}</span>
        </button>

        <button
          className="toolbar-btn glass-btn"
          onClick={toggleTheme}
          title={t('theme')}
        >
          {theme === 'light' ? (
            <svg className="theme-icon sun-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.2" />
              <line x1="9" y1="1" x2="9" y2="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="9" y1="15" x2="9" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="1" y1="9" x2="3" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="15" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="3.34" y1="3.34" x2="4.76" y2="4.76" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="13.24" y1="13.24" x2="14.66" y2="14.66" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="3.34" y1="14.66" x2="4.76" y2="13.24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="13.24" y1="4.76" x2="14.66" y2="3.34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="theme-icon moon-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9.5C15 13.09 12.09 16 8.5 16C5.46 16 2.93 13.84 2.25 11C2.09 10.33 2 9.63 2 8.91C2 4.99 5.14 1.82 9.04 1.79C9.36 1.79 9.67 1.8 9.98 1.83C9.32 2.5 8.9 3.43 8.9 4.45C8.9 6.47 10.54 8.12 12.56 8.12C13.29 8.12 13.97 7.91 14.54 7.56C14.83 8.35 15 9.11 15 9.5Z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          )}
        </button>

        <button
          className="toolbar-btn glass-btn"
          title={t('viewMode')}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
            <ellipse cx="9" cy="9" rx="8" ry="3" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <ellipse cx="9" cy="9" rx="8" ry="3" stroke="currentColor" strokeWidth="0.8" opacity="0.5" transform="rotate(60 9 9)" />
            <ellipse cx="9" cy="9" rx="8" ry="3" stroke="currentColor" strokeWidth="0.8" opacity="0.5" transform="rotate(120 9 9)" />
          </svg>
        </button>
      </div>
    </header>
  )
}
