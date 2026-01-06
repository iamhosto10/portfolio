import { Github, Linkedin, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background animate-footer-enter">
      <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        {/* Branding (Left) */}
        <div className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-icon-primary  transition-colors">
            <Terminal className="h-6 w-6 text-icon-primary group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-sm font-bold tracking-tight">
            Gerardo Ramirez
          </span>
        </div>

        {/* Socials (Center) */}
        <div className="flex items-center gap-4 order-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-10 w-10 text-social-network-icon hover:text-social-network-hover"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-10 w-10 text-social-network-icon hover:text-social-network-hover"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Copyright (Right) */}
        <div className="text-center md:text-right order-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Gerardo Ramírez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
