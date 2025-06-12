// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle, Project } from "../components";

// Utils
import { small } from "../utils/constants";

// Styles
import "../assets/styles/sections/ProjectsSection.css";

export default function SmallProjects() {
  const { translations } = useLocale();

  return (
    <section className="projects">
      <div className="projects_header">
        <Subtitle>{translations.small}</Subtitle>
      </div>
      <div className="project_list">
        {small.length > 0 ? (
          small.map((project, index) => (
            <Project key={index} project={project} />
          ))
        ) : (
          <p style={{ color: "var(--gray)" }}>{translations.no_projects}</p>
        )}
      </div>
    </section>
  );
}
