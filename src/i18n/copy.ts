export interface UiCopy {
  skipToContent: string
  brandHome: string
  mainNav: string
  mobileNav: string
  openMenu: string
  closeMenu: string
  language: string
  nav: {
    inicio: string
    experiencia: string
    habilidades: string
    proyectos: string
    contacto: string
  }
  home: {
    downloadCv: string
    cvHref: string
    cvFileName: string
    contact: string
    architect: string
    about: string
    stack: string
    profileAlt: string
  }
  experience: {
    title: string
    lead: string
  }
  skills: {
    title: string
    lead: string
    technical: string
    education: string
    languages: string
    mapAlt: string
  }
  projects: {
    title: string
    lead: string
    confidential: string
    list: string
  }
  contact: {
    title: string
    lead: string
    formTitle: string
    name: string
    message: string
    send: string
    nameError: string
    messageError: string
    details: string
    location: string
    phone: string
    email: string
    networks: string
    whatsapp: string
  }
  footer: {
    blurb: string
    contact: string
    networks: string
    copyright: string
    role: string
  }
  whatsappIntro: string
}

export const copies: Record<'en' | 'es', UiCopy> = {
  en: {
    skipToContent: 'Skip to content',
    brandHome: 'CV.Dev — Home',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    nav: {
      inicio: 'Home',
      experiencia: 'Experience',
      habilidades: 'Skills',
      proyectos: 'Projects',
      contacto: 'Contact',
    },
    home: {
      downloadCv: 'Download CV',
      cvHref: '/cv-en.pdf',
      cvFileName: 'Carlos-Vicente-Tontaquimba-CV-EN.pdf',
      contact: 'Contact',
      architect: 'Systems Architect',
      about: 'About me',
      stack: 'Core Stack',
      profileAlt:
        'Professional portrait of a software engineer in a dark setting with blue lighting.',
    },
    experience: {
      title: 'Professional Experience',
      lead: 'More than 6 years leading the development and implementation of scalable architectures, microservices, and fullstack solutions for the public and private sectors.',
    },
    skills: {
      title: 'Technical Arsenal and Education',
      lead: 'Core skills and academic background for building scalable solutions.',
      technical: 'Technical skills',
      education: 'Education',
      languages: 'Languages',
      mapAlt: 'Dark digital map of Quito, Ecuador, with cyan accents.',
    },
    projects: {
      title: 'Architecture in Practice.',
      lead: 'A selection of recent projects that demonstrate scalable design patterns, microservice-oriented architectures, and high-performance solutions for enterprise environments.',
      confidential:
        'Source code and live demos cannot be published. These systems were built for public-sector institutions of the national government and remain confidential.',
      list: 'Featured projects',
    },
    contact: {
      title: "Let's connect",
      lead: 'Interested in discussing scalable architectures, microservices, or possible collaborations? Fill out the form and WhatsApp will open with your message ready to send.',
      formTitle: 'Send a Message',
      name: 'Name',
      message: 'Message',
      send: 'Send Message',
      nameError: 'Enter your name.',
      messageError: 'Write a message.',
      details: 'Contact Details',
      location: 'Location',
      phone: 'Phone',
      email: 'Email',
      networks: 'Professional Networks',
      whatsapp: 'Chat on WhatsApp',
    },
    footer: {
      blurb:
        'Scalable architectures and high-performance software solutions built with precision.',
      contact: 'Contact',
      networks: 'Networks',
      copyright:
        '© 2024 Carlos Vicente Tontaquimba Quinchuqui.',
      role: 'Full Stack Developer',
    },
    whatsappIntro: 'Hi Carlos, I am {name}.',
  },
  es: {
    skipToContent: 'Saltar al contenido',
    brandHome: 'CV.Dev — Inicio',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    nav: {
      inicio: 'Inicio',
      experiencia: 'Experiencia',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    },
    home: {
      downloadCv: 'Descargar CV',
      cvHref: '/cv-es.pdf',
      cvFileName: 'Carlos-Vicente-Tontaquimba-CV-ES.pdf',
      contact: 'Contactar',
      architect: 'Arquitecto de Sistemas',
      about: 'Sobre mí',
      stack: 'Stack Principal',
      profileAlt:
        'Retrato profesional de un ingeniero de software en un entorno oscuro con iluminación azul.',
    },
    experience: {
      title: 'Experiencia Profesional',
      lead: 'Trayectoria de más de 4 años liderando el desarrollo e implementación de arquitecturas escalables, microservicios y soluciones fullstack para el sector público y privado.',
    },
    skills: {
      title: 'Arsenal Técnico y Educación',
      lead: 'Competencias principales y formación académica para construir soluciones escalables.',
      technical: 'Habilidades técnicas',
      education: 'Educación',
      languages: 'Idiomas',
      mapAlt: 'Mapa digital oscuro de Quito, Ecuador, con acentos cian.',
    },
    projects: {
      title: 'Arquitectura en Práctica.',
      lead: 'Una selección de proyectos recientes que demuestran la aplicación de patrones de diseño escalables, arquitecturas orientadas a microservicios y soluciones de alto rendimiento para entornos empresariales.',
      confidential:
        'El código y las demos no se pueden publicar. Estos sistemas fueron desarrollados para entidades públicas del gobierno nacional y permanecen bajo confidencialidad.',
      list: 'Proyectos destacados',
    },
    contact: {
      title: 'Conectemos',
      lead: '¿Interesado en discutir arquitecturas escalables, microservicios o posibles colaboraciones? Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviarme.',
      formTitle: 'Enviar un Mensaje',
      name: 'Nombre',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      nameError: 'Ingresa tu nombre.',
      messageError: 'Escribe un mensaje.',
      details: 'Detalles de Contacto',
      location: 'Ubicación',
      phone: 'Teléfono',
      email: 'Email',
      networks: 'Redes Profesionales',
      whatsapp: 'Chatear por WhatsApp',
    },
    footer: {
      blurb:
        'Arquitecturas escalables y soluciones de software de alto rendimiento construidas con precisión.',
      contact: 'Contacto',
      networks: 'Redes',
      copyright:
        '© 2024 Carlos Vicente Tontaquimba Quinchuqui.',
      role: 'Full Stack Developer',
    },
    whatsappIntro: 'Hola Carlos, soy {name}.',
  },
}
