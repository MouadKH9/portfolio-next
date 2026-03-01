"use client"

import { useEffect, useRef, useState } from "react"

interface ExperienceItem {
  id: string
  company: string
  position: string
  description?: string
  start_date: string
  end_date?: string
  current: boolean
}

export default function Experience({ experience }: { experience: ExperienceItem[] }) {
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

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" })

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 relative border-t border-border/30">
      <div className="absolute top-0 left-6 lg:left-8 w-px h-20 bg-gradient-to-b from-[#00ff41]/40 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00ff41] text-xs tracking-widest uppercase">03</span>
            <div className="w-12 h-px bg-[#00ff41]/40" />
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Work<br />
            <span className="text-[#00ff41]">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff41]/30 via-border/30 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <div
                key={item.id}
                className={`relative pl-10 md:pl-16 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-4 top-1 -translate-x-1/2">
                  <div className={`w-3 h-3 border-2 ${item.current ? "border-[#00ff41] bg-[#00ff41]/20" : "border-border bg-background"} transition-colors`}>
                    {item.current && (
                      <div className="absolute inset-0 border-2 border-[#00ff41]/30 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="border border-border hover:border-[#00ff41]/20 bg-[#111]/30 p-6 group transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold group-hover:text-[#00ff41] transition-colors">
                        {item.position}
                      </h3>
                      <p className="text-sm text-[#00d4ff]/80">{item.company}</p>
                    </div>
                    <span className="text-[11px] text-muted-foreground tracking-wider whitespace-nowrap tabular-nums">
                      {formatDate(item.start_date)} — {item.current ? (
                        <span className="text-[#00ff41]">Present</span>
                      ) : (
                        formatDate(item.end_date || "")
                      )}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
