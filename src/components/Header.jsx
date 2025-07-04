// React Router
import { NavLink } from "react-router-dom";
import { useState } from "react";

// Contexts
import { useLocale } from "../contexts";

// Components
import LocaleSwitcher from "./LocaleSwitcher";

// Assets
import logo from "../assets/images/logo.svg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import discord from "../assets/images/discord.svg";

// Styles
import "../assets/styles/components/Header.css";

export default function Header() {
  const { locale, translations, switchLocale } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ===== ROUTE CONFIGURATION =====
  const navs = [
    { to: "/", labelKey: "home" },
    { to: "/projects", labelKey: "projects" },
    { to: "/about-me", labelKey: "about_me" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <a className="logo" href="/">
            <img className="logo_img" src={logo} alt="Logo" />
            <span className="logo_name">aablty</span>
          </a>
          {/* Desktop Navigation */}
          <nav className="header_nav">
            {navs.map(({ to, labelKey }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `header_link ${isActive ? "active" : ""}`
                }
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {translations[labelKey]}
              </NavLink>
            ))}
          </nav>
          <LocaleSwitcher locale={locale} switchLocale={switchLocale} />
          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>{" "}
          {/* Mobile Menu */}
          <div className={`mobile_menu ${isMenuOpen ? "open" : ""}`}>
            <nav className="mobile_nav">
              {navs.map(({ to, labelKey }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `mobile_link ${isActive ? "active" : ""}`
                  }
                  onClick={() => {
                    closeMenu();
                    window.scrollTo({ top: 0 });
                  }}
                >
                  {translations[labelKey]}
                </NavLink>
              ))}{" "}
            </nav>

            <div className="mobile_locale">
              <LocaleSwitcher locale={locale} switchLocale={switchLocale} />
            </div>

            <div className="mobile_social">
              <a
                href="https://github.com/aablty"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile_social_link"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/aablty/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile_social_link"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://discord.com/users/1273224975482097751"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile_social_link"
              >
                <img src={discord} alt="discord" />
              </a>
            </div>
          </div>
          {/* Overlay */}
          {isMenuOpen && (
            <div className="menu_overlay" onClick={closeMenu}></div>
          )}
        </div>
      </div>
    </header>
  );
}
