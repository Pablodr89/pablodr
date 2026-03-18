import Education from "../components/Education";
import Experience from "../components/Experience/Experience";
import PersonalDescription from "../components/PersonalDescription";
import TechStack from "../components/TechStack/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 lg:gap-24">
      <PersonalDescription />
      <Experience />
      <TechStack />
      <Education />
    </div>
  );
}
