import { contactRows, person } from "@/lib/data";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <p className="eyebrow reveal">Contact</p>
        <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
          Have something
          <br />
          worth building?
        </h2>
        <a className="mail reveal" href={`mailto:${person.email}`}>
          {person.email}
        </a>

        <div className="contact-rows reveal">
          {contactRows.map((row) =>
            "href" in row && row.href ? (
              <a
                className="crow"
                key={row.label}
                href={row.href}
                target={"external" in row && row.external ? "_blank" : undefined}
                rel={"external" in row && row.external ? "noopener" : undefined}
              >
                <small>{row.label}</small>
                <span>{row.value}</span>
              </a>
            ) : (
              <div className="crow" key={row.label}>
                <small>{row.label}</small>
                <span>{row.value}</span>
              </div>
            )
          )}
        </div>

        <div className="foot">
          <span>{person.name} — Fullstack Developer</span>
          <span>{person.timezone}</span>
        </div>
      </div>
    </section>
  );
}
