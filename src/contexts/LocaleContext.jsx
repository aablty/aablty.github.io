// React
import { createContext, useContext, useState, useCallback } from "react";

// Locales
import en from "../assets/locales/en.json";
import ru from "../assets/locales/ru.json";

const LocaleContext = createContext();

const defaultLocale = "en";

const allTranslations = { en, ru };

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || defaultLocale
  );

  const switchLocale = (newLocale) => {
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  const translations =
    allTranslations[locale] || allTranslations[defaultLocale];

  /**
   * Get translation from API object based on current locale
   * @param {Object} translationObject - Object with ru and en properties
   * @returns {string} Translated text
   */
  const getTranslation = useCallback(
    (translationObject) => {
      if (!translationObject || typeof translationObject !== "object") {
        return "";
      }

      return (
        translationObject[locale] ||
        translationObject.en ||
        translationObject.ru ||
        ""
      );
    },
    [locale]
  );

  /**
   * Format year range for display
   * @param {string} startYear - Start year
   * @param {string} [endYear] - End year (optional)
   * @returns {string} Formatted year range
   */
  const formatYearRange = useCallback(
    (startYear, endYear) => {
      if (!startYear) return "";

      if (!endYear) {
        return `${startYear} - ${translations.present || "present"}`;
      }

      return `${startYear} - ${endYear}`;
    },
    [translations]
  );

  return (
    <LocaleContext.Provider
      value={{
        locale,
        translations,
        switchLocale,
        getTranslation,
        formatYearRange,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
