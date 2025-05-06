'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoginPage from '../login/page';

export default function Navbar(): React.ReactElement {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        shrink && 'shrink'
      } flex flex-row justify-between px-8 sm:px-20 py-4 background-transparent`}
    >
      <Image
        src="/logo/faviconDark.png"
        alt="favicon logo"
        width={40}
        height={40}
      />
      <div className="flex flex-row gap-4">
        <Link
          href="/login"
          className="px-8 py-2 bg-blue-500  rounded-md font-semibold text-lg cursor-pointer hover:opacity-50"
        >
          Login
        </Link>
        <div className="px-8 py-2 bg-blue-500  rounded-md font-semibold text-lg cursor-pointer hover:opacity-50">
          Register
        </div>
      </div>
    </header>
  );
}
