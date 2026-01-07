"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { BookOpen } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function MyStoryCard() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="container max-w-5xl mx-auto px-6 md:px-16 py-10">
      <Card className="border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <CardHeader className="p-0 space-y-0 flex flex-row items-center gap-3 pb-4">
          <BookOpen className="text-primary size-6" />
          <h3 className="font-bold text-lg text-foreground">
            {t.myStoryCard.title}
          </h3>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <p className="text-muted-foreground text-base leading-relaxed">
            {t.myStoryCard.description1}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            {t.myStoryCard.description2}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
