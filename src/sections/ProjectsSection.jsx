// React Router
import { Link } from "react-router-dom";

// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useProjects } from "../hooks";

// Components
import { Subtitle, Project } from "../components";

// Styles
import "../assets/styles/sections/ProjectsSection.css";

export default function ProjectsSection() {
  const { translations, getTranslation } = useLocale();
  const { data: apiProjects, isLoading, isError } = useProjects();

  if (isLoading) {
    return (
      <section className="projects">
        <div className="projects_header">
          <Subtitle>{translations.projects}</Subtitle>
        </div>
        <div className="projects_loading">
          <p>{translations.loading}</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="projects">
        <div className="projects_header">
          <Subtitle>{translations.projects}</Subtitle>
        </div>
        <div className="projects_error">
          <p>{translations.error_loading_projects}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="projects_header">
        <Subtitle>{translations.projects}</Subtitle>
        <Link to="/projects" className="projects_link">
          {translations.view_all}
        </Link>
      </div>
      <div className="project_list">
        {apiProjects?.length > 0 ? (
          apiProjects
            .slice(0, 3)
            .map((project, index) => (
              <Project
                key={project.id || index}
                project={project}
                getTranslation={getTranslation}
              />
            ))
        ) : (
          <p className="empty_list">{translations.no_projects}</p>
        )}
      </div>
    </section>
  );
}
