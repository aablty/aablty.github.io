import { createContext, useContext, useState } from "react";

import en from "@/assets/locales/en.json";
import ru from "@/assets/locales/ru.json";

const LocaleContext = createContext();

const defaultLocale = "en";

const allTranslations = { en, ru };

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || defaultLocale
  );
  const [translations, setTranslations] = useState(allTranslations[locale]);

  const switchLocale = (newLocale) => {
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
    setTranslations(allTranslations[newLocale]);
  };

  return (
    <LocaleContext.Provider value={{ locale, translations, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
