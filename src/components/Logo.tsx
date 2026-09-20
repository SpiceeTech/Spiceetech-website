type IconMarkProps = {
  className?: string
  /** 'reversed' swaps the navy shapes for white — for use on dark surfaces. */
  variant?: 'color' | 'reversed'
}

export function IconMark({ className, variant = 'reversed' }: IconMarkProps) {
  const navy = variant === 'reversed' ? '#ffffff' : '#102A43'

  return (
    <svg
      viewBox="0 0 100 116"
      className={className}
      role="img"
      aria-label="Spiceetech icon mark"
    >
      <rect x="30" y="2" width="46" height="30" rx="9" fill="#74C9FF" />
      <rect x="80" y="2" width="18" height="30" rx="8" fill="#7B1E3A" />
      <rect x="2" y="34" width="24" height="24" rx="8" fill={navy} />
      <rect x="30" y="44" width="24" height="24" rx="8" fill="#74C9FF" />
      <rect x="58" y="34" width="18" height="80" rx="9" fill={navy} />
      <rect x="2" y="68" width="50" height="24" rx="9" fill={navy} />
    </svg>
  )
}

type WordmarkProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl sm:text-5xl',
}

export function Wordmark({ className, size = 'md' }: WordmarkProps) {
  return (
    <span
      className={`font-display font-bold tracking-tight ${sizeMap[size]} ${className ?? ''}`}
    >
      <span className="text-white">SPICEE</span>
      <span className="text-sky">TECH</span>
    </span>
  )
}

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const iconSize = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-12 w-auto',
  }[size]

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <IconMark className={iconSize} />
      <Wordmark size={size} />
    </span>
  )
}
