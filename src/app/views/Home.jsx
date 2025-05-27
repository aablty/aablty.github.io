import IntroSection from "../sections/IntroSection";
import Quote from "../sections/Quote";
import ProjectsSection from "../sections/ProjectsSection";
import useDocumentTitle from "../tools/useDocumentTitle";

export default function Home() {
  useDocumentTitle("home");

  return (
    <div className="container content">
      <IntroSection />
      <Quote />
      <ProjectsSection />
    </div>
  );
}
