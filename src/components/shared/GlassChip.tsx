import { type ButtonHTMLAttributes } from 'react'

interface GlassChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function GlassChip({ children, className = '', ...props }: GlassChipProps) {
  return (
    <button className={`chip glass-chip ${className}`} {...props}>
      {children}
    </button>
  )
}
