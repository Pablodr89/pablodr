import stackData from "../../data/stack.json";
import TechStackItem from "./TechStackItem";

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-6">
            Stack Tecnológico
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Herramientas y lenguajes que domino para dar vida a visiones
            digitales complejas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {stackData.map((item, index) => (
            <div key={index}>
              <TechStackItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
