import { useState } from 'react'
import { Server, Database, Globe, Cloud, Sparkles, CheckCircle2 } from 'lucide-react'

export default function PipelineAnimation() {
  const [activeStep, setActiveStep] = useState(null)

  const architectureNodes = [
    {
      id: 'client',
      title: 'Frontend UI',
      sub: 'React.js · Tailwind',
      icon: Globe,
      color: 'text-cyan-bright',
      bg: 'bg-cyan/10 border-cyan/30',
    },
    {
      id: 'api',
      title: 'RESTful API',
      sub: 'Node.js · Express',
      icon: Server,
      color: 'text-violet',
      bg: 'bg-violet/10 border-violet/30',
    },
    {
      id: 'db',
      title: 'Data Layer',
      sub: 'MongoDB · MySQL',
      icon: Database,
      color: 'text-amber',
      bg: 'bg-amber/10 border-amber/30',
    },
    {
      id: 'cloud',
      title: 'Cloud & AI',
      sub: 'AWS EC2 · RAG / Vector',
      icon: Cloud,
      color: 'text-emerald',
      bg: 'bg-emerald/10 border-emerald/30',
    },
  ]

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-paper-border/80 bg-paper-surface/90 p-5 backdrop-blur-xl shadow-lg dark:border-white/[0.1] dark:bg-ink-surface/80">
      {/* Top terminal-style bar */}
      <div className="flex items-center justify-between border-b border-paper-border/60 pb-3 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
            system_architecture.svg
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>system active</span>
        </div>
      </div>

      {/* Architecture Visual */}
      <div className="relative my-4 py-2">
        {/* Connecting line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyan/30 via-violet/40 to-emerald/30 dark:from-cyan/40 dark:via-violet/50 dark:to-emerald/40" />

        {/* Animated packet passing through */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-cyan-bright shadow-[0_0_12px_#22d3ee]"
          style={{
            animation: 'floatSlow 4s ease-in-out infinite',
            offsetPath: 'path("M 20 0 L 300 0")',
          }}
        />

        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
          {architectureNodes.map((node) => {
            const Icon = node.icon
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveStep(node.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative flex flex-col items-center rounded-xl border p-3 text-center transition-all duration-200 cursor-default ${
                  node.bg
                } ${
                  activeStep === node.id
                    ? 'scale-[1.03] shadow-md border-violet dark:border-cyan-bright'
                    : ''
                }`}
              >
                <div className={`mb-2 rounded-lg p-2 ${node.color} bg-black/5 dark:bg-white/5`}>
                  <Icon size={18} />
                </div>
                <p className="font-display text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {node.title}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  {node.sub}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Engineering Stats Row */}
      <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4 border-t border-paper-border/60 dark:border-white/[0.06]">
        <div className="rounded-lg bg-black/[0.02] dark:bg-white/[0.02] p-2 text-center">
          <p className="font-display text-sm font-bold text-violet dark:text-cyan-bright">8.86</p>
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">CGPA (Autonomous)</p>
        </div>
        <div className="rounded-lg bg-black/[0.02] dark:bg-white/[0.02] p-2 text-center">
          <p className="font-display text-sm font-bold text-aws-orange">AWS Trained</p>
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Knowledge Badge</p>
        </div>
        <div className="rounded-lg bg-black/[0.02] dark:bg-white/[0.02] p-2 text-center">
          <p className="font-display text-sm font-bold text-teal-soft dark:text-teal">Production</p>
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Live Client App</p>
        </div>
        <div className="rounded-lg bg-black/[0.02] dark:bg-white/[0.02] p-2 text-center">
          <p className="font-display text-sm font-bold text-slate-800 dark:text-slate-200">2027</p>
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">MCA Graduate</p>
        </div>
      </div>
    </div>
  )
}
