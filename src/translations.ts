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
    contact: {
      eyebrow: "Contact",
      title: "Let's build your next",
      titleHighlight: "backend project",
      description:
        "If you need an API, an integration, or technical support for an existing system, send me the context and I will reply by email.",
      directTitle: "Prefer direct email?",
      directDescription: "You can also reach me directly if you already have the scope in hand.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        subject: "Subject",
        subjectPlaceholder: "Project, integration, or consulting",
        message: "Message",
        messagePlaceholder: "Describe what you need, timeline, and the main technical challenge.",
        submit: "Send by email",
        helper: "The button opens your email app with the message ready to send.",
        success: "Your email app has been opened with the contact draft.",
        defaultSubject: "New contact from portfolio",
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
      hello: "Ol\u00e1, eu sou",
      role: "Desenvolvedor Backend com foco em TypeScript, Node.js e Express.",
      downloadCv: "Baixar CV",
      myWork: "Meus Projetos",
    },
    about: {
      yearsExperience: "Ano de\nExperi\u00eancia",
      title: "Desenvolvimento Backend\n& Arquitetura",
      description:
        "Atuo na constru\u00e7\u00e3o de APIs REST e integra\u00e7\u00f5es, trabalhando com bancos de dados SQL e NoSQL e cloud para entregar solu\u00e7\u00f5es est\u00e1veis e escal\u00e1veis. Tenho viv\u00eancia em ambiente de log\u00edstica e transportes, o que me d\u00e1 vis\u00e3o pr\u00e1tica de opera\u00e7\u00e3o e processos reais na hora de transformar regra de neg\u00f3cio em sistema.",
      techStack: "Minhas Tecnologias",
      hireMe: "Contrate-me!",
      aboutMe: "Sobre Mim",
    },
    expertise: {
      title: "Minha Expertise",
      subtitle: "Expertise",
      description: "\u00c1reas onde tenho experi\u00eancia s\u00f3lida e venho construindo projetos no dia a dia.",
      items: [
        {
          title: "Desenvolvimento de APIs",
          description:
            "APIs RESTful robustas e escal\u00e1veis constru\u00eddas com Node.js e Express, projetadas para alta performance e seguran\u00e7a.",
        },
        {
          title: "Design de Banco de Dados",
          description:
            "Experi\u00eancia com PostgreSQL para modelagem relacional e MongoDB para estruturas NoSQL flex\u00edveis, com foco em performance e integridade dos dados.",
        },
        {
          title: "Integra\u00e7\u00e3o de Sistemas",
          description:
            "Integra\u00e7\u00e3o de plataformas de terceiros, gateways de pagamento e sistemas legados em arquiteturas modernas.",
        },
        {
          title: "Solu\u00e7\u00f5es em Nuvem",
          description: "Implanta\u00e7\u00e3o e gerenciamento de aplica\u00e7\u00f5es escal\u00e1veis usando Docker e infraestrutura em nuvem.",
        },
      ],
    },
    projects: {
      title: "Meus Projetos",
      titleHighlight: "Recentes",
      description:
        "Aqui est\u00e3o alguns dos sistemas backend e APIs que desenvolvi recentemente. Foco em performance, escalabilidade e regras de neg\u00f3cio.",
      viewProject: "Ver Docs",
      code: "Reposit\u00f3rio",
      viewAll: "Ver Todos os Projetos",
      categories: {
        api: "API REST",
        integration: "Integra\u00e7\u00e3o",
        system: "Arquitetura de Sistema",
      },
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos tirar seu",
      titleHighlight: "projeto do papel",
      description:
        "Se voc\u00ea precisa de uma API, integra\u00e7\u00e3o ou suporte t\u00e9cnico em um sistema existente, me envie o contexto e eu retorno por email.",
      directTitle: "Prefere email direto?",
      directDescription: "Se o escopo j\u00e1 estiver claro, voc\u00ea tamb\u00e9m pode falar comigo diretamente.",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "Email",
        emailPlaceholder: "voce@empresa.com",
        subject: "Assunto",
        subjectPlaceholder: "Projeto, integra\u00e7\u00e3o ou consultoria",
        message: "Mensagem",
        messagePlaceholder: "Descreva o que voc\u00ea precisa, prazo e principal desafio t\u00e9cnico.",
        submit: "Enviar por email",
        helper: "O bot\u00e3o abre seu app de email com a mensagem pronta para envio.",
        success: "Seu app de email foi aberto com o rascunho do contato.",
        defaultSubject: "Novo contato pelo portfolio",
      },
    },
    footer: {
      rights: "Todos os direitos reservados.",
      description:
        "Desenvolvedor Backend especializado em APIs escal\u00e1veis e arquiteturas robustas com Node.js, TypeScript e tecnologias de nuvem.",
      quickLinks: "Links R\u00e1pidos",
      connect: "Conecte-se",
    },
  },
};
