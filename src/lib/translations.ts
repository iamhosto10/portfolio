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
        role: "Mid-Senior FullStack Developer (FrontEnd Heavy)",
        company: "Seeed",
        date: "2024 - Present",
        description:
          "- Developed high-performance web applications using React and Next.js, improving Core Web Vitals and SEO performance. \n- Built scalable and reusable component architectures, reducing development time across features. \n - Integrated frontend systems with CMS-driven backends, enabling dynamic content delivery and improved UX. \n - Collaborated with cross-functional teams in a distributed environment.",
        stack: ["Next.js", "TypeScript", "CMS", "React"],
      },
      experience2: {
        role: "Mid - Senior FullStack Web and Mobile Developer",
        company: "Bitpoint",
        date: "2022-2024",
        description:
          "- Led development of a cryptocurrency exchange mobile app (iOS & Android) using React Native + TypeScript (Expo). \n - Delivered a real-time operational dashboard using React.js, improving internal workflows and decision-making. - Integrated frontend with Node.js backend services, ensuring high availability for fintech operations. \n  - Participated in cloud deployments (AWS/GCP), contributing to scalable and reliable infrastructure.",
        stack: [
          "React",
          "React Native",
          "Node.js",
          "AWS",
          "Express",
          "TypeScript",
          "Redux",
          "SASS",
        ],
      },
      experience3: {
        role: "Frontend Developer",
        company: "Crisnica",
        date: "2020 - 2022",
        description:
          "- Redesigned e-commerce UI based on user behavior analytics, improving user engagement. \n - Implemented frontend features aligned with business conversion goals.",
        stack: ["React", "TypeScript", "node.js", "Redux"],
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
        "UX and UI Design",
        "CI/CD Pipelines",
        "Monitoring & Deployment",
      ],
    },
    featuredProjects: {
      title: "Featured Projects",
      description:
        "A selection of projects that showcase my skills in building scalable and efficient web applications.",
      problem: "THE PROBLEM",
      demo: "View Demo",
      code: "View Code",
      project1: {
        name: "Monopolombiano",
        category: "Jamstack • Finance Tools",
        status: "production",
        problem:
          "Tech professionals in the Colombian ecosystem spend too much time navigating scattered news portals to stay updated on startups, investments, and local regulations. There is a lack of a centralized, curated source that filters out the noise and delivers high-value information efficiently.",
        features: [
          "Automated Web Scraping",
          "Smart Categorization",
          "AI-Powered Summaries",
        ],
        stack: ["Next.js", "Sanity", "Typescript", "Redux", "TailwindCSS"],

        viewButtonLink: "https://monopolombiano.com/",

        viewButton: "View Project",
        codeButton: "View Code",
        CodeButtonLink: "https://github.com/iamhosto10/blog-finance",
      },
      project2: {
        name: "Course Platform API",
        category: "Backend Development • RESTful API",
        status: "mvp",
        problem:
          "Small educational institutions often lack accessible digital tools to manage the relationship between teachers, students, and content. A scalable solution was needed to centralize course creation, lesson structuring, and the enrollment process in a secure and organized manner.",
        features: [
          "Role-Based Access Control (RBAC)",
          "Interactive Documentation",
          "Data Integrity",
        ],
        stack: [
          "Node.js",
          "Express",
          "TypeScript",
          "MongoDB/Mongoose",
          "JWT/Bcrypt",
        ],
        viewButtonLink: "https://backend-courses-node.onrender.com/api/docs/",
        CodeButtonLink: "https://github.com/iamhosto10/backend-courses-node",

        viewButton: "View Project",
        codeButton: "View Code",
      },
      project3: {
        name: "E-commerce Platform",
        category: "Retail • Online Shopping",
        status: "research",
        problem:
          "Small businesses struggled to establish an online presence due to high costs and technical barriers, limiting their growth potential in the digital marketplace.",
        features: [
          "Customizable storefronts",
          "Integrated payment gateways",
          "Inventory management system",
        ],
        stack: ["Vue.js", "Django", "MySQL"],
        viewButtonLink: "https://monopolombiano.com/",
        CodeButtonLink: "https://github.com/iamhosto10/blog-finance",
        viewButton: "View Project",
        codeButton: "View Code",
      },
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
        role: "Mid-Senior FullStack Developer (FrontEnd Heavy)",
        company: "Seeed",
        date: "2024 - Present",
        description:
          "Funciones: \n \n - Diseñar y desarrollar plataformas web centradas en la experiencia del usuario. \n - Implementar tecnologías como React, Node.js y TailwindCSS para mejorar la velocidad de carga y usabilidad.\n - Integrar APIs y bases de datos para optimizar la funcionalidad backend y frontend. \n \n Responsabilidades: \n \n - Crear soluciones personalizadas para automatización y comercio electrónico. \n - Liderar la integración de herramientas para negocios en transición a la nube con Google Cloud. \n - Priorizar la innovación y la mejora continua en los proyectos.",
        stack: ["Next.js", "TypeScript", "CMS", "React"],
      },
      experience2: {
        role: "Mid - Senior FullStack Web and Mobile Developer",
        company: "Bitpoint",
        date: "2022-2024",
        description:
          "Funciones: \n \n - Desarrollo de aplicación móvil destinada al intercambio de criptomonedas utilizando TypeScript, React Native con expo. \n - Desarrollo Backend con node.js y mongo para almacenar los datos en la nube de AWS. \n - Desarrollo Dashboard para manejo y control de las operaciones de la empresa utilizando React.js con Typescript \n \n Logros: \n \n - Implemente un sistema dinámico para una mejor visualización de los datos de la empresa. \n - Aumenta la eficiencia para el manejo y control de las operaciones por medio de una interfaz muy intuitiva y rápida  para poder realizar lo que se necesite.",
        stack: [
          "React",
          "React Native",
          "Node.js",
          "AWS",
          "Express",
          "TypeScript",
          "Redux",
          "SASS",
        ],
      },
      experience3: {
        role: "Frontend Developer",
        company: "Crisnica",
        date: "2020 - 2022",
        description:
          "Funciones: \n \n - Coordinar y realizar seguimiento a todas las funcionalidades de la página web como el carrito de compras, el sistema de pago y envío de correo electrónico. \n - Modificar el diseño UI de la tienda en línea teniendo en cuenta el patrón de comportamiento de los usuarios \n - Realizar integraciones con plataformas de terceros, consumiendo API para mostrar diferentes datos en la página \n web \n \n Logros:\n \n - Implemente un sistema dinámico para una mejor visualización de las imágenes de cada producto para losusuarios",
        stack: ["React", "TypeScript", "node.js", "Redux"],
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
        "Diseño UI y UX",
        "Pipelines CI/CD",
        "Despliegue y Monitoreo",
      ],
    },
    featuredProjects: {
      title: "Proyectos Destacados",
      description:
        "Una selección de proyectos que muestran mis habilidades en la construcción de aplicaciones web escalables y eficientes.",
      problem: "EL PROBLEMA",
      demo: "Ver Demo",
      code: "Ver Código",
      project1: {
        name: "Monopolombiano",
        category: "Jamstack • Finance Tools",
        status: "production",
        problem:
          "Monopolombiano es una plataforma educativa enfocada en el ecosistema financiero de Colombia. Su misión es desmitificar el mundo de las finanzas y hacerlo accesible para todos. A través de artículos detallados, noticias de actualidad, y herramientas interactivas como calculadoras de presupuesto y conversores de divisas.",
        features: [
          "Web Scraping Automatizado",
          "Categorización Inteligente",
          "Resúmenes Generados por IA",
        ],
        stack: ["Next.js", "Sanity", "Typescript", "Redux", "TailwindCSS"],
        viewButton: "Ver Proyecto",
        viewButtonLink: "https://monopolombiano.com/",
        codeButton: "Ver Código",
        CodeButtonLink: "https://github.com/iamhosto10/blog-finance",
      },
      project2: {
        name: "Course Platform API",
        category: "Backend Development • RESTful API",
        status: "mvp",
        problem:
          "Las instituciones educativas pequeñas a menudo carecen de herramientas digitales accesibles para gestionar la relación entre profesores, alumnos y contenido. Se necesitaba una solución escalable que centralizara la creación de cursos, lecciones y el proceso de matrícula de forma segura y organizada.",
        features: [
          "Control de Acceso (RBAC)",
          "Documentación Interactiva",
          "Integridad de Datos",
        ],
        stack: [
          "Node.js",
          "Express",
          "TypeScript",
          "MongoDB/Mongoose",
          "JWT/Bcrypt",
        ],
        viewButtonLink: "https://backend-courses-node.onrender.com/api/docs/",
        CodeButtonLink: "https://github.com/iamhosto10/backend-courses-node",
        viewButton: "Ver Proyecto",
        codeButton: "Ver Código",
      },
      project3: {
        name: "E-commerce Platform",
        category: "Retail • Online Shopping",
        status: "research",
        problem:
          "Las pequeñas empresas luchaban por establecer una presencia en línea debido a los altos costos y las barreras técnicas, limitando su potencial de crecimiento en el mercado digital.",
        features: [
          "Tiendas personalizables",
          "Pasarelas de pago integradas",
          "Sistema de gestión de inventario",
        ],
        stack: ["Vue.js", "Django", "MySQL"],
        viewButtonLink: "https://monopolombiano.com/",
        CodeButtonLink: "https://github.com/iamhosto10/blog-finance",
        viewButton: "Ver Proyecto",
        codeButton: "Ver Código",
      },
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
