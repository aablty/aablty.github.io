// Styles
import "../assets/styles/components/Button.css";

export default function Button({ children, color = "primary", href = "" }) {
  return (
    <a
      className={`button ${color}`}
      href={href}
      target={children === "Contact Me" || "_blank"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
