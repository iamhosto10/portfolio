"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

const PastProjects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-16 py-10 mb-20">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t.pastProjects.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          {t.pastProjects.description}
        </p>
      </div>

      {/* List/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.pastProjects.projects.map((project, index) => (
          <Card
            key={index}
            className="p-6 border border-muted/50 hover:border-primary/50 transition-colors duration-300 bg-card/50"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="text-[10px] font-bold">
                {project.year}
              </Badge>
            </div>

            <h3 className="text-lg font-bold mb-2 text-foreground">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PastProjects;
