import { Link } from "react-router";
import { imgs } from "../../images";

export default function Links({
  link,
  github,
}: {
  link: string;
  github: string;
}) {
  return (
    <div className="flex gap-5">
      <Link to={link} className="text-outline" target="_blank" rel="noreferrer">
        <img src={imgs.link} alt="Link" className="w-6 h-6" />
      </Link>

      <Link
        to={github}
        className="text-outline"
        target="_blank"
        rel="noreferrer"
      >
        <img src={imgs.github} alt="Github" className="w-6 h-6" />
      </Link>
    </div>
  );
}
