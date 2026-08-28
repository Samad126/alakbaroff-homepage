import { educationItems, languages } from "@/lib/data";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <p className="eyebrow reveal">Education &amp; languages</p>
        <div className="edu-grid">
          <div>
            {educationItems.map((item) => (
              <div className="edu-item reveal" key={item.degree}>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <p className="when">{item.when}</p>
              </div>
            ))}
          </div>
          <div>
            {languages.map((lang) => (
              <div className="lang reveal" key={lang.name}>
                <b>{lang.name}</b>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
