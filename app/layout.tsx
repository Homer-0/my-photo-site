import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Manos Tzavidas – Photography",
  description: "Photography portfolio by Manos Tzavidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Providers>
          <header className="sticky top-0 z-40 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black px-4 py-4">
            <div className="flex justify-between items-center max-w-5xl mx-auto">
              <div className="text-lg font-bold">MANOS TZAVIDAS.</div>
              <nav className="space-x-6 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>
          </header>
          <ThemeSwitcher />
          <main className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-center font-semibold text-lg mb-6">Recent work</h2>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}