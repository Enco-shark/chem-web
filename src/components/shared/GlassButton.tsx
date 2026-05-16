import { type ReactNode, type ButtonHTMLAttributes } from 'react'

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'primary'
}

export default function GlassButton({
  children,
  variant = 'default',
  className = '',
  ...props
}: GlassButtonProps) {
  const baseClass = variant === 'primary' ? 'primary-btn glass-btn' : 'glass-btn'

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
