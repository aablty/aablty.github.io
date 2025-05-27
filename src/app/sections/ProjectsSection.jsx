import { NavLink } from "react-router-dom";

import Subtitle from "@/app/components/Subtitle";
import "@/assets/styles/ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <section className="projects">
      <div className="projects_header">
        <Subtitle>projects</Subtitle>
        <NavLink to="/projects" className="projects_link">
          View all {'~~>'}
        </NavLink>
      </div>
      <div className="project_list"></div>
    </section>
  );
}
