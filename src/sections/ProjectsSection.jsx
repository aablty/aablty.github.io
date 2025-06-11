// React Router
import { NavLink } from "react-router-dom";

// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle, Project } from "../components";

// Utils
import { projects } from "../utils/constants";

// Styles
import "../assets/styles/sections/ProjectsSection.css";

export default function ProjectsSection() {
  const { translations } = useLocale();

  return (
    <section className="projects">
      <div className="projects_header">
        <Subtitle>{translations.projects}</Subtitle>
        <NavLink to="/projects" className="projects_link">
          {translations.view_all}
        </NavLink>
      </div>
      <div className="project_list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        )) || <p>{translations.no_projects}</p>}
      </div>
    </section>
  );
}
