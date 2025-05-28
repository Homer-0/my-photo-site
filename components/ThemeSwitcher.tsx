// components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import clsx from 'clsx';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center rounded-full bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden w-14">
      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'flex flex-col items-center justify-center px-2 py-4 w-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700',
          theme === 'dark' && 'bg-gray-300 dark:bg-gray-600'
        )}
      >
        <Moon className="mb-1" size={18} />
        <span className="text-xs font-bold">DARK</span>
      </button>
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'flex flex-col items-center justify-center px-2 py-4 w-full transition-all hover:bg-gray-200 dark:hover:bg-gray-700',
          theme === 'light' && 'bg-white dark:bg-gray-600'
        )}
      >
        <Sun className="mb-1" size={18} />
        <span className="text-xs font-bold">LIGHT</span>
      </button>
    </div>
  );
}