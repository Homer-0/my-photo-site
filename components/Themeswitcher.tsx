"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-[50%] left-4 z-50 flex flex-col items-center space-y-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-lg">
      <button
        onClick={() => setTheme("light")}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
          theme === "light" ? "bg-white text-black" : "text-gray-500"
        }`}
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
          theme === "dark" ? "bg-white text-black" : "text-gray-500"
        }`}
      >
        <Moon size={20} />
      </button>
    </div>
  );
}