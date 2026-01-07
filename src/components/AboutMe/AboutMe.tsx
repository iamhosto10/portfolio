"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { User } from "lucide-react";

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="bg-secondary/50">
      <section className="mx-auto max-w-6xl px-4">
        <div className="py-12 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl text-left">
              <div className="mb-6 flex items-center gap-2">
                <User className="size-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {t.aboutMeLanding.title}
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground ">
                {t.aboutMeLanding.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
