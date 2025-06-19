// Contexts
import { useLocale } from "../contexts";

// Components
import Button from "./Button";

// Styles
import "../assets/styles/components/Project.css";

export default function Project({ project, getTranslation }) {
  const { translations } = useLocale();

  const title = getTranslation(project.title);
  const description = getTranslation(project.description);
  const stack = project.stack || [];
  const projectLinks = project.links || [];

  return (
    <div className="project">
      <img
        src={`${project?.image}`}
        alt={title}
        className="project_image"
      />
      <ul className="project_stack">
        {stack.length > 0 ? (
          stack.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{translations.no_stack}</li>
        )}
      </ul>
      <div className="project_content">
        <div className="project_name">{title}</div>
        <div className="project_description">{description}</div>
        <div className="project_links">
          {projectLinks.length > 0 ? (
            projectLinks.map((link, index) => (
              <Button
                key={index}
                href={link.link || link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project_link"
              >
                {link.label}
              </Button>
            ))
          ) : (
            <Button disabled>{translations.no_links}</Button>
          )}
        </div>
      </div>
    </div>
  );
}
