import { skillRows } from "@/lib/data";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <p className="eyebrow reveal">Toolkit</p>
        <h2 className="section-title reveal">What I reach for.</h2>

        {skillRows.map((row) => (
          <div className="skill-row reveal" key={row.label}>
            <h4>{row.label}</h4>
            <p>{row.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
