import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Manos Tzavidas Photography",
  description: "Visual storytelling through photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" enableSystem={true}>
          {/* Sticky Navbar */}
          <header className="sticky top-0 z-50 border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black px-6 py-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
              {/* Left: Site name */}
              <Link href="/" className="text-lg font-semibold tracking-wide">
                MANOS TZAVIDAS.
              </Link>

              {/* Center: Navigation */}
              <nav className="absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm font-medium">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/chapters" className="hover:underline">
                  Chapters
                </Link>
                <Link href="/journal" className="hover:underline">
                  Journal
                </Link>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </nav>

              {/* Right placeholder */}
              <div className="w-6" />
            </div>
          </header>

          {/* Dark mode toggle */}
          <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40">
            <ThemeSwitcher />
          </div>

          {/* Section Title */}
          <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
            <h2 className="text-lg font-medium tracking-wide uppercase text-neutral-600 text-center dark:text-neutral-300">
              Recent Work
            </h2>
          </div>

          {/* Main content */}
          <main className="max-w-6xl mx-auto px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

// ThemeSwitcher component
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2 items-center p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-md">
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition ${
          theme === "dark" ? "bg-white text-black" : "text-neutral-400"
        }`}
      >
        <Moon size={14} /> DARK
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition ${
          theme === "light" ? "bg-white text-black" : "text-neutral-400"
        }`}
      >
        <Sun size={14} /> LIGHT
      </button>
    </div>
  );
}