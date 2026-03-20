import { NavLink } from "react-router";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <NavLink
          className="text-xl font-bold tracking-tighter text-slate-50"
          to="#personal"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("personal");
          }}
        >
          Pablo Domínguez
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#experiencia"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("experiencia");
            }}
          >
            Experiencia
          </NavLink>

          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("proyectos");
            }}
          >
            Proyectos
          </NavLink>

          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#stack"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("stack");
            }}
          >
            Stack
          </NavLink>

          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#educacion"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("educacion");
            }}
          >
            Educación
          </NavLink>
        </div>

        <NavLink
          className="primary-btn-gradient text-on-primary-fixed px-6 py-2.5 rounded-md font-medium duration-300 transition-colors hover:primary-btn-gradient/50"
          to="#contacto"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contacto");
          }}
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}
