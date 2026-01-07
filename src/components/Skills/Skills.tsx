import React from "react";
import { Monitor, Database, Cloud, Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  colorVar: string;
  bgVar: string;
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Moderno",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    colorVar: "var(--skill-frontend)",
    bgVar: "var(--skill-frontend-bg)",
  },
  {
    title: "Backend Robusto",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Prisma"],
    colorVar: "var(--skill-backend)",
    bgVar: "var(--skill-backend-bg)",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "Vercel"],
    colorVar: "var(--skill-cloud)",
    bgVar: "var(--skill-cloud-bg)",
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Mis Habilidades
          </h2>
          <p className="text-muted-foreground text-lg max-w-175">
            Tecnologías que utilizo para construir aplicaciones web escalables y
            eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card
              key={category.title}
              className="border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 text-card-foreground animate-in slide-in-from-bottom-6 fade-in duration-700 fill-mode-forwards"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div
                  className="rounded-lg p-3 w-fit mb-4"
                  style={{
                    backgroundColor: category.bgVar,
                    color: category.colorVar,
                  }}
                >
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-2xl">{category.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <Check className="w-5 h-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground font-medium">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
