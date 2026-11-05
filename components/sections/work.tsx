import { ArrowUpRight } from "lucide-react";
import { person, projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";

type Project = {
  client: string;
  title: string;
  result: string;
  tags: readonly string[];
  href?: string;
  image?: string;
};

function Card({ p, i }: { p: Project; i: number }) {
  const body = (
    <>
      <div className="card-img">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="card-img-inner card-shot" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
        ) : (
          <div className="card-img-inner">
            <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <p className="label">{p.client}</p>
      <h3>{p.title}</h3>
      <p className="muted">{p.result}</p>
    </>
  );
  return p.href ? (
    <a className="card" href={p.href} target="_blank" rel="noopener" data-cursor="View">
      {body}
    </a>
  ) : (
    <article className="card">{body}</article>
  );
}

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal>
          <span className="label">Selected work</span>
          <h2>Things I&rsquo;ve <em>built</em>.</h2>
        </Reveal>
        <div className="grid">
          {(projects as readonly Project[]).map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <Card p={p} i={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="more">
          <a className="pill" href={person.github} target="_blank" rel="noopener" data-cursor="View">
            More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
