import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  projectUrl: string;
  codeUrl: string;
};

export function ProjectCard({
  title,
  description,
  techs,
  projectUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-[#0b1a2b] rounded-2xl p-6 shadow-lg border border-white/5 
      hover:border-green-400/40 
      hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] 
      hover:-translate-y-1 
      transition-all duration-300">
      <div className="absolute top-4 right-4 z-10 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-400/20">
        ⭐ Projeto Principal
      </div>
      <div className="relative h-[260px] w-full overflow-hidden rounded-xl mb-6">
        <Image
          src="/images/technova-preview.png"
          alt="Preview do projeto TechNova Lab"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <h3
        data-cy="project-title"
        className="text-2xl font-semibold mb-3"
      >
        {title}
      </h3>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {techs.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-white/5 px-3 py-1 rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-green-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-green-300 transition"
        >
          Ver projeto
        </a>

        <a
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          className="border border-white/20 px-4 py-2 rounded-lg hover:border-white/40 transition"
        >
          Código
        </a>
      </div>
    </div>

  );
}