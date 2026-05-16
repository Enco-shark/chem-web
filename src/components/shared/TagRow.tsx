import { type ReactNode } from 'react'

interface TagRowProps {
  children: ReactNode
}

export default function TagRow({ children }: TagRowProps) {
  return <div className="tag-row">{children}</div>
}

interface TagProps {
  variant: 'acid' | 'base' | 'salt' | 'oxide' | 'organic' | 'danger' | 'safe' | 'neutral'
  children: ReactNode
}

export function Tag({ variant, children }: TagProps) {
  return <span className={`tag tag-${variant}`}>{children}</span>
}
