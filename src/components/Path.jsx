// Styles
import "../assets/styles/components/Path.css";

export default function Path({ children }) {
  const [ name, description ] = children.split("+");
  console.log(name, description);
  return (
    <div className="path">
      <h1 className="path_name">{name}</h1>
      <p className="path_description">{description}</p>
    </div>
  );
}
