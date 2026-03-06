import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Manos Tzavidas – Photography",
  description: "Photography portfolio by Manos Tzavidas",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <header
            className="sticky top-0 z-50 px-6 sm:px-10 py-5"
            style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-center gap-2">
              <Link href="/" className="font-display text-xl italic" style={{ color: "var(--ink)" }}>
                Manos Tzavidas
              </Link>
              <div className="flex items-center gap-5">
                <nav className="flex items-center gap-5">
                  {["Home", "Chapters", "Journal", "About"].map((label) => (
                    <Link
                      key={label}
                      href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                      className="label"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <ThemeSwitcher />
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex items-center justify-between">
              <Link href="/" className="font-display text-2xl italic" style={{ color: "var(--ink)" }}>
                Manos Tzavidas
              </Link>
              <nav className="flex items-center gap-10">
                {["Home", "Chapters", "Journal", "About"].map((label) => (
                  <Link
                    key={label}
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    className="label transition-opacity hover:opacity-60"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <ThemeSwitcher />
            </div>
          </header>
          <main>{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
