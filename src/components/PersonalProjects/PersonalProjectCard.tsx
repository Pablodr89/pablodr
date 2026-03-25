import type { ProjectData } from "../../interfaces/PersonalProjectInterface";
import useScreenWidth from "../../hooks/useScreenWidth";
import Links from "./Links";

export default function PersonalProjectCard({
  title,
  image,
  description,
  stack,
  link,
  github,
}: ProjectData) {
  const screenWidth = useScreenWidth();
  const MOBILE_SIZE: number = 700;

  return (
    <div className="group relative bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:bg-surface-container-high">
      <div className="aspect-video w-full overflow-hidden">
        <img
          className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-105"
          alt="image project"
          src={image}
        />
      </div>

      <div className="flex flex-col gap-5 p-8">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-on-surface">{title}</h3>

          {screenWidth > MOBILE_SIZE && <Links link={link} github={github} />}
        </div>

        {screenWidth < MOBILE_SIZE && <Links link={link} github={github} />}

        <p className="text-on-surface-variant text-justify">{description}</p>

        <div className="flex flex-wrap gap-3">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-bold tracking-widest text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
