import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
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
    <footer className="relative bg-black border-t border-zinc-800/60">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      <div className="container mx-auto px-6 pt-12 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10 border-b border-zinc-800/60">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a href="#" onClick={scrollToTop} className="inline-block">
              <img src="/logos-w/LogoWhiteWDEV.svg" alt="WylhamDev Logo" className="h-6 w-auto" />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{t.footer.description}</p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-300" />
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
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{t.footer.connect}</h3>
            <div className="flex items-center gap-3 mb-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300"
                >
                  <social.icon
                    size={18}
                    className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
            <a
              href="mailto:contato@wylhamdev.com"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              wylhamdev@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Wylham Dev. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
