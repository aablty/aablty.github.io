//Contexts
import { useLocale } from "../contexts";

//Components
import { Button } from "../components";
import { Subtitle } from "../components";

//Assets
import about from "../assets/images/about.png";

//Styles
import "../assets/styles/sections/AboutSection.css";

export default function AboutSection({ parent }) {
  const { translations } = useLocale();

  if (parent === "home") {
    return (
      <section className="about">
        <div className="about_content">
          <Subtitle>{translations.about_me}</Subtitle>
          <div className="about_text">
            <p className="about_description">
              {translations.about_description}
            </p>
            <p className="about_description">
              {translations.about_description2}
            </p>
          </div>
          <Button href="/#about-me" onClick={() => window.scrollTo({ top: 0 })}>
            {translations.view_all}
          </Button>
        </div>
        <div className="about_image">
          <img src={about} alt="about" />
        </div>
      </section>
    );
  } else if (parent === "about-me") {
    return (
      <section className="about" style={{ marginTop: "-4rem" }}>
        <div className="about_image">
          <img src={about} alt="about" style={{ transform: "scaleX(-1)" }} />
        </div>
        <div className="about_content">
          <div className="about_text">
            <p className="about_description">
              {translations.about_description}
            </p>
            <p className="about_description">
              {translations.about_description2}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
