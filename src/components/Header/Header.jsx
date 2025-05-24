import { useState } from "react";

import logo from "@/assets/images/logo.svg";
import "./Header.css";

export default function Header() {
  const [locale, setLocale] = useState("EN");

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <a className="logo" href="/">
            <img className="logo__img" src={logo} />
            <span className="logo__name">aablty</span>
          </a>
          <nav className="header_nav">
            <a href="/">home</a>
            <a href="/projects">projects</a>
            <a href="/about-me">about-me</a>
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
