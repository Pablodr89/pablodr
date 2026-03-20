import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import PersonalDescription from "../components/PersonalDescription/PersonalDescription";
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
