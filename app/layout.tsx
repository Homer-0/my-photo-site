import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manos Tzavidas – Photography',
  description: 'Photography portfolio by Manos Tzavidas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              {/* Left: Theme Switcher */}
              <div>
                <ThemeSwitcher />
              </div>

              {/* Center: Navigation */}
              <div className="flex space-x-6 text-sm sm:text-base font-medium tracking-wide">
                <Link href="/">Home</Link>
                <Link href="#">Chapters</Link>
                <Link href="#">Journal</Link>
                <Link href="#">About</Link>
              </div>

              {/* Right: Empty for now */}
              <div className="w-6" />
            </div>
          </header>

          {/* "Recent Work" heading */}
          <div className="text-center text-lg font-semibold mt-8 mb-4">
            Recent work
          </div>

          {children}
        </Providers>
      </body>
    </html>
  );
}