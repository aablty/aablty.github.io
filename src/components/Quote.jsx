// Contexts
import { useLocale } from "../contexts";

// Styles
import "../assets/styles/components/Quote.css";

export default function Quote() {
  const { translations } = useLocale();

  return (
    <figure className="quote">
      <blockquote className="quote_text">{translations.quote}</blockquote>
      <figcaption className="quote_author">
        {translations.quote_author}
      </figcaption>
    </figure>
  );
}
