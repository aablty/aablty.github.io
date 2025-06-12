// Hooks
import { useDocumentTitle } from "../hooks";

// Contexts
import { useLocale } from "../contexts";

// Components
import { Path } from "../components";

// Sections
import { DecentProjects, SmallProjects } from "../sections";

export default function Projects() {
  useDocumentTitle("projects");

  const { translations } = useLocale();

  return (
    <>
      <Path>
        {translations.projects + "+" + translations.projects_description}
      </Path>
      <DecentProjects />
      <SmallProjects />
    </>
  );
}
