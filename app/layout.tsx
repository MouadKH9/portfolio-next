import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Syne } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Mouad K. — Senior Software Engineer",
  description: "Full-stack engineer specializing in scalable systems and cloud architecture",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${syne.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
