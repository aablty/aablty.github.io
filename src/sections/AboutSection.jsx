//Contexts
import { useLocale } from "../contexts";

//Components
import { Button } from "../components";
import { Subtitle } from "../components";

//Assets
import about from "../assets/images/about.png";

//Styles
import "../assets/styles/sections/AboutSection.css";

export default function AboutSection() {
  const { translations } = useLocale();

  return (
    <section className="about">
      <div className="about_content">
        <Subtitle>{translations.about_me}</Subtitle>
        <div className="about_text">
          <p className="about_description">{translations.about_description}</p>
          <p className="about_description">{translations.about_description2}</p>
        </div>
        <Button href="/#about-me">{translations.view_all}</Button>
      </div>
      <div className="about_image">
        <img src={about} alt="about" />
      </div>
    </section>
  );
}
