import { describe } from "node:test";
import { title } from "process";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      description:
        "Turning complex ideas into memorable, scalable web experiences.",
      ViewButton: "View Projects",
      ContactButton: "Contact Me",
    },
    aboutMeLanding: {
      title: "About Me",
      description:
        "I am a passionate developer focused on creating efficient and scalable solutions. I strive to write clean code, maintain solid architecture, and ensure the best possible user experience. I am always learning new technologies and looking for ways to improve my skills to deliver high-quality products.",
    },
    skillsLanding: {
      title: "My Skills",
      description:
        "Technologies I use to build scalable and efficient web applications.",
    },
    skillsData1: {
      title: "Frontend Modern",
    },
    skillsData2: {
      title: "Robust Backend ",
    },
    skillsData3: {
      title: "Cloud & DevOps",
    },
    callToAction: {
      projectInquiry: "Got a project in mind?",
      description:
        "I am available for new projects. Turn your ideas into reality with clean and scalable code.",
      sendEmail: "Send Email",
      downloadCV: "Download CV",
    },
    profileHeader: {
      location: "Medellin, Colombia",
      experience: "5+ years of experience",
    },
    myStoryCard: {
      title: "My Story",
      description1:
        "From my early days tinkering with code to becoming a frontend specialist, I've always been fascinated by the intersection of design and technology. The ability to bring static concepts to life through clean, performant code is what drives my passion every day.",
      description2:
        "I believe that great software is not just about writing lines of code, but about solving real problems and creating intuitive experiences. My journey has taught me that continuous learning and attention to detail are the keys to building products that users truly love.",
    },
    corePrinciples: {
      title: "Core Principles",
      corePrinciple1: {
        title: "Clean Code",
        description:
          "Writing code that is easy to read, easy to understand, and easy to maintain.",
      },
      corePrinciple2: {
        title: "Performance",
        description:
          "Obsessed with Core Web Vitals and creating lightning-fast user experiences.",
      },
      corePrinciple3: {
        title: "Scalability",
        description:
          "Building robust architectures designed to grow with the business needs.",
      },
      corePrinciple4: {
        title: "Teamwork",
        description:
          "Strong believer in Agile methodologies, code reviews, and open communication.",
      },
    },
    experienceSection: {
      title: "Experience",
      experience1: {
        role: "Senior Fullstack Developer",
        company: "Tech Corp Solutions",
        date: "2022 - Present",
        description:
          "Leading development of scalable web applications using modern technologies. Architecting solutions and mentoring junior developers to ensure code quality and best practices.",
        stack: ["Next.js", "TypeScript", "AWS"],
      },
      experience2: {
        role: "Frontend Developer",
        company: "Innovate Startup Inc",
        date: "2020 - 2022",
        description:
          "Developed responsive user interfaces and implemented complex state management solutions. Collaborated closely with UX/UI designers to improve user experience.",
        stack: ["React", "Redux", "SASS"],
      },
      experience3: {
        role: "Junior Web Developer",
        company: "Creative Digital Agency",
        date: "2018 - 2020",
        description:
          "Assisted in the development of client websites and maintained legacy codebases. Optimized website performance and ensured cross-browser compatibility.",
        stack: ["HTML5", "JavaScript", "PHP"],
      },
    },
    techStackExplorer: {
      title: "Tech Stack Explorer",
      description:
        "Dive into the technologies and tools I use to build modern web applications. Explore each category to learn more about my expertise.",
      tabs: ["Frontend", "Backend", "Tools "],
      frontendDescription: [
        "Component Architecture",
        "SSR & Performance",
        "Modern Styling",
        "Animations",
      ],
      backendDescription: [
        "Runtime Environment",
        "Relational Database",
        "Caching Strategy",
        "Containerization",
      ],
      toolsDescription: [
        "Version Control",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
    featuredProjects: {
      title: "Featured Projects",
      description:
        "A selection of projects that showcase my skills in building scalable and efficient web applications.",
      problem: "THE PROBLEM",
      demo: "View Demo",
      code: "View Code",
      role: "ROLE",
      duration: "DURATION",
      project1: {
        name: "Enterprise CRM",
        category: "SaaS B2B • FinTech",
        status: "production",
        role: "Lead Fullstack Developer",
        duration: "12 months",
        problem:
          "Legacy systems were causing a 40% efficiency drop in sales tracking and customer relationship management, leading to lost revenue and frustrated teams.",
        features: [
          "Real-time analytics dashboard",
          "Automated lead scoring system",
          "Role-based access control",
        ],
        stack: ["Next.js", "Postgres", "Redis"],
        viewButton: "View Project",
        codeButton: "View Code",
      },
      project2: {
        name: "AI Image Generator",
        category: "Generative AI • Creative Tools",
        status: "mvp",
        role: "Frontend Engineer",
        duration: "6 months",
        problem:
          "Creatives needed a rapid prototyping tool to generate high-fidelity assets without the steep learning curve of complex 3D modeling software.",
        features: [
          "Text-to-image synthesis",
          "Style transfer capabilities",
          "Cloud-based rendering",
        ],
        stack: ["React", "Python", "AWS Lambda"],
        viewButton: "View Project",
        codeButton: "View Code",
      },
      project3: {
        name: "E-commerce Platform",
        category: "Retail • Online Shopping",
        status: "research",
        role: "Backend Developer",
        duration: "8 months",
        problem:
          "Small businesses struggled to establish an online presence due to high costs and technical barriers, limiting their growth potential in the digital marketplace.",
        features: [
          "Customizable storefronts",
          "Integrated payment gateways",
          "Inventory management system",
        ],
        stack: ["Vue.js", "Django", "MySQL"],
        viewButton: "View Project",
        codeButton: "View Code",
      },
    },
    pastProjects: {
      title: "Past Projects",
      description: "A collection of other projects I've worked on over the years.",
      projects: [
        {
          name: "Social Media Dashboard",
          year: "2021",
          description: "A comprehensive dashboard for managing multiple social media accounts.",
          stack: ["React", "Firebase"],
        },
        {
          name: "Portfolio v1",
          year: "2020",
          description: "My first professional portfolio website.",
          stack: ["HTML", "CSS", "JS"],
        },
        {
          name: "Task Management App",
          year: "2019",
          description: "A simple productivity tool for personal task tracking.",
          stack: ["Vue.js", "LocalStorage"],
        },
      ],
    },
    contactForm: {
      title: "Let's Talk About Your Project",
      description:
        "I am available for new challenges. Tell me your idea and let's make it happen.",
      email: "Email",
      copyEmail: "Copy Email",
      directMessage: "Or send me a direct message",
      labelName: "Name",
      labelEmail: "Email",
      labelDetails: "Project Details",
      placeholderName: "Your Name",
      placeholderEmail: "you@email.com",
      placeholderDetails: "Tell me about your project...",
      sendButton: "Send Message",
    },
    common: {
      downloadCV: "Download CV",
      toggleTheme: "Toggle theme",
      language: "Language",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      description:
        "Transformo ideas complejas en experiencias web memorables y escalables.",
      ViewButton: "Ver Proyectos",
      ContactButton: "Contactar",
    },
    aboutMeLanding: {
      title: "Sobre mi",
      description:
        "Soy un desarrollador apasionado por crear soluciones eficientes y escalables. Me enfoco en escribir código limpio, mantener una arquitectura sólida y asegurar la mejor experiencia de usuario posible. Siempre estoy aprendiendo nuevas tecnologías y buscando formas de mejorar mis habilidades para entregar productos de alta calidad.",
    },
    skillsLanding: {
      title: "Mis Habilidades",
      description:
        "Tecnologías que utilizo para construir aplicaciones web escalables y eficientes.",
    },
    skillsData1: {
      title: "Frontend Moderno",
    },
    skillsData2: {
      title: "Backend Robusto",
    },
    skillsData3: {
      title: "Nube & DevOps",
    },
    callToAction: {
      projectInquiry: "¿Tienes un proyecto en mente?",
      description:
        "Estoy disponible para nuevos proyectos. Convierte tus ideas en realidad con código limpio y escalable.",
      sendEmail: "Enviar Correo",
      downloadCV: "Descargar CV",
    },
    profileHeader: {
      location: "Medellin, Colombia",
      experience: "5+ años de experiencia",
    },
    myStoryCard: {
      title: "Mi Historia",
      description1:
        "Desde mis primeros días experimentando con código hasta convertirme en un especialista en frontend, siempre me ha fascinado la intersección entre el diseño y la tecnología. La capacidad de dar vida a conceptos estáticos a través de código limpio y eficiente es lo que impulsa mi pasión cada día.",
      description2:
        "Creo que un gran software no se trata solo de escribir líneas de código, sino de resolver problemas reales y crear experiencias intuitivas. Mi trayectoria me ha enseñado que el aprendizaje continuo y la atención al detalle son las claves para construir productos que los usuarios realmente aman.",
    },
    corePrinciples: {
      title: "Principios Fundamentales",
      corePrinciple1: {
        title: "Código Limpio",
        description:
          "Escribir código que sea fácil de leer, entender y mantener.",
      },
      corePrinciple2: {
        title: "Rendimiento",
        description:
          "Obsesionado con Core Web Vitals y la creación de experiencias de usuario ultrarrápidas.",
      },
      corePrinciple3: {
        title: "Escalabilidad",
        description:
          "Construir arquitecturas robustas diseñadas para crecer con las necesidades del negocio.",
      },
      corePrinciple4: {
        title: "Trabajo en Equipo",
        description:
          "Firme creyente en las metodologías ágiles, las revisiones de código y la comunicación abierta.",
      },
    },
    experienceSection: {
      title: "Experience",
      experience1: {
        role: "Senior Fullstack Developer",
        company: "Tech Corp Solutions",
        date: "2022 - Present",
        description:
          "Liderando el desarrollo de aplicaciones web escalables utilizando tecnologías modernas. Arquitectando soluciones y mentoreando a desarrolladores junior para asegurar la calidad del código y las mejores prácticas.",
        stack: ["Next.js", "TypeScript", "AWS"],
      },
      experience2: {
        role: "Frontend Developer",
        company: "Innovate Startup Inc",
        date: "2020 - 2022",
        description:
          "Desarrollé interfaces de usuario responsivas e implementé soluciones complejas de gestión de estado. Colaboré estrechamente con diseñadores UX/UI para mejorar la experiencia del usuario.",
        stack: ["React", "Redux", "SASS"],
      },
      experience3: {
        role: "Junior Web Developer",
        company: "Creative Digital Agency",
        date: "2018 - 2020",
        description:
          "Asistí en el desarrollo de sitios web para clientes y mantuve bases de código heredadas. Optimicé el rendimiento del sitio web y aseguré la compatibilidad entre navegadores.",
        stack: ["HTML5", "JavaScript", "PHP"],
      },
    },
    techStackExplorer: {
      title: "Explorador de Stack Tecnológico",
      description:
        "Sumérgete en las tecnologías y herramientas que utilizo para construir aplicaciones web modernas. Explora cada categoría para aprender más sobre mi experiencia.",
      tabs: ["Frontend", "Backend", "Herramientas "],
      frontendDescription: [
        "Arquitectura de Componentes",
        "SSR y Rendimiento",
        "Estilado Moderno",
        "Animaciones",
      ],
      backendDescription: [
        "Entorno de Ejecución",
        "Base de Datos Relacional",
        "Estrategia de Caché",
        "Contenerización",
      ],
      toolsDescription: [
        "Control de Versiones",
        "Pipelines CI/CD",
        "Infraestructura como Código",
        "Monitoreo y Registro",
      ],
    },
    featuredProjects: {
      title: "Proyectos Destacados",
      description:
        "Una selección de proyectos que muestran mis habilidades en la construcción de aplicaciones web escalables y eficientes.",
      problem: "EL PROBLEMA",
      demo: "Ver Demo",
      code: "Ver Código",
      role: "ROL",
      duration: "DURACIÓN",
      project1: {
        name: "Enterprise CRM",
        category: "SaaS B2B • FinTech",
        status: "production",
        role: "Desarrollador Fullstack Principal",
        duration: "12 meses",
        problem:
          "Los sistemas heredados estaban causando una caída del 40% en la eficiencia del seguimiento de ventas y la gestión de relaciones con clientes, lo que llevaba a la pérdida de ingresos y equipos frustrados.",
        features: [
          "Panel de análisis en tiempo real",
          "Sistema automatizado de puntuación de leads",
          "Control de acceso basado en roles",
        ],
        stack: ["Next.js", "Postgres", "Redis"],
        viewButton: "Ver Proyecto",
        codeButton: "Ver Código",
      },
      project2: {
        name: "AI Image Generator",
        category: "Generative AI • Creative Tools",
        status: "mvp",
        role: "Ingeniero Frontend",
        duration: "6 meses",
        problem:
          "Los creativos necesitaban una herramienta de prototipado rápido para generar activos de alta fidelidad sin la curva de aprendizaje empinada del software complejo de modelado 3D.",
        features: [
          "Síntesis de texto a imagen",
          "Capacidades de transferencia de estilo",
          "Renderizado basado en la nube",
        ],
        stack: ["React", "Python", "AWS Lambda"],
        viewButton: "Ver Proyecto",
        codeButton: "Ver Código",
      },
      project3: {
        name: "E-commerce Platform",
        category: "Retail • Online Shopping",
        status: "research",
        role: "Desarrollador Backend",
        duration: "8 meses",
        problem:
          "Las pequeñas empresas luchaban por establecer una presencia en línea debido a los altos costos y las barreras técnicas, limitando su potencial de crecimiento en el mercado digital.",
        features: [
          "Tiendas personalizables",
          "Pasarelas de pago integradas",
          "Sistema de gestión de inventario",
        ],
        stack: ["Vue.js", "Django", "MySQL"],
        viewButton: "Ver Proyecto",
        codeButton: "Ver Código",
      },
    },
    pastProjects: {
      title: "Proyectos Pasados",
      description: "Una colección de otros proyectos en los que he trabajado a lo largo de los años.",
      projects: [
        {
          name: "Social Media Dashboard",
          year: "2021",
          description: "Un panel completo para gestionar múltiples cuentas de redes sociales.",
          stack: ["React", "Firebase"],
        },
        {
          name: "Portfolio v1",
          year: "2020",
          description: "Mi primer sitio web de portafolio profesional.",
          stack: ["HTML", "CSS", "JS"],
        },
        {
          name: "Task Management App",
          year: "2019",
          description: "Una herramienta sencilla de productividad para el seguimiento de tareas personales.",
          stack: ["Vue.js", "LocalStorage"],
        },
      ],
    },
    contactForm: {
      title: "Hablemos de tu proyecto",
      description:
        "Estoy disponible para nuevos retos. Cuéntame tu idea y la haremos realidad.",
      email: "Correo Electrónico",
      copyEmail: "Copiar Correo",
      directMessage: "O envíame un mensaje directo",
      labelName: "Nombre",
      labelEmail: "Correo Electrónico",
      labelDetails: "Detalles del Proyecto",
      placeholderName: "Tu Nombre",
      placeholderEmail: "tu@email.com",
      placeholderDetails: "Cuéntame sobre tu proyecto...",
      sendButton: "Enviar Mensaje",
    },
    common: {
      downloadCV: "Descargar CV",
      toggleTheme: "Cambiar tema",
      language: "Idioma",
    },
  },
};

export type Language = keyof typeof translations;
