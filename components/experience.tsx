"use client"

interface ExperienceItem {
  id: string
  company: string
  position: string
  description?: string
  start_date: string
  end_date?: string
  current: boolean
}

export default function Experience({
  experience,
}: {
  experience: ExperienceItem[]
}) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-foreground/60 text-lg">My professional journey and key roles</p>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{item.position}</h3>
                        <p className="text-primary font-medium">{item.company}</p>
                      </div>
                      <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">
                        {formatDate(item.start_date)} - {item.current ? "Present" : formatDate(item.end_date || "")}
                      </span>
                    </div>
                    {item.description && <p className="text-foreground/70 text-sm mt-3">{item.description}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
