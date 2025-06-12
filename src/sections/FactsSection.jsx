// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle } from "../components";

// Utils
import { facts } from "../utils/constants";

// Styles
import "../assets/styles/sections/FactsSection.css";

export default function FactsSection() {
  const { translations } = useLocale();

  return (
    <section className="facts">
      <Subtitle>{translations.facts}</Subtitle>
      <div className="facts_content">
        <ul className="facts_list">
          {facts.map((fact, index) => (
            <li key={index} className="fact">
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
