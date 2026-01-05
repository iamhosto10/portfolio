import { User } from "lucide-react";

export function AboutMe() {
  return (
    <div className="bg-secondary/50">
      <section className="mx-auto max-w-6xl px-4">
        <div className="py-12 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
            <div className="max-w-3xl text-left">
              <div className="mb-6 flex items-center gap-2">
                <User className="size-6 text-about-icon" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Sobre mí
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-about-text-body ">
                Soy un desarrollador apasionado por crear soluciones eficientes
                y escalables. Me enfoco en escribir código limpio, mantener una
                arquitectura sólida y asegurar la mejor experiencia de usuario
                posible. Siempre estoy aprendiendo nuevas tecnologías y buscando
                formas de mejorar mis habilidades para entregar productos de
                alta calidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
