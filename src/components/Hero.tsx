import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden bg-black">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none overflow-hidden">
        <svg
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full opacity-10 lg:opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 L100 0 L100 100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-900"
          />
          <path
            d="M20 20 L80 50 L20 80 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-blue-500"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="relative inline-block mb-4">
            <div className="bg-blue-600 text-white px-4 py-1 rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm font-medium text-sm relative z-10">
              {t.hero.hello}
            </div>
            <div className="absolute bottom-[-6px] left-4 w-3 h-3 bg-blue-600 transform rotate-45"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Wylham <br />
            <span className="text-gray-300">Dev</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">{t.hero.role}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 text-sm sm:text-base">
              {t.hero.downloadCv} <Download size={18} />
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 hover:border-white text-white font-medium rounded transition-all text-sm sm:text-base">
              {t.hero.myWork}
            </button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-full lg:min-h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-[350px] sm:max-w-[400px] aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img
              src="https://picsum.photos/seed/portfolio_hero/800/1000"
              alt="John Weary"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Decorative lines overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/30 rounded-full rotate-12 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/10 rounded-full -rotate-6 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-blue-500 border border-blue-500/30 rounded-full p-2 hidden sm:block"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
