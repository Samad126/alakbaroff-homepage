import { ArrowRight } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal>
          <span className="label">Experience</span>
          <h2>Where I&rsquo;ve worked.</h2>
        </Reveal>
        <ol className="rows">
          {experience.map((r) => (
            <li key={r.org} className="row" data-cursor="">
              <div className="row-main">
                <ArrowRight className="row-arrow" size={36} aria-hidden="true" />
                <div className="row-text">
                  <h3>{r.title}</h3>
                  <p className="muted">{r.points[0]}</p>
                </div>
              </div>
              <div className="row-meta">
                <strong>{r.org}</strong>
                <span>{r.when}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
