"use client"

import { useState, useEffect, useRef } from "react"
import ProjectModal from "./project-modal"

interface ProjectImage {
  id: string
  project_id: string
  image_url: string
  order_index: number
}

interface Project {
  id: string
  title: string
  description: string
  long_description?: string
  thumbnail_url?: string
  technologies: string[]
  github_url?: string
  live_url?: string
  featured: boolean
}

export default function Projects({
  projects,
  projectImages = [],
}: {
  projects: Project[]
  projectImages?: ProjectImage[]
}) {
  const featuredProjects = projects.filter((p) => p.featured)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const getGalleryImages = (projectId: string) =>
    projectImages
      .filter((img) => img.project_id === projectId)
      .sort((a, b) => a.order_index - b.order_index)

  return (
    <>
      <section id="projects" ref={sectionRef} className="py-28 px-6 relative">
        {/* Section accent line */}
        <div className="absolute top-0 left-6 lg:left-8 w-px h-20 bg-gradient-to-b from-[#00ff41]/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#00ff41] text-xs tracking-widest uppercase">01</span>
              <div className="w-12 h-px bg-[#00ff41]/40" />
            </div>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Featured
              <br />
              <span className="text-[#00ff41]">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative border border-border hover:border-[#00ff41]/30 bg-[#111]/50 transition-all duration-500 hover:glow-green cursor-pointer ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[10px] text-muted-foreground tracking-wider">
                    ~/{project.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                {/* Image area */}
                <div className="h-44 relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#111]">
                  {project.thumbnail_url ? (
                    <img src={project.thumbnail_url} alt={project.title} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[80px] font-extrabold text-[#00ff41]/[0.07] font-[var(--font-display)] select-none">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Gallery badge */}
                  {getGalleryImages(project.id).length > 0 && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0a0a0a]/80 border border-border/50">
                      <span className="text-[9px] text-muted-foreground tracking-wider">
                        +{getGalleryImages(project.id).length} images
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#00ff41] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-border text-muted-foreground hover:border-[#00ff41]/30 hover:text-[#00ff41] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2.5 border border-border text-xs uppercase tracking-widest text-muted-foreground hover:text-[#00ff41] hover:border-[#00ff41]/30 transition-colors"
                      >
                        Source
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2.5 bg-[#00ff41] text-[#0a0a0a] text-xs uppercase tracking-widest font-bold hover:bg-[#00ff41]/90 transition-colors"
                      >
                        Live &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          galleryImages={getGalleryImages(selectedProject.id)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
