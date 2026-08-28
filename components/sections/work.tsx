import { experience } from "@/lib/data";

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <p className="eyebrow reveal">Experience</p>
        <h2 className="section-title reveal">
          Where the work
          <br />
          has happened.
        </h2>

        <div>
          {experience.map((role) => (
            <article className="role reveal" key={`${role.org}-${role.when}`}>
              <div className="role-when">
                <span>{role.when}</span>
                <span className="place">{role.place}</span>
              </div>
              <div>
                <h3>{role.title}</h3>
                <p className="org">
                  <em>{role.org}</em>
                </p>
                <ul>
                  {role.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="tags">
                  {role.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
