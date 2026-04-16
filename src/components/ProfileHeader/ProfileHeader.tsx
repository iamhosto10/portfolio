"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dot, Github, Linkedin, MapPin } from "lucide-react";

export default function ProfileHeader() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-col items-center gap-4 text-center py-10 px-4 md:py-12">
      {/* Avatar Section */}
      <div className="relative animate-in zoom-in-50 duration-700 ease-out">
        <Avatar className="h-32 w-32 rounded-full shadow-xl shadow-primary/20">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/28761277?v=4"
            alt="@shadcn"
          />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>

        {/* Status Indicator */}
        <span className="absolute bottom-0 right-2 h-6 w-6 rounded-full border-4 border-background bg-status-online" />
      </div>

      {/* Typography Section */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200">
        <h1 className="text-3xl font-bold text-foreground">Gerardo Ramírez</h1>
        <p className="text-lg font-medium text-primary mt-1">
          Fullstack Developer
        </p>

        <div className="flex items-center justify-center gap-2 mt-2">
          <MapPin className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {t.profileHeader.location}
          </span>
          <Dot className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {t.profileHeader.experience}
          </span>
        </div>
      </div>

      {/* Socials Section */}
      <div className="flex gap-2 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200">
        <a
          href="https://github.com/iamhosto10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-social-network-icon hover:text-social-network-hover"
          >
            <Github className="size-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/gerardoramirez-developer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-social-network-icon hover:text-social-network-hover"
          >
            <Linkedin className="size-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
