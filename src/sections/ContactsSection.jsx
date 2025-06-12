// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle, ContactForm } from "../components";

// Assets
import arrow from "../assets/images/arrow.svg";
import telegram from "../assets/images/telegram.svg";
import discord from "../assets/images/discord.svg";
import mail from "../assets/images/mail.svg";

// Styles
import "../assets/styles/sections/ContactsSection.css";

export default function ContactsSection() {
  const { translations } = useLocale();

  return (
    <section className="contacts" id="contacts">
      <Subtitle>{translations.contacts}</Subtitle>
      <div className="contacts_content">
        <div className="contacts_info">
          <p className="contacts_description">
            {translations.contacts_description}
          </p>
          <h3 className="media_title">
            <img className="contacts-link_icon" src={arrow} alt="arrow" />
            <span>{translations.message_me}</span>
          </h3>
          <div className="contacts_media">
            <a
              className="contacts-link"
              href="https://t.me/aablty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contacts-link_icon"
                src={telegram}
                alt="telegram"
              />
              <span className="contacts-link_text">aablty</span>
            </a>
            <a
              className="contacts-link"
              href="https://discord.com/users/1273224975482097751"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="contacts-link_icon" src={discord} alt="discord" />
              <span className="contacts-link_text">aablty</span>
            </a>
            <a
              className="contacts-link"
              href="mailto:aablty@proton.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="contacts-link_icon" src={mail} alt="email" />
              <span className="contacts-link_text">aablty@proton.me</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
