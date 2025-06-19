// Contexts
import { useLocale } from "../contexts";

// Hooks
import { useEducation, useCertifications } from "../hooks";

// Components
import { Subtitle } from "../components";

// Styles
import "../assets/styles/sections/EducationSection.css";

export default function EducationSection() {
  const { translations, getTranslation, formatYearRange } = useLocale();
  const {
    education: apiEducation,
    loading: educationLoading,
    error: educationError,
  } = useEducation();
  const {
    certifications: apiCertifications,
    loading: certificationsLoading,
    error: certificationsError,
  } = useCertifications();

  return (
    <section className="education">
      <Subtitle>{translations.education}</Subtitle>
      <div className="education_content">
        <div className="education_formal">
          <h3 className="education_subsection_title">
            {translations.formal_education}
          </h3>
          {educationLoading ? (
            <p>{translations.loading}</p>
          ) : educationError ? (
            <p>{translations.error_loading_education}</p>
          ) : !apiEducation.length ? (
            <p className="empty_list">{translations.education_empty}</p>
          ) : (
            <div className="education_list">
              {apiEducation.map((edu, index) => {
                return (
                  <div key={index} className="education_item">
                    <div className="education_period">
                      <span className="education_years">
                        {formatYearRange(edu.start_year, edu.end_year)}
                      </span>
                      <span className="education_status">
                        {getTranslation(edu.status)}
                      </span>
                    </div>
                    <div className="education_details">
                      <h4 className="education_institution">
                        {getTranslation(edu.institution)}
                      </h4>
                      <p className="education_degree">
                        {getTranslation(edu.degree)}
                      </p>
                      <p className="education_location">
                        {getTranslation(edu.location)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="education_certifications">
          <h3 className="education_subsection_title">
            {translations.certifications_courses}
          </h3>
          {certificationsLoading ? (
            <p>{translations.loading}</p>
          ) : certificationsError ? (
            <p>{translations.error_loading_certification}</p>
          ) : !apiCertifications.length ? (
            <p className="empty_list">{translations.certifications_empty}</p>
          ) : (
            <div className="education_list">
              {apiCertifications.map((cert, index) => {
                return (
                  <div key={index} className="education_item">
                    <div className="education_period">
                      <span className="education_years">{cert.year}</span>
                      <span className="education_status">
                        {getTranslation(cert.status)}
                      </span>
                    </div>
                    <div className="education_details">
                      <h4 className="education_institution">
                        {getTranslation(cert.name)}
                      </h4>
                      <p className="education_degree">
                        {getTranslation(cert.provider)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
