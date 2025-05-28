'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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
    <div className="fixed top-1/2 left-2 -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'w-12 h-12 rounded-full flex flex-col justify-center items-center shadow-md',
          theme === 'light' ? 'bg-white text-black' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
        )}
      >
        <Sun className="w-4 h-4" />
        <span className="text-xs rotate-[-90deg] font-bold">LIGHT</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'w-12 h-12 rounded-full flex flex-col justify-center items-center shadow-md',
          theme === 'dark' ? 'bg-white text-black' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
        )}
      >
        <Moon className="w-4 h-4" />
        <span className="text-xs rotate-[-90deg] font-bold">DARK</span>
      </button>
    </div>
  );
}