// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle, Project } from "../components";

// Utils
import { projects } from "../utils/constants";

// Styles
import "../assets/styles/sections/ProjectsSection.css";

export default function DecentProjects() {
  const { translations } = useLocale();

  return (
    <section className="projects">
      <div className="projects_header">
        <Subtitle>{translations.decent}</Subtitle>
      </div>
      <div className="project_list">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Project key={index} project={project} />
          ))
        ) : (
          <p style={{ color: "var(--gray)" }}>{translations.no_projects}</p>
        )}
      </div>
    </section>
  );
}
