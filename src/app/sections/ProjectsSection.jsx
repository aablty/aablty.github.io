import Subtitle from "@/app/components/Subtitle";
import "@/assets/styles/ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="projects">
      <div className="projects_header">
        <Subtitle>projects</Subtitle>
        <a href="/projects" className="projects_link">
          View all {'~~>'}
        </a>
      </div>
      <div className="project_list"></div>
    </section>
  );
}
