import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // Handle cookie setting errors
          }
        },
      },
    },
  )

  // Fetch projects
  const { data: projects = [] } = await supabase.from("projects").select("*").order("order_index", { ascending: true })

  // Fetch skills
  const { data: skills = [] } = await supabase.from("skills").select("*").order("order_index", { ascending: true })

  // Fetch experience
  const { data: experience = [] } = await supabase
    .from("experience")
    .select("*")
    .order("order_index", { ascending: true })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Contact />
      <Footer />
    </main>
  )
}
