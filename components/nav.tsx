"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? " stuck" : ""}`} id="nav">
      <a className="nav-mark" href="#top">
        S.A
      </a>
      <div className="nav-right">
        <nav className="nav-links" aria-label="Sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
