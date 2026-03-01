"use client"

import { useRef } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#00ff41]/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#00d4ff]/[0.03] rounded-full blur-[120px]" />

      {/* Decorative lines */}
      <div className="absolute top-32 left-8 w-px h-32 bg-gradient-to-b from-transparent via-[#00ff41]/20 to-transparent hidden lg:block" />
      <div className="absolute top-48 left-8 text-[10px] text-[#00ff41]/20 -rotate-90 origin-top-left tracking-widest hidden lg:block">
        PORTFOLIO.2026
      </div>
      <div className="absolute bottom-32 right-8 w-px h-32 bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Terminal prompt */}
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border bg-[#111] text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
            mouad@dev:~$
            <span className="text-foreground ml-1">whoami</span>
          </span>
        </div>

        {/* Main title with typing effect */}
        <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] mb-8 tracking-tight text-[#00ff41]">
          <span className="glitch-text text-glow block">
            Senior Software
          </span>
          <span className="glitch-text text-glow inline">
            Engineer
          </span>
          <span className="cursor-blink text-[#00ff41]/60">|</span>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-in-up delay-200">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            I architect <span className="text-foreground">scalable systems</span> and craft{" "}
            <span className="text-foreground">elegant solutions</span>. Specialized in full-stack development,
            cloud infrastructure, and building products that{" "}
            <span className="text-[#00ff41]">ship</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-3 bg-[#00ff41] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#00ff41]/90 transition-all glow-green"
            >
              View Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-3 border border-[#00ff41]/30 text-[#00ff41] font-bold text-sm uppercase tracking-widest hover:bg-[#00ff41]/5 hover:border-[#00ff41]/60 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-fade-in-up delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#00ff41]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
