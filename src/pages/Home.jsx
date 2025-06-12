// Hooks
import { useDocumentTitle } from "../hooks";

// Components
import { Quote } from "../components";

// Sections
import {
  IntroSection,
  SkillsSection,
  ProjectsSection,
  AboutSection,
  ContactsSection,
} from "../sections";

export default function Home() {
  useDocumentTitle("home");

  return (
    <>
      <IntroSection />
      <Quote />
      <ProjectsSection />
      <SkillsSection parent="home" />
      <AboutSection parent="home" />
      <ContactsSection />
    </>
  );
}
