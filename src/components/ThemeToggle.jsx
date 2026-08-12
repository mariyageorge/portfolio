import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-border text-ink transition-colors hover:border-teal hover:text-teal-soft dark:border-ink-border dark:text-paper dark:hover:text-teal"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
