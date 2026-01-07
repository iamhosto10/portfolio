import React from "react";
import { cn } from "@/lib/utils";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiAmazonwebservices,
  SiTailwindcss,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

export const TechnicalArsenal = () => {
  return (
    <div className="rounded-3xl p-8 md:p-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
        Technical Arsenal
      </h2>

      <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:gap-4">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={cn(
              "aspect-square w-full md:w-28 md:h-28",
              "border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 cursor-pointer",
              "hover:shadow-md hover:-translate-y-1 transition-all duration-300",
              "flex flex-col items-center justify-center gap-3",
              "animate-in zoom-in-50 fade-in duration-500 fill-mode-both"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/20">
              <tech.icon className="text-primary text-2xl" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
