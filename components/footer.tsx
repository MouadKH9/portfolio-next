export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#00ff41] text-sm">~/</span>
            <span className="text-foreground font-bold text-sm">mouad.k</span>
          </div>

          <p className="text-muted-foreground text-xs tracking-wider">
            &copy; {currentYear} — Designed & built with precision
          </p>

          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-[#00ff41] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#00ff41] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
