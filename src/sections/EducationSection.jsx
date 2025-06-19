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
    data: apiEducation,
    isLoading: educationLoading,
    error: educationError,
  } = useEducation();
  const {
    data: apiCertifications,
    isLoading: certificationsLoading,
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
            <div className="education_loading">
              <p>{translations.loading}</p>
            </div>
          ) : educationError ? (
            <div className="education_error">
              <p>{translations.error_loading_education}</p>
            </div>
          ) : !apiEducation.length ? (
            <div className="empty_list">
              <p className="empty_list">{translations.education_empty}</p>
            </div>
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
            <div className="education_loading">
              <p>{translations.loading}</p>
            </div>
          ) : certificationsError ? (
            <div className="education_error">
              <p>{translations.error_loading_certification}</p>
            </div>
          ) : !apiCertifications.length ? (
            <div className="empty_list">
              <p>{translations.certifications_empty}</p>
            </div>
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
