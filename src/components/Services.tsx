import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Server, Database, Workflow, Cloud } from "lucide-react";

const icons = [Server, Database, Workflow, Cloud];

function deckAnimate(depth: number) {
  const isActive = depth === 0;
  const isBehind = depth > 0;
  const cd = Math.min(depth, 3);

  return {
    y:       isBehind ? cd * 11 : isActive ? 0   : 72,
    opacity: isBehind ? Math.max(0, 1 - cd * 0.32) : isActive ? 1 : 0,
    zIndex:  isActive ? 10 : isBehind ? Math.max(1, 10 - cd) : 0,
  };
}

export default function Services() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const totalItems = t.services.items.length;
      const clamped = Math.min(Math.max(latest, 0), 0.9999);
      setActiveIndex(Math.min(Math.floor(clamped * totalItems), totalItems - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress, t.services.items.length]);

  return (
    <section id="services" className="bg-zinc-950">
      <div ref={containerRef} className="relative" style={{ height: `${t.services.items.length * 100}vh` }}>

        {/* ══════════════════════════════════════════════════════════════
            MOBILE  (< lg)
        ══════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex flex-col justify-center gap-10 pt-16 pb-8 px-5 sm:px-8 max-w-2xl mx-auto w-full">

            {/* Header — no subtitle label */}
            <div className="text-center shrink-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.services.title}</h2>
            </div>

            {/*
              Deck container.
              PERFORMANCE NOTE: the motion.div is a plain transparent layer that only
              animates y + opacity (2 cheap GPU-composited properties).
              The visual card shell (bg, border, border-radius, overflow-hidden) lives in
              a non-animated inner div — this prevents the browser from repainting the
              rounded-corner mask on every frame.
            */}
            <div className="relative w-full shrink-0" style={{ height: 258 }}>
              {t.services.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                const anim = deckAnimate(activeIndex - index);

                return (
                  <motion.div
                    key={index}
                    className="absolute top-0 left-0 right-0"
                    style={{ height: 240, zIndex: anim.zIndex, willChange: "transform, opacity" }}
                    animate={{ y: anim.y, opacity: anim.opacity }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {/* Visual shell — static, handles overflow + border-radius */}
                    <div className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/60" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-black/50 p-3 rounded-2xl border border-blue-500/30 shrink-0">
                          <Icon size={26} className="text-blue-500" />
                        </div>
                        <span className="text-4xl font-bold text-zinc-800 leading-none">0{index + 1}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

                      <div className="mt-auto pt-3">
                        <span className="text-zinc-600 font-mono text-xs">
                          &lt;{item.title.replace(/\s+/g, "")} /&gt;
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            DESKTOP  (≥ lg)
        ══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex flex-col justify-center gap-8 pt-16 pb-8 container mx-auto px-8 xl:px-12">

            {/* Header — no subtitle label */}
            <div className="text-center shrink-0">
              <h2 className="text-3xl xl:text-4xl font-bold text-white">{t.services.title}</h2>
            </div>

            <div className="grid grid-cols-2 gap-10 xl:gap-16 h-[55vh] max-h-[520px]">

              {/* Left: service text list */}
              <div className="flex flex-col justify-between py-2">
                {t.services.items.map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.18,
                      x:       activeIndex === index ? 0 : -16,
                    }}
                    transition={{ duration: 0.35 }}
                    className="cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-3xl xl:text-4xl font-bold transition-colors duration-400 ${
                          activeIndex === index ? "text-blue-500" : "text-zinc-700"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-xl xl:text-2xl font-bold transition-colors duration-400 ${
                          activeIndex === index ? "text-white" : "text-zinc-600"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm xl:text-base max-w-sm leading-relaxed transition-colors duration-400 ${
                        activeIndex === index ? "text-gray-300" : "text-zinc-700"
                      }`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right: deck of icon cards — same split-layer technique as mobile */}
              <div className="relative">
                {t.services.items.map((_, index) => {
                  const Icon = icons[index % icons.length];
                  const anim = deckAnimate(activeIndex - index);

                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      style={{ zIndex: anim.zIndex, willChange: "transform, opacity" }}
                      animate={{ y: anim.y, opacity: anim.opacity }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      {/* Visual shell */}
                      <div className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/50" />
                        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-3xl rounded-full" />
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex items-center justify-center select-none">
                        <div className="text-center">
                          <div className="bg-black/50 p-8 rounded-full border border-blue-500/30 mb-5 inline-block shadow-2xl shadow-blue-900/20">
                            <Icon size={64} className="text-blue-500" />
                          </div>
                          <div className="text-zinc-500 font-mono text-sm">
                            &lt;{t.services.items[index].title.replace(/\s+/g, "")} /&gt;
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
