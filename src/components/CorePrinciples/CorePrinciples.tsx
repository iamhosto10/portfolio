"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Sparkles, Zap, DraftingCompass, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CorePrinciples() {
  const { language } = useLanguage();
  const t = translations[language];

  const principles = [
    {
      title: t.corePrinciples.corePrinciple1.title,
      description: t.corePrinciples.corePrinciple1.description,
      icon: Sparkles,
    },
    {
      title: t.corePrinciples.corePrinciple2.title,
      description: t.corePrinciples.corePrinciple2.description,
      icon: Zap,
    },
    {
      title: t.corePrinciples.corePrinciple3.title,
      description: t.corePrinciples.corePrinciple3.description,
      icon: DraftingCompass,
    },
    {
      title: t.corePrinciples.corePrinciple4.title,
      description: t.corePrinciples.corePrinciple4.description,
      icon: Users,
    },
  ];
  return (
    <section>
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="mb-8 text-2xl font-bold text-left text-foreground md:mb-12 md:text-3xl">
          {t.corePrinciples.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className="border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 transition-shadow duration-300 hover:shadow-md "
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
