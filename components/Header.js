import Link from 'next/link';
import {
  HomeIcon,
  ExclamationCircleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-8 h-8 hover:text-yellow-500 "
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-8 h-8 text-yellow-500 hover:text-gray-800"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  console.log(renderThemeChanger());
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
      <div className="flex space-x-4">
        <Link href={'/'} className="hidden md:inline-flex">
          <h1 className="cursor-pointer">HOME</h1>
        </Link>
        <Link href={'/about'} className="hidden md:inline-flex">
          <h1 className="cursor-pointer">ABOUT</h1>
        </Link>
        <Link href={'/about'} className="md:hidden text-lg">
          <HomeIcon className="w-6" />
        </Link>
        <Link href={'/about'} className="md:hidden text-lg">
          <ExclamationCircleIcon className="w-6" />
        </Link>
      </div>
      <div className="flex space-x-5 items-center">
        {renderThemeChanger()}
        <h1 className=" space-x-2">
          <span className="px-4 py-2 font-bold bg-orange-500 rounded-lg cursor-pointer">
            IMDb
          </span>
          <span className="hidden md:inline-block">clone</span>
        </h1>
      </div>
    </div>
  );
}
