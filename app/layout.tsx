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
            className="sticky top-0 z-50 px-10 py-3"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-center gap-3">
              <Link
                href="/"
                style={{
                  fontFamily: "'Courier New', monospace",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1,
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.08em" }}>M</span>
                <span style={{ fontSize: "28px", fontWeight: 200, opacity: 0.45, lineHeight: 1, position: "relative", top: "1px", margin: "0 1px" }}>/</span>
                <span style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.08em" }}>T</span>
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
              <div className="flex items-center gap-8">
                <Link
                  href="/"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: 1,
                    transform: "scale(1.4)",
                    transformOrigin: "left center",
                  }}
                >
                  <span style={{ fontSize: "26px", fontWeight: 300, letterSpacing: "0.08em" }}>M</span>
                  <span style={{ fontSize: "52px", fontWeight: 100, opacity: 0.35, lineHeight: 1, position: "relative", top: "1px", margin: "0 -3px", display: "inline-block", transform: "scaleX(0.4)" }}>/</span>
                  <span style={{ fontSize: "26px", fontWeight: 300, letterSpacing: "0.08em" }}>T</span>
                </Link>
                <nav className="flex items-center gap-8" style={{ marginLeft: "28px" }}>
                  <NavLinks />
                </nav>
              </div>
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
