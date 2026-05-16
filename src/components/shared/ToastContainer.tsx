import { create } from 'zustand'
import { createPortal } from 'react-dom'
import Toast, { type ToastType } from './Toast'

interface ToastItem {
  id: number
  message: string
  type: ToastType
}

interface ToastStore {
  toasts: ToastItem[]
  addToast: (message: string, type: ToastType) => void
  removeToast: (id: number) => void
}

let toastId = 0

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (message, type) => {
    const id = ++toastId
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }))
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}))

// Helper function to show toast from outside React
export function showToast(message: string, type: ToastType = 'info') {
  useToastStore.getState().addToast(message, type)
}

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore()

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>,
    document.body
  )
}
