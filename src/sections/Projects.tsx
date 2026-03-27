import { FiAlertCircle, FiBox, FiCalendar, FiCreditCard, FiMessageCircle, FiFileText } from "react-icons/fi"
import { SectionHeading } from "../components/SectionHeading"
import { ProjectCard, type Project } from "../components/ProjectCard"

const projects: Project[] = [
  {
    title: "Campus Complaints Management",
    description:
      "A centralized grievance platform using Node.js & Express.js where 600+ students submit complaints, optimizing administrative efficiency.",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Silurana",
    previewAccent: "cyan",
    previewIcon: (
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white shadow-glow">
          <FiAlertCircle className="h-8 w-8 text-cyan-200" />
        </div>
      </div>
    ),
  },
  {
    title: "Inventory Management System",
    description:
      "Automated stock tracking and warehouse operations, eliminating manual counting by reflecting every transaction—sales, returns, or restocks—instantly.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Silurana",
    previewAccent: "violet",
    previewIcon: (
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white shadow-glow">
          <FiBox className="h-8 w-8 text-blue-200" />
        </div>
      </div>
    ),
  },
  {
    title: "University Dues Portal",
    description:
      "A centralized portal designed to digitize and automate the tracking of student fees and administrative clearances.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Silurana",
    previewAccent: "blue",
    previewIcon: (
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white shadow-glow">
          <FiCreditCard className="h-8 w-8 text-sky-200" />
        </div>
      </div>
    ),
  },
  {
    title: "Study Planner",
    description:
      "A full-stack planner helping students organize tasks, track academic progress, and manage study schedules with real-time updates.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Silurana",
    previewAccent: "pink",
    previewIcon: (
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white shadow-glow">
          <FiCalendar className="h-8 w-8 text-pink-200" />
        </div>
      </div>
    ),
  },
  {
    title: "Real Time Chat Application",
    description:
      "A real-time chat application using Node.js & Express.js where users can chat with each other in real-time.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "https://github.com/Silurana/Real-Time-Chat-Application",
    previewAccent: "blue",
    previewIcon: (
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white shadow-glow">
          <FiMessageCircle className="h-8 w-8 text-sky-200" />
        </div>
      </div>
    ),
  },
  {
    title: "Resume Builder",
    description:
      "A resume builder application using Node.js & Express.js where users can create and download their resumes in real-time.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Silurana/Resume-Builder",
    previewAccent: "pink",
    previewIcon: (
      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white shadow-glow">
          <FiFileText className="h-8 w-8 text-pink-200" />
        </div>
      </div>
    ),
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Crafted with clean architecture, real-time UX, and modern full-stack development patterns."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="reveal" data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

