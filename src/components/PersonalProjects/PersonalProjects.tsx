import type { ProjectData } from "../../interfaces/PersonalProjectInterface";
import projectsData from "../../data/personalProjects.json";
import PersonalProjectCard from "./PersonalProjectCard";

export default function PersonalProjects() {
  const personalProjects: ProjectData[] = projectsData;

  return (
    <section className="py-24 px-6" id="proyectos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
              Portfolio Seleccionado
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-on-surface">
              Proyectos Destacados
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <PersonalProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
