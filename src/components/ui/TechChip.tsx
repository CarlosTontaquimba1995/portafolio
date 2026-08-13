import type { ReactNode } from 'react'

interface TechChipProps {
  children: ReactNode
  highlighted?: boolean
  className?: string
}

export function TechChip({
  children,
  highlighted = false,
  className = '',
}: TechChipProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded border px-3 py-1 font-mono text-xs font-medium',
        highlighted
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-secondary-container bg-secondary/10 text-secondary',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
