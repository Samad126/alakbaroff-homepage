import { Nav } from "@/components/nav";
import { ScrollFx } from "@/components/scroll-fx";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <div className="field" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>

      <Nav />

      <main>
        <Hero />
        <Statement />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>

      <ScrollFx />
    </>
  );
}
