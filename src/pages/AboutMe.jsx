// Hooks
import { useDocumentTitle } from "../hooks";

// Contexts
import { useLocale } from "../contexts";

// Components
import { Path } from "../components";

// Sections
import {
  AboutSection,
  SkillsSection,
  EducationSection,
  FactsSection,
} from "../sections";

export default function AboutMe() {
  useDocumentTitle("about-me");
  const { translations } = useLocale();

  return (
    <>
      <Path>
        {translations.about_me + "+" + translations.about_me_description}
      </Path>{" "}
      <AboutSection parent="about-me" />
      <SkillsSection parent="about-me" />
      <EducationSection />
      <FactsSection />
    </>
  );
}
