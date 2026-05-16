import { create } from 'zustand'

export type TabType = 'reactions' | 'analyzer' | 'organic'
export type ThemeType = 'light' | 'dark'
export type LangType = 'en' | 'zh'

interface SearchItem {
  formula: string
  type: 'reaction' | 'compound' | 'organic' | 'molecule'
  display: string
  data?: any
}

interface AppState {
  // Navigation
  activeTab: TabType

  // Theme
  theme: ThemeType

  // Language
  lang: LangType

  // Search
  searchQuery: string
  searchResults: SearchItem[]
  showSuggestions: boolean

  // Actions
  switchTab: (tab: TabType) => void
  toggleTheme: () => void
  setTheme: (theme: ThemeType) => void
  toggleLang: () => void
  setLang: (lang: LangType) => void
  setSearchQuery: (query: string) => void
  setSearchResults: (results: SearchItem[]) => void
  setShowSuggestions: (show: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  activeTab: 'reactions',
  theme: 'light',
  lang: 'en',
  searchQuery: '',
  searchResults: [],
  showSuggestions: false,

  // Actions
  switchTab: (tab) => set({ activeTab: tab }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),

  setTheme: (theme) => set({ theme }),

  toggleLang: () =>
    set((state) => ({
      lang: state.lang === 'en' ? 'zh' : 'en',
    })),

  setLang: (lang) => set({ lang }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSearchResults: (results) => set({ searchResults: results }),

  setShowSuggestions: (show) => set({ showSuggestions: show }),
}))
