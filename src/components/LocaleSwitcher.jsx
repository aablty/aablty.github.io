// Assets
import globe from "../assets/images/globe.svg";

export default function LocaleSwitcher({ locale, switchLocale }) {
  return (
    <button
      className="locale"
      onClick={() => switchLocale(locale === "en" ? "ru" : "en")}
      aria-label="Switch language"
    >
      <img className="locale_icon" src={globe} alt="locale" />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}
