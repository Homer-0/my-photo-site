'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-tight">
          <Link href="/">MANOS TZAVIDAS.</Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="space-x-8 text-sm font-medium hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/chapters">Chapters</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Right: Leave empty or add social/link in future */}
        <div className="w-12" />
      </nav>
    </header>
  );
}