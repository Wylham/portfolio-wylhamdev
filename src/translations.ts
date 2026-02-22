export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      about: "About Me",
      services: "Services",
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
    services: {
      title: "My Expertise",
      subtitle: "Services",
      description: "Comprehensive backend solutions tailored to your business needs.",
      items: [
        {
          title: "API Development",
          description:
            "Robust and scalable RESTful APIs built with Node.js and Express, designed for high performance and security.",
        },
        {
          title: "Database Design",
          description:
            "Efficient SQL and NoSQL database architectures ensuring data integrity, speed, and scalability.",
        },
        {
          title: "System Integration",
          description:
            "Seamless integration of third-party services, payment gateways, and legacy systems into modern architectures.",
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
    },
  },
  pt: {
    nav: {
      about: "Sobre Mim",
      services: "Serviços",
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
    services: {
      title: "Minha Expertise",
      subtitle: "Serviços",
      description: "Soluções backend abrangentes e adaptadas às necessidades do seu negócio.",
      items: [
        {
          title: "Desenvolvimento de APIs",
          description:
            "APIs RESTful robustas e escaláveis construídas com Node.js e Express, projetadas para alta performance e segurança.",
        },
        {
          title: "Design de Banco de Dados",
          description:
            "Arquiteturas de banco de dados SQL e NoSQL eficientes garantindo integridade de dados, velocidade e escalabilidade.",
        },
        {
          title: "Integração de Sistemas",
          description:
            "Integração perfeita de serviços de terceiros, gateways de pagamento e sistemas legados em arquiteturas modernas.",
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
    },
  },
};
