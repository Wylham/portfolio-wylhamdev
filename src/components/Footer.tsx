import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/wylham" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/wylhamdev" },
  { name: "Email", icon: Mail, href: "mailto:wylhamdev@gmail.com" },
];

const navLinks = [
  { key: "about" as const, href: "#about" },
  { key: "expertise" as const, href: "#expertise" },
  { key: "portfolio" as const, href: "#portfolio" },
  { key: "contact" as const, href: "#contact" },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-800/60 bg-black">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="mx-auto max-w-6xl">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 gap-10 border-b border-zinc-800/60 pb-10 text-center md:grid-cols-3 md:gap-12 lg:gap-16 md:text-left">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:justify-self-center"
            >
              <a href="#" onClick={scrollToTop} className="inline-block">
                <img src="/logos-w/LogoWhiteWDEV.svg" alt="WylhamDev Logo" className="h-6 w-auto" />
              </a>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-500 md:mx-0">
                {t.footer.description}
              </p>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:justify-self-center"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t.footer.quickLinks}</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-400"
                    >
                      <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-3" />
                      {t.nav[link.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:justify-self-center"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t.footer.connect}</h3>
              <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-600/10"
                  >
                    <social.icon
                      size={18}
                      className="text-gray-500 transition-colors duration-300 group-hover:text-blue-400"
                    />
                  </a>
                ))}
              </div>
              <a
                href="mailto:contato@wylhamdev.com"
                className="text-sm text-gray-500 transition-colors duration-200 hover:text-blue-400"
              >
                wylhamdev@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-center pt-8">
            <p className="text-center text-xs text-gray-600 sm:text-sm">
              &copy; {new Date().getFullYear()} Wylham Dev. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
