import { Wifi, Camera, Sun, Laptop, Satellite, ShieldCheck } from 'lucide-react'

// Node positions as percentages within the container, laid out like a
// topology diagram, echoing the network-diagram screenshots from real
// field work that inspired this design.
const nodes = [
  { Icon: Laptop, x: 50, y: 8, color: 'text-ink', ring: 'ring-ink/15', bg: 'bg-white' },
  { Icon: Wifi, x: 15, y: 38, color: 'text-wire', ring: 'ring-wire/25', bg: 'bg-white' },
  { Icon: Camera, x: 82, y: 34, color: 'text-ink', ring: 'ring-ink/15', bg: 'bg-white' },
  { Icon: Satellite, x: 8, y: 74, color: 'text-signal-dark', ring: 'ring-signal/30', bg: 'bg-white' },
  { Icon: Sun, x: 50, y: 92, color: 'text-volt-dark', ring: 'ring-volt/30', bg: 'bg-white' },
  { Icon: ShieldCheck, x: 88, y: 80, color: 'text-wire', ring: 'ring-wire/25', bg: 'bg-white' },
]

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 5],
  [3, 4],
  [5, 4],
  [1, 2],
]

export default function NetworkDiagram({ className = '' }) {
  return (
    <div className={`relative w-full aspect-square max-w-md mx-auto ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#2f6fed"
            strokeOpacity="0.35"
            strokeWidth="0.6"
            className="trace-line"
          />
        ))}
      </svg>
      {nodes.map(({ Icon, x, y, color, ring, bg }, i) => (
        <div
          key={i}
          className={`absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${bg} shadow-sm ring-1 ${ring}`}
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon className={`h-5 w-5 ${color}`} strokeWidth={1.8} />
        </div>
      ))}
    </div>
  )
}
