import type { PortfolioData } from './portfolio.types'

export const portfolioEn = {
  profile: {
    name: 'Carlos Vicente Tontaquimba Quinchuqui',
    title: 'Fullstack Software Engineer',
    summary:
      'Computer Systems Engineer and Fullstack Developer with more than 6 years of specialized experience designing, developing, and implementing scalable microservice and microfrontend architectures.',
    about:
      'Professional focused on agile methodologies, continuous delivery, and software engineering best practices. Strong command of the Java and PHP ecosystems, combined with modern frontend development in Angular. Proven experience leading critical projects in the public and private sectors, implementing distributed solutions, asynchronous messaging, and serverless environments.',
    relocation:
      'Available for international relocation under visa sponsorship in Spain.',
    mainStack: [
      { label: 'Java', highlighted: true },
      { label: 'Spring Boot', highlighted: true },
      { label: 'Angular', highlighted: true },
      { label: 'Microservices', highlighted: true },
      { label: 'PHP' },
      { label: 'Laravel' },
      { label: 'TypeScript' },
      { label: 'AWS Lambda' },
      { label: 'Apache Kafka' },
      { label: 'PostgreSQL' },
      { label: 'Docker' },
    ],
  },
  experiences: [
    {
      id: 'judicatura-analista-2',
      role: 'Information Systems Analyst 2',
      organization: 'Council of the Judiciary (Ecuador)',
      period: 'October 2025 – Present',
      current: true,
      achievements: [
        'Design and execution of methodological phases for the software lifecycle under robust Microservice architectures with Spring Boot and Microfrontends with Angular.',
        'Strategic participation in operational plans for the successful implementation and rollout of new critical modules in the judicial system.',
      ],
      technologies: ['Spring Boot', 'Angular', 'Microservices'],
    },
    {
      id: 'mintel-consultor',
      role: 'Fullstack Developer Consultant',
      organization: 'Ministry of Telecommunications (Ecuador)',
      contract: '(Project contract)',
      period: 'July 2025 – September 2025',
      achievements: [
        'End-to-end development and delivery of scalable microservices using Laravel, improving the efficiency of several ministerial applications.',
        'Design and optimization of relational database schemas with PostgreSQL.',
        'Construction of professional user interfaces using Laravel/Blade.',
      ],
      technologies: ['Laravel', 'PostgreSQL', 'Blade'],
    },
    {
      id: 'judicatura-experto',
      role: 'Software Development Projects Expert',
      organization: 'Council of the Judiciary (Ecuador)',
      period: 'February 2024 – June 2025',
      achievements: [
        'Responsible for evolutionary maintenance and development of corporate microservices based on Java and Spring Boot.',
        'Design and development of modern, dynamic, and responsive user interfaces using Angular 17.',
        'Deployment and orchestration of microservices with Spring Cloud, ensuring a distributed and secure architecture on RedHat Linux servers.',
        'Implementation of automated load, stress, and performance tests with JMeter, ensuring high system availability.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular 17',
        'Spring Cloud',
        'RedHat Linux',
        'JMeter',
      ],
    },
    {
      id: 'mies-fullstack',
      role: 'Fullstack Software Engineer',
      organization: 'Ministry of Economic and Social Inclusion (Ecuador)',
      contract: '(Project contract)',
      period: 'August 2023 – December 2023',
      achievements: [
        'Corrective and evolutionary maintenance of the critical agreements system for social protection and early childhood development programs.',
        'End-to-end development of the "COMITÉS" system, implementing backend microservices and modular Angular components for the frontend.',
      ],
      technologies: ['Microservices', 'Angular'],
    },
    {
      id: 'seibe-analista',
      role: 'Software Development Analyst',
      organization:
        'Secretariat of Intercultural Bilingual Education (Ecuador)',
      contract: '(Project contract)',
      period: 'February 2023 – July 2023',
      achievements: [
        'Design, coding, and standardized implementation of technical requirements for the strategic KIPUJEA and CESLI systems.',
        'Execution of functional tests (unit and integration) to ensure code quality and stability before production.',
        'Preparation of detailed technical documentation of the developed architecture.',
      ],
      technologies: ['Testing', 'Technical Documentation'],
    },
    {
      id: 'trade-backend',
      role: 'Associate Backend Developer',
      organization: 'TRADE EC (Ecuador)',
      period: 'February 2022 – February 2023',
      achievements: [
        'Development and optimization of efficient microservices using PHP (Laravel) and Node.js (NestJS).',
        'Creation of serverless services using AWS Lambda, reducing infrastructure costs and deployment times.',
        'Technical leadership of the critical API Gateway migration from Netflix Zuul (Java) to Amazon API Gateway.',
      ],
      technologies: [
        'PHP (Laravel)',
        'Node.js (NestJS)',
        'AWS Lambda',
        'API Gateway',
        'Java',
      ],
    },
    {
      id: 'latitude-fullstack',
      role: 'Fullstack Application Developer',
      organization: 'Latitude Foundation (Ecuador)',
      period: 'January 2019 – January 2022',
      achievements: [
        'End-to-end development of electronic invoicing and grade-control systems using Spring Boot, Laravel, and Angular.',
        'Quality assurance through performance audits and stress tests with JMeter.',
      ],
      technologies: ['Spring Boot', 'Laravel', 'Angular', 'JMeter'],
    },
  ],
  skillGroups: [
    {
      id: 'languages',
      title: 'Languages',
      icon: 'code',
      items: [
        { label: 'Java', icon: 'terminal', highlighted: true },
        { label: 'PHP', icon: 'terminal', highlighted: true },
        { label: 'JavaScript', icon: 'terminal' },
        { label: 'TypeScript', icon: 'terminal' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: 'dns',
      items: [
        {
          label: 'Spring Boot',
          icon: 'settings_input_component',
          highlighted: true,
        },
        {
          label: 'Spring Cloud',
          icon: 'cloud_queue',
          highlighted: true,
        },
        { label: 'Laravel (v11)', icon: 'api', highlighted: true },
        { label: 'NestJS', icon: 'api' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: 'web',
      items: [
        { label: 'Angular (v17)', icon: 'javascript', highlighted: true },
        { label: 'JSF', icon: 'html' },
        { label: 'Laravel Blade', icon: 'css' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: 'database',
      items: [
        { label: 'PostgreSQL', icon: 'storage', highlighted: true },
        { label: 'MySQL', icon: 'storage', highlighted: true },
      ],
    },
    {
      id: 'devops',
      title: 'Cloud & DevOps',
      icon: 'cloud_done',
      items: [
        { label: 'AWS Lambda', icon: 'functions', highlighted: true },
        { label: 'Kafka', icon: 'hub', highlighted: true },
        { label: 'Docker', icon: 'deployed_code', highlighted: true },
        { label: 'Git', icon: 'account_tree' },
        { label: 'RedHat Linux', icon: 'computer' },
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor’s Degree in Computer Systems Engineering',
      institution: 'Universidad Técnica del Norte',
    },
    {
      degree: 'Associate Degree in Commerce and Administration',
      institution: 'Instituto Tecnológico Otavalo (Informatics)',
    },
  ],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'Kichwa', level: 'Fluent' },
    { name: 'English', level: 'B1 Intermediate' },
  ],
  projects: [
    {
      id: 'judicial',
      title: 'Judicial Case Management System',
      description:
        'End-to-end platform built to digitize and track legal case files. A hexagonal architecture separates business logic from infrastructure integrations, ensuring high cohesion and low coupling in a critical transactional environment.',
      image: '/images/project-judicial.webp',
      imageAlt:
        'Digital representation of a judicial system architecture with blue nodes and data flows.',
      layout: 'featured',
      technologyGroups: [
        {
          items: ['Spring Boot', 'Angular 16', 'PostgreSQL', 'Docker'],
          highlighted: ['Docker'],
        },
      ],
      actions: [
        { label: 'Private Demo', icon: 'visibility', emphasized: true },
        { label: 'Closed Repository', icon: 'lock' },
      ],
    },
    {
      id: 'dashboard',
      title: 'Frontend Control Panel',
      description:
        'Real-time analytics dashboard for monitoring business metrics. Focused on performance and UX through lazy loading and optimized state management.',
      image: '/images/project-dashboard.webp',
      imageAlt:
        'Dark analytics panel with metrics and charts highlighted in cyan tones.',
      layout: 'compact',
      technologyGroups: [
        { items: ['React', 'TypeScript', 'Tailwind CSS'] },
      ],
      actions: [{ label: 'GitHub', icon: 'code' }],
    },
    {
      id: 'ecommerce',
      title: 'Microservices E-commerce Platform',
      description:
        'Distributed architecture built from scratch to support high concurrency. The system uses asynchronous communication through an event bus and an API Gateway to orchestrate independent services (Inventory, Users, Payments). Deployed on orchestrated clusters to ensure resilience and auto-scaling.',
      image: '/images/project-microservices.webp',
      imageAlt:
        'Three-dimensional network of microservices connected by blue data routes.',
      layout: 'wide',
      technologyGroups: [
        {
          label: 'Backend Stack',
          items: ['Java 17', 'Spring Cloud', 'Apache Kafka'],
          highlighted: ['Apache Kafka'],
        },
        {
          label: 'Infrastructure',
          items: ['Kubernetes', 'Helm', 'MongoDB'],
          highlighted: ['Kubernetes'],
        },
      ],
      actions: [
        {
          label: 'View Architecture Diagram',
          icon: 'architecture',
          emphasized: true,
        },
        { label: 'API Documentation', icon: 'book' },
      ],
    },
  ],
  contact: {
    email: 'carlos.tontaquimba1995@gmail.com',
    phoneDisplay: '+593 939618855',
    phoneHref: '+593939618855',
    whatsappHref: 'https://wa.me/593939618855',
    location: 'Quito, Ecuador',
    linkedin:
      'https://www.linkedin.com/in/carlos-vicente-tontaquimba-quinchuqui-3438b3384',
    github: 'https://github.com/CarlosTontaquimba1995',
  },
} satisfies PortfolioData
