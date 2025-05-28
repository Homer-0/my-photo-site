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
        <header className="w-full bg-white border-b px-6 py-4 flex items-center justify-between text-sm font-medium">
          <div className="text-xl font-semibold tracking-tight">
            <Link href="/">MANOS TZAVIDAS.</Link>
          </div>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="#" className="hover:underline">Chapters</Link>
            <Link href="#" className="hover:underline">Journal</Link>
            <Link href="#" className="hover:underline">About</Link>
          </nav>
        </header>
        <main className="px-4 pt-6">{children}</main>
      </body>
    </html>
  );
}