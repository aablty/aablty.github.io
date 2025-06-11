export default function LocaleSwitcher({ locale, switchLocale }) {
  return (
    <button
      className="locale"
      onClick={() => switchLocale(locale === "en" ? "ru" : "en")}
      aria-label="Switch language"
    >
      {locale.toUpperCase()}
    </button>
  );
}
