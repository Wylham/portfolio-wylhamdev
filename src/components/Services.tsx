import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Server, Database, Workflow, Cloud } from 'lucide-react';

const icons = [Server, Database, Workflow, Cloud];

export default function Services() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress within the component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const totalItems = t.services.items.length;
      const step = 1 / totalItems;
      const index = Math.min(
        Math.floor(latest / step),
        totalItems - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, t.services.items.length]);

  return (
    <section id="services" className="bg-zinc-950 relative">
      {/* 
        The container needs to be tall enough to scroll through.
        Height = 100vh (sticky view) + (N-1) * 100vh (scroll distance)
        We'll use a multiplier to control scroll speed.
      */}
      <div 
        ref={containerRef} 
        className="relative"
        style={{ height: `${t.services.items.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            
            {/* Section Header */}
            <div className="absolute top-10 left-6 right-6 z-20">
               <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-center"
               >
                 <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">{t.services.subtitle}</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.services.title}</h2>
               </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center h-full pt-20">
              
              {/* Left: Content List */}
              <div className="relative z-10 flex flex-col justify-center space-y-12 lg:space-y-24">
                {t.services.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.2, x: -20 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0.2,
                      x: activeIndex === index ? 0 : -20,
                      scale: activeIndex === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.5 }}
                    className={`cursor-pointer transition-colors duration-500 ${activeIndex === index ? 'block' : 'hidden lg:block'}`}
                    onClick={() => {
                        // Optional: Scroll to this section on click
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-4xl font-bold ${activeIndex === index ? 'text-blue-500' : 'text-zinc-700'}`}>
                        0{index + 1}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-bold ${activeIndex === index ? 'text-white' : 'text-zinc-600'}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-lg max-w-md ${activeIndex === index ? 'text-gray-300' : 'text-zinc-700'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right: Visuals (Sticky/Parallax) */}
              <div className="relative h-[300px] lg:h-[500px] w-full hidden lg:block">
                {t.services.items.map((_, index) => {
                   const Icon = icons[index % icons.length];
                   return (
                    <motion.div
                      key={index}
                      className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center"
                      initial={{ opacity: 0, y: 50, rotate: 5 }}
                      animate={{ 
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 50,
                        rotate: activeIndex === index ? 0 : 5,
                        zIndex: activeIndex === index ? 10 : 0
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* Decorative Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/50"></div>
                      <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                      
                      {/* Icon/Visual */}
                      <div className="relative z-10 text-center">
                        <div className="bg-black/50 p-8 rounded-full border border-blue-500/30 mb-6 inline-block shadow-2xl shadow-blue-900/20">
                          <Icon size={64} className="text-blue-500" />
                        </div>
                        <div className="text-zinc-500 font-mono text-sm">
                          &lt;{t.services.items[index].title.replace(/\s+/g, '')} /&gt;
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
