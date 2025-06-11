// Contexts
import { useLocale } from "../contexts";

// Styles
import "../assets/styles/components/SkillBlock.css";

export default function SkillBlock({ skill }) {
  const { translations } = useLocale();
  const { title_key, items } = skill;

  return (
    <div className="skill-block">
      <div className="skill-block_title">{translations[title_key]}</div>
      <ul className="skill-block_items">
        {items.map((item, index) => (
          <li key={index} className="skill-block_item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
