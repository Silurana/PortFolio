import { useEffect, useState } from "react"

export function LoadingOverlay({ enabled = true }: { enabled?: boolean }) {
  const [show, setShow] = useState(enabled)

  useEffect(() => {
    if (!enabled) return
    const t = window.setTimeout(() => setShow(false), 800)
    return () => window.clearTimeout(t)
  }, [enabled])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-portfolioBg">
      <div className="relative">
        <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-500/10 to-blue-500/20 blur-2xl" />
        <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan-300" />
          <div className="text-sm font-semibold text-white/85">Loading portfolio</div>
        </div>
      </div>
    </div>
  )
}

