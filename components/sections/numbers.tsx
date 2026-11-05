import { numbers } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Numbers() {
  return (
    <section className="section numbers-sec">
      <div className="wrap numbers">
        {numbers.map((n, i) => (
          <Reveal key={n.label} delay={i * 0.08}>
            <div className="num">{n.value}</div>
            <div className="muted">{n.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
