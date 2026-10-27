export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary top-left ambient glow: deep violet / purple */}
      <div
        className="morph-blob absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-violet-deep/20 via-violet/15 to-transparent blur-3xl filter dark:from-violet-deep/30 dark:via-violet/20"
        style={{ animation: 'morphBlob 22s ease-in-out infinite' }}
      />

      {/* Primary top-right ambient glow: subtle cyan */}
      <div
        className="morph-blob absolute -right-36 -top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-cyan/15 via-cyan-deep/10 to-transparent blur-3xl filter dark:from-cyan/25 dark:via-cyan-deep/15"
        style={{ animation: 'morphBlob 28s ease-in-out infinite reverse' }}
      />

      {/* Mid-page subtle purple accent orb */}
      <div
        className="absolute right-[-10%] top-[40%] h-[520px] w-[520px] rounded-full bg-gradient-to-tl from-violet-deep/10 via-indigo-950/20 to-transparent blur-[120px] filter dark:from-violet-deep/20 dark:via-indigo-950/40"
      />

      {/* Lower-page subtle cyan accent orb */}
      <div
        className="absolute left-[-10%] top-[70%] h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-cyan-deep/10 via-teal-950/20 to-transparent blur-[120px] filter dark:from-cyan-deep/20 dark:via-teal-950/30"
      />

      {/* Subtle background grid pattern overlay for technical precision aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  )
}
