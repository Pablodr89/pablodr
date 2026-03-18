import { NavLink } from "react-router";
import { imgs } from "../images";

export default function Navbar() {
  return (
    <nav className="flex justify-end px-10 py-4 h-16">
      <div className="flex justify-between items-center gap-5">
        <NavLink to="https://www.linkedin.com/in/pablodr1989/" target="blank_">
          <img src={imgs.linkedin} alt="Linkedin" className="w-8 h-8" />
        </NavLink>

        <NavLink to="https://github.com/Pablodr89" target="blank_">
          <img src={imgs.github} alt="GitHub" className="w-8 h-8" />
        </NavLink>
      </div>
    </nav>
  );
}
