"use client";

import { Moon, Sun } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

const themeStorageKey = "minimal-theme";

export default function ArticleShell({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    if (savedTheme === "dark" || savedTheme === "light") {
      setIsDark(savedTheme === "dark");
      return;
    }

    setIsDark(mediaQuery.matches);

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(themeStorageKey)) {
        setIsDark(event.matches);
      }
    };

    mediaQuery.addEventListener("change", syncSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, []);

  const toggleTheme = () => {
    setIsDark((currentTheme) => {
      const nextTheme = !currentTheme;
      window.localStorage.setItem(
        themeStorageKey,
        nextTheme ? "dark" : "light",
      );
      return nextTheme;
    });
  };

  return (
    <main
      className={`minimal-page min-h-screen px-6 py-10 font-sans transition-colors duration-200 md:px-10 ${
        isDark ? "dark bg-zinc-950 text-zinc-50" : "bg-white text-zinc-950"
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed right-4 top-4 z-30 inline-flex size-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:focus-visible:outline-zinc-100"
      >
        {isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )}
      </button>
      {children}
    </main>
  );
}
