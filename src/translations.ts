export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      about: "About Me",
      expertise: "Expertise",
      portfolio: "Projects",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      hireMe: "Hire Me!",
    },
    hero: {
      hello: "Hello, I am",
      role: "Backend Developer focused on TypeScript, Node.js, and Express.",
      downloadCv: "Download CV",
      myWork: "My Projects",
    },
    about: {
      yearsExperience: "Year of\nExperience",
      title: "Backend Development\n& Architecture",
      description:
        "I specialize in building REST APIs and integrations, working with SQL and NoSQL databases and cloud technologies to deliver stable and scalable solutions. I have experience in logistics and transportation environments, giving me practical insight into operations and real-world processes when transforming business rules into systems.",
      techStack: "My Tech Stack",
      hireMe: "Hire Me!",
      aboutMe: "About Me",
    },
    expertise: {
      title: "My Expertise",
      subtitle: "Expertise",
      description: "Areas where I have solid experience and keep building projects in day-to-day work.",
      items: [
        {
          title: "API Development",
          description:
            "Robust and scalable RESTful APIs built with Node.js and Express, designed for high performance and security.",
        },
        {
          title: "Database Design",
          description:
            "Experience with PostgreSQL for relational modeling and MongoDB for flexible NoSQL structures, focusing on performance and data integrity.",
        },
        {
          title: "System Integration",
          description:
            "Seamless integration of third-party platforms, payment gateways, and legacy systems into modern architectures.",
        },
        {
          title: "Cloud Solutions",
          description: "Deployment and management of scalable applications using Docker and cloud infrastructure.",
        },
      ],
    },
    projects: {
      title: "My Latest",
      titleHighlight: "APIs & Systems",
      description:
        "Here are some of the backend systems and APIs I've engineered recently. Focused on performance, scalability, and business logic.",
      viewProject: "View Docs",
      code: "Repository",
      viewAll: "View All Projects",
      categories: {
        api: "REST API",
        integration: "Integration",
        system: "System Architecture",
      },
    },
    footer: {
      rights: "All rights reserved.",
      description:
        "Backend Developer specializing in scalable APIs and robust architectures with Node.js, TypeScript, and cloud technologies.",
      quickLinks: "Quick Links",
      connect: "Connect",
    },
  },
  pt: {
    nav: {
      about: "Sobre Mim",
      expertise: "Expertise",
      portfolio: "Projetos",
      testimonials: "Depoimentos",
      blog: "Blog",
      contact: "Contato",
      hireMe: "Contrate-me!",
    },
    hero: {
      hello: "Olá, eu sou",
      role: "Desenvolvedor Backend com foco em TypeScript, Node.js e Express.",
      downloadCv: "Baixar CV",
      myWork: "Meus Projetos",
    },
    about: {
      yearsExperience: "Ano de\nExperiência",
      title: "Desenvolvimento Backend\n& Arquitetura",
      description:
        "Atuo na construção de APIs REST e integrações, trabalhando com bancos de dados SQL e NoSQL e cloud para entregar soluções estáveis e escaláveis. Tenho vivência em ambiente de logística e transportes, o que me dá visão prática de operação e processos reais na hora de transformar regra de negócio em sistema.",
      techStack: "Minhas Tecnologias",
      hireMe: "Contrate-me!",
      aboutMe: "Sobre Mim",
    },
    expertise: {
      title: "Minha Expertise",
      subtitle: "Expertise",
      description: "Áreas onde tenho experiência sólida e venho construindo projetos no dia a dia.",
      items: [
        {
          title: "Desenvolvimento de APIs",
          description:
            "APIs RESTful robustas e escaláveis construídas com Node.js e Express, projetadas para alta performance e segurança.",
        },
        {
          title: "Design de Banco de Dados",
          description:
            "Experiência com PostgreSQL para modelagem relacional e MongoDB para estruturas NoSQL flexíveis, com foco em performance e integridade dos dados.",
        },
        {
          title: "Integração de Sistemas",
          description:
            "Integração perfeita de plataformas de terceiros, gateways de pagamento e sistemas legados em arquiteturas modernas.",
        },
        {
          title: "Soluções em Nuvem",
          description: "Implantação e gerenciamento de aplicações escaláveis usando Docker e infraestrutura em nuvem.",
        },
      ],
    },
    projects: {
      title: "Meus Projetos",
      titleHighlight: "Recentes",
      description:
        "Aqui estão alguns dos sistemas backend e APIs que desenvolvi recentemente. Foco em performance, escalabilidade e regras de negócio.",
      viewProject: "Ver Docs",
      code: "Repositório",
      viewAll: "Ver Todos os Projetos",
      categories: {
        api: "API REST",
        integration: "Integração",
        system: "Arquitetura de Sistema",
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
      description:
        "Acredito que tecnologia boa é aquela que resolve problemas de forma simples e eficiente. É nisso que coloco minha energia: construir soluções bem feitas, com foco em clareza, performance e resultado.",
      quickLinks: "Links Rápidos",
      connect: "Conecte-se",
    },
  },
};
