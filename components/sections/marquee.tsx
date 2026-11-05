import { marquee } from "@/lib/data";

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {marquee.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
