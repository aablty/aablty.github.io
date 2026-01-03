import { DynamicIcon } from "lucide-react/dynamic";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center border-b border-white/10 pb-4">
            {t.about.title}
          </h2>

          {/* Description */}
          <div className="space-y-6 mb-16">
            {t.about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-white/70 leading-relaxed text-center max-w-3xl mx-auto"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Education & Experience Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <DynamicIcon name={t.about.education.icon} className="size-6" />
                <h3 className="text-2xl">{t.about.education.title}</h3>
              </div>
              <div className="space-y-6">
                {t.about.education.list.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-white/20 pl-6 pb-6 last:pb-0"
                  >
                    <p className="text-white/50 text-sm mb-2">{edu.period}</p>
                    <h4 className="text-lg mb-1">{edu.degree}</h4>
                    <p className="text-white/70">{edu.institution}</p>
                    <p className="text-white/50 text-sm mt-1">{edu.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <DynamicIcon
                  name={t.about.experience.icon}
                  className="size-6"
                />
                <h3 className="text-2xl">{t.about.experience.title}</h3>
              </div>
              <div className="space-y-6">
                {t.about.experience.list.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-white/20 pl-6 pb-6 last:pb-0"
                  >
                    <p className="text-white/50 text-sm mb-2">{exp.period}</p>
                    <h4 className="text-lg mb-1">{exp.title}</h4>
                    <p className="text-white/70 mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-white/60 text-sm flex items-start gap-2"
                        >
                          <span className="size-1.5 bg-white/40 block mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
