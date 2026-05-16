import { create } from 'zustand'

interface AnalysisState {
  // Reaction module
  reactionInput: string
  reactionResult: any | null
  reactionLoading: boolean

  // Compound module
  compoundInput: string
  compoundResult: any | null
  compoundLoading: boolean

  // Organic module
  organicInput: string
  organicResult: any | null
  organicLoading: boolean

  // 3D Viewer
  moleculeFormula: string | null

  // Actions
  setReactionInput: (input: string) => void
  setReactionResult: (result: any) => void
  setReactionLoading: (loading: boolean) => void

  setCompoundInput: (input: string) => void
  setCompoundResult: (result: any) => void
  setCompoundLoading: (loading: boolean) => void

  setOrganicInput: (input: string) => void
  setOrganicResult: (result: any) => void
  setOrganicLoading: (loading: boolean) => void

  setMoleculeFormula: (formula: string | null) => void

  clearAllResults: () => void
}

export const useAnalysisStore = create<AnalysisState>((set) => ({
  // Initial state
  reactionInput: '',
  reactionResult: null,
  reactionLoading: false,

  compoundInput: '',
  compoundResult: null,
  compoundLoading: false,

  organicInput: '',
  organicResult: null,
  organicLoading: false,

  moleculeFormula: null,

  // Actions
  setReactionInput: (input) => set({ reactionInput: input }),
  setReactionResult: (result) => set({ reactionResult: result }),
  setReactionLoading: (loading) => set({ reactionLoading: loading }),

  setCompoundInput: (input) => set({ compoundInput: input }),
  setCompoundResult: (result) => set({ compoundResult: result }),
  setCompoundLoading: (loading) => set({ compoundLoading: loading }),

  setOrganicInput: (input) => set({ organicInput: input }),
  setOrganicResult: (result) => set({ organicResult: result }),
  setOrganicLoading: (loading) => set({ organicLoading: loading }),

  setMoleculeFormula: (formula) => set({ moleculeFormula: formula }),

  clearAllResults: () =>
    set({
      reactionResult: null,
      compoundResult: null,
      organicResult: null,
      moleculeFormula: null,
    }),
}))
