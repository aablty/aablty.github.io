import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white/40 text-sm">
          <p>
            © {new Date().getFullYear()} {t.hero.nickname}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
