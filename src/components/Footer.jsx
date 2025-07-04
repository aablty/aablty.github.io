// Contexts
import { useLocale } from "../contexts";

// Assets
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import discord from "../assets/images/discord.svg";

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
            href="https://github.com/aablty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="media_icon" src={github} alt="github" />
          </a>
          <a
            className="media"
            href="https://www.linkedin.com/in/aablty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="media_icon" src={linkedin} alt="linkedin" />
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
