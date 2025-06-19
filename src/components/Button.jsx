// Styles
import "../assets/styles/components/Button.css";

export default function Button({
  children,
  color = "primary",
  href = "",
  onClick,
  disabled = false,
}) {
  const isInternalLink = href.startsWith("#") || href.startsWith("/");

  return (
    <a
      className={`button ${color}`}
      href={href}
      target={isInternalLink ? "_self" : "_blank"}
      rel={isInternalLink ? undefined : "noopener noreferrer"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </a>
  );
}
