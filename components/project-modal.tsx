"use client"

import { useEffect, useCallback, useState } from "react"
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

interface ProjectImage {
  id: string
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
}

interface ProjectModalProps {
  project: Project
  galleryImages: ProjectImage[]
  onClose: () => void
}

export default function ProjectModal({
  project,
  galleryImages,
  onClose,
}: ProjectModalProps) {
  const allImages = [
    ...(project.thumbnail_url
      ? [{ id: "thumbnail", image_url: project.thumbnail_url, order_index: -1 }]
      : []),
    ...galleryImages,
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const hasImages = allImages.length > 0
  const hasMultipleImages = allImages.length > 1

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % allImages.length)
  }, [allImages.length])

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length)
  }, [allImages.length])

  // Keyboard handling
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight" && hasMultipleImages) nextImage()
      if (e.key === "ArrowLeft" && hasMultipleImages) prevImage()
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose, nextImage, prevImage, hasMultipleImages])

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-border bg-[#0a0a0a] animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-border/50 bg-[#0a0a0a]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
            <span className="text-[10px] text-muted-foreground tracking-wider ml-2">
              ~/{project.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-muted-foreground hover:text-[#00ff41] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image carousel */}
        {hasImages && (
          <div className="relative group bg-gradient-to-br from-[#0a0a0a] to-[#111]">
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
              <img
                src={allImages[currentImage].image_url}
                alt={`${project.title} - ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/[0.02] to-transparent pointer-events-none" />
            </div>

            {/* Navigation arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 border border-border/50 bg-[#0a0a0a]/80 text-muted-foreground hover:text-[#00ff41] hover:border-[#00ff41]/30 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 border border-border/50 bg-[#0a0a0a]/80 text-muted-foreground hover:text-[#00ff41] hover:border-[#00ff41]/30 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {hasMultipleImages && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-1 transition-all duration-300 ${
                      i === currentImage
                        ? "w-6 bg-[#00ff41]"
                        : "w-1.5 bg-[#333] hover:bg-[#555]"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            {hasMultipleImages && (
              <div className="absolute top-3 right-3 px-2 py-1 bg-[#0a0a0a]/80 border border-border/50">
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  {currentImage + 1}/{allImages.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
            {project.title}
          </h2>

          {/* Short description */}
          <p className="text-sm text-[#00ff41]/70 mb-6">
            {project.description}
          </p>

          {/* Long description */}
          {project.long_description && (
            <div className="mb-8 pl-4 border-l-2 border-[#00ff41]/20">
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.long_description}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase block mb-3">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-6 border-t border-border/50">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border text-xs uppercase tracking-widest text-muted-foreground hover:text-[#00ff41] hover:border-[#00ff41]/30 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#00ff41] text-[#0a0a0a] text-xs uppercase tracking-widest font-bold hover:bg-[#00ff41]/90 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
