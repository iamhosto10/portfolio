"use client";

import * as React from "react";
import {
  HandMetal,
  Mail,
  Linkedin,
  Copy,
  ArrowUpRight,
  User,
  Send,
  Check,
  Hand,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactFormSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gerardoramirez4400@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Mensaje enviado 🚀");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container max-w-5xl mx-auto px-6 md:px-16 py-10">
      <div className="max-w-2xl mx-auto px-4 animate-in slide-in-from-bottom-4 fade-in duration-700">
        {/* Header */}
        <div className="h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10">
          <Hand className="h-7 w-7 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-center text-foreground">
          {t.contactForm.title}
        </h2>
        <p className="text-muted-foreground text-center mt-2 max-w-lg mx-auto">
          {t.contactForm.description}
        </p>

        {/* Quick Contact Cards */}
        <div className="mb-10 mt-10 grid grid-cols-1 gap-4">
          {/* Email Card */}
          <Card className="border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {t.contactForm.email}
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    gerardoramirez4400@gmail.com
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopyEmail}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">{t.contactForm.copyEmail}</span>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    SOCIAL
                  </p>
                  <p className="text-sm font-bold text-foreground">LinkedIn</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://www.linkedin.com/in/gerardoramirez-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only">Ir a LinkedIn</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Divider Visual */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted/30 px-2">
            {t.contactForm.directMessage}
          </span>
        </div>

        {/* Main Form */}
        <Card className="border shadow-lg md:shadow-xl rounded-xl border-muted/50 md:dark:shadow-primary/10 dark:shadow-primary/70 p-8 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">{t.contactForm.labelName}</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.contactForm.placeholderName}
                  className="pl-10"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t.contactForm.labelEmail}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.contactForm.placeholderEmail}
                  className="pl-10"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t.contactForm.labelDetails}</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contactForm.placeholderDetails}
                className="min-h-30"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="rounded-md bg-primary shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all w-full"
            >
              {t.contactForm.sendButton}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
