import { useState, useEffect } from 'react'
import { Menu, X, Download, Sparkles, ExternalLink } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navLinks.map((l) => l.href.substring(1))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-paper-border/80 bg-paper/85 shadow-sm backdrop-blur-xl dark:border-white/[0.08] dark:bg-ink/85 dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'border-b border-transparent bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-slate-800 transition-colors hover:text-violet dark:text-slate-200 dark:hover:text-cyan-bright"
        >
          <span className="text-violet dark:text-cyan-bright transition-transform duration-200 group-hover:-translate-x-0.5">
            &lt;
          </span>
          <span className="tracking-wide">MARIYA GEORGE</span>
          <span className="text-violet dark:text-cyan-bright transition-transform duration-200 group-hover:translate-x-0.5">
            /&gt;
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:gap-2 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 font-mono text-[12px] font-medium tracking-wide transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-violet-deep dark:text-cyan-bright bg-violet/10 dark:bg-cyan/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href={profile.resumePath}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-[12px] font-medium text-violet-deep transition-all duration-200 hover:border-violet hover:bg-violet hover:text-white dark:border-cyan/30 dark:bg-cyan/10 dark:text-cyan-bright dark:hover:border-cyan dark:hover:bg-cyan dark:hover:text-ink shadow-sm"
          >
            <Download size={13} className="transition-transform group-hover:translate-y-0.5" />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-paper-border/80 bg-paper-surface/80 text-slate-700 transition-colors dark:border-white/10 dark:bg-ink-surface/80 dark:text-slate-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          aria-label="Mobile Navigation"
          className="glass-panel mx-4 my-2 flex flex-col gap-1 border p-5 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-mono text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.07] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-white/10 flex justify-between items-center">
            <a
              href={profile.resumePath}
              download
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-cyan py-2.5 font-mono text-[13px] font-semibold text-white shadow-md"
            >
              <Download size={14} />
              Download Resume (PDF)
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
