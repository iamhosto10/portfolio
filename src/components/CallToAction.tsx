import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-12 md:py-20 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-700 delay-100">
      <div className="max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Estoy disponible para nuevos proyectos. Convierte tus ideas en realidad con código limpio y escalable.
        </p>
        <Button
          size="lg"
          className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
        >
          <Mail className="mr-2 size-4" />
          Enviar Correo
        </Button>
      </div>
    </section>
  );
}
