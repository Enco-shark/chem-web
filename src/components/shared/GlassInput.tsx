import { type InputHTMLAttributes, type ReactNode } from 'react'

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  feedback?: ReactNode
  wrapperClassName?: string
}

export default function GlassInput({
  feedback,
  wrapperClassName = '',
  className = '',
  ...props
}: GlassInputProps) {
  return (
    <div className={`formula-input-wrapper glass-input ${wrapperClassName}`}>
      <input className={className} {...props} />
      {feedback && <div className="input-feedback">{feedback}</div>}
    </div>
  )
}
