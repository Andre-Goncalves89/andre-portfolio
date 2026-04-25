import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/constants/projects";


export function PortfolioSection() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-10">
          <span className="text-sm uppercase tracking-wider text-emerald-400">
            Portfólio
          </span>

          <h2
            data-cy="portfolio-title"
            className="text-3xl font-bold mt-2"
          >
            Projetos em destaque
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl">
            Projetos desenvolvidos com foco em qualidade de software,
            automação, experiência do usuário e arquitetura testável.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}