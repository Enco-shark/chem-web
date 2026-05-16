import { useAppStore } from '@/store/appStore'
import ReactionsPage from '@/components/pages/ReactionsPage'
import AnalyzerPage from '@/components/pages/AnalyzerPage'
import OrganicPage from '@/components/pages/OrganicPage'

export default function ContentArea() {
  const activeTab = useAppStore((state) => state.activeTab)

  return (
    <main className="content-area">
      <div className={`module-page ${activeTab === 'reactions' ? 'active' : ''}`}>
        <ReactionsPage />
      </div>
      <div className={`module-page ${activeTab === 'analyzer' ? 'active' : ''}`}>
        <AnalyzerPage />
      </div>
      <div className={`module-page ${activeTab === 'organic' ? 'active' : ''}`}>
        <OrganicPage />
      </div>
    </main>
  )
}
