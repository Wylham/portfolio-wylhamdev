import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  { name: "Node.js", logoSrc: "/tech-logos/node-js-svgrepo-com.svg" },
  { name: "TypeScript", logoSrc: "/tech-logos/typescript-svgrepo-com.svg" },
  { name: "MongoDB", logoSrc: "/tech-logos/mongodb-svgrepo-com.svg" },
  { name: "PostgreSQL", logoSrc: "/tech-logos/postgresql-svgrepo-com.svg" },
  { name: "AWS", logoSrc: "/tech-logos/awsicon.svg" },
  { name: "Express.js", logoSrc: "/tech-logos/express-svgrepo-com.svg" },
  { name: "Redis", logoSrc: "/tech-logos/redis-svgrepo-com.svg" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center py-16 lg:py-0 bg-black relative">
      <div className="container mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-6 lg:mb-0"
          >
            <div className="group relative z-10 rounded-lg overflow-hidden shadow-2xl ">
              <img
                src="/pcwiu.jpeg"
                alt="Workspace"
                className="w-full h-[300px] sm:h-[400px] lg:h-[45vh] max-h-[500px] object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-2 sm:left-6 z-20 bg-zinc-900 p-4 sm:p-5 rounded-lg border-l-4 border-blue-600 shadow-xl max-w-[140px] sm:max-w-none">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1">01</div>
              <div className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider whitespace-pre-line">
                {t.about.yearsExperience}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 lg:mt-0 lg:self-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 whitespace-pre-line">{t.about.title}</h2>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">{t.about.description}</p>

            {/* Skills / Logos */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3 tracking-wider text-sm">{t.about.techStack}</h3>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-6 pb-1">
                {skills.map((skill) => (
                  <img
                    key={skill.name}
                    src={skill.logoSrc}
                    alt={`Logo ${skill.name}`}
                    title={skill.name}
                    loading="lazy"
                    className="h-8 sm:h-10 w-auto min-w-[24px] object-contain"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors text-center text-sm sm:text-base">
                {t.about.hireMe}
              </button>
              <button className="px-6 py-2.5 border border-zinc-700 hover:border-white text-white font-medium rounded transition-colors text-center text-sm sm:text-base">
                {t.about.aboutMe}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
