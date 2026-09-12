// Lucide-react no longer ships brand/logo icons, so these are hand-drawn
// in the same 24x24, stroke-based style used across the rest of the site.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 9.5h2.5V6.2C16.1 6.1 15 6 13.8 6 11.2 6 9.5 7.6 9.5 10.4V13H7v3.5h2.5V22h3.6v-5.5h2.5l.5-3.5h-3v-2.2c0-1 .3-1.3 1.4-1.3Z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 3.5c.4 2 1.9 3.4 4 3.6v2.7c-1.5 0-2.9-.4-4-1.2v6.1a5.3 5.3 0 1 1-4.6-5.3v2.8a2.6 2.6 0 1 0 1.8 2.5V3.5H14Z" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6.2 17.8 4.8 21l3.3-1.3a8.3 8.3 0 1 0-3.4-3.4Z" />
      <path d="M9 9.6c0-.5.4-1 1-1h.6c.3 0 .5.2.6.4l.6 1.6c.1.2 0 .5-.1.6l-.6.7c.4 1 1.2 1.8 2.2 2.2l.7-.6c.2-.2.4-.2.6-.1l1.6.6c.2.1.4.3.4.6v.6c0 .6-.5 1-1 1-3.3 0-6.6-3.3-6.6-6.6Z" />
    </svg>
  )
}
