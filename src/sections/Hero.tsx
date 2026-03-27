import { FiDownload } from "react-icons/fi"
import { Button } from "../components/Button"
import { TypingEffect } from "../components/TypingEffect"
import profileImg from "../assets/profile.png"
import resumePdf from "../assets/SHIBANANDA_RESUME.pdf"

export function Hero() {
  const roles = ["MERN Stack Developer", "Backend Specialist", "Problem Solver"]

  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-24">
      {/* Gradient glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/30 via-sky-500/20 to-blue-500/30 blur-3xl" />
        <div className="absolute -left-40 top-24 h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-40 top-56 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div
            className="reveal"
            data-reveal
          >
            <p className="text-sm font-semibold tracking-wide text-cyan-300/90">
              MERN Stack • React • Node • MongoDB
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Shibananda Rana<span className="text-cyan-300">!</span>
            </h1>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-white/90 sm:text-2xl">
              Full Stack Developer
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm sm:text-base">
              <span className="text-white/70">Specializing in</span>
              <span className="inline-flex items-baseline rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white">
                <span className="font-semibold">
                  <TypingEffect roles={roles} />
                </span>
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                href="#projects"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                href={resumePdf}
                target="_blank"
                download="Shibananda_Rana_Resume.pdf"
              >
                <FiDownload className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              I build modern, responsive web applications with clean architecture, focused on the
              MERN stack and production-grade software integration.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="reveal" data-reveal>
            <div className="flex justify-center md:justify-end">
              <div className="animate-floaty">
                <div className="relative p-2">
                  <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/30 via-sky-500/20 to-blue-500/30 blur-xl" />
                  <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-portfolioCard/60 backdrop-blur sm:h-[380px] sm:w-[380px]">
                    <div className="relative h-full w-full">
                      <img
                        src={profileImg}
                        alt="Shibananda Rana"
                        className="h-full w-full object-cover grayscale brightness-[0.85] contrast-[1.05] transition-all duration-700 hover:scale-110 hover:grayscale-0 hover:brightness-100"
                      />
                      {/* Sub-UI overlay tint */}
                      <div className="pointer-events-none absolute inset-0 bg-cyan-400/5 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "Clean UI", value: "Pixel-precise" },
              { label: "APIs", value: "REST + Real-time" },
              { label: "Performance", value: "Responsive by default" },
            ].map((s) => (
              <div
                key={s.label}
                className="reveal rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                data-reveal
              >
                <div className="text-xs font-semibold text-cyan-200/90">{s.label}</div>
                <div className="mt-1 text-xs font-bold text-white/85">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

