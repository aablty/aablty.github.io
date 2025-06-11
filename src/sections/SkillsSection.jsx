// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle, SkillBlock } from "../components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Utils
import { skills } from "../utils";

// Styles
import "../assets/styles/sections/SkillsSection.css";

export default function SkillsSection() {
  const { translations } = useLocale();

  return (
    <section className="skills">
      <Subtitle>{translations.skills}</Subtitle>
      <div className="skills_content">
        <div className="skills_composition">
          <DotLottieReact
            className="cat"
            src="https://lottie.host/a61bd4b0-791c-474b-a3a5-ce1ab4b57eef/nuH5HOB4nt.lottie"
            loop
            autoplay
          />
        </div>
        <div className="skills_list">
          {skills.map((skill, index) => (
            <SkillBlock key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
