"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("keploy-doc-theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("keploy-doc-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  // Prevent flash of unstyled theme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
