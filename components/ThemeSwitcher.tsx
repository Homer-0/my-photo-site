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
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'w-14 h-32 flex flex-col items-center justify-center rounded-full shadow-md transition-all duration-300 px-1 py-2',
          theme === 'light'
            ? 'bg-white text-black'
            : 'bg-gray-100 text-gray-600'
        )}
      >
        <Sun size={20} className="mb-1" />
        <span className="text-xs font-semibold transform -rotate-90 origin-center tracking-wider">
          LIGHT
        </span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'w-14 h-32 flex flex-col items-center justify-center rounded-full shadow-md transition-all duration-300 px-1 py-2',
          theme === 'dark'
            ? 'bg-white text-black'
            : 'bg-gray-100 text-gray-600'
        )}
      >
        <Moon size={20} className="mb-1" />
        <span className="text-xs font-semibold transform -rotate-90 origin-center tracking-wider">
          DARK
        </span>
      </button>
    </div>
  );
}