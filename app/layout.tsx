import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <body className="bg-white text-black font-sans flex min-h-screen">
        <aside className="w-64 px-6 py-10 border-r border-gray-200 flex flex-col justify-between">
          <div>
            <Link href="/" className="block text-xl font-bold mb-6 uppercase tracking-wide">
          MANOS TZAVIDAS.
            </Link>

            <nav className="mb-10 space-y-3 font-semibold text-sm uppercase">
              <span className="block text-gray-400">People</span>
              <Link href="/street" className="block">Street</Link>
              <Link href="/still" className="block">Still</Link>
              <Link href="/rural" className="block">Rural</Link>
              <Link href="/documentary" className="block">Documentary</Link>
              <Link href="/reflections" className="block">Reflections</Link>
              <Link href="/prints" className="block">Prints</Link>
            </nav>

            <div className="space-y-2 text-sm leading-relaxed">
              <Link href="/about" className="block">About Me</Link>
              <Link href="/contact" className="block">Contact</Link>
              <Link href="/media" className="block">Media</Link>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://www.instagram.com/mantzavi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-black hover:text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>
          </div>
        </aside>

        <main className="flex-1 p-10">{children}</main>
      </body>
    </html>
  );
}