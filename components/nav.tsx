"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const items = [...navLinks, { href: "#contact", label: "Contact" }];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${stuck ? " stuck" : ""}`}>
        <nav className="nav-links" aria-label="Sections">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="pill" href="#contact">
          Contact me
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "circle(0px at calc(100% - 2.4rem) 2.2rem)" }}
            animate={{ clipPath: "circle(150vmax at calc(100% - 2.4rem) 2.2rem)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 2.4rem) 2.2rem)", transition: { duration: 0.5, ease } }}
            transition={{ duration: 0.8, ease }}
          >
            <button type="button" className="menu-btn close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
            {items.map((l, i) => (
              <span className="overlay-line" key={l.href}>
                <motion.a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: "110%" }}
                  animate={{ y: 0, transition: { duration: 0.8, ease, delay: 0.25 + i * 0.07 } }}
                  exit={{ y: "110%", transition: { duration: 0.3 } }}
                >
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  {l.label}
                </motion.a>
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
