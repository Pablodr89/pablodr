import favStackData from "../data/favStack.json";
import type { FavStackData } from "../interfaces/StackInterface";
import Stack from "./Stack";

export default function PersonalDescription() {
  const favStack: FavStackData[] = favStackData;

  return (
    <section className="flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-10">
          <span className="inline-block py-1 px-3 rounded-full bg-surface-container-highest text-secondary label-md font-medium mb-6">
            Disponibilidad inmediata
          </span>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] text-on-surface">
            Frontend Developer
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-5xl mb-12 leading-relaxed">
            Frontend Developer con 3 años de experiencia en React, Next.js,
            TypeScript y TailwindCSS. Especializado en la construcción de
            interfaces escalables, consumo de APIs, gestión de estado y
            desarrollo de aplicaciones web modernas. Acostumbrado a trabajar en
            entornos ágiles y a colaborar con equipos multidisciplinares. Con
            gran posibilidad de adaptación a otros lenguajes como Vue o Angular.
          </p>

          <div className="flex flex-wrap gap-4">
            {favStack[0].stack.map((tech, index) => (
              <Stack key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
