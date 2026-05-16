import { useRef, useEffect } from 'react'
import { useAppStore, type TabType } from '@/store/appStore'
import { useI18n } from '@/i18n/useI18n'

const tabs: { id: TabType; labelKey: 'navReactions' | 'navAnalyzer' | 'navOrganic'; icon: JSX.Element }[] = [
  {
    id: 'reactions',
    labelKey: 'navReactions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L10 6M10 14L10 18M2 10L6 10M14 10L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="5" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="15" cy="5" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'analyzer',
    labelKey: 'navAnalyzer',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 2V7L3 15C2.2 16.6 3.4 18 5.2 18H14.8C16.6 18 17.8 16.6 17 15L13 7V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="7" y1="2" x2="13" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 13H15" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="8" cy="15" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="12" cy="14" r="0.8" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'organic',
    labelKey: 'navOrganic',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
]

export default function MainNavigation() {
  const { activeTab, switchTab } = useAppStore()
  const { t } = useI18n()
  const indicatorRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Update indicator position
  useEffect(() => {
    const updateIndicator = () => {
      if (!indicatorRef.current || !trackRef.current) return
      const activeButton = trackRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement
      if (!activeButton) return

      const trackRect = trackRef.current.getBoundingClientRect()
      const tabRect = activeButton.getBoundingClientRect()

      indicatorRef.current.style.width = `${tabRect.width}px`
      indicatorRef.current.style.left = `${tabRect.left - trackRect.left}px`
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTab])

  return (
    <nav className="main-nav glass-panel">
      <div className="nav-track" ref={trackRef}>
        <div className="nav-indicator" ref={indicatorRef} />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            data-tab={tab.id}
            onClick={() => switchTab(tab.id)}
          >
            {tab.icon}
            <span>{t(tab.labelKey)}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
