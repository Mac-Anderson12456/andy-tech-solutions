import { Link } from 'react-router-dom'

export function LogoMark({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#0b1220" />
      {/* network topology glyph: three nodes forming an "A" apex */}
      <path
        d="M20 10 L11 29 M20 10 L29 29 M14.5 22 H25.5"
        stroke="#ff7a29"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="20" cy="10" r="2.6" fill="#16c784" />
      <circle cx="11" cy="29" r="2.2" fill="#2f6fed" />
      <circle cx="29" cy="29" r="2.2" fill="#2f6fed" />
    </svg>
  )
}

export default function Logo({ withText = true, className = '', dark = false }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Andy TecH Solutions - Home"
    >
      <LogoMark className="w-9 h-9 shrink-0" />
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
