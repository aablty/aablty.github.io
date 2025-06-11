// Hooks
import { useDocumentTitle } from "../hooks";

export default function AboutMe() {
  useDocumentTitle("about-me");

  return (
    <div className="container content">
      <h1>About Me</h1>
    </div>
  );
}
