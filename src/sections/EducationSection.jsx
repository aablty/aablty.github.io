// Contexts
import { useLocale } from "../contexts";

// Components
import { Subtitle } from "../components";

// Styles
import "../assets/styles/sections/EducationSection.css";

export default function EducationSection() {
  const { translations } = useLocale();

  const educationData = [
    {
      institution: "Kazakh-British Technical University",
      degree: translations.bachelor_degree,
      startYear: "2024",
      endYear: "2028",
      status: translations.current_student,
      location: translations.location_almaty,
    },
  ];

  const certificationsData = [
    // {
    //   name: "Python Programming",
    //   provider: "Coursera",
    //   year: "2023",
    //   status: translations.completed,
    // },
  ];

  return (
    <section className="education">
      <Subtitle>{translations.education}</Subtitle>
      <div className="education_content">
        <div className="education_formal">
          <h3 className="education_subsection_title">
            {translations.formal_education}
          </h3>
          {!educationData.length ? (
            <p className="empty_list">{translations.education_empty}</p>
          ) : (
            <div className="education_list">
              {educationData.map((edu, index) => (
                <div key={index} className="education_item">
                  <div className="education_period">
                    <span className="education_years">
                      {edu.startYear} - {edu.endYear}
                    </span>
                    <span className="education_status">{edu.status}</span>
                  </div>
                  <div className="education_details">
                    <h4 className="education_institution">{edu.institution}</h4>
                    <p className="education_degree">{edu.degree}</p>
                    <p className="education_location">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="education_certifications">
          <h3 className="education_subsection_title">
            {translations.certifications_courses}
          </h3>
          {!certificationsData.length ? (
            <p className="empty_list">{translations.certifications_empty}</p>
          ) : (
            <div className="education_list">
              {certificationsData.map((cert, index) => (
                <div key={index} className="education_item">
                  <div className="education_period">
                    <span className="education_years">{cert.year}</span>
                    <span className="education_status">{cert.status}</span>
                  </div>
                  <div className="education_details">
                    <h4 className="education_institution">{cert.name}</h4>
                    <p className="education_degree">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
