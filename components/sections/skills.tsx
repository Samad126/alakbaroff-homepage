import { skillRows } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal>
          <span className="label">Toolkit</span>
        </Reveal>
        <ul className="list">
          {skillRows.map((s) => (
            <li key={s.label}>
              <strong>{s.label}</strong>
              <span className="muted">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
