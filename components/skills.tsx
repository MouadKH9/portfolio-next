"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  id: string
  category: string
  name: string
  proficiency: number
}

export default function Skills({ skills }: { skills: Skill[] }) {
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

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 relative border-t border-border/30">
      <div className="absolute top-0 left-6 lg:left-8 w-px h-20 bg-gradient-to-b from-[#00d4ff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#00d4ff] text-xs tracking-widest uppercase">02</span>
            <div className="w-12 h-px bg-[#00d4ff]/40" />
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Skills &<br />
            <span className="text-[#00d4ff]">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills], i) => (
            <div
              key={category}
              className={`border border-border hover:border-[#00d4ff]/20 bg-[#111]/30 p-6 transition-all duration-500 group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#00d4ff] text-xs font-bold tracking-widest uppercase">{category}</span>
                <div className="flex-1 h-px bg-border/50" />
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-foreground/90">{skill.name}</span>
                      <span className="text-[10px] text-muted-foreground tabular-nums">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-1 bg-border/50 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00ff41] transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.proficiency}%` : "0%",
                          transitionDelay: `${400 + i * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
