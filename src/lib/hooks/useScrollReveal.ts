import { useEffect } from "react"

type UseScrollRevealOptions = {
  /**
   * Selector for elements that should reveal.
   * Defaults to `[data-reveal]` plus the `.reveal` class.
   */
  selector?: string
  /**
   * Root margin for the intersection observer.
   */
  rootMargin?: string
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { selector = "[data-reveal]", rootMargin = "0px 0px -10% 0px" } = options

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!nodes.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.add("is-visible")
          io.unobserve(el)
        }
      },
      { rootMargin, threshold: 0.12 },
    )

    for (const el of nodes) io.observe(el)

    return () => io.disconnect()
  }, [rootMargin, selector])
}

