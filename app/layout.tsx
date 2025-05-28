import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="bg-white text-black">
        <header className="border-b border-neutral-300 px-6 py-4">
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

            {/* Right: Empty (Instagram icon removed) */}
            <div className="w-6" />
          </div>
        </header>

        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}