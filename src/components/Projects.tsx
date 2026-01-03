import { DynamicIcon } from "lucide-react/dynamic";
import { useLanguage } from "../contexts/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center border-b border-white/10 pb-4">
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.list.map((project, index) => {
              return (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-12 border border-white/20 flex items-center justify-center">
                      <span className="font-mono">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {project.links.map((projectLink, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={projectLink.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all"
                        >
                          <DynamicIcon name={projectLink.icon} className="size-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="text-xs px-2 py-1 border border-white/20 text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
