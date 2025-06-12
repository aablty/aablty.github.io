// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle, SkillBlock } from "../components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Utils
import { skills } from "../utils";

// Styles
import "../assets/styles/sections/SkillsSection.css";

export default function SkillsSection({ parent }) {
  const { translations } = useLocale();

  return (
    <section className="skills">
      <Subtitle>{translations.skills}</Subtitle>
      {parent === "home" ? (
        <>
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
        </>
      ) : (
        <>
          <div className="skills_content" style={{ gap: '1rem' }}>
            {skills.map((skill, index) => (
              <SkillBlock key={index} skill={skill} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
