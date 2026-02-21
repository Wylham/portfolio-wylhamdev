import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10 text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl flex flex-col items-center"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-full max-w-fit flex flex-col">
              <span className="text-blue-400 font-mono text-lg md:text-xl tracking-wide mb-2 text-left">
                {t.hero.hello}
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white leading-none tracking-tighter text-center">
                Wylham
              </h1>
              <div className="relative inline-block mt-1 self-center">
                <div className="absolute bottom-0 left-0 w-full h-[55%] bg-blue-500"></div>
                <span className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold italic text-white leading-none tracking-tighter">
                  Dev
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed mx-auto">
            {t.hero.role}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-900/20 transition-all flex items-center gap-3 text-lg group">
              {t.hero.downloadCv}
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-700 hover:border-white text-white font-medium rounded-full transition-all text-lg hover:bg-white/5">
              {t.hero.myWork}
            </button>
          </div>
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
