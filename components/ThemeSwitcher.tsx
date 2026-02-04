"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

type Props = {
  className?: string;
  orientation?: "vertical" | "horizontal";
};

export default function ThemeSwitcher({ className, orientation = "vertical" }: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isHorizontal = orientation === "horizontal";

  if (isHorizontal) {
    return (
      <div className={clsx("flex items-center", className)}>
        <button
          onClick={() => setTheme("dark")}
          className={clsx(
            "rounded-full w-10 h-7 flex items-center justify-start pl-2 border transition-all mr-[-26px] z-10",
            theme === "dark"
              ? "bg-white text-black border-white"
              : "bg-neutral-600 text-white border-transparent"
          )}
          aria-label="Activate Dark Mode"
        >
          <Moon size={14} />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={clsx(
            "rounded-full w-16 h-7 flex items-center justify-end pr-2 border transition-all -ml-2",
            theme === "light"
              ? "bg-white text-black border-white"
              : "bg-neutral-600 text-white border-transparent"
          )}
          aria-label="Activate Light Mode"
        >
          <Sun size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <button
        onClick={() => setTheme("dark")}
        className={clsx(
          "rounded-full w-8 h-20 flex items-center justify-center border transition-all",
          theme === "dark"
            ? "bg-white text-black border-white"
            : "bg-neutral-600 text-white border-transparent",
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
            : "bg-neutral-600 text-white border-transparent",
          "-mt-9 z-10"
        )}
        aria-label="Activate Light Mode"
      >
        <Sun size={18} />
      </button>
    </div>
  );
}
