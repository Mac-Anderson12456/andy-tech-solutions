import { Link } from 'react-router-dom'

// The Andy TecH Solutions logo: an "A" with a signal ring and two signal arcs.
// variant="navy" is for light backgrounds, variant="white" for dark ones.
// Master vector copies live in public/brand/.
export function LogoMark({ className = 'h-10', variant = 'navy' }) {
  const letter = variant === 'white' ? '#FFFFFF' : '#0F253D'
  return (
    <svg
      viewBox="146 65 908 1145"
      className={`w-auto ${className}`}
      style={{ aspectRatio: '908 / 1145' }}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M383 191A324 324 0 0 1 816 191" stroke="#FE6C19" strokeWidth="66" />
        <path d="M479 298A178 178 0 0 1 720 298" stroke="#FE6C19" strokeWidth="66" />
        <path d="M228 1128L600 435L972 1128" stroke={letter} strokeWidth="144" />
      </g>
      <circle cx="600" cy="875" r="120" fill="#FE6C19" />
      <circle cx="600" cy="875" r="45" fill={letter} />
    </svg>
  )
}

export default function Logo({ withText = true, className = '', dark = false }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group ${className}`}
      aria-label="Andy TecH Solutions - Home"
    >
      <LogoMark className="h-11 shrink-0" variant={dark ? 'white' : 'navy'} />
      {withText && (
        <span
          className={`font-display font-semibold text-lg leading-none tracking-tight ${
            dark ? 'text-paper' : 'text-ink'
          }`}
        >
          Andy <span className={dark ? 'text-volt' : 'text-volt-dark'}>TecH</span> Solutions
        </span>
      )}
    </Link>
  )
}
