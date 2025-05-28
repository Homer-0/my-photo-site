// app/layout.tsx
"use client";

import "./globals.css";
import Link from "next/link";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const metadata = {
  title: "Manos Tzavidas – Photography",
  description: "Photography portfolio by Manos Tzavidas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {/* Sticky Top Navbar */}
        <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left: Logo */}
            <Link href="/" className="text-xl font-bold tracking-wide">
              MANOS TZAVIDAS.
            </Link>

            {/* Middle: Nav Links */}
            <nav className="space-x-6 text-sm font-semibold">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/chapters" className="hover:underline">Chapters</Link>
              <Link href="/journal" className="hover:underline">Journal</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>

            {/* Right: Theme toggle */}
            <div className="flex items-center">
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        {/* Recent Work title, separate from navbar */}
        <div className="py-6 text-center">
          <h2 className="text-base font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
            Through the Lens
          </h2>
        </div>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}