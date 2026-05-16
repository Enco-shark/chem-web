import { type ReactNode } from 'react'

interface InfoItemProps {
  label: string
  value: ReactNode
}

export default function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="info-item">
      <div className="info-label">{label}</div>
      <div className="info-value">{value}</div>
    </div>
  )
}
