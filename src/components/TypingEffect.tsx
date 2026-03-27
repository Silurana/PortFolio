import { useEffect, useMemo, useState } from "react"

export function TypingEffect({
  roles,
  className,
  cursorClassName,
}: {
  roles: string[]
  className?: string
  cursorClassName?: string
}) {
  const normalized = useMemo(() => roles.filter(Boolean), [roles])
  const [roleIndex, setRoleIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!normalized.length) return

    const currentRole = normalized[roleIndex] ?? ""
    const fullLength = currentRole.length

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (subIndex < fullLength) {
          setSubIndex((n) => n + 1)
        } else {
          // pause at end
          setIsDeleting(true)
        }
      } else {
        // deleting
        if (subIndex > 0) {
          setSubIndex((n) => n - 1)
        } else {
          setIsDeleting(false)
          setRoleIndex((i) => (i + 1) % normalized.length)
        }
      }
    }, isDeleting ? 35 : subIndex < fullLength ? 55 : 1200)

    return () => window.clearTimeout(timeout)
  }, [isDeleting, normalized, roleIndex, subIndex])

  const display = (normalized[roleIndex] ?? "").slice(0, subIndex)

  return (
    <span className={className}>
      {display}
      <span
        aria-hidden
        className={[
          "ml-1 inline-block h-5 w-[2px] align-middle bg-cyan-300/80",
          "animate-cursorBlink",
          cursorClassName ?? "",
        ].join(" ")}
      />
    </span>
  )
}

