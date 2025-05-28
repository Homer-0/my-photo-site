import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manos Tzavidas",
  description: "Minimalist fine art & street photography from Copenhagen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Ensures mobile scaling works correctly */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black font-sans flex min-h-screen">
        <aside className="w-64 px-6 py-10 border-r border-gray-200 flex-shrink-0">
          <Link href="/" className="text-2xl font-bold block mb-8 leading-tight tracking-tight hover:opacity-80 transition">
            MANOS TZAVIDAS.
          </Link>

          <nav className="mb-10 space-y-2 font-semibold text-sm uppercase">
            <span className="block text-gray-400">People</span>
            <Link href="/street" className="block">Street</Link>
            <Link href="/still" className="block">Still</Link>
            <Link href="/rural" className="block">Rural</Link>
            <Link href="/documentary" className="block">Documentary</Link>
            <Link href="/philosophy" className="block">Reflections</Link> {/* Renamed */}
          </nav>

          <div className="mb-10 space-y-2 text-sm">
            <Link href="/about" className="block">About Me</Link>
            <Link href="/prints" className="block">Prints</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/media" className="block">Media</Link>
          </div>

          <div className="flex space-x-4 mt-8">
            <a
              href="https://www.instagram.com/mantzavi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
            >
              {/* Custom Instagram icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9z" />
              </svg>
            </a>
          </div>
        </aside>

        <main className="flex-1 p-10 overflow-auto">{children}</main>
      </body>
    </html>
  );
}