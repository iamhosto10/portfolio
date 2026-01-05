import { User } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-12 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
      <div className="container mx-auto px-4 max-w-3xl text-left">
        <div className="flex items-center gap-2 mb-6">
          <User className="size-6 text-brand-icon" />
          <h2 className="text-2xl font-bold md:text-3xl text-foreground">
            Sobre mí
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-text-body">
          Soy un desarrollador apasionado por crear soluciones eficientes y escalables.
          Me especializo en el desarrollo frontend con tecnologías modernas como Next.js, React y Tailwind CSS,
          siempre buscando la mejor experiencia de usuario y un código limpio.
          Disfruto transformando ideas complejas en interfaces intuitivas y minimalistas.
        </p>
      </div>
    </section>
  );
}
