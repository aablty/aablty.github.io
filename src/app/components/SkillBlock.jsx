import "@/assets/styles/SkillBlock.css";

export default function SkillBlock({ skill }) {
  const { title, items } = skill;

  return (
    <div className="skill-block">
      <div className="skill-block_title">{title}</div>
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
