"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code2, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

interface Project {
  id: number;
  name: string;
  category: string;
  status: "production" | "mvp" | "research";
  problem: string;
  features: string[];
  stack: string[];
}

const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "production":
      return "bg-[var(--status-success)]";
    case "mvp":
      return "bg-[var(--status-info)]";
    case "research":
      return "bg-[var(--status-research)]";
    default:
      return "bg-primary";
  }
};

const getStatusLabel = (status: Project["status"]) => {
  switch (status) {
    case "production":
      return "En Producción";
    case "mvp":
      return "MVP";
    case "research":
      return "R&D";
    default:
      return status;
  }
};

const FeaturedProjects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const PROJECTS: Project[] = [
    {
      id: 1,
      name: t.featuredProjects.project1.name,
      category: t.featuredProjects.project1.category,
      status: t.featuredProjects.project1.status as
        | "production"
        | "mvp"
        | "research",
      problem: t.featuredProjects.project1.problem,
      features: t.featuredProjects.project1.features,
      stack: t.featuredProjects.project1.stack,
    },
    {
      id: 2,
      name: t.featuredProjects.project2.name,
      category: t.featuredProjects.project2.category,
      status: t.featuredProjects.project2.status as
        | "production"
        | "mvp"
        | "research",
      problem: t.featuredProjects.project2.problem,
      features: t.featuredProjects.project2.features,
      stack: t.featuredProjects.project2.stack,
    },
    {
      id: 3,
      name: t.featuredProjects.project2.name,
      category: t.featuredProjects.project2.category,
      status: t.featuredProjects.project2.status as
        | "production"
        | "mvp"
        | "research",
      problem: t.featuredProjects.project2.problem,
      features: t.featuredProjects.project2.features,
      stack: t.featuredProjects.project2.stack,
    },
  ];

  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-16 py-10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium text-sm inline-block mb-4">
            PORTFOLIO 2026
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.featuredProjects.title}
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.featuredProjects.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.id}
              className={`border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                index % 2 === 1 ? "delay-300" : ""
              }`}
            >
              {/* Header: Image & Status */}
              <div className="relative aspect-video bg-muted rounded-t-md overflow-hidden group">
                {/* Placeholder content for image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                  <span className="text-6xl font-black opacity-20 select-none">
                    IMAGE
                  </span>
                </div>

                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${getStatusColor(
                    project.status
                  )}`}
                >
                  {getStatusLabel(project.status)}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-6">
                  {project.category}
                </p>

                {/* Problem Section */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                    {t.featuredProjects.problem}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Features Section */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant={"secondary"}
                      className="bg-primary/20 text-primary rounded-md cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button className="rounded-md bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
                    <Eye className="w-4 h-4" />
                    {t.featuredProjects.demo}
                  </Button>
                  <Button
                    variant={"outline"}
                    className="hover:-translate-y-0.5 transition-all shadow-lg rounded-md"
                  >
                    <Code2 className="w-4 h-4" />
                    {t.featuredProjects.code}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
