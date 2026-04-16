"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Layout, Server, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiFigma,
  SiJira,
  SiVercel,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiGithubactions } from "react-icons/si";

// ----------------------------------------------------------------------
// Types & Data
// ----------------------------------------------------------------------

type Skill = {
  name: string;
  description: string;
  icon: React.ElementType;
};

type Category = {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const TECH_DATA: Category[] = [
  {
    id: "frontend",
    title: "Frontend Ecosystem",
    icon: Layout,
    skills: [
      {
        name: "React",
        description: "Component Architecture",
        icon: SiReact,
      },
      {
        name: "Next.js",
        description: "SSR & Performance",
        icon: SiNextdotjs,
      },
      {
        name: "React Native",
        description: "Cross-Platform Mobile",
        icon: TbBrandReactNative,
      },
      {
        name: "Tailwind CSS",
        description: "Modern Styling",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Infrastructure",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        description: "Runtime Environment",
        icon: SiNodedotjs,
      },
      {
        name: "PostgreSQL",
        description: "Relational Database",
        icon: SiPostgresql,
      },
      {
        name: "Redis",
        description: "Caching Strategy",
        icon: SiRedis,
      },
      {
        name: "Docker",
        description: "Containerization",
        icon: SiDocker,
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Methods",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        description: "Version Control",
        icon: SiGit,
      },
      {
        name: "Figma",
        description: "UI/UX Design",
        icon: SiFigma,
      },
      {
        name: "Agile",
        description: "Project Management",
        icon: SiJira,
      },
      {
        name: "Vercel",
        description: "Deployment & CI/CD",
        icon: SiVercel,
      },
    ],
  },
];

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------

export default function TechStackExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { language } = useLanguage();
  const t = translations[language];

  const TECH_DATA: Category[] = [
    {
      id: "frontend",
      title: t.techStackExplorer.tabs[0],
      icon: Layout,
      skills: [
        {
          name: "React",
          description: t.techStackExplorer.frontendDescription[0],
          icon: SiReact,
        },
        {
          name: "Next.js",
          description: t.techStackExplorer.frontendDescription[1],
          icon: SiNextdotjs,
        },
        {
          name: "React Native",
          description: "Cross-Platform Mobile",
          icon: TbBrandReactNative,
        },
        {
          name: "Tailwind CSS",
          description: t.techStackExplorer.frontendDescription[2],

          icon: SiTailwindcss,
        },
      ],
    },
    {
      id: "backend",
      title: t.techStackExplorer.tabs[1],

      icon: Server,
      skills: [
        {
          name: "Node.js",
          description: t.techStackExplorer.backendDescription[0],

          icon: SiNodedotjs,
        },
        {
          name: "PostgreSQL",
          description: t.techStackExplorer.backendDescription[1],
          icon: SiPostgresql,
        },
        {
          name: "Redis",
          description: t.techStackExplorer.backendDescription[2],
          icon: SiRedis,
        },
        {
          name: "Docker",
          description: t.techStackExplorer.backendDescription[3],
          icon: SiDocker,
        },
      ],
    },
    {
      id: "tools",
      title: t.techStackExplorer.tabs[2],
      icon: Wrench,
      skills: [
        {
          name: "Git",
          description: t.techStackExplorer.toolsDescription[0],
          icon: SiGit,
        },
        {
          name: "Figma",
          description: t.techStackExplorer.toolsDescription[1],
          icon: SiFigma,
        },
        {
          name: "Github Actions",
          description: t.techStackExplorer.toolsDescription[2],
          icon: SiGithubactions,
        },
        {
          name: "Vercel",
          description: t.techStackExplorer.toolsDescription[3],
          icon: SiVercel,
        },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "All"
      ? TECH_DATA
      : TECH_DATA.filter((cat) => cat.title === activeCategory);

  const tabs = ["All", ...TECH_DATA.map((cat) => cat.title)];

  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-16 py-10">
      <div className="container px-4 mx-auto md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            {t.techStackExplorer.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
            {t.techStackExplorer.description}
          </p>
        </div>

        {/* Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all cursor-pointer",
                activeCategory === tab
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-8 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="flex flex-col items-center justify-center h-full p-6 text-center transition-all duration-300 border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 hover:-translate-y-1 animate-in zoom-in-95 fade-in duration-500 cursor-pointer"
                  >
                    <skill.icon className="w-10 h-10 text-4xl text-primary" />
                    <h4 className="mt-4 font-bold text-foreground">
                      {skill.name}
                    </h4>
                    <span className="mt-1 text-xs font-medium text-muted-foreground">
                      {skill.description}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
