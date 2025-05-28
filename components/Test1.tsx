'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 rounded-full bg-gray-100 p-2 shadow-lg dark:bg-neutral-900">
      <button
        onClick={() => setTheme('light')}
        className={`flex flex-col items-center justify-center rounded-full p-2 text-xs font-bold ${
          theme === 'light' ? 'bg-white text-black shadow' : 'text-gray-400'
        }`}
      >
        <Sun className="mb-1 h-5 w-5" />
        LIGHT
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`flex flex-col items-center justify-center rounded-full p-2 text-xs font-bold ${
          theme === 'dark' ? 'bg-neutral-800 text-white shadow' : 'text-gray-400'
        }`}
      >
        <Moon className="mb-1 h-5 w-5" />
        DARK
      </button>
    </div>
  );
}