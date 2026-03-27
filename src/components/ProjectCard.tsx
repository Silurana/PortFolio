import type { ReactNode } from "react"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { Button } from "./Button"
import { cn } from "../lib/utils"

export type Project = {
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  previewAccent: "cyan" | "blue" | "violet" | "pink"
  previewIcon: ReactNode
}

function PreviewSVG({ project }: { project: Project }) {
  const accent =
    project.previewAccent === "cyan"
      ? { a: "#22d3ee", b: "#3b82f6" }
      : project.previewAccent === "violet"
        ? { a: "#8b5cf6", b: "#3b82f6" }
        : project.previewAccent === "pink"
          ? { a: "#ec4899", b: "#60a5fa" }
          : { a: "#3b82f6", b: "#22d3ee" }

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-[1.05]">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            `radial-gradient(500px circle at 15% 30%, ${accent.a}33, transparent 50%), ` +
            `radial-gradient(500px circle at 80% 40%, ${accent.b}22, transparent 55%), ` +
            `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">{project.previewIcon}</div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-portfolioCard/50 backdrop-blur transition-all duration-500",
        "hover:-translate-y-2 hover:border-white/20 hover:shadow-glow",
      )}
    >
      <div className="p-5">
        <PreviewSVG project={project} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 pt-0">
        <header>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>
        </header>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 transition-colors group-hover:border-white/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          <Button
            variant="primary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <FiExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
          <Button
            variant="secondary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </article>
  )
}

