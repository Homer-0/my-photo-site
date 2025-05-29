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
          <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 border-b bg-white dark:bg-black">
            {/* Left: Site title */}
            <h1 className="text-lg font-bold">MANOS TZAVIDAS.</h1>

            {/* Center: Navigation (perfectly centered) */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="#">Chapters</Link>
              <Link href="#">Journal</Link>
              <Link href="#">About</Link>
            </nav>

            {/* Right: Reserved space to balance layout */}
            <div className="w-32" />
          </header>

          {children}
        </Providers>
      </body>
    </html>
  );
}