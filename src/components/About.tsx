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
    <section id="about" className="pt-16 pb-20 lg:py-0 lg:min-h-screen lg:flex lg:items-center bg-black relative">
      <div className="container mx-auto px-6 w-full lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 lg:mb-0"
          >
            <div className="group relative z-10 rounded-lg overflow-hidden shadow-2xl ">
              <img
                src="/pcwiu.jpeg"
                alt="Workspace"
                className="w-full h-[360px] sm:h-[480px] lg:h-[50vh] object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-zinc-900 p-4 sm:p-6 rounded-lg border-l-4 border-blue-600 shadow-xl max-w-[160px] sm:max-w-none">
              <div className="text-3xl sm:text-5xl font-bold text-white mb-1">01</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider whitespace-pre-line">
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
            className="mt-8 lg:mt-0 lg:self-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 whitespace-pre-line">{t.about.title}</h2>

            <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">{t.about.description}</p>

            {/* Skills / Logos */}
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-4 tracking-wider text-sm">{t.about.techStack}</h3>
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 lg:gap-8 pb-1">
                {skills.map((skill) => (
                  <img
                    key={skill.name}
                    src={skill.logoSrc}
                    alt={`Logo ${skill.name}`}
                    title={skill.name}
                    loading="lazy"
                    className="h-9 sm:h-12 w-auto min-w-[28px] object-contain"
                  />
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
