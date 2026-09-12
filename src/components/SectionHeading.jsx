export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`font-mono text-xs uppercase tracking-[0.15em] ${
            dark ? 'text-signal' : 'text-wire-dark'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight ${
          dark ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${dark ? 'text-paper/70' : 'text-slate'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
