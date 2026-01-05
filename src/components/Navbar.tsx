"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-violet-900/50 transition-colors">
            <Terminal className="h-6 w-6 text-blue-600 dark:text-violet-500 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xl font-bold tracking-tight">DevPortfolio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="flex items-center gap-2">
                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-violet-900/50">
                    <Terminal className="h-5 w-5 text-blue-600 dark:text-violet-500" />
                  </div>
                  DevPortfolio
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <div className="mt-8">
                   <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Download CV
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
