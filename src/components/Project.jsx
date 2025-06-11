// Components
import Button from "./Button";

// Styles
import "../assets/styles/components/Project.css";

export default function Project({ project }) {
  return (
    <div className="project">
      <img
        src={
          project?.image ||
          "placeholder url"
        }
        alt={project.name}
        className="project_image"
      />
      <ul className="project_stack">
        {project?.stack?.map((item, index) => <li key={index}>{item}</li>) || (
          <li>No stack provided</li>
        )}
      </ul>
      <div className="project_content">
        <div className="project_name">{project.name}</div>
        <div className="project_description">{project.description}</div>
        <div className="project_links">
          {project?.links?.map((link, index) => (
            <Button
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project_link"
            >
              {link.label}
            </Button>
          )) || <span>No links provided</span>}
        </div>
      </div>
    </div>
  );
}
