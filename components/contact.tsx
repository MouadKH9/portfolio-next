"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      setMessage("")
    }, 1000)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/MouadKH9", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mouadk", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mouad.khchich@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-foreground/60 text-lg">Have a project in mind? Let's talk about it.</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
