"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import cn from "@/lib/utils";

export const THEME_STATES = {
  DARK: "dark",
  LIGHT: "light",
};

export default function ThemeToggle({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === THEME_STATES.DARK) {
      document.documentElement.classList.add(THEME_STATES.DARK);
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", THEME_STATES.LIGHT);
      setIsDarkMode(false);
    }
  }, []);
  function toggleTheme() {
    if (isDarkMode) {
      document.documentElement.classList.remove(THEME_STATES.DARK);
      localStorage.setItem("theme", THEME_STATES.LIGHT);
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add(THEME_STATES.DARK);
      localStorage.setItem("theme", THEME_STATES.DARK);
      setIsDarkMode(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        className ?? "fixed top-5 right-5 z-50 hidden md:block p-2 rounded-full transition-colors duration-300",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}
