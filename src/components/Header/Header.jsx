import { useState, useEffect } from "react";

import logo from "@/assets/images/logo.svg";
import en from "@/assets/locales/en.json";
import ru from "@/assets/locales/ru.json";

import "./Header.css";

const translations = { EN: en, RU: ru };

export default function Header() {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || "EN"
  );

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <a className="logo" href="/">
            <img className="logo_img" src={logo} alt="Logo" />
            <span className="logo_name">aablty</span>
          </a>
          <nav className="header_nav">
            <a href="/">{translations[locale].home}</a>
            <a href="/projects">{translations[locale].projects}</a>
            <a href="/about-me">{translations[locale].about_me}</a>
          </nav>
          <button
            className="locale"
            onClick={() => setLocale(locale === "EN" ? "RU" : "EN")}
          >
            {locale}
          </button>
        </div>
      </div>
    </header>
  );
}
