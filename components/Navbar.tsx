'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
  <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-tight">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Manos Tzavidas logo"
              width={160}
              height={32}
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-xl font-semibold z-50 items-center">
  <Link href="/"><span>Home</span></Link>
  <Link href="/chapters"><span>Chapters</span></Link>
  <Link href="/journal"><span>Journal</span></Link>
  <Link href="/about"><span>About</span></Link>
</div>

        {/* Right: Leave empty or add social/link in future */}
        <div className="w-12" />
      </nav>
    </header>
  );
}
