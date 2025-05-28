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
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
      <button
        onClick={() => setTheme('dark')}
        className="w-12 h-24 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md flex flex-col justify-between items-center py-2"
      >
        <Moon size={18} />
        <span className="text-[10px] font-bold transform -rotate-90 origin-bottom tracking-widest">DARK</span>
      </button>

      <button
        onClick={() => setTheme('light')}
        className="w-12 h-24 bg-white dark:bg-gray-700 rounded-full shadow-md flex flex-col justify-between items-center py-2"
      >
        <Sun size={18} />
        <span className="text-[10px] font-bold transform -rotate-90 origin-bottom tracking-widest">LIGHT</span>
      </button>
    </div>
  );
}