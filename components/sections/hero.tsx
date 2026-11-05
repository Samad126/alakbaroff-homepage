"use client";

import { motion } from "motion/react";
import { portrait } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = ["SAMAD", "ALAKBAROV"];

function Name({ front = false }: { front?: boolean }) {
  const Tag = front ? "div" : "h1";
  return (
    <Tag className={`name ${front ? "name-front" : "name-back"}`} aria-hidden={front || undefined}>
      {lines.map((t, i) => (
        <span className="name-line" key={t}>
          <motion.span
            className="name-inner"
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease, delay: i * 0.12 }}
          >
            {t}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="label hero-label">Fullstack developer · Baku</p>
      <div className="hero-stage">
        <Name />
        <div className="portrait-pos">
        <motion.div
          className="portrait"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} alt="Samad Alakbarov" />
        </motion.div>
        </div>
        <Name front />
      </div>
      <p className="hero-statement">
        I build fast, type-safe interfaces for fintech, AI and education products, and the APIs behind them.
      </p>
    </section>
  );
}
