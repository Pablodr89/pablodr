import { useState } from "react";
import type { ExperienceData } from "../../interfaces/ExperienceInterface";
import { imgs } from "../../images";

interface ExperienceItemProps {
  experience: ExperienceData;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { company, title, startDate, endDate, rol, techStack } = experience;
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div
      className={` border-4 border-orange-600 rounded-lg p-8 w-full overflow-hidden transition-all duration-500 shadow-md ${showInfo ? "max-h-120" : "max-h-28"}`}
      onClick={() => setShowInfo((s: boolean) => !s)}
    >
      <div className="flex flex-col items-center gap-5 cursor-pointer">
        <div className="flex justify-between items-center gap-5 w-full">
          <div className="flex items-center gap-5 cursor-pointer">
            <img
              src={imgs.arrowDown}
              alt="down arrow"
              className={`${showInfo ? "rotate-180" : ""} w-8 h-8 cursor-pointer transition-all duration-300`}
            />

            <p className="text-orange-500 text-2xl">{company}:</p>

            <p className="text-orange-500 text-2xl">{title} </p>
          </div>

          <span>
            {startDate} - {endDate}
          </span>
        </div>

        {showInfo && (
          <div className="flex flex-col items-start gap-10 w-full px-24">
            <ul className="list-disc list-outside pl-5">
              {rol.map((r, i) => (
                <li className="text-lg" key={i}>
                  {r}
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center gap-5 w-full">
              {techStack.map((tech, i) => (
                <img
                  key={i}
                  src={imgs[tech.toLowerCase() as keyof typeof imgs]}
                  alt={tech}
                  title={tech}
                  className="w-16 h-16"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
