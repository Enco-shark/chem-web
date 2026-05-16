import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useViewerStore } from '@/store/viewerStore'
import MoleculeScene from './MoleculeScene'
import ViewerControls from './ViewerControls'

interface MoleculeViewerProps {
  formula: string
}

export default function MoleculeViewer({ formula }: MoleculeViewerProps) {
  const autoRotate = useViewerStore((state) => state.autoRotate)

  return (
    <div id="compound3dSection" className="viewer-3d-container glass-card">
      <ViewerControls />
      <div className="viewer-3d-canvas">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <MoleculeScene formula={formula} autoRotate={autoRotate} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
