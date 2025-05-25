import "@/assets/styles/Button.css";

export default function Button({ children, href = "" }) {
  return (
    <a href={href} className="button">
      {children + ` ->`}
    </a>
  );
}
