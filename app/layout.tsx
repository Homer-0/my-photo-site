// app/layout.tsx

import './globals.css';
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from '../components/ThemeSwitcher';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manos Tzavidas",
  description: "Photographic work by Manos Tzavidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <header className="sticky top-0 z-50 w-full border-b bg-white/70 dark:bg-black/70 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
              {/* Left: Site title */}
              <Link href="/">
                <span className="text-lg font-bold tracking-tight">MANOS TZAVIDAS.</span>
              </Link>

              {/* Center: Navigation */}
              <nav className="space-x-6 text-sm font-semibold">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="#" className="hover:underline">
                  Chapters
                </Link>
                <Link href="#" className="hover:underline">
                  Journal
                </Link>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </nav>

              {/* Right: Empty for now */}
              <div className="w-8" />
            </div>
            <div className="text-center py-2 text-sm font-medium tracking-wide uppercase">
              Recent Work
            </div>
          </header>

          {/* Floating theme switcher */}
          <ThemeSwitcher />

          {/* Page content */}
          <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}