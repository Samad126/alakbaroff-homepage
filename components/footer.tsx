import { person } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <span>{person.name.toUpperCase()}</span>
      <a href={`mailto:${person.email}`}>{person.email}</a>
      <a href={person.linkedin} target="_blank" rel="noopener">LinkedIn</a>
      <a href={person.github} target="_blank" rel="noopener">GitHub</a>
      <span>© 2026</span>
    </footer>
  );
}
