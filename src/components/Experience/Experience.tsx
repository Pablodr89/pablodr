import type { ExperienceData } from "../../interfaces/ExperienceInterface";
import experienceData from "../../data/experience.json";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const workExperience: ExperienceData[] = experienceData;

  return (
    <section
      className="py-24 px-6 bg-surface-container-lowest"
      id="experiencia"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-16 text-center">
          Trayectoria Profesional
        </h2>

        <div className="flex flex-col items-center gap-3">
          {workExperience.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
