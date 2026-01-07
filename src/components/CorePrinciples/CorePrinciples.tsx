import { Sparkles, Zap, DraftingCompass, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    title: "Clean Code",
    description:
      "Writing code that is easy to read, easy to understand, and easy to maintain.",
    icon: Sparkles,
  },
  {
    title: "Performance",
    description:
      "Obsessed with Core Web Vitals and creating lightning-fast user experiences.",
    icon: Zap,
  },
  {
    title: "Scalability",
    description:
      "Building robust architectures designed to grow with the business needs.",
    icon: DraftingCompass,
  },
  {
    title: "Teamwork",
    description:
      "Strong believer in Agile methodologies, code reviews, and open communication.",
    icon: Users,
  },
];

export default function CorePrinciples() {
  return (
    <section>
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="mb-8 text-2xl font-bold text-left text-foreground md:mb-12 md:text-3xl">
          Core Principles
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className="border shadow-xl transition-shadow duration-300 hover:shadow-md bg-secondary/50"
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
