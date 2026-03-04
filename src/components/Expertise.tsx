import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Server, Database, Workflow, Cloud } from "lucide-react";

const icons = [Server, Database, Workflow, Cloud];

const expertiseImages = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
];

const CARD_TRANSITION = { type: "spring", stiffness: 260, damping: 20 };

function deckAnimate(depth: number) {
  if (depth === 0) {
    return { y: 0, scale: 1, opacity: 1, zIndex: 10 };
  }
  if (depth > 0) {
    const cd = Math.min(depth, 4);
    return {
      y: -(cd * 18),
      scale: 1 - cd * 0.04,
      opacity: Math.max(0, 1 - cd * 0.22),
      zIndex: 10 - cd,
    };
  }
  return { y: 100, scale: 0.95, opacity: 0, zIndex: 0 };
}

export default function Expertise() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = t.expertise.items.length;
    const clamped = Math.min(Math.max(latest, 0), 0.9999);
    setActiveIndex(Math.min(Math.floor(clamped * total), total - 1));
  });

  return (
    <section id="expertise" className="bg-zinc-950">
      <div ref={containerRef} className="relative" style={{ height: `${t.expertise.items.length * 100}vh` }}>
        <div className="lg:hidden sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex flex-col justify-center px-5 sm:px-8 max-w-lg mx-auto w-full pt-16">
            <div className="shrink-0 mb-12 sm:mb-16 relative z-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{t.expertise.title}</h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">{t.expertise.description}</p>
            </div>

            <div
              className="relative w-full shrink-0"
              style={{ height: "40vh", maxHeight: "400px", minHeight: "280px" }}
            >
              {t.expertise.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                const anim = deckAnimate(activeIndex - index);

                return (
                  <motion.div
                    key={index}
                    className="absolute top-0 left-0 right-0 h-full"
                    style={{ zIndex: anim.zIndex }}
                    animate={{ y: anim.y, opacity: anim.opacity, scale: anim.scale }}
                    transition={CARD_TRANSITION}
                  >
                    <div className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-xl shadow-black/30 pointer-events-none" />
                    <div className="relative h-full rounded-2xl overflow-hidden flex flex-col">
                      <div className="relative h-[45%] shrink-0">
                        <img
                          src={expertiseImages[index]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm p-2 rounded-xl border border-blue-500/20">
                          <Icon size={16} className="text-blue-400" />
                        </div>
                      </div>
                      <div className="p-4 flex-grow overflow-hidden">
                        <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{item.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden lg:block sticky top-0 h-screen overflow-hidden">
          <div className="h-full flex items-center container mx-auto px-8 xl:px-12 pt-20">
            <div className="grid grid-cols-[2fr_3fr] gap-10 xl:gap-16 w-full">
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-3">{t.expertise.title}</h2>
                  <p className="text-gray-500 text-sm xl:text-base max-w-md">{t.expertise.description}</p>
                </div>
                <div className="space-y-4">
                  {t.expertise.items.map((item, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.2,
                        x: activeIndex === index ? 0 : -10,
                      }}
                      transition={CARD_TRANSITION}
                      className="cursor-default"
                    >
                      <h3
                        className={`text-base xl:text-lg font-bold mb-1 transition-colors duration-200 ${
                          activeIndex === index ? "text-white" : "text-zinc-600"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs xl:text-sm max-w-sm leading-relaxed transition-colors duration-200 ${
                          activeIndex === index ? "text-gray-400" : "text-zinc-800"
                        }`}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full" style={{ height: "min(500px, 60vh)" }}>
                  {t.expertise.items.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    const anim = deckAnimate(activeIndex - index);

                    return (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        style={{ zIndex: anim.zIndex }}
                        animate={{ y: anim.y, opacity: anim.opacity, scale: anim.scale }}
                        transition={CARD_TRANSITION}
                      >
                        <div className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40 pointer-events-none" />
                        <div className="relative h-full rounded-2xl overflow-hidden">
                          <div className="relative h-[65%]">
                            <img
                              src={expertiseImages[index]}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-black/20" />
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md p-3 rounded-xl border border-blue-500/20 shadow-lg">
                              <Icon size={24} className="text-blue-400" />
                            </div>
                          </div>
                          <div className="p-5 xl:p-6">
                            <h3 className="text-lg xl:text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm xl:text-base leading-relaxed">{item.description}</p>
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
      </div>
    </section>
  );
}
