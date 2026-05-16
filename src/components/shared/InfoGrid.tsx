import { type ReactNode } from 'react'

interface InfoGridProps {
  children: ReactNode
}

export default function InfoGrid({ children }: InfoGridProps) {
  return <div className="info-grid">{children}</div>
}
