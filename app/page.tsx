import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <FeaturedProjects />
      <Skills />
      <Community />
      <Contact />
    </main>
  );
}
