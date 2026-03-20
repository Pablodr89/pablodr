import type { ProjectData } from "../../interfaces/PersonalProjectInterface";
import projectsData from "../../data/personalProjects.json";
import PersonalProjectCard from "./PersonalProjectCard";

export default function PersonalProjects() {
  const personalProjects: ProjectData[] = projectsData;

  return (
    <section className="py-8 lg:py-24 px-6" id="proyectos">
      <div className="flex flex-col gap-16 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center text-on-surface">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <PersonalProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
