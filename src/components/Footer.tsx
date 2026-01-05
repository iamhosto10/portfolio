import React from "react";
import { Github, Linkedin, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 animate-footer-enter">
      <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">

        {/* Branding (Left) */}
        <div className="flex items-center gap-2 order-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-600 text-white">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
            Gerardo Ramírez
          </span>
        </div>

        {/* Socials (Center) */}
        <div className="flex items-center gap-4 order-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-10 w-10 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
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
            className="h-10 w-10 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
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
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © 2023 Gerardo Ramírez. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
