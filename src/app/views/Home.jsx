import IntroSection from "../sections/IntroSection";
import useDocumentTitle from "../tools/useDocumentTitle";

export default function Home() {
  useDocumentTitle("home");

  return (
    <div className="container content">
      <IntroSection />
    </div>
  );
}
