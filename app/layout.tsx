import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import NavLinks from "@/components/NavLinks";
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
            className="sticky top-0 z-50 px-10 py-6"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-center gap-3">
              <Link
                href="/"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                Manos Tzavidas
              </Link>
              <div className="flex items-center gap-5">
                <nav className="flex items-center gap-5">
                  <NavLinks />
                </nav>
                <ThemeSwitcher />
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex items-center justify-between">
              <Link
                href="/"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "0.85rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                Manos Tzavidas
              </Link>
              <nav className="flex items-center gap-10">
                <NavLinks />
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
