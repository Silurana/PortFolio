import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export function Footer() {
  const brand = "Shiva"

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-portfolioBg/50 pb-12 pt-16 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <div className="inline-block rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 shadow-glow mb-3">
                Portfolio!!
              </div>
              <h3 className="text-xl font-black tracking-tighter text-white">
                {brand}<span className="text-cyan-400">.</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Crafting pixel-perfect, high-performance web applications with modern technology. Ready to build the future?
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/Silurana" target="_blank" rel="noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white hover:shadow-glow">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/shibananda-rana" target="_blank" rel="noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white hover:shadow-glow">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="mailto:shibanandarana.dev@gmail.com" className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white hover:shadow-glow">
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sitemp Column */}
          <div className="lg:pl-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Connect</h4>
            <nav className="mt-6 flex flex-col gap-3">
              {[
                { label: "About Me", id: "about" },
                { label: "Education", id: "education" },
                { label: "Skills & Stack", id: "skills" },
                { label: "Selected Projects", id: "projects" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  className="w-fit text-sm font-semibold text-white/60 transition-all hover:text-white hover:translate-x-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Location / Availability Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Availability</h4>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
                <span className="text-sm font-bold text-white/80 tracking-tight">Open for collaboration</span>
              </div>
              <p className="text-xs font-semibold leading-relaxed text-white/40 max-w-[200px]">
                Currently focusing on high-end MERN stack development projects or full-time roles.
              </p>
            </div>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col justify-between items-start">
             <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Start a conversation</h4>
                <button 
                  onClick={() => scrollToId("contact")}
                  className="mt-6 group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)]"
                >
                  <span className="relative rounded-2xl bg-portfolioBg/90 px-6 py-3 transition-colors group-hover:bg-transparent">
                    Let's Build Something
                  </span>
                </button>
             </div>
             
             <button 
               onClick={scrollToTop}
               className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 transition-all hover:text-cyan-400 group"
             >
                <FiArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Back to Top
             </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} {brand} • All rights reserved
          </div>
          

        </div>
      </div>
    </footer>
  )
}

