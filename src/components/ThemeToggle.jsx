import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-paper-border/80 bg-paper-surface/80 text-slate-700 shadow-sm transition-all duration-200 hover:border-violet hover:text-violet hover:scale-105 active:scale-95 dark:border-white/10 dark:bg-ink-surface/80 dark:text-slate-300 dark:hover:border-cyan-bright dark:hover:text-cyan-bright"
    >
      {isDark ? (
        <Sun size={16} className="transition-transform duration-300 group-hover:rotate-45 text-amber-400" />
      ) : (
        <Moon size={16} className="transition-transform duration-300 group-hover:-rotate-12 text-violet-deep" />
      )}
    </button>
  )
}
