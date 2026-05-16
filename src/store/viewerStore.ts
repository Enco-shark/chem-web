import { create } from 'zustand'

interface AtomInfo {
  element: string
  name: string
  nameCN: string
  mass: number
  position: [number, number, number]
}

interface ViewerState {
  autoRotate: boolean
  showOrbitals: boolean
  hoveredAtom: AtomInfo | null

  toggleAutoRotate: () => void
  setAutoRotate: (value: boolean) => void
  toggleOrbitals: () => void
  setHoveredAtom: (atom: AtomInfo | null) => void
  resetView: () => void
}

export const useViewerStore = create<ViewerState>((set) => ({
  autoRotate: true,
  showOrbitals: false,
  hoveredAtom: null,

  toggleAutoRotate: () =>
    set((state) => ({ autoRotate: !state.autoRotate })),

  setAutoRotate: (value) => set({ autoRotate: value }),

  toggleOrbitals: () =>
    set((state) => ({ showOrbitals: !state.showOrbitals })),

  setHoveredAtom: (atom) => set({ hoveredAtom: atom }),

  resetView: () =>
    set({
      autoRotate: true,
      showOrbitals: false,
      hoveredAtom: null,
    }),
}))
