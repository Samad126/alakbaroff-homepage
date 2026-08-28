export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-rule" aria-hidden="true"></div>
        <p className="eyebrow">Fullstack developer — Baku, Azerbaijan</p>
        <h1 className="hero-title">
          <span className="ln">
            <i>Samad</i>
          </span>
          <span className="ln">
            <i>Alakbarov</i>
          </span>
        </h1>
        <p className="hero-sub">
          I build <b>type-safe, fast interfaces</b> for fintech, AI and education products — and
          the APIs behind them.
        </p>
      </div>

      <div className="scroll-cue">
        <span className="cue-track"></span> Scroll
      </div>
      <div className="hero-meta">
        React · Next.js · TypeScript
        <br />
        Node.js · NestJS · WebSockets
      </div>
    </section>
  );
}
