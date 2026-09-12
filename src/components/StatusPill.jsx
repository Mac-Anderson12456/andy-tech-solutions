const dotColor = {
  signal: 'bg-signal',
  volt: 'bg-volt',
  wire: 'bg-wire',
}

export default function StatusPill({ children, tone = 'signal', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor[tone] || dotColor.signal}`} aria-hidden="true" />
      {children}
    </span>
  )
}
