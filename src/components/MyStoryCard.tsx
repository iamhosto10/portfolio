import { BookOpen } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function MyStoryCard() {
  return (
    <Card className="bg-card border shadow-sm rounded-xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <CardHeader className="p-0 space-y-0 flex flex-row items-center gap-3 pb-4">
        <BookOpen className="text-primary size-6" />
        <h3 className="font-bold text-lg text-foreground">My Story</h3>
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <p className="text-muted-foreground text-base leading-relaxed">
          From my early days tinkering with code to becoming a frontend
          specialist, I&apos;ve always been fascinated by the intersection of
          design and technology. The ability to bring static concepts to life
          through clean, performant code is what drives my passion every day.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          I believe that great software is not just about writing lines of code,
          but about solving real problems and creating intuitive experiences. My
          journey has taught me that continuous learning and attention to detail
          are the keys to building products that users truly love.
        </p>
      </CardContent>
    </Card>
  );
}
