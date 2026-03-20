import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience/Experience";
import PersonalDescription from "../components/PersonalDescription";
import PersonalProjects from "../components/PersonalProjects/PersonalProjects";
import TechStack from "../components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <PersonalDescription />
      <Experience />
      <PersonalProjects />
      <TechStack />
      <Education />
      <Contact />
    </>
  );
}
