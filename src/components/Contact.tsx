import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactEmail = "wylhamdev@gmail.com";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formData.subject.trim() || t.contact.form.defaultSubject;
    const body = [
      `${t.contact.form.name}: ${formData.name}`,
      `${t.contact.form.email}: ${formData.email}`,
      "",
      `${t.contact.form.message}:`,
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-20 scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),transparent_30%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                <Sparkles size={14} />
                {t.contact.eyebrow}
              </div>

              <h2 className="max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {t.contact.title} <span className="text-blue-500">{t.contact.titleHighlight}</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                {t.contact.description}
              </p>

              <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/70 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.contact.directTitle}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-400">{t.contact.directDescription}</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-blue-950/10 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-200">{t.contact.form.name}</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-200">{t.contact.form.email}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500"
                  required
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-gray-200">{t.contact.form.subject}</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.contact.form.subjectPlaceholder}
                className="w-full rounded-2xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-gray-200">{t.contact.form.message}</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
                rows={6}
                className="w-full resize-none rounded-3xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500"
                required
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p aria-live="polite" className="text-sm text-gray-500">
                {submitted ? t.contact.form.success : t.contact.form.helper}
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                {t.contact.form.submit}
                <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
