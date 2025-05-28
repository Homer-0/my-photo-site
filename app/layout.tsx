"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <header className="w-full px-6 py-4 border-b border-gray-300 flex items-center justify-between">
          {/* Left: Name */}
          <div className="text-lg font-semibold tracking-widest uppercase">
            MANOS TZAVIDAS.
          </div>

          {/* Center: Navigation Links */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/chapters">Chapters</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
          </nav>

          {/* Right: Instagram */}
          <div>
            <a
              href="https://www.instagram.com/your_username_here"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </header>

        <main className="px-6 pt-8 pb-16 max-w-screen-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}