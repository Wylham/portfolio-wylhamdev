import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Logistics API Core',
      category: t.projects.categories.api,
      image: 'https://picsum.photos/seed/backend1/600/400',
      tags: ['Node.js', 'Express', 'PostgreSQL'],
    },
    {
      title: 'Real-time Tracking System',
      category: t.projects.categories.system,
      image: 'https://picsum.photos/seed/backend2/600/400',
      tags: ['TypeScript', 'WebSocket', 'Redis'],
    },
    {
      title: 'Payment Gateway Integration',
      category: t.projects.categories.integration,
      image: 'https://picsum.photos/seed/backend3/600/400',
      tags: ['Node.js', 'Stripe API', 'MongoDB'],
    },
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            {t.projects.title} <span className="text-blue-500">{t.projects.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            {t.projects.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-zinc-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-500 transition-colors">
                    {t.projects.viewProject} <ExternalLink size={16} />
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    {t.projects.code} <Github size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="px-8 py-3 border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white font-bold rounded transition-colors">
             {t.projects.viewAll}
           </button>
        </div>
      </div>
    </section>
  );
}
