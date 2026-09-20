import iconMark from '../assets/brand/icon-mark-reversed.png'
import wordmark from '../assets/brand/wordmark-text-reversed.png'

type IconMarkProps = {
  className?: string
}

/** The Spiceetech icon mark, recolored (navy → white) for dark surfaces. */
export function IconMark({ className }: IconMarkProps) {
  return <img src={iconMark} alt="" className={className} />
}

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

// Icon mark and wordmark are cropped from the same source artwork; the icon
// is naturally ~1.63x taller than the wordmark's cap height when paired.
const textHeightPx = {
  sm: 16,
  md: 20,
  lg: 32,
}

const ICON_TO_TEXT_RATIO = 165 / 101

/** Icon + wordmark lockup (no tagline), built from the real logo artwork. */
export function Logo({ className, size = 'md' }: LogoProps) {
  const textHeight = textHeightPx[size]
  const iconHeight = Math.round(textHeight * ICON_TO_TEXT_RATIO)

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ''}`}>
      <img src={iconMark} alt="" style={{ height: iconHeight }} className="w-auto" />
      <img
        src={wordmark}
        alt="Spiceetech"
        style={{ height: textHeight }}
        className="w-auto"
      />
    </span>
  )
}
