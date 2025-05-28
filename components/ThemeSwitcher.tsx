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
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-1">
      <button
        onClick={() => setTheme('light')}
        className={`flex flex-col items-center justify-center w-14 h-20 rounded-full border text-xs font-bold tracking-wider ${
          theme === 'light' ? 'bg-white text-black' : 'bg-gray-100 text-gray-600'
        } shadow transition-all`}
      >
        <Sun size={20} className="mb-1" />
        LIGHT
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`flex flex-col items-center justify-center w-14 h-20 rounded-full border text-xs font-bold tracking-wider ${
          theme === 'dark' ? 'bg-white text-black' : 'bg-gray-100 text-gray-600'
        } shadow transition-all`}
      >
        <Moon size={20} className="mb-1" />
        DARK
      </button>
    </div>
  );
}