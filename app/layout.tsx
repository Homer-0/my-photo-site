import "./globals.css";
import Image from "next/image";
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
          <header className="sticky top-0 z-50 bg-white dark:bg-black px-6 pt-4 pb-9 relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200 dark:bg-gray-800 z-20" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-0">
              {/* Name on the left (desktop), top (mobile) */}
              <div className="w-full sm:w-auto sm:absolute sm:left-[-18px] flex justify-center sm:justify-start">
                <Link href="/" className="relative inline-flex z-10">
                  <Image
                    src="/logo.png"
                    alt="Manos Tzavidas logo"
                    width={220}
                    height={60}
                    className="translate-y-4 dark:invert"
                    priority
                  />
                </Link>
              </div>

              {/* Nav centered always */}
              <nav className="flex flex-wrap justify-center gap-6 sm:gap-12 text-xl font-medium items-center mt-4 sm:mt-6">
                <Link href="/">Home</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/about">About</Link>
              </nav>

              {/* Theme switcher on the right */}
              <div className="w-full sm:w-auto sm:absolute sm:right-6 flex justify-center sm:justify-end mt-4 sm:mt-6">
                <ThemeSwitcher orientation="horizontal" />
              </div>
            </div>
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
