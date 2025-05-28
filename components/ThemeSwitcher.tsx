'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
      <button
        onClick={() => setTheme('dark')}
        className={`w-14 h-24 flex flex-col justify-end items-center bg-gray-100 dark:bg-gray-800 rounded-full shadow-md transition-all`}
        aria-label="Activate Dark Mode"
      >
        <Moon size={20} className="mb-1" />
        <span className="text-[10px] font-bold rotate-[-90deg] origin-bottom whitespace-nowrap">DARK</span>
      </button>

      <button
        onClick={() => setTheme('light')}
        className={`w-14 h-24 flex flex-col justify-end items-center bg-white dark:bg-gray-700 rounded-full shadow-md transition-all`}
        aria-label="Activate Light Mode"
      >
        <Sun size={20} className="mb-1" />
        <span className="text-[10px] font-bold rotate-[-90deg] origin-bottom whitespace-nowrap">LIGHT</span>
      </button>
    </div>
  );
}