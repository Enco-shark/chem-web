import { useEffect } from 'react'
import { useAppStore } from '@/store/appStore'
import AmbientBackground from '@/components/layout/AmbientBackground'
import Toolbar from '@/components/layout/Toolbar'
import MainNavigation from '@/components/layout/MainNavigation'
import ContentArea from '@/components/layout/ContentArea'
import ToastContainer from '@/components/shared/ToastContainer'

function App() {
  const { theme, lang } = useAppStore()

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('chemlab-theme', theme)
  }, [theme])

  // Apply language to document
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang)
    localStorage.setItem('chemlab-lang', lang)
  }, [lang])

  // Load saved preferences on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('chemlab-theme') || 'light'
    const savedLang = localStorage.getItem('chemlab-lang') || 'en'
    useAppStore.getState().setTheme(savedTheme as 'light' | 'dark')
    useAppStore.getState().setLang(savedLang as 'en' | 'zh')
  }, [])

  return (
    <>
      <AmbientBackground />
      <Toolbar />
      <MainNavigation />
      <ContentArea />
      <ToastContainer />
    </>
  )
}

export default App
