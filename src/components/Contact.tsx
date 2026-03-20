import { Link } from "react-router";
import { imgs } from "../images";

export default function Contact() {
  return (
    <section
      className="py-6 lg:py-32 px-6 relative overflow-hidden bg-surface-container-lowest"
      id="contacto"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8">
          Contáctame
        </h2>

        <a
          className="text-2xl md:text-4xl font-light text-on-surface-variant hover:text-primary transition-colors mb-16 inline-block underline underline-offset-8 decoration-outline-variant/30"
          href="mailto:padoro89@gmail.com"
        >
          padoro89@gmail.com
        </a>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            className="flex items-center justify-center gap-3 bg-surface-container-high px-10 py-5 rounded-xl text-xl font-bold text-on-surface transition-all hover:bg-surface-variant group"
            to="https://www.linkedin.com/in/pablodr1989/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgs.linkedin} alt="Linkedin" className="w-6 h-6" />
            LinkedIn
          </Link>

          <Link
            className="flex items-center justify-center gap-3 bg-surface-container-high px-10 py-5 rounded-xl text-xl font-bold text-on-surface transition-all hover:bg-surface-variant group"
            to="https://github.com/Pablodr89"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgs.github} alt="GitHub" className="w-6 h-6" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
