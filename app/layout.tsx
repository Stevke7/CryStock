import type { Metadata } from 'next';
import { Geist, Geist_Mono, Red_Hat_Display } from 'next/font/google';
import './globals.css';
import Navbar from './layout/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const RedHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CryStock',
  description: 'Crypto/Stock - Portfolio Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RedHatDisplay.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
