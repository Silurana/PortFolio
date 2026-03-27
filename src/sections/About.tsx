import React from "react"
import { Button } from "../components/Button"
import { GlassCard } from "../components/GlassCard"
import { SectionHeading } from "../components/SectionHeading"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeading
          eyebrow="About"
          title="Building full-stack experiences"
          description={
            <>
              I'm a Full Stack Developer specializing in the MERN stack, with a focus on building
              scalable backend services and high-performance web applications.
            </>
          }
          align="left"
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="reveal" data-reveal>
            <GlassCard className="p-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-2xl" />
                  <div className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-blue-500/15 blur-2xl" />
                </div>
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-portfolioCard/60">
                    <span className="text-xl" aria-hidden>
                      ⌁
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Engineering Focus</div>
                    <div className="mt-1 text-xs text-white/70">
                      MERN • Backend • Scalability
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { k: "Internship @ Techzex", v: "Developed server-side logic and RESTful APIs from Aug-Dec 2024." },
                    { k: "Full Stack Development", v: "Expertise in React, Node, Express, and MongoDB integration." },
                    { k: "Clean Codebase", v: "Scalable data modeling and efficient API designs." },
                  ].map((row) => (
                    <div key={row.k} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs font-bold text-white/90">{row.k}</div>
                      <div className="mt-1 text-xs leading-relaxed text-white/65">{row.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="reveal" data-reveal>
            <div className="space-y-5 rounded-3xl border border-white/10 bg-portfolioCard/40 p-7 backdrop-blur">
              <p className="text-sm leading-relaxed text-white/70">
                With a strong background in the MERN ecosystem, I specialize in creating
                seamless end-to-end applications. My experience includes designing RESTful
                APIs, implementing secure JWT authentication, and optimizing MongoDB queries
                for performance.
              </p>

              <p className="text-sm leading-relaxed text-white/70">
                Most recently, during my internship at Techzex Software, I worked on
                optimizing backend code and collaborating with frontend teams to deliver
                production-ready features.
              </p>

              <div className="pt-3">
                <Button
                  variant="secondary"
                  href="#contact"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  Let's build together
                  <span className="ml-2 text-cyan-200" aria-hidden>
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

