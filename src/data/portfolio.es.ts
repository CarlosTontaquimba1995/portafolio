import type { PortfolioData } from './portfolio.types'

export const portfolioEs = {
  profile: {
    name: 'Carlos Vicente Tontaquimba Quinchuqui',
    title: 'Ingeniero de Software Fullstack',
    summary:
      'Ingeniero en Sistemas Computacionales y Desarrollador Fullstack con más de 4 años de experiencia especializada en el diseño, desarrollo e implementación de arquitecturas de microservicios y microfrontends escalables.',
    about:
      'Profesional orientado a metodologías ágiles, entrega continua y buenas prácticas de ingeniería de software. Sólido dominio del ecosistema Java y PHP, combinado con desarrollo frontend moderno en Angular. Experiencia demostrada liderando proyectos críticos en el sector público y privado, implementando soluciones distribuidas, mensajería asíncrona y entornos serverless.',
    relocation:
      'Disponibilidad para reubicación internacional bajo patrocinio de visa.',
    mainStack: [
      { label: 'Java', highlighted: true },
      { label: 'Spring Boot', highlighted: true },
      { label: 'Angular', highlighted: true },
      { label: 'Microservicios', highlighted: true },
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
      role: 'Analista de Sistemas de Información 2',
      organization: 'Consejo de la Judicatura (Ecuador)',
      period: 'Octubre 2025 – Actualidad',
      current: true,
      achievements: [
        'Diseño y ejecución de fases metodológicas para el ciclo de vida del software bajo arquitecturas robustas de Microservicios con Spring Boot y Microfrontends con Angular.',
        'Participación estratégica en planes operativos para la implementación y despliegue exitoso de nuevos módulos críticos del sistema judicial.',
      ],
      technologies: ['Spring Boot', 'Angular', 'Microservices'],
    },
    {
      id: 'mintel-consultor',
      role: 'Consultor Desarrollador Fullstack',
      organization: 'Ministerio de Telecomunicaciones (Ecuador)',
      contract: '(Contrato por Proyecto)',
      period: 'Julio 2025 – Septiembre 2025',
      achievements: [
        'Desarrollo y entrega llave en mano de microservicios escalables utilizando Laravel, optimizando la eficiencia de diversas aplicaciones ministeriales.',
        'Diseño y optimización de esquemas de bases de datos relacionales con PostgreSQL.',
        'Construcción de interfaces de usuario (UI) profesionales utilizando Laravel/Blade.',
      ],
      technologies: ['Laravel', 'PostgreSQL', 'Blade'],
    },
    {
      id: 'judicatura-experto',
      role: 'Experto en Proyectos de Desarrollo de Software',
      organization: 'Consejo de la Judicatura (Ecuador)',
      period: 'Febrero 2024 – Junio 2025',
      achievements: [
        'Responsable del mantenimiento evolutivo y desarrollo de microservicios corporativos basados en Java y Spring Boot.',
        'Diseño y desarrollo de interfaces de usuario modernas, dinámicas y responsive utilizando Angular 17.',
        'Despliegue y orquestación de microservicios mediante Spring Cloud, garantizando una arquitectura distribuida y segura en servidores RedHat Linux.',
        'Implementación de pruebas de carga, estrés y rendimiento automatizadas mediante JMeter, asegurando la alta disponibilidad del sistema.',
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
      role: 'Ingeniero de Software Fullstack',
      organization:
        'Ministerio de Inclusión Económica y Social (Ecuador)',
      contract: '(Contrato por Proyecto)',
      period: 'Agosto 2023 – Diciembre 2023',
      achievements: [
        'Mantenimiento correctivo y evolutivo del sistema crítico de convenios para los programas de protección social y desarrollo infantil.',
        'Desarrollo integral del sistema "COMITÉS", implementando microservicios en el backend y componentes modulares en Angular para el frontend.',
      ],
      technologies: ['Microservices', 'Angular'],
    },
    {
      id: 'seibe-analista',
      role: 'Analista de Desarrollo de Software',
      organization:
        'Secretaría de Educación Intercultural Bilingüe (Ecuador)',
      contract: '(Contrato por Proyecto)',
      period: 'Febrero 2023 – Julio 2023',
      achievements: [
        'Diseño, codificación e implementación estandarizada de requerimientos técnicos para los sistemas estratégicos KIPUJEA y CESLI.',
        'Ejecución de pruebas funcionales (unitarias y de integración) para asegurar la calidad y estabilidad del código antes del paso a producción.',
        'Elaboración de documentación técnica detallada de la arquitectura desarrollada.',
      ],
      technologies: ['Testing', 'Technical Documentation'],
    },
    {
      id: 'trade-backend',
      role: 'Desarrollador Backend Asociado',
      organization: 'TRADE EC (Ecuador)',
      period: 'Febrero 2022 – Febrero 2023',
      achievements: [
        'Desarrollo y optimización de microservicios eficientes utilizando PHP (Laravel) y Node.js (NestJS).',
        'Creación de servicios serverless utilizando AWS Lambda, reduciendo costes de infraestructura y tiempos de despliegue.',
        'Liderazgo técnico en la migración crítica de API Gateway desde Netflix Zuul (Java) hacia Amazon API Gateway.',
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
      role: 'Desarrollador de Aplicaciones Fullstack',
      organization: 'Fundación Latitude (Ecuador)',
      period: 'Enero 2019 – Enero 2022',
      achievements: [
        'Desarrollo end-to-end de sistemas de facturación electrónica y control de notas utilizando Spring Boot, Laravel y Angular.',
        'Aseguramiento de la calidad mediante auditorías de rendimiento y pruebas de estrés con la herramienta JMeter.',
      ],
      technologies: ['Spring Boot', 'Laravel', 'Angular', 'JMeter'],
    },
  ],
  skillGroups: [
    {
      id: 'languages',
      title: 'Lenguajes',
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
      title: 'Bases de Datos',
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
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Técnica del Norte',
    },
    {
      degree: 'Tecnológico en Comercio y Administración',
      institution: 'Instituto Tecnológico Otavalo (Informática)',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Kichwa', level: 'Fluido' },
    { name: 'Inglés', level: 'B1 Intermedio' },
  ],
  projects: [
    {
      id: 'judicial',
      title: 'Sistema de Gestión Judicial',
      description:
        'Plataforma integral desarrollada para la digitalización y seguimiento de expedientes legales. Implementación de una arquitectura hexagonal para separar la lógica de negocio de las integraciones de infraestructura, garantizando alta cohesión y bajo acoplamiento en un entorno transaccional crítico.',
      image: '/images/project-judicial.webp',
      imageAlt:
        'Representación digital de una arquitectura de sistema judicial con nodos y flujos de datos azules.',
      layout: 'featured',
      technologyGroups: [
        {
          items: ['Spring Boot', 'Angular 16', 'PostgreSQL', 'Docker'],
          highlighted: ['Docker'],
        },
      ],
      actions: [
        { label: 'Demo Privada', icon: 'visibility', emphasized: true },
        { label: 'Repositorio Cerrado', icon: 'lock' },
      ],
    },
    {
      id: 'dashboard',
      title: 'Panel de Control Frontend',
      description:
        'Dashboard analítico en tiempo real para monitorización de métricas de negocio. Enfoque en rendimiento y UX mediante carga diferida (lazy loading) y gestión de estado optimizada.',
      image: '/images/project-dashboard.webp',
      imageAlt:
        'Panel analítico oscuro con métricas y gráficos iluminados en tonos cian.',
      layout: 'compact',
      technologyGroups: [
        { items: ['React', 'TypeScript', 'Tailwind CSS'] },
      ],
      actions: [{ label: 'GitHub', icon: 'code' }],
    },
    {
      id: 'ecommerce',
      title: 'Plataforma E-commerce de Microservicios',
      description:
        'Arquitectura distribuida construida desde cero para soportar alta concurrencia. El sistema utiliza comunicación asíncrona mediante un bus de eventos y un API Gateway para orquestar servicios independientes (Inventario, Usuarios, Pagos). Desplegado en clústeres orquestados para garantizar resiliencia y auto-escalado.',
      image: '/images/project-microservices.webp',
      imageAlt:
        'Red tridimensional de microservicios conectados mediante rutas de datos azules.',
      layout: 'wide',
      technologyGroups: [
        {
          label: 'Stack Backend',
          items: ['Java 17', 'Spring Cloud', 'Apache Kafka'],
          highlighted: ['Apache Kafka'],
        },
        {
          label: 'Infraestructura',
          items: ['Kubernetes', 'Helm', 'MongoDB'],
          highlighted: ['Kubernetes'],
        },
      ],
      actions: [
        {
          label: 'Ver Diagrama de Arquitectura',
          icon: 'architecture',
          emphasized: true,
        },
        { label: 'Documentación API', icon: 'book' },
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
