"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [time, setTime] = useState("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const navItems = [
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#00ff41]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#00ff41] text-sm">~/</span>
            <span className="text-foreground font-bold tracking-tight group-hover:text-[#00ff41] transition-colors">
              mouad.k
            </span>
            <span className="text-[#00ff41] cursor-blink">_</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-[#00ff41] transition-colors relative group"
              >
                <span className="text-[#00ff41]/0 group-hover:text-[#00ff41]/60 transition-colors mr-1">/</span>
                {item.label}
              </a>
            ))}
            <span className="ml-6 text-xs text-muted-foreground tabular-nums font-mono">{time}</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-[#00ff41] transition-colors"
          >
            <span className="text-sm font-mono">{isOpen ? "[x]" : "[=]"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-border/50 mt-2 pt-4 space-y-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-[#00ff41] hover:bg-[#00ff41]/5 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#00ff41]/40 mr-3">0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
