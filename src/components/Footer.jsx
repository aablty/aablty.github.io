// Contexts
import { useLocale } from "../contexts";

// Assets
import telegram from "../assets/images/telegram.svg";
import github from "../assets/images/github.svg";
import discord from "../assets/images/discord.svg";
import logo from "../assets/images/logo.svg";

// Styles
import "../assets/styles/components/Footer.css";

export default function Footer() {
  const { translations } = useLocale();

  return (
    <footer className="footer">
      <div className="container">
        <div className="media_list">
          <a
            className="media"
            href="https://t.me/aablty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="media_icon" src={telegram} alt="telegram" />
          </a>
          <a
            className="media"
            href="https://github.com/aablty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="media_icon" src={github} alt="github" />
          </a>
          <a
            className="media"
            href="https://discord.com/users/1273224975482097751"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="media_icon" src={discord} alt="discord" />
          </a>
        </div>
        <div className="copyright">{translations.copyright}</div>
      </div>
    </footer>
  );
}
