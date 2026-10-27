import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-paper-border/80 bg-paper-surface/50 py-10 backdrop-blur-md dark:border-white/[0.08] dark:bg-ink-surface/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
            <span className="text-violet dark:text-cyan-bright">&lt;</span>
            MARIYA GEORGE
            <span className="text-violet dark:text-cyan-bright">/&gt;</span>
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
            Integrated MCA Student · Full-Stack & AI Developer
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <span>{new Date().getFullYear()} © All rights reserved</span>
          <span>·</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-paper-border px-2.5 py-1 text-slate-600 transition-colors hover:border-violet hover:text-violet dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
          >
            <span>Top</span>
            <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
