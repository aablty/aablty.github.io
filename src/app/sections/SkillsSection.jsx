import { skills } from "../tools/constants";
import Subtitle from "@/app/components/Subtitle";
import SkillBlock from "../components/SkillBlock";
import Dots from "../components/Dots";
import cat from "@/assets/images/cat.svg";

import "@/assets/styles/SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="skills">
      <Subtitle>skills</Subtitle>
      <div className="skills_content">
        <div className="skills_composition composition">
            <span> {">_"}</span>
          {/* <img src={cat} className="composition_cat" /> */}
          <Dots size={4} />
          <Dots size={6} />
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
