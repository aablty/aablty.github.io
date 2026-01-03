import { DynamicIcon } from "lucide-react/dynamic";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 mb-4">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 font-mono tracking-tight">
            {t.hero.nickname}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/80">
            {t.hero.role}
          </p>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              {t.hero.cta}
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            {t.hero.media.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                <DynamicIcon name={media.icon} className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
