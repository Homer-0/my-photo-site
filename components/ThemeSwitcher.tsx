"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-[-10px] z-50">
      <button
        onClick={() => setTheme("dark")}
        className={clsx(
          "rounded-full w-8 h-20 flex items-center justify-center border transition-all",
          theme === "dark"
            ? "bg-white text-black border-white"
            : "bg-neutral-600 text-white border-transparent", // true dark grey
          "z-10"
        )}
        aria-label="Activate Dark Mode"
      >
        <Moon size={18} className="-mt-[35px]" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={clsx(
          "rounded-full w-8 h-16 flex items-center justify-center border transition-all",
          theme === "light"
            ? "bg-white text-black border-white"
            : "bg-neutral-600 text-white border-transparent", // true dark grey
          "-mt-9 z-10"
        )}
        aria-label="Activate Light Mode"
      >
        <Sun size={18} />
      </button>
    </div>
  );
}