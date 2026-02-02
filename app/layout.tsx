import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "Manos Tzavidas – Photography",
  description: "Photography portfolio by Manos Tzavidas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <header className="sticky top-0 z-50 border-b bg-white dark:bg-black px-6 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-0">
              {/* Name on the left (desktop), top (mobile) */}
              <div className="w-full sm:w-auto sm:absolute sm:left-6">
                <h1 className="text-2xl font-bold whitespace-nowrap text-center sm:text-left">
                  <Link href="/">MANOS TZAVIDAS.</Link>
                </h1>
              </div>

              {/* Nav centered always */}
              <nav className="flex flex-wrap justify-center gap-6 sm:gap-12 text-xl font-medium">
                <Link href="/">Home</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}