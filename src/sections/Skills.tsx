import type { IconType } from "react-icons"
import { FaAws, FaBootstrap, FaGitAlt, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa"
import { FaNodeJs, FaO } from "react-icons/fa6"
import { SiDocker, SiExpress, SiJsonwebtokens, SiKubernetes, SiMongodb, SiPostman, SiTailwindcss, SiVercel } from "react-icons/si"
import { SectionHeading } from "../components/SectionHeading"
import { cn } from "../lib/utils"

type Skill = {
  name: string
  Icon: IconType
  accent: "cyan" | "blue" | "violet"
  tagline?: string
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", Icon: FaReact, accent: "blue", tagline: "Hooks, Router, Redux" },
      { name: "JavaScript", Icon: FaJsSquare, accent: "cyan", tagline: "ES6+, Async, DOM" },
      { name: "TailwindCSS", Icon: SiTailwindcss, accent: "violet", tagline: "Modern responsive UI" },
      { name: "HTML & CSS", Icon: FaHtml5, accent: "blue", tagline: "Structure & Style" },
      { name: "Bootstrap", Icon: FaBootstrap, accent: "cyan", tagline: "Component library" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, accent: "violet", tagline: "Server-side logic" },
      { name: "Express.js", Icon: SiExpress, accent: "cyan", tagline: "REST APIs, Middleware" },
      { name: "MongoDB", Icon: SiMongodb, accent: "blue", tagline: "NoSQL, Mongoose" },
      { name: "Python", Icon: FaPython, accent: "violet", tagline: "Basics" },
      { name: "JWT", Icon: SiJsonwebtokens, accent: "cyan", tagline: "Secure Authentication" },
      { name: "OOPs", Icon: FaO, accent: "blue", tagline: "Concepts & Design" },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", Icon: FaGitAlt, accent: "cyan", tagline: "Version control" },
      { name: "AWS", Icon: FaAws, accent: "violet", tagline: "Cloud infrastructure" },
      { name: "Vercel", Icon: SiVercel, accent: "blue", tagline: "Deployment" },
      { name: "Postman", Icon: SiPostman, accent: "cyan", tagline: "APIs Testing" },
      { name: "Docker", Icon: SiDocker, accent: "cyan", tagline: "Containerization" },
      { name: "Kubernetes", Icon: SiKubernetes, accent: "cyan", tagline: "Container Orchestration" },
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A focused stack for building modern applications - front-end, back-end, data, and tools."
          align="left"
        />

        <div className="mt-8 flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 border-l-4 border-cyan-400 pl-3 text-2xl font-bold text-white">
                {category.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill) => {
                  const accentClass =
                    skill.accent === "cyan"
                      ? "from-cyan-400/20 via-cyan-400/5 to-transparent"
                      : skill.accent === "blue"
                        ? "from-sky-500/20 via-sky-500/5 to-transparent"
                        : "from-violet-500/20 via-violet-500/5 to-transparent"

                  return (
                    <div
                      key={skill.name}
                      className="reveal"
                      data-reveal
                    >
                      <div
                        className={cn(
                          "group relative overflow-hidden rounded-3xl border border-white/10 bg-portfolioCard/45 p-5 backdrop-blur transition-all duration-500",
                          "hover:-translate-y-1 hover:border-white/20 hover:shadow-glow",
                        )}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${accentClass} opacity-100`} />
                        <div className="relative flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-[1.08]">
                            <skill.Icon className="h-6 w-6 text-white/90" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{skill.name}</div>
                            <div className="mt-1 text-xs font-semibold text-white/65">
                              {skill.tagline || "Production-ready"}
                            </div>
                          </div>
                        </div>

                        <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-400/15 to-blue-500/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

