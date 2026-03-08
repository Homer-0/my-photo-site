"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ borderColor: "var(--ink)", color: "var(--ink)", opacity: 0.35 }}
      className="w-8 h-8 rounded-full border flex items-center justify-center transition-opacity hover:opacity-40"
    >
      {isDark ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
    </button>
  );
}
