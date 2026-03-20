import useScreenWidth from "../../hooks/useScreenWidth";
import type { ExperienceData } from "../../interfaces/ExperienceInterface";
import StackItem from "../StackItem";

interface ExperienceItemProps {
  experience: ExperienceData;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { company, title, startDate, endDate, rol, techStack } = experience;
  const screenWidth = useScreenWidth();
  const MOBILE_SIZE: number = 700;

  return (
    <div className="space-y-12 w-full">
      <div className="relative lg:pl-12">
        {screenWidth > MOBILE_SIZE && (
          <>
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-secondary-container"></div>
            <div className="absolute left-1.75 top-6 -bottom-12 border-l border-dashed border-outline-variant/20"></div>
          </>
        )}

        <div className="flex flex-col gap-2 bg-surface-container-low p-8 rounded-xl ghost-border">
          <span className="text-secondary label-md font-bold">
            {startDate} — {endDate}
          </span>

          <h3 className="text-2xl font-bold text-on-surface">{title}</h3>

          <p className="text-primary font-medium">{company}</p>

          <ul className="flex flex-col items-start gap-1 list-disc list-inside marker:text-on-surface-variant">
            {rol.map((item, index) => (
              <li key={index}>
                <span className="text-on-surface-variant leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4">
            {techStack.map((tech, index) => (
              <StackItem key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
