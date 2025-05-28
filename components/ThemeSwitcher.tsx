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
    <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-2 rounded-full bg-gray-100 p-2 dark:bg-gray-800 shadow-md transition-colors">
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'flex items-center justify-center w-12 h-12 rounded-full font-bold text-xs transform transition-all duration-200',
          theme === 'light'
            ? 'bg-white text-black shadow-md'
            : 'text-gray-500'
        )}
      >
        <Sun className="w-4 h-4 mr-1" />
        <span className="rotate-[-90deg]">Light</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'flex items-center justify-center w-12 h-12 rounded-full font-bold text-xs transform transition-all duration-200',
          theme === 'dark'
            ? 'bg-white text-black shadow-md'
            : 'text-gray-500'
        )}
      >
        <Moon className="w-4 h-4 mr-1" />
        <span className="rotate-[-90deg]">Dark</span>
      </button>
    </div>
  );
}