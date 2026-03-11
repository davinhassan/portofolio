import { supabase } from "@/lib/supabase";
import { ProjectCard, ProjectType } from "./ProjectCard";

export async function Projects() {
  let projects: ProjectType[] = [];

  try {
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (!error && data) {
      projects = data as ProjectType[];
    }
  } catch (error) {
    console.error("Supabase not fully configured yet or error fetching projects:", error);
  }

  // Fallback data if no database setup yet to showcase the UI
  if (projects.length === 0) {
    projects = [
      {
        id: "ta-inventory",
        title: "Sistem Bengkel XYZ",
        description: "Kelola stok, transaksi, supplier, dan laporan bengkel Anda dalam satu aplikasi yang terintegrasi, aman, dan mudah digunakan.",
        image_url: null,
        demo_url: "https://ta-inventory.vercel.app/",
        github_url: null,
        tags: ["Next.js", "Tailwind CSS", "Supabase"],
      },
      {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js, Tailwind CSS, and Stripe.",
        image_url: null,
        demo_url: "https://siar-run.vercel.app/",
        github_url: null,
        tags: ["Next.js", "Stripe", "Tailwind"],
      },
      {
        id: "3",
        title: "AI Chat Interface",
        description: "An elegant, responsive chat UI integrated with OpenAI's API.",
        image_url: null,
        demo_url: "https://english-everywhere.my.id/",
        github_url: null,
        tags: ["Next.js", "OpenAI", "Framer Motion"],
      }
    ];
  }

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A selection of my recent work .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
