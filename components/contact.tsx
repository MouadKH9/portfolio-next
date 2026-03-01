"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const supabase = createClient()
      const { error } = await supabase.from("contact_form").insert([{ email, message }])
      if (error) throw error
      setSubmitStatus("success")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/MouadKH9", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mouadk", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mouad.khchich@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 relative border-t border-border/30">
      <div className="absolute top-0 left-6 lg:left-8 w-px h-20 bg-gradient-to-b from-[#00d4ff]/40 to-transparent" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#00d4ff]/40" />
            <span className="text-[#00d4ff] text-xs tracking-widest uppercase">04</span>
            <div className="w-12 h-px bg-[#00d4ff]/40" />
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let's <span className="text-[#00d4ff]">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        {/* Form */}
        <div className={`border border-border bg-[#111]/30 p-8 mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" && (
              <div className="p-4 border border-[#00ff41]/20 bg-[#00ff41]/5 text-[#00ff41] text-sm">
                &gt; Message sent successfully. I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 border border-red-500/20 bg-red-500/5 text-red-400 text-sm">
                &gt; Error: {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#00ff41] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#00ff41]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all glow-green"
            >
              {isSubmitting ? "> Sending..." : "> Send Message"}
            </button>
          </form>
        </div>

        {/* Social */}
        <div className={`flex justify-center gap-4 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-[#00ff41] hover:border-[#00ff41]/30 transition-all"
                aria-label={link.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
