interface MaterialIconProps {
  name: string
  label?: string
  className?: string
  filled?: boolean
}

export function MaterialIcon({
  name,
  label,
  className = '',
  filled = false,
}: MaterialIconProps) {
  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={`material-symbols-outlined ${filled ? 'material-symbols-filled' : ''} ${className}`.trim()}
      role={label ? 'img' : undefined}
    >
      {name}
    </span>
  )
}
