import { statement } from "@/lib/data";

export function Statement() {
  const words = statement.lead.trim().split(/\s+/);

  return (
    <section className="section statement" id="about">
      <div className="wrap">
        <p className="eyebrow">Profile</p>
        <div className="statement-grid">
          <p className="big-type">
            {words.map((word, i) => (
              <span className="w" key={i}>
                {word}{" "}
              </span>
            ))}
          </p>
          <div className="statement-side">
            {statement.side.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
