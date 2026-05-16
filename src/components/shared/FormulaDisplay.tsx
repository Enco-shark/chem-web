interface FormulaDisplayProps {
  formula: string
}

export default function FormulaDisplay({ formula }: FormulaDisplayProps) {
  // Convert numbers to subscripts
  const formatted = formula.replace(/(\d+)/g, '<sub>$1</sub>')

  return (
    <span
      className="formula-display"
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  )
}
