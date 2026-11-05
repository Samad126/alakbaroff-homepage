import { statement } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Statement() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <p className="quote">{statement.lead}</p>
        </Reveal>
      </div>
    </section>
  );
}
