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
        image_url: "/projects/bengkel.png",
        demo_url: "https://ta-inventory.vercel.app/",
        github_url: null,
        tags: ["Next.js", "Tailwind CSS", "Supabase"],
      },
      {
        id: "siar-run",
        title: "SIAR RUN",
        description: "A virtual running platform designed to increase social and environmental awareness while promoting a healthy lifestyle.",
        image_url: "/projects/siar-run.png",
        demo_url: "https://siar-run.vercel.app/",
        github_url: null,
        tags: ["Next.js", "Tailwind CSS", "Vercel"],
      },
      {
        id: "english-everywhere",
        title: "English Everywhere",
        description: "An online English learning platform offering fun and interactive courses for a wide audience.",
        image_url: "/projects/english-everywhere.png",
        demo_url: "https://english-everywhere.my.id/",
        github_url: null,
        tags: ["Vue.js", "Vite", "Tailwind CSS"],
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
