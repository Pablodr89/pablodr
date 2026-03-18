import type { ExperienceData } from "../../interfaces/ExperienceInterface";
import experienceData from "../../data/experience.json";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const workExperience: ExperienceData[] = experienceData;

  return (
    <section className="flex flex-col items-center gap-10 w-full">
      <h2 className="text-5xl lg:text-7xl text-center bg-clip-text text-transparent bg-linear-to-b from-orange-500 to-gray-900">
        Experiencia profesional
      </h2>

      <div className="flex flex-col items-center gap-8 w-full">
        {workExperience.map((work: ExperienceData, i: number) => (
          <ExperienceItem key={i} experience={work} />
        ))}
      </div>
    </section>
  );
}
