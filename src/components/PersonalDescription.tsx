import { imgs } from "../images";

export default function PersonalDescription() {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-8">
      <h1 className="text-5xl lg:text-8xl text-center bg-clip-text text-transparent bg-linear-to-b from-orange-500 to-gray-900">
        Frontend Developer
      </h1>

      <h3 className="text-2xl lg:text-5xl text-center">
        Pablo Domínguez Romero
      </h3>

      <p className="text-lg lg:text-2xl text-center text-gray-300">
        Frontend Developer con 3 años de experiencia en React, Next.js,
        TypeScript y TailwindCSS. Especializado en la construcción de interfaces
        escalables, consumo de APIs, gestión de estado y desarrollo de
        aplicaciones web modernas. Acostumbrado a trabajar en entornos ágiles y
        a colaborar con equipos multidisciplinares. Con gran posibilidad de
        adaptación a otros lenguajes como Vue o Angular.
      </p>

      <div className="grid grid-cols-3 lg:flex lg:justify-between items-center gap-8">
        <img
          src={imgs.react}
          alt="react"
          className="w-20 h-20 lg:w-28 lg:h-28"
        />
        <img src={imgs.next} alt="next" className="w-20 h-20 lg:w-28 lg:h-28" />
        <img
          src={imgs.typescript}
          alt="typescript"
          className="w-20 h-20 lg:w-28 lg:h-28"
        />
        <img
          src={imgs.tailwind}
          alt="tailwind"
          className="w-20 h-20 lg:w-28 lg:h-28"
        />
        <img src={imgs.css} alt="css" className="w-20 h-20 lg:w-28 lg:h-28" />
        <img
          src={imgs.tanstack}
          alt="tanstack"
          className="w-20 h-20 lg:w-28 lg:h-28"
        />
      </div>
    </div>
  );
}
