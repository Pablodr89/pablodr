import type { StackData } from "../../interfaces/StackInterface";
import { getIconStack } from "../../utils/iconStack";

export default function TechStackItem({ item }: { item: StackData }) {
  return (
    <div className="flex flex-col gap-3 bg-surface-container-low p-6 rounded-xl h-full border border-outline-variant/20 hover:border-primary/40 transition-colors group">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl">
          {getIconStack(item.title)}
        </span>

        <h3 className="text-xl font-bold text-on-surface">{item.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.stack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-sm rounded-xl ghost-border group-hover:text-primary transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
