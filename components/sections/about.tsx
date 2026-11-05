import { Download } from "lucide-react";
import { bio, educationItems, languages, portraitFull } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Reveal>
          <div className="frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portraitFull} alt="Samad Alakbarov" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="label">About</span>
          <h2>About Samad.</h2>
          {bio.map((p) => (
            <p className="body" key={p}>{p}</p>
          ))}
          <ul className="edu">
            {educationItems.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong>
                <span className="muted">{e.school} · {e.when}</span>
              </li>
            ))}
            <li>
              <strong>Languages</strong>
              <span className="muted">{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</span>
            </li>
          </ul>
          <a className="mini-link" href="/Samad_Alakbarov_CV.pdf" download>
            <Download size={14} aria-hidden="true" /> Download CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
