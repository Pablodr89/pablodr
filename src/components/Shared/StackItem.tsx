import { imgs } from "../../images";

export default function Stack({ tech }: { tech: string }) {
  return (
    <div className="flex items-center gap-2 bg-surface-container-low px-2 lg:px-4 py-2 rounded-lg ghost-border">
      <img
        src={imgs[tech.toLowerCase() as keyof typeof imgs]}
        alt={tech}
        className="w-6 h-6"
      />
      <span className="text-on-surface font-medium">{tech}</span>
    </div>
  );
}
