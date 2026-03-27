import type { ReactNode } from "react"
import { cn } from "../lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-cyan-300/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base",
            align === "center" ? "mx-auto" : "mx-0"
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}

