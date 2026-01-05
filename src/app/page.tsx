import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background ">
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  );
}
