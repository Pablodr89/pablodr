import { Link } from "react-router";
import type { ProjectData } from "../../interfaces/PersonalProjectInterface";
import { imgs } from "../../images";

export default function PersonalProjectCard({
  title,
  image,
  description,
  stack,
  link,
  github,
}: ProjectData) {
  return (
    <div className="group relative bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:bg-surface-container-high">
      <div className="aspect-video w-full overflow-hidden">
        <img
          className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-105"
          alt="pokemon-logo"
          src={image}
        />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-on-surface">{title}</h3>

          <div className="flex gap-5">
            <Link
              to={link}
              className="text-outline"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgs.link} alt="Link" className="w-4 h-4" />
            </Link>

            <Link
              to={github}
              className="text-outline"
              target="_blank"
              rel="noreferrer"
            >
              <img src={imgs.github} alt="Github" className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <p className="text-on-surface-variant mb-6">{description}</p>

        <div className="flex gap-3">
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
