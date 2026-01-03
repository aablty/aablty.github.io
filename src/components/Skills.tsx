import { DynamicIcon } from "lucide-react/dynamic";
import { useLanguage } from "../contexts/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center border-b border-white/10 pb-4">
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.skills.list.map((category, index) => (
              <div
                key={index}
                className="border border-white/10 p-8 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <DynamicIcon name={category.icon} className="size-6" />
                  <h3 className="text-xl">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-white/70 flex items-center gap-2"
                    >
                      <span className="size-1.5 bg-white block" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
