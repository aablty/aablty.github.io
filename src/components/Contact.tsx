import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { useLanguage } from "../contexts/LanguageContext";
import supabase from "../data/supabase";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.functions.invoke("send-message", {
      body: formData,
    });

    if (error) {
      console.error("Error sending message:", error);
    }
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-6 text-center border-b border-white/10 pb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-white/70 mb-12 text-center">
            {t.contact.description}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-6">
              {t.contact.contacts.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <DynamicIcon
                      name={item.icon}
                      className="size-6 mt-1 shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm text-white/50 mb-2">
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        className="text-lg hover:text-white/70 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6">
                <div className="flex items-center gap-4">
                  {t.contact.media.map((media, index) => (
                    <a
                      key={index}
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/20 hover:bg-white hover:text-black transition-all flex-1 flex items-center justify-center"
                    >
                      <DynamicIcon name={media.icon} className="size-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="border border-white/10 p-8">
              <h3 className="text-2xl mb-6">{t.contact.form.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-white/70 mb-2"
                  >
                    {t.contact.form.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-white/70 mb-2"
                  >
                    {t.contact.form.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/70 mb-2"
                  >
                    {t.contact.form.messagePlaceholder}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-3 px-6 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "..." : t.contact.form.sendButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
