import type { ReactNode } from "react"
import { cn } from "../lib/utils"

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  )
}

