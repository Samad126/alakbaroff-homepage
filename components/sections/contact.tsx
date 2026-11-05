import { person } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-in">
        <Reveal>
          <h2>Let&rsquo;s talk about what you&rsquo;re building.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body">
            Tell me what the product is, the stack, the team and the deadline. The deadline is
            the most useful thing you can include.
          </p>
          <p className="body">Based in Baku ({person.timezone.split("·")[1].trim()}). I answer my own email.</p>
          <a className="btn" href={`mailto:${person.email}`} data-cursor="">
            {person.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
