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
      greeting: "Hello, I'm",
      role: "Software Engineer",
      description: "I build accessible, pixel-perfect, performant, and secure web applications.",
      cta: "Check out my work",
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
      greeting: "Hola, soy",
      role: "Ingeniero de Software",
      description: "Construyo aplicaciones web accesibles, perfectas en píxeles, de alto rendimiento y seguras.",
      cta: "Mira mi trabajo",
    },
    common: {
      downloadCV: "Descargar CV",
      toggleTheme: "Cambiar tema",
      language: "Idioma",
    },
  },
};

export type Language = keyof typeof translations;
