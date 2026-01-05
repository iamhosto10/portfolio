import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl py-20 px-4 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Text */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              FULLSTACK DEVELOPER
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100 text-5xl font-black tracking-tight text-foreground md:text-7xl">
            Gerardo{" "}
            <span className="block text-black dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-600 dark:bg-clip-text dark:text-transparent lg:inline">
              Ramírez
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Transformo ideas complejas en experiencias web memorables y
            escalables.
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            {["Next.js", "React", "TypeScript", "Node.js", "AWS"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-100 text-blue-700 dark:bg-slate-800 dark:text-slate-200 rounded-md"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Ver proyectos
            </Button>
            <Button variant="ghost">Contactar</Button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center animate-in zoom-in-95 duration-1000">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-2xl dark:opacity-40"></div>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Coding Setup"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
