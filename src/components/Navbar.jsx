import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-paper-border bg-paper/85 backdrop-blur dark:border-ink-border dark:bg-ink/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-teal-soft dark:text-teal">&lt;</span>
          MARIYA GEORGE
          <span className="text-teal-soft dark:text-teal">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-ink/70 transition-colors hover:text-teal-soft dark:text-paper/70 dark:hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href={profile.resumePath}
            download
            className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-[13px] text-paper transition-colors hover:bg-ink/85 dark:bg-teal dark:text-ink dark:hover:bg-teal/85"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-border dark:border-ink-border"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-paper-border bg-paper px-6 py-4 dark:border-ink-border dark:bg-ink md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 font-mono text-sm text-ink/80 hover:bg-paper-elevated dark:text-paper/80 dark:hover:bg-ink-elevated"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            download
            onClick={() => setOpen(false)}
            className="mt-2 flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-[13px] text-paper dark:bg-teal dark:text-ink"
          >
            <Download size={14} />
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}
