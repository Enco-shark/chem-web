import { useViewerStore } from '@/store/viewerStore'
import { useI18n } from '@/i18n/useI18n'

export default function ViewerControls() {
  const { autoRotate, showOrbitals, toggleAutoRotate, toggleOrbitals } =
    useViewerStore()
  const { t } = useI18n()

  return (
    <div className="viewer-controls">
      <button
        className={`viewer-ctrl-btn glass-btn ${autoRotate ? 'active' : ''}`}
        onClick={toggleAutoRotate}
        title={t('autoRotate')}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M15 1v4h-4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="viewer-ctrl-btn glass-btn"
        title={t('resetView')}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect
            x="2"
            y="2"
            width="12"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </button>

      <button
        className={`viewer-ctrl-btn glass-btn ${showOrbitals ? 'active' : ''}`}
        onClick={toggleOrbitals}
        title={t('toggleOrbitals')}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <ellipse
            cx="8"
            cy="8"
            rx="7"
            ry="3"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <ellipse
            cx="8"
            cy="8"
            rx="7"
            ry="3"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
            transform="rotate(60 8 8)"
          />
          <ellipse
            cx="8"
            cy="8"
            rx="7"
            ry="3"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
            transform="rotate(120 8 8)"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.4" />
        </svg>
      </button>
    </div>
  )
}
