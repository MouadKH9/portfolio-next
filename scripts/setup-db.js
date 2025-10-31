import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.SUPABASE_POSTGRES_URL_NON_POOLING)

const setupSQL = `
-- Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  image_url TEXT,
  technologies TEXT[] NOT NULL,
  github_url TEXT,
  live_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  proficiency INTEGER DEFAULT 80,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create experience table
CREATE TABLE IF NOT EXISTS public.experience (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  current BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to projects" ON public.projects FOR SELECT USING (TRUE);
CREATE POLICY "Allow public read access to skills" ON public.skills FOR SELECT USING (TRUE);
CREATE POLICY "Allow public read access to experience" ON public.experience FOR SELECT USING (TRUE);

-- Insert sample data
INSERT INTO public.projects (title, description, long_description, technologies, featured, order_index) VALUES
('AI-Powered Analytics Dashboard', 'Real-time data visualization platform', 'Built a comprehensive analytics dashboard with real-time data processing, interactive charts, and machine learning insights for enterprise clients.', ARRAY['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TensorFlow'], TRUE, 1),
('Distributed Task Queue System', 'High-performance job processing', 'Engineered a distributed task queue system handling 100k+ jobs daily with fault tolerance, auto-scaling, and comprehensive monitoring.', ARRAY['Go', 'Redis', 'Kubernetes', 'gRPC'], TRUE, 2),
('Cloud Infrastructure Automation', 'Infrastructure as Code platform', 'Developed IaC platform for automated cloud resource provisioning with multi-cloud support and policy enforcement.', ARRAY['Terraform', 'AWS', 'Python', 'Docker'], FALSE, 3);

INSERT INTO public.skills (category, name, proficiency, order_index) VALUES
('Backend', 'Node.js', 95, 1),
('Backend', 'Python', 90, 2),
('Backend', 'Go', 85, 3),
('Frontend', 'React', 95, 4),
('Frontend', 'TypeScript', 95, 5),
('Frontend', 'Next.js', 90, 6),
('Database', 'PostgreSQL', 90, 7),
('Database', 'Redis', 85, 8),
('DevOps', 'Kubernetes', 85, 9),
('DevOps', 'AWS', 90, 10);

INSERT INTO public.experience (company, position, description, start_date, end_date, current, order_index) VALUES
('Tech Corp', 'Senior Software Engineer', 'Led architecture and development of microservices platform serving 10M+ users', '2021-01-15', NULL, TRUE, 1),
('StartupXYZ', 'Full Stack Engineer', 'Built and scaled web platform from 0 to 100k users', '2019-06-01', '2020-12-31', FALSE, 2),
('Digital Agency', 'Junior Developer', 'Developed client websites and web applications', '2018-01-01', '2019-05-31', FALSE, 3);
`

async function setupDatabase() {
  try {
    console.log("[v0] Starting database setup...")

    // Split the SQL into individual statements and execute them
    const statements = setupSQL.split(";").filter((stmt) => stmt.trim())

    for (const statement of statements) {
      if (statement.trim()) {
        console.log("[v0] Executing:", statement.substring(0, 50) + "...")
        await sql(statement)
      }
    }

    console.log("[v0] Database setup completed successfully!")
  } catch (error) {
    console.error("[v0] Database setup failed:", error)
    process.exit(1)
  }
}

setupDatabase()
