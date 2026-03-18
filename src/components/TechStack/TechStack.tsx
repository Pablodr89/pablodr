import stackData from "../../data/stack.json";

export default function TechStack() {
  return (
    <section className="flex flex-col items-center gap-5 w-full">
      <h2 className="text-7xl text-center bg-clip-text text-orange-500">
        Stack tecnológico
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 w-full">
        {stackData.map((stack, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 w-full border-2 border-orange-500 rounded-lg p-5"
          >
            <h3 className="text-xl text-start text-orange-500">
              {stack.title}
            </h3>

            <ul
              className={`${stack.stack.length === 1 ? "flex flex-col" : "grid grid-cols-3"} gap-y-2 gap-x-4 list-disc list-outside pl-5`}
            >
              {stack.stack.map((item, j) => (
                <li key={j} className="text-lg text-start text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
