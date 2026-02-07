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
          <header className="sticky top-0 z-50 bg-white dark:bg-black px-4 py-1 sm:px-6 sm:py-6 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200 dark:bg-gray-800 z-20" />
            <div className="sm:hidden">
              <div className="flex justify-center">
                <Link href="/" className="relative inline-flex z-10">
                  <Image
                    src="/logo.png"
                    alt="Manos Tzavidas logo"
                    width={100}
                    height={50}
                    className="w-[66px] h-auto -translate-y-[1px] dark:invert"
                    priority
                  />
                </Link>
              </div>
              <nav className="mt-0.5 flex flex-nowrap items-center justify-center gap-3 text-sm font-medium">
                <Link href="/" className="whitespace-nowrap">Home</Link>
                <Link href="/chapters" className="whitespace-nowrap">Chapters</Link>
                <Link href="/journal" className="whitespace-nowrap">Journal</Link>
                <Link href="/about" className="whitespace-nowrap">About</Link>
                <ThemeSwitcher orientation="horizontal" />
              </nav>
            </div>

            <div className="hidden sm:flex relative sm:items-center sm:justify-center sm:gap-0">
              <div className="sm:w-auto sm:absolute sm:left-10 flex sm:justify-start">
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

              <nav className="flex flex-wrap justify-center gap-12 text-xl font-medium items-center">
                <Link href="/">Home</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/about">About</Link>
              </nav>

              <div className="sm:w-auto sm:absolute sm:right-6 flex sm:justify-end">
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
