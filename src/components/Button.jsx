import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-[15px] px-5 py-3 transition-colors duration-150 focus-visible:outline-2'

const variants = {
  primary: 'bg-volt-dark text-white hover:brightness-110',
  dark: 'bg-ink text-paper hover:bg-ink-soft',
  outline: 'border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5',
  'outline-light': 'border border-white/30 text-white hover:bg-white/10',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
