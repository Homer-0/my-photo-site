'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-tight">
          <Link href="/"><span>MANOS TZAVIDAS.</span></Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-medium z-50 items-center">
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