import { useEffect, useMemo, useState } from "react"
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import { Button } from "./Button"

type NavItem = { id: string; label: string }

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const brand = useMemo(() => "", [])

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/10",
        "bg-portfolioBg/70 backdrop-blur-md transition-all duration-300",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-6">
        <button
          type="button"
          onClick={() => scrollToId("top")}
          className="group relative z-50 flex items-center gap-2 text-left"
          aria-label="Go to top"
        >
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
              {brand}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={[
                "text-sm font-semibold transition-all duration-300",
                "text-white/70 hover:text-white hover:-translate-y-0.5",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2">
          {/* <div className="hidden sm:block">
            <Button
              variant="secondary"
              href="#projects"
              className="bg-white/0 px-6 py-2"
              onClick={(e) => {
                e.preventDefault()
                scrollToId("projects")
              }}
            >
              View Projects
            </Button>
          </div> */}

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-sm transition-all duration-300 hover:bg-white/10 focus:outline-none md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu with True Glassmorphism */}
      <div
        className={[
          "fixed inset-0 z-40 flex h-screen w-full flex-col backdrop-blur-[32px] transition-all duration-700 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        {/* Glass Layer */}
        <div className="absolute inset-0 bg-portfolioBg/80" />
        {/* Inner Glow/Border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_1px_15px_-3px_rgba(255,255,255,0.1)]" />
        {/* Subtle Backdrop Glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute -right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-20 pt-20 text-center">
          <nav className="flex flex-col items-center gap-8" aria-label="Mobile">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={[
                  "group relative text-4xl font-extrabold transition-all duration-300",
                  "text-white/50 hover:text-white",
                  open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-2 left-0 h-1.5 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div 
            className={[
              "mt-20 w-full max-w-xs space-y-10 transition-all duration-1000 delay-500", 
              open ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            ].join(" ")}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* <div className="grid grid-cols-2 gap-5">
              <Button
                variant="primary"
                href="#projects"
                className="py-4.5 text-base shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId("projects")
                }}
              >
                Projects
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                className="py-4.5 text-base border-white/20 bg-white/5"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId("contact")
                }}
              >
                Let's Talk
              </Button>
            </div> */}

            <div className="flex items-center justify-center gap-10">
              <a href="https://github.com/Silurana" target="_blank" rel="noreferrer" className="group text-white/40 transition-all hover:scale-125 hover:text-white">
                <FiGithub className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/shibananda-rana" target="_blank" rel="noreferrer" className="group text-white/40 transition-all hover:scale-125 hover:text-white">
                <FiLinkedin className="h-8 w-8" />
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </header>
  )
}

