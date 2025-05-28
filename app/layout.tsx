// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manos Tzavidas",
  description: "Photography by Manos Tzavidas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r px-6 py-8 hidden md:block">
            <h1 className="text-xl font-semibold mb-8 tracking-tight">
              <Link href="/">MANOS TZAVIDAS.</Link>
            </h1>
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="#" className="hover:underline">People</Link>
              <Link href="#" className="hover:underline">Still</Link>
              <Link href="#" className="hover:underline">Rural</Link>
              <Link href="#" className="hover:underline">Documentary</Link>
              <Link href="https://www.instagram.com/manostzavidas" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}