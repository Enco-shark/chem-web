import { useRef, useEffect } from 'react'
import { useAppStore } from '@/store/appStore'
import { useI18n } from '@/i18n/useI18n'

export default function SearchBox() {
  const { searchQuery, setSearchQuery, showSuggestions, setShowSuggestions } = useAppStore()
  const { t } = useI18n()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close suggestions on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [setShowSuggestions])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowSuggestions(value.length > 0)
  }

  const handleFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true)
    }
  }

  return (
    <div className="search-box glass-input" ref={containerRef}>
      <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={t('searchPlaceholder')}
        autoComplete="off"
      />
      {showSuggestions && (
        <div className="suggestions-dropdown glass-panel visible">
          {/* Search results will be rendered here */}
        </div>
      )}
    </div>
  )
}
