import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code2, Zap, CheckCircle2 } from "lucide-react";

interface Project {
  id: number;
  name: string;
  category: string;
  status: "production" | "mvp" | "research";
  problem: string;
  features: string[];
  stack: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Enterprise CRM",
    category: "SaaS B2B • FinTech",
    status: "production",
    problem:
      "Legacy systems were causing a 40% efficiency drop in sales tracking and customer relationship management, leading to lost revenue and frustrated teams.",
    features: [
      "Real-time analytics dashboard",
      "Automated lead scoring system",
      "Role-based access control",
    ],
    stack: ["Next.js", "Postgres", "Redis"],
  },
  {
    id: 2,
    name: "AI Image Generator",
    category: "Generative AI • Creative Tools",
    status: "mvp",
    problem:
      "Creatives needed a rapid prototyping tool to generate high-fidelity assets without the steep learning curve of complex 3D modeling software.",
    features: [
      "Text-to-image synthesis",
      "Style transfer capabilities",
      "Cloud-based rendering",
    ],
    stack: ["React", "Python", "AWS Lambda"],
  },
  {
    id: 3,
    name: "AI Image Generator",
    category: "Generative AI • Creative Tools",
    status: "mvp",
    problem:
      "Creatives needed a rapid prototyping tool to generate high-fidelity assets without the steep learning curve of complex 3D modeling software.",
    features: [
      "Text-to-image synthesis",
      "Style transfer capabilities",
      "Cloud-based rendering",
    ],
    stack: ["React", "Python", "AWS Lambda"],
  },
];

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
  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-16 py-10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium text-sm inline-block mb-4">
            PORTFOLIO 2024
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Soluciones Fullstack escalables y centradas en el usuario.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden border-border bg-card animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                index % 2 === 1 ? "delay-300" : ""
              }`}
            >
              {/* Header: Image & Status */}
              <div className="relative aspect-video bg-muted rounded-t-xl overflow-hidden group">
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
                    El Problema
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
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary text-xs rounded-md px-2.5 py-1 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button className="rounded-md bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all">
                    <Eye className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button
                    variant={"outline"}
                    className="hover:-translate-y-0.5 transition-all shadow-lg rounded-md"
                  >
                    <Code2 className="w-4 h-4" />
                    Código
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
