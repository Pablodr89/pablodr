import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <span className="text-xl font-bold tracking-tighter text-slate-50">
          Pablo Domínguez
        </span>
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#proyectos"
          >
            Proyectos
          </NavLink>
          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#experiencia"
          >
            Experiencia
          </NavLink>
          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#stack"
          >
            Stack
          </NavLink>
          <NavLink
            className="text-slate-400 hover:text-slate-200 transition-colors font-inter tracking-tight font-medium"
            to="#educacion"
          >
            Educación
          </NavLink>
        </div>
        <NavLink
          className="primary-btn-gradient text-on-primary-fixed px-6 py-2.5 rounded-md font-medium scale-95 active:scale-90 transition-transform hover:primary-btn-gradient/50"
          to="#contacto"
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}
