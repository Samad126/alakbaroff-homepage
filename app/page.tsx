import { Nav } from "@/components/nav";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { What } from "@/components/sections/what";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Numbers } from "@/components/sections/numbers";
import { Statement } from "@/components/sections/statement";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <What />
        <Experience />
        <Work />
        <Skills />
        <Numbers />
        <Statement />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
