import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Manos Tzavidas – Photography",
  description: "Photography portfolio by Manos Tzavidas",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <header className="sticky top-0 z-50 bg-white dark:bg-black px-4 py-2 sm:px-6 sm:py-6 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200 dark:bg-gray-800 z-20" />
            <div className="relative min-h-[72px] sm:min-h-0 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-0">
              {/* Name on the left (desktop), top (mobile) */}
              <div className="absolute left-0 top-0 sm:w-auto sm:absolute sm:left-10 sm:top-auto flex justify-start sm:justify-start">
                <Link href="/" className="relative inline-flex z-10">
                  <Image
                    src="/logo.png"
                    alt="Manos Tzavidas logo"
                    width={100}
                    height={50}
                    className="-translate-y-[1px] dark:invert"
                    priority
                  />
                </Link>
              </div>

              {/* Nav centered always */}
              <nav className="pt-9 sm:pt-0 flex flex-wrap justify-center gap-4 sm:gap-12 text-base sm:text-xl font-medium items-center">
                <Link href="/">Home</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/about">About</Link>
              </nav>

              {/* Theme switcher on the right */}
              <div className="absolute right-0 top-0 sm:w-auto sm:absolute sm:right-6 sm:top-auto flex justify-end sm:justify-end">
                <ThemeSwitcher orientation="horizontal" />
              </div>
            </div>
          </header>
          <main>{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
