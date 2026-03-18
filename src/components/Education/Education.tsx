import { imgs } from "../../images";

export default function Education() {
  return (
    <section className="flex flex-col gap-5 w-full">
      <h2 className="text-7xl text-center bg-clip-text text-orange-500">
        Educación
      </h2>

      <div className="flex  gap-5 items-start border-2 border-orange-600 rounded-lg p-5">
        <img src={imgs.degree} alt="education" />

        <div className="flex flex-col gap-1">
          <h3 className="text-2xl text-start text-orange-500">
            FP Superior en Desarrollo web
          </h3>

          <p className="text-lg text-gray-300">Cesur Sevilla (2021-2023)</p>
        </div>
      </div>
    </section>
  );
}
