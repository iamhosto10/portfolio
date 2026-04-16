"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="mx-auto max-w-6xl py-10 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="animate-in fade-in slide-in-from-bottom duration-500">
              <span className="inline-flex items-center rounded-full bg-primary/20 blue-50 px-3 py-1 text-sm font-medium text-primary">
                FULLSTACK DEVELOPER
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100 text-5xl font-black tracking-tight text-foreground md:text-7xl">
              Gerardo{" "}
              <span className="block bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent lg:inline">
                Ramírez
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              {t.hero.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              {[
                "Next.js",
                "React",
                "React Native",
                "Node.js",
                "TypeScript",
                "AWS",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-primary/20 text-primary rounded-md cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Link href="/projects">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  {t.hero.ViewButton}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost">{t.hero.ContactButton}</Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center animate-in zoom-in-50 duration-1000">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-secondary to-primary opacity-30 blur-2xl dark:opacity-40"></div>
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
      </div>
    </section>
  );
}
