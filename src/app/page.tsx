<<<<<<< HEAD
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
=======
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center">
        <Hero />
        <AboutMe />
      </main>
    </div>
>>>>>>> 84f692b0fa147c01f022ee4d658a86d014bdc80c
  );
}
