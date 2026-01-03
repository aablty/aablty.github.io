import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  defaultTranslations,
  type Translation,
  type Language,
} from "../data/translations";
import supabase from "../data/supabase";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  isLoading: boolean;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] =
    useState<Record<Language, Translation>>(defaultTranslations);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error: supabaseError } = await supabase.functions.invoke(
          "get-portfolio-data",
          { method: "GET" }
        );

        if (supabaseError) throw supabaseError;

        if (data && data.en && data.ru) {
          setTranslations(data as Record<Language, Translation>);
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(
          err instanceof Error ? err.message : "Failed to load translations"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isLoading,
    error,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
