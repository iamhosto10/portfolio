"use client"

import * as React from "react"
import { HandMetal, Mail, Linkedin, Copy, ArrowUpRight, User, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function ContactFormSection() {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hola@tucorreo.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 animate-in slide-in-from-bottom-4 fade-in duration-700">
        {/* Header */}
        <div className="h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10">
          <HandMetal className="h-7 w-7 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-center text-foreground">
          Hablemos de tu proyecto
        </h2>
        <p className="text-muted-foreground text-center mt-2 max-w-lg mx-auto">
          Estoy disponible para nuevos retos. Cuéntame tu idea y la haremos realidad.
        </p>

        {/* Quick Contact Cards */}
        <div className="mb-10 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Card */}
          <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    EMAIL
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    hola@tucorreo.com
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
                <span className="sr-only">Copiar email</span>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
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
                  href="https://linkedin.com"
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
            O envíame un mensaje directo
          </span>
        </div>

        {/* Main Form */}
        <Card className="rounded-2xl shadow-sm border bg-card p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="pl-10"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  placeholder="tu@email.com"
                  className="pl-10"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Detalles del proyecto</Label>
              <Textarea
                id="message"
                placeholder="Cuéntame sobre tu proyecto..."
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Enviar Mensaje
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
