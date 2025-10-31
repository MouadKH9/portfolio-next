"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  long_description?: string
  image_url?: string
  technologies: string[]
  github_url?: string
  live_url?: string
  featured: boolean
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 text-lg">Showcasing my most impactful work and technical achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {!project.image_url && <div className="text-4xl font-bold text-primary/20 mb-2">{project.title.charAt(0)}</div>}
                    {project.image_url && <img src={project.image_url} alt={project.title} className="w-full h-full object-contain" />}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-foreground/60 text-xs font-medium rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github_url && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <span className="mr-2">⚙</span>
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live_url && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <span className="mr-2">↗</span>
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Link */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
