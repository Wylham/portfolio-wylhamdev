import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-8 sm:pt-20 lg:pt-16 lg:pb-0 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_18%,rgba(0,0,0,0)_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-20 pointer-events-none [mask-image:radial-gradient(circle_at_center,_black,_transparent_78%)]"></div>
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-1/3 left-1/2 w-[520px] h-[520px] bg-cyan-400/6 rounded-full blur-[170px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-white/5 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10 text-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl flex flex-col items-center"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-full max-w-fit flex flex-col items-center">
              <span className="text-blue-400 font-mono text-base md:text-lg tracking-wide mb-2 text-left">
                {t.hero.hello}
              </span>
              <div className="relative inline-flex max-w-full justify-center">
                <div className="absolute inset-x-0 bottom-[10%] h-[42%] rounded-sm bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500"></div>
                <h1 className="relative whitespace-nowrap px-1 text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-semibold text-white leading-none tracking-tighter text-center">
                  <span>Wylham</span>
                  <span className="italic">Dev</span>
                </h1>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto">
            {t.hero.role}
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-900/20 transition-all flex items-center gap-3 text-base group">
              {t.hero.downloadCv}
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-gray-700 hover:border-white text-white font-medium rounded-full transition-all text-base hover:bg-white/5"
            >
              {t.hero.myWork}
            </a>
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
