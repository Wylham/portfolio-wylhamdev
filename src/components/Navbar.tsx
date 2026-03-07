import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToSection } from "../utils/scrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.expertise, href: "#expertise" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty("--site-header-height", `${nav.getBoundingClientRect().height}px`);
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(nav);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(href);
    }, 280);
  };

  return (
    <nav
      ref={navRef}
      data-site-header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src="/logos-w/LogoWhiteWDEV.svg" alt="WylhamDev Logo" className="h-6 md:h-8 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors"
          >
            {t.nav.hireMe}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>

          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black overflow-hidden mt-4"
          >
            <div className="flex flex-col px-6 pt-8 pb-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-500 font-medium"
                  onClick={(e) => handleMobileNav(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-block text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg"
                onClick={(e) => handleMobileNav(e, "#contact")}
              >
                {t.nav.hireMe}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
