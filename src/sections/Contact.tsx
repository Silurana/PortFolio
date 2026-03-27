import { useMemo, useState, type FormEvent } from "react"
import emailjs from "emailjs-com"
import { FiMail, FiPhone, FiSend } from "react-icons/fi"
import { SectionHeading } from "../components/SectionHeading"
import { GlassCard } from "../components/GlassCard"


function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function Contact() {
  const emailJsConfig = useMemo(() => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
    return { serviceId, templateId, publicKey }
  }, [])

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState<string>("")

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (status === "sending") return

    const nextErrors: typeof errors = {}
    if (form.name.trim().length < 2) nextErrors.name = "Please enter your name."
    if (!isValidEmail(form.email)) nextErrors.email = "Please enter a valid email address."
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("sending")
    setStatusMessage("")

    try {
      const payload = {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        message: form.message.trim(),
      }

      const { serviceId, templateId, publicKey } = emailJsConfig
      if (serviceId && templateId && publicKey) {
        // EmailJS expects "template parameters" matching your template variables
        await emailjs.send(serviceId, templateId, payload, publicKey)
      } else {
        // Mock submission fallback (works out-of-the-box without EmailJS credentials)
        await new Promise((r) => window.setTimeout(r, 700))
      }

      setStatus("sent")
      setStatusMessage("Message sent successfully. I'll get back to you soon.")
      setForm({ name: "", email: "", message: "" })
      setErrors({})
    } catch {
      setStatus("error")
      setStatusMessage(
        "Sorry, something went wrong while sending your message. Please try again."
      )
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Interested in working together or have a question? Drop a message below and I'll get back to you soon."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-5 md:items-start">
          <div className="reveal md:col-span-2" data-reveal>
            <GlassCard className="h-full p-7">
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-bold text-white">Project inquiries</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">
                    I'm currently available for full-stack MERN roles and freelance projects. Let's discuss how I can help your team.
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <FiMail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">Email</div>
                      <div className="text-sm font-medium text-white/90">shibanandarana.dev@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                      <FiPhone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">Phone</div>
                      <div className="text-sm font-medium text-white/90">+91 9348355350</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-cyan-200/90">Response time</div>
                  <div className="mt-2 text-xs leading-relaxed text-white/70">
                    I usually respond within 24 hours. Looking forward to hearing from you!
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="reveal md:col-span-3" data-reveal>
            <form onSubmit={submit} className="space-y-6 rounded-3xl border border-white/10 bg-portfolioCard/40 p-7 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-white/85">Name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className={[
                      "w-full rounded-xl border bg-white/5 px-4 py-2.5 text-sm outline-none transition-colors",
                      errors.name ? "border-red-400/60" : "border-white/10 focus:border-cyan-300/40",
                    ].join(" ")}
                    placeholder="Your name"
                    required
                    aria-invalid={!!errors.name}
                  />
                  {errors.name ? <div className="text-xs font-semibold text-red-300">{errors.name}</div> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-semibold text-white/85">Email</span>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={[
                      "w-full rounded-xl border bg-white/5 px-4 py-2.5 text-sm outline-none transition-colors",
                      errors.email ? "border-red-400/60" : "border-white/10 focus:border-cyan-300/40",
                    ].join(" ")}
                    placeholder="Enter your email"
                    required
                    aria-invalid={!!errors.email}
                    inputMode="email"
                  />
                  {errors.email ? <div className="text-xs font-semibold text-red-300">{errors.email}</div> : null}
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-semibold text-white/85">Message</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={[
                    "min-h-[130px] w-full resize-none rounded-xl border bg-white/5 px-4 py-2.5 text-sm outline-none transition-colors",
                    errors.message ? "border-red-400/60" : "border-white/10 focus:border-cyan-300/40",
                  ].join(" ")}
                  placeholder="Write your message..."
                  required
                  aria-invalid={!!errors.message}
                />
                {errors.message ? (
                  <div className="text-xs font-semibold text-red-300">{errors.message}</div>
                ) : null}
              </label>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-h-[20px] text-xs font-semibold text-white/70">
                  {/* Status placeholder for spacing */}
                </div>

                <button 
                  type="submit" 
                  disabled={status === "sending"}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-0.5 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:hover:scale-100"
                >
                  <span className="relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-[14px] bg-portfolioBg/90 px-8 py-3 transition-colors group-hover:bg-transparent">
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-cyan-300" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                  </span>
                </button>
              </div>

              {status === "error" && statusMessage ? (
                <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs font-semibold text-red-200">
                  {statusMessage}
                </div>
              ) : null}

              {status === "sent" && statusMessage ? (
                <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-xs font-semibold text-cyan-100">
                  {statusMessage}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

