import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Manos Tzavidas",
  description: "Photography by Manos Tzavidas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-white text-black">
        {/* Sidebar */}
        <aside className="w-64 p-6 border-r border-gray-200 hidden md:block">
          <h1 className="text-xl font-bold mb-8 tracking-tight">MANOS TZAVIDAS</h1>
          <nav className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">CHAPTERS</p>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link href="/">
                    <span className="hover:underline">All Photos</span>
                  </Link>
                </li>
                {/* Add future albums here: */}
                {/* <li><Link href="/projects/portraits">Portraits</Link></li> */}
                {/* <li><Link href="/projects/copenhagen">Copenhagen</Link></li> */}
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <Link href="https://www.instagram.com/yourprofile" target="_blank" className="text-sm text-gray-600 hover:underline">
                Instagram
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}