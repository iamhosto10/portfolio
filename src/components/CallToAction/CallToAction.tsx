"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-12 md:py-20 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-75 duration-700 delay-100 bg-secondary/50">
      <div className="max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {t.callToAction.projectInquiry}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          {t.callToAction.description}
        </p>
        <div className="flex gap-2 items-center justify-center flex-wrap  ">
          <Link href={"/contact"}>
            <Button
              // size="lg"
              className="rounded-md bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="mr-2 size-4" />
              {t.callToAction.sendEmail}
            </Button>
          </Link>
          <a
            href={
              "https://drive.google.com/file/d/1DRtw-o_ZW_33KUTinpsYlzSM-bvTwnEg/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"outline"}
              className="hover:-translate-y-0.5 transition-all shadow-lg rounded-md"
            >
              <Download className="mr-2 size-4" />
              {t.callToAction.downloadCV}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
