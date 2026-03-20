import { imgs } from "../../images";

export default function Education() {
  return (
    <section className="py-8 lg:py-16 px-6" id="educacion">
      <div className="flex flex-col gap-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-on-surface mb-8">
              Formación Académica
            </h2>

            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                  FP Superior en Desarrollo de Aplicaciones Web
                </h3>

                <p className="text-on-surface-variant italic mb-2">
                  Cesur Sevilla — 2021-2023
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-center gap-3 items-center text-center">
            <img src={imgs.degree} alt="degree" className="w-8 h-8" />

            <h3 className="text-2xl font-bold text-on-surface">
              Aprendizaje Continuo
            </h3>

            <p className="text-on-surface-variant text-justify">
              Comprometido con la evolución constante de la tecnología,
              manteniéndome actualizado a través de cursos, talleres y proyectos
              personales para dominar las últimas tendencias y herramientas del
              desarrollo web.
            </p>

            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              +10 Cursos Especializados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
