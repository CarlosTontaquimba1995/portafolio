import type { HTMLAttributes, ReactNode } from 'react'

type BentoElement = 'div' | 'article' | 'section' | 'aside'

interface BentoCardProps extends HTMLAttributes<HTMLElement> {
  as?: BentoElement
  children: ReactNode
}

export function BentoCard({
  as: Component = 'div',
  children,
  className = '',
  ...props
}: BentoCardProps) {
  return (
    <Component
      className={`reveal-item rounded-lg border border-outline-variant bg-surface-container-low transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_15px_rgba(137,206,255,0.1)] ${className}`}
      data-reveal
      {...props}
    >
      {children}
    </Component>
  )
}
