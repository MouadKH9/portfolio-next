# Portfolio Frontend

Public-facing portfolio site with SSR data fetching from Supabase.

## Commands

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # ESLint
```

## Architecture

### Data Flow

`app/page.tsx` is the main page — a **server component** that fetches all data (projects, skills, experience) from Supabase in parallel, then passes them as props to client components.

```
page.tsx (server) → fetches projects, skills, experience
  ├── Navigation (client)
  ├── Hero (client)
  ├── Projects (client) ← receives projects[]
  ├── Skills (client) ← receives skills[]
  ├── Experience (client) ← receives experience[]
  ├── Contact (client) ← writes to contact_form via browser client
  └── Footer
```

No API routes. Read queries use server client, contact form submission uses browser client.

### Animations

All section components use **IntersectionObserver** to trigger entrance animations:
- `useState(false)` for visibility
- Observer with `threshold: 0.1`
- Staggered delays: `transitionDelay: ${200 + i * 100}ms`
- Tailwind classes toggle between `opacity-0 translate-y-8` and `opacity-100 translate-y-0`

## Design System

- **Theme**: Dark mode only, cyberpunk/terminal aesthetic
- **Colors**: `#00ff41` (neon green primary), `#00d4ff` (cyan accent), `#0a0a0a` (background)
- **Fonts**: Syne (display/headings), JetBrains Mono (body/monospace)
- **Effects**: Scanlines, noise texture overlay, glitch text, grid background, glow on hover
- **Component style**: macOS window frames (red/orange/green dots), terminal prompts

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page, SSR data fetching |
| `app/layout.tsx` | Root layout, fonts, global styles |
| `app/globals.css` | CSS variables, custom animations, noise/grid overlays |
| `components/projects.tsx` | Featured projects grid (uses `thumbnail_url`) |
| `components/skills.tsx` | Skills by category with proficiency bars |
| `components/experience.tsx` | Work timeline |
| `components/contact.tsx` | Contact form (client-side Supabase insert) |
| `components/hero.tsx` | Hero with terminal aesthetic |
| `components/navigation.tsx` | Fixed navbar with live clock |
| `lib/supabase/server.ts` | Server Supabase client |
| `lib/supabase/client.ts` | Browser Supabase client |
| `scripts/*.sql` | Database migration scripts |

## Other Routes

- `/darna/privacy` — Privacy policy page for Darna mobile app (French, GDPR)
- `/darna/support` — Support page for Darna mobile app

## Dependencies of Note

- `@supabase/ssr` + `@supabase/supabase-js` for data
- `recharts` available but not currently used on main page
- `@vercel/analytics` for production analytics
- `components.json` configured for shadcn (style: "new-york", RSC: true)
