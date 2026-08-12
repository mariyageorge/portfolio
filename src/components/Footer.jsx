export default function Footer() {
  return (
    <footer className="border-t border-paper-border py-8 text-center dark:border-ink-border">
      <p className="font-mono text-xs text-ink/40 dark:text-paper/40">
        Built by Mariya George · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
