// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle } from "../components";

// Styles
import "../assets/styles/sections/ContactsSection.css";

export default function ContactsSection() {
  const { translations } = useLocale();
  return (
    <section className="contacts" id="contacts">
      <Subtitle>{translations.contacts}</Subtitle>
      <div className="contacts_content">
        <p className="contacts_description">
          {translations.contacts_description}
        </p>
      </div>
    </section>
  );
}
