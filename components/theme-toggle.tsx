"use client";

import { useEffect, useState } from "react";

const THEME_COLORS = { light: "#E9E7E0", dark: "#161813" };

export function ThemeToggle() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    setThemeState(
      (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light"
    );

    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {}
      if (!stored) applyTheme(e.matches ? "dark" : "light", false);
    };
    colorSchemeQuery.addEventListener("change", onChange);
    return () => colorSchemeQuery.removeEventListener("change", onChange);
  }, []);

  function applyTheme(next: "light" | "dark", persist: boolean) {
    document.documentElement.setAttribute("data-theme", next);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    metaTheme?.setAttribute("content", THEME_COLORS[next]);
    if (persist) {
      try {
        localStorage.setItem("theme", next);
      } catch {}
    }
    setThemeState(next);
  }

  function toggle() {
    applyTheme(theme === "dark" ? "light" : "dark", true);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    </button>
  );
}
