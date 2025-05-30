import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";

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
            <nav className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 py-4 text-[15px] font-medium">
  <Link href="/">Home</Link>
  <Link href="/chapters">Chapters</Link>
  <Link href="/journal">Journal</Link>  
  <Link href="/about">About</Link>      
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