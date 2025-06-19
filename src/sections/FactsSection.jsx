// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useFacts } from "../hooks";

// Components
import { Subtitle } from "../components";

// Styles
import "../assets/styles/sections/FactsSection.css";

export default function FactsSection() {
  const { translations, getTranslation } = useLocale();
  const { facts: apiFacts, loading, error } = useFacts();

  if (loading) {
    return (
      <section className="facts">
        <Subtitle>{translations.facts}</Subtitle>
        <div className="facts_loading">
          <p>{translations.loading}</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="facts">
        <Subtitle>{translations.facts}</Subtitle>
        <div className="facts_error">
          <p>{translations.error_loading_facts}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="facts">
      <Subtitle>{translations.facts}</Subtitle>
      <div className="facts_content">
        {apiFacts.length > 0 ? (
          <ul className="facts_list">
            {apiFacts.map((fact, index) => (
              <li key={fact.id || index} className="fact">
                {typeof fact === "string" ? fact : getTranslation(fact.content)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty_list">{translations.facts_empty}</p>
        )}
      </div>
    </section>
  );
}
