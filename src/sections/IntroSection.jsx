// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useCVInfo } from "../hooks";

// Components
import { Button } from "../components";

// Assets
import avatar from "../assets/images/avatar.png";

// Styles
import "../assets/styles/sections/IntroSection.css";

export default function IntroSection() {
  const { translations } = useLocale();

  const { data: cvinfo, error } = useCVInfo();

  const handleScrollToContacts = (e) => {
    e.preventDefault();
    const element = document.getElementById("contacts");
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="intro">
      <div className="intro_content">
        <h1 className="intro_title">
          {translations.intro_title
            .split(/(full-stack|Python)/)
            .map((part, i) =>
              part === "full-stack" || part === "Python" ? (
                <span key={i}>{part}</span>
              ) : (
                part
              )
            )}
        </h1>
        <p className="intro_description">{translations.intro_description}</p>
        <div className="intro_buttons">
          <Button onClick={handleScrollToContacts}>
            {translations.contact_me}
          </Button>
          {cvinfo.exists && !error ? (
            <Button
              color="gray"
              href={`${cvinfo.download_url}`}
            >
              {translations.cv}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="intro_composition">
        <div className="intro_circle"></div>
        <img src={avatar} className="intro_avatar" alt="avatar" />
        <div className="intro_status">{translations.status}</div>
      </div>
    </section>
  );
}
