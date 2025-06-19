// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useProjects } from "../hooks";

// Components
import { Subtitle, Project } from "../components";

// Styles
import "../assets/styles/sections/ProjectsSection.css";

export default function SmallProjects() {
  const { translations, getTranslation } = useLocale();
  const { projects: apiProjects, loading, error } = useProjects();

  const projectsData = apiProjects.filter(
    (project) => project.type === "small"
  );

  if (loading) {
    return (
      <section className="projects">
        <div className="projects_header">
          <Subtitle>{translations.small}</Subtitle>
        </div>
        <div className="projects_loading">
          <p>{translations.loading}</p>
        </div>
      </section>
    );
  }

  if (error) {
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
        <Subtitle>{translations.small}</Subtitle>
      </div>
      <div className="project_list">
        {projectsData.length > 0 ? (
          projectsData.map((project, index) => (
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
