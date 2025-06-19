// React Router
import { Link } from "react-router-dom";

// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useSkills } from "../hooks";

// Components
import { Subtitle, SkillBlock } from "../components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Styles
import "../assets/styles/sections/SkillsSection.css";

export default function SkillsSection({ parent }) {
  const { translations, getTranslation } = useLocale();
  const { skills: apiSkills, loading, error } = useSkills();

  const homeSkills = apiSkills.filter((skill) =>
    ["Languages", "Backend", "Frontend"].includes(skill.title.en)
  );

  return (
    <section className="skills" id="skills">
      <div className="skills_header">
        <Subtitle>{translations.skills}</Subtitle>
        {parent === "home" ? (
          <Link to="/about-me#skills" className="skills_link">
            {translations.view_all}
          </Link>
        ) : null}
      </div>
      {loading ? (
        <div className="skills_loading">
          <p>{translations.loading}</p>
        </div>
      ) : error ? (
        <div className="skills_error">
          <p>{translations.error_loading_skills}</p>
        </div>
      ) : parent === "home" ? (
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
            {homeSkills.length > 0 ? (
              homeSkills.map((skill, index) => (
                <SkillBlock
                  key={skill.id || index}
                  skill={skill}
                  getTranslation={getTranslation}
                />
              ))
            ) : (
              <p className="empty_list">{translations.skills_empty}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="skills_content" style={{ gap: "1rem" }}>
          {apiSkills.length > 0 ? (
            apiSkills.map((skill, index) => (
              <SkillBlock
                key={skill.id || index}
                skill={skill}
                getTranslation={getTranslation}
              />
            ))
          ) : (
            <p className="empty_list">{translations.skills_empty}</p>
          )}
        </div>
      )}
    </section>
  );
}
