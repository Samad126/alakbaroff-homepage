"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollFx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      document.querySelectorAll<HTMLElement>(".w").forEach((el) => (el.style.opacity = "1"));
      document.querySelectorAll(".role").forEach((el) => el.classList.add("lit"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      /* --- Page load: rule draws, then the name rises into place --- */
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".hero-rule", { scaleX: 0, duration: 1.4 }, 0)
        .from(".hero .eyebrow", { opacity: 0, y: 12, duration: 0.9 }, 0.22)
        .from(".hero-title .ln i", { yPercent: 108, duration: 1.15, stagger: 0.09 }, 0.3)
        .from(".hero-sub", { opacity: 0, y: 16, duration: 0.9 }, 0.62)
        .from(".scroll-cue, .hero-meta", { opacity: 0, duration: 0.8 }, 0.8);

      /* --- The signature move: the page pushes through the name --- */
      gsap
        .timeline({
          scrollTrigger: { trigger: ".hero", start: "top top", end: "+=115%", pin: true, scrub: 1 },
        })
        .to(".hero-inner", { scale: 4.8, opacity: 0, filter: "blur(12px)", ease: "power2.in" }, 0)
        .to(".scroll-cue, .hero-meta", { opacity: 0, duration: 0.18, ease: "none" }, 0);

      /* --- Landing after the zoom --- */
      gsap.from(".statement .wrap", {
        scale: 0.9,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ".statement", start: "top bottom", end: "top 34%", scrub: 0.8 },
      });

      /* --- Statement sets word by word --- */
      gsap.to(".statement .w", {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: { trigger: ".statement", start: "top 72%", end: "bottom 72%", scrub: 0.5 },
      });

      /* --- Reveals --- */
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      /* --- Each role's top rule draws in as you reach it --- */
      gsap.utils.toArray<HTMLElement>(".role").forEach((role) => {
        ScrollTrigger.create({
          trigger: role,
          start: "top 78%",
          onEnter: () => role.classList.add("lit"),
          onEnterBack: () => role.classList.add("lit"),
        });
      });
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);

  return null;
}
