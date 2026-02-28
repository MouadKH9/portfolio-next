import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Darna - Application mobile",
  description: "Support et politique de confidentialité de l'application Darna",
}

export default function DarnaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Retour au portfolio
          </Link>
          <div className="border-b border-border pb-4 mb-8">
            <Link href="/darna/support" className="text-xl font-semibold text-foreground">
              Darna
            </Link>
            <p className="text-sm text-muted-foreground mt-1">Application mobile</p>
            <nav className="flex gap-4 mt-4">
              <Link
                href="/darna/support"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Support
              </Link>
              <Link
                href="/darna/privacy"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </Link>
            </nav>
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
