import { NavLink } from "react-router-dom";

import { useLocale } from "../tools/localeContext";

import LocaleSwitcher from "./LocaleSwitcher";

import { navLinks } from "../tools/constants";
import logo from "@/assets/images/logo.svg";

import "@/assets/styles/Header.css";

export default function Header() {
  const { locale, translations, switchLocale } = useLocale();

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <a className="logo" href="/">
            <img className="logo_img" src={logo} alt="Logo" />
            <span className="logo_name">aablty</span>
          </a>
          <nav className="header_nav">
            {navLinks.map(({ to, labelKey }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `header_link ${isActive ? "active" : ""}`
                }
              >
                {translations[labelKey]}
              </NavLink>
            ))}
          </nav>
          <LocaleSwitcher locale={locale} switchLocale={switchLocale} />
        </div>
      </div>
    </header>
  );
}
