import Education from "../components/Education";
import Experience from "../components/Experience";
import PersonalDescription from "../components/PersonalDescription";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20">
      <PersonalDescription />
      <Experience />
      <TechStack />
      <Education />
    </div>
  );
}
