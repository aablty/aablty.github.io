// React
import { useEffect } from "react";

// React Router
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset*2;  

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location.hash]); 

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
