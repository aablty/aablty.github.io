import { DynamicIcon } from "lucide-react/dynamic";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <span className="text-xl font-mono">{t.hero.nickname}</span>
          </div>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white/70 transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-white/70 transition-colors"
                >
                  {t.nav.skills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-white/70 transition-colors"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white/70 transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>

            <button
              onClick={() => setLanguage(language === "en" ? "ru" : "en")}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/20 hover:bg-white hover:text-black transition-all"
              aria-label="Toggle language"
            >
              <DynamicIcon name="globe" className="size-4" />
              <span className="text-sm uppercase">{language}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
