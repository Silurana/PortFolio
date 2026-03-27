import { FiAward, FiBookOpen, FiMapPin } from "react-icons/fi"
import { SectionHeading } from "../components/SectionHeading"
import { GlassCard } from "../components/GlassCard"

type EducationItem = {
  degree: string
  institution: string
  period: string
  location: string
  description?: string
  icon: any
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "NIT Bhubaneswar",
    period: "2022 – 2026",
    location: "Bhubaneswar, Odisha",
    description: "",
    icon: FiAward,
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Govt. Higher Secondary School",
    period: "2020 – 2022",
    location: "Jajpur, Odisha",
    description: "",
    icon: FiBookOpen,
  },
  {
    degree: "Board Secondary Education (Class X)",
    institution: "Govt. Higher Secondary School",
    period: "2019 – 2020",
    location: "Dhenkanal, Odisha",
    description: "",
    icon: FiBookOpen,
  },    
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeading
          eyebrow=""
          title="Education"
          description="My academic journey and certifications that built my foundation in technology and problem solving."
          align="left"
        />

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-6 top-4 h-[calc(100%-80px)] w-px bg-gradient-to-b from-cyan-400/50 via-blue-500/20 to-transparent md:left-8" />

          {educationData.map((edu) => (
            <div key={edu.degree} className="reveal" data-reveal>
              <div className="relative flex gap-6 md:gap-10">
                {/* Icon Hub */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-portfolioCard/80 backdrop-blur shadow-glow md:h-16 md:w-16">
                  <edu.icon className="h-6 w-6 text-cyan-300 md:h-8 md:w-8" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <GlassCard className="p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/5">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-lg font-bold text-white md:text-xl">
                          {edu.degree}
                        </h3>
                        <p className="mt-1 font-semibold text-cyan-200/90 md:text-base">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="shrink-0 text-sm font-bold text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5 h-fit self-start">
                        {edu.period}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/40">
                      <FiMapPin className="h-3 w-3" />
                      {edu.location}
                    </div>

                    {edu.description && (
                      <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-2xl">
                        {edu.description}
                      </p>
                    )}
                  </GlassCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
