const nodes = [
  { key: 'client', label: 'Client', x: 20 },
  { key: 'api', label: 'REST API', x: 190 },
  { key: 'server', label: 'Server', x: 360 },
  { key: 'db', label: 'Database', x: 530 },
]

const tags = ['GET /literature', '200 OK', 'POST /auth', 'SELECT * FROM users']

export default function PipelineAnimation() {
  return (
    <div className="w-full" aria-hidden="true">
      <svg viewBox="0 0 580 140" className="h-auto w-full max-w-xl" role="img">
        <title>Diagram of a request flowing from client to API to server to database</title>

        <line x1="45" y1="40" x2="555" y2="40" stroke="currentColor" strokeOpacity="0.18" strokeDasharray="4 5" className="text-ink dark:text-paper" />

        {nodes.map((n) => (
          <g key={n.key}>
            <rect
              x={n.x}
              y="22"
              width="90"
              height="36"
              rx="8"
              className="fill-paper-elevated stroke-paper-border dark:fill-ink-elevated dark:stroke-ink-border"
              strokeWidth="1"
            />
            <text
              x={n.x + 45}
              y="44"
              textAnchor="middle"
              className="fill-ink font-mono text-[11px] dark:fill-paper"
            >
              {n.label}
            </text>
          </g>
        ))}

        {tags.map((tag, i) => (
          <text
            key={tag}
            x={65 + i * 155}
            y="90"
            textAnchor="middle"
            className="fill-teal-soft font-mono text-[10px] dark:fill-teal"
            opacity="0.85"
          >
            {tag}
          </text>
        ))}

        <circle r="4" className="fill-teal">
          <animateMotion
            dur="3.5s"
            repeatCount="indefinite"
            path="M65,40 L555,40"
          />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
