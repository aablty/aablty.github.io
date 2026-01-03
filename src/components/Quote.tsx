import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { DynamicIcon } from "lucide-react/dynamic";

export function Quote() {
  const { t } = useLanguage();
  const [quote, setQuote] = useState<(typeof t.quotes)[0] | null>(null);

  useEffect(() => {
    const randomQuote = t.quotes[Math.floor(Math.random() * t.quotes.length)];
    setQuote(randomQuote);
  }, []);

  if (!quote) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <DynamicIcon name="quote" className="size-12 text-white/20" />
          </div>
          <blockquote className="space-y-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed italic">
              "{quote.text}"
            </p>
            <footer className="text-lg text-white/60">— {quote.author}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
