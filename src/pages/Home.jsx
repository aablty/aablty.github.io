// Hooks
import { useDocumentTitle } from "../hooks";

// Components
import { Quote } from "../components";

// Sections
import {
  IntroSection,
  SkillsSection,
  ProjectsSection,
  ContactsSection,
} from "../sections";

export default function Home() {
  useDocumentTitle("home");

  return (
    <div className="container content">
      <IntroSection />
      <Quote />
      <ProjectsSection />
      <SkillsSection />
      <ContactsSection />
    </div>
  );
}
