import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { name: 'Node.js', logo: '🟢' },
  { name: 'TypeScript', logo: 'TS' },
  { name: 'Express', logo: '🚂' },
  { name: 'SQL', logo: '🐘' },
  { name: 'NoSQL', logo: '🍃' },
  { name: 'Docker', logo: '🐳' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 lg:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 lg:mb-0"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src="https://picsum.photos/seed/workspace/800/600"
                alt="Workspace"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-zinc-900 p-4 sm:p-6 rounded-lg border-l-4 border-blue-600 shadow-xl max-w-[160px] sm:max-w-none">
              <div className="text-3xl sm:text-5xl font-bold text-white mb-1">06</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider whitespace-pre-line">
                {t.about.yearsExperience}
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 hidden sm:block">
               <div className="grid grid-cols-5 gap-2">
                 {[...Array(25)].map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-blue-500 rounded-full"></div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 lg:mt-0"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 whitespace-pre-line">
              {t.about.title}
            </h2>
            
            <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
              {t.about.description}
            </p>

            {/* Skills / Logos Grid */}
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm opacity-80">{t.about.techStack}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800 rounded hover:border-blue-500/50 transition-colors group"
                  >
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{skill.logo}</span>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors text-center">
                {t.about.hireMe}
              </button>
              <button className="px-8 py-3 border border-zinc-700 hover:border-white text-white font-medium rounded transition-colors text-center">
                {t.about.aboutMe}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
