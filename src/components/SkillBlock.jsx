// Contexts
import { useLocale } from "../contexts";

// Styles
import "../assets/styles/components/SkillBlock.css";

export default function SkillBlock({ skill, getTranslation }) {
  const { translations } = useLocale();


  const title = getTranslation(skill.title);

  const items = skill.items || [];

  return (
    <div className="skill-block">
      <div className="skill-block_title">{title}</div>
      <ul className="skill-block_items">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="skill-block_item">
              {item}
            </li>
          ))
        ) : (
          <li className="skill-block_item empty">
            {translations.no_items}
          </li>
        )}
      </ul>
    </div>
  );
}
