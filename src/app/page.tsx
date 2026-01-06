import AboutMe from "@/components/AboutMe/AboutMe";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background ">
      <Hero />
      <AboutMe />
      <Skills />
    </main>
  );
}
