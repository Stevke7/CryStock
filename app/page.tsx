import Image from 'next/image';
import { ArrowRightCircleIcon } from 'lucide-react';
import Navbar from './layout/Navbar';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-red-hat-display)]">
      <Navbar />
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-col gap-[32px] justify-between h-[500px] w-1/2 py-2">
          <div className="flex flex-col gap-8">
            <Image
              className="b"
              src="/logo/logoDark.png"
              alt="Hatton logo"
              width={200}
              height={200}
            />
            <p className="leading-[68px]">
              Track Your Crypto & Stocks in One Smart Dashboard
            </p>
            <p className="text-xl font-italic text-slate-200">
              Hatton is the ultimate portfolio dashboard for tracking both
              crypto and stock investments in one place. Get real-time market
              data, performance insights, and personalized alerts—all designed
              to help you make smarter financial decisions. Whether you're
              trading Bitcoin, Ethereum, or blue-chip stocks, Hatton keeps you
              in control of your wealth.
            </p>
          </div>

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium font-RedHatDisplay text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-1/3"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRightCircleIcon />
            <p className="text-lg">Try it now</p>
          </a>
        </div>

        <div className="flex gap-4 items-start flex-col w-1/2 h-[400px]">
          <Image
            className="rounded-xl"
            src="/Dashboard.png"
            alt="CryStock dashboard example"
            width={800}
            height={400}
          />
        </div>
      </main>
    </div>
  );
}
