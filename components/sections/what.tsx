import { whatIDo } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function What() {
  return (
    <section className="section">
      <div className="wrap what">
        {whatIDo.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08}>
            <span className="label">{String(i + 1).padStart(2, "0")} — {w.title}</span>
            <h3 className="what-title">{w.title}</h3>
            <p className="body">{w.text}</p>
            <a className="mini-link" href={w.href}>{w.link} →</a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
